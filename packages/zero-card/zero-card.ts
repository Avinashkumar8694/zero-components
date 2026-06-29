// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

function escapeStudio(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

@RendererComponent({
  name: "zero-card",
  version: "1.0.0",
  title: "Card Container",
  elementSelector: "zero-card",
  group: "Layout",
  iconName: "card-icon.png",
})
@applyGlobalStyles()
export class ZeroCard extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) {
      return {
        kind: "card",
        templateHtml: [
          "<div style='padding:20px;border-radius:12px;background:var(--uiv-surface-color,#ffffff);border:1px solid rgba(0,0,0,0.08);box-shadow:0 4px 6px rgba(0,0,0,0.05);'>",
          "<strong style='color:var(--uiv-text-color,#111827);font-size:16px;'>{{display:title}}</strong>",
          "<div style='margin-top:12px;'><zero-studio-slot name='default'></zero-studio-slot></div>",
          "</div>"
        ].join(""),
        slots: [{ id: "default", label: "Card Content", dropzone: true, accepts: [] }],
        titleProp: "title"
      };
    }

    const titleDisplay = escapeStudio(config.studio.display.title || "Card Title");
    const subtitleDisplay = escapeStudio(config.studio.display.subtitle || "");
    const variant = (config.props?.variant ?? config.studio.props?.variant) || "standard";
    const padding = (config.props?.padding ?? config.studio.props?.padding) ?? 20;

    let stylesStr = `padding: ${padding}px; font-family: inherit; font-weight: 500; border-radius: 12px; transition: all 0.25s ease;`;
    let bg = "var(--uiv-surface-color, #ffffff)";
    let border = "1px solid rgba(0,0,0,0.08)";
    let shadow = "0 4px 6px rgba(0, 0, 0, 0.05)";

    if (variant === "glass") {
      bg = "rgba(255, 255, 255, 0.12)";
      border = "1px solid rgba(255, 255, 255, 0.2)";
      shadow = "0 8px 32px rgba(0, 0, 0, 0.05)";
      stylesStr += " backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);";
    } else if (variant === "shadow") {
      shadow = "0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.05)";
    } else if (variant === "outlined") {
      border = "1.5px solid var(--uiv-border-color, #e5e7eb)";
      shadow = "none";
    } else if (variant === "product") {
      bg = "linear-gradient(to bottom, var(--uiv-surface-color, #ffffff), #f9fafb)";
      shadow = "0 2px 5px rgba(0,0,0,0.03)";
    }

    stylesStr += ` background: ${bg}; border: ${border}; box-shadow: ${shadow};`;

    return {
      kind: "card",
      slots: [{ id: "default", label: "Card Content", dropzone: true, accepts: [] }],
      templateHtml: [
        `<div style='${stylesStr}'>`,
        titleDisplay ? `<h4 style='margin:0 0 4px;font-size:16px;color:var(--uiv-text-color,#111827);font-weight:700;'>${titleDisplay}</h4>` : "",
        subtitleDisplay ? `<p style='margin:0 0 12px;color:var(--uiv-text-color-secondary,#6b7280);font-size:13px;'>${subtitleDisplay}</p>` : "",
        "<div style='min-height:40px;border:1px dashed rgba(0,0,0,0.05);border-radius:6px;'>",
        "<zero-studio-slot name='default'></zero-studio-slot>",
        "</div>",
        "</div>"
      ].join(""),
    };
  }

  static styles = css`
    :host {
      display: block;
      --card-bg: var(--uiv-surface-color, #ffffff);
      --card-text: var(--uiv-text-color, #111827);
      --card-muted: var(--uiv-text-color-secondary, #6b7280);
      --card-border: var(--uiv-border-color, #e5e7eb);
    }

    .card {
      border-radius: 12px;
      padding: var(--card-padding, 20px);
      box-sizing: border-box;
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Variants */
    .variant-standard {
      background: var(--card-bg);
      border: 1px solid rgba(0, 0, 0, 0.08);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
    }

    .variant-glass {
      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: var(--card-text);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.04);
    }

    .variant-shadow {
      background: var(--card-bg);
      border: 1px solid rgba(0, 0, 0, 0.03);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
    .variant-shadow:hover {
      transform: translateY(-2px);
      box-shadow: 0 25px 30px -5px rgba(0, 0, 0, 0.12), 0 15px 15px -5px rgba(0, 0, 0, 0.06);
    }

    .variant-outlined {
      background: var(--card-bg);
      border: 1.5px solid var(--card-border);
    }

    .variant-product {
      background: linear-gradient(to bottom, var(--card-bg), #f9fafb);
      border: 1px solid rgba(0, 0, 0, 0.06);
      box-shadow: 0 1px 3px rgba(0,0,0,0.02);
    }
    .variant-product:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.06);
    }

    h4.title {
      margin: 0 0 4px;
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--card-text);
    }

    p.subtitle {
      margin: 0 0 14px;
      font-size: 0.85rem;
      color: var(--card-muted);
    }

    .card-body {
      display: block;
    }
  `;

  @property({ type: String }) title = "Card Title";
  @property({ type: String }) subtitle = "";
  @property({ type: String }) variant = "standard";
  @property({ type: Number }) padding = 20;

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Card Title",
    fieldMappings: "title"
  })
  get titleConfig() { return this.title; }
  set titleConfig(val: string) { this.title = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Subtitle / Description",
    fieldMappings: "subtitle"
  })
  get subtitleConfig() { return this.subtitle; }
  set subtitleConfig(val: string) { this.subtitle = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Card Style",
    fieldMappings: "variant",
    optionItems: [
      { label: "Standard", value: "standard" },
      { label: "Glassmorphism", value: "glass" },
      { label: "Soft Shadow (Floating)", value: "shadow" },
      { label: "Outlined Border", value: "outlined" },
      { label: "Product Grid Item", value: "product" }
    ]
  })
  get variantConfig() { return this.variant; }
  set variantConfig(val: string) { this.variant = val || "standard"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Padding (px)",
    fieldMappings: "padding"
  })
  get paddingConfig() { return this.padding; }
  set paddingConfig(val: number) { this.padding = Number(val) || 20; }

  render() {
    const wrapClass = [
      "card",
      `variant-${this.variant}`
    ].join(" ");

    const padVal = Math.max(0, Number(this.padding) || 0);

    return html`
      <div class=${wrapClass} style="--card-padding: ${padVal}px">
        ${this.title ? html`<h4 class="title">${this.title}</h4>` : ""}
        ${this.subtitle ? html`<p class="subtitle">${this.subtitle}</p>` : ""}
        <div class="card-body">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
