import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

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
