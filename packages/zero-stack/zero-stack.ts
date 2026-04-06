import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

@RendererComponent({
  name: "zero-stack",
  version: "1.0.0",
  title: "Stack",
  elementSelector: "zero-stack",
  group: "Layout",
  iconName: "stack-icon.png",
})
@applyGlobalStyles()
export class ZeroStack extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .stack {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      gap: var(--zero-stack-gap, 16px);
      flex-direction: var(--zero-stack-direction, column);
      justify-content: var(--zero-stack-justify, flex-start);
      align-items: var(--zero-stack-align, stretch);
      flex-wrap: var(--zero-stack-wrap, nowrap);
    }

    @media (max-width: 767px) {
      .stack[data-mobile-stack="true"] {
        flex-direction: column;
      }
    }
  `;

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Direction",
    fieldMappings: "direction",
    optionItems: [
      { label: "Column", value: "column" },
      { label: "Row", value: "row" }
    ]
  })
  direction = "column";

  @property({ type: Number })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Gap (px)",
    fieldMappings: "gap"
  })
  gap = 16;

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Justify",
    fieldMappings: "justify",
    optionItems: [
      { label: "Start", value: "flex-start" },
      { label: "Center", value: "center" },
      { label: "End", value: "flex-end" },
      { label: "Between", value: "space-between" }
    ]
  })
  justify = "flex-start";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Align",
    fieldMappings: "align",
    optionItems: [
      { label: "Stretch", value: "stretch" },
      { label: "Start", value: "flex-start" },
      { label: "Center", value: "center" },
      { label: "End", value: "flex-end" }
    ]
  })
  align = "stretch";

  @property({ type: Boolean, attribute: "mobile-stack" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Mobile Stack",
    fieldMappings: "mobileStack"
  })
  mobileStack = true;

  render() {
    const styleValue = [
      `--zero-stack-gap:var(--zero-stack-gap-override, ${Math.max(0, Number(this.gap) || 0)}px)`,
      `--zero-stack-direction:var(--zero-stack-direction-override, ${this.direction || "column"})`,
      `--zero-stack-justify:var(--zero-stack-justify-override, ${this.justify || "flex-start"})`,
      `--zero-stack-align:var(--zero-stack-align-override, ${this.align || "stretch"})`
    ].join(";");

    return html`
      <div class="stack" style=${styleValue} data-mobile-stack=${String(this.mobileStack)}>
        <slot></slot>
      </div>
    `;
  }
}
