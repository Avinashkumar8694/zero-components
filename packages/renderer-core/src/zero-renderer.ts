import { LitElement, html, PropertyValues } from "lit";
import { property, customElement } from "lit/decorators.js";
import { RendererComponent, applyGlobalStyles } from "zero-annotation";
import { SchemaRenderer } from "./index";
import type { StudioSchema, UIComponentNode } from "@zero/schema";

@RendererComponent({
  name: "zero-renderer",
  version: "1.0.0",
  title: "Zero Renderer",
  elementSelector: "zero-renderer",
  group: "System",
  iconName: "profile-icon.png",
})
@applyGlobalStyles()
@customElement("zero-renderer")
export class ZeroRenderer extends LitElement {
  @property({ type: Object }) schema?: StudioSchema;
  @property({ type: String }) path?: string;
  @property({ type: Object }) node?: UIComponentNode;
  @property({ type: String, attribute: "node-id" }) nodeId?: string;
  @property({ type: Object }) state?: any;
  @property({ type: Object }) api?: any;

  private renderer!: SchemaRenderer;
  private nodesById = new Map<string, UIComponentNode>();
  private triggerNodes: UIComponentNode[] = [];
  private _reactiveState: any = null;

  constructor() {
    super();
    this.renderer = new SchemaRenderer(this.getOrCreateContext());
  }

  willUpdate(changedProperties: PropertyValues) {
    if (
      changedProperties.has("schema") ||
      changedProperties.has("node") ||
      changedProperties.has("nodeId") ||
      changedProperties.has("path")
    ) {
      this.rebuildIndex();
      
      if (this.schema && !this.state) {
        const activePath = this.path || "/";
        const rawState = this.renderer.createBindingScope(this.schema, activePath);
        this._reactiveState = this.makeStateReactive(rawState);
      }
    }

    if (changedProperties.has("state") && this.state) {
      this._reactiveState = this.makeStateReactive(this.state);
    }
  }

  protected override updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    this.wireEvents();
  }

  private rebuildIndex() {
    this.nodesById.clear();
    this.triggerNodes = [];
    
    const rootNode = this.getActiveNode();
    if (rootNode) {
      this.indexNodes(rootNode);
    }
  }

  private indexNodes(node: UIComponentNode) {
    if (!node) return;
    this.nodesById.set(node.id, node);
    if (node.triggers && node.triggers.length > 0) {
      this.triggerNodes.push(node);
    }
    if (node.children) {
      for (const child of node.children) {
        this.indexNodes(child);
      }
    }
  }

  private getActiveNode(): UIComponentNode | null {
    if (this.node) {
      return this.node;
    }
    if (!this.schema) {
      return null;
    }
    if (this.nodeId) {
      return this.nodesById.get(this.nodeId) || null;
    }
    // Route matching mode
    return this.renderer.resolveRoute(this.schema, this.path || "/");
  }

  private getOrCreateContext() {
    return {
      registry: {
        ensureComponentLoaded: async (componentName: string, version: string) => {
          const tagName = `${componentName.replace(/^@[^/]+\//, "")}-${version}`;
          if (!customElements.get(tagName)) {
            try {
              await customElements.whenDefined(tagName);
            } catch (e) {
              console.warn(`[ZeroRenderer] Could not resolve component tag: ${tagName}`, e);
            }
          }
        }
      },
      navigate: (path: string) => {
        if (this.api?.navigate) {
          this.api.navigate(path);
        } else {
          this.path = path;
          this.dispatchEvent(new CustomEvent("route-change", { detail: { path }, bubbles: true, composed: true }));
        }
      },
      emit: (eventName: string, payload?: unknown) => {
        if (this.api?.emit) {
          this.api.emit(eventName, payload);
        } else {
          this.dispatchEvent(new CustomEvent(eventName, { detail: payload, bubbles: true, composed: true }));
        }
      }
    };
  }

  private makeStateReactive(state: any) {
    if (!state || typeof state !== "object") return state;
    
    const self = this;
    const handler: ProxyHandler<any> = {
      set(target, prop, value, receiver) {
        const result = Reflect.set(target, prop, value, receiver);
        self.requestUpdate();
        return result;
      },
      get(target, prop, receiver) {
        const val = Reflect.get(target, prop, receiver);
        if (val && typeof val === "object" && !val.__isProxy) {
          Object.defineProperty(val, "__isProxy", { value: true, enumerable: false, configurable: true });
          return new Proxy(val, handler);
        }
        return val;
      }
    };
    
    return new Proxy(state, handler);
  }

  private wireEvents() {
    if (!this.schema && !this.node) return;
    
    // Wire events only for nodes in the trigger list
    for (const node of this.triggerNodes) {
      const el = this.renderRoot.querySelector(`[data-node-id="${node.id}"]`);
      if (el instanceof HTMLElement) {
        this.wireSingleNodeEvents(el, node);
      }
    }
  }

  private wireSingleNodeEvents(element: HTMLElement, node: UIComponentNode): void {
    const triggers = node.triggers ?? [];
    for (const trigger of triggers) {
      const eventName = trigger.event;
      if (!eventName) continue;

      const listenerKey = `__zero_listener_${eventName}`;
      if ((element as any)[listenerKey]) {
        element.removeEventListener(eventName, (element as any)[listenerKey]);
      }

      const listener = (domEvent: Event) => {
        this.handleNodeTrigger(trigger, domEvent, node).catch((err) => {
          console.warn(`[ZeroRenderer] Trigger execution error:`, err);
        });
      };

      (element as any)[listenerKey] = listener;
      element.addEventListener(eventName, listener);
    }
  }

  private async handleNodeTrigger(
    trigger: any,
    domEvent: Event,
    node: UIComponentNode
  ): Promise<void> {
    if (this.api?.handleTrigger) {
      await this.api.handleTrigger({ trigger, event: domEvent, node });
      return;
    }

    const input = this.buildTriggerInput(trigger, domEvent, node);

    if (trigger.condition) {
      try {
        const condFn = new Function("input", "event", `"use strict"; return (${trigger.condition});`);
        if (!condFn(input, domEvent)) {
          return;
        }
      } catch {
        return;
      }
    }

    this.dispatchEvent(new CustomEvent("zero-trigger", {
      detail: { trigger, input, event: domEvent, node },
      bubbles: true,
      composed: true
    }));

    if (trigger.targetType === "action" || trigger.targetType === "navigate") {
      if (trigger.targetType === "navigate" || trigger.type === "navigate") {
        const path = trigger.config?.path ?? trigger.targetId;
        if (path) {
          this.getOrCreateContext().navigate(String(path));
        }
      }
    }
  }

  private buildTriggerInput(trigger: any, domEvent: Event, node: UIComponentNode): any {
    const input: Record<string, any> = {};
    let eventValue: any = undefined;

    if (domEvent.target instanceof HTMLInputElement) {
      if (domEvent.target.type === "checkbox") {
        eventValue = domEvent.target.checked;
      } else {
        eventValue = domEvent.target.value;
      }
    } else if (domEvent.target instanceof HTMLElement) {
      eventValue = (domEvent.target as any).value ?? (domEvent.target as any).checked;
    }

    input.value = eventValue;
    input.event = domEvent;
    
    if (trigger.inputMappings) {
      for (const mapping of trigger.inputMappings) {
        if (mapping.source === "event.value") {
          input[mapping.target] = eventValue;
        }
      }
    }

    return input;
  }

  render() {
    const activeNode = this.getActiveNode();
    if (!activeNode) {
      return html`<div>No active schema or node to render.</div>`;
    }

    const stateToUse = this._reactiveState || {};
    const rendered = this.renderer.renderNode(activeNode, stateToUse);

    if (this.schema?.theme) {
      const themeStyle = this.renderer.createThemeStyle(this.schema.theme);
      return html`
        <div style=${themeStyle}>
          ${rendered}
        </div>
      `;
    }

    return rendered;
  }
}
