import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from 'zero-annotation';
import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
const getThemeManager = () => (window as any).zeroThemeManager;

export const studioTemplate: ZeroStudioTemplate = {
    kind: 'generic',
    templateHtml: [
        "<div style='display:flex;align-items:center;gap:12px;padding:8px;border-radius:8px;'>",
        "<div style='width:20px;height:20px;border-radius:50%;border:2px solid var(--uiv-primary-color,#6366f1);display:flex;align-items:center;justify-content:center;'>",
        "<div style='width:10px;height:10px;border-radius:50%;background:var(--uiv-primary-color,#6366f1);'></div>",
        "</div>",
        "<span style='font-size:0.85rem;color:var(--uiv-text-color,#1e293b);font-weight:500;'>{{display:label}}</span>",
        "</div>"
    ].join(""),
    labelProp: 'label',
    badges: ['Radio', 'Uiverse'],
};

function escapeStudio(value: string): string {
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

@RendererComponent({
    name: 'zero-uiv-radio',
    version: '1.0.0',
    title: 'Unified Radio Button',
    elementSelector: 'zero-uiv-radio',
    group: 'Uiverse Radio',
    iconName: 'radio-icon.png',
})
@applyGlobalStyles()
export class ZeroUivRadio extends LitElement {
    static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
        if (!config) return studioTemplate;
        const labelDisplay = escapeStudio(config.studio.display.label || 'Radio Option');
        const accentCol = (config.props?.accentColor ?? config.studio.props?.accentColor) || 'var(--uiv-primary-color,#6366f1)';
        return {
            ...studioTemplate,
            templateHtml: [
                "<div style='display:flex;align-items:center;gap:12px;padding:8px;border-radius:8px;'>",
                `<div style='width:20px;height:20px;border-radius:50%;border:2px solid ${accentCol};display:flex;align-items:center;justify-content:center;'>`,
                `<div style='width:10px;height:10px;border-radius:50%;background:${accentCol};'></div>`,
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
            { label: 'Neon', value: 'neon' },
            { label: 'Modern', value: 'modern' },
            { label: 'Cyber', value: 'cyber' },
            { label: 'Glass', value: 'glass' },
            { label: 'Retro', value: 'retro' }
        ]
    })
    theme = 'neon';

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Label',
        fieldMappings: 'label',
    })
    label = 'Option';

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Value',
        fieldMappings: 'value',
    })
    value = '';

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Group',
        fieldMappings: 'name',
    })
    name = 'radio-group';

    @property({ type: Boolean })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.CHECKBOX,
        displayLabel: 'Checked',
        fieldMappings: 'checked',
    })
    checked = false;

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
            --radio-accent: var(--uiv-radio-accent, var(--uiv-primary-color, #ff00c1));
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
        }

        .radio-btn {
            width: 22px;
            height: 22px;
            border: 2px solid var(--radio-accent);
            background: var(--uiv-surface-color, #fff);
            border-radius: 50%;
            position: relative;
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            box-shadow: var(--uiv-shadow-depth, inset 0 0 3px rgba(0,0,0,0.1));
        }

        .radio-btn::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0);
            width: 10px;
            height: 10px;
            background: var(--radio-accent);
            border-radius: 50%;
            transition: all 0.3s cubic-bezier(0.12, 0.4, 0.29, 1.46);
            box-shadow: 0 0 calc(10px * var(--uiv-glow-intensity, 1)) var(--radio-accent);
        }

        input:checked ~ .radio-btn {
            border-color: var(--radio-accent);
            box-shadow: var(--uiv-border-glow, 0 0 15px var(--radio-accent));
            transform: scale(1.05);
        }

        input:checked ~ .radio-btn::after {
            transform: translate(-50%, -50%) scale(1);
        }

        .label-text {
            margin-left: 12px;
            font-size: 1rem;
            color: var(--uiv-text-color, inherit);
            transition: color 0.3s ease;
        }
    `;

    handleChange(event: Event) {
        const target = event.target as HTMLInputElement;
        this.checked = target.checked;
        this.dispatchEvent(new CustomEvent('change', {
            detail: { checked: this.checked, value: this.value },
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
        return html`
            <style>
                ${themeModule ? themeModule.getGlobalStyles() : ''}
                ${themeModule ? themeModule.getComponentStyles('radio') : ''}
                :host {
                    ${this.accentColor ? `--uiv-radio-accent: ${this.accentColor};` : ''}
                }
            </style>
            <label class="container uiv-${themeModule?.id}-theme" role="radio" aria-checked="${this.checked}" aria-label="${this.label}" tabindex="0">
                <input 
                    type="radio" 
                    .name="${this.name}"
                    .value="${this.value}"
                    .checked="${this.checked}" 
                    @change="${this.handleChange}"
                    aria-hidden="true"
                >
                <div class="radio-btn uiv-${themeModule?.id}-card"></div>
                <span class="label-text uiv-${themeModule?.id}-text">${this.label}</span>
            </label>
        `;
    }
}
