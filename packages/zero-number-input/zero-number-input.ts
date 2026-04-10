import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

const getThemeManager = () => (window as any).zeroThemeManager;

/**
 * A configurable number input component with step controls.
 * 
 * @export
 * @class ZeroNumberInput
 * @extends {LitElement}
 */
@RendererComponent({
    name: 'zero-number-input',
    version: '1.0.0',
    title: 'Number Input',
    elementSelector: 'zero-number-input',
    group: 'Form Controls',
    iconName: 'number-input-icon.png',
})
@applyGlobalStyles()
export class ZeroNumberInput extends LitElement {
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

        .number-container {
            position: relative;
            display: flex;
            align-items: center;
        }

        input.mat-mdc-input-element {
            width: 100%;
            padding: 8px 12px;
            border: 1px solid var(--uiv-border);
            border-radius: 8px;
            font-size: 14px;
            background-color: var(--uiv-bg);
            color: var(--uiv-text);
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            min-height: 40px;
            box-sizing: border-box;
            box-shadow: var(--uiv-shadow-depth, none);
        }

        input.mat-mdc-input-element:hover {
            border-color: var(--uiv-primary);
            box-shadow: var(--uiv-border-glow);
        }

        input.mat-mdc-input-element:focus {
            outline: none;
            border-color: var(--uiv-primary);
            box-shadow: var(--uiv-border-glow);
            transform: translateY(-1px);
        }

        .step-controls {
            display: flex;
            flex-direction: column;
            margin-left: 8px;
            gap: 4px;
        }

        .step-button {
            background: var(--uiv-bg);
            border: 1px solid var(--uiv-border);
            color: var(--uiv-text);
            cursor: pointer;
            width: 28px;
            height: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
            transition: all 0.2s;
            font-size: 10px;
            box-shadow: var(--uiv-shadow-depth, none);
        }

        .step-button:hover:not(:disabled) {
            background: var(--uiv-primary);
            color: white;
            border-color: var(--uiv-primary);
            box-shadow: var(--uiv-border-glow);
            transform: scale(1.1);
        }
    `;

    @property({ type: Number })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.NUMBER_INPUT,
        displayLabel: 'Value',
        fieldMappings: 'value',
    })
    value = 0;

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Label',
        placeholderText: 'Enter label text',
        fieldMappings: 'label',
    })
    label = 'Number Input';

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Placeholder',
        placeholderText: 'Enter placeholder text',
        fieldMappings: 'placeholder',
    })
    placeholder = 'Enter number';

    @property({ type: Number })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.NUMBER_INPUT,
        displayLabel: 'Minimum Value',
        fieldMappings: 'min',
    })
    min = 0;

    @property({ type: Number })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.NUMBER_INPUT,
        displayLabel: 'Maximum Value',
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

    @property({ type: Boolean })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.CHECKBOX,
        displayLabel: 'Required',
        fieldMappings: 'required',
    })
    required = false;

    @property({ type: Boolean })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.CHECKBOX,
        displayLabel: 'Disabled',
        fieldMappings: 'disabled',
    })
    disabled = false;

    @property({ type: Boolean })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.CHECKBOX,
        displayLabel: 'Show Step Controls',
        fieldMappings: 'showStepControls',
    })
    showStepControls = true;

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Unit Label',
        placeholderText: 'e.g., kg, cm, %',
        fieldMappings: 'unitLabel',
    })
    unitLabel = '';

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

    private increment() {
        const newValue = this.value + this.step;
        if (newValue <= this.max) {
            this.value = Math.round(newValue * 100) / 100; // Round to avoid floating point issues
            this.dispatchChangeEvent();
        }
    }

    private decrement() {
        const newValue = this.value - this.step;
        if (newValue >= this.min) {
            this.value = Math.round(newValue * 100) / 100; // Round to avoid floating point issues
            this.dispatchChangeEvent();
        }
    }

    private dispatchChangeEvent() {
        this.dispatchEvent(new CustomEvent('change', {
            detail: { value: this.value },
            bubbles: true,
            composed: true,
        }));
    }

    @RendererAttribute({
        attributeType: AttributeType.EVENT,
        displayLabel: 'On Input',
        eventTrigger: 'input',
    })
    handleInput(event: Event) {
        const target = event.target as HTMLInputElement;
        this.value = Number(target.value) || 0;
        this.dispatchEvent(new CustomEvent('input', {
            detail: { value: this.value },
            bubbles: true,
            composed: true,
        }));
    }

    @RendererAttribute({
        attributeType: AttributeType.EVENT,
        displayLabel: 'On Change',
        eventTrigger: 'change',
    })
    handleChange(event: Event) {
        const target = event.target as HTMLInputElement;
        let newValue = Number(target.value) || 0;
        
        // Clamp value to min/max
        newValue = Math.max(this.min, Math.min(this.max, newValue));
        this.value = newValue;
        target.value = String(newValue);
        
        this.dispatchChangeEvent();
    }

    connectedCallback() {
        super.connectedCallback();
        getThemeManager()?.addEventListener('theme-changed', () => this.requestUpdate());
    }

    render() {
        const themeModule = getThemeManager()?.getActiveTheme('zero-standard-themes');
        return html`
            <style>
                ${themeModule ? themeModule.getGlobalStyles() : ''}
                ${themeModule ? themeModule.getComponentStyles('input') : ''}
            </style>
            <div class="form-field uiv-${themeModule?.id}-theme">
                <label for="number-input" class="uiv-${themeModule?.id}-text">${this.label}</label>
                <div class="number-container">
                    <input 
                        id="number-input"
                        type="number" 
                        class="mat-mdc-input-element uiv-${themeModule?.id}-card uiv-${themeModule?.id}-scan ${this.showError ? 'error' : ''}"
                        .value="${String(this.value)}" 
                        placeholder="${this.placeholder}"
                        min="${this.min}"
                        max="${this.max}"
                        step="${this.step}"
                        ?required="${this.required}"
                        ?disabled="${this.disabled}"
                        @input="${this.handleInput}"
                        @change="${this.handleChange}"
                    />
                    ${this.showStepControls ? html`
                        <div class="step-controls">
                            <button 
                                type="button"
                                class="step-button uiv-${themeModule?.id}-card"
                                ?disabled="${this.disabled || this.value >= this.max}"
                                @click="${this.increment}"
                            >▲</button>
                            <button 
                                type="button"
                                class="step-button uiv-${themeModule?.id}-card"
                                ?disabled="${this.disabled || this.value <= this.min}"
                                @click="${this.decrement}"
                            >▼</button>
                        </div>
                    ` : ''}
                </div>
                ${this.unitLabel ? html`
                    <div class="value-display uiv-${themeModule?.id}-text-secondary">
                        Current: ${this.value} ${this.unitLabel}
                    </div>
                ` : ''}
                <div class="error-message uiv-${themeModule?.id}-text ${this.showError ? 'show' : ''}" style="color: var(--uiv-error-color, #f44336)">
                    ${this.errorMessage}
                </div>
            </div>
        `;
    }
}
