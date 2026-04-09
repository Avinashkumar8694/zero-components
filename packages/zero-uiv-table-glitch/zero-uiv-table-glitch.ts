import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';

const getThemeManager = () => (window as any).zeroThemeManager;

@RendererComponent({
    name: 'zero-uiv-table-glitch',
    version: '1.0.0',
    title: 'Glitch Style Table',
    elementSelector: 'zero-uiv-table-glitch',
    group: 'Uiverse Tables',
    iconName: 'table-icon.png',
})
@applyGlobalStyles()
export class ZeroUivTableGlitch extends LitElement {
    @property({ type: Array })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXTAREA,
        displayLabel: 'Columns JSON',
        fieldMappings: 'columns',
    })
    columns = [
        { key: 'id', label: 'ID', sortable: true },
        { key: 'name', label: 'NAME', sortable: true },
        { key: 'status', label: 'STATUS', sortable: true }
    ];

    @property({ type: Array })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXTAREA,
        displayLabel: 'Data JSON',
        fieldMappings: 'data',
    })
    data = [
        { id: 'SYS-01', name: 'CORE_DRIVE', status: 'ACTIVE' },
        { id: 'SYS-02', name: 'NEURAL_LINK', status: 'STANDBY' },
        { id: 'SYS-03', name: 'OPTIC_MESH', status: 'OFFLINE' }
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
            --tbl-p: var(--uiv-primary-color, #ff003c);
            --tbl-bg: var(--uiv-bg-color, rgba(15, 23, 42, 0.9));
        }

        table {
            width: 100%;
            border-collapse: collapse;
            border: 2px solid var(--tbl-p);
            background: var(--tbl-bg);
            font-family: inherit;
        }

        th {
            background: rgba(255, 0, 60, 0.1);
            color: var(--tbl-p);
            text-transform: uppercase;
            letter-spacing: 2px;
            padding: 15px;
            text-align: left;
            border-bottom: 2px solid var(--tbl-p);
            cursor: pointer;
        }

        td {
            padding: 12px 15px;
            border-bottom: 1px solid rgba(255, 0, 60, 0.2);
            color: var(--uiv-text-color, #fff);
        }

        tr:hover td {
            background: rgba(255, 0, 60, 0.05);
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
