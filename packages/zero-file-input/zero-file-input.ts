// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from 'zero-annotation';
import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

const getThemeManager = () => (window as any).zeroThemeManager;

interface FileItem {
  file: File;
  id: string;
  progress?: number;
  error?: string;
}

export const studioTemplate: ZeroStudioTemplate = {
  kind: 'generic',
  templateHtml: [
    "<div style='padding:20px;border-radius:12px;border:2px dashed rgba(148,163,184,0.3);background:rgba(255,255,255,0.95);text-align:center;'>",
    "<div style='font-size:0.7rem;color:var(--uiv-text-muted,#94a3b8);font-weight:600;margin-bottom:8px;'>{{display:label}}</div>",
    "<div style='font-size:1.5rem;margin-bottom:6px;'>📁</div>",
    "<div style='font-size:0.75rem;color:var(--uiv-text-color,#64748b);'>{{display:placeholder}}</div>",
    "</div>"
  ].join(""),
  labelProp: 'label',
  badges: ['Form', 'File Upload'],
};

function escapeStudio(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

@RendererComponent({
  name: 'zero-file-input',
  version: '1.0.0',
  title: 'File Input',
  elementSelector: 'zero-file-input',
  group: 'Form Controls',
  iconName: 'file-input-icon.png',
})
@applyGlobalStyles()
@customElement('zero-file-input')
export class ZeroFileInput extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) return studioTemplate;
    const labelDisplay = escapeStudio(config.studio.display.label || 'File Input');
    const placeholderDisplay = escapeStudio(config.studio.display.placeholder || 'Choose files or drag and drop');
    const border = 'var(--uiv-border-color, rgba(148,163,184,0.3))';
    const text = 'var(--uiv-text-color, #1e293b)';
    const muted = 'var(--uiv-text-muted, #94a3b8)';
    const bg = 'var(--uiv-surface-color, #fff)';

    return {
      ...studioTemplate,
      templateHtml: [
        `<div style='padding:20px;border-radius:12px;border:2px dashed ${border};background:${bg};text-align:center;'>`,
        `<div style='font-size:0.7rem;color:${muted};font-weight:600;margin-bottom:8px;'>${labelDisplay}</div>`,
        "<div style='font-size:1.5rem;margin-bottom:6px;'>📁</div>",
        `<div style='font-size:0.75rem;color:${text};'>${placeholderDisplay}</div>`,
        "</div>"
      ].join(""),
    };
  }
  // Basic Properties
  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: 'Label',
    placeholderText: 'Enter label text',
    fieldMappings: 'label',
  })
  label: string = '';

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: 'Placeholder',
    placeholderText: 'Enter placeholder text',
    fieldMappings: 'placeholder',
  })
  placeholder: string = 'Choose files or drag and drop';

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: 'Help Text',
    placeholderText: 'Enter help text',
    fieldMappings: 'helpText',
  })
  helpText: string = '';

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: 'Error Message',
    placeholderText: 'Enter error message',
    fieldMappings: 'errorMessage',
  })
  errorMessage: string = '';
  // State Properties
  @property({ type: Boolean })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: 'Required',
    fieldMappings: 'required',
  })
  required: boolean = false;

  @property({ type: Boolean })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: 'Disabled',
    fieldMappings: 'disabled',
  })
  disabled: boolean = false;

  @property({ type: Boolean })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: 'Multiple Files',
    fieldMappings: 'multiple',
  })
  multiple: boolean = false;

  @property({ type: Boolean })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: 'Show Preview',
    fieldMappings: 'showPreview',
  })
  showPreview: boolean = true;

  @property({ type: Boolean })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: 'Show Progress',
    fieldMappings: 'showProgress',
  })
  showProgress: boolean = false;

  @property({ type: Boolean })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: 'Drag and Drop',
    fieldMappings: 'dragDrop',
  })
  dragDrop: boolean = true;
  // File Properties
  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: 'Accept Types',
    placeholderText: 'Enter file types (e.g., .pdf,.jpg,.png)',
    fieldMappings: 'accept',
  })
  accept: string = '';

  @property({ type: Number })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: 'Max File Size (MB)',
    fieldMappings: 'maxFileSize',
  })
  maxFileSize: number = 10;

  @property({ type: Number })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: 'Max Files',
    fieldMappings: 'maxFiles',
  })
  maxFiles: number = 10;
  // Styling Properties
  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: 'Width',
    placeholderText: 'Enter width (e.g., 100%, 300px)',
    fieldMappings: 'width',
  })
  width: string = '100%';

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: 'Height',
    placeholderText: 'Enter height (e.g., auto, 200px)',
    fieldMappings: 'height',
  })
  height: string = 'auto';

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: 'Drop Zone Height',
    placeholderText: 'Enter drop zone height (e.g., 120px)',
    fieldMappings: 'dropZoneHeight',
  })
  dropZoneHeight: string = '120px';

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: 'Border Radius',
    placeholderText: 'Enter border radius (e.g., 4px)',
    fieldMappings: 'borderRadius',
  })
  borderRadius: string = '4px';

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: 'Primary Color',
    fieldMappings: 'primaryColor',
  })
  primaryColor: string = '#1976d2';

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: 'Error Color',
    fieldMappings: 'errorColor',
  })
  errorColor: string = '#f44336';

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: 'Success Color',
    fieldMappings: 'successColor',
  })
  successColor: string = '#4caf50';

  // Internal State
  @state()
  private files: FileItem[] = [];

  @state()
  private isDragOver: boolean = false;

  @state()
  private hasError: boolean = false;

  static styles = css`
    :host {
      display: block;
      font-family: var(--uiv-font-family, inherit);
      --uiv-primary: var(--uiv-primary-color, #1976d2);
      --uiv-bg: var(--uiv-surface-color, #ffffff);
      --uiv-text: var(--uiv-text-color, #333);
      --uiv-border: var(--uiv-border-color, #e0e0e0);
    }

    .form-field {
      position: relative;
      margin-bottom: 16px;
    }

    .form-field-label {
      display: block;
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 8px;
      color: var(--uiv-text);
    }

    .form-field-label.required::after {
      content: ' *';
      color: var(--uiv-error-color, #f44336);
    }

    .file-input-container {
      position: relative;
      border: 2px dashed var(--uiv-border);
      border-radius: 12px;
      background: var(--uiv-bg);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      box-shadow: var(--uiv-shadow-depth, none);
      overflow: hidden;
    }

    .file-input-container:hover {
      border-color: var(--uiv-primary);
      box-shadow: var(--uiv-border-glow);
    }

    .drop-zone {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 32px;
      min-height: 140px;
      text-align: center;
    }

    .upload-icon {
      width: 48px;
      height: 48px;
      margin-bottom: 16px;
      color: var(--uiv-primary);
      opacity: 0.8;
    }

    .upload-text {
      font-size: 16px;
      font-weight: 600;
      color: var(--uiv-text);
      margin-bottom: 4px;
    }

    .upload-subtext {
      font-size: 12px;
      color: var(--uiv-text);
      opacity: 0.6;
    }

    .file-item {
      display: flex;
      align-items: center;
      padding: 12px;
      border: 1px solid var(--uiv-border);
      border-radius: 8px;
      margin-top: 8px;
      background: var(--uiv-bg);
      box-shadow: var(--uiv-shadow-depth, none);
    }

    .file-name {
      font-weight: 600;
      color: var(--uiv-text);
    }

    .browse-button {
      background: var(--uiv-primary);
      color: white;
      padding: 8px 24px;
      border-radius: 8px;
      border: none;
      font-weight: 600;
      margin-top: 16px;
      cursor: pointer;
      box-shadow: var(--uiv-border-glow);
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    getThemeManager()?.addEventListener('theme-changed', () => this.requestUpdate());
  }

  protected render(): TemplateResult {
    const themeModule = getThemeManager()?.getActiveTheme('zero-standard-themes');
    return html`
      <style>
        ${themeModule ? themeModule.getGlobalStyles() : ''}
        ${themeModule ? themeModule.getComponentStyles('file-input') : ''}
      </style>
      <div class="form-field uiv-${themeModule?.id}-theme" style="width: ${this.width}">
        ${this.label ? html`
          <label class="form-field-label uiv-${themeModule?.id}-text ${this.required ? 'required' : ''}">
            ${this.label}
          </label>
        ` : ''}
        <div 
          class="file-input-container uiv-${themeModule?.id}-scan ${this.isDragOver ? 'drag-over' : ''} ${this.disabled ? 'disabled' : ''} ${this.hasError ? 'error' : ''}"
          @dragover=${this.handleDragOver}
          @dragleave=${this.handleDragLeave}
          @drop=${this.handleDrop}
          @click=${this.handleClick}
        >
          <input
            class="file-input"
            type="file"
            ?multiple=${this.multiple}
            ?disabled=${this.disabled}
            accept=${this.accept}
            @change=${this.handleFileSelect}
            @click=${this.handleInputStopPropagation}
          />
          
          <div class="drop-zone">
            <svg class="upload-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
            </svg>
            <div class="upload-text uiv-${themeModule?.id}-text">${this.placeholder}</div>
            <div class="upload-subtext uiv-${themeModule?.id}-text">
              ${this.accept ? `Supported: ${this.accept}` : 'All file types supported'} 
              ${this.maxFileSize ? `• Max ${this.maxFileSize}MB` : ''}
            </div>
            ${!this.dragDrop ? html`
              <button type="button" class="browse-button uiv-${themeModule?.id}-card" @click=${this.handleBrowseClick}>
                Browse Files
              </button>
            ` : ''}
          </div>
        </div>

        ${this.files.length > 0 && this.showPreview ? html`
          <div class="file-list">
            ${this.files.map(fileItem => html`
              <div class="file-item uiv-${themeModule?.id}-card">
                <div class="file-preview uiv-${themeModule?.id}-card">
                  ${this.isImageFile(fileItem.file) ? html`
                    <img src=${URL.createObjectURL(fileItem.file)} alt=${fileItem.file.name} />
                  ` : html`
                    ${this.getFileExtension(fileItem.file.name)}
                  `}
                </div>
                <div class="file-info">
                  <div class="file-name uiv-${themeModule?.id}-text">${fileItem.file.name}</div>
                  <div class="file-size uiv-${themeModule?.id}-text" style="opacity: 0.7">${this.formatFileSize(fileItem.file.size)}</div>
                  ${this.showProgress && fileItem.progress !== undefined ? html`
                    <div class="file-progress" style="background: rgba(var(--uiv-primary-rgb, 25, 118, 210), 0.1)">
                      <div class="file-progress-bar uiv-${themeModule?.id}-card" style="width: ${fileItem.progress}%; background: var(--uiv-primary-color)"></div>
                    </div>
                  ` : ''}
                  ${fileItem.error ? html`
                    <div class="file-error" style="color: var(--uiv-error-color, #f44336)">${fileItem.error}</div>
                  ` : ''}
                </div>
                <div class="file-actions">
                  <button 
                    type="button" 
                    class="file-action-btn remove-btn uiv-${themeModule?.id}-card"
                    style="border: 1px solid var(--uiv-error-color, #f44336); color: var(--uiv-error-color, #f44336); background: transparent"
                    @click=${() => this.removeFile(fileItem.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            `)}
          </div>
        ` : ''}

        ${this.helpText && !this.hasError ? html`
          <div class="form-field-hint uiv-${themeModule?.id}-text" style="opacity: 0.7">${this.helpText}</div>
        ` : ''}
        
        ${this.errorMessage && this.hasError ? html`
          <div class="form-field-error uiv-${themeModule?.id}-text" style="color: var(--uiv-error-color, #f44336)">${this.errorMessage}</div>
        ` : ''}
      </div>
    `;
  }

  private handleDragOver(event: DragEvent): void {
    if (this.disabled || !this.dragDrop) return;
    
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = true;
  }

  private handleDragLeave(event: DragEvent): void {
    if (this.disabled || !this.dragDrop) return;
    
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
  }

  private handleDrop(event: DragEvent): void {
    if (this.disabled || !this.dragDrop) return;
    
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;

    const files = Array.from(event.dataTransfer?.files || []);
    this.processFiles(files);
  }
  private handleClick(event: Event): void {
    if (this.disabled) return;
    
    // Prevent event from bubbling to avoid double trigger
    event.preventDefault();
    event.stopPropagation();
    
    const input = this.shadowRoot?.querySelector('.file-input') as HTMLInputElement;
    if (input) {
      input.click();
    }
  }

  private handleBrowseClick(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.handleClick(event);
  }
  private handleInputStopPropagation(event: Event): void {
    // Prevent click event from bubbling up to container
    event.stopPropagation();
  }

  private handleFileSelect(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    
    const input = event.target as HTMLInputElement;
    const files = Array.from(input.files || []);
    this.processFiles(files);
    
    // Clear the input value to allow selecting the same file again
    input.value = '';
  }

  private processFiles(files: File[]): void {
    let validFiles = files.filter(file => this.validateFile(file));
    
    if (!this.multiple) {
      validFiles = validFiles.slice(0, 1);
      this.files = [];
    }

    if (this.maxFiles && this.files.length + validFiles.length > this.maxFiles) {
      validFiles = validFiles.slice(0, this.maxFiles - this.files.length);
      this.hasError = true;
      this.errorMessage = `Maximum ${this.maxFiles} files allowed`;
    }

    const newFileItems: FileItem[] = validFiles.map(file => ({
      file,
      id: this.generateId(),
      progress: this.showProgress ? 0 : undefined
    }));

    this.files = [...this.files, ...newFileItems];

    // Simulate upload progress if enabled
    if (this.showProgress) {
      newFileItems.forEach(fileItem => {
        this.simulateUpload(fileItem);
      });
    }

    this.dispatchChangeEvent();
  }

  private validateFile(file: File): boolean {
    // Check file size
    if (this.maxFileSize && file.size > this.maxFileSize * 1024 * 1024) {
      this.hasError = true;
      this.errorMessage = `File size must be less than ${this.maxFileSize}MB`;
      return false;
    }

    // Check file type
    if (this.accept) {
      const acceptedTypes = this.accept.split(',').map(type => type.trim().toLowerCase());
      const fileType = file.type.toLowerCase();
      const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
      
      const isValidType = acceptedTypes.some(type => {
        if (type.startsWith('.')) {
          return type === fileExtension;
        }
        return fileType.match(type.replace('*', '.*'));
      });

      if (!isValidType) {
        this.hasError = true;
        this.errorMessage = `File type not supported. Accepted: ${this.accept}`;
        return false;
      }
    }

    this.hasError = false;
    this.errorMessage = '';
    return true;
  }

  private removeFile(fileId: string): void {
    this.files = this.files.filter(item => item.id !== fileId);
    this.dispatchChangeEvent();
    
    if (this.files.length === 0) {
      this.hasError = false;
      this.errorMessage = '';
    }
  }

  private simulateUpload(fileItem: FileItem): void {
    const interval = setInterval(() => {
      if (fileItem.progress !== undefined && fileItem.progress < 100) {
        fileItem.progress += Math.random() * 20;
        if (fileItem.progress >= 100) {
          fileItem.progress = 100;
          clearInterval(interval);
        }
        this.requestUpdate();
      }
    }, 200);
  }

  private isImageFile(file: File): boolean {
    return file.type.startsWith('image/');
  }

  private getFileExtension(filename: string): string {
    const ext = filename.split('.').pop()?.toLowerCase();
    return ext || 'file';
  }

  private formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  private dispatchChangeEvent(): void {
    const files = this.files.map(item => item.file);
    
    this.dispatchEvent(new CustomEvent('change', {
      detail: { files, value: files },
      bubbles: true,
      composed: true
    }));

    this.dispatchEvent(new CustomEvent('file-change', {
      detail: { 
        files, 
        fileItems: this.files,
        count: files.length
      },
      bubbles: true,
      composed: true
    }));
  }

  @RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: 'On Change',
    eventTrigger: 'change',
  })
  handleChange(_event: Event) {
    // This method is triggered by the attribute system
    this.dispatchChangeEvent();
  }

  @RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: 'On File Change',
    eventTrigger: 'file-change',
  })
  handleFileChange(_event: Event) {
    // This method is triggered by the attribute system
    this.dispatchChangeEvent();
  }

  // Public API
  public clearFiles(): void {
    this.files = [];
    this.hasError = false;
    this.errorMessage = '';
    this.dispatchChangeEvent();
  }

  public getFiles(): File[] {
    return this.files.map(item => item.file);
  }

  public setError(message: string): void {
    this.hasError = true;
    this.errorMessage = message;
  }

  public clearError(): void {
    this.hasError = false;
    this.errorMessage = '';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'zero-file-input': ZeroFileInput;
  }
}
