import { AttributeType, RendererAttribute, RendererComponent, UserInterfaceType, applyGlobalStyles } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

@RendererComponent({ name: "zero-flow-node-email", version: "1.0.0", title: "Email Node", elementSelector: "zero-flow-node-email", group: "Flow Nodes", iconName: "flow-email-node.png" })
@applyGlobalStyles()
export class ZeroFlowNodeEmail extends LitElement {
  static styles = css`:host{display:block}.node{padding:14px 16px;border-radius:16px;border:1px solid rgba(217,119,6,.2);background:#fffbeb;color:#0f172a}.eyebrow{font-size:.72rem;text-transform:uppercase;letter-spacing:.12em;color:#b45309;font-weight:700}`;
  @property({ type: String }) template = "notification";
  @property({ type: String }) to = "{{input.email}}";
  @property({ type: String }) subject = "";
  @RendererAttribute({ attributeType: AttributeType.PROPERTY, uiComponentType: UserInterfaceType.TEXT_INPUT, displayLabel: "Template", fieldMappings: "template" }) get templateConfig() { return this.template; } set templateConfig(value: string) { this.template = value || "notification"; }
  @RendererAttribute({ attributeType: AttributeType.PROPERTY, uiComponentType: UserInterfaceType.TEXT_INPUT, displayLabel: "To", fieldMappings: "to" }) get toConfig() { return this.to; } set toConfig(value: string) { this.to = value || "{{input.email}}"; }
  @RendererAttribute({ attributeType: AttributeType.PROPERTY, uiComponentType: UserInterfaceType.TEXT_INPUT, displayLabel: "Subject", fieldMappings: "subject" }) get subjectConfig() { return this.subject; } set subjectConfig(value: string) { this.subject = value || ""; }
  render() { return html`<div class="node"><div class="eyebrow">Email</div><strong>${this.template}</strong><div>${this.to}</div><div>${this.subject}</div></div>`; }
}
