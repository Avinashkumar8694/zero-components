import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from 'zero-annotation';
import { RendererComponent, applyGlobalStyles } from 'zero-annotation';
import { ZeroUivSlider } from '../zero-uiv-slider/zero-uiv-slider';

export const modernTemplate: ZeroStudioTemplate = {
    kind: 'generic',
    templateHtml: [
        "<div style='display:flex;flex-direction:column;gap:8px;padding:12px;border-radius:6px;background:#ffffff;border:1px solid #e2e8f0;box-shadow:0 1px 3px rgba(0,0,0,0.05);'>",
        "<div style='display:flex;justify-content:space-between;font-size:0.75rem;font-weight:600;color:#0f172a;'>",
        "<span>{{display:label}}</span>",
        "<span style='color:#3b82f6;'>{{display:value}}</span>",
        "</div>",
        "<div style='height:4px;border-radius:2px;background:#e2e8f0;position:relative;margin:8px 0;'>",
        "<div style='position:absolute;left:0;width:50%;height:100%;background:#3b82f6;border-radius:2px;'></div>",
        "<div style='position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:14px;height:14px;border-radius:50%;background:#ffffff;border:2px solid #3b82f6;box-shadow:0 1px 2px rgba(0,0,0,0.1);'></div>",
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
    name: 'zero-uiv-slider-modern',
    version: '1.0.0',
    title: 'Modern Slider (Legacy)',
    elementSelector: 'zero-uiv-slider-modern',
    group: 'Uiverse Sliders',
    iconName: 'slider-icon.png',
})
@applyGlobalStyles()
export class ZeroUivSliderModern extends ZeroUivSlider {
    static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
        if (!config) return modernTemplate;
        const labelDisplay = escapeStudio(config.studio.display.label || 'Modern Slider');
        const valueDisplay = escapeStudio(config.studio.display.value || (config.props?.value ?? config.studio.props?.value)?.toString() || '50');
        
        const primary = 'var(--uiv-primary-color, #3b82f6)';
        const bg = 'var(--uiv-surface-color, #ffffff)';
        const border = 'var(--uiv-border-color, #e2e8f0)';

        let perc = 50;
        if (config.studio.props) {
            const v = Number((config.props?.value ?? config.studio.props?.value)) || 50;
            const mn = Number((config.props?.min ?? config.studio.props?.min)) || 0;
            const mx = Number((config.props?.max ?? config.studio.props?.max)) || 100;
            perc = Math.max(0, Math.min(100, ((v - mn) / (mx - mn)) * 100));
        }

        return {
            ...modernTemplate,
            templateHtml: [
                "<div style='display:flex;flex-direction:column;gap:8px;padding:12px;border-radius:8px;background:" + bg + ";border:1px solid " + border + ";box-shadow:var(--uiv-shadow-depth, 0 1px 3px rgba(0,0,0,0.05));'>",
                "<div style='display:flex;justify-content:space-between;font-size:0.75rem;font-weight:600;color:var(--uiv-text-color,#0f172a);'>",
                `<span>${labelDisplay}</span>`,
                `<span style='color:${primary};'>${valueDisplay}</span>`,
                "</div>",
                "<div style='height:4px;border-radius:2px;background:" + border + ";position:relative;margin:8px 0;'>",
                `<div style='position:absolute;left:0;width:${perc}%;height:100%;background:${primary};border-radius:2px;'></div>`,
                `<div style='position:absolute;left:${perc}%;top:50%;transform:translate(-50%,-50%);width:14px;height:14px;border-radius:50%;background:#ffffff;border:2px solid ${primary};box-shadow:0 1px 2px rgba(0,0,0,0.1);'></div>`,
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
