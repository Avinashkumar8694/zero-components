import { RendererComponent, applyGlobalStyles } from 'zero-annotation';
import { ZeroUivButton } from '../zero-uiv-button/zero-uiv-button';
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from 'zero-annotation';

export const retroTemplate: ZeroStudioTemplate = {
    kind: 'button',
    templateHtml: [
        "<div style='position:relative;display:inline-block;'>",
        "<button style='position:relative;padding:10px 30px;font-size:1.2rem;font-weight:800;background:var(--uiv-primary-color, #f59e0b);color:#000;border:3px solid #000;text-transform:uppercase;letter-spacing:2px;box-shadow:6px 6px 0 #000;'>",
        "{{display:label}}",
        "</button>",
        "</div>"
    ].join(""),
    labelProp: 'label',
    badges: ['Retro', 'Nostalgia'],
};

function escapeStudio(value: string): string {
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

@RendererComponent({
    name: 'zero-uiv-button-retro',
    version: '1.0.0',
    title: 'Retro Button (Legacy)',
    elementSelector: 'zero-uiv-button-retro',
    group: 'Uiverse Buttons',
    iconName: 'button-icon.png',
})
@applyGlobalStyles()
export class ZeroUivButtonRetro extends ZeroUivButton {
    static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
        if (!config) return retroTemplate;
        const labelDisplay = escapeStudio(config.studio.display.label || 'RETRO');
        return {
            ...retroTemplate,
            templateHtml: [
                "<div style='position:relative;display:inline-block;'>",
                "<button style='position:relative;padding:10px 30px;font-size:1.2rem;font-weight:800;background:var(--uiv-primary-color, #f59e0b);color:#000;border:3px solid #000;text-transform:uppercase;letter-spacing:2px;box-shadow:6px 6px 0 #000;'>",
                labelDisplay,
                "</button>",
                "</div>"
            ].join(""),
        };
    }

    constructor() {
        super();
        this.theme = 'retro';
    }
}
