// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

function escapeStudio(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

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
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) return {
      kind: 'card',
      templateHtml: "<div style='padding:20px;border-radius:18px;background:var(--uiv-surface-color,#fff);border:1px solid rgba(0,0,0,0.1);box-shadow:var(--uiv-shadow-depth,none);'><strong style='color:var(--uiv-text-color,#132238);'>{{display:title}}</strong><div style='margin-top:14px;'><zero-studio-slot name='default'></zero-studio-slot></div></div>",
      slots: [{ id: 'default', label: 'Card Body', dropzone: true, accepts: [] }],
      titleProp: 'title'
    };

    const titleDisplay = escapeStudio(config.studio.display.title || "Card");
    const subtitleDisplay = escapeStudio(config.studio.display.subtitle || "");
    const padding = (config.props?.padding ?? config.studio.props?.padding) ?? 20;
    const elevated = !!(config.props?.elevated ?? config.studio.props?.elevated);
    
    const bg = 'var(--uiv-surface-color, #fff)';
    const text = 'var(--uiv-text-color, #132238)';
    const muted = 'var(--uiv-text-muted, #64748b)';
    const shadow = elevated ? 'var(--uiv-shadow-depth, 0 12px 28px rgba(19, 34, 56, 0.08))' : 'none';

    return {
      kind: 'card',
      slots: [{ id: 'default', label: 'Card Body', dropzone: true, accepts: [] }],
      templateHtml: [
        `<div style='padding:${padding}px;border-radius:18px;background:${bg};border:1px solid rgba(0,0,0,0.1);box-shadow:${shadow};font-family:inherit;'>`,
        titleDisplay ? `<h3 style='margin:0;font-size:1.1rem;color:${text};'>${titleDisplay}</h3>` : "",
        subtitleDisplay ? `<p style='margin:6px 0 0;color:${muted};font-size:0.92rem;'>${subtitleDisplay}</p>` : "",
        "<div style='margin-top:14px;min-height:40px;border:1px dashed rgba(0,0,0,0.05);border-radius:8px;'>",
        "<zero-studio-slot name='default'></zero-studio-slot>",
        "</div>",
        "</div>"
      ].join(""),
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
