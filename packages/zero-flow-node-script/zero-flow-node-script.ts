import { AttributeType, RendererAttribute, RendererComponent, UserInterfaceType, applyGlobalStyles } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

@RendererComponent({ name: "zero-flow-node-script", version: "1.0.0", title: "Script Node", elementSelector: "zero-flow-node-script", group: "Flow Nodes", iconName: "flow-script-node.png" })
@applyGlobalStyles()
export class ZeroFlowNodeScript extends LitElement {
  static styles = css`:host{display:block}.node{padding:14px 16px;border-radius:16px;border:1px solid rgba(15,23,42,.16);background:#fff;color:#0f172a}.eyebrow{font-size:.72rem;text-transform:uppercase;letter-spacing:.12em;color:#334155;font-weight:700}pre{margin:8px 0 0;background:#0f172a;color:#e2e8f0;border-radius:12px;padding:10px;white-space:pre-wrap}`;
  @property({ type: String }) language = "typescript";
  @property({ type: String }) code = "return input;";
  @RendererAttribute({ attributeType: AttributeType.PROPERTY, uiComponentType: UserInterfaceType.DROPDOWN, displayLabel: "Language", fieldMappings: "language", optionItems: [{ label: "TypeScript", value: "typescript" }, { label: "JavaScript", value: "javascript" }] }) get languageConfig() { return this.language; } set languageConfig(value: string) { this.language = value || "typescript"; }
  @RendererAttribute({ attributeType: AttributeType.PROPERTY, uiComponentType: UserInterfaceType.TEXTAREA, displayLabel: "Code", fieldMappings: "code" }) get codeConfig() { return this.code; } set codeConfig(value: string) { this.code = value || "return input;"; }
  render() { return html`<div class="node"><div class="eyebrow">Script</div><strong>${this.language}</strong><pre>${this.code}</pre></div>`; }
}
