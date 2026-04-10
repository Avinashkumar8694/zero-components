import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
const getThemeManager = () => (window as any).zeroThemeManager;

@RendererComponent({
    name: 'zero-uiv-input',
    version: '1.0.0',
    title: 'Unified Input',
    elementSelector: 'zero-uiv-input',
    group: 'Uiverse Inputs',
    iconName: 'input-icon.png',
})
@applyGlobalStyles()
export class ZeroUivInput extends LitElement {
    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.DROPDOWN,
        displayLabel: 'Theme',
        fieldMappings: 'theme',
        optionItems: [
            { label: 'Modern', value: 'modern' },
            { label: 'Cyber', value: 'cyber' },
            { label: 'Neon', value: 'neon' },
            { label: 'Glass', value: 'glass' },
            { label: 'Retro', value: 'retro' }
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
    label = 'Label';

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Placeholder',
        fieldMappings: 'placeholder',
    })
    placeholder = 'Type something...';

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Value',
        fieldMappings: 'value',
    })
    value = '';

    @property({ type: Boolean })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.CHECKBOX,
        displayLabel: 'Error State',
        fieldMappings: 'error',
    })
    error = false;

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Error Message',
        fieldMappings: 'errorText',
    })
    errorText = '';

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
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Corner Tag (Cyber-only)',
        fieldMappings: 'cornerTag',
    })
    cornerTag = 'SEC-v2';

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
            margin-bottom: 20px;
            --inp-p: var(--uiv-input-primary, var(--uiv-primary-color, #6c63ff));
            --inp-b: var(--uiv-input-border, var(--uiv-border-color, #eee));
            --inp-t: var(--uiv-input-text, var(--uiv-text-color, #333));
            --inp-bg: var(--uiv-input-bg, var(--uiv-bg-color, #fff));
        }

        .input-wrapper {
            position: relative;
            width: 100%;
        }

        input {
            width: 100%;
            outline: none;
            border: 1px solid var(--inp-b);
            background: var(--inp-bg);
            color: var(--inp-t);
            font-family: inherit;
            padding: 10px 15px;
            border-radius: 8px;
            transition: all 0.3s ease;
        }

        input:focus {
            border-color: var(--inp-p);
            box-shadow: 0 0 0 2px rgba(108, 99, 255, 0.2);
        }

        .label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            font-size: 0.85rem;
            color: var(--uiv-text-color, inherit);
        }

        .error-msg {
            color: #ff3d00;
            font-size: 0.75rem;
            margin-top: 4px;
        }

        /* Cyber Specifics */
        .cyber .input-group-cyber {
            position: relative;
            padding: 2px;
            background: linear-gradient(135deg, var(--inp-p) 0%, var(--uiv-secondary-color, #00e6f6) 100%);
            clip-path: polygon(0 0, 100% 0, 100% 70%, 95% 100%, 0 100%);
        }

        .cyber .input-inner-cyber {
            background: var(--inp-bg);
            padding: 10px 15px;
            clip-path: polygon(0 0, 100% 0, 100% 70%, 95% 100%, 0 100%);
        }

        .cyber input {
            border: none;
            background: transparent;
            color: #fff;
        }

        .corner-tag {
            position: absolute;
            right: 0;
            top: -10px;
            background: var(--uiv-accent-color, #f8f005);
            color: #000;
            padding: 0 5px;
            font-size: 0.6rem;
            font-weight: 800;
        }

        /* Neon Specifics */
        .neon input {
            border: 2px solid var(--inp-p);
            background: transparent;
            color: var(--inp-p);
            box-shadow: 0 0 5px var(--inp-p);
        }

        .neon input:focus {
            box-shadow: 0 0 15px var(--inp-p);
        }

        /* Glass Specifics */
        .glass input {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: #fff;
        }

        /* Retro Specifics */
        .retro input {
            border: 3px solid #000;
            background: #fff;
            color: #000;
            border-radius: 0;
            box-shadow: 5px 5px 0px #000;
        }

        .retro input:focus {
            transform: translate(2px, 2px);
            box-shadow: 2px 2px 0px #000;
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
        const themeModule = getThemeManager()?.getActiveTheme('zero-uiv-themes');
        const activeTheme = this.theme || themeModule?.id || 'modern';

        return html`
            <style>
                ${themeModule ? themeModule.getGlobalStyles() : ''}
                ${themeModule ? themeModule.getComponentStyles('input') : ''}
                :host {
                    ${this.accentColor ? `--uiv-input-primary: ${this.accentColor};` : ''}
                }
            </style>
            <div class="input-wrapper ${activeTheme}">
                <label class="label">${this.label}</label>
                ${this.renderTemplate(activeTheme)}
                ${this.error ? html`<div class="error-msg">${this.errorText}</div>` : ''}
            </div>
        `;
    }

    private renderTemplate(activeTheme: string): TemplateResult {
        if (activeTheme === 'cyber') {
            return html`
                <div class="input-group-cyber ${this.error ? 'error' : ''}">
                    <div class="input-inner-cyber">
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

        return html`
            <input 
                type="text" 
                .value="${this.value}" 
                .placeholder="${this.placeholder}"
                ?disabled="${this.disabled}"
                @input="${this.handleInput}"
            >
        `;
    }
}
