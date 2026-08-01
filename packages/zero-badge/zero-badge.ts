// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

const TYPE_COLOR: Record<string, string> = {
  neutral: "var(--uiv-secondary-color, #64748b)",
  primary: "var(--uiv-primary-color, #6366f1)",
  success: "var(--uiv-color-success, #10b981)",
  warning: "var(--uiv-color-warning, #f59e0b)",
  error: "var(--uiv-color-danger, #ef4444)",
};

const TYPE_TINT: Record<string, string> = {
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
    "<span style='display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:6px;background:rgba(99,102,241,0.14);color:#4f46e5;font-family:inherit;font-size:12px;font-weight:600;line-height:1;box-sizing:border-box;'>{{display:label}}</span>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Feedback", "Status"],
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
  name: "zero-badge",
  version: "1.0.0",
  title: "Badge",
  elementSelector: "zero-badge",
  group: "Feedback",
  iconName: "badge-icon.png",
})
@applyGlobalStyles()
export class ZeroBadge extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) return studioTemplate;

    const label = escapeStudio(config.props?.label ?? config.studio?.display?.label ?? config.studio?.props?.label ?? "Badge");
    const type = (config.props?.type ?? config.studio?.props?.type) || "primary";
    const variant = (config.props?.variant ?? config.studio?.props?.variant) || "soft";
    const size = (config.props?.size ?? config.studio?.props?.size) || "medium";
    const rounded = config.props?.rounded ?? config.studio?.props?.rounded ?? false;

    const accent = TYPE_COLOR[type] || TYPE_COLOR.primary;
    const tint = TYPE_TINT[type] || TYPE_TINT.primary;

    let pad = "4px 10px";
    let fs = "12px";
    if (size === "small") { pad = "2px 8px"; fs = "11px"; }
    else if (size === "large") { pad = "6px 14px"; fs = "13px"; }

    const radius = rounded ? "999px" : "6px";

    let bg = tint;
    let color = accent;
    let border = "1px solid transparent";
    let dotHtml = "";
    if (variant === "solid") {
      bg = accent;
      color = "#ffffff";
    } else if (variant === "outline") {
      bg = "transparent";
      color = accent;
      border = `1px solid ${accent}`;
    } else if (variant === "dot") {
      bg = "transparent";
      color = "var(--uiv-text-color, #1f2937)";
      dotHtml = `<span style='width:7px;height:7px;border-radius:50%;background:${accent};display:inline-block;'></span>`;
    }

    return {
      ...studioTemplate,
      templateHtml: [
        "<div style='display:inline-block;'>",
        `<span style='display:inline-flex;align-items:center;gap:6px;padding:${pad};border-radius:${radius};background:${bg};color:${color};border:${border};font-family:inherit;font-size:${fs};font-weight:600;line-height:1;box-sizing:border-box;'>${dotHtml}${label}</span>`,
        "</div>"
      ].join(""),
    };
  }

  static styles = css`
    :host {
      display: inline-block;
      --bd-text: var(--uiv-text-color, #1f2937);
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: inherit;
      font-weight: 600;
      line-height: 1;
      white-space: nowrap;
      box-sizing: border-box;
      border: 1px solid transparent;
      cursor: default;
      transition: all 0.2s ease;
    }
    .badge.clickable { cursor: pointer; }
    .badge.clickable:hover { filter: brightness(1.05); transform: translateY(-1px); }

    /* type accents */
    .type-neutral { --bd-accent: var(--uiv-secondary-color, #64748b); --bd-tint: rgba(100, 116, 139, 0.14); }
    .type-primary { --bd-accent: var(--uiv-primary-color, #6366f1); --bd-tint: rgba(99, 102, 241, 0.14); }
    .type-success { --bd-accent: var(--uiv-color-success, #10b981); --bd-tint: rgba(16, 185, 129, 0.14); }
    .type-warning { --bd-accent: var(--uiv-color-warning, #f59e0b); --bd-tint: rgba(245, 158, 11, 0.16); }
    .type-error { --bd-accent: var(--uiv-color-danger, #ef4444); --bd-tint: rgba(239, 68, 68, 0.14); }

    /* sizes */
    .size-small { padding: 2px 8px; font-size: 0.6875rem; border-radius: 6px; }
    .size-medium { padding: 4px 10px; font-size: 0.75rem; border-radius: 6px; }
    .size-large { padding: 6px 14px; font-size: 0.8125rem; border-radius: 8px; }

    :host([rounded]) .badge { border-radius: 999px; }

    /* variants */
    .variant-soft { background: var(--bd-tint); color: var(--bd-accent); }
    .variant-solid { background: var(--bd-accent); color: #ffffff; }
    .variant-outline { background: transparent; color: var(--bd-accent); border-color: var(--bd-accent); }
    .variant-dot { background: transparent; color: var(--bd-text); padding-left: 4px; }

    .dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--bd-accent);
      display: inline-block;
      flex: none;
    }
  `;

  @property({ type: String }) label = "Badge";
  @property({ type: String }) type = "primary";
  @property({ type: String }) variant = "soft";
  @property({ type: String }) size = "medium";
  @property({ type: Boolean, reflect: true }) rounded = false;

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
    displayLabel: "Type",
    fieldMappings: "type",
    optionItems: [
      { label: "Neutral", value: "neutral" },
      { label: "Primary", value: "primary" },
      { label: "Success", value: "success" },
      { label: "Warning", value: "warning" },
      { label: "Error", value: "error" }
    ]
  })
  get typeConfig() { return this.type; }
  set typeConfig(val: string) { this.type = val || "primary"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Variant Style",
    fieldMappings: "variant",
    optionItems: [
      { label: "Soft", value: "soft" },
      { label: "Solid", value: "solid" },
      { label: "Outline", value: "outline" },
      { label: "Dot", value: "dot" }
    ]
  })
  get variantConfig() { return this.variant; }
  set variantConfig(val: string) { this.variant = val || "soft"; }

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
        detail: { label: this.label, type: this.type },
        bubbles: true,
        composed: true
      })
    );
  }

  render() {
    return html`
      <span
        class="badge type-${this.type} variant-${this.variant} size-${this.size} clickable"
        @click=${this.handleClick}
      >
        ${this.variant === "dot" ? html`<span class="dot"></span>` : ""}
        <span>${this.label}</span>
      </span>
    `;
  }
}
