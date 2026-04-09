import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';

const getThemeManager = () => (window as any).zeroThemeManager;

@RendererComponent({
    name: 'zero-uiv-input-glitch',
    version: '1.0.0',
    title: 'Glitch Style Input',
    elementSelector: 'zero-uiv-input-glitch',
    group: 'Uiverse Inputs',
    iconName: 'input-icon.png',
})
@applyGlobalStyles()
export class ZeroUivInputGlitch extends LitElement {
    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Label',
        fieldMappings: 'label',
    })
    label = 'Label';

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Placeholder',
        fieldMappings: 'placeholder',
    })
    placeholder = 'Search...';

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Value',
        fieldMappings: 'value',
    })
    value = '';

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Corner Tag',
        fieldMappings: 'cornerTag',
    })
    cornerTag = 'SEC-v2';

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
            margin-bottom: 20px;
            --inp-p: var(--uiv-primary-color, #ff003c);
            --inp-s: var(--uiv-secondary-color, #00e6f6);
            --inp-bg: var(--uiv-bg-color, #1a1a1a);
            --inp-t: var(--uiv-text-color, #ffffff);
            --inp-a: var(--uiv-accent-color, #f8f005);
        }

        .input-wrapper {
            position: relative;
            padding: 2px;
            background: linear-gradient(135deg, var(--inp-p) 0%, var(--inp-s) 100%);
            clip-path: polygon(0 0, 100% 0, 100% 70%, 95% 100%, 0 100%);
        }

        .input-inner {
            background: var(--inp-bg);
            padding: 10px 15px;
            clip-path: polygon(0 0, 100% 0, 100% 70%, 95% 100%, 0 100%);
            display: flex;
            align-items: center;
        }

        input {
            width: 100%;
            border: none;
            background: transparent;
            color: var(--inp-t);
            outline: none;
            font-family: inherit;
        }

        .label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            font-size: 0.85rem;
            color: var(--uiv-text-color, inherit);
        }

        .corner-tag {
            position: absolute;
            right: 0;
            top: -10px;
            background: var(--inp-a);
            color: #000;
            padding: 0 5px;
            font-size: 0.6rem;
            font-weight: 800;
        }
    `;

    handleInput(event: Event) {
        if (this.disabled) return;
        const target = event.target as HTMLInputElement;
        this.value = target.value;
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
            <div class="label">${this.label}</div>
            <div class="input-wrapper">
                <div class="input-inner">
                    <span class="corner-tag">${this.cornerTag}</span>
                    <input 
                        type="text" 
                        .value="${this.value}" 
                        .placeholder="${this.placeholder}"
                        ?disabled="${this.disabled}"
                        @input="${this.handleInput}"
                    >
                </div>
            </div>
        `;
    }
}
