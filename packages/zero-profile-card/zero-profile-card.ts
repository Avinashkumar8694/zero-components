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
      background: #ffffff;
      border: 1px solid #e2e8f0;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
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
      border: 3px solid #f1f5f9;
    }
    .name {
      margin: 0 0 4px 0;
      font-size: 1.25rem;
      font-weight: 700;
      color: #0f172a;
    }
    .subtitle {
      margin: 0 0 20px 0;
      font-size: 0.85rem;
      color: #64748b;
      word-break: break-all;
    }
    .stats {
      display: flex;
      gap: 24px;
      width: 100%;
      border-top: 1px solid #f1f5f9;
      border-bottom: 1px solid #f1f5f9;
      padding: 16px 0;
      margin-bottom: 20px;
      justify-content: center;
    }
    .stat-val {
      font-size: 1.25rem;
      font-weight: 700;
      color: #0f172a;
    }
    .stat-lbl {
      font-size: 0.75rem;
      color: #64748b;
      margin-top: 2px;
    }
    .divider {
      width: 1px;
      background: #e2e8f0;
      height: 32px;
    }
    .btn {
      width: 100%;
      padding: 10px;
      border-radius: 8px;
      border: 1px solid #cbd5e1;
      background: #ffffff;
      color: #0f172a;
      font-weight: 600;
      font-size: 0.875rem;
      cursor: pointer;
      transition: all 0.2s;
    }
    .btn:hover {
      background: #f8fafc;
      border-color: #94a3b8;
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
        <button class="btn">${this.buttonText}</button>
      </div>
    `;
  }
}
