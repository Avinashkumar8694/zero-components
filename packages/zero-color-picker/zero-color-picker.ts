// @environment page
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType, DropdownOptionItem, RangeSliderConfig, FileInputConfig, DatePickerConfig, NumberInputConfig, TextAreaConfig } from 'zero-annotation';

interface ColorFormat {
  hex: string;
  rgb: { r: number; g: number; b: number };
  hsl: { h: number; s: number; l: number };
  hsv: { h: number; s: number; v: number };
}

@RendererComponent({
  name: 'zero-color-picker',
  version: '1.0.0',
  title: 'Color Picker',
  elementSelector: 'zero-color-picker',
  group: 'Form Controls',
  iconName: 'color-picker-icon.png',
})
@applyGlobalStyles()
@customElement('zero-color-picker')
export class ZeroColorPicker extends LitElement {  // Basic Properties
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
  placeholder: string = 'Select color';

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

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.COLOR_PICKER,
    displayLabel: 'Value',
    fieldMappings: 'value',
  })
  value: string = '#000000';

  // State Properties  @property({ type: Boolean })
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
    displayLabel: 'Readonly',
    fieldMappings: 'readonly',
  })
  readonly: boolean = false;

  @property({ type: Boolean })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: 'Show Alpha',
    fieldMappings: 'showAlpha',
  })
  showAlpha: boolean = false;

  @property({ type: Boolean })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: 'Show Presets',
    fieldMappings: 'showPresets',
  })
  showPresets: boolean = true;

  @property({ type: Boolean })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: 'Show Input Fields',
    fieldMappings: 'showInputFields',
  })
  showInputFields: boolean = true;

  @property({ type: Boolean })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: 'Show Eye Dropper',
    fieldMappings: 'showEyeDropper',
  })
  showEyeDropper: boolean = true;

  // Format Properties
  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: 'Output Format',
    fieldMappings: 'format',
    // options: ['hex', 'rgb', 'hsl', 'hsv']
  })
  format: 'hex' | 'rgb' | 'hsl' | 'hsv' = 'hex';

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: 'Preset Colors (comma-separated)',
    placeholderText: 'Enter preset colors separated by commas',
    fieldMappings: 'presetColors',
  })
  presetColors: string = '#f44336,#e91e63,#9c27b0,#673ab7,#3f51b5,#2196f3,#03a9f4,#00bcd4,#009688,#4caf50,#8bc34a,#cddc39,#ffeb3b,#ffc107,#ff9800,#ff5722';

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
    placeholderText: 'Enter height (e.g., 36px)',
    fieldMappings: 'height',
  })
  height: string = '36px';

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: 'Picker Width',
    placeholderText: 'Enter picker width (e.g., 280px)',
    fieldMappings: 'pickerWidth',
  })
  pickerWidth: string = '280px';

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: 'Picker Height',
    placeholderText: 'Enter picker height (e.g., 200px)',
    fieldMappings: 'pickerHeight',
  })
  pickerHeight: string = '200px';

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
    displayLabel: 'Background Color',
    fieldMappings: 'backgroundColor',
  })
  backgroundColor: string = '#ffffff';

  // Internal State
  @state()
  private isOpen: boolean = false;

  @state()
  private currentColor: ColorFormat = this.hexToColorFormat('#000000');

  @state()
  private alpha: number = 1;

  @state()
  private hasError: boolean = false;

  @state()
  private inputValue: string = '#000000';

  @state()
  private activeTab: 'picker' | 'presets' | 'inputs' = 'picker';

  private isDragging: boolean = false;
  private dragTarget: 'saturation' | 'hue' | 'alpha' | null = null;

  static styles = css`
    :host {
      display: block;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      position: relative;
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
    }

    .input-container {
      position: relative;
      display: flex;
      align-items: center;
    }

  .mat-mdc-input-element {
      width: 100%;
      height: var(--input-height, 36px);
      min-height: var(--input-height, 36px);
      padding: 0 40px 0 12px;
      border: 1px solid #e0e0e0;
      border-radius: var(--border-radius, 4px);
      font-size: var(--font-size-lg, 16px);
      line-height: 1.5;
      background: var(--background-color, #ffffff);
      color: var(--text-primary, rgba(0, 0, 0, 0.87));
      transition: all 0.2s ease;
      cursor: pointer;
      box-sizing: border-box;
    }

    .mat-mdc-input-element:hover {
      border-color: var(--primary-color, #1976d2);
    }

    .mat-mdc-input-element:focus {
      outline: none;
      border-color: var(--primary-color, #1976d2);
      box-shadow: 0 0 0 2px color-mix(in srgb, var(--primary-color, #1976d2) 20%, transparent);
    }

    .mat-mdc-input-element:disabled {
      background: #f5f5f5;
      color: rgba(0, 0, 0, 0.38);
      cursor: not-allowed;
    }

    .mat-mdc-input-element.error {
      border-color: var(--error-color, #f44336);
    }    .color-preview {
      position: absolute;
      right: 8px;
      width: var(--icon-size-xl, 32px);
      height: var(--icon-size-lg, 24px);
      border-radius: 4px;
      border: 1px solid #e0e0e0;
      cursor: pointer;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><rect width="5" height="5" fill="%23f0f0f0"/><rect x="5" y="5" width="5" height="5" fill="%23f0f0f0"/><rect x="5" width="5" height="5" fill="white"/><rect y="5" width="5" height="5" fill="white"/></svg>');
    }

    .color-swatch {
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }    .dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: var(--border-radius, 4px);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
      z-index: 1000;
      margin-top: 4px;
      width: var(--picker-width, 280px);
      max-height: 400px;
      overflow: hidden;
    }

    .picker-tabs {
      display: flex;
      border-bottom: 1px solid #e0e0e0;
    }    .tab-button {
      flex: 1;
      padding: 12px 16px;
      border: none;
      background: none;
      cursor: pointer;
      font-size: var(--font-size-base, 14px);
      color: var(--text-secondary, rgba(0, 0, 0, 0.6));
      transition: all 0.2s ease;
      font-weight: 500;
      position: relative;
    }

    .tab-button:hover {
      color: var(--primary-color, #1976d2);
      background: color-mix(in srgb, var(--primary-color, #1976d2) 5%, transparent);
    }

    .tab-button.active {
      color: var(--primary-color, #1976d2);
      background: color-mix(in srgb, var(--primary-color, #1976d2) 8%, transparent);
    }

    .tab-button.active::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--primary-color, #1976d2);
    }    .picker-content {
      padding: 20px;
      background: #fafafa;
    }

    .color-picker-area {
      position: relative;
      width: 100%;
      height: var(--picker-height, 200px);
      border-radius: 4px;
      margin-bottom: 16px;
      cursor: crosshair;
      background: linear-gradient(to right, white, transparent),
                  linear-gradient(to bottom, transparent, black),
                  hsl(var(--hue, 0), 100%, 50%);
    }

    .saturation-cursor {
      position: absolute;
      width: 12px;
      height: 12px;
      border: 2px solid white;
      border-radius: 50%;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
      transform: translate(-50%, -50%);
      pointer-events: none;
    }    .hue-slider {
      position: relative;
      width: 100%;
      height: var(--icon-size-sm, 16px);
      border-radius: 8px;
      margin-bottom: 16px;
      background: linear-gradient(to right, 
        hsl(0, 100%, 50%),
        hsl(60, 100%, 50%),
        hsl(120, 100%, 50%),
        hsl(180, 100%, 50%),
        hsl(240, 100%, 50%),
        hsl(300, 100%, 50%),
        hsl(360, 100%, 50%)
      );
      cursor: pointer;
    }

    .alpha-slider {
      position: relative;      width: 100%;
      height: var(--icon-size-sm, 16px);
      border-radius: 8px;
      margin-bottom: 16px;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><rect width="10" height="10" fill="%23f0f0f0"/><rect x="10" y="10" width="10" height="10" fill="%23f0f0f0"/><rect x="10" width="10" height="10" fill="white"/><rect y="10" width="10" height="10" fill="white"/></svg>');
      cursor: pointer;
    }

    .alpha-gradient {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      background: linear-gradient(to right, transparent, var(--current-color, #000));
    }

    .slider-handle {
      position: absolute;
      top: 50%;      width: var(--icon-size-md, 20px);
      height: var(--icon-size-md, 20px);
      border: 2px solid white;
      border-radius: 50%;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
      transform: translate(-50%, -50%);
      pointer-events: none;
    }

    .color-inputs {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 8px;
      margin-bottom: 16px;
    }

    .color-inputs.with-alpha {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .input-group {
      display: flex;
      flex-direction: column;
    }    .input-label {
      font-size: var(--font-size-xs, 12px);
      color: var(--text-secondary, rgba(0, 0, 0, 0.6));
      margin-bottom: 4px;
    }

    .color-input {
      padding: 6px 8px;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      font-size: var(--font-size-base, 14px);
      text-align: center;
    }

    .hex-input {
      grid-column: 1 / -1;
      margin-bottom: 8px;
    }

    .presets-grid {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      gap: 8px;
    }

    .preset-color {
      aspect-ratio: 1;
      border-radius: 4px;
      border: 2px solid transparent;
      cursor: pointer;
      transition: all 0.2s ease;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><rect width="5" height="5" fill="%23f0f0f0"/><rect x="5" y="5" width="5" height="5" fill="%23f0f0f0"/><rect x="5" width="5" height="5" fill="white"/><rect y="5" width="5" height="5" fill="white"/></svg>');
    }

    .preset-color:hover {
      border-color: var(--primary-color, #1976d2);
    }

    .preset-color.selected {
      border-color: var(--primary-color, #1976d2);
    }    .picker-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      border-top: 1px solid #e0e0e0;
      background: #fafafa;
      gap: 12px;
    }

    .action-button {
      padding: 8px 12px;
      border: none;
      border-radius: 6px;
      font-size: var(--font-size-sm, 13px);
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      min-width: 80px;
      height: 32px;
      white-space: nowrap;
    }    .eyedropper-button {
      background: #f5f5f5;
      color: var(--primary-color, #1976d2);
      border: 1px solid transparent;
    }

    .eyedropper-button:hover {
      background: var(--primary-color, #1976d2);
      color: white;
      border-color: var(--primary-color, #1976d2);
    }

    .clear-button {
      background: #ffffff;
      color: var(--error-color, #f44336);
      border: 1px solid #e0e0e0;
    }

    .clear-button:hover {
      background: var(--error-color, #f44336);
      color: white;
      border-color: var(--error-color, #f44336);
    }

    .form-field-hint {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.6);
      margin-top: 4px;
    }    .form-field-error {
      font-size: var(--font-size-xs, 12px);
      color: var(--error-color, #f44336);
      margin-top: 4px;
    }    @media (max-width: 768px) {
      .dropdown {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 320px;
        max-width: 90vw;
        max-height: 80vh;
        z-index: 10000;
      }

      .picker-content {
        max-height: 60vh;
        overflow-y: auto;
      }

      .picker-actions {
        padding: 12px;
        gap: 8px;
      }

      .action-button {
        flex: 1;
        min-width: auto;
      }
    }
  `;

  protected render(): TemplateResult {
    return html`
      <div class="form-field" style="width: ${this.width}">
        ${this.label ? html`
          <label class="form-field-label ${this.required ? 'required' : ''}">
            ${this.label}
          </label>
        ` : ''}
        
        <div 
          class="input-container"
          style="
            --primary-color: ${this.primaryColor};
            --error-color: ${this.errorColor};
            --background-color: ${this.backgroundColor};
            --border-radius: ${this.borderRadius};
            --picker-width: ${this.pickerWidth};
            --picker-height: ${this.pickerHeight};
            --hue: ${this.currentColor.hsl.h};
            --current-color: ${this.currentColor.hex};
          "
        >
          <input
            class="mat-mdc-input-element ${this.hasError ? 'error' : ''}"
            type="text"
            .value=${this.inputValue}
            placeholder=${this.placeholder}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            style="height: ${this.height}"
            @click=${this.handleInputClick}
            @input=${this.handleInputChange}
            @blur=${this.handleInputBlur}
          />
          <div class="color-preview" @click=${this.handlePreviewClick}>
            <div 
              class="color-swatch" 
              style="background: ${this.showAlpha ? this.rgbaToString() : this.currentColor.hex}"
            ></div>
          </div>
        </div>

        ${this.isOpen ? html`
          <div class="dropdown">
            <div class="picker-tabs">
              <button 
                type="button" 
                class="tab-button ${this.activeTab === 'picker' ? 'active' : ''}"
                @click=${() => this.activeTab = 'picker'}
              >
                Picker
              </button>
              ${this.showPresets ? html`
                <button 
                  type="button" 
                  class="tab-button ${this.activeTab === 'presets' ? 'active' : ''}"
                  @click=${() => this.activeTab = 'presets'}
                >
                  Presets
                </button>
              ` : ''}
              ${this.showInputFields ? html`
                <button 
                  type="button" 
                  class="tab-button ${this.activeTab === 'inputs' ? 'active' : ''}"
                  @click=${() => this.activeTab = 'inputs'}
                >
                  Values
                </button>
              ` : ''}
            </div>

            <div class="picker-content">
              ${this.activeTab === 'picker' ? this.renderColorPicker() : ''}
              ${this.activeTab === 'presets' ? this.renderPresets() : ''}
              ${this.activeTab === 'inputs' ? this.renderInputs() : ''}
            </div>            ${this.showEyeDropper || this.showAlpha ? html`
              <div class="picker-actions">
                ${this.showEyeDropper && 'EyeDropper' in window ? html`
                  <button type="button" class="action-button eyedropper-button" @click=${this.openEyeDropper}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63M14.41,6.84L8.98,12.27L11.73,15L17.16,9.57L14.41,6.84M8.27,13L8.98,13.27L10.73,15L11,15.73L8.27,13M7.96,14.44L6.8,17.2L9.56,16.04L7.96,14.44Z" />
                    </svg>
                    Pick
                  </button>
                ` : ''}
                <button type="button" class="action-button clear-button" @click=${this.clearColor}>
                  Clear
                </button>
              </div>
            ` : ''}
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

  private renderColorPicker(): TemplateResult {
    return html`
      <div 
        class="color-picker-area"
        @mousedown=${this.handleSaturationMouseDown}
        @mousemove=${this.handleSaturationMouseMove}
        @mouseup=${this.handleMouseUp}
      >
        <div 
          class="saturation-cursor"
          style="left: ${this.currentColor.hsv.s * 100}%; top: ${(1 - this.currentColor.hsv.v) * 100}%"
        ></div>
      </div>

      <div 
        class="hue-slider"
        @mousedown=${this.handleHueMouseDown}
        @mousemove=${this.handleHueMouseMove}
        @mouseup=${this.handleMouseUp}
      >
        <div 
          class="slider-handle"
          style="left: ${(this.currentColor.hsl.h / 360) * 100}%"
        ></div>
      </div>

      ${this.showAlpha ? html`
        <div 
          class="alpha-slider"
          @mousedown=${this.handleAlphaMouseDown}
          @mousemove=${this.handleAlphaMouseMove}
          @mouseup=${this.handleMouseUp}
        >
          <div class="alpha-gradient"></div>
          <div 
            class="slider-handle"
            style="left: ${this.alpha * 100}%"
          ></div>
        </div>
      ` : ''}
    `;
  }

  private renderPresets(): TemplateResult {
    const presets = this.presetColors.split(',').map(color => color.trim());
    
    return html`
      <div class="presets-grid">
        ${presets.map(color => html`
          <div 
            class="preset-color ${color === this.currentColor.hex ? 'selected' : ''}"
            style="background-color: ${color}"
            @click=${() => this.selectPresetColor(color)}
          ></div>
        `)}
      </div>
    `;
  }

  private renderInputs(): TemplateResult {
    return html`
      <div class="color-inputs ${this.showAlpha ? 'with-alpha' : ''}">
        <div class="input-group hex-input">
          <label class="input-label">HEX</label>
          <input 
            class="color-input" 
            type="text" 
            .value=${this.currentColor.hex}
            @input=${this.handleHexInput}
          />
        </div>
        
        <div class="input-group">
          <label class="input-label">R</label>
          <input 
            class="color-input" 
            type="number" 
            min="0" 
            max="255" 
            .value=${String(this.currentColor.rgb.r)}
            @input=${this.handleRgbInput}
            data-channel="r"
          />
        </div>
        
        <div class="input-group">
          <label class="input-label">G</label>
          <input 
            class="color-input" 
            type="number" 
            min="0" 
            max="255" 
            .value=${String(this.currentColor.rgb.g)}
            @input=${this.handleRgbInput}
            data-channel="g"
          />
        </div>
        
        <div class="input-group">
          <label class="input-label">B</label>
          <input 
            class="color-input" 
            type="number" 
            min="0" 
            max="255" 
            .value=${String(this.currentColor.rgb.b)}
            @input=${this.handleRgbInput}
            data-channel="b"
          />
        </div>

        ${this.showAlpha ? html`
          <div class="input-group">
            <label class="input-label">A</label>
            <input 
              class="color-input" 
              type="number" 
              min="0" 
              max="1" 
              step="0.01"
              .value=${String(this.alpha)}
              @input=${this.handleAlphaInput}
            />
          </div>
        ` : ''}
      </div>
    `;
  }

  private handleInputClick(): void {
    if (!this.disabled && !this.readonly) {
      this.isOpen = !this.isOpen;
    }
  }

  private handlePreviewClick(): void {
    this.handleInputClick();
  }

  private handleInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.inputValue = input.value;
    
    if (this.isValidColor(input.value)) {
      this.currentColor = this.hexToColorFormat(input.value);
      this.updateValue();
    }
  }

  private handleInputBlur(): void {
    setTimeout(() => {
      if (!this.shadowRoot?.querySelector('.dropdown:hover')) {
        this.isOpen = false;
      }
    }, 150);
  }

  private handleSaturationMouseDown(event: MouseEvent): void {
    this.isDragging = true;
    this.dragTarget = 'saturation';
    this.updateSaturationFromEvent(event);
  }

  private handleSaturationMouseMove(event: MouseEvent): void {
    if (this.isDragging && this.dragTarget === 'saturation') {
      this.updateSaturationFromEvent(event);
    }
  }

  private handleHueMouseDown(event: MouseEvent): void {
    this.isDragging = true;
    this.dragTarget = 'hue';
    this.updateHueFromEvent(event);
  }

  private handleHueMouseMove(event: MouseEvent): void {
    if (this.isDragging && this.dragTarget === 'hue') {
      this.updateHueFromEvent(event);
    }
  }

  private handleAlphaMouseDown(event: MouseEvent): void {
    this.isDragging = true;
    this.dragTarget = 'alpha';
    this.updateAlphaFromEvent(event);
  }

  private handleAlphaMouseMove(event: MouseEvent): void {
    if (this.isDragging && this.dragTarget === 'alpha') {
      this.updateAlphaFromEvent(event);
    }
  }

  private handleMouseUp(): void {
    this.isDragging = false;
    this.dragTarget = null;
  }

  private updateSaturationFromEvent(event: MouseEvent): void {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
    
    this.currentColor = {
      ...this.currentColor,
      hsv: { ...this.currentColor.hsv, s: x, v: 1 - y }
    };
    
    this.updateColorFromHsv();
  }

  private updateHueFromEvent(event: MouseEvent): void {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    const hue = x * 360;
    
    this.currentColor = {
      ...this.currentColor,
      hsl: { ...this.currentColor.hsl, h: hue },
      hsv: { ...this.currentColor.hsv, h: hue }
    };
    
    this.updateColorFromHsv();
  }

  private updateAlphaFromEvent(event: MouseEvent): void {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    this.alpha = x;
    this.updateValue();
  }

  private handleHexInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (this.isValidColor(input.value)) {
      this.currentColor = this.hexToColorFormat(input.value);
      this.updateValue();
    }
  }

  private handleRgbInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const channel = input.dataset.channel as 'r' | 'g' | 'b';
    const value = Math.max(0, Math.min(255, parseInt(input.value) || 0));
    
    this.currentColor = {
      ...this.currentColor,
      rgb: { ...this.currentColor.rgb, [channel]: value }
    };
    
    this.updateColorFromRgb();
  }

  private handleAlphaInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.alpha = Math.max(0, Math.min(1, parseFloat(input.value) || 0));
    this.updateValue();
  }

  private selectPresetColor(color: string): void {
    this.currentColor = this.hexToColorFormat(color);
    this.updateValue();
    this.isOpen = false;
  }

  private async openEyeDropper(): Promise<void> {
    if (!('EyeDropper' in window)) return;
    
    try {
      const eyeDropper = new (window as any).EyeDropper();
      const result = await eyeDropper.open();
      this.currentColor = this.hexToColorFormat(result.sRGBHex);
      this.updateValue();
    } catch (error) {
      console.warn('Eye dropper was cancelled');
    }
  }

  private clearColor(): void {
    this.currentColor = this.hexToColorFormat('#000000');
    this.alpha = 1;
    this.updateValue();
    this.isOpen = false;
  }

  private updateColorFromHsv(): void {
    const rgb = this.hsvToRgb(this.currentColor.hsv);
    const hex = this.rgbToHex(rgb);
    const hsl = this.rgbToHsl(rgb);
    
    this.currentColor = { hex, rgb, hsl, hsv: this.currentColor.hsv };
    this.updateValue();
  }

  private updateColorFromRgb(): void {
    const hex = this.rgbToHex(this.currentColor.rgb);
    const hsl = this.rgbToHsl(this.currentColor.rgb);
    const hsv = this.rgbToHsv(this.currentColor.rgb);
    
    this.currentColor = { hex, rgb: this.currentColor.rgb, hsl, hsv };
    this.updateValue();
  }

  private updateValue(): void {
    let outputValue: string;
    
    switch (this.format) {
      case 'rgb':
        outputValue = this.showAlpha ? this.rgbaToString() : this.rgbToString();
        break;
      case 'hsl':
        outputValue = this.showAlpha ? this.hslaToString() : this.hslToString();
        break;
      case 'hsv':
        outputValue = this.hsvToString();
        break;
      default:
        outputValue = this.currentColor.hex;
    }
    
    this.value = outputValue;
    this.inputValue = outputValue;
    this.dispatchChangeEvent();
  }

  private hexToColorFormat(hex: string): ColorFormat {
    const rgb = this.hexToRgb(hex);
    const hsl = this.rgbToHsl(rgb);
    const hsv = this.rgbToHsv(rgb);
    return { hex, rgb, hsl, hsv };
  }

  private hexToRgb(hex: string): { r: number; g: number; b: number } {
    const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    return match ? {
      r: parseInt(match[1], 16),
      g: parseInt(match[2], 16),
      b: parseInt(match[3], 16)
    } : { r: 0, g: 0, b: 0 };
  }

  private rgbToHex({ r, g, b }: { r: number; g: number; b: number }): string {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  }

  private rgbToHsl({ r, g, b }: { r: number; g: number; b: number }): { h: number; s: number; l: number } {
    r /= 255;
    g /= 255;
    b /= 255;
    
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    return { h: h * 360, s: s * 100, l: l * 100 };
  }

  private rgbToHsv({ r, g, b }: { r: number; g: number; b: number }): { h: number; s: number; v: number } {
    r /= 255;
    g /= 255;
    b /= 255;
    
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    const s = max === 0 ? 0 : (max - min) / max;
    const v = max;

    if (max !== min) {
      const d = max - min;
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    return { h: h * 360, s, v };
  }

  private hsvToRgb({ h, s, v }: { h: number; s: number; v: number }): { r: number; g: number; b: number } {
    const c = v * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = v - c;
    let r = 0, g = 0, b = 0;

    if (h >= 0 && h < 60) {
      r = c; g = x; b = 0;
    } else if (h >= 60 && h < 120) {
      r = x; g = c; b = 0;
    } else if (h >= 120 && h < 180) {
      r = 0; g = c; b = x;
    } else if (h >= 180 && h < 240) {
      r = 0; g = x; b = c;
    } else if (h >= 240 && h < 300) {
      r = x; g = 0; b = c;
    } else if (h >= 300 && h < 360) {
      r = c; g = 0; b = x;
    }

    return {
      r: Math.round((r + m) * 255),
      g: Math.round((g + m) * 255),
      b: Math.round((b + m) * 255)
    };
  }

  private rgbToString(): string {
    return `rgb(${this.currentColor.rgb.r}, ${this.currentColor.rgb.g}, ${this.currentColor.rgb.b})`;
  }

  private rgbaToString(): string {
    return `rgba(${this.currentColor.rgb.r}, ${this.currentColor.rgb.g}, ${this.currentColor.rgb.b}, ${this.alpha})`;
  }

  private hslToString(): string {
    return `hsl(${Math.round(this.currentColor.hsl.h)}, ${Math.round(this.currentColor.hsl.s)}%, ${Math.round(this.currentColor.hsl.l)}%)`;
  }

  private hslaToString(): string {
    return `hsla(${Math.round(this.currentColor.hsl.h)}, ${Math.round(this.currentColor.hsl.s)}%, ${Math.round(this.currentColor.hsl.l)}%, ${this.alpha})`;
  }

  private hsvToString(): string {
    return `hsv(${Math.round(this.currentColor.hsv.h)}, ${Math.round(this.currentColor.hsv.s * 100)}%, ${Math.round(this.currentColor.hsv.v * 100)}%)`;
  }

  private isValidColor(color: string): boolean {
    return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
  }

  private dispatchChangeEvent(): void {
    const detail = {
      value: this.value,
      hex: this.currentColor.hex,
      rgb: this.currentColor.rgb,
      hsl: this.currentColor.hsl,
      hsv: this.currentColor.hsv,
      alpha: this.alpha
    };

    this.dispatchEvent(new CustomEvent('change', {
      detail,
      bubbles: true,
      composed: true
    }));

    this.dispatchEvent(new CustomEvent('color-change', {
      detail,
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
    displayLabel: 'On Color Change',
    eventTrigger: 'color-change',
  })
  handleColorChange(_event: Event) {
    // This method is triggered by the attribute system
    this.dispatchChangeEvent();
  }

  // Public API
  public setColor(color: string): void {
    this.currentColor = this.hexToColorFormat(color);
    this.updateValue();
  }

  public getColor(): ColorFormat {
    return this.currentColor;
  }

  public setAlpha(alpha: number): void {
    this.alpha = Math.max(0, Math.min(1, alpha));
    this.updateValue();
  }

  public getAlpha(): number {
    return this.alpha;
  }

  public open(): void {
    if (!this.disabled && !this.readonly) {
      this.isOpen = true;
    }
  }

  public close(): void {
    this.isOpen = false;
  }

  public setError(message: string): void {
    this.hasError = true;
    this.errorMessage = message;
  }

  public clearError(): void {
    this.hasError = false;
    this.errorMessage = '';
  }

  protected firstUpdated(): void {
    if (this.value) {
      this.currentColor = this.hexToColorFormat(this.value);
      this.inputValue = this.value;
    }

    // Set up global mouse events for dragging
    document.addEventListener('mousemove', (event) => {
      if (this.isDragging) {
        const targetElement = this.shadowRoot?.querySelector(
          this.dragTarget === 'saturation' ? '.color-picker-area' :
          this.dragTarget === 'hue' ? '.hue-slider' :
          this.dragTarget === 'alpha' ? '.alpha-slider' : ''
        );
        
        if (targetElement) {
          if (this.dragTarget === 'saturation') {
            this.updateSaturationFromEvent(event);
          } else if (this.dragTarget === 'hue') {
            this.updateHueFromEvent(event);
          } else if (this.dragTarget === 'alpha') {
            this.updateAlphaFromEvent(event);
          }
        }
      }
    });

    document.addEventListener('mouseup', () => {
      this.handleMouseUp();
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (event) => {
      if (!this.contains(event.target as Node)) {
        this.isOpen = false;
      }
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'zero-color-picker': ZeroColorPicker;
  }
}
