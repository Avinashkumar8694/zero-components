import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from 'zero-annotation';
import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';

const getThemeManager = () => (window as any).zeroThemeManager;

export const glowTemplate: ZeroStudioTemplate = {
    kind: 'generic',
    templateHtml: [
        "<div style='display:flex;flex-direction:column;gap:8px;padding:12px;border-radius:12px;background:rgba(255,255,255,0.05);border:1px solid rgba(0,210,255,0.3);box-shadow:0 0 15px rgba(0,210,255,0.2);'>",
        "<div style='display:flex;justify-content:space-between;font-size:0.75rem;font-weight:600;color:var(--uiv-text-color,#1e293b);'>",
        "<span>{{display:label}}</span>",
        "<span style='color:#00d2ff;text-shadow:0 0 5px #00d2ff;'>{{display:value}}</span>",
        "</div>",
        "<div style='height:6px;border-radius:3px;background:rgba(0,210,255,0.1);position:relative;margin:8px 0;'>",
        "<div style='position:absolute;left:0;width:50%;height:100%;background:#00d2ff;border-radius:3px;box-shadow:0 0 10px #00d2ff;'></div>",
        "<div style='position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:16px;height:16px;border-radius:50%;background:#fff;border:2px solid #00d2ff;box-shadow:0 0 15px #00d2ff;'></div>",
        "</div>",
        "</div>"
    ].join(""),
    labelProp: 'label',
    badges: ['Glow', 'Effect'],
};

function escapeStudio(value: string): string {
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

@RendererComponent({
    name: 'zero-uiv-slider-glow',
    version: '1.0.0',
    title: 'Radiant Glow Slider',
    elementSelector: 'zero-uiv-slider-glow',
    group: 'Uiverse Sliders',
    iconName: 'slider-icon.png',
})
@applyGlobalStyles()
export class ZeroUivSliderGlow extends LitElement {
    static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
        if (!config) return glowTemplate;
        const labelDisplay = escapeStudio(config.studio.display.label || 'Glow Slider');
        const valueDisplay = escapeStudio(config.studio.display.value || (config.props?.value ?? config.studio.props?.value)?.toString() || '50');
        
        const primary = 'var(--uiv-primary-color, #00d2ff)';
        const bg = 'var(--uiv-bg-color, #050801)';

        let perc = 50;
        if (config.studio.props) {
            const v = Number((config.props?.value ?? config.studio.props?.value)) || 50;
            const mn = Number((config.props?.min ?? config.studio.props?.min)) || 0;
            const mx = Number((config.props?.max ?? config.studio.props?.max)) || 100;
            perc = Math.max(0, Math.min(100, ((v - mn) / (mx - mn)) * 100));
        }

        return {
            ...glowTemplate,
            templateHtml: [
                "<div style='display:flex;flex-direction:column;gap:8px;padding:12px;border-radius:12px;background:" + bg + ";border:1px solid " + primary + ";box-shadow:0 0 15px " + primary + ";'>",
                "<div style='display:flex;justify-content:space-between;font-size:0.75rem;font-weight:600;color:var(--uiv-text-color,#fff);text-transform:uppercase;letter-spacing:2px;'>",
                `<span>${labelDisplay}</span>`,
                `<span style='color:${primary};text-shadow:0 0 5px ${primary};'>${valueDisplay}%</span>`,
                "</div>",
                "<div style='height:6px;border-radius:3px;background:rgba(0,0,0,0.3);position:relative;margin:8px 0;box-shadow:inset 0 0 5px " + primary + ";'>",
                `<div style='position:absolute;left:0;width:${perc}%;height:100%;background:${primary};border-radius:3px;box-shadow:0 0 10px ${primary};'></div>`,
                `<div style='position:absolute;left:${perc}%;top:50%;transform:translate(-50%,-50%);width:20px;height:20px;border-radius:50%;background:${primary};box-shadow:0 0 5px ${primary}, 0 0 15px ${primary};'></div>`,
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
            --sld-p: var(--uiv-primary-color, #00d2ff);
            --sld-bg: var(--uiv-bg-color, #050801);
        }

        .slider-wrapper {
            position: relative;
            padding: 10px 0;
        }

        input[type="range"] {
            -webkit-appearance: none;
            width: 100%;
            height: 6px;
            background: var(--sld-bg);
            border-radius: 3px;
            outline: none;
            transition: 0.5s;
            box-shadow: 0 0 5px var(--sld-p);
        }

        input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 20px;
            height: 20px;
            background: var(--sld-p);
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0 0 5px var(--sld-p),
                        0 0 15px var(--sld-p);
            transition: 0.3s;
        }

        input[type="range"]::-webkit-slider-thumb:hover {
            box-shadow: 0 0 10px var(--sld-p),
                        0 0 30px var(--sld-p);
        }

        .label {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
            font-weight: bold;
            font-size: 0.9rem;
            color: var(--sld-p);
            text-transform: uppercase;
            letter-spacing: 2px;
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
                    <span>Glow Track</span>
                    <span>${this.value}%</span>
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
