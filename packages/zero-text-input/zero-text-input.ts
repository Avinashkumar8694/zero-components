// @environment page
import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

const getThemeManager = () => (window as any).zeroThemeManager;

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
            transition: color 0.3s ease;
        }

        input.mat-mdc-input-element {
            width: 100%;
            padding: 12px 16px;
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

        input.mat-mdc-input-element::placeholder {
            color: var(--uiv-text-muted, #94a3b8);
        }

        input.mat-mdc-input-element:hover {
            border-color: var(--uiv-primary);
            box-shadow: var(--uiv-border-glow, 0 0 10px rgba(108, 99, 255, 0.1));
        }

        input.mat-mdc-input-element:focus {
            outline: none;
            border-color: var(--uiv-primary);
            box-shadow: var(--uiv-border-glow, 0 0 15px rgba(108, 99, 255, 0.2));
            transform: translateY(-1px);
        }

        input.mat-mdc-input-element:disabled {
            background-color: #f5f5f5;
            color: #999;
            cursor: not-allowed;
            opacity: 0.6;
        }

        .error-message {
            color: #ef4444;
            font-size: 12px;
            margin-top: 6px;
            display: none;
        }

        .error-message.show {
            display: block;
        }

        input.mat-mdc-input-element.error {
            border-color: #ef4444;
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

    connectedCallback() {
        super.connectedCallback();
        getThemeManager()?.addEventListener('theme-changed', () => this.requestUpdate());
    }

    render() {
        const themeModule = getThemeManager()?.getActiveTheme('zero-standard-themes');
        return html`
            <style>
                ${themeModule ? themeModule.getGlobalStyles() : ''}
                ${themeModule ? themeModule.getComponentStyles('text-input') : ''}
            </style>
            <div class="form-field uiv-${themeModule?.id}-theme">
                <label for="text-input" class="uiv-${themeModule?.id}-text">${this.label}</label>
                <input 
                    id="text-input"
                    type="text" 
                    class="mat-mdc-input-element uiv-${themeModule?.id}-card uiv-${themeModule?.id}-scan ${this.showError ? 'error' : ''}"
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
                <div class="error-message uiv-${themeModule?.id}-text ${this.showError ? 'show' : ''}" style="color: var(--uiv-error-color, #f44336)">
                    ${this.errorMessage}
                </div>
            </div>
        `;
    }
}
