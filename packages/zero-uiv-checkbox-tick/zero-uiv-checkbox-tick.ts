import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from 'zero-annotation';
import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';

const getThemeManager = () => (window as any).zeroThemeManager;

export const tickTemplate: ZeroStudioTemplate = {
    kind: 'generic',
    templateHtml: [
        "<div style='display:flex;align-items:center;gap:12px;padding:8px;border-radius:8px;'>",
        "<div style='width:24px;height:24px;border-radius:50%;background:#4ade80;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 4px rgba(74,222,128,0.3);'>",
        "<span style='color:white;font-size:1rem;font-weight:900;'>✓</span>",
        "</div>",
        "<span style='font-size:0.85rem;color:var(--uiv-text-color,#1e293b);font-weight:500;'>{{display:label}}</span>",
        "</div>"
    ].join(""),
    labelProp: 'label',
    badges: ['Tick', 'Valid'],
};

function escapeStudio(value: string): string {
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

@RendererComponent({
    name: 'zero-uiv-checkbox-tick',
    version: '1.0.0',
    title: 'Modern Tick Checkbox',
    elementSelector: 'zero-uiv-checkbox-tick',
    group: 'Uiverse Checkboxes',
    iconName: 'checkbox-icon.png',
})
@applyGlobalStyles()
export class ZeroUivCheckboxTick extends LitElement {
    static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
        if (!config) return tickTemplate;
        const labelDisplay = escapeStudio(config.studio.display.label || 'Tick Checkbox');
        const checked = !!(config.props?.checked ?? config.studio.props?.checked);
        const primary = 'var(--uiv-primary-color, #2ecc71)';
        const text = 'var(--uiv-text-color, #333)';

        return {
            ...tickTemplate,
            templateHtml: [
                "<div style='display:flex;align-items:center;gap:12px;padding:8px;border-radius:8px;'>",
                `<div style='width:20px;height:20px;border:2px solid ${primary};border-radius:4px;display:flex;align-items:center;justify-content:center;background:${checked ? primary : 'transparent'};transition:all 0.2s;'>`,
                checked ? "<div style='width:5px;height:10px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg);'></div>" : "",
                "</div>",
                `<span style='font-size:1rem;color:${text};'>${labelDisplay}</span>`,
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
    label = 'Standard Check';

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
            --chk-p: var(--uiv-primary-color, #2ecc71);
            --chk-bg: var(--uiv-bg-color, #fff);
            --chk-t: var(--uiv-text-color, #333);
        }

        .checkbox-wrapper {
            display: flex;
            align-items: center;
            cursor: pointer;
            user-select: none;
        }

        .tick-box {
            width: 20px;
            height: 20px;
            border: 2px solid var(--chk-p);
            border-radius: 4px;
            margin-right: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s;
        }

        .checked .tick-box {
            background: var(--chk-p);
        }

        .tick {
            width: 5px;
            height: 10px;
            border: solid #fff;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
            display: none;
        }

        .checked .tick {
            display: block;
        }

        .label {
            color: var(--chk-t);
            font-size: 1rem;
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
            <div class="checkbox-wrapper ${this.checked ? 'checked' : ''}" @click="${this.handleToggle}">
                <div class="tick-box">
                    <div class="tick"></div>
                </div>
                ${this.label ? html`<span class="label">${this.label}</span>` : ''}
            </div>
        `;
    }
}
