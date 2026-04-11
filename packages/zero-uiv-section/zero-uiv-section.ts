import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { RendererComponent, applyGlobalStyles, RendererAttribute, AttributeType, UserInterfaceType } from 'zero-annotation';

@RendererComponent({
    name: 'zero-uiv-section',
    version: '1.0.0',
    title: 'UI Section',
    elementSelector: 'zero-uiv-section',
    group: 'Builder Layout',
    iconName: 'folder-open'
})
@applyGlobalStyles()
export class ZeroUivSection extends LitElement {
    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Section Name',
        fieldMappings: 'sectionName',
    })
    sectionName = 'Untitled Section';

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.DROPDOWN,
        displayLabel: 'Layout',
        fieldMappings: 'layout',
        optionItems: [
            { label: 'Stack (Vertical)', value: 'stack' },
            { label: 'Inline (Horizontal)', value: 'inline' },
            { label: 'Grid', value: 'grid' }
        ]
    })
    layout = 'stack';

    static styles = css`
        :host {
            display: block;
            min-height: 100px;
            width: 100%;
            background: rgba(255, 255, 255, 0.02);
            border: 1px dashed var(--border-color, rgba(255, 255, 255, 0.2));
            border-radius: 12px;
            margin-bottom: 15px;
            transition: all 0.2s ease;
        }

        .section-label {
            padding: 4px 12px;
            font-size: 0.7rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--text-muted);
            background: rgba(255, 255, 255, 0.05);
            border-bottom: 1px dashed var(--border-color);
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .section-content {
            padding: 15px;
            display: flex;
            gap: 15px;
            min-height: 60px;
        }

        .layout-stack { flex-direction: column; }
        .layout-inline { flex-direction: row; flex-wrap: wrap; }
        .layout-grid { 
            display: grid; 
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); 
        }

        :host(.drag-over) {
            border-color: var(--uiv-status-success, #10b981);
            background: rgba(16, 185, 129, 0.05);
            border-style: solid;
        }
    `;

    render() {
        return html`
            <div class="section-label">
                <i class="fas fa-folder-open"></i>
                ${this.sectionName}
            </div>
            <div class="section-content layout-${this.layout}">
                <slot></slot>
            </div>
        `;
    }
}

if (!customElements.get('zero-uiv-section')) {
    customElements.define('zero-uiv-section', ZeroUivSection);
}
