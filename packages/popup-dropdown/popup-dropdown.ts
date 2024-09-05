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

    @state() private isOpen = false;
  @state() private selectedOption = 'Normal picture';

  static styles = css`
:host {
  display: block;
  font-family: Arial, sans-serif;
}

.dropdown-message-box {
  position: relative;
  width: 200px;
  margin: 20px;
}

.label {
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
  display: block;
}

.dropdown-container {
  position: relative;
  border: 1px solid #ddd;
  border-radius: 6px;
  background-color: #fff;
  padding: 8px 12px;
  cursor: pointer;
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
}

.dropdown-container:hover {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-color: #ccc;
}

.dropdown-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dropdown-icon {
  font-size: 16px;
  color: #666;
  transition: transform 0.2s ease;
}

.dropdown-options {
  display: none;
  position: absolute;
  top: calc(100% + 10px); /* Adjusted for proper spacing */
  left: 0;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 20px; /* Matching the dropdown border radius */
  background-color: #fff;
  padding: 8px 0;
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
}

.option {
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
  border-radius: 4px;
}

.option:hover {
  background-color: #f0f0f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
}

/* Caret arrow adjustment */
.message-arrow {
  position: absolute;
  /* top: -10px; Ensure it’s outside of the popup */
  left: 50%;
  transform: translate(-50%,-150%);
  width: 0;
  height: 0;
  border-width: 8px;
  border-style: solid;
  border-color: transparent transparent #ddd transparent; /* Arrow color matches popup border */
}

.message-arrow-outline {
  position: absolute;
  top: -9px; /* Slightly adjusted to ensure the outline is visible above the popup */
  left: 50%;
  transform: translate(-50%, -30%);;
  width: 0;
  height: 0;
  border-width: 8px;
  border-style: solid;
  border-color: transparent transparent white transparent; /* Popup background color */
  z-index: 11;
}

  `;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.isOpen = false;
  }

  render() {
    return html`
      <div class="dropdown-message-box">
        <label class="label">Appearance</label>
        <div class="dropdown-container" @click=${this.toggleDropdown}>
          <div class="dropdown-header">
            <span id="selected-option">${this.selectedOption}</span>
            <i class="fas fa-caret-down dropdown-icon"></i>
          </div>
        </div>
        <div class="dropdown-options ${this.isOpen ? 'open' : ''}">
          <span class="message-arrow"></span>
          <span class="message-arrow-outline"></span>
          <div class="option" @click=${() => this.selectOption('Normal picture')}>
            Normal picture
          </div>
          <div class="option" @click=${() => this.selectOption('Round')}>
            Round
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