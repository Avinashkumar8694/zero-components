// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

interface CrumbItem {
  label: string;
  href?: string;
}

export const studioTemplate: ZeroStudioTemplate = {
  kind: "generic",
  templateHtml: [
    "<div style='display:flex;align-items:center;gap:8px;font-family:inherit;font-size:14px;box-sizing:border-box;'>",
    "<span style='color:#6b7280;'>Home</span>",
    "<span style='color:#9ca3af;'>/</span>",
    "<span style='color:#6b7280;'>Library</span>",
    "<span style='color:#9ca3af;'>/</span>",
    "<span style='color:#111827;font-weight:600;'>Data</span>",
    "</div>"
  ].join(""),
  labelProp: "separator",
  badges: ["Navigation"],
};

function escapeStudio(value: string): string {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function safeParseItems(raw: string | undefined, fallback: CrumbItem[]): CrumbItem[] {
  if (!raw) return fallback;
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed
        .map((i) => ({ label: String(i?.label ?? ""), href: i?.href ? String(i.href) : undefined }))
        .filter((i) => i.label !== "");
    }
    return fallback;
  } catch {
    return fallback;
  }
}

@RendererComponent({
  name: "zero-breadcrumb",
  version: "1.0.0",
  title: "Breadcrumb",
  elementSelector: "zero-breadcrumb",
  group: "Navigation",
  iconName: "breadcrumb-icon.png",
})
@applyGlobalStyles()
export class ZeroBreadcrumb extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) return studioTemplate;

    const separator = escapeStudio(config.props?.separator ?? config.studio?.props?.separator ?? "/");
    const variant = (config.props?.variant ?? config.studio?.props?.variant) || "default";
    const items = safeParseItems(config.props?.items ?? config.studio?.props?.items, [
      { label: "Home", href: "#" },
      { label: "Library", href: "#" },
      { label: "Data" }
    ]);

    const muted = "var(--uiv-text-muted, #6b7280)";
    const text = "var(--uiv-text-color, #111827)";
    const p = "var(--uiv-primary-color, #6366f1)";
    const track = "var(--uiv-bg-secondary, #f1f5f9)";

    const parts: string[] = [];
    items.forEach((it, idx) => {
      const isLast = idx === items.length - 1;
      const color = isLast ? text : muted;
      const weight = isLast ? "600" : "400";
      let crumb: string;
      if (variant === "chips") {
        const bg = isLast ? p : track;
        const c = isLast ? "#ffffff" : muted;
        crumb = `<span style='padding:4px 12px;border-radius:999px;background:${bg};color:${c};font-weight:${weight};font-size:13px;'>${escapeStudio(it.label)}</span>`;
      } else if (variant === "underline") {
        const deco = isLast ? "none" : "underline";
        crumb = `<span style='color:${color};font-weight:${weight};text-decoration:${deco};'>${escapeStudio(it.label)}</span>`;
      } else {
        crumb = `<span style='color:${color};font-weight:${weight};'>${escapeStudio(it.label)}</span>`;
      }
      parts.push(crumb);
      if (!isLast && variant !== "chips") {
        parts.push(`<span style='color:var(--uiv-text-tertiary, #9ca3af);'>${separator}</span>`);
      } else if (!isLast && variant === "chips") {
        parts.push(`<span style='color:var(--uiv-text-tertiary, #9ca3af);'>${separator}</span>`);
      }
    });

    return {
      ...studioTemplate,
      templateHtml: [
        "<div style='display:flex;align-items:center;gap:8px;font-family:inherit;font-size:14px;box-sizing:border-box;flex-wrap:wrap;'>",
        parts.join(""),
        "</div>"
      ].join(""),
    };
  }

  static styles = css`
    :host {
      display: block;
      --bc-p: var(--uiv-primary-color, #6366f1);
      --bc-muted: var(--uiv-text-muted, #6b7280);
      --bc-text: var(--uiv-text-color, #111827);
      --bc-sep: var(--uiv-text-tertiary, #9ca3af);
      --bc-track: var(--uiv-bg-secondary, #f1f5f9);
    }

    nav {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
      font-family: inherit;
      font-size: 0.875rem;
      box-sizing: border-box;
    }

    .crumb {
      background: none;
      border: none;
      font-family: inherit;
      font-size: 0.875rem;
      color: var(--bc-muted);
      cursor: pointer;
      padding: 2px 0;
      transition: color 0.2s ease;
      text-decoration: none;
    }
    .crumb:hover:not(.current) {
      color: var(--bc-p);
    }
    .crumb.current {
      color: var(--bc-text);
      font-weight: 600;
      cursor: default;
    }

    .sep {
      color: var(--bc-sep);
      user-select: none;
    }

    /* Chips variant */
    .variant-chips .crumb {
      padding: 4px 12px;
      border-radius: 999px;
      background: var(--bc-track);
      color: var(--bc-muted);
      font-weight: 500;
    }
    .variant-chips .crumb:hover:not(.current) {
      background: var(--uiv-bg-tertiary, #e2e8f0);
      color: var(--bc-text);
    }
    .variant-chips .crumb.current {
      background: var(--bc-p);
      color: #ffffff;
    }

    /* Underline variant */
    .variant-underline .crumb:not(.current) {
      text-decoration: underline;
      text-underline-offset: 2px;
    }
  `;

  @property({ type: String }) items =
    '[{"label":"Home","href":"#"},{"label":"Library","href":"#"},{"label":"Data"}]';
  @property({ type: String }) separator = "/";
  @property({ type: String }) variant = "default";

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXTAREA,
    displayLabel: "Items (JSON array of {label, href})",
    fieldMappings: "items"
  })
  get itemsConfig() { return this.items; }
  set itemsConfig(val: string) { this.items = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Separator",
    fieldMappings: "separator"
  })
  get separatorConfig() { return this.separator; }
  set separatorConfig(val: string) { this.separator = val || "/"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Variant Style",
    fieldMappings: "variant",
    optionItems: [
      { label: "Default", value: "default" },
      { label: "Chips", value: "chips" },
      { label: "Underline", value: "underline" }
    ]
  })
  get variantConfig() { return this.variant; }
  set variantConfig(val: string) { this.variant = val || "default"; }

  private parseItems(): CrumbItem[] {
    return safeParseItems(this.items, []);
  }

  @RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: "On Item Click",
    eventTrigger: "on-item-click"
  })
  handleItemClick(item: CrumbItem, index: number, e: Event) {
    e.preventDefault();
    this.dispatchEvent(
      new CustomEvent("on-item-click", {
        detail: { label: item.label, href: item.href ?? "", index },
        bubbles: true,
        composed: true
      })
    );
  }

  render() {
    const items = this.parseItems();
    return html`
      <nav class="variant-${this.variant}" aria-label="Breadcrumb">
        ${items.map((it, idx) => {
          const isLast = idx === items.length - 1;
          return html`
            <button
              class="crumb ${isLast ? "current" : ""}"
              aria-current=${isLast ? "page" : "false"}
              @click=${(e: Event) => (isLast ? undefined : this.handleItemClick(it, idx, e))}
            >
              ${it.label}
            </button>
            ${isLast ? "" : html`<span class="sep">${this.separator}</span>`}
          `;
        })}
      </nav>
    `;
  }
}
