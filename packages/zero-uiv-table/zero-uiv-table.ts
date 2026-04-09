import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
const getThemeManager = () => (window as any).zeroThemeManager;

@RendererComponent({
    name: 'zero-uiv-table',
    version: '1.0.0',
    title: 'Unified Table',
    elementSelector: 'zero-uiv-table',
    group: 'Uiverse Tables',
    iconName: 'table-icon.png',
})
@applyGlobalStyles()
export class ZeroUivTable extends LitElement {
    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.DROPDOWN,
        displayLabel: 'Theme',
        fieldMappings: 'theme',
        optionItems: [
            { label: 'Modern', value: 'modern' },
            { label: 'Cyber', value: 'cyber' },
            { label: 'Glass', value: 'glass' },
            { label: 'Retro', value: 'retro' }
        ]
    })
    theme = 'modern';

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
        { id: '1', name: 'System Core', status: 'Active' },
        { id: '2', name: 'Neural Link', status: 'Standby' },
        { id: '3', name: 'Optic Mesh', status: 'Offline' }
    ];

    @property({ type: Boolean })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.CHECKBOX,
        displayLabel: 'Loading',
        fieldMappings: 'loading',
    })
    loading = false;

    @state()
    private sortKey = '';
    @state()
    private sortOrder: 'asc' | 'desc' = 'asc';

    static styles = css`
        :host {
            display: block;
            width: 100%;
            overflow-x: auto;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            font-family: inherit;
        }

        th, td {
            padding: 12px 15px;
            text-align: left;
        }

        th {
            cursor: pointer;
            user-select: none;
        }

        /* Cyber Specifics */
        .cyber table {
            border: 2px solid var(--uiv-table-border, #ff003c);
        }

        .cyber th {
            background: var(--uiv-table-header-bg, rgba(255, 0, 60, 0.1));
            color: var(--uiv-table-border, #ff003c);
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        /* Glass Specifics */
        .glass table {
            background: var(--uiv-table-bg, rgba(255, 255, 255, 0.05));
            border: 1px solid var(--uiv-table-border, rgba(255, 255, 255, 0.2));
            backdrop-filter: blur(10px);
        }

        /* Retro Specifics */
        .retro table {
            border: 3px solid #000;
            box-shadow: 6px 6px 0 #000;
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
        if (!themeModule) return html`<table></table>`;
        const sortedData = [...this.data].sort((a, b) => {
            if (!this.sortKey) return 0;
            const valA = a[this.sortKey];
            const valB = b[this.sortKey];
            return this.sortOrder === 'asc' 
                ? (valA > valB ? 1 : -1)
                : (valA < valB ? 1 : -1);
        });

        return html`
            <style>
                ${themeModule.getGlobalStyles()}
                ${themeModule.getComponentStyles('table')}
            </style>
            <div class="table-container ${this.theme}">
                <table>
                    <thead>
                        <tr>
                            ${this.columns.map(col => html`
                                <th @click="${() => col.sortable && this.handleSort(col.key)}">
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
            </div>
        `;
    }
}
