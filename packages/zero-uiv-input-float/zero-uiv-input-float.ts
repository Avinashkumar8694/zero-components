import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';

const getThemeManager = () => (window as any).zeroThemeManager;

@RendererComponent({
    name: 'zero-uiv-input-float',
    version: '1.0.0',
    title: 'Floating Label Input',
    elementSelector: 'zero-uiv-input-float',
    group: 'Uiverse Inputs',
    iconName: 'input-icon.png',
})
@applyGlobalStyles()
export class ZeroUivInputFloat extends LitElement {
    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Label',
        fieldMappings: 'label',
    })
    label = 'Floating Label';

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
            --inp-p: var(--uiv-primary-color, #6c63ff);
            --inp-t: var(--uiv-text-color, #333);
            --inp-b: var(--uiv-border-color, #ccc);
        }

        .floating-group {
            position: relative;
            padding-top: 20px;
        }

        input {
            width: 100%;
            padding: 10px 0;
            font-size: 1rem;
            color: var(--inp-t);
            border: none;
            border-bottom: 2px solid var(--inp-b);
            outline: none;
            background: transparent;
            transition: border-color 0.3s;
        }

        input:focus {
            border-bottom-color: var(--inp-p);
        }

        label {
            position: absolute;
            top: 25px;
            left: 0;
            color: #999;
            pointer-events: none;
            transition: all 0.3s;
        }

        input:focus ~ label,
        input:not(:placeholder-shown) ~ label {
            top: 0;
            font-size: 0.75rem;
            color: var(--inp-p);
        }

        .bar {
            position: relative;
            display: block;
            width: 100%;
        }

        .bar:before, .bar:after {
            content: '';
            height: 2px;
            width: 0;
            bottom: 0;
            position: absolute;
            background: var(--inp-p);
            transition: 0.4s ease all;
        }

        .bar:before { left: 50%; }
        .bar:after { right: 50%; }

        input:focus ~ .bar:before,
        input:focus ~ .bar:after {
            width: 50%;
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
            <div class="floating-group">
                <input 
                    type="text" 
                    .value="${this.value}" 
                    placeholder=" "
                    ?disabled="${this.disabled}"
                    @input="${this.handleInput}"
                >
                <label>${this.label}</label>
                <span class="bar"></span>
            </div>
        `;
    }
}
