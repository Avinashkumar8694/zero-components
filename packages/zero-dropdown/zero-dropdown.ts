// @environment page
import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType, DropdownOptionItem } from 'zero-annotation';
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

/**
 * A configurable dropdown/select component with search functionality.
 * 
 * @export
 * @class ZeroDropdown
 * @extends {LitElement}
 */
@RendererComponent({
    name: 'zero-dropdown',
    version: '1.0.0',
    title: 'Dropdown',
    elementSelector: 'zero-dropdown',
    group: 'Form Controls',
    iconName: 'dropdown-icon.png',
})
@applyGlobalStyles()
export class ZeroDropdown extends LitElement {
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
        }        select.mat-mdc-input-element {
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
            cursor: pointer;
        }select.mat-mdc-input-element:hover {
            border-color: var(--primary-light, #6c63ff);
            background: var(--primary-background-hover, rgba(108, 99, 255, 0.02));
        }

        select.mat-mdc-input-element:focus {
            outline: none;
            background: var(--background-primary, #fff);
            border-color: var(--primary-color, #6c63ff);
            box-shadow: 0 0 0 2px var(--primary-light, rgba(108, 99, 255, 0.2));
        }

        select.mat-mdc-input-element:disabled {
            background-color: var(--background-disabled, #f5f5f5);
            color: var(--text-disabled, #999);
            cursor: not-allowed;
        }

        .custom-dropdown {
            position: relative;
        }

        .dropdown-button {
            width: 100%;
            padding: var(--spacing-sm, 8px) var(--spacing-md, 12px);
            border: 1px solid var(--border-color, #ddd);
            border-radius: var(--border-radius-sm, 4px);
            font-size: var(--font-size-base, 14px);
            background-color: var(--background-primary, #fff);            color: var(--text-primary, #333);
            transition: border-color 0.2s, box-shadow 0.2s;
            min-height: var(--input-height, 36px);
            box-sizing: border-box;
            font-family: var(--font-family, 'Roboto', sans-serif);
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: left;
        }        .dropdown-button:hover:not(:disabled) {
            border-color: var(--primary-light, #6c63ff);
            background: var(--primary-background-hover, rgba(108, 99, 255, 0.02));
        }

        .dropdown-button:focus {
            outline: none;
            border-color: var(--primary-color, #6c63ff);
            box-shadow: 0 0 0 2px var(--primary-light, rgba(108, 99, 255, 0.2));
        }

        .dropdown-button:disabled {
            background-color: var(--background-disabled, #f5f5f5);
            color: var(--text-disabled, #999);
            cursor: not-allowed;
        }        .dropdown-arrow {
            font-size: var(--font-size-xs, 12px);
            transition: transform 0.2s;
        }

        .dropdown-arrow.open {
            transform: rotate(180deg);
        }

        .dropdown-options {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--background-primary, #fff);
            border: 1px solid var(--border-color, #ddd);
            border-top: none;
            border-radius: 0 0 var(--border-radius-sm, 4px) var(--border-radius-sm, 4px);
            max-height: 200px;
            overflow-y: auto;
            z-index: 1000;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .search-input {
            width: 100%;
            padding: var(--spacing-sm, 8px);
            border: none;
            border-bottom: 1px solid var(--border-color, #ddd);
            font-size: var(--font-size-base, 14px);
            box-sizing: border-box;
        }

        .search-input:focus {
            outline: none;
            border-bottom-color: var(--primary-color, #6c63ff);
        }

        .option-item {
            padding: var(--spacing-sm, 8px) var(--spacing-md, 12px);
            cursor: pointer;
            transition: background-color 0.2s;
            border-bottom: 1px solid var(--border-light, #f0f0f0);
        }

        .option-item:last-child {
            border-bottom: none;
        }

        .option-item:hover {
            background-color: var(--background-hover, #f5f5f5);
        }

        .option-item.selected {
            background-color: var(--primary-color, #6c63ff);
            color: white;
        }

        .option-item.highlighted {
            background-color: var(--primary-light, rgba(108, 99, 255, 0.1));
        }

        .no-options {
            padding: var(--spacing-md, 12px);
            text-align: center;
            color: var(--text-secondary, #666);
            font-style: italic;
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

        select.mat-mdc-input-element.error,
        .dropdown-button.error {
            border-color: var(--error-color, #f44336);
        }

        select.mat-mdc-input-element.error:focus,
        .dropdown-button.error:focus {
            box-shadow: 0 0 0 2px var(--error-light, rgba(244, 67, 54, 0.2));
        }

        .multi-select-tags {
            display: flex;
            flex-wrap: wrap;
            gap: var(--spacing-xs, 4px);
            margin-top: var(--spacing-xs, 4px);
        }        .tag {
            background: var(--primary-color, #6c63ff);
            color: white;
            padding: var(--spacing-xs, 2px) var(--spacing-sm, 8px);
            border-radius: var(--border-radius-xs, 3px);
            font-size: var(--font-size-sm, 12px);
            display: flex;
            align-items: center;
            gap: var(--spacing-xs, 4px);
        }

        .tag-remove {
            cursor: pointer;
            font-weight: bold;
        }
    `;

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Selected Value',
        fieldMappings: 'value',
    })
    value = '';

    @property({ type: Array })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Selected Values (Multi)',
        fieldMappings: 'selectedValues',
    })
    selectedValues: string[] = [];

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Label',
        placeholderText: 'Enter label text',
        fieldMappings: 'label',
    })
    label = 'Dropdown';

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Placeholder',
        placeholderText: 'Enter placeholder text',
        fieldMappings: 'placeholder',
    })
    placeholder = 'Select an option...';

    @property({ type: Array })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.DROPDOWN,
        displayLabel: 'Options',
        optionItems: [
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' }
        ],
        fieldMappings: 'options',
    })
    options: DropdownOptionItem[] = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' }
    ];

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
        displayLabel: 'Multiple Selection',
        fieldMappings: 'multiple',
    })
    multiple = false;

    @property({ type: Boolean })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.CHECKBOX,
        displayLabel: 'Searchable',
        fieldMappings: 'searchable',
    })
    searchable = false;

    @property({ type: Boolean })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.CHECKBOX,
        displayLabel: 'Custom Style',
        fieldMappings: 'customStyle',
    })
    customStyle = false;

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
    private isOpen = false;

    @property({ type: String })
    private searchQuery = '';

    private getFilteredOptions(): DropdownOptionItem[] {
        if (!this.searchQuery) return this.options;
        
        return this.options.filter(option =>
            option.label.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            option.value.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
    }

    private getSelectedLabel(): string {
        if (this.multiple) {
            return this.selectedValues.length > 0 
                ? `${this.selectedValues.length} selected`
                : this.placeholder;
        }
        
        const selectedOption = this.options.find(option => option.value === this.value);
        return selectedOption ? selectedOption.label : this.placeholder;
    }

    private toggleDropdown() {
        if (this.disabled) return;
        this.isOpen = !this.isOpen;
        this.searchQuery = '';
    }

    private selectOption(option: DropdownOptionItem) {
        if (this.multiple) {
            const index = this.selectedValues.indexOf(option.value);
            if (index > -1) {
                this.selectedValues = this.selectedValues.filter(v => v !== option.value);
            } else {
                this.selectedValues = [...this.selectedValues, option.value];
            }
        } else {
            this.value = option.value;
            this.isOpen = false;
        }
        
        this.dispatchChangeEvent();
    }

    private removeTag(value: string) {
        this.selectedValues = this.selectedValues.filter(v => v !== value);
        this.dispatchChangeEvent();
    }

    private handleSearch(event: Event) {
        const target = event.target as HTMLInputElement;
        this.searchQuery = target.value;
    }

    private dispatchChangeEvent() {
        this.dispatchEvent(new CustomEvent('change', {
            detail: { 
                value: this.value,
                selectedValues: this.selectedValues,
                multiple: this.multiple
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
        const target = event.target as HTMLSelectElement;
        if (this.multiple) {
            this.selectedValues = Array.from(target.selectedOptions).map(option => option.value);
        } else {
            this.value = target.value;
        }
        this.dispatchChangeEvent();
    }

    render() {
        if (this.customStyle || this.searchable) {
            const filteredOptions = this.getFilteredOptions();
            
            return html`
                <div class="form-field">
                    <label for="dropdown">${this.label}</label>
                    <div class="custom-dropdown">
                        <button 
                            type="button"
                            class="dropdown-button ${this.showError ? 'error' : ''}"
                            ?disabled="${this.disabled}"
                            @click="${this.toggleDropdown}"
                        >
                            <span>${this.getSelectedLabel()}</span>
                            <span class="dropdown-arrow ${this.isOpen ? 'open' : ''}">▼</span>
                        </button>
                        
                        ${this.isOpen ? html`
                            <div class="dropdown-options">
                                ${this.searchable ? html`
                                    <input 
                                        type="text"
                                        class="search-input"
                                        placeholder="Search options..."
                                        .value="${this.searchQuery}"
                                        @input="${this.handleSearch}"
                                        @click="${(e: Event) => e.stopPropagation()}"
                                    />
                                ` : ''}
                                
                                ${filteredOptions.length > 0 ? filteredOptions.map(option => html`
                                    <div 
                                        class="option-item ${this.multiple ? 
                                            (this.selectedValues.includes(option.value) ? 'selected' : '') :
                                            (this.value === option.value ? 'selected' : '')}"
                                        @click="${() => this.selectOption(option)}"
                                    >
                                        ${option.label}
                                    </div>
                                `) : html`
                                    <div class="no-options">No options found</div>
                                `}
                            </div>
                        ` : ''}
                    </div>
                    
                    ${this.multiple && this.selectedValues.length > 0 ? html`
                        <div class="multi-select-tags">
                            ${this.selectedValues.map(value => {
                                const option = this.options.find(opt => opt.value === value);
                                return html`
                                    <span class="tag">
                                        ${option?.label || value}
                                        <span class="tag-remove" @click="${() => this.removeTag(value)}">×</span>
                                    </span>
                                `;
                            })}
                        </div>
                    ` : ''}
                    
                    <div class="error-message ${this.showError ? 'show' : ''}">
                        ${this.errorMessage}
                    </div>
                </div>
            `;
        }

        return html`
            <div class="form-field">
                <label for="select-input">${this.label}</label>
                <select 
                    id="select-input"
                    class="mat-mdc-input-element ${this.showError ? 'error' : ''}"
                    ?required="${this.required}"
                    ?disabled="${this.disabled}"
                    ?multiple="${this.multiple}"
                    @change="${this.handleChange}"
                >
                    ${!this.multiple ? html`<option value="">${this.placeholder}</option>` : ''}
                    ${this.options.map(option => html`
                        <option 
                            value="${option.value}"
                            ?selected="${this.multiple ? 
                                this.selectedValues.includes(option.value) : 
                                this.value === option.value}"
                        >
                            ${option.label}
                        </option>
                    `)}
                </select>
                <div class="error-message ${this.showError ? 'show' : ''}">
                    ${this.errorMessage}
                </div>
            </div>
        `;
    }
}
