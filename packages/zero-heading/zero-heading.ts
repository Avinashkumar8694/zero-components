// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

export const studioTemplate: ZeroStudioTemplate = {
  kind: "generic",
  templateHtml: [
    "<div style='padding:8px 12px;border-radius:10px;border:1px solid rgba(148,163,184,0.15);background:rgba(255,255,255,0.95);'>",
    "<div style='font-size:1.4rem;font-weight:700;color:var(--uiv-text-color, #1e293b);'>{{display:text}}</div>",
    "<div style='font-size:0.7rem;color:var(--uiv-text-muted, #94a3b8);margin-top:4px;'>H{{display:level}} · align: {{display:align}}</div>",
    "</div>"
  ].join(""),
  textProp: "text",
  badges: ["Content", "Typography"],
};

@RendererComponent({
  name: "zero-heading",
  version: "1.0.0",
  title: "Heading",
  elementSelector: "zero-heading",
  group: "Content",
  iconName: "heading-icon.png",
})
@applyGlobalStyles()
export class ZeroHeading extends LitElement {
    static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
        if (!config) return studioTemplate;

        const textDisplay = escapeStudio(config.studio.display.text || "Heading");
        const level = Math.min(6, Math.max(1, Number((config.props?.level ?? config.studio.props?.level)) || 2));
        const align = (config.props?.align ?? config.studio.props?.align) || "left";
        const color = 'var(--uiv-text-color, #132238)';

        // Match actual render() output
        return {
            ...studioTemplate,
            templateHtml: `<h${level} style='margin:0;color:${color};text-align:${align};line-height:1.1;font-weight:700;'>${textDisplay}</h${level}>`
        };
    }

  static styles = css`
    :host {
      display: block;
    }

    .heading {
      margin: 0;
      color: var(--zero-heading-color, #132238);
      text-align: var(--zero-heading-align, left);
      line-height: 1.1;
      font-weight: 700;
    }
  `;

  @property({ type: String }) text = "Heading";
  @property({ type: Number }) level = 2;
  @property({ type: String }) align = "left";

  renderHeading() {
    const className = "heading";
    switch (Math.min(6, Math.max(1, Number(this.level) || 2))) {
      case 1:
        return html`<h1 class=${className}>${this.text}</h1>`;
      case 2:
        return html`<h2 class=${className}>${this.text}</h2>`;
      case 3:
        return html`<h3 class=${className}>${this.text}</h3>`;
      case 4:
        return html`<h4 class=${className}>${this.text}</h4>`;
      case 5:
        return html`<h5 class=${className}>${this.text}</h5>`;
      default:
        return html`<h6 class=${className}>${this.text}</h6>`;
    }
  }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Text",
    fieldMappings: "text"
  })
  get textConfig() {
    return this.text;
  }
  set textConfig(value: string) {
    this.text = value;
  }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Level",
    fieldMappings: "level",
    optionItems: [
      { label: "H1", value: 1 },
      { label: "H2", value: 2 },
      { label: "H3", value: 3 },
      { label: "H4", value: 4 },
      { label: "H5", value: 5 },
      { label: "H6", value: 6 }
    ]
  })
  get levelConfig() {
    return this.level;
  }
  set levelConfig(value: number) {
    this.level = Number(value) || 2;
  }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Align",
    fieldMappings: "align",
    optionItems: [
      { label: "Left", value: "left" },
      { label: "Center", value: "center" },
      { label: "Right", value: "right" }
    ]
  })
  get alignConfig() {
    return this.align;
  }
  set alignConfig(value: string) {
    this.align = value || "left";
  }

  render() {
    return html`
      <div style=${`--zero-heading-align:${this.align || "left"}`}>
        ${this.renderHeading()}
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
