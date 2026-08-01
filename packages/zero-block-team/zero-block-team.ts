// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

export const studioTemplate: ZeroStudioTemplate = {
  kind: "generic",
  templateHtml: [
    "<section style='padding:48px 24px;background:#ffffff;text-align:center;font-family:inherit;'>",
    "<h2 style='font-size:28px;font-weight:700;color:#111827;margin-bottom:8px;'>{{props:title}}</h2>",
    "<p style='font-size:15px;color:#4b5563;max-width:500px;margin:0 auto 32px;'>{{props:lead}}</p>",
    "<div style='display:flex;gap:20px;justify-content:center;'>",
    "<div style='flex:1;text-align:center;'>",
    "<div style='width:80px;height:80px;border-radius:50%;background:#e5e7eb;margin:0 auto 12px;'></div>",
    "<h3 style='font-size:15px;font-weight:600;margin-bottom:2px;'>John Doe</h3>",
    "<p style='font-size:13px;color:#6b7280;margin:0;'>Founder</p>",
    "</div>",
    "</div>",
    "</section>"
  ].join(""),
  labelProp: "title",
  badges: ["Block", "Team"],
};

interface TeamItem {
  avatar: string;
  name: string;
  role: string;
  bio: string;
}


function escapeStudio(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

@RendererComponent({
  name: "zero-block-team",
  version: "1.0.0",
  title: "Team Block",
  elementSelector: "zero-block-team",
  group: "Design Blocks",
  iconName: "layout-icon.png",
})
@applyGlobalStyles()
export class ZeroBlockTeam extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) {
      return {
        kind: "generic",
        templateHtml: `<zero-block-team-1.0.0></zero-block-team-1.0.0>`
      };
    }
    const title = escapeStudio(config?.props?.title ?? config?.studio?.props?.title ?? "Meet the Team");
    const lead = escapeStudio(config?.props?.lead ?? config?.studio?.props?.lead ?? "");
    const teamJson = escapeStudio(config?.props?.teamJson ?? config?.studio?.props?.teamJson ?? "[]");
    const layout = escapeStudio(config?.props?.layout ?? config?.studio?.props?.layout ?? "layout-1");
    const themeStyle = escapeStudio(config?.props?.themeStyle ?? config?.studio?.props?.themeStyle ?? "light");

    return {
      kind: "generic",
      templateHtml: `
        <zero-block-team-1.0.0
          title="${title}"
          lead="${lead}"
          team-json="${teamJson}"
          layout="${layout}"
          theme-style="${themeStyle}"
        ></zero-block-team-1.0.0>
      `
    };
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
      --team-bg: var(--uiv-surface-color, #ffffff);
      --team-text: var(--uiv-text-color, #111827);
      --team-lead: #4b5563;
      --team-card-bg: var(--uiv-surface-color, #ffffff);
      --team-card-border: var(--uiv-border-color, #e5e7eb);
      --team-accent: var(--uiv-primary-color, #6366f1);
    }

    section {
      padding: 80px 5%;
      background: var(--team-bg);
      color: var(--team-text);
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    section.theme-dark {
      --team-bg: #111827;
      --team-text: #f9fafb;
      --team-lead: #9ca3af;
      --team-card-bg: #1f2937;
      --team-card-border: #374151;
    }

    .header-area {
      text-align: center;
      max-width: 700px;
      margin: 0 auto 50px auto;
    }

    h2 {
      font-size: 2.25rem;
      font-weight: 800;
      margin: 0 0 12px 0;
      letter-spacing: -0.02em;
    }

    p.lead {
      font-size: 1.05rem;
      line-height: 1.6;
      color: var(--team-lead);
      margin: 0;
    }

    /* ─── Layout 1: 4-Column Grid ─── */
    .grid-4col {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 30px;
      max-width: 1100px;
      margin: 0 auto;
    }

    .team-card {
      padding: 30px 20px;
      text-align: center;
      background: var(--team-card-bg);
      border: 1px solid var(--team-card-border);
      border-radius: 8px;
      transition: transform 0.2s ease;
    }

    .team-card:hover {
      transform: translateY(-2px);
    }

    .avatar-wrapper {
      width: 110px;
      height: 110px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto 20px auto;
      border: 3px solid var(--team-accent);
      box-shadow: 0 4px 10px rgba(0,0,0,0.06);
    }

    .avatar-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    h3 {
      font-size: 1.2rem;
      font-weight: 700;
      margin: 0 0 4px 0;
    }

    .role-badge {
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--team-accent);
      margin-bottom: 12px;
      display: inline-block;
    }

    .bio-text {
      font-size: 0.88rem;
      line-height: 1.5;
      color: var(--team-lead);
      margin: 0;
    }

    /* ─── Layout 2: 2-Column Split Rows ─── */
    .grid-2col {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
      gap: 30px;
      max-width: 1100px;
      margin: 0 auto;
    }

    .row-card {
      display: flex;
      gap: 24px;
      align-items: center;
      padding: 24px;
      background: var(--team-card-bg);
      border: 1px solid var(--team-card-border);
      border-radius: 12px;
      text-align: left;
    }

    .row-avatar {
      width: 130px;
      height: 130px;
      border-radius: 12px;
      overflow: hidden;
      flex-shrink: 0;
      border: 2px solid var(--team-card-border);
    }

    .row-info {
      flex: 1;
    }

    @media (max-width: 768px) {
      .grid-2col {
        grid-template-columns: 1fr;
      }
      .row-card {
        flex-direction: column;
        text-align: center;
      }
    }
  `;

  @property({ type: String }) title = "Meet Our Creative Team";
  @property({ type: String }) lead = "A collective of designers, thinkers, and technical developers working on advanced products.";
  @property({ type: String, attribute: "team-json" }) teamJson = '[{"avatar":"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300","name":"Sarah Jenkins","role":"Lead Architect","bio":"Sarah designs scalable visual layouts."},{"avatar":"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300","name":"Marcus Aurelius","role":"Backend Engineer","bio":"Marcus handles deep system pipeline setups."},{"avatar":"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300","name":"Elena Rostova","role":"Creative Director","bio":"Elena coordinates overall aesthetic tokens."}]';
  @property({ type: String }) layout = "layout-1";
  @property({ type: String, attribute: "theme-style" }) themeStyle = "light";

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Section Title",
    fieldMappings: "title"
  })
  get titleConfig() { return this.title; }
  set titleConfig(val: string) { this.title = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Section Subtitle Copy",
    fieldMappings: "lead"
  })
  get leadConfig() { return this.lead; }
  set leadConfig(val: string) { this.lead = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXTAREA,
    displayLabel: "Team Members JSON",
    fieldMappings: "teamJson"
  })
  get teamJsonConfig() { return this.teamJson; }
  set teamJsonConfig(val: string) { this.teamJson = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Layout Display",
    fieldMappings: "layout",
    optionItems: [
      { label: "4-Column Avatar Grid", value: "layout-1" },
      { label: "2-Column Split Row Cards", value: "layout-2" }
    ]
  })
  get layoutConfig() { return this.layout; }
  set layoutConfig(val: string) { this.layout = val || "layout-1"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Theme Style",
    fieldMappings: "themeStyle",
    optionItems: [
      { label: "Standard Light", value: "light" },
      { label: "Standard Dark", value: "dark" }
    ]
  })
  get themeStyleConfig() { return this.themeStyle; }
  set themeStyleConfig(val: string) { this.themeStyle = val || "light"; }

  private parseTeam(): TeamItem[] {
    try {
      return JSON.parse(this.teamJson);
    } catch (e) {
      return [];
    }
  }

  render() {
    const members = this.parseTeam();

    return html`
      <section class="theme-${this.themeStyle} layout-${this.layout}">
        <div class="header-area">
          <h2>${this.title}</h2>
          <p class="lead">${this.lead}</p>
        </div>

        ${this.layout === "layout-1" ? html`
          <div class="grid-4col">
            ${members.map(member => html`
              <div class="team-card">
                <div class="avatar-wrapper">
                  <img class="avatar-img" src="${member.avatar}" alt="${member.name}">
                </div>
                <h3>${member.name}</h3>
                <span class="role-badge">${member.role}</span>
                <p class="bio-text">${member.bio}</p>
              </div>
            `)}
          </div>
        ` : ""}

        ${this.layout === "layout-2" ? html`
          <div class="grid-2col">
            ${members.map(member => html`
              <div class="row-card">
                <div class="row-avatar">
                  <img class="avatar-img" src="${member.avatar}" alt="${member.name}">
                </div>
                <div class="row-info">
                  <h3>${member.name}</h3>
                  <span class="role-badge">${member.role}</span>
                  <p class="bio-text">${member.bio}</p>
                </div>
              </div>
            `)}
          </div>
        ` : ""}
      </section>
    `;
  }
}
