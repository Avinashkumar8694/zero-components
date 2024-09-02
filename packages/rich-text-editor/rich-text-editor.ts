import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType, DropdownOptionItem, RangeSliderConfig, FileInputConfig, DatePickerConfig, NumberInputConfig, TextAreaConfig } from 'zero-annotation';

import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

/**
 * Represents a user profile form with various input fields.
 * 
 * @export
 * @class UserProfileForm
 * @extends {LitElement}
 */
@RendererComponent({
  name: 'rich-text-editor',
  version: '1.0.0',
  title: 'Rich text editor',
  elementSelector: 'zero-rich-text-editor',
  group: 'Forms',
  iconName: 'profile-icon.png', // Replace with your icon path
})
@applyGlobalStyles()
export class RichTextEditor extends LitElement {

  @property({ type: String }) content = '';
  @property({ type: Boolean }) toolbarVisible = false;
  @property({ type: Boolean }) editorMode = true;

  private selectionRange: Range | null = null;

  static styles = css`
    :host {
      display: block;
      width: 100%;
      max-width: 600px;
      margin: auto;
      border: 1px solid #ddd;
      border-radius: 8px;
      overflow: hidden;
      position: relative;
    }
    .toolbar {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      padding: 8px;
      background-color: #f5f5f5;
      border-bottom: 1px solid #ddd;
      position: absolute;
      top: 40px;
      left: 0;
      right: 0;
      z-index: 10;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      transition: opacity 0.3s ease, transform 0.3s ease;
      opacity: 0;
      transform: translateY(-10px);
      pointer-events: none;
    }
    .toolbar.visible {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }
    .toolbar button, .toolbar select, .toolbar input[type="color"] {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 16px;
      padding: 6px;
      transition: background-color 0.3s ease;
      position: relative;
    }
    .toolbar button:hover, .toolbar select:hover, .toolbar input[type="color"]:hover {
      background-color: #e0e0e0;
      border-radius: 4px;
    }
    .toolbar button::after {
      content: attr(title);
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      background-color: #333;
      color: #fff;
      padding: 4px;
      border-radius: 4px;
      white-space: nowrap;
      font-size: 12px;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    .toolbar button:hover::after {
      opacity: 1;
    }
    .editor, .preview {
      min-height: 200px;
      padding: 10px;
      outline: none;
      position: relative;
      z-index: 1;
    }
    .toolbar-toggle {
      background: none;
      border: none;
      cursor: pointer;
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 18px;
      transition: background-color 0.3s ease;
      z-index: 20;
    }
    .toolbar-toggle:hover {
      background-color: #e0e0e0;
      border-radius: 50%;
    }
    .toolbar input[type="color"] {
      width: 24px;
      height: 24px;
      padding: 0;
      border-radius: 50%;
    }
    .toolbar .align-left::before { content: '←'; }
    .toolbar .align-center::before { content: '↔'; }
    .toolbar .align-right::before { content: '→'; }
    .toolbar .align-justify::before { content: '≡'; }
    .toolbar .bold::before { content: 'B'; font-weight: bold; }
    .toolbar .italic::before { content: 'I'; font-style: italic; }
    .toolbar .underline::before { content: 'U'; text-decoration: underline; }
    .toolbar .strikethrough::before { content: 'S'; text-decoration: line-through; }
    .toolbar select {
      font-size: 14px;
    }
  `;

  firstUpdated() {
    // Ensure the initial content is set correctly
    this.updateEditorContent();
  }

  updated(changedProperties: Map<string | number | symbol, unknown>): void {
    super.updated(changedProperties);
    if (changedProperties.has('content') && this.editorMode) {
      this.restoreCursor(); // Restore the cursor after the content is updated
    }
  }

  private storeCursor() {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      this.selectionRange = selection.getRangeAt(0).cloneRange();
    }
  }

  private restoreCursor() {
    if (this.selectionRange) {
      const selection = window.getSelection();
      if (selection) {
        if (!this.selectionRange?.collapsed) {
          selection.removeAllRanges();
        }
        selection.addRange(this.selectionRange);
        // Ensure cursor is placed correctly
        this.selectionRange.collapse(false); // Move cursor to the end
      }
    }
  }

  private toggleToolbar(event: Event) {
    event.stopPropagation();
    this.toolbarVisible = !this.toolbarVisible;
  }

  private execCommand(command: string, value?: string) {
    this.storeCursor(); // Store cursor position before executing the command
    document.execCommand(command, false, value);
    this.updateContent();
  }

  private updateContent() {
    const editor = this.shadowRoot?.querySelector('.editor') as HTMLDivElement;
    if (editor) {
      this.content = editor.innerHTML;
      this.dispatchEvent(new CustomEvent('content-changed', {
        detail: { content: this.content },
        bubbles: true,
        composed: true
      }));
    }
  }

  private updateEditorContent() {
    const editor = this.shadowRoot?.querySelector('.editor') as HTMLDivElement;
    if (editor) {
      editor.innerHTML = this.content || '';
    }
  }

  private handleInput(event: Event) {
    event.stopPropagation();
    // this.storeCursor();
    this.updateContent();
  }

  private handleColorChange(event: Event) {
    event.stopPropagation();
    const input = event.target as HTMLInputElement;
    this.execCommand('foreColor', input.value);
  }

  private handleBgColorChange(event: Event) {
    event.stopPropagation();
    const input = event.target as HTMLInputElement;
    this.execCommand('backColor', input.value);
  }

  private handleFontSizeChange(event: Event) {
    event.stopPropagation();
    const select = event.target as HTMLSelectElement;
    this.execCommand('fontSize', select.value);
  }

  private handleTextAlign(command: string) {
    this.execCommand(command);
  }

  private handleListTypeChange(event: Event) {
    event.stopPropagation();
    const select = event.target as HTMLSelectElement;
    const command = select.value === 'ordered' ? 'insertOrderedList' : 'insertUnorderedList';
    this.execCommand(command);
  }

  private handleLink() {
    const url = prompt('Enter the URL:', 'http://');
    if (url) {
      this.execCommand('createLink', url);
    }
  }

  private clearFormatting() {
    this.execCommand('removeFormat');
  }

  private undo() {
    this.execCommand('undo');
  }

  private redo() {
    this.execCommand('redo');
  }

  render() {
    return html`
      <button class="toolbar-toggle" @click="${this.toggleToolbar}" title="Toggle Toolbar">
        Ⓣ
      </button>
      ${this.editorMode ? html`
        <div class="toolbar ${this.toolbarVisible ? 'visible' : ''}">
          <button @click="${() => this.execCommand('bold')}" title="Bold" class="bold"></button>
          <button @click="${() => this.execCommand('italic')}" title="Italic" class="italic"></button>
          <button @click="${() => this.execCommand('underline')}" title="Underline" class="underline"></button>
          <button @click="${() => this.execCommand('strikeThrough')}" title="Strikethrough" class="strikethrough"></button>
          <input type="color" @input="${this.handleColorChange}" title="Text Color">
          <input type="color" @input="${this.handleBgColorChange}" title="Background Color">
          <select @change="${this.handleFontSizeChange}" title="Font Size">
            <option value="1">S</option>
            <option value="2">M</option>
            <option value="3">L</option>
            <option value="4">XL</option>
          </select>
          <button @click="${() => this.handleTextAlign('justifyLeft')}" title="Align Left" class="align-left"></button>
          <button @click="${() => this.handleTextAlign('justifyCenter')}" title="Align Center" class="align-center"></button>
          <button @click="${() => this.handleTextAlign('justifyRight')}" title="Align Right" class="align-right"></button>
          <button @click="${() => this.handleTextAlign('justifyFull')}" title="Align Justify" class="align-justify"></button>
          <select @change="${this.handleListTypeChange}" title="List Type">
            <option value="unordered">Bulleted</option>
            <option value="ordered">Numbered</option>
          </select>
          <button @click="${this.handleLink}" title="Insert Link">🔗</button>
          <button @click="${this.clearFormatting}" title="Clear Formatting">🧹</button>
          <button @click="${this.undo}" title="Undo">↩️</button>
          <button @click="${this.redo}" title="Redo">↪️</button>
        </div>
        <div class="editor" contenteditable="true" @input="${this.handleInput}">${this.content}</div>
      ` : html`
        <div class="preview" @click="${this.toggleToolbar}">${this.content}</div>
      `}
    `;
  }
}