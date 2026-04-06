import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

@RendererComponent({
  name: "zero-section",
  version: "1.0.0",
  title: "Section",
  elementSelector: "zero-section",
  group: "Layout",
  iconName: "section-icon.png",
})
@applyGlobalStyles()
export class ZeroSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    section {
      width: 100%;
      box-sizing: border-box;
      padding: var(--zero-section-padding, 32px 20px);
      background: var(--zero-section-bg, transparent);
    }

    .inner {
      max-width: var(--zero-section-max-width, 1200px);
      margin: 0 auto;
    }
  `;

  @property({ type: Number, attribute: "max-width" }) maxWidth = 1200;
  @property({ type: Number }) padding = 32;
  @property({ type: String, attribute: "background-color" }) backgroundColor = "transparent";

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Max Width",
    fieldMappings: "maxWidth"
  })
  get maxWidthConfig() {
    return this.maxWidth;
  }
  set maxWidthConfig(value: number) {
    this.maxWidth = Number(value) || 1200;
  }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Padding",
    fieldMappings: "padding"
  })
  get paddingConfig() {
    return this.padding;
  }
  set paddingConfig(value: number) {
    this.padding = Number(value) || 32;
  }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: "Background",
    fieldMappings: "backgroundColor"
  })
  get backgroundConfig() {
    return this.backgroundColor;
  }
  set backgroundConfig(value: string) {
    this.backgroundColor = value || "transparent";
  }

  render() {
    const styleValue = [
      `--zero-section-max-width:var(--zero-section-max-width-override, ${Math.max(280, Number(this.maxWidth) || 1200)}px)`,
      `--zero-section-padding:var(--zero-section-padding-override, ${Math.max(0, Number(this.padding) || 0)}px 20px)`,
      `--zero-section-bg:${this.backgroundColor || "transparent"}`
    ].join(";");

    return html`
      <section style=${styleValue}>
        <div class="inner">
          <slot></slot>
        </div>
      </section>
    `;
  }
}
