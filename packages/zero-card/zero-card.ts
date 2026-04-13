// @environment page
import type { ZeroStudioTemplate } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

@RendererComponent({
  name: "zero-card",
  version: "1.0.0",
  title: "Card",
  elementSelector: "zero-card",
  group: "Surfaces",
  iconName: "card-icon.png",
})
@applyGlobalStyles()
export class ZeroCard extends LitElement {
  static getStudioTemplate(): ZeroStudioTemplate {
    return {
      kind: "card",
      templateHtml: [
        "<div style='display:grid;gap:8px;padding:14px;border-radius:18px;border:1px solid rgba(148,163,184,0.16);background:linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.94));'>",
        "<strong style='font-size:0.95rem;color:#132238;'>{{display:title}}</strong>",
        "<div style='font-size:0.8rem;color:#64748b;'>{{display:subtitle}}</div>",
        "<div style='font-size:0.74rem;color:#64748b;'>title mode: {{mode:title}}</div>",
        "{{children}}",
        "</div>"
      ].join(""),
      titleProp: "title",
      subtitleProp: "subtitle",
      dynamicHints: ["$.card_title", "$.card_subtitle"],
      badges: ["Card"],
      placeholderLines: ["$.card_title", "$.card_subtitle", "{{item.note}}"],
    };
  }

  static styles = css`
    :host {
      display: block;
    }

    .card {
      border-radius: var(--zero-card-radius, 18px);
      padding: var(--zero-card-padding, 20px);
      background: var(--zero-card-bg, #fffdf9);
      border: 1px solid rgba(19, 34, 56, 0.08);
      box-shadow: var(--zero-card-shadow, 0 12px 28px rgba(19, 34, 56, 0.08));
    }

    .title {
      margin: 0;
      font-size: 1.1rem;
      color: #132238;
    }

    .subtitle {
      margin: 6px 0 0;
      color: #5b6470;
      font-size: 0.92rem;
    }

    .body {
      margin-top: 14px;
    }
  `;

  @property({ type: String }) title = "Card";
  @property({ type: String }) subtitle = "";
  @property({ type: Number }) padding = 20;
  @property({ type: Boolean }) elevated = true;

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Title",
    fieldMappings: "title"
  })
  get titleConfig() {
    return this.title;
  }
  set titleConfig(value: string) {
    this.title = value;
  }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Subtitle",
    fieldMappings: "subtitle"
  })
  get subtitleConfig() {
    return this.subtitle;
  }
  set subtitleConfig(value: string) {
    this.subtitle = value;
  }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Padding (px)",
    fieldMappings: "padding"
  })
  get paddingConfig() {
    return this.padding;
  }
  set paddingConfig(value: number) {
    this.padding = Number(value) || 20;
  }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Elevated",
    fieldMappings: "elevated"
  })
  get elevatedConfig() {
    return this.elevated;
  }
  set elevatedConfig(value: boolean) {
    this.elevated = Boolean(value);
  }

  render() {
    const styleValue = [
      `--zero-card-padding:${Math.max(0, Number(this.padding) || 0)}px`,
      `--zero-card-shadow:${this.elevated ? "0 12px 28px rgba(19, 34, 56, 0.08)" : "none"}`
    ].join(";");

    return html`
      <article class="card" style=${styleValue}>
        ${this.title ? html`<h3 class="title">${this.title}</h3>` : null}
        ${this.subtitle ? html`<p class="subtitle">${this.subtitle}</p>` : null}
        <div class="body">
          <slot></slot>
        </div>
      </article>
    `;
  }
}
