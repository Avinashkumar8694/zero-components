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
      width: 100%;
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
      --zero-panel-columns: 1;
      --zero-panel-gap: 16px;
      --zero-panel-min-col: 220px;
      display: grid;
      width: 100%;
      box-sizing: border-box;
      padding: 16px;
      gap: var(--zero-panel-gap);
      grid-template-columns: repeat(var(--zero-panel-columns), minmax(var(--zero-panel-min-col), 1fr));
      align-items: start;
      min-height: 120px;
    }

    slot {
      display: block;
      min-height: 100%;
      pointer-events: auto;
    }
  `;

  @property({ type: Number })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Columns",
    fieldMappings: "columns",
    optionItems: [
      { label: "1 Column", value: 1 },
      { label: "2 Columns", value: 2 },
      { label: "3 Columns", value: 3 },
      { label: "4 Columns", value: 4 },
    ],
  })
  columns = 2;

  @property({ type: Number })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Gap (px)",
    fieldMappings: "gap",
  })
  gap = 16;

  @property({ type: Number, attribute: "min-column-width" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Min Column Width (px)",
    fieldMappings: "minColumnWidth",
  })
  minColumnWidth = 220;

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
        detail: { columns: this.normalizedColumns },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private get normalizedColumns(): number {
    const value = Number(this.columns);
    if (!Number.isFinite(value)) {
      return 1;
    }
    return Math.min(4, Math.max(1, Math.trunc(value)));
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
    const styles = [
      `--zero-panel-columns:var(--zero-panel-columns-override, ${this.normalizedColumns})`,
      `--zero-panel-gap:var(--zero-panel-gap-override, ${Math.max(0, Number(this.gap) || 0)}px)`,
      `--zero-panel-min-col:var(--zero-panel-min-col-override, ${Math.max(120, Number(this.minColumnWidth) || 220)}px)`,
    ].join(";");

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
            <div class="layout" style=${styles}>
              ${Array.from({ length: this.normalizedColumns }).map(
                (_, i) => html`<slot name="col-${i + 1}" @slotchange=${i === 0 ? this.handleSlotChange : null}></slot>`
              )}
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
