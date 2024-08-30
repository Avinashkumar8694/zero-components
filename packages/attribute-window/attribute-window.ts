import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType, DropdownOptionItem, RangeSliderConfig, FileInputConfig, DatePickerConfig, NumberInputConfig, TextAreaConfig, RendererAttributeConfiguration, RangeSettings } from 'zero-annotation';

import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

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
        /* Add styles here */
        :root {
            --primary-color: #333;     
            --secondary-color: #1C1C1C; 
            --text-color: #E0E0E0;     
            --header-height: 50px;     
            --sidenav-width: 250px;    
            --transition-speed: 0.3s;  
            --font-family: 'Roboto', sans-serif; 
            --background-color: #121212; 
            --hover-color: #444;      
        }

        body {
            margin: 0;
            font-family: var(--font-family);
            color: var(--text-color);
            background-color: var(--background-color);
        }

        .header {
            background-color: var(--primary-color);
            color: var(--text-color);
            text-align: center;
            padding: 10px;
            height: var(--header-height);
            line-height: var(--header-height);
            position: relative;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5); 
        }

        .header .toggle-btn {
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 22px;
            cursor: pointer;
            background: none;
            border: none;
            color: var(--text-color);
            transition: color var(--transition-speed);
        }

        .header .toggle-btn:hover {
            color: rgba(255, 255, 255, 0.8); 
        }

        .sidenav {
            height: 100%;
            width: 0;
            position: fixed;
            z-index: 1;
            top: 0;
            left: 0;
            background-color: var(--secondary-color);
            overflow-x: hidden;
            transition: width var(--transition-speed);
            padding-top: var(--header-height);
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.7); 
        }

        .sidenav a {
            padding: 15px 20px;
            text-decoration: none;
            font-size: 18px;
            color: var(--text-color);
            display: block;
            transition: background-color var(--transition-speed), padding-left var(--transition-speed);
        }

        .sidenav a:hover {
            background-color: var(--hover-color);
            padding-left: 30px; 
        }

        .main {
            margin-left: 0;
            transition: margin-left var(--transition-speed);
            padding: 20px;
        }

        .main h2 {
            font-weight: 500;
            color: #E0E0E0;
        }

        .main ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .main li {
            padding: 10px;
            border-bottom: 1px solid #444;
            color: #B0B0B0;
        }

        .main li:hover {
            background-color: #333;
            cursor: pointer;
        }


        /* Basic container styling */
        div > div {
            margin: 10px 0;
            padding: 12px;
            border-radius: 8px;
            background-color: var(--background-color);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            border: 1px solid var(--secondary-color);
            transition: background-color 0.3s, border-color 0.3s;
            display: flex;
            flex-direction: column;
        }

        /* Hover effect for containers */
        div > div:hover {
            background-color: var(--secondary-color);
            border-color: var(--primary-color);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
        }

        /* Label styling */
        label {
            display: block;
            margin-bottom: 8px;
            font-size: 14px;
            color: var(--text-color);
            font-weight: 500;
        }

        /* General styles for input elements */
        input[type="text"],
        input[type="checkbox"],
        input[type="color"],
        input[type="range"],
        input[type="password"],
        input[type="file"],
        input[type="date"],
        textarea,
        select {
            background-color: var(--secondary-color); /* Dark background for inputs */
            color: var(--text-color); /* Light text for contrast */
            border: 1px solid var(--primary-color); /* Light border for inputs */
            border-radius: 4px;
            padding: 8px;
            margin: 4px 0;
            box-sizing: border-box;
            font-size: 14px;
            transition: border-color 0.3s, box-shadow 0.3s;
        }

        /* Styles for range sliders */
        input[type="range"] {
            width: calc(100% - 16px);
            -webkit-appearance: none;
            background: var(--secondary-color);
            border-radius: 4px;
            height: 6px;
            cursor: pointer;
        }

        input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            background: var(--primary-color);
            border: 2px solid var(--hover-color);
            border-radius: 50%;
            height: 20px;
            width: 20px;
            cursor: pointer;
        }

        input[type="range"]::-moz-range-thumb {
            background: var(--primary-color);
            border: 2px solid var(--hover-color);
            border-radius: 50%;
            height: 20px;
            width: 20px;
            cursor: pointer;
        }

        /* Styles for dropdowns */
        select {
            padding: 8px;
            border: 1px solid var(--primary-color); /* Dark border for dropdowns */
            border-radius: 4px;
            background-color: var(--secondary-color); /* Dark background for dropdowns */
            color: var(--text-color); /* Light text for contrast */
        }

        /* Styles for checkboxes */
        input[type="checkbox"] {
            width: 20px;
            height: 20px;
            cursor: pointer;
            appearance: none;
            background-color: var(--secondary-color); /* Dark background */
            border: 2px solid var(--primary-color); /* Light border */
            border-radius: 4px;
            transition: background-color 0.3s, border-color 0.3s;
        }

        input[type="checkbox"]:checked {
            background-color: var(--primary-color); /* Highlight when checked */
            border-color: var(--primary-color); /* Match border with background */
        }

        /* Styles for color pickers */
        input[type="color"] {
            border: none;
            width: 32px;
            height: 32px;
            padding: 0;
            cursor: pointer;
        }

        /* Focus styles for inputs */
        input:focus,
        select:focus {
            border-color: var(--primary-color);
            outline: none;
            box-shadow: 0 0 4px rgba(0, 123, 255, 0.3);
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

    render() {
        return html`
            <div id="attributewindow-list">
                <!-- Dynamic attribute window elements will be injected here -->
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
            inputs: this.AttributeWindowAttributes.reduce((acc: Record<string, RendererAttributeConfiguration>, { fieldMappings, ...rest }) => {
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

    createInputElement(key: string, config: RendererAttributeConfiguration, customElement: HTMLElement) {
        const inputElement = document.createElement('div');

        const label = document.createElement('label');
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
