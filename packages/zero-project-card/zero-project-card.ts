// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

interface ProjectItem {
  label: string;
  percent: number;
  color?: string;
}

const DEFAULT_ITEMS: ProjectItem[] = [
  { label: "Release v1.2.0", percent: 70, color: "#4680ff" },
  { label: "Design system", percent: 45, color: "#12b76a" },
  { label: "API integration", percent: 88, color: "#7c4dff" },
  { label: "QA & testing", percent: 30, color: "#f5a623" },
];

const DEFAULT_ITEMS_JSON = JSON.stringify(DEFAULT_ITEMS);

@RendererComponent({
  name: "zero-project-card",
  version: "1.0.0",
  title: "Project Card",
  elementSelector: "zero-project-card",
  group: "Dashboard",
  iconName: "project-card-icon.png",
  layoutKind: "leaf",
})
@applyGlobalStyles()
export class ZeroProjectCard extends LitElement {
  static getStudioTemplate(_config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    const row = (label: string, percent: number, color: string) =>
      [
        "<div style='margin-bottom:14px;'>",
        "<div style='display:flex;justify-content:space-between;font-size:13px;color:var(--uiv-text-color,#1d2630);margin-bottom:6px;'>",
        `<span>${label}</span><span style='color:var(--uiv-text-color-secondary,#8996a4);'>${percent}%</span>`,
        "</div>",
        "<div style='height:6px;border-radius:6px;background:#eef1f6;overflow:hidden;'>",
        `<div style='height:100%;width:${percent}%;background:${color};border-radius:6px;'></div>`,
        "</div>",
        "</div>",
      ].join("");
    return {
      kind: "generic",
      templateHtml: [
        "<div style='background:var(--uiv-surface-color,#ffffff);border:1px solid var(--uiv-border-color,#e5e9ef);border-radius:10px;padding:20px;box-shadow:0 1px 3px rgba(16,24,40,0.06);font-family:inherit;'>",
        "<div style='font-size:15px;font-weight:600;color:var(--uiv-text-color,#1d2630);margin-bottom:16px;'>{{display:title}}</div>",
        row("Release v1.2.0", 70, "#4680ff"),
        row("Design system", 45, "#12b76a"),
        row("API integration", 88, "#7c4dff"),
        "</div>",
      ].join(""),
      badges: ["Project Card"],
      titleProp: "title",
      emptyText: "",
    };
  }

  static styles = css`
    :host {
      display: block;
      --pc-bg: var(--uiv-surface-color, #ffffff);
      --pc-text: var(--uiv-text-color, #1d2630);
      --pc-muted: var(--uiv-text-color-secondary, #8996a4);
      --pc-border: var(--uiv-border-color, #e5e9ef);
      --pc-track: #eef1f6;
    }
    .project-card {
      background: var(--pc-bg);
      border: 1px solid var(--pc-border);
      border-radius: 10px;
      padding: 20px;
      box-sizing: border-box;
      box-shadow: 0 1px 3px rgba(16, 24, 40, 0.06);
      font-family: inherit;
    }
    .title {
      font-size: 15px;
      font-weight: 600;
      color: var(--pc-text);
      margin: 0 0 16px;
    }
    .item {
      margin-bottom: 14px;
    }
    .item:last-child {
      margin-bottom: 0;
    }
    .item-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      font-size: 13px;
      color: var(--pc-text);
      margin-bottom: 6px;
    }
    .item-label {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .item-percent {
      color: var(--pc-muted);
      font-weight: 600;
      flex: 0 0 auto;
    }
    .track {
      height: 6px;
      border-radius: 6px;
      background: var(--pc-track);
      overflow: hidden;
    }
    .fill {
      height: 100%;
      border-radius: 6px;
      transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
  `;

  @property({ type: String }) title = "Project - Able Pro";
  @property({ type: String }) items = DEFAULT_ITEMS_JSON;

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Title",
    fieldMappings: "title",
    initialValue: "Project - Able Pro"
  })
  get titleConfig() { return this.title; }
  set titleConfig(val: string) { this.title = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXTAREA,
    displayLabel: "Items (JSON array)",
    fieldMappings: "items",
    initialValue: DEFAULT_ITEMS_JSON
  })
  get itemsConfig() { return this.items; }
  set itemsConfig(val: string) { this.items = val; }

  private parseItems(): ProjectItem[] {
    const raw = this.items;
    if (Array.isArray(raw)) return raw as ProjectItem[];
    if (typeof raw === "string" && raw.trim()) {
      try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed as ProjectItem[];
      } catch {
        return DEFAULT_ITEMS;
      }
    }
    return DEFAULT_ITEMS;
  }

  render() {
    const items = this.parseItems();
    return html`
      <div class="project-card">
        ${this.title ? html`<h3 class="title">${this.title}</h3>` : ""}
        ${items.map((item) => {
          const percent = Math.max(0, Math.min(100, Number(item?.percent) || 0));
          const color = item?.color || "#4680ff";
          return html`
            <div class="item">
              <div class="item-head">
                <span class="item-label">${item?.label ?? ""}</span>
                <span class="item-percent">${percent}%</span>
              </div>
              <div class="track">
                <div class="fill" style="width: ${percent}%; background: ${color}"></div>
              </div>
            </div>
          `;
        })}
      </div>
    `;
  }
}
