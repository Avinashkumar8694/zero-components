import { RendererComponent, applyGlobalStyles } from 'zero-annotation';
import { ZeroUivTooltip } from '../zero-uiv-tooltip/zero-uiv-tooltip';
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from 'zero-annotation';

export const modernTemplate: ZeroStudioTemplate = {
    kind: 'generic',
    slots: [
        { id: 'default', label: 'Tooltip Anchor', dropzone: true, accepts: [] }
    ],
    templateHtml: [
        "<div style='position:relative;display:inline-block;padding:16px;border:2px dashed rgba(148,163,184,0.3);border-radius:8px;background:rgba(255,255,255,0.8);'>",
        "<div style='position:absolute;top:-25px;left:50%;transform:translateX(-50%);background:#fff;border:1px solid #e2e8f0;box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);color:#0f172a;padding:6px 12px;border-radius:6px;font-size:0.75rem;white-space:nowrap;z-index:10;font-weight:600;'>{{display:text}}</div>",
        "<zero-studio-slot name='default'></zero-studio-slot>",
        "</div>"
    ].join(""),
    textProp: 'text',
    badges: ['Modern', 'Tooltip'],
};

function escapeStudio(value: string): string {
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

@RendererComponent({
    name: 'zero-uiv-tooltip-modern',
    version: '1.0.0',
    title: 'Modern Tooltip (Legacy)',
    elementSelector: 'zero-uiv-tooltip-modern',
    group: 'Uiverse Tooltip',
    iconName: 'tooltip-icon.png',
})
@applyGlobalStyles()
export class ZeroUivTooltipModern extends ZeroUivTooltip {
    static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
        if (!config) return modernTemplate;
        const textDisplay = escapeStudio(config.studio.display.text || 'Tooltip string');
        const bg = 'var(--uiv-surface-color, #fff)';
        const text = 'var(--uiv-text-color, #0f172a)';
        
        return {
            ...modernTemplate,
            templateHtml: [
                "<div style='position:relative;display:inline-block;padding:20px;border:2px dashed rgba(148,163,184,0.3);border-radius:12px;'>",
                `<div style='position:absolute;top:-30px;left:50%;transform:translateX(-50%);background:${bg};border:1px solid rgba(0,0,0,0.05);box-shadow:0 10px 15px -3px rgba(0,0,0,0.1);color:${text};padding:8px 14px;border-radius:10px;font-size:13px;white-space:nowrap;z-index:10;font-weight:600;'>${textDisplay}</div>`,
                "<div style='min-width:40px;min-height:40px;'>",
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
