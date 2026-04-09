import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';

const getThemeManager = () => (window as any).zeroThemeManager;

@RendererComponent({
    name: 'zero-uiv-radio-glow',
    version: '1.0.0',
    title: 'Radiant Glow Radio',
    elementSelector: 'zero-uiv-radio-glow',
    group: 'Uiverse Radio',
    iconName: 'radio-icon.png',
})
@applyGlobalStyles()
export class ZeroUivRadioGlow extends LitElement {
    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Label',
        fieldMappings: 'label',
    })
    label = 'Glow Radio';

    @property({ type: Boolean })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.CHECKBOX,
        displayLabel: 'Checked',
        fieldMappings: 'checked',
    })
    checked = false;

    @property({ type: Boolean })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.CHECKBOX,
        displayLabel: 'Disabled',
        fieldMappings: 'disabled',
    })
    disabled = false;

    // Output Events
    @RendererAttribute({
        attributeType: AttributeType.EVENT,
        eventTrigger: 'change',
        displayLabel: 'On Change'
    })
    onChangeEvent = 'change';

    static styles = css`
        :host {
            display: inline-block;
            margin-right: 15px;
            --rad-p: var(--uiv-primary-color, #6366f1);
            --rad-s: var(--uiv-secondary-color, #8b5cf6);
            --rad-bg: var(--uiv-surface-color, #ffffff);
            --rad-t: var(--uiv-text-color, #1e293b);
            --rad-border: var(--uiv-border-color, #e2e8f0);
            --glow: var(--uiv-border-glow, 0 0 10px rgba(99, 102, 241, 0.2));
        }

        .radio-wrapper {
            display: flex;
            align-items: center;
            cursor: pointer;
            user-select: none;
        }

        .radio-circle {
            position: relative;
            width: 22px;
            height: 22px;
            background: var(--rad-bg);
            border: 2px solid var(--rad-border);
            border-radius: 50%;
            margin-right: 12px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);
        }

        .checked .radio-circle {
            border-color: var(--rad-p);
            box-shadow: var(--glow);
            transform: scale(1.05);
        }

        .radio-circle::after {
            content: '';
            position: absolute;
            display: none;
            left: 5px;
            top: 5px;
            width: 8px;
            height: 8px;
            background: var(--rad-p);
            border-radius: 50%;
            box-shadow: 0 0 10px var(--rad-p);
        }

        .checked .radio-circle::after {
            display: block;
        }

        .label {
            color: var(--rad-t);
            font-size: 0.95rem;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
    `;

    handleToggle() {
        if (this.disabled) return;
        this.checked = true;
        this.dispatchEvent(new CustomEvent('change', {
            detail: { checked: this.checked },
            bubbles: true,
            composed: true
        }));
    }

    connectedCallback() {
        super.connectedCallback();
        getThemeManager()?.addEventListener('theme-changed', () => this.requestUpdate());
    }

    render() {
        const themeModule = getThemeManager()?.getActiveTheme();
        
        return html`
            <style>
                ${themeModule ? themeModule.getGlobalStyles() : ''}
            </style>
            <div class="radio-wrapper uiv-${themeModule?.id}-theme ${this.checked ? 'checked' : ''} ${this.disabled ? 'disabled' : ''}" @click="${this.handleToggle}">
                <div class="radio-circle uiv-${themeModule?.id}-card"></div>
                ${this.label ? html`<span class="label uiv-${themeModule?.id}-text">${this.label}</span>` : ''}
            </div>
        `;
    }
}
