// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property, state } from "lit/decorators.js";

export const studioTemplate: ZeroStudioTemplate = {
  kind: "generic",
  templateHtml: [
    "<div style='display:grid;gap:6px;padding:8px 0px;'>",
    "<label style='font-size:12px;font-weight:600;color:#374151;'>{{display:label}}</label>",
    "<div style='border:1px solid #d1d5db;border-radius:6px;padding:10px 14px;background:#ffffff;color:#9ca3af;font-size:14px;'>{{display:placeholder}}</div>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Form", "Input"],
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
  name: "zero-text-input",
  version: "1.0.0",
  title: "Text Input",
  elementSelector: "zero-text-input",
  group: "Form Controls",
  iconName: "text-input-icon.png",
})
@applyGlobalStyles()
export class ZeroTextInput extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) return studioTemplate;
    const label = escapeStudio(config.studio.display.label || "Text Input");
    const placeholder = escapeStudio(config.studio.display.placeholder || "Enter value...");
    return {
      ...studioTemplate,
      templateHtml: [
        "<div style='display:block;width:100%;font-family:inherit;'>",
        `<label style='display:block;margin-bottom:6px;font-size:13px;font-weight:600;color:var(--uiv-text-color,#374151);'>${label}</label>`,
        `<div style='width:100%;padding:10px 14px;border:1px solid var(--uiv-border-color,#d1d5db);border-radius:6px;font-size:14px;background:var(--uiv-surface-color,#ffffff);color:#9ca3af;'>${placeholder}</div>`,
        "</div>"
      ].join(""),
    };
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
      margin-bottom: 16px;
      --in-p: var(--uiv-primary-color, #6366f1);
      --in-text: var(--uiv-text-color, #1f2937);
      --in-bg: var(--uiv-surface-color, #ffffff);
      --in-border: var(--uiv-border-color, #d1d5db);
      --in-muted: var(--uiv-text-color-secondary, #9ca3af);
    }

    .input-wrapper {
      display: flex;
      flex-direction: column;
      position: relative;
      font-family: inherit;
    }

    label.main-label {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--in-text);
      margin-bottom: 6px;
      transition: all 0.2s ease;
    }

    .input-container {
      position: relative;
      width: 100%;
    }

    input {
      width: 100%;
      padding: 10px 14px;
      font-size: 0.93rem;
      color: var(--in-text);
      background: var(--in-bg);
      border: 1px solid var(--in-border);
      border-radius: 6px;
      outline: none;
      box-sizing: border-box;
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }

    input::placeholder {
      color: var(--in-muted);
      transition: opacity 0.2s ease;
    }

    input:disabled {
      background: #f3f4f6;
      color: #9ca3af;
      cursor: not-allowed;
    }

    /* ─── VARIANTS ─── */

    /* 1. Standard Focus state */
    .variant-standard input:focus:not(:disabled) {
      border-color: var(--in-p);
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
    }

    /* 2. Floating Label */
    .variant-float {
      padding-top: 14px;
    }
    .variant-float label.main-label {
      position: absolute;
      left: 14px;
      top: 25px;
      margin: 0;
      pointer-events: none;
      transform: translateY(-50%);
      font-size: 0.93rem;
      color: var(--in-muted);
      background: transparent;
      padding: 0;
    }
    .variant-float.focused label.main-label,
    .variant-float.has-value label.main-label {
      top: 0px;
      font-size: 0.75rem;
      color: var(--in-p);
      background: var(--in-bg);
      padding: 0 4px;
      transform: translateY(-50%);
    }
    .variant-float input::placeholder {
      opacity: 0;
    }
    .variant-float.focused input::placeholder {
      opacity: 1;
    }
    .variant-float input:focus:not(:disabled) {
      border-color: var(--in-p);
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
    }

    /* 3. Glow */
    .variant-glow input:focus:not(:disabled) {
      border-color: var(--in-p);
      box-shadow: 0 0 12px var(--in-p);
    }

    /* 4. Glitch / Cyber */
    .variant-glitch input {
      border: 2px solid var(--in-border);
      border-radius: 0;
      clip-path: polygon(0 0, 100% 0, 100% 90%, 95% 100%, 0 100%);
    }
    .variant-glitch input:focus:not(:disabled) {
      border-color: var(--in-p);
      box-shadow: 4px 4px 0px #000000;
    }

    /* 5. Modern */
    .variant-modern input {
      background: #f9fafb;
      border-color: transparent;
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.04);
      border-radius: 8px;
    }
    .variant-modern input:focus:not(:disabled) {
      background: #ffffff;
      border-color: var(--in-p);
      box-shadow: 0 4px 12px rgba(99, 102, 241, 0.1), inset 0 2px 4px rgba(0, 0, 0, 0.02);
    }

    /* Error States */
    .has-error input {
      border-color: #ef4444 !important;
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15) !important;
    }
    .error-text {
      color: #ef4444;
      font-size: 0.78rem;
      margin-top: 5px;
      font-weight: 500;
    }
  `;

  @property({ type: String }) value = "";
  @property({ type: String }) label = "Text Input";
  @property({ type: String }) placeholder = "";
  @property({ type: String }) type = "text";
  @property({ type: String }) variant = "standard";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) required = false;
  @property({ type: Number, attribute: "max-length" }) maxLength = 0;
  @property({ type: String, attribute: "error-message" }) errorMessage = "";
  @property({ type: Boolean, attribute: "show-error" }) showError = false;

  @state() private focused = false;

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Value",
    fieldMappings: "value"
  })
  get valueConfig() { return this.value; }
  set valueConfig(val: string) { this.value = val || ""; }

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
    displayLabel: "Placeholder",
    fieldMappings: "placeholder"
  })
  get placeholderConfig() { return this.placeholder; }
  set placeholderConfig(val: string) { this.placeholder = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Input Type",
    fieldMappings: "type",
    optionItems: [
      { label: "Text", value: "text" },
      { label: "Password", value: "password" },
      { label: "Number", value: "number" },
      { label: "Email", value: "email" },
      { label: "Telephone", value: "tel" }
    ]
  })
  get typeConfig() { return this.type; }
  set typeConfig(val: string) { this.type = val || "text"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Variant Style",
    fieldMappings: "variant",
    optionItems: [
      { label: "Standard Input", value: "standard" },
      { label: "Floating Label", value: "float" },
      { label: "Glowing Outline", value: "glow" },
      { label: "Cyberpunk", value: "glitch" },
      { label: "Modern Soft", value: "modern" }
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
    displayLabel: "Required",
    fieldMappings: "required"
  })
  get requiredConfig() { return this.required; }
  set requiredConfig(val: boolean) { this.required = Boolean(val); }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Max Length",
    fieldMappings: "maxLength"
  })
  get maxLengthConfig() { return this.maxLength; }
  set maxLengthConfig(val: number) { this.maxLength = Number(val) || 0; }

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
    attributeType: AttributeType.EVENT,
    displayLabel: "On Input",
    eventTrigger: "input"
  })
  handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.value = target.value;
    this.dispatchEvent(new CustomEvent("input", { detail: { value: this.value }, bubbles: true, composed: true }));
  }

  @RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: "On Change",
    eventTrigger: "change"
  })
  handleChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.value = target.value;
    this.dispatchEvent(new CustomEvent("change", { detail: { value: this.value }, bubbles: true, composed: true }));
  }

  @RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: "On Focus",
    eventTrigger: "focus"
  })
  handleFocus() {
    this.focused = true;
    this.dispatchEvent(new CustomEvent("focus", { bubbles: true, composed: true }));
  }

  @RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: "On Blur",
    eventTrigger: "blur"
  })
  handleBlur() {
    this.focused = false;
    this.dispatchEvent(new CustomEvent("blur", { bubbles: true, composed: true }));
  }

  render() {
    const hasVal = this.value && this.value.length > 0;
    const wrapperClasses = [
      "input-wrapper",
      `variant-${this.variant}`,
      this.focused ? "focused" : "",
      hasVal ? "has-value" : "",
      this.showError ? "has-error" : ""
    ].join(" ");

    return html`
      <div class=${wrapperClasses}>
        ${this.label
          ? html`<label class="main-label">${this.label}</label>`
          : ""}
        <div class="input-container">
          <input
            type=${this.type}
            .value=${this.value}
            placeholder=${this.placeholder}
            ?disabled=${this.disabled}
            ?required=${this.required}
            maxlength=${this.maxLength > 0 ? this.maxLength : undefined}
            @input=${this.handleInput}
            @change=${this.handleChange}
            @focus=${this.handleFocus}
            @blur=${this.handleBlur}
          />
        </div>
        ${this.showError && this.errorMessage
          ? html`<span class="error-text">${this.errorMessage}</span>`
          : ""}
      </div>
    `;
  }
}
