import { AttributeType, RendererAttribute, RendererComponent, UserInterfaceType, applyGlobalStyles } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

@RendererComponent({ name: "zero-flow-node-async", version: "1.0.0", title: "Async Node", elementSelector: "zero-flow-node-async", group: "Flow Nodes", iconName: "flow-async-node.png" })
@applyGlobalStyles()
export class ZeroFlowNodeAsync extends LitElement {
  static styles = css`:host{display:block}.node{padding:14px 16px;border-radius:16px;border:1px solid rgba(8,145,178,.2);background:#ecfeff;color:#0f172a}.eyebrow{font-size:.72rem;text-transform:uppercase;letter-spacing:.12em;color:#0e7490;font-weight:700}`;
  @property({ type: String }) strategy = "queue";
  @property({ type: Number }) delayMs = 0;
  @RendererAttribute({ attributeType: AttributeType.PROPERTY, uiComponentType: UserInterfaceType.DROPDOWN, displayLabel: "Strategy", fieldMappings: "strategy", optionItems: [{ label: "Queue", value: "queue" }, { label: "Debounce", value: "debounce" }, { label: "Retry", value: "retry" }, { label: "Schedule", value: "schedule" }] }) get strategyConfig() { return this.strategy; } set strategyConfig(value: string) { this.strategy = value || "queue"; }
  @RendererAttribute({ attributeType: AttributeType.PROPERTY, uiComponentType: UserInterfaceType.NUMBER_INPUT, displayLabel: "Delay (ms)", fieldMappings: "delayMs" }) get delayMsConfig() { return this.delayMs; } set delayMsConfig(value: number) { this.delayMs = Number(value || 0); }
  render() { return html`<div class="node"><div class="eyebrow">Async</div><strong>${this.strategy}</strong><div>${this.delayMs} ms</div></div>`; }
}
