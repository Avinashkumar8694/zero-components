import { RendererComponent, applyGlobalStyles } from 'zero-annotation';
import { ZeroUivButton } from '../zero-uiv-button/zero-uiv-button';
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from 'zero-annotation';

export const glassTemplate: ZeroStudioTemplate = {
    kind: 'button',
    templateHtml: [
        "<div style='position:relative;display:inline-block;'>",
        "<button style='position:relative;padding:12px 28px;font-size:1.2rem;font-weight:800;background:rgba(255, 255, 255, 0.1);color:var(--uiv-text-color, #ffffff);border:1px solid rgba(255,255,255,0.2);text-transform:uppercase;letter-spacing:2px;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-radius:4px;'>",
        "{{display:label}}",
        "</button>",
        "</div>"
    ].join(""),
    labelProp: 'label',
    badges: ['Glass', 'Effect'],
};

function escapeStudio(value: string): string {
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

@RendererComponent({
    name: 'zero-uiv-button-glass',
    version: '1.0.0',
    title: 'Glass Button (Legacy)',
    elementSelector: 'zero-uiv-button-glass',
    group: 'Uiverse Buttons',
    iconName: 'button-icon.png',
})
@applyGlobalStyles()
export class ZeroUivButtonGlass extends ZeroUivButton {
    static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
        if (!config) return glassTemplate;
        const labelDisplay = escapeStudio(config.studio.display.label || 'GLASS');
        return {
            ...glassTemplate,
            templateHtml: [
                "<div style='position:relative;display:inline-block;'>",
                "<button style='position:relative;padding:12px 28px;font-size:1.2rem;font-weight:800;background:rgba(255, 255, 255, 0.1);color:var(--uiv-text-color, #ffffff);border:1px solid rgba(255,255,255,0.2);text-transform:uppercase;letter-spacing:2px;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-radius:4px;'>",
                labelDisplay,
                "</button>",
                "</div>"
            ].join(""),
        };
    }

    constructor() {
        super();
        this.theme = 'glass';
    }
}
