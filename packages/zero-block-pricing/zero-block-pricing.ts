// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

export const studioTemplate: ZeroStudioTemplate = {
  kind: "generic",
  templateHtml: [
    "<section style='padding:48px 24px;background:#f9fafb;text-align:center;font-family:inherit;'>",
    "<h2 style='font-size:28px;font-weight:700;color:#111827;margin-bottom:8px;'>{{props:title}}</h2>",
    "<p style='font-size:15px;color:#4b5563;max-width:500px;margin:0 auto 32px;'>{{props:lead}}</p>",
    "<div style='display:flex;gap:20px;justify-content:center;'>",
    "<div style='flex:1;padding:24px;border:1px solid #e5e7eb;border-radius:12px;background:#ffffff;text-align:center;'>",
    "<h3 style='font-size:16px;font-weight:600;margin-bottom:8px;'>Starter</h3>",
    "<div style='font-size:32px;font-weight:800;margin-bottom:16px;'>$9<span style='font-size:14px;color:#6b7280;'>/mo</span></div>",
    "<ul style='list-style:none;padding:0;font-size:13px;color:#4b5563;margin-bottom:20px;'><li>Basic features</li><li>Single member</li></ul>",
    "<span style='display:block;padding:8px 16px;background:var(--uiv-primary-color,#6366f1);color:#ffffff;border-radius:6px;font-size:13px;font-weight:600;'>Get Started</span>",
    "</div>",
    "</div>",
    "</section>"
  ].join(""),
  labelProp: "title",
  badges: ["Block", "Pricing"],
};

interface PricingItem {
  title: string;
  price: string;
  period: string;
  features: string[];
  ctaText: string;
  ctaUrl: string;
  featured?: boolean;
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
  name: "zero-block-pricing",
  version: "1.0.0",
  title: "Pricing Block",
  elementSelector: "zero-block-pricing",
  group: "Design Blocks",
  iconName: "layout-icon.png",
})
@applyGlobalStyles()
export class ZeroBlockPricing extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) {
      return {
        kind: "generic",
        templateHtml: `<zero-block-pricing-1.0.0></zero-block-pricing-1.0.0>`
      };
    }
    const title = escapeStudio(config?.props?.title ?? config?.studio?.props?.title ?? "Flexible Subscriptions");
    const lead = escapeStudio(config?.props?.lead ?? config?.studio?.props?.lead ?? "");
    const pricingJson = escapeStudio(config?.props?.pricingJson ?? config?.studio?.props?.pricingJson ?? "[]");
    const layout = escapeStudio(config?.props?.layout ?? config?.studio?.props?.layout ?? "layout-1");
    const themeStyle = escapeStudio(config?.props?.themeStyle ?? config?.studio?.props?.themeStyle ?? "light");

    return {
      kind: "generic",
      templateHtml: `
        <zero-block-pricing-1.0.0
          title="${title}"
          lead="${lead}"
          pricing-json="${pricingJson}"
          layout="${layout}"
          theme-style="${themeStyle}"
        ></zero-block-pricing-1.0.0>
      `
    };
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
      --price-bg: var(--uiv-surface-color, #ffffff);
      --price-text: var(--uiv-text-color, #111827);
      --price-lead: #4b5563;
      --price-card-bg: var(--uiv-surface-color, #ffffff);
      --price-card-border: var(--uiv-border-color, #e5e7eb);
      --price-accent: var(--uiv-primary-color, #6366f1);
    }

    section {
      padding: 80px 5%;
      background: var(--price-bg);
      color: var(--price-text);
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    section.theme-dark {
      --price-bg: #111827;
      --price-text: #f9fafb;
      --price-lead: #9ca3af;
      --price-card-bg: #1f2937;
      --price-card-border: #374151;
    }

    .header-area {
      text-align: center;
      max-width: 700px;
      margin: 0 auto 50px auto;
    }

    h2 {
      font-size: 2.25rem;
      font-weight: 800;
      margin: 0 0 12px 0;
      letter-spacing: -0.02em;
    }

    p.lead {
      font-size: 1.05rem;
      line-height: 1.6;
      color: var(--price-lead);
      margin: 0;
    }

    /* ─── Grid layout ─── */
    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
      max-width: 1100px;
      margin: 0 auto;
      align-items: center;
    }

    .pricing-card {
      padding: 45px 30px;
      background: var(--price-card-bg);
      border: 1px solid var(--price-card-border);
      border-radius: 12px;
      text-align: center;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      position: relative;
    }

    .pricing-card.featured {
      border-color: var(--price-accent);
      box-shadow: 0 15px 30px rgba(99, 102, 241, 0.08);
      transform: scale(1.03);
      z-index: 2;
    }

    .featured-badge {
      position: absolute;
      top: 15px;
      left: 50%;
      transform: translateX(-50%);
      padding: 4px 12px;
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #ffffff;
      background: var(--price-accent);
      border-radius: 100px;
    }

    h3 {
      font-size: 1.4rem;
      font-weight: 700;
      margin: 0 0 15px 0;
    }

    .price-value {
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 24px;
      letter-spacing: -0.03em;
    }

    .price-period {
      font-size: 0.95rem;
      font-weight: 500;
      color: var(--price-lead);
    }

    ul.features-list {
      list-style: none;
      padding: 0;
      margin: 0 0 35px 0;
      text-align: left;
      display: inline-block;
    }

    ul.features-list li {
      font-size: 0.94rem;
      color: var(--price-lead);
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    ul.features-list li::before {
      content: "✓";
      color: var(--price-accent);
      font-weight: bold;
    }

    .btn-buy {
      display: block;
      padding: 12px 24px;
      font-size: 0.95rem;
      font-weight: 600;
      color: #ffffff;
      background: var(--price-accent);
      border: none;
      border-radius: 6px;
      cursor: pointer;
      text-decoration: none;
      transition: opacity 0.2s ease;
    }

    .pricing-card:not(.featured) .btn-buy {
      background: transparent;
      border: 1px solid var(--price-accent);
      color: var(--price-accent);
    }

    .btn-buy:hover {
      opacity: 0.9;
    }

    /* Mobile */
    @media (max-width: 768px) {
      .pricing-grid {
        grid-template-columns: 1fr;
      }
      .pricing-card.featured {
        transform: scale(1);
      }
    }
  `;

  @property({ type: String }) title = "Flexible Subscriptions";
  @property({ type: String }) lead = "Choose the ideal plan to scale your digital workflow.";
  @property({ type: String, attribute: "pricing-json" }) pricingJson = '[{"title":"Basic","price":"$9","period":"mo","features":["1 User Workspace","Standard Operations","Community Support"],"ctaText":"Choose Basic","ctaUrl":"#"},{"title":"Professional","price":"$29","period":"mo","features":["10 User Workspaces","Priority Operations","24/7 Support"],"ctaText":"Choose Pro","ctaUrl":"#","featured":true},{"title":"Enterprise","price":"$99","period":"mo","features":["Unlimited Workspaces","Dedicated Clusters","SLA Guarantee"],"ctaText":"Choose Enterprise","ctaUrl":"#"}]';
  @property({ type: String }) layout = "layout-1";
  @property({ type: String, attribute: "theme-style" }) themeStyle = "light";

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Section Title",
    fieldMappings: "title"
  })
  get titleConfig() { return this.title; }
  set titleConfig(val: string) { this.title = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Section Subtitle Copy",
    fieldMappings: "lead"
  })
  get leadConfig() { return this.lead; }
  set leadConfig(val: string) { this.lead = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXTAREA,
    displayLabel: "Pricing Cards JSON",
    fieldMappings: "pricingJson"
  })
  get pricingJsonConfig() { return this.pricingJson; }
  set pricingJsonConfig(val: string) { this.pricingJson = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Layout Display",
    fieldMappings: "layout",
    optionItems: [
      { label: "Standard Columns Grid", value: "layout-1" },
      { label: "Focused Single Spotlight", value: "layout-2" }
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

  private parsePricing(): PricingItem[] {
    try {
      return JSON.parse(this.pricingJson);
    } catch (e) {
      return [];
    }
  }

  render() {
    let list = this.parsePricing();
    if (this.layout === "layout-2" && list.length > 0) {
      // Find featured plan or fall back to first item
      const featured = list.find(item => item.featured) || list[0];
      list = [featured];
    }

    return html`
      <section class="theme-${this.themeStyle} layout-${this.layout}">
        <div class="header-area">
          <h2>${this.title}</h2>
          <p class="lead">${this.lead}</p>
        </div>

        <div class="pricing-grid">
          ${list.map(item => html`
            <div class="pricing-card ${item.featured ? "featured" : ""}">
              ${item.featured ? html`<div class="featured-badge">Popular</div>` : ""}
              <h3>${item.title}</h3>
              <div class="price-value">
                ${item.price}
                <span class="price-period">/${item.period}</span>
              </div>
              <ul class="features-list">
                ${item.features.map(f => html`<li>${f}</li>`)}
              </ul>
              <a class="btn-buy" href="${item.ctaUrl}">${item.ctaText}</a>
            </div>
          `)}
        </div>
      </section>
    `;
  }
}
