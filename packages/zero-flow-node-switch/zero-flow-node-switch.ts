// @environment common
import { AttributeType, RendererAttribute, RendererComponent, UserInterfaceType, applyGlobalStyles } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

@RendererComponent({ name: "zero-flow-node-switch", version: "1.0.0", title: "Switch Node", elementSelector: "zero-flow-node-switch", group: "Flow Nodes", iconName: "flow-switch-node.png" })
@applyGlobalStyles()
export class ZeroFlowNodeSwitch extends LitElement {
  static styles = css`:host{display:block}.node{padding:14px 16px;border-radius:16px;border:1px solid rgba(124,58,237,.18);background:#f5f3ff;color:#0f172a}.eyebrow{font-size:.72rem;text-transform:uppercase;letter-spacing:.12em;color:#7c3aed;font-weight:700}`;
  @property({ type: String }) expression = "input.status === 'ok'";
  @RendererAttribute({ attributeType: AttributeType.PROPERTY, uiComponentType: UserInterfaceType.TEXTAREA, displayLabel: "Expression", fieldMappings: "expression" }) get expressionConfig() { return this.expression; } set expressionConfig(value: string) { this.expression = value || "input.status === 'ok'"; }
  render() { return html`<div class="node"><div class="eyebrow">Switch</div><strong>Branch</strong><div>${this.expression}</div></div>`; }
}
