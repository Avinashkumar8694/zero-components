// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

const DEFAULT_NOTES_JSON = JSON.stringify([
  {
    text: "- This patient is lorem ipsum dolor sit amet\n- Lorem ipsum dolor sit amet\n- has allergic history with Cataflam",
    author: "Drg. Mega Nanade",
    date: "20 Nov '19",
    active: true
  },
  {
    text: "Lorem ipsum dolor sit amet",
    author: "Drg. Mega Nanade",
    date: "20 Nov '19",
    active: false
  }
]);

interface NoteItem {
  text: string;
  author: string;
  date: string;
  active?: boolean;
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
    const notesJson = escapeStudio(config?.props?.notesJson ?? config?.studio?.props?.notesJson ?? "[]");

    return {
      kind: "generic",
      templateHtml: `
        <zero-notes-card-1.0.0
          title="${title}"
          notes-json="${notesJson}"
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
      border: 1px solid rgba(0, 0, 0, 0.05);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
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
      color: #1e293b;
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
      min-height: 120px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 12px;
    }
    .textarea {
      width: 100%;
      border: none;
      background: transparent;
      resize: none;
      font-size: 0.82rem;
      color: #334155;
      line-height: 1.6;
      font-family: inherit;
      outline: none;
      padding: 0;
    }
    .meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid #e2e8f0;
      padding-top: 8px;
    }
    .meta-left {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .author {
      font-size: 0.75rem;
      color: #64748b;
      font-weight: 600;
    }
    .date {
      font-size: 0.72rem;
      color: #94a3b8;
    }
    .btn {
      padding: 6px 12px;
      border-radius: 6px;
      border: none;
      background: #0ea5e9;
      color: #ffffff;
      font-weight: 600;
      font-size: 0.75rem;
      cursor: pointer;
      transition: background 0.2s;
    }
    .btn:hover {
      background: #0284c7;
    }
    .secondary-note {
      border-top: 1.5px solid #f1f5f9;
      padding-top: 16px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .secondary-text {
      font-size: 0.82rem;
      color: #475569;
      line-height: 1.5;
      font-weight: 500;
    }
    .secondary-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .secondary-author {
      font-size: 0.75rem;
      color: #0ea5e9;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .secondary-date {
      font-size: 0.72rem;
      color: #94a3b8;
    }

    @media (max-width: 768px) {
      .card {
        padding: 16px;
        gap: 12px;
      }
      .title {
        font-size: 0.85rem;
      }
      .action {
        font-size: 0.75rem;
      }
      .textarea-box {
        padding: 12px;
        min-height: 100px;
      }
      .textarea {
        font-size: 0.78rem;
      }
      .secondary-text {
        font-size: 0.78rem;
      }
      .author, .secondary-author {
        font-size: 0.7rem;
      }
      .date, .secondary-date {
        font-size: 0.68rem;
      }
    }
  `;

  @property({ type: String }) title = "Notes";
  @property({ type: String, attribute: "notes-json" }) notesJson = DEFAULT_NOTES_JSON;

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Title",
    fieldMappings: "title",
    categoryLabel: "Content",
    initialValue: "Notes"
  })
  get titleConfig() { return this.title; }
  set titleConfig(val: string) { this.title = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXTAREA,
    displayLabel: "Notes (JSON array of { text, author, date, active })",
    fieldMappings: "notesJson",
    categoryLabel: "Content",
    initialValue: DEFAULT_NOTES_JSON
  })
  get notesJsonConfig() { return this.notesJson; }
  set notesJsonConfig(val: string) { this.notesJson = val; }

  render() {
    let notes: NoteItem[] = [];
    try {
      notes = JSON.parse(this.notesJson);
    } catch {
      notes = [];
    }

    const activeNote = notes.find(n => n.active) || notes[0] || { text: "", author: "", date: "" };
    const secondaryNotes = notes.filter(n => n !== activeNote);

    return html`
      <div class="card">
        <div class="header">
          <h4 class="title">${this.title}</h4>
          <span class="action">See all</span>
        </div>
        <div class="textarea-box">
          <textarea class="textarea" rows="3" .value=${activeNote.text} @input=${(e: any) => {
            activeNote.text = e.target.value;
            this.notesJson = JSON.stringify(notes);
          }}></textarea>
          <div class="meta">
            <div class="meta-left">
              <span class="author">👤 ${activeNote.author}</span>
            </div>
            <button class="btn">save note</button>
          </div>
        </div>
        
        ${secondaryNotes.map(note => html`
          <div class="secondary-note">
            <div class="secondary-text">${note.text}</div>
            <div class="secondary-meta">
              <span class="secondary-author">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                ${note.author}
              </span>
              <span class="secondary-date">${note.date}</span>
            </div>
          </div>
        `)}
      </div>
    `;
  }
}
