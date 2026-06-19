import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from 'zero-annotation';
import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export const orbitTemplate: ZeroStudioTemplate = {
    kind: 'generic',
    templateHtml: [
        "<div style='display:flex;align-items:center;justify-content:center;padding:24px;'>",
        "<div style='width:30px;height:30px;border:4px solid #e2e8f0;border-top-color:#3b82f6;border-radius:50%;'></div>",
        "</div>"
    ].join(""),
    labelProp: 'label',
    badges: ['Loader', 'Orbit'],
};

@RendererComponent({
    name: 'zero-uiv-loader-orbit',
    version: '1.0.0',
    title: 'Orbit Loader',
    elementSelector: 'zero-uiv-loader-orbit',
    group: 'Uiverse Loaders',
    iconName: 'loader-icon.png',
})
@applyGlobalStyles()
export class ZeroUivLoaderOrbit extends LitElement {
    static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
        if (!config) return orbitTemplate;
        const size = (config.props?.size ?? config.studio.props?.size) || 50;
        const color = 'var(--uiv-primary-color, #6366f1)';
        const accent = 'var(--uiv-secondary-color, #8b5cf6)';
        
        return {
            ...orbitTemplate,
            templateHtml: [
                `<div style='width:${size}px;height:${size}px;position:relative;display:flex;justify-content:center;align-items:center;'>`,
                `<div style='width:${size * 0.3}px;height:${size * 0.3}px;background:${color};border-radius:50%;box-shadow:0 0 15px ${color};'></div>`,
                `<div style='position:absolute;width:100%;height:100%;border:2px solid rgba(255,255,255,0.05);border-radius:50%;'>`,
                `<div style='position:absolute;top:0;left:50%;width:${size * 0.2}px;height:${size * 0.2}px;background:${accent};border-radius:50%;transform:translate(-50%,-50%);box-shadow:0 0 10px ${accent};'></div>`,
                "</div>",
                "</div>"
            ].join(""),
        };
    }

    static styles = css`
        :host {
            --uiv-loader-color: var(--uiv-primary-color, #6366f1);
            --uiv-loader-accent: var(--uiv-secondary-color, #8b5cf6);
            --uiv-size: 50px;
            --intensity: var(--uiv-glow-intensity, 1);
            display: inline-block;
        }

        .orbit-container {
            width: var(--uiv-size);
            height: var(--uiv-size);
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .center {
            width: calc(var(--uiv-size) * 0.3);
            height: calc(var(--uiv-size) * 0.3);
            background: var(--uiv-loader-color);
            border-radius: 50%;
            box-shadow: 0 0 calc(15px * var(--intensity)) var(--uiv-loader-color);
        }

        .orbit {
            position: absolute;
            width: 100%;
            height: 100%;
            border: 2px solid rgba(255, 255, 255, 0.05);
            border-radius: 50%;
            animation: spin 2s linear infinite;
        }

        .planet {
            position: absolute;
            top: 0;
            left: 50%;
            width: calc(var(--uiv-size) * 0.2);
            height: calc(var(--uiv-size) * 0.2);
            background: var(--uiv-loader-accent);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            box-shadow: 0 0 10px var(--uiv-loader-accent);
        }

        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `;

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.COLOR_PICKER,
        displayLabel: 'Loader Color',
        fieldMappings: 'loaderColor',
    })
    loaderColor = '#6c63ff';

    @property({ type: Number })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.NUMBER_INPUT,
        displayLabel: 'Size',
        fieldMappings: 'size',
    })
    size = 50;

    render() {
        return html`
            <style>
                :host {
                    --uiv-loader-color: ${this.loaderColor};
                    --uiv-size: ${this.size}px;
                }
            </style>
            <div class="orbit-container" role="status" aria-busy="true" aria-label="Loading">
                <div class="center"></div>
                <div class="orbit">
                    <div class="planet"></div>
                </div>
            </div>
        `;
    }
}
