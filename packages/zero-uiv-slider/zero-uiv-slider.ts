import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
const getThemeManager = () => (window as any).zeroThemeManager;

@RendererComponent({
    name: 'zero-uiv-slider',
    version: '1.0.0',
    title: 'Unified Slider',
    elementSelector: 'zero-uiv-slider',
    group: 'Uiverse Sliders',
    iconName: 'slider-icon.png',
})
@applyGlobalStyles()
export class ZeroUivSlider extends LitElement {
    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.DROPDOWN,
        displayLabel: 'Theme',
        fieldMappings: 'theme',
        optionItems: [
            { label: 'Modern', value: 'modern' },
            { label: 'Cyber', value: 'cyber' },
            { label: 'Glass', value: 'glass' },
            { label: 'Retro', value: 'retro' },
            { label: 'Neon', value: 'neon' }
        ]
    })
    theme = 'modern';

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Label',
        fieldMappings: 'label',
    })
    label = 'Slider';

    @property({ type: Number })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.NUMBER_INPUT,
        displayLabel: 'Value',
        fieldMappings: 'value',
    })
    value = 50;

    @property({ type: Number })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.NUMBER_INPUT,
        displayLabel: 'Min',
        fieldMappings: 'min',
    })
    min = 0;

    @property({ type: Number })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.NUMBER_INPUT,
        displayLabel: 'Max',
        fieldMappings: 'max',
    })
    max = 100;

    @property({ type: Number })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.NUMBER_INPUT,
        displayLabel: 'Step',
        fieldMappings: 'step',
    })
    step = 1;

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.COLOR_PICKER,
        displayLabel: 'Accent Color Overlay',
        fieldMappings: 'accentColor',
    })
    accentColor = '';

    // Output Events
    @RendererAttribute({
        attributeType: AttributeType.EVENT,
        eventTrigger: 'input',
        displayLabel: 'On Input'
    })
    onInputEvent = 'input';

    static styles = css`
        :host {
            display: block;
            width: 100%;
            margin-bottom: 25px;
            --sl-p: var(--uiv-primary-color, #6366f1);
            --sl-bg: var(--uiv-surface-color, #ffffff);
            --sl-border: var(--uiv-border-color, #e2e8f0);
            --sl-t: var(--uiv-text-color, #1e293b);
            --intensity: var(--uiv-glow-intensity, 1);
        }

        .slider-wrapper {
            position: relative;
            width: 100%;
        }

        input[type="range"] {
            -webkit-appearance: none;
            width: 100%;
            background: transparent;
            cursor: pointer;
        }

        input[type="range"]:focus {
            outline: none;
        }

        .label {
            display: block;
            margin-bottom: 12px;
            font-size: 0.9rem;
            font-weight: 600;
            color: var(--sl-p);
            letter-spacing: 0.05em;
        }

        /* Webkit Thumb */
        input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 22px;
            width: 22px;
            border-radius: 50%;
            background: var(--sl-p);
            cursor: pointer;
            margin-top: -9px;
            box-shadow: 0 0 calc(10px * var(--intensity)) var(--sl-p);
            border: 2px solid #fff;
            transition: transform 0.2s ease;
        }

        input[type="range"]:active::-webkit-slider-thumb {
            transform: scale(1.2);
        }

        /* Webkit Track */
        input[type="range"]::-webkit-slider-runnable-track {
            width: 100%;
            height: 6px;
            cursor: pointer;
            background: var(--sl-border);
            border-radius: 3px;
        }

        /* Retro override */
        .retro input[type="range"]::-webkit-slider-thumb {
            border-radius: 0;
            border: 2px solid #000;
            box-shadow: 3px 3px 0px #000;
        }
        .retro input[type="range"]::-webkit-slider-runnable-track {
            border: 2px solid #000;
            background: #fff;
            height: 8px;
        }
    `;

    handleInput(event: Event) {
        const target = event.target as HTMLInputElement;
        this.value = Number(target.value);
        this.dispatchEvent(new CustomEvent('input', {
            detail: { value: this.value },
            bubbles: true,
            composed: true
        }));
    }

    connectedCallback() {
        super.connectedCallback();
        getThemeManager()?.addEventListener('theme-changed', () => this.requestUpdate());
    }

    render() {
        const themeModule = getThemeManager()?.getActiveTheme('zero-uiv-themes');
        const activeTheme = this.theme || themeModule?.id || 'modern';

        return html`
            <style>
                ${themeModule ? themeModule.getGlobalStyles() : ''}
                ${themeModule ? themeModule.getComponentStyles('slider') : ''}
                :host {
                    ${this.accentColor ? `--uiv-slider-primary: ${this.accentColor};` : ''}
                }
            </style>
            <div class="slider-wrapper uiv-${themeModule?.id}-theme ${activeTheme}">
                <label class="label uiv-${themeModule?.id}-text">${this.label}: ${this.value}</label>
                <input 
                    type="range" 
                    class="uiv-${themeModule?.id}-card"
                    .min="${this.min}" 
                    .max="${this.max}" 
                    .step="${this.step}" 
                    .value="${this.value}"
                    @input="${this.handleInput}"
                    aria-label="${this.label}"
                >
            </div>
        `;
    }
}
