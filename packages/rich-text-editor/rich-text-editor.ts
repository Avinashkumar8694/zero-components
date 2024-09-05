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
  content = ``;
  @property({ type: String }) 
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXTAREA,
    displayLabel: '',
    placeholderText: '',
    fieldMappings: 'htmldata',
  })
  set htmldata(data:any){
    this.content = data;
    this.updateEditorContent();
  }
  @property({ type: Boolean, reflect: true }) toolbarVisible = false;
  @property({ type: Boolean, reflect: true })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: '',
    placeholderText: '',
    initialValue: true,
    fieldMappings: 'editorMode',
  }) 
  editorMode = true;
  isWrapped = false

  private selectionRange: Range | null = null;

  static styles = css`
    :host {
      display: block;
      width: 100%;
      margin: auto;
      /* border: 1px solid #ddd; */
      border-radius: 8px;
      overflow: visible;
      position: relative;
    }

    :host([editorMode]) .editor {
      position: relative;
    }
    :host([editorMode]) .editor:hover {
      border: 1px solid #ddd; /* Change this to your desired border color */
      box-sizing: border-box;
    }
    .toolbar {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      padding: 8px;
      color: #5b5f61;
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
      height: 100%;
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
    .image-container {
      position: relative;
      display: inline-block;
      /* border: 1px solid #ddd; */
    }
    .resize-icon {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 24px;
      height: 24px;
      /* background: url('resize-icon.png') no-repeat center center; */
      /* background-color: red; */
      background-size: contain;
      cursor: nwse-resize;
      visibility: visible
    }
    /* .image-container:hover .resize-icon {
      visibility: visible;
    } */
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
    this.updateContent();
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
    document.execCommand(command, true, value);
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
      console.log(this.content)
      // setTimeout(() => {
      //   this.attachResizeHandler()
      // }, 400);
    }
  }

  private updateEditorContent() {
    const editor = this.shadowRoot?.querySelector('.editor') as HTMLDivElement;
    if (editor) {
      editor.innerHTML = this.content || '';
      if (!this.editorMode) {
        editor.querySelectorAll('img').forEach((img) => {
          this.unwrapImage(img);
        })
      }

    }
  }

  onPaste() {
    setTimeout(() => {
      const editor = this.shadowRoot?.querySelector('.editor')
      if (!this.editorMode) {
        return;
      }
      editor.querySelectorAll('img').forEach((img) => {
        if (!img.classList.contains('resize-icon')) {
          img.addEventListener('mouseenter', (event) => {
            if (!this.editorMode) {
              return;
            }
            event.stopPropagation();
            this.wrapImage(img);
          });

          img.addEventListener('mouseleave', (event) => {
            if (!this.editorMode) {
              return;
            }
            event.stopPropagation();
            // Check if the cursor is not entering the resize icon
            const relatedTarget = event.relatedTarget;
            if (!relatedTarget || !relatedTarget?.['classList']?.contains('resize-icon')) {
              this.unwrapImage(img);
            }
          });
        }
      });
    }, 400);
  }


  wrapImage(img) {
    if (!img.hasAttribute('data-wrapped')) {
      // Create a container for the image
      const container = document.createElement('div');
      container.className = 'image-container';
      img.parentNode?.insertBefore(container, img);
      container.appendChild(img);

      // Create the resize icon image
      const resizeIcon = document.createElement('img');
      resizeIcon.className = 'resize-icon';
      resizeIcon.src = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZD0iTTEwIDIwTDIwIDIwTDIwIDEwIiBzdHJva2U9IiMyMjIyMjIiLz4NCjxwYXRoIGQ9Ik0xMiAxN0wxNyAxN0wxNyAxMiIgc3Ryb2tlPSIjMjIyMjIyIi8+DQo8L3N2Zz4='; // Path to your resize icon image
      resizeIcon.alt = 'Resize Icon'; // Accessibility improvement
      container.appendChild(resizeIcon);

      // Set the data attribute to indicate the image is wrapped
      img.setAttribute('data-wrapped', 'true');
      this.addResizeFunctionality(container); // Handle functionality for the resize icon if needed
    }
  }

  unwrapImage(img) {
    if (img.hasAttribute('data-wrapped')) {
      const container = img.parentNode;
      if (container.classList.contains('image-container')) {
        // Remove the resize icon image
        const resizeIcon = container.querySelector('.resize-icon');
        if (resizeIcon) {
          resizeIcon.remove();
        }
        // Move the image out of the container
        container.parentNode?.insertBefore(img, container);
        container.remove(); // Remove the container

        // Remove the data attribute to indicate the image is no longer wrapped
        img.removeAttribute('data-wrapped');
      }
    }
  }

  private addResizeFunctionality(container: HTMLDivElement) {
    const img = container.querySelector('img') as HTMLImageElement;
    const resizeIcon = container.querySelector('.resize-icon') as HTMLDivElement;

    let startX: number;
    let startY: number;
    let startWidth: number;
    let startHeight: number;

    const onMouseMove = (event: MouseEvent) => {
      const newWidth = startWidth + (event.clientX - startX);
      const newHeight = startHeight + (event.clientY - startY);

      img.style.width = `${newWidth}px`;
      img.style.height = `${newHeight}px`;
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseDown = (event: MouseEvent) => {
      startX = event.clientX;
      startY = event.clientY;
      startWidth = img.offsetWidth;
      startHeight = img.offsetHeight;

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    };

    resizeIcon.addEventListener('mousedown', onMouseDown);
    resizeIcon.addEventListener('mouseleave', (event) => {
      event.stopPropagation();
      // Check if the cursor is not entering the resize icon
      const relatedTarget = event.relatedTarget;
      if (relatedTarget && relatedTarget?.['classList']?.contains('editor')) {
        this.unwrapImage(img);
      }
    });
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

  private handleAlignChange(event: Event) {
    event.stopPropagation();
    const select = event.target as HTMLSelectElement;
    this.execCommand('justifyLeft', select.value === 'left' ? '' : null);
    this.execCommand('justifyCenter', select.value === 'center' ? '' : null);
    this.execCommand('justifyRight', select.value === 'right' ? '' : null);
    this.execCommand('justifyFull', select.value === 'justify' ? '' : null);
  }

  private toggleEditorMode() {
    this.editorMode = !this.editorMode;
    const editor = this.shadowRoot?.querySelector('.editor')

    if (!this.editorMode) {
      editor.querySelectorAll('img').forEach((img) => {
        this.unwrapImage(img)
      });
    }
  }

  private handleFontFamilyChange(event: Event) {
    event.stopPropagation();
    const select = event.target as HTMLSelectElement;
    this.execCommand('fontName', select.value);
  }

  render() {
    return html`
      <div class="toolbar ${this.toolbarVisible ? 'visible' : ''}">
        <button @click="${() => this.execCommand('bold')}" title="Bold">B</button>
        <button @click="${() => this.execCommand('italic')}" title="Italic">I</button>
        <button @click="${() => this.execCommand('underline')}" title="Underline">U</button>
        <button @click="${() => this.execCommand('strikethrough')}" title="Strikethrough">S</button>
        <input type="color" @input="${this.handleColorChange}" title="Text Color">
        <input type="color" @input="${this.handleBgColorChange}" title="Background Color">
        <select @change="${this.handleFontFamilyChange}" title="Font Family">
          <option value="Arial">Arial</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
        </select>
        <select @change="${this.handleFontSizeChange}">
          <option value="1">Small</option>
          <option value="3">Normal</option>
          <option value="5">Large</option>
          <option value="7">Huge</option>
        </select>
        <select @change="${this.handleAlignChange}">
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
          <option value="justify">Justify</option>
        </select>
        <!-- <button @click="${this.toggleEditorMode}" title="Toggle Mode">
          ${this.editorMode ? 'Preview' : 'Edit'}
        </button> -->
      </div>
      <button class="toolbar-toggle" @click="${this.toggleToolbar}" ?hidden="${!this.editorMode}" title="Toggle Toolbar">🛠️</button>
      <div class="editor" contenteditable="${this.editorMode}" @input="${this.handleInput}" @paste="${this.onPaste}"></div>
      <!-- <div class="preview" ?hidden="${this.editorMode}"></div> -->
    `;
  }
}