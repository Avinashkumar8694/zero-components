import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType, DropdownOptionItem, RangeSliderConfig, FileInputConfig, DatePickerConfig, NumberInputConfig, TextAreaConfig } from 'zero-annotation';

import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators.js';

/**
 * Represents a user profile form with various input fields.
 * 
 * @export
 * @class UserProfileForm
 * @extends {LitElement}
 */
@RendererComponent({
    name: 'popup-dropdown',
    version: '1.0.0',
    title: 'Popup dropdown',
    elementSelector: 'zero-popup-dropdown',
    group: 'Forms',
    iconName: 'profile-icon.png', // Replace with your icon path
})
@applyGlobalStyles()
export class PopupDropdown extends LitElement {
    options: DropdownOptionItem[] = [];

    @property({ type: Array }) 
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXTAREA,
        displayLabel: 'Options',
        fieldMappings: 'OptionConfig',
        optionItems: {
            type: 'Object'
        }
    })
    set OptionConfig(data){
        this.options = data;
        this.requestUpdate();
    }

    @property({ type: String }) 
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Selected Option',
        placeholderText: 'selectedOption',
        fieldMappings: 'selectedOption',
    })
    selectedOption: string = '';

    @state() private _isOpen: boolean = false;

    static styles = css`
        :host {
            display: block;
            font-family: Arial, sans-serif;
            --dropdown-label-color: #333;
            --dropdown-border-color: #ddd;
            --dropdown-hover-border-color: #ccc;
            --dropdown-bg-color: #fff;
            --dropdown-icon-color: #666;
            --option-hover-bg-color: #f0f0f0;
            --dropdown-border-radius: 6px;
            --dropdown-height: 30px; /* Adjust height of dropdown box */
            --dropdown-font-size: 12px; /* Match font size of options */
        }
        
        .dropdown-message-box {
            position: relative;
            width: 180px; /* Adjusted width to match options */
            margin: 20px;
        }
        
        .label {
            font-size: 14px;
            color: var(--dropdown-label-color);
            margin-bottom: 8px;
            display: block;
        }
        
        .dropdown-container {
            position: relative;
            border: 1px solid var(--dropdown-border-color);
            border-radius: var(--dropdown-border-radius);
            background-color: var(--dropdown-bg-color);
            padding: 0 8px; /* Adjusted padding to fit the height */
            height: var(--dropdown-height);
            display: flex;
            align-items: center;
            font-size: var(--dropdown-font-size); /* Adjusted font size */
            cursor: pointer;
            transition: box-shadow 0.2s ease, border-color 0.2s ease;
        }
        
        .dropdown-container:hover {
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            border-color: var(--dropdown-hover-border-color);
        }
        
        .dropdown-header {
            display: flex;
            align-items: center;
            flex: 1;
        }
        
        .dropdown-icon {
            font-size: 12px; /* Reduced icon size */
            color: var(--dropdown-icon-color);
            transition: transform 0.2s ease;
            margin-left: 8px; /* Space between text and icon */
        }
        
        .dropdown-options {
            display: none;
            position: absolute;
            top: calc(100% + 10px);
            left: 0;
            width: 100%;
            border: 1px solid var(--dropdown-border-color);
            border-radius: var(--dropdown-border-radius);
            background-color: var(--dropdown-bg-color);
            padding: 8px 5px;
            z-index: 10;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: opacity 0.2s ease, transform 0.2s ease;
            opacity: 0;
            transform: translateY(-10px);
        }
        
        .dropdown-options.open {
            display: block;
            opacity: 1;
            transform: translateY(0);
            max-height: 10rem;
            overflow-y: auto;
        }
        
        .option {
            padding: 4px 12px; /* Adjusted padding for options */
            cursor: pointer;
            font-size: var(--dropdown-font-size); /* Match font size */
            transition: background-color 0.2s ease, box-shadow 0.2s ease;
            border-radius: 4px;
        }
        
        .option:hover {
            border: 1px solid var(--dropdown-border-color);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
        }
        
        .option.selected {
            border: 1px solid var(--dropdown-border-color); /* Smooth thin border for selected option */
            /* background-color: var(--dropdown-bg-color); Ensure background color remains consistent */
            font-weight: bold; /* Optional: highlight selected option with bold text */
        }
        
        .message-arrow {
            position: absolute;
            left: 50%;
            transform: translate(-50%,-150%);
            width: 0;
            height: 0;
            border-width: 8px;
            border-style: solid;
            border-color: transparent transparent var(--dropdown-border-color) transparent;
        }
        
        .message-arrow-outline {
            position: absolute;
            top: -9px;
            left: 50%;
            transform: translate(-50%, -30%);
            width: 0;
            height: 0;
            border-width: 8px;
            border-style: solid;
            border-color: transparent transparent var(--dropdown-bg-color) transparent;
            z-index: 11;
        }
    `;

    private toggleDropdown() {
        this._isOpen = !this._isOpen;
        this.requestUpdate(); // Request update to re-render based on state change
    }

    private selectOption(option: DropdownOptionItem) {
        this.selectedOption = option.value;
        this._isOpen = false;
        this.dispatchEvent(new CustomEvent('option-selected', { detail: option }));
    }

    render() {
        return html`
            <div class="dropdown-message-box">
                <label class="label">Appearance</label>
                <div class="dropdown-container" @click=${this.toggleDropdown}>
                    <div class="dropdown-header">
                        <span id="selected-option">${this.selectedOption || 'Select an option'}</span>
                        <i class="fas fa-caret-down dropdown-icon"></i>
                    </div>
                </div>
                <div class="dropdown-options ${this._isOpen ? 'open' : ''}">
                    <span class="message-arrow"></span>
                    <span class="message-arrow-outline"></span>
                    ${this.options.map(option => html`
                        <div class="option ${this.selectedOption === option.value ? 'selected' : ''}" @click=${() => this.selectOption(option)}>
                            ${option.label}
                        </div>
                    `)}
                </div>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'message-box-dropdown': PopupDropdown;
    }
}