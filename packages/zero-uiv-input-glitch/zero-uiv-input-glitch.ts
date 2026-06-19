import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType, ZeroStudioTemplate, ZeroStudioTemplateContext } from 'zero-annotation';
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { ZeroUivInput } from '../zero-uiv-input/zero-uiv-input';

const getThemeManager = () => (window as any).zeroThemeManager;

export const glitchTemplate: ZeroStudioTemplate = {
    kind: 'generic',
    templateHtml: [
        "<div style='display:flex;flex-direction:column;gap:4px;width:100%;'>",
        "<div style='font-size:0.75rem;font-weight:700;color:#00ffff;font-family:monospace;letter-spacing:1px;'>{{display:label}}</div>",
        "<div style='padding:10px 14px;background:#111;color:#0f0;font-family:monospace;border:1px solid #333;box-shadow:2px 2px 0 #f0f,-2px -2px 0 #0ff;font-size:0.85rem;'>{{display:placeholder}}</div>",
        "</div>"
    ].join(""),
    labelProp: 'label',
    badges: ['Glitch', 'Cyberpunk'],
};

function escapeStudio(value: string): string {
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

@RendererComponent({
    name: 'zero-uiv-input-glitch',
    version: '1.0.0',
    title: 'Glitch Style Input',
    elementSelector: 'zero-uiv-input-glitch',
    group: 'Uiverse Inputs',
    iconName: 'input-icon.png',
})
@applyGlobalStyles()
export class ZeroUivInputGlitch extends ZeroUivInput {
    static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
        if (!config) return glitchTemplate;
        const labelDisplay = escapeStudio(config.studio.display.label || 'Glitch Input');
        const placeholderDisplay = escapeStudio(config.studio.display.placeholder || 'Enter text...');
        const cornerTag = escapeStudio((config.props?.cornerTag ?? config.studio.props?.cornerTag) || 'SEC-v2');
        
        const primary = 'var(--uiv-primary-color, #ff003c)';
        const secondary = 'var(--uiv-secondary-color, #00e6f6)';
        const bg = 'var(--uiv-bg-color, #1a1a1a)';
        const accent = 'var(--uiv-accent-color, #f8f005)';
        const text = 'var(--uiv-text-color, #ffffff)';

        return {
            ...glitchTemplate,
            templateHtml: [
                `<div style='display:block;margin-bottom:20px;font-family:inherit;'>`,
                `<div style='display:block;margin-bottom:5px;font-weight:bold;font-size:0.85rem;color:${text};'>${labelDisplay}</div>`,
                `<div style='position:relative;padding:2px;background:linear-gradient(135deg, ${primary} 0%, ${secondary} 100%);clip-path:polygon(0 0, 100% 0, 100% 70%, 95% 100%, 0 100%);'>`,
                `<div style='background:${bg};padding:10px 15px;clip-path:polygon(0 0, 100% 0, 100% 70%, 95% 100%, 0 100%);display:flex;align-items:center;'>`,
                `<span style='position:absolute;right:0;top:-10px;background:${accent};color:#000;padding:0 5px;font-size:0.6rem;font-weight:800;'>${cornerTag}</span>`,
                `<div style='width:100%;color:${text};opacity:0.6;font-size:1rem;'>${placeholderDisplay}</div>`,
                "</div>",
                "</div>",
                "</div>"
            ].join(""),
        };
    }

    constructor() {
        super();
        this.theme = 'glitch';
    }

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
