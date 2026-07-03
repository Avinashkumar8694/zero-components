// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

export const studioTemplate: ZeroStudioTemplate = {
  kind: "generic",
  templateHtml: [
    "<section style='padding:48px 24px;background:#f3f4f6;text-align:center;border-radius:12px;font-family:inherit;'>",
    "<h2 style='font-size:24px;font-weight:700;color:#111827;margin-bottom:8px;'>{{props:title}}</h2>",
    "<p style='font-size:14px;color:#4b5563;max-width:500px;margin:0 auto 20px;'>{{props:lead}}</p>",
    "<div style='display:flex;justify-content:center;gap:8px;'>",
    "<input type='text' placeholder='Enter your email' style='padding:8px 12px;border:1px solid #d1d5db;border-radius:6px;font-size:13px;outline:none;' disabled>",
    "<span style='padding:8px 16px;background:var(--uiv-primary-color,#6366f1);color:#ffffff;border-radius:6px;font-size:13px;font-weight:600;'>Subscribe</span>",
    "</div>",
    "</section>"
  ].join(""),
  labelProp: "title",
  badges: ["Block", "CTA"],
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
  name: "zero-block-cta",
  version: "1.0.0",
  title: "CTA Block",
  elementSelector: "zero-block-cta",
  group: "Design Blocks",
  iconName: "layout-icon.png",
})
@applyGlobalStyles()
export class ZeroBlockCta extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) {
      return {
        kind: "generic",
        templateHtml: `<zero-block-cta-1.0.0></zero-block-cta-1.0.0>`
      };
    }
    const title = escapeStudio(config?.props?.title ?? config?.studio?.props?.title ?? "Stay Updated with Us");
    const lead = escapeStudio(config?.props?.lead ?? config?.studio?.props?.lead ?? "");
    const ctaText = escapeStudio(config?.props?.ctaText ?? config?.studio?.props?.ctaText ?? "Get Started");
    const ctaUrl = escapeStudio(config?.props?.ctaUrl ?? config?.studio?.props?.ctaUrl ?? "#");
    const placeholder = escapeStudio(config?.props?.placeholder ?? config?.studio?.props?.placeholder ?? "");
    const buttonText = escapeStudio(config?.props?.buttonText ?? config?.studio?.props?.buttonText ?? "Subscribe");
    const layout = escapeStudio(config?.props?.layout ?? config?.studio?.props?.layout ?? "layout-1");
    const themeStyle = escapeStudio(config?.props?.themeStyle ?? config?.studio?.props?.themeStyle ?? "light");

    return {
      kind: "generic",
      templateHtml: `
        <zero-block-cta-1.0.0
          title="${title}"
          lead="${lead}"
          cta-text="${ctaText}"
          cta-url="${ctaUrl}"
          placeholder="${placeholder}"
          button-text="${buttonText}"
          layout="${layout}"
          theme-style="${themeStyle}"
        ></zero-block-cta-1.0.0>
      `
    };
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
      --cta-bg: var(--uiv-surface-color, #ffffff);
      --cta-text: var(--uiv-text-color, #111827);
      --cta-lead: #4b5563;
      --cta-accent: var(--uiv-primary-color, #6366f1);
    }

    section {
      padding: 70px 6%;
      background: var(--cta-bg);
      color: var(--cta-text);
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    section.theme-dark {
      --cta-bg: #111827;
      --cta-text: #f9fafb;
      --cta-lead: #9ca3af;
    }

    section.theme-gradient {
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%);
    }

    .box-centered {
      text-align: center;
      max-width: 650px;
      margin: 0 auto;
    }

    .box-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 30px;
      max-width: 1100px;
      margin: 0 auto;
    }

    h2 {
      font-size: 2.1rem;
      font-weight: 800;
      margin: 0 0 12px 0;
      letter-spacing: -0.02em;
    }

    p.lead {
      font-size: 1.05rem;
      line-height: 1.5;
      color: var(--cta-lead);
      margin: 0 0 28px 0;
    }

    .box-row h2 {
      margin: 0 0 4px 0;
      font-size: 1.85rem;
    }

    .box-row p.lead {
      margin: 0;
    }

    /* Form Styles */
    .form-group {
      display: inline-flex;
      gap: 10px;
      width: 100%;
      max-width: 450px;
    }

    input[type="email"] {
      flex: 1;
      padding: 12px 16px;
      font-size: 0.95rem;
      border: 1px solid var(--uiv-border-color, #d1d5db);
      border-radius: 6px;
      outline: none;
      background: var(--uiv-surface-color, #ffffff);
      color: inherit;
      box-shadow: inset 0 1px 3px rgba(0,0,0,0.05);
    }

    input[type="email"]:focus {
      border-color: var(--cta-accent);
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
    }

    .btn-submit {
      padding: 12px 24px;
      font-size: 0.95rem;
      font-weight: 600;
      color: #ffffff;
      background: var(--cta-accent);
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: opacity 0.2s ease;
    }

    .btn-submit:hover {
      opacity: 0.95;
    }

    .btn-redirect {
      padding: 13px 28px;
      font-size: 0.95rem;
      font-weight: 600;
      color: #ffffff;
      background: var(--cta-accent);
      border: none;
      border-radius: 6px;
      cursor: pointer;
      text-decoration: none;
      transition: opacity 0.2s ease, transform 0.15s ease;
    }

    .btn-redirect:hover {
      opacity: 0.95;
      transform: translateY(-1px);
    }

    @media (max-width: 768px) {
      .box-row {
        flex-direction: column !important;
        text-align: center !important;
      }
      .box-row .btn-redirect {
        width: 100%;
        box-sizing: border-box;
      }
    }
  `;

  @property({ type: String }) title = "Stay Updated with Us";
  @property({ type: String }) lead = "Join our newsletter registry and get notifications about product drops.";
  @property({ type: String, attribute: "cta-text" }) ctaText = "Get Started";
  @property({ type: String, attribute: "cta-url" }) ctaUrl = "#";
  @property({ type: String }) placeholder = "Enter your email address";
  @property({ type: String, attribute: "button-text" }) buttonText = "Subscribe";
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
    displayLabel: "Redirect Button Label",
    fieldMappings: "ctaText"
  })
  get ctaTextConfig() { return this.ctaText; }
  set ctaTextConfig(val: string) { this.ctaText = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Redirect Target URL",
    fieldMappings: "ctaUrl"
  })
  get ctaUrlConfig() { return this.ctaUrl; }
  set ctaUrlConfig(val: string) { this.ctaUrl = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Input Field Placeholder",
    fieldMappings: "placeholder"
  })
  get placeholderConfig() { return this.placeholder; }
  set placeholderConfig(val: string) { this.placeholder = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Form Button Text",
    fieldMappings: "buttonText"
  })
  get buttonTextConfig() { return this.buttonText; }
  set buttonTextConfig(val: string) { this.buttonText = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Layout Display",
    fieldMappings: "layout",
    optionItems: [
      { label: "Centered Newsletter Form", value: "layout-1" },
      { label: "Horizontal Conversion Banner", value: "layout-2" }
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
      { label: "Gradient Vignette", value: "gradient" }
    ]
  })
  get themeStyleConfig() { return this.themeStyle; }
  set themeStyleConfig(val: string) { this.themeStyle = val || "light"; }

  @RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: "On Submit",
    eventTrigger: "submit"
  })
  handleSubmit(event: Event) {
    event.preventDefault();
    const input = this.shadowRoot?.querySelector('input[type="email"]') as HTMLInputElement;
    const emailVal = input ? input.value : "";
    this.dispatchEvent(new CustomEvent("submit", {
      detail: { email: emailVal },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <section class="theme-${this.themeStyle} layout-${this.layout}">
        ${this.layout === "layout-1" ? html`
          <div class="box-centered">
            <h2>${this.title}</h2>
            <p class="lead">${this.lead}</p>
            <form class="form-group" @submit=${this.handleSubmit}>
              <input type="email" placeholder="${this.placeholder}" required>
              <button type="submit" class="btn-submit">${this.buttonText}</button>
            </form>
          </div>
        ` : html`
          <div class="box-row">
            <div style="text-align: left;">
              <h2>${this.title}</h2>
              <p class="lead">${this.lead}</p>
            </div>
            <a class="btn-redirect" href="${this.ctaUrl}">${this.ctaText}</a>
          </div>
        `}
      </section>
    `;
  }
}
