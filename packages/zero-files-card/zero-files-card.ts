// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property, state } from "lit/decorators.js";

const DEFAULT_FILES_JSON = JSON.stringify([
  { name: "Check Up Result.pdf", size: "123 KB" },
  { name: "Dental X-Ray Result 2.pdf", size: "1.2 MB" },
  { name: "Medical Prescriptions.pdf", size: "87 KB" },
  { name: "Dental X-Ray Result.pdf", size: "950 KB" }
]);

interface FileItem {
  name: string;
  size: string;
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
  name: "zero-files-card",
  version: "1.0.0",
  title: "Files Card",
  elementSelector: "zero-files-card",
  group: "Dashboard",
  iconName: "card-icon.png",
})
@applyGlobalStyles()
export class ZeroFilesCard extends LitElement {
  
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) {
      return {
        kind: "generic",
        templateHtml: `<zero-files-card-1.0.0></zero-files-card-1.0.0>`
      };
    }
    const title = escapeStudio(config?.props?.title ?? config?.studio?.props?.title ?? "Files / Documents");
    const filesJson = escapeStudio(config?.props?.filesJson ?? config?.studio?.props?.filesJson ?? "[]");

    return {
      kind: "generic",
      templateHtml: `
        <zero-files-card-1.0.0
          title="${title}"
          files-json="${filesJson}"
        ></zero-files-card-1.0.0>
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
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .action:hover {
      text-decoration: underline;
    }
    .list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      transition: all 0.2s;
    }
    .item:hover {
      border-color: #cbd5e1;
      background: #f8fafc;
    }
    .file-info {
      display: flex;
      align-items: center;
      gap: 10px;
      min-width: 0;
    }
    .details {
      min-width: 0;
    }
    .name {
      font-size: 0.82rem;
      font-weight: 600;
      color: #334155;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .actions-wrapper {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-shrink: 0;
    }
    .size-text {
      font-size: 0.72rem;
      color: #94a3b8;
      font-weight: 500;
    }
    .action-icons {
      display: none;
      gap: 12px;
    }
    .item:hover .size-text {
      display: none;
    }
    .item:hover .action-icons {
      display: flex;
    }
    .btn-icon {
      cursor: pointer;
      color: #94a3b8;
      display: flex;
      align-items: center;
      transition: color 0.2s;
    }
    .btn-icon:hover {
      color: #475569;
    }
    .btn-icon.delete:hover {
      color: #ef4444;
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
      .item {
        padding: 8px 12px;
      }
      .name {
        font-size: 0.78rem;
      }
      .size-text {
        font-size: 0.68rem;
      }
    }
  `;

  @property({ type: String }) title = "Files / Documents";
  @property({ type: String, attribute: "files-json" }) filesJson = DEFAULT_FILES_JSON;

  render() {
    let files: FileItem[] = [];
    try {
      files = JSON.parse(this.filesJson);
    } catch {
      files = [];
    }

    return html`
      <div class="card">
        <div class="header">
          <h4 class="title">${this.title}</h4>
          <span class="action">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="12" y1="18" x2="12" y2="12"></line>
              <line x1="9" y1="15" x2="15" y2="15"></line>
            </svg>
            Add Files
          </span>
        </div>
        <div class="list">
          ${files.map((f, idx) => html`
            <div class="item">
              <div class="file-info">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
                <div class="details">
                  <div class="name">${f.name}</div>
                </div>
              </div>
              <div class="actions-wrapper">
                <span class="size-text">${f.size}</span>
                <div class="action-icons">
                  <span class="btn-icon" title="Download">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                  </span>
                  <span class="btn-icon delete" title="Delete" @click=${() => this._deleteFile(idx)}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          `)}
        </div>
      </div>
    `;
  }

  private _deleteFile(index: number) {
    try {
      const files: FileItem[] = JSON.parse(this.filesJson);
      const filtered = files.filter((_, idx) => idx !== index);
      this.filesJson = JSON.stringify(filtered);
    } catch {}
  }
}
