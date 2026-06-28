import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { RendererComponent, RendererAttribute, AttributeType, UserInterfaceType } from "zero-annotation";
import { ZeroLayoutBase } from "../zero-panel-layout/zero-layout-base";
import type { ZeroSlotDefinition } from "../zero-panel-layout/zero-layout-base";
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { CSSResultGroup } from "lit";

/**
 * ZeroSection
 * Professional decorative container for high-end web blocks.
 */

export const studioTemplate: ZeroStudioTemplate = {
  kind: "section",
  slots: [
    { id: "default", label: "Section Content", dropzone: true, accepts: [] },
  ],
  templateHtml: [
    "<div style='padding:48px 24px;border:none;border-radius:12px;background:rgba(255,255,255,0.6);min-height:160px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;margin:20px 0;'>",
    "<span style='font-size:0.65rem;color:var(--uiv-text-muted,#94a3b8);font-weight:800;text-transform:uppercase;letter-spacing:0.05em;'>{{display:label}}</span>",
    "<div style='width:100%;display:flex;flex-direction:column;gap:8px;'>",
    "<zero-studio-slot name='default'></zero-studio-slot>",
    "</div>",
    "</div>"
  ].join(""),
  badges: ["Section", "Content"],
  emptyText: "Drag and Drop Elements here",
};

@RendererComponent({
  name: "zero-section",
  version: "1.0.0",
  title: "Section Block",
  elementSelector: "zero-section",
  group: "Layout",
  iconName: "section-icon.png",
})
@customElement("zero-section")
export class ZeroSection extends ZeroLayoutBase {
  protected get overridePrefix() { return "zero-section"; }

  static slots: ZeroSlotDefinition[] = [
    { id: "default", label: "Section Content", dropzone: true, anchor: "default", accepts: ["zero-column"] },
  ];

  static styles: CSSResultGroup = [
    ZeroLayoutBase.styles,
    css`
      .section-inner {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-image: var(--zero-section-bg-url, none);
        border: var(--zero-section-border-w, 0px) solid var(--zero-section-border-c, transparent);
      }
      
      .background-video {
        position: absolute;
        top: 0; left: 0; width: 100%; height: 100%;
        object-fit: cover;
        z-index: 0;
      }

      .content-layer {
        position: relative;
        z-index: 1;
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: var(--zero-p-direction, row);
        justify-content: var(--zero-p-justify, flex-start);
        align-items: var(--zero-p-align, stretch);
        gap: var(--zero-p-gap, 16px);
      }

      :host([parallax]) .section-inner {
        background-attachment: fixed;
      }
    `
  ];

  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) return studioTemplate;

    const labelDisplay = escapeStudio(config.studio.display.label || "Section Block");

    const justify = escapeStudio(config.props.justify || "center");
    const align = escapeStudio(config.props.align || "center");
    const gap = escapeStudio(config.props.gap || "12px");
    const padding = escapeStudio(config.props.padding || "48px 24px");
    const backgroundColor = escapeStudio(config.props.backgroundColor || "transparent");
    const borderColor = escapeStudio(config.props.borderColor || "transparent");
    const borderWidth = escapeStudio(config.props.borderWidth || "0px");
    const borderRadius = escapeStudio(config.props.borderRadius || "0px");
    const bgImage = escapeStudio(config.props.backgroundImage ? `url(${config.props.backgroundImage})` : "none");

    const responsiveProps = config.props.responsiveProps || config.studio.props?.responsiveProps || {};
    let studioQueries = "";
    const breakpoints = {
      mobile: "@media screen and (max-width: 767px)",
      tablet: "@media screen and (min-width: 768px) and (max-width: 1024px)",
      desktop: "@media screen and (min-width: 1025px)"
    };
    const propMap: Record<string, string> = {
      padding: "padding",
      gap: "gap",
      justify: "justify",
      align: "align",
      borderWidth: "border-width",
      borderColor: "border-color",
      backgroundImage: "background-image"
    };

    Object.entries(breakpoints).forEach(([bp, query]) => {
      const overrides = responsiveProps[bp];
      if (!overrides) return;
      let bpStyles = "";
      Object.entries(overrides).forEach(([key, value]) => {
        const targetVar = propMap[key];
        if (targetVar) {
          if (key === "backgroundImage" && value) {
            bpStyles += `--zero-section-${targetVar}-override: url(${value});\n`;
          } else {
            bpStyles += `--zero-section-${targetVar}-override: ${value};\n`;
          }
        }
      });
      if (bpStyles) {
        studioQueries += `${query} { .studio-section-container { ${bpStyles} } }\n`;
      }
    });

    return {
      ...studioTemplate,
      templateHtml: [
        `<div class="studio-section-container" style="
          --zero-p-justify: var(--zero-section-justify-override, ${justify});
          --zero-p-align: var(--zero-section-align-override, ${align});
          --zero-p-gap: var(--zero-section-gap-override, ${gap});
          --zero-p-padding: var(--zero-section-padding-override, ${padding});
          --zero-p-bg: ${backgroundColor};
          --zero-section-border-c: var(--zero-section-border-color-override, ${borderColor});
          --zero-section-border-w: var(--zero-section-border-width-override, ${borderWidth});
          --zero-section-bg-url: var(--zero-section-background-image-override, ${bgImage});
          --zero-p-border-radius: ${borderRadius};

          display: flex;
          flex-direction: column;
          justify-content: var(--zero-p-justify);
          align-items: var(--zero-p-align);
          gap: var(--zero-p-gap);
          padding: var(--zero-p-padding);
          background-color: var(--zero-p-bg);
          background-image: var(--zero-section-bg-url);
          background-size: cover;
          background-position: center;
          border: var(--zero-section-border-w) solid var(--zero-section-border-c);
          border-radius: var(--zero-p-border-radius);
          box-sizing: border-box;
          min-height: 160px;
          width: 100%;
          position: relative;
        ">`,
        `<style>
          .studio-section-container zero-studio-slot[name='default'] { width: 100%; display: flex; flex-direction: column; gap: 8px; }
          ${studioQueries}
        </style>`,
        "<zero-studio-slot name='default'></zero-studio-slot>",
        "</div>"
      ].join(""),
    };
  }

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.RESPONSIVE_OVERRIDE,
    displayLabel: "Background Image",
    fieldMappings: "backgroundImage",
    categoryLabel: "Appearance"
  })
  backgroundImage = "";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Background Video (URL)",
    fieldMappings: "backgroundVideo",
    categoryLabel: "Appearance"
  })
  backgroundVideo = "";

  @property({ type: Boolean, reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Enable Parallax",
    fieldMappings: "parallax",
    categoryLabel: "Appearance"
  })
  parallax = false;

  @property({ type: String, attribute: "border-width" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.RESPONSIVE_OVERRIDE,
    displayLabel: "Border Width",
    fieldMappings: "borderWidth",
    categoryLabel: "Appearance"
  })
  borderWidth = "0px";

  @property({ type: String, attribute: "border-color" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.RESPONSIVE_OVERRIDE,
    displayLabel: "Border Color",
    fieldMappings: "borderColor",
    categoryLabel: "Appearance"
  })
  borderColor = "transparent";

  protected computeInternalStyles(): string {
    const pref = this.overridePrefix;
    let base = super.computeInternalStyles();
    
    const bgUrl = `var(--${pref}-background-image-override, ${this.backgroundImage ? `url(${this.backgroundImage})` : 'none'})`;
    base += `; --zero-section-bg-url: ${bgUrl}`;
    
    const bWidth = `var(--${pref}-border-width-override, ${this.borderWidth})`;
    const bColor = `var(--${pref}-border-color-override, ${this.borderColor})`;
    base += `; --zero-section-border-w: ${bWidth}; --zero-section-border-c: ${bColor}`;
    
    return base;
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
          <div class="section-inner">
            ${this.backgroundVideo ? html`
              <video class="background-video" autoplay muted loop playsinline>
                <source src=${this.backgroundVideo} type="video/mp4">
              </video>
            ` : ""}
            <div class="content-layer">
              <slot name="default"></slot>
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

// ─── 1 Column Section ──────────────────────────────────────────────────
@RendererComponent({
  name: "zero-section-1col",
  version: "1.0.0",
  title: "1 Column Section",
  elementSelector: "zero-section-1col",
  group: "Layout",
  iconName: "section-1col.png",
})
@customElement("zero-section-1col")
export class ZeroSection1Col extends ZeroLayoutBase {
  protected get overridePrefix() { return "zero-section-1col"; }

  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    const width = escapeStudio(config?.props?.width || "100%");
    const height = escapeStudio(config?.props?.height || "auto");
    const margin = escapeStudio(config?.props?.margin || "0px");
    const padding = escapeStudio(config?.props?.padding || "0px");
    const backgroundColor = escapeStudio(config?.props?.backgroundColor || "transparent");
    const borderRadius = escapeStudio(config?.props?.borderRadius || "0px");
    const elevation = escapeStudio(config?.props?.elevation || "none");
    const gap = escapeStudio(config?.props?.gap || "16px");

    const col1Dir = escapeStudio(config?.props?.col1Direction || "column");
    const col1Al = escapeStudio(config?.props?.col1Align || "stretch");
    const col1Just = escapeStudio(config?.props?.col1Justify || "flex-start");
    const col1Pad = escapeStudio(config?.props?.col1Padding || "16px");
    const col1G = escapeStudio(config?.props?.col1Gap || "16px");
    const col1F = escapeStudio(config?.props?.col1Flex || "1");

    return {
      kind: "section",
      emptyText: "Drag and Drop Elements here",
      slots: [
        { id: "col1", label: "Column 1", dropzone: true, anchor: "columns", accepts: [] }
      ],
      templateHtml: `
        <style>
          .studio-section-outer-${config?.nodeId || 'default'} {
            width: ${width};
            height: ${height};
            margin: ${margin};
            display: block;
            box-sizing: border-box;
          }
          .studio-internal-container-${config?.nodeId || 'default'} {
            width: 100%;
            height: 100%;
            padding: ${padding};
            background: ${backgroundColor};
            border-radius: ${borderRadius};
            box-shadow: ${elevation};
            box-sizing: border-box;
          }
        </style>
        <div class="studio-section-outer-${config?.nodeId || 'default'}">
          <div class="studio-internal-container-${config?.nodeId || 'default'}">
            <div style="display:flex; flex-direction: ${col1Dir}; align-items: ${col1Al}; justify-content: ${col1Just}; padding: ${col1Pad}; gap: ${col1G}; flex: ${col1F}; width: 100%; height: 100%; box-sizing: border-box;">
              <zero-studio-slot name="col1"></zero-studio-slot>
            </div>
          </div>
        </div>
      `
    };
  }

  static slots: ZeroSlotDefinition[] = [
    { id: "col1", label: "Column 1", dropzone: true, anchor: "columns", accepts: [] },
  ];

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Configure Target",
    fieldMappings: "activeColIndex",
    categoryLabel: "Layout Settings",
    optionItems: [
      { label: "Section Container", value: "section" },
      { label: "Column 1", value: "col1" }
    ]
  })
  activeColIndex = "section";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Col 1 Direction",
    fieldMappings: "col1Direction",
    categoryLabel: "Column 1 Layout",
    optionItems: [
      { label: "Row", value: "row" },
      { label: "Column", value: "column" }
    ]
  })
  col1Direction = "column";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Col 1 Align",
    fieldMappings: "col1Align",
    categoryLabel: "Column 1 Layout",
    optionItems: [
      { label: "Stretch", value: "stretch" },
      { label: "Start", value: "flex-start" },
      { label: "Center", value: "center" },
      { label: "End", value: "flex-end" }
    ]
  })
  col1Align = "stretch";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Col 1 Justify",
    fieldMappings: "col1Justify",
    categoryLabel: "Column 1 Layout",
    optionItems: [
      { label: "Start", value: "flex-start" },
      { label: "Center", value: "center" },
      { label: "End", value: "flex-end" },
      { label: "Space Between", value: "space-between" },
      { label: "Space Around", value: "space-around" }
    ]
  })
  col1Justify = "flex-start";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Col 1 Padding",
    fieldMappings: "col1Padding",
    categoryLabel: "Column 1 Layout"
  })
  col1Padding = "16px";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Col 1 Gap",
    fieldMappings: "col1Gap",
    categoryLabel: "Column 1 Layout"
  })
  col1Gap = "16px";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Col 1 Flex Weight",
    fieldMappings: "col1Flex",
    categoryLabel: "Column 1 Layout"
  })
  col1Flex = "1";

  @property({ type: Number })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Columns (Desktop)",
    fieldMappings: "colsDesktop",
    categoryLabel: "Responsive Layout"
  })
  colsDesktop = 1;

  @property({ type: Number })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Columns (Tablet)",
    fieldMappings: "colsTablet",
    categoryLabel: "Responsive Layout"
  })
  colsTablet = 1;

  @property({ type: Number })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Columns (Mobile)",
    fieldMappings: "colsMobile",
    categoryLabel: "Responsive Layout"
  })
  colsMobile = 1;

  render() {
    return html`
      ${this.renderResponsiveStyles()}
      <div style=${this.computeBaseStyles()}>
        <div class="zero-internal-container" 
             style=${this.computeInternalStyles()}
             @mousemove=${this.handleMouseMove}
             @mouseleave=${this.handleMouseLeave}>
          ${this.renderDropIndicators()}
          <div class="column col-1" style="display:flex; flex-direction: ${this.col1Direction}; align-items: ${this.col1Align}; justify-content: ${this.col1Justify}; padding: ${this.col1Padding}; gap: ${this.col1Gap}; flex: ${this.col1Flex}; width: 100%; height: 100%; box-sizing: border-box;">
            <slot name="col1"></slot>
          </div>
        </div>
      </div>
    `;
  }
}

// ─── 2 Column Section ──────────────────────────────────────────────────
@RendererComponent({
  name: "zero-section-2col",
  version: "1.0.0",
  title: "2 Column Section",
  elementSelector: "zero-section-2col",
  group: "Layout",
  iconName: "section-2col.png",
})
@customElement("zero-section-2col")
export class ZeroSection2Col extends ZeroLayoutBase {
  protected get overridePrefix() { return "zero-section-2col"; }

  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    const width = escapeStudio(config?.props?.width || "100%");
    const height = escapeStudio(config?.props?.height || "auto");
    const margin = escapeStudio(config?.props?.margin || "0px");
    const padding = escapeStudio(config?.props?.padding || "0px");
    const backgroundColor = escapeStudio(config?.props?.backgroundColor || "transparent");
    const borderRadius = escapeStudio(config?.props?.borderRadius || "0px");
    const elevation = escapeStudio(config?.props?.elevation || "none");
    const gap = escapeStudio(config?.props?.gap || "16px");

    const colsDesktop = config?.props?.colsDesktop ?? 2;
    const colsTablet = config?.props?.colsTablet ?? 2;
    const colsMobile = config?.props?.colsMobile ?? 1;

    const col1Dir = escapeStudio(config?.props?.col1Direction || "column");
    const col1Al = escapeStudio(config?.props?.col1Align || "stretch");
    const col1Just = escapeStudio(config?.props?.col1Justify || "flex-start");
    const col1Pad = escapeStudio(config?.props?.col1Padding || "16px");
    const col1G = escapeStudio(config?.props?.col1Gap || "16px");
    const col1F = escapeStudio(config?.props?.col1Flex || "1");

    const col2Dir = escapeStudio(config?.props?.col2Direction || "column");
    const col2Al = escapeStudio(config?.props?.col2Align || "stretch");
    const col2Just = escapeStudio(config?.props?.col2Justify || "flex-start");
    const col2Pad = escapeStudio(config?.props?.col2Padding || "16px");
    const col2G = escapeStudio(config?.props?.col2Gap || "16px");
    const col2F = escapeStudio(config?.props?.col2Flex || "1");

    return {
      kind: "section",
      emptyText: "Drag and Drop Elements here",
      slots: [
        { id: "col1", label: "Column 1", dropzone: true, anchor: "columns", accepts: [] },
        { id: "col2", label: "Column 2", dropzone: true, anchor: "columns", accepts: [] }
      ],
      templateHtml: `
        <style>
          .studio-section-outer-${config?.nodeId || 'default'} {
            width: ${width};
            height: ${height};
            margin: ${margin};
            display: block;
            box-sizing: border-box;
          }
          .studio-internal-container-${config?.nodeId || 'default'} {
            width: 100%;
            height: 100%;
            padding: ${padding};
            background: ${backgroundColor};
            border-radius: ${borderRadius};
            box-shadow: ${elevation};
            box-sizing: border-box;
          }
          .studio-cols-grid-${config?.nodeId || 'default'} {
            display: grid;
            gap: ${gap};
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            grid-template-columns: repeat(${colsDesktop}, minmax(0, 1fr));
          }
          @media (max-width: 1023px) {
            .studio-cols-grid-${config?.nodeId || 'default'} {
              grid-template-columns: repeat(${colsTablet}, minmax(0, 1fr));
            }
          }
          @media (max-width: 767px) {
            .studio-cols-grid-${config?.nodeId || 'default'} {
              grid-template-columns: repeat(${colsMobile}, minmax(0, 1fr));
            }
          }
        </style>
        <div class="studio-section-outer-${config?.nodeId || 'default'}">
          <div class="studio-internal-container-${config?.nodeId || 'default'}">
            <div class="studio-cols-grid-${config?.nodeId || 'default'}">
              <div style="display:flex; flex-direction: ${col1Dir}; align-items: ${col1Al}; justify-content: ${col1Just}; padding: ${col1Pad}; gap: ${col1G}; flex: ${col1F}; width: 100%; height: 100%; box-sizing: border-box;"><zero-studio-slot name="col1"></zero-studio-slot></div>
              <div style="display:flex; flex-direction: ${col2Dir}; align-items: ${col2Al}; justify-content: ${col2Just}; padding: ${col2Pad}; gap: ${col2G}; flex: ${col2F}; width: 100%; height: 100%; box-sizing: border-box;"><zero-studio-slot name="col2"></zero-studio-slot></div>
            </div>
          </div>
        </div>
      `
    };
  }

  static slots: ZeroSlotDefinition[] = [
    { id: "col1", label: "Column 1", dropzone: true, anchor: "columns", accepts: [] },
    { id: "col2", label: "Column 2", dropzone: true, anchor: "columns", accepts: [] },
  ];

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Configure Target",
    fieldMappings: "activeColIndex",
    categoryLabel: "Layout Settings",
    optionItems: [
      { label: "Section Container", value: "section" },
      { label: "Column 1", value: "col1" },
      { label: "Column 2", value: "col2" }
    ]
  })
  activeColIndex = "section";

  // Column 1
  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Col 1 Direction",
    fieldMappings: "col1Direction",
    categoryLabel: "Column 1 Layout",
    optionItems: [
      { label: "Row", value: "row" },
      { label: "Column", value: "column" }
    ]
  })
  col1Direction = "column";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Col 1 Align",
    fieldMappings: "col1Align",
    categoryLabel: "Column 1 Layout",
    optionItems: [
      { label: "Stretch", value: "stretch" },
      { label: "Start", value: "flex-start" },
      { label: "Center", value: "center" },
      { label: "End", value: "flex-end" }
    ]
  })
  col1Align = "stretch";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Col 1 Justify",
    fieldMappings: "col1Justify",
    categoryLabel: "Column 1 Layout",
    optionItems: [
      { label: "Start", value: "flex-start" },
      { label: "Center", value: "center" },
      { label: "End", value: "flex-end" },
      { label: "Space Between", value: "space-between" },
      { label: "Space Around", value: "space-around" }
    ]
  })
  col1Justify = "flex-start";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Col 1 Padding",
    fieldMappings: "col1Padding",
    categoryLabel: "Column 1 Layout"
  })
  col1Padding = "16px";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Col 1 Gap",
    fieldMappings: "col1Gap",
    categoryLabel: "Column 1 Layout"
  })
  col1Gap = "16px";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Col 1 Flex Weight",
    fieldMappings: "col1Flex",
    categoryLabel: "Column 1 Layout"
  })
  col1Flex = "1";

  // Column 2
  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Col 2 Direction",
    fieldMappings: "col2Direction",
    categoryLabel: "Column 2 Layout",
    optionItems: [
      { label: "Row", value: "row" },
      { label: "Column", value: "column" }
    ]
  })
  col2Direction = "column";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Col 2 Align",
    fieldMappings: "col2Align",
    categoryLabel: "Column 2 Layout",
    optionItems: [
      { label: "Stretch", value: "stretch" },
      { label: "Start", value: "flex-start" },
      { label: "Center", value: "center" },
      { label: "End", value: "flex-end" }
    ]
  })
  col2Align = "stretch";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Col 2 Justify",
    fieldMappings: "col2Justify",
    categoryLabel: "Column 2 Layout",
    optionItems: [
      { label: "Start", value: "flex-start" },
      { label: "Center", value: "center" },
      { label: "End", value: "flex-end" },
      { label: "Space Between", value: "space-between" },
      { label: "Space Around", value: "space-around" }
    ]
  })
  col2Justify = "flex-start";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Col 2 Padding",
    fieldMappings: "col2Padding",
    categoryLabel: "Column 2 Layout"
  })
  col2Padding = "16px";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Col 2 Gap",
    fieldMappings: "col2Gap",
    categoryLabel: "Column 2 Layout"
  })
  col2Gap = "16px";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Col 2 Flex Weight",
    fieldMappings: "col2Flex",
    categoryLabel: "Column 2 Layout"
  })
  col2Flex = "1";

  @property({ type: Number })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Columns (Desktop)",
    fieldMappings: "colsDesktop",
    categoryLabel: "Responsive Layout"
  })
  colsDesktop = 2;

  @property({ type: Number })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Columns (Tablet)",
    fieldMappings: "colsTablet",
    categoryLabel: "Responsive Layout"
  })
  colsTablet = 2;

  @property({ type: Number })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Columns (Mobile)",
    fieldMappings: "colsMobile",
    categoryLabel: "Responsive Layout"
  })
  colsMobile = 1;

  render() {
    const gridStyleValue = [
      `--zero-section-cols-desktop: ${this.colsDesktop || 2}`,
      `--zero-section-cols-tablet: ${this.colsTablet || 2}`,
      `--zero-section-cols-mobile: ${this.colsMobile || 1}`,
    ].join(";");

    return html`
      ${this.renderResponsiveStyles()}
      <style>
        .columns-grid {
          display: grid;
          gap: 16px;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          grid-template-columns: repeat(var(--zero-section-cols-desktop, 2), minmax(0, 1fr));
        }
        @media (max-width: 1023px) {
          .columns-grid {
            grid-template-columns: repeat(var(--zero-section-cols-tablet, 2), minmax(0, 1fr));
          }
        }
        @media (max-width: 767px) {
          .columns-grid {
            grid-template-columns: repeat(var(--zero-section-cols-mobile, 1), minmax(0, 1fr));
          }
        }
      </style>
      <div style=${this.computeBaseStyles()}>
        <div class="zero-internal-container" 
             style=${this.computeInternalStyles()}
             @mousemove=${this.handleMouseMove}
             @mouseleave=${this.handleMouseLeave}>
          ${this.renderDropIndicators()}
          <div class="columns-grid" style=${gridStyleValue}>
            <div class="column col-1" style="display:flex; flex-direction: ${this.col1Direction}; align-items: ${this.col1Align}; justify-content: ${this.col1Justify}; padding: ${this.col1Padding}; gap: ${this.col1Gap}; flex: ${this.col1Flex}; width: 100%; height: 100%; box-sizing: border-box;">
              <slot name="col1"></slot>
            </div>
            <div class="column col-2" style="display:flex; flex-direction: ${this.col2Direction}; align-items: ${this.col2Align}; justify-content: ${this.col2Justify}; padding: ${this.col2Padding}; gap: ${this.col2Gap}; flex: ${this.col2Flex}; width: 100%; height: 100%; box-sizing: border-box;">
              <slot name="col2"></slot>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

// ─── 3 Column Section ──────────────────────────────────────────────────
@RendererComponent({
  name: "zero-section-3col",
  version: "1.0.0",
  title: "3 Column Section",
  elementSelector: "zero-section-3col",
  group: "Layout",
  iconName: "section-3col.png",
})
@customElement("zero-section-3col")
export class ZeroSection3Col extends ZeroLayoutBase {
  protected get overridePrefix() { return "zero-section-3col"; }

  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    const width = escapeStudio(config?.props?.width || "100%");
    const height = escapeStudio(config?.props?.height || "auto");
    const margin = escapeStudio(config?.props?.margin || "0px");
    const padding = escapeStudio(config?.props?.padding || "0px");
    const backgroundColor = escapeStudio(config?.props?.backgroundColor || "transparent");
    const borderRadius = escapeStudio(config?.props?.borderRadius || "0px");
    const elevation = escapeStudio(config?.props?.elevation || "none");
    const gap = escapeStudio(config?.props?.gap || "16px");

    const colsDesktop = config?.props?.colsDesktop ?? 3;
    const colsTablet = config?.props?.colsTablet ?? 2;
    const colsMobile = config?.props?.colsMobile ?? 1;

    const col1Dir = escapeStudio(config?.props?.col1Direction || "column");
    const col1Al = escapeStudio(config?.props?.col1Align || "stretch");
    const col1Just = escapeStudio(config?.props?.col1Justify || "flex-start");
    const col1Pad = escapeStudio(config?.props?.col1Padding || "16px");
    const col1G = escapeStudio(config?.props?.col1Gap || "16px");
    const col1F = escapeStudio(config?.props?.col1Flex || "1");

    const col2Dir = escapeStudio(config?.props?.col2Direction || "column");
    const col2Al = escapeStudio(config?.props?.col2Align || "stretch");
    const col2Just = escapeStudio(config?.props?.col2Justify || "flex-start");
    const col2Pad = escapeStudio(config?.props?.col2Padding || "16px");
    const col2G = escapeStudio(config?.props?.col2Gap || "16px");
    const col2F = escapeStudio(config?.props?.col2Flex || "1");

    const col3Dir = escapeStudio(config?.props?.col3Direction || "column");
    const col3Al = escapeStudio(config?.props?.col3Align || "stretch");
    const col3Just = escapeStudio(config?.props?.col3Justify || "flex-start");
    const col3Pad = escapeStudio(config?.props?.col3Padding || "16px");
    const col3G = escapeStudio(config?.props?.col3Gap || "16px");
    const col3F = escapeStudio(config?.props?.col3Flex || "1");

    return {
      kind: "section",
      emptyText: "Drag and Drop Elements here",
      slots: [
        { id: "col1", label: "Column 1", dropzone: true, anchor: "columns", accepts: [] },
        { id: "col2", label: "Column 2", dropzone: true, anchor: "columns", accepts: [] },
        { id: "col3", label: "Column 3", dropzone: true, anchor: "columns", accepts: [] }
      ],
      templateHtml: `
        <style>
          .studio-section-outer-${config?.nodeId || 'default'} {
            width: ${width};
            height: ${height};
            margin: ${margin};
            display: block;
            box-sizing: border-box;
          }
          .studio-internal-container-${config?.nodeId || 'default'} {
            width: 100%;
            height: 100%;
            padding: ${padding};
            background: ${backgroundColor};
            border-radius: ${borderRadius};
            box-shadow: ${elevation};
            box-sizing: border-box;
          }
          .studio-cols-grid-${config?.nodeId || 'default'} {
            display: grid;
            gap: ${gap};
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            grid-template-columns: repeat(${colsDesktop}, minmax(0, 1fr));
          }
          @media (max-width: 1023px) {
            .studio-cols-grid-${config?.nodeId || 'default'} {
              grid-template-columns: repeat(${colsTablet}, minmax(0, 1fr));
            }
          }
          @media (max-width: 767px) {
            .studio-cols-grid-${config?.nodeId || 'default'} {
              grid-template-columns: repeat(${colsMobile}, minmax(0, 1fr));
            }
          }
        </style>
        <div class="studio-section-outer-${config?.nodeId || 'default'}">
          <div class="studio-internal-container-${config?.nodeId || 'default'}">
            <div class="studio-cols-grid-${config?.nodeId || 'default'}">
              <div style="display:flex; flex-direction: ${col1Dir}; align-items: ${col1Al}; justify-content: ${col1Just}; padding: ${col1Pad}; gap: ${col1G}; flex: ${col1F}; width: 100%; height: 100%; box-sizing: border-box;"><zero-studio-slot name="col1"></zero-studio-slot></div>
              <div style="display:flex; flex-direction: ${col2Dir}; align-items: ${col2Al}; justify-content: ${col2Just}; padding: ${col2Pad}; gap: ${col2G}; flex: ${col2F}; width: 100%; height: 100%; box-sizing: border-box;"><zero-studio-slot name="col2"></zero-studio-slot></div>
              <div style="display:flex; flex-direction: ${col3Dir}; align-items: ${col3Al}; justify-content: ${col3Just}; padding: ${col3Pad}; gap: ${col3G}; flex: ${col3F}; width: 100%; height: 100%; box-sizing: border-box;"><zero-studio-slot name="col3"></zero-studio-slot></div>
            </div>
          </div>
        </div>
      `
    };
  }

  static slots: ZeroSlotDefinition[] = [
    { id: "col1", label: "Column 1", dropzone: true, anchor: "columns", accepts: [] },
    { id: "col2", label: "Column 2", dropzone: true, anchor: "columns", accepts: [] },
    { id: "col3", label: "Column 3", dropzone: true, anchor: "columns", accepts: [] },
  ];

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Configure Target",
    fieldMappings: "activeColIndex",
    categoryLabel: "Layout Settings",
    optionItems: [
      { label: "Section Container", value: "section" },
      { label: "Column 1", value: "col1" },
      { label: "Column 2", value: "col2" },
      { label: "Column 3", value: "col3" }
    ]
  })
  activeColIndex = "section";

  // Column 1
  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Col 1 Direction",
    fieldMappings: "col1Direction",
    categoryLabel: "Column 1 Layout",
    optionItems: [{ label: "Row", value: "row" }, { label: "Column", value: "column" }]
  })
  col1Direction = "column";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Col 1 Align",
    fieldMappings: "col1Align",
    categoryLabel: "Column 1 Layout",
    optionItems: [{ label: "Stretch", value: "stretch" }, { label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }]
  })
  col1Align = "stretch";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Col 1 Justify",
    fieldMappings: "col1Justify",
    categoryLabel: "Column 1 Layout",
    optionItems: [{ label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" }, { label: "Space Around", value: "space-around" }]
  })
  col1Justify = "flex-start";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Col 1 Padding",
    fieldMappings: "col1Padding",
    categoryLabel: "Column 1 Layout"
  })
  col1Padding = "16px";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Col 1 Gap",
    fieldMappings: "col1Gap",
    categoryLabel: "Column 1 Layout"
  })
  col1Gap = "16px";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Col 1 Flex Weight",
    fieldMappings: "col1Flex",
    categoryLabel: "Column 1 Layout"
  })
  col1Flex = "1";

  // Column 2
  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Col 2 Direction",
    fieldMappings: "col2Direction",
    categoryLabel: "Column 2 Layout",
    optionItems: [{ label: "Row", value: "row" }, { label: "Column", value: "column" }]
  })
  col2Direction = "column";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Col 2 Align",
    fieldMappings: "col2Align",
    categoryLabel: "Column 2 Layout",
    optionItems: [{ label: "Stretch", value: "stretch" }, { label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }]
  })
  col2Align = "stretch";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Col 2 Justify",
    fieldMappings: "col2Justify",
    categoryLabel: "Column 2 Layout",
    optionItems: [{ label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" }, { label: "Space Around", value: "space-around" }]
  })
  col2Justify = "flex-start";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Col 2 Padding",
    fieldMappings: "col2Padding",
    categoryLabel: "Column 2 Layout"
  })
  col2Padding = "16px";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Col 2 Gap",
    fieldMappings: "col2Gap",
    categoryLabel: "Column 2 Layout"
  })
  col2Gap = "16px";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Col 2 Flex Weight",
    fieldMappings: "col2Flex",
    categoryLabel: "Column 2 Layout"
  })
  col2Flex = "1";

  // Column 3
  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Col 3 Direction",
    fieldMappings: "col3Direction",
    categoryLabel: "Column 3 Layout",
    optionItems: [{ label: "Row", value: "row" }, { label: "Column", value: "column" }]
  })
  col3Direction = "column";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Col 3 Align",
    fieldMappings: "col3Align",
    categoryLabel: "Column 3 Layout",
    optionItems: [{ label: "Stretch", value: "stretch" }, { label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }]
  })
  col3Align = "stretch";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Col 3 Justify",
    fieldMappings: "col3Justify",
    categoryLabel: "Column 3 Layout",
    optionItems: [{ label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" }, { label: "Space Around", value: "space-around" }]
  })
  col3Justify = "flex-start";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Col 3 Padding",
    fieldMappings: "col3Padding",
    categoryLabel: "Column 3 Layout"
  })
  col3Padding = "16px";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Col 3 Gap",
    fieldMappings: "col3Gap",
    categoryLabel: "Column 3 Layout"
  })
  col3Gap = "16px";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Col 3 Flex Weight",
    fieldMappings: "col3Flex",
    categoryLabel: "Column 3 Layout"
  })
  col3Flex = "1";

  @property({ type: Number })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Columns (Desktop)",
    fieldMappings: "colsDesktop",
    categoryLabel: "Responsive Layout"
  })
  colsDesktop = 3;

  @property({ type: Number })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Columns (Tablet)",
    fieldMappings: "colsTablet",
    categoryLabel: "Responsive Layout"
  })
  colsTablet = 2;

  @property({ type: Number })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Columns (Mobile)",
    fieldMappings: "colsMobile",
    categoryLabel: "Responsive Layout"
  })
  colsMobile = 1;

  render() {
    const gridStyleValue = [
      `--zero-section-cols-desktop: ${this.colsDesktop || 3}`,
      `--zero-section-cols-tablet: ${this.colsTablet || 2}`,
      `--zero-section-cols-mobile: ${this.colsMobile || 1}`,
    ].join(";");

    return html`
      ${this.renderResponsiveStyles()}
      <style>
        .columns-grid {
          display: grid;
          gap: 16px;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          grid-template-columns: repeat(var(--zero-section-cols-desktop, 3), minmax(0, 1fr));
        }
        @media (max-width: 1023px) {
          .columns-grid {
            grid-template-columns: repeat(var(--zero-section-cols-tablet, 2), minmax(0, 1fr));
          }
        }
        @media (max-width: 767px) {
          .columns-grid {
            grid-template-columns: repeat(var(--zero-section-cols-mobile, 1), minmax(0, 1fr));
          }
        }
      </style>
      <div style=${this.computeBaseStyles()}>
        <div class="zero-internal-container" 
             style=${this.computeInternalStyles()}
             @mousemove=${this.handleMouseMove}
             @mouseleave=${this.handleMouseLeave}>
          ${this.renderDropIndicators()}
          <div class="columns-grid" style=${gridStyleValue}>
            <div class="column col-1" style="display:flex; flex-direction: ${this.col1Direction}; align-items: ${this.col1Align}; justify-content: ${this.col1Justify}; padding: ${this.col1Padding}; gap: ${this.col1Gap}; flex: ${this.col1Flex}; width: 100%; height: 100%; box-sizing: border-box;">
              <slot name="col1"></slot>
            </div>
            <div class="column col-2" style="display:flex; flex-direction: ${this.col2Direction}; align-items: ${this.col2Align}; justify-content: ${this.col2Justify}; padding: ${this.col2Padding}; gap: ${this.col2Gap}; flex: ${this.col2Flex}; width: 100%; height: 100%; box-sizing: border-box;">
              <slot name="col2"></slot>
            </div>
            <div class="column col-3" style="display:flex; flex-direction: ${this.col3Direction}; align-items: ${this.col3Align}; justify-content: ${this.col3Justify}; padding: ${this.col3Padding}; gap: ${this.col3Gap}; flex: ${this.col3Flex}; width: 100%; height: 100%; box-sizing: border-box;">
              <slot name="col3"></slot>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

// ─── 4 Column Section ──────────────────────────────────────────────────
@RendererComponent({
  name: "zero-section-4col",
  version: "1.0.0",
  title: "4 Column Section",
  elementSelector: "zero-section-4col",
  group: "Layout",
  iconName: "section-4col.png",
})
@customElement("zero-section-4col")
export class ZeroSection4Col extends ZeroLayoutBase {
  protected get overridePrefix() { return "zero-section-4col"; }

  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    const width = escapeStudio(config?.props?.width || "100%");
    const height = escapeStudio(config?.props?.height || "auto");
    const margin = escapeStudio(config?.props?.margin || "0px");
    const padding = escapeStudio(config?.props?.padding || "0px");
    const backgroundColor = escapeStudio(config?.props?.backgroundColor || "transparent");
    const borderRadius = escapeStudio(config?.props?.borderRadius || "0px");
    const elevation = escapeStudio(config?.props?.elevation || "none");
    const gap = escapeStudio(config?.props?.gap || "16px");

    const colsDesktop = config?.props?.colsDesktop ?? 4;
    const colsTablet = config?.props?.colsTablet ?? 2;
    const colsMobile = config?.props?.colsMobile ?? 1;

    const col1Dir = escapeStudio(config?.props?.col1Direction || "column");
    const col1Al = escapeStudio(config?.props?.col1Align || "stretch");
    const col1Just = escapeStudio(config?.props?.col1Justify || "flex-start");
    const col1Pad = escapeStudio(config?.props?.col1Padding || "16px");
    const col1G = escapeStudio(config?.props?.col1Gap || "16px");
    const col1F = escapeStudio(config?.props?.col1Flex || "1");

    const col2Dir = escapeStudio(config?.props?.col2Direction || "column");
    const col2Al = escapeStudio(config?.props?.col2Align || "stretch");
    const col2Just = escapeStudio(config?.props?.col2Justify || "flex-start");
    const col2Pad = escapeStudio(config?.props?.col2Padding || "16px");
    const col2G = escapeStudio(config?.props?.col2Gap || "16px");
    const col2F = escapeStudio(config?.props?.col2Flex || "1");

    const col3Dir = escapeStudio(config?.props?.col3Direction || "column");
    const col3Al = escapeStudio(config?.props?.col3Align || "stretch");
    const col3Just = escapeStudio(config?.props?.col3Justify || "flex-start");
    const col3Pad = escapeStudio(config?.props?.col3Padding || "16px");
    const col3G = escapeStudio(config?.props?.col3Gap || "16px");
    const col3F = escapeStudio(config?.props?.col3Flex || "1");

    const col4Dir = escapeStudio(config?.props?.col4Direction || "column");
    const col4Al = escapeStudio(config?.props?.col4Align || "stretch");
    const col4Just = escapeStudio(config?.props?.col4Justify || "flex-start");
    const col4Pad = escapeStudio(config?.props?.col4Padding || "16px");
    const col4G = escapeStudio(config?.props?.col4Gap || "16px");
    const col4F = escapeStudio(config?.props?.col4Flex || "1");

    return {
      kind: "section",
      emptyText: "Drag and Drop Elements here",
      slots: [
        { id: "col1", label: "Column 1", dropzone: true, anchor: "columns", accepts: [] },
        { id: "col2", label: "Column 2", dropzone: true, anchor: "columns", accepts: [] },
        { id: "col3", label: "Column 3", dropzone: true, anchor: "columns", accepts: [] },
        { id: "col4", label: "Column 4", dropzone: true, anchor: "columns", accepts: [] }
      ],
      templateHtml: `
        <style>
          .studio-section-outer-${config?.nodeId || 'default'} {
            width: ${width};
            height: ${height};
            margin: ${margin};
            display: block;
            box-sizing: border-box;
          }
          .studio-internal-container-${config?.nodeId || 'default'} {
            width: 100%;
            height: 100%;
            padding: ${padding};
            background: ${backgroundColor};
            border-radius: ${borderRadius};
            box-shadow: ${elevation};
            box-sizing: border-box;
          }
          .studio-cols-grid-${config?.nodeId || 'default'} {
            display: grid;
            gap: ${gap};
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            grid-template-columns: repeat(${colsDesktop}, minmax(0, 1fr));
          }
          @media (max-width: 1023px) {
            .studio-cols-grid-${config?.nodeId || 'default'} {
              grid-template-columns: repeat(${colsTablet}, minmax(0, 1fr));
            }
          }
          @media (max-width: 767px) {
            .studio-cols-grid-${config?.nodeId || 'default'} {
              grid-template-columns: repeat(${colsMobile}, minmax(0, 1fr));
            }
          }
        </style>
        <div class="studio-section-outer-${config?.nodeId || 'default'}">
          <div class="studio-internal-container-${config?.nodeId || 'default'}">
            <div class="studio-cols-grid-${config?.nodeId || 'default'}">
              <div style="display:flex; flex-direction: ${col1Dir}; align-items: ${col1Al}; justify-content: ${col1Just}; padding: ${col1Pad}; gap: ${col1G}; flex: ${col1F}; width: 100%; height: 100%; box-sizing: border-box;"><zero-studio-slot name="col1"></zero-studio-slot></div>
              <div style="display:flex; flex-direction: ${col2Dir}; align-items: ${col2Al}; justify-content: ${col2Just}; padding: ${col2Pad}; gap: ${col2G}; flex: ${col2F}; width: 100%; height: 100%; box-sizing: border-box;"><zero-studio-slot name="col2"></zero-studio-slot></div>
              <div style="display:flex; flex-direction: ${col3Dir}; align-items: ${col3Al}; justify-content: ${col3Just}; padding: ${col3Pad}; gap: ${col3G}; flex: ${col3F}; width: 100%; height: 100%; box-sizing: border-box;"><zero-studio-slot name="col3"></zero-studio-slot></div>
              <div style="display:flex; flex-direction: ${col4Dir}; align-items: ${col4Al}; justify-content: ${col4Just}; padding: ${col4Pad}; gap: ${col4G}; flex: ${col4F}; width: 100%; height: 100%; box-sizing: border-box;"><zero-studio-slot name="col4"></zero-studio-slot></div>
            </div>
          </div>
        </div>
      `
    };
  }

  static slots: ZeroSlotDefinition[] = [
    { id: "col1", label: "Column 1", dropzone: true, anchor: "columns", accepts: [] },
    { id: "col2", label: "Column 2", dropzone: true, anchor: "columns", accepts: [] },
    { id: "col3", label: "Column 3", dropzone: true, anchor: "columns", accepts: [] },
    { id: "col4", label: "Column 4", dropzone: true, anchor: "columns", accepts: [] },
  ];

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Configure Target",
    fieldMappings: "activeColIndex",
    categoryLabel: "Layout Settings",
    optionItems: [
      { label: "Section Container", value: "section" },
      { label: "Column 1", value: "col1" },
      { label: "Column 2", value: "col2" },
      { label: "Column 3", value: "col3" },
      { label: "Column 4", value: "col4" }
    ]
  })
  activeColIndex = "section";

  // Column 1
  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Col 1 Direction",
    fieldMappings: "col1Direction",
    categoryLabel: "Column 1 Layout",
    optionItems: [{ label: "Row", value: "row" }, { label: "Column", value: "column" }]
  })
  col1Direction = "column";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Col 1 Align",
    fieldMappings: "col1Align",
    categoryLabel: "Column 1 Layout",
    optionItems: [{ label: "Stretch", value: "stretch" }, { label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }]
  })
  col1Align = "stretch";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Col 1 Justify",
    fieldMappings: "col1Justify",
    categoryLabel: "Column 1 Layout",
    optionItems: [{ label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" }, { label: "Space Around", value: "space-around" }]
  })
  col1Justify = "flex-start";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Col 1 Padding",
    fieldMappings: "col1Padding",
    categoryLabel: "Column 1 Layout"
  })
  col1Padding = "16px";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Col 1 Gap",
    fieldMappings: "col1Gap",
    categoryLabel: "Column 1 Layout"
  })
  col1Gap = "16px";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Col 1 Flex Weight",
    fieldMappings: "col1Flex",
    categoryLabel: "Column 1 Layout"
  })
  col1Flex = "1";

  // Column 2
  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Col 2 Direction",
    fieldMappings: "col2Direction",
    categoryLabel: "Column 2 Layout",
    optionItems: [{ label: "Row", value: "row" }, { label: "Column", value: "column" }]
  })
  col2Direction = "column";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Col 2 Align",
    fieldMappings: "col2Align",
    categoryLabel: "Column 2 Layout",
    optionItems: [{ label: "Stretch", value: "stretch" }, { label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }]
  })
  col2Align = "stretch";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Col 2 Justify",
    fieldMappings: "col2Justify",
    categoryLabel: "Column 2 Layout",
    optionItems: [{ label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" }, { label: "Space Around", value: "space-around" }]
  })
  col2Justify = "flex-start";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Col 2 Padding",
    fieldMappings: "col2Padding",
    categoryLabel: "Column 2 Layout"
  })
  col2Padding = "16px";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Col 2 Gap",
    fieldMappings: "col2Gap",
    categoryLabel: "Column 2 Layout"
  })
  col2Gap = "16px";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Col 2 Flex Weight",
    fieldMappings: "col2Flex",
    categoryLabel: "Column 2 Layout"
  })
  col2Flex = "1";

  // Column 3
  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Col 3 Direction",
    fieldMappings: "col3Direction",
    categoryLabel: "Column 3 Layout",
    optionItems: [{ label: "Row", value: "row" }, { label: "Column", value: "column" }]
  })
  col3Direction = "column";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Col 3 Align",
    fieldMappings: "col3Align",
    categoryLabel: "Column 3 Layout",
    optionItems: [{ label: "Stretch", value: "stretch" }, { label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }]
  })
  col3Align = "stretch";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Col 3 Justify",
    fieldMappings: "col3Justify",
    categoryLabel: "Column 3 Layout",
    optionItems: [{ label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" }, { label: "Space Around", value: "space-around" }]
  })
  col3Justify = "flex-start";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Col 3 Padding",
    fieldMappings: "col3Padding",
    categoryLabel: "Column 3 Layout"
  })
  col3Padding = "16px";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Col 3 Gap",
    fieldMappings: "col3Gap",
    categoryLabel: "Column 3 Layout"
  })
  col3Gap = "16px";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Col 3 Flex Weight",
    fieldMappings: "col3Flex",
    categoryLabel: "Column 3 Layout"
  })
  col3Flex = "1";

  // Column 4
  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Col 4 Direction",
    fieldMappings: "col4Direction",
    categoryLabel: "Column 4 Layout",
    optionItems: [{ label: "Row", value: "row" }, { label: "Column", value: "column" }]
  })
  col4Direction = "column";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Col 4 Align",
    fieldMappings: "col4Align",
    categoryLabel: "Column 4 Layout",
    optionItems: [{ label: "Stretch", value: "stretch" }, { label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }]
  })
  col4Align = "stretch";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Col 4 Justify",
    fieldMappings: "col4Justify",
    categoryLabel: "Column 4 Layout",
    optionItems: [{ label: "Start", value: "flex-start" }, { label: "Center", value: "center" }, { label: "End", value: "flex-end" }, { label: "Space Between", value: "space-between" }, { label: "Space Around", value: "space-around" }]
  })
  col4Justify = "flex-start";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Col 4 Padding",
    fieldMappings: "col4Padding",
    categoryLabel: "Column 4 Layout"
  })
  col4Padding = "16px";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Col 4 Gap",
    fieldMappings: "col4Gap",
    categoryLabel: "Column 4 Layout"
  })
  col4Gap = "16px";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Col 4 Flex Weight",
    fieldMappings: "col4Flex",
    categoryLabel: "Column 4 Layout"
  })
  col4Flex = "1";

  @property({ type: Number })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Columns (Desktop)",
    fieldMappings: "colsDesktop",
    categoryLabel: "Responsive Layout"
  })
  colsDesktop = 4;

  @property({ type: Number })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Columns (Tablet)",
    fieldMappings: "colsTablet",
    categoryLabel: "Responsive Layout"
  })
  colsTablet = 2;

  @property({ type: Number })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Columns (Mobile)",
    fieldMappings: "colsMobile",
    categoryLabel: "Responsive Layout"
  })
  colsMobile = 1;

  render() {
    const gridStyleValue = [
      `--zero-section-cols-desktop: ${this.colsDesktop || 4}`,
      `--zero-section-cols-tablet: ${this.colsTablet || 2}`,
      `--zero-section-cols-mobile: ${this.colsMobile || 1}`,
    ].join(";");

    return html`
      ${this.renderResponsiveStyles()}
      <style>
        .columns-grid {
          display: grid;
          gap: 16px;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          grid-template-columns: repeat(var(--zero-section-cols-desktop, 4), minmax(0, 1fr));
        }
        @media (max-width: 1023px) {
          .columns-grid {
            grid-template-columns: repeat(var(--zero-section-cols-tablet, 2), minmax(0, 1fr));
          }
        }
        @media (max-width: 767px) {
          .columns-grid {
            grid-template-columns: repeat(var(--zero-section-cols-mobile, 1), minmax(0, 1fr));
          }
        }
      </style>
      <div style=${this.computeBaseStyles()}>
        <div class="zero-internal-container" 
             style=${this.computeInternalStyles()}
             @mousemove=${this.handleMouseMove}
             @mouseleave=${this.handleMouseLeave}>
          ${this.renderDropIndicators()}
          <div class="columns-grid" style=${gridStyleValue}>
            <div class="column col-1" style="display:flex; flex-direction: ${this.col1Direction}; align-items: ${this.col1Align}; justify-content: ${this.col1Justify}; padding: ${this.col1Padding}; gap: ${this.col1Gap}; flex: ${this.col1Flex}; width: 100%; height: 100%; box-sizing: border-box;">
              <slot name="col1"></slot>
            </div>
            <div class="column col-2" style="display:flex; flex-direction: ${this.col2Direction}; align-items: ${this.col2Align}; justify-content: ${this.col2Justify}; padding: ${this.col2Padding}; gap: ${this.col2Gap}; flex: ${this.col2Flex}; width: 100%; height: 100%; box-sizing: border-box;">
              <slot name="col2"></slot>
            </div>
            <div class="column col-3" style="display:flex; flex-direction: ${this.col3Direction}; align-items: ${this.col3Align}; justify-content: ${this.col3Justify}; padding: ${this.col3Padding}; gap: ${this.col3Gap}; flex: ${this.col3Flex}; width: 100%; height: 100%; box-sizing: border-box;">
              <slot name="col3"></slot>
            </div>
            <div class="column col-4" style="display:flex; flex-direction: ${this.col4Direction}; align-items: ${this.col4Align}; justify-content: ${this.col4Justify}; padding: ${this.col4Padding}; gap: ${this.col4Gap}; flex: ${this.col4Flex}; width: 100%; height: 100%; box-sizing: border-box;">
              <slot name="col4"></slot>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

function escapeStudio(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
