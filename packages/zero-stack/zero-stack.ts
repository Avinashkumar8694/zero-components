import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { RendererComponent, RendererAttribute, AttributeType, UserInterfaceType } from "zero-annotation";
import { ZeroLayoutBase } from "../zero-panel-layout/zero-layout-base";
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { CSSResultGroup } from "lit";

function escapeStudio(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

/**
 * ZeroStack
 * Standardized flex container with high-precision drop detection and full global parity.
 */

export const studioTemplate: ZeroStudioTemplate = {
  kind: "section",
  slots: [
    { id: "default", label: "Stack Content", dropzone: true, accepts: [] },
  ],
  templateHtml: [
    "<div style='padding:16px;border:2px dashed rgba(56,189,248,0.2);border-radius:8px;background:rgba(240,249,255,0.4);min-height:60px;'>",
    "<div style='display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;'>",
    "<span style='font-size:0.6rem;color:#0ea5e9;font-weight:700;text-transform:uppercase;'>{{display:label}}</span>",
    "<span style='font-size:0.55rem;color:var(--uiv-text-muted,#94a3b8);'>dir: {{display:direction}} · wrap: {{display:wrap}}</span>",
    "</div>",
    "<zero-studio-slot name='default'></zero-studio-slot>",
    "</div>"
  ].join(""),
  badges: ["Stack", "Layout"],
  emptyText: "Drop content here to stack",
};

@RendererComponent({
  name: "zero-stack",
  version: "1.0.0",
  title: "Stack",
  elementSelector: "zero-stack",
  group: "Layout",
  iconName: "stack_icon.png",
})
@customElement("zero-stack")
export class ZeroStack extends ZeroLayoutBase {
  protected get overridePrefix() { return "zero-stack"; }

  static styles: CSSResultGroup = [
    ZeroLayoutBase.styles,
    css`
      .stack-content {
        display: flex;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        flex-direction: var(--zero-p-direction, column);
        flex-wrap: var(--zero-stack-w, nowrap);
      }
    `
  ];

  @property({ type: String, reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.RESPONSIVE_OVERRIDE,
    displayLabel: "Direction",
    fieldMappings: "direction",
    categoryLabel: "Layout",
    initialValue: "column",
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
    displayLabel: "Justify",
    fieldMappings: "justify",
    categoryLabel: "Layout",
    optionItems: [
        { label: "Start", value: "flex-start" },
        { label: "Center", value: "center" },
        { label: "End", value: "flex-end" },
        { label: "Space Between", value: "space-between" }
    ]
  })
  justify = "flex-start";

  @property({ type: String, reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.RESPONSIVE_OVERRIDE,
    displayLabel: "Align",
    fieldMappings: "align",
    categoryLabel: "Layout",
    optionItems: [
        { label: "Start", value: "flex-start" },
        { label: "Center", value: "center" },
        { label: "End", value: "flex-end" },
        { label: "Stretch", value: "stretch" }
    ]
  })
  align = "stretch";

  @property({ type: String, reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.RESPONSIVE_OVERRIDE,
    displayLabel: "Gap",
    fieldMappings: "gap",
    categoryLabel: "Layout"
  })
  gap = "0px";

  @property({ type: String, reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.RESPONSIVE_OVERRIDE,
    displayLabel: "Wrap",
    fieldMappings: "wrap",
    categoryLabel: "Layout",
    optionItems: [
      { label: "No Wrap", value: "nowrap" },
      { label: "Wrap", value: "wrap" },
    ],
  })
  wrap = "nowrap";

  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) return studioTemplate;

    const labelDisplay = escapeStudio(config.studio.display.label || "Stack");
    const direction = config.studio.props?.direction || "column";
    const wrap = escapeStudio(config.props.wrap || "nowrap");
    const justify = escapeStudio(config.props.justify || "flex-start");
    const align = escapeStudio(config.props.align || "stretch");
    const gap = escapeStudio(config.props.gap || "0px");
    const padding = escapeStudio(config.props.padding || "0px");
    const backgroundColor = escapeStudio(config.props.backgroundColor || "transparent");
    const borderColor = escapeStudio(config.props.borderColor || "transparent");
    const borderRadius = escapeStudio(config.props.borderRadius || "0px");
    
    // Evaluate responsive properties
    const responsiveProps = config.props.responsiveProps || config.studio.props?.responsiveProps || {};
    let studioQueries = "";
    const breakpoints = {
      mobile: "@media screen and (max-width: 767px)",
      tablet: "@media screen and (min-width: 768px) and (max-width: 1024px)",
      desktop: "@media screen and (min-width: 1025px)"
    };
    const propMap: Record<string, string> = {
      gap: "gap",
      padding: "padding",
      direction: "direction",
      justify: "justify",
      align: "align",
      wrap: "wrap"
    };

    Object.entries(breakpoints).forEach(([bp, query]) => {
      const overrides = responsiveProps[bp];
      if (!overrides) return;
      let bpStyles = "";
      Object.entries(overrides).forEach(([key, value]) => {
        const targetVar = propMap[key];
        if (targetVar) {
          bpStyles += `--zero-stack-${targetVar}-override: ${value};\n`;
        }
      });
      if (bpStyles) {
        studioQueries += `${query} { .studio-stack-container { ${bpStyles} } }\n`;
      }
    });

    return {
      ...studioTemplate,
      templateHtml: [
        `<div class="studio-stack-container" style="
          --zero-p-direction: var(--zero-stack-direction-override, ${direction});
          --zero-p-wrap: var(--zero-stack-wrap-override, ${wrap});
          --zero-p-justify: var(--zero-stack-justify-override, ${justify});
          --zero-p-align: var(--zero-stack-align-override, ${align});
          --zero-p-gap: var(--zero-stack-gap-override, ${gap});
          --zero-p-padding: var(--zero-stack-padding-override, ${padding});
          --zero-p-bg: ${backgroundColor};
          --zero-p-border-color: ${borderColor};
          --zero-p-border-radius: ${borderRadius};

          display: flex;
          flex-direction: var(--zero-p-direction);
          flex-wrap: var(--zero-p-wrap);
          justify-content: var(--zero-p-justify);
          align-items: var(--zero-p-align);
          gap: var(--zero-p-gap);
          padding: var(--zero-p-padding);
          background: var(--zero-p-bg);
          border: 1px solid var(--zero-p-border-color);
          border-radius: var(--zero-p-border-radius);
          box-sizing: border-box;
          min-height: 80px;
          width: 100%;
        ">`,
        `<style>
          .studio-stack-container zero-studio-slot[name='default'] { flex: 1; display:flex; min-height: 100%; }
          ${studioQueries}
        </style>`,
        "<zero-studio-slot name='default'></zero-studio-slot>",
        "</div>"
      ].join(""),
    };
  }

  protected computeInternalStyles(): string {
    const pref = this.overridePrefix;
    let base = super.computeInternalStyles();
    
    // Support responsive wrap overrides
    const wrapValue = `var(--${pref}-wrap-override, ${this.wrap})`;
    base += `; --zero-stack-w: ${wrapValue}`;
    
    return base;
  }

  render() {
    return html`
      ${this.renderResponsiveStyles()}
      <div>
        <div class="zero-internal-container" 
             style=${this.computeInternalStyles()}
             @mousemove=${this.handleMouseMove}
             @mouseleave=${this.handleMouseLeave}>
          ${this.renderDropIndicators()}
          <div class="stack-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
}
