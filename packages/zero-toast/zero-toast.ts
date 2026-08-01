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

export const studioTemplate: ZeroStudioTemplate = {
  kind: "generic",
  templateHtml: [
    "<div style='display:inline-flex;align-items:flex-start;gap:12px;min-width:260px;max-width:340px;padding:14px 16px;border-radius:12px;background:#ffffff;border:1px solid rgba(0,0,0,0.06);border-left:4px solid #10b981;box-shadow:0 8px 24px rgba(0,0,0,0.12);font-family:inherit;box-sizing:border-box;'>",
    "<div style='flex:none;width:22px;height:22px;border-radius:50%;background:#10b981;color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;'>✓</div>",
    "<div style='flex:1;'>",
    "<div style='font-weight:700;font-size:14px;color:#1f2937;margin-bottom:2px;'>{{display:title}}</div>",
    "<div style='font-size:13px;color:#4b5563;line-height:1.4;'>Your changes have been saved.</div>",
    "</div>",
    "<div style='flex:none;color:#9ca3af;font-size:15px;font-weight:700;cursor:pointer;'>✕</div>",
    "</div>"
  ].join(""),
  labelProp: "title",
  badges: ["Feedback", "Toast"],
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
  name: "zero-toast",
  version: "1.0.0",
  title: "Toast",
  elementSelector: "zero-toast",
  group: "Feedback",
  iconName: "toast-icon.png",
})
@applyGlobalStyles()
export class ZeroToast extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) return studioTemplate;

    const type = (config.props?.type ?? config.studio?.props?.type) || "info";
    const showIcon = config.props?.showIcon ?? config.studio?.props?.showIcon ?? true;
    const dismissible = config.props?.dismissible ?? config.studio?.props?.dismissible ?? true;
    const title = escapeStudio(config.props?.title ?? config.studio?.props?.title ?? "Notification");
    const message = escapeStudio(
      config.props?.message ?? config.studio?.props?.message ?? "This is a toast message."
    );

    const accent = TYPE_COLOR[type] || TYPE_COLOR.info;
    const icon = TYPE_ICON[type] || TYPE_ICON.info;

    const iconHtml = showIcon
      ? `<div style='flex:none;width:22px;height:22px;border-radius:50%;background:${accent};color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;'>${icon}</div>`
      : "";
    const closeHtml = dismissible
      ? `<div style='flex:none;color:var(--uiv-text-tertiary, #9ca3af);font-size:15px;font-weight:700;cursor:pointer;'>✕</div>`
      : "";
    const titleHtml = title
      ? `<div style='font-weight:700;font-size:14px;color:var(--uiv-text-color, #1f2937);margin-bottom:2px;'>${title}</div>`
      : "";

    return {
      ...studioTemplate,
      // Rendered INLINE (static position) so it is visible on the design canvas
      // rather than fixed/off-screen like the live overlay element.
      templateHtml: [
        `<div style='display:inline-flex;align-items:flex-start;gap:12px;min-width:260px;max-width:340px;padding:14px 16px;border-radius:12px;background:var(--uiv-surface-color, #ffffff);border:1px solid var(--uiv-border-color, rgba(0,0,0,0.06));border-left:4px solid ${accent};box-shadow:var(--uiv-shadow-depth, 0 8px 24px rgba(0,0,0,0.12));font-family:inherit;box-sizing:border-box;'>`,
        iconHtml,
        `<div style='flex:1;'>${titleHtml}<div style='font-size:13px;color:var(--uiv-text-muted, #4b5563);line-height:1.4;'>${message}</div></div>`,
        closeHtml,
        "</div>"
      ].join(""),
    };
  }

  static styles = css`
    :host {
      position: fixed;
      z-index: 9999;
      --ts-surface: var(--uiv-surface-color, #ffffff);
      --ts-text: var(--uiv-text-color, #1f2937);
      --ts-muted: var(--uiv-text-muted, #4b5563);
      --ts-tertiary: var(--uiv-text-tertiary, #9ca3af);
      --ts-border: var(--uiv-border-color, rgba(0, 0, 0, 0.06));
      --ts-radius: var(--uiv-border-radius, 12px);
      --ts-shadow: var(--uiv-shadow-depth, 0 8px 24px rgba(0, 0, 0, 0.12));
    }

    /* live overlay positions */
    :host([position="top-right"]) { top: 20px; right: 20px; }
    :host([position="top-left"]) { top: 20px; left: 20px; }
    :host([position="bottom-right"]) { bottom: 20px; right: 20px; }
    :host([position="bottom-left"]) { bottom: 20px; left: 20px; }
    :host([position="top-center"]) { top: 20px; left: 50%; transform: translateX(-50%); }
    :host([position="bottom-center"]) { bottom: 20px; left: 50%; transform: translateX(-50%); }

    :host([hidden-state]) { display: none; }

    .toast {
      display: inline-flex;
      align-items: flex-start;
      gap: 12px;
      min-width: 260px;
      max-width: 340px;
      padding: 14px 16px;
      border-radius: var(--ts-radius);
      background: var(--ts-surface);
      border: 1px solid var(--ts-border);
      border-left: 4px solid var(--ts-accent, var(--uiv-color-info, #0ea5e9));
      box-shadow: var(--ts-shadow);
      font-family: inherit;
      box-sizing: border-box;
      animation: toast-in 0.28s cubic-bezier(0.16, 1, 0.3, 1);
    }

    @keyframes toast-in {
      from { opacity: 0; transform: translateY(-8px) scale(0.98); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }

    /* type accents */
    .type-info { --ts-accent: var(--uiv-color-info, #0ea5e9); }
    .type-success { --ts-accent: var(--uiv-color-success, #10b981); }
    .type-warning { --ts-accent: var(--uiv-color-warning, #f59e0b); }
    .type-error { --ts-accent: var(--uiv-color-danger, #ef4444); }

    .icon {
      flex: none;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--ts-accent);
      color: #ffffff;
      font-size: 0.8rem;
      font-weight: 700;
      line-height: 1;
    }

    .body {
      flex: 1;
      min-width: 0;
    }
    .title {
      font-weight: 700;
      font-size: 0.875rem;
      color: var(--ts-text);
      margin-bottom: 2px;
    }
    .message {
      font-size: 0.82rem;
      line-height: 1.45;
      color: var(--ts-muted);
    }

    .close {
      flex: none;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 0.95rem;
      font-weight: 700;
      line-height: 1;
      color: var(--ts-tertiary);
      padding: 2px;
      transition: color 0.2s ease;
    }
    .close:hover { color: var(--ts-text); }
  `;

  @property({ type: String }) title = "Notification";
  @property({ type: String }) message = "This is a toast message.";
  @property({ type: String }) type = "info";
  @property({ type: String, reflect: true }) position = "top-right";
  @property({ type: Number }) duration = 4000;
  @property({ type: Boolean, attribute: "show-icon" }) showIcon = true;
  @property({ type: Boolean }) dismissible = true;
  @property({ type: Boolean, reflect: true, attribute: "hidden-state" }) hiddenState = false;

  private _timer: ReturnType<typeof setTimeout> | null = null;

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
    displayLabel: "Position",
    fieldMappings: "position",
    optionItems: [
      { label: "Top Right", value: "top-right" },
      { label: "Top Left", value: "top-left" },
      { label: "Bottom Right", value: "bottom-right" },
      { label: "Bottom Left", value: "bottom-left" },
      { label: "Top Center", value: "top-center" },
      { label: "Bottom Center", value: "bottom-center" }
    ]
  })
  get positionConfig() { return this.position; }
  set positionConfig(val: string) { this.position = val || "top-right"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Duration (ms, 0 = persistent)",
    fieldMappings: "duration"
  })
  get durationConfig() { return this.duration; }
  set durationConfig(val: number) { this.duration = Math.max(0, Number(val) || 0); }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Show Icon",
    fieldMappings: "showIcon"
  })
  get showIconConfig() { return this.showIcon; }
  set showIconConfig(val: boolean) { this.showIcon = Boolean(val); }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Dismissible",
    fieldMappings: "dismissible"
  })
  get dismissibleConfig() { return this.dismissible; }
  set dismissibleConfig(val: boolean) { this.dismissible = Boolean(val); }

  @RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: "On Dismiss",
    eventTrigger: "on-dismiss"
  })
  handleDismiss() {
    this.clearTimer();
    this.hiddenState = true;
    this.dispatchEvent(
      new CustomEvent("on-dismiss", {
        detail: { type: this.type, title: this.title },
        bubbles: true,
        composed: true
      })
    );
  }

  private clearTimer() {
    if (this._timer) {
      clearTimeout(this._timer);
      this._timer = null;
    }
  }

  private startTimer() {
    this.clearTimer();
    const ms = Number(this.duration) || 0;
    if (ms > 0) {
      this._timer = setTimeout(() => this.handleDismiss(), ms);
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.startTimer();
  }

  disconnectedCallback() {
    this.clearTimer();
    super.disconnectedCallback();
  }

  render() {
    const icon = TYPE_ICON[this.type] || TYPE_ICON.info;
    return html`
      <div class="toast type-${this.type}" role="status" aria-live="polite">
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
