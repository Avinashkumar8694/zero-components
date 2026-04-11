import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { RendererComponent, applyGlobalStyles, RendererAttribute, AttributeType, UserInterfaceType } from 'zero-annotation';

@RendererComponent({
    name: 'zero-uiv-panel',
    version: '1.0.0',
    title: 'UI Panel',
    elementSelector: 'zero-uiv-panel',
    group: 'Builder Layout',
    iconName: 'columns'
})
@applyGlobalStyles()
export class ZeroUivPanel extends LitElement {
    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXT_INPUT,
        displayLabel: 'Header Title',
        fieldMappings: 'headerTitle',
    })
    headerTitle = 'Layout Panel';

    @property({ type: Number })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.DROPDOWN,
        displayLabel: 'Columns',
        fieldMappings: 'columns',
        optionItems: [
            { label: '1 Column', value: 1 },
            { label: '2 Columns', value: 2 },
            { label: '3 Columns', value: 3 }
        ]
    })
    columns = 1;

    static styles = css`
        :host {
            display: block;
            width: 100%;
            min-height: 100px;
            margin-bottom: 20px;
            background: var(--card-bg, rgba(255, 255, 255, 0.05));
            border: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));
            border-radius: 16px;
            overflow: hidden;
        }

        .panel-header {
            padding: 8px 16px;
            background: rgba(255, 255, 255, 0.02);
            border-bottom: 1px solid var(--border-color);
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: grab;
        }

        .panel-header:active {
            cursor: grabbing;
        }

        .panel-header h3 {
            margin: 0;
            font-size: 0.8rem;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 0.05em;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .columns-container {
            display: grid;
            gap: 20px;
            padding: 20px;
            min-height: 100px;
        }

        .column {
            min-height: 80px;
            border: 1px dashed transparent;
            border-radius: 8px;
            transition: all 0.2s ease;
            position: relative;
        }

        .column.drag-over {
            border-color: var(--uiv-status-info, #38bdf8);
            background: rgba(56, 189, 248, 0.05);
        }

        .col-label {
            position: absolute;
            top: -10px;
            left: 10px;
            font-size: 10px;
            background: var(--uiv-app-bg);
            padding: 2px 6px;
            color: var(--uiv-status-info);
            opacity: 0.5;
        }
    `;

    render() {
        return html`
            <div class="panel-header">
                <h3>${this.headerTitle}</h3>
            </div>
            <div class="columns-container" style="grid-template-columns: repeat(${this.columns}, 1fr);">
                ${Array.from({ length: this.columns }).map((_, i) => html`
                    <div class="column" data-col="${i + 1}">
                        <div class="col-label">COL ${i + 1}</div>
                        <slot name="col-${i + 1}"></slot>
                    </div>
                `)}
            </div>
        `;
    }
}

if (!customElements.get('zero-uiv-panel')) {
    customElements.define('zero-uiv-panel', ZeroUivPanel);
}
