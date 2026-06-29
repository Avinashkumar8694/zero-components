// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

export const studioTemplate: ZeroStudioTemplate = {
  kind: "generic",
  templateHtml: [
    "<div style='overflow-x:auto;border:1px solid #e5e7eb;border-radius:8px;'>",
    "<table style='width:100%;border-collapse:collapse;font-size:13px;text-align:left;'>",
    "<thead style='background:#f9fafb;border-bottom:1px solid #e5e7eb;color:#374151;'>",
    "<tr>",
    "<th style='padding:10px 12px;'>Header 1</th>",
    "<th style='padding:10px 12px;'>Header 2</th>",
    "</tr>",
    "</thead>",
    "<tbody>",
    "<tr style='border-bottom:1px solid #e5e7eb;'>",
    "<td style='padding:10px 12px;'>Data Row 1 Col 1</td>",
    "<td style='padding:10px 12px;'>Data Row 1 Col 2</td>",
    "</tr>",
    "</tbody>",
    "</table>",
    "</div>"
  ].join(""),
  labelProp: "variant",
  badges: ["Data", "Table"],
};

@RendererComponent({
  name: "zero-table",
  version: "1.0.0",
  title: "Data Table",
  elementSelector: "zero-table",
  group: "Data Display",
  iconName: "table-icon.png",
})
@applyGlobalStyles()
export class ZeroTable extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    return studioTemplate;
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
      margin-bottom: 16px;
      --tb-p: var(--uiv-primary-color, #6366f1);
      --tb-bg: var(--uiv-surface-color, #ffffff);
      --tb-text: var(--uiv-text-color, #1f2937);
      --tb-border: var(--uiv-border-color, #e5e7eb);
    }

    .table-container {
      width: 100%;
      overflow-x: auto;
      border-radius: 8px;
      transition: all 0.25s ease;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.9rem;
      color: var(--tb-text);
      text-align: left;
    }

    th {
      font-weight: 600;
      padding: 12px 16px;
      background: var(--uiv-surface-color-secondary, #f9fafb);
      border-bottom: 1px solid var(--tb-border);
      user-select: none;
    }

    td {
      padding: 12px 16px;
      border-bottom: 1px solid var(--tb-border);
      transition: background 0.15s ease;
    }

    /* Striped rows */
    .striped tbody tr:nth-child(even) {
      background: rgba(0, 0, 0, 0.02);
    }

    /* Hoverable rows */
    .hoverable tbody tr {
      cursor: pointer;
    }
    .hoverable tbody tr:hover {
      background: rgba(99, 102, 241, 0.04);
    }

    /* Bordered table */
    .bordered table,
    .bordered th,
    .bordered td {
      border: 1px solid var(--tb-border);
    }

    /* ─── VARIANTS ─── */

    /* 1. Standard */
    .variant-standard {
      border: 1px solid var(--tb-border);
      background: var(--tb-bg);
      box-shadow: 0 1px 3px rgba(0,0,0,0.02);
    }

    /* 2. Blocky (Retro) */
    .variant-blocky {
      border: 3px solid #000000;
      border-radius: 0px;
      box-shadow: 6px 6px 0px #000000;
      background: #ffffff;
    }
    .variant-blocky th {
      background: var(--tb-p);
      color: #000000;
      border-bottom: 3px solid #000000;
      font-weight: 700;
    }
    .variant-blocky td {
      border-bottom: 2px solid #000000;
    }
    .variant-blocky.bordered td,
    .variant-blocky.bordered th {
      border: 2px solid #000000;
    }
    .variant-blocky.hoverable tbody tr:hover {
      background: rgba(248, 240, 5, 0.15);
    }

    /* 3. Frosted */
    .variant-frosted {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    .variant-frosted th {
      background: rgba(255, 255, 255, 0.06);
      border-bottom-color: rgba(255, 255, 255, 0.15);
    }
    .variant-frosted td {
      border-bottom-color: rgba(255, 255, 255, 0.08);
    }
    .variant-frosted.bordered td,
    .variant-frosted.bordered th {
      border: 1px solid rgba(255, 255, 255, 0.12);
    }

    /* 4. Glitch (Cyberpunk) */
    .variant-glitch {
      border-radius: 0px;
      border: 2px solid var(--tb-p);
      background: #0d0e12;
      color: #00e6f6;
    }
    .variant-glitch th {
      background: #161a23;
      color: var(--tb-p);
      border-bottom: 2px solid var(--tb-p);
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .variant-glitch td {
      border-bottom: 1px solid rgba(0, 230, 246, 0.2);
    }
    .variant-glitch.hoverable tbody tr:hover {
      background: rgba(0, 230, 246, 0.08);
    }
  `;

  @property({ type: String }) variant = "standard";
  @property({ type: String }) headers = "Name, Position, Office, Age";
  @property({ type: String }) rows = JSON.stringify([
    ["Tiger Nixon", "System Architect", "Edinburgh", "61"],
    ["Garrett Winters", "Accountant", "Tokyo", "63"],
    ["Ashton Cox", "Junior Technical Author", "San Francisco", "66"],
    ["Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "22"]
  ]);
  @property({ type: Boolean }) striped = true;
  @property({ type: Boolean }) bordered = false;
  @property({ type: Boolean }) hoverable = true;

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Table Theme Variant",
    fieldMappings: "variant",
    optionItems: [
      { label: "Standard", value: "standard" },
      { label: "Retro Blocky", value: "blocky" },
      { label: "Frosted Glass", value: "frosted" },
      { label: "Cyberpunk Glitch", value: "glitch" }
    ]
  })
  get variantConfig() { return this.variant; }
  set variantConfig(val: string) { this.variant = val || "standard"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Table Headers (comma-separated)",
    fieldMappings: "headers"
  })
  get headersConfig() { return this.headers; }
  set headersConfig(val: string) { this.headers = val || ""; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXTAREA,
    displayLabel: "Table Rows (JSON Array)",
    fieldMappings: "rows"
  })
  get rowsConfig() { return this.rows; }
  set rowsConfig(val: string) { this.rows = val || "[]"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Striped Rows",
    fieldMappings: "striped"
  })
  get stripedConfig() { return this.striped; }
  set stripedConfig(val: boolean) { this.striped = Boolean(val); }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Show Grid Borders",
    fieldMappings: "bordered"
  })
  get borderedConfig() { return this.bordered; }
  set borderedConfig(val: boolean) { this.bordered = Boolean(val); }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Row Hover Effects",
    fieldMappings: "hoverable"
  })
  get hoverableConfig() { return this.hoverable; }
  set hoverableConfig(val: boolean) { this.hoverable = Boolean(val); }

  @RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: "On Row Click",
    eventTrigger: "row-click"
  })
  handleRowClick(rowIndex: number, rowData: any) {
    this.dispatchEvent(
      new CustomEvent("row-click", {
        detail: { index: rowIndex, data: rowData },
        bubbles: true,
        composed: true
      })
    );
  }

  private parseHeaders(): string[] {
    return this.headers
      .split(",")
      .map(h => h.trim())
      .filter(Boolean);
  }

  private parseRows(): any[][] {
    try {
      const data = JSON.parse(this.rows);
      if (!Array.isArray(data)) return [];

      return data.map(row => {
        if (Array.isArray(row)) {
          return row;
        } else if (typeof row === "object" && row !== null) {
          return Object.values(row);
        }
        return [String(row)];
      });
    } catch {
      return [];
    }
  }

  render() {
    const parsedHeaders = this.parseHeaders();
    const parsedRows = this.parseRows();

    const containerClasses = [
      "table-container",
      `variant-${this.variant}`,
      this.striped ? "striped" : "",
      this.bordered ? "bordered" : "",
      this.hoverable ? "hoverable" : ""
    ].join(" ");

    return html`
      <div class=${containerClasses}>
        <table>
          <thead>
            <tr>
              ${parsedHeaders.map(
                header => html`<th>${header}</th>`
              )}
            </tr>
          </thead>
          <tbody>
            ${parsedRows.map(
              (row, index) => html`
                <tr @click=${() => this.handleRowClick(index, row)}>
                  ${row.map(
                    cell => html`<td>${cell}</td>`
                  )}
                </tr>
              `
            )}
          </tbody>
        </table>
      </div>
    `;
  }
}
