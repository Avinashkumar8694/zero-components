// @environment common
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import {
  RendererAttribute,
  RendererComponent,
  applyGlobalStyles,
  AttributeType,
  UserInterfaceType,
} from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property, customElement } from "lit/decorators.js";

export const studioTemplate: ZeroStudioTemplate = {
  kind: "generic",
  slots: [
    { id: "content", label: "Custom Content", dropzone: true, accepts: [] },
  ],
  templateHtml: [
    "<div style='display:flex;flex-direction:column;align-items:center;gap:12px;padding:24px;border-radius:12px;border:1px solid rgba(148,163,184,0.15);background:rgba(255,255,255,0.95);'>",
    "<div style='width:36px;height:36px;border:3px solid rgba(0,0,0,0.1);border-top-color:var(--uiv-status-primary,#3b82f6);border-radius:50%;'></div>",
    "<span style='font-size:0.8rem;color:var(--uiv-text-muted,#64748b);'>{{display:text}}</span>",
    "<div style='width:100%;min-height:24px;border:1px dashed rgba(148,163,184,0.25);border-radius:6px;padding:4px;'>",
    "<zero-studio-slot name='content'></zero-studio-slot>",
    "</div>",
    "</div>"
  ].join(""),
  textProp: "text",
  badges: ["Feedback", "Loader"],
};

@RendererComponent({
  name: "zero-loader",
  version: "1.0.0",
  title: "Loader",
  elementSelector: "zero-loader",
  group: "Feedback",
  iconName: "loader-icon.png",
})
@applyGlobalStyles()
@customElement("zero-loader")
export class ZeroLoader extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) return studioTemplate;

    const textDisplay = escapeStudio(config.studio.display.text || "Loading...");
    const primary = 'var(--uiv-primary-color, #3b82f6)';
    const muted = 'var(--uiv-text-muted, #64748b)';

    return {
      ...studioTemplate,
      templateHtml: [
        "<div style='display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:32px;font-family:inherit;'>",
        `<div style='width:36px;height:36px;border:3px solid rgba(0,0,0,0.1);border-top-color:${primary};border-radius:50%;'></div>`,
        `<div style='font-size:14px;color:${muted};font-weight:500;margin-top:8px;'>${textDisplay}</div>`,
        "<div style='width:100%;min-height:30px;border:2px dashed rgba(148,163,184,0.3);border-radius:8px;padding:8px;margin-top:10px;'>",
        "<zero-studio-slot name='content'></zero-studio-slot>",
        "</div>",
        "</div>"
      ].join(""),
    };
  }

  static styles = css`
    :host {
      display: inline-block;
      width: 100%;
    }

    :host([full-screen]) {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .loader-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
      padding: 32px;
      border-radius: var(--zero-radius-md, 12px);
      transition: background-color 0.3s ease;
    }

    :host([full-screen]) .loader-container {
      padding: 64px;
    }

    .spinner {
      display: inline-block;
      width: var(--zero-spinner-size, 48px);
      height: var(--zero-spinner-size, 48px);
    }
    
    .spinner-icon {
      font-size: var(--zero-spinner-size, 48px);
      line-height: 1;
      display: block;
      animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    .spinner-circle {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 4px solid var(--zero-spinner-track, rgba(0, 0, 0, 0.1));
      border-top-color: var(--zero-spinner-color, var(--uiv-status-primary, #3b82f6));
      animation: spin 1s linear infinite;
    }

    .loader-text {
      font-family: var(--zero-font-family, system-ui, sans-serif);
      font-size: var(--zero-font-size, 16px);
      font-weight: 500;
      color: var(--zero-text-color, var(--uiv-text-muted, #475569));
      text-align: center;
      margin: 0;
    }

    @keyframes spin {
      100% {
        transform: rotate(360deg);
      }
    }
    
    @keyframes pulse {
      0%, 100% {
        opacity: 1;
        transform: scale(1);
      }
      50% {
        opacity: .7;
        transform: scale(0.9);
      }
    }
  `;

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Loading Text",
    fieldMappings: "text",
  })
  text = "Loading...";

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Icon (Emoji)",
    fieldMappings: "icon",
  })
  icon = "";

  @property({ type: Boolean, attribute: "full-screen", reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Full Screen Overlay",
    fieldMappings: "fullScreen",
  })
  fullScreen = false;

  @property({ type: String, attribute: "image" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Image URL",
    fieldMappings: "image",
  })
  image = "";

  @property({ type: String, attribute: "background-color" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: "Background Color",
    fieldMappings: "backgroundColor",
  })
  backgroundColor = "transparent";

  @property({ type: String, attribute: "spinner-color" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: "Spinner Color",
    fieldMappings: "spinnerColor",
  })
  spinnerColor = "#3b82f6";
  
  @property({ type: String, attribute: "text-color" })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: "Text Color",
    fieldMappings: "textColor",
  })
  textColor = "#475569";

  @property({ type: Number })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Spinner Size (px)",
    fieldMappings: "size",
  })
  size = 48;

  render() {
    // Generate inline styles based on properties
    const styleVariables = [
      `--zero-spinner-color: ${this.spinnerColor}`,
      `--zero-text-color: ${this.textColor}`,
      `--zero-spinner-size: ${this.size}px`,
    ].join(";");
    
    // The inner container needs background tracking for full screen mode
    const containerStyle = this.fullScreen ? `background-color: ${this.backgroundColor || 'var(--uiv-bg-surface, #ffffff)'}` : `background-color: ${this.backgroundColor}`;

    return html`
      <div style=${styleVariables}>
        <div class="loader-container" style=${containerStyle}>
          <div class="spinner">
            ${this.image 
              ? html`<img src="${this.image}" style="width: 100%; height: 100%; object-fit: contain;" />`
              : this.icon 
                ? html`<span class="spinner-icon">${this.icon}</span>` 
                : html`<div class="spinner-circle"></div>`
            }
          </div>
          ${this.text ? html`<p class="loader-text">${this.text}</p>` : html``}
          <div class="custom-content" style="width: 100%;">
            <slot name="content"></slot>
          </div>
        </div>
      </div>
    `;
  }
}

function escapeStudio(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
