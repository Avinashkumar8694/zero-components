import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from 'zero-annotation';
import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
const getThemeManager = () => (window as any).zeroThemeManager;

export const studioTemplate: ZeroStudioTemplate = {
    kind: 'generic',
    templateHtml: [
        "<div style='display:flex;flex-direction:column;gap:8px;padding:12px;border-radius:12px;background:rgba(255,255,255,0.95);border:1px solid rgba(148,163,184,0.15);'>",
        "<div style='display:flex;justify-content:space-between;font-size:0.75rem;font-weight:600;color:var(--uiv-text-color,#1e293b);'>",
        "<span>{{display:label}}</span>",
        "<span style='color:var(--uiv-primary-color,#6366f1);'>{{display:value}}</span>",
        "</div>",
        "<div style='height:6px;border-radius:3px;background:rgba(148,163,184,0.2);position:relative;margin:8px 0;'>",
        "<div style='position:absolute;left:0;width:50%;height:100%;background:var(--uiv-primary-color,#6366f1);border-radius:3px;'></div>",
        "<div style='position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:16px;height:16px;border-radius:50%;background:#ffffff;border:2px solid var(--uiv-primary-color,#6366f1);box-shadow:0 2px 4px rgba(0,0,0,0.1);'></div>",
        "</div>",
        "</div>"
    ].join(""),
    labelProp: 'label',
    badges: ['Slider', 'Uiverse'],
};

function escapeStudio(value: string): string {
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

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
    static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
        if (!config) return studioTemplate;
        const labelDisplay = escapeStudio(config.studio.display.label || 'Value');
        const valueDisplay = escapeStudio(config.studio.display.value || (config.props?.value ?? config.studio.props?.value)?.toString() || '50');
        const accentCol = (config.props?.accentColor ?? config.studio.props?.accentColor) || 'var(--uiv-primary-color,#6366f1)';
        
        let perc = 50;
        if (config.studio.props) {
            const v = Number((config.props?.value ?? config.studio.props?.value)) || 50;
            const mn = Number((config.props?.min ?? config.studio.props?.min)) || 0;
            const mx = Number((config.props?.max ?? config.studio.props?.max)) || 100;
            perc = Math.max(0, Math.min(100, ((v - mn) / (mx - mn)) * 100));
        }

        return {
            ...studioTemplate,
            templateHtml: [
                "<div style='display:flex;flex-direction:column;gap:8px;padding:12px;border-radius:12px;background:rgba(255,255,255,0.95);border:1px solid rgba(148,163,184,0.15);'>",
                "<div style='display:flex;justify-content:space-between;font-size:0.75rem;font-weight:600;color:var(--uiv-text-color,#1e293b);'>",
                `<span>${labelDisplay}</span>`,
                `<span style='color:${accentCol};'>${valueDisplay}</span>`,
                "</div>",
                "<div style='height:6px;border-radius:3px;background:rgba(148,163,184,0.2);position:relative;margin:8px 0;'>",
                `<div style='position:absolute;left:0;width:${perc}%;height:100%;background:${accentCol};border-radius:3px;'></div>`,
                `<div style='position:absolute;left:${perc}%;top:50%;transform:translate(-50%,-50%);width:16px;height:16px;border-radius:50%;background:#ffffff;border:2px solid ${accentCol};box-shadow:0 2px 4px rgba(0,0,0,0.1);'></div>`,
                "</div>",
                "</div>"
            ].join(""),
        };
    }

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
