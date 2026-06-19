import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType, ZeroStudioTemplate, ZeroStudioTemplateContext } from 'zero-annotation';
import { LitElement, html, css, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';

const getThemeManager = () => (window as any).zeroThemeManager;

export const frostedTemplate: ZeroStudioTemplate = {
    kind: 'generic',
    templateHtml: [
        "<div style='width:100%;overflow-x:auto;padding:2px;'>",
        "<table style='width:100%;border-collapse:collapse;font-family:inherit;background:rgba(255,255,255,0.1);backdrop-filter:blur(15px);-webkit-backdrop-filter:blur(15px);border:1px solid rgba(255,255,255,0.2);border-radius:12px;overflow:hidden;'>",
        "<thead><tr>",
        "<th style='padding:15px;text-align:left;border-bottom:1px solid rgba(255, 255, 255, 0.2);color:#fff;font-weight:600;background:rgba(255, 255, 255, 0.1);'>ID</th>",
        "<th style='padding:15px;text-align:left;border-bottom:1px solid rgba(255, 255, 255, 0.2);color:#fff;font-weight:600;background:rgba(255, 255, 255, 0.1);'>Name</th>",
        "<th style='padding:15px;text-align:left;border-bottom:1px solid rgba(255, 255, 255, 0.2);color:#fff;font-weight:600;background:rgba(255, 255, 255, 0.1);'>Status</th>",
        "</tr></thead>",
        "<tbody>",
        "<tr>",
        "<td style='padding:12px 15px;text-align:left;border-bottom:1px solid rgba(255, 255, 255, 0.05);color:#fff;'>1</td>",
        "<td style='padding:12px 15px;text-align:left;border-bottom:1px solid rgba(255, 255, 255, 0.05);color:#fff;'>UI Kit</td>",
        "<td style='padding:12px 15px;text-align:left;border-bottom:1px solid rgba(255, 255, 255, 0.05);color:#fff;'>In Review</td>",
        "</tr>",
        "<tr>",
        "<td style='padding:12px 15px;text-align:left;color:#fff;'>2</td>",
        "<td style='padding:12px 15px;text-align:left;color:#fff;'>Design System</td>",
        "<td style='padding:12px 15px;text-align:left;color:#fff;'>Approved</td>",
        "</tr>",
        "</tbody>",
        "</table>",
        "</div>"
    ].join(""),
    labelProp: 'label',
    badges: ['Frosted', 'Glassmorphism'],
};

function escapeStudio(value: string): string {
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

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
    static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
        const columns = (config?.studio?.props?.columns || [
            { key: 'id', label: 'ID', sortable: true },
            { key: 'name', label: 'Name', sortable: true },
            { key: 'status', label: 'Status', sortable: true }
        ]) as any[];
        
        const rows = (config?.studio?.props?.data || [
            { id: '1', name: 'UI Kit', status: 'In Review' },
            { id: '2', name: 'Design System', status: 'Approved' }
        ]) as any[];

        let theadHtml = "<thead><tr>";
        for (const col of columns) {
            const label = col.label || col.key || '';
            theadHtml += `<th style='padding:15px;text-align:left;border-bottom:1px solid rgba(255, 255, 255, 0.2);color:#fff;font-weight:600;background:rgba(255, 255, 255, 0.1);'>${escapeStudio(String(label))}</th>`;
        }
        theadHtml += "</tr></thead>";

        let tbodyHtml = "<tbody>";
        for (let r = 0; r < Math.min(rows.length, 5); r++) {
            const row = rows[r];
            const isLastRow = r === Math.min(rows.length, 5) - 1;
            const borderBottom = isLastRow ? '' : 'border-bottom:1px solid rgba(255, 255, 255, 0.05);';
            tbodyHtml += "<tr>";
            for (const col of columns) {
                const val = row[col.key] !== undefined ? String(row[col.key]) : '';
                tbodyHtml += `<td style='padding:12px 15px;text-align:left;${borderBottom}color:#fff;'>${escapeStudio(val)}</td>`;
            }
            tbodyHtml += "</tr>";
        }
        tbodyHtml += "</tbody>";

        return {
            ...frostedTemplate,
            templateHtml: [
                "<div style='width:100%;overflow-x:auto;padding:2px;'>",
                "<table style='width:100%;border-collapse:collapse;font-family:inherit;background:rgba(255,255,255,0.1);backdrop-filter:blur(15px);-webkit-backdrop-filter:blur(15px);border:1px solid rgba(255,255,255,0.2);border-radius:12px;overflow:hidden;'>",
                theadHtml,
                tbodyHtml,
                "</table>",
                "</div>"
            ].join(""),
        };
    }

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
