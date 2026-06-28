import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { RendererComponent, RendererAttribute, AttributeType, UserInterfaceType } from "zero-annotation";
import { ZeroLayoutBase } from "../zero-panel-layout/zero-layout-base";
import type { ZeroSlotDefinition } from "../zero-panel-layout/zero-layout-base";
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { CSSResultGroup } from "lit";

/**
 * ZeroColumn
 * High-performance column block that acts as a child of ZeroSection or ZeroPanel.
 */

export const studioTemplate: ZeroStudioTemplate = {
  kind: "column",
  slots: [
    { id: "default", label: "Column Content", dropzone: true, accepts: [] },
  ],
  templateHtml: [
    "<div style='flex:var(--zero-column-flex, 1);min-height:80px;display:flex;flex-direction:column;gap:8px;padding:16px;box-sizing:border-box;'>",
    "<zero-studio-slot name='default'></zero-studio-slot>",
    "</div>"
  ].join(""),
  badges: ["Column"],
  emptyText: "Drag elements here",
};

@RendererComponent({
  name: "zero-column",
  version: "1.0.0",
  title: "Column Block",
  elementSelector: "zero-column",
  group: "Layout",
  iconName: "column-icon.png",
})
@customElement("zero-column")
export class ZeroColumn extends ZeroLayoutBase {
  protected get overridePrefix() { return "zero-column"; }

  static slots: ZeroSlotDefinition[] = [
    { id: "default", label: "Column Content", dropzone: true, anchor: "default", accepts: [] },
  ];

  static styles: CSSResultGroup = [
    ZeroLayoutBase.styles,
    css`
      :host {
        /* Align using flex properties inherited from flex parent */
        flex: var(--zero-column-flex-override, var(--zero-column-flex, 1 1 0%));
        min-width: 0;
        width: var(--zero-width, auto);
      }
      
      .column-inner {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
      }
    `
  ];

  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) return studioTemplate;

    const flex = escapeStudio(config.props.flex || "1");
    const direction = escapeStudio(config.props.direction || "column");
    const justify = escapeStudio(config.props.justify || "flex-start");
    const align = escapeStudio(config.props.align || "stretch");
    const gap = escapeStudio(config.props.gap || "16px");
    const padding = escapeStudio(config.props.padding || "16px");
    const backgroundColor = escapeStudio(config.props.backgroundColor || "transparent");
    const borderRadius = escapeStudio(config.props.borderRadius || "0px");
    const elevation = escapeStudio(config.props.elevation || "none");

    return {
      ...studioTemplate,
      templateHtml: [
        `<div class="studio-column-container" style="
          --zero-column-flex: ${flex};
          --zero-column-direction: ${direction};
          --zero-column-justify: ${justify};
          --zero-column-align: ${align};
          --zero-column-gap: ${gap};
          --zero-column-padding: ${padding};
          --zero-column-bg: ${backgroundColor};
          --zero-column-border-radius: ${borderRadius};
          --zero-column-shadow: ${elevation};

          flex: var(--zero-column-flex);
          display: flex;
          flex-direction: var(--zero-column-direction);
          justify-content: var(--zero-column-justify);
          align-items: var(--zero-column-align);
          gap: var(--zero-column-gap);
          padding: var(--zero-column-padding);
          background-color: var(--zero-column-bg);
          border-radius: var(--zero-column-border-radius);
          box-shadow: var(--zero-column-shadow);
          box-sizing: border-box;
          min-height: 80px;
          min-width: 0;
          position: relative;
        ">`,
        "<zero-studio-slot name='default'></zero-studio-slot>",
        "</div>"
      ].join(""),
    };
  }

  @property({ type: String, reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Flex Weight",
    fieldMappings: "flex",
    categoryLabel: "Layout"
  })
  flex = "1";

  @property({ type: String, reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.RESPONSIVE_OVERRIDE,
    displayLabel: "Width",
    fieldMappings: "width",
    categoryLabel: "Layout"
  })
  width = "auto";

  // Override default properties from ZeroLayoutBase with specific defaults/metadata
  @property({ type: String, reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.RESPONSIVE_OVERRIDE,
    displayLabel: "Direction",
    fieldMappings: "direction",
    categoryLabel: "Layout",
    optionItems: [
        { label: "Row", value: "row" },
        { label: "Column", value: "column" }
    ]
  })
  direction = "column";

  @property({ type: String, reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.RESPONSIVE_OVERRIDE,
    displayLabel: "Padding",
    fieldMappings: "padding",
    categoryLabel: "Spacing"
  })
  padding = "16px";

  @property({ type: String, reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.RESPONSIVE_OVERRIDE,
    displayLabel: "Gap",
    fieldMappings: "gap",
    categoryLabel: "Layout"
  })
  gap = "16px";

  protected computeBaseStyles(): string {
    let base = super.computeBaseStyles();
    const flexVal = `var(--zero-column-flex-override, ${this.flex})`;
    base += `; flex: ${flexVal}; min-width: 0`;
    return base;
  }

  protected computeInternalStyles(): string {
    let base = super.computeInternalStyles();
    // Ensure direction overrides are mapped
    const pref = this.overridePrefix;
    base += `; --zero-p-direction: var(--${pref}-direction-override, ${this.direction})`;
    return base;
  }

  protected renderResponsiveStyles() {
    if (!this.responsiveProps || Object.keys(this.responsiveProps).length === 0) return html``;

    const pref = this.overridePrefix;
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
      opacity: "opacity",
      zIndex: "z-index",
      backgroundColor: "background-color",
      borderRadius: "border-radius",
      elevation: "elevation",
      wrap: "wrap",
      flex: "flex-override"
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
          if (key === "flex") {
            bpStyles += `flex: ${value};\n`;
          }
        }
      });

      if (bpStyles) {
        cssText += `${query} {\n  :host {\n    ${bpStyles}  }\n}\n`;
      }
    });

    return cssText ? html`<style>${cssText}</style>` : html``;
  }

  render() {
    return html`
      ${this.renderResponsiveStyles()}
      <div style=${this.computeBaseStyles()}>
        <div class="zero-internal-container" 
             style=${this.computeInternalStyles()}
             @mousemove=${this.handleMouseMove}
             @mouseleave=${this.handleMouseLeave}>
          ${this.renderDropIndicators()}
          <slot name="default"></slot>
          <slot></slot>
        </div>
      </div>
    `;
  }
}

function escapeStudio(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
