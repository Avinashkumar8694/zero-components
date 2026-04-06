import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

@RendererComponent({
  name: "zero-image",
  version: "1.0.0",
  title: "Image",
  elementSelector: "zero-image",
  group: "Media",
  iconName: "image-icon.png",
})
@applyGlobalStyles()
export class ZeroImage extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .frame {
      width: 100%;
      overflow: hidden;
      border-radius: var(--zero-image-radius, 18px);
      aspect-ratio: var(--zero-image-ratio, auto);
      background: rgba(19, 34, 56, 0.05);
    }

    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: var(--zero-image-fit, cover);
    }
  `;

  @property({ type: String }) src = "https://picsum.photos/1200/800";
  @property({ type: String }) alt = "Image";
  @property({ type: String }) fit = "cover";
  @property({ type: String, attribute: "aspect-ratio" }) aspectRatio = "16 / 9";
  @property({ type: Number }) radius = 18;

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Source",
    fieldMappings: "src"
  })
  get srcConfig() {
    return this.src;
  }
  set srcConfig(value: string) {
    this.src = value;
  }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Alt",
    fieldMappings: "alt"
  })
  get altConfig() {
    return this.alt;
  }
  set altConfig(value: string) {
    this.alt = value;
  }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Fit",
    fieldMappings: "fit",
    optionItems: [
      { label: "Cover", value: "cover" },
      { label: "Contain", value: "contain" },
      { label: "Fill", value: "fill" }
    ]
  })
  get fitConfig() {
    return this.fit;
  }
  set fitConfig(value: string) {
    this.fit = value || "cover";
  }

  render() {
    const styleValue = [
      `--zero-image-fit:${this.fit || "cover"}`,
      `--zero-image-ratio:${this.aspectRatio || "auto"}`,
      `--zero-image-radius:${Math.max(0, Number(this.radius) || 0)}px`
    ].join(";");

    return html`
      <div class="frame" style=${styleValue}>
        <img src=${this.src} alt=${this.alt} loading="lazy" />
      </div>
    `;
  }
}
