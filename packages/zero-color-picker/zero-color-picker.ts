// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from 'zero-annotation';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType, DropdownOptionItem, RangeSliderConfig, FileInputConfig, DatePickerConfig, NumberInputConfig, TextAreaConfig } from 'zero-annotation';

const getThemeManager = () => (window as any).zeroThemeManager;

interface ColorFormat {
  hex: string;
  rgb: { r: number; g: number; b: number };
  hsl: { h: number; s: number; l: number };
  hsv: { h: number; s: number; v: number };
}

export const studioTemplate: ZeroStudioTemplate = {
  kind: 'generic',
  templateHtml: [
    "<div style='padding:10px 14px;border-radius:8px;border:1px solid rgba(148,163,184,0.2);background:rgba(255,255,255,0.95);display:flex;align-items:center;gap:10px;'>",
    "<div style='width:24px;height:24px;border-radius:6px;background:var(--uiv-primary-color,#6c63ff);border:1px solid rgba(0,0,0,0.1);'></div>",
    "<div>",
    "<div style='font-size:0.65rem;color:var(--uiv-text-muted,#94a3b8);font-weight:600;'>{{display:label}}</div>",
    "<div style='font-size:0.75rem;color:var(--uiv-text-color,#1e293b);font-family:monospace;'>{{display:value}}</div>",
    "</div>",
    "</div>"
  ].join(""),
  labelProp: 'label',
  badges: ['Form', 'Color'],
};

function escapeStudio(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
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
export class ZeroColorPicker extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) return studioTemplate;
    const labelDisplay = escapeStudio(config.studio.display.label || 'Color Picker');
    const valueDisplay = escapeStudio(config.studio.display.value || '#000000');
    const text = 'var(--uiv-text-color, #333)';
    const border = 'var(--uiv-border-color, #e0e0e0)';
    const bg = 'var(--uiv-surface-color, #fff)';

    return {
      ...studioTemplate,
      templateHtml: [
        "<div style='display:block;width:100%;font-family:inherit;'>",
        `<label style='display:block;margin-bottom:8px;font-size:14px;font-weight:500;color:${text};'>${labelDisplay}</label>`,
        "<div style='position:relative;display:flex;align-items:center;'>",
        `<div style='width:100%;height:36px;padding:0 12px;border:1px solid ${border};border-radius:8px;font-size:14px;background:${bg};color:${text};display:flex;align-items:center;'>${valueDisplay}</div>`,
        `<div style='position:absolute;right:8px;width:28px;height:20px;border-radius:4px;border:1px solid ${border};background:${valueDisplay};'></div>`,
        "</div>",
        "</div>"
      ].join(""),
    };
  }
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

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: 'Output Format',
    fieldMappings: 'format',
  })
  format: 'hex' | 'rgb' | 'hsl' | 'hsv' = 'hex';

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: 'Preset Colors',
    fieldMappings: 'presetColors',
  })
  presetColors: string = '#f44336,#e91e63,#9c27b0,#673ab7,#3f51b5,#2196f3,#03a9f4,#00bcd4,#009688,#4caf50,#8bc34a,#cddc39,#ffeb3b,#ffc107,#ff9800,#ff5722';

  @property({ type: String })
  width: string = '100%';

  @property({ type: String })
  height: string = '36px';

  @property({ type: String })
  pickerWidth: string = '280px';

  @property({ type: String })
  pickerHeight: string = '200px';

  @state()
  private isOpen: boolean = false;

  @state()
  private currentColor: ColorFormat = {
    hex: '#000000',
    rgb: { r: 0, g: 0, b: 0 },
    hsl: { h: 0, s: 0, l: 0 },
    hsv: { h: 0, s: 0, v: 0 }
  };

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
      font-family: var(--uiv-font-family, inherit);
      position: relative;
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

    .input-container {
      position: relative;
      display: flex;
      align-items: center;
    }

    .mat-mdc-input-element {
      width: 100%;
      height: var(--input-height, 36px);
      padding: 0 44px 0 12px;
      border: 1px solid var(--uiv-border);
      border-radius: 8px;
      font-size: 14px;
      background: var(--uiv-bg);
      color: var(--uiv-text);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      box-shadow: var(--uiv-shadow-depth, none);
    }

    .mat-mdc-input-element:hover {
      border-color: var(--uiv-primary);
      box-shadow: var(--uiv-border-glow);
    }

    .color-preview {
      position: absolute;
      right: 8px;
      width: 28px;
      height: 20px;
      border-radius: 4px;
      border: 1px solid var(--uiv-border);
      cursor: pointer;
      overflow: hidden;
    }

    .color-swatch {
      width: 100%;
      height: 100%;
    }

    .dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      background: var(--uiv-bg);
      border: 1px solid var(--uiv-border);
      border-radius: 12px;
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
      z-index: 1000;
      margin-top: 8px;
      width: var(--picker-width, 280px);
      overflow: hidden;
      backdrop-filter: blur(20px);
    }

    .tab-button {
      flex: 1;
      padding: 12px;
      border: none;
      background: transparent;
      cursor: pointer;
      color: var(--uiv-text);
      opacity: 0.6;
      font-weight: 600;
      transition: all 0.2s;
    }

    .tab-button.active {
      opacity: 1;
      color: var(--uiv-primary);
      background: rgba(var(--uiv-primary-rgb, 25, 118, 210), 0.1);
    }

    .color-picker-area {
      height: 180px;
      border-radius: 8px;
      margin-bottom: 16px;
      position: relative;
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
    }

    .hue-slider, .alpha-slider {
      height: 12px;
      border-radius: 6px;
      margin-bottom: 12px;
      position: relative;
      cursor: pointer;
    }

    .hue-slider {
      background: linear-gradient(to right, 
        hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%),
        hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), hsl(360, 100%, 50%)
      );
    }

    .alpha-slider {
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><rect width="10" height="10" fill="%23f0f0f0"/><rect x="10" y="10" width="10" height="10" fill="%23f0f0f0"/><rect x="10" width="10" height="10" fill="white"/><rect y="10" width="10" height="10" fill="white"/></svg>');
    }

    .alpha-gradient {
      width: 100%;
      height: 100%;
      border-radius: 6px;
      background: linear-gradient(to right, transparent, var(--current-color, #000));
    }

    .slider-handle {
      width: 16px;
      height: 16px;
      border: 3px solid white;
      border-radius: 50%;
      box-shadow: 0 2px 4px rgba(0,0,0,0.3);
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    .color-inputs {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 8px;
    }

    .color-inputs.with-alpha {
      grid-template-columns: repeat(4, 1fr);
    }

    .input-group {
      display: flex;
      flex-direction: column;
    }

    .input-label {
      font-size: 11px;
      color: var(--uiv-text);
      opacity: 0.6;
      margin-bottom: 4px;
      text-transform: uppercase;
    }

    .color-input {
      padding: 6px;
      border: 1px solid var(--uiv-border);
      border-radius: 4px;
      font-size: 13px;
      background: var(--uiv-bg);
      color: var(--uiv-text);
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
      transition: all 0.2s;
    }

    .preset-color:hover {
      transform: scale(1.1);
      border-color: var(--uiv-primary);
    }

    .picker-actions {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }

    .action-button {
      padding: 6px 16px;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      font-size: 13px;
    }

    .form-field-hint {
      font-size: 12px;
      color: var(--uiv-text);
      opacity: 0.7;
      margin-top: 4px;
    }

    .form-field-error {
      font-size: 12px;
      color: var(--uiv-error-color, #f44336);
      margin-top: 4px;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    getThemeManager()?.addEventListener('theme-changed', () => this.requestUpdate());
  }

  protected firstUpdated(): void {
    if (this.value) {
      this.currentColor = this.hexToColorFormat(this.value);
      this.inputValue = this.value;
    }

    document.addEventListener('mousemove', (event) => {
      if (this.isDragging) {
        if (this.dragTarget === 'saturation') {
          this.updateSaturationFromEvent(event);
        } else if (this.dragTarget === 'hue') {
          this.updateHueFromEvent(event);
        } else if (this.dragTarget === 'alpha') {
          this.updateAlphaFromEvent(event);
        }
      }
    });

    document.addEventListener('mouseup', () => {
      this.isDragging = false;
      this.dragTarget = null;
    });

    document.addEventListener('click', (event) => {
      if (!this.contains(event.target as Node)) {
        this.isOpen = false;
      }
    });
  }

  protected render(): TemplateResult {
    const themeModule = getThemeManager()?.getActiveTheme('zero-standard-themes');
    return html`
      <style>
        ${themeModule ? themeModule.getGlobalStyles() : ''}
        ${themeModule ? themeModule.getComponentStyles('color-picker') : ''}
      </style>
      <div class="form-field uiv-${themeModule?.id}-theme" style="width: ${this.width}">
        ${this.label ? html`
          <label class="form-field-label uiv-${themeModule?.id}-text ${this.required ? 'required' : ''}">
            ${this.label}
          </label>
        ` : ''}
        
        <div 
          class="input-container"
          style="
            --picker-width: ${this.pickerWidth};
            --picker-height: ${this.pickerHeight};
            --hue: ${this.currentColor.hsl.h};
            --current-color: ${this.currentColor.hex};
          "
        >
          <input
            class="mat-mdc-input-element uiv-${themeModule?.id}-card ${this.hasError ? 'error' : ''}"
            type="text"
            .value=${this.inputValue}
            placeholder=${this.placeholder}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            @click=${this.handleInputClick}
            @input=${this.handleInputChange}
            @blur=${this.handleInputBlur}
          />
          <div class="color-preview uiv-${themeModule?.id}-card" @click=${this.handlePreviewClick}>
            <div 
              class="color-swatch" 
              style="background: ${this.showAlpha ? this.rgbaToString() : this.currentColor.hex}"
            ></div>
          </div>
        </div>

        ${this.isOpen ? html`
          <div class="dropdown uiv-${themeModule?.id}-theme uiv-${themeModule?.id}-card">
            <div class="picker-tabs" style="display: flex; border-bottom: 1px solid var(--uiv-border)">
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

            <div class="picker-content" style="padding: 20px; background: transparent">
              ${this.activeTab === 'picker' ? this.renderColorPicker() : ''}
              ${this.activeTab === 'presets' ? this.renderPresets() : ''}
              ${this.activeTab === 'inputs' ? this.renderInputs() : ''}
            </div>            
            ${this.showEyeDropper || this.showAlpha ? html`
              <div class="picker-actions" style="padding: 12px; border-top: 1px solid var(--uiv-border); display: flex; gap: 8px">
                ${this.showEyeDropper && 'EyeDropper' in window ? html`
                  <button type="button" class="action-button uiv-${themeModule?.id}-card" style="background: var(--uiv-primary); color: white; border: none" @click=${this.openEyeDropper}>
                    Pick
                  </button>
                ` : ''}
                <button type="button" class="action-button uiv-${themeModule?.id}-card" style="background: transparent; border: 1px solid var(--uiv-error-color, #f44336); color: var(--uiv-error-color, #f44336)" @click=${this.clearColor}>
                  Clear
                </button>
              </div>
            ` : ''}
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

  private renderColorPicker(): TemplateResult {
    return html`
      <div 
        class="color-picker-area"
        @mousedown=${this.handleSaturationMouseDown}
      >
        <div 
          class="saturation-cursor"
          style="left: ${this.currentColor.hsv.s * 100}%; top: ${(1 - this.currentColor.hsv.v) * 100}%"
        ></div>
      </div>

      <div 
        class="hue-slider"
        @mousedown=${this.handleHueMouseDown}
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
            class="preset-color"
            style="background-color: ${color}; border-color: ${color === this.currentColor.hex ? 'var(--uiv-primary)' : 'transparent'}"
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
            @input=${(e: any) => this.handleRgbInput(e, 'r')}
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
            @input=${(e: any) => this.handleRgbInput(e, 'g')}
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
            @input=${(e: any) => this.handleRgbInput(e, 'b')}
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
    // Small timeout to allow tab/click in dropdown
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

  private handleHueMouseDown(event: MouseEvent): void {
    this.isDragging = true;
    this.dragTarget = 'hue';
    this.updateHueFromEvent(event);
  }

  private handleAlphaMouseDown(event: MouseEvent): void {
    this.isDragging = true;
    this.dragTarget = 'alpha';
    this.updateAlphaFromEvent(event);
  }

  private updateSaturationFromEvent(event: MouseEvent): void {
    const pickerArea = this.shadowRoot?.querySelector('.color-picker-area');
    if (!pickerArea) return;
    const rect = pickerArea.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
    
    this.currentColor = {
      ...this.currentColor,
      hsv: { ...this.currentColor.hsv, s: x, v: 1 - y }
    };
    
    this.updateColorFromHsv();
  }

  private updateHueFromEvent(event: MouseEvent): void {
    const hueSlider = this.shadowRoot?.querySelector('.hue-slider');
    if (!hueSlider) return;
    const rect = hueSlider.getBoundingClientRect();
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
    const alphaSlider = this.shadowRoot?.querySelector('.alpha-slider');
    if (!alphaSlider) return;
    const rect = alphaSlider.getBoundingClientRect();
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

  private handleRgbInput(event: Event, channel: 'r' | 'g' | 'b'): void {
    const input = event.target as HTMLInputElement;
    const val = Math.max(0, Math.min(255, parseInt(input.value) || 0));
    
    this.currentColor = {
      ...this.currentColor,
      rgb: { ...this.currentColor.rgb, [channel]: val }
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
  }

  private async openEyeDropper(): Promise<void> {
    if (!('EyeDropper' in window)) return;
    try {
      const eyeDropper = new (window as any).EyeDropper();
      const result = await eyeDropper.open();
      this.currentColor = this.hexToColorFormat(result.sRGBHex);
      this.updateValue();
    } catch (e) {}
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
      case 'rgb': outputValue = this.showAlpha ? this.rgbaToString() : this.rgbToString(); break;
      case 'hsl': outputValue = this.showAlpha ? this.hslaToString() : this.hslToString(); break;
      case 'hsv': outputValue = this.hsvToString(); break;
      default: outputValue = this.currentColor.hex;
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
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;
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
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = max === 0 ? 0 : (max - min) / max, v = max;
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
    const c = v * s, x = c * (1 - Math.abs((h / 60) % 2 - 1)), m = v - c;
    let r = 0, g = 0, b = 0;
    if (h < 60) { r = c; g = x; }
    else if (h < 120) { r = x; g = c; }
    else if (h < 180) { g = c; b = x; }
    else if (h < 240) { g = x; b = c; }
    else if (h < 300) { r = x; b = c; }
    else { r = c; b = x; }
    return { r: Math.round((r + m) * 255), g: Math.round((g + m) * 255), b: Math.round((b + m) * 255) };
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
    const detail = { value: this.value, currentColor: this.currentColor, alpha: this.alpha };
    this.dispatchEvent(new CustomEvent('change', { detail, bubbles: true, composed: true }));
    this.dispatchEvent(new CustomEvent('color-change', { detail, bubbles: true, composed: true }));
  }

  @RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: 'On Change',
    eventTrigger: 'change',
  })
  handleChange(_event: Event) { this.dispatchChangeEvent(); }

  @RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: 'On Color Change',
    eventTrigger: 'color-change',
  })
  handleColorChange(_event: Event) { this.dispatchChangeEvent(); }
}

declare global {
  interface HTMLElementTagNameMap {
    'zero-color-picker': ZeroColorPicker;
  }
}
