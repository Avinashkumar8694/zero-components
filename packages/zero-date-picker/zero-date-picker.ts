// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from 'zero-annotation';
import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

const getThemeManager = () => (window as any).zeroThemeManager;

interface DatePickerSettings {
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[];
  disabledDaysOfWeek?: number[]; // 0-6 (Sunday-Saturday)
  firstDayOfWeek?: number; // 0-6
}

export const studioTemplate: ZeroStudioTemplate = {
  kind: 'generic',
  templateHtml: [
    "<div style='padding:10px 14px;border-radius:8px;border:1px solid rgba(148,163,184,0.2);background:rgba(255,255,255,0.95);display:flex;justify-content:space-between;align-items:center;'>",
    "<div>",
    "<div style='font-size:0.65rem;color:var(--uiv-text-muted,#94a3b8);font-weight:600;margin-bottom:2px;'>{{display:label}}</div>",
    "<div style='font-size:0.8rem;color:var(--uiv-text-color,#1e293b);'>{{display:placeholder}}</div>",
    "</div>",
    "<span style='font-size:1rem;'>\uD83D\uDCC5</span>",
    "</div>"
  ].join(""),
  labelProp: 'label',
  badges: ['Form', 'Date'],
};

function escapeStudio(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

@RendererComponent({
  name: 'zero-date-picker',
  version: '1.0.0',
  title: 'Date Picker',
  elementSelector: 'zero-date-picker',
  group: 'Form Controls',
  iconName: 'date-picker-icon.png',
})
@applyGlobalStyles()
@customElement('zero-date-picker')
export class ZeroDatePicker extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) return studioTemplate;
    const labelDisplay = escapeStudio(config.studio.display.label || 'Date Picker');
    const placeholderDisplay = escapeStudio(config.studio.display.placeholder || 'Select date...');
    
    const bg = 'var(--uiv-surface-color, #ffffff)';
    const text = 'var(--uiv-text-color, #1e293b)';
    const muted = 'var(--uiv-text-muted, #94a3b8)';
    const border = 'var(--uiv-border-color, rgba(148,163,184,0.2))';

    return { 
      ...studioTemplate, 
      templateHtml: [
        "<div style='display:grid;gap:6px;'>",
        labelDisplay ? `<div style='font-size:14px;font-weight:500;color:${text};'>${labelDisplay}</div>` : "",
        `<div style='padding:10px 14px;border-radius:8px;border:1px solid ${border};background:${bg};display:flex;justify-content:space-between;align-items:center;min-height:40px;'>`,
        `<span style='font-size:16px;color:${muted};'>${placeholderDisplay}</span>`,
        `<span style='font-size:18px;color:${muted};'>\uD83D\uDCC5</span>`,
        "</div>",
        "</div>"
      ].join("") 
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
  placeholder: string = 'Select date';
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
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: 'Value',
    placeholderText: 'Enter date value',
    fieldMappings: 'value',
  })
  value: string = '';

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
    displayLabel: 'Readonly',
    fieldMappings: 'readonly',
  })
  readonly: boolean = false;

  @property({ type: Boolean })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: 'Show Today Button',
    fieldMappings: 'showTodayButton',
  })
  showTodayButton: boolean = true;

  @property({ type: Boolean })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: 'Show Clear Button',
    fieldMappings: 'showClearButton',
  })
  showClearButton: boolean = true;

  @property({ type: Boolean })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: 'Show Week Numbers',
    fieldMappings: 'showWeekNumbers',
  })
  showWeekNumbers: boolean = false;

  @property({ type: Boolean })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: 'Allow Time Selection',
    fieldMappings: 'includeTime',
  })
  includeTime: boolean = false;

  @property({ type: Boolean })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: 'Range Selection',
    fieldMappings: 'rangeSelection',
  })
  rangeSelection: boolean = false;

  // Format Properties
  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: 'Date Format',
    placeholderText: 'Enter date format',
    fieldMappings: 'dateFormat',
  })
  dateFormat: string = 'yyyy-MM-dd';

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: 'Display Format',
    placeholderText: 'Enter display format',
    fieldMappings: 'displayFormat',
  })
  displayFormat: string = 'MMM d, yyyy';

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: 'Min Date',
    placeholderText: 'Enter minimum date',
    fieldMappings: 'minDate',
  })
  minDate: string = '';

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: 'Max Date',
    placeholderText: 'Enter maximum date',
    fieldMappings: 'maxDate',
  })
  maxDate: string = '';

  @property({ type: Number })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: 'First Day of Week (0-6)',
    fieldMappings: 'firstDayOfWeek',
  })
  firstDayOfWeek: number = 0; // Sunday

  // Styling Properties
  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: 'Width',
    placeholderText: 'Enter width',
    fieldMappings: 'width',
  })
  width: string = '100%';    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Height',
        placeholderText: 'Enter height',
        fieldMappings: 'height',
    })
    height: string = 'var(--input-height, 36px)';

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: 'Border Radius',
    placeholderText: 'Enter border radius',
    fieldMappings: 'borderRadius',
  })
  borderRadius: string = '8px';

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: 'Primary Color',
    placeholderText: 'Enter primary color',
    fieldMappings: 'primaryColor',
  })
  primaryColor: string = '#1976d2';

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: 'Error Color',
    placeholderText: 'Enter error color',
    fieldMappings: 'errorColor',
  })
  errorColor: string = '#f44336';

  @property({ type: String })
  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: 'Background Color',
    placeholderText: 'Enter background color',
    fieldMappings: 'backgroundColor',
  })
  backgroundColor: string = '#ffffff';

  // Internal State
  @state()
  private isOpen: boolean = false;

  @state()
  private currentDate: Date = new Date();

  @state()
  private selectedDate: Date | null = null;

  @state()
  private selectedStartDate: Date | null = null;

  @state()
  private selectedEndDate: Date | null = null;

  @state()
  private hoverDate: Date | null = null;

  @state()
  private hasError: boolean = false;

  @state()
  private inputValue: string = '';

  @state()
  private selectedTime: string = '00:00';

  private readonly monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  private readonly dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

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
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 8px;
      color: var(--uiv-text-main);
      transition: color 0.3s ease;
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
      min-height: 40px;
      border: 1px solid var(--uiv-border);
      border-radius: 8px;
      font-size: 16px;
      line-height: 1.5;
      background: var(--uiv-surface);
      color: var(--uiv-text-main);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      cursor: pointer;
      padding: 0 40px 0 16px;
      box-shadow: var(--uiv-shadow-depth, none);
    }

    .mat-mdc-input-element:hover {
      border-color: var(--uiv-primary);
      box-shadow: var(--uiv-border-glow);
    }

    .mat-mdc-input-element:focus {
      outline: none;
      border-color: var(--uiv-primary);
      box-shadow: var(--uiv-border-glow);
      transform: translateY(-1px);
    }

    .mat-mdc-input-element:disabled {
      background: #f5f5f5;
      color: rgba(0, 0, 0, 0.38);
      cursor: not-allowed;
    }

    .mat-mdc-input-element.error {
      border-color: var(--error-color, #f44336);
    }    .calendar-icon {
      position: absolute;
      right: 12px;
      width: var(--icon-size-md, 20px);
      height: var(--icon-size-md, 20px);
      color: rgba(0, 0, 0, 0.6);
      pointer-events: none;
    }

    .dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: var(--uiv-surface);
      border: 1px solid var(--uiv-border);
      border-radius: 8px;
      box-shadow: var(--uiv-shadow-depth, 0 10px 15px -3px rgba(0, 0, 0, 0.1));
      z-index: 1000;
      margin-top: 8px;
      overflow: hidden;
      animation: dropdownSlide 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    @keyframes dropdownSlide {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .calendar-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px;
      border-bottom: 1px solid #e0e0e0;
    }

    .nav-button {
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;
      border-radius: 50%;
      color: rgba(0, 0, 0, 0.6);
      transition: background 0.2s ease;
    }

    .nav-button:hover {
      background: #f5f5f5;
    }

    .month-year {      font-weight: 500;
      font-size: var(--font-size-lg, 16px);
      color: var(--text-primary, rgba(0, 0, 0, 0.87));
    }

    .calendar-grid {
      padding: 16px;
    }

    .weekdays {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 4px;
      margin-bottom: 8px;
    }

    .weekdays.with-week-numbers {
      grid-template-columns: 30px repeat(7, 1fr);
    }

    .weekday {      text-align: center;
      font-size: var(--font-size-xs, 12px);
      font-weight: 500;
      color: var(--text-secondary, rgba(0, 0, 0, 0.6));
      padding: 8px 4px;
    }

    .week-number {
      text-align: center;
      font-size: var(--font-size-xs, 12px);
      color: var(--text-muted, rgba(0, 0, 0, 0.4));
      padding: 8px 4px;
    }

    .days {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 4px;
    }

    .days.with-week-numbers {
      grid-template-columns: 30px repeat(7, 1fr);
    }

    .day {
      aspect-ratio: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      cursor: pointer;      font-size: var(--font-size-base, 14px);
      transition: all 0.2s ease;
      color: var(--text-primary, rgba(0, 0, 0, 0.87));
    }

    .day:hover {
      background: #f5f5f5;
    }

    .day.other-month {
      color: rgba(0, 0, 0, 0.3);
    }

    .day.disabled {
      color: rgba(0, 0, 0, 0.3);
      cursor: not-allowed;
    }

    .day.disabled:hover {
      background: none;
    }

    .day.selected {
      background: var(--primary-color, #1976d2);
      color: white;
    }

    .day.today {
      border: 2px solid var(--primary-color, #1976d2);
    }

    .day.in-range {
      background: color-mix(in srgb, var(--primary-color, #1976d2) 20%, transparent);
      border-radius: 0;
    }

    .day.range-start {
      background: var(--primary-color, #1976d2);
      color: white;
      border-radius: 50% 0 0 50%;
    }

    .day.range-end {
      background: var(--primary-color, #1976d2);
      color: white;
      border-radius: 0 50% 50% 0;
    }

    .day.range-start.range-end {
      border-radius: 50%;
    }

    .calendar-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      border-top: 1px solid #e0e0e0;
    }

    .action-button {
      padding: 8px 16px;      border: none;
      border-radius: 4px;
      font-size: var(--font-size-base, 14px);
      cursor: pointer;
      transition: background 0.2s ease;
    }

    .today-button {
      background: #f5f5f5;
      color: var(--primary-color, #1976d2);
    }

    .today-button:hover {
      background: #e0e0e0;
    }

    .clear-button {
      background: #ffebee;
      color: var(--error-color, #f44336);
    }

    .clear-button:hover {
      background: #ffcdd2;
    }

    .form-field-hint {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.6);
      margin-top: 4px;
    }    .form-field-error {
      font-size: var(--font-size-xs, 12px);
      color: var(--error-color, #f44336);
      margin-top: 4px;
    }

    @media (max-width: 768px) {
      .dropdown {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 320px;
        max-width: 90vw;
      }
    }
  `;

  connectedCallback() {
      super.connectedCallback();
      getThemeManager()?.addEventListener('theme-changed', () => this.requestUpdate());
  }

  protected render(): TemplateResult {
    const themeModule = getThemeManager()?.getActiveTheme('zero-standard-themes');
    const fieldStyles: Record<string, string> = { width: this.width };
    if (this.primaryColor) {
      fieldStyles['--primary-color'] = this.primaryColor;
      fieldStyles['--uiv-primary'] = this.primaryColor;
    }
    if (this.errorColor) {
      fieldStyles['--error-color'] = this.errorColor;
      fieldStyles['--uiv-error-color'] = this.errorColor;
    }
    if (this.backgroundColor) {
      fieldStyles['--uiv-surface'] = this.backgroundColor;
      fieldStyles['--uiv-bg'] = this.backgroundColor;
    }
    return html`
      <style>
        ${themeModule ? themeModule.getGlobalStyles() : ''}
        ${themeModule ? themeModule.getComponentStyles('date-picker') : ''}
      </style>
      <div class="form-field uiv-${themeModule?.id}-theme" style=${styleMap(fieldStyles)}>
        ${this.label ? html`
          <label class="form-field-label uiv-${themeModule?.id}-text ${this.required ? 'required' : ''}">
            ${this.label}
          </label>
        ` : ''}
        
        <div class="input-container">
          <input
            class="mat-mdc-input-element uiv-${themeModule?.id}-card uiv-${themeModule?.id}-scan ${this.hasError ? 'error' : ''}"
            type="text"
            .value=${this.inputValue}
            placeholder=${this.placeholder}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            style=${styleMap({ height: this.height, 'border-radius': this.borderRadius })}
            @click=${this.handleInputClick}
            @keydown=${this.handleKeyDown}
            @blur=${this.handleInputBlur}
          />
          <svg class="calendar-icon uiv-${themeModule?.id}-text" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19,3H18V1H16V3H8V1H6V3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z" />
          </svg>
        </div>

        ${this.isOpen ? html`
          <div class="dropdown uiv-${themeModule?.id}-card">
            <div class="calendar-header uiv-${themeModule?.id}-card">
              <button 
                type="button" 
                class="nav-button uiv-${themeModule?.id}-text" 
                @click=${this.previousMonth}
                aria-label="Previous month"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.41,7.41L14,6L8,12L14,18L15.41,16.59L10.83,12L15.41,7.41Z" />
                </svg>
              </button>
              
              <div class="month-year uiv-${themeModule?.id}-text">
                ${this.monthNames[this.currentDate.getMonth()]} ${this.currentDate.getFullYear()}
              </div>
              
              <button 
                type="button" 
                class="nav-button" 
                @click=${this.nextMonth}
                aria-label="Next month"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59,16.58L10,18L16,12L10,6L8.59,7.41L13.17,12L8.59,16.58Z" />
                </svg>
              </button>
            </div>

            <div class="calendar-grid">
              <div class="weekdays ${this.showWeekNumbers ? 'with-week-numbers' : ''}">
                ${this.showWeekNumbers ? html`<div class="week-number"></div>` : ''}
                ${this.getWeekdayNames().map(day => html`
                  <div class="weekday uiv-${themeModule?.id}-text" style="opacity: 0.7">${day}</div>
                `)}
              </div>
              
              ${this.renderCalendarDays()}
            </div>

            ${this.includeTime ? html`
              <div class="time-row" style="display:flex;align-items:center;gap:10px;padding:12px 16px;border-top:1px solid #e0e0e0;">
                <span class="uiv-${themeModule?.id}-text" style="font-size:13px;font-weight:500;">Time</span>
                <input
                  type="time"
                  class="uiv-${themeModule?.id}-card"
                  .value=${this.selectedTime}
                  @input=${this.handleTimeChange}
                  style="flex:1;padding:6px 8px;border:1px solid var(--uiv-border, #e0e0e0);border-radius:6px;background:var(--uiv-surface, #fff);color:var(--uiv-text-main, inherit);"
                />
              </div>
            ` : ''}

            ${(this.showTodayButton || this.showClearButton) ? html`
              <div class="calendar-footer">
                <div>
                  ${this.showTodayButton ? html`
                    <button type="button" class="action-button today-button" @click=${this.selectToday}>
                      Today
                    </button>
                  ` : ''}
                </div>
                <div>
                  ${this.showClearButton ? html`
                    <button type="button" class="action-button clear-button" @click=${this.clearSelection}>
                      Clear
                    </button>
                  ` : ''}
                </div>
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

  private renderCalendarDays(): TemplateResult {
    const firstDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
    const lastDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - ((firstDay.getDay() - this.firstDayOfWeek + 7) % 7));
    
    const weeks: TemplateResult[] = [];
    let currentWeekStart = new Date(startDate);
    
    while (currentWeekStart <= lastDay || currentWeekStart.getMonth() === this.currentDate.getMonth()) {
      const weekDays: TemplateResult[] = [];
      
      if (this.showWeekNumbers) {
        const weekNumber = this.getWeekNumber(currentWeekStart);
        weekDays.push(html`<div class="week-number">${weekNumber}</div>`);
      }
      
      for (let i = 0; i < 7; i++) {
        const dayDate = new Date(currentWeekStart);
        dayDate.setDate(dayDate.getDate() + i);
        
        const isCurrentMonth = dayDate.getMonth() === this.currentDate.getMonth();
        const isToday = this.isSameDay(dayDate, new Date());
        const isSelected = this.isDateSelected(dayDate);
        const isDisabled = this.isDateDisabled(dayDate);
        const isInRange = this.isDateInRange(dayDate);
        const isRangeStart = this.rangeSelection && this.selectedStartDate && this.isSameDay(dayDate, this.selectedStartDate);
        const isRangeEnd = this.rangeSelection && this.selectedEndDate && this.isSameDay(dayDate, this.selectedEndDate);
        
        weekDays.push(html`
          <div 
            class="day ${isCurrentMonth ? '' : 'other-month'} ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''} ${isInRange ? 'in-range' : ''} ${isRangeStart ? 'range-start' : ''} ${isRangeEnd ? 'range-end' : ''}"
            @click=${() => this.selectDate(dayDate)}
            @mouseenter=${() => this.hoverDate = dayDate}
            @mouseleave=${() => this.hoverDate = null}
          >
            ${dayDate.getDate()}
          </div>
        `);
      }
      
      weeks.push(html`
        <div class="days ${this.showWeekNumbers ? 'with-week-numbers' : ''}">
          ${weekDays}
        </div>
      `);
      
      currentWeekStart.setDate(currentWeekStart.getDate() + 7);
    }
    
    return html`${weeks}`;
  }

  private handleInputClick(): void {
    if (!this.disabled && !this.readonly) {
      this.isOpen = !this.isOpen;
    }
  }

  private handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.isOpen) {
      this.isOpen = false;
    } else if (event.key === 'Enter' && !this.isOpen) {
      this.isOpen = true;
    }
  }

  private handleInputBlur(): void {
    setTimeout(() => {
      if (!this.shadowRoot?.querySelector('.dropdown:hover')) {
        this.isOpen = false;
      }
    }, 150);
  }

  private selectDate(date: Date): void {
    if (this.isDateDisabled(date)) return;

    if (this.rangeSelection) {
      if (!this.selectedStartDate || (this.selectedStartDate && this.selectedEndDate)) {
        // Start new range
        this.selectedStartDate = date;
        this.selectedEndDate = null;
      } else {
        // Complete range
        if (date < this.selectedStartDate) {
          this.selectedEndDate = this.selectedStartDate;
          this.selectedStartDate = date;
        } else {
          this.selectedEndDate = date;
        }
        this.isOpen = false;
      }
      this.updateRangeValue();
    } else {
      this.selectedDate = date;
      this.updateSingleValue();
      this.isOpen = false;
    }

    this.dispatchChangeEvent();
  }

  private selectToday(): void {
    this.selectDate(new Date());
  }

  private clearSelection(): void {
    if (this.rangeSelection) {
      this.selectedStartDate = null;
      this.selectedEndDate = null;
    } else {
      this.selectedDate = null;
    }
    this.inputValue = '';
    this.value = '';
    this.isOpen = false;
    this.dispatchChangeEvent();
  }

  private previousMonth(): void {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
  }

  private nextMonth(): void {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
  }

  private getWeekdayNames(): string[] {
    const names = [...this.dayNames];
    return [...names.slice(this.firstDayOfWeek), ...names.slice(0, this.firstDayOfWeek)];
  }

  private getWeekNumber(date: Date): number {
    const firstDay = new Date(date.getFullYear(), 0, 1);
    const dayOfYear = Math.floor((date.getTime() - firstDay.getTime()) / (24 * 60 * 60 * 1000)) + 1;
    return Math.ceil(dayOfYear / 7);
  }

  private isSameDay(date1: Date, date2: Date): boolean {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
  }

  private isDateSelected(date: Date): boolean {
    if (this.rangeSelection) {
      return (this.selectedStartDate && this.isSameDay(date, this.selectedStartDate)) ||
             (this.selectedEndDate && this.isSameDay(date, this.selectedEndDate));
    }
    return this.selectedDate && this.isSameDay(date, this.selectedDate);
  }

  private isDateDisabled(date: Date): boolean {
    if (this.minDate && date < new Date(this.minDate)) return true;
    if (this.maxDate && date > new Date(this.maxDate)) return true;
    return false;
  }

  private isDateInRange(date: Date): boolean {
    if (!this.rangeSelection || !this.selectedStartDate) return false;
    
    const endDate = this.selectedEndDate || this.hoverDate;
    if (!endDate) return false;
    
    const start = this.selectedStartDate < endDate ? this.selectedStartDate : endDate;
    const end = this.selectedStartDate < endDate ? endDate : this.selectedStartDate;
    
    return date > start && date < end;
  }

  private handleTimeChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.selectedTime = input.value || '00:00';
    if (this.rangeSelection) {
      this.updateRangeValue();
    } else {
      this.updateSingleValue();
    }
    this.dispatchChangeEvent();
  }

  private updateSingleValue(): void {
    if (this.selectedDate) {
      const timeSuffix = this.includeTime ? ` ${this.selectedTime}` : '';
      this.value = this.formatDate(this.selectedDate, this.dateFormat) + timeSuffix;
      this.inputValue = this.formatDate(this.selectedDate, this.displayFormat) + timeSuffix;
    }
  }

  private updateRangeValue(): void {
    if (this.selectedStartDate && this.selectedEndDate) {
      const startStr = this.formatDate(this.selectedStartDate, this.dateFormat);
      const endStr = this.formatDate(this.selectedEndDate, this.dateFormat);
      this.value = `${startStr} - ${endStr}`;
      
      const startDisplay = this.formatDate(this.selectedStartDate, this.displayFormat);
      const endDisplay = this.formatDate(this.selectedEndDate, this.displayFormat);
      this.inputValue = `${startDisplay} - ${endDisplay}`;
    } else if (this.selectedStartDate) {
      this.value = this.formatDate(this.selectedStartDate, this.dateFormat);
      this.inputValue = this.formatDate(this.selectedStartDate, this.displayFormat);
    }
  }

  private formatDate(date: Date, format: string): string {
    // Simple date formatting - in a real implementation, you'd use a library like date-fns
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const monthName = this.monthNames[date.getMonth()];
    const shortMonthName = monthName.slice(0, 3);
    
    return format
      .replace(/yyyy/g, String(year))
      .replace(/MM/g, month)
      .replace(/MMM/g, shortMonthName)
      .replace(/dd/g, day)
      .replace(/d/g, String(date.getDate()));
  }

  private dispatchChangeEvent(): void {
    const detail = this.rangeSelection ? {
      value: this.value,
      startDate: this.selectedStartDate,
      endDate: this.selectedEndDate,
      isRange: true
    } : {
      value: this.value,
      date: this.selectedDate,
      isRange: false
    };

    this.dispatchEvent(new CustomEvent('change', {
      detail,
      bubbles: true,
      composed: true
    }));

    this.dispatchEvent(new CustomEvent('date-change', {
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
    displayLabel: 'On Date Change',
    eventTrigger: 'date-change',
  })
  handleDateChange(_event: Event) {
    // This method is triggered by the attribute system
    this.dispatchChangeEvent();
  }

  // Public API
  public getSelectedDate(): Date | null {
    return this.selectedDate;
  }

  public getSelectedDateRange(): { start: Date | null; end: Date | null } {
    return {
      start: this.selectedStartDate,
      end: this.selectedEndDate
    };
  }

  public setDate(date: Date | string): void {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    if (this.rangeSelection) {
      this.selectedStartDate = dateObj;
      this.selectedEndDate = null;
      this.updateRangeValue();
    } else {
      this.selectedDate = dateObj;
      this.updateSingleValue();
    }
    this.currentDate = new Date(dateObj.getFullYear(), dateObj.getMonth(), 1);
  }

  public setDateRange(startDate: Date | string, endDate: Date | string): void {
    if (!this.rangeSelection) return;
    
    this.selectedStartDate = typeof startDate === 'string' ? new Date(startDate) : startDate;
    this.selectedEndDate = typeof endDate === 'string' ? new Date(endDate) : endDate;
    this.updateRangeValue();
    this.currentDate = new Date(this.selectedStartDate.getFullYear(), this.selectedStartDate.getMonth(), 1);
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
      if (this.rangeSelection && this.value.includes(' - ')) {
        const [start, end] = this.value.split(' - ');
        this.setDateRange(start, end);
      } else {
        this.setDate(this.value);
      }
    }

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
    'zero-date-picker': ZeroDatePicker;
  }
}
