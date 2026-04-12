// @environment page
import {
  RendererAttribute,
  RendererComponent,
  applyGlobalStyles,
  AttributeType,
  UserInterfaceType,
} from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property, customElement } from "lit/decorators.js";

@RendererComponent({
  name: "zero-panel-layout",
  version: "1.0.0",
  title: "Panel Layout",
  elementSelector: "zero-panel-layout",
  group: "Layout",
  iconName: "panel-layout-icon.png",
})
@applyGlobalStyles()
@customElement("zero-panel-layout")
export class ZeroPanelLayout extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: var(--zero-width, 100%);
      padding: var(--zero-padding, 0);
      box-sizing: border-box;
      --zero-panel-header-bg: transparent;
      --zero-panel-header-padding: 12px 16px;
      --zero-panel-transition: 240ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .panel-container {
      border: 1px solid var(--zero-border-soft, #e2e8f0);
      border-radius: 8px;
      overflow: hidden;
      background: var(--zero-surface, #ffffff);
    }

    .header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: var(--zero-panel-header-padding);
      background: var(--zero-panel-header-bg);
      cursor: pointer;
      user-select: none;
      border-bottom: 1px solid var(--zero-border-soft, #e2e8f0);
    }

    .header:hover {
      background: rgba(0, 0, 0, 0.02);
    }

    .label {
      flex: 1;
      font-weight: 600;
      font-size: 0.94rem;
      color: var(--zero-text, #1e293b);
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
    }

    .toggle-chevron {
      transition: transform var(--zero-panel-transition);
      font-size: 0.8rem;
      opacity: 0.6;
    }

    :host([expanded]) .toggle-chevron {
      transform: rotate(180deg);
    }

    .content-wrapper {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows var(--zero-panel-transition);
    }

    :host([expanded]) .content-wrapper {
      grid-template-rows: 1fr;
    }

    .content-inner {
      overflow: hidden;
    }

    .layout {
      display: var(--zero-display, flex);
      flex-direction: var(--zero-direction, row);
      flex-wrap: wrap;
      justify-content: var(--zero-justify, flex-start);
      align-items: var(--zero-align, stretch);
      gap: var(--zero-gap, 16px);
      width: 100%;
      box-sizing: border-box;
      padding: 16px;
      min-height: 120px;
    }

    slot {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      /* Calculate width based on items per row, minus the gap share */
      flex: 0 0 calc((100% / var(--zero-items-per-row, 1)) - ((var(--zero-gap, 16px) * (var(--zero-items-per-row, 1) - 1)) / var(--zero-items-per-row, 1)));
      min-height: 120px;
      pointer-events: auto;
      border: 1px dashed rgba(0,0,0,0.1);
      box-sizing: border-box;
      transition: flex var(--zero-panel-transition);
    }

    /* Force full width if specifically in column direction or single column row */
    .layout[style*="--zero-direction: column"] slot,
    .layout[style*="--zero-items-per-row: 1"] slot {
      flex: 0 0 100%;
    }
  `;

  @property({ type: String }) direction = "row";

  @property({ type: Number, attribute: "total-columns" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Total Slots (Areas)",
    fieldMappings: "totalColumns",
  })
  totalColumns = 2;

  @property({ type: Number, attribute: "items-per-row" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.RESPONSIVE_OVERRIDE,
    displayLabel: "Items per Row",
    fieldMappings: "itemsPerRow",
  })
  itemsPerRow = 2;

  @property({ type: String }) justify = "flex-start";
  @property({ type: String }) align = "stretch";
  @property({ type: Number }) gap = 16;

  @property({ type: Boolean })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Visible",
    fieldMappings: "visible",
  })
  visible = true;

  @property({ type: Boolean, attribute: "enable-header" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Enable Header",
    fieldMappings: "enableHeader",
  })
  enableHeader = false;

  @property({ type: Boolean, reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Expanded",
    fieldMappings: "expanded",
  })
  expanded = true;

  @property({ type: Boolean })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Expandable",
    fieldMappings: "expandable",
  })
  expandable = true;

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Header Label",
    fieldMappings: "label",
  })
  label = "Panel Header";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Icon (Emoji/HTML)",
    fieldMappings: "icon",
  })
  icon = "📄";

  @property({ type: String, attribute: "icon-position" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Icon Position",
    fieldMappings: "iconPosition",
    optionItems: [
      { label: "Start", value: "start" },
      { label: "End", value: "end" },
    ],
  })
  iconPosition = "start";

  @RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: "On Slot Change",
    eventTrigger: "slotchange",
  })
  handleSlotChange() {
    this.dispatchEvent(
      new CustomEvent("slotchange", {
        detail: { totalColumns: this.totalColumns },
        bubbles: true,
        composed: true,
      }),
    );
  }

  toggleExpanded() {
    if (!this.expandable) return;
    this.expanded = !this.expanded;
    this.dispatchEvent(new CustomEvent("expansionchange", { detail: { expanded: this.expanded } }));
  }

  private renderIcon() {
    if (!this.icon) return html``;
    return html`<span class="icon">${this.icon}</span>`;
  }

  render() {
    if (!this.visible) return html``;
    const totalSlots = Math.max(1, Math.min(12, Number(this.totalColumns) || 1));

    return html`
      <div class="panel-container">
        ${this.enableHeader ? html`
          <div class="header" @click=${this.toggleExpanded}>
            ${this.iconPosition === "start" ? this.renderIcon() : ""}
            <span class="label">${this.label}</span>
            ${this.iconPosition === "end" ? this.renderIcon() : ""}
            ${this.expandable ? html`<span class="toggle-chevron">▼</span>` : ""}
          </div>
        ` : ""}
        <div class="content-wrapper">
          <div class="content-inner">
            <div class="layout" style="--zero-items-per-row: ${this.itemsPerRow || 1}">
              ${Array.from({ length: totalSlots }).map(
                (_, i) => html`<slot name="col-${i + 1}" @slotchange=${i === 0 ? this.handleSlotChange : null}></slot>`
              )}
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

