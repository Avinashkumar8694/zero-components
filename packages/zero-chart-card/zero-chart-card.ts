// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html, svg } from "lit";
import { property } from "lit/decorators.js";

@RendererComponent({
  name: "zero-chart-card",
  version: "1.0.0",
  title: "Chart Card",
  elementSelector: "zero-chart-card",
  group: "Dashboard",
  iconName: "chart-card-icon.png",
  layoutKind: "leaf",
})
@applyGlobalStyles()
export class ZeroChartCard extends LitElement {
  static getStudioTemplate(_config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    return {
      kind: "generic",
      templateHtml: [
        "<div style='background:var(--uiv-surface-color,#ffffff);border:1px solid var(--uiv-border-color,#e5e9ef);border-radius:10px;padding:20px;box-shadow:0 1px 3px rgba(16,24,40,0.06);font-family:inherit;'>",
        "<div style='display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;'>",
        "<span style='font-size:15px;font-weight:600;color:var(--uiv-text-color,#1d2630);'>{{display:title}}</span>",
        "<span style='font-size:12px;font-weight:600;color:#12b76a;background:rgba(18,183,106,0.12);padding:3px 8px;border-radius:6px;'>30.6%</span>",
        "</div>",
        "<svg viewBox='0 0 320 120' width='100%' height='120' preserveAspectRatio='none'>",
        "<line x1='0' y1='30' x2='320' y2='30' stroke='#eef1f6' stroke-width='1'/>",
        "<line x1='0' y1='60' x2='320' y2='60' stroke='#eef1f6' stroke-width='1'/>",
        "<line x1='0' y1='90' x2='320' y2='90' stroke='#eef1f6' stroke-width='1'/>",
        "<path d='M0,120 L0,80 L40,60 L80,72 L120,40 L160,56 L200,28 L240,48 L280,24 L320,36 L320,120 Z' fill='rgba(70,128,255,0.15)'/>",
        "<polyline points='0,80 40,60 80,72 120,40 160,56 200,28 240,48 280,24 320,36' fill='none' stroke='#4680ff' stroke-width='2'/>",
        "</svg>",
        "</div>"
      ].join(""),
      badges: ["Chart Card"],
      titleProp: "title",
      emptyText: "",
    };
  }

  static styles = css`
    :host {
      display: block;
      --cc-bg: var(--uiv-surface-color, #ffffff);
      --cc-text: var(--uiv-text-color, #1d2630);
      --cc-muted: var(--uiv-text-color-secondary, #8996a4);
      --cc-border: var(--uiv-border-color, #e5e9ef);
      --cc-primary: var(--uiv-primary-color, #4680ff);
    }
    .chart-card {
      background: var(--cc-bg);
      border: 1px solid var(--cc-border);
      border-radius: 10px;
      padding: 20px;
      box-sizing: border-box;
      box-shadow: 0 1px 3px rgba(16, 24, 40, 0.06);
      font-family: inherit;
    }
    .head {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 14px;
    }
    .title {
      font-size: 15px;
      font-weight: 600;
      color: var(--cc-text);
    }
    .value {
      font-size: 20px;
      font-weight: 700;
      color: var(--cc-text);
      margin-top: 2px;
    }
    .badge {
      font-size: 12px;
      font-weight: 600;
      color: #12b76a;
      background: rgba(18, 183, 106, 0.12);
      padding: 3px 8px;
      border-radius: 6px;
      white-space: nowrap;
    }
    .chart {
      display: block;
      width: 100%;
      height: 120px;
    }
    .grid-line { stroke: #eef1f6; stroke-width: 1; }
  `;

  @property({ type: String }) title = "Repeat customer rate";
  @property({ type: String }) value = "$3,020";
  @property({ type: String, attribute: "change-percent" }) changePercent = "30.6%";
  @property({ type: String, attribute: "chart-data" }) chartData = "30,45,35,55,40,65,50,70,60,80";
  @property({ type: String, attribute: "chart-color" }) chartColor = "#4680ff";
  @property({ type: String, attribute: "chart-type" }) chartType = "area";

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Title",
    fieldMappings: "title",
    initialValue: "Repeat customer rate"
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
    displayLabel: "Change Percent",
    fieldMappings: "changePercent",
    initialValue: "30.6%"
  })
  get changePercentConfig() { return this.changePercent; }
  set changePercentConfig(val: string) { this.changePercent = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Chart Data (comma separated)",
    fieldMappings: "chartData",
    initialValue: "30,45,35,55,40,65,50,70,60,80"
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
    initialValue: "area",
    optionItems: [
      { label: "Line", value: "line" },
      { label: "Area", value: "area" },
      { label: "Bar", value: "bar" }
    ]
  })
  get chartTypeConfig() { return this.chartType; }
  set chartTypeConfig(val: string) { this.chartType = val || "area"; }

  private parseData(): number[] {
    return String(this.chartData || "")
      .split(",")
      .map((s) => Number(s.trim()))
      .filter((n) => !Number.isNaN(n));
  }

  private renderGrid(w: number, h: number) {
    const rows = [0.25, 0.5, 0.75];
    return svg`${rows.map((r) => {
      const y = (h * r).toFixed(1);
      return svg`<line class="grid-line" x1="0" y1=${y} x2=${w} y2=${y}></line>`;
    })}`;
  }

  private renderSeries(w: number, h: number) {
    const data = this.parseData();
    if (!data.length) return svg``;
    const color = this.chartColor || "#4680ff";
    const pad = 4;
    const n = data.length;
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min || 1;

    if (this.chartType === "bar") {
      const barMax = Math.max(...data, 0) || 1;
      const gap = 6;
      const barW = Math.max(1, (w - gap * (n - 1)) / n);
      return svg`${data.map((d, i) => {
        const barH = Math.max(2, (Math.max(0, d) / barMax) * (h - pad * 2));
        const x = i * (barW + gap);
        const y = h - barH;
        return svg`<rect x=${x.toFixed(1)} y=${y.toFixed(1)} width=${barW.toFixed(1)} height=${barH.toFixed(1)} rx="2" fill=${color}></rect>`;
      })}`;
    }

    const step = n > 1 ? w / (n - 1) : 0;
    const coords = data.map((d, i) => {
      const x = i * step;
      const y = pad + (1 - (d - min) / range) * (h - pad * 2);
      return [x, y] as [number, number];
    });
    const linePoints = coords.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");

    if (this.chartType === "area") {
      const first = coords[0];
      const last = coords[coords.length - 1];
      const areaPath =
        `M${first[0].toFixed(1)},${h} ` +
        `L${first[0].toFixed(1)},${first[1].toFixed(1)} ` +
        coords.map(([x, y]) => `L${x.toFixed(1)},${y.toFixed(1)}`).join(" ") +
        ` L${last[0].toFixed(1)},${h} Z`;
      return svg`
        <path d=${areaPath} fill=${color} fill-opacity="0.15"></path>
        <polyline points=${linePoints} fill="none" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></polyline>
      `;
    }

    // line
    return svg`<polyline points=${linePoints} fill="none" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></polyline>`;
  }

  render() {
    const w = 320;
    const h = 120;
    return html`
      <div class="chart-card">
        <div class="head">
          <div>
            <div class="title">${this.title}</div>
            ${this.value ? html`<div class="value">${this.value}</div>` : ""}
          </div>
          ${this.changePercent ? html`<span class="badge">${this.changePercent}</span>` : ""}
        </div>
        <svg class="chart" viewBox="0 0 ${w} ${h}" width="100%" height="120" preserveAspectRatio="none">
          ${this.renderGrid(w, h)}
          ${this.renderSeries(w, h)}
        </svg>
      </div>
    `;
  }
}
