// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

export const studioTemplate: ZeroStudioTemplate = {
  kind: "generic",
  templateHtml: [
    "<div style='display:flex;align-items:center;gap:10px;padding:6px 0;'>",
    "<div style='width:18px;height:18px;border-radius:50%;border:2px solid var(--uiv-primary-color,#6366f1);display:flex;align-items:center;justify-content:center;'>",
    "<div style='width:8px;height:8px;border-radius:50%;background:var(--uiv-primary-color,#6366f1);'></div>",
    "</div>",
    "<span style='font-size:14px;color:var(--uiv-text-color,#1f2937);'>{{display:label}}</span>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Form", "Radio"],
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
  name: "zero-radio",
  version: "1.0.0",
  title: "Radio Button",
  elementSelector: "zero-radio",
  group: "Form Controls",
  iconName: "radio-icon.png",
})
@applyGlobalStyles()
export class ZeroRadio extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) return studioTemplate;
    const labelDisplay = escapeStudio(config.studio.display.label || "Radio Option");
    const checked = !!(config.props?.checked ?? config.studio.props?.checked);
    const accentCol = (config.props?.accentColor ?? config.studio.props?.accentColor) || "var(--uiv-primary-color,#6366f1)";

    return {
      ...studioTemplate,
      templateHtml: [
        "<div style='display:flex;align-items:center;gap:10px;padding:6px 0;font-family:inherit;'>",
        `<div style='width:18px;height:18px;border-radius:50%;border:2px solid ${checked ? accentCol : "var(--uiv-border-color,#d1d5db)"};display:flex;align-items:center;justify-content:center;'>`,
        checked ? `<div style='width:8px;height:8px;border-radius:50%;background:${accentCol};'></div>` : "",
        "</div>",
        `<span style='font-size:14px;color:var(--uiv-text-color,#1f2937);'>${labelDisplay}</span>`,
        "</div>"
      ].join(""),
    };
  }

  static styles = css`
    :host {
      display: inline-block;
      margin-bottom: 8px;
      margin-right: 16px;
      --rad-p: var(--uiv-primary-color, #6366f1);
      --rad-bg: var(--uiv-surface-color, #ffffff);
      --rad-text: var(--uiv-text-color, #1f2937);
      --rad-border: var(--uiv-border-color, #d1d5db);
      --glow: var(--uiv-border-glow, 0 0 10px rgba(99, 102, 241, 0.4));
    }

    .radio-wrapper {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      user-select: none;
      padding: 4px 0;
      position: relative;
    }

    .radio-wrapper.disabled {
      cursor: not-allowed;
      opacity: 0.55;
    }

    .radio-circle {
      width: 20px;
      height: 20px;
      border: 2px solid var(--rad-border);
      border-radius: 50%;
      background: var(--rad-bg);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      box-sizing: border-box;
    }

    .radio-circle::after {
      content: "";
      width: 10px;
      height: 10px;
      background: var(--rad-p);
      border-radius: 50%;
      transform: scale(0);
      transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      position: absolute;
    }

    /* Active State */
    .checked .radio-circle {
      border-color: var(--rad-p);
    }

    .checked .radio-circle::after {
      transform: scale(1);
    }

    .radio-label {
      font-size: 0.93rem;
      color: var(--rad-text);
      font-weight: 500;
    }

    /* ─── VARIANTS ─── */

    /* Glow Variant */
    .checked.variant-glow .radio-circle {
      box-shadow: var(--glow);
    }
    .checked.variant-glow .radio-circle::after {
      box-shadow: 0 0 8px var(--rad-p);
    }
  `;

  @property({ type: Boolean }) checked = false;
  @property({ type: String }) label = "Option Label";
  @property({ type: String }) value = "";
  @property({ type: String }) name = "radio-group";
  @property({ type: String }) variant = "standard";
  @property({ type: Boolean }) disabled = false;
  @property({ type: String, attribute: "accent-color" }) accentColor = "";

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Checked",
    fieldMappings: "checked"
  })
  get checkedConfig() { return this.checked; }
  set checkedConfig(val: boolean) { this.checked = Boolean(val); }

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
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Value Key",
    fieldMappings: "value"
  })
  get valueConfig() { return this.value; }
  set valueConfig(val: string) { this.value = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Group Name",
    fieldMappings: "name"
  })
  get nameConfig() { return this.name; }
  set nameConfig(val: string) { this.name = val || "radio-group"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Theme Style",
    fieldMappings: "variant",
    optionItems: [
      { label: "Standard Options", value: "standard" },
      { label: "Glowing Neon", value: "glow" }
    ]
  })
  get variantConfig() { return this.variant; }
  set variantConfig(val: string) { this.variant = val || "standard"; }

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
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: "Custom Accent Color",
    fieldMappings: "accentColor"
  })
  get accentColorConfig() { return this.accentColor; }
  set accentColorConfig(val: string) { this.accentColor = val; }

  @RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: "On Change",
    eventTrigger: "change"
  })
  handleToggle() {
    if (this.disabled) return;
    this.checked = true;
    this.dispatchEvent(
      new CustomEvent("change", {
        detail: { checked: this.checked, value: this.value },
        bubbles: true,
        composed: true
      })
    );
  }

  render() {
    const wrapClass = [
      this.checked ? "checked" : "",
      this.disabled ? "disabled" : "",
      `variant-${this.variant}`
    ].join(" ");

    const inlineStyle = this.accentColor ? `style="--rad-p: ${this.accentColor}; --glow: 0 0 10px ${this.accentColor};"` : "";

    return html`
      <div class="radio-wrapper ${wrapClass}" @click=${this.handleToggle} ${html`${inlineStyle}`}>
        <div class="radio-circle"></div>
        <span class="radio-label">${this.label}</span>
      </div>
    `;
  }
}
