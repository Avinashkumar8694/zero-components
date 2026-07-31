// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

export const studioTemplate: ZeroStudioTemplate = {
  kind: "generic",
  templateHtml: [
    "<div style='display:flex;align-items:center;gap:10px;padding:6px 0;'>",
    "<div style='width:36px;height:20px;border-radius:10px;background:#e5e7eb;position:relative;cursor:pointer;'>",
    "<div style='width:16px;height:16px;border-radius:50%;background:#ffffff;position:absolute;top:2px;left:2px;'></div>",
    "</div>",
    "<span style='font-size:14px;color:var(--uiv-text-color,#1f2937);'>{{display:label}}</span>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Form", "Switch"],
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
  name: "zero-switch",
  version: "1.0.0",
  title: "Switch / Toggle",
  elementSelector: "zero-switch",
  group: "Form Controls",
  iconName: "switch-icon.png",
})
@applyGlobalStyles()
export class ZeroSwitch extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) return studioTemplate;
    const labelDisplay = escapeStudio(config.studio.display.label || "Toggle Switch");
    return {
      ...studioTemplate,
      templateHtml: [
        "<div style='display:flex;align-items:center;gap:10px;padding:6px 0;font-family:inherit;'>",
        "<div style='width:36px;height:20px;border-radius:10px;background:#6366f1;position:relative;cursor:pointer;'>",
        "<div style='width:16px;height:16px;border-radius:50%;background:#ffffff;position:absolute;top:2px;right:2px;'></div>",
        "</div>",
        `<span style='font-size:14px;color:var(--uiv-text-color,#1f2937);'>${labelDisplay}</span>`,
        "</div>"
      ].join(""),
    };
  }

  static styles = css`
    :host {
      display: block;
      margin-bottom: 12px;
      --sw-p: var(--uiv-primary-color, #6366f1);
      --sw-bg: var(--uiv-surface-color, #e5e7eb);
      --sw-text: var(--uiv-text-color, #1f2937);
    }

    .switch-wrapper {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      user-select: none;
      padding: 4px 0;
    }

    .switch-wrapper.disabled {
      cursor: not-allowed;
      opacity: 0.55;
    }

    .track {
      width: 40px;
      height: 22px;
      border-radius: 11px;
      background: var(--sw-bg);
      position: relative;
      transition: background 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .thumb {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #ffffff;
      position: absolute;
      top: 2px;
      left: 2px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.15);
      transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Active State */
    .checked .track {
      background: var(--sw-p);
    }

    .checked .thumb {
      transform: translateX(18px);
    }

    .switch-label {
      font-size: 0.93rem;
      color: var(--sw-text);
      font-weight: 500;
    }

    /* ─── VARIANTS ─── */

    /* iOS Style */
    .variant-ios .track {
      background: #e9e9ea;
      border: 1px solid rgba(0, 0, 0, 0.05);
    }
    .checked.variant-ios .track {
      background: #34c759;
    }
    .variant-ios .thumb {
      box-shadow: 0 3px 8px rgba(0,0,0,0.15), 0 3px 1px rgba(0,0,0,0.06);
    }

    /* Glow Style */
    .checked.variant-glow .track {
      box-shadow: 0 0 12px var(--sw-p);
    }
    .checked.variant-glow .thumb {
      box-shadow: 0 0 8px #ffffff;
    }

    .has-error .track {
      border: 1.5px solid #ef4444 !important;
    }
    .error-text {
      color: #ef4444;
      font-size: 0.78rem;
      margin-left: 50px;
      margin-top: 2px;
      font-weight: 500;
    }
  `;

  @property({ type: Boolean }) checked = false;
  @property({ type: String }) label = "Toggle Label";
  @property({ type: String }) variant = "standard";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) required = false;
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
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Switch Variant Style",
    fieldMappings: "variant",
    optionItems: [
      { label: "Standard Switch", value: "standard" },
      { label: "iOS Apple Style", value: "ios" },
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
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Required Field",
    fieldMappings: "required"
  })
  get requiredConfig() { return this.required; }
  set requiredConfig(val: boolean) { this.required = Boolean(val); }

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
    this.checked = !this.checked;
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
      this.showError ? "has-error" : "",
      `variant-${this.variant}`
    ].join(" ");

    const accentStyles = this.accentColor ? { "--sw-p": this.accentColor } : {};

    return html`
      <div class="switch-wrapper ${wrapClass}" @click=${this.handleToggle} style=${styleMap(accentStyles)}>
        <div class="track">
          <div class="thumb"></div>
        </div>
        <span class="switch-label">${this.label}</span>
      </div>
      ${this.showError && this.errorMessage
        ? html`<div class="error-text">${this.errorMessage}</div>`
        : ""}
    `;
  }
}
