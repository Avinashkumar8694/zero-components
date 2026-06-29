// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

function escapeStudio(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

@RendererComponent({
  name: "zero-expansion-panel",
  version: "1.0.0",
  title: "Expansion Panel",
  elementSelector: "zero-expansion-panel",
  group: "Layout",
  iconName: "panel-icon.png",
})
@applyGlobalStyles()
export class ZeroExpansionPanel extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    const titleVal = config?.props?.title || "Expansion Panel Title";
    const titleDisplay = escapeStudio(titleVal);
    const variant = config?.props?.variant || "standard";
    const expanded = !!config?.props?.expanded;

    // Define slots and template HTML for the visual editor
    const slots = [
      {
        id: "content",
        label: "Panel Content",
        dropzone: true,
        accepts: ["zero-section"]
      }
    ];

    let headerStyles = "padding: 14px 20px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: space-between; border-radius: 8px 8px 0 0; background: var(--uiv-surface-color,#ffffff); border-bottom: 1px solid rgba(0,0,0,0.06);";
    let containerStyles = "border: 1px solid rgba(0,0,0,0.08); border-radius: 8px; overflow: hidden; background: var(--uiv-surface-color,#ffffff); box-shadow: 0 2px 4px rgba(0,0,0,0.03);";
    
    if (variant === "blocky") {
      containerStyles = "border: 3px solid #000000; border-radius: 0px; box-shadow: 5px 5px 0px #000000; overflow: hidden; background: #ffffff;";
      headerStyles = "padding: 14px 20px; font-weight: 900; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: var(--uiv-primary-color,#6366f1); border-bottom: 3px solid #000000; color:#000;";
    } else if (variant === "frosted") {
      containerStyles = "border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 12px; background: rgba(255, 255, 255, 0.12); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); overflow: hidden;";
      headerStyles = "padding: 14px 20px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: rgba(255, 255, 255, 0.05); border-bottom: 1px solid rgba(255, 255, 255, 0.1); color: var(--uiv-text-color,#111827);";
    }

    const templateHtml = `
      <div style="${containerStyles}">
        <div style="${headerStyles}">
          <span>${titleDisplay}</span>
          <span style="transition: transform 0.2s; ${expanded ? "transform: rotate(180deg);" : ""}">▼</span>
        </div>
        <div style="padding: 20px; display: ${expanded ? "block" : "none"}; min-height: 48px;">
          <zero-studio-slot name="content"></zero-studio-slot>
        </div>
      </div>
    `;

    return {
      kind: "panel",
      slots,
      templateHtml,
      badges: ["Panel"],
      emptyText: "Drag and Drop Sections inside the content slot"
    };
  }

  static styles = css`
    :host {
      display: block;
      margin-bottom: 16px;
      --ep-p: var(--uiv-primary-color, #6366f1);
      --ep-bg: var(--uiv-surface-color, #ffffff);
      --ep-text: var(--uiv-text-color, #111827);
      --ep-border: var(--uiv-border-color, #e5e7eb);
    }

    .panel-container {
      border: 1px solid var(--ep-border);
      border-radius: 8px;
      overflow: hidden;
      background: var(--ep-bg);
      box-shadow: 0 2px 4px rgba(0,0,0,0.02);
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .header {
      padding: 14px 20px;
      font-weight: 700;
      color: var(--ep-text);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      user-select: none;
      transition: background 0.2s ease;
    }

    .header:hover {
      background: rgba(0, 0, 0, 0.015);
    }

    .icon-arrow {
      font-size: 0.72rem;
      transition: transform 0.25s ease;
      color: var(--ep-p);
    }

    .checked .icon-arrow {
      transform: rotate(180deg);
    }

    .content-area {
      display: none;
      padding: 20px;
      border-top: 1px solid var(--ep-border);
      box-sizing: border-box;
      transition: all 0.25s ease;
    }

    .checked .content-area {
      display: block;
    }

    /* ─── VARIANTS ─── */

    /* Blocky (Retro) */
    .variant-blocky {
      border: 3px solid #000000;
      border-radius: 0px;
      box-shadow: 5px 5px 0px #000000;
    }
    .variant-blocky .header {
      background: var(--ep-p);
      color: #000000;
      border-bottom: 3px solid #000000;
      font-weight: 900;
    }
    .variant-blocky .icon-arrow {
      color: #000000;
      font-weight: bold;
    }
    .variant-blocky .content-area {
      border-top: none;
      background: #ffffff;
    }

    /* Frosted */
    .variant-frosted {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    .variant-frosted .header {
      background: rgba(255, 255, 255, 0.05);
      border-bottom-color: rgba(255, 255, 255, 0.15);
    }
    .variant-frosted .content-area {
      border-top-color: rgba(255, 255, 255, 0.15);
    }

    /* Modern */
    .variant-modern {
      border-color: transparent;
      box-shadow: 0 4px 18px rgba(0, 0, 0, 0.03);
      border-radius: 12px;
    }
    .variant-modern .header {
      padding: 16px 24px;
    }
    .variant-modern .icon-arrow {
      background: rgba(99, 102, 241, 0.08);
      padding: 6px;
      border-radius: 50%;
    }
  `;

  @property({ type: String }) title = "Expansion Panel Title";
  @property({ type: Boolean }) expanded = false;
  @property({ type: String }) variant = "standard";

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Panel Title",
    fieldMappings: "title"
  })
  get titleConfig() { return this.title; }
  set titleConfig(val: string) { this.title = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Expanded by Default",
    fieldMappings: "expanded"
  })
  get expandedConfig() { return this.expanded; }
  set expandedConfig(val: boolean) { this.expanded = Boolean(val); }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Panel Style Theme",
    fieldMappings: "variant",
    optionItems: [
      { label: "Standard", value: "standard" },
      { label: "Retro Blocky", value: "blocky" },
      { label: "Frosted Glass", value: "frosted" },
      { label: "Modern Soft", value: "modern" }
    ]
  })
  get variantConfig() { return this.variant; }
  set variantConfig(val: string) { this.variant = val || "standard"; }

  private handleToggle() {
    this.expanded = !this.expanded;
    this.dispatchEvent(
      new CustomEvent("toggle", {
        detail: { expanded: this.expanded },
        bubbles: true,
        composed: true
      })
    );
  }

  render() {
    const wrapClass = [
      "panel-container",
      this.expanded ? "checked" : "",
      `variant-${this.variant}`
    ].join(" ");

    return html`
      <div class=${wrapClass}>
        <div class="header" @click=${this.handleToggle}>
          <span>${this.title}</span>
          <span class="icon-arrow">▼</span>
        </div>
        <div class="content-area">
          <slot name="content"></slot>
          <slot></slot>
        </div>
      </div>
    `;
  }
}
