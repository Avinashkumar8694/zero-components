// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

export const studioTemplate: ZeroStudioTemplate = {
  kind: "button",
  templateHtml: [
    "<div style='display:grid;gap:8px;'>",
    "<button type='button' style='border:0;border-radius:999px;padding:12px 16px;background:#16324f;color:#f8fafc;font-weight:700;justify-self:start;'>{{display:label}}</button>",
    "<div style='display:flex;gap:8px;flex-wrap:wrap;'>",
    "<span style='padding:3px 8px;border-radius:999px;background:rgba(219,234,254,0.85);color:#1d4ed8;font-size:0.72rem;font-weight:700;'>label: {{mode:label}}</span>",
    "<span style='padding:3px 8px;border-radius:999px;background:rgba(254,242,242,0.9);color:#b91c1c;font-size:0.72rem;font-weight:700;'>variant: {{display:variant}}</span>",
    "</div>",
    "</div>"
  ].join(""),
  labelProp: "label",
  dynamicHints: ["$.button_label", "$.cta_text"],
  badges: ["Action"],
};

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
    
    // Determine styles based on variant
    let bg = 'var(--uiv-primary-color, #16324f)';
    let color = '#f8fafc';
    let border = 'none';
    
    if (variant === 'secondary') {
      bg = 'var(--uiv-surface-color, #f5efe6)';
      color = 'var(--uiv-text-color, #132238)';
      border = '1px solid rgba(19, 34, 56, 0.12)';
    } else if (variant === 'ghost') {
      bg = 'transparent';
      color = 'var(--uiv-primary-color, #16324f)';
      border = '1px dashed var(--uiv-primary-color, rgba(22, 50, 79, 0.28))';
    }

    return {
      ...studioTemplate,
      templateHtml: [
        `<div style='display:inline-block; ${fullWidth ? 'width:100%;' : ''}'>`,
        `<button type='button' style='width:100%; border:${border}; border-radius:999px; padding:12px 18px; background:${bg}; color:${color}; font-weight:700; cursor:pointer; font-family:inherit; font-size:14px;'>${labelDisplay}</button>`,
        "</div>"
      ].join(""),
    };
  }

  static styles = css`
    :host {
      display: inline-block;
    }

    button {
      border: none;
      border-radius: 999px;
      padding: 12px 18px;
      font: inherit;
      cursor: pointer;
      transition: transform 140ms ease, opacity 140ms ease, background 140ms ease;
    }

    button:hover {
      transform: translateY(-1px);
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.55;
      transform: none;
    }

    .primary {
      background: #16324f;
      color: #f8fafc;
    }

    .secondary {
      background: #f5efe6;
      color: #132238;
      border: 1px solid rgba(19, 34, 56, 0.12);
    }

    .ghost {
      background: transparent;
      color: #16324f;
      border: 1px dashed rgba(22, 50, 79, 0.28);
    }

    .full {
      width: 100%;
    }
  `;

  @property({ type: String }) label = "Button";
  @property({ type: String }) variant = "primary";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean, attribute: "full-width" }) fullWidth = false;

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Label",
    fieldMappings: "label"
  })
  get labelConfig() {
    return this.label;
  }
  set labelConfig(value: string) {
    this.label = value;
  }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Variant",
    fieldMappings: "variant",
    optionItems: [
      { label: "Primary", value: "primary" },
      { label: "Secondary", value: "secondary" },
      { label: "Ghost", value: "ghost" }
    ]
  })
  get variantConfig() {
    return this.variant;
  }
  set variantConfig(value: string) {
    this.variant = value || "primary";
  }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
  get disabledConfig() {
    return this.disabled;
  }
  set disabledConfig(value: boolean) {
    this.disabled = Boolean(value);
  }

  @RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: "On Click",
    eventTrigger: "click"
  })
  handleClick() {
    this.dispatchEvent(new CustomEvent("click", { bubbles: true, composed: true }));
  }

  render() {
    const safeVariant = ["primary", "secondary", "ghost"].includes(this.variant) ? this.variant : "primary";
    return html`
      <button
        class=${`${safeVariant} ${this.fullWidth ? "full" : ""}`}
        ?disabled=${this.disabled}
        @click=${this.handleClick}
      >
        ${this.label}
      </button>
    `;
  }
}

function escapeStudio(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
