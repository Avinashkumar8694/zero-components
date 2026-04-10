import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';

const getThemeManager = () => (window as any).zeroThemeManager;

@RendererComponent({
    name: 'zero-uiv-expansion-frosted',
    version: '1.0.0',
    title: 'Frosted Glass Expansion Panel',
    elementSelector: 'zero-uiv-expansion-frosted',
    group: 'Uiverse Expansion',
    iconName: 'expansion-icon.png',
})
@applyGlobalStyles()
export class ZeroUivExpansionFrosted extends LitElement {
    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Title',
        fieldMappings: 'title',
    })
    title = 'Frosted Panel';

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
            margin-bottom: 15px;
            --exp-bg: var(--uiv-bg-color, rgba(255, 255, 255, 0.1));
            --exp-b: var(--uiv-border-color, rgba(255, 255, 255, 0.2));
            --exp-t: var(--uiv-text-color, var(--uiv-text-inverse, #fff));
        }

        .expansion-wrapper {
            width: 100%;
            background: var(--exp-bg);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid var(--exp-b);
            border-radius: 12px;
            overflow: hidden;
            transition: all 0.3s ease;
        }

        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 15px 20px;
            cursor: pointer;
            user-select: none;
            color: var(--exp-t);
            font-weight: 600;
        }

        .content {
            padding: 0 20px;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-out, padding 0.3s ease;
            color: var(--exp-t);
            opacity: 0.8;
            font-size: 0.95rem;
        }

        .expanded .content {
            padding: 15px 20px;
            max-height: 1000px;
        }

        .icon {
            transition: transform 0.3s ease;
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
