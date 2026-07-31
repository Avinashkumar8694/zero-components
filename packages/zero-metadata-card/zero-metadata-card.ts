// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

function escapeStudio(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

@RendererComponent({
  name: "zero-metadata-card",
  version: "1.0.0",
  title: "Metadata Card",
  elementSelector: "zero-metadata-card",
  group: "Dashboard",
  iconName: "card-icon.png",
})
@applyGlobalStyles()
export class ZeroMetadataCard extends LitElement {
  
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) {
      return {
        kind: "generic",
        templateHtml: `<zero-metadata-card-1.0.0></zero-metadata-card-1.0.0>`
      };
    }
    const item1Label = escapeStudio(config?.props?.item1Label ?? config?.studio?.props?.item1Label ?? "Gender");
    const item1Value = escapeStudio(config?.props?.item1Value ?? config?.studio?.props?.item1Value ?? "Female");
    const item2Label = escapeStudio(config?.props?.item2Label ?? config?.studio?.props?.item2Label ?? "Birthday");
    const item2Value = escapeStudio(config?.props?.item2Value ?? config?.studio?.props?.item2Value ?? "Feb 24th, 1997");
    const item3Label = escapeStudio(config?.props?.item3Label ?? config?.studio?.props?.item3Label ?? "Phone Number");
    const item3Value = escapeStudio(config?.props?.item3Value ?? config?.studio?.props?.item3Value ?? "(239) 555-0108");
    const item4Label = escapeStudio(config?.props?.item4Label ?? config?.studio?.props?.item4Label ?? "Street Address");
    const item4Value = escapeStudio(config?.props?.item4Value ?? config?.studio?.props?.item4Value ?? "Jl. Diponegoro No. 21");
    const item5Label = escapeStudio(config?.props?.item5Label ?? config?.studio?.props?.item5Label ?? "City");
    const item5Value = escapeStudio(config?.props?.item5Value ?? config?.studio?.props?.item5Value ?? "Cilacap");
    const item6Label = escapeStudio(config?.props?.item6Label ?? config?.studio?.props?.item6Label ?? "ZIP Code");
    const item6Value = escapeStudio(config?.props?.item6Value ?? config?.studio?.props?.item6Value ?? "655849");
    const item7Label = escapeStudio(config?.props?.item7Label ?? config?.studio?.props?.item7Label ?? "Member Status");
    const item7Value = escapeStudio(config?.props?.item7Value ?? config?.studio?.props?.item7Value ?? "Active Member");
    const item8Label = escapeStudio(config?.props?.item8Label ?? config?.studio?.props?.item8Label ?? "Registered Date");
    const item8Value = escapeStudio(config?.props?.item8Value ?? config?.studio?.props?.item8Value ?? "Feb 24th, 1997");

    return {
      kind: "generic",
      templateHtml: `
        <zero-metadata-card-1.0.0
          item1-label="${item1Label}"
          item1-value="${item1Value}"
          item2-label="${item2Label}"
          item2-value="${item2Value}"
          item3-label="${item3Label}"
          item3-value="${item3Value}"
          item4-label="${item4Label}"
          item4-value="${item4Value}"
          item5-label="${item5Label}"
          item5-value="${item5Value}"
          item6-label="${item6Label}"
          item6-value="${item6Value}"
          item7-label="${item7Label}"
          item7-value="${item7Value}"
          item8-label="${item8Label}"
          item8-value="${item8Value}"
        ></zero-metadata-card-1.0.0>
      `
    };
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }
    .card {
      padding: 24px;
      border-radius: 16px;
      background: var(--uiv-surface-color, #ffffff);
      border: 1px solid var(--uiv-border-color, rgba(0, 0, 0, 0.05));
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
      font-family: inherit;
      box-sizing: border-box;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px 20px;
    }
    @media (max-width: 600px) {
      .grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (max-width: 400px) {
      .grid {
        grid-template-columns: 1fr;
      }
    }
    .item {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .label {
      font-size: 0.75rem;
      color: var(--uiv-text-muted, #94a3b8);
      font-weight: 500;
      text-transform: capitalize;
    }
    .val {
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--uiv-text-color, #1e293b);
      word-break: break-word;
    }

    @media (max-width: 768px) {
      .card {
        padding: 16px;
      }
      .grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px 12px;
      }
      .label {
        font-size: 0.7rem;
      }
      .val {
        font-size: 0.8rem;
      }
    }
  `;

  @property({ type: String, attribute: "item1-label" }) item1Label = "Gender";
  @property({ type: String, attribute: "item1-value" }) item1Value = "Female";

  @property({ type: String, attribute: "item2-label" }) item2Label = "Birthday";
  @property({ type: String, attribute: "item2-value" }) item2Value = "Feb 24th, 1997";

  @property({ type: String, attribute: "item3-label" }) item3Label = "Phone Number";
  @property({ type: String, attribute: "item3-value" }) item3Value = "(239) 555-0108";

  @property({ type: String, attribute: "item4-label" }) item4Label = "Street Address";
  @property({ type: String, attribute: "item4-value" }) item4Value = "Jl. Diponegoro No. 21";

  @property({ type: String, attribute: "item5-label" }) item5Label = "City";
  @property({ type: String, attribute: "item5-value" }) item5Value = "Cilacap";

  @property({ type: String, attribute: "item6-label" }) item6Label = "ZIP Code";
  @property({ type: String, attribute: "item6-value" }) item6Value = "655849";

  @property({ type: String, attribute: "item7-label" }) item7Label = "Member Status";
  @property({ type: String, attribute: "item7-value" }) item7Value = "Active Member";

  @property({ type: String, attribute: "item8-label" }) item8Label = "Registered Date";
  @property({ type: String, attribute: "item8-value" }) item8Value = "Feb 24th, 1997";

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Item 1 Label",
    fieldMappings: "item1Label",
    categoryLabel: "Item 1",
    initialValue: "Gender"
  })
  get item1LabelConfig() { return this.item1Label; }
  set item1LabelConfig(val: string) { this.item1Label = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Item 1 Value",
    fieldMappings: "item1Value",
    categoryLabel: "Item 1",
    initialValue: "Female"
  })
  get item1ValueConfig() { return this.item1Value; }
  set item1ValueConfig(val: string) { this.item1Value = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Item 2 Label",
    fieldMappings: "item2Label",
    categoryLabel: "Item 2",
    initialValue: "Birthday"
  })
  get item2LabelConfig() { return this.item2Label; }
  set item2LabelConfig(val: string) { this.item2Label = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Item 2 Value",
    fieldMappings: "item2Value",
    categoryLabel: "Item 2",
    initialValue: "Feb 24th, 1997"
  })
  get item2ValueConfig() { return this.item2Value; }
  set item2ValueConfig(val: string) { this.item2Value = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Item 3 Label",
    fieldMappings: "item3Label",
    categoryLabel: "Item 3",
    initialValue: "Phone Number"
  })
  get item3LabelConfig() { return this.item3Label; }
  set item3LabelConfig(val: string) { this.item3Label = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Item 3 Value",
    fieldMappings: "item3Value",
    categoryLabel: "Item 3",
    initialValue: "(239) 555-0108"
  })
  get item3ValueConfig() { return this.item3Value; }
  set item3ValueConfig(val: string) { this.item3Value = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Item 4 Label",
    fieldMappings: "item4Label",
    categoryLabel: "Item 4",
    initialValue: "Street Address"
  })
  get item4LabelConfig() { return this.item4Label; }
  set item4LabelConfig(val: string) { this.item4Label = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Item 4 Value",
    fieldMappings: "item4Value",
    categoryLabel: "Item 4",
    initialValue: "Jl. Diponegoro No. 21"
  })
  get item4ValueConfig() { return this.item4Value; }
  set item4ValueConfig(val: string) { this.item4Value = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Item 5 Label",
    fieldMappings: "item5Label",
    categoryLabel: "Item 5",
    initialValue: "City"
  })
  get item5LabelConfig() { return this.item5Label; }
  set item5LabelConfig(val: string) { this.item5Label = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Item 5 Value",
    fieldMappings: "item5Value",
    categoryLabel: "Item 5",
    initialValue: "Cilacap"
  })
  get item5ValueConfig() { return this.item5Value; }
  set item5ValueConfig(val: string) { this.item5Value = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Item 6 Label",
    fieldMappings: "item6Label",
    categoryLabel: "Item 6",
    initialValue: "ZIP Code"
  })
  get item6LabelConfig() { return this.item6Label; }
  set item6LabelConfig(val: string) { this.item6Label = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Item 6 Value",
    fieldMappings: "item6Value",
    categoryLabel: "Item 6",
    initialValue: "655849"
  })
  get item6ValueConfig() { return this.item6Value; }
  set item6ValueConfig(val: string) { this.item6Value = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Item 7 Label",
    fieldMappings: "item7Label",
    categoryLabel: "Item 7",
    initialValue: "Member Status"
  })
  get item7LabelConfig() { return this.item7Label; }
  set item7LabelConfig(val: string) { this.item7Label = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Item 7 Value",
    fieldMappings: "item7Value",
    categoryLabel: "Item 7",
    initialValue: "Active Member"
  })
  get item7ValueConfig() { return this.item7Value; }
  set item7ValueConfig(val: string) { this.item7Value = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Item 8 Label",
    fieldMappings: "item8Label",
    categoryLabel: "Item 8",
    initialValue: "Registered Date"
  })
  get item8LabelConfig() { return this.item8Label; }
  set item8LabelConfig(val: string) { this.item8Label = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Item 8 Value",
    fieldMappings: "item8Value",
    categoryLabel: "Item 8",
    initialValue: "Feb 24th, 1997"
  })
  get item8ValueConfig() { return this.item8Value; }
  set item8ValueConfig(val: string) { this.item8Value = val; }

  render() {
    const items = [
      { label: this.item1Label, value: this.item1Value },
      { label: this.item2Label, value: this.item2Value },
      { label: this.item3Label, value: this.item3Value },
      { label: this.item4Label, value: this.item4Value },
      { label: this.item5Label, value: this.item5Value },
      { label: this.item6Label, value: this.item6Value },
      { label: this.item7Label, value: this.item7Value },
      { label: this.item8Label, value: this.item8Value }
    ];

    return html`
      <div class="card">
        <div class="grid">
          ${items.map(item => html`
            <div class="item">
              <div class="label">${item.label}</div>
              <div class="val">${item.value}</div>
            </div>
          `)}
        </div>
      </div>
    `;
  }
}
