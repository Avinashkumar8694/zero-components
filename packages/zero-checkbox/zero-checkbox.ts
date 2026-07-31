// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

export const studioTemplate: ZeroStudioTemplate = {
  kind: "generic",
  templateHtml: [
    "<div style='display:flex;align-items:center;gap:10px;padding:8px 12px;'>",
    "<div style='width:18px;height:18px;border-radius:4px;border:2px solid var(--uiv-primary-color,#6366f1);'></div>",
    "<span style='font-size:14px;color:var(--uiv-text-color,#1e293b);'>{{display:label}}</span>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Form", "Checkbox"],
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
  name: "zero-checkbox",
  version: "1.0.0",
  title: "Checkbox",
  elementSelector: "zero-checkbox",
  group: "Form Controls",
  iconName: "checkbox-icon.png",
})
@applyGlobalStyles()
export class ZeroCheckbox extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) return studioTemplate;
    const labelDisplay = escapeStudio(config.studio.display.label || "Checkbox");
    return {
      ...studioTemplate,
      templateHtml: [
        "<div style='display:flex;align-items:center;gap:10px;padding:6px 0px;'>",
        "<div style='width:18px;height:18px;border-radius:4px;border:2px solid var(--uiv-primary-color,#6366f1);display:flex;align-items:center;justify-content:center;color:#6366f1;font-size:12px;font-weight:bold;'>✓</div>",
        `<span style='font-size:14px;color:var(--uiv-text-color,#1f2937);font-family:inherit;'>${labelDisplay}</span>`,
        "</div>"
      ].join(""),
    };
  }

  static styles = css`
    :host {
      display: block;
      margin-bottom: 12px;
      --cb-p: var(--uiv-primary-color, #6366f1);
      --cb-text: var(--uiv-text-color, #1f2937);
      --cb-bg: var(--uiv-surface-color, #ffffff);
      --cb-border: var(--uiv-border-color, #d1d5db);
    }

    .checkbox-wrapper {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      user-select: none;
      position: relative;
      transition: all 0.2s ease;
      padding: 4px 0;
    }

    .checkbox-wrapper.disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    /* Base checkbox box */
    .checkbox-box {
      width: 20px;
      height: 20px;
      border: 2px solid var(--cb-border);
      border-radius: 4px;
      background: var(--cb-bg);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      box-sizing: border-box;
    }

    .checkbox-box::after {
      content: "";
      width: 5px;
      height: 10px;
      border: solid #ffffff;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg) scale(0);
      transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      position: absolute;
      top: 1px;
    }

    /* Indeterminate line */
    .checkbox-box.indeterminate::after {
      content: "";
      width: 10px;
      height: 2px;
      background: #ffffff;
      border: none;
      transform: scale(0);
      top: 7px;
      left: 3px;
    }

    .checked .checkbox-box.indeterminate::after,
    .indeterminate-active .checkbox-box::after {
      transform: scale(1) !important;
      border: none !important;
      width: 10px;
      height: 2px;
      background: #ffffff;
      top: 7px;
      left: 3px;
    }

    /* State mappings */
    .checked .checkbox-box,
    .indeterminate-active .checkbox-box {
      background: var(--cb-p);
      border-color: var(--cb-p);
    }

    .checked .checkbox-box::after {
      transform: rotate(45deg) scale(1);
    }

    .checkbox-label {
      font-size: 0.93rem;
      color: var(--cb-text);
      font-weight: 500;
    }

    /* ─── VARIANTS ─── */

    /* Glow Variant */
    .variant-glow .checkbox-box {
      border-radius: 6px;
    }
    .checked.variant-glow .checkbox-box,
    .indeterminate-active.variant-glow .checkbox-box {
      box-shadow: 0 0 12px var(--cb-p);
    }

    /* Heart Variant */
    .variant-heart .checkbox-box {
      border: none;
      background: transparent;
      width: 22px;
      height: 22px;
    }
    .variant-heart .checkbox-box::after {
      display: none;
    }
    .variant-heart .heart-icon {
      fill: none;
      stroke: var(--cb-border);
      stroke-width: 2.5;
      width: 100%;
      height: 100%;
      transition: all 0.25s ease;
    }
    .checked.variant-heart .heart-icon {
      fill: #ef4444;
      stroke: #ef4444;
      transform: scale(1.15);
      filter: drop-shadow(0 2px 6px rgba(239, 68, 68, 0.4));
    }

    /* Tick / Round Variant */
    .variant-tick .checkbox-box {
      border-radius: 50%;
    }
    .checked.variant-tick .checkbox-box {
      background: #10b981;
      border-color: #10b981;
    }

    /* Label description */
    .description {
      font-size: 0.78rem;
      color: var(--uiv-text-color-secondary, #6b7280);
      margin-left: 30px;
      margin-top: -2px;
    }

    .has-error .checkbox-box {
      border-color: #ef4444 !important;
    }
    .error-text {
      color: #ef4444;
      font-size: 0.78rem;
      margin-left: 30px;
      margin-top: 4px;
      font-weight: 500;
    }
  `;

  @property({ type: Boolean }) checked = false;
  @property({ type: String }) label = "Checkbox Label";
  @property({ type: String }) description = "";
  @property({ type: String }) variant = "standard";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) required = false;
  @property({ type: Boolean }) indeterminate = false;
  @property({ type: String }) value = "";
  @property({ type: String, attribute: "error-message" }) errorMessage = "";
  @property({ type: Boolean, attribute: "show-error" }) showError = false;
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
    displayLabel: "Description",
    fieldMappings: "description"
  })
  get descriptionConfig() { return this.description; }
  set descriptionConfig(val: string) { this.description = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Checkbox Variant Style",
    fieldMappings: "variant",
    optionItems: [
      { label: "Standard Box", value: "standard" },
      { label: "Glowing Box", value: "glow" },
      { label: "Heart Icon", value: "heart" },
      { label: "Round Tick", value: "tick" }
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
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Required Field",
    fieldMappings: "required"
  })
  get requiredConfig() { return this.required; }
  set requiredConfig(val: boolean) { this.required = Boolean(val); }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Indeterminate State",
    fieldMappings: "indeterminate"
  })
  get indeterminateConfig() { return this.indeterminate; }
  set indeterminateConfig(val: boolean) { this.indeterminate = Boolean(val); }

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
    displayLabel: "Error Message",
    fieldMappings: "errorMessage"
  })
  get errorMessageConfig() { return this.errorMessage; }
  set errorMessageConfig(val: string) { this.errorMessage = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Show Error",
    fieldMappings: "showError"
  })
  get showErrorConfig() { return this.showError; }
  set showErrorConfig(val: boolean) { this.showError = Boolean(val); }

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

    if (this.indeterminate) {
      this.indeterminate = false;
      this.checked = true;
    } else {
      this.checked = !this.checked;
    }

    this.dispatchEvent(
      new CustomEvent("change", {
        detail: {
          checked: this.checked,
          value: this.value,
          indeterminate: this.indeterminate
        },
        bubbles: true,
        composed: true
      })
    );
  }

  render() {
    const wrapClass = [
      this.checked ? "checked" : "",
      this.indeterminate ? "indeterminate-active" : "",
      this.disabled ? "disabled" : "",
      this.showError ? "has-error" : "",
      `variant-${this.variant}`
    ].join(" ");

    const accentStyles = this.accentColor ? { "--cb-p": this.accentColor } : {};

    return html`
      <div class="checkbox-wrapper ${wrapClass}" @click=${this.handleToggle} style=${styleMap(accentStyles)}>
        <div class="checkbox-box ${this.indeterminate ? "indeterminate" : ""}">
          ${this.variant === "heart"
            ? html`
                <svg class="heart-icon" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              `
            : ""}
        </div>
        <span class="checkbox-label">${this.label}</span>
      </div>
      ${this.description
        ? html`<div class="description">${this.description}</div>`
        : ""}
      ${this.showError && this.errorMessage
        ? html`<div class="error-text">${this.errorMessage}</div>`
        : ""}
    `;
  }
}
