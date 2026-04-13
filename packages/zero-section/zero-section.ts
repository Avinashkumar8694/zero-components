import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { RendererComponent, RendererAttribute, AttributeType, UserInterfaceType } from "zero-annotation";
import { ZeroLayoutBase } from "../zero-panel-layout/zero-layout-base";
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { CSSResultGroup } from "lit";

/**
 * ZeroSection
 * Professional decorative container for high-end web blocks.
 */
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
        /* Consumes standardized responsive variables */
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
      }

      :host([parallax]) .section-inner {
        background-attachment: fixed;
      }
    `
  ];

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

  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    const label = config?.props?.label || "Section Block";
    return {
      kind: "section",
      slots: [
        { id: "default", label: "Section Content", dropzone: true }
      ],
      templateHtml: `
        <div style="padding:48px 24px; border:2px dashed rgba(100,116,139,0.25); border-radius:12px; background:rgba(255,255,255,0.6); min-height:160px; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:12px; margin:20px 0;">
           <span style="font-size:0.65rem; color:#94a3b8; font-weight:800; text-transform:uppercase; letter-spacing:0.05em;">${label}</span>
           <div style="width:100%; display:flex; flex-direction:column; gap:8px;">
              <zero-studio-slot name="default"></zero-studio-slot>
           </div>
        </div>
      `,
      badges: ["Section", "Content"]
    };
  }

  protected computeInternalStyles(): string {
    const pref = this.overridePrefix;
    let base = super.computeInternalStyles();
    
    // Support responsive background image overrides
    const bgUrl = `var(--${pref}-background-image-override, ${this.backgroundImage ? `url(${this.backgroundImage})` : 'none'})`;
    base += `; --zero-section-bg-url: ${bgUrl}`;
    
    // Support responsive border overrides
    const bWidth = `var(--${pref}-border-width-override, ${this.borderWidth})`;
    const bColor = `var(--${pref}-border-color-override, ${this.borderColor})`;
    base += `; --zero-section-border-w: ${bWidth}; --zero-section-border-c: ${bColor}`;
    
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
