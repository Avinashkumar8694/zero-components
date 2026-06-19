import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from 'zero-annotation';
import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';

const getThemeManager = () => (window as any).zeroThemeManager;

export const glitchTemplate: ZeroStudioTemplate = {
    kind: 'generic',
    templateHtml: [
        "<div style='display:flex;flex-direction:column;gap:8px;padding:12px;background:#111;border:1px solid #333;box-shadow:2px 2px 0 #f0f,-2px -2px 0 #0ff;'>",
        "<div style='display:flex;justify-content:space-between;font-size:0.75rem;font-weight:700;color:#00ffff;font-family:monospace;letter-spacing:1px;'>",
        "<span>{{display:label}}</span>",
        "<span style='color:#0f0;'>{{display:value}}</span>",
        "</div>",
        "<div style='height:6px;background:#333;position:relative;margin:8px 0;'>",
        "<div style='position:absolute;left:0;width:50%;height:100%;background:#00ffff;'></div>",
        "<div style='position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:16px;height:16px;background:#f0f;border:2px solid #111;'></div>",
        "</div>",
        "</div>"
    ].join(""),
    labelProp: 'label',
    badges: ['Glitch', 'Cyberpunk'],
};

function escapeStudio(value: string): string {
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

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
    static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
        if (!config) return glitchTemplate;
        const labelDisplay = escapeStudio(config.studio.display.label || 'Glitch Slider');
        const valueDisplay = escapeStudio(config.studio.display.value || (config.props?.value ?? config.studio.props?.value)?.toString() || '50');
        
        const primary = 'var(--uiv-primary-color, #ff003c)';
        const secondary = 'var(--uiv-secondary-color, #00e6f6)';
        const bg = 'var(--uiv-bg-color, #1a1a1a)';

        let perc = 50;
        if (config.studio.props) {
            const v = Number((config.props?.value ?? config.studio.props?.value)) || 50;
            const mn = Number((config.props?.min ?? config.studio.props?.min)) || 0;
            const mx = Number((config.props?.max ?? config.studio.props?.max)) || 100;
            perc = Math.max(0, Math.min(100, ((v - mn) / (mx - mn)) * 100));
        }

        return {
            ...glitchTemplate,
            templateHtml: [
                "<div style='display:flex;flex-direction:column;gap:8px;padding:12px;background:" + bg + ";border:2px solid " + primary + ";clip-path:polygon(0 0, 100% 0, 100% 70%, 98% 100%, 0 100%);'>",
                "<div style='display:flex;justify-content:space-between;font-size:0.75rem;font-weight:700;color:var(--uiv-text-color,#fff);font-family:monospace;letter-spacing:1px;text-transform:uppercase;'>",
                `<span>${labelDisplay}</span>`,
                `<span style='color:${secondary};'>${valueDisplay}</span>`,
                "</div>",
                "<div style='height:10px;background:rgba(0,0,0,0.3);position:relative;margin:8px 0;border:1px solid rgba(255,255,255,0.1);'>",
                `<div style='position:absolute;left:0;width:${perc}%;height:100%;background:${secondary};box-shadow:-2px 0 0 ${primary};'></div>`,
                `<div style='position:absolute;left:${perc}%;top:50%;transform:translate(-50%,-50%);width:20px;height:25px;background:${secondary};clip-path:polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%);box-shadow:-2px 0 0 ${primary};'></div>`,
                "</div>",
                "</div>"
            ].join(""),
        };
    }

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
