import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType, DropdownOptionItem, RangeSliderConfig, FileInputConfig, DatePickerConfig, NumberInputConfig, TextAreaConfig, RendererAttributeConfiguration, RangeSettings } from 'zero-annotation';

import { LitElement, html, css, CSSResult } from 'lit';
import { property } from 'lit/decorators.js';

const getThemeManager = () => (window as any).zeroThemeManager;

/**
 * Represents a user profile form with various input fields.
 * 
 * @export
 * @class UserProfileForm
 * @extends {LitElement}
 */
@RendererComponent({
    name: 'attribute-window',
    version: '1.0.0',
    title: 'Attribute window',
    elementSelector: 'zero-attribute-window',
    group: 'Forms',
    iconName: 'profile-icon.png', // Replace with your icon path
})
@applyGlobalStyles()
export class AttributeWindow extends LitElement {

    static styles = css`
        :host {
            display: block;
            width: 100%;
            font-family: var(--uiv-font-family, 'Roboto', sans-serif);
        }

        .attribute-window-container {
            padding: var(--spacing-lg, 20px);
            background-color: var(--uiv-bg-surface, #121212);
            color: var(--uiv-text-color, #E0E0E0);
            min-height: 100%;
        }

        .header {
            background-color: var(--uiv-bg-overlay, #333);
            color: var(--uiv-text-color);
            text-align: center;
            padding: var(--spacing-sm, 10px);
            height: 50px;
            line-height: 50px;
            position: relative;
            box-shadow: var(--uiv-shadow-depth);
        }

        label {
            display: block;
            margin-bottom: 8px;
            font-size: 14px;
            color: var(--uiv-text-color);
            font-weight: 500;
        }

        .dynamic-input-container {
            margin: 10px 0;
            padding: 12px;
            border-radius: var(--uiv-border-radius, 8px);
            background-color: var(--uiv-bg-surface);
            border: 1px solid var(--uiv-border-color);
            transition: all 0.3s ease;
        }

        .dynamic-input-container:hover {
            border-color: var(--uiv-primary-color);
            box-shadow: var(--uiv-shadow-depth);
        }
    `;
    attr = [];
    @property({ type: Array })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXTAREA,
        displayLabel: '',
        placeholderText: '',
        fieldMappings: 'AttributeWindowAttributes',
    })
    set AttributeWindowAttributes(data:any){
            const _t = typeof data == 'string' ? JSON.parse(data) : data;
            this.attr = Array.isArray(_t) ? _t : [];
            this.firstUpdated();
    }

    get AttributeWindowAttributes(){
        return this.attr;
    }

    connectedCallback() {
        super.connectedCallback();
        getThemeManager()?.addEventListener('theme-changed', () => {
            this.requestUpdate();
            this.prepareAttributeWindow('attribute-window');
        });
    }

    render() {
        const themeModule = getThemeManager()?.getActiveTheme('zero-standard-themes');
        return html`
            <style>
                ${themeModule ? themeModule.getGlobalStyles() : ''}
                ${themeModule ? themeModule.getComponentStyles('input') : ''}
            </style>
            <div class="attribute-window-container uiv-${themeModule?.id}-theme">
                <div id="attributewindow-list">
                    <!-- Dynamic attribute window elements will be injected here -->
                </div>
            </div>
        `;
    }

    firstUpdated() {
        const name = 'attribute-window';
        globalThis.zeroComponents = {} as Record<string, any>;
        const customElement = document.createElement(name) as any;

        if (!globalThis.zeroComponents[name]) {
            globalThis.zeroComponents[name] = [];
        }
        globalThis.zeroComponents[name].push(customElement);
        this.prepareAttributeWindow(name);
    }
    prepareAttributeWindow(componentName: string) {
        const attributewindow = this.shadowRoot?.getElementById('attributewindow-list');
        const componentConfig = {
            inputs: this.AttributeWindowAttributes.reduce((acc: Record<string, RendererAttributeConfiguration | any>, { fieldMappings, ...rest }) => {
                acc[fieldMappings] = { ...rest };
                return acc;
            }, {}),
            outputs: {
                events: this.AttributeWindowAttributes
                    .filter(input => input.eventTrigger)
                    .map(input => input.eventTrigger),
            },
        };

        if (attributewindow && componentConfig) {
            attributewindow.innerHTML = ''; // Clear existing inputs
            Object.entries(componentConfig.inputs).forEach(([key, config]) => {
                const inputElement = this.createInputElement(key, config, globalThis.zeroComponents[componentName][0]);
                attributewindow.appendChild(inputElement);
            });
        } else {
            console.error('attributewindow-list element not found or componentConfig not found');
        }
    }

    createInputElement(key: string, config: RendererAttributeConfiguration | any, customElement: HTMLElement) {
        const themeModule = getThemeManager()?.getActiveTheme('zero-standard-themes');
        const themeId = themeModule?.id || 'light';
        
        const inputElement = document.createElement('div');
        inputElement.className = `dynamic-input-container uiv-${themeId}-card uiv-${themeId}-scan`;

        const label = document.createElement('label');
        label.className = `uiv-${themeId}-text`;
        label.textContent = config.displayLabel || key;
        label.htmlFor = key;
        inputElement.appendChild(label);

        switch (config.uiComponentType) {
            case UserInterfaceType.TEXT_INPUT:
                const textInput = document.createElement('input');
                textInput.type = config?.optionItems?.['type'] || 'text';
                textInput.id = key;
                textInput.value = config.initialValue?.toString() || '';
                textInput.placeholder = config.placeholderText || '';
                textInput.addEventListener('input', (e) => {
                    customElement[key] = (e.target as HTMLInputElement).value;
                });
                inputElement.appendChild(textInput);
                break;
    
            case UserInterfaceType.PASSWORD_INPUT:
                const passwordInput = document.createElement('input');
                passwordInput.type = 'password';
                passwordInput.id = key;
                passwordInput.value = config.initialValue?.toString() || '';
                passwordInput.placeholder = config.placeholderText || '';
                passwordInput.addEventListener('input', (e) => {
                    customElement[key] = (e.target as HTMLInputElement).value;
                });
                inputElement.appendChild(passwordInput);
                break;
                
            case UserInterfaceType.TEXTAREA:
                const textarea = document.createElement('textarea');
                textarea.id = key;
                textarea.value = config.initialValue?.toString() || '';
                textarea.placeholder = config.placeholderText || '';
                textarea.addEventListener('input', (e) => {
                    customElement[key] = (e.target as HTMLTextAreaElement).value;
                });
                inputElement.appendChild(textarea);
                break;
    
            case UserInterfaceType.CHECKBOX:
                const toggleSwitch = document.createElement('input');
                toggleSwitch.type = 'checkbox';
                toggleSwitch.id = key;
                toggleSwitch.checked = Boolean(config.initialValue);
                toggleSwitch.addEventListener('change', (e) => {
                    customElement[key] = (e.target as HTMLInputElement).checked;
                });
                inputElement.appendChild(toggleSwitch);
                break;
    
            case UserInterfaceType.RADIO_BUTTON:
                const radioGroup = document.createElement('div');
                (config.optionItems as DropdownOptionItem[]).forEach(option => {
                    const radioWrapper = document.createElement('div');
                    const radioInput = document.createElement('input');
                    radioInput.type = 'radio';
                    radioInput.name = key;
                    radioInput.id = `${key}_${option.value}`;
                    radioInput.value = option.value.toString();
                    radioInput.checked = option.value.toString() === config.initialValue?.toString();
                    radioInput.addEventListener('change', (e) => {
                        customElement[key] = (e.target as HTMLInputElement).value;
                    });
    
                    const radioLabel = document.createElement('label');
                    radioLabel.htmlFor = radioInput.id;
                    radioLabel.textContent = option.label.toString();
                    
                    radioWrapper.appendChild(radioInput);
                    radioWrapper.appendChild(radioLabel);
                    radioGroup.appendChild(radioWrapper);
                });
                inputElement.appendChild(radioGroup);
                break;
    
            case UserInterfaceType.DROPDOWN:
                const dropdown = document.createElement('select');
                dropdown.id = key;
                (config.optionItems as DropdownOptionItem[]).forEach(option => {
                    const optionElement = document.createElement('option');
                    optionElement.value = option.value.toString();
                    optionElement.textContent = option.label.toString();
                    dropdown.appendChild(optionElement);
                });
                dropdown.addEventListener('change', (e) => {
                    customElement[key] = (e.target as HTMLSelectElement).value;
                });
                inputElement.appendChild(dropdown);
                break;
    
            case UserInterfaceType.MULTI_SELECT:
                const multiSelect = document.createElement('select');
                multiSelect.id = key;
                multiSelect.multiple = true;
                (config.optionItems as DropdownOptionItem[]).forEach(option => {
                    const optionElement = document.createElement('option');
                    optionElement.value = option.value.toString();
                    optionElement.textContent = option.label.toString();
                    multiSelect.appendChild(optionElement);
                });
                multiSelect.addEventListener('change', (e) => {
                    customElement[key] = Array.from((e.target as HTMLSelectElement).selectedOptions).map(option => option.value);
                });
                inputElement.appendChild(multiSelect);
                break;
                
            case UserInterfaceType.RANGE_SLIDER:
                const rangeSlider = document.createElement('input');
                rangeSlider.type = 'range';
                rangeSlider.id = key;
                rangeSlider.min = (config.optionItems as RangeSettings).min?.toString() || '0';
                rangeSlider.max = (config.optionItems as RangeSettings).max?.toString() || '100';
                rangeSlider.value = config.initialValue?.toString() || '0';
                rangeSlider.addEventListener('input', (e) => {
                    customElement[key] = (e.target as HTMLInputElement).value;
                });
                inputElement.appendChild(rangeSlider);
                break;
                
            case UserInterfaceType.COLOR_PICKER:
                const colorPicker = document.createElement('input');
                colorPicker.type = 'color';
                colorPicker.id = key;
                colorPicker.value = config.initialValue?.toString() || '#ffffff';
                colorPicker.addEventListener('input', (e) => {
                    customElement[key] = (e.target as HTMLInputElement).value;
                });
                inputElement.appendChild(colorPicker);
                break;
            
            case UserInterfaceType.FILE_INPUT:
                const fileInput = document.createElement('input');
                fileInput.type = 'file';
                fileInput.id = key;
                fileInput.addEventListener('change', (e) => {
                    customElement[key] = (e.target as HTMLInputElement).files;
                });
                inputElement.appendChild(fileInput);
                break;
    
            case UserInterfaceType.DATE_PICKER:
                const datePicker = document.createElement('input');
                datePicker.type = 'date';
                datePicker.id = key;
                datePicker.value = config.initialValue?.toString() || '';
                datePicker.addEventListener('input', (e) => {
                    customElement[key] = (e.target as HTMLInputElement).value;
                });
                inputElement.appendChild(datePicker);
                break;
            case UserInterfaceType.POPUP_DROPDOWN:
                const popup_dropdown = document.createElement('zero-popup-dropdown-1.0.0');
                popup_dropdown.id = key;
                popup_dropdown['selectedOption'] = config.initialValue;
                popup_dropdown['OptionConfig'] = config.optionItems as DropdownOptionItem[];
                popup_dropdown.addEventListener('change', (e) => {
                    customElement[key] = (e.target as HTMLSelectElement).value;
                });
                inputElement.appendChild(popup_dropdown);
                break;
    
            // Add cases for other UserInterfaceTypes as needed
    
            default:
                const defaultInput = document.createElement('input');
                defaultInput.type = 'text';
                defaultInput.id = key;
                defaultInput.value = config.initialValue?.toString() || '';
                defaultInput.placeholder = config.placeholderText || '';
                defaultInput.addEventListener('input', (e) => {
                    customElement[key] = (e.target as HTMLInputElement).value;
                });
                inputElement.appendChild(defaultInput);
                break;
        }

        return inputElement;
    }

}
