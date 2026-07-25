// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

@RendererComponent({
  name: "zero-welcome-banner",
  version: "1.0.0",
  title: "Welcome Banner",
  elementSelector: "zero-welcome-banner",
  group: "Dashboard",
  iconName: "welcome-banner-icon.png",
  layoutKind: "leaf",
})
@applyGlobalStyles()
export class ZeroWelcomeBanner extends LitElement {
  static getStudioTemplate(_config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    return {
      kind: "generic",
      templateHtml: [
        "<div style='background:linear-gradient(120deg,#4680ff,#1e3a8a);border-radius:10px;padding:28px 32px;display:flex;align-items:center;justify-content:space-between;gap:24px;font-family:inherit;box-shadow:0 4px 14px rgba(70,128,255,0.28);'>",
        "<div style='min-width:0;'>",
        "<div style='font-size:20px;font-weight:700;color:#ffffff;'>{{display:title}}</div>",
        "<div style='font-size:13px;color:rgba(255,255,255,0.85);margin:6px 0 16px;'>Ready-made components to build your dashboard faster.</div>",
        "<span style='display:inline-block;background:#ffffff;color:#1d2630;font-size:13px;font-weight:600;padding:8px 18px;border-radius:8px;'>CodedThemes</span>",
        "</div>",
        "<div style='width:120px;height:80px;border-radius:8px;background:rgba(255,255,255,0.15);flex:0 0 auto;'></div>",
        "</div>"
      ].join(""),
      badges: ["Welcome Banner"],
      titleProp: "title",
      emptyText: "",
    };
  }

  static styles = css`
    :host {
      display: block;
      --wb-text: #ffffff;
      --wb-primary: var(--uiv-primary-color, #4680ff);
    }
    .banner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      border-radius: 10px;
      padding: 28px 32px;
      box-sizing: border-box;
      color: var(--wb-text);
      font-family: inherit;
      box-shadow: 0 4px 14px rgba(70, 128, 255, 0.28);
    }
    .content {
      min-width: 0;
      flex: 1 1 auto;
    }
    .title {
      font-size: 20px;
      font-weight: 700;
      margin: 0;
      color: #ffffff;
    }
    .subtitle {
      font-size: 13px;
      color: rgba(255, 255, 255, 0.85);
      margin: 6px 0 18px;
      max-width: 460px;
    }
    .cta {
      display: inline-block;
      background: #ffffff;
      color: var(--uiv-text-color, #1d2630);
      font-size: 13px;
      font-weight: 600;
      padding: 9px 20px;
      border-radius: 8px;
      text-decoration: none;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .cta:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.18);
    }
    .media {
      flex: 0 0 auto;
      width: 160px;
      max-width: 40%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .media img {
      max-width: 100%;
      height: auto;
      display: block;
    }
    .media .placeholder {
      width: 140px;
      height: 90px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.15);
    }
    @media (max-width: 560px) {
      .banner { flex-direction: column; align-items: flex-start; }
      .media { width: 100%; max-width: 100%; }
    }
  `;

  @property({ type: String }) title = "Explore Redesigned Able Pro";
  @property({ type: String }) subtitle = "Ready-made components to build your dashboard faster.";
  @property({ type: String, attribute: "button-text" }) buttonText = "CodedThemes";
  @property({ type: String, attribute: "button-href" }) buttonHref = "#";
  @property({ type: String, attribute: "gradient-from" }) gradientFrom = "#4680ff";
  @property({ type: String, attribute: "gradient-to" }) gradientTo = "#1e3a8a";
  @property({ type: String, attribute: "image-url" }) imageUrl = "";

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Title",
    fieldMappings: "title",
    initialValue: "Explore Redesigned Able Pro"
  })
  get titleConfig() { return this.title; }
  set titleConfig(val: string) { this.title = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Subtitle",
    fieldMappings: "subtitle",
    initialValue: "Ready-made components to build your dashboard faster."
  })
  get subtitleConfig() { return this.subtitle; }
  set subtitleConfig(val: string) { this.subtitle = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Button Text",
    fieldMappings: "buttonText",
    initialValue: "CodedThemes"
  })
  get buttonTextConfig() { return this.buttonText; }
  set buttonTextConfig(val: string) { this.buttonText = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Button Link (href)",
    fieldMappings: "buttonHref",
    initialValue: "#"
  })
  get buttonHrefConfig() { return this.buttonHref; }
  set buttonHrefConfig(val: string) { this.buttonHref = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: "Gradient From",
    fieldMappings: "gradientFrom",
    initialValue: "#4680ff"
  })
  get gradientFromConfig() { return this.gradientFrom; }
  set gradientFromConfig(val: string) { this.gradientFrom = val || "#4680ff"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: "Gradient To",
    fieldMappings: "gradientTo",
    initialValue: "#1e3a8a"
  })
  get gradientToConfig() { return this.gradientTo; }
  set gradientToConfig(val: string) { this.gradientTo = val || "#1e3a8a"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Image URL (optional)",
    fieldMappings: "imageUrl",
    initialValue: ""
  })
  get imageUrlConfig() { return this.imageUrl; }
  set imageUrlConfig(val: string) { this.imageUrl = val; }

  render() {
    const from = this.gradientFrom || "#4680ff";
    const to = this.gradientTo || "#1e3a8a";
    const gradient = `linear-gradient(120deg, ${from}, ${to})`;
    return html`
      <div class="banner" style="background: ${gradient}">
        <div class="content">
          <h3 class="title">${this.title}</h3>
          ${this.subtitle ? html`<p class="subtitle">${this.subtitle}</p>` : ""}
          ${this.buttonText
            ? html`<a class="cta" href=${this.buttonHref || "#"}>${this.buttonText}</a>`
            : ""}
        </div>
        <div class="media">
          ${this.imageUrl
            ? html`<img src=${this.imageUrl} alt=${this.title} />`
            : html`<div class="placeholder"></div>`}
        </div>
      </div>
    `;
  }
}
