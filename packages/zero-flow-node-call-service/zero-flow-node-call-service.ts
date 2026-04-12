// @environment common
import { AttributeType, RendererAttribute, RendererComponent, UserInterfaceType, applyGlobalStyles } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

@RendererComponent({ name: "zero-flow-node-call-service", version: "1.0.0", title: "Call Service Node", elementSelector: "zero-flow-node-call-service", group: "Flow Nodes", iconName: "flow-call-service-node.png" })
@applyGlobalStyles()
export class ZeroFlowNodeCallService extends LitElement {
  static styles = css`:host{display:block}.node{padding:14px 16px;border-radius:16px;border:1px solid rgba(37,99,235,.22);background:#eff6ff;color:#0f172a}.eyebrow{font-size:.72rem;text-transform:uppercase;letter-spacing:.12em;color:#1d4ed8;font-weight:700}`;
  @property({ type: String }) serviceId = "";
  @property({ type: String }) startNodeId = "";
  @RendererAttribute({ attributeType: AttributeType.PROPERTY, uiComponentType: UserInterfaceType.TEXT_INPUT, displayLabel: "Service Id", fieldMappings: "serviceId" }) get serviceIdConfig() { return this.serviceId; } set serviceIdConfig(value: string) { this.serviceId = value || ""; }
  @RendererAttribute({ attributeType: AttributeType.PROPERTY, uiComponentType: UserInterfaceType.TEXT_INPUT, displayLabel: "Start Node Id", fieldMappings: "startNodeId" }) get startNodeIdConfig() { return this.startNodeId; } set startNodeIdConfig(value: string) { this.startNodeId = value || ""; }
  render() { return html`<div class="node"><div class="eyebrow">Call Service</div><strong>${this.serviceId || "Choose service"}</strong><div>${this.startNodeId || "Choose start node"}</div></div>`; }
}
