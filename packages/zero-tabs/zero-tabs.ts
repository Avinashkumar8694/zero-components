// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

interface TabItem {
  label: string;
  value: string;
}

export const studioTemplate: ZeroStudioTemplate = {
  kind: "generic",
  templateHtml: [
    "<div style='font-family:inherit;box-sizing:border-box;'>",
    "<div style='display:flex;gap:24px;border-bottom:2px solid #e5e7eb;padding:0 4px;'>",
    "<span style='padding:10px 4px;font-size:14px;font-weight:600;color:#6366f1;border-bottom:2px solid #6366f1;margin-bottom:-2px;'>Overview</span>",
    "<span style='padding:10px 4px;font-size:14px;color:#6b7280;'>Details</span>",
    "<span style='padding:10px 4px;font-size:14px;color:#6b7280;'>Settings</span>",
    "</div>",
    "</div>"
  ].join(""),
  labelProp: "activeValue",
  badges: ["Navigation", "Interactive"],
};

function escapeStudio(value: string): string {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function safeParseTabs(raw: string | undefined, fallback: TabItem[]): TabItem[] {
  if (!raw) return fallback;
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed
        .map((t) => ({ label: String(t?.label ?? ""), value: String(t?.value ?? t?.label ?? "") }))
        .filter((t) => t.label !== "");
    }
    return fallback;
  } catch {
    return fallback;
  }
}

@RendererComponent({
  name: "zero-tabs",
  version: "1.0.0",
  title: "Tabs",
  elementSelector: "zero-tabs",
  group: "Navigation",
  iconName: "tabs-icon.png",
})
@applyGlobalStyles()
export class ZeroTabs extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) return studioTemplate;

    const variant = (config.props?.variant ?? config.studio?.props?.variant) || "underline";
    const fullWidth = !!(config.props?.fullWidth ?? config.studio?.props?.fullWidth);
    const tabs = safeParseTabs(config.props?.tabs ?? config.studio?.props?.tabs, [
      { label: "Overview", value: "overview" },
      { label: "Details", value: "details" },
      { label: "Settings", value: "settings" }
    ]);
    let active = (config.props?.activeValue ?? config.studio?.props?.activeValue) as string;
    if (!active && tabs.length) active = tabs[0].value;

    const p = "var(--uiv-primary-color, #6366f1)";
    const muted = "var(--uiv-text-muted, #6b7280)";
    const border = "var(--uiv-border-color, #e5e7eb)";

    const tabHtml = tabs
      .map((t) => {
        const isActive = t.value === active;
        const grow = fullWidth ? "flex:1;text-align:center;" : "";
        if (variant === "pills") {
          const bg = isActive ? p : "transparent";
          const color = isActive ? "#ffffff" : muted;
          return `<span style='${grow}padding:8px 16px;font-size:14px;font-weight:600;border-radius:999px;background:${bg};color:${color};'>${escapeStudio(t.label)}</span>`;
        }
        if (variant === "enclosed") {
          const bg = isActive ? "var(--uiv-surface-color, #ffffff)" : "transparent";
          const bd = isActive ? `1px solid ${border}` : "1px solid transparent";
          const color = isActive ? p : muted;
          return `<span style='${grow}padding:9px 16px;font-size:14px;font-weight:600;border:${bd};border-bottom:none;border-radius:8px 8px 0 0;background:${bg};color:${color};'>${escapeStudio(t.label)}</span>`;
        }
        const color = isActive ? p : muted;
        const bb = isActive ? `2px solid ${p}` : "2px solid transparent";
        return `<span style='${grow}padding:10px 4px;font-size:14px;font-weight:600;color:${color};border-bottom:${bb};margin-bottom:-2px;'>${escapeStudio(t.label)}</span>`;
      })
      .join("");

    const rowStyle =
      variant === "underline" || variant === "enclosed"
        ? `display:flex;gap:${variant === "enclosed" ? "4px" : "24px"};border-bottom:2px solid ${border};padding:0 4px;`
        : "display:flex;gap:8px;padding:4px;background:var(--uiv-bg-secondary, #f1f5f9);border-radius:999px;";

    return {
      ...studioTemplate,
      templateHtml: [
        "<div style='font-family:inherit;box-sizing:border-box;'>",
        `<div style='${rowStyle}'>${tabHtml}</div>`,
        "</div>"
      ].join(""),
    };
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
      --tab-p: var(--uiv-primary-color, #6366f1);
      --tab-muted: var(--uiv-text-muted, #6b7280);
      --tab-text: var(--uiv-text-color, #1f2937);
      --tab-border: var(--uiv-border-color, #e5e7eb);
      --tab-surface: var(--uiv-surface-color, #ffffff);
      --tab-track: var(--uiv-bg-secondary, #f1f5f9);
    }

    .tablist {
      display: flex;
      align-items: stretch;
      font-family: inherit;
      box-sizing: border-box;
    }
    .tablist.full-width .tab {
      flex: 1;
      justify-content: center;
    }

    .tab {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: none;
      border: none;
      font-family: inherit;
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--tab-muted);
      cursor: pointer;
      transition: all 0.2s ease;
      white-space: nowrap;
    }

    /* Underline variant */
    .tablist.variant-underline {
      gap: 24px;
      border-bottom: 2px solid var(--tab-border);
      padding: 0 4px;
    }
    .variant-underline .tab {
      padding: 10px 4px;
      border-bottom: 2px solid transparent;
      margin-bottom: -2px;
    }
    .variant-underline .tab:hover {
      color: var(--tab-text);
    }
    .variant-underline .tab.active {
      color: var(--tab-p);
      border-bottom-color: var(--tab-p);
    }

    /* Pills variant */
    .tablist.variant-pills {
      gap: 8px;
      padding: 4px;
      background: var(--tab-track);
      border-radius: 999px;
    }
    .variant-pills .tab {
      padding: 8px 16px;
      border-radius: 999px;
    }
    .variant-pills .tab:hover:not(.active) {
      color: var(--tab-text);
    }
    .variant-pills .tab.active {
      background: var(--tab-p);
      color: #ffffff;
      box-shadow: 0 2px 6px rgba(99, 102, 241, 0.25);
    }

    /* Enclosed variant */
    .tablist.variant-enclosed {
      gap: 4px;
      border-bottom: 2px solid var(--tab-border);
      padding: 0 4px;
    }
    .variant-enclosed .tab {
      padding: 9px 16px;
      border: 1px solid transparent;
      border-bottom: none;
      border-radius: 8px 8px 0 0;
      margin-bottom: -2px;
    }
    .variant-enclosed .tab:hover:not(.active) {
      color: var(--tab-text);
      background: var(--tab-track);
    }
    .variant-enclosed .tab.active {
      color: var(--tab-p);
      background: var(--tab-surface);
      border-color: var(--tab-border);
      border-bottom: 2px solid var(--tab-surface);
    }

    .panel {
      padding: 20px 4px;
      color: var(--tab-text);
      font-size: 0.9rem;
      line-height: 1.5;
    }
  `;

  @property({ type: String }) tabs =
    '[{"label":"Overview","value":"overview"},{"label":"Details","value":"details"},{"label":"Settings","value":"settings"}]';
  @property({ type: String, attribute: "active-value" }) activeValue = "";
  @property({ type: String }) variant = "underline";
  @property({ type: Boolean, attribute: "full-width" }) fullWidth = false;

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXTAREA,
    displayLabel: "Tabs (JSON array of {label, value})",
    fieldMappings: "tabs"
  })
  get tabsConfig() { return this.tabs; }
  set tabsConfig(val: string) { this.tabs = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Active Tab Value",
    fieldMappings: "activeValue"
  })
  get activeValueConfig() { return this.activeValue; }
  set activeValueConfig(val: string) { this.activeValue = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Variant Style",
    fieldMappings: "variant",
    optionItems: [
      { label: "Underline", value: "underline" },
      { label: "Pills", value: "pills" },
      { label: "Enclosed", value: "enclosed" }
    ]
  })
  get variantConfig() { return this.variant; }
  set variantConfig(val: string) { this.variant = val || "underline"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Full Width (stretch tabs)",
    fieldMappings: "fullWidth"
  })
  get fullWidthConfig() { return this.fullWidth; }
  set fullWidthConfig(val: boolean) { this.fullWidth = Boolean(val); }

  private parseTabs(): TabItem[] {
    return safeParseTabs(this.tabs, []);
  }

  private get resolvedActive(): string {
    const tabs = this.parseTabs();
    if (this.activeValue && tabs.some((t) => t.value === this.activeValue)) return this.activeValue;
    return tabs.length ? tabs[0].value : "";
  }

  @RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: "On Tab Change",
    eventTrigger: "on-tab-change"
  })
  handleTabChange(tab: TabItem) {
    this.activeValue = tab.value;
    this.dispatchEvent(
      new CustomEvent("on-tab-change", {
        detail: { value: tab.value, label: tab.label },
        bubbles: true,
        composed: true
      })
    );
  }

  render() {
    const tabs = this.parseTabs();
    const active = this.resolvedActive;
    return html`
      <div class="tablist variant-${this.variant} ${this.fullWidth ? "full-width" : ""}">
        ${tabs.map(
          (t) => html`
            <button
              class="tab ${t.value === active ? "active" : ""}"
              @click=${() => this.handleTabChange(t)}
            >
              ${t.label}
            </button>
          `
        )}
      </div>
      <div class="panel"><slot>${active ? `Panel: ${active}` : ""}</slot></div>
    `;
  }
}
