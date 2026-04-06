import { AttributeType, RendererAttribute, RendererComponent, UserInterfaceType, applyGlobalStyles } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

@RendererComponent({ name: "zero-flow-node-listen", version: "1.0.0", title: "Listen Node", elementSelector: "zero-flow-node-listen", group: "Flow Nodes", iconName: "flow-listen-node.png" })
@applyGlobalStyles()
export class ZeroFlowNodeListen extends LitElement {
  static styles = css`:host{display:block}.node{padding:14px 16px;border-radius:16px;border:1px solid rgba(79,70,229,.18);background:#eef2ff;color:#0f172a}.eyebrow{font-size:.72rem;text-transform:uppercase;letter-spacing:.12em;color:#4f46e5;font-weight:700}`;
  @property({ type: String }) channel = "events.user.updated";
  @RendererAttribute({ attributeType: AttributeType.PROPERTY, uiComponentType: UserInterfaceType.TEXT_INPUT, displayLabel: "Channel", fieldMappings: "channel" }) get channelConfig() { return this.channel; } set channelConfig(value: string) { this.channel = value || "events.user.updated"; }
  render() { return html`<div class="node"><div class="eyebrow">Listen</div><strong>${this.channel}</strong></div>`; }
}
