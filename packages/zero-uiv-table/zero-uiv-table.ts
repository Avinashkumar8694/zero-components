import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from 'zero-annotation';
import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
const getThemeManager = () => (window as any).zeroThemeManager;

function escapeStudio(value: string): string {
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

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
    static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
        const columns = (config?.studio?.props?.columns || [
            { key: 'id', label: 'ID', sortable: true },
            { key: 'name', label: 'Name', sortable: true },
            { key: 'status', label: 'Status', sortable: true }
        ]) as any[];
        
        const rows = (config?.studio?.props?.data || [
            { id: '1', name: 'System Core', status: 'Active' },
            { id: '2', name: 'Neural Link', status: 'Offline' }
        ]) as any[];

        let theadHtml = "<thead><tr>";
        for (const col of columns) {
            const label = col.label || col.key || '';
            theadHtml += `<th style='padding:12px 15px;text-align:left;border-bottom:1px solid rgba(0,0,0,0.1);font-weight:600;'>${escapeStudio(String(label))}</th>`;
        }
        theadHtml += "</tr></thead>";

        let tbodyHtml = "<tbody>";
        for (let i = 0; i < Math.min(rows.length, 5); i++) {
            const row = rows[i];
            const isLast = i === Math.min(rows.length, 5) - 1;
            const borderStyle = isLast ? '' : 'border-bottom:1px solid rgba(0,0,0,0.05);';
            tbodyHtml += "<tr>";
            for (const col of columns) {
                const val = row[col.key] !== undefined ? String(row[col.key]) : '';
                tbodyHtml += `<td style='padding:12px 15px;text-align:left;${borderStyle}'>${escapeStudio(val)}</td>`;
            }
            tbodyHtml += "</tr>";
        }
        tbodyHtml += "</tbody>";

        return {
            kind: "table",
            templateHtml: [
                "<div style='width:100%;overflow-x:auto;'>",
                "<table style='width:100%;border-collapse:collapse;font-family:inherit;'>",
                theadHtml,
                tbodyHtml,
                "</table>",
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
