import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from 'zero-annotation';
import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';

const getThemeManager = () => (window as any).zeroThemeManager;

export const glowTemplate: ZeroStudioTemplate = {
    kind: 'generic',
    templateHtml: [
        "<div style='display:flex;align-items:center;gap:12px;padding:8px;border-radius:8px;'>",
        "<div style='width:20px;height:20px;border-radius:6px;border:2px solid #00d2ff;box-shadow:0 0 10px rgba(0,210,255,0.7);background:rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;'>",
        "<span style='color:#00d2ff;font-size:0.75rem;text-shadow:0 0 5px #00d2ff;'>✓</span>",
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
    name: 'zero-uiv-checkbox-glow',
    version: '1.0.0',
    title: 'Radiant Glow Checkbox',
    elementSelector: 'zero-uiv-checkbox-glow',
    group: 'Uiverse Checkboxes',
    iconName: 'checkbox-icon.png',
})
@applyGlobalStyles()
export class ZeroUivCheckboxGlow extends LitElement {
    static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
        if (!config) return glowTemplate;
        const labelDisplay = escapeStudio(config.studio.display.label || 'Glow Checkbox');
        const checked = !!(config.props?.checked ?? config.studio.props?.checked);
        const primary = 'var(--uiv-primary-color, #00d2ff)';
        const bg = 'var(--uiv-bg-color, #050801)';
        const text = 'var(--uiv-text-color, #fff)';

        return {
            ...glowTemplate,
            templateHtml: [
                "<div style='display:flex;align-items:center;gap:12px;padding:8px;border-radius:8px;'>",
                `<div style='position:relative;width:25px;height:25px;background:${bg};border:2px solid ${primary};border-radius:4px;box-shadow:0 0 5px ${primary}${checked ? ", 0 0 15px " + primary : ""};transition:0.5s;'>`,
                checked ? `<div style='position:absolute;left:8px;top:4px;width:5px;height:10px;border:solid ${primary};border-width:0 2px 2px 0;transform:rotate(45deg);filter:drop-shadow(0 0 5px ${primary});'></div>` : "",
                "</div>",
                `<span style='font-size:1rem;color:${text};text-transform:uppercase;letter-spacing:1px;'>${labelDisplay}</span>`,
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
    label = 'Glow Checkbox';

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
            --chk-p: var(--uiv-primary-color, #00d2ff);
            --chk-bg: var(--uiv-bg-color, #050801);
            --chk-t: var(--uiv-text-color, #fff);
        }

        .checkbox-wrapper {
            display: flex;
            align-items: center;
            cursor: pointer;
            user-select: none;
        }

        .checkbox-box {
            position: relative;
            width: 25px;
            height: 25px;
            background: var(--chk-bg);
            border: 2px solid var(--chk-p);
            border-radius: 4px;
            margin-right: 10px;
            transition: 0.5s;
            box-shadow: 0 0 5px var(--chk-p);
        }

        .checked .checkbox-box {
            box-shadow: 0 0 5px var(--chk-p),
                        0 0 15px var(--chk-p);
        }

        .checkbox-box::after {
            content: '';
            position: absolute;
            display: none;
            left: 8px;
            top: 4px;
            width: 5px;
            height: 10px;
            border: solid var(--chk-p);
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
            filter: drop-shadow(0 0 5px var(--chk-p));
        }

        .checked .checkbox-box::after {
            display: block;
        }

        .label {
            color: var(--chk-t);
            font-size: 1rem;
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
        this.checked = !this.checked;
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
            <div class="checkbox-wrapper ${this.checked ? 'checked' : ''} ${this.disabled ? 'disabled' : ''}" @click="${this.handleToggle}">
                <div class="checkbox-box"></div>
                ${this.label ? html`<span class="label">${this.label}</span>` : ''}
            </div>
        `;
    }
}
