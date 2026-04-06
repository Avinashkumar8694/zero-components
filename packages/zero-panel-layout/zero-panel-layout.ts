// @environment page
import {
  RendererAttribute,
  RendererComponent,
  applyGlobalStyles,
  AttributeType,
  UserInterfaceType,
} from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

@RendererComponent({
  name: "zero-panel-layout",
  version: "1.0.0",
  title: "Panel Layout",
  elementSelector: "zero-panel-layout",
  group: "Layout",
  iconName: "panel-layout-icon.png",
})
@applyGlobalStyles()
export class ZeroPanelLayout extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .layout {
      --zero-panel-columns: 1;
      --zero-panel-gap: 16px;
      --zero-panel-min-col: 220px;
      display: grid;
      width: 100%;
      box-sizing: border-box;
      gap: var(--zero-panel-gap);
      grid-template-columns: repeat(var(--zero-panel-columns), minmax(var(--zero-panel-min-col), 1fr));
      align-items: start;
    }

    @media (max-width: 767px) {
      .layout {
        --zero-panel-columns: 1;
      }
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      .layout {
        --zero-panel-columns: min(2, var(--zero-panel-columns));
      }
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
  columns = 1;

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

  render() {
    const styles = [
      `--zero-panel-columns:var(--zero-panel-columns-override, ${this.normalizedColumns})`,
      `--zero-panel-gap:var(--zero-panel-gap-override, ${Math.max(0, Number(this.gap) || 0)}px)`,
      `--zero-panel-min-col:var(--zero-panel-min-col-override, ${Math.max(120, Number(this.minColumnWidth) || 220)}px)`,
    ].join(";");

    return html`
      <div class="layout" style=${styles}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
  }
}
