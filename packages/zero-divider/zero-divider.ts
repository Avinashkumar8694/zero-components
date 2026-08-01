// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

export const studioTemplate: ZeroStudioTemplate = {
  kind: "generic",
  templateHtml: [
    "<div style='width:280px;display:flex;align-items:center;gap:12px;margin:16px 0;font-family:inherit;box-sizing:border-box;'>",
    "<div style='flex:1;border-top:1px solid #e5e7eb;'></div>",
    "<span style='font-size:12px;font-weight:600;color:#6b7280;white-space:nowrap;'>OR</span>",
    "<div style='flex:1;border-top:1px solid #e5e7eb;'></div>",
    "</div>"
  ].join(""),
  labelProp: "label",
  badges: ["Layout", "Divider"],
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
  name: "zero-divider",
  version: "1.0.0",
  title: "Divider",
  elementSelector: "zero-divider",
  group: "Layout",
  iconName: "divider-icon.png",
})
@applyGlobalStyles()
export class ZeroDivider extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) return studioTemplate;

    const orientation = (config.props?.orientation ?? config.studio?.props?.orientation) || "horizontal";
    const label = escapeStudio(config.props?.label ?? config.studio?.props?.label ?? "");
    const lineStyle = (config.props?.lineStyle ?? config.studio?.props?.lineStyle) || "solid";
    const thickness = Math.max(1, Number(config.props?.thickness ?? config.studio?.props?.thickness ?? 1));
    const spacing = Math.max(0, Number(config.props?.spacing ?? config.studio?.props?.spacing ?? 16));
    const color = (config.props?.color ?? config.studio?.props?.color) || "var(--uiv-border-color, #e5e7eb)";

    const muted = "var(--uiv-text-muted, #6b7280)";

    if (orientation === "vertical") {
      return {
        ...studioTemplate,
        templateHtml: [
          `<div style='display:inline-flex;align-items:stretch;height:48px;margin:0 ${spacing}px;font-family:inherit;box-sizing:border-box;'>`,
          `<div style='border-left:${thickness}px ${lineStyle} ${color};'></div>`,
          "</div>"
        ].join(""),
      };
    }

    const line = `<div style='flex:1;border-top:${thickness}px ${lineStyle} ${color};'></div>`;
    const labelHtml = label
      ? `<span style='font-size:12px;font-weight:600;color:${muted};white-space:nowrap;'>${label}</span>`
      : "";

    return {
      ...studioTemplate,
      templateHtml: [
        `<div style='width:280px;display:flex;align-items:center;gap:12px;margin:${spacing}px 0;font-family:inherit;box-sizing:border-box;'>`,
        line,
        labelHtml,
        label ? line : "",
        "</div>"
      ].join(""),
    };
  }

  static styles = css`
    :host {
      display: block;
      --dv-color: var(--uiv-border-color, #e5e7eb);
      --dv-muted: var(--uiv-text-muted, #6b7280);
    }

    :host([orientation="vertical"]) {
      display: inline-flex;
      align-self: stretch;
    }

    .divider {
      display: flex;
      align-items: center;
      gap: 12px;
      font-family: inherit;
      box-sizing: border-box;
    }
    .divider.horizontal {
      width: 100%;
      flex-direction: row;
    }
    .divider.vertical {
      display: inline-flex;
      align-items: stretch;
      height: 100%;
      min-height: 24px;
    }

    .line {
      flex: 1;
      border-top-style: var(--dv-style, solid);
      border-top-width: var(--dv-thickness, 1px);
      border-top-color: var(--dv-color);
    }
    .divider.vertical .line {
      flex: 1;
      border-top: none;
      border-left-style: var(--dv-style, solid);
      border-left-width: var(--dv-thickness, 1px);
      border-left-color: var(--dv-color);
      align-self: stretch;
    }

    .label {
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--dv-muted);
      white-space: nowrap;
      line-height: 1;
    }

    .clickable {
      cursor: pointer;
    }
  `;

  @property({ type: String, reflect: true }) orientation = "horizontal";
  @property({ type: String }) label = "";
  @property({ type: String, attribute: "line-style" }) lineStyle = "solid";
  @property({ type: Number }) thickness = 1;
  @property({ type: Number }) spacing = 16;
  @property({ type: String }) color = "";

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Orientation",
    fieldMappings: "orientation",
    optionItems: [
      { label: "Horizontal", value: "horizontal" },
      { label: "Vertical", value: "vertical" }
    ]
  })
  get orientationConfig() { return this.orientation; }
  set orientationConfig(val: string) { this.orientation = val || "horizontal"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Label (optional, centered)",
    fieldMappings: "label"
  })
  get labelConfig() { return this.label; }
  set labelConfig(val: string) { this.label = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Line Style",
    fieldMappings: "lineStyle",
    optionItems: [
      { label: "Solid", value: "solid" },
      { label: "Dashed", value: "dashed" },
      { label: "Dotted", value: "dotted" }
    ]
  })
  get lineStyleConfig() { return this.lineStyle; }
  set lineStyleConfig(val: string) { this.lineStyle = val || "solid"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Thickness (px)",
    fieldMappings: "thickness"
  })
  get thicknessConfig() { return this.thickness; }
  set thicknessConfig(val: number) { this.thickness = Math.max(1, Number(val) || 1); }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Spacing / Margin (px)",
    fieldMappings: "spacing"
  })
  get spacingConfig() { return this.spacing; }
  set spacingConfig(val: number) { this.spacing = Math.max(0, Number(val) || 0); }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: "Color",
    fieldMappings: "color"
  })
  get colorConfig() { return this.color; }
  set colorConfig(val: string) { this.color = val; }

  @RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: "On Click",
    eventTrigger: "on-click"
  })
  handleClick() {
    this.dispatchEvent(
      new CustomEvent("on-click", {
        detail: { orientation: this.orientation, label: this.label },
        bubbles: true,
        composed: true
      })
    );
  }

  render() {
    const color = this.color || "var(--uiv-border-color, #e5e7eb)";
    const vertical = this.orientation === "vertical";
    const margin = vertical ? `0 ${this.spacing}px` : `${this.spacing}px 0`;

    return html`
      <div
        class="divider ${vertical ? "vertical" : "horizontal"} clickable"
        role="separator"
        aria-orientation=${vertical ? "vertical" : "horizontal"}
        style="margin:${margin};--dv-color:${color};--dv-style:${this.lineStyle};--dv-thickness:${this.thickness}px;"
        @click=${this.handleClick}
      >
        <div class="line"></div>
        ${!vertical && this.label
          ? html`<span class="label">${this.label}</span><div class="line"></div>`
          : ""}
      </div>
    `;
  }
}
