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
    "<div style='border:1px solid #d1d5db;border-radius:6px;padding:10px 14px;background:#ffffff;color:#9ca3af;font-size:14px;min-height:80px;'>{{display:placeholder}}</div>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Form", "Textarea"],
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
  name: "zero-textarea",
  version: "1.0.0",
  title: "Textarea",
  elementSelector: "zero-textarea",
  group: "Form Controls",
  iconName: "textarea-icon.png",
})
@applyGlobalStyles()
export class ZeroTextarea extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) return studioTemplate;
    const labelDisplay = escapeStudio(config.studio.display.label || "Textarea");
    const placeholderDisplay = escapeStudio(config.studio.display.placeholder || "Enter text...");
    return {
      ...studioTemplate,
      templateHtml: [
        "<div style='display:block;width:100%;font-family:inherit;'>",
        `<label style='display:block;margin-bottom:6px;font-size:13px;font-weight:600;color:var(--uiv-text-color,#374151);'>${labelDisplay}</label>`,
        `<div style='width:100%;padding:10px 12px;border:1px solid var(--uiv-border-color,#d1d5db);border-radius:6px;font-size:14px;background:var(--uiv-surface-color,#ffffff);color:#9ca3af;min-height:80px;'>${placeholderDisplay}</div>`,
        "</div>"
      ].join(""),
    };
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
      margin-bottom: 16px;
      --ta-p: var(--uiv-primary-color, #6366f1);
      --ta-text: var(--uiv-text-color, #1f2937);
      --ta-bg: var(--uiv-surface-color, #ffffff);
      --ta-border: var(--uiv-border-color, #d1d5db);
      --ta-muted: var(--uiv-text-color-secondary, #9ca3af);
    }

    .textarea-wrapper {
      display: flex;
      flex-direction: column;
      font-family: inherit;
    }

    label {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--ta-text);
      margin-bottom: 6px;
    }

    textarea {
      width: 100%;
      padding: 10px 12px;
      font-size: 0.93rem;
      color: var(--ta-text);
      background: var(--ta-bg);
      border: 1px solid var(--ta-border);
      border-radius: 6px;
      outline: none;
      box-sizing: border-box;
      line-height: 1.5;
      resize: vertical;
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }

    textarea:disabled {
      background: #f3f4f6;
      color: #9ca3af;
      cursor: not-allowed;
    }

    /* ─── VARIANTS ─── */

    /* Standard */
    .variant-standard textarea:focus:not(:disabled) {
      border-color: var(--ta-p);
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
    }

    /* Modern */
    .variant-modern textarea {
      background: #f9fafb;
      border-color: transparent;
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.04);
      border-radius: 8px;
    }
    .variant-modern textarea:focus:not(:disabled) {
      background: #ffffff;
      border-color: var(--ta-p);
      box-shadow: 0 4px 12px rgba(99, 102, 241, 0.1), inset 0 2px 4px rgba(0, 0, 0, 0.02);
    }

    /* Frosted */
    .variant-frosted textarea {
      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: var(--ta-text);
    }
    .variant-frosted textarea:focus:not(:disabled) {
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.35);
    }

    .textarea-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 6px;
      font-size: 0.78rem;
      color: var(--ta-muted);
    }

    .counts {
      display: flex;
      gap: 12px;
    }

    .has-error textarea {
      border-color: #ef4444 !important;
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15) !important;
    }
    .error-text {
      color: #ef4444;
      font-weight: 500;
    }
  `;

  @property({ type: String }) value = "";
  @property({ type: String }) label = "Textarea";
  @property({ type: String }) placeholder = "Enter your text here...";
  @property({ type: String }) variant = "standard";
  @property({ type: Number }) rows = 4;
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) required = false;
  @property({ type: Number, attribute: "max-length" }) maxLength = 0;
  @property({ type: Boolean, attribute: "auto-resize" }) autoResize = false;
  @property({ type: Boolean, attribute: "show-char-count" }) showCharCount = true;
  @property({ type: Boolean, attribute: "show-word-count" }) showWordCount = false;
  @property({ type: String, attribute: "error-message" }) errorMessage = "";
  @property({ type: Boolean, attribute: "show-error" }) showError = false;

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXTAREA,
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
    displayLabel: "Variant Style",
    fieldMappings: "variant",
    optionItems: [
      { label: "Standard Box", value: "standard" },
      { label: "Modern Soft", value: "modern" },
      { label: "Frosted Glass", value: "frosted" }
    ]
  })
  get variantConfig() { return this.variant; }
  set variantConfig(val: string) { this.variant = val || "standard"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Rows",
    fieldMappings: "rows"
  })
  get rowsConfig() { return this.rows; }
  set rowsConfig(val: number) { this.rows = Number(val) || 4; }

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
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Auto Resize",
    fieldMappings: "autoResize"
  })
  get autoResizeConfig() { return this.autoResize; }
  set autoResizeConfig(val: boolean) { this.autoResize = Boolean(val); }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Show Character Count",
    fieldMappings: "showCharCount"
  })
  get showCharCountConfig() { return this.showCharCount; }
  set showCharCountConfig(val: boolean) { this.showCharCount = Boolean(val); }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Show Word Count",
    fieldMappings: "showWordCount"
  })
  get showWordCountConfig() { return this.showWordCount; }
  set showWordCountConfig(val: boolean) { this.showWordCount = Boolean(val); }

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

  private getWordCount(): number {
    if (!this.value.trim()) return 0;
    return this.value.trim().split(/\s+/).length;
  }

  private autoResizeTextarea(el: HTMLTextAreaElement) {
    if (!this.autoResize) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  }

  @RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: "On Input",
    eventTrigger: "input"
  })
  handleInput(e: Event) {
    const target = e.target as HTMLTextAreaElement;
    this.value = target.value;
    this.autoResizeTextarea(target);
    this.dispatchEvent(
      new CustomEvent("input", {
        detail: {
          value: this.value,
          characterCount: this.value.length,
          wordCount: this.getWordCount()
        },
        bubbles: true,
        composed: true
      })
    );
  }

  @RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: "On Change",
    eventTrigger: "change"
  })
  handleChange(e: Event) {
    const target = e.target as HTMLTextAreaElement;
    this.value = target.value;
    this.dispatchEvent(
      new CustomEvent("change", {
        detail: {
          value: this.value,
          characterCount: this.value.length,
          wordCount: this.getWordCount()
        },
        bubbles: true,
        composed: true
      })
    );
  }

  updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);
    if (changedProperties.has("value") && this.autoResize) {
      const textarea = this.shadowRoot?.querySelector("textarea");
      if (textarea) {
        this.autoResizeTextarea(textarea);
      }
    }
  }

  render() {
    const wrapClass = [
      "textarea-wrapper",
      `variant-${this.variant}`,
      this.showError ? "has-error" : ""
    ].join(" ");

    return html`
      <div class=${wrapClass}>
        ${this.label ? html`<label>${this.label}</label>` : ""}
        <textarea
          .value=${this.value}
          placeholder=${this.placeholder}
          rows=${this.rows}
          maxlength=${this.maxLength > 0 ? this.maxLength : undefined}
          ?disabled=${this.disabled}
          ?required=${this.required}
          @input=${this.handleInput}
          @change=${this.handleChange}
        ></textarea>
        
        ${this.showCharCount || this.showWordCount || this.showError
          ? html`
              <div class="textarea-footer">
                <div class="error-text">
                  ${this.showError ? this.errorMessage : ""}
                </div>
                <div class="counts">
                  ${this.showCharCount
                    ? html`<span>${this.value.length}${this.maxLength > 0 ? `/${this.maxLength}` : ""} chars</span>`
                    : ""}
                  ${this.showWordCount
                    ? html`<span>${this.getWordCount()} words</span>`
                    : ""}
                </div>
              </div>
            `
          : ""}
      </div>
    `;
  }
}
