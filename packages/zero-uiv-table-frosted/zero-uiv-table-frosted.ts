import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';

const getThemeManager = () => (window as any).zeroThemeManager;

@RendererComponent({
    name: 'zero-uiv-table-frosted',
    version: '1.0.0',
    title: 'Frosted Glass Table',
    elementSelector: 'zero-uiv-table-frosted',
    group: 'Uiverse Tables',
    iconName: 'table-icon.png',
})
@applyGlobalStyles()
export class ZeroUivTableFrosted extends LitElement {
    @property({ type: Array })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXTAREA,
        displayLabel: 'Columns JSON',
        fieldMappings: 'columns',
    })
    columns = [
        { key: 'id', label: 'ID', sortable: true },
        { key: 'name', label: 'Name', sortable: true },
        { key: 'status', label: 'Status', sortable: true }
    ];

    @property({ type: Array })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXTAREA,
        displayLabel: 'Data JSON',
        fieldMappings: 'data',
    })
    data = [
        { id: '1', name: 'UI Kit', status: 'In Review' },
        { id: '2', name: 'Design System', status: 'Approved' },
        { id: '3', name: 'Asset Pack', status: 'Pending' }
    ];

    @state()
    private sortKey = '';
    @state()
    private sortOrder: 'asc' | 'desc' = 'asc';

    static styles = css`
        :host {
            display: block;
            width: 100%;
            overflow-x: auto;
            --tbl-p: var(--uiv-primary-color, rgba(255, 255, 255, 0.5));
            --tbl-bg: var(--uiv-bg-color, rgba(255, 255, 255, 0.1));
            --tbl-b: var(--uiv-border-color, rgba(255, 255, 255, 0.2));
        }

        table {
            width: 100%;
            border-collapse: collapse;
            background: var(--tbl-bg);
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            border: 1px solid var(--tbl-b);
            border-radius: 12px;
            overflow: hidden;
            font-family: inherit;
        }

        th {
            background: rgba(255, 255, 255, 0.1);
            color: var(--uiv-text-color, #fff);
            padding: 15px;
            text-align: left;
            border-bottom: 1px solid var(--tbl-b);
            cursor: pointer;
        }

        td {
            padding: 12px 15px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            color: var(--uiv-text-color, #fff);
        }

        tr:last-child td {
            border-bottom: none;
        }

        tr:hover td {
            background: rgba(255, 255, 255, 0.05);
        }
    `;

    handleSort(key: string) {
        if (this.sortKey === key) {
            this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
        } else {
            this.sortKey = key;
            this.sortOrder = 'asc';
        }
    }

    connectedCallback() {
        super.connectedCallback();
        getThemeManager()?.addEventListener('theme-changed', () => this.requestUpdate());
    }

    render() {
        const themeModule = getThemeManager()?.getActiveTheme();
        const sortedData = [...this.data].sort((a, b) => {
            if (!this.sortKey) return 0;
            const valA = a[this.sortKey];
            const valB = b[this.sortKey];
            return this.sortOrder === 'asc' ? (valA > valB ? 1 : -1) : (valA < valB ? 1 : -1);
        });

        return html`
            <style>
                ${themeModule ? themeModule.getGlobalStyles() : ''}
            </style>
            <table>
                <thead>
                    <tr>
                        ${this.columns.map(col => html`
                            <th @click="${() => this.handleSort(col.key)}">
                                ${col.label} ${this.sortKey === col.key ? (this.sortOrder === 'asc' ? '▴' : '▾') : ''}
                            </th>
                        `)}
                    </tr>
                </thead>
                <tbody>
                    ${sortedData.map(row => html`
                        <tr>
                            ${this.columns.map(col => html`<td>${row[col.key]}</td>`)}
                        </tr>
                    `)}
                </tbody>
            </table>
        `;
    }
}
