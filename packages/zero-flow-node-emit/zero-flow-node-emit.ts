import { AttributeType, RendererAttribute, RendererComponent, UserInterfaceType, applyGlobalStyles } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

@RendererComponent({ name: "zero-flow-node-emit", version: "1.0.0", title: "Emit Node", elementSelector: "zero-flow-node-emit", group: "Flow Nodes", iconName: "flow-emit-node.png" })
@applyGlobalStyles()
export class ZeroFlowNodeEmit extends LitElement {
  static styles = css`:host{display:block}.node{padding:14px 16px;border-radius:16px;border:1px solid rgba(16,185,129,.2);background:#ecfdf5;color:#0f172a}.eyebrow{font-size:.72rem;text-transform:uppercase;letter-spacing:.12em;color:#059669;font-weight:700}`;
  @property({ type: String }) eventName = "flow.completed";
  @property({ type: String }) payload = "result";
  @RendererAttribute({ attributeType: AttributeType.PROPERTY, uiComponentType: UserInterfaceType.TEXT_INPUT, displayLabel: "Event Name", fieldMappings: "eventName" }) get eventNameConfig() { return this.eventName; } set eventNameConfig(value: string) { this.eventName = value || "flow.completed"; }
  @RendererAttribute({ attributeType: AttributeType.PROPERTY, uiComponentType: UserInterfaceType.TEXTAREA, displayLabel: "Payload", fieldMappings: "payload" }) get payloadConfig() { return this.payload; } set payloadConfig(value: string) { this.payload = value || "result"; }
  render() { return html`<div class="node"><div class="eyebrow">Emit</div><strong>${this.eventName}</strong><div>${this.payload}</div></div>`; }
}
