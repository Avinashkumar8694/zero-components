import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { RendererComponent, RendererAttribute, AttributeType, UserInterfaceType } from "zero-annotation";
import { ZeroLayoutBase } from "../zero-panel-layout/zero-layout-base";
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { CSSResultGroup } from "lit";

/**
 * ZeroStack
 * Standardized flex container with high-precision drop detection and full global parity.
 */
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
    return {
      kind: "section",
      slots: [
        { id: "default", label: "Stack Content", dropzone: true }
      ],
      templateHtml: `
        <div style="padding:16px; border:2px dashed rgba(56,189,248,0.2); border-radius:8px; background:rgba(240,249,255,0.4); min-height:60px;">
           <span style="font-size:0.6rem; color:#0ea5e9; font-weight:700; text-transform:uppercase;">Stack Container</span>
           <zero-studio-slot name="default"></zero-studio-slot>
        </div>
      `,
      badges: ["Stack", "Layout"]
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
      <div style=${this.computeBaseStyles()}>
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
