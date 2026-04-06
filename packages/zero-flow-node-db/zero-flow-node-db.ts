import { AttributeType, RendererAttribute, RendererComponent, UserInterfaceType, applyGlobalStyles } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

@RendererComponent({ name: "zero-flow-node-db", version: "1.0.0", title: "DB Node", elementSelector: "zero-flow-node-db", group: "Flow Nodes", iconName: "flow-db-node.png" })
@applyGlobalStyles()
export class ZeroFlowNodeDb extends LitElement {
  static styles = css`:host{display:block}.node{padding:14px 16px;border-radius:16px;border:1px solid rgba(14,116,144,.2);background:#f0fdfa;color:#0f172a}.eyebrow{font-size:.72rem;text-transform:uppercase;letter-spacing:.12em;color:#0f766e;font-weight:700}`;
  @property({ type: String }) operation = "query";
  @property({ type: String }) source = "primary-db";
  @property({ type: String }) model = "";
  @RendererAttribute({ attributeType: AttributeType.PROPERTY, uiComponentType: UserInterfaceType.DROPDOWN, displayLabel: "Operation", fieldMappings: "operation", optionItems: [{ label: "Query", value: "query" }, { label: "Insert", value: "insert" }, { label: "Update", value: "update" }, { label: "Delete", value: "delete" }] }) get operationConfig() { return this.operation; } set operationConfig(value: string) { this.operation = value || "query"; }
  @RendererAttribute({ attributeType: AttributeType.PROPERTY, uiComponentType: UserInterfaceType.TEXT_INPUT, displayLabel: "Data Source", fieldMappings: "source" }) get sourceConfig() { return this.source; } set sourceConfig(value: string) { this.source = value || "primary-db"; }
  @RendererAttribute({ attributeType: AttributeType.PROPERTY, uiComponentType: UserInterfaceType.TEXT_INPUT, displayLabel: "Model", fieldMappings: "model" }) get modelConfig() { return this.model; } set modelConfig(value: string) { this.model = value || ""; }
  render() { return html`<div class="node"><div class="eyebrow">DB</div><strong>${this.operation}</strong><div>${this.source}${this.model ? ` • ${this.model}` : ""}</div></div>`; }
}
