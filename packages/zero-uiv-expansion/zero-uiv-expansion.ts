import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
const getThemeManager = () => (window as any).zeroThemeManager;

@RendererComponent({
    name: 'zero-uiv-expansion',
    version: '1.0.0',
    title: 'Unified Expansion Panel',
    elementSelector: 'zero-uiv-expansion',
    group: 'Uiverse Expansion',
    iconName: 'expansion-icon.png',
})
@applyGlobalStyles()
export class ZeroUivExpansion extends LitElement {
    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.DROPDOWN,
        displayLabel: 'Theme',
        fieldMappings: 'theme',
        optionItems: [
            { label: 'Modern', value: 'modern' },
            { label: 'Glass', value: 'glass' },
            { label: 'Retro', value: 'retro' },
            { label: 'Cyber', value: 'cyber' },
            { label: 'Neon', value: 'neon' }
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
    title = 'Expansion Panel';

    @property({ type: Boolean })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.CHECKBOX,
        displayLabel: 'Expanded',
        fieldMappings: 'expanded',
    })
    expanded = false;

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
        displayLabel: 'Accent Color',
        fieldMappings: 'accentColor',
    })
    accentColor = '';

    static styles = css`
        :host {
            display: block;
            width: 100%;
            margin-bottom: 12px;
            --exp-p: var(--uiv-primary-color, #6366f1);
            --exp-bg: var(--uiv-surface-color, #ffffff);
            --exp-border: var(--uiv-border-color, #e2e8f0);
            --exp-t: var(--uiv-text-color, #1e293b);
            --depth: var(--uiv-shadow-depth, 0 4px 6px -1px rgba(0, 0, 0, 0.1));
        }

        .expansion-wrapper {
            width: 100%;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            background: var(--exp-bg);
            border: 1px solid var(--exp-border);
            border-radius: 12px;
            box-shadow: var(--depth);
        }

        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 16px 24px;
            cursor: pointer;
            user-select: none;
            font-weight: 600;
            color: var(--exp-p);
            border-bottom: 1px solid transparent;
            transition: background 0.3s ease;
        }

        .expanded .header {
            border-bottom-color: var(--exp-border);
            background: rgba(var(--uiv-primary-color-rgb, 99, 102, 241), 0.03);
        }

        .content {
            padding: 0 24px;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s cubic-bezier(0, 1, 0, 1), padding 0.3s ease;
            color: var(--exp-t);
        }

        .expanded .content {
            padding: 20px 24px;
            max-height: 2000px; /* Large enough for most content */
            transition: max-height 0.6s cubic-bezier(1, 0, 1, 0), padding 0.3s ease;
        }

        .icon {
            transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            color: var(--exp-p);
        }

        .expanded .icon {
            transform: rotate(180deg);
        }
    `;

    toggle() {
        if (this.disabled) return;
        this.expanded = !this.expanded;
        this.dispatchEvent(new CustomEvent('toggle', {
            detail: { expanded: this.expanded },
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
        if (!themeModule) return html`<div class="expansion-panel ${this.theme}"></div>`;
        return html`
            <style>
                ${themeModule.getGlobalStyles()}
                ${themeModule.getComponentStyles('expansion')}
                :host {
                    --uiv-expansion-accent: ${this.accentColor || 'var(--uiv-expansion-primary, #6c63ff)'};
                }
            </style>
            <div class="expansion-wrapper uiv-${themeModule?.id}-theme uiv-${themeModule?.id}-card ${this.theme} ${this.expanded ? 'expanded' : ''}">
                <div class="header" @click="${this.toggle}">
                    <span class="uiv-${themeModule?.id}-text">${this.title}</span>
                    <span class="icon">▼</span>
                </div>
                <div class="content uiv-${themeModule?.id}-text-secondary">
                    <slot></slot>
                </div>
            </div>
        `;
    }
}
