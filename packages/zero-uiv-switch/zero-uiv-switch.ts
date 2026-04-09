import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
const getThemeManager = () => (window as any).zeroThemeManager;

@RendererComponent({
    name: 'zero-uiv-switch',
    version: '1.0.0',
    title: 'Unified Switch',
    elementSelector: 'zero-uiv-switch',
    group: 'Uiverse Switch',
    iconName: 'switch-icon.png',
})
@applyGlobalStyles()
export class ZeroUivSwitch extends LitElement {
    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.DROPDOWN,
        displayLabel: 'Theme',
        fieldMappings: 'theme',
        optionItems: [
            { label: 'IOS', value: 'ios' },
            { label: 'Modern', value: 'modern' }
        ]
    })
    theme = 'ios';

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
        displayLabel: 'Accent Color',
        fieldMappings: 'accentColor',
    })
    accentColor = '';

    static styles = css`
        :host {
            display: inline-block;
            --sw-p: var(--uiv-primary-color, #6366f1);
            --sw-s: var(--uiv-secondary-color, #8b5cf6);
            --sw-bg: var(--uiv-surface-color, #ffffff);
            --sw-border: var(--uiv-border-color, #e2e8f0);
            --sw-glow: var(--uiv-border-glow, 0 0 10px rgba(99, 102, 241, 0.2));
            --sw-intensity: var(--uiv-glow-intensity, 1);
        }

        .switch {
            position: relative;
            display: inline-block;
            width: 50px;
            height: 28px;
        }

        .switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: var(--sw-border);
            transition: .4s cubic-bezier(0.16, 1, 0.3, 1);
            border-radius: 34px;
            box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
        }

        .slider:before {
            position: absolute;
            content: "";
            height: 20px;
            width: 20px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            transition: .4s;
            border-radius: 50%;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }

        input:checked + .slider {
            background-color: var(--sw-p);
            box-shadow: var(--sw-glow);
        }

        input:checked + .slider:before {
            transform: translateX(22px);
        }
    `;

    handleChange(event: Event) {
        const target = event.target as HTMLInputElement;
        this.checked = target.checked;
        this.dispatchEvent(new CustomEvent('change', {
            detail: { checked: this.checked },
            bubbles: true,
            composed: true
        }));
    }

    render() {
        const themeModule = getThemeManager()?.getActiveTheme();
        if (!themeModule) return html`<label class="switch"><input type="checkbox" .checked="${this.checked}"><span class="slider"></span></label>`;
        return html`
            <style>
                ${themeModule.getGlobalStyles()}
                ${themeModule.getComponentStyles('switch')}
                :host {
                    --uiv-switch-accent: ${this.accentColor || (this.theme === 'ios' ? '#4cd964' : '#6c63ff')};
                }
            </style>
            <label class="switch uiv-${themeModule?.id}-theme">
                <input type="checkbox" .checked="${this.checked}" @change="${this.handleChange}">
                <span class="slider uiv-${themeModule?.id}-card"></span>
            </label>
        `;
    }
}
