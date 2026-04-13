import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { RendererComponent } from "zero-annotation";
import { ZeroLayoutBase } from "./zero-layout-base";
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";

/**
 * Shared Template Helper
 * Generates the full high-fidelity mockup for the Studio canvas.
 */
function getPanelTemplate(count: number, config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
  const slots = Array.from({ length: count }, (_, i) => ({
    id: `col-${i + 1}`,
    label: `Column ${i + 1}`,
    anchor: `col-${i + 1}`,
    dropzone: true,
    accepts: []
  }));

  const label = config?.props?.label || `${count} Column Panel`;
  const icon = config?.props?.icon || "📄";
  
  // Style Parity Mockup
  const headerStyle = `display:flex; align-items:center; gap:8px; padding:8px 12px; background:rgba(0,0,0,0.03); border-bottom:1px solid rgba(0,0,0,0.05); border-radius:12px 12px 0 0;`;
  const gridStyle = `display:flex; gap:12px; padding:16px; min-height:100px;`;
  const slotStyle = `flex:1; min-height:80px; border:2px dashed rgba(148,163,184,0.3); border-radius:8px; display:flex; align-items:center; justify-content:center; background:rgba(241,245,249,0.3); position:relative;`;
  
  const templateHtml = `
    <div style="border:1px solid rgba(14,165,233,0.25); border-radius:12px; background:#fff; overflow:hidden;">
      <div style="${headerStyle}">
        <span style="font-size:1rem;">${icon}</span>
        <strong style="font-size:0.85rem; color:#1e293b;">${label}</strong>
        <span style="margin-left:auto; font-size:0.7rem; color:#94a3b8;">▼</span>
      </div>
      <div style="${gridStyle}">
        ${Array.from({ length: count }).map((_, i) => `
          <div style="${slotStyle}">
            <span style="font-size:0.6rem; color:#94a3b8; font-weight:700;">COL ${i + 1}</span>
            <zero-studio-slot name="col-${i + 1}"></zero-studio-slot>
          </div>
        `).join("")}
      </div>
    </div>
  `;

  return {
    kind: "panel",
    slots,
    templateHtml,
    badges: ["Layout", `${count} Col`],
  };
}

// --- Component Suite ---

@RendererComponent({
  name: "zero-one-column",
  version: "1.0.0",
  title: "1 Column Panel",
  elementSelector: "zero-one-column",
  group: "Layout",
  iconName: "layout-1-col.png",
})
@customElement("zero-one-column")
export class ZeroOneColumn extends ZeroLayoutBase {
  static getStudioTemplate(config?: ZeroStudioTemplateContext) { return getPanelTemplate(1, config); }
  render() {
    return html`
      <div style=${this.computeBaseStyles()}>
        <div class="zero-internal-container" style=${this.computeInternalStyles()}>
          ${this.renderHeader()}
          <div class="zero-layout-body">
            <div class="zero-layout-content">
              <div class="column" style="flex: 1 1 100%; min-height: 48px;">
                <slot name="col-1"></slot>
              </div>
            </div>
            ${this.renderDropIndicators()}
          </div>
        </div>
      </div>
    `;
  }
}

@RendererComponent({
  name: "zero-two-column",
  version: "1.0.0",
  title: "2 Column Panel",
  elementSelector: "zero-two-column",
  group: "Layout",
  iconName: "layout-2-col.png",
})
@customElement("zero-two-column")
export class ZeroTwoColumn extends ZeroLayoutBase {
  static getStudioTemplate(config?: ZeroStudioTemplateContext) { return getPanelTemplate(2, config); }
  render() {
    const basis = this.computeColumnBasis();
    return html`
      <div style=${this.computeBaseStyles()}>
        <div class="zero-internal-container" 
             style=${this.computeInternalStyles()} 
             data-direction=${this.direction}
             @mousemove=${this.handleMouseMove}
             @mouseleave=${this.handleMouseLeave}>
          ${this.renderHeader()}
          <div class="zero-layout-body">
            <div class="zero-layout-content" style="display:flex; flex-wrap:wrap; gap:${this.gap}; width:100%;">
              <div class="column" style="flex: 0 0 ${basis};">
                <slot name="col-1"></slot>
              </div>
              <div class="column" style="flex: 0 0 ${basis};">
                <slot name="col-2"></slot>
              </div>
              ${this.renderDropIndicators()}
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

@RendererComponent({
  name: "zero-three-column",
  version: "1.0.0",
  title: "3 Column Panel",
  elementSelector: "zero-three-column",
  group: "Layout",
  iconName: "layout-3-col.png",
})
@customElement("zero-three-column")
export class ZeroThreeColumn extends ZeroLayoutBase {
  static getStudioTemplate(config?: ZeroStudioTemplateContext) { return getPanelTemplate(3, config); }
  render() {
    const basis = this.computeColumnBasis();
    return html`
      <div style=${this.computeBaseStyles()}>
        <div class="zero-internal-container" 
             style=${this.computeInternalStyles()} 
             data-direction=${this.direction}
             @mousemove=${this.handleMouseMove}
             @mouseleave=${this.handleMouseLeave}>
          ${this.renderHeader()}
          <div class="zero-layout-body">
            <div class="zero-layout-content" style="display:flex; flex-wrap:wrap; gap:${this.gap}; width:100%;">
              ${[1, 2, 3].map(i => html`
                <div class="column" style="flex: 0 0 ${basis};">
                  <slot name="col-${i}"></slot>
                </div>
              `)}
              ${this.renderDropIndicators()}
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

@RendererComponent({
  name: "zero-four-column",
  version: "1.0.0",
  title: "4 Column Panel",
  elementSelector: "zero-four-column",
  group: "Layout",
  iconName: "layout-4-col.png",
})
@customElement("zero-four-column")
export class ZeroFourColumn extends ZeroLayoutBase {
  static getStudioTemplate(config?: ZeroStudioTemplateContext) { return getPanelTemplate(4, config); }
  render() {
    const basis = this.computeColumnBasis();
    return html`
      <div style=${this.computeBaseStyles()}>
        <div class="zero-internal-container" 
             style=${this.computeInternalStyles()} 
             data-direction=${this.direction}
             @mousemove=${this.handleMouseMove}
             @mouseleave=${this.handleMouseLeave}>
          ${this.renderHeader()}
          <div class="zero-layout-body">
            <div class="zero-layout-content" style="display:flex; flex-wrap:wrap; gap:${this.gap}; width:100%;">
              ${[1, 2, 3, 4].map(i => html`
                <div class="column" style="flex: 0 0 ${basis};">
                  <slot name="col-${i}"></slot>
                </div>
              `)}
              ${this.renderDropIndicators()}
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

@RendererComponent({
  name: "zero-six-column",
  version: "1.0.0",
  title: "6 Column Panel",
  elementSelector: "zero-six-column",
  group: "Layout",
  iconName: "layout-6-col.png",
})
@customElement("zero-six-column")
export class ZeroSixColumn extends ZeroLayoutBase {
  static getStudioTemplate(config?: ZeroStudioTemplateContext) { return getPanelTemplate(6, config); }
  render() {
    const basis = this.computeColumnBasis();
    return html`
      <div style=${this.computeBaseStyles()}>
        <div class="zero-internal-container" 
             style=${this.computeInternalStyles()} 
             data-direction=${this.direction}
             @mousemove=${this.handleMouseMove}
             @mouseleave=${this.handleMouseLeave}>
          ${this.renderHeader()}
          <div class="zero-layout-body">
            <div class="zero-layout-content" style="display:flex; flex-wrap:wrap; gap:${this.gap}; width:100%;">
              ${[1, 2, 3, 4, 5, 6].map(i => html`
                <div class="column" style="flex: 0 0 ${basis};">
                  <slot name="col-${i}"></slot>
                </div>
              `)}
              ${this.renderDropIndicators()}
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
