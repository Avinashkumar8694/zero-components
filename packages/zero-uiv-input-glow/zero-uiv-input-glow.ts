import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';

const getThemeManager = () => (window as any).zeroThemeManager;

@RendererComponent({
    name: 'zero-uiv-input-glow',
    version: '1.0.0',
    title: 'Radiant Glow Input',
    elementSelector: 'zero-uiv-input-glow',
    group: 'Uiverse Inputs',
    iconName: 'input-icon.png',
})
@applyGlobalStyles()
export class ZeroUivInputGlow extends LitElement {
    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Label',
        fieldMappings: 'label',
    })
    label = 'Glow Input';

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
            --inp-p: var(--uiv-primary-color, var(--uiv-status-primary));
            --inp-s: var(--uiv-secondary-color, var(--uiv-status-secondary));
            --inp-t: var(--uiv-text-color, var(--uiv-text-primary-themed));
            --inp-bg: var(--uiv-surface-color, var(--uiv-app-input-bg, #ffffff));
            --inp-border: var(--uiv-border-color, var(--uiv-app-border-color, rgba(128,128,128,0.2)));
            --glow: var(--uiv-border-glow, 0 0 10px var(--uiv-app-accent-transparent, rgba(99, 102, 241, 0.2)));
            --glow-intensity: var(--uiv-glow-intensity, 1);
        }

        .input-group {
            position: relative;
        }

        input {
            width: 100%;
            padding: 12px 16px;
            background: var(--inp-bg);
            border: 2px solid var(--inp-border);
            border-radius: 8px;
            color: var(--inp-t);
            font-size: 1rem;
            outline: none;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }

        input:focus {
            border-color: var(--inp-p);
            box-shadow: 0 0 0 calc(4px * var(--glow-intensity)) var(--uiv-app-accent-transparent, rgba(99, 102, 241, 0.1)),
                        var(--glow);
            transform: translateY(-2px);
        }

        .label {
            display: block;
            margin-bottom: 8px;
            font-size: 0.9rem;
            color: var(--inp-p);
            letter-spacing: 2px;
            text-transform: uppercase;
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
            <div class="input-group ${themeModule?.id}-theme">
                <div class="label uiv-${themeModule?.id}-text">${this.label}</div>
                <input 
                    type="text" 
                    class="uiv-${themeModule?.id}-card uiv-${themeModule?.id}-scan"
                    .value="${this.value}" 
                    ?disabled="${this.disabled}"
                    @input="${this.handleInput}"
                >
            </div>
        `;
    }
}
