import { RendererComponent, applyGlobalStyles } from 'zero-annotation';
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

/**
 * Represents a dropdown directive with options and validation.
 *
 * @export
 * @class PopupDropdownDirective
 * @extends {LitElement}
 */
@RendererComponent({
    name: 'popup-dropdown-directive',
    version: '1.0.0',
    title: 'Popup dropdown directive',
    elementSelector: 'zero-popup-dropdown-directive',
    group: 'Forms',
    iconName: 'profile-icon.png', // Replace with your icon path
})
@applyGlobalStyles()
export class PopupDropdownDirective extends LitElement {
    static properties = {
        enabled: { type: Boolean },
        options: { type: Array },
        open: { type: Boolean },
        isValid: { type: Boolean },
        errorMessage: { type: String },
        selectedValue: { type: String }, // New property for the selected value
    };

    static styles = css`
    :host {
      --dropdown-bg-color: #fff;
      --dropdown-border-color: #ccc;
      --dropdown-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
      --dropdown-border-radius: 6px;
      --dropdown-padding: 10px;
      --dropdown-width: 200px;
      --dropdown-item-hover-bg: #f0f0f0;
      --selected-item-bg: #e0e0e0; /* Background color for selected item */
      --notch-border-color: var(--dropdown-bg-color);
      --notch-left-offset: 20px;
      --notch-left-offset-before: -10px;
      --dropdown-item-padding: 10px;
      --dropdown-z-index: 1000;
      --error-bg-color: #ffdddd;
      --error-border-color: #ff5f5f;

      display: inline-block;
      position: relative;
    }

    .dropdown-menu {
      position: absolute;
      background-color: var(--dropdown-bg-color);
      border: 1px solid var(--dropdown-border-color);
      box-shadow: var(--dropdown-shadow);
      border-radius: var(--dropdown-border-radius);
      padding: var(--dropdown-padding);
      width: var(--dropdown-width);
      z-index: var(--dropdown-z-index);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
      transform: translateY(10px);
    }

    .dropdown-menu.open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .dropdown-menu.error {
      background-color: var(--error-bg-color);
      border-color: var(--error-border-color);
    }

    .notch {
        position: absolute;
        top: -10px; /* Adjust this value as needed */
        left: var(--notch-left-offset);
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid var(--dropdown-border-color);
        background-color: transparent;
        &::after{
            position: absolute;
            top: 2px; /* Adjust this value as needed */
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 10px solid var(--dropdown-bg-color); /* Keep this for the border */
            background-color: transparent; /* Ensure the background is transparent */
            content: '';
            left: var(--notch-left-offset-before);
        }
    }

    .dropdown-menu ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .dropdown-menu li {
      padding: var(--dropdown-item-padding);
      cursor: pointer;
      border-radius: 4px;
    }

    .dropdown-menu li:hover {
      background-color: var(--dropdown-item-hover-bg);
    }

    .dropdown-menu li.selected {
      background-color: var(--selected-item-bg); /* Highlight selected item */
    }

    .error-message {
      color: var(--error-border-color);
      font-size: 0.9em;
      margin-top: 5px;
    }
  `;

    @property({ type: Boolean }) enabled = false;
    options: any;
    @property({ type: Array })
    set config(data) {
        this.options = data;
    }
    @property({ type: Boolean,reflect: true }) open = false;
    @property({ type: Boolean }) isValid = true;
    @property({ type: String }) errorMessage = '';
    @property({ type: String }) selectedValue = ''; // Initialize selected value

    constructor() {
        super();
        this.enabled = false;
        this.options = [];
        this.open = false;
        this.isValid = true;
        this.errorMessage = '';
        this.selectedValue = ''; // Default selected value
    }

    // Validate inputs
    validateInputs() {
        if (!Array.isArray(this.options)) {
            this.isValid = false;
            this.errorMessage = 'Invalid options: options should be an array';
            return;
        }

        for (const opt of this.options) {
            if (
                typeof opt !== 'object' ||
                !('value' in opt) ||
                !('label' in opt) ||
                typeof opt.value !== 'string' ||
                typeof opt.label !== 'string' ||
                opt.value.trim() === '' ||
                opt.label.trim() === ''
            ) {
                this.isValid = false;
                this.errorMessage =
                    'Invalid option format: each option must have non-empty label and value properties';
                return;
            }
        }

        this.isValid = true;
        this.errorMessage = '';
    }

    // Toggle dropdown and adjust position if valid
    toggleDropdown() {
        if (!this.isValid) return; // Prevent dropdown if invalid
        this.open = !this.open;
        if (this.open) {

            this.requestUpdate();
            this.adjustPosition();
        }
    }

    // Adjust position of the dropdown
    adjustPosition() {
        setTimeout(() => {
            const dropdown = this.shadowRoot.querySelector('.dropdown-menu') as HTMLElement;
            const rect = this.getBoundingClientRect();
            const dropdownRect = dropdown.getBoundingClientRect();

            const fitsBelow = window.innerHeight > rect.bottom + dropdownRect.height;
            const fitsRight = window.innerWidth > rect.left + dropdownRect.width;

            dropdown.style.top = fitsBelow ? `${rect.height + 10}px` : 'auto';
            dropdown.style.bottom = fitsBelow ? 'auto' : `${rect.height + 15}px`;
            dropdown.style.left = fitsRight ? `0px` : `-${dropdownRect.width - rect.width}px`;
        }, 0);
    }

    // Handle option click
    handleOptionClick(e) {
        const data = e.target.getAttribute('data-value');
        const json_data = JSON.parse(data)
        this.selectedValue = json_data.value; // Update the selected value
        this.dispatchEvent(
            new CustomEvent('option-selected', {
                detail: { json_data },
                bubbles: false,
                composed: true,
            })
        );
        // this.open = false; // Close after selection
        // this.toggleDropdown();
        
    }

    // Render the template
    render() {
        return html`
        
      <div>
        <slot></slot>
        ${this.open
                ? html`
              <div class="dropdown-menu open">
                <div class="notch"></div>
                <ul>
                  ${this.options.map(
                    (opt) => html`
                      <li 
                        data-value="${JSON.stringify(opt)}" 
                        @click="${this.handleOptionClick}" 
                        class="${this.selectedValue === opt.value ? 'selected' : ''}" 
                      >
                        ${opt.label}
                      </li>
                    `
                )}
                </ul>
              </div>
            `
                : null}
      </div>
    `;
    }

    updated(changedProperties) {
        // Run validation when properties change
        if (changedProperties.has('options')) {
            this.validateInputs();
        }

        if (changedProperties.has('enabled') && this.enabled) {
            this.addEventListener('click', this.toggleDropdown);
        }
    }

    // Lifecycle method: Initialize the directive when connected
    connectedCallback() {
        super.connectedCallback();

        // Check for attribute configuration
        const configAttr = this.getAttribute('zero-popup-dropdown-directive');
        if (configAttr) {
            const config = JSON.parse(configAttr);
            this.enabled = config.enabled;
            this.options = config.options;
            this.selectedValue = config.selectedValue || ''; // Set initial selected value from config
        }

        // Validate inputs from attributes
        this.validateInputs();
    }
}

// Define the custom element
// customElements.define('zero-popup-dropdown-directive', PopupDropdownDirective);

// Initialize dropdown directives on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[zero-popup-dropdown-directive]').forEach((element) => {
        const config = JSON.parse(element.getAttribute('zero-popup-dropdown-directive'));
        const dropdown = document.createElement('zero-popup-dropdown-directive-1.0.0');
        dropdown['enabled'] = config.enabled;
        dropdown['options'] = config.options;
        dropdown['selectedValue'] = config.selectedValue || ''; // Initialize selected value
        element.appendChild(dropdown);

        // Move the element's content into the <slot> of the dropdown
        while (element.firstChild && element.firstChild !== dropdown) {
            dropdown.appendChild(element.firstChild);
        }
    });
});
