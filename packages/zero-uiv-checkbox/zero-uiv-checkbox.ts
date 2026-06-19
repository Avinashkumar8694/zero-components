import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from 'zero-annotation';
import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
const getThemeManager = () => (window as any).zeroThemeManager;

export const studioTemplate: ZeroStudioTemplate = {
    kind: 'generic',
    templateHtml: [
        "<div style='display:flex;align-items:center;gap:12px;padding:8px;border-radius:8px;'>",
        "<div style='width:20px;height:20px;border-radius:6px;border:2px solid var(--uiv-primary-color,#6366f1);background:rgba(99,102,241,0.1);display:flex;align-items:center;justify-content:center;'>",
        "<span style='color:var(--uiv-primary-color,#6366f1);font-size:0.75rem;'>✓</span>",
        "</div>",
        "<span style='font-size:0.85rem;color:var(--uiv-text-color,#1e293b);font-weight:500;'>{{display:label}}</span>",
        "</div>"
    ].join(""),
    labelProp: 'label',
    badges: ['Checkbox', 'Uiverse'],
};

function escapeStudio(value: string): string {
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

@RendererComponent({
    name: 'zero-uiv-checkbox',
    version: '1.0.0',
    title: 'Unified Checkbox',
    elementSelector: 'zero-uiv-checkbox',
    group: 'Uiverse Checkboxes',
    iconName: 'checkbox-icon.png',
})
@applyGlobalStyles()
export class ZeroUivCheckbox extends LitElement {
    static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
        if (!config) return studioTemplate;
        const labelDisplay = escapeStudio(config.studio.display.label || 'Checkbox');
        const accentCol = (config.props?.accentColor ?? config.studio.props?.accentColor) || 'var(--uiv-primary-color,#6366f1)';
        return {
            ...studioTemplate,
            templateHtml: [
                "<div style='display:flex;align-items:center;gap:12px;padding:8px;border-radius:8px;'>",
                `<div style='width:20px;height:20px;border-radius:6px;border:2px solid ${accentCol};background:rgba(99,102,241,0.1);display:flex;align-items:center;justify-content:center;'>`,
                `<span style='color:${accentCol};font-size:0.75rem;'>✓</span>`,
                "</div>",
                `<span style='font-size:0.85rem;color:var(--uiv-text-color,#1e293b);font-weight:500;'>${labelDisplay}</span>`,
                "</div>"
            ].join(""),
        };
    }

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.DROPDOWN,
        displayLabel: 'Theme',
        fieldMappings: 'theme',
        optionItems: [
            { label: 'Modern', value: 'modern' },
            { label: 'Neon', value: 'neon' },
            { label: 'Cyber', value: 'cyber' },
            { label: 'Glass', value: 'glass' },
            { label: 'Retro', value: 'retro' },
            { label: 'Heart', value: 'heart' },
            { label: 'Tick', value: 'tick' }
        ]
    })
    theme = 'modern';

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Label',
        fieldMappings: 'label',
    })
    label = 'Checkbox';

    @property({ type: Boolean })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.CHECKBOX,
        displayLabel: 'Checked',
        fieldMappings: 'checked',
    })
    checked = false;

    @property({ type: Boolean })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.CHECKBOX,
        displayLabel: 'Disabled',
        fieldMappings: 'disabled',
    })
    disabled = false;

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.COLOR_PICKER,
        displayLabel: 'Accent Color Overlay',
        fieldMappings: 'accentColor',
    })
    accentColor = '';

    // Output Events
    @RendererAttribute({
        attributeType: AttributeType.EVENT,
        eventTrigger: 'change',
        displayLabel: 'On Change'
    })
    onChangeEvent = 'change';

    static styles = css`
        :host {
            display: inline-block;
            cursor: pointer;
            --chk-p: var(--uiv-primary-color, #6366f1);
            --chk-bg: var(--uiv-surface-color, #ffffff);
            --chk-border: var(--uiv-border-color, #e2e8f0);
            --chk-t: var(--uiv-text-color, inherit);
            --chk-glow: var(--uiv-border-glow, 0 0 10px rgba(99, 102, 241, 0.2));
            --chk-intensity: var(--uiv-glow-intensity, 1);
        }

        .container {
            display: flex;
            align-items: center;
            cursor: pointer;
            user-select: none;
            font-family: inherit;
        }

        input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
        }

        .label-text {
            margin-left: 10px;
            font-size: 1rem;
            color: var(--uiv-text-color, inherit);
        }

        /* Theme-aware structural overrides */
        .uiv-checkbox-box {
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            position: relative;
            background: var(--chk-bg);
            border: 2px solid var(--chk-border);
        }

        input:checked ~ .uiv-checkbox-box {
            border-color: var(--chk-p);
            box-shadow: var(--chk-glow);
            transform: scale(1.05);
        }

        input:checked ~ .uiv-checkbox-box::after {
            display: block;
            box-shadow: 0 0 calc(10px * var(--chk-intensity)) var(--chk-p);
        }
    `;

    handleChange(event: Event) {
        if (this.disabled) return;
        const target = event.target as HTMLInputElement;
        this.checked = target.checked;
        this.dispatchEvent(new CustomEvent('change', {
            detail: { checked: this.checked },
            bubbles: true,
            composed: true
        }));
    }

    connectedCallback() {
        super.connectedCallback();
        getThemeManager()?.addEventListener('theme-changed', () => this.requestUpdate());
    }

    render() {
        const themeModule = getThemeManager()?.getActiveTheme('zero-uiv-themes');
        const activeTheme = this.theme || themeModule?.id || 'modern';

        return html`
            <style>
                ${themeModule ? themeModule.getGlobalStyles() : ''}
                ${themeModule ? themeModule.getComponentStyles('checkbox') : ''}
                :host {
                    ${this.accentColor ? `--uiv-checkbox-accent: ${this.accentColor};` : ''}
                }
            </style>
            <label class="container uiv-${themeModule?.id}-theme ${activeTheme}">
                <input 
                    type="radio" 
                    class="uiv-${themeModule?.id}-scan"
                    .checked="${this.checked}" 
                    ?disabled="${this.disabled}" 
                    @change="${this.handleChange}"
                >
                <div class="uiv-checkbox-box uiv-${themeModule?.id}-card">
                    ${this.renderTemplate(activeTheme)}
                </div>
                <span class="label-text uiv-${themeModule?.id}-text">${this.label}</span>
            </label>
        `;
    }

    private renderTemplate(activeTheme: string): TemplateResult {
        switch (activeTheme) {
            case 'heart':
                return html`
                    <svg viewBox="0 0 24 24" class="heart-svg" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                `;
            case 'tick':
                return html`<div class="checkmark"></div>`;
            case 'retro':
                return html`<div class="box"></div>`;
            case 'modern':
                return html`<div class="box"></div>`;
            case 'neon':
            default:
                return html`<div class="circle"></div>`;
        }
    }
}
