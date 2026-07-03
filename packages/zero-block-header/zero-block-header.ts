// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

export const studioTemplate: ZeroStudioTemplate = {
  kind: "generic",
  templateHtml: [
    "<header style='display:flex;align-items:center;justify-content:between;padding:16px 24px;border-bottom:1px solid #e5e7eb;background:#ffffff;font-family:inherit;'>",
    "<div style='font-weight:bold;font-size:18px;'>{{props:logo}}</div>",
    "<div style='display:flex;gap:20px;font-size:14px;color:#4b5563;'>",
    "<span>Home</span><span>Features</span><span>Pricing</span>",
    "</div>",
    "<div style='padding:8px 16px;background:var(--uiv-primary-color,#6366f1);color:#ffffff;border-radius:6px;font-size:13px;font-weight:600;'>Get Started</div>",
    "</header>"
  ].join(""),
  labelProp: "logo",
  badges: ["Block", "Navigation"],
};

interface LinkItem {
  label: string;
  href: string;
}


function escapeStudio(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

@RendererComponent({
  name: "zero-block-header",
  version: "1.0.0",
  title: "Block Header",
  elementSelector: "zero-block-header",
  group: "Design Blocks",
  iconName: "layout-icon.png",
})
@applyGlobalStyles()
export class ZeroBlockHeader extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) {
      return {
        kind: "generic",
        templateHtml: `<zero-block-header-1.0.0></zero-block-header-1.0.0>`
      };
    }
    const logo = escapeStudio(config?.props?.logo ?? config?.studio?.props?.logo ?? "BrandName");
    const logoUrl = escapeStudio(config?.props?.logoUrl ?? config?.studio?.props?.logoUrl ?? "");
    const linksJson = escapeStudio(config?.props?.linksJson ?? config?.studio?.props?.linksJson ?? "[]");
    const ctaText = escapeStudio(config?.props?.ctaText ?? config?.studio?.props?.ctaText ?? "Get Started");
    const ctaUrl = escapeStudio(config?.props?.ctaUrl ?? config?.studio?.props?.ctaUrl ?? "#");
    const layout = escapeStudio(config?.props?.layout ?? config?.studio?.props?.layout ?? "layout-1");
    const themeStyle = escapeStudio(config?.props?.themeStyle ?? config?.studio?.props?.themeStyle ?? "light");

    return {
      kind: "generic",
      templateHtml: `
        <zero-block-header-1.0.0
          logo="${logo}"
          logo-url="${logoUrl}"
          links-json="${linksJson}"
          cta-text="${ctaText}"
          cta-url="${ctaUrl}"
          layout="${layout}"
          theme-style="${themeStyle}"
        ></zero-block-header-1.0.0>
      `
    };
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
      --header-bg: var(--uiv-surface-color, #ffffff);
      --header-text: var(--uiv-text-color, #1f2937);
      --header-border: var(--uiv-border-color, #e5e7eb);
      --header-accent: var(--uiv-primary-color, #6366f1);
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 18px 5%;
      background: var(--header-bg);
      color: var(--header-text);
      border-bottom: 1px solid var(--header-border);
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    /* Theme Variants */
    header.theme-dark {
      --header-bg: #111827;
      --header-text: #f9fafb;
      --header-border: #374151;
    }

    header.theme-transparent {
      background: transparent;
      border-bottom-color: rgba(255, 255, 255, 0.15);
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      color: inherit;
    }

    .logo-img {
      max-height: 38px;
    }

    .logo-text {
      font-size: 1.45rem;
      font-weight: 800;
      letter-spacing: -0.02em;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 28px;
    }

    .nav-link {
      font-size: 0.94rem;
      font-weight: 500;
      color: inherit;
      opacity: 0.85;
      text-decoration: none;
      transition: opacity 0.2s ease, color 0.2s ease;
    }

    .nav-link:hover {
      opacity: 1;
      color: var(--header-accent);
    }

    .action-btn {
      padding: 9px 20px;
      font-size: 0.88rem;
      font-weight: 600;
      color: #ffffff;
      background: var(--header-accent);
      border: none;
      border-radius: 6px;
      cursor: pointer;
      text-decoration: none;
      transition: opacity 0.2s ease;
    }

    .action-btn:hover {
      opacity: 0.9;
    }

    /* ─── Layouts ─── */
    header.layout-layout-2 .action-btn {
      display: none;
    }

    header.layout-layout-3 {
      flex-direction: column;
      gap: 16px;
      text-align: center;
    }

    header.layout-layout-3 .nav-links {
      justify-content: center;
      width: 100%;
    }
  `;

  @property({ type: String }) logo = "BrandName";
  @property({ type: String, attribute: "logo-url" }) logoUrl = "";
  @property({ type: String, attribute: "links-json" }) linksJson = '[{"label":"Home","href":"#"},{"label":"Features","href":"#"},{"label":"Pricing","href":"#"}]';
  @property({ type: String, attribute: "cta-text" }) ctaText = "Get Started";
  @property({ type: String, attribute: "cta-url" }) ctaUrl = "#";
  @property({ type: String }) layout = "layout-1";
  @property({ type: String, attribute: "theme-style" }) themeStyle = "light";

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Logo Text",
    fieldMappings: "logo"
  })
  get logoConfig() { return this.logo; }
  set logoConfig(val: string) { this.logo = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Logo Image URL",
    fieldMappings: "logoUrl"
  })
  get logoUrlConfig() { return this.logoUrl; }
  set logoUrlConfig(val: string) { this.logoUrl = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Links JSON",
    fieldMappings: "linksJson"
  })
  get linksJsonConfig() { return this.linksJson; }
  set linksJsonConfig(val: string) { this.linksJson = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "CTA Button Text",
    fieldMappings: "ctaText"
  })
  get ctaTextConfig() { return this.ctaText; }
  set ctaTextConfig(val: string) { this.ctaText = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "CTA Redirect URL",
    fieldMappings: "ctaUrl"
  })
  get ctaUrlConfig() { return this.ctaUrl; }
  set ctaUrlConfig(val: string) { this.ctaUrl = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Navigation Layout",
    fieldMappings: "layout",
    optionItems: [
      { label: "Standard Navigation", value: "layout-1" },
      { label: "Minimalist Menu (No CTA)", value: "layout-2" },
      { label: "Centered Logo Column", value: "layout-3" }
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
      { label: "Light Header", value: "light" },
      { label: "Dark Header", value: "dark" },
      { label: "Transparent Header", value: "transparent" }
    ]
  })
  get themeStyleConfig() { return this.themeStyle; }
  set themeStyleConfig(val: string) { this.themeStyle = val || "light"; }

  private parseLinks(): LinkItem[] {
    try {
      return JSON.parse(this.linksJson);
    } catch (e) {
      return [];
    }
  }

  render() {
    const headerClass = [
      `theme-${this.themeStyle}`,
      `layout-${this.layout}`
    ].join(" ");

    const links = this.parseLinks();

    return html`
      <header class="${headerClass}">
        <a href="#" class="brand">
          ${this.logoUrl ? html`<img class="logo-img" src="${this.logoUrl}" alt="logo">` : ""}
          <span class="logo-text">${this.logo}</span>
        </a>

        <div class="nav-links">
          ${links.map(link => html`
            <a class="nav-link" href="${link.href}">${link.label}</a>
          `)}
        </div>

        <a class="action-btn" href="${this.ctaUrl}">${this.ctaText}</a>
      </header>
    `;
  }
}
