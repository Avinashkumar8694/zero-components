import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from 'zero-annotation';
import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
// No external theme imports for independence
const getThemeManager = () => (window as any).zeroThemeManager;

export const studioTemplate: ZeroStudioTemplate = {
    kind: 'button',
    templateHtml: [
        "<div style='display:inline-flex;'>",
        "<button style='position:relative;padding:12px 24px;border-radius:8px;background:var(--uiv-primary-color,#6366f1);color:#fff;font-weight:600;font-size:0.85rem;box-shadow:0 2px 6px rgba(0,0,0,0.1);cursor:pointer;border:none;'>",
        "{{display:label}}",
        "</button>",
        "</div>"
    ].join(""),
    labelProp: 'label',
    badges: ['Button', 'Interactive'],
};

function escapeStudio(value: string): string {
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

@RendererComponent({
    name: 'zero-uiv-button',
    version: '1.0.0',
    title: 'Unified Button',
    elementSelector: 'zero-uiv-button',
    group: 'Uiverse Buttons',
    iconName: 'button-icon.png',
})
@applyGlobalStyles()
export class ZeroUivButton extends LitElement {
    static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
        if (!config) return studioTemplate;

        const labelDisplay = escapeStudio(config.studio.display.label || 'Button');
        const themeColor = (config.props?.themeColor ?? config.studio.props?.themeColor) || 'var(--uiv-primary-color,#6366f1)';

        return {
            ...studioTemplate,
            templateHtml: [
                "<div style='display:inline-flex;'>",
                `<button style='position:relative;padding:12px 24px;border-radius:8px;background:${themeColor};color:#fff;font-weight:600;font-size:0.85rem;box-shadow:0 2px 6px rgba(0,0,0,0.1);cursor:pointer;border:none;'>`,
                `${labelDisplay}`,
                `</button>`,
                `</div>`
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
            { label: 'Cyber', value: 'cyber' },
            { label: 'Glass', value: 'glass' },
            { label: 'Retro', value: 'retro' },
            { label: 'Neon', value: 'neon' }
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
    label = 'Button';

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.DROPDOWN,
        displayLabel: 'Variant',
        fieldMappings: 'variant',
        optionItems: [
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Danger', value: 'danger' }
        ]
    })
    variant = 'primary';

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
        displayLabel: 'Loading',
        fieldMappings: 'loading',
    })
    loading = false;

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Tag (Cyber-only)',
        fieldMappings: 'tag',
    })
    tag = 'R25';

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
        eventTrigger: 'click',
        displayLabel: 'On Click'
    })
    onClickEvent = 'click';

    static styles = css`
        :host {
            display: inline-block;
            cursor: pointer;
            --btn-p: var(--uiv-primary-color, #6366f1);
            --btn-s: var(--uiv-secondary-color, #8b5cf6);
            --btn-bg: var(--uiv-surface-color, #ffffff);
            --btn-t: var(--uiv-text-color, #fff);
            --btn-glow: var(--uiv-border-glow, 0 0 15px rgba(99, 102, 241, 0.3));
            --intensity: var(--uiv-glow-intensity, 1);
        }

        button {
            cursor: inherit;
            outline: none;
            border: none;
            background: none;
            font-family: inherit;
            position: relative;
            transition: all 0.3s ease;
        }

        .btn-content {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }

        .spinner {
            display: inline-block;
            width: 1rem;
            height: 1rem;
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top-color: #fff;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        /* Cyber Styles */
        button.cyber {
            --slice-0: inset(50% 50% 50% 50%);
            --slice-1: inset(80% -6px 0 0);
            --slice-2: inset(50% -6px 30% 0);
            --slice-3: inset(10% -6px 85% 0);
            --slice-4: inset(40% -6px 43% 0);
            --slice-5: inset(80% -6px 5% 0);
            text-transform: uppercase;
            letter-spacing: 3px;
            padding: 10px 20px;
            background: linear-gradient(45deg, transparent 5%, var(--btn-p) 5%);
            color: var(--btn-t);
            min-width: 150px;
        }

        button.cyber::after {
            content: attr(data-label);
            display: block;
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: linear-gradient(45deg, transparent 3%, var(--uiv-button-shadow, #00e6f6) 3%, var(--uiv-button-shadow, #00e6f6) 5%, var(--btn-p) 5%);
            text-shadow: -3px -3px 0px #f8f005, 3px 3px 0px var(--uiv-button-shadow, #00e6f6);
            clip-path: var(--slice-0);
        }

        button.cyber:hover::after {
            animation: 1s glitch steps(2, end);
        }

        .tag {
            position: absolute;
            right: -8px;
            bottom: -8px;
            background: var(--uiv-button-accent, #f8f005);
            color: #000;
            padding: 0 4px;
            font-size: 0.65rem;
            font-weight: bold;
        }

        /* Neon Styles */
        button.neon {
            border: 2px solid var(--btn-p);
            color: var(--btn-p);
            padding: 10px 25px;
            border-radius: 5px;
            background: transparent;
            text-transform: uppercase;
            font-weight: bold;
            box-shadow: 0 0 10px var(--btn-p), inset 0 0 10px var(--btn-p);
        }

        button.neon:hover {
            background: var(--btn-p);
            color: #000;
            box-shadow: 0 0 30px var(--btn-p), inset 0 0 10px var(--btn-p);
        }

        /* Glass Styles */
        button.glass {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: #fff;
            padding: 12px 28px;
            border-radius: 12px;
        }

        button.glass:hover {
            background: rgba(255, 255, 255, 0.2);
        }

        /* Retro Styles */
        button.retro {
            background: var(--btn-p);
            border: 3px solid #000;
            color: #000;
            padding: 10px 25px;
            font-weight: bold;
            box-shadow: 5px 5px 0px #000;
        }

        button.retro:active {
            transform: translate(3px, 3px);
            box-shadow: 2px 2px 0px #000;
        }

        /* Modern Styles */
        button.modern {
            background: var(--btn-p);
            color: var(--btn-t);
            padding: 12px 28px;
            border-radius: 8px;
            font-weight: 600;
            box-shadow: var(--uiv-shadow-depth, 0 4px 6px -1px rgba(0, 0, 0, 0.1));
        }

        button.modern:hover {
            filter: brightness(1.1);
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        button.modern:active {
            transform: translateY(0);
        }

        @keyframes glitch {
            0% { clip-path: var(--slice-1); transform: translate(-10px, -5px); }
            10% { clip-path: var(--slice-3); transform: translate(10px, 5px); }
            20% { clip-path: var(--slice-1); transform: translate(-5px, 5px); }
            30% { clip-path: var(--slice-3); transform: translate(0px, 2px); }
            40% { clip-path: var(--slice-2); transform: translate(-2px, 0px); }
            50% { clip-path: var(--slice-3); transform: translate(2px, 0px); }
            60% { clip-path: var(--slice-4); transform: translate(2px, 5px); }
            70% { clip-path: var(--slice-2); transform: translate(-5px, 5px); }
            80% { clip-path: var(--slice-5); transform: translate(10px, -5px); }
            90% { clip-path: var(--slice-1); transform: translate(-5px, 0px); }
            100% { clip-path: var(--slice-1); transform: translate(0); }
        }
    `;

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
                ${themeModule ? themeModule.getComponentStyles('button') : ''}
                :host {
                    ${this.accentColor ? `--uiv-primary-color: ${this.accentColor};` : ''}
                }
            </style>
            ${this.renderThemeTemplate(activeTheme)}
        `;
    }

    private renderThemeTemplate(activeTheme: string): TemplateResult {
        const btnClass = activeTheme;
        const isDisabled = this.disabled || this.loading;
        const themeModule = getThemeManager()?.getActiveTheme('zero-uiv-themes');

        return html`
            <button class="${btnClass} uiv-${themeModule?.id}-theme uiv-${themeModule?.id}-card" ?disabled="${isDisabled}" data-label="${this.label}">
                <div class="btn-content uiv-${themeModule?.id}-text">
                    ${this.loading ? html`<span class="spinner"></span>` : ''}
                    <slot name="prefix"></slot>
                    <span>${this.label}</span>
                    <slot name="suffix"></slot>
                </div>
                ${activeTheme === 'cyber' ? html`<span class="tag uiv-cyber-accent">${this.tag}</span>` : ''}
            </button>
        `;
    }
}
