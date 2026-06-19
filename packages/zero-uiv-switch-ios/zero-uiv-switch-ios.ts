import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from 'zero-annotation';
import { RendererComponent, applyGlobalStyles } from 'zero-annotation';
import { ZeroUivSwitch } from '../zero-uiv-switch/zero-uiv-switch';

export const iosTemplate: ZeroStudioTemplate = {
    kind: 'generic',
    templateHtml: [
        "<div style='position:relative;display:inline-block;width:50px;height:28px;'>",
        "<span style='position:absolute;top:0;left:0;right:0;bottom:0;background-color:#e5e5ea;border-radius:34px;box-shadow:inset 0 2px 4px rgba(0,0,0,0.1);'>",
        "<div style='position:absolute;height:24px;width:24px;left:2px;bottom:2px;background-color:white;border-radius:50%;box-shadow:0 3px 8px rgba(0,0,0,0.15);'></div>",
        "</span>",
        "</div>"
    ].join(""),
    labelProp: 'label',
    badges: ['Switch', 'iOS'],
};

function escapeStudio(value: string): string {
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

@RendererComponent({
    name: 'zero-uiv-switch-ios',
    version: '1.0.0',
    title: 'IOS Switch (Legacy)',
    elementSelector: 'zero-uiv-switch-ios',
    group: 'Uiverse Switch',
    iconName: 'switch-icon.png',
})
@applyGlobalStyles()
export class ZeroUivSwitchIOS extends ZeroUivSwitch {
    static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
        if (!config) return iosTemplate;
        const checked = (config.props?.checked ?? config.studio.props?.checked);
        const accentCol = (config.props?.accentColor ?? config.studio.props?.accentColor) || '#34c759';
        const bgCol = checked ? accentCol : '#e5e5ea';
        const thumbTrans = checked ? 'translateX(22px)' : 'none';

        return {
            ...iosTemplate,
            templateHtml: [
                "<div style='position:relative;display:inline-block;width:50px;height:28px;'>",
                `<span style='position:absolute;top:0;left:0;right:0;bottom:0;background-color:${bgCol};border-radius:34px;box-shadow:inset 0 2px 4px rgba(0,0,0,0.1);'>`,
                `<div style='position:absolute;height:24px;width:24px;left:2px;bottom:2px;background-color:white;border-radius:50%;box-shadow:0 3px 8px rgba(0,0,0,0.15);transform:${thumbTrans};'></div>`,
                "</span>",
                "</div>"
            ].join(""),
        };
    }

    constructor() {
        super();
        this.theme = 'ios';
    }
}
