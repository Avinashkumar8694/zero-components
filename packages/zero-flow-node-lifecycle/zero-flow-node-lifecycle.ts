import { AttributeType, RendererAttribute, RendererComponent, UserInterfaceType, applyGlobalStyles } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

@RendererComponent({ name: "zero-flow-node-lifecycle", version: "1.0.0", title: "Lifecycle", elementSelector: "zero-flow-node-lifecycle", group: "Flow Nodes", iconName: "flow-start-node.png" })
@applyGlobalStyles()
export class ZeroFlowNodeLifecycle extends LitElement {
  static styles = css`:host{display:block}.node{padding:14px 16px;border-radius:16px;border:1px solid rgba(139,92,246,.22);background:linear-gradient(135deg,#f5f3ff,#fff);color:#0f172a}.eyebrow{font-size:.72rem;text-transform:uppercase;letter-spacing:.12em;color:#8b5cf6;font-weight:700}`;
  @property({ type: String }) hookType = "onInit";
  @property({ type: String }) description = "";
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Lifecycle Hook",
    fieldMappings: "hookType",
    optionItems: [
      { value: "onInit", label: "onInit" },
      { value: "onDestroy", label: "onDestroy" },
      { value: "onChanges", label: "onChanges" },
      { value: "beforeRouteEnter", label: "beforeRouteEnter" },
      { value: "afterRender", label: "afterRender" }
    ]
  }) get hookTypeConfig() { return this.hookType; } set hookTypeConfig(value: string) { this.hookType = value || "onInit"; }
  @RendererAttribute({ attributeType: AttributeType.PROPERTY, uiComponentType: UserInterfaceType.TEXTAREA, displayLabel: "Description", fieldMappings: "description" }) get descriptionConfig() { return this.description; } set descriptionConfig(value: string) { this.description = value || ""; }
  render() { return html`<div class="node"><div class="eyebrow">Lifecycle</div><strong>${this.hookType}</strong><div style="font-size: 0.8em; margin-top: 4px; color: #64748b;">${this.description || "Triggers on page lifecycle events."}</div></div>`; }
}
