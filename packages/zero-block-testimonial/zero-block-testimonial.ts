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
    "<div style='flex:1;padding:24px;border:1px solid #e5e7eb;border-radius:12px;background:#ffffff;text-align:left;'>",
    "<div style='color:#f59e0b;font-size:18px;margin-bottom:12px;'>★★★★★</div>",
    "<p style='font-size:14px;color:#4b5563;line-height:1.5;font-style:italic;margin-bottom:16px;'>\"Outstanding quality and ease of integration.\"</p>",
    "<div style='display:flex;align-items:center;gap:10px;'>",
    "<div style='width:40px;height:40px;border-radius:50%;background:#e5e7eb;'></div>",
    "<div>",
    "<h4 style='font-size:14px;font-weight:600;margin:0;'>Jane Miller</h4>",
    "<p style='font-size:12px;color:#6b7280;margin:0;'>Product Owner</p>",
    "</div>",
    "</div>",
    "</div>",
    "</div>",
    "</section>"
  ].join(""),
  labelProp: "title",
  badges: ["Block", "Testimonials"],
};

interface TestimonialItem {
  quote: string;
  rating: number;
  avatar: string;
  name: string;
  role: string;
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
  name: "zero-block-testimonial",
  version: "1.0.0",
  title: "Testimonial Block",
  elementSelector: "zero-block-testimonial",
  group: "Design Blocks",
  iconName: "layout-icon.png",
})
@applyGlobalStyles()
export class ZeroBlockTestimonial extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) {
      return {
        kind: "generic",
        templateHtml: `<zero-block-testimonial-1.0.0></zero-block-testimonial-1.0.0>`
      };
    }
    const title = escapeStudio(config?.props?.title ?? config?.studio?.props?.title ?? "Customer Stories");
    const lead = escapeStudio(config?.props?.lead ?? config?.studio?.props?.lead ?? "");
    const testimonialsJson = escapeStudio(config?.props?.testimonialsJson ?? config?.studio?.props?.testimonialsJson ?? "[]");
    const layout = escapeStudio(config?.props?.layout ?? config?.studio?.props?.layout ?? "layout-1");
    const themeStyle = escapeStudio(config?.props?.themeStyle ?? config?.studio?.props?.themeStyle ?? "light");

    return {
      kind: "generic",
      templateHtml: `
        <zero-block-testimonial-1.0.0
          title="${title}"
          lead="${lead}"
          testimonials-json="${testimonialsJson}"
          layout="${layout}"
          theme-style="${themeStyle}"
        ></zero-block-testimonial-1.0.0>
      `
    };
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
      --test-bg: var(--uiv-surface-color, #ffffff);
      --test-text: var(--uiv-text-color, #111827);
      --test-lead: #4b5563;
      --test-card-bg: var(--uiv-surface-color, #ffffff);
      --test-card-border: var(--uiv-border-color, #e5e7eb);
      --test-accent: var(--uiv-primary-color, #6366f1);
    }

    section {
      padding: 80px 5%;
      background: var(--test-bg);
      color: var(--test-text);
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    section.theme-dark {
      --test-bg: #111827;
      --test-text: #f9fafb;
      --test-lead: #9ca3af;
      --test-card-bg: #1f2937;
      --test-card-border: #374151;
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
      color: var(--test-lead);
      margin: 0;
    }

    /* ─── Layout 1: 3-Column Reviews Grid ─── */
    .grid-3col {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));
      gap: 30px;
      max-width: 1100px;
      margin: 0 auto;
    }

    .test-card {
      padding: 30px;
      background: var(--test-card-bg);
      border: 1px solid var(--test-card-border);
      border-radius: 12px;
      text-align: left;
      transition: transform 0.2s ease;
    }

    .test-card:hover {
      transform: translateY(-2px);
    }

    .stars {
      color: #fbbf24;
      font-size: 1.15rem;
      margin-bottom: 15px;
    }

    .quote-text {
      font-size: 0.96rem;
      line-height: 1.6;
      color: var(--test-lead);
      font-style: italic;
      margin: 0 0 24px 0;
    }

    .reviewer {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .rev-avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      overflow: hidden;
      border: 2px solid var(--test-card-border);
    }

    .rev-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    h4 {
      font-size: 0.95rem;
      font-weight: 700;
      margin: 0 0 2px 0;
    }

    .rev-role {
      font-size: 0.8rem;
      color: var(--test-lead);
      margin: 0;
    }

    /* ─── Layout 2: Spotlight Quote ─── */
    .spotlight {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }

    .spotlight .quote-text {
      font-size: 1.45rem;
      line-height: 1.6;
      margin-bottom: 30px;
    }

    .spotlight .reviewer {
      justify-content: center;
      flex-direction: column;
      gap: 8px;
    }

    .spotlight .rev-avatar {
      width: 64px;
      height: 64px;
    }
  `;

  @property({ type: String }) title = "What Customers Say";
  @property({ type: String }) lead = "Read reviews from some of our active global product teams.";
  @property({ type: String, attribute: "testimonials-json" }) testimonialsJson = '[{"quote":"This component library completely speeds up our layout deployments. Highly customizable and professional.","rating":5,"avatar":"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150","name":"Sarah Jenkins","role":"Tech Lead, Acme Corp"},{"quote":"Outstanding design aesthetic natively supporting dark themes and variables. Fits our requirements perfectly.","rating":5,"avatar":"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150","name":"Marcus Aurelius","role":"Lead Architect, Roma Labs"},{"quote":"Very lightweight components that load instantly without layout shifting. Highly recommended!","rating":4,"avatar":"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150","name":"Elena Rostova","role":"Creative Lead, Cybernetics Ltd"}]';
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
    displayLabel: "Reviews JSON List",
    fieldMappings: "testimonialsJson"
  })
  get testimonialsJsonConfig() { return this.testimonialsJson; }
  set testimonialsJsonConfig(val: string) { this.testimonialsJson = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Layout Display",
    fieldMappings: "layout",
    optionItems: [
      { label: "3-Column Review Cards Grid", value: "layout-1" },
      { label: "Single Spotlight Review", value: "layout-2" }
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

  private parseReviews(): TestimonialItem[] {
    try {
      return JSON.parse(this.testimonialsJson);
    } catch (e) {
      return [];
    }
  }

  private renderStars(rating: number) {
    const gold = Math.max(1, Math.min(5, Math.floor(rating)));
    return "★".repeat(gold) + "☆".repeat(5 - gold);
  }

  render() {
    let list = this.parseReviews();
    if (this.layout === "layout-2" && list.length > 0) {
      list = [list[0]]; // Showcase first review in spotlight
    }

    return html`
      <section class="theme-${this.themeStyle} layout-${this.layout}">
        <div class="header-area">
          <h2>${this.title}</h2>
          <p class="lead">${this.lead}</p>
        </div>

        ${this.layout === "layout-1" ? html`
          <div class="grid-3col">
            ${list.map(item => html`
              <div class="test-card">
                <div class="stars">${this.renderStars(item.rating)}</div>
                <p class="quote-text">"${item.quote}"</p>
                <div class="reviewer">
                  <div class="rev-avatar">
                    <img class="rev-img" src="${item.avatar}" alt="${item.name}">
                  </div>
                  <div>
                    <h4>${item.name}</h4>
                    <p class="rev-role">${item.role}</p>
                  </div>
                </div>
              </div>
            `)}
          </div>
        ` : ""}

        ${this.layout === "layout-2" && list.length > 0 ? html`
          <div class="spotlight">
            <div class="stars" style="font-size: 1.5rem;">${this.renderStars(list[0].rating)}</div>
            <p class="quote-text">"${list[0].quote}"</p>
            <div class="reviewer">
              <div class="rev-avatar">
                <img class="rev-img" src="${list[0].avatar}" alt="${list[0].name}">
              </div>
              <h4 style="font-size: 1.15rem; margin-top: 8px;">${list[0].name}</h4>
              <p class="rev-role" style="font-size: 0.9rem;">${list[0].role}</p>
            </div>
          </div>
        ` : ""}
      </section>
    `;
  }
}
