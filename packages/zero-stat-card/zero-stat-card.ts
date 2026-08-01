// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html, svg } from "lit";
import { property } from "lit/decorators.js";

@RendererComponent({
  name: "zero-stat-card",
  version: "1.0.0",
  title: "Stat Card",
  elementSelector: "zero-stat-card",
  group: "Dashboard",
  iconName: "stat-card-icon.png",
  layoutKind: "leaf",
})
@applyGlobalStyles()
export class ZeroStatCard extends LitElement {
  static getStudioTemplate(_config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    return {
      kind: "generic",
      templateHtml: [
        "<div style='background:var(--uiv-surface-color,#ffffff);border:1px solid var(--uiv-border-color,#e5e9ef);border-radius:10px;padding:18px 20px;box-shadow:0 1px 3px rgba(16,24,40,0.06);font-family:inherit;'>",
        "<div style='display:flex;align-items:center;justify-content:space-between;'>",
        "<div style='display:flex;align-items:center;gap:8px;'>",
        "<span style='font-size:18px;line-height:1;'>&#128176;</span>",
        "<span style='font-size:13px;color:var(--uiv-text-color-secondary,#8996a4);'>{{display:title}}</span>",
        "</div>",
        "<span style='color:#8996a4;font-weight:700;'>&#8942;</span>",
        "</div>",
        "<div style='font-size:24px;font-weight:700;color:var(--uiv-text-primary,var(--uiv-text-color,#1d2630));margin:10px 0 8px;'>$3,020</div>",
        "<svg viewBox='0 0 120 40' width='100%' height='40' preserveAspectRatio='none'>",
        "<rect x='2' y='20' width='12' height='18' rx='1.5' fill='#4680ff'/>",
        "<rect x='19' y='8' width='12' height='30' rx='1.5' fill='#4680ff'/>",
        "<rect x='36' y='14' width='12' height='24' rx='1.5' fill='#4680ff'/>",
        "<rect x='53' y='4' width='12' height='34' rx='1.5' fill='#4680ff'/>",
        "<rect x='70' y='16' width='12' height='22' rx='1.5' fill='#4680ff'/>",
        "<rect x='87' y='2' width='12' height='36' rx='1.5' fill='#4680ff'/>",
        "<rect x='104' y='12' width='12' height='26' rx='1.5' fill='#4680ff'/>",
        "</svg>",
        "<div style='color:#12b76a;font-size:12px;font-weight:600;margin-top:8px;'>&#9650; 30.6%</div>",
        "</div>"
      ].join(""),
      badges: ["Stat Card"],
      titleProp: "title",
      emptyText: "",
    };
  }

  static styles = css`
    :host {
      display: block;
      --sc-bg: var(--uiv-surface-color, #ffffff);
      --sc-text: var(--uiv-text-primary, var(--uiv-text-color, #1d2630));
      --sc-muted: var(--uiv-text-color-secondary, #8996a4);
      --sc-border: var(--uiv-border-color, #e5e9ef);
      --sc-primary: var(--uiv-primary-color, #4680ff);
    }
    .stat-card {
      background: var(--sc-bg);
      border: 1px solid var(--sc-border);
      border-radius: 10px;
      padding: 18px 20px;
      box-sizing: border-box;
      box-shadow: 0 1px 3px rgba(16, 24, 40, 0.06);
      font-family: inherit;
    }
    .top-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .title-group {
      display: flex;
      align-items: center;
      gap: 8px;
      min-width: 0;
    }
    .icon {
      font-size: 18px;
      line-height: 1;
    }
    .title {
      font-size: 13px;
      color: var(--sc-muted);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .menu {
      color: var(--sc-muted);
      font-weight: 700;
      cursor: pointer;
      line-height: 1;
    }
    .value {
      font-size: 24px;
      font-weight: 700;
      /* Explicit dark fallback so the primary value never fades to an
         inherited low-contrast color when the theme token chain is empty. */
      color: var(--sc-text, #1d2630);
      margin: 10px 0 8px;
    }
    .chart {
      display: block;
      width: 100%;
      height: 40px;
    }
    .change {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 12px;
      font-weight: 600;
      margin-top: 8px;
    }
    .change.up { color: #12b76a; }
    .change.down { color: #f04438; }
  `;

  @property({ type: String }) title = "Total Revenue";
  @property({ type: String }) value = "$3,020";
  @property({ type: String }) icon = "💰";
  @property({ type: String, attribute: "change-percent" }) changePercent = "30.6%";
  @property({ type: String, attribute: "change-direction" }) changeDirection = "up";
  @property({ type: String, attribute: "chart-data" }) chartData = "4,8,6,10,7,12,9";
  @property({ type: String, attribute: "chart-color" }) chartColor = "#4680ff";
  @property({ type: String, attribute: "chart-type" }) chartType = "bar";

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Title",
    fieldMappings: "title",
    initialValue: "Total Revenue"
  })
  get titleConfig() { return this.title; }
  set titleConfig(val: string) { this.title = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Value",
    fieldMappings: "value",
    initialValue: "$3,020"
  })
  get valueConfig() { return this.value; }
  set valueConfig(val: string) { this.value = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Icon (emoji / char)",
    fieldMappings: "icon",
    initialValue: "💰"
  })
  get iconConfig() { return this.icon; }
  set iconConfig(val: string) { this.icon = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Change Percent",
    fieldMappings: "changePercent",
    initialValue: "30.6%"
  })
  get changePercentConfig() { return this.changePercent; }
  set changePercentConfig(val: string) { this.changePercent = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Change Direction",
    fieldMappings: "changeDirection",
    initialValue: "up",
    optionItems: [
      { label: "Up", value: "up" },
      { label: "Down", value: "down" }
    ]
  })
  get changeDirectionConfig() { return this.changeDirection; }
  set changeDirectionConfig(val: string) { this.changeDirection = val || "up"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Chart Data (comma separated)",
    fieldMappings: "chartData",
    initialValue: "4,8,6,10,7,12,9"
  })
  get chartDataConfig() { return this.chartData; }
  set chartDataConfig(val: string) { this.chartData = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: "Chart Color",
    fieldMappings: "chartColor",
    initialValue: "#4680ff"
  })
  get chartColorConfig() { return this.chartColor; }
  set chartColorConfig(val: string) { this.chartColor = val || "#4680ff"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Chart Type",
    fieldMappings: "chartType",
    initialValue: "bar",
    optionItems: [
      { label: "Bar", value: "bar" },
      { label: "Line", value: "line" }
    ]
  })
  get chartTypeConfig() { return this.chartType; }
  set chartTypeConfig(val: string) { this.chartType = val || "bar"; }

  private parseData(): number[] {
    return String(this.chartData || "")
      .split(",")
      .map((s) => Number(s.trim()))
      .filter((n) => !Number.isNaN(n));
  }

  private renderChart() {
    const data = this.parseData();
    if (!data.length) return svg``;
    const w = 120;
    const h = 40;
    const pad = 2;
    const color = this.chartColor || "#4680ff";

    if (this.chartType === "line") {
      const max = Math.max(...data);
      const min = Math.min(...data);
      const range = max - min || 1;
      const n = data.length;
      const step = n > 1 ? (w - pad * 2) / (n - 1) : 0;
      const points = data
        .map((d, i) => {
          const x = pad + i * step;
          const y = h - pad - ((d - min) / range) * (h - pad * 2);
          return `${x.toFixed(1)},${y.toFixed(1)}`;
        })
        .join(" ");
      return svg`<polyline points=${points} fill="none" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></polyline>`;
    }

    // bar chart (0-based scale)
    const max = Math.max(...data, 0) || 1;
    const n = data.length;
    const gap = 3;
    const barW = Math.max(1, (w - pad * 2 - gap * (n - 1)) / n);
    return svg`${data.map((d, i) => {
      const barH = Math.max(2, (Math.max(0, d) / max) * (h - pad * 2));
      const x = pad + i * (barW + gap);
      const y = h - pad - barH;
      return svg`<rect x=${x.toFixed(1)} y=${y.toFixed(1)} width=${barW.toFixed(1)} height=${barH.toFixed(1)} rx="1.5" fill=${color}></rect>`;
    })}`;
  }

  render() {
    const dir = this.changeDirection === "down" ? "down" : "up";
    const arrow = dir === "down" ? "▼" : "▲";
    return html`
      <div class="stat-card">
        <div class="top-row">
          <div class="title-group">
            <span class="icon">${this.icon}</span>
            <span class="title">${this.title}</span>
          </div>
          <span class="menu">⋮</span>
        </div>
        <div class="value">${this.value}</div>
        <svg class="chart" viewBox="0 0 120 40" width="100%" height="40" preserveAspectRatio="none">
          ${this.renderChart()}
        </svg>
        ${this.changePercent
          ? html`<div class="change ${dir}">${arrow} ${this.changePercent}</div>`
          : ""}
      </div>
    `;
  }
}
