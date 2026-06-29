// @environment server
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from 'zero-annotation';
import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType, DropdownOptionItem, RangeSliderConfig, FileInputConfig, DatePickerConfig, NumberInputConfig, TextAreaConfig } from 'zero-annotation';

import { LitElement, html, css, CSSResult } from 'lit';
import { property, state } from 'lit/decorators.js';

const getThemeManager = () => (window as any).zeroThemeManager;

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
            font-family: var(--uiv-font-family, Arial, sans-serif);
            --dropdown-label-color: var(--uiv-text-color, var(--uiv-text-primary-themed));
            --dropdown-border-color: var(--uiv-border-color, var(--uiv-app-border-color, rgba(128,128,128,0.2)));
            --dropdown-bg-color: var(--uiv-bg-surface, var(--uiv-surface-color, #fff));
            --dropdown-icon-color: var(--uiv-primary-color, var(--uiv-status-primary));
            --option-hover-bg-color: var(--uiv-bg-overlay, var(--uiv-app-accent-transparent, rgba(128,128,128,0.1)));
            --dropdown-border-radius: var(--uiv-border-radius, 8px);
            --dropdown-height: var(--input-height, 42px);
            --dropdown-font-size: 14px;
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
            padding: 0 var(--spacing-sm, 8px); /* Adjusted padding to fit the height */
            height: var(--dropdown-height);
            display: flex;
            align-items: center;
            font-size: var(--dropdown-font-size); /* Adjusted font size */
            cursor: pointer;
            transition: var(--transition-fast, box-shadow 0.2s ease, border-color 0.2s ease);
        }
          .dropdown-container:hover {
            box-shadow: var(--shadow-sm, 0 2px 4px rgba(0, 0, 0, 0.1));
            border-color: var(--dropdown-hover-border-color);
        }
        
        .dropdown-header {
            display: flex;
            align-items: center;
            flex: 1;
        }
        
        .dropdown-icon {
            font-size: var(--icon-size-sm, 12px); /* Use standardized icon size */
            color: var(--dropdown-icon-color);
            transition: var(--transition-fast, transform 0.2s ease);
            margin-left: var(--spacing-sm, 8px); /* Space between text and icon */
        }
          .dropdown-options {
            display: none;
            position: absolute;
            top: calc(100% + var(--spacing-sm, 10px));
            left: 0;
            width: 100%;
            border: 1px solid var(--dropdown-border-color);
            border-radius: var(--dropdown-border-radius);
            background-color: var(--dropdown-bg-color);
            padding: var(--spacing-sm, 8px) var(--spacing-xs, 5px);
            z-index: 10;
            box-shadow: var(--shadow-lg, 0 4px 12px rgba(0, 0, 0, 0.1));
            transition: var(--transition-fast, opacity 0.2s ease, transform 0.2s ease);
            opacity: 0;
            transform: translateY(-var(--spacing-sm, 10px));
        }
        
        .dropdown-options.open {
            display: block;
            opacity: 1;
            transform: translateY(0);
        }
        .dropdown-options-list{
            max-height: 10rem; 
            overflow-y: auto;
        }
          .option {
            padding: var(--spacing-xs, 4px) var(--spacing-md, 12px); /* Adjusted padding for options */
            cursor: pointer;
            font-size: var(--dropdown-font-size); /* Match font size */
            transition: var(--transition-fast, background-color 0.2s ease, box-shadow 0.2s ease);
            border-radius: var(--border-radius-sm, 4px);
        }
        
        .option:hover {
            border: 1px solid var(--dropdown-border-color);
            box-shadow: var(--shadow-sm, 0 2px 4px rgba(0, 0, 0, 0.15));
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

    connectedCallback() {
        super.connectedCallback();
        getThemeManager()?.addEventListener('theme-changed', () => this.requestUpdate());
    }

    private toggleDropdown() {
        this._isOpen = !this._isOpen;
    }

    @RendererAttribute({
        attributeType: AttributeType.EVENT,
        displayLabel: 'On Change',
        eventTrigger: 'change',
    })
    selectOption(option) {
        this.selectedOption = option.value;
        this._isOpen = false;
        this.dispatchEvent(new CustomEvent('change', { detail: option }));
    }

    render() {
        const themeModule = getThemeManager()?.getActiveTheme('zero-standard-themes');
        return html`
            <style>
                ${themeModule ? themeModule.getGlobalStyles() : ''}
                ${themeModule ? themeModule.getComponentStyles('dropdown') : ''}
            </style>
            <div class="dropdown-message-box uiv-${themeModule?.id}-theme">
                <label class="label uiv-${themeModule?.id}-text">Appearance</label>
                <div class="dropdown-container uiv-${themeModule?.id}-card uiv-${themeModule?.id}-scan" @click=${this.toggleDropdown}>
                    <div class="dropdown-header">
                        <span id="selected-option" class="uiv-${themeModule?.id}-text">${this.selectedOption || 'Select an option'}</span>
                        <i class="fas fa-caret-down dropdown-icon uiv-${themeModule?.id}-text"></i>
                    </div>
                </div>
                <div class="dropdown-options ${this._isOpen ? 'open' : ''} uiv-${themeModule?.id}-card uiv-${themeModule?.id}-glass">
                    <span class="message-arrow"></span>
                    <div class="dropdown-options-list">
                        ${this.options.map(option => html`
                            <div class="option ${this.selectedOption === option.value ? 'selected' : ''} uiv-${themeModule?.id}-text" @click=${() => this.selectOption(option)}>
                                ${option.label}
                            </div>
                        `)}
                    </div>
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