import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType, ZeroStudioTemplate, ZeroStudioTemplateContext } from 'zero-annotation';
import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';

const getThemeManager = () => (window as any).zeroThemeManager;

export const glitchTemplate: ZeroStudioTemplate = {
    kind: 'button',
    templateHtml: [
        "<div style='position:relative;display:inline-block;'>",
        "<button style='position:relative;padding:10px 30px;font-size:1.2rem;font-weight:800;background:var(--uiv-primary-color, #6366f1);color:#000;border:none;text-transform:uppercase;letter-spacing:2px;clip-path:polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%);'>",
        "{{display:label}}",
        "</button>",
        "<span style='position:absolute;right:-10px;bottom:-5px;background:var(--uiv-accent-color, #ec4899);color:#fff;font-size:0.65rem;padding:2px 8px;font-weight:900;transform:skew(-15deg);box-shadow:2px 2px 0 rgba(0,0,0,0.2);'>{{display:tag}}</span>",
        "</div>"
    ].join(""),
    labelProp: 'label',
    badges: ['Glitch', 'Cyberpunk'],
};

function escapeStudio(value: string): string {
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

@RendererComponent({
    name: 'zero-uiv-button-glitch',
    version: '1.0.0',
    title: 'Glitch Effect Button',
    elementSelector: 'zero-uiv-button-glitch',
    group: 'Uiverse Buttons',
    iconName: 'button-icon.png',
})
@applyGlobalStyles()
export class ZeroUivButtonGlitch extends LitElement {
    static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
        if (!config) return glitchTemplate;
        const labelDisplay = escapeStudio(config.studio.display.label || 'GLITCH');
        const tagDisplay = escapeStudio(config.studio.display.tag || 'V2.0');
        const glowColor = (config.props?.glowColor ?? config.studio.props?.glowColor);
        const colorVar = glowColor ? glowColor : 'var(--uiv-accent-color, #ec4899)';
        
        return {
            ...glitchTemplate,
            templateHtml: [
                "<div style='position:relative;display:inline-block;'>",
                "<button style='position:relative;padding:10px 30px;font-size:1.2rem;font-weight:800;background:var(--uiv-primary-color, #6366f1);color:#000;border:none;text-transform:uppercase;letter-spacing:2px;clip-path:polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%);'>",
                labelDisplay,
                "</button>",
                `<span style='position:absolute;right:-10px;bottom:-5px;background:${colorVar};color:#fff;font-size:0.65rem;padding:2px 8px;font-weight:900;transform:skew(-15deg);box-shadow:2px 2px 0 rgba(0,0,0,0.2);'>${tagDisplay}</span>`,
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
    label = 'GLITCH';

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Tag Text',
        fieldMappings: 'tag',
    })
    tag = 'V2.0';

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
        displayLabel: 'Glow Color Overlay',
        fieldMappings: 'glowColor',
    })
    glowColor = '';

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
            --btn-p: var(--uiv-primary-color, #6366f1);
            --btn-s: var(--uiv-secondary-color, #8b5cf6);
            --btn-bg: var(--uiv-bg-color, #f8fafc);
            --btn-surface: var(--uiv-surface-color, #ffffff);
            --btn-t: var(--uiv-text-color, #1e293b);
            --btn-a: var(--uiv-accent-color, #ec4899);
            --glow: var(--uiv-border-glow, 0 0 10px rgba(99, 102, 241, 0.2));
        }

        button {
            position: relative;
            padding: 10px 30px;
            font-size: 1.2rem;
            font-weight: 800;
            cursor: pointer;
            background: var(--btn-p);
            color: #000;
            border: none;
            text-transform: uppercase;
            letter-spacing: 2px;
            outline: none;
            clip-path: polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%);
            transition: all 0.2s;
        }

        button:hover {
            filter: brightness(1.2);
            transform: scale(1.05);
        }

        button:active {
            transform: scale(0.95);
        }

        .glitch-layer {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: none;
            background: var(--btn-s);
            clip-path: polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%);
        }

        button:hover .glitch-layer {
            display: block;
            animation: glitch 0.3s infinite;
        }

        @keyframes glitch {
            0% { transform: translate(2px, 2px); }
            20% { transform: translate(-2px, -2px); }
            40% { transform: translate(2px, -2px); }
            60% { transform: translate(-2px, 2px); }
            80% { transform: translate(2px, 2px); }
            100% { transform: translate(0); }
        }

        .tag {
            position: absolute;
            right: -10px;
            bottom: -5px;
            background: var(--btn-a);
            color: #fff;
            font-size: 0.65rem;
            padding: 2px 8px;
            font-weight: 900;
            transform: skew(-15deg);
            box-shadow: 2px 2px 0 rgba(0,0,0,0.2);
        }
    `;

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
            <button 
                class="uiv-${themeModule?.id}-card uiv-${themeModule?.id}-scan"
                ?disabled="${this.disabled}" 
                @click="${() => this.dispatchEvent(new CustomEvent('click'))}"
            >
                <span class="glitch-layer"></span>
                <span class="uiv-${themeModule?.id}-text">${this.label}</span>
                <span class="tag uiv-neon-accent-pulse">${this.tag}</span>
            </button>
        `;
    }
}
