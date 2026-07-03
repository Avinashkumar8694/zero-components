// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

export const studioTemplate: ZeroStudioTemplate = {
  kind: "generic",
  templateHtml: [
    "<section style='padding:48px 24px;background:#ffffff;text-align:center;font-family:inherit;'>",
    "<h2 style='font-size:28px;font-weight:700;color:#111827;'>{{props:title}}</h2>",
    "<p style='font-size:15px;color:#4b5563;max-width:500px;margin:8px auto 32px;'>{{props:lead}}</p>",
    "<div style='display:flex;gap:20px;justify-content:center;'>",
    "<div style='flex:1;padding:20px;border:1px solid #e5e7eb;border-radius:8px;'>",
    "<div style='font-size:24px;margin-bottom:8px;'>⚡</div>",
    "<h3 style='font-size:16px;font-weight:600;margin-bottom:4px;'>Feature 1</h3>",
    "<p style='font-size:13px;color:#6b7280;margin:0;'>Short feature description goes here.</p>",
    "</div>",
    "<div style='flex:1;padding:20px;border:1px solid #e5e7eb;border-radius:8px;'>",
    "<div style='font-size:24px;margin-bottom:8px;'>🛡️</div>",
    "<h3 style='font-size:16px;font-weight:600;margin-bottom:4px;'>Feature 2</h3>",
    "<p style='font-size:13px;color:#6b7280;margin:0;'>Short feature description goes here.</p>",
    "</div>",
    "</div>",
    "</section>"
  ].join(""),
  labelProp: "title",
  badges: ["Block", "Features"],
};

interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
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
  name: "zero-block-feature",
  version: "1.0.0",
  title: "Feature Block",
  elementSelector: "zero-block-feature",
  group: "Design Blocks",
  iconName: "layout-icon.png",
})
@applyGlobalStyles()
export class ZeroBlockFeature extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) {
      return {
        kind: "generic",
        templateHtml: `<zero-block-feature-1.0.0></zero-block-feature-1.0.0>`
      };
    }
    const title = escapeStudio(config?.props?.title ?? config?.studio?.props?.title ?? "Core Highlights");
    const lead = escapeStudio(config?.props?.lead ?? config?.studio?.props?.lead ?? "");
    const featuresJson = escapeStudio(config?.props?.featuresJson ?? config?.studio?.props?.featuresJson ?? "[]");
    const splitImage = escapeStudio(config?.props?.splitImage ?? config?.studio?.props?.splitImage ?? "");
    const layout = escapeStudio(config?.props?.layout ?? config?.studio?.props?.layout ?? "layout-1");
    const themeStyle = escapeStudio(config?.props?.themeStyle ?? config?.studio?.props?.themeStyle ?? "light");

    return {
      kind: "generic",
      templateHtml: `
        <zero-block-feature-1.0.0
          title="${title}"
          lead="${lead}"
          features-json="${featuresJson}"
          split-image="${splitImage}"
          layout="${layout}"
          theme-style="${themeStyle}"
        ></zero-block-feature-1.0.0>
      `
    };
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
      --feat-bg: var(--uiv-surface-color, #ffffff);
      --feat-title-color: var(--uiv-text-color, #111827);
      --feat-lead-color: #4b5563;
      --feat-card-bg: var(--uiv-surface-color, #ffffff);
      --feat-card-border: var(--uiv-border-color, #e5e7eb);
      --feat-accent: var(--uiv-primary-color, #6366f1);
    }

    section {
      padding: 80px 5%;
      background: var(--feat-bg);
      color: var(--feat-title-color);
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    section.theme-dark {
      --feat-bg: #111827;
      --feat-title-color: #f9fafb;
      --feat-lead-color: #9ca3af;
      --feat-card-bg: #1f2937;
      --feat-card-border: #374151;
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
      color: var(--feat-lead-color);
      margin: 0;
    }

    /* ─── Layout 1: 3-Column Card Grid ─── */
    .grid-3col {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
    }

    .feat-card {
      padding: 35px 25px;
      background: var(--feat-card-bg);
      border: 1px solid var(--feat-card-border);
      border-radius: 8px;
      text-align: center;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .feat-card:hover {
      transform: translateY(-2px);
      box-shadow: var(--uiv-shadow-depth, 0 10px 20px rgba(0,0,0,0.05));
    }

    .feat-icon {
      font-size: 2rem;
      color: var(--feat-accent);
      margin-bottom: 20px;
    }

    h3 {
      font-size: 1.25rem;
      font-weight: 700;
      margin: 0 0 8px 0;
    }

    .feat-desc {
      font-size: 0.94rem;
      line-height: 1.5;
      color: var(--feat-lead-color);
      margin: 0;
    }

    /* ─── Layout 2: Split Image-Left ─── */
    .split-layout {
      display: flex;
      align-items: center;
      gap: 50px;
    }

    .split-col {
      flex: 1;
    }

    .split-img {
      max-width: 100%;
      height: auto;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.06);
    }

    .list-vertical {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .list-item {
      display: flex;
      gap: 16px;
      align-items: flex-start;
      text-align: left;
    }

    .list-icon {
      font-size: 1.5rem;
      margin-top: 2px;
    }

    /* ─── Layout 3: 4-Column List ─── */
    .grid-4col {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 24px;
    }

    .flat-card {
      padding: 16px;
      text-align: left;
      border-left: 3px solid var(--feat-accent);
    }

    .flat-card h3 {
      font-size: 1.1rem;
      margin-bottom: 4px;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .split-layout {
        flex-direction: column !important;
      }
    }
  `;

  @property({ type: String }) title = "Core Highlights";
  @property({ type: String }) lead = "Discover the main technical advantages and features of our platform.";
  @property({ type: String, attribute: "features-json" }) featuresJson = '[{"icon":"⚡","title":"High Performance","desc":"Lightning fast speeds and response cycles."},{"icon":"🛡️","title":"Secure Vault","desc":"Bank-grade encryption by default."},{"icon":"⚙️","title":"Custom Flows","desc":"Automate anything with modular scripting."}]';
  @property({ type: String, attribute: "split-image" }) splitImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60";
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
    displayLabel: "Section Lead Copy",
    fieldMappings: "lead"
  })
  get leadConfig() { return this.lead; }
  set leadConfig(val: string) { this.lead = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Features JSON",
    fieldMappings: "featuresJson"
  })
  get featuresJsonConfig() { return this.featuresJson; }
  set featuresJsonConfig(val: string) { this.featuresJson = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Split Layout Image URL",
    fieldMappings: "splitImage"
  })
  get splitImageConfig() { return this.splitImage; }
  set splitImageConfig(val: string) { this.splitImage = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Layout Display",
    fieldMappings: "layout",
    optionItems: [
      { label: "3-Column Card Grid", value: "layout-1" },
      { label: "Split Image-Left Feature List", value: "layout-2" },
      { label: "4-Column Accent Bullet Cards", value: "layout-3" }
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

  private parseFeatures(): FeatureItem[] {
    try {
      return JSON.parse(this.featuresJson);
    } catch (e) {
      return [];
    }
  }

  render() {
    const list = this.parseFeatures();

    return html`
      <section class="theme-${this.themeStyle} layout-${this.layout}">
        <div class="header-area">
          <h2>${this.title}</h2>
          <p class="lead">${this.lead}</p>
        </div>

        ${this.layout === "layout-1" ? html`
          <div class="grid-3col">
            ${list.map(item => html`
              <div class="feat-card">
                <div class="feat-icon">${item.icon}</div>
                <h3>${item.title}</h3>
                <p class="feat-desc">${item.desc}</p>
              </div>
            `)}
          </div>
        ` : ""}

        ${this.layout === "layout-2" ? html`
          <div class="split-layout">
            <div class="split-col">
              <img class="split-img" src="${this.splitImage}" alt="featured graphics">
            </div>
            <div class="split-col">
              <div class="list-vertical">
                ${list.map(item => html`
                  <div class="list-item">
                    <span class="list-icon">${item.icon}</span>
                    <div>
                      <h3>${item.title}</h3>
                      <p class="feat-desc">${item.desc}</p>
                    </div>
                  </div>
                `)}
              </div>
            </div>
          </div>
        ` : ""}

        ${this.layout === "layout-3" ? html`
          <div class="grid-4col">
            ${list.map(item => html`
              <div class="flat-card">
                <h3>${item.icon} ${item.title}</h3>
                <p class="feat-desc">${item.desc}</p>
              </div>
            `)}
          </div>
        ` : ""}
      </section>
    `;
  }
}
