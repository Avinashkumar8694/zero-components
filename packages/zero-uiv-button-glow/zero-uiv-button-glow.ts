import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';

const getThemeManager = () => (window as any).zeroThemeManager;

@RendererComponent({
    name: 'zero-uiv-button-glow',
    version: '1.0.0',
    title: 'Radiant Glow Button',
    elementSelector: 'zero-uiv-button-glow',
    group: 'Uiverse Buttons',
    iconName: 'button-icon.png',
})
@applyGlobalStyles()
export class ZeroUivButtonGlow extends LitElement {
    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Label',
        fieldMappings: 'label',
    })
    label = 'GLOW';

    @property({ type: Boolean })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.CHECKBOX,
        displayLabel: 'Disabled',
        fieldMappings: 'disabled',
    })
    disabled = false;

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.COLOR_PICKER,
        displayLabel: 'Glow Color Overlay',
        fieldMappings: 'glowColor',
    })
    glowColor = '';

    // Output Events
    @RendererAttribute({
        attributeType: AttributeType.EVENT,
        eventTrigger: 'click',
        displayLabel: 'On Click'
    })
    onClickEvent = 'click';

    static styles = css`
        :host {
            display: inline-block;
            --btn-p: var(--uiv-primary-color, #00d2ff);
            --btn-t: var(--uiv-text-color, #ffffff);
            --btn-bg: var(--uiv-bg-color, #000);
        }

        button {
            position: relative;
            padding: 10px 25px;
            color: var(--btn-p);
            background: transparent;
            font-size: 1.1rem;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 4px;
            border: 2px solid var(--btn-p);
            border-radius: 4px;
            cursor: pointer;
            overflow: hidden;
            transition: 0.5s;
            outline: none;
            box-shadow: 0 0 5px var(--btn-p);
        }

        button:hover {
            background: var(--btn-p);
            color: #050801;
            box-shadow: 0 0 5px var(--btn-p),
                        0 0 25px var(--btn-p),
                        0 0 50px var(--btn-p),
                        0 0 200px var(--btn-p);
        }

        button:active {
            transform: translateY(2px);
        }

        button:disabled {
            filter: grayscale(1);
            cursor: not-allowed;
            opacity: 0.5;
        }
    `;

    connectedCallback() {
        super.connectedCallback();
        getThemeManager()?.addEventListener('theme-changed', () => this.requestUpdate());
    }

    render() {
        const themeModule = getThemeManager()?.getActiveTheme();
        
        return html`
            <style>
                ${themeModule ? themeModule.getGlobalStyles() : ''}
                :host {
                    ${this.glowColor ? `--uiv-primary-color: ${this.glowColor};` : ''}
                }
            </style>
            <button ?disabled="${this.disabled}" @click="${() => this.dispatchEvent(new CustomEvent('click'))}">
                ${this.label}
            </button>
        `;
    }
}
