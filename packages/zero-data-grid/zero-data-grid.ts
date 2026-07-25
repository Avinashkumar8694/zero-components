// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property, state } from "lit/decorators.js";

// ─── Types ──────────────────────────────────────────────────────────────────

interface GridColumn {
  key: string;
  label?: string;
  sortable?: boolean;
  align?: "left" | "center" | "right";
}

interface RowAction {
  label: string;
  danger?: boolean;
}

// ─── Defaults ───────────────────────────────────────────────────────────────

const DEFAULT_COLUMNS: GridColumn[] = [
  { key: "name", label: "Name", sortable: true },
  { key: "created", label: "Created Date & Time" },
  { key: "status", label: "Status" },
];

const DEFAULT_ROWS: Record<string, any>[] = [
  { name: "Payments API Key", created: "24 Jul 2026, 10:24 AM", status: "Completed" },
  { name: "Analytics Token", created: "22 Jul 2026, 04:10 PM", status: "In Progress" },
  { name: "Staging Sandbox", created: "19 Jul 2026, 09:02 AM", status: "Draft" },
  { name: "Legacy Webhook", created: "12 Jul 2026, 06:45 PM", status: "Failed" },
];

const DEFAULT_FILTERS: string[] = ["Draft", "In Progress", "Completed", "Failed"];

const DEFAULT_ROW_ACTIONS: RowAction[] = [{ label: "Edit" }, { label: "Delete", danger: true }];

const DEFAULT_COLUMNS_JSON = JSON.stringify(DEFAULT_COLUMNS, null, 2);
const DEFAULT_ROWS_JSON = JSON.stringify(DEFAULT_ROWS, null, 2);
const DEFAULT_FILTERS_JSON = JSON.stringify(DEFAULT_FILTERS);
const DEFAULT_ROW_ACTIONS_JSON = JSON.stringify(DEFAULT_ROW_ACTIONS);

// ─── Parse helpers (accept a JSON string OR a live bound array/object) ────────

function coerceArray<T = any>(val: any, fallback: T[]): T[] {
  if (Array.isArray(val)) return val as T[];
  if (typeof val === "string") {
    const t = val.trim();
    if (!t) return fallback;
    try {
      const p = JSON.parse(t);
      return Array.isArray(p) ? (p as T[]) : fallback;
    } catch {
      return fallback;
    }
  }
  if (val && typeof val === "object") return [val as T];
  return fallback;
}

function cellToString(v: any): string {
  if (v === undefined || v === null) return "";
  if (typeof v === "object") {
    try { return JSON.stringify(v); } catch { return String(v); }
  }
  return String(v);
}

function escapeStudio(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Status pill palette (soft enterprise tones, light look).
const STATUS_STYLES: Record<string, { bg: string; fg: string }> = {
  completed: { bg: "#e6f7ef", fg: "#12855a" },
  active: { bg: "#e6f7ef", fg: "#12855a" },
  success: { bg: "#e6f7ef", fg: "#12855a" },
  "in progress": { bg: "#e8f0ff", fg: "#2f6bff" },
  processing: { bg: "#e8f0ff", fg: "#2f6bff" },
  pending: { bg: "#fff5e6", fg: "#b5720b" },
  draft: { bg: "#f0f2f5", fg: "#5b6572" },
  failed: { bg: "#fdecec", fg: "#d92d20" },
  error: { bg: "#fdecec", fg: "#d92d20" },
  revoked: { bg: "#fdecec", fg: "#d92d20" },
  inactive: { bg: "#f0f2f5", fg: "#5b6572" },
};

@RendererComponent({
  name: "zero-data-grid",
  version: "1.0.0",
  title: "Data Grid",
  elementSelector: "zero-data-grid",
  group: "Data Display",
  iconName: "data-grid-icon.png",
  layoutKind: "leaf",
})
@applyGlobalStyles()
export class ZeroDataGrid extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    const title = escapeStudio((config?.studio?.display?.title as string) || "All Tokens");
    return {
      kind: "generic",
      badges: ["Data Grid"],
      titleProp: "title",
      columnsProp: "columns",
      dataProp: "rows",
      emptyText: "",
      templateHtml: [
        "<div style='background:var(--uiv-surface-color,#ffffff);border:1px solid var(--uiv-border-color,#e5e9ef);border-radius:12px;padding:18px 20px;box-shadow:0 1px 3px rgba(16,24,40,0.06);font-family:inherit;box-sizing:border-box;'>",
        // header row
        "<div style='display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;'>",
        `<strong style='font-size:16px;color:var(--uiv-text-color,#1d2630);'>${title}</strong>`,
        "<span style='background:var(--uiv-primary-color,#4680ff);color:#ffffff;font-size:13px;font-weight:600;padding:8px 14px;border-radius:8px;'>+ Add</span>",
        "</div>",
        // toolbar
        "<div style='display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:14px;'>",
        "<span style='display:inline-flex;align-items:center;gap:8px;background:#f4f6f9;border:1px solid var(--uiv-border-color,#e5e9ef);border-radius:8px;padding:8px 12px;color:#8996a4;font-size:13px;min-width:180px;'>&#128269; Search</span>",
        "<span style='color:#8996a4;font-size:12px;'>1-4 of 4</span>",
        "</div>",
        // table
        "<table style='width:100%;border-collapse:collapse;font-size:13px;text-align:left;'>",
        "<thead><tr style='border-bottom:1px solid var(--uiv-border-color,#e5e9ef);'>",
        "<th style='padding:10px 12px;color:#8996a4;font-weight:600;'>Name</th>",
        "<th style='padding:10px 12px;color:#8996a4;font-weight:600;'>Created Date &amp; Time</th>",
        "<th style='padding:10px 12px;color:#8996a4;font-weight:600;'>Status</th>",
        "</tr></thead>",
        "<tbody>",
        "<tr style='border-bottom:1px solid #f0f2f5;'>",
        "<td style='padding:12px;color:var(--uiv-text-color,#1d2630);'>Payments API Key</td>",
        "<td style='padding:12px;color:#5b6572;'>24 Jul 2026, 10:24 AM</td>",
        "<td style='padding:12px;'><span style='background:#e6f7ef;color:#12855a;padding:3px 10px;border-radius:12px;font-size:12px;'>Completed</span></td>",
        "</tr>",
        "<tr>",
        "<td style='padding:12px;color:var(--uiv-text-color,#1d2630);'>Analytics Token</td>",
        "<td style='padding:12px;color:#5b6572;'>22 Jul 2026, 04:10 PM</td>",
        "<td style='padding:12px;'><span style='background:#e8f0ff;color:#2f6bff;padding:3px 10px;border-radius:12px;font-size:12px;'>In Progress</span></td>",
        "</tr>",
        "</tbody>",
        "</table>",
        "</div>",
      ].join(""),
    };
  }

  // Optional settings schema mirroring zero-stat-card style editors.
  static getSettingsSchema() {
    return [
      { name: "title", label: "Title", control: "text", group: "General", defaultValue: "All Tokens" },
      { name: "columns", label: "Columns (JSON)", control: "json", group: "Data", defaultValue: DEFAULT_COLUMNS_JSON },
      { name: "rows", label: "Rows (JSON)", control: "json", group: "Data", defaultValue: DEFAULT_ROWS_JSON },
      { name: "searchable", label: "Show Search", control: "boolean", group: "Toolbar", defaultValue: true },
      { name: "filters", label: "Filter Chips (JSON)", control: "json", group: "Toolbar", defaultValue: DEFAULT_FILTERS_JSON },
      { name: "showFilters", label: "Show Filter Chips", control: "boolean", group: "Toolbar", defaultValue: true },
      { name: "pageSize", label: "Rows Per Page", control: "number", group: "Pagination", defaultValue: 10 },
      { name: "selectable", label: "Selectable Rows", control: "boolean", group: "Rows", defaultValue: false },
      { name: "rowActions", label: "Row Actions (JSON)", control: "json", group: "Rows", defaultValue: DEFAULT_ROW_ACTIONS_JSON },
      { name: "addButtonText", label: "Add Button Text", control: "text", group: "Toolbar", defaultValue: "+ Add" },
    ];
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
      --dg-bg: var(--uiv-surface-color, #ffffff);
      --dg-text: var(--uiv-text-color, #1d2630);
      --dg-muted: var(--uiv-text-color-secondary, #8996a4);
      --dg-border: var(--uiv-border-color, #e5e9ef);
      --dg-primary: var(--uiv-primary-color, #4680ff);
      --dg-row-border: #f0f2f5;
      --dg-field-bg: #f4f6f9;
      --dg-danger: #d92d20;
      font-family: inherit;
      color: var(--dg-text);
      box-sizing: border-box;
    }
    * { box-sizing: border-box; }

    .grid {
      background: var(--dg-bg);
      border: 1px solid var(--dg-border);
      border-radius: 12px;
      padding: 18px 20px;
      box-shadow: 0 1px 3px rgba(16, 24, 40, 0.06);
    }

    .grid-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 14px;
    }
    .grid-title {
      font-size: 16px;
      font-weight: 700;
      color: var(--dg-text);
      margin: 0;
    }

    .add-btn {
      border: 0;
      background: var(--dg-primary);
      color: #ffffff;
      font: inherit;
      font-weight: 600;
      font-size: 13px;
      padding: 9px 16px;
      border-radius: 8px;
      cursor: pointer;
      transition: filter 0.15s ease, transform 0.15s ease;
      white-space: nowrap;
    }
    .add-btn:hover { filter: brightness(1.06); transform: translateY(-1px); }

    .toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;
      margin-bottom: 14px;
    }
    .toolbar-left {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
      min-width: 0;
    }
    .toolbar-right {
      display: flex;
      align-items: center;
      gap: 14px;
      flex-wrap: wrap;
      color: var(--dg-muted);
      font-size: 12px;
    }

    .search {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: var(--dg-field-bg);
      border: 1px solid var(--dg-border);
      border-radius: 8px;
      padding: 0 12px;
      height: 38px;
      min-width: 200px;
    }
    .search svg { flex: 0 0 auto; color: var(--dg-muted); }
    .search input {
      border: 0;
      outline: 0;
      background: transparent;
      font: inherit;
      font-size: 13px;
      color: var(--dg-text);
      width: 100%;
      padding: 0;
    }
    .search input::placeholder { color: var(--dg-muted); }

    .chips { display: inline-flex; align-items: center; gap: 8px; flex-wrap: wrap; }
    .chip {
      border: 1px solid var(--dg-border);
      background: var(--dg-bg);
      color: var(--dg-muted);
      font: inherit;
      font-size: 12px;
      font-weight: 500;
      padding: 6px 12px;
      border-radius: 16px;
      cursor: pointer;
      transition: all 0.15s ease;
      white-space: nowrap;
    }
    .chip:hover { border-color: var(--dg-primary); color: var(--dg-primary); }
    .chip.active {
      background: var(--dg-primary);
      border-color: var(--dg-primary);
      color: #ffffff;
    }

    .page-size {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      white-space: nowrap;
    }
    .pager { display: inline-flex; align-items: center; gap: 8px; }
    .pager .range { white-space: nowrap; }
    .pg-btn {
      border: 1px solid var(--dg-border);
      background: var(--dg-bg);
      color: var(--dg-text);
      width: 28px;
      height: 28px;
      border-radius: 7px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      line-height: 1;
      transition: all 0.15s ease;
    }
    .pg-btn:hover:not(:disabled) { border-color: var(--dg-primary); color: var(--dg-primary); }
    .pg-btn:disabled { opacity: 0.4; cursor: not-allowed; }

    .table-wrap { width: 100%; overflow-x: auto; }
    table { width: 100%; border-collapse: collapse; font-size: 13px; text-align: left; }

    thead th {
      color: var(--dg-muted);
      font-weight: 600;
      font-size: 12px;
      letter-spacing: 0.01em;
      text-transform: none;
      padding: 10px 12px;
      border-bottom: 1px solid var(--dg-border);
      white-space: nowrap;
      user-select: none;
    }
    th.sortable { cursor: pointer; }
    th.sortable:hover { color: var(--dg-text); }
    .sort-ind { font-size: 10px; margin-left: 4px; opacity: 0.85; }

    tbody td {
      padding: 12px;
      border-bottom: 1px solid var(--dg-row-border);
      color: var(--dg-text);
      vertical-align: middle;
    }
    tbody tr { transition: background 0.12s ease; }
    tbody tr.clickable { cursor: pointer; }
    tbody tr.clickable:hover { background: rgba(70, 128, 255, 0.04); }
    tbody tr:last-child td { border-bottom: 0; }

    .cell-muted { color: #5b6572; }

    .checkbox-cell { width: 40px; text-align: center; }
    input[type="checkbox"] {
      width: 16px;
      height: 16px;
      accent-color: var(--dg-primary);
      cursor: pointer;
      margin: 0;
      vertical-align: middle;
    }

    .status-pill {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 500;
      line-height: 1.4;
      background: #f0f2f5;
      color: #5b6572;
      white-space: nowrap;
    }

    .actions-cell { white-space: nowrap; text-align: right; }
    .row-action {
      border: 0;
      background: transparent;
      font: inherit;
      font-size: 13px;
      font-weight: 500;
      color: var(--dg-primary);
      cursor: pointer;
      padding: 4px 8px;
      border-radius: 6px;
      transition: background 0.15s ease;
    }
    .row-action:hover { background: rgba(70, 128, 255, 0.08); }
    .row-action.danger { color: var(--dg-danger); }
    .row-action.danger:hover { background: rgba(217, 45, 32, 0.08); }

    .empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 48px 16px;
      text-align: center;
      color: var(--dg-muted);
    }
    .empty-icon { font-size: 40px; line-height: 1; }
    .empty-text { font-size: 14px; }
  `;

  // ─── Data properties ───────────────────────────────────────────────────────

  @property({ attribute: "columns" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXTAREA,
    displayLabel: "Columns (JSON)",
    fieldMappings: "columns",
    categoryLabel: "Data",
    placeholderText: DEFAULT_COLUMNS_JSON,
    initialValue: DEFAULT_COLUMNS_JSON,
  })
  columns: any = DEFAULT_COLUMNS_JSON;

  @property({ attribute: "rows" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXTAREA,
    displayLabel: "Rows (JSON Data)",
    fieldMappings: "rows",
    categoryLabel: "Data",
    placeholderText: DEFAULT_ROWS_JSON,
    initialValue: DEFAULT_ROWS_JSON,
  })
  rows: any = DEFAULT_ROWS_JSON;

  // ─── General ────────────────────────────────────────────────────────────────

  @property({ type: String, attribute: "title" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Title",
    fieldMappings: "title",
    categoryLabel: "General",
    initialValue: "All Tokens",
  })
  title = "All Tokens";

  // ─── Toolbar ─────────────────────────────────────────────────────────────────

  @property({ type: Boolean, attribute: "searchable" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Show Search",
    fieldMappings: "searchable",
    categoryLabel: "Toolbar",
    initialValue: true,
  })
  searchable = true;

  @property({ type: String, attribute: "search-placeholder" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Search Placeholder",
    fieldMappings: "searchPlaceholder",
    categoryLabel: "Toolbar",
    initialValue: "Search",
  })
  searchPlaceholder = "Search";

  @property({ attribute: "filters" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXTAREA,
    displayLabel: "Filter Chips (JSON)",
    fieldMappings: "filters",
    categoryLabel: "Toolbar",
    placeholderText: DEFAULT_FILTERS_JSON,
    initialValue: DEFAULT_FILTERS_JSON,
  })
  filters: any = DEFAULT_FILTERS_JSON;

  @property({ type: Boolean, attribute: "show-filters" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Show Filter Chips",
    fieldMappings: "showFilters",
    categoryLabel: "Toolbar",
    initialValue: true,
  })
  showFilters = true;

  @property({ type: String, attribute: "add-button-text" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Add Button Text",
    fieldMappings: "addButtonText",
    categoryLabel: "Toolbar",
    initialValue: "+ Add",
  })
  addButtonText = "+ Add";

  @property({ type: Boolean, attribute: "show-add-button" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Show Add Button",
    fieldMappings: "showAddButton",
    categoryLabel: "Toolbar",
    initialValue: true,
  })
  showAddButton = true;

  // ─── Pagination ──────────────────────────────────────────────────────────────

  @property({ type: Number, attribute: "page-size" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Rows Per Page",
    fieldMappings: "pageSize",
    categoryLabel: "Pagination",
    initialValue: 10,
  })
  pageSize = 10;

  @property({ type: Boolean, attribute: "show-pagination" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Show Pagination",
    fieldMappings: "showPagination",
    categoryLabel: "Pagination",
    initialValue: true,
  })
  showPagination = true;

  // ─── Rows behaviour ──────────────────────────────────────────────────────────

  @property({ type: Boolean, attribute: "selectable" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Selectable Rows (checkbox column)",
    fieldMappings: "selectable",
    categoryLabel: "Rows",
    initialValue: false,
  })
  selectable = false;

  @property({ attribute: "row-actions" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXTAREA,
    displayLabel: "Row Actions (JSON)",
    fieldMappings: "rowActions",
    categoryLabel: "Rows",
    placeholderText: DEFAULT_ROW_ACTIONS_JSON,
    initialValue: DEFAULT_ROW_ACTIONS_JSON,
  })
  rowActions: any = DEFAULT_ROW_ACTIONS_JSON;

  // ─── Empty state ─────────────────────────────────────────────────────────────

  @property({ type: String, attribute: "empty-text" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Empty State Text",
    fieldMappings: "emptyText",
    categoryLabel: "Empty State",
    initialValue: "No records found",
  })
  emptyText = "No records found";

  @property({ type: String, attribute: "empty-icon" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Empty State Icon (emoji)",
    fieldMappings: "emptyIcon",
    categoryLabel: "Empty State",
    initialValue: "📭",
  })
  emptyIcon = "📭";

  // ─── Internal UI state ───────────────────────────────────────────────────────

  @state() private _query = "";
  @state() private _activeFilters: string[] = [];
  @state() private _page = 1;
  @state() private _sortKey = "";
  @state() private _sortDir: "asc" | "desc" = "asc";
  @state() private _selected = new Set<any>();

  // ─── Events (declared for the studio via ACTION/EVENT metadata) ──────────────

  @RendererAttribute({ attributeType: AttributeType.EVENT, displayLabel: "On Add", eventTrigger: "add" })
  private emitAdd() {
    this.dispatchEvent(new CustomEvent("add", { bubbles: true, composed: true }));
  }

  @RendererAttribute({ attributeType: AttributeType.EVENT, displayLabel: "On Row Action", eventTrigger: "rowaction" })
  private emitRowAction(action: RowAction, row: any) {
    this.dispatchEvent(new CustomEvent("rowaction", { detail: { action, row }, bubbles: true, composed: true }));
  }

  @RendererAttribute({ attributeType: AttributeType.EVENT, displayLabel: "On Row Click", eventTrigger: "rowclick" })
  private emitRowClick(row: any) {
    this.dispatchEvent(new CustomEvent("rowclick", { detail: { row }, bubbles: true, composed: true }));
  }

  @RendererAttribute({ attributeType: AttributeType.EVENT, displayLabel: "On Selection Change", eventTrigger: "selectionchange" })
  private emitSelectionChange() {
    this.dispatchEvent(new CustomEvent("selectionchange", { detail: { rows: [...this._selected] }, bubbles: true, composed: true }));
  }

  @RendererAttribute({ attributeType: AttributeType.EVENT, displayLabel: "On Search", eventTrigger: "search" })
  private emitSearch(query: string) {
    this.dispatchEvent(new CustomEvent("search", { detail: { query }, bubbles: true, composed: true }));
  }

  @RendererAttribute({ attributeType: AttributeType.EVENT, displayLabel: "On Filter Change", eventTrigger: "filterchange" })
  private emitFilterChange() {
    this.dispatchEvent(new CustomEvent("filterchange", { detail: { filters: [...this._activeFilters] }, bubbles: true, composed: true }));
  }

  @RendererAttribute({ attributeType: AttributeType.EVENT, displayLabel: "On Sort Change", eventTrigger: "sortchange" })
  private emitSortChange(key: string, dir: string) {
    this.dispatchEvent(new CustomEvent("sortchange", { detail: { key, dir }, bubbles: true, composed: true }));
  }

  @RendererAttribute({ attributeType: AttributeType.EVENT, displayLabel: "On Page Change", eventTrigger: "pagechange" })
  private emitPageChange(page: number) {
    this.dispatchEvent(new CustomEvent("pagechange", { detail: { page }, bubbles: true, composed: true }));
  }

  // ─── Derived data ────────────────────────────────────────────────────────────

  private getColumns(): GridColumn[] {
    return coerceArray<GridColumn>(this.columns, DEFAULT_COLUMNS).filter((c) => c && typeof c.key === "string");
  }

  private getAllRows(): Record<string, any>[] {
    return coerceArray<Record<string, any>>(this.rows, []);
  }

  private getFilterLabels(): string[] {
    return coerceArray<string>(this.filters, []).map((f) => String(f));
  }

  private getRowActions(): RowAction[] {
    return coerceArray<RowAction>(this.rowActions, []).filter((a) => a && typeof a.label === "string");
  }

  private matchesSearch(row: Record<string, any>, cols: GridColumn[]): boolean {
    const q = this._query.trim().toLowerCase();
    if (!q) return true;
    return cols.some((c) => cellToString(row[c.key]).toLowerCase().includes(q));
  }

  private matchesFilters(row: Record<string, any>): boolean {
    if (!this._activeFilters.length) return true;
    const wanted = this._activeFilters.map((f) => f.toLowerCase());
    // Row passes if any of its cell values matches an active filter label.
    return Object.keys(row).some((k) => wanted.includes(cellToString(row[k]).toLowerCase()));
  }

  private getFilteredRows(): Record<string, any>[] {
    const cols = this.getColumns();
    let out = this.getAllRows().filter((r) => this.matchesSearch(r, cols) && this.matchesFilters(r));

    if (this._sortKey) {
      const dir = this._sortDir === "desc" ? -1 : 1;
      out = [...out].sort((a, b) => {
        const av = a[this._sortKey];
        const bv = b[this._sortKey];
        const an = typeof av === "number" ? av : parseFloat(av);
        const bn = typeof bv === "number" ? bv : parseFloat(bv);
        if (!Number.isNaN(an) && !Number.isNaN(bn) && String(av).trim() !== "" && String(bv).trim() !== "") {
          return (an - bn) * dir;
        }
        return cellToString(av).localeCompare(cellToString(bv)) * dir;
      });
    }
    return out;
  }

  private getPageSize(): number {
    const n = Number(this.pageSize);
    return Number.isFinite(n) && n > 0 ? Math.floor(n) : 10;
  }

  // ─── Handlers ────────────────────────────────────────────────────────────────

  private onSearchInput(e: Event) {
    this._query = (e.target as HTMLInputElement).value;
    this._page = 1;
    this.emitSearch(this._query);
  }

  private toggleFilter(label: string) {
    const idx = this._activeFilters.indexOf(label);
    this._activeFilters = idx >= 0
      ? this._activeFilters.filter((f) => f !== label)
      : [...this._activeFilters, label];
    this._page = 1;
    this.emitFilterChange();
  }

  private toggleSort(col: GridColumn) {
    if (!col.sortable) return;
    if (this._sortKey === col.key) {
      this._sortDir = this._sortDir === "asc" ? "desc" : "asc";
    } else {
      this._sortKey = col.key;
      this._sortDir = "asc";
    }
    this.emitSortChange(this._sortKey, this._sortDir);
  }

  private goToPage(page: number, totalPages: number) {
    const next = Math.min(Math.max(1, page), Math.max(1, totalPages));
    if (next === this._page) return;
    this._page = next;
    this.emitPageChange(this._page);
  }

  private toggleRowSelection(row: any, checked: boolean) {
    if (checked) this._selected.add(row);
    else this._selected.delete(row);
    this._selected = new Set(this._selected);
    this.emitSelectionChange();
  }

  private toggleSelectAll(pageRows: any[], checked: boolean) {
    const next = new Set(this._selected);
    if (checked) pageRows.forEach((r) => next.add(r));
    else pageRows.forEach((r) => next.delete(r));
    this._selected = next;
    this.emitSelectionChange();
  }

  private onRowClick(row: any, e: Event) {
    // Ignore clicks that originated from an interactive control in the row.
    const path = e.composedPath();
    if (path.some((el: any) => el instanceof HTMLElement && (el.tagName === "BUTTON" || el.tagName === "INPUT"))) return;
    this.emitRowClick(row);
  }

  private onActionClick(action: RowAction, row: any, e: Event) {
    e.stopPropagation();
    this.emitRowAction(action, row);
  }

  private onAddClick() {
    this.emitAdd();
  }

  // ─── Cell rendering ──────────────────────────────────────────────────────────

  private renderCell(row: Record<string, any>, col: GridColumn) {
    const raw = row[col.key];
    if (raw === undefined || raw === null || raw === "") return html`<span class="cell-muted">-</span>`;

    if (col.key === "status") {
      const styles = STATUS_STYLES[String(raw).toLowerCase()];
      const style = styles ? `background:${styles.bg};color:${styles.fg};` : "";
      return html`<span class="status-pill" style=${style}>${cellToString(raw)}</span>`;
    }
    return html`${cellToString(raw)}`;
  }

  // ─── Render ──────────────────────────────────────────────────────────────────

  render() {
    const cols = this.getColumns();
    const rowActions = this.getRowActions();
    const filtered = this.getFilteredRows();
    const total = filtered.length;

    const pageSize = this.getPageSize();
    const totalPages = this.showPagination ? Math.max(1, Math.ceil(total / pageSize)) : 1;
    const page = Math.min(this._page, totalPages);
    const start = total === 0 ? 0 : (page - 1) * pageSize;
    const pageRows = this.showPagination ? filtered.slice(start, start + pageSize) : filtered;

    const rangeStart = total === 0 ? 0 : start + 1;
    const rangeEnd = total === 0 ? 0 : start + pageRows.length;

    const filterLabels = this.getFilterLabels();
    const showFilterChips = this.showFilters && filterLabels.length > 0;

    const colSpan = cols.length + (this.selectable ? 1 : 0) + (rowActions.length ? 1 : 0);
    const allPageSelected = pageRows.length > 0 && pageRows.every((r) => this._selected.has(r));

    return html`
      <div class="grid">
        <div class="grid-head">
          <h3 class="grid-title">${this.title}</h3>
          ${this.showAddButton
            ? html`<button class="add-btn" type="button" @click=${this.onAddClick}>${this.addButtonText}</button>`
            : ""}
        </div>

        <div class="toolbar">
          <div class="toolbar-left">
            ${this.searchable
              ? html`
                  <label class="search">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"></circle>
                      <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round"></line>
                    </svg>
                    <input
                      type="text"
                      .value=${this._query}
                      placeholder=${this.searchPlaceholder}
                      @input=${this.onSearchInput}
                    />
                  </label>
                `
              : ""}
            ${showFilterChips
              ? html`<div class="chips">
                  ${filterLabels.map(
                    (f) => html`<button
                      type="button"
                      class="chip ${this._activeFilters.includes(f) ? "active" : ""}"
                      @click=${() => this.toggleFilter(f)}
                    >${f}</button>`
                  )}
                </div>`
              : ""}
          </div>

          ${this.showPagination
            ? html`<div class="toolbar-right">
                <span class="page-size">Show by ${pageSize} Rows</span>
                <div class="pager">
                  <span class="range">${rangeStart}-${rangeEnd} of ${total}</span>
                  <button
                    class="pg-btn"
                    type="button"
                    ?disabled=${page <= 1}
                    @click=${() => this.goToPage(page - 1, totalPages)}
                    aria-label="Previous page"
                  >‹</button>
                  <button
                    class="pg-btn"
                    type="button"
                    ?disabled=${page >= totalPages}
                    @click=${() => this.goToPage(page + 1, totalPages)}
                    aria-label="Next page"
                  >›</button>
                </div>
              </div>`
            : ""}
        </div>

        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                ${this.selectable
                  ? html`<th class="checkbox-cell">
                      <input
                        type="checkbox"
                        .checked=${allPageSelected}
                        @change=${(e: Event) => this.toggleSelectAll(pageRows, (e.target as HTMLInputElement).checked)}
                        aria-label="Select all rows"
                      />
                    </th>`
                  : ""}
                ${cols.map((c) => {
                  const active = this._sortKey === c.key;
                  const indicator = c.sortable ? (active ? (this._sortDir === "asc" ? "▲" : "▼") : "⇅") : "";
                  const align = c.align ? `text-align:${c.align};` : "";
                  return html`<th
                    class=${c.sortable ? "sortable" : ""}
                    style=${align}
                    @click=${() => this.toggleSort(c)}
                  >${c.label ?? c.key}${indicator ? html`<span class="sort-ind">${indicator}</span>` : ""}</th>`;
                })}
                ${rowActions.length ? html`<th class="actions-cell">Actions</th>` : ""}
              </tr>
            </thead>
            <tbody>
              ${pageRows.length === 0
                ? html`<tr>
                    <td colspan=${colSpan}>
                      <div class="empty">
                        ${this.emptyIcon ? html`<div class="empty-icon">${this.emptyIcon}</div>` : ""}
                        <div class="empty-text">${this.emptyText}</div>
                      </div>
                    </td>
                  </tr>`
                : pageRows.map(
                    (row) => html`<tr class="clickable" @click=${(e: Event) => this.onRowClick(row, e)}>
                      ${this.selectable
                        ? html`<td class="checkbox-cell">
                            <input
                              type="checkbox"
                              .checked=${this._selected.has(row)}
                              @change=${(e: Event) => this.toggleRowSelection(row, (e.target as HTMLInputElement).checked)}
                              aria-label="Select row"
                            />
                          </td>`
                        : ""}
                      ${cols.map((c) => {
                        const align = c.align ? `text-align:${c.align};` : "";
                        return html`<td style=${align}>${this.renderCell(row, c)}</td>`;
                      })}
                      ${rowActions.length
                        ? html`<td class="actions-cell">
                            ${rowActions.map(
                              (a) => html`<button
                                type="button"
                                class="row-action ${a.danger ? "danger" : ""}"
                                @click=${(e: Event) => this.onActionClick(a, row, e)}
                              >${a.label}</button>`
                            )}
                          </td>`
                        : ""}
                    </tr>`
                  )}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
}
