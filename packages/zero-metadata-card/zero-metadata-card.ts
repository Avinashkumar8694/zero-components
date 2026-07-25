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
