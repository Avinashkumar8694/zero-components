// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

export const studioTemplate: ZeroStudioTemplate = {
  kind: "button",
  templateHtml: [
    "<div style='display:inline-block;'>",
    "<button type='button' style='border:0;border-radius:8px;padding:12px 24px;background:#6366f1;color:#ffffff;font-weight:600;font-size:14px;cursor:pointer;'>{{display:label}}</button>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Action", "Interactive"],
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
  name: "zero-button",
  version: "1.0.0",
  title: "Button",
  elementSelector: "zero-button",
  group: "Actions",
  iconName: "button-icon.png",
})
@applyGlobalStyles()
export class ZeroButton extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) return studioTemplate;

    const labelDisplay = escapeStudio(config.studio.display.label || "Button");
    const variant = (config.props?.variant ?? config.studio.props?.variant) || "primary";
    const fullWidth = !!(config.props?.fullWidth ?? config.studio.props?.fullWidth);
    const size = (config.props?.size ?? config.studio.props?.size) || "medium";
    
    // Compute basic visual parameters for Studio preview rendering
    let padding = "10px 20px";
    let fontSize = "14px";
    if (size === "small") {
      padding = "6px 12px";
      fontSize = "12px";
    } else if (size === "large") {
      padding = "14px 28px";
      fontSize = "16px";
    }

    let stylesStr = `padding: ${padding}; font-size: ${fontSize}; font-family: inherit; font-weight: 600; cursor: pointer; outline: none; border-radius: 8px; transition: all 0.2s ease; border: none;`;
    let bg = "var(--uiv-primary-color, #6366f1)";
    let color = "#ffffff";
    let border = "none";
    let shadow = "0 2px 4px rgba(0,0,0,0.1)";

    if (variant === "secondary") {
      bg = "var(--uiv-surface-color, #f3f4f6)";
      color = "var(--uiv-text-color, #1f2937)";
      border = "1px solid rgba(0, 0, 0, 0.12)";
      shadow = "none";
    } else if (variant === "ghost") {
      bg = "transparent";
      color = "var(--uiv-primary-color, #6366f1)";
      border = "1px dashed var(--uiv-primary-color, #6366f1)";
      shadow = "none";
    } else if (variant === "glass") {
      bg = "rgba(255, 255, 255, 0.15)";
      color = "#ffffff";
      border = "1px solid rgba(255, 255, 255, 0.25)";
      shadow = "0 4px 6px rgba(0,0,0,0.05)";
      stylesStr += " backdrop-filter: blur(8px);";
    } else if (variant === "glow") {
      bg = "linear-gradient(135deg, var(--uiv-primary-color, #6366f1), var(--uiv-secondary-color, #a855f7))";
      color = "#ffffff";
      shadow = "0 0 15px rgba(99, 102, 241, 0.5)";
    } else if (variant === "retro") {
      bg = "var(--uiv-primary-color, #f8f005)";
      color = "#000000";
      border = "3px solid #000000";
      shadow = "5px 5px 0px #000000";
      stylesStr += " border-radius: 0px;";
    } else if (variant === "cyber") {
      bg = "linear-gradient(45deg, transparent 5%, var(--uiv-primary-color, #6366f1) 5%)";
      color = "#ffffff";
      stylesStr += " text-transform: uppercase; letter-spacing: 2px;";
    } else if (variant === "neon") {
      bg = "transparent";
      color = "var(--uiv-primary-color, #00e6f6)";
      border = "2px solid var(--uiv-primary-color, #00e6f6)";
      shadow = "0 0 10px var(--uiv-primary-color, #00e6f6)";
    }

    if (border !== "none") {
      stylesStr += ` border: ${border};`;
    }
    stylesStr += ` background: ${bg}; color: ${color}; box-shadow: ${shadow};`;

    return {
      ...studioTemplate,
      templateHtml: [
        `<div style='display:${fullWidth ? "block" : "inline-block"}; ${fullWidth ? "width:100%;" : ""}'>`,
        `<button type='button' style='width:100%; ${stylesStr}'>${labelDisplay}</button>`,
        "</div>"
      ].join(""),
    };
  }

  static styles = css`
    :host {
      display: inline-block;
      --btn-p: var(--uiv-primary-color, #6366f1);
      --btn-s: var(--uiv-secondary-color, #a855f7);
      --btn-bg: var(--uiv-surface-color, #f3f4f6);
      --btn-text: var(--uiv-text-color, #1f2937);
      --btn-glow: var(--uiv-border-glow, 0 0 15px rgba(99, 102, 241, 0.4));
    }

    :host([full-width]) {
      display: block;
      width: 100%;
    }

    button {
      width: 100%;
      border: none;
      outline: none;
      font: inherit;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      box-sizing: border-box;
      position: relative;
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.55;
      transform: none !important;
      box-shadow: none !important;
    }

    /* Size Variations */
    .size-small {
      padding: 6px 14px;
      font-size: 0.75rem;
      border-radius: 6px;
    }
    .size-medium {
      padding: 10px 20px;
      font-size: 0.875rem;
      border-radius: 8px;
    }
    .size-large {
      padding: 14px 28px;
      font-size: 1rem;
      border-radius: 10px;
    }

    /* Variants styling */

    /* 1. Primary */
    .variant-primary {
      background: var(--btn-p);
      color: #ffffff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
    }
    .variant-primary:hover:not(:disabled) {
      filter: brightness(1.1);
      transform: translateY(-1px);
      box-shadow: 0 4px 10px rgba(99, 102, 241, 0.2);
    }

    /* 2. Secondary */
    .variant-secondary {
      background: var(--btn-bg);
      color: var(--btn-text);
      border: 1px solid rgba(0, 0, 0, 0.1);
    }
    .variant-secondary:hover:not(:disabled) {
      background: rgba(0, 0, 0, 0.05);
      transform: translateY(-1px);
    }

    /* 3. Ghost */
    .variant-ghost {
      background: transparent;
      color: var(--btn-p);
      border: 1.5px dashed var(--btn-p);
    }
    .variant-ghost:hover:not(:disabled) {
      background: rgba(99, 102, 241, 0.05);
    }

    /* 4. Glass */
    .variant-glass {
      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #ffffff;
    }
    .variant-glass:hover:not(:disabled) {
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.3);
    }

    /* 5. Glow */
    .variant-glow {
      background: linear-gradient(135deg, var(--btn-p), var(--btn-s));
      color: #ffffff;
      box-shadow: var(--btn-glow);
    }
    .variant-glow:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 0 20px rgba(99, 102, 241, 0.7);
    }

    /* 6. Retro */
    .variant-retro {
      background: var(--btn-p);
      border: 3px solid #000000;
      color: #000000;
      font-weight: 700;
      box-shadow: 5px 5px 0px #000000;
      border-radius: 0px;
    }
    .variant-retro:hover:not(:disabled) {
      transform: translate(-2px, -2px);
      box-shadow: 7px 7px 0px #000000;
    }
    .variant-retro:active:not(:disabled) {
      transform: translate(3px, 3px);
      box-shadow: 2px 2px 0px #000000;
    }

    /* 7. Cyber / Glitch */
    .variant-cyber {
      background: linear-gradient(45deg, transparent 5%, var(--btn-p) 5%);
      color: #ffffff;
      letter-spacing: 2px;
      text-transform: uppercase;
      clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
    }
    .variant-cyber:hover:not(:disabled) {
      filter: brightness(1.15);
      animation: glitch-anim 0.4s steps(2, end) infinite;
    }

    .tag {
      position: absolute;
      right: -6px;
      bottom: -6px;
      background: #f8f005;
      color: #000000;
      padding: 0 4px;
      font-size: 0.65rem;
      font-weight: bold;
    }

    /* 8. Neon */
    .variant-neon {
      background: transparent;
      color: var(--btn-p);
      border: 2px solid var(--btn-p);
      box-shadow: 0 0 8px var(--btn-p), inset 0 0 4px var(--btn-p);
    }
    .variant-neon:hover:not(:disabled) {
      background: var(--btn-p);
      color: #000000;
      box-shadow: 0 0 20px var(--btn-p), inset 0 0 8px var(--btn-p);
    }

    /* Loading Spinner */
    .spinner {
      display: inline-block;
      width: 14px;
      height: 14px;
      border: 2px solid rgba(255, 255, 255, 0.35);
      border-radius: 50%;
      border-top-color: currentColor;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    @keyframes glitch-anim {
      0% { clip-path: inset(40% 0 61% 0); }
      20% { clip-path: inset(92% 0 1% 0); }
      40% { clip-path: inset(25% 0 58% 0); }
      60% { clip-path: inset(80% 0 5% 0); }
      80% { clip-path: inset(11% 0 85% 0); }
      100% { clip-path: inset(50% 0 30% 0); }
    }
  `;

  @property({ type: String }) label = "Button";
  @property({ type: String }) variant = "primary";
  @property({ type: String }) size = "medium";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) loading = false;
  @property({ type: Boolean, attribute: "full-width" }) fullWidth = false;
  @property({ type: String }) tag = "R25";
  @property({ type: String, attribute: "accent-color" }) accentColor = "";

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Label",
    fieldMappings: "label"
  })
  get labelConfig() { return this.label; }
  set labelConfig(val: string) { this.label = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Variant Style",
    fieldMappings: "variant",
    optionItems: [
      { label: "Primary", value: "primary" },
      { label: "Secondary", value: "secondary" },
      { label: "Ghost", value: "ghost" },
      { label: "Glassmorphism", value: "glass" },
      { label: "Glow Mode", value: "glow" },
      { label: "Retro Blocky", value: "retro" },
      { label: "Cyberpunk", value: "cyber" },
      { label: "Neon Border", value: "neon" }
    ]
  })
  get variantConfig() { return this.variant; }
  set variantConfig(val: string) { this.variant = val || "primary"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Size",
    fieldMappings: "size",
    optionItems: [
      { label: "Small", value: "small" },
      { label: "Medium", value: "medium" },
      { label: "Large", value: "large" }
    ]
  })
  get sizeConfig() { return this.size; }
  set sizeConfig(val: string) { this.size = val || "medium"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
  get disabledConfig() { return this.disabled; }
  set disabledConfig(val: boolean) { this.disabled = Boolean(val); }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Show Spinner / Loading",
    fieldMappings: "loading"
  })
  get loadingConfig() { return this.loading; }
  set loadingConfig(val: boolean) { this.loading = Boolean(val); }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Full Width",
    fieldMappings: "fullWidth"
  })
  get fullWidthConfig() { return this.fullWidth; }
  set fullWidthConfig(val: boolean) { this.fullWidth = Boolean(val); }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Cyber Tag Label",
    fieldMappings: "tag"
  })
  get tagConfig() { return this.tag; }
  set tagConfig(val: string) { this.tag = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: "Custom Accent Color Overlay",
    fieldMappings: "accentColor"
  })
  get accentColorConfig() { return this.accentColor; }
  set accentColorConfig(val: string) { this.accentColor = val; }

  @RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: "On Click",
    eventTrigger: "click"
  })
  handleClick(e: Event) {
    if (this.disabled || this.loading) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    this.dispatchEvent(new CustomEvent("click", { bubbles: true, composed: true }));
  }

  render() {
    const classList = [
      `variant-${this.variant}`,
      `size-${this.size}`
    ].join(" ");

    const accentStyles = this.accentColor
      ? { "--btn-p": this.accentColor, "--btn-glow": `0 0 15px ${this.accentColor}` }
      : {};

    return html`
      <button
        class=${classList}
        ?disabled=${this.disabled || this.loading}
        @click=${this.handleClick}
        style=${styleMap(accentStyles)}
      >
        ${this.loading ? html`<span class="spinner"></span>` : ""}
        <span>${this.label}</span>
        ${this.variant === "cyber" && this.tag ? html`<span class="tag">${this.tag}</span>` : ""}
      </button>
    `;
  }
}
