// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

const BASE = "var(--uiv-bg-secondary, #e9edf3)";
const HIGHLIGHT = "rgba(255, 255, 255, 0.55)";

export const studioTemplate: ZeroStudioTemplate = {
  kind: "generic",
  templateHtml: [
    "<div style='width:280px;font-family:inherit;box-sizing:border-box;'>",
    "<div style='display:flex;gap:12px;align-items:center;margin-bottom:14px;'>",
    "<div style='width:44px;height:44px;border-radius:50%;background:#e9edf3;flex:none;'></div>",
    "<div style='flex:1;'>",
    "<div style='height:12px;border-radius:6px;background:#e9edf3;margin-bottom:8px;width:70%;'></div>",
    "<div style='height:12px;border-radius:6px;background:#e9edf3;width:45%;'></div>",
    "</div>",
    "</div>",
    "<div style='height:12px;border-radius:6px;background:#e9edf3;margin-bottom:8px;'></div>",
    "<div style='height:12px;border-radius:6px;background:#e9edf3;margin-bottom:8px;'></div>",
    "<div style='height:12px;border-radius:6px;background:#e9edf3;width:80%;'></div>",
    "</div>"
  ].join(""),
  labelProp: "variant",
  badges: ["Feedback", "Skeleton"],
};

function buildBlock(styleExtra: string, animation: string): string {
  const shimmer =
    animation === "wave"
      ? `background-image:linear-gradient(90deg,${BASE} 0%,${HIGHLIGHT} 50%,${BASE} 100%);background-size:200% 100%;`
      : "";
  const opacity = animation === "pulse" ? "opacity:0.85;" : "";
  return `<div style='background:${BASE};${shimmer}${opacity}${styleExtra}'></div>`;
}

@RendererComponent({
  name: "zero-skeleton",
  version: "1.0.0",
  title: "Skeleton",
  elementSelector: "zero-skeleton",
  group: "Feedback",
  iconName: "skeleton-icon.png",
})
@applyGlobalStyles()
export class ZeroSkeleton extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) return studioTemplate;

    const variant = (config.props?.variant ?? config.studio?.props?.variant) || "text";
    const width = (config.props?.width ?? config.studio?.props?.width) || "";
    const height = (config.props?.height ?? config.studio?.props?.height) || "";
    const lines = Math.max(1, Number(config.props?.lines ?? config.studio?.props?.lines ?? 3));
    const animation = (config.props?.animation ?? config.studio?.props?.animation) || "pulse";
    const rounded = config.props?.rounded ?? config.studio?.props?.rounded ?? true;

    const radius = rounded ? "var(--uiv-border-radius, 8px)" : "0";

    if (variant === "circle") {
      const dim = width || height || "48px";
      return {
        ...studioTemplate,
        templateHtml: buildBlock(
          `width:${dim};height:${height || dim};border-radius:50%;box-sizing:border-box;`,
          animation
        ),
      };
    }

    if (variant === "rect") {
      return {
        ...studioTemplate,
        templateHtml: buildBlock(
          `width:${width || "100%"};height:${height || "120px"};border-radius:${radius};box-sizing:border-box;`,
          animation
        ),
      };
    }

    if (variant === "card") {
      return {
        ...studioTemplate,
        templateHtml: [
          `<div style='width:${width || "280px"};font-family:inherit;box-sizing:border-box;border:1px solid var(--uiv-border-color, #e5e7eb);border-radius:${radius === "0" ? "12px" : radius};padding:14px;background:var(--uiv-surface-color, #ffffff);'>`,
          buildBlock(`width:100%;height:${height || "130px"};border-radius:10px;margin-bottom:12px;`, animation),
          buildBlock("width:60%;height:14px;border-radius:6px;margin-bottom:8px;", animation),
          buildBlock("width:90%;height:12px;border-radius:6px;margin-bottom:6px;", animation),
          buildBlock("width:80%;height:12px;border-radius:6px;", animation),
          "</div>"
        ].join(""),
      };
    }

    // text
    const rows: string[] = [];
    for (let i = 0; i < lines; i++) {
      const isLast = i === lines - 1;
      const w = width || (isLast && lines > 1 ? "70%" : "100%");
      rows.push(buildBlock(`width:${w};height:${height || "12px"};border-radius:${radius};margin-bottom:${isLast ? "0" : "8px"};`, animation));
    }
    return {
      ...studioTemplate,
      templateHtml: [
        "<div style='width:280px;font-family:inherit;box-sizing:border-box;'>",
        rows.join(""),
        "</div>"
      ].join(""),
    };
  }

  static styles = css`
    :host {
      display: block;
      --sk-base: var(--uiv-bg-secondary, #e9edf3);
      --sk-border: var(--uiv-border-color, #e5e7eb);
      --sk-surface: var(--uiv-surface-color, #ffffff);
      --sk-radius: var(--uiv-border-radius, 8px);
    }

    .block {
      background: var(--sk-base);
      box-sizing: border-box;
    }
    .rounded { border-radius: var(--sk-radius); }
    .square { border-radius: 0; }
    .circle { border-radius: 50%; }

    /* animations */
    .anim-pulse { animation: sk-pulse 1.5s ease-in-out infinite; }
    @keyframes sk-pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.55; }
    }

    .anim-wave {
      position: relative;
      overflow: hidden;
      background-image: linear-gradient(
        90deg,
        var(--sk-base) 0%,
        rgba(255, 255, 255, 0.55) 50%,
        var(--sk-base) 100%
      );
      background-size: 200% 100%;
      animation: sk-wave 1.6s linear infinite;
    }
    @keyframes sk-wave {
      from { background-position: 200% 0; }
      to { background-position: -200% 0; }
    }

    .text-wrap { width: 100%; }
    .line + .line { margin-top: 8px; }

    .card {
      border: 1px solid var(--sk-border);
      border-radius: 12px;
      padding: 14px;
      background: var(--sk-surface);
      box-sizing: border-box;
    }
    .card .thumb { width: 100%; height: 130px; border-radius: 10px; margin-bottom: 12px; }
    .card .heading { width: 60%; height: 14px; border-radius: 6px; margin-bottom: 8px; }
    .card .para { height: 12px; border-radius: 6px; margin-bottom: 6px; }

    .clickable { cursor: pointer; }
  `;

  @property({ type: String }) variant = "text";
  @property({ type: String }) width = "";
  @property({ type: String }) height = "";
  @property({ type: Number }) lines = 3;
  @property({ type: String }) animation = "pulse";
  @property({ type: Boolean }) rounded = true;

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Variant",
    fieldMappings: "variant",
    optionItems: [
      { label: "Text", value: "text" },
      { label: "Circle", value: "circle" },
      { label: "Rectangle", value: "rect" },
      { label: "Card", value: "card" }
    ]
  })
  get variantConfig() { return this.variant; }
  set variantConfig(val: string) { this.variant = val || "text"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Width (e.g. 100%, 200px)",
    fieldMappings: "width"
  })
  get widthConfig() { return this.width; }
  set widthConfig(val: string) { this.width = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Height (e.g. 12px, 120px)",
    fieldMappings: "height"
  })
  get heightConfig() { return this.height; }
  set heightConfig(val: string) { this.height = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Lines (text variant)",
    fieldMappings: "lines"
  })
  get linesConfig() { return this.lines; }
  set linesConfig(val: number) { this.lines = Math.max(1, Number(val) || 1); }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Animation",
    fieldMappings: "animation",
    optionItems: [
      { label: "Pulse", value: "pulse" },
      { label: "Wave", value: "wave" },
      { label: "None", value: "none" }
    ]
  })
  get animationConfig() { return this.animation; }
  set animationConfig(val: string) { this.animation = val || "pulse"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Rounded",
    fieldMappings: "rounded"
  })
  get roundedConfig() { return this.rounded; }
  set roundedConfig(val: boolean) { this.rounded = Boolean(val); }

  @RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: "On Click",
    eventTrigger: "on-click"
  })
  handleClick() {
    this.dispatchEvent(
      new CustomEvent("on-click", {
        detail: { variant: this.variant },
        bubbles: true,
        composed: true
      })
    );
  }

  private animClass(): string {
    if (this.animation === "wave") return "anim-wave";
    if (this.animation === "pulse") return "anim-pulse";
    return "";
  }

  render() {
    const anim = this.animClass();
    const shape = this.rounded ? "rounded" : "square";

    if (this.variant === "circle") {
      const dim = this.width || this.height || "48px";
      return html`
        <div
          class="block circle ${anim} clickable"
          style="width:${dim};height:${this.height || dim};"
          @click=${this.handleClick}
        ></div>
      `;
    }

    if (this.variant === "rect") {
      return html`
        <div
          class="block ${shape} ${anim} clickable"
          style="width:${this.width || "100%"};height:${this.height || "120px"};"
          @click=${this.handleClick}
        ></div>
      `;
    }

    if (this.variant === "card") {
      return html`
        <div
          class="card clickable"
          style=${this.width ? `width:${this.width};` : ""}
          @click=${this.handleClick}
        >
          <div class="block thumb ${anim}"></div>
          <div class="block heading ${anim}"></div>
          <div class="block para ${anim}" style="width:90%;"></div>
          <div class="block para ${anim}" style="width:80%;margin-bottom:0;"></div>
        </div>
      `;
    }

    // text
    const lines = Math.max(1, Number(this.lines) || 1);
    return html`
      <div class="text-wrap clickable" @click=${this.handleClick}>
        ${Array.from({ length: lines }).map((_, i) => {
          const isLast = i === lines - 1;
          const w = this.width || (isLast && lines > 1 ? "70%" : "100%");
          return html`<div
            class="block line ${shape} ${anim}"
            style="width:${w};height:${this.height || "12px"};"
          ></div>`;
        })}
      </div>
    `;
  }
}
