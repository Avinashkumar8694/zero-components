import { html } from "lit";
import { property, customElement } from "lit/decorators.js";
import { RendererComponent, RendererAttribute, AttributeType, UserInterfaceType } from "zero-annotation";
import { ZeroLayoutBase } from "./zero-layout-base";
import type { ZeroSlotDefinition } from "./zero-layout-base";
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";

// ─── Expansion Panel Component ─────────────────────────────────────────

@RendererComponent({
  name: "zero-expansion-panel",
  version: "1.0.0",
  title: "Expansion Panel",
  elementSelector: "zero-expansion-panel",
  group: "Layout",
  iconName: "expansion-panel-icon.png",
})
@customElement("zero-expansion-panel")
export class ZeroExpansionPanel extends ZeroLayoutBase {
  protected get overridePrefix() { return "zero-expansion-panel"; }

  static slots: ZeroSlotDefinition[] = [
    { id: "default", label: "Panel Content", dropzone: true, anchor: "content", accepts: ["zero-section"] },
  ];

  @property({ type: String, attribute: "header-bg" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: "Header Background",
    fieldMappings: "headerBg",
    categoryLabel: "Appearance"
  })
  headerBg = "#f8fafc";

  @property({ type: String, attribute: "header-color" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: "Header Text Color",
    fieldMappings: "headerColor",
    categoryLabel: "Appearance"
  })
  headerColor = "#1e293b";
  constructor() {
    super();
    this.label = "Expansion Panel";
    this.icon = "⚡";
    this.expanded = true;
    this.expandable = true;
    this.backgroundColor = "#ffffff";
    this.borderRadius = "12px";
    this.padding = "16px";
  }

  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    const label = config?.props?.label || "Expansion Panel";
    const icon = config?.props?.icon || "⚡";
    const headerBg = config?.props?.headerBg || "#f8fafc";
    const headerColor = config?.props?.headerColor || "#1e293b";
    const borderColor = config?.props?.borderColor || "#e2e8f0";
    const borderRadius = config?.props?.borderRadius || "12px";
    const padding = config?.props?.padding || "16px";

    const templateHtml = `
      <div style="border: 1px solid ${borderColor}; border-radius: ${borderRadius}; background: #fff; overflow: hidden; width: 100%;">
        <div style="background: ${headerBg}; color: ${headerColor}; padding: 12px 16px; display: flex; align-items: center; justify-content: space-between; font-weight: 700; border-bottom: 1px solid ${borderColor};">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span>${icon}</span>
            <span>${label}</span>
          </div>
          <span>▼</span>
        </div>
        <div style="padding: ${padding}; min-height: 80px;">
          <zero-studio-slot name="default"></zero-studio-slot>
        </div>
      </div>
    `;

    return {
      kind: "panel",
      slots: [
        { id: "default", label: "Panel Content", dropzone: true, anchor: "content", accepts: ["zero-section"] }
      ],
      templateHtml,
      badges: ["Expansion"],
      emptyText: "Drag and Drop Elements here"
    };
  }

  render() {
    return html`
      ${this.renderResponsiveStyles()}
      <div style=${this.computeBaseStyles()}>
        <div class="zero-internal-container" style="border: 1px solid rgba(0,0,0,0.08); overflow: hidden; ${this.computeInternalStyles()}">
          <div class="zero-layout-header" style="background: ${this.headerBg}; color: ${this.headerColor};" @click=${this.toggleExpanded}>
            ${this.icon ? html`<span class="icon">${this.icon}</span>` : ""}
            <span class="label">${this.label}</span>
            ${this.expandable ? html`<span class="chevron">▼</span>` : ""}
          </div>
          <div class="zero-layout-body">
            <div class="zero-layout-content" style="padding: ${this.padding};">
              <slot name="default"></slot>
              <slot></slot>
            </div>
          </div>
          ${this.renderDropIndicators()}
        </div>
      </div>
    `;
  }
}

// ─── Tab Panel Component ────────────────────────────────────────────────

@RendererComponent({
  name: "zero-tab-panel",
  version: "1.0.0",
  title: "Tab Panel",
  elementSelector: "zero-tab-panel",
  group: "Layout",
  iconName: "tab-panel-icon.png",
})
@customElement("zero-tab-panel")
export class ZeroTabPanel extends ZeroLayoutBase {
  protected get overridePrefix() { return "zero-tab-panel"; }

  // Exclude static slots to fall back to dynamic slots in getStudioTemplate
  static slots: ZeroSlotDefinition[] = [];

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Tabs (Comma Separated)",
    fieldMappings: "tabs",
    categoryLabel: "Tabs Config"
  })
  tabs = "Tab 1, Tab 2";

  @property({ type: Number, reflect: true, attribute: "active-index" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Active Tab Index",
    fieldMappings: "activeIndex",
    categoryLabel: "Tabs Config"
  })
  activeIndex = 0;

  @property({ type: String, attribute: "header-bg" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: "Header Background",
    fieldMappings: "headerBg",
    categoryLabel: "Appearance"
  })
  headerBg = "#f8fafc";

  @property({ type: String, attribute: "active-tab-color" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: "Active Tab Underline Color",
    fieldMappings: "activeTabColor",
    categoryLabel: "Appearance"
  })
  activeTabColor = "#0e5aed";

  @property({ type: String, attribute: "border-color" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: "Border Color",
    fieldMappings: "borderColor",
    categoryLabel: "Appearance"
  })
  borderColor = "#e2e8f0";

  constructor() {
    super();
    this.backgroundColor = "#ffffff";
    this.borderRadius = "12px";
    this.padding = "16px";
  }

  getTabList() {
    return this.tabs.split(",").map(t => t.trim()).filter(Boolean);
  }

  selectTab(index: number) {
    this.activeIndex = index;
    this.dispatchEvent(new CustomEvent("tabchange", { detail: { activeIndex: index } }));
  }

  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    const tabsVal = config?.props?.tabs || "Tab 1, Tab 2";
    const activeIndex = Number(config?.props?.activeIndex ?? 0);
    const tabList = tabsVal.split(",").map((t: string) => t.trim()).filter(Boolean);
    
    const slots = tabList.map((tab: string, i: number) => ({
      id: `tab-${i + 1}`,
      label: tab,
      dropzone: true,
      accepts: ["zero-section"]
    }));

    const headerBg = config?.props?.headerBg || "#f8fafc";
    const borderColor = config?.props?.borderColor || "#e2e8f0";
    const activeTabColor = config?.props?.activeTabColor || "#0e5aed";
    const padding = config?.props?.padding || "16px";
    
    const templateHtml = `
      <div style="border:1px solid ${borderColor}; border-radius:12px; background:#fff; overflow:hidden; width:100%;">
        <div style="background:${headerBg}; display:flex; border-bottom:1px solid ${borderColor}; width:100%; overflow-x:auto;">
          ${tabList.map((tab: string, i: number) => {
            const isActive = activeIndex === i;
            return `
              <div data-tab-index="${i}" style="padding:12px 20px; font-weight:600; font-size:0.85rem; border-bottom:3px solid ${isActive ? activeTabColor : 'transparent'}; color:${isActive ? activeTabColor : '#64748b'}; cursor:pointer;">
                ${tab}
              </div>
            `;
          }).join("")}
        </div>
        <div style="padding:${padding}; min-height:100px;">
          ${tabList.map((tab: string, i: number) => {
            const isActive = activeIndex === i;
            return `
              <div style="display:${isActive ? 'block' : 'none'};">
                <zero-studio-slot name="tab-${i + 1}"></zero-studio-slot>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;

    return {
      kind: "panel",
      slots,
      templateHtml,
      badges: ["Tab Panel"],
      emptyText: "Drag and Drop Elements here"
    };
  }

  render() {
    const tabList = this.getTabList();
    return html`
      ${this.renderResponsiveStyles()}
      <div style=${this.computeBaseStyles()}>
        <div class="zero-internal-container" style="border: 1px solid rgba(0,0,0,0.08); overflow: hidden; ${this.computeInternalStyles()}">
          <div class="tabs-header-bar" style="background: ${this.headerBg}; display: flex; border-bottom: 1px solid ${this.borderColor || 'rgba(0,0,0,0.08)'}; width: 100%; box-sizing: border-box; overflow-x: auto;">
            ${tabList.map((tab, index) => {
              const isActive = this.activeIndex === index;
              return html`
                <button 
                  class="tab-btn" 
                  style="padding: 12px 20px; font-weight: 600; font-size: 0.85rem; border: none; background: transparent; cursor: pointer; transition: all 0.2s ease; border-bottom: 3px solid ${isActive ? this.activeTabColor : 'transparent'}; color: ${isActive ? this.activeTabColor : '#64748b'};"
                  @click=${() => this.selectTab(index)}>
                  ${tab}
                </button>
              `;
            })}
          </div>
          <div class="tabs-content-area" style="padding: ${this.padding}; width: 100%; box-sizing: border-box; min-height: 100px;">
            ${tabList.map((_, index) => {
              const isActive = this.activeIndex === index;
              return html`
                <div class="tab-pane" style="display: ${isActive ? 'block' : 'none'}; width: 100%;">
                  <slot name="tab-${index + 1}"></slot>
                </div>
              `;
            })}
          </div>
          ${this.renderDropIndicators()}
        </div>
      </div>
    `;
  }
}
