// @environment page
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

@RendererComponent({
  name: "zero-button",
  version: "1.0.0",
  title: "Button",
  elementSelector: "zero-button",
  group: "Actions",
  iconName: "button-icon.png",
})
@applyGlobalStyles()
export class ZeroButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    button {
      border: none;
      border-radius: 999px;
      padding: 12px 18px;
      font: inherit;
      cursor: pointer;
      transition: transform 140ms ease, opacity 140ms ease, background 140ms ease;
    }

    button:hover {
      transform: translateY(-1px);
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.55;
      transform: none;
    }

    .primary {
      background: #16324f;
      color: #f8fafc;
    }

    .secondary {
      background: #f5efe6;
      color: #132238;
      border: 1px solid rgba(19, 34, 56, 0.12);
    }

    .ghost {
      background: transparent;
      color: #16324f;
      border: 1px dashed rgba(22, 50, 79, 0.28);
    }

    .full {
      width: 100%;
    }
  `;

  @property({ type: String }) label = "Button";
  @property({ type: String }) variant = "primary";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean, attribute: "full-width" }) fullWidth = false;

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Label",
    fieldMappings: "label"
  })
  get labelConfig() {
    return this.label;
  }
  set labelConfig(value: string) {
    this.label = value;
  }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Variant",
    fieldMappings: "variant",
    optionItems: [
      { label: "Primary", value: "primary" },
      { label: "Secondary", value: "secondary" },
      { label: "Ghost", value: "ghost" }
    ]
  })
  get variantConfig() {
    return this.variant;
  }
  set variantConfig(value: string) {
    this.variant = value || "primary";
  }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
  get disabledConfig() {
    return this.disabled;
  }
  set disabledConfig(value: boolean) {
    this.disabled = Boolean(value);
  }

  @RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: "On Click",
    eventTrigger: "click"
  })
  handleClick() {
    this.dispatchEvent(new CustomEvent("click", { bubbles: true, composed: true }));
  }

  render() {
    const safeVariant = ["primary", "secondary", "ghost"].includes(this.variant) ? this.variant : "primary";
    return html`
      <button
        class=${`${safeVariant} ${this.fullWidth ? "full" : ""}`}
        ?disabled=${this.disabled}
        @click=${this.handleClick}
      >
        ${this.label}
      </button>
    `;
  }
}
