// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

const STATUS_COLOR: Record<string, string> = {
  online: "var(--uiv-color-success, #10b981)",
  away: "var(--uiv-color-warning, #f59e0b)",
  busy: "var(--uiv-color-danger, #ef4444)",
  offline: "var(--uiv-text-tertiary, #9ca3af)",
};

const SIZE_PX: Record<string, number> = { xs: 24, sm: 32, md: 40, lg: 56, xl: 72 };

export const studioTemplate: ZeroStudioTemplate = {
  kind: "generic",
  templateHtml: [
    "<div style='display:inline-flex;position:relative;box-sizing:border-box;'>",
    "<div style='width:40px;height:40px;border-radius:50%;background:rgba(99,102,241,0.14);color:#4f46e5;display:flex;align-items:center;justify-content:center;font-family:inherit;font-size:15px;font-weight:600;line-height:1;'>{{display:initials}}</div>",
    "</div>"
  ].join(""),
  labelProp: "name",
  badges: ["Data Display", "Identity"],
};

function escapeStudio(value: string): string {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function deriveInitials(name: string, initials: string): string {
  const explicit = (initials || "").trim();
  if (explicit) return explicit.slice(0, 2).toUpperCase();
  const parts = (name || "").trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

@RendererComponent({
  name: "zero-avatar",
  version: "1.0.0",
  title: "Avatar",
  elementSelector: "zero-avatar",
  group: "Data Display",
  iconName: "avatar-icon.png",
})
@applyGlobalStyles()
export class ZeroAvatar extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) return studioTemplate;

    const src = (config.props?.src ?? config.studio?.props?.src) || "";
    const name = config.props?.name ?? config.studio?.props?.name ?? "User";
    const initialsRaw = config.props?.initials ?? config.studio?.props?.initials ?? "";
    const size = (config.props?.size ?? config.studio?.props?.size) || "md";
    const shape = (config.props?.shape ?? config.studio?.props?.shape) || "circle";
    const status = (config.props?.status ?? config.studio?.props?.status) || "none";
    const showStatus = config.props?.showStatus ?? config.studio?.props?.showStatus ?? false;
    const bgColor = (config.props?.bgColor ?? config.studio?.props?.bgColor) || "";

    const px = SIZE_PX[size] || 40;
    const radius = shape === "circle" ? "50%" : shape === "rounded" ? "var(--uiv-border-radius, 8px)" : "0px";
    const initials = escapeStudio(deriveInitials(String(name), String(initialsRaw)));
    const tint = bgColor || "rgba(99,102,241,0.14)";
    const fg = bgColor ? "#ffffff" : "var(--uiv-primary-color, #4f46e5)";
    const dotColor = STATUS_COLOR[status] || STATUS_COLOR.offline;
    const dotSize = Math.max(8, Math.round(px * 0.28));

    const inner = src
      ? `<img src='${escapeStudio(String(src))}' alt='${initials}' style='width:100%;height:100%;object-fit:cover;display:block;'/>`
      : `<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:${tint};color:${fg};font-weight:600;font-size:${Math.round(px * 0.4)}px;line-height:1;'>${initials}</div>`;

    const dot = showStatus && status !== "none"
      ? `<span style='position:absolute;bottom:0;right:0;width:${dotSize}px;height:${dotSize}px;border-radius:50%;background:${dotColor};box-shadow:0 0 0 2px var(--uiv-surface-color, #ffffff);'></span>`
      : "";

    return {
      ...studioTemplate,
      templateHtml: [
        "<div style='display:inline-flex;position:relative;box-sizing:border-box;'>",
        `<div style='width:${px}px;height:${px}px;border-radius:${radius};overflow:hidden;font-family:inherit;box-sizing:border-box;'>${inner}</div>`,
        dot,
        "</div>"
      ].join(""),
    };
  }

  static styles = css`
    :host {
      display: inline-block;
      --av-primary: var(--uiv-primary-color, #6366f1);
      --av-surface: var(--uiv-surface-color, #ffffff);
      --av-tint: rgba(99, 102, 241, 0.14);
      --av-text: var(--uiv-text-color, #1f2937);
    }

    .avatar {
      position: relative;
      display: inline-flex;
      box-sizing: border-box;
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .avatar:hover {
      transform: translateY(-1px);
    }

    .frame {
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--av-tint);
      box-sizing: border-box;
    }

    /* shapes */
    .shape-circle .frame { border-radius: 50%; }
    .shape-rounded .frame { border-radius: var(--uiv-border-radius, 8px); }
    .shape-square .frame { border-radius: 0; }

    /* sizes */
    .size-xs .frame { width: 24px; height: 24px; font-size: 0.6rem; }
    .size-sm .frame { width: 32px; height: 32px; font-size: 0.75rem; }
    .size-md .frame { width: 40px; height: 40px; font-size: 0.9rem; }
    .size-lg .frame { width: 56px; height: 56px; font-size: 1.25rem; }
    .size-xl .frame { width: 72px; height: 72px; font-size: 1.6rem; }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .initials {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--av-primary);
      font-weight: 600;
      line-height: 1;
      user-select: none;
    }
    .initials.filled { color: #ffffff; }

    .status-dot {
      position: absolute;
      bottom: 0;
      right: 0;
      border-radius: 50%;
      box-shadow: 0 0 0 2px var(--av-surface);
      box-sizing: border-box;
    }
    .status-online { background: var(--uiv-color-success, #10b981); }
    .status-away { background: var(--uiv-color-warning, #f59e0b); }
    .status-busy { background: var(--uiv-color-danger, #ef4444); }
    .status-offline { background: var(--uiv-text-tertiary, #9ca3af); }

    .dot-xs { width: 8px; height: 8px; }
    .dot-sm { width: 9px; height: 9px; }
    .dot-md { width: 11px; height: 11px; }
    .dot-lg { width: 15px; height: 15px; }
    .dot-xl { width: 18px; height: 18px; }
  `;

  @property({ type: String }) src = "";
  @property({ type: String }) name = "User";
  @property({ type: String }) initials = "";
  @property({ type: String }) size = "md";
  @property({ type: String }) shape = "circle";
  @property({ type: String }) status = "none";
  @property({ type: Boolean, attribute: "show-status" }) showStatus = false;
  @property({ type: String, attribute: "bg-color" }) bgColor = "";

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Image URL",
    fieldMappings: "src"
  })
  get srcConfig() { return this.src; }
  set srcConfig(val: string) { this.src = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Name (initials fallback)",
    fieldMappings: "name"
  })
  get nameConfig() { return this.name; }
  set nameConfig(val: string) { this.name = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Initials (override)",
    fieldMappings: "initials"
  })
  get initialsConfig() { return this.initials; }
  set initialsConfig(val: string) { this.initials = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Size",
    fieldMappings: "size",
    optionItems: [
      { label: "Extra Small", value: "xs" },
      { label: "Small", value: "sm" },
      { label: "Medium", value: "md" },
      { label: "Large", value: "lg" },
      { label: "Extra Large", value: "xl" }
    ]
  })
  get sizeConfig() { return this.size; }
  set sizeConfig(val: string) { this.size = val || "md"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Shape",
    fieldMappings: "shape",
    optionItems: [
      { label: "Circle", value: "circle" },
      { label: "Rounded", value: "rounded" },
      { label: "Square", value: "square" }
    ]
  })
  get shapeConfig() { return this.shape; }
  set shapeConfig(val: string) { this.shape = val || "circle"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Status",
    fieldMappings: "status",
    optionItems: [
      { label: "None", value: "none" },
      { label: "Online", value: "online" },
      { label: "Away", value: "away" },
      { label: "Busy", value: "busy" },
      { label: "Offline", value: "offline" }
    ]
  })
  get statusConfig() { return this.status; }
  set statusConfig(val: string) { this.status = val || "none"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Show Status Dot",
    fieldMappings: "showStatus"
  })
  get showStatusConfig() { return this.showStatus; }
  set showStatusConfig(val: boolean) { this.showStatus = Boolean(val); }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: "Background Tint Color",
    fieldMappings: "bgColor"
  })
  get bgColorConfig() { return this.bgColor; }
  set bgColorConfig(val: string) { this.bgColor = val; }

  @RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: "On Click",
    eventTrigger: "on-click"
  })
  handleClick() {
    this.dispatchEvent(
      new CustomEvent("on-click", {
        detail: { name: this.name, status: this.status },
        bubbles: true,
        composed: true
      })
    );
  }

  render() {
    const initials = deriveInitials(this.name, this.initials);
    const showDot = this.showStatus && this.status !== "none";
    const frameStyle = this.bgColor ? `background:${this.bgColor};` : "";
    return html`
      <div
        class="avatar size-${this.size} shape-${this.shape}"
        @click=${this.handleClick}
      >
        <div class="frame" style=${frameStyle}>
          ${this.src
            ? html`<img src=${this.src} alt=${this.name} />`
            : html`<span class="initials ${this.bgColor ? "filled" : ""}">${initials}</span>`}
        </div>
        ${showDot
          ? html`<span class="status-dot status-${this.status} dot-${this.size}"></span>`
          : ""}
      </div>
    `;
  }
}
