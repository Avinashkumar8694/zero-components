// @environment server
import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { ZeroLayoutBase } from '../zero-panel-layout/zero-layout-base';
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from 'zero-annotation';

export const studioTemplate: ZeroStudioTemplate = {
  kind: "section",
  slots: [
    { id: "default", label: "Renderer Content", dropzone: true, accepts: [] },
  ],
  templateHtml: [
    "<div style='padding:24px;border:2px dashed rgba(16, 185, 129, 0.25);border-radius:12px;background:rgba(240, 253, 244, 0.45);min-height:160px;display:flex;flex-direction:column;gap:12px;width:100%;box-sizing:border-box;'>",
    "<span style='font-size:0.65rem;color:#10b981;font-weight:800;text-transform:uppercase;letter-spacing:0.05em;'>{{display:label}}</span>",
    "<zero-studio-slot name='default'></zero-studio-slot>",
    "</div>"
  ].join(""),
  badges: ["Renderer", "Layout"],
  emptyText: "Drop components here to render",
};

@RendererComponent({
    name: 'nrenderer',
    version: '1.0.0',
    title: 'Nrenderer',
    elementSelector: 'zero-nrenderer',
    group: 'Layout',
    iconName: 'profile-icon.png',
})
@applyGlobalStyles()
@customElement('zero-nrenderer')
export class Nrenderer extends ZeroLayoutBase {
  protected get overridePrefix() { return "zero-nrenderer"; }

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
  gap = "16px";

  static styles = [
    ZeroLayoutBase.styles,
    css`
      .nrenderer-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: var(--zero-p-direction, column);
      }
    `
  ];

  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) return studioTemplate;

    const labelDisplay = escapeStudio(config.studio.display.label || "Nrenderer");
    const direction = config.studio.props?.direction || "column";
    const justify = escapeStudio(config.props.justify || "flex-start");
    const align = escapeStudio(config.props.align || "stretch");
    const gap = escapeStudio(config.props.gap || "16px");
    const padding = escapeStudio(config.props.padding || "16px");
    const backgroundColor = escapeStudio(config.props.backgroundColor || "transparent");
    const borderColor = escapeStudio(config.props.borderColor || "transparent");
    const borderWidth = escapeStudio(config.props.borderWidth || "0px");
    const borderRadius = escapeStudio(config.props.borderRadius || "0px");

    return {
      ...studioTemplate,
      templateHtml: [
        `<div class="studio-nrenderer-container" style="
          --zero-nrenderer-justify: ${justify};
          --zero-nrenderer-align: ${align};
          --zero-nrenderer-gap: ${gap};
          --zero-nrenderer-padding: ${padding};
          --zero-nrenderer-bg: ${backgroundColor};
          --zero-nrenderer-border-color: ${borderColor};
          --zero-nrenderer-border-width: ${borderWidth};
          --zero-nrenderer-radius: ${borderRadius};

          display: flex;
          flex-direction: ${direction};
          justify-content: var(--zero-nrenderer-justify);
          align-items: var(--zero-nrenderer-align);
          gap: var(--zero-nrenderer-gap);
          padding: var(--zero-nrenderer-padding);
          background-color: var(--zero-nrenderer-bg);
          border: var(--zero-nrenderer-border-width) solid var(--zero-nrenderer-border-color);
          border-radius: var(--zero-nrenderer-radius);
          box-sizing: border-box;
          min-height: 160px;
          width: 100%;
        ">`,
        "<zero-studio-slot name='default'></zero-studio-slot>",
        "</div>"
      ].join(""),
    };
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
          ${this.renderHeader()}
          <div class="zero-layout-body">
            <div class="zero-layout-content">
              <div class="nrenderer-content">
                <slot name="default"></slot>
                <slot></slot>
              </div>
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
