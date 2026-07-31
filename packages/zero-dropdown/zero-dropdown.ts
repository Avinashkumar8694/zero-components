// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from 'zero-annotation';
import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType, DropdownOptionItem } from 'zero-annotation';
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

const getThemeManager = () => (window as any).zeroThemeManager;

/**
 * A configurable dropdown/select component with search functionality.
 * 
 * @export
 * @class ZeroDropdown
 * @extends {LitElement}
 */
export const studioTemplate: ZeroStudioTemplate = {
    kind: 'generic',
    templateHtml: [
        "<div style='padding:10px 14px;border-radius:8px;border:1px solid rgba(148,163,184,0.2);background:rgba(255,255,255,0.95);display:flex;justify-content:space-between;align-items:center;'>",
        "<div>",
        "<div style='font-size:0.65rem;color:var(--uiv-text-muted,#94a3b8);font-weight:600;margin-bottom:2px;'>{{display:label}}</div>",
        "<div style='font-size:0.8rem;color:var(--uiv-text-color,#1e293b);'>{{display:placeholder}}</div>",
        "</div>",
        "<span style='font-size:0.7rem;color:#94a3b8;'>▼</span>",
        "</div>"
    ].join(""),
    labelProp: 'label',
    badges: ['Form', 'Dropdown'],
};

function escapeStudio(value: string): string {
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

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
    static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
        if (!config) return studioTemplate;
        const labelDisplay = escapeStudio(config.studio.display.label || 'Dropdown');
        const placeholderDisplay = escapeStudio(config.studio.display.placeholder || 'Select...');
        const text = 'var(--uiv-text-color, #333)';
        const border = 'var(--uiv-border-color, #ddd)';
        const bg = 'var(--uiv-surface-color, #fff)';

        return {
            ...studioTemplate,
            templateHtml: [
                "<div style='display:block;width:100%;font-family:inherit;'>",
                `<label style='display:block;margin-bottom:8px;font-size:14px;font-weight:500;color:${text};'>${labelDisplay}</label>`,
                `<div style='width:100%;padding:8px 12px;border:1px solid ${border};border-radius:8px;font-size:14px;background:${bg};color:${text};display:flex;justify-content:space-between;align-items:center;box-shadow:var(--uiv-shadow-depth,none);'>`,
                `<span>${placeholderDisplay}</span>`,
                "<span style='font-size:0.7rem;opacity:0.6;'>▼</span>",
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

        select.mat-mdc-input-element {
            width: 100%;
            padding: 8px 12px;
            border: 1px solid var(--uiv-border);
            border-radius: 8px;
            font-size: 14px;
            background-color: var(--uiv-bg);
            color: var(--uiv-text);
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            min-height: 40px;
            cursor: pointer;
            box-shadow: var(--uiv-shadow-depth, none);
        }

        select.mat-mdc-input-element:hover {
            border-color: var(--uiv-primary);
            box-shadow: var(--uiv-border-glow);
        }

        select.mat-mdc-input-element:focus {
            outline: none;
            border-color: var(--uiv-primary);
            box-shadow: var(--uiv-border-glow);
            transform: translateY(-1px);
        }

        .custom-dropdown {
            position: relative;
        }

        .dropdown-button {
            width: 100%;
            padding: 8px 12px;
            border: 1px solid var(--uiv-border);
            border-radius: 8px;
            font-size: 14px;
            background-color: var(--uiv-bg);
            color: var(--uiv-text);
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            min-height: 40px;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: var(--uiv-shadow-depth, none);
        }

        .dropdown-button:hover:not(:disabled) {
            border-color: var(--uiv-primary);
            box-shadow: var(--uiv-border-glow);
        }

        .dropdown-button:focus {
            outline: none;
            border-color: var(--uiv-primary);
            box-shadow: var(--uiv-border-glow);
            transform: translateY(-1px);
        }

        .dropdown-options {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--uiv-bg);
            border: 1px solid var(--uiv-border);
            border-radius: 8px;
            margin-top: 8px;
            max-height: 250px;
            overflow-y: auto;
            z-index: 1000;
            box-shadow: var(--uiv-shadow-depth, 0 10px 15px -3px rgba(0, 0, 0, 0.1));
            animation: dropdownSlide 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes dropdownSlide {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .option-item {
            padding: 10px 16px;
            cursor: pointer;
            transition: all 0.2s;
            border-bottom: 1px solid rgba(var(--uiv-primary-rgb, 108, 99, 255), 0.05);
            color: var(--uiv-text);
        }

        .option-item:last-child {
            border-bottom: none;
        }

        .option-item:hover {
            background-color: rgba(var(--uiv-primary-rgb, 108, 99, 255), 0.05);
            color: var(--uiv-primary);
            padding-left: 20px;
        }

        .option-item.selected {
            background-color: var(--uiv-primary);
            color: white;
        }

        .tag {
            background: var(--uiv-primary);
            color: white;
            padding: 4px 10px;
            border-radius: 6px;
            font-size: 12px;
            display: flex;
            align-items: center;
            gap: 6px;
            box-shadow: var(--uiv-border-glow);
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

    @property({ type: String, attribute: 'accent-color' })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.COLOR_PICKER,
        displayLabel: 'Custom Accent Color',
        fieldMappings: 'accentColor',
    })
    accentColor = '';

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

    connectedCallback() {
        super.connectedCallback();
        getThemeManager()?.addEventListener('theme-changed', () => this.requestUpdate());
    }

    private getAccentStyles() {
        return this.accentColor
            ? { '--uiv-primary': this.accentColor, '--uiv-primary-color': this.accentColor }
            : {};
    }

    render() {
        const themeModule = getThemeManager()?.getActiveTheme('zero-standard-themes');
        const accentStyles = this.getAccentStyles();
        if (this.customStyle || this.searchable) {
            const filteredOptions = this.getFilteredOptions();

            return html`
                <style>
                    ${themeModule ? themeModule.getGlobalStyles() : ''}
                    ${themeModule ? themeModule.getComponentStyles('dropdown') : ''}
                </style>
                <div class="form-field uiv-${themeModule?.id}-theme" style=${styleMap(accentStyles)}>
                    <label for="dropdown" class="uiv-${themeModule?.id}-text">${this.label}</label>
                    <div class="custom-dropdown">
                        <button 
                            type="button"
                            class="dropdown-button uiv-${themeModule?.id}-card uiv-${themeModule?.id}-scan ${this.showError ? 'error' : ''}"
                            ?disabled="${this.disabled}"
                            @click="${this.toggleDropdown}"
                        >
                            <span class="uiv-${themeModule?.id}-text">${this.getSelectedLabel()}</span>
                            <span class="dropdown-arrow uiv-${themeModule?.id}-text ${this.isOpen ? 'open' : ''}">▼</span>
                        </button>
                        
                        ${this.isOpen ? html`
                            <div class="dropdown-options uiv-${themeModule?.id}-card">
                                ${this.searchable ? html`
                                    <input 
                                        type="text"
                                        class="search-input uiv-${themeModule?.id}-text"
                                        style="background: transparent; border-bottom: 1px solid rgba(var(--uiv-primary-rgb), 0.2);"
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
                                    <div class="no-options uiv-${themeModule?.id}-text-secondary">No options found</div>
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
            <style>
                ${themeModule ? themeModule.getGlobalStyles() : ''}
                ${themeModule ? themeModule.getComponentStyles('dropdown') : ''}
            </style>
            <div class="form-field uiv-${themeModule?.id}-theme" style=${styleMap(accentStyles)}>
                <label for="select-input" class="uiv-${themeModule?.id}-text">${this.label}</label>
                <select 
                    id="select-input"
                    class="mat-mdc-input-element uiv-${themeModule?.id}-card ${this.showError ? 'error' : ''}"
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
                <div class="error-message uiv-${themeModule?.id}-text ${this.showError ? 'show' : ''}" style="color: var(--uiv-error-color, #f44336)">
                    ${this.errorMessage}
                </div>
            </div>
        `;
    }
}
