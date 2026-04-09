import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';

const getThemeManager = () => (window as any).zeroThemeManager;

@RendererComponent({
    name: 'zero-uiv-checkbox-heart',
    version: '1.0.0',
    title: 'Heart Shaped Checkbox',
    elementSelector: 'zero-uiv-checkbox-heart',
    group: 'Uiverse Checkboxes',
    iconName: 'checkbox-icon.png',
})
@applyGlobalStyles()
export class ZeroUivCheckboxHeart extends LitElement {
    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Label',
        fieldMappings: 'label',
    })
    label = 'Love';

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
            --heart-p: var(--uiv-primary-color, #ff4d4d);
            --heart-t: var(--uiv-text-color, #333);
        }

        .checkbox-wrapper {
            display: flex;
            align-items: center;
            cursor: pointer;
            user-select: none;
        }

        .heart {
            position: relative;
            width: 20px;
            height: 20px;
            background: #ccc;
            transform: rotate(-45deg);
            margin-right: 15px;
            transition: 0.3s;
        }

        .heart::before, .heart::after {
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            background: #ccc;
            border-radius: 50%;
            transition: 0.3s;
        }

        .heart::before { top: -10px; left: 0; }
        .heart::after { top: 0; left: 10px; }

        .checked .heart,
        .checked .heart::before,
        .checked .heart::after {
            background: var(--heart-p);
        }

        .checked .heart {
            transform: rotate(-45deg) scale(1.2);
            filter: drop-shadow(0 0 5px var(--heart-p));
        }

        .label {
            color: var(--heart-t);
            font-size: 1rem;
            font-weight: 600;
        }
    `;

    handleToggle() {
        if (this.disabled) return;
        this.checked = !this.checked;
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
            <div class="checkbox-wrapper ${this.checked ? 'checked' : ''}" @click="${this.handleToggle}">
                <div class="heart"></div>
                ${this.label ? html`<span class="label">${this.label}</span>` : ''}
            </div>
        `;
    }
}
