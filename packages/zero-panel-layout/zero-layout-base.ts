import { LitElement, css, html, PropertyValueMap, CSSResultGroup } from "lit";
import { property } from "lit/decorators.js";
import {
  RendererAttribute,
  AttributeType,
  UserInterfaceType,
} from "zero-annotation";

/**
 * Slot definition for Studio drag-and-drop discovery.
 * Declare `static slots: ZeroSlotDefinition[]` on any container component so
 * the Studio can read dropzone metadata without parsing template HTML.
 */
export type ZeroSlotDefinition = {
  /** Matches the `name` attribute on the `<slot>` element in render() */
  id: string;
  /** Human-readable label shown in the Studio drop zone */
  label: string;
  /** Optional list of component name patterns that can be dropped here */
  accepts?: string[];
  /** If false, this slot is excluded from Studio drop zones */
  dropzone?: boolean;
  /** Groups multiple slots under a shared flex/grid anchor */
  anchor?: string;
};

/**
 * ZeroLayoutBase
 * Professional core engine for all Zero Layout components.
 * Standardizes Styling, Logic, and Interaction for Runtime-Studio Parity.
 */
export class ZeroLayoutBase extends LitElement {
  /**
   * Studio slot metadata. Override in subclasses to declare drop zones.
   * The Studio reads this static field directly — no template HTML parsing needed.
   */
  static slots: ZeroSlotDefinition[] = [];
  @property({ type: Object, attribute: 'responsive-props' })
  responsiveProps: Record<string, any> = {};

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

    .zero-layout-content,
    .tab-pane {
      min-height: 0;
      display: flex;
      flex-direction: var(--zero-p-direction, row);
      flex-wrap: wrap;
      gap: var(--zero-p-gap, 0px);
      row-gap: var(--zero-p-row-gap, var(--zero-p-gap, 0px));
      justify-content: var(--zero-p-justify, flex-start);
      align-items: var(--zero-p-align, stretch);
      width: 100%;
      box-sizing: border-box;
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


  // --- Layout ---

  @property({ type: String, reflect: true })
  direction = "row";

  @property({ type: String, reflect: true })
  justify = "flex-start";

  @property({ type: String, reflect: true })
  align = "stretch";

  @property({ type: String, reflect: true })
  gap = "16px";

  @property({ type: Number, reflect: true, attribute: "items-per-row" })
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
  

  // --- Responsive Engine ---

  /**
   * Generates a <style> tag with media queries based on responsiveProps.
   * Ensures parity between Studio and Renderer for mobile/tablet/desktop overrides.
   */
  protected renderResponsiveStyles() {
    if (!this.responsiveProps || Object.keys(this.responsiveProps).length === 0) return html``;

    const pref = this.overridePrefix;
    const breakpoints = {
      mobile: "@media screen and (max-width: 767px)",
      tablet: "@media screen and (min-width: 768px) and (max-width: 1024px)",
      desktop: "@media screen and (min-width: 1025px)"
    };

    // Properties we support for responsive overrides
    const propMap: Record<string, string> = {
      width: "width",
      height: "height",
      margin: "margin",
      padding: "padding",
      gap: "gap",
      direction: "direction",
      justify: "justify",
      align: "align",
      itemsPerRow: "items-per-row",
      columns: "items-per-row", // Alias support
      totalColumns: "total-columns",
      opacity: "opacity",
      zIndex: "z-index",
      backgroundColor: "background-color",
      borderRadius: "border-radius",
      elevation: "elevation",
      wrap: "wrap"
    };

    let cssText = "";

    Object.entries(breakpoints).forEach(([bp, query]) => {
      const overrides = this.responsiveProps[bp];
      if (!overrides) return;

      let bpStyles = "";
      Object.entries(overrides).forEach(([key, value]) => {
        const targetVar = propMap[key];
        if (targetVar) {
          bpStyles += `--${pref}-${targetVar}-override: ${value};\n`;
        }
      });

      if (bpStyles) {
        cssText += `${query} {\n  :host {\n    ${bpStyles}  }\n}\n`;
      }
    });

    return cssText ? html`<style>${cssText}</style>` : html``;
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

  get isStudio(): boolean {
    if (typeof window === 'undefined') return false;
    const search = window.location.search || "";
    if (search.includes("mode=preview") || search.includes("mode=live")) {
      return false;
    }
    try {
      if (window.parent && (window.parent as any).zeroThemeManager && !search.includes("mode=preview")) {
        return true;
      }
    } catch (e) {}
    if ((window as any).zeroThemeManager && !search.includes("mode=preview")) {
      return true;
    }
    return false;
  }

  // --- Interaction (Studio) ---

  protected handleMouseMove(e: MouseEvent) {
    if (!this.isStudio) return;
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

  protected handleMouseLeave() { 
    if (!this.isStudio) return;
    this.activeEdge = 'none'; 
  }

  protected renderDropIndicators() {
    if (!this.isStudio) return html``;
    return html`
      <div class="drop-indicator left ${this.activeEdge === 'left' ? 'active' : ''}"></div>
      <div class="drop-indicator right ${this.activeEdge === 'right' ? 'active' : ''}"></div>
      <div class="drop-indicator top ${this.activeEdge === 'top' ? 'active' : ''}"></div>
      <div class="drop-indicator bottom ${this.activeEdge === 'bottom' ? 'active' : ''}"></div>
    `;
  }

  renderHeader() {
    return html``;
  }
}
