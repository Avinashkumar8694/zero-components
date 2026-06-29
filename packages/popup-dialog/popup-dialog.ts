// @environment server
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from 'zero-annotation';
import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType, DropdownOptionItem, RangeSliderConfig, FileInputConfig, DatePickerConfig, NumberInputConfig, TextAreaConfig } from 'zero-annotation';

import { LitElement, html, css, CSSResult } from 'lit';
import { property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

const getThemeManager = () => (window as any).zeroThemeManager;

export const dialogTemplate: ZeroStudioTemplate = {
    kind: 'generic',
    templateHtml: [
        "<div style='border:1px solid rgba(0,0,0,0.1);border-radius:12px;background:#ffffff;box-shadow:0 10px 25px rgba(0,0,0,0.1);min-width:250px;overflow:hidden;'>",
        "<div style='display:flex;justify-content:space-between;align-items:center;padding:12px 16px;border-bottom:1px solid rgba(0,0,0,0.05);background:#f8fafc;'>",
        "<span style='font-weight:600;color:#1e293b;font-size:0.9rem;'>Popup Dialog</span>",
        "<span style='color:#94a3b8;'>✖</span>",
        "</div>",
        "<div style='padding:20px;font-size:0.85rem;color:#64748b;display:flex;align-items:center;justify-content:center;min-height:80px;'>",
        "[ Dynamic Content Placeholder ]",
        "</div>",
        "</div>"
    ].join(""),
    badges: ['Popup', 'Dialog'],
};

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
    static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
        const bg = 'var(--uiv-surface-color, #fff)';
        const border = 'var(--uiv-border-color, #ddd)';
        const text = 'var(--uiv-text-color, #333)';
        const muted = 'var(--uiv-text-muted, #666)';
        const shadow = 'var(--uiv-shadow-depth, 0 4px 12px rgba(0, 0, 0, 0.1))';

        return {
            ...dialogTemplate,
            templateHtml: [
                `<div style='border:1px solid ${border};border-radius:12px;background:${bg};box-shadow:${shadow};min-width:250px;overflow:hidden;font-family:inherit;'>`,
                `<div style='display:flex;justify-content:space-between;align-items:center;padding:12px 16px;border-bottom:1px solid ${border};background:rgba(0,0,0,0.02);'>`,
                `<span style='font-weight:600;color:${text};font-size:14px;'>Popup Dialog</span>`,
                `<span style='color:${muted};cursor:pointer;'>✖</span>`,
                "</div>",
                `<div style='padding:24px;font-size:14px;color:${muted};display:flex;align-items:center;justify-content:center;min-height:100px;border:1px dashed rgba(0,0,0,0.05);margin:12px;border-radius:8px;'>`,
                "[ Dynamic Content Placeholder ]",
                "</div>",
                "</div>"
            ].join(""),
        };
    }

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
        font-family: var(--uiv-font-family, Arial, sans-serif);
        --popup-bg-color: var(--uiv-surface-color, #fff);
        --popup-border-color: var(--uiv-border-color, #ddd);
        --popup-font-color: var(--uiv-text-color, #333);
        --popup-shadow-color: var(--uiv-shadow-depth, 0 4px 12px rgba(0, 0, 0, 0.1));
        --popup-border-radius: var(--uiv-border-radius, 12px);
        --popup-font-size: 14px;
        --popup-header-color: var(--uiv-text-muted, #666);
        --popup-icon-color: var(--uiv-primary-color, #666);
        --popup-padding: 16px;
        --popup-width: auto;
        min-width: 200px;
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
  
    connectedCallback() {
      super.connectedCallback();
      getThemeManager()?.addEventListener('theme-changed', () => this.requestUpdate());
    }

    render() {
      const { webComponentSelector, inputs, outputs, position } = this.config;
      const positionStyle = this._getPositionStyle(position);
      const themeModule = getThemeManager()?.getActiveTheme('zero-standard-themes');
  
      return html`
        <style>
          ${themeModule ? themeModule.getGlobalStyles() : ''}
          ${themeModule ? themeModule.getComponentStyles('dialog') : ''}
        </style>
        <div class="uiv-${themeModule?.id}-theme">
          <div class="popup-backdrop ${this.hasBackdrop && this.open ? 'open' : ''}" @click=${this._close}></div>
          <div class="popup-container ${this.open ? 'open' : ''} uiv-${themeModule?.id}-card uiv-${themeModule?.id}-glass" style=${styleMap(positionStyle)}>
            <div class="popup-header uiv-${themeModule?.id}-text">
              <span class="uiv-${themeModule?.id}-text">Popup Title</span>
              <span class="close-button uiv-${themeModule?.id}-text" @click=${this._close}>✖</span>
            </div>
            <div class="popup-content uiv-${themeModule?.id}-text">
              ${this.open && webComponentSelector
                ? html`<${webComponentSelector} .inputs=${inputs} .outputs=${outputs}></${webComponentSelector}>`
                : html`<p>No component provided.</p>`}
            </div>
            <div class="popup-arrow"></div>
          </div>
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
  
    @RendererAttribute({
      attributeType: AttributeType.EVENT,
      displayLabel: 'On Popup Closed',
      eventTrigger: 'popup-closed',
    })
    handlePopupClosed(_event: Event) {
      // This method is triggered by the attribute system
      this._close();
    }
  
    _close() {
      this.open = false;
      this.dispatchEvent(new CustomEvent('popup-closed', { detail: { open: this.open } }));
    }
}
