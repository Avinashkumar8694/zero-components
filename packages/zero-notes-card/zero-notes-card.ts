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
  name: "zero-notes-card",
  version: "1.0.0",
  title: "Notes Card",
  elementSelector: "zero-notes-card",
  group: "Dashboard",
  iconName: "card-icon.png",
})
@applyGlobalStyles()
export class ZeroNotesCard extends LitElement {
  
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) {
      return {
        kind: "generic",
        templateHtml: `<zero-notes-card-1.0.0></zero-notes-card-1.0.0>`
      };
    }
    const title = escapeStudio(config?.props?.title ?? config?.studio?.props?.title ?? "Notes");
    const text = escapeStudio(config?.props?.text ?? config?.studio?.props?.text ?? "This patient has history of penicillin allergy...");
    const author = escapeStudio(config?.props?.author ?? config?.studio?.props?.author ?? "Drg. Adam H.");
    const date = escapeStudio(config?.props?.date ?? config?.studio?.props?.date ?? "26 Nov &#39;19");

    return {
      kind: "generic",
      templateHtml: `
        <zero-notes-card-1.0.0
          title="${title}"
          text="${text}"
          author="${author}"
          date="${date}"
        ></zero-notes-card-1.0.0>
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
      font-family: inherit;
      display: flex;
      flex-direction: column;
      gap: 16px;
      box-sizing: border-box;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .title {
      margin: 0;
      font-size: 0.95rem;
      font-weight: 700;
      color: #0f172a;
    }
    .action {
      font-size: 0.82rem;
      color: #0ea5e9;
      font-weight: 600;
      cursor: pointer;
    }
    .action:hover {
      text-decoration: underline;
    }
    .textarea-box {
      background: #f8fafc;
      border-radius: 10px;
      border: 1px solid #e2e8f0;
      padding: 16px;
      min-height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .textarea {
      width: 100%;
      border: none;
      background: transparent;
      resize: none;
      font-size: 0.85rem;
      color: #334155;
      line-height: 1.5;
      font-family: inherit;
      outline: none;
      padding: 0;
      margin-bottom: 12px;
    }
    .meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid #e2e8f0;
      padding-top: 8px;
    }
    .author {
      font-size: 0.75rem;
      color: #64748b;
      font-weight: 600;
    }
    .date {
      font-size: 0.75rem;
      color: #64748b;
    }
    .btn {
      align-self: flex-end;
      padding: 8px 16px;
      border-radius: 6px;
      border: none;
      background: #0ea5e9;
      color: #ffffff;
      font-weight: 600;
      font-size: 0.82rem;
      cursor: pointer;
      transition: background 0.2s;
    }
    .btn:hover {
      background: #0284c7;
    }
  `;

  @property({ type: String }) title = "Notes";
  @property({ type: String }) text = "This patient has history of penicillin allergy. Please verify medications. Prefers morning appointments.";
  @property({ type: String }) author = "Drg. Adam H.";
  @property({ type: String }) date = "26 Nov '19";

  render() {
    return html`
      <div class="card">
        <div class="header">
          <h4 class="title">${this.title}</h4>
          <span class="action">See all</span>
        </div>
        <div class="textarea-box">
          <textarea class="textarea" rows="3" .value=${this.text} @input=${(e: any) => this.text = e.target.value}></textarea>
          <div class="meta">
            <span class="author">👤 ${this.author}</span>
            <span class="date">${this.date}</span>
          </div>
        </div>
        <button class="btn">Save Note</button>
      </div>
    `;
  }
}
