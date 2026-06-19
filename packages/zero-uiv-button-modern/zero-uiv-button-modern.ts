import { RendererComponent, applyGlobalStyles } from 'zero-annotation';
import { ZeroUivButton } from '../zero-uiv-button/zero-uiv-button';
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from 'zero-annotation';

export const modernTemplate: ZeroStudioTemplate = {
    kind: 'button',
    templateHtml: [
        "<button style='border:1px solid var(--uiv-border-color, #e2e8f0);background:var(--uiv-surface-color, #ffffff);color:var(--uiv-text-color, #1e293b);padding:8px 16px;border-radius:6px;font-weight:500;box-shadow:0 1px 2px rgba(0,0,0,0.05);transition:all 0.2s;text-transform:uppercase;'>",
        "{{display:label}}",
        "</button>"
    ].join(""),
    labelProp: 'label',
    badges: ['Modern', 'Clean'],
};

function escapeStudio(value: string): string {
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

@RendererComponent({
    name: 'zero-uiv-button-modern',
    version: '1.0.0',
    title: 'Modern Button (Legacy)',
    elementSelector: 'zero-uiv-button-modern',
    group: 'Uiverse Buttons',
    iconName: 'button-icon.png',
})
@applyGlobalStyles()
export class ZeroUivButtonModern extends ZeroUivButton {
    static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
        if (!config) return modernTemplate;
        const labelDisplay = escapeStudio(config.studio.display.label || 'Modern Button');
        return {
            ...modernTemplate,
            templateHtml: [
                "<button style='border:1px solid var(--uiv-border-color, #e2e8f0);background:var(--uiv-surface-color, #ffffff);color:var(--uiv-text-color, #1e293b);padding:8px 16px;border-radius:6px;font-weight:500;box-shadow:0 1px 2px rgba(0,0,0,0.05);transition:all 0.2s;text-transform:uppercase;'>",
                labelDisplay,
                "</button>"
            ].join(""),
        };
    }

    constructor() {
        super();
        this.theme = 'modern';
    }
}
