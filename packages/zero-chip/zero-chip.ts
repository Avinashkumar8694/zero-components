// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

const COLOR_ACCENT: Record<string, string> = {
  neutral: "var(--uiv-secondary-color, #64748b)",
  primary: "var(--uiv-primary-color, #6366f1)",
  success: "var(--uiv-color-success, #10b981)",
  warning: "var(--uiv-color-warning, #f59e0b)",
  error: "var(--uiv-color-danger, #ef4444)",
};

const COLOR_TINT: Record<string, string> = {
  neutral: "rgba(100, 116, 139, 0.14)",
  primary: "rgba(99, 102, 241, 0.14)",
  success: "rgba(16, 185, 129, 0.14)",
  warning: "rgba(245, 158, 11, 0.16)",
  error: "rgba(239, 68, 68, 0.14)",
};

export const studioTemplate: ZeroStudioTemplate = {
  kind: "generic",
  templateHtml: [
    "<div style='display:inline-block;'>",
    "<span style='display:inline-flex;align-items:center;gap:6px;padding:5px 12px;border-radius:999px;background:rgba(99,102,241,0.14);color:#4f46e5;font-family:inherit;font-size:13px;font-weight:500;line-height:1;box-sizing:border-box;'>{{display:label}}</span>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Data Display", "Tag"],
};

function escapeStudio(value: string): string {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

@RendererComponent({
  name: "zero-chip",
  version: "1.0.0",
  title: "Chip",
  elementSelector: "zero-chip",
  group: "Data Display",
  iconName: "chip-icon.png",
})
@applyGlobalStyles()
export class ZeroChip extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) return studioTemplate;

    const label = escapeStudio(config.props?.label ?? config.studio?.props?.label ?? "Chip");
    const variant = (config.props?.variant ?? config.studio?.props?.variant) || "soft";
    const color = (config.props?.color ?? config.studio?.props?.color) || "primary";
    const size = (config.props?.size ?? config.studio?.props?.size) || "medium";
    const removable = config.props?.removable ?? config.studio?.props?.removable ?? false;
    const icon = escapeStudio(config.props?.icon ?? config.studio?.props?.icon ?? "");
    const rounded = config.props?.rounded ?? config.studio?.props?.rounded ?? true;

    const accent = COLOR_ACCENT[color] || COLOR_ACCENT.primary;
    const tint = COLOR_TINT[color] || COLOR_TINT.primary;

    let pad = "5px 12px";
    let fs = "13px";
    if (size === "small") { pad = "3px 9px"; fs = "12px"; }
    else if (size === "large") { pad = "7px 16px"; fs = "14px"; }

    const radius = rounded ? "999px" : "var(--uiv-border-radius, 8px)";

    let bg = tint;
    let fg = accent;
    let border = "1px solid transparent";
    if (variant === "solid") { bg = accent; fg = "#ffffff"; }
    else if (variant === "outline") { bg = "transparent"; fg = accent; border = `1px solid ${accent}`; }

    const iconHtml = icon ? `<span style='font-size:${fs};line-height:1;'>${icon}</span>` : "";
    const removeHtml = removable
      ? `<span style='display:inline-flex;align-items:center;justify-content:center;width:15px;height:15px;border-radius:50%;background:${variant === "solid" ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.08)"};font-size:11px;line-height:1;'>×</span>`
      : "";

    return {
      ...studioTemplate,
      templateHtml: [
        "<div style='display:inline-block;'>",
        `<span style='display:inline-flex;align-items:center;gap:6px;padding:${pad};border-radius:${radius};background:${bg};color:${fg};border:${border};font-family:inherit;font-size:${fs};font-weight:500;line-height:1;box-sizing:border-box;'>${iconHtml}${label}${removeHtml}</span>`,
        "</div>"
      ].join(""),
    };
  }

  static styles = css`
    :host {
      display: inline-block;
      --chip-text: var(--uiv-text-color, #1f2937);
    }

    .chip {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: inherit;
      font-weight: 500;
      line-height: 1;
      white-space: nowrap;
      box-sizing: border-box;
      border: 1px solid transparent;
      cursor: default;
      transition: all 0.18s ease;
    }
    .chip.clickable { cursor: pointer; }
    .chip.clickable:hover { filter: brightness(1.04); transform: translateY(-1px); }

    /* color accents */
    .color-neutral { --chip-accent: var(--uiv-secondary-color, #64748b); --chip-tint: rgba(100, 116, 139, 0.14); }
    .color-primary { --chip-accent: var(--uiv-primary-color, #6366f1); --chip-tint: rgba(99, 102, 241, 0.14); }
    .color-success { --chip-accent: var(--uiv-color-success, #10b981); --chip-tint: rgba(16, 185, 129, 0.14); }
    .color-warning { --chip-accent: var(--uiv-color-warning, #f59e0b); --chip-tint: rgba(245, 158, 11, 0.16); }
    .color-error { --chip-accent: var(--uiv-color-danger, #ef4444); --chip-tint: rgba(239, 68, 68, 0.14); }

    /* sizes */
    .size-small { padding: 3px 9px; font-size: 0.75rem; border-radius: 8px; }
    .size-medium { padding: 5px 12px; font-size: 0.8125rem; border-radius: 8px; }
    .size-large { padding: 7px 16px; font-size: 0.875rem; border-radius: 10px; }

    :host([rounded]) .chip { border-radius: 999px; }

    /* variants */
    .variant-soft { background: var(--chip-tint); color: var(--chip-accent); }
    .variant-solid { background: var(--chip-accent); color: #ffffff; }
    .variant-outline { background: transparent; color: var(--chip-accent); border-color: var(--chip-accent); }

    .icon { line-height: 1; display: inline-flex; }

    .remove {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 15px;
      height: 15px;
      border: none;
      border-radius: 50%;
      padding: 0;
      margin: 0 -2px 0 0;
      background: rgba(0, 0, 0, 0.08);
      color: inherit;
      font-family: inherit;
      font-size: 11px;
      line-height: 1;
      cursor: pointer;
      transition: background 0.15s ease, transform 0.15s ease;
    }
    .variant-solid .remove { background: rgba(255, 255, 255, 0.25); }
    .remove:hover { background: rgba(0, 0, 0, 0.18); transform: scale(1.12); }
    .variant-solid .remove:hover { background: rgba(255, 255, 255, 0.4); }
  `;

  @property({ type: String }) label = "Chip";
  @property({ type: String }) variant = "soft";
  @property({ type: String }) color = "primary";
  @property({ type: String }) size = "medium";
  @property({ type: Boolean }) removable = false;
  @property({ type: String }) icon = "";
  @property({ type: Boolean, reflect: true }) rounded = true;

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Label / Text",
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
      { label: "Solid", value: "solid" },
      { label: "Soft", value: "soft" },
      { label: "Outline", value: "outline" }
    ]
  })
  get variantConfig() { return this.variant; }
  set variantConfig(val: string) { this.variant = val || "soft"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Color",
    fieldMappings: "color",
    optionItems: [
      { label: "Neutral", value: "neutral" },
      { label: "Primary", value: "primary" },
      { label: "Success", value: "success" },
      { label: "Warning", value: "warning" },
      { label: "Error", value: "error" }
    ]
  })
  get colorConfig() { return this.color; }
  set colorConfig(val: string) { this.color = val || "primary"; }

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
    displayLabel: "Removable (show x)",
    fieldMappings: "removable"
  })
  get removableConfig() { return this.removable; }
  set removableConfig(val: boolean) { this.removable = Boolean(val); }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Leading Icon / Emoji",
    fieldMappings: "icon"
  })
  get iconConfig() { return this.icon; }
  set iconConfig(val: string) { this.icon = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Rounded (pill shape)",
    fieldMappings: "rounded"
  })
  get roundedConfig() { return this.rounded; }
  set roundedConfig(val: boolean) { this.rounded = Boolean(val); }

  @RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: "On Click",
    eventTrigger: "on-click"
  })
  handleClick() {
    this.dispatchEvent(
      new CustomEvent("on-click", {
        detail: { label: this.label, color: this.color },
        bubbles: true,
        composed: true
      })
    );
  }

  @RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: "On Remove",
    eventTrigger: "on-remove"
  })
  handleRemove(e: Event) {
    e.stopPropagation();
    this.dispatchEvent(
      new CustomEvent("on-remove", {
        detail: { label: this.label, color: this.color },
        bubbles: true,
        composed: true
      })
    );
  }

  render() {
    return html`
      <span
        class="chip color-${this.color} variant-${this.variant} size-${this.size} clickable"
        @click=${this.handleClick}
      >
        ${this.icon ? html`<span class="icon">${this.icon}</span>` : ""}
        <span class="label">${this.label}</span>
        ${this.removable
          ? html`<button
              class="remove"
              aria-label="Remove"
              @click=${(e: Event) => this.handleRemove(e)}
            >×</button>`
          : ""}
      </span>
    `;
  }
}
