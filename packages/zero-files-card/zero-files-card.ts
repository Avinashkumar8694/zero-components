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
    .list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      transition: all 0.2s;
    }
    .item:hover {
      border-color: #cbd5e1;
      background: #f1f5f9;
    }
    .file-info {
      display: flex;
      align-items: center;
      gap: 10px;
      min-width: 0;
    }
    .icon {
      font-size: 1.25rem;
    }
    .details {
      min-width: 0;
    }
    .name {
      font-size: 0.82rem;
      font-weight: 600;
      color: #0f172a;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .size {
      font-size: 0.72rem;
      color: #64748b;
      margin-top: 2px;
    }
    .actions {
      display: flex;
      gap: 8px;
    }
    .btn-icon {
      cursor: pointer;
      color: #64748b;
      font-size: 0.875rem;
      user-select: none;
      transition: color 0.2s;
    }
    .btn-icon:hover {
      color: #0f172a;
    }
    .btn-icon.delete:hover {
      color: #ef4444;
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
          <span class="action">Add File</span>
        </div>
        <div class="list">
          ${files.map((f, idx) => html`
            <div class="item">
              <div class="file-info">
                <span class="icon">📄</span>
                <div class="details">
                  <div class="name">${f.name}</div>
                  <div class="size">${f.size}</div>
                </div>
              </div>
              <div class="actions">
                <span class="btn-icon" title="Download">⬇️</span>
                <span class="btn-icon delete" title="Delete" @click=${() => this._deleteFile(idx)}>🗑️</span>
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
