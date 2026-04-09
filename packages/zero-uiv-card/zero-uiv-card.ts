import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
const getThemeManager = () => (window as any).zeroThemeManager;

@RendererComponent({
    name: 'zero-uiv-card',
    version: '1.0.0',
    title: 'Unified Card',
    elementSelector: 'zero-uiv-card',
    group: 'Uiverse Cards',
    iconName: 'card-icon.png',
})
@applyGlobalStyles()
export class ZeroUivCard extends LitElement {
    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.DROPDOWN,
        displayLabel: 'Theme',
        fieldMappings: 'theme',
        optionItems: [
            { label: 'Glass', value: 'glass' },
            { label: 'Modern', value: 'modern' },
            { label: 'Cyber', value: 'cyber' }
        ]
    })
    theme = 'modern';

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Title',
        fieldMappings: 'title',
    })
    title = 'Card Title';

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXTAREA,
        displayLabel: 'Content',
        fieldMappings: 'content',
    })
    content = '';

    static styles = css`
        :host {
            display: inline-block;
            perspective: 1000px;
        }

        .card {
            width: 320px;
            min-height: 220px;
            padding: 32px;
            border-radius: 16px;
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            gap: 20px;
            background: var(--uiv-surface-color, #fff);
            border: 1px solid var(--uiv-border-color, #e2e8f0);
            box-shadow: var(--uiv-shadow-depth);
        }

        .title {
            font-size: 1.5rem;
            font-weight: 800;
            margin: 0;
            color: var(--uiv-primary-color);
            letter-spacing: -0.02em;
        }

        .content {
            font-size: 1rem;
            line-height: 1.7;
            color: var(--uiv-text-color);
            opacity: 0.9;
        }

        /* theme specifics */
        .glass {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
        }

        .cyber {
            background: #1a1a1a;
            border: 2px solid #ff003c;
            clip-path: polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%);
            box-shadow: 5px 5px 0 #00e6f6;
        }
    `;

    connectedCallback() {
        super.connectedCallback();
        getThemeManager()?.addEventListener('theme-changed', () => this.requestUpdate());
    }

    render() {
        const themeModule = getThemeManager()?.getActiveTheme();
        if (!themeModule) return html`<div class="card ${this.theme}"></div>`;
        return html`
            <style>
                ${themeModule.getGlobalStyles()}
                ${themeModule.getComponentStyles('card')}
            </style>
            <div class="card uiv-${themeModule.id}-theme uiv-${themeModule.id}-card ${this.theme}" role="region" aria-label="${this.title}">
                <slot name="header"></slot>
                <h3 class="title uiv-${themeModule.id}-text">${this.title}</h3>
                <div class="content uiv-${themeModule.id}-text-secondary">
                    <slot>${this.content}</slot>
                </div>
                <slot name="footer"></slot>
            </div>
        `;
    }
}
