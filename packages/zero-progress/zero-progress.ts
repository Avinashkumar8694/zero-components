// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

const COLOR_ACCENT: Record<string, string> = {
  primary: "var(--uiv-primary-color, #6366f1)",
  success: "var(--uiv-color-success, #10b981)",
  warning: "var(--uiv-color-warning, #f59e0b)",
  error: "var(--uiv-color-danger, #ef4444)",
};

function pct(value: number, max: number): number {
  const m = Number(max) || 100;
  if (m <= 0) return 0;
  return Math.min(100, Math.max(0, (Number(value) || 0) / m * 100));
}

export const studioTemplate: ZeroStudioTemplate = {
  kind: "generic",
  templateHtml: [
    "<div style='width:220px;font-family:inherit;box-sizing:border-box;'>",
    "<div style='width:100%;height:10px;border-radius:999px;background:rgba(99,102,241,0.14);overflow:hidden;'>",
    "<div style='width:65%;height:100%;border-radius:999px;background:#6366f1;'></div>",
    "</div>",
    "</div>"
  ].join(""),
  labelProp: "value",
  badges: ["Feedback", "Progress"],
};

@RendererComponent({
  name: "zero-progress",
  version: "1.0.0",
  title: "Progress",
  elementSelector: "zero-progress",
  group: "Feedback",
  iconName: "progress-icon.png",
})
@applyGlobalStyles()
export class ZeroProgress extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) return studioTemplate;

    const value = Number(config.props?.value ?? config.studio?.props?.value ?? 65);
    const max = Number(config.props?.max ?? config.studio?.props?.max ?? 100);
    const variant = (config.props?.variant ?? config.studio?.props?.variant) || "linear";
    const color = (config.props?.color ?? config.studio?.props?.color) || "primary";
    const showLabel = config.props?.showLabel ?? config.studio?.props?.showLabel ?? false;
    const striped = config.props?.striped ?? config.studio?.props?.striped ?? false;
    const size = Number(config.props?.size ?? config.studio?.props?.size ?? 12);

    const accent = COLOR_ACCENT[color] || COLOR_ACCENT.primary;
    const tint = "var(--uiv-bg-tertiary, rgba(99,102,241,0.14))";
    const p = pct(value, max);
    const labelTxt = `${Math.round(p)}%`;

    if (variant === "circular") {
      const dia = Math.max(size, 40);
      const stroke = Math.max(4, Math.round(dia * 0.11));
      const r = (dia - stroke) / 2;
      const circ = 2 * Math.PI * r;
      const offset = circ * (1 - p / 100);
      return {
        ...studioTemplate,
        templateHtml: [
          `<div style='display:inline-flex;position:relative;align-items:center;justify-content:center;width:${dia}px;height:${dia}px;font-family:inherit;box-sizing:border-box;'>`,
          `<svg width='${dia}' height='${dia}' viewBox='0 0 ${dia} ${dia}' style='transform:rotate(-90deg);'>`,
          `<circle cx='${dia / 2}' cy='${dia / 2}' r='${r}' fill='none' stroke='${tint}' stroke-width='${stroke}'/>`,
          `<circle cx='${dia / 2}' cy='${dia / 2}' r='${r}' fill='none' stroke='${accent}' stroke-width='${stroke}' stroke-linecap='round' stroke-dasharray='${circ}' stroke-dashoffset='${offset}'/>`,
          "</svg>",
          showLabel
            ? `<span style='position:absolute;font-size:${Math.max(10, Math.round(dia * 0.22))}px;font-weight:600;color:var(--uiv-text-color, #1f2937);'>${labelTxt}</span>`
            : "",
          "</div>"
        ].join(""),
      };
    }

    const h = Math.max(4, size);
    const stripedBg = striped
      ? "background-image:linear-gradient(45deg,rgba(255,255,255,0.25) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.25) 50%,rgba(255,255,255,0.25) 75%,transparent 75%,transparent);background-size:1rem 1rem;"
      : "";

    return {
      ...studioTemplate,
      templateHtml: [
        "<div style='width:220px;font-family:inherit;box-sizing:border-box;'>",
        showLabel
          ? `<div style='display:flex;justify-content:flex-end;margin-bottom:6px;font-size:12px;font-weight:600;color:var(--uiv-text-muted, #4b5563);'>${labelTxt}</div>`
          : "",
        `<div style='width:100%;height:${h}px;border-radius:999px;background:${tint};overflow:hidden;'>`,
        `<div style='width:${p}%;height:100%;border-radius:999px;background:${accent};${stripedBg}'></div>`,
        "</div>",
        "</div>"
      ].join(""),
    };
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
      --pr-primary: var(--uiv-primary-color, #6366f1);
      --pr-track: var(--uiv-bg-tertiary, rgba(99, 102, 241, 0.14));
      --pr-text: var(--uiv-text-color, #1f2937);
      --pr-muted: var(--uiv-text-muted, #4b5563);
    }

    .color-primary { --pr-accent: var(--uiv-primary-color, #6366f1); }
    .color-success { --pr-accent: var(--uiv-color-success, #10b981); }
    .color-warning { --pr-accent: var(--uiv-color-warning, #f59e0b); }
    .color-error { --pr-accent: var(--uiv-color-danger, #ef4444); }

    /* Linear */
    .linear-label {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 6px;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--pr-muted);
    }
    .track {
      width: 100%;
      border-radius: 999px;
      background: var(--pr-track);
      overflow: hidden;
    }
    .bar {
      height: 100%;
      border-radius: 999px;
      background: var(--pr-accent);
      transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .bar.striped {
      background-image: linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.25) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.25) 50%,
        rgba(255, 255, 255, 0.25) 75%,
        transparent 75%,
        transparent
      );
      background-size: 1rem 1rem;
      animation: stripes 1s linear infinite;
    }
    @keyframes stripes {
      from { background-position: 1rem 0; }
      to { background-position: 0 0; }
    }

    /* Circular */
    .circular {
      display: inline-flex;
      position: relative;
      align-items: center;
      justify-content: center;
    }
    .circular svg { transform: rotate(-90deg); }
    .circular .track-ring { stroke: var(--pr-track); }
    .circular .value-ring {
      stroke: var(--pr-accent);
      transition: stroke-dashoffset 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .circular .c-label {
      position: absolute;
      font-weight: 600;
      color: var(--pr-text);
    }
  `;

  @property({ type: Number }) value = 65;
  @property({ type: Number }) max = 100;
  @property({ type: String }) variant = "linear";
  @property({ type: String }) color = "primary";
  @property({ type: Boolean, attribute: "show-label" }) showLabel = false;
  @property({ type: Boolean }) striped = false;
  @property({ type: Number }) size = 12;

  private _completed = false;

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Value (0-100)",
    fieldMappings: "value"
  })
  get valueConfig() { return this.value; }
  set valueConfig(val: number) { this.value = Number(val) || 0; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Max",
    fieldMappings: "max"
  })
  get maxConfig() { return this.max; }
  set maxConfig(val: number) { this.max = Number(val) || 100; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Variant",
    fieldMappings: "variant",
    optionItems: [
      { label: "Linear", value: "linear" },
      { label: "Circular", value: "circular" }
    ]
  })
  get variantConfig() { return this.variant; }
  set variantConfig(val: string) { this.variant = val || "linear"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Color",
    fieldMappings: "color",
    optionItems: [
      { label: "Primary", value: "primary" },
      { label: "Success", value: "success" },
      { label: "Warning", value: "warning" },
      { label: "Error", value: "error" }
    ]
  })
  get colorConfig() { return this.color; }
  set colorConfig(val: string) { this.color = val || "primary"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Show % Label",
    fieldMappings: "showLabel"
  })
  get showLabelConfig() { return this.showLabel; }
  set showLabelConfig(val: boolean) { this.showLabel = Boolean(val); }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Striped",
    fieldMappings: "striped"
  })
  get stripedConfig() { return this.striped; }
  set stripedConfig(val: boolean) { this.striped = Boolean(val); }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Bar Height / Ring Size (px)",
    fieldMappings: "size"
  })
  get sizeConfig() { return this.size; }
  set sizeConfig(val: number) { this.size = Math.max(4, Number(val) || 12); }

  @RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: "On Complete",
    eventTrigger: "on-complete"
  })
  handleComplete() {
    this.dispatchEvent(
      new CustomEvent("on-complete", {
        detail: { value: this.value, max: this.max },
        bubbles: true,
        composed: true
      })
    );
  }

  updated() {
    const done = (Number(this.value) || 0) >= (Number(this.max) || 100);
    if (done && !this._completed) {
      this._completed = true;
      this.handleComplete();
    } else if (!done && this._completed) {
      this._completed = false;
    }
  }

  private renderCircular(p: number, label: string) {
    const dia = Math.max(this.size, 40);
    const stroke = Math.max(4, Math.round(dia * 0.11));
    const r = (dia - stroke) / 2;
    const circ = 2 * Math.PI * r;
    const offset = circ * (1 - p / 100);
    return html`
      <div class="circular color-${this.color}" style="width:${dia}px;height:${dia}px;">
        <svg width=${dia} height=${dia} viewBox="0 0 ${dia} ${dia}">
          <circle class="track-ring" cx=${dia / 2} cy=${dia / 2} r=${r} fill="none" stroke-width=${stroke}></circle>
          <circle
            class="value-ring"
            cx=${dia / 2}
            cy=${dia / 2}
            r=${r}
            fill="none"
            stroke-width=${stroke}
            stroke-linecap="round"
            stroke-dasharray=${circ}
            stroke-dashoffset=${offset}
          ></circle>
        </svg>
        ${this.showLabel
          ? html`<span class="c-label" style="font-size:${Math.max(10, Math.round(dia * 0.22))}px;">${label}</span>`
          : ""}
      </div>
    `;
  }

  render() {
    const p = pct(this.value, this.max);
    const label = `${Math.round(p)}%`;

    if (this.variant === "circular") {
      return this.renderCircular(p, label);
    }

    const h = Math.max(4, this.size);
    return html`
      <div class="linear color-${this.color}">
        ${this.showLabel ? html`<div class="linear-label">${label}</div>` : ""}
        <div
          class="track"
          style="height:${h}px;"
          role="progressbar"
          aria-valuenow=${Math.round(p)}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="bar ${this.striped ? "striped" : ""}" style="width:${p}%;"></div>
        </div>
      </div>
    `;
  }
}
