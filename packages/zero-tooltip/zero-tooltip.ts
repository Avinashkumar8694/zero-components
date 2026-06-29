// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property, state } from "lit/decorators.js";

export const studioTemplate: ZeroStudioTemplate = {
  kind: "generic",
  templateHtml: [
    "<div style='position:relative;display:inline-block;padding:4px;'>",
    "<span style='font-size:13px;border-bottom:1px dashed #6366f1;color:#6366f1;cursor:help;'>Hover over me</span>",
    "</div>"
  ].join(""),
  labelProp: "content",
  badges: ["Utility", "Tooltip"],
};

@RendererComponent({
  name: "zero-tooltip",
  version: "1.0.0",
  title: "Tooltip Wrapper",
  elementSelector: "zero-tooltip",
  group: "Utilities",
  iconName: "tooltip-icon.png",
})
@applyGlobalStyles()
export class ZeroTooltip extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    return studioTemplate;
  }

  static styles = css`
    :host {
      display: inline-block;
      position: relative;
    }

    .tooltip-trigger {
      display: inline-block;
      cursor: help;
    }

    .tooltip-box {
      position: absolute;
      z-index: 1000;
      padding: 6px 10px;
      font-size: 0.78rem;
      font-weight: 500;
      line-height: 1.4;
      border-radius: 6px;
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.2s ease, visibility 0.2s ease, transform 0.2s ease;
    }

    .tooltip-trigger:hover + .tooltip-box,
    :host(:hover) .tooltip-box {
      opacity: 1;
      visibility: visible;
    }

    /* Positions & Transforms */
    .pos-top {
      bottom: 100%;
      left: 50%;
      transform: translate(-50%, -6px);
    }
    :host(:hover) .pos-top {
      transform: translate(-50%, -10px);
    }

    .pos-bottom {
      top: 100%;
      left: 50%;
      transform: translate(-50%, 6px);
    }
    :host(:hover) .pos-bottom {
      transform: translate(-50%, 10px);
    }

    .pos-left {
      right: 100%;
      top: 50%;
      transform: translate(-6px, -50%);
    }
    :host(:hover) .pos-left {
      transform: translate(-10px, -50%);
    }

    .pos-right {
      left: 100%;
      top: 50%;
      transform: translate(6px, -50%);
    }
    :host(:hover) .pos-right {
      transform: translate(10px, -50%);
    }

    /* Variants */
    .variant-standard {
      background: #1f2937;
      color: #ffffff;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    .variant-modern {
      background: #ffffff;
      color: #1f2937;
      border: 1px solid #e5e7eb;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04);
    }
  `;

  @property({ type: String }) content = "Tooltip message";
  @property({ type: String }) position = "top";
  @property({ type: String }) variant = "standard";

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Tooltip Message",
    fieldMappings: "content"
  })
  get contentConfig() { return this.content; }
  set contentConfig(val: string) { this.content = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Placement Position",
    fieldMappings: "position",
    optionItems: [
      { label: "Top", value: "top" },
      { label: "Bottom", value: "bottom" },
      { label: "Left", value: "left" },
      { label: "Right", value: "right" }
    ]
  })
  get positionConfig() { return this.position; }
  set positionConfig(val: string) { this.position = val || "top"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Tooltip Style",
    fieldMappings: "variant",
    optionItems: [
      { label: "Standard Dark", value: "standard" },
      { label: "Modern Light", value: "modern" }
    ]
  })
  get variantConfig() { return this.variant; }
  set variantConfig(val: string) { this.variant = val || "standard"; }

  render() {
    const boxClasses = [
      "tooltip-box",
      `pos-${this.position}`,
      `variant-${this.variant}`
    ].join(" ");

    return html`
      <div class="tooltip-trigger">
        <slot></slot>
      </div>
      <div class=${boxClasses}>
        ${this.content}
      </div>
    `;
  }
}
