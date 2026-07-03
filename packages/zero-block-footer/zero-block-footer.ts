// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

export const studioTemplate: ZeroStudioTemplate = {
  kind: "generic",
  templateHtml: [
    "<footer style='padding:32px 24px;background:#ffffff;border-top:1px solid #e5e7eb;font-family:inherit;box-sizing:border-box;'>",
    "<div style='display:flex;justify-content:space-between;align-items:center;'>",
    "<div style='font-size:14px;color:#9ca3af;'>© 2026 {{props:logo}} Inc. All rights reserved.</div>",
    "<div style='display:flex;gap:12px;font-size:14px;color:#4b5563;'>",
    "<span>Privacy</span><span>Terms</span>",
    "</div>",
    "</div>",
    "</footer>"
  ].join(""),
  labelProp: "logo",
  badges: ["Block", "Footer"],
};

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
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
  name: "zero-block-footer",
  version: "1.0.0",
  title: "Footer Block",
  elementSelector: "zero-block-footer",
  group: "Design Blocks",
  iconName: "layout-icon.png",
})
@applyGlobalStyles()
export class ZeroBlockFooter extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) {
      return {
        kind: "generic",
        templateHtml: `<zero-block-footer-1.0.0></zero-block-footer-1.0.0>`
      };
    }
    const logo = escapeStudio(config?.props?.logo ?? config?.studio?.props?.logo ?? "BrandName");
    const copyright = escapeStudio(config?.props?.copyright ?? config?.studio?.props?.copyright ?? "");
    const columnsJson = escapeStudio(config?.props?.columnsJson ?? config?.studio?.props?.columnsJson ?? "[]");
    const layout = escapeStudio(config?.props?.layout ?? config?.studio?.props?.layout ?? "layout-1");
    const themeStyle = escapeStudio(config?.props?.themeStyle ?? config?.studio?.props?.themeStyle ?? "light");

    return {
      kind: "generic",
      templateHtml: `
        <zero-block-footer-1.0.0
          logo="${logo}"
          copyright="${copyright}"
          columns-json="${columnsJson}"
          layout="${layout}"
          theme-style="${themeStyle}"
        ></zero-block-footer-1.0.0>
      `
    };
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
      --footer-bg: var(--uiv-surface-color, #ffffff);
      --footer-text: var(--uiv-text-color, #1f2937);
      --footer-lead: #4b5563;
      --footer-border: var(--uiv-border-color, #e5e7eb);
      --footer-accent: var(--uiv-primary-color, #6366f1);
    }

    footer {
      padding: 60px 5% 40px 5%;
      background: var(--footer-bg);
      color: var(--footer-text);
      border-top: 1px solid var(--footer-border);
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    footer.theme-dark {
      --footer-bg: #111827;
      --footer-text: #f9fafb;
      --footer-border: #374151;
      --footer-lead: #9ca3af;
    }

    .container {
      max-width: 1100px;
      margin: 0 auto;
    }

    /* ─── Layout 1: Multi-Column ─── */
    .columns-row {
      display: flex;
      justify-content: space-between;
      gap: 40px;
      margin-bottom: 50px;
    }

    .brand-section {
      flex: 1.5;
      max-width: 320px;
    }

    .brand-title {
      font-size: 1.35rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      margin-bottom: 12px;
    }

    .brand-desc {
      font-size: 0.9rem;
      line-height: 1.5;
      color: var(--footer-lead);
    }

    .links-section {
      flex: 2.5;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
      gap: 30px;
    }

    h4 {
      font-size: 0.88rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin: 0 0 16px 0;
      color: var(--footer-accent);
    }

    .link-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .link-list a {
      font-size: 0.9rem;
      color: var(--footer-lead);
      text-decoration: none;
      transition: color 0.2s ease;
    }

    .link-list a:hover {
      color: var(--footer-text);
    }

    .bottom-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 30px;
      border-top: 1px solid var(--footer-border);
      font-size: 0.88rem;
      color: var(--footer-lead);
    }

    /* ─── Layout 2: Simple Inline ─── */
    .inline-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
    }

    .social-links {
      display: flex;
      gap: 16px;
    }

    .social-link {
      font-size: 0.94rem;
      font-weight: 600;
      color: var(--footer-lead);
      text-decoration: none;
      transition: color 0.2s ease;
    }

    .social-link:hover {
      color: var(--footer-accent);
    }

    @media (max-width: 768px) {
      .columns-row {
        flex-direction: column;
        gap: 30px;
      }
      .inline-row, .bottom-row {
        flex-direction: column;
        gap: 16px;
        text-align: center;
      }
    }
  `;

  @property({ type: String }) logo = "BrandName";
  @property({ type: String }) copyright = "© 2026 BrandName Inc. All rights reserved.";
  @property({ type: String, attribute: "columns-json" }) columnsJson = '[{"title":"Product","links":[{"label":"Features","href":"#"},{"label":"Pricing","href":"#"},{"label":"Releases","href":"#"}]},{"title":"Resources","links":[{"label":"Blog","href":"#"},{"label":"Support","href":"#"},{"label":"Docs","href":"#"}]},{"title":"Legal","links":[{"label":"Privacy","href":"#"},{"label":"Terms","href":"#"},{"label":"Cookies","href":"#"}]}]';
  @property({ type: String }) layout = "layout-1";
  @property({ type: String, attribute: "theme-style" }) themeStyle = "light";

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Brand Text",
    fieldMappings: "logo"
  })
  get logoConfig() { return this.logo; }
  set logoConfig(val: string) { this.logo = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Copyright Statement",
    fieldMappings: "copyright"
  })
  get copyrightConfig() { return this.copyright; }
  set copyrightConfig(val: string) { this.copyright = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Footer Directory JSON",
    fieldMappings: "columnsJson"
  })
  get columnsJsonConfig() { return this.columnsJson; }
  set columnsJsonConfig(val: string) { this.columnsJson = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Layout Display",
    fieldMappings: "layout",
    optionItems: [
      { label: "Multi-Column Links Directory", value: "layout-1" },
      { label: "Minimalist Inline Banner", value: "layout-2" }
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
      { label: "Standard Dark", value: "dark" }
    ]
  })
  get themeStyleConfig() { return this.themeStyle; }
  set themeStyleConfig(val: string) { this.themeStyle = val || "light"; }

  private parseColumns(): FooterColumn[] {
    try {
      return JSON.parse(this.columnsJson);
    } catch (e) {
      return [];
    }
  }

  render() {
    const cols = this.parseColumns();

    return html`
      <footer class="theme-${this.themeStyle} layout-${this.layout}">
        <div class="container">
          ${this.layout === "layout-1" ? html`
            <div class="columns-row">
              <div class="brand-section">
                <div class="brand-title">${this.logo}</div>
                <div class="brand-desc">Constructing beautiful web component layout systems dynamically with visual studio interface integrations.</div>
              </div>
              <div class="links-section">
                ${cols.map(c => html`
                  <div>
                    <h4>${c.title}</h4>
                    <ul class="link-list">
                      ${c.links.map(l => html`
                        <li><a href="${l.href}">${l.label}</a></li>
                      `)}
                    </ul>
                  </div>
                `)}
              </div>
            </div>
            <div class="bottom-row">
              <div>${this.copyright}</div>
              <div class="social-links">
                <a class="social-link" href="#">Twitter</a>
                <a class="social-link" href="#">GitHub</a>
                <a class="social-link" href="#">Discord</a>
              </div>
            </div>
          ` : html`
            <div class="inline-row">
              <div>${this.copyright}</div>
              <div class="social-links">
                <a class="social-link" href="#">Privacy Policy</a>
                <a class="social-link" href="#">Terms of Use</a>
                <a class="social-link" href="#">Socials</a>
              </div>
            </div>
          `}
        </div>
      </footer>
    `;
  }
}
