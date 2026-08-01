// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

interface ListItem {
  title: string;
  subtitle?: string;
  icon?: string;
  meta?: string;
}

const DEFAULT_ITEMS: ListItem[] = [
  { title: "Inbox", subtitle: "12 new messages", icon: "✉", meta: "2m" },
  { title: "Drafts", subtitle: "3 unsent", icon: "✎", meta: "1h" },
  { title: "Archive", subtitle: "All caught up", icon: "🗂", meta: "3d" },
];

const DEFAULT_ITEMS_JSON = JSON.stringify(DEFAULT_ITEMS);

export const studioTemplate: ZeroStudioTemplate = {
  kind: "generic",
  templateHtml: [
    "<div style='width:280px;font-family:inherit;box-sizing:border-box;background:#ffffff;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;'>",
    "<div style='display:flex;align-items:center;gap:12px;padding:12px 14px;border-bottom:1px solid #f1f5f9;'><span style='font-size:18px;'>✉</span><div style='flex:1;'><div style='font-size:14px;font-weight:600;color:#1f2937;'>Inbox</div><div style='font-size:12px;color:#6b7280;'>12 new messages</div></div><span style='font-size:12px;color:#9ca3af;'>2m</span></div>",
    "<div style='display:flex;align-items:center;gap:12px;padding:12px 14px;border-bottom:1px solid #f1f5f9;'><span style='font-size:18px;'>✎</span><div style='flex:1;'><div style='font-size:14px;font-weight:600;color:#1f2937;'>Drafts</div><div style='font-size:12px;color:#6b7280;'>3 unsent</div></div><span style='font-size:12px;color:#9ca3af;'>1h</span></div>",
    "<div style='display:flex;align-items:center;gap:12px;padding:12px 14px;'><span style='font-size:18px;'>🗂</span><div style='flex:1;'><div style='font-size:14px;font-weight:600;color:#1f2937;'>Archive</div><div style='font-size:12px;color:#6b7280;'>All caught up</div></div><span style='font-size:12px;color:#9ca3af;'>3d</span></div>",
    "</div>"
  ].join(""),
  labelProp: "items",
  badges: ["Data Display", "List"],
};

function escapeStudio(value: string): string {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Tolerant parser: accepts an already-parsed array/object OR a JSON string.
function parseItems(raw: unknown, fallback: ListItem[]): ListItem[] {
  let data: unknown = raw;
  if (typeof raw === "string") {
    const trimmed = raw.trim();
    if (!trimmed) return fallback;
    try {
      data = JSON.parse(trimmed);
    } catch {
      return fallback;
    }
  }
  if (!Array.isArray(data)) {
    return fallback;
  }
  const cleaned = data
    .map((it) => {
      if (typeof it === "string") return { title: it } as ListItem;
      if (it && typeof it === "object") {
        const o = it as Record<string, unknown>;
        const title = typeof o.title === "string" ? o.title : o.title != null ? String(o.title) : "";
        if (!title) return null;
        return {
          title,
          subtitle: typeof o.subtitle === "string" ? o.subtitle : undefined,
          icon: typeof o.icon === "string" ? o.icon : undefined,
          meta: typeof o.meta === "string" ? o.meta : undefined,
        } as ListItem;
      }
      return null;
    })
    .filter(Boolean) as ListItem[];
  return cleaned.length ? cleaned : fallback;
}

@RendererComponent({
  name: "zero-list",
  version: "1.0.0",
  title: "List",
  elementSelector: "zero-list",
  group: "Data Display",
  iconName: "list-icon.png",
})
@applyGlobalStyles()
export class ZeroList extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) return studioTemplate;

    const items = parseItems(config.props?.items ?? config.studio?.props?.items, DEFAULT_ITEMS);
    const variant = (config.props?.variant ?? config.studio?.props?.variant) || "default";
    const showIcons = config.props?.showIcons ?? config.studio?.props?.showIcons ?? true;

    const surface = "var(--uiv-surface-color, #ffffff)";
    const border = "var(--uiv-border-color, #e5e7eb)";
    const divider = "var(--uiv-bg-secondary, #f1f5f9)";
    const text = "var(--uiv-text-color, #1f2937)";
    const muted = "var(--uiv-text-muted, #6b7280)";
    const tertiary = "var(--uiv-text-tertiary, #9ca3af)";
    const radius = "var(--uiv-border-radius, 10px)";

    const wrapStyle =
      variant === "bordered"
        ? `background:${surface};border:1px solid ${border};border-radius:${radius};overflow:hidden;`
        : `background:${surface};`;

    const rows = items.map((it, i) => {
      const isLast = i === items.length - 1;
      const rowBorder = variant === "divided" || variant === "bordered" ? (isLast ? "" : `border-bottom:1px solid ${divider};`) : "";
      const iconHtml = showIcons && it.icon ? `<span style='font-size:18px;flex:none;line-height:1;'>${escapeStudio(it.icon)}</span>` : "";
      const subtitleHtml = it.subtitle ? `<div style='font-size:12px;color:${muted};'>${escapeStudio(it.subtitle)}</div>` : "";
      const metaHtml = it.meta ? `<span style='font-size:12px;color:${tertiary};flex:none;'>${escapeStudio(it.meta)}</span>` : "";
      return `<div style='display:flex;align-items:center;gap:12px;padding:12px 14px;${rowBorder}'>${iconHtml}<div style='flex:1;min-width:0;'><div style='font-size:14px;font-weight:600;color:${text};'>${escapeStudio(it.title)}</div>${subtitleHtml}</div>${metaHtml}</div>`;
    });

    return {
      ...studioTemplate,
      templateHtml: [
        `<div style='width:280px;font-family:inherit;box-sizing:border-box;${wrapStyle}'>`,
        rows.join(""),
        "</div>"
      ].join(""),
    };
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
      --ls-surface: var(--uiv-surface-color, #ffffff);
      --ls-border: var(--uiv-border-color, #e5e7eb);
      --ls-divider: var(--uiv-bg-secondary, #f1f5f9);
      --ls-text: var(--uiv-text-color, #1f2937);
      --ls-muted: var(--uiv-text-muted, #6b7280);
      --ls-tertiary: var(--uiv-text-tertiary, #9ca3af);
      --ls-hover: var(--uiv-bg-tertiary, rgba(99, 102, 241, 0.08));
      --ls-radius: var(--uiv-border-radius, 10px);
    }

    .list {
      font-family: inherit;
      box-sizing: border-box;
      background: var(--ls-surface);
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .list.bordered {
      border: 1px solid var(--ls-border);
      border-radius: var(--ls-radius);
      overflow: hidden;
    }

    .item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 14px;
      transition: background 0.15s ease;
    }
    .list.divided .item:not(:last-child),
    .list.bordered .item:not(:last-child) {
      border-bottom: 1px solid var(--ls-divider);
    }
    .list.interactive .item {
      cursor: pointer;
    }
    .list.interactive .item:hover {
      background: var(--ls-hover);
    }

    .icon {
      flex: none;
      font-size: 18px;
      line-height: 1;
    }
    .body {
      flex: 1;
      min-width: 0;
    }
    .title {
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--ls-text);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .subtitle {
      font-size: 0.75rem;
      color: var(--ls-muted);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .meta {
      flex: none;
      font-size: 0.75rem;
      color: var(--ls-tertiary);
    }
  `;

  @property({ attribute: false }) items: ListItem[] = DEFAULT_ITEMS;
  @property({ type: String }) variant = "default";
  @property({ type: Boolean, attribute: "show-icons" }) showIcons = true;
  @property({ type: Boolean }) interactive = true;

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXTAREA,
    displayLabel: "Items (JSON array of {title, subtitle, icon, meta})",
    fieldMappings: "items"
  })
  get itemsConfig() {
    return JSON.stringify(this.items);
  }
  // Tolerant setter: accepts BOTH an already-parsed array/object AND a JSON string.
  set itemsConfig(val: unknown) {
    this.items = parseItems(val, DEFAULT_ITEMS);
  }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Variant",
    fieldMappings: "variant",
    optionItems: [
      { label: "Default", value: "default" },
      { label: "Bordered", value: "bordered" },
      { label: "Divided", value: "divided" }
    ]
  })
  get variantConfig() { return this.variant; }
  set variantConfig(val: string) { this.variant = val || "default"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Show Icons",
    fieldMappings: "showIcons"
  })
  get showIconsConfig() { return this.showIcons; }
  set showIconsConfig(val: boolean) { this.showIcons = Boolean(val); }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Interactive (hover + pointer)",
    fieldMappings: "interactive"
  })
  get interactiveConfig() { return this.interactive; }
  set interactiveConfig(val: boolean) { this.interactive = Boolean(val); }

  @RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: "On Item Click",
    eventTrigger: "on-item-click"
  })
  handleItemClick(index: number, item: ListItem) {
    this.dispatchEvent(
      new CustomEvent("on-item-click", {
        detail: { index, item },
        bubbles: true,
        composed: true
      })
    );
  }

  render() {
    const items = Array.isArray(this.items) ? this.items : DEFAULT_ITEMS;
    return html`
      <ul class="list ${this.variant} ${this.interactive ? "interactive" : ""}" role="list">
        ${items.map(
          (it, i) => html`
            <li
              class="item"
              role="listitem"
              @click=${() => this.interactive && this.handleItemClick(i, it)}
            >
              ${this.showIcons && it.icon ? html`<span class="icon">${it.icon}</span>` : ""}
              <div class="body">
                <div class="title">${it.title}</div>
                ${it.subtitle ? html`<div class="subtitle">${it.subtitle}</div>` : ""}
              </div>
              ${it.meta ? html`<span class="meta">${it.meta}</span>` : ""}
            </li>
          `
        )}
      </ul>
    `;
  }
}
