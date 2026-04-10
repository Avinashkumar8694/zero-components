import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

const getThemeManager = () => (window as any).zeroThemeManager;

/**
 * A configurable checkbox component with custom styling.
 * 
 * @export
 * @class ZeroCheckbox
 * @extends {LitElement}
 */
@RendererComponent({
    name: 'zero-checkbox',
    version: '1.0.0',
    title: 'Checkbox',
    elementSelector: 'zero-checkbox',
    group: 'Form Controls',
    iconName: 'checkbox-icon.png',
})
@applyGlobalStyles()
export class ZeroCheckbox extends LitElement {
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

        .form-field label.main-label {
            display: block;
            margin-bottom: 8px;
            font-size: 14px;
            color: var(--uiv-text);
            font-weight: 500;
        }

        .checkbox-field {
            display: flex;
            align-items: center;
            gap: 12px;
            cursor: pointer;
            padding: 8px;
            border-radius: 8px;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .checkbox-field:hover:not(.disabled) {
            background-color: rgba(var(--uiv-primary-rgb, 108, 99, 255), 0.05);
            transform: translateX(2px);
        }

        .checkbox-field.disabled {
            cursor: not-allowed;
            opacity: 0.6;
        }

        .checkbox-container {
            position: relative;
            display: inline-block;
        }

        input[type="checkbox"] {
            width: 20px;
            height: 20px;
            margin: 0;
            cursor: pointer;
            appearance: none;
            -webkit-appearance: none;
            border: 2px solid var(--uiv-border);
            border-radius: 6px;
            background-color: var(--uiv-bg);
            transition: all 0.2s;
            position: relative;
            box-shadow: var(--uiv-shadow-depth, none);
        }

        input[type="checkbox"]:hover:not(:disabled) {
            border-color: var(--uiv-primary);
            box-shadow: var(--uiv-border-glow);
        }

        input[type="checkbox"]:checked {
            background-color: var(--uiv-primary);
            border-color: var(--uiv-primary);
            box-shadow: var(--uiv-border-glow);
        }

        input[type="checkbox"]:checked::after {
            content: '✓';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
            font-size: 14px;
            font-weight: bold;
        }

        input[type="checkbox"]:focus {
            outline: none;
            box-shadow: 0 0 0 2px rgba(var(--uiv-primary-rgb, 108, 99, 255), 0.2), var(--uiv-border-glow);
        }

        input[type="checkbox"]:disabled {
            background-color: #f5f5f5;
            border-color: #ccc;
            cursor: not-allowed;
        }

        .checkbox-label {
            font-size: var(--font-size-base, 14px);
            color: var(--text-primary, #333);
            cursor: pointer;
            user-select: none;
            line-height: 1.4;
        }

        .checkbox-field.disabled .checkbox-label {
            color: var(--text-disabled, #999);
            cursor: not-allowed;
        }

        .description {
            font-size: var(--font-size-sm, 12px);
            color: var(--text-secondary, #666);
            margin-top: var(--spacing-xs, 4px);
            margin-left: 26px; /* Align with checkbox label */
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

        input[type="checkbox"].error {
            border-color: var(--error-color, #f44336);
        }

        input[type="checkbox"].error:focus {
            box-shadow: 0 0 0 2px var(--error-light, rgba(244, 67, 54, 0.2));
        }

        /* Custom checkbox styles */
        .checkbox-field.custom-style input[type="checkbox"] {
            border-radius: 50%;
        }

        .checkbox-field.switch-style {
            gap: var(--spacing-md, 12px);
        }        .checkbox-field.switch-style input[type="checkbox"] {
            width: var(--icon-size-xl, 36px);
            height: var(--icon-size-md, 20px);
            border-radius: var(--border-radius-xl, 10px);
            background-color: var(--background-secondary, #f5f5f5);
            border: 1px solid var(--border-color, #ddd);
            position: relative;
            transition: all 0.3s;
        }

        .checkbox-field.switch-style input[type="checkbox"]::after {
            content: '';
            position: absolute;
            top: 1px;
            left: 1px;            width: var(--icon-size-sm, 16px);
            height: var(--icon-size-sm, 16px);
            background-color: white;
            border-radius: 50%;
            transition: all 0.3s;
            box-shadow: 0 1px 3px rgba(0,0,0,0.3);
        }

        .checkbox-field.switch-style input[type="checkbox"]:checked::after {
            left: 17px;
        }
    `;

    @property({ type: Boolean })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.CHECKBOX,
        displayLabel: 'Checked',
        fieldMappings: 'checked',
    })
    checked = false;

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Label',
        placeholderText: 'Enter checkbox label',
        fieldMappings: 'label',
    })
    label = 'Checkbox Label';

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Description',
        placeholderText: 'Enter description text',
        fieldMappings: 'description',
    })
    description = '';

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
        displayLabel: 'Indeterminate',
        fieldMappings: 'indeterminate',
    })
    indeterminate = false;

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.DROPDOWN,
        displayLabel: 'Style',
        optionItems: [
            { value: 'default', label: 'Default' },
            { value: 'custom', label: 'Rounded' },
            { value: 'switch', label: 'Switch' }
        ],
        fieldMappings: 'checkboxStyle',
    })
    checkboxStyle = 'default';

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Value',
        placeholderText: 'Enter checkbox value',
        fieldMappings: 'value',
    })
    value = '';

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

    private getCheckboxClass(): string {
        let classes = 'checkbox-field';
        
        if (this.disabled) classes += ' disabled';
        if (this.checkboxStyle === 'custom') classes += ' custom-style';
        if (this.checkboxStyle === 'switch') classes += ' switch-style';
        
        return classes;
    }

    private handleCheckboxClick() {
        if (this.disabled) return;
        
        if (this.indeterminate) {
            this.indeterminate = false;
            this.checked = true;
        } else {
            this.checked = !this.checked;
        }
        
        this.dispatchChangeEvent();
    }

    private dispatchChangeEvent() {
        this.dispatchEvent(new CustomEvent('change', {
            detail: { 
                checked: this.checked,
                value: this.value,
                indeterminate: this.indeterminate
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
    handleChange(event: Event) {
        const target = event.target as HTMLInputElement;
        this.checked = target.checked;
        this.indeterminate = false;
        this.dispatchChangeEvent();
    }

    updated(changedProperties: Map<string, any>) {
        super.updated(changedProperties);
        
        if (changedProperties.has('indeterminate')) {
            const checkbox = this.shadowRoot?.querySelector('input[type="checkbox"]') as HTMLInputElement;
            if (checkbox) {
                checkbox.indeterminate = this.indeterminate;
            }
        }
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
                ${themeModule ? themeModule.getComponentStyles('checkbox') : ''}
            </style>
            <div class="form-field uiv-${themeModule?.id}-theme">
                ${this.label ? html`
                    <label class="main-label uiv-${themeModule?.id}-text">Choose Option</label>
                ` : ''}
                
                <div class="${this.getCheckboxClass()} uiv-${themeModule?.id}-card" @click="${this.handleCheckboxClick}">
                    <div class="checkbox-container">
                        <input 
                            type="checkbox"
                            .checked="${this.checked}"
                            .indeterminate="${this.indeterminate}"
                            ?required="${this.required}"
                            ?disabled="${this.disabled}"
                            value="${this.value}"
                            class="${this.showError ? 'error' : ''}"
                            @change="${this.handleChange}"
                            @click="${(e: Event) => e.stopPropagation()}"
                        />
                    </div>
                    <span class="checkbox-label uiv-${themeModule?.id}-text">${this.label}</span>
                </div>
                
                ${this.description ? html`
                    <div class="description uiv-${themeModule?.id}-text-secondary">${this.description}</div>
                ` : ''}
                
                <div class="error-message uiv-${themeModule?.id}-text ${this.showError ? 'show' : ''}" style="color: var(--uiv-error-color, #f44336)">
                    ${this.errorMessage}
                </div>
            </div>
        `;
    }
}
