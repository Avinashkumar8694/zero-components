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
  name: "zero-profile-card",
  version: "1.0.0",
  title: "Profile Card",
  elementSelector: "zero-profile-card",
  group: "Dashboard",
  iconName: "profile-icon.png",
})
@applyGlobalStyles()
export class ZeroProfileCard extends LitElement {
  
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) {
      return {
        kind: "generic",
        templateHtml: `<zero-profile-card-1.0.0></zero-profile-card-1.0.0>`
      };
    }
    const name = escapeStudio(config?.props?.name ?? config?.studio?.props?.name ?? "Diane Cooper");
    const subtitle = escapeStudio(config?.props?.subtitle ?? config?.studio?.props?.subtitle ?? "diane.cooper@example.com");
    const avatarUrl = escapeStudio(config?.props?.avatarUrl ?? config?.studio?.props?.avatarUrl ?? "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;q=80&amp;w=150");
    const stat1Value = escapeStudio(config?.props?.stat1Value ?? config?.studio?.props?.stat1Value ?? "15");
    const stat1Label = escapeStudio(config?.props?.stat1Label ?? config?.studio?.props?.stat1Label ?? "Past");
    const stat2Value = escapeStudio(config?.props?.stat2Value ?? config?.studio?.props?.stat2Value ?? "2");
    const stat2Label = escapeStudio(config?.props?.stat2Label ?? config?.studio?.props?.stat2Label ?? "Upcoming");
    const buttonText = escapeStudio(config?.props?.buttonText ?? config?.studio?.props?.buttonText ?? "Send Message");

    return {
      kind: "generic",
      templateHtml: `
        <zero-profile-card-1.0.0
          name="${name}"
          subtitle="${subtitle}"
          avatar-url="${avatarUrl}"
          stat1-value="${stat1Value}"
          stat1-label="${stat1Label}"
          stat2-value="${stat2Value}"
          stat2-label="${stat2Label}"
          button-text="${buttonText}"
        ></zero-profile-card-1.0.0>
      `
    };
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }
    .card {
      padding: 24px;
      border-radius: 16px;
      background: var(--uiv-surface-color, #ffffff);
      border: 1px solid var(--uiv-border-color, rgba(0, 0, 0, 0.05));
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      font-family: inherit;
      box-sizing: border-box;
    }
    .avatar {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 16px;
      border: 1px solid var(--uiv-border-color, #e2e8f0);
    }
    .name {
      margin: 0 0 4px 0;
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--uiv-text-color, #1e293b);
    }
    .subtitle {
      margin: 0 0 20px 0;
      font-size: 0.8rem;
      color: var(--uiv-text-muted, #64748b);
      word-break: break-all;
    }
    .stats {
      display: flex;
      gap: 24px;
      width: 100%;
      border-top: 1px solid var(--uiv-border-color, #f1f5f9);
      border-bottom: 1px solid var(--uiv-border-color, #f1f5f9);
      padding: 16px 0;
      margin-bottom: 20px;
      justify-content: center;
    }
    .stat-val {
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--uiv-text-color, #1e293b);
    }
    .stat-lbl {
      font-size: 0.75rem;
      color: var(--uiv-text-muted, #94a3b8);
      margin-top: 2px;
    }
    .divider {
      width: 1px;
      background: var(--uiv-border-color, #e2e8f0);
      height: 32px;
    }
    .btn {
      width: 100%;
      padding: 10px;
      border-radius: 8px;
      border: 1px solid var(--uiv-border-color, #cbd5e1);
      background: var(--uiv-surface-color, #ffffff);
      color: var(--uiv-text-color, #334155);
      font-weight: 600;
      font-size: 0.85rem;
      cursor: pointer;
      transition: all 0.2s;
    }
    .btn:hover {
      background: var(--uiv-hover-bg, #f8fafc);
      border-color: var(--uiv-primary-color, #94a3b8);
      color: var(--uiv-text-color, #0f172a);
    }

    @media (max-width: 768px) {
      .card {
        padding: 16px;
      }
      .avatar {
        width: 80px;
        height: 80px;
        margin-bottom: 12px;
      }
      .name {
        font-size: 1.05rem;
      }
      .subtitle {
        font-size: 0.75rem;
        margin-bottom: 16px;
      }
      .stats {
        padding: 12px 0;
        margin-bottom: 16px;
        gap: 16px;
      }
      .stat-val {
        font-size: 1.05rem;
      }
      .stat-lbl {
        font-size: 0.7rem;
      }
      .btn {
        padding: 8px;
        font-size: 0.8rem;
      }
    }
  `;

  @property({ type: String }) name = "Diane Cooper";
  @property({ type: String }) subtitle = "diane.cooper@example.com";
  @property({ type: String, attribute: "avatar-url" }) avatarUrl = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150";
  @property({ type: Number, attribute: "stat1-value" }) stat1Value = 15;
  @property({ type: String, attribute: "stat1-label" }) stat1Label = "Past";
  @property({ type: Number, attribute: "stat2-value" }) stat2Value = 2;
  @property({ type: String, attribute: "stat2-label" }) stat2Label = "Upcoming";
  @property({ type: String, attribute: "button-text" }) buttonText = "Send Message";

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Name",
    fieldMappings: "name",
    categoryLabel: "Profile",
    initialValue: "Diane Cooper"
  })
  get nameConfig() { return this.name; }
  set nameConfig(val: string) { this.name = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Subtitle / Email",
    fieldMappings: "subtitle",
    categoryLabel: "Profile",
    initialValue: "diane.cooper@example.com"
  })
  get subtitleConfig() { return this.subtitle; }
  set subtitleConfig(val: string) { this.subtitle = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Avatar Image URL",
    fieldMappings: "avatarUrl",
    categoryLabel: "Profile",
    initialValue: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  })
  get avatarUrlConfig() { return this.avatarUrl; }
  set avatarUrlConfig(val: string) { this.avatarUrl = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Stat 1 Value",
    fieldMappings: "stat1Value",
    categoryLabel: "Stats",
    initialValue: 15
  })
  get stat1ValueConfig() { return this.stat1Value; }
  set stat1ValueConfig(val: number) { this.stat1Value = Number(val); }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Stat 1 Label",
    fieldMappings: "stat1Label",
    categoryLabel: "Stats",
    initialValue: "Past"
  })
  get stat1LabelConfig() { return this.stat1Label; }
  set stat1LabelConfig(val: string) { this.stat1Label = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Stat 2 Value",
    fieldMappings: "stat2Value",
    categoryLabel: "Stats",
    initialValue: 2
  })
  get stat2ValueConfig() { return this.stat2Value; }
  set stat2ValueConfig(val: number) { this.stat2Value = Number(val); }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Stat 2 Label",
    fieldMappings: "stat2Label",
    categoryLabel: "Stats",
    initialValue: "Upcoming"
  })
  get stat2LabelConfig() { return this.stat2Label; }
  set stat2LabelConfig(val: string) { this.stat2Label = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Button Text",
    fieldMappings: "buttonText",
    categoryLabel: "Action",
    initialValue: "Send Message"
  })
  get buttonTextConfig() { return this.buttonText; }
  set buttonTextConfig(val: string) { this.buttonText = val; }

  @RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: "On Send Message",
    categoryLabel: "Action",
    eventTrigger: "messageClick"
  })
  handleMessageClick() {
    this.dispatchEvent(new CustomEvent("messageClick", { bubbles: true, composed: true }));
  }

  render() {
    return html`
      <div class="card">
        <img class="avatar" src="${this.avatarUrl}" alt="Avatar" />
        <div class="name">${this.name}</div>
        <div class="subtitle">${this.subtitle}</div>
        <div class="stats">
          <div>
            <div class="stat-val">${this.stat1Value}</div>
            <div class="stat-lbl">${this.stat1Label}</div>
          </div>
          <div class="divider"></div>
          <div>
            <div class="stat-val">${this.stat2Value}</div>
            <div class="stat-lbl">${this.stat2Label}</div>
          </div>
        </div>
        <button class="btn" @click=${this.handleMessageClick}>${this.buttonText}</button>
      </div>
    `;
  }
}
