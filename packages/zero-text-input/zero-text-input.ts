// @environment page
import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

/**
 * A configurable text input component with global styling.
 * 
 * @export
 * @class ZeroTextInput
 * @extends {LitElement}
 */
@RendererComponent({
    name: 'zero-text-input',
    version: '1.0.0',
    title: 'Text Input',
    elementSelector: 'zero-text-input',
    group: 'Form Controls',
    iconName: 'text-input-icon.png',
})
@applyGlobalStyles()
export class ZeroTextInput extends LitElement {
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
        }        input.mat-mdc-input-element {
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
    `;

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Value',
        placeholderText: 'Enter text value',
        fieldMappings: 'value',
    })
    value = '';

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Label',
        placeholderText: 'Enter label text',
        fieldMappings: 'label',
    })
    label = 'Text Input';

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Placeholder',
        placeholderText: 'Enter placeholder text',
        fieldMappings: 'placeholder',
    })
    placeholder = '';

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

    @property({ type: Number })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.NUMBER_INPUT,
        displayLabel: 'Max Length',
        fieldMappings: 'maxLength',
    })
    maxLength = 0;

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

    @RendererAttribute({
        attributeType: AttributeType.EVENT,
        displayLabel: 'On Input',
        eventTrigger: 'input',
    })
    handleInput(event: Event) {
        const target = event.target as HTMLInputElement;
        this.value = target.value;
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
        this.value = target.value;
        this.dispatchEvent(new CustomEvent('change', {
            detail: { value: this.value },
            bubbles: true,
            composed: true,
        }));
    }

    @RendererAttribute({
        attributeType: AttributeType.EVENT,
        displayLabel: 'On Focus',
        eventTrigger: 'focus',
    })
    handleFocus(event: Event) {
        this.dispatchEvent(new CustomEvent('focus', {
            detail: { value: this.value },
            bubbles: true,
            composed: true,
        }));
    }

    @RendererAttribute({
        attributeType: AttributeType.EVENT,
        displayLabel: 'On Blur',
        eventTrigger: 'blur',
    })
    handleBlur(event: Event) {
        this.dispatchEvent(new CustomEvent('blur', {
            detail: { value: this.value },
            bubbles: true,
            composed: true,
        }));
    }

    render() {
        return html`
            <div class="form-field">
                <label for="text-input">${this.label}</label>
                <input 
                    id="text-input"
                    type="text" 
                    class="mat-mdc-input-element ${this.showError ? 'error' : ''}"
                    .value="${this.value}" 
                    placeholder="${this.placeholder}"
                    ?required="${this.required}"
                    ?disabled="${this.disabled}"
                    maxlength="${this.maxLength > 0 ? this.maxLength : ''}"
                    @input="${this.handleInput}"
                    @change="${this.handleChange}"
                    @focus="${this.handleFocus}"
                    @blur="${this.handleBlur}"
                />
                <div class="error-message ${this.showError ? 'show' : ''}">
                    ${this.errorMessage}
                </div>
            </div>
        `;
    }
}
