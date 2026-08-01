// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

type PageItem = number | "ellipsis";

export const studioTemplate: ZeroStudioTemplate = {
  kind: "generic",
  templateHtml: [
    "<div style='display:inline-flex;align-items:center;gap:6px;font-family:inherit;box-sizing:border-box;'>",
    "<span style='display:inline-flex;align-items:center;justify-content:center;min-width:34px;height:34px;padding:0 8px;border-radius:8px;border:1px solid #e5e7eb;color:#4b5563;font-size:13px;'>‹</span>",
    "<span style='display:inline-flex;align-items:center;justify-content:center;min-width:34px;height:34px;border-radius:8px;background:#6366f1;color:#fff;font-size:13px;font-weight:600;'>1</span>",
    "<span style='display:inline-flex;align-items:center;justify-content:center;min-width:34px;height:34px;border-radius:8px;border:1px solid #e5e7eb;color:#4b5563;font-size:13px;'>2</span>",
    "<span style='display:inline-flex;align-items:center;justify-content:center;min-width:34px;height:34px;border-radius:8px;border:1px solid #e5e7eb;color:#4b5563;font-size:13px;'>3</span>",
    "<span style='display:inline-flex;align-items:center;justify-content:center;min-width:34px;height:34px;padding:0 8px;border-radius:8px;border:1px solid #e5e7eb;color:#4b5563;font-size:13px;'>›</span>",
    "</div>"
  ].join(""),
  labelProp: "currentPage",
  badges: ["Navigation", "Pagination"],
};

function computePages(total: number, current: number, siblings: number): PageItem[] {
  const t = Math.max(1, Math.floor(total) || 1);
  const c = Math.min(Math.max(1, Math.floor(current) || 1), t);
  const sib = Math.max(0, Math.floor(siblings) || 0);

  // Collect the anchor pages: first, last, and the window around current.
  const anchors = new Set<number>();
  anchors.add(1);
  anchors.add(t);
  for (let p = c - sib; p <= c + sib; p++) {
    if (p >= 1 && p <= t) anchors.add(p);
  }

  const sorted = [...anchors].sort((a, b) => a - b);
  const items: PageItem[] = [];
  for (let i = 0; i < sorted.length; i++) {
    items.push(sorted[i]);
    if (i < sorted.length - 1) {
      const gap = sorted[i + 1] - sorted[i];
      if (gap === 2) {
        // single missing page — reveal it instead of an ellipsis
        items.push(sorted[i] + 1);
      } else if (gap > 2) {
        items.push("ellipsis");
      }
    }
  }
  return items;
}

@RendererComponent({
  name: "zero-pagination",
  version: "1.0.0",
  title: "Pagination",
  elementSelector: "zero-pagination",
  group: "Navigation",
  iconName: "pagination-icon.png",
})
@applyGlobalStyles()
export class ZeroPagination extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) return studioTemplate;

    const totalPages = Number(config.props?.totalPages ?? config.studio?.props?.totalPages ?? 5);
    const currentPage = Number(config.props?.currentPage ?? config.studio?.props?.currentPage ?? 1);
    const variant = (config.props?.variant ?? config.studio?.props?.variant) || "default";
    const showFirstLast = config.props?.showFirstLast ?? config.studio?.props?.showFirstLast ?? false;
    const siblingCount = Number(config.props?.siblingCount ?? config.studio?.props?.siblingCount ?? 1);

    const radius = variant === "rounded" ? "999px" : "var(--uiv-border-radius, 8px)";
    const border = variant === "minimal" ? "1px solid transparent" : "1px solid var(--uiv-border-color, #e5e7eb)";
    const pages = computePages(totalPages, currentPage, siblingCount);
    const cur = Math.min(Math.max(1, Math.floor(currentPage) || 1), Math.max(1, Math.floor(totalPages) || 1));

    const cell = (inner: string, active: boolean, muted = false) =>
      `<span style='display:inline-flex;align-items:center;justify-content:center;min-width:34px;height:34px;padding:0 8px;border-radius:${radius};border:${active ? "1px solid transparent" : border};background:${active ? "var(--uiv-primary-color, #6366f1)" : "transparent"};color:${active ? "#ffffff" : muted ? "var(--uiv-text-tertiary, #9ca3af)" : "var(--uiv-text-muted, #4b5563)"};font-size:13px;font-weight:${active ? "600" : "500"};box-sizing:border-box;'>${inner}</span>`;

    const firstLastHtml = showFirstLast ? cell("«", false) : "";
    const numbersHtml = pages
      .map((p) => (p === "ellipsis" ? cell("…", false, true) : cell(String(p), p === cur)))
      .join("");

    return {
      ...studioTemplate,
      templateHtml: [
        "<div style='display:inline-flex;align-items:center;gap:6px;font-family:inherit;box-sizing:border-box;'>",
        firstLastHtml,
        cell("‹", false),
        numbersHtml,
        cell("›", false),
        showFirstLast ? cell("»", false) : "",
        "</div>"
      ].join(""),
    };
  }

  static styles = css`
    :host {
      display: inline-block;
      --pg-primary: var(--uiv-primary-color, #6366f1);
      --pg-border: var(--uiv-border-color, #e5e7eb);
      --pg-text: var(--uiv-text-color, #1f2937);
      --pg-muted: var(--uiv-text-muted, #4b5563);
      --pg-tertiary: var(--uiv-text-tertiary, #9ca3af);
      --pg-radius: var(--uiv-border-radius, 8px);
    }

    .pagination {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: inherit;
      box-sizing: border-box;
    }

    button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 34px;
      height: 34px;
      padding: 0 8px;
      border: 1px solid var(--pg-border);
      background: transparent;
      color: var(--pg-muted);
      font-family: inherit;
      font-size: 0.8125rem;
      font-weight: 500;
      cursor: pointer;
      border-radius: var(--pg-radius);
      box-sizing: border-box;
      transition: all 0.18s ease;
    }
    button:hover:not(:disabled):not(.active) {
      border-color: var(--pg-primary);
      color: var(--pg-primary);
      transform: translateY(-1px);
    }
    button:disabled {
      opacity: 0.45;
      cursor: not-allowed;
    }
    button.active {
      background: var(--pg-primary);
      color: #ffffff;
      border-color: transparent;
      font-weight: 600;
      box-shadow: 0 2px 6px rgba(99, 102, 241, 0.28);
    }

    .ellipsis {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 34px;
      height: 34px;
      color: var(--pg-tertiary);
      font-size: 0.8125rem;
      user-select: none;
    }

    /* variants */
    :host([variant="rounded"]) button { border-radius: 999px; }
    :host([variant="minimal"]) button { border-color: transparent; }
    :host([variant="minimal"]) button:hover:not(:disabled):not(.active) {
      background: rgba(99, 102, 241, 0.08);
      border-color: transparent;
    }
  `;

  @property({ type: Number, attribute: "total-pages" }) totalPages = 5;
  @property({ type: Number, attribute: "current-page" }) currentPage = 1;
  @property({ type: String, reflect: true }) variant = "default";
  @property({ type: Boolean, attribute: "show-first-last" }) showFirstLast = false;
  @property({ type: Number, attribute: "sibling-count" }) siblingCount = 1;

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Total Pages",
    fieldMappings: "totalPages"
  })
  get totalPagesConfig() { return this.totalPages; }
  set totalPagesConfig(val: number) { this.totalPages = Math.max(1, Number(val) || 1); }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Current Page",
    fieldMappings: "currentPage"
  })
  get currentPageConfig() { return this.currentPage; }
  set currentPageConfig(val: number) { this.currentPage = Math.max(1, Number(val) || 1); }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Variant Style",
    fieldMappings: "variant",
    optionItems: [
      { label: "Default", value: "default" },
      { label: "Rounded", value: "rounded" },
      { label: "Minimal", value: "minimal" }
    ]
  })
  get variantConfig() { return this.variant; }
  set variantConfig(val: string) { this.variant = val || "default"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Show First / Last",
    fieldMappings: "showFirstLast"
  })
  get showFirstLastConfig() { return this.showFirstLast; }
  set showFirstLastConfig(val: boolean) { this.showFirstLast = Boolean(val); }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Sibling Count",
    fieldMappings: "siblingCount"
  })
  get siblingCountConfig() { return this.siblingCount; }
  set siblingCountConfig(val: number) { this.siblingCount = Math.max(0, Number(val) || 0); }

  @RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: "On Page Change",
    eventTrigger: "on-page-change"
  })
  handlePageChange(page: number) {
    const total = Math.max(1, Math.floor(this.totalPages) || 1);
    const next = Math.min(Math.max(1, Math.floor(page)), total);
    if (next === this.currentPage) return;
    this.currentPage = next;
    this.dispatchEvent(
      new CustomEvent("on-page-change", {
        detail: { page: next, totalPages: total },
        bubbles: true,
        composed: true
      })
    );
  }

  render() {
    const total = Math.max(1, Math.floor(this.totalPages) || 1);
    const cur = Math.min(Math.max(1, Math.floor(this.currentPage) || 1), total);
    const pages = computePages(total, cur, this.siblingCount);

    return html`
      <div class="pagination" role="navigation" aria-label="Pagination">
        ${this.showFirstLast
          ? html`<button
              ?disabled=${cur <= 1}
              aria-label="First page"
              @click=${() => this.handlePageChange(1)}
            >«</button>`
          : ""}
        <button
          ?disabled=${cur <= 1}
          aria-label="Previous page"
          @click=${() => this.handlePageChange(cur - 1)}
        >‹</button>
        ${pages.map((p, i) =>
          p === "ellipsis"
            ? html`<span class="ellipsis" aria-hidden="true">…</span>`
            : html`<button
                class=${p === cur ? "active" : ""}
                aria-current=${p === cur ? "page" : "false"}
                @click=${() => this.handlePageChange(p as number)}
              >${p}</button>`
        )}
        <button
          ?disabled=${cur >= total}
          aria-label="Next page"
          @click=${() => this.handlePageChange(cur + 1)}
        >›</button>
        ${this.showFirstLast
          ? html`<button
              ?disabled=${cur >= total}
              aria-label="Last page"
              @click=${() => this.handlePageChange(total)}
            >»</button>`
          : ""}
      </div>
    `;
  }
}
