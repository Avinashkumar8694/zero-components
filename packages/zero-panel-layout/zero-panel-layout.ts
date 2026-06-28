// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import {
  RendererAttribute,
  RendererComponent,
  applyGlobalStyles,
  AttributeType,
  UserInterfaceType,
} from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property, customElement } from "lit/decorators.js";
import "./zero-panel-suite";

export const studioTemplate: ZeroStudioTemplate = {
  kind: "panel",
  generatedSlots: [
    {
      pattern: "col-{index}",
      anchor: "columns",
      countProp: "columns",
      labelPrefix: "Column",
      min: 1,
      dropzone: true,
      accepts: ["zero-section"],
      direction: "row",
    },
  ],
  templateHtml: [
    "<div style='display:grid;gap:10px;padding:12px;border-radius:18px;border:1px solid rgba(14,165,233,0.22);background:linear-gradient(180deg,rgba(240,249,255,0.96),rgba(255,255,255,0.96));'>",
    "<div style='display:flex;justify-content:space-between;align-items:center;gap:8px;'>",
    "<strong style='font-size:0.92rem;color:var(--zs-text);'>{{display:label}}</strong>",
    "<span style='font-size:0.78rem;color:var(--zs-text-muted);'>{{totalColumns}} areas · {{itemsPerRow}} cols</span>",
    "</div>",
    "<div style='display:flex;gap:8px;flex-wrap:wrap;'>",
    "<span style='padding:3px 8px;border-radius:999px;background:rgba(219,234,254,0.85);color:#1d4ed8;font-size:0.72rem;font-weight:700;'>label: {{mode:label}}</span>",
    "<span style='padding:3px 8px;border-radius:999px;background:rgba(240,253,250,0.9);color:#0f766e;font-size:0.72rem;font-weight:700;'>justify: {{display:justify}}</span>",
    "</div>",
    "<zero-studio-slot-group name='columns'></zero-studio-slot-group>",
    "</div>"
  ].join(""),
  labelProp: "label",
  columnsProp: "totalColumns",
  emptyText: "Drag and Drop Elements here",
  dynamicHints: ["$.label", "$.section_title"],
  badges: ["Layout", "Columns"],
  metrics: [
    { label: "Flow", value: "$.panel.layout" },
    { label: "Items", value: "{{section.count}}" },
  ],
};

@RendererComponent({
  name: "zero-panel-layout",
  version: "1.0.0",
  title: "Panel Layout",
  elementSelector: "zero-panel-layout",
  group: "Layout",
  iconName: "panel-layout-icon.png",
})
@applyGlobalStyles()
@customElement("zero-panel-layout")
export class ZeroPanelLayout extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) {
      return studioTemplate;
    }

    const labelDisplay = escapeStudio(config.studio.display.label || "Panel");
    const labelMode = escapeStudio(config.studio.mode.label || "static");
    const directionDisplay = escapeStudio(config.studio.display.direction || "row");
    const justifyDisplay = escapeStudio(config.studio.display.justify || "start");
    const itemsPerRow = escapeStudio(config.studio.display.itemsPerRow || "2");
    const responsiveProps = config.props.responsiveProps || config.studio.props?.responsiveProps || {};
    const gap = escapeStudio(config.props.gap || "16px");
    const padding = escapeStudio(config.props.padding || "16px");
    const justify = escapeStudio(config.props.justify || "flex-start");
    const align = escapeStudio(config.props.align || "stretch");
    const backgroundColor = escapeStudio(config.props.backgroundColor || "var(--uiv-surface-color, #ffffff)");
    const borderColor = escapeStudio(config.props.borderColor || "var(--uiv-border-color, #e2e8f0)");
    const borderRadius = escapeStudio(config.props.borderRadius || "8px");
    const enableHeader = String(config.props.enableHeader) === "true";

    let studioQueries = "";
    const breakpoints = {
      mobile: "@media screen and (max-width: 767px)",
      tablet: "@media screen and (min-width: 768px) and (max-width: 1024px)",
      desktop: "@media screen and (min-width: 1025px)"
    };
    const propMap: Record<string, string> = {
      padding: "padding",
      gap: "gap",
      direction: "direction",
      justify: "justify",
      align: "align",
      columns: "items-per-row"
    };

    Object.entries(breakpoints).forEach(([bp, query]) => {
      const overrides = responsiveProps[bp];
      if (!overrides) return;
      let bpStyles = "";
      Object.entries(overrides).forEach(([key, value]) => {
        const targetVar = propMap[key];
        if (targetVar) {
          bpStyles += `--zero-panel-${targetVar}-override: ${value};\n`;
        }
      });
      if (overrides.columns) {
        bpStyles += `zero-studio-slot-group[name='columns'] { grid-template-columns: repeat(${overrides.columns}, 1fr) !important; flex-direction: unset !important; }\n`;
      }
      if (bpStyles) {
        studioQueries += `${query} { .studio-panel-container { ${bpStyles} } }\n`;
      }
    });

    return {
      ...studioTemplate,
      generatedSlots: [
        {
          pattern: "col-{index}",
          anchor: "columns",
          countProp: "totalColumns",
          labelPrefix: directionDisplay === "column" ? "Row" : "Column",
          min: 1,
          dropzone: true,
          accepts: ["zero-section", "zero-stack", "zero-text", "zero-heading", "zero-image", "zero-button"],
          direction: "row", // Force default direction
        },
      ],
      templateHtml: [
        `<div class="studio-panel-container" style="
          --zero-items-per-row: var(--zero-panel-items-per-row-override, ${itemsPerRow});
          --zero-gap: var(--zero-panel-gap-override, ${gap});
          --zero-panel-padding: var(--zero-panel-padding-override, ${padding});
          --zero-justify: var(--zero-panel-justify-override, ${justify});
          --zero-align: var(--zero-panel-align-override, ${align});
          --zero-panel-bg: ${backgroundColor};
          --zero-panel-border-color: ${borderColor};
          --zero-panel-radius: ${borderRadius};
          
          border: 1px solid var(--zero-panel-border-color);
          border-radius: var(--zero-panel-radius);
          background: var(--zero-panel-bg);
          overflow: hidden;
          width: 100%;
        ">`,
        enableHeader ? `<div style="display:flex;align-items:center;padding:12px 16px;border-bottom:1px solid var(--zero-panel-border-color);"><span style="flex:1;font-weight:600;font-size:0.94rem;color:var(--zero-text,#1e293b);">${labelDisplay}</span></div>` : "",
        `<div style="padding: var(--zero-panel-padding); min-height: 120px;">
          <style>
            .studio-panel-container zero-studio-slot-group[name='columns'] {
              display: grid !important;
              grid-template-columns: repeat(var(--zero-items-per-row), 1fr) !important;
              gap: var(--zero-gap) !important;
              justify-content: var(--zero-justify) !important;
              align-items: var(--zero-align) !important;
            }
            ${studioQueries}
          </style>
          <zero-studio-slot-group name='columns'></zero-studio-slot-group>
        </div>`,
        "</div>"
      ].join(""),
    };
  }

  static styles = css`
    :host {
      display: block;
      width: var(--zero-width, 100%);
      padding: var(--zero-padding, 0);
      box-sizing: border-box;
      --zero-panel-header-bg: transparent;
      --zero-panel-header-padding: 12px 16px;
      --zero-panel-transition: 240ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .panel-container {
      border: 1px solid var(--zero-panel-border-color, var(--zero-border-soft, #e2e8f0));
      border-radius: var(--zero-panel-radius, 8px);
      overflow: hidden;
      background: var(--zero-panel-bg, var(--zero-surface, #ffffff));
    }

    .header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: var(--zero-panel-header-padding);
      background: var(--zero-panel-header-bg);
      cursor: pointer;
      user-select: none;
      border-bottom: 1px solid var(--zero-border-soft, #e2e8f0);
    }

    .header:hover {
      background: rgba(0, 0, 0, 0.02);
    }

    .label {
      flex: 1;
      font-weight: 600;
      font-size: 0.94rem;
      color: var(--zero-text, #1e293b);
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
    }

    .toggle-chevron {
      transition: transform var(--zero-panel-transition);
      font-size: 0.8rem;
      opacity: 0.6;
    }

    :host([expanded]) .toggle-chevron {
      transform: rotate(180deg);
    }

    .content-wrapper {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows var(--zero-panel-transition);
    }

    :host([expanded]) .content-wrapper {
      grid-template-rows: 1fr;
    }

    .content-inner {
      overflow: hidden;
    }

    .layout {
      display: flex;
      flex-wrap: wrap;
      gap: var(--zero-gap, 16px);
      width: 100%;
      box-sizing: border-box;
      padding: var(--zero-panel-padding, 16px);
      min-height: 120px;
      justify-content: var(--zero-justify, flex-start);
      align-items: var(--zero-align, stretch);
    }

    .layout[data-direction="column"] {
      flex-direction: column;
    }

    .column {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      /* Calculate width based on items per row, minus the gap share */
      flex: 0 0 calc((100% / var(--zero-items-per-row, 1)) - ((var(--zero-gap, 16px) * (var(--zero-items-per-row, 1) - 1)) / var(--zero-items-per-row, 1)));
      min-height: 120px;
      min-width: 0;
      border: 1px solid transparent;
      border-radius: calc(var(--zero-panel-radius, 8px) - 2px);
      background: linear-gradient(180deg, rgba(248, 250, 252, 0.75), rgba(255, 255, 255, 0.92));
      box-sizing: border-box;
      transition: flex var(--zero-panel-transition), border-color var(--zero-panel-transition), background var(--zero-panel-transition);
    }

    .layout[data-direction="column"] .column {
      flex: 0 0 100%;
    }

    .column > slot {
      display: block;
      min-height: 120px;
  `;

  @property({ type: Object, attribute: 'responsive-props' })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    displayLabel: "Responsive Overrides",
    fieldMappings: "responsiveProps",
  })
  responsiveProps: Record<string, any> = {};

  @property({ type: Number, reflect: true, attribute: 'total-columns' })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Total Slots (Areas)",
    fieldMappings: "totalColumns",
  })
  totalColumns = 2;

  @property({ type: Number, reflect: true, attribute: 'items-per-row' })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.RESPONSIVE_OVERRIDE,
    displayLabel: "Items per Row",
    fieldMappings: "itemsPerRow",
  })
  itemsPerRow = 2;

  @property({ type: String, reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.RESPONSIVE_OVERRIDE,
    displayLabel: "Direction",
    fieldMappings: "direction",
    initialValue: "column",
    optionItems: [
      { label: "Row", value: "row" },
      { label: "Column", value: "column" },
    ],
  })
  direction = "column";

  @property({ type: String, reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.RESPONSIVE_OVERRIDE,
    displayLabel: "Justify",
    fieldMappings: "justify",
    optionItems: [
      { label: "Start", value: "flex-start" },
      { label: "Center", value: "center" },
      { label: "End", value: "flex-end" },
      { label: "Space Between", value: "space-between" },
      { label: "Space Around", value: "space-around" },
      { label: "Space Evenly", value: "space-evenly" },
    ],
  })
  justify = "flex-start";

  @property({ type: String, reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.RESPONSIVE_OVERRIDE,
    displayLabel: "Align",
    fieldMappings: "align",
    optionItems: [
      { label: "Stretch", value: "stretch" },
      { label: "Start", value: "flex-start" },
      { label: "Center", value: "center" },
      { label: "End", value: "flex-end" },
    ],
  })
  align = "stretch";

  @property({ type: String, reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.RESPONSIVE_OVERRIDE,
    displayLabel: "Gap",
    fieldMappings: "gap",
  })
  gap = "16px";

  @property({ type: String, reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.RESPONSIVE_OVERRIDE,
    displayLabel: "Padding",
    fieldMappings: "padding",
  })
  padding = "16px";

  @property({ type: String, attribute: "background-color", reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: "Background",
    fieldMappings: "backgroundColor",
  })
  backgroundColor = "#ffffff";

  @property({ type: String, attribute: "border-color", reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: "Border Color",
    fieldMappings: "borderColor",
  })
  borderColor = "#e2e8f0";

  @property({ type: String, attribute: "border-radius", reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Radius",
    fieldMappings: "borderRadius",
  })
  borderRadius = "16px";

  @property({ type: Boolean })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Visible",
    fieldMappings: "visible",
  })
  visible = true;

  @property({ type: Boolean, attribute: "enable-header" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Enable Header",
    fieldMappings: "enableHeader",
  })
  enableHeader = false;

  @property({ type: Boolean, reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Expanded",
    fieldMappings: "expanded",
  })
  expanded = true;

  @property({ type: Boolean })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Expandable",
    fieldMappings: "expandable",
  })
  expandable = true;

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Header Label",
    fieldMappings: "label",
  })
  label = "Panel Header";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Icon (Emoji/HTML)",
    fieldMappings: "icon",
  })
  icon = "📄";

  @property({ type: String, attribute: "icon-position" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Icon Position",
    fieldMappings: "iconPosition",
    optionItems: [
      { label: "Start", value: "start" },
      { label: "End", value: "end" },
    ],
  })
  iconPosition = "start";

  @RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: "On Slot Change",
    eventTrigger: "slotchange",
  })
  handleSlotChange() {
    this.dispatchEvent(
      new CustomEvent("slotchange", {
        detail: { columns: this.totalColumns },
        bubbles: true,
        composed: true,
      }),
    );
  }

  toggleExpanded() {
    if (!this.expandable) return;
    this.expanded = !this.expanded;
    this.dispatchEvent(new CustomEvent("expansionchange", { detail: { expanded: this.expanded } }));
  }

  private renderIcon() {
    if (!this.icon) return html``;
    return html`<span class="icon">${this.icon}</span>`;
  }

  protected renderResponsiveStyles() {
    if (!this.responsiveProps || Object.keys(this.responsiveProps).length === 0) return html``;

    const pref = "zero-panel";
    const breakpoints = {
      mobile: "@media screen and (max-width: 767px)",
      tablet: "@media screen and (min-width: 768px) and (max-width: 1024px)",
      desktop: "@media screen and (min-width: 1025px)"
    };

    const propMap: Record<string, string> = {
      width: "width",
      height: "height",
      margin: "margin",
      padding: "padding",
      gap: "gap",
      direction: "direction",
      justify: "justify",
      align: "align",
      itemsPerRow: "items-per-row",
      columns: "items-per-row", // Alias support
      totalColumns: "total-columns",
      opacity: "opacity",
      zIndex: "z-index",
      backgroundColor: "background-color",
      borderRadius: "border-radius",
      elevation: "elevation",
      wrap: "wrap"
    };

    let cssText = "";

    Object.entries(breakpoints).forEach(([bp, query]) => {
      const overrides = this.responsiveProps[bp];
      if (!overrides) return;

      let bpStyles = "";
      Object.entries(overrides).forEach(([key, value]) => {
        const targetVar = propMap[key];
        if (targetVar) {
          bpStyles += `--${pref}-${targetVar}-override: ${value};\n`;
        }
      });

      if (bpStyles) {
        cssText += `${query} {\n  :host {\n    ${bpStyles}  }\n}\n`;
      }
    });

    return cssText ? html`<style>${cssText}</style>` : html``;
  }

  render() {
    if (!this.visible) return html``;
    const totalSlots = Math.max(1, Math.min(12, Number(this.totalColumns) || 1));
    const layoutStyle = [
      `--zero-items-per-row:var(--zero-panel-items-per-row-override, ${this.itemsPerRow || 1})`,
      `--zero-gap:var(--zero-panel-gap-override, ${this.gap || "16px"})`,
      `--zero-panel-padding:var(--zero-panel-padding-override, ${this.padding || "16px"})`,
      `--zero-justify:var(--zero-panel-justify-override, ${this.justify || "flex-start"})`,
      `--zero-align:var(--zero-panel-align-override, ${this.align || "stretch"})`,
      `--zero-panel-bg:${this.backgroundColor || "#ffffff"}`,
      `--zero-panel-border-color:${this.borderColor || "#e2e8f0"}`,
      `--zero-panel-radius:${this.borderRadius || "16px"}`,
    ].join(";");

    return html`
      ${this.renderResponsiveStyles()}
      <div class="panel-container">
        ${this.enableHeader ? html`
          <div class="header" @click=${this.toggleExpanded}>
            ${this.iconPosition === "start" ? this.renderIcon() : ""}
            <span class="label">${this.label}</span>
            ${this.iconPosition === "end" ? this.renderIcon() : ""}
            ${this.expandable ? html`<span class="toggle-chevron">▼</span>` : ""}
          </div>
        ` : ""}
        <div class="content-wrapper">
          <div class="content-inner">
            <div class="layout" data-direction=${this.direction || "row"} style=${layoutStyle}>
              <style>
                .layout {
                  flex-direction: var(--zero-panel-direction-override, ${this.direction || "row"});
                }
              </style>
              ${Array.from({ length: totalSlots }).map(
                (_, i) => html`
                  <div class="column">
                    <slot name="col-${i + 1}" @slotchange=${i === 0 ? this.handleSlotChange : null}></slot>
                  </div>
                `
              )}
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

function escapeStudio(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
