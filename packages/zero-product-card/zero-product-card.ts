// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

function escapeStudio(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

export const studioTemplate: ZeroStudioTemplate = {
  kind: "generic",
  templateHtml: [
    "<div style='padding:16px;border-radius:18px;background:#ffffff;border:1px solid rgba(0,0,0,0.08);box-shadow:0 10px 30px rgba(0,0,0,0.03);position:relative;font-family:sans-serif;'>",
    "<div style='position:absolute;top:12px;right:12px;background:#132238;color:#ffffff;font-size:0.7rem;padding:3px 8px;border-radius:4px;font-weight:700;'>{{display:badge}}</div>",
    "<div style='aspect-ratio:4/3;background:#f9f8f6;display:flex;align-items:center;justify-content:center;border-radius:12px;overflow:hidden;'>",
    "<span style='font-size:1.8rem;'>🚲</span>",
    "</div>",
    "<div style='margin-top:12px;display:flex;justify-content:space-between;align-items:baseline;'>",
    "<strong style='font-size:1rem;color:#132238;'>{{display:title}}</strong>",
    "<span style='font-size:0.95rem;color:#132238;font-weight:700;'>{{display:price}}</span>",
    "</div>",
    "<div style='font-size:0.75rem;color:#64748b;margin-top:4px;'>{{display:description}}</div>",
    "<div style='margin-top:12px;display:flex;gap:6px;'><span style='display:inline-block;width:12px;height:12px;border-radius:50%;background:#000;'></span><span style='display:inline-block;width:12px;height:12px;border-radius:50%;background:#e67e22;'></span></div>",
    "<button type='button' style='margin-top:16px;width:100%;border:1px solid rgba(19,34,56,0.12);background:#ffffff;color:#132238;padding:8px 12px;border-radius:999px;font-size:0.82rem;font-weight:700;'>{{display:buttonLabel}}</button>",
    "</div>"
  ].join(""),
  badges: ["Ecommerce", "Product"],
};

@RendererComponent({
  name: "zero-product-card",
  version: "1.0.0",
  title: "Product Card",
  elementSelector: "zero-product-card",
  group: "Ecommerce",
  iconName: "card-icon.png",
})
@applyGlobalStyles()
export class ZeroProductCard extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) return studioTemplate;

    const badge = escapeStudio(config.props?.badge ?? config.studio.props?.badge ?? "");
    const image = escapeStudio(config.props?.image ?? config.studio.props?.image ?? "/featured_bike_1.png");
    const title = escapeStudio(config.props?.title ?? config.studio.props?.title ?? "Product Title");
    const price = escapeStudio(config.props?.price ?? config.studio.props?.price ?? "$0.00");
    const description = escapeStudio(config.props?.description ?? config.studio.props?.description ?? "Category / Spec");
    const buttonLabel = escapeStudio(config.props?.buttonLabel ?? config.studio.props?.buttonLabel ?? "Configure Bike");

    return {
      ...studioTemplate,
      templateHtml: [
        "<div style='padding:16px;border-radius:18px;background:#ffffff;border:1px solid rgba(19, 34, 56, 0.08);box-shadow:0 10px 30px rgba(19, 34, 56, 0.03);position:relative;font-family:inherit;'>",
        badge ? `<div style='position:absolute;top:12px;right:12px;background:#e2e8f0;color:#132238;font-size:0.7rem;padding:3px 8px;border-radius:4px;font-weight:700;'>${badge}</div>` : "",
        `<div style='aspect-ratio:4/3;background:#f9f8f6;border-radius:12px;overflow:hidden;display:flex;align-items:center;justify-content:center;'>`,
        `<img src='${image}' style='width:100%;height:100%;object-fit:contain;' />`,
        "</div>",
        "<div style='margin-top:12px;display:flex;justify-content:space-between;align-items:baseline;'>",
        `<h4 style='margin:0;font-size:16px;color:#132238;font-family:Georgia,serif;font-weight:700;'>${title}</h4>`,
        `<span style='font-size:15px;color:#132238;font-weight:700;'>${price}</span>`,
        "</div>",
        `<div style='font-size:12px;color:#64748b;margin-top:4px;font-style:italic;'>${description}</div>`,
        "<div style='margin-top:12px;display:flex;gap:8px;'>",
        "<span style='display:inline-block;width:12px;height:12px;border-radius:50%;background:#000000;border:1px solid rgba(0,0,0,0.1);'></span>",
        "<span style='display:inline-block;width:12px;height:12px;border-radius:50%;background:#e67e22;border:1px solid rgba(0,0,0,0.1);'></span>",
        "<span style='display:inline-block;width:12px;height:12px;border-radius:50%;background:#cccccc;border:1px solid rgba(0,0,0,0.1);'></span>",
        "</div>",
        `<button type='button' style='margin-top:16px;width:100%;border:1px solid rgba(19, 34, 56, 0.12);background:#ffffff;color:#132238;padding:10px 14px;border-radius:999px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;'>${buttonLabel}</button>`,
        "</div>"
      ].join("")
    };
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .product-card {
      padding: 16px;
      border-radius: 18px;
      background: #ffffff;
      border: 1px solid rgba(19, 34, 56, 0.08);
      box-shadow: 0 10px 30px rgba(19, 34, 56, 0.03);
      position: relative;
      transition: transform 0.25s ease, box-shadow 0.25s ease;
    }

    .product-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 16px 36px rgba(19, 34, 56, 0.06);
    }

    .badge {
      position: absolute;
      top: 12px;
      right: 12px;
      background: #e2e8f0;
      color: #132238;
      font-size: 11px;
      padding: 3px 8px;
      border-radius: 4px;
      font-weight: 700;
      z-index: 2;
    }

    .image-container {
      aspect-ratio: 4 / 3;
      background: #f9f8f6;
      border-radius: 12px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: transform 0.4s ease;
    }

    .product-card:hover img {
      transform: scale(1.05);
    }

    .details-row {
      margin-top: 12px;
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }

    .title {
      margin: 0;
      font-size: 16px;
      color: #132238;
      font-family: Georgia, serif;
      font-weight: 700;
    }

    .price {
      font-size: 15px;
      color: #132238;
      font-weight: 700;
    }

    .description {
      font-size: 12px;
      color: #64748b;
      margin-top: 4px;
      font-style: italic;
    }

    .swatches {
      margin-top: 12px;
      display: flex;
      gap: 8px;
    }

    .swatch {
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.15);
      cursor: pointer;
      transition: transform 0.15s ease;
    }

    .swatch:hover {
      transform: scale(1.2);
    }

    button {
      margin-top: 16px;
      width: 100%;
      border: 1px solid rgba(19, 34, 56, 0.12);
      background: #ffffff;
      color: #132238;
      padding: 10px 14px;
      border-radius: 999px;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
      font-family: inherit;
      transition: background 0.15s ease, color 0.15s ease;
    }

    button:hover {
      background: #132238;
      color: #ffffff;
      border-color: #132238;
    }
  `;

  @property({ type: String }) image = "/featured_bike_1.png";
  @property({ type: String }) badge = "";
  @property({ type: String }) title = "Product Title";
  @property({ type: String }) price = "$0.00";
  @property({ type: String }) colors = "black,#e67e22,#cccccc";
  @property({ type: String }) description = "Category / Spec";
  @property({ type: String, attribute: "button-label" }) buttonLabel = "Configure Bike";
  @property({ type: String }) variant = "secondary";

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Image Source",
    fieldMappings: "image"
  })
  imageConfig = "/featured_bike_1.png";

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Promo Badge",
    fieldMappings: "badge"
  })
  badgeConfig = "";

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Title",
    fieldMappings: "title"
  })
  titleConfig = "Product Title";

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Price",
    fieldMappings: "price"
  })
  priceConfig = "$0.00";

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Colors (CSV)",
    fieldMappings: "colors"
  })
  colorsConfig = "black,#e67e22,#cccccc";

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Description",
    fieldMappings: "description"
  })
  descriptionConfig = "Category / Spec";

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Button Label",
    fieldMappings: "buttonLabel"
  })
  buttonLabelConfig = "Configure Bike";

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has("imageConfig")) this.image = this.imageConfig;
    if (changedProperties.has("badgeConfig")) this.badge = this.badgeConfig;
    if (changedProperties.has("titleConfig")) this.title = this.titleConfig;
    if (changedProperties.has("priceConfig")) this.price = this.priceConfig;
    if (changedProperties.has("colorsConfig")) this.colors = this.colorsConfig;
    if (changedProperties.has("descriptionConfig")) this.description = this.descriptionConfig;
    if (changedProperties.has("buttonLabelConfig")) this.buttonLabel = this.buttonLabelConfig;
  }

  render() {
    const swatchList = (this.colors || "")
      .split(",")
      .map(c => c.trim())
      .filter(Boolean);

    return html`
      <div class="product-card">
        ${this.badge ? html`<div class="badge">${this.badge}</div>` : null}
        <div class="image-container">
          <img src=${this.image} alt=${this.title} loading="lazy" />
        </div>
        <div class="details-row">
          <h4 class="title">${this.title}</h4>
          <span class="price">${this.price}</span>
        </div>
        <div class="description">${this.description}</div>
        <div class="swatches">
          ${swatchList.map(
            color => html`
              <span
                class="swatch"
                style="background: ${color};"
                title=${color}
              ></span>
            `
          )}
        </div>
        <button type="button">${this.buttonLabel}</button>
      </div>
    `;
  }
}
