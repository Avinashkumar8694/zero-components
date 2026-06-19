import { RendererComponent, applyGlobalStyles } from 'zero-annotation';
import { ZeroUivExpansion } from '../zero-uiv-expansion/zero-uiv-expansion';
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from 'zero-annotation';

export const modernTemplate: ZeroStudioTemplate = {
    kind: 'generic',
    slots: [
        { id: 'default', label: 'Expansion Content', dropzone: true, accepts: [] }
    ],
    templateHtml: [
        "<div style='width:100%;background:var(--uiv-surface-color, #ffffff);border:1px solid var(--uiv-border-color, #e2e8f0);border-radius:12px;box-shadow:var(--uiv-shadow-depth, 0 4px 6px -1px rgba(0, 0, 0, 0.1));'>",
        "<div style='display:flex;align-items:center;justify-content:space-between;padding:16px 24px;font-weight:600;color:var(--uiv-primary-color, #6366f1);border-bottom:1px solid var(--uiv-border-color, #e2e8f0);background:rgba(99, 102, 241, 0.03);'>",
        "<span>{{display:label}}</span><span style='transform:rotate(180deg);'>▼</span>",
        "</div>",
        "<div style='padding:20px 24px;color:var(--uiv-text-color, #1e293b);'>",
        "<zero-studio-slot name='default'></zero-studio-slot>",
        "</div>",
        "</div>"
    ].join(""),
    labelProp: 'label',
    badges: ['Modern', 'Clean'],
};

function escapeStudio(value: string): string {
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

@RendererComponent({
    name: 'zero-uiv-expansion-modern',
    version: '1.0.0',
    title: 'Modern Expansion Panel (Legacy)',
    elementSelector: 'zero-uiv-expansion-modern',
    group: 'Uiverse Expansion',
    iconName: 'expansion-icon.png',
})
@applyGlobalStyles()
export class ZeroUivExpansionModern extends ZeroUivExpansion {
    static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
        if (!config) return modernTemplate;
        const labelDisplay = escapeStudio(config.studio.display.label || 'Modern Expansion');
        
        const bg = 'var(--uiv-surface-color, #ffffff)';
        const border = 'var(--uiv-border-color, #e2e8f0)';
        const primary = 'var(--uiv-primary-color, #6366f1)';
        const text = 'var(--uiv-text-color, #1e293b)';

        return {
            ...modernTemplate,
            templateHtml: [
                `<div style='width:100%;background:${bg};border:1px solid ${border};border-radius:12px;box-shadow:var(--uiv-shadow-depth, 0 4px 6px -1px rgba(0, 0, 0, 0.1)); overflow:hidden; font-family:inherit;'>`,
                `<div style='display:flex;align-items:center;justify-content:space-between;padding:16px 24px;font-weight:600;color:${primary};border-bottom:1px solid ${border};background:rgba(99, 102, 241, 0.03);'>`,
                `<span>${labelDisplay}</span><span style='transform:rotate(180deg); opacity:0.7;'>▼</span>`,
                "</div>",
                `<div style='padding:20px 24px;color:${text};font-size:14px;'>`,
                "<zero-studio-slot name='default'></zero-studio-slot>",
                "</div>",
                "</div>"
            ].join(""),
        };
    }

    constructor() {
        super();
        this.theme = 'modern';
    }
}
