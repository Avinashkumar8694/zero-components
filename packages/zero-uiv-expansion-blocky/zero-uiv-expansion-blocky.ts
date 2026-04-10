import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';

const getThemeManager = () => (window as any).zeroThemeManager;

@RendererComponent({
    name: 'zero-uiv-expansion-blocky',
    version: '1.0.0',
    title: '3D Blocky Expansion Panel',
    elementSelector: 'zero-uiv-expansion-blocky',
    group: 'Uiverse Expansion',
    iconName: 'expansion-icon.png',
})
@applyGlobalStyles()
export class ZeroUivExpansionBlocky extends LitElement {
    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Title',
        fieldMappings: 'title',
    })
    title = 'BLOCKY PANEL';

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

    // Output Events
    @RendererAttribute({
        attributeType: AttributeType.EVENT,
        eventTrigger: 'toggle',
        displayLabel: 'On Toggle'
    })
    onToggleEvent = 'toggle';

    static styles = css`
        :host {
            display: block;
            width: 100%;
            margin-bottom: 20px;
            --exp-bg: var(--uiv-bg-color, var(--uiv-surface-color, #fff));
            --exp-s: var(--uiv-secondary-color, var(--uiv-app-bg, #eee));
        }

        .expansion-wrapper {
            width: 100%;
            background: var(--exp-bg);
            border: 3px solid var(--uiv-text-primary-themed, #000);
            box-shadow: 6px 6px 0 var(--uiv-text-primary-themed, #000);
            overflow: hidden;
            transition: transform 0.2s;
        }

        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 20px;
            cursor: pointer;
            user-select: none;
            color: var(--uiv-text-primary-themed, #000);
            font-weight: 900;
            background: var(--exp-s);
            border-bottom: 3px solid var(--uiv-text-primary-themed, #000);
        }

        .content {
            padding: 0 20px;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-out, padding 0.3s ease;
            color: var(--uiv-text-primary-themed, #000);
            background: var(--exp-bg);
        }

        .expanded .content {
            padding: 15px 20px;
            max-height: 1000px;
        }

        .icon {
            font-size: 1.2rem;
            transition: transform 0.2s;
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
        
        return html`
            <style>
                ${themeModule ? themeModule.getGlobalStyles() : ''}
            </style>
            <div class="expansion-wrapper ${this.expanded ? 'expanded' : ''}">
                <div class="header" @click="${this.toggle}">
                    <span>${this.title}</span>
                    <span class="icon">▼</span>
                </div>
                <div class="content">
                    <slot></slot>
                </div>
            </div>
        `;
    }
}
