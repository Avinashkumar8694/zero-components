// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

export const studioTemplate: ZeroStudioTemplate = {
  kind: "generic",
  templateHtml: [
    "<section style='padding:40px 24px;background:#ffffff;font-family:inherit;'>",
    "<div style='max-width:800px;margin:0 auto;'>",
    "<h2 style='font-size:24px;font-weight:700;color:#111827;margin-bottom:12px;'>{{props:title}}</h2>",
    "<p style='font-size:14px;color:#4b5563;line-height:1.6;'>{{props:content}}</p>",
    "</div>",
    "</section>"
  ].join(""),
  labelProp: "title",
  badges: ["Block", "Content"],
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
  name: "zero-block-content",
  version: "1.0.0",
  title: "Content Block",
  elementSelector: "zero-block-content",
  group: "Design Blocks",
  iconName: "layout-icon.png",
})
@applyGlobalStyles()
export class ZeroBlockContent extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) {
      return {
        kind: "generic",
        templateHtml: `<zero-block-content-1.0.0></zero-block-content-1.0.0>`
      };
    }
    const title = escapeStudio(config?.props?.title ?? config?.studio?.props?.title ?? "Beautiful Content Block");
    const content = escapeStudio(config?.props?.content ?? config?.studio?.props?.content ?? "");
    const sideContent = escapeStudio(config?.props?.sideContent ?? config?.studio?.props?.sideContent ?? "");
    const mediaUrl = escapeStudio(config?.props?.mediaUrl ?? config?.studio?.props?.mediaUrl ?? "");
    const layout = escapeStudio(config?.props?.layout ?? config?.studio?.props?.layout ?? "layout-1");
    const themeStyle = escapeStudio(config?.props?.themeStyle ?? config?.studio?.props?.themeStyle ?? "light");

    return {
      kind: "generic",
      templateHtml: `
        <zero-block-content-1.0.0
          title="${title}"
          content="${content}"
          side-content="${sideContent}"
          media-url="${mediaUrl}"
          layout="${layout}"
          theme-style="${themeStyle}"
        ></zero-block-content-1.0.0>
      `
    };
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
      --content-bg: var(--uiv-surface-color, #ffffff);
      --content-text: var(--uiv-text-color, #1f2937);
      --content-lead: #4b5563;
      --content-accent: var(--uiv-primary-color, #6366f1);
    }

    section {
      padding: 70px 5%;
      background: var(--content-bg);
      color: var(--content-text);
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    section.theme-dark {
      --content-bg: #111827;
      --content-text: #f9fafb;
      --content-lead: #9ca3af;
    }

    .container {
      max-width: 1100px;
      margin: 0 auto;
    }

    h2 {
      font-size: 2.1rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      margin: 0 0 20px 0;
      line-height: 1.25;
    }

    p {
      font-size: 1.05rem;
      line-height: 1.65;
      color: var(--content-lead);
      margin: 0 0 16px 0;
    }

    /* ─── Layout 1: Split Text Column ─── */
    .split-text {
      display: flex;
      gap: 50px;
      align-items: flex-start;
    }

    .split-col-left {
      flex: 1;
    }

    .split-col-right {
      flex: 1.3;
    }

    /* ─── Layout 2: Side-by-Side Image/Text ─── */
    .split-media {
      display: flex;
      gap: 50px;
      align-items: center;
    }

    .media-col {
      flex: 1;
      display: flex;
      justify-content: center;
    }

    .media-img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      box-shadow: 0 8px 25px rgba(0,0,0,0.06);
    }

    .text-col {
      flex: 1.2;
    }

    /* Mobile */
    @media (max-width: 768px) {
      .split-text, .split-media {
        flex-direction: column !important;
      }
    }
  `;

  @property({ type: String }) title = "Beautiful Content Block";
  @property({ type: String }) content = "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.";
  @property({ type: String, attribute: "side-content" }) sideContent = "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.";
  @property({ type: String, attribute: "media-url" }) mediaUrl = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60";
  @property({ type: String }) layout = "layout-1";
  @property({ type: String, attribute: "theme-style" }) themeStyle = "light";

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Content Title",
    fieldMappings: "title"
  })
  get titleConfig() { return this.title; }
  set titleConfig(val: string) { this.title = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXTAREA,
    displayLabel: "Primary Paragraph Copy",
    fieldMappings: "content"
  })
  get contentConfig() { return this.content; }
  set contentConfig(val: string) { this.content = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXTAREA,
    displayLabel: "Secondary Copy",
    fieldMappings: "sideContent"
  })
  get sideContentConfig() { return this.sideContent; }
  set sideContentConfig(val: string) { this.sideContent = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Media Image URL",
    fieldMappings: "mediaUrl"
  })
  get mediaUrlConfig() { return this.mediaUrl; }
  set mediaUrlConfig(val: string) { this.mediaUrl = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Layout Alignment",
    fieldMappings: "layout",
    optionItems: [
      { label: "Split Text-Columns (Copy Side-by-Side)", value: "layout-1" },
      { label: "Dual Media (Image Left, Copy Right)", value: "layout-2" }
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

  render() {
    return html`
      <section class="theme-${this.themeStyle} layout-${this.layout}">
        <div class="container">
          ${this.layout === "layout-1" ? html`
            <div class="split-text">
              <div class="split-col-left">
                <h2>${this.title}</h2>
              </div>
              <div class="split-col-right">
                <p>${this.content}</p>
                <p>${this.sideContent}</p>
              </div>
            </div>
          ` : ""}

          ${this.layout === "layout-2" ? html`
            <div class="split-media">
              <div class="media-col">
                <img class="media-img" src="${this.mediaUrl}" alt="content display graphic">
              </div>
              <div class="text-col">
                <h2>${this.title}</h2>
                <p>${this.content}</p>
                <p>${this.sideContent}</p>
              </div>
            </div>
          ` : ""}
        </div>
      </section>
    `;
  }
}
