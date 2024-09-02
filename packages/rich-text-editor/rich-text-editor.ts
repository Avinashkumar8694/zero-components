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

    @property({ type: String, reflect: true }) content = '';
  @property({ type: Boolean }) toolbarVisible = false; // Property to control toolbar visibility

  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      width: 100%;
      max-width: 600px;
      margin: auto;
      border: 1px solid #ddd;
      border-radius: 8px;
      overflow: hidden;
      position: relative; /* Position relative for popup positioning */
    }
    .toolbar {
      display: flex;
      justify-content: space-around;
      padding: 8px;
      background-color: #f5f5f5;
      border-bottom: 1px solid #ddd;
      position: absolute; /* Position toolbar absolutely */
      top: 40px;
      left: 10px;
      right: 10px;
      z-index: 1;
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
    .toolbar button {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 18px;
      padding: 6px;
      transition: background-color 0.3s ease;
    }
    .toolbar button:hover {
      background-color: #e0e0e0;
      border-radius: 4px;
    }
    .editor {
      min-height: 200px;
      padding: 10px;
      outline: none;
    }
    .toolbar-toggle {
      background: none;
      border: none;
      cursor: pointer;
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 20px;
      transition: background-color 0.3s ease;
    }
    .toolbar-toggle:hover {
      background-color: #e0e0e0;
      border-radius: 50%;
    }
  `;

  private toggleToolbar() {
    this.toolbarVisible = !this.toolbarVisible;
  }

  private execCommand(command: string) {
    document.execCommand(command, false, '');
    this.updateContent();
  }

  private updateContent() {
    const editor = this.shadowRoot?.querySelector('.editor') as HTMLDivElement;
    if (editor) {
      this.content = editor.innerHTML;
    }
  }

  private handleInput() {
    this.updateContent();
  }

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('content')) {
      const editor = this.shadowRoot?.querySelector('.editor') as HTMLDivElement;
      if (editor && this.content !== editor.innerHTML) {
        editor.innerHTML = this.content;
      }
    }
  }

  render() {
    return html`
      <button class="toolbar-toggle" @click="${this.toggleToolbar}" title="Toggle Toolbar">☰</button>
      <div class="toolbar ${this.toolbarVisible ? 'visible' : ''}">
        <button @click="${() => this.execCommand('bold')}" title="Bold"><b>B</b></button>
        <button @click="${() => this.execCommand('italic')}" title="Italic"><i>I</i></button>
        <button @click="${() => this.execCommand('underline')}" title="Underline"><u>U</u></button>
      </div>
      <div
        class="editor"
        contenteditable="true"
        @input="${this.handleInput}"
      ></div>
    `;
  }
}
