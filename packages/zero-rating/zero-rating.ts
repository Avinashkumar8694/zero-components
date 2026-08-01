// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

const SYMBOLS: Record<string, string> = {
  star: "★",
  heart: "♥",
  emoji: "●",
};

const SIZE_PX: Record<string, number> = {
  small: 16,
  medium: 22,
  large: 30,
};

export const studioTemplate: ZeroStudioTemplate = {
  kind: "generic",
  templateHtml: [
    "<div style='display:inline-flex;align-items:center;gap:4px;font-family:inherit;box-sizing:border-box;'>",
    "<span style='font-size:22px;line-height:1;color:#fbbf24;'>★</span>",
    "<span style='font-size:22px;line-height:1;color:#fbbf24;'>★</span>",
    "<span style='font-size:22px;line-height:1;color:#fbbf24;'>★</span>",
    "<span style='font-size:22px;line-height:1;color:#fbbf24;'>★</span>",
    "<span style='font-size:22px;line-height:1;color:#e5e7eb;'>★</span>",
    "</div>"
  ].join(""),
  labelProp: "value",
  badges: ["Data Display", "Rating"],
};

function clampNum(v: unknown, min: number, max: number, fallback: number): number {
  const n = Number(v);
  if (!Number.isFinite(n)) return fallback;
  return Math.min(max, Math.max(min, n));
}

@RendererComponent({
  name: "zero-rating",
  version: "1.0.0",
  title: "Rating",
  elementSelector: "zero-rating",
  group: "Data Display",
  iconName: "rating-icon.png",
})
@applyGlobalStyles()
export class ZeroRating extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) return studioTemplate;

    const max = clampNum(config.props?.max ?? config.studio?.props?.max, 1, 20, 5);
    const value = clampNum(config.props?.value ?? config.studio?.props?.value, 0, max, 4);
    const variant = (config.props?.variant ?? config.studio?.props?.variant) || "star";
    const size = (config.props?.size ?? config.studio?.props?.size) || "medium";
    const color = (config.props?.color ?? config.studio?.props?.color) || "#fbbf24";
    const allowHalf = config.props?.allowHalf ?? config.studio?.props?.allowHalf ?? false;

    const symbol = SYMBOLS[variant] || SYMBOLS.star;
    const fs = SIZE_PX[size] || SIZE_PX.medium;
    const empty = "var(--uiv-border-color, #e5e7eb)";

    const cells: string[] = [];
    for (let i = 0; i < max; i++) {
      const fill = allowHalf ? Math.min(1, Math.max(0, value - i)) : value - i >= 1 ? 1 : 0;
      if (fill >= 1) {
        cells.push(`<span style='font-size:${fs}px;line-height:1;color:${color};'>${symbol}</span>`);
      } else if (fill > 0) {
        cells.push(
          `<span style='position:relative;display:inline-block;font-size:${fs}px;line-height:1;color:${empty};'>${symbol}<span style='position:absolute;left:0;top:0;width:${Math.round(
            fill * 100
          )}%;overflow:hidden;color:${color};'>${symbol}</span></span>`
        );
      } else {
        cells.push(`<span style='font-size:${fs}px;line-height:1;color:${empty};'>${symbol}</span>`);
      }
    }

    return {
      ...studioTemplate,
      templateHtml: [
        "<div style='display:inline-flex;align-items:center;gap:4px;font-family:inherit;box-sizing:border-box;'>",
        cells.join(""),
        "</div>"
      ].join(""),
    };
  }

  static styles = css`
    :host {
      display: inline-block;
      --rt-empty: var(--uiv-border-color, #e5e7eb);
      --rt-color: #fbbf24;
    }

    .rating {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-family: inherit;
      box-sizing: border-box;
    }

    .symbol {
      position: relative;
      display: inline-block;
      line-height: 1;
      color: var(--rt-empty);
      cursor: pointer;
      transition: transform 0.12s ease;
      user-select: none;
    }
    .rating.readonly .symbol { cursor: default; }
    .rating:not(.readonly) .symbol:hover { transform: scale(1.18); }

    .symbol .fill {
      position: absolute;
      left: 0;
      top: 0;
      overflow: hidden;
      white-space: nowrap;
      color: var(--rt-color);
    }
    .symbol.full { color: var(--rt-color); }
  `;

  @property({ type: Number }) value = 4;
  @property({ type: Number }) max = 5;
  @property({ type: String }) variant = "star";
  @property({ type: String }) size = "medium";
  @property({ type: String }) color = "#fbbf24";
  @property({ type: Boolean }) readonly = false;
  @property({ type: Boolean, attribute: "allow-half" }) allowHalf = false;

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Value",
    fieldMappings: "value"
  })
  get valueConfig() { return this.value; }
  set valueConfig(val: number) { this.value = Math.max(0, Number(val) || 0); }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Max",
    fieldMappings: "max"
  })
  get maxConfig() { return this.max; }
  set maxConfig(val: number) { this.max = Math.max(1, Number(val) || 5); }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Variant",
    fieldMappings: "variant",
    optionItems: [
      { label: "Star", value: "star" },
      { label: "Heart", value: "heart" },
      { label: "Emoji", value: "emoji" }
    ]
  })
  get variantConfig() { return this.variant; }
  set variantConfig(val: string) { this.variant = val || "star"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Size",
    fieldMappings: "size",
    optionItems: [
      { label: "Small", value: "small" },
      { label: "Medium", value: "medium" },
      { label: "Large", value: "large" }
    ]
  })
  get sizeConfig() { return this.size; }
  set sizeConfig(val: string) { this.size = val || "medium"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: "Color",
    fieldMappings: "color"
  })
  get colorConfig() { return this.color; }
  set colorConfig(val: string) { this.color = val || "#fbbf24"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Read Only",
    fieldMappings: "readonly"
  })
  get readonlyConfig() { return this.readonly; }
  set readonlyConfig(val: boolean) { this.readonly = Boolean(val); }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Allow Half",
    fieldMappings: "allowHalf"
  })
  get allowHalfConfig() { return this.allowHalf; }
  set allowHalfConfig(val: boolean) { this.allowHalf = Boolean(val); }

  @RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: "On Change",
    eventTrigger: "on-change"
  })
  handleChange(newValue: number) {
    this.value = newValue;
    this.dispatchEvent(
      new CustomEvent("on-change", {
        detail: { value: newValue, max: this.max },
        bubbles: true,
        composed: true
      })
    );
  }

  private onSymbolClick(index: number, event: MouseEvent) {
    if (this.readonly) return;
    let newValue = index + 1;
    if (this.allowHalf) {
      const target = event.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const isLeftHalf = event.clientX - rect.left < rect.width / 2;
      newValue = isLeftHalf ? index + 0.5 : index + 1;
    }
    this.handleChange(newValue);
  }

  render() {
    const symbol = SYMBOLS[this.variant] || SYMBOLS.star;
    const fs = SIZE_PX[this.size] || SIZE_PX.medium;
    const max = Math.max(1, Number(this.max) || 5);
    const value = Math.min(max, Math.max(0, Number(this.value) || 0));

    const cells = [];
    for (let i = 0; i < max; i++) {
      const fill = this.allowHalf
        ? Math.min(1, Math.max(0, value - i))
        : value - i >= 1
        ? 1
        : 0;
      cells.push(html`
        <span
          class="symbol ${fill >= 1 ? "full" : ""}"
          style="font-size:${fs}px;color:${this.color};"
          role="button"
          aria-label="Rate ${i + 1}"
          @click=${(e: MouseEvent) => this.onSymbolClick(i, e)}
        >
          <span style="color:${fill >= 1 ? this.color : "var(--rt-empty)"};">${symbol}</span>
          ${fill > 0 && fill < 1
            ? html`<span class="fill" style="width:${Math.round(fill * 100)}%;color:${this.color};">${symbol}</span>`
            : ""}
        </span>
      `);
    }

    return html`
      <div
        class="rating ${this.readonly ? "readonly" : ""}"
        style="--rt-color:${this.color};"
        role="slider"
        aria-valuenow=${value}
        aria-valuemin="0"
        aria-valuemax=${max}
      >
        ${cells}
      </div>
    `;
  }
}
