// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

const TYPE_ICON: Record<string, string> = {
  info: "i",
  success: "✓",
  warning: "!",
  error: "✕",
};

const TYPE_COLOR: Record<string, string> = {
  info: "var(--uiv-color-info, #0ea5e9)",
  success: "var(--uiv-color-success, #10b981)",
  warning: "var(--uiv-color-warning, #f59e0b)",
  error: "var(--uiv-color-danger, #ef4444)",
};

const TYPE_TINT: Record<string, string> = {
  info: "rgba(14, 165, 233, 0.12)",
  success: "rgba(16, 185, 129, 0.12)",
  warning: "rgba(245, 158, 11, 0.14)",
  error: "rgba(239, 68, 68, 0.12)",
};

export const studioTemplate: ZeroStudioTemplate = {
  kind: "generic",
  templateHtml: [
    "<div style='display:flex;align-items:flex-start;gap:12px;padding:14px 16px;border-radius:10px;background:rgba(14,165,233,0.12);border:1px solid rgba(14,165,233,0.3);font-family:inherit;box-sizing:border-box;'>",
    "<div style='flex:none;width:22px;height:22px;border-radius:50%;background:#0ea5e9;color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;'>i</div>",
    "<div style='flex:1;'>",
    "<div style='font-weight:700;font-size:14px;color:#0c4a6e;margin-bottom:2px;'>{{display:title}}</div>",
    "<div style='font-size:13px;color:#0369a1;'>This is an informational alert message.</div>",
    "</div>",
    "</div>"
  ].join(""),
  labelProp: "title",
  badges: ["Feedback", "Alert"],
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
  name: "zero-alert",
  version: "1.0.0",
  title: "Alert",
  elementSelector: "zero-alert",
  group: "Feedback",
  iconName: "alert-icon.png",
})
@applyGlobalStyles()
export class ZeroAlert extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) return studioTemplate;

    const type = (config.props?.type ?? config.studio?.props?.type) || "info";
    const variant = (config.props?.variant ?? config.studio?.props?.variant) || "soft";
    const showIcon = config.props?.showIcon ?? config.studio?.props?.showIcon ?? true;
    const dismissible = config.props?.dismissible ?? config.studio?.props?.dismissible ?? false;
    const title = escapeStudio(config.props?.title ?? config.studio?.props?.title ?? "");
    const message = escapeStudio(
      config.props?.message ?? config.studio?.props?.message ?? "This is an alert message."
    );

    const accent = TYPE_COLOR[type] || TYPE_COLOR.info;
    const tint = TYPE_TINT[type] || TYPE_TINT.info;
    const icon = TYPE_ICON[type] || TYPE_ICON.info;

    let bg = tint;
    let border = `1px solid ${accent}`;
    let textColor = "var(--uiv-text-color, #1f2937)";
    let iconBg = accent;
    let iconColor = "#ffffff";
    if (variant === "solid") {
      bg = accent;
      border = `1px solid ${accent}`;
      textColor = "#ffffff";
      iconBg = "rgba(255,255,255,0.25)";
      iconColor = "#ffffff";
    } else if (variant === "outline") {
      bg = "var(--uiv-surface-color, #ffffff)";
      border = `1px solid ${accent}`;
      textColor = "var(--uiv-text-color, #1f2937)";
    }

    const iconHtml = showIcon
      ? `<div style='flex:none;width:22px;height:22px;border-radius:50%;background:${iconBg};color:${iconColor};display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;'>${icon}</div>`
      : "";
    const closeHtml = dismissible
      ? `<div style='flex:none;color:${textColor};opacity:0.6;font-size:15px;font-weight:700;cursor:pointer;'>✕</div>`
      : "";
    const titleHtml = title
      ? `<div style='font-weight:700;font-size:14px;color:${textColor};margin-bottom:2px;'>${title}</div>`
      : "";

    return {
      ...studioTemplate,
      templateHtml: [
        `<div style='display:flex;align-items:flex-start;gap:12px;padding:14px 16px;border-radius:10px;background:${bg};border:${border};font-family:inherit;box-sizing:border-box;'>`,
        iconHtml,
        `<div style='flex:1;'>${titleHtml}<div style='font-size:13px;color:${textColor};opacity:${variant === "solid" ? "0.95" : "0.85"};'>${message}</div></div>`,
        closeHtml,
        "</div>"
      ].join(""),
    };
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
      --al-text: var(--uiv-text-color, #1f2937);
      --al-surface: var(--uiv-surface-color, #ffffff);
      --al-radius: var(--uiv-border-radius, 10px);
    }

    .alert {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 14px 16px;
      border-radius: var(--al-radius);
      font-family: inherit;
      box-sizing: border-box;
      border: 1px solid transparent;
      transition: all 0.2s ease;
    }

    /* type accents */
    .type-info { --al-accent: var(--uiv-color-info, #0ea5e9); --al-tint: rgba(14, 165, 233, 0.12); }
    .type-success { --al-accent: var(--uiv-color-success, #10b981); --al-tint: rgba(16, 185, 129, 0.12); }
    .type-warning { --al-accent: var(--uiv-color-warning, #f59e0b); --al-tint: rgba(245, 158, 11, 0.14); }
    .type-error { --al-accent: var(--uiv-color-danger, #ef4444); --al-tint: rgba(239, 68, 68, 0.12); }

    /* variants */
    .variant-soft {
      background: var(--al-tint);
      border-color: color-mix(in srgb, var(--al-accent) 35%, transparent);
      color: var(--al-text);
    }
    .variant-outline {
      background: var(--al-surface);
      border-color: var(--al-accent);
      color: var(--al-text);
    }
    .variant-solid {
      background: var(--al-accent);
      border-color: var(--al-accent);
      color: #ffffff;
    }

    .icon {
      flex: none;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
      font-weight: 700;
      line-height: 1;
    }
    .variant-soft .icon,
    .variant-outline .icon {
      background: var(--al-accent);
      color: #ffffff;
    }
    .variant-solid .icon {
      background: rgba(255, 255, 255, 0.25);
      color: #ffffff;
    }

    .body {
      flex: 1;
      min-width: 0;
    }
    .title {
      font-weight: 700;
      font-size: 0.875rem;
      margin-bottom: 2px;
    }
    .message {
      font-size: 0.82rem;
      line-height: 1.45;
      opacity: 0.9;
    }
    .variant-soft .title,
    .variant-outline .title { color: var(--al-accent); }

    .close {
      flex: none;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 0.95rem;
      font-weight: 700;
      line-height: 1;
      color: inherit;
      opacity: 0.6;
      padding: 2px;
      transition: opacity 0.2s ease;
    }
    .close:hover { opacity: 1; }

    :host([hidden-state]) { display: none; }
  `;

  @property({ type: String }) message = "This is an alert message with helpful context.";
  @property({ type: String }) title = "Heads up";
  @property({ type: String }) type = "info";
  @property({ type: String }) variant = "soft";
  @property({ type: Boolean }) dismissible = false;
  @property({ type: Boolean, attribute: "show-icon" }) showIcon = true;
  @property({ type: Boolean, reflect: true, attribute: "hidden-state" }) hiddenState = false;

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Title",
    fieldMappings: "title"
  })
  get titleConfig() { return this.title; }
  set titleConfig(val: string) { this.title = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXTAREA,
    displayLabel: "Message",
    fieldMappings: "message"
  })
  get messageConfig() { return this.message; }
  set messageConfig(val: string) { this.message = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Type",
    fieldMappings: "type",
    optionItems: [
      { label: "Info", value: "info" },
      { label: "Success", value: "success" },
      { label: "Warning", value: "warning" },
      { label: "Error", value: "error" }
    ]
  })
  get typeConfig() { return this.type; }
  set typeConfig(val: string) { this.type = val || "info"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Variant Style",
    fieldMappings: "variant",
    optionItems: [
      { label: "Soft", value: "soft" },
      { label: "Solid", value: "solid" },
      { label: "Outline", value: "outline" }
    ]
  })
  get variantConfig() { return this.variant; }
  set variantConfig(val: string) { this.variant = val || "soft"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Dismissible",
    fieldMappings: "dismissible"
  })
  get dismissibleConfig() { return this.dismissible; }
  set dismissibleConfig(val: boolean) { this.dismissible = Boolean(val); }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Show Icon",
    fieldMappings: "showIcon"
  })
  get showIconConfig() { return this.showIcon; }
  set showIconConfig(val: boolean) { this.showIcon = Boolean(val); }

  @RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: "On Dismiss",
    eventTrigger: "on-dismiss"
  })
  handleDismiss() {
    this.hiddenState = true;
    this.dispatchEvent(
      new CustomEvent("on-dismiss", {
        detail: { type: this.type, title: this.title },
        bubbles: true,
        composed: true
      })
    );
  }

  render() {
    const icon = TYPE_ICON[this.type] || TYPE_ICON.info;
    return html`
      <div class="alert type-${this.type} variant-${this.variant}" role="alert">
        ${this.showIcon ? html`<div class="icon">${icon}</div>` : ""}
        <div class="body">
          ${this.title ? html`<div class="title">${this.title}</div>` : ""}
          <div class="message">${this.message}</div>
        </div>
        ${this.dismissible
          ? html`<button class="close" aria-label="Dismiss" @click=${this.handleDismiss}>&#10005;</button>`
          : ""}
      </div>
    `;
  }
}
