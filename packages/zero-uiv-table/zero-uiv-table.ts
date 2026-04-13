import type { ZeroStudioTemplate } from 'zero-annotation';
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
    static getStudioTemplate(): ZeroStudioTemplate {
        return {
            kind: "table",
            templateHtml: [
                "<div style='display:grid;gap:10px;padding:12px;border-radius:16px;border:1px solid rgba(148,163,184,0.2);background:rgba(255,255,255,0.96);'>",
                "<div style='display:flex;justify-content:space-between;align-items:center;gap:8px;'>",
                "<strong style='font-size:0.92rem;color:var(--zs-text);'>Table · {{display:theme}}</strong>",
                "<span style='font-size:0.76rem;color:var(--zs-text-muted);'>columns: {{mode:columns}} · rows: {{mode:data}}</span>",
                "</div>",
                "<div style='display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1px;border-radius:10px;overflow:hidden;background:rgba(148,163,184,0.18);'>",
                "<div style='padding:9px 10px;background:#e0f2fe;color:#0f172a;font-size:0.78rem;font-weight:700;'>label_1</div>",
                "<div style='padding:9px 10px;background:#e0f2fe;color:#0f172a;font-size:0.78rem;font-weight:700;'>label_2</div>",
                "<div style='padding:9px 10px;background:#e0f2fe;color:#0f172a;font-size:0.78rem;font-weight:700;'>label_3</div>",
                "<div style='padding:9px 10px;background:#fff;color:#64748b;font-size:0.76rem;'>{{row.id}}</div>",
                "<div style='padding:9px 10px;background:#fff;color:#64748b;font-size:0.76rem;'>{{row.name}}</div>",
                "<div style='padding:9px 10px;background:#fff;color:#64748b;font-size:0.76rem;'>{{row.status}}</div>",
                "</div>",
                "<div style='font-size:0.74rem;color:var(--zs-text-muted);'>rows source: {{display:data}}</div>",
                "</div>"
            ].join(""),
            titleProp: "theme",
            columnsProp: "columns",
            dataProp: "data",
            emptyText: "Configure static columns, dynamic columns, and row mapping",
            dynamicHints: ["$.table.columns", "$.table.rows", "{{row.id}}", "{{row.name}}"],
            badges: ["Static Columns", "Dynamic Rows"],
            sampleHeaders: ["label_1", "label_2", "label_3"],
            sampleRows: [
                ["{{row.id}}", "{{row.name}}", "{{row.status}}"],
                ["$.row_var.id", "$.row_var.name", "$.row_var.status"],
            ],
        };
    }

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
            border: 2px solid var(--uiv-table-border, var(--uiv-status-primary));
        }

        .cyber th {
            background: var(--uiv-table-header-bg, var(--uiv-app-accent-transparent, rgba(255, 0, 60, 0.1)));
            color: var(--uiv-table-border, var(--uiv-status-primary));
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        /* Glass Specifics */
        .glass table {
            background: var(--uiv-table-bg, var(--uiv-app-card-bg, rgba(255, 255, 255, 0.05)));
            border: 1px solid var(--uiv-table-border, var(--uiv-app-border-color, rgba(255, 255, 255, 0.2)));
            backdrop-filter: var(--uiv-app-glass-blur, blur(10px));
        }

        /* Retro Specifics */
        .retro table {
            border: 3px solid var(--uiv-text-primary-themed, #000);
            box-shadow: 6px 6px 0 var(--uiv-text-primary-themed, #000);
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
