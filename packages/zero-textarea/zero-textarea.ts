import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

const getThemeManager = () => (window as any).zeroThemeManager;

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
            --uiv-primary: var(--uiv-primary-color, var(--uiv-status-primary));
            --uiv-bg: var(--uiv-surface-color, var(--uiv-app-input-bg, #fff));
            --uiv-text: var(--uiv-text-color, var(--uiv-text-primary-themed));
            --uiv-border: var(--uiv-border-color, var(--uiv-app-border-color, rgba(128,128,128,0.2)));
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

        textarea.mat-mdc-input-element {
            width: 100%;
            padding: 12px;
            border: 1px solid var(--uiv-border);
            border-radius: 12px;
            font-size: 14px;
            background-color: var(--uiv-bg);
            color: var(--uiv-text);
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            min-height: 100px;
            resize: vertical;
            box-sizing: border-box;
            line-height: 1.6;
            box-shadow: var(--uiv-shadow-depth, none);
        }

        textarea.mat-mdc-input-element:hover {
            border-color: var(--uiv-primary);
            box-shadow: var(--uiv-border-glow);
        }

        textarea.mat-mdc-input-element:focus {
            outline: none;
            border-color: var(--uiv-primary);
            box-shadow: var(--uiv-border-glow);
            transform: translateY(-1px);
        }

        .textarea-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 8px;
            font-size: 12px;
            color: var(--uiv-text);
            opacity: 0.7;
        }

        .character-count.near-limit { color: var(--uiv-color-warning, var(--uiv-status-warning)); }
        .character-count.over-limit { color: var(--uiv-color-danger, var(--uiv-status-danger)); font-weight: bold; }
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

    connectedCallback() {
        super.connectedCallback();
        getThemeManager()?.addEventListener('theme-changed', () => this.requestUpdate());
    }

    render() {
        const themeModule = getThemeManager()?.getActiveTheme('zero-standard-themes');
        const characterCountClass = this.getCharacterCountClass();
        const wordCount = this.getWordCount();
        
        return html`
            <style>
                ${themeModule ? themeModule.getGlobalStyles() : ''}
                ${themeModule ? themeModule.getComponentStyles('input') : ''}
            </style>
            <div class="form-field uiv-${themeModule?.id}-theme">
                <label for="textarea-input" class="uiv-${themeModule?.id}-text">${this.label}</label>
                <textarea 
                    id="textarea-input"
                    class="mat-mdc-input-element uiv-${themeModule?.id}-card uiv-${themeModule?.id}-scan ${this.autoResize ? 'auto-resize' : ''} ${this.showError ? 'error' : ''}"
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
                    <div class="textarea-footer uiv-${themeModule?.id}-text">
                        <div class="error-message uiv-${themeModule?.id}-text ${this.showError ? 'show' : ''}" style="color: var(--uiv-status-danger)">
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
                    <div class="error-message uiv-${themeModule?.id}-text ${this.showError ? 'show' : ''}" style="color: var(--uiv-error-color, #f44336)">
                        ${this.errorMessage}
                    </div>
                `}
            </div>
        `;
    }
}
