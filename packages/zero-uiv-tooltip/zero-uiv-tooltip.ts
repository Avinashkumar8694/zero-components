import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
const getThemeManager = () => (window as any).zeroThemeManager;

@RendererComponent({
    name: 'zero-uiv-tooltip',
    version: '1.0.0',
    title: 'Unified Tooltip',
    elementSelector: 'zero-uiv-tooltip',
    group: 'Uiverse Tooltip',
    iconName: 'tooltip-icon.png',
})
@applyGlobalStyles()
export class ZeroUivTooltip extends LitElement {
    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.DROPDOWN,
        displayLabel: 'Theme',
        fieldMappings: 'theme',
        optionItems: [
            { label: 'Modern', value: 'modern' },
            { label: 'Glass', value: 'glass' }
        ]
    })
    theme = 'modern';

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Text',
        fieldMappings: 'text',
    })
    text = 'Tooltip text';

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.DROPDOWN,
        displayLabel: 'Position',
        fieldMappings: 'position',
        optionItems: [
            { label: 'Top', value: 'top' },
            { label: 'Bottom', value: 'bottom' },
            { label: 'Left', value: 'left' },
            { label: 'Right', value: 'right' }
        ]
    })
    position = 'top';

    static styles = css`
        :host {
            display: inline-block;
            position: relative;
        }

        .tooltip-container {
            position: relative;
            display: inline-block;
        }

        .tooltip-text {
            visibility: hidden;
            width: 140px;
            background-color: var(--uiv-surface-color, #1e293b);
            color: var(--uiv-primary-color, #fff);
            text-align: center;
            border-radius: 10px;
            padding: 10px 14px;
            position: absolute;
            z-index: 1000;
            opacity: 0;
            transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
            font-size: 0.85rem;
            font-weight: 600;
            border: 1px solid var(--uiv-border-color);
            box-shadow: var(--uiv-shadow-depth, 0 10px 15px -3px rgba(0, 0, 0, 0.2));
            transform: translateX(-50%) translateY(10px);
        }

        .tooltip-container:hover .tooltip-text {
            visibility: visible;
            opacity: 1;
        }

        /* Positions */
        .top { bottom: 130%; left: 50%; transform: translateX(-50%) translateY(0); }
        .bottom { top: 130%; left: 50%; transform: translateX(-50%) translateY(0); }
        .left { top: 50%; right: 115%; transform: translateY(-50%) translateX(0); }
        .right { top: 50%; left: 115%; transform: translateY(-50%) translateX(0); }

        .tooltip-text::after {
            content: "";
            position: absolute;
            border-width: 6px;
            border-style: solid;
        }

        .top::after { top: 100%; left: 50%; margin-left: -6px; border-color: var(--uiv-border-color) transparent transparent transparent; }
        .bottom::after { bottom: 100%; left: 50%; margin-left: -6px; border-color: transparent transparent var(--uiv-border-color) transparent; }
    `;

    connectedCallback() {
        super.connectedCallback();
        getThemeManager()?.addEventListener('theme-changed', () => this.requestUpdate());
    }

    render() {
        const themeModule = getThemeManager()?.getActiveTheme();
        if (!themeModule) return html`<div class="tooltip-container"><slot></slot></div>`;
        return html`
            <style>
                ${themeModule.getGlobalStyles()}
                ${themeModule.getComponentStyles('tooltip')}
                :host {
                    --uiv-tooltip-bg: ${this.theme === 'glass' ? 'rgba(0,0,0,0.8)' : '#333'};
                }
            </style>
            <div class="tooltip-container uiv-${themeModule.id}-theme">
                <slot></slot>
                <span class="tooltip-text uiv-${themeModule.id}-card uiv-${themeModule.id}-text ${this.position}">${this.text}</span>
            </div>
        `;
    }
}
