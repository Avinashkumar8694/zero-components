import { AttributeType, RendererAttribute, RendererComponent, UserInterfaceType, applyGlobalStyles } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

@RendererComponent({ name: "zero-flow-node-start", version: "1.0.0", title: "Start Node", elementSelector: "zero-flow-node-start", group: "Flow Nodes", iconName: "flow-start-node.png" })
@applyGlobalStyles()
export class ZeroFlowNodeStart extends LitElement {
  static styles = css`:host{display:block}.node{padding:14px 16px;border-radius:16px;border:1px solid rgba(37,99,235,.22);background:linear-gradient(135deg,#eff6ff,#fff);color:#0f172a}.eyebrow{font-size:.72rem;text-transform:uppercase;letter-spacing:.12em;color:#2563eb;font-weight:700}`;
  @property({ type: String }) entryRole = "default";
  @property({ type: String }) entryUsage = "";
  @RendererAttribute({ attributeType: AttributeType.PROPERTY, uiComponentType: UserInterfaceType.TEXT_INPUT, displayLabel: "Entry Role", fieldMappings: "entryRole" }) get entryRoleConfig() { return this.entryRole; } set entryRoleConfig(value: string) { this.entryRole = value || "default"; }
  @RendererAttribute({ attributeType: AttributeType.PROPERTY, uiComponentType: UserInterfaceType.TEXTAREA, displayLabel: "Usage Notes", fieldMappings: "entryUsage" }) get entryUsageConfig() { return this.entryUsage; } set entryUsageConfig(value: string) { this.entryUsage = value || ""; }
  render() { return html`<div class="node"><div class="eyebrow">Start</div><strong>${this.entryRole}</strong><div>${this.entryUsage || "Entry point for routes, dialogs, events, or services."}</div></div>`; }
}
