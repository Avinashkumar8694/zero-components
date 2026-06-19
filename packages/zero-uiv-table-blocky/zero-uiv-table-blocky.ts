import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';
import { LitElement, html, css, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from 'zero-annotation';

const getThemeManager = () => (window as any).zeroThemeManager;

export const blockyTemplate: ZeroStudioTemplate = {
    kind: 'generic',
    templateHtml: [
        "<div style='width:100%;overflow-x:auto;padding:2px;'>",
        "<table style='width:100%;border-collapse:collapse;font-family:inherit;border:4px solid #1e293b;background:var(--uiv-surface-color,#ffffff);box-shadow:8px 8px 0 #1e293b;'>",
        "<thead><tr>",
        "<th style='padding:12px 15px;text-align:left;border-bottom:4px solid #1e293b;border-right:4px solid #1e293b;background:#f8fafc;font-weight:900;text-transform:uppercase;'>ID</th>",
        "<th style='padding:12px 15px;text-align:left;border-bottom:4px solid #1e293b;border-right:4px solid #1e293b;background:#f8fafc;font-weight:900;text-transform:uppercase;'>Name</th>",
        "<th style='padding:12px 15px;text-align:left;border-bottom:4px solid #1e293b;background:#f8fafc;font-weight:900;text-transform:uppercase;'>Status</th>",
        "</tr></thead>",
        "<tbody>",
        "<tr>",
        "<td style='padding:12px 15px;text-align:left;border-bottom:4px solid #1e293b;border-right:4px solid #1e293b;'>001</td>",
        "<td style='padding:12px 15px;text-align:left;border-bottom:4px solid #1e293b;border-right:4px solid #1e293b;'>BLOCK_A</td>",
        "<td style='padding:12px 15px;text-align:left;border-bottom:4px solid #1e293b;'>OK</td>",
        "</tr>",
        "<tr>",
        "<td style='padding:12px 15px;text-align:left;border-right:4px solid #1e293b;'>002</td>",
        "<td style='padding:12px 15px;text-align:left;border-right:4px solid #1e293b;'>BLOCK_B</td>",
        "<td style='padding:12px 15px;text-align:left;'>WARN</td>",
        "</tr>",
        "</tbody>",
        "</table>",
        "</div>"
    ].join(""),
    labelProp: 'label',
    badges: ['Blocky', 'NeoRutalism'],
};

function escapeStudio(value: string): string {
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

@RendererComponent({
    name: 'zero-uiv-table-blocky',
    version: '1.0.0',
    title: '3D Blocky Table',
    elementSelector: 'zero-uiv-table-blocky',
    group: 'Uiverse Tables',
    iconName: 'table-icon.png',
})
@applyGlobalStyles()
export class ZeroUivTableBlocky extends LitElement {
    static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
        const columns = (config?.studio?.props?.columns || [
            { key: 'id', label: 'ID', sortable: true },
            { key: 'name', label: 'Name', sortable: true },
            { key: 'status', label: 'Status', sortable: true }
        ]) as any[];
        
        const rows = (config?.studio?.props?.data || [
            { id: '001', name: 'BLOCK_A', status: 'OK' },
            { id: '002', name: 'BLOCK_B', status: 'WARN' }
        ]) as any[];

        let theadHtml = "<thead><tr>";
        for (let i = 0; i < columns.length; i++) {
            const col = columns[i];
            const label = col.label || col.key || '';
            const isLastCol = i === columns.length - 1;
            const borderRight = isLastCol ? '' : 'border-right:4px solid #1e293b;';
            theadHtml += `<th style='padding:12px 15px;text-align:left;border-bottom:4px solid #1e293b;${borderRight}background:#f8fafc;font-weight:900;text-transform:uppercase;'>${escapeStudio(String(label))}</th>`;
        }
        theadHtml += "</tr></thead>";

        let tbodyHtml = "<tbody>";
        for (let r = 0; r < Math.min(rows.length, 5); r++) {
            const row = rows[r];
            const isLastRow = r === Math.min(rows.length, 5) - 1;
            const borderBottom = isLastRow ? '' : 'border-bottom:4px solid #1e293b;';
            tbodyHtml += "<tr>";
            for (let c = 0; c < columns.length; c++) {
                const col = columns[c];
                const isLastCol = c === columns.length - 1;
                const borderRight = isLastCol ? '' : 'border-right:4px solid #1e293b;';
                const val = row[col.key] !== undefined ? String(row[col.key]) : '';
                tbodyHtml += `<td style='padding:12px 15px;text-align:left;${borderBottom}${borderRight}'>${escapeStudio(val)}</td>`;
            }
            tbodyHtml += "</tr>";
        }
        tbodyHtml += "</tbody>";

        return {
            ...blockyTemplate,
            templateHtml: [
                "<div style='width:100%;overflow-x:auto;padding:2px;'>",
                "<table style='width:100%;border-collapse:collapse;font-family:inherit;border:4px solid #1e293b;background:var(--uiv-surface-color,#ffffff);box-shadow:8px 8px 0 #1e293b;'>",
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
        { id: '001', name: 'BLOCK_A', status: 'OK' },
        { id: '002', name: 'BLOCK_B', status: 'WARN' },
        { id: '003', name: 'BLOCK_C', status: 'FAIL' }
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
            --tbl-p: var(--uiv-primary-color, #6366f1);
            --tbl-s: var(--uiv-secondary-color, #8b5cf6);
            --tbl-bg: var(--uiv-surface-color, #ffffff);
            --tbl-border: var(--uiv-border-color, #e2e8f0);
            --tbl-t: var(--uiv-text-color, #1e293b);
            --tbl-muted: var(--uiv-text-muted, #64748b);
            --depth: var(--uiv-shadow-depth, 0 4px 6px -1px rgba(0, 0, 0, 0.1));
        }

        table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            border: 1px solid var(--tbl-border);
            background: var(--tbl-bg);
            border-radius: 12px;
            overflow: hidden;
            box-shadow: var(--depth);
            margin-bottom: 20px;
        }

        th {
            background: rgba(99, 102, 241, 0.05);
            color: var(--tbl-p);
            font-weight: 600;
            text-transform: uppercase;
            font-size: 0.75rem;
            letter-spacing: 0.05em;
            padding: 14px 16px;
            text-align: left;
            border-bottom: 1px solid var(--tbl-border);
        }

        td {
            padding: 12px 16px;
            border-bottom: 1px solid var(--tbl-border);
            color: var(--tbl-t);
            font-size: 0.875rem;
        }

        tr:last-child td {
            border-bottom: none;
        }

        th:last-child, td:last-child {
            border-right: none;
        }

        tr:hover td {
            background: rgba(0,0,0,0.05);
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
            <div class="uiv-${themeModule?.id}-theme">
                <table class="uiv-${themeModule?.id}-card">
                    <thead>
                        <tr>
                            ${this.columns.map(col => html`
                                <th class="uiv-${themeModule?.id}-text" @click="${() => this.handleSort(col.key)}">
                                    ${col.label} ${this.sortKey === col.key ? (this.sortOrder === 'asc' ? '▴' : '▾') : ''}
                                </th>
                            `)}
                        </tr>
                    </thead>
                    <tbody>
                        ${sortedData.map(row => html`
                            <tr>
                                ${this.columns.map(col => html`
                                    <td class="uiv-${themeModule?.id}-text-secondary">${row[col.key]}</td>
                                `)}
                            </tr>
                        `)}
                    </tbody>
                </table>
            </div>
        `;
    }
}
