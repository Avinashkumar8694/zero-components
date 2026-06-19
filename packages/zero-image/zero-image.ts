// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

export const studioTemplate: ZeroStudioTemplate = {
  kind: "generic",
  templateHtml: [
    "<div style='border-radius:12px;overflow:hidden;border:1px solid rgba(148,163,184,0.15);background:rgba(241,245,249,0.5);'>",
    "<div style='aspect-ratio:16/9;background:#e2e8f0;display:flex;align-items:center;justify-content:center;'>",
    "<span style='font-size:2rem;'>🖼️</span>",
    "</div>",
    "<div style='padding:6px 10px;display:flex;justify-content:space-between;align-items:center;'>",
    "<span style='font-size:0.72rem;color:var(--uiv-text-muted,#94a3b8);'>{{display:alt}}</span>",
    "<span style='font-size:0.65rem;padding:2px 6px;border-radius:999px;background:rgba(219,234,254,0.7);color:#1d4ed8;font-weight:700;'>{{display:fit}}</span>",
    "</div>",
    "</div>"
  ].join(""),
  badges: ["Media", "Image"],
};

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
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) return studioTemplate;

    const srcDisplay = escapeStudio(config.studio.display.src || "https://picsum.photos/1200/800");
    const fit = (config.props?.fit ?? config.studio.props?.fit) || "cover";
    const ratio = (config.props?.aspectRatio ?? config.studio.props?.aspectRatio) || "16 / 9";
    const radius = (config.props?.radius ?? config.studio.props?.radius) || 18;

    return {
      ...studioTemplate,
      templateHtml: [
        `<div style='width:100%;overflow:hidden;border-radius:${radius}px;aspect-ratio:${ratio};background:rgba(19, 34, 56, 0.05);'>`,
        `<img src='${srcDisplay}' style='width:100%;height:100%;display:block;object-fit:${fit};' />`,
        "</div>"
      ].join(""),
    };
  }

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

    const imageSrc = this.src || "https://picsum.photos/1200/800";

    return html`
      <div class="frame" style=${styleValue}>
        <img src=${imageSrc} alt=${this.alt} loading="lazy" />
      </div>
    `;
  }
}

function escapeStudio(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
