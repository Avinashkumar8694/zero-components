// @environment page
import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

/**
 * A configurable range slider component with dual handles and tooltips.
 * 
 * @export
 * @class ZeroRangeSlider
 * @extends {LitElement}
 */
@RendererComponent({
    name: 'zero-range-slider',
    version: '1.0.0',
    title: 'Range Slider',
    elementSelector: 'zero-range-slider',
    group: 'Form Controls',
    iconName: 'range-slider-icon.png',
})
@applyGlobalStyles()
export class ZeroRangeSlider extends LitElement {
    static styles = css`
        :host {
            display: block;
            width: 100%;
        }

        .form-field {
            margin-bottom: var(--spacing-lg, 20px);
        }

        .form-field label {
            display: block;
            margin-bottom: var(--spacing-xs, 6px);
            font-size: var(--font-size-base, 14px);
            color: var(--text-primary, #333);
            font-weight: 500;
        }

        .range-container {
            padding: var(--spacing-md, 12px) 0;
        }

        .range-display {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: var(--spacing-sm, 8px);
            font-size: var(--font-size-sm, 12px);
            color: var(--text-secondary, #666);
        }

        .range-value {
            font-weight: 500;
            color: var(--primary-color, #6c63ff);
            font-size: var(--font-size-base, 14px);
        }

        .slider-track {
            position: relative;            height: 6px;
            background: var(--background-secondary, #f5f5f5);
            border-radius: var(--border-radius-xs, 3px);
            margin: var(--spacing-md, 12px) 0;
        }

        .slider-progress {
            position: absolute;
            height: 100%;            background: var(--primary-color, #6c63ff);
            border-radius: var(--border-radius-xs, 3px);
            transition: all 0.2s;
        }

        input[type="range"] {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 100%;
            height: 6px;
            background: transparent;
            outline: none;
            cursor: pointer;
            pointer-events: none;
        }        input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: var(--icon-size-md, 20px);
            height: var(--icon-size-md, 20px);
            border-radius: 50%;
            background: var(--primary-color, #6c63ff);
            border: 2px solid white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            cursor: pointer;
            pointer-events: all;
            transition: all 0.2s;
        }

        input[type="range"]::-webkit-slider-thumb:hover {
            transform: scale(1.1);
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }        input[type="range"]::-moz-range-thumb {
            width: var(--icon-size-md, 20px);
            height: var(--icon-size-md, 20px);
            border-radius: 50%;
            background: var(--primary-color, #6c63ff);
            border: 2px solid white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            cursor: pointer;
            pointer-events: all;
            transition: all 0.2s;
        }

        input[type="range"]::-moz-range-thumb:hover {
            transform: scale(1.1);
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }

        input[type="range"]:disabled {
            cursor: not-allowed;
        }

        input[type="range"]:disabled::-webkit-slider-thumb {
            background: var(--background-disabled, #ccc);
            cursor: not-allowed;
        }

        input[type="range"]:disabled::-moz-range-thumb {
            background: var(--background-disabled, #ccc);
            cursor: not-allowed;
        }

        .dual-slider {
            position: relative;
        }

        .dual-slider input[type="range"] {
            position: absolute;
            top: 0;
        }

        .dual-slider input[type="range"]:first-child {
            z-index: 1;
        }

        .dual-slider input[type="range"]:last-child {
            z-index: 2;
        }

        .value-labels {
            display: flex;
            justify-content: space-between;
            margin-top: var(--spacing-sm, 8px);
            font-size: var(--font-size-sm, 12px);
            color: var(--text-secondary, #666);
        }

        .current-values {
            display: flex;
            justify-content: center;
            gap: var(--spacing-md, 12px);
            margin-top: var(--spacing-sm, 8px);
            font-size: var(--font-size-base, 14px);
            font-weight: 500;
        }

        .value-input {
            display: flex;
            align-items: center;
            gap: var(--spacing-xs, 4px);
        }        .value-input input {
            width: 60px;
            padding: var(--spacing-xs, 2px) var(--spacing-xs, 6px);
            border: 1px solid var(--border-color, #ddd);
            border-radius: var(--border-radius-xs, 3px);
            font-size: var(--font-size-sm, 12px);
            text-align: center;
        }

        .step-controls {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: var(--spacing-sm, 8px);
        }        .step-button {
            background: var(--background-secondary, #f5f5f5);
            border: 1px solid var(--border-color, #ddd);
            color: var(--text-primary, #333);
            cursor: pointer;
            font-size: var(--font-size-sm, 12px);
            padding: var(--spacing-xs, 4px) var(--spacing-sm, 8px);
            border-radius: var(--border-radius-xs, 3px);
            transition: var(--transition-fast, all 0.2s);
        }

        .step-button:hover:not(:disabled) {
            background: var(--primary-color, #6c63ff);
            color: white;
        }

        .step-button:disabled {
            background: var(--background-disabled, #f5f5f5);
            color: var(--text-disabled, #ccc);
            cursor: not-allowed;
        }        .tooltip {
            position: absolute;
            background: var(--text-primary, #333);
            color: white;
            padding: var(--spacing-xs, 4px) var(--spacing-sm, 8px);
            border-radius: var(--border-radius-xs, 3px);
            font-size: var(--font-size-sm, 12px);
            white-space: nowrap;
            transform: translateX(-50%);
            top: -35px;
            opacity: 0;
            transition: var(--transition-fast, opacity 0.2s);
            pointer-events: none;
            z-index: 10;
        }

        .tooltip.show {
            opacity: 1;
        }

        .tooltip::after {
            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            border: 4px solid transparent;
            border-top-color: var(--text-primary, #333);
        }

        .error-message {
            color: var(--error-color, #f44336);
            font-size: var(--font-size-sm, 12px);
            margin-top: var(--spacing-xs, 4px);
            display: none;
        }

        .error-message.show {
            display: block;
        }

        .slider-track.error .slider-progress {
            background: var(--error-color, #f44336);
        }

        input[type="range"].error::-webkit-slider-thumb {
            background: var(--error-color, #f44336);
        }

        input[type="range"].error::-moz-range-thumb {
            background: var(--error-color, #f44336);
        }
    `;

    @property({ type: Number })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.NUMBER_INPUT,
        displayLabel: 'Value',
        fieldMappings: 'value',
    })
    value = 50;

    @property({ type: Number })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.NUMBER_INPUT,
        displayLabel: 'Min Value',
        fieldMappings: 'min',
    })
    min = 0;

    @property({ type: Number })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.NUMBER_INPUT,
        displayLabel: 'Max Value',
        fieldMappings: 'max',
    })
    max = 100;

    @property({ type: Number })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.NUMBER_INPUT,
        displayLabel: 'Step',
        fieldMappings: 'step',
    })
    step = 1;

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Label',
        placeholderText: 'Enter label text',
        fieldMappings: 'label',
    })
    label = 'Range Slider';

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Unit',
        placeholderText: 'e.g., px, %, $',
        fieldMappings: 'unit',
    })
    unit = '';

    @property({ type: Boolean })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.CHECKBOX,
        displayLabel: 'Dual Range',
        fieldMappings: 'dualRange',
    })
    dualRange = false;

    @property({ type: Number })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.NUMBER_INPUT,
        displayLabel: 'Second Value',
        fieldMappings: 'secondValue',
    })
    secondValue = 75;

    @property({ type: Boolean })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.CHECKBOX,
        displayLabel: 'Show Tooltip',
        fieldMappings: 'showTooltip',
    })
    showTooltip = false;

    @property({ type: Boolean })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.CHECKBOX,
        displayLabel: 'Show Value Inputs',
        fieldMappings: 'showValueInputs',
    })
    showValueInputs = false;

    @property({ type: Boolean })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.CHECKBOX,
        displayLabel: 'Show Step Controls',
        fieldMappings: 'showStepControls',
    })
    showStepControls = false;

    @property({ type: Boolean })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.CHECKBOX,
        displayLabel: 'Disabled',
        fieldMappings: 'disabled',
    })
    disabled = false;

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Error Message',
        placeholderText: 'Enter error message',
        fieldMappings: 'errorMessage',
    })
    errorMessage = '';

    @property({ type: Boolean })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.CHECKBOX,
        displayLabel: 'Show Error',
        fieldMappings: 'showError',
    })
    showError = false;

    @property({ type: Boolean })
    private showTooltipState = false;

    private getProgressWidth(): string {
        if (this.dualRange) {
            const minVal = Math.min(this.value, this.secondValue);
            const maxVal = Math.max(this.value, this.secondValue);
            const range = this.max - this.min;
            return `${((maxVal - minVal) / range) * 100}%`;
        }
        return `${((this.value - this.min) / (this.max - this.min)) * 100}%`;
    }

    private getProgressLeft(): string {
        if (this.dualRange) {
            const minVal = Math.min(this.value, this.secondValue);
            const range = this.max - this.min;
            return `${((minVal - this.min) / range) * 100}%`;
        }
        return '0%';
    }

    private formatValue(value: number): string {
        return `${value}${this.unit}`;
    }

    private handleSliderInput(event: Event, isSecond = false) {
        const target = event.target as HTMLInputElement;
        const newValue = Number(target.value);
        
        if (isSecond) {
            this.secondValue = newValue;
        } else {
            this.value = newValue;
        }
        
        this.dispatchChangeEvent();
    }

    private handleValueInput(event: Event, isSecond = false) {
        const target = event.target as HTMLInputElement;
        let newValue = Number(target.value);
        
        // Clamp value to min/max
        newValue = Math.max(this.min, Math.min(this.max, newValue));
        
        if (isSecond) {
            this.secondValue = newValue;
        } else {
            this.value = newValue;
        }
        
        target.value = String(newValue);
        this.dispatchChangeEvent();
    }

    private stepValue(direction: number, isSecond = false) {
        const currentValue = isSecond ? this.secondValue : this.value;
        let newValue = currentValue + (direction * this.step);
        
        // Clamp to min/max
        newValue = Math.max(this.min, Math.min(this.max, newValue));
        
        if (isSecond) {
            this.secondValue = newValue;
        } else {
            this.value = newValue;
        }
        
        this.dispatchChangeEvent();
    }

    private showTooltipHandler() {
        if (this.showTooltip) {
            this.showTooltipState = true;
        }
    }

    private hideTooltipHandler() {
        this.showTooltipState = false;
    }

    private dispatchChangeEvent() {
        this.dispatchEvent(new CustomEvent('change', {
            detail: { 
                value: this.value,
                secondValue: this.dualRange ? this.secondValue : undefined,
                min: this.value,
                max: this.dualRange ? Math.max(this.value, this.secondValue) : this.value,
                dualRange: this.dualRange
            },
            bubbles: true,
            composed: true,
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

    render() {
        const minVal = this.dualRange ? Math.min(this.value, this.secondValue) : this.value;
        const maxVal = this.dualRange ? Math.max(this.value, this.secondValue) : this.value;

        return html`
            <div class="form-field">
                <label>${this.label}</label>
                
                <div class="range-container">
                    <div class="range-display">
                        <span>${this.formatValue(this.min)}</span>
                        <span class="range-value">
                            ${this.dualRange ? 
                                `${this.formatValue(minVal)} - ${this.formatValue(maxVal)}` :
                                this.formatValue(this.value)
                            }
                        </span>
                        <span>${this.formatValue(this.max)}</span>
                    </div>
                    
                    <div class="slider-track ${this.showError ? 'error' : ''} ${this.dualRange ? 'dual-slider' : ''}">
                        <div class="slider-progress" 
                             style="left: ${this.getProgressLeft()}; width: ${this.getProgressWidth()}"></div>
                        
                        <input 
                            type="range"
                            min="${this.min}"
                            max="${this.max}"
                            step="${this.step}"
                            .value="${String(this.value)}"
                            ?disabled="${this.disabled}"
                            class="${this.showError ? 'error' : ''}"
                            @input="${(e: Event) => this.handleSliderInput(e, false)}"
                            @mouseenter="${this.showTooltipHandler}"
                            @mouseleave="${this.hideTooltipHandler}"
                        />
                        
                        ${this.dualRange ? html`
                            <input 
                                type="range"
                                min="${this.min}"
                                max="${this.max}"
                                step="${this.step}"
                                .value="${String(this.secondValue)}"
                                ?disabled="${this.disabled}"
                                class="${this.showError ? 'error' : ''}"
                                @input="${(e: Event) => this.handleSliderInput(e, true)}"
                                @mouseenter="${this.showTooltipHandler}"
                                @mouseleave="${this.hideTooltipHandler}"
                            />
                        ` : ''}
                        
                        ${this.showTooltip && this.showTooltipState ? html`
                            <div class="tooltip show" style="left: ${this.getProgressLeft()}">
                                ${this.formatValue(this.value)}
                            </div>
                        ` : ''}
                    </div>
                    
                    ${this.showValueInputs ? html`
                        <div class="current-values">
                            <div class="value-input">
                                <span>Value:</span>
                                <input 
                                    type="number"
                                    min="${this.min}"
                                    max="${this.max}"
                                    step="${this.step}"
                                    .value="${String(this.value)}"
                                    ?disabled="${this.disabled}"
                                    @change="${(e: Event) => this.handleValueInput(e, false)}"
                                />
                            </div>
                            ${this.dualRange ? html`
                                <div class="value-input">
                                    <span>Second:</span>
                                    <input 
                                        type="number"
                                        min="${this.min}"
                                        max="${this.max}"
                                        step="${this.step}"
                                        .value="${String(this.secondValue)}"
                                        ?disabled="${this.disabled}"
                                        @change="${(e: Event) => this.handleValueInput(e, true)}"
                                    />
                                </div>
                            ` : ''}
                        </div>
                    ` : ''}
                    
                    ${this.showStepControls ? html`
                        <div class="step-controls">
                            <button 
                                type="button"
                                class="step-button"
                                ?disabled="${this.disabled || this.value <= this.min}"
                                @click="${() => this.stepValue(-1, false)}"
                            >
                                -${this.step}
                            </button>
                            <span>Step: ${this.step}</span>
                            <button 
                                type="button"
                                class="step-button"
                                ?disabled="${this.disabled || this.value >= this.max}"
                                @click="${() => this.stepValue(1, false)}"
                            >
                                +${this.step}
                            </button>
                        </div>
                    ` : ''}
                </div>
                
                <div class="error-message ${this.showError ? 'show' : ''}">
                    ${this.errorMessage}
                </div>
            </div>
        `;
    }
}
