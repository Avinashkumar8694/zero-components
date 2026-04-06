// @environment page
import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

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

        .number-container {
            position: relative;
            display: flex;
            align-items: center;
        }

        input.mat-mdc-input-element {
            width: 100%;
            padding: var(--spacing-sm, 8px) var(--spacing-md, 12px);
            border: 1px solid var(--border-color, #ddd);
            border-radius: var(--border-radius-sm, 4px);
            font-size: var(--font-size-base, 14px);
            background-color: var(--background-primary, #fff);
            color: var(--text-primary, #333);
            transition: border-color 0.2s, box-shadow 0.2s;
            min-height: var(--input-height, 36px);
            box-sizing: border-box;
            font-family: var(--font-family, 'Roboto', sans-serif);
        }

        input.mat-mdc-input-element::placeholder {
            color: var(--text-secondary, #666);
        }        input.mat-mdc-input-element:hover {
            border-color: var(--primary-light, #6c63ff);
            background: var(--primary-background-hover, rgba(108, 99, 255, 0.02));
        }

        input.mat-mdc-input-element:focus {
            outline: none;
            background: var(--background-primary, #fff);
            border-color: var(--primary-color, #6c63ff);
            box-shadow: 0 0 0 2px var(--primary-light, rgba(108, 99, 255, 0.2));
        }

        input.mat-mdc-input-element:disabled {
            background-color: var(--background-disabled, #f5f5f5);
            color: var(--text-disabled, #999);
            cursor: not-allowed;
        }

        .step-controls {
            display: flex;
            flex-direction: column;
            margin-left: var(--spacing-xs, 4px);
        }        .step-button {
            background: var(--background-secondary, #f5f5f5);
            border: 1px solid var(--border-color, #ddd);
            color: var(--text-primary, #333);
            cursor: pointer;
            font-size: var(--font-size-xs, 12px);
            padding: var(--spacing-xs, 2px) var(--spacing-xs, 6px);
            min-width: var(--icon-size-sm, 24px);
            height: var(--input-step-height, 18px);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: var(--transition-fast, background-color 0.2s, border-color 0.2s);
        }

        .step-button:first-child {
            border-radius: var(--border-radius-sm, 4px) var(--border-radius-sm, 4px) 0 0;
            border-bottom: 0;
        }

        .step-button:last-child {
            border-radius: 0 0 var(--border-radius-sm, 4px) var(--border-radius-sm, 4px);
        }

        .step-button:hover:not(:disabled) {
            background: var(--primary-light, #6c63ff);
            color: white;
            border-color: var(--primary-color, #6c63ff);
        }

        .step-button:disabled {
            background: var(--background-disabled, #f5f5f5);
            color: var(--text-disabled, #ccc);
            cursor: not-allowed;
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

        input.mat-mdc-input-element.error {
            border-color: var(--error-color, #f44336);
        }

        input.mat-mdc-input-element.error:focus {
            box-shadow: 0 0 0 2px var(--error-light, rgba(244, 67, 54, 0.2));
        }

        .value-display {
            font-size: var(--font-size-sm, 12px);
            color: var(--text-secondary, #666);
            margin-top: var(--spacing-xs, 4px);
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

    render() {
        return html`
            <div class="form-field">
                <label for="number-input">${this.label}</label>
                <div class="number-container">
                    <input 
                        id="number-input"
                        type="number" 
                        class="mat-mdc-input-element ${this.showError ? 'error' : ''}"
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
                                class="step-button"
                                ?disabled="${this.disabled || this.value >= this.max}"
                                @click="${this.increment}"
                            >▲</button>
                            <button 
                                type="button"
                                class="step-button"
                                ?disabled="${this.disabled || this.value <= this.min}"
                                @click="${this.decrement}"
                            >▼</button>
                        </div>
                    ` : ''}
                </div>
                ${this.unitLabel ? html`
                    <div class="value-display">
                        Current: ${this.value} ${this.unitLabel}
                    </div>
                ` : ''}
                <div class="error-message ${this.showError ? 'show' : ''}">
                    ${this.errorMessage}
                </div>
            </div>
        `;
    }
}
