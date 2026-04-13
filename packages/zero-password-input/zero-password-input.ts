// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from 'zero-annotation';
import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

const getThemeManager = () => (window as any).zeroThemeManager;

export const studioTemplate: ZeroStudioTemplate = {
    kind: 'generic',
    templateHtml: [
        "<div style='display:grid;gap:8px;padding:12px;border-radius:14px;border:1px solid rgba(148,163,184,0.18);background:rgba(255,255,255,0.96);'>",
        "<label style='font-size:0.78rem;font-weight:700;color:#334155;'>{{display:label}}</label>",
        "<div style='display:flex;align-items:center;border:1px solid rgba(148,163,184,0.28);border-radius:10px;padding:11px 14px;background:#fff;color:#94a3b8;'>{{display:placeholder}}<span style='margin-left:auto;color:#64748b;'>•••</span></div>",
        "<div style='display:flex;gap:8px;flex-wrap:wrap;'>",
        "<span style='padding:3px 8px;border-radius:999px;background:rgba(219,234,254,0.85);color:#1d4ed8;font-size:0.72rem;font-weight:700;'>toggle: {{display:showToggle}}</span>",
        "<span style='padding:3px 8px;border-radius:999px;background:rgba(255,247,237,0.95);color:#9a3412;font-size:0.72rem;font-weight:700;'>strength: {{display:showStrengthMeter}}</span>",
        "</div>",
        "</div>"
    ].join(""),
    labelProp: 'label',
    badges: ['Input', 'Password'],
};

/**
 * A configurable password input component with show/hide functionality.
 * 
 * @export
 * @class ZeroPasswordInput
 * @extends {LitElement}
 */
@RendererComponent({
    name: 'zero-password-input',
    version: '1.0.0',
    title: 'Password Input',
    elementSelector: 'zero-password-input',
    group: 'Form Controls',
    iconName: 'password-input-icon.png',
})
@applyGlobalStyles()
export class ZeroPasswordInput extends LitElement {
    static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
        if (!config) {
            return studioTemplate;
        }

        const label = escapeStudio(config.studio.display.label || 'Password');
        const placeholder = escapeStudio(config.studio.display.placeholder || 'Enter password');
        const showToggle = escapeStudio(config.studio.display.showToggle || 'true');
        const showStrength = escapeStudio(config.studio.display.showStrengthMeter || 'false');

        return {
            ...studioTemplate,
            templateHtml: [
                "<div style='display:grid;gap:8px;padding:12px;border-radius:14px;border:1px solid rgba(148,163,184,0.18);background:rgba(255,255,255,0.96);'>",
                `<label style='font-size:0.78rem;font-weight:700;color:#334155;'>${label}</label>`,
                `<div style='display:flex;align-items:center;border:1px solid rgba(148,163,184,0.28);border-radius:10px;padding:11px 14px;background:#fff;color:#94a3b8;'>${placeholder}<span style='margin-left:auto;color:#64748b;'>•••</span></div>`,
                "<div style='display:flex;gap:8px;flex-wrap:wrap;'>",
                `<span style='padding:3px 8px;border-radius:999px;background:rgba(219,234,254,0.85);color:#1d4ed8;font-size:0.72rem;font-weight:700;'>toggle: ${showToggle}</span>`,
                `<span style='padding:3px 8px;border-radius:999px;background:rgba(255,247,237,0.95);color:#9a3412;font-size:0.72rem;font-weight:700;'>strength: ${showStrength}</span>`,
                "</div>",
                "</div>"
            ].join(""),
        };
    }

    static styles = css`
        :host {
            display: block;
            width: 100%;
        }

        .form-field {
            margin-bottom: var(--spacing-lg, 20px);
        }

        .form-field label {
            display: block;
            margin-bottom: var(--spacing-xs, 6px);
            font-size: var(--font-size-base, 14px);
            color: var(--text-primary, #333);
            font-weight: 500;
        }

        .password-container {
            position: relative;
            display: flex;
            align-items: center;
        }

        input.mat-mdc-input-element {
            width: 100%;
            padding: var(--spacing-sm, 8px) var(--spacing-md, 12px);
            padding-right: 40px;
            border: 1px solid var(--border-color, #ddd);
            border-radius: var(--border-radius-sm, 4px);            font-size: var(--font-size-base, 14px);
            background-color: var(--background-primary, #fff);
            color: var(--text-primary, #333);
            transition: border-color 0.2s, box-shadow 0.2s;
            min-height: var(--input-height, 36px);
            box-sizing: border-box;
            font-family: var(--font-family, 'Roboto', sans-serif);
        }

        input.mat-mdc-input-element::placeholder {
            color: var(--text-secondary, #666);
        }        input.mat-mdc-input-element:hover {
            border-color: var(--primary-light, #6c63ff);
            background: var(--primary-background-hover, rgba(108, 99, 255, 0.02));
        }

        input.mat-mdc-input-element:focus {
            outline: none;
            background: var(--background-primary, #fff);
            border-color: var(--primary-color, #6c63ff);
            box-shadow: 0 0 0 2px var(--primary-light, rgba(108, 99, 255, 0.2));
        }

        input.mat-mdc-input-element:disabled {
            background-color: var(--background-disabled, #f5f5f5);
            color: var(--text-disabled, #999);
            cursor: not-allowed;
        }

        .toggle-button {
            position: absolute;
            right: 8px;
            background: none;
            border: none;
            cursor: pointer;            color: var(--text-secondary, #666);
            font-size: var(--icon-size-sm, 16px);
            padding: var(--spacing-xs, 4px);
            border-radius: var(--border-radius-xs, 2px);
            transition: color 0.2s;
        }

        .toggle-button:hover {
            color: var(--primary-color, #6c63ff);
        }

        .toggle-button:disabled {
            cursor: not-allowed;
            color: var(--text-disabled, #ccc);
        }

        .error-message {
            color: var(--error-color, #f44336);
            font-size: var(--font-size-sm, 12px);
            margin-top: var(--spacing-xs, 4px);
            display: none;
        }

        .error-message.show {
            display: block;
        }

        input.mat-mdc-input-element.error {
            border-color: var(--error-color, #f44336);
        }

        input.mat-mdc-input-element.error:focus {
            box-shadow: 0 0 0 2px var(--error-light, rgba(244, 67, 54, 0.2));
        }        .strength-meter {
            margin-top: var(--spacing-xs, 4px);
            height: 4px;
            background-color: var(--background-secondary, #f5f5f5);
            border-radius: var(--border-radius-xs, 2px);
            overflow: hidden;
        }

        .strength-bar {
            height: 100%;
            transition: width 0.3s, background-color 0.3s;
            border-radius: var(--border-radius-xs, 2px);
        }

        .strength-weak { background-color: var(--error-color, #f44336); }
        .strength-medium { background-color: var(--warning-color, #ff9800); }
        .strength-strong { background-color: var(--success-color, #4caf50); }
    `;

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.PASSWORD_INPUT,
        displayLabel: 'Value',
        fieldMappings: 'value',
    })
    value = '';

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Label',
        placeholderText: 'Enter label text',
        fieldMappings: 'label',
    })
    label = 'Password';

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Placeholder',
        placeholderText: 'Enter placeholder text',
        fieldMappings: 'placeholder',
    })
    placeholder = 'Enter password';

    @property({ type: Boolean })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.CHECKBOX,
        displayLabel: 'Required',
        fieldMappings: 'required',
    })
    required = false;

    @property({ type: Boolean })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.CHECKBOX,
        displayLabel: 'Disabled',
        fieldMappings: 'disabled',
    })
    disabled = false;

    @property({ type: Boolean })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.CHECKBOX,
        displayLabel: 'Show Toggle Button',
        fieldMappings: 'showToggle',
    })
    showToggle = true;

    @property({ type: Boolean })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.CHECKBOX,
        displayLabel: 'Show Strength Meter',
        fieldMappings: 'showStrengthMeter',
    })
    showStrengthMeter = false;

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Error Message',
        placeholderText: 'Enter error message',
        fieldMappings: 'errorMessage',
    })
    errorMessage = '';

    @property({ type: Boolean })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.CHECKBOX,
        displayLabel: 'Show Error',
        fieldMappings: 'showError',
    })
    showError = false;

    @property({ type: Boolean })
    private showPassword = false;

    private getPasswordStrength(): { strength: string; width: number } {
        const password = this.value;
        let score = 0;

        if (password.length >= 8) score++;
        if (/[a-z]/.test(password)) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;

        if (score <= 2) return { strength: 'weak', width: 33 };
        if (score <= 4) return { strength: 'medium', width: 66 };
        return { strength: 'strong', width: 100 };
    }

    private togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
    }

    @RendererAttribute({
        attributeType: AttributeType.EVENT,
        displayLabel: 'On Input',
        eventTrigger: 'input',
    })
    handleInput(event: Event) {
        const target = event.target as HTMLInputElement;
        this.value = target.value;
        this.dispatchEvent(new CustomEvent('input', {
            detail: { value: this.value },
            bubbles: true,
            composed: true,
        }));
    }

    @RendererAttribute({
        attributeType: AttributeType.EVENT,
        displayLabel: 'On Change',
        eventTrigger: 'change',
    })
    handleChange(event: Event) {
        const target = event.target as HTMLInputElement;
        this.value = target.value;
        this.dispatchEvent(new CustomEvent('change', {
            detail: { value: this.value },
            bubbles: true,
            composed: true,
        }));
    }

    connectedCallback() {
        super.connectedCallback();
        getThemeManager()?.addEventListener('theme-changed', () => this.requestUpdate());
    }

    render() {
        const themeModule = getThemeManager()?.getActiveTheme('zero-standard-themes');
        const strength = this.getPasswordStrength();
        
        return html`
            <style>
                ${themeModule ? themeModule.getGlobalStyles() : ''}
                ${themeModule ? themeModule.getComponentStyles('input') : ''}
            </style>
            <div class="form-field uiv-${themeModule?.id}-theme">
                <label for="password-input" class="uiv-${themeModule?.id}-text">${this.label}</label>
                <div class="password-container">
                    <input 
                        id="password-input"
                        type="${this.showPassword ? 'text' : 'password'}" 
                        class="mat-mdc-input-element uiv-${themeModule?.id}-card uiv-${themeModule?.id}-scan ${this.showError ? 'error' : ''}"
                        .value="${this.value}" 
                        placeholder="${this.placeholder}"
                        ?required="${this.required}"
                        ?disabled="${this.disabled}"
                        @input="${this.handleInput}"
                        @change="${this.handleChange}"
                    />
                    ${this.showToggle ? html`
                        <button 
                            type="button"
                            class="toggle-button uiv-${themeModule?.id}-text"
                            ?disabled="${this.disabled}"
                            @click="${this.togglePasswordVisibility}"
                        >
                            ${this.showPassword ? '🙈' : '👁️'}
                        </button>
                    ` : ''}
                </div>
                ${this.showStrengthMeter && this.value ? html`
                    <div class="strength-meter">
                        <div class="strength-bar strength-${strength.strength}" 
                             style="width: ${strength.width}%; background-color: var(--uiv-${strength.strength === 'weak' ? 'error' : strength.strength === 'medium' ? 'warning' : 'primary'}-color)"></div>
                    </div>
                ` : ''}
                <div class="error-message uiv-${themeModule?.id}-text ${this.showError ? 'show' : ''}" style="color: var(--uiv-error-color, #f44336)">
                    ${this.errorMessage}
                </div>
            </div>
        `;
    }
}

function escapeStudio(value: string): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}
