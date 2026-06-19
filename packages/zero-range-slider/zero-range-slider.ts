// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from 'zero-annotation';
import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

const getThemeManager = () => (window as any).zeroThemeManager;

/**
 * A configurable range slider component with dual handles and tooltips.
 * 
 * @export
 * @class ZeroRangeSlider
 * @extends {LitElement}
 */
export const studioTemplate: ZeroStudioTemplate = {
    kind: 'generic',
    templateHtml: [
        "<div style='padding:10px 14px;border-radius:8px;border:1px solid rgba(148,163,184,0.15);background:rgba(255,255,255,0.95);'>",
        "<div style='font-size:0.65rem;color:var(--uiv-text-muted,#94a3b8);font-weight:600;margin-bottom:6px;'>{{display:label}}</div>",
        "<div style='height:4px;border-radius:2px;background:rgba(148,163,184,0.2);position:relative;'>",
        "<div style='position:absolute;left:20%;right:40%;height:100%;background:var(--uiv-primary-color,#6c63ff);border-radius:2px;'></div>",
        "</div>",
        "<div style='display:flex;justify-content:space-between;margin-top:4px;font-size:0.6rem;color:#94a3b8;'>",
        "<span>{{display:min}}</span><span>{{display:max}}</span>",
        "</div>",
        "</div>"
    ].join(""),
    labelProp: 'label',
    badges: ['Form', 'Slider'],
};

function escapeStudio(value: string): string {
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

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
    static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
        if (!config) return studioTemplate;
        const labelDisplay = escapeStudio(config.studio.display.label || 'Range Slider');
        const primary = 'var(--uiv-primary-color, #6c63ff)';
        const bg = 'var(--uiv-surface-color, #ffffff)';
        const border = 'var(--uiv-border-color, rgba(148,163,184,0.15))';
        const textMuted = 'var(--uiv-text-muted, #94a3b8)';

        const props = config.studio.props || {};
        const mn = Number(props.min) || 0;
        const mx = Number(props.max) || 100;
        const val1 = Number(props.value) || 50;
        const val2 = Number(props.secondValue) || 75;
        const dual = !!props.dualRange;

        const range = mx - mn;
        let leftBound = 0;
        let rightBound = 0;

        if (dual) {
            const low = Math.min(val1, val2);
            const high = Math.max(val1, val2);
            leftBound = ((low - mn) / range) * 100;
            rightBound = 100 - (((high - mn) / range) * 100);
        } else {
            leftBound = 0;
            rightBound = 100 - (((val1 - mn) / range) * 100);
        }

        return {
            ...studioTemplate,
            templateHtml: [
                `<div style='padding:12px;border-radius:8px;border:1px solid ${border};background:${bg};box-shadow:var(--uiv-shadow-depth, 0 1px 3px rgba(0,0,0,0.05));'>`,
                `<div style='font-size:0.75rem;color:${textMuted};font-weight:600;margin-bottom:8px;text-transform:uppercase;letter-spacing:1px;'>${labelDisplay}</div>`,
                "<div style='height:6px;border-radius:3px;background:rgba(148,163,184,0.15);position:relative;margin:12px 0;'>",
                `<div style='position:absolute;left:${leftBound}%;right:${rightBound}%;height:100%;background:${primary};border-radius:3px;box-shadow:var(--uiv-border-glow);'></div>`,
                `<div style='position:absolute;left:${dual ? leftBound : leftBound + (100 - rightBound)}%;top:50%;transform:translate(-50%,-50%);width:18px;height:18px;border-radius:50%;background:#ffffff;border:3px solid ${primary};box-shadow:0 3px 6px rgba(0,0,0,0.2);'></div>`,
                dual ? `<div style='position:absolute;left:${100 - rightBound}%;top:50%;transform:translate(-50%,-50%);width:18px;height:18px;border-radius:50%;background:#ffffff;border:3px solid ${primary};box-shadow:0 3px 6px rgba(0,0,0,0.2);'></div>` : '',
                "</div>",
                "</div>"
            ].join(""),
        };
    }

    static styles = css`
        :host {
            display: block;
            width: 100%;
            --uiv-primary: var(--uiv-primary-color, #6c63ff);
            --uiv-bg: var(--uiv-surface-color, #fff);
            --uiv-text: var(--uiv-text-color, #333);
            --uiv-border: var(--uiv-border-color, #ddd);
        }

        .form-field {
            margin-bottom: 20px;
        }

        .form-field label {
            display: block;
            margin-bottom: 8px;
            font-size: 14px;
            color: var(--uiv-text);
            font-weight: 500;
        }

        .range-container {
            padding: 12px 0;
        }

        .range-display {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
            font-size: 12px;
            color: var(--uiv-text);
            opacity: 0.8;
        }

        .range-value {
            font-weight: 600;
            color: var(--uiv-primary);
            font-size: 14px;
        }

        .slider-track {
            position: relative;
            height: 6px;
            background: rgba(var(--uiv-primary-rgb, 108, 99, 255), 0.1);
            border-radius: 3px;
            margin: 12px 0;
            box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
        }

        .slider-progress {
            position: absolute;
            height: 100%;
            background: var(--uiv-primary);
            border-radius: 3px;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            box-shadow: var(--uiv-border-glow);
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
        }

        input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: var(--uiv-primary);
            border: 3px solid var(--uiv-bg);
            box-shadow: 0 4px 12px rgba(0,0,0,0.25);
            cursor: pointer;
            pointer-events: all;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        input[type="range"]::-webkit-slider-thumb:hover {
            transform: translateY(-2px) scale(1.2);
            box-shadow: 0 8px 16px rgba(0,0,0,0.3);
        }

        .dual-slider input[type="range"]:last-child {
            z-index: 2;
        }

        .tooltip {
            position: absolute;
            background: var(--uiv-primary);
            color: white;
            padding: 4px 10px;
            border-radius: 6px;
            font-size: 12px;
            white-space: nowrap;
            transform: translateX(-50%);
            top: -40px;
            opacity: 0;
            transition: all 0.2s;
            pointer-events: none;
            z-index: 10;
            box-shadow: var(--uiv-border-glow);
        }

        .tooltip.show { opacity: 1; transform: translateX(-50%) translateY(-5px); }

        .step-button {
            background: var(--uiv-bg);
            border: 1px solid var(--uiv-border);
            color: var(--uiv-text);
            padding: 4px 12px;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.2s;
            font-size: 12px;
            box-shadow: var(--uiv-shadow-depth, none);
        }

        .step-button:hover:not(:disabled) {
            background: var(--uiv-primary);
            color: white;
            border-color: var(--uiv-primary);
            box-shadow: var(--uiv-border-glow);
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

    connectedCallback() {
        super.connectedCallback();
        getThemeManager()?.addEventListener('theme-changed', () => this.requestUpdate());
    }

    render() {
        const themeModule = getThemeManager()?.getActiveTheme('zero-standard-themes');
        const minVal = this.dualRange ? Math.min(this.value, this.secondValue) : this.value;
        const maxVal = this.dualRange ? Math.max(this.value, this.secondValue) : this.value;

        return html`
            <style>
                ${themeModule ? themeModule.getGlobalStyles() : ''}
                ${themeModule ? themeModule.getComponentStyles('slider') : ''}
            </style>
            <div class="form-field uiv-${themeModule?.id}-theme">
                <label class="uiv-${themeModule?.id}-text">${this.label}</label>
                
                <div class="range-container">
                    <div class="range-display uiv-${themeModule?.id}-text">
                        <span>${this.formatValue(this.min)}</span>
                        <span class="range-value uiv-${themeModule?.id}-text">
                            ${this.dualRange ? 
                                `${this.formatValue(minVal)} - ${this.formatValue(maxVal)}` :
                                this.formatValue(this.value)
                            }
                        </span>
                        <span>${this.formatValue(this.max)}</span>
                    </div>
                    
                    <div class="slider-track uiv-${themeModule?.id}-scan ${this.showError ? 'error' : ''} ${this.dualRange ? 'dual-slider' : ''}">
                        <div class="slider-progress uiv-${themeModule?.id}-card" 
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
                            <div class="tooltip uiv-${themeModule?.id}-card show" style="left: ${this.getProgressLeft()}">
                                ${this.formatValue(this.value)}
                            </div>
                        ` : ''}
                    </div>
                    
                    ${this.showValueInputs ? html`
                        <div class="current-values uiv-${themeModule?.id}-text">
                            <div class="value-input">
                                <span>Value:</span>
                                <input 
                                    type="number"
                                    class="uiv-${themeModule?.id}-card"
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
                                        class="uiv-${themeModule?.id}-card"
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
                                class="step-button uiv-${themeModule?.id}-card"
                                ?disabled="${this.disabled || this.value <= this.min}"
                                @click="${() => this.stepValue(-1, false)}"
                            >
                                -${this.step}
                            </button>
                            <span class="uiv-${themeModule?.id}-text">Step: ${this.step}</span>
                            <button 
                                type="button"
                                class="step-button uiv-${themeModule?.id}-card"
                                ?disabled="${this.disabled || this.value >= this.max}"
                                @click="${() => this.stepValue(1, false)}"
                            >
                                +${this.step}
                            </button>
                        </div>
                    ` : ''}
                </div>
                
                <div class="error-message uiv-${themeModule?.id}-text ${this.showError ? 'show' : ''}" style="color: var(--uiv-error-color, #f44336)">
                    ${this.errorMessage}
                </div>
            </div>
        `;
    }
}
