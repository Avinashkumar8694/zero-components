// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

function escapeStudio(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

@RendererComponent({
  name: "zero-text",
  version: "1.0.0",
  title: "Text",
  elementSelector: "zero-text",
  group: "Content",
  iconName: "text-icon.png",
})
@applyGlobalStyles()
export class ZeroText extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) return {
      kind: 'text',
      templateHtml: "<p style='margin:0;color:var(--uiv-text-color,#4b5563);font-size:16px;line-height:1.65;'>{{display:text}}</p>",
      textProp: 'text',
      badges: ['Text']
    };

    const textDisplay = escapeStudio(config.studio.display.text || "Add descriptive text here.");
    const size = (config.props?.size ?? config.studio.props?.size) || 16;
    const weight = (config.props?.weight ?? config.studio.props?.weight) || 400;
    const color = (config.props?.color ?? config.studio.props?.color) || 'var(--uiv-text-color, #4b5563)';
    const maxWidth = (config.props?.maxWidth ?? config.studio.props?.maxWidth);

    return {
      kind: 'text',
      templateHtml: `<p style='margin:0;color:${color};font-size:${size}px;font-weight:${weight};line-height:1.65; ${maxWidth ? 'max-width:' + maxWidth + 'px;' : ''}'>${textDisplay}</p>`,
      textProp: 'text',
      badges: ['Text']
    };
  }

  static styles = css`
    :host {
      display: block;
    }

    p {
      margin: 0;
      color: var(--zero-text-color, #4b5563);
      font-size: var(--zero-text-size, 16px);
      font-weight: var(--zero-text-weight, 400);
      line-height: 1.65;
      max-width: var(--zero-text-width, none);
      text-wrap: pretty;
    }
  `;

  @property({ type: String }) text = "Add descriptive text here.";
  @property({ type: Number }) size = 16;
  @property({ type: Number }) weight = 400;
  @property({ type: String }) color = "#4b5563";
  @property({ type: Number, attribute: "max-width" }) maxWidth = 0;

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXTAREA,
    displayLabel: "Text",
    fieldMappings: "text"
  })
  get textConfig() {
    return this.text;
  }
  set textConfig(value: string) {
    this.text = value;
  }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Size",
    fieldMappings: "size"
  })
  get sizeConfig() {
    return this.size;
  }
  set sizeConfig(value: number) {
    this.size = Number(value) || 16;
  }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Weight",
    fieldMappings: "weight"
  })
  get weightConfig() {
    return this.weight;
  }
  set weightConfig(value: number) {
    this.weight = Number(value) || 400;
  }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: "Color",
    fieldMappings: "color"
  })
  get colorConfig() {
    return this.color;
  }
  set colorConfig(value: string) {
    this.color = value || "#4b5563";
  }

  render() {
    const styleValue = [
      `--zero-text-color:${this.color || "#4b5563"}`,
      `--zero-text-size:${Math.max(10, Number(this.size) || 16)}px`,
      `--zero-text-weight:${Math.max(100, Number(this.weight) || 400)}`,
      `--zero-text-width:${this.maxWidth > 0 ? `${this.maxWidth}px` : "none"}`
    ].join(";");

    return html`<p style=${styleValue}>${this.text}</p>`;
  }
}
