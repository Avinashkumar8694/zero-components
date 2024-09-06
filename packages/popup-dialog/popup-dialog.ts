import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType, DropdownOptionItem, RangeSliderConfig, FileInputConfig, DatePickerConfig, NumberInputConfig, TextAreaConfig } from 'zero-annotation';

import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
/**
 * Represents a user profile form with various input fields.
 * 
 * @export
 * @class UserProfileForm
 * @extends {LitElement}
 */
@RendererComponent({
    name: 'popup-dialog',
    version: '1.0.0',
    title: 'Popup dialog',
    elementSelector: 'zero-popup-dialog',
    group: 'Forms',
    iconName: 'profile-icon.png', // Replace with your icon path
})
@applyGlobalStyles()
export class PopupDialog extends LitElement {

    @property({ type: Boolean }) open = false;
    @property({ type: Boolean }) hasBackdrop = true;
    @property({ type: Object }) config = {
      webComponentSelector: '',
      inputs: {},
      outputs: {},
      position: 'center',
    };
  
    static styles = css`
      :host {
        display: block;
        font-family: Arial, sans-serif;
        --popup-bg-color: #fff;
        --popup-border-color: #ddd;
        --popup-hover-border-color: #ccc;
        --popup-font-color: #333;
        --popup-shadow-color: rgba(0, 0, 0, 0.1);
        --popup-border-radius: 6px;
        --popup-font-size: 12px;
        --popup-header-color: #666;
        --popup-icon-color: #666;
        --popup-option-hover-bg-color: #f0f0f0;
        --popup-width: 180px;
        --popup-padding: 8px;
      }
  
      .popup-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: none;
        z-index: 99;
      }
  
      .popup-backdrop.open {
        display: block;
      }
  
      .popup-container {
        position: absolute;
        background-color: var(--popup-bg-color);
        border: 1px solid var(--popup-border-color);
        border-radius: var(--popup-border-radius);
        box-shadow: 0 4px 12px var(--popup-shadow-color);
        padding: var(--popup-padding);
        font-size: var(--popup-font-size);
        z-index: 100;
        width: var(--popup-width);
        transition: opacity 0.2s ease, transform 0.2s ease;
        opacity: 0;
        transform: translateY(-10px);
      }
  
      .popup-container.open {
        opacity: 1;
        transform: translateY(0);
      }
  
      .popup-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        color: var(--popup-header-color);
        margin-bottom: 8px;
      }
  
      .popup-content {
        font-size: var(--popup-font-size);
        color: var(--popup-font-color);
      }
  
      .close-button {
        cursor: pointer;
        color: var(--popup-icon-color);
      }
  
      .popup-arrow {
        position: absolute;
        left: 50%;
        transform: translate(-50%, -100%);
        width: 0;
        height: 0;
        border-width: 8px;
        border-style: solid;
        border-color: transparent transparent var(--popup-border-color) transparent;
      }
  
      .popup-arrow-outline {
        position: absolute;
        top: -9px;
        left: 50%;
        transform: translate(-50%, -30%);
        width: 0;
        height: 0;
        border-width: 8px;
        border-style: solid;
        border-color: transparent transparent var(--popup-bg-color) transparent;
        z-index: 101;
      }
    `;
  
    render() {
      const { webComponentSelector, inputs, outputs, position } = this.config;
      const positionStyle = this._getPositionStyle(position);
  
      return html`
        <div class="popup-backdrop ${this.hasBackdrop && this.open ? 'open' : ''}" @click=${this._close}></div>
        <div class="popup-container ${this.open ? 'open' : ''}" style=${styleMap(positionStyle)}>
          <div class="popup-header">
            <span>Popup Title</span>
            <span class="close-button" @click=${this._close}>✖</span>
          </div>
          <div class="popup-content">
            ${this.open && webComponentSelector
              ? html`<${webComponentSelector} .inputs=${inputs} .outputs=${outputs}></${webComponentSelector}>`
              : html`<p>No component provided.</p>`}
          </div>
          <div class="popup-arrow"></div>
          <div class="popup-arrow-outline"></div>
        </div>
      `;
    }
  
    _getPositionStyle(position) {
      switch (position) {
        case 'center':
          return { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' };
        case 'top-left':
          return { top: '10px', left: '10px' };
        case 'top-right':
          return { top: '10px', right: '10px' };
        case 'bottom-left':
          return { bottom: '10px', left: '10px' };
        case 'bottom-right':
          return { bottom: '10px', right: '10px' };
        default:
          return { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' };
      }
    }
  
    _close() {
      this.open = false;
      this.dispatchEvent(new CustomEvent('popup-closed', { detail: { open: this.open } }));
    }
}
