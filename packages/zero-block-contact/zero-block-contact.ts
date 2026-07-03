// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

export const studioTemplate: ZeroStudioTemplate = {
  kind: "generic",
  templateHtml: [
    "<section style='padding:48px 24px;background:#ffffff;text-align:center;font-family:inherit;'>",
    "<h2 style='font-size:28px;font-weight:700;color:#111827;margin-bottom:8px;'>{{props:title}}</h2>",
    "<p style='font-size:15px;color:#4b5563;max-width:500px;margin:0 auto 32px;'>{{props:lead}}</p>",
    "<div style='display:flex;gap:20px;justify-content:center;'>",
    "<div style='flex:1;text-align:left;max-width:350px;'>",
    "<h3 style='font-size:16px;font-weight:600;margin-bottom:8px;'>Contact Details</h3>",
    "<p style='font-size:13px;color:#4b5563;margin-bottom:4px;'>📧 {{props:email}}</p>",
    "<p style='font-size:13px;color:#4b5563;'>📞 {{props:phone}}</p>",
    "</div>",
    "<div style='flex:1.2;text-align:left;display:flex;flex-direction:column;gap:10px;'>",
    "<input type='text' placeholder='Your Name' style='padding:8px 12px;border:1px solid #d1d5db;border-radius:6px;font-size:13px;' disabled>",
    "<input type='email' placeholder='Email Address' style='padding:8px 12px;border:1px solid #d1d5db;border-radius:6px;font-size:13px;' disabled>",
    "<textarea placeholder='Message' style='padding:8px 12px;border:1px solid #d1d5db;border-radius:6px;font-size:13px;height:60px;' disabled></textarea>",
    "<span style='align-self:flex-start;padding:8px 16px;background:var(--uiv-primary-color,#6366f1);color:#ffffff;border-radius:6px;font-size:13px;font-weight:600;'>Send Message</span>",
    "</div>",
    "</div>",
    "</section>"
  ].join(""),
  labelProp: "title",
  badges: ["Block", "Contact"],
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
  name: "zero-block-contact",
  version: "1.0.0",
  title: "Contact Block",
  elementSelector: "zero-block-contact",
  group: "Design Blocks",
  iconName: "layout-icon.png",
})
@applyGlobalStyles()
export class ZeroBlockContact extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) {
      return {
        kind: "generic",
        templateHtml: `<zero-block-contact-1.0.0></zero-block-contact-1.0.0>`
      };
    }
    const title = escapeStudio(config?.props?.title ?? config?.studio?.props?.title ?? "Get In Touch");
    const lead = escapeStudio(config?.props?.lead ?? config?.studio?.props?.lead ?? "Have questions?");
    const email = escapeStudio(config?.props?.email ?? config?.studio?.props?.email ?? "contact@example.com");
    const phone = escapeStudio(config?.props?.phone ?? config?.studio?.props?.phone ?? "+1 (555) 019-2834");
    const address = escapeStudio(config?.props?.address ?? config?.studio?.props?.address ?? "100 Silicon Valley, California, USA");
    const layout = escapeStudio(config?.props?.layout ?? config?.studio?.props?.layout ?? "layout-1");
    const themeStyle = escapeStudio(config?.props?.themeStyle ?? config?.studio?.props?.themeStyle ?? "light");

    return {
      kind: "generic",
      templateHtml: `
        <zero-block-contact-1.0.0
          title="${title}"
          lead="${lead}"
          email="${email}"
          phone="${phone}"
          address="${address}"
          layout="${layout}"
          theme-style="${themeStyle}"
        ></zero-block-contact-1.0.0>
      `
    };
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
      --contact-bg: var(--uiv-surface-color, #ffffff);
      --contact-text: var(--uiv-text-color, #111827);
      --contact-lead: #4b5563;
      --contact-card-bg: var(--uiv-surface-color, #ffffff);
      --contact-card-border: var(--uiv-border-color, #e5e7eb);
      --contact-accent: var(--uiv-primary-color, #6366f1);
    }

    section {
      padding: 80px 5%;
      background: var(--contact-bg);
      color: var(--contact-text);
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    section.theme-dark {
      --contact-bg: #111827;
      --contact-text: #f9fafb;
      --contact-lead: #9ca3af;
      --contact-card-bg: #1f2937;
      --contact-card-border: #374151;
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
      color: var(--contact-lead);
      margin: 0;
    }

    /* ─── Layout 1: Split Columns ─── */
    .split-layout {
      display: flex;
      gap: 50px;
      max-width: 1100px;
      margin: 0 auto;
    }

    .info-col {
      flex: 1;
      text-align: left;
    }

    .form-col {
      flex: 1.3;
      text-align: left;
    }

    h3 {
      font-size: 1.45rem;
      font-weight: 700;
      margin: 0 0 20px 0;
    }

    .detail-item {
      margin-bottom: 24px;
      font-size: 1rem;
      color: var(--contact-lead);
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .detail-label {
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--contact-accent);
    }

    .detail-val {
      font-weight: 500;
      color: inherit;
    }

    /* Inquiry Form */
    form {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .input-row {
      display: flex;
      gap: 16px;
    }

    input[type="text"], input[type="email"], textarea {
      width: 100%;
      padding: 12px 16px;
      font-size: 0.95rem;
      border: 1px solid var(--contact-card-border);
      border-radius: 6px;
      outline: none;
      background: var(--contact-card-bg);
      color: inherit;
      box-sizing: border-box;
      transition: border-color 0.25s ease;
    }

    input[type="text"]:focus, input[type="email"]:focus, textarea:focus {
      border-color: var(--contact-accent);
    }

    textarea {
      height: 120px;
      resize: vertical;
    }

    .btn-send {
      align-self: flex-start;
      padding: 13px 28px;
      font-size: 0.95rem;
      font-weight: 600;
      color: #ffffff;
      background: var(--contact-accent);
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: opacity 0.2s ease;
    }

    .btn-send:hover {
      opacity: 0.95;
    }

    /* ─── Layout 2: Centered Details Panel ─── */
    .grid-details {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
      max-width: 1100px;
      margin: 0 auto;
    }

    .detail-card {
      padding: 30px;
      background: var(--contact-card-bg);
      border: 1px solid var(--contact-card-border);
      border-radius: 8px;
      text-align: center;
    }

    .detail-card .detail-label {
      margin-bottom: 8px;
    }

    @media (max-width: 768px) {
      .split-layout {
        flex-direction: column !important;
      }
      .input-row {
        flex-direction: column;
        gap: 16px;
      }
      .btn-send {
        width: 100%;
      }
    }
  `;

  @property({ type: String }) title = "Get In Touch";
  @property({ type: String }) lead = "Have questions? Fill out our quick inquiry form or reach us directly.";
  @property({ type: String }) email = "contact@example.com";
  @property({ type: String }) phone = "+1 (555) 019-2834";
  @property({ type: String }) address = "100 Silicon Valley, California, USA";
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
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Email Contact",
    fieldMappings: "email"
  })
  get emailConfig() { return this.email; }
  set emailConfig(val: string) { this.email = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Phone Contact",
    fieldMappings: "phone"
  })
  get phoneConfig() { return this.phone; }
  set phoneConfig(val: string) { this.phone = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Address Location",
    fieldMappings: "address"
  })
  get addressConfig() { return this.address; }
  set addressConfig(val: string) { this.address = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Layout Display",
    fieldMappings: "layout",
    optionItems: [
      { label: "Split Details & Inquiry Form", value: "layout-1" },
      { label: "Centered Details Panel", value: "layout-2" }
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

  @RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: "On Submit inquiry",
    eventTrigger: "submit"
  })
  handleSubmit(event: Event) {
    event.preventDefault();
    const nameInput = this.shadowRoot?.querySelector('input[placeholder="Your Name"]') as HTMLInputElement;
    const emailInput = this.shadowRoot?.querySelector('input[placeholder="Email Address"]') as HTMLInputElement;
    const msgInput = this.shadowRoot?.querySelector('textarea') as HTMLTextAreaElement;

    this.dispatchEvent(new CustomEvent("submit", {
      detail: {
        name: nameInput ? nameInput.value : "",
        email: emailInput ? emailInput.value : "",
        message: msgInput ? msgInput.value : ""
      },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <section class="theme-${this.themeStyle} layout-${this.layout}">
        <div class="header-area">
          <h2>${this.title}</h2>
          <p class="lead">${this.lead}</p>
        </div>

        ${this.layout === "layout-1" ? html`
          <div class="split-layout">
            <div class="info-col">
              <h3>Inquiry Info</h3>
              <div class="detail-item">
                <span class="detail-label">Email Address</span>
                <span class="detail-val">${this.email}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Phone Hotline</span>
                <span class="detail-val">${this.phone}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Location</span>
                <span class="detail-val">${this.address}</span>
              </div>
            </div>
            <div class="form-col">
              <form @submit=${this.handleSubmit}>
                <div class="input-row">
                  <input type="text" placeholder="Your Name" required>
                  <input type="email" placeholder="Email Address" required>
                </div>
                <textarea placeholder="Your Message..." required></textarea>
                <button type="submit" class="btn-send">Send Message</button>
              </form>
            </div>
          </div>
        ` : ""}

        ${this.layout === "layout-2" ? html`
          <div class="grid-details">
            <div class="detail-card">
              <div class="detail-label">Email Address</div>
              <div class="detail-val" style="font-weight:600;font-size:1.1rem;">${this.email}</div>
            </div>
            <div class="detail-card">
              <div class="detail-label">Phone Hotline</div>
              <div class="detail-val" style="font-weight:600;font-size:1.1rem;">${this.phone}</div>
            </div>
            <div class="detail-card">
              <div class="detail-label">Postal Location</div>
              <div class="detail-val" style="font-weight:600;font-size:1.1rem;">${this.address}</div>
            </div>
          </div>
        ` : ""}
      </section>
    `;
  }
}
