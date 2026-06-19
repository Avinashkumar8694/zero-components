import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType, ZeroStudioTemplate, ZeroStudioTemplateContext } from 'zero-annotation';
import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';

const getThemeManager = () => (window as any).zeroThemeManager;

export const floatTemplate: ZeroStudioTemplate = {
    kind: 'generic',
    templateHtml: [
        "<div style='position:relative;width:100%;padding-top:16px;'>",
        "<div style='position:absolute;top:0;left:0;font-size:0.65rem;color:var(--uiv-primary-color,#6366f1);font-weight:600;'>{{display:label}}</div>",
        "<div style='padding:8px 0;border-bottom:2px solid var(--uiv-primary-color,#6366f1);font-size:0.85rem;color:var(--uiv-text-color,#1e293b);'>{{display:placeholder}}</div>",
        "</div>"
    ].join(""),
    labelProp: 'label',
    badges: ['Float', 'Material'],
};

function escapeStudio(value: string): string {
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

@RendererComponent({
    name: 'zero-uiv-input-float',
    version: '1.0.0',
    title: 'Floating Label Input',
    elementSelector: 'zero-uiv-input-float',
    group: 'Uiverse Inputs',
    iconName: 'input-icon.png',
})
@applyGlobalStyles()
export class ZeroUivInputFloat extends LitElement {
    static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
        if (!config) return floatTemplate;
        const labelDisplay = escapeStudio(config.studio.display.label || 'Float Label');
        const hasValue = !!(config.props?.value ?? config.studio.props?.value);
        const primary = 'var(--uiv-primary-color, #6366f1)';
        const text = 'var(--uiv-text-color, #333)';
        const border = 'var(--uiv-border-color, rgba(128,128,128,0.2))';
        const muted = 'var(--uiv-text-muted, #999)';

        return {
            ...floatTemplate,
            templateHtml: [
                "<div style='position:relative;padding-top:20px;width:100%;'>",
                `<div style='width:100%;padding:10px 0;font-size:1rem;color:${text};border-bottom:2px solid ${hasValue ? primary : border};'>&nbsp;</div>`,
                `<label style='position:absolute;left:0;transition:all 0.3s;pointer-events:none;color:${hasValue ? primary : muted}; top:${hasValue ? '0' : '25px'}; font-size:${hasValue ? '0.75rem' : '1rem'};'>${labelDisplay}</label>`,
                `<span style='position:absolute;bottom:0;left:0;right:0;height:2px;background:${primary};width:${hasValue ? '100%' : '0'};transition:0.4s; z-index:1;'></span>`,
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
    label = 'Floating Label';

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Value',
        fieldMappings: 'value',
    })
    value = '';

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
        eventTrigger: 'input',
        displayLabel: 'On Input'
    })
    onInputEvent = 'input';

    static styles = css`
        :host {
            display: block;
            margin-bottom: 20px;
            --inp-p: var(--uiv-primary-color, var(--uiv-status-primary));
            --inp-t: var(--uiv-text-color, var(--uiv-text-primary-themed));
            --inp-b: var(--uiv-border-color, var(--uiv-app-border-color, rgba(128,128,128,0.2)));
        }

        .floating-group {
            position: relative;
            padding-top: 20px;
        }

        input {
            width: 100%;
            padding: 10px 0;
            font-size: 1rem;
            color: var(--inp-t);
            border: none;
            border-bottom: 2px solid var(--inp-b);
            outline: none;
            background: transparent;
            transition: border-color 0.3s;
        }

        input:focus {
            border-bottom-color: var(--inp-p);
        }

        label {
            position: absolute;
            top: 25px;
            left: 0;
            color: var(--uiv-text-muted, #999);
            pointer-events: none;
            transition: all 0.3s;
        }

        input:focus ~ label,
        input:not(:placeholder-shown) ~ label {
            top: 0;
            font-size: 0.75rem;
            color: var(--inp-p);
        }

        .bar {
            position: relative;
            display: block;
            width: 100%;
        }

        .bar:before, .bar:after {
            content: '';
            height: 2px;
            width: 0;
            bottom: 0;
            position: absolute;
            background: var(--inp-p);
            transition: 0.4s ease all;
        }

        .bar:before { left: 50%; }
        .bar:after { right: 50%; }

        input:focus ~ .bar:before,
        input:focus ~ .bar:after {
            width: 50%;
        }
    `;

    handleInput(event: Event) {
        if (this.disabled) return;
        const target = event.target as HTMLInputElement;
        this.value = target.value;
        this.dispatchEvent(new CustomEvent('input', {
            detail: { value: this.value },
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
            <div class="floating-group">
                <input 
                    type="text" 
                    .value="${this.value}" 
                    placeholder=" "
                    ?disabled="${this.disabled}"
                    @input="${this.handleInput}"
                >
                <label>${this.label}</label>
                <span class="bar"></span>
            </div>
        `;
    }
}
