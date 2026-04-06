// @environment page
import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

/**
 * A configurable textarea component with character count and auto-resize.
 * 
 * @export
 * @class ZeroTextarea
 * @extends {LitElement}
 */
@RendererComponent({
    name: 'zero-textarea',
    version: '1.0.0',
    title: 'Textarea',
    elementSelector: 'zero-textarea',
    group: 'Form Controls',
    iconName: 'textarea-icon.png',
})
@applyGlobalStyles()
export class ZeroTextarea extends LitElement {
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

        textarea.mat-mdc-input-element {
            width: 100%;
            padding: var(--spacing-sm, 8px) var(--spacing-md, 12px);
            border: 1px solid var(--border-color, #ddd);
            border-radius: var(--border-radius-sm, 4px);
            font-size: var(--font-size-base, 14px);
            background-color: var(--background-primary, #fff);
            color: var(--text-primary, #333);
            transition: border-color 0.2s, box-shadow 0.2s;
            min-height: 80px;
            resize: vertical;
            box-sizing: border-box;
            font-family: var(--font-family, 'Roboto', sans-serif);
            line-height: 1.5;
        }

        textarea.mat-mdc-input-element.auto-resize {
            resize: none;
            overflow: hidden;
        }

        textarea.mat-mdc-input-element::placeholder {
            color: var(--text-secondary, #666);
        }        textarea.mat-mdc-input-element:hover {
            border-color: var(--primary-light, #6c63ff);
            background: var(--primary-background-hover, rgba(108, 99, 255, 0.02));
        }

        textarea.mat-mdc-input-element:focus {
            outline: none;
            background: var(--background-primary, #fff);
            border-color: var(--primary-color, #6c63ff);
            box-shadow: 0 0 0 2px var(--primary-light, rgba(108, 99, 255, 0.2));
        }

        textarea.mat-mdc-input-element:disabled {
            background-color: var(--background-disabled, #f5f5f5);
            color: var(--text-disabled, #999);
            cursor: not-allowed;
            resize: none;
        }

        .textarea-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: var(--spacing-xs, 4px);
            font-size: var(--font-size-sm, 12px);
        }

        .character-count {
            color: var(--text-secondary, #666);
        }

        .character-count.near-limit {
            color: var(--warning-color, #ff9800);
        }

        .character-count.over-limit {
            color: var(--error-color, #f44336);
        }

        .error-message {
            color: var(--error-color, #f44336);
            font-size: var(--font-size-sm, 12px);
            display: none;
        }

        .error-message.show {
            display: block;
        }

        textarea.mat-mdc-input-element.error {
            border-color: var(--error-color, #f44336);
        }

        textarea.mat-mdc-input-element.error:focus {
            box-shadow: 0 0 0 2px var(--error-light, rgba(244, 67, 54, 0.2));
        }

        .word-count {
            color: var(--text-secondary, #666);
            margin-left: var(--spacing-sm, 8px);
        }
    `;

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXTAREA,
        displayLabel: 'Value',
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
    label = 'Textarea';

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Placeholder',
        placeholderText: 'Enter placeholder text',
        fieldMappings: 'placeholder',
    })
    placeholder = 'Enter your text here...';

    @property({ type: Number })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.NUMBER_INPUT,
        displayLabel: 'Rows',
        fieldMappings: 'rows',
    })
    rows = 4;

    @property({ type: Number })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.NUMBER_INPUT,
        displayLabel: 'Max Length',
        fieldMappings: 'maxLength',
    })
    maxLength = 0;

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
        displayLabel: 'Auto Resize',
        fieldMappings: 'autoResize',
    })
    autoResize = false;

    @property({ type: Boolean })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.CHECKBOX,
        displayLabel: 'Show Character Count',
        fieldMappings: 'showCharacterCount',
    })
    showCharacterCount = true;

    @property({ type: Boolean })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.CHECKBOX,
        displayLabel: 'Show Word Count',
        fieldMappings: 'showWordCount',
    })
    showWordCount = false;

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

    private getCharacterCountClass(): string {
        if (!this.maxLength) return '';
        
        const length = this.value.length;
        const percentage = (length / this.maxLength) * 100;
        
        if (percentage >= 100) return 'over-limit';
        if (percentage >= 80) return 'near-limit';
        return '';
    }

    private getWordCount(): number {
        if (!this.value.trim()) return 0;
        return this.value.trim().split(/\s+/).length;
    }

    private autoResizeTextarea(target: HTMLTextAreaElement) {
        if (!this.autoResize) return;
        
        target.style.height = 'auto';
        target.style.height = target.scrollHeight + 'px';
    }

    @RendererAttribute({
        attributeType: AttributeType.EVENT,
        displayLabel: 'On Input',
        eventTrigger: 'input',
    })
    handleInput(event: Event) {
        const target = event.target as HTMLTextAreaElement;
        this.value = target.value;
        this.autoResizeTextarea(target);
        
        this.dispatchEvent(new CustomEvent('input', {
            detail: { 
                value: this.value,
                characterCount: this.value.length,
                wordCount: this.getWordCount()
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
        const target = event.target as HTMLTextAreaElement;
        this.value = target.value;
        
        this.dispatchEvent(new CustomEvent('change', {
            detail: { 
                value: this.value,
                characterCount: this.value.length,
                wordCount: this.getWordCount()
            },
            bubbles: true,
            composed: true,
        }));
    }

    updated(changedProperties: Map<string, any>) {
        super.updated(changedProperties);
        
        if (changedProperties.has('value') && this.autoResize) {
            const textarea = this.shadowRoot?.querySelector('textarea');
            if (textarea) {
                this.autoResizeTextarea(textarea);
            }
        }
    }

    render() {
        const characterCountClass = this.getCharacterCountClass();
        const wordCount = this.getWordCount();
        
        return html`
            <div class="form-field">
                <label for="textarea-input">${this.label}</label>
                <textarea 
                    id="textarea-input"
                    class="mat-mdc-input-element ${this.autoResize ? 'auto-resize' : ''} ${this.showError ? 'error' : ''}"
                    .value="${this.value}" 
                    placeholder="${this.placeholder}"
                    rows="${this.rows}"
                    maxlength="${this.maxLength > 0 ? this.maxLength : ''}"
                    ?required="${this.required}"
                    ?disabled="${this.disabled}"
                    @input="${this.handleInput}"
                    @change="${this.handleChange}"
                ></textarea>
                
                ${this.showCharacterCount || this.showWordCount ? html`
                    <div class="textarea-footer">
                        <div class="error-message ${this.showError ? 'show' : ''}">
                            ${this.errorMessage}
                        </div>
                        <div>
                            ${this.showCharacterCount ? html`
                                <span class="character-count ${characterCountClass}">
                                    ${this.value.length}${this.maxLength ? `/${this.maxLength}` : ''} characters
                                </span>
                            ` : ''}
                            ${this.showWordCount ? html`
                                <span class="word-count">
                                    ${wordCount} words
                                </span>
                            ` : ''}
                        </div>
                    </div>
                ` : html`
                    <div class="error-message ${this.showError ? 'show' : ''}">
                        ${this.errorMessage}
                    </div>
                `}
            </div>
        `;
    }
}
