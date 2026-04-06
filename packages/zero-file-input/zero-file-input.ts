// @environment page
import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

interface FileItem {
  file: File;
  id: string;
  progress?: number;
  error?: string;
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
export class ZeroFileInput extends LitElement {  // Basic Properties
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
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    .form-field {
      position: relative;
      margin-bottom: 16px;
    }    .form-field-label {
      display: block;
      font-size: var(--font-size-base, 14px);
      font-weight: 500;
      margin-bottom: 8px;
      color: var(--text-primary, rgba(0, 0, 0, 0.87));
    }

    .form-field-label.required::after {
      content: ' *';
      color: var(--error-color, #f44336);
    }    .file-input-container {
      position: relative;
      border: 2px dashed var(--border-color, #e0e0e0);
      border-radius: var(--border-radius, 4px);
      background: var(--background-color, #ffffff);
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .file-input-container:hover {
      border-color: var(--primary-color, #1976d2);
      background: var(--hover-background, #f8f9fa);
    }    .file-input-container.drag-over {
      border-color: var(--primary-color, #1976d2);
      background: color-mix(in srgb, var(--primary-color, #1976d2) 5%, #ffffff);
      border-style: solid;
    }

    .file-input-container.disabled {
      opacity: 0.6;
      cursor: not-allowed;
      pointer-events: none;
    }

    .file-input-container.error {
      border-color: var(--error-color, #f44336);
    }

    .drop-zone {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;      padding: var(--spacing-lg, 24px);
      min-height: var(--drop-zone-height, 120px);
      text-align: center;
    }    .file-input {
      position: absolute;
      opacity: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
      pointer-events: none;
    }.upload-icon {
      width: var(--icon-size-xl, 32px);
      height: var(--icon-size-xl, 32px);
      margin-bottom: 12px;
      opacity: 0.6;
    }.upload-text {
      font-size: var(--font-size-lg, 16px);
      color: var(--text-primary, rgba(0, 0, 0, 0.87));
      margin-bottom: 4px;
    }

    .upload-subtext {
      font-size: var(--font-size-base, 14px);
      color: var(--text-secondary, rgba(0, 0, 0, 0.6));
    }

    .file-list {
      margin-top: 16px;
    }    .file-item {
      display: flex;
      align-items: center;
      padding: var(--spacing-md, 12px);
      border: 1px solid #e0e0e0;
      border-radius: var(--border-radius-sm, 4px);
      margin-bottom: 8px;
      background: white;
    }    .file-preview {
      width: var(--icon-size-xl, 40px);
      height: var(--icon-size-xl, 40px);
      border-radius: var(--border-radius-sm, 4px);
      margin-right: 12px;
      object-fit: cover;
      background: #f5f5f5;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: var(--font-size-xs, 12px);
      color: var(--text-secondary, #666);
      text-transform: uppercase;
      font-weight: bold;
      border: 1px solid #e0e0e0;
      overflow: hidden;
    }

    .file-preview img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }

    .file-info {
      flex: 1;
    }    .file-name {
      font-size: var(--font-size-base, 14px);
      font-weight: 500;
      color: var(--text-primary, rgba(0, 0, 0, 0.87));
      margin-bottom: 2px;
    }

    .file-size {
      font-size: var(--font-size-xs, 12px);
      color: var(--text-secondary, rgba(0, 0, 0, 0.6));
    }

    .file-progress {
      width: 100%;
      height: 4px;      background: var(--background-secondary, #e0e0e0);
      border-radius: var(--border-radius-xs, 2px);
      margin-top: 4px;
      overflow: hidden;
    }

    .file-progress-bar {
      height: 100%;
      background: var(--success-color, #4caf50);
      transition: width 0.3s ease;
    }    .file-error {
      font-size: var(--font-size-xs, 12px);
      color: var(--error-color, #f44336);
      margin-top: 2px;
    }.file-actions {
      display: flex;
      gap: var(--spacing-sm, 8px);
    }

    .file-action-btn {
      padding: var(--spacing-xs, 4px) var(--spacing-sm, 8px);
      border: none;
      border-radius: var(--border-radius-sm, 4px);
      font-size: var(--font-size-xs, 12px);
      cursor: pointer;
      transition: var(--transition-fast, background 0.2s ease);
    }

    .remove-btn {
      background: #ffebee;
      color: var(--error-color, #f44336);
    }

    .remove-btn:hover {
      background: #ffcdd2;
    }    .form-field-hint {
      font-size: var(--font-size-xs, 12px);
      color: var(--text-secondary, rgba(0, 0, 0, 0.6));
      margin-top: 4px;
    }

    .form-field-error {      font-size: var(--font-size-xs, 12px);
      color: var(--error-color, #f44336);
      margin-top: 4px;
    }    .browse-button {
      display: inline-flex;
      align-items: center;
      padding: var(--spacing-sm, 8px) var(--spacing-lg, 16px);
      background: var(--primary-color, #1976d2);
      color: white;
      border: none;
      border-radius: var(--border-radius-sm, 4px);
      font-size: var(--font-size-base, 14px);
      cursor: pointer;
      transition: var(--transition-fast, background 0.2s ease);
      margin-top: var(--spacing-md, 12px);
    }

    .browse-button:hover {
      background: color-mix(in srgb, var(--primary-color, #1976d2) 90%, black);
    }

    @media (max-width: 768px) {
      .drop-zone {
        padding: 16px;
        min-height: 80px;
      }
        .upload-text {
        font-size: var(--font-size-base, 14px);
      }
    }
  `;

  protected render(): TemplateResult {
    return html`
      <div class="form-field" style="width: ${this.width}; height: ${this.height}">
        ${this.label ? html`
          <label class="form-field-label ${this.required ? 'required' : ''}">
            ${this.label}
          </label>
        ` : ''}        <div 
          class="file-input-container ${this.isDragOver ? 'drag-over' : ''} ${this.disabled ? 'disabled' : ''} ${this.hasError ? 'error' : ''}"
          @dragover=${this.handleDragOver}
          @dragleave=${this.handleDragLeave}
          @drop=${this.handleDrop}
          @click=${this.handleClick}
          style="
            --primary-color: ${this.primaryColor};
            --error-color: ${this.errorColor};
            --success-color: ${this.successColor};
            --border-radius: ${this.borderRadius};
            --drop-zone-height: ${this.dropZoneHeight};
          "
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
            <div class="upload-text">${this.placeholder}</div>
            <div class="upload-subtext">
              ${this.accept ? `Supported: ${this.accept}` : 'All file types supported'} 
              ${this.maxFileSize ? `• Max ${this.maxFileSize}MB` : ''}
            </div>
            ${!this.dragDrop ? html`
              <button type="button" class="browse-button" @click=${this.handleBrowseClick}>
                Browse Files
              </button>
            ` : ''}
          </div>
        </div>

        ${this.files.length > 0 && this.showPreview ? html`
          <div class="file-list">
            ${this.files.map(fileItem => html`
              <div class="file-item">
                <div class="file-preview">
                  ${this.isImageFile(fileItem.file) ? html`
                    <img src=${URL.createObjectURL(fileItem.file)} alt=${fileItem.file.name} />
                  ` : html`
                    ${this.getFileExtension(fileItem.file.name)}
                  `}
                </div>
                <div class="file-info">
                  <div class="file-name">${fileItem.file.name}</div>
                  <div class="file-size">${this.formatFileSize(fileItem.file.size)}</div>
                  ${this.showProgress && fileItem.progress !== undefined ? html`
                    <div class="file-progress">
                      <div class="file-progress-bar" style="width: ${fileItem.progress}%"></div>
                    </div>
                  ` : ''}
                  ${fileItem.error ? html`
                    <div class="file-error">${fileItem.error}</div>
                  ` : ''}
                </div>
                <div class="file-actions">
                  <button 
                    type="button" 
                    class="file-action-btn remove-btn"
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
          <div class="form-field-hint">${this.helpText}</div>
        ` : ''}
        
        ${this.errorMessage && this.hasError ? html`
          <div class="form-field-error">${this.errorMessage}</div>
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
