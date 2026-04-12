// @environment page
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
      width: var(--zero-width, 100%);
      padding: var(--zero-padding, 0);
      box-sizing: border-box;
    }

    .stack {
      display: var(--zero-display, flex);
      width: 100%;
      box-sizing: border-box;
      gap: var(--zero-gap, 16px);
      flex-direction: var(--zero-direction, column);
      justify-content: var(--zero-justify, flex-start);
      align-items: var(--zero-align, stretch);
      flex-wrap: var(--zero-wrap, nowrap);
    }

    @media (max-width: 767px) {
      .stack[data-mobile-stack="true"] {
        flex-direction: column;
      }
    }
  `;

  @property({ type: String })
  direction = "column";

  @property({ type: Number })
  gap = 16;

  @property({ type: String })
  justify = "flex-start";

  @property({ type: String })
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
    // Relying on platform variables --zero-gap, --zero-direction, etc.
    return html`
      <div class="stack" data-mobile-stack=${String(this.mobileStack)}>
        <slot></slot>
      </div>
    `;
  }
}
