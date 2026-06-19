import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from 'zero-annotation';
import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';

const getThemeManager = () => (window as any).zeroThemeManager;

export const glowTemplate: ZeroStudioTemplate = {
    kind: 'generic',
    templateHtml: [
        "<div style='display:flex;align-items:center;gap:12px;padding:8px;border-radius:8px;'>",
        "<div style='width:20px;height:20px;border-radius:50%;border:2px solid #00d2ff;box-shadow:0 0 10px rgba(0,210,255,0.7);background:rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;'>",
        "<div style='width:10px;height:10px;border-radius:50%;background:#00d2ff;box-shadow:0 0 8px #00d2ff;'></div>",
        "</div>",
        "<span style='font-size:0.85rem;color:var(--uiv-text-color,#1e293b);font-weight:500;'>{{display:label}}</span>",
        "</div>"
    ].join(""),
    labelProp: 'label',
    badges: ['Glow', 'Special'],
};

function escapeStudio(value: string): string {
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

@RendererComponent({
    name: 'zero-uiv-radio-glow',
    version: '1.0.0',
    title: 'Radiant Glow Radio',
    elementSelector: 'zero-uiv-radio-glow',
    group: 'Uiverse Radio',
    iconName: 'radio-icon.png',
})
@applyGlobalStyles()
export class ZeroUivRadioGlow extends LitElement {
    static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
        if (!config) return glowTemplate;
        const labelDisplay = escapeStudio(config.studio.display.label || 'Glow Radio');
        const checked = !!(config.props?.checked ?? config.studio.props?.checked);
        const primary = 'var(--uiv-primary-color, #6366f1)';
        const bg = 'var(--uiv-surface-color, #ffffff)';
        const text = 'var(--uiv-text-color, #1e293b)';
        const border = 'var(--uiv-border-color, #e2e8f0)';
        const glow = 'var(--uiv-border-glow, 0 0 10px rgba(99, 102, 241, 0.2))';

        return {
            ...glowTemplate,
            templateHtml: [
                "<div style='display:flex;align-items:center;gap:12px;padding:8px;border-radius:8px;'>",
                `<div style='position:relative;width:22px;height:22px;background:${bg};border:2px solid ${checked ? primary : border};border-radius:50%;transition:all 0.3s;${checked ? "box-shadow:" + glow + "; transform:scale(1.05);" : ""}'>`,
                checked ? `<div style='position:absolute;left:5px;top:5px;width:8px;height:8px;background:${primary};border-radius:50%;box-shadow:0 0 10px ${primary};'></div>` : "",
                "</div>",
                `<span style='font-size:0.95rem;color:${text};text-transform:uppercase;letter-spacing:1px;'>${labelDisplay}</span>`,
                "</div>"
            ].join(""),
        };
    }

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Label',
        fieldMappings: 'label',
    })
    label = 'Glow Radio';

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
            margin-right: 15px;
            --rad-p: var(--uiv-primary-color, #6366f1);
            --rad-s: var(--uiv-secondary-color, #8b5cf6);
            --rad-bg: var(--uiv-surface-color, #ffffff);
            --rad-t: var(--uiv-text-color, #1e293b);
            --rad-border: var(--uiv-border-color, #e2e8f0);
            --glow: var(--uiv-border-glow, 0 0 10px rgba(99, 102, 241, 0.2));
        }

        .radio-wrapper {
            display: flex;
            align-items: center;
            cursor: pointer;
            user-select: none;
        }

        .radio-circle {
            position: relative;
            width: 22px;
            height: 22px;
            background: var(--rad-bg);
            border: 2px solid var(--rad-border);
            border-radius: 50%;
            margin-right: 12px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);
        }

        .checked .radio-circle {
            border-color: var(--rad-p);
            box-shadow: var(--glow);
            transform: scale(1.05);
        }

        .radio-circle::after {
            content: '';
            position: absolute;
            display: none;
            left: 5px;
            top: 5px;
            width: 8px;
            height: 8px;
            background: var(--rad-p);
            border-radius: 50%;
            box-shadow: 0 0 10px var(--rad-p);
        }

        .checked .radio-circle::after {
            display: block;
        }

        .label {
            color: var(--rad-t);
            font-size: 0.95rem;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
    `;

    handleToggle() {
        if (this.disabled) return;
        this.checked = true;
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
        const themeModule = getThemeManager()?.getActiveTheme();
        
        return html`
            <style>
                ${themeModule ? themeModule.getGlobalStyles() : ''}
            </style>
            <div class="radio-wrapper uiv-${themeModule?.id}-theme ${this.checked ? 'checked' : ''} ${this.disabled ? 'disabled' : ''}" @click="${this.handleToggle}">
                <div class="radio-circle uiv-${themeModule?.id}-card"></div>
                ${this.label ? html`<span class="label uiv-${themeModule?.id}-text">${this.label}</span>` : ''}
            </div>
        `;
    }
}
