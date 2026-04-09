import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';

const getThemeManager = () => (window as any).zeroThemeManager;

@RendererComponent({
    name: 'zero-uiv-slider-glitch',
    version: '1.0.0',
    title: 'Glitch Style Slider',
    elementSelector: 'zero-uiv-slider-glitch',
    group: 'Uiverse Sliders',
    iconName: 'slider-icon.png',
})
@applyGlobalStyles()
export class ZeroUivSliderGlitch extends LitElement {
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
        eventTrigger: 'input',
        displayLabel: 'On Input'
    })
    onInputEvent = 'input';

    static styles = css`
        :host {
            display: block;
            width: 100%;
            margin-bottom: 20px;
            --sld-p: var(--uiv-primary-color, #ff003c);
            --sld-s: var(--uiv-secondary-color, #00e6f6);
            --sld-bg: var(--uiv-bg-color, #1a1a1a);
        }

        .slider-wrapper {
            position: relative;
            padding: 10px 0;
        }

        input[type="range"] {
            -webkit-appearance: none;
            width: 100%;
            height: 10px;
            background: var(--sld-bg);
            border: 2px solid var(--sld-p);
            outline: none;
            clip-path: polygon(0 0, 100% 0, 100% 70%, 98% 100%, 0 100%);
        }

        input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 20px;
            height: 25px;
            background: var(--sld-s);
            cursor: pointer;
            clip-path: polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%);
            box-shadow: -2px 0 0 var(--sld-p);
        }

        input[type="range"]::-moz-range-thumb {
            width: 20px;
            height: 25px;
            background: var(--sld-s);
            cursor: pointer;
            clip-path: polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%);
            border: none;
        }

        .label {
            display: flex;
            justify-content: space-between;
            margin-bottom: 5px;
            font-weight: bold;
            font-size: 0.8rem;
            color: var(--uiv-text-color, #fff);
            text-transform: uppercase;
            letter-spacing: 1px;
        }
    `;

    handleInput(event: Event) {
        if (this.disabled) return;
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
        const themeModule = getThemeManager()?.getActiveTheme();
        
        return html`
            <style>
                ${themeModule ? themeModule.getGlobalStyles() : ''}
            </style>
            <div class="slider-wrapper">
                <div class="label">
                    <span>Range Selector</span>
                    <span>${this.value}</span>
                </div>
                <input 
                    type="range" 
                    .value="${this.value}" 
                    min="${this.min}" 
                    max="${this.max}"
                    ?disabled="${this.disabled}"
                    @input="${this.handleInput}"
                >
            </div>
        `;
    }
}
