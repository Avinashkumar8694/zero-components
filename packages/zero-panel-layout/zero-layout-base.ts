import { LitElement, css, html, PropertyValueMap, CSSResultGroup } from "lit";
import { property } from "lit/decorators.js";
import {
  RendererAttribute,
  AttributeType,
  UserInterfaceType,
} from "zero-annotation";

/**
 * ZeroLayoutBase
 * Professional core engine for all Zero Layout components.
 * Standardizes Styling, Logic, and Interaction for Runtime-Studio Parity.
 */
export class ZeroLayoutBase extends LitElement {
  static styles: CSSResultGroup = css`
    :host {
      display: block;
      box-sizing: border-box;
      width: var(--zero-width, 100%);
      height: var(--zero-height, auto);
      margin: var(--zero-margin, 0);
      opacity: var(--zero-opacity, 1);
      z-index: var(--zero-z-index, auto);
      pointer-events: var(--zero-pointer-events, auto);
      transition: opacity 0.3s ease, transform 0.3s ease;
    }

    .zero-internal-container {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      gap: var(--zero-p-gap, 0px);
      row-gap: var(--zero-p-row-gap, var(--zero-p-gap, 0px));
      padding: var(--zero-p-padding, 0px);
      background: var(--zero-p-bg, transparent);
      border: var(--zero-p-border-width, 0px) solid var(--zero-p-border-color, transparent);
      border-radius: var(--zero-p-border-radius, 0px);
      box-shadow: var(--zero-p-shadow, none);
      justify-content: var(--zero-p-justify, flex-start);
      align-items: var(--zero-p-align, stretch);
      overflow: var(--zero-p-overflow, visible);
      flex-direction: var(--zero-p-direction, row);
    }

    .zero-internal-container[data-direction="column"] {
      flex-direction: column;
    }

    /* Header & Expansion */
    .zero-layout-header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      cursor: pointer;
      user-select: none;
      border-bottom: 1px solid rgba(0,0,0,0.05);
      background: rgba(0,0,0,0.02);
    }

    .zero-layout-header .label { flex: 1; font-weight: 600; font-size: 0.95rem; }
    .zero-layout-header .icon { font-size: 1.1rem; }
    .zero-layout-header .chevron { transition: transform 0.3s ease; font-size: 0.8rem; opacity: 0.5; }
    
    :host([expanded]) .zero-layout-header .chevron { transform: rotate(180deg); }

    .zero-layout-body {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      overflow: hidden;
    }

    :host([expanded]) .zero-layout-body {
      grid-template-rows: 1fr;
    }

    .zero-layout-content {
      min-height: 0;
    }

    /* Spatial Drop Indicators (30/70 Rule) */
    .drop-indicator {
      position: absolute;
      pointer-events: none;
      background: var(--zs-primary, #0ea5e9);
      opacity: 0;
      transition: opacity 0.2s ease;
      z-index: 1000;
      display: block;
    }

    .drop-indicator.active { opacity: 0.3; }

    .drop-indicator.left { left: 0; top: 0; width: 30%; height: 100%; border-right: 3px solid var(--zs-primary); }
    .drop-indicator.right { right: 0; top: 0; width: 30%; height: 100%; border-left: 3px solid var(--zs-primary); }
    .drop-indicator.top { top: 0; left: 0; width: 100%; height: 30%; border-bottom: 3px solid var(--zs-primary); }
    .drop-indicator.bottom { bottom: 0; left: 0; width: 100%; height: 30%; border-top: 3px solid var(--zs-primary); }
  `;

  @property({ type: String }) activeEdge: 'left' | 'right' | 'top' | 'bottom' | 'none' = 'none';

  // --- Logic & Visibility ---

  @property({ type: Boolean, reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Visible",
    fieldMappings: "visible",
    categoryLabel: "Logic"
  })
  visible = true;

  @property({ type: Number, reflect: true, attribute: "z-index" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Z-Index",
    fieldMappings: "zIndex",
    categoryLabel: "Advanced"
  })
  zIndex = 1;

  @property({ type: Number, reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.RANGE_SLIDER,
    displayLabel: "Opacity",
    fieldMappings: "opacity",
    categoryLabel: "Advanced"
  })
  opacity = 1;

  @property({ type: String, attribute: "custom-class" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Custom CSS Class",
    fieldMappings: "customClass",
    categoryLabel: "Advanced"
  })
  customClass = "";

  // --- Expansion & Header ---

  @property({ type: Boolean, reflect: true, attribute: "enable-header" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Enable Header",
    fieldMappings: "enableHeader",
    categoryLabel: "Interaction"
  })
  enableHeader = false;

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Header Label",
    fieldMappings: "label",
    categoryLabel: "Interaction"
  })
  label = "Panel Header";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Icon (Emoji)",
    fieldMappings: "icon",
    categoryLabel: "Interaction"
  })
  icon = "📄";

  @property({ type: Boolean, reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Expandable",
    fieldMappings: "expandable",
    categoryLabel: "Interaction"
  })
  expandable = true;

  @property({ type: Boolean, reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Expanded",
    fieldMappings: "expanded",
    categoryLabel: "Interaction"
  })
  expanded = true;

  // --- Dimensions ---

  @property({ type: String, reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.RESPONSIVE_OVERRIDE,
    displayLabel: "Width",
    fieldMappings: "width",
    categoryLabel: "Dimensions"
  })
  width = "100%";

  @property({ type: String, reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.RESPONSIVE_OVERRIDE,
    displayLabel: "Height",
    fieldMappings: "height",
    categoryLabel: "Dimensions"
  })
  height = "auto";

  @property({ type: String, reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.RESPONSIVE_OVERRIDE,
    displayLabel: "Margin",
    fieldMappings: "margin",
    categoryLabel: "Spacing"
  })
  margin = "0px";

  @property({ type: String, reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.RESPONSIVE_OVERRIDE,
    displayLabel: "Padding",
    fieldMappings: "padding",
    categoryLabel: "Spacing"
  })
  padding = "0px";

  // --- Triggers (Events) ---

  @RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: "On Click",
    eventTrigger: "click",
    categoryLabel: "Triggers"
  })
  get onClick() { return "click"; }

  @RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: "On Expand",
    eventTrigger: "expand",
    categoryLabel: "Triggers"
  })
  get onExpand() { return "expand"; }

  @RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: "On Collapse",
    eventTrigger: "collapse",
    categoryLabel: "Triggers"
  })
  get onCollapse() { return "collapse"; }

  // --- Layout ---

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
  direction = "row";

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

  @property({ type: Number, reflect: true, attribute: "items-per-row" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.RESPONSIVE_OVERRIDE,
    displayLabel: "Items Per Row",
    fieldMappings: "itemsPerRow",
    categoryLabel: "Layout"
  })
  itemsPerRow = 1;

  // --- Appearance ---

  @property({ type: String, attribute: "background-color", reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: "Background Color",
    fieldMappings: "backgroundColor",
    categoryLabel: "Appearance"
  })
  backgroundColor = "transparent";

  @property({ type: String, attribute: "border-radius", reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Corner Radius",
    fieldMappings: "borderRadius",
    categoryLabel: "Appearance"
  })
  borderRadius = "0px";

  @property({ type: String, reflect: true, attribute: "elevation" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Elevation (Shadow)",
    fieldMappings: "elevation",
    categoryLabel: "Appearance",
    optionItems: [
        { label: "None", value: "none" },
        { label: "Low", value: "0 2px 4px rgba(0,0,0,0.1)" },
        { label: "Medium", value: "0 4px 12px rgba(0,0,0,0.12)" },
        { label: "High", value: "0 12px 24px rgba(0,0,0,0.16)" }
    ]
  })
  elevation = "none";

  // --- Actions (Flow Methods) ---

  @RendererAttribute({
    attributeType: AttributeType.ACTION,
    displayLabel: "Show Component",
    categoryLabel: "Actions"
  })
  public show() { 
    this.visible = true; 
    this.requestUpdate();
  }

  @RendererAttribute({
    attributeType: AttributeType.ACTION,
    displayLabel: "Hide Component",
    categoryLabel: "Actions"
  })
  public hide() { 
    this.visible = false; 
    this.requestUpdate();
  }
  
  @RendererAttribute({
    attributeType: AttributeType.ACTION,
    displayLabel: "Expand Panel",
    categoryLabel: "Actions"
  })
  public expand() { 
    if (this.expandable) {
      this.expanded = true;
      this.dispatchEvent(new CustomEvent("expand"));
    }
  }

  @RendererAttribute({
    attributeType: AttributeType.ACTION,
    displayLabel: "Collapse Panel",
    categoryLabel: "Actions"
  })
  public collapse() { 
    if (this.expandable) {
      this.expanded = false;
      this.dispatchEvent(new CustomEvent("collapse"));
    }
  }

  @RendererAttribute({
    attributeType: AttributeType.ACTION,
    displayLabel: "Toggle Expand/Collapse",
    categoryLabel: "Actions"
  })
  public toggleExpanded() { 
    if (this.expanded) this.collapse(); else this.expand();
  }

  // --- Visual Logic ---

  protected get overridePrefix(): string { return "zero-panel"; }

  protected computeBaseStyles(): string {
    const pref = this.overridePrefix;
    return [
      `--zero-width: var(--${pref}-width-override, ${this.width})`,
      `--zero-height: var(--${pref}-height-override, ${this.height})`,
      `--zero-margin: var(--${pref}-margin-override, ${this.margin})`,
      `--zero-opacity: var(--${pref}-opacity-override, ${this.opacity})`,
      `--zero-z-index: var(--${pref}-z-index-override, ${this.zIndex})`,
      `--zero-pointer-events: ${this.visible ? 'auto' : 'none'}`,
      `display: ${this.visible ? 'block' : 'none'}`,
    ].join(";");
  }

  protected computeInternalStyles(): string {
    const pref = this.overridePrefix;
    return [
      `--zero-p-gap: var(--${pref}-gap-override, ${this.gap})`,
      `--zero-p-padding: var(--${pref}-padding-override, ${this.padding})`,
      `--zero-p-bg: var(--${pref}-background-color-override, ${this.backgroundColor})`,
      `--zero-p-justify: var(--${pref}-justify-override, ${this.justify})`,
      `--zero-p-align: var(--${pref}-align-override, ${this.align})`,
      `--zero-p-border-radius: var(--${pref}-border-radius-override, ${this.borderRadius})`,
      `--zero-p-shadow: var(--${pref}-elevation-override, ${this.elevation})`,
      `--zero-p-direction: var(--${pref}-direction-override, ${this.direction})`,
    ].join(";");
  }

  protected computeColumnBasis(): string {
    const pref = this.overridePrefix;
    const gapValue = `var(--${pref}-gap-override, ${this.gap || "0px"})`;
    const count = `var(--${pref}-items-per-row-override, ${Math.max(1, Number(this.itemsPerRow) || 1)})`;
    return `calc((100% / ${count}) - ((${gapValue} * (${count} - 1)) / ${count}))`;
  }

  // --- Interaction (Studio) ---

  protected handleMouseMove(e: MouseEvent) {
    if (!window.parent) return; 
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const xPercent = (e.clientX - rect.left) / rect.width;
    const yPercent = (e.clientY - rect.top) / rect.height;

    if (this.direction === 'row') {
      if (xPercent < 0.3) this.activeEdge = 'left';
      else if (xPercent > 0.7) this.activeEdge = 'right';
      else this.activeEdge = 'none';
    } else {
      if (yPercent < 0.3) this.activeEdge = 'top';
      else if (yPercent > 0.7) this.activeEdge = 'bottom';
      else this.activeEdge = 'none';
    }
  }

  protected handleMouseLeave() { this.activeEdge = 'none'; }

  protected renderDropIndicators() {
    return html`
      <div class="drop-indicator left ${this.activeEdge === 'left' ? 'active' : ''}"></div>
      <div class="drop-indicator right ${this.activeEdge === 'right' ? 'active' : ''}"></div>
      <div class="drop-indicator top ${this.activeEdge === 'top' ? 'active' : ''}"></div>
      <div class="drop-indicator bottom ${this.activeEdge === 'bottom' ? 'active' : ''}"></div>
    `;
  }

  protected renderHeader() {
    if (!this.enableHeader) return html``;
    return html`
      <div class="zero-layout-header" @click=${this.toggleExpanded}>
        <span class="icon">${this.icon}</span>
        <span class="label">${this.label}</span>
        ${this.expandable ? html`<span class="chevron">▼</span>` : ""}
      </div>
    `;
  }
}
