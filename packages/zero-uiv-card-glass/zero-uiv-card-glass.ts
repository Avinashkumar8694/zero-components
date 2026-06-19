import { RendererComponent, applyGlobalStyles } from 'zero-annotation';
import { ZeroUivCard } from '../zero-uiv-card/zero-uiv-card';
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from 'zero-annotation';

export const glassTemplate: ZeroStudioTemplate = {
    kind: 'generic',
    slots: [
        { id: 'header', label: 'Card Header', dropzone: true, accepts: [] },
        { id: 'default', label: 'Card Body', dropzone: true, accepts: [] },
        { id: 'footer', label: 'Card Footer', dropzone: true, accepts: [] }
    ],
    templateHtml: [
        "<div style='width:320px;min-height:220px;padding:32px;border-radius:16px;display:flex;flex-direction:column;gap:20px;background:rgba(255, 255, 255, 0.05);backdrop-filter:blur(15px);-webkit-backdrop-filter:blur(15px);border:1px solid rgba(255, 255, 255, 0.1);box-shadow:0 8px 32px 0 rgba(0, 0, 0, 0.3);box-sizing:border-box;'>",
        "<zero-studio-slot name='header'></zero-studio-slot>",
        "<h3 style='font-size:1.5rem;font-weight:800;margin:0;color:var(--uiv-primary-color,#6366f1);letter-spacing:-0.02em;'>{{display:title}}</h3>",
        "<div style='font-size:1rem;line-height:1.7;color:var(--uiv-text-color,#1e293b);opacity:0.9;'>",
        "{{display:content}}",
        "<zero-studio-slot name='default'></zero-studio-slot>",
        "</div>",
        "<zero-studio-slot name='footer'></zero-studio-slot>",
        "</div>"
    ].join(""),
    labelProp: 'label',
    badges: ['Glass', 'Card'],
};

@RendererComponent({
    name: 'zero-uiv-card-glass',
    version: '1.0.0',
    title: 'Glassmorphism Card (Legacy)',
    elementSelector: 'zero-uiv-card-glass',
    group: 'Uiverse Cards',
    iconName: 'card-icon.png',
})
@applyGlobalStyles()
export class ZeroUivCardGlass extends ZeroUivCard {
    static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
        // Card has no special properties in display currently that it binds, returning static template is fine
        return glassTemplate;
    }

    constructor() {
        super();
        this.theme = 'glass';
    }
}
