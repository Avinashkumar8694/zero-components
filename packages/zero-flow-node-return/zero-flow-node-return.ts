// @environment common
import { AttributeType, RendererAttribute, RendererComponent, UserInterfaceType, applyGlobalStyles } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

@RendererComponent({ name: "zero-flow-node-return", version: "1.0.0", title: "Return Node", elementSelector: "zero-flow-node-return", group: "Flow Nodes", iconName: "flow-return-node.png" })
@applyGlobalStyles()
export class ZeroFlowNodeReturn extends LitElement {
  static styles = css`:host{display:block}.node{padding:14px 16px;border-radius:16px;border:1px solid rgba(220,38,38,.18);background:#fef2f2;color:#0f172a}.eyebrow{font-size:.72rem;text-transform:uppercase;letter-spacing:.12em;color:#dc2626;font-weight:700}`;
  @property({ type: String }) value = "result";
  @RendererAttribute({ attributeType: AttributeType.PROPERTY, uiComponentType: UserInterfaceType.TEXTAREA, displayLabel: "Return Value", fieldMappings: "value" }) get valueConfig() { return this.value; } set valueConfig(value: string) { this.value = value || "result"; }
  render() { return html`<div class="node"><div class="eyebrow">Return</div><strong>${this.value}</strong></div>`; }
}
