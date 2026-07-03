// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

export const studioTemplate: ZeroStudioTemplate = {
  kind: "generic",
  templateHtml: [
    "<section style='padding:60px 24px;background:#f9fafb;text-align:center;border-radius:12px;font-family:inherit;'>",
    "<h1 style='font-size:32px;font-weight:800;color:#111827;margin-bottom:16px;'>{{props:title}}</h1>",
    "<p style='font-size:16px;color:#4b5563;max-width:600px;margin:0 auto 24px;'>{{props:lead}}</p>",
    "<div style='display:flex;justify-content:center;gap:12px;'>",
    "<span style='padding:10px 20px;background:var(--uiv-primary-color,#6366f1);color:#ffffff;border-radius:6px;font-weight:600;font-size:14px;'>Get Started</span>",
    "<span style='padding:10px 20px;border:1px solid #d1d5db;color:#4b5563;border-radius:6px;font-weight:600;font-size:14px;'>Learn More</span>",
    "</div>",
    "</section>"
  ].join(""),
  labelProp: "title",
  badges: ["Block", "Hero"],
};

function escapeStudio(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

@RendererComponent({
  name: "zero-block-hero",
  version: "1.0.0",
  title: "Hero Block",
  elementSelector: "zero-block-hero",
  group: "Design Blocks",
  iconName: "layout-icon.png",
})
@applyGlobalStyles()
export class ZeroBlockHero extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) {
      return {
        kind: "generic",
        templateHtml: `<zero-block-hero-1.0.0></zero-block-hero-1.0.0>`
      };
    }
    const title = escapeStudio(config?.props?.title ?? config?.studio?.props?.title ?? "Design blocks done right");
    const lead = escapeStudio(config?.props?.lead ?? config?.studio?.props?.lead ?? "");
    const image = escapeStudio(config?.props?.image ?? config?.studio?.props?.image ?? "");
    const ctaPrimaryText = escapeStudio(config?.props?.ctaPrimaryText ?? config?.studio?.props?.ctaPrimaryText ?? "Get Started");
    const ctaPrimaryUrl = escapeStudio(config?.props?.ctaPrimaryUrl ?? config?.studio?.props?.ctaPrimaryUrl ?? "#");
    const ctaSecondaryText = escapeStudio(config?.props?.ctaSecondaryText ?? config?.studio?.props?.ctaSecondaryText ?? "Learn More");
    const ctaSecondaryUrl = escapeStudio(config?.props?.ctaSecondaryUrl ?? config?.studio?.props?.ctaSecondaryUrl ?? "#");
    const layout = escapeStudio(config?.props?.layout ?? config?.studio?.props?.layout ?? "layout-1");
    const themeStyle = escapeStudio(config?.props?.themeStyle ?? config?.studio?.props?.themeStyle ?? "light");

    return {
      kind: "generic",
      templateHtml: `
        <zero-block-hero-1.0.0
          title="${title}"
          lead="${lead}"
          image="${image}"
          cta-primary-text="${ctaPrimaryText}"
          cta-primary-url="${ctaPrimaryUrl}"
          cta-secondary-text="${ctaSecondaryText}"
          cta-secondary-url="${ctaSecondaryUrl}"
          layout="${layout}"
          theme-style="${themeStyle}"
        ></zero-block-hero-1.0.0>
      `
    };
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
      --hero-bg: var(--uiv-surface-color, #ffffff);
      --hero-title-color: var(--uiv-text-color, #111827);
      --hero-lead-color: #4b5563;
      --hero-accent: var(--uiv-primary-color, #6366f1);
    }

    section {
      padding: 90px 6%;
      background: var(--hero-bg);
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    /* Theme Variants */
    section.theme-dark {
      --hero-bg: #111827;
      --hero-title-color: #f9fafb;
      --hero-lead-color: #9ca3af;
    }

    section.theme-gradient {
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%);
    }

    .container-centered {
      text-align: center;
      max-width: 800px;
      margin: 0 auto;
    }

    .container-split {
      display: flex;
      align-items: center;
      gap: 50px;
    }

    .text-column {
      flex: 1.2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: left;
    }

    .image-column {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .hero-img {
      max-width: 100%;
      height: auto;
      border-radius: 12px;
      box-shadow: var(--uiv-shadow-depth, 0 15px 35px rgba(0,0,0,0.07));
    }

    h1 {
      font-size: 3rem;
      font-weight: 800;
      color: var(--hero-title-color);
      line-height: 1.15;
      margin: 0 0 20px 0;
      letter-spacing: -0.02em;
    }

    p.lead {
      font-size: 1.15rem;
      line-height: 1.6;
      color: var(--hero-lead-color);
      margin: 0 0 35px 0;
    }

    .button-group {
      display: flex;
      gap: 16px;
    }

    .container-centered .button-group {
      justify-content: center;
    }

    .btn-primary {
      padding: 13px 28px;
      font-size: 0.95rem;
      font-weight: 600;
      color: #ffffff;
      background: var(--hero-accent);
      border: none;
      border-radius: 6px;
      cursor: pointer;
      text-decoration: none;
      transition: opacity 0.2s ease, transform 0.15s ease;
    }

    .btn-secondary {
      padding: 13px 28px;
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--hero-title-color);
      background: transparent;
      border: 1px solid var(--uiv-border-color, #d1d5db);
      border-radius: 6px;
      cursor: pointer;
      text-decoration: none;
      transition: background-color 0.2s ease;
    }

    .btn-primary:hover, .btn-secondary:hover {
      opacity: 0.95;
      transform: translateY(-1px);
    }

    .btn-secondary:hover {
      background: rgba(0,0,0,0.03);
    }

    /* Mobile Adaptability */
    @media (max-width: 768px) {
      .container-split {
        flex-direction: column !important;
        text-align: center;
      }
      .text-column {
        text-align: center;
      }
      .button-group {
        justify-content: center;
      }
      h1 {
        font-size: 2.25rem;
      }
    }
  `;

  @property({ type: String }) title = "Design blocks done right";
  @property({ type: String }) lead = "Awesome UI sections for landing page builders. Beautiful, fast, and fully responsive templates.";
  @property({ type: String }) image = "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=60";
  @property({ type: String, attribute: "cta-primary-text" }) ctaPrimaryText = "Get Started";
  @property({ type: String, attribute: "cta-primary-url" }) ctaPrimaryUrl = "#";
  @property({ type: String, attribute: "cta-secondary-text" }) ctaSecondaryText = "Learn More";
  @property({ type: String, attribute: "cta-secondary-url" }) ctaSecondaryUrl = "#";
  @property({ type: String }) layout = "layout-1";
  @property({ type: String, attribute: "theme-style" }) themeStyle = "light";

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Headline Title",
    fieldMappings: "title"
  })
  get titleConfig() { return this.title; }
  set titleConfig(val: string) { this.title = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Lead Copy Paragraph",
    fieldMappings: "lead"
  })
  get leadConfig() { return this.lead; }
  set leadConfig(val: string) { this.lead = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Visual Image URL",
    fieldMappings: "image"
  })
  get imageConfig() { return this.image; }
  set imageConfig(val: string) { this.image = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Primary CTA Label",
    fieldMappings: "ctaPrimaryText"
  })
  get ctaPrimaryTextConfig() { return this.ctaPrimaryText; }
  set ctaPrimaryTextConfig(val: string) { this.ctaPrimaryText = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Primary CTA URL",
    fieldMappings: "ctaPrimaryUrl"
  })
  get ctaPrimaryUrlConfig() { return this.ctaPrimaryUrl; }
  set ctaPrimaryUrlConfig(val: string) { this.ctaPrimaryUrl = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Secondary CTA Label",
    fieldMappings: "ctaSecondaryText"
  })
  get ctaSecondaryTextConfig() { return this.ctaSecondaryText; }
  set ctaSecondaryTextConfig(val: string) { this.ctaSecondaryText = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Secondary CTA URL",
    fieldMappings: "ctaSecondaryUrl"
  })
  get ctaSecondaryUrlConfig() { return this.ctaSecondaryUrl; }
  set ctaSecondaryUrlConfig(val: string) { this.ctaSecondaryUrl = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Layout Display",
    fieldMappings: "layout",
    optionItems: [
      { label: "Centered Text Content", value: "layout-1" },
      { label: "Split Left-Text (Image Right)", value: "layout-2" },
      { label: "Split Right-Text (Image Left)", value: "layout-3" }
    ]
  })
  get layoutConfig() { return this.layout; }
  set layoutConfig(val: string) { this.layout = val || "layout-1"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Theme Style",
    fieldMappings: "themeStyle",
    optionItems: [
      { label: "Standard Light", value: "light" },
      { label: "Standard Dark", value: "dark" },
      { label: "Gradient Overlay", value: "gradient" }
    ]
  })
  get themeStyleConfig() { return this.themeStyle; }
  set themeStyleConfig(val: string) { this.themeStyle = val || "light"; }

  render() {
    const isCentered = this.layout === "layout-1" || !this.image;
    const isTextLeft = this.layout === "layout-2";

    const textCol = html`
      <div class="text-column">
        <h1>${this.title}</h1>
        <p class="lead">${this.lead}</p>
        <div class="button-group">
          <a class="btn-primary" href="${this.ctaPrimaryUrl}">${this.ctaPrimaryText}</a>
          <a class="btn-secondary" href="${this.ctaSecondaryUrl}">${this.ctaSecondaryText}</a>
        </div>
      </div>
    `;

    const imgCol = html`
      <div class="image-column">
        <img class="hero-img" src="${this.image}" alt="hero graphic">
      </div>
    `;

    return html`
      <section class="theme-${this.themeStyle} layout-${this.layout}">
        ${isCentered ? html`
          <div class="container-centered">
            <h1>${this.title}</h1>
            <p class="lead">${this.lead}</p>
            <div class="button-group">
              <a class="btn-primary" href="${this.ctaPrimaryUrl}">${this.ctaPrimaryText}</a>
              <a class="btn-secondary" href="${this.ctaSecondaryUrl}">${this.ctaSecondaryText}</a>
            </div>
          </div>
        ` : html`
          <div class="container-split">
            ${isTextLeft ? html`${textCol}${imgCol}` : html`${imgCol}${textCol}`}
          </div>
        `}
      </section>
    `;
  }
}
