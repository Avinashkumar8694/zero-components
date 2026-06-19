import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType, ZeroStudioTemplate, ZeroStudioTemplateContext } from 'zero-annotation';
import { LitElement, html, css, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';

const getThemeManager = () => (window as any).zeroThemeManager;

export const glitchTemplate: ZeroStudioTemplate = {
    kind: 'generic',
    templateHtml: [
        "<div style='width:100%;overflow-x:auto;padding:2px;'>",
        "<table style='width:100%;border-collapse:collapse;font-family:monospace;background:rgba(0, 0, 0, 0.8);border:2px solid #ff003c;'>",
        "<thead><tr>",
        "<th style='padding:15px;text-align:left;border-bottom:2px solid #ff003c;background:rgba(255, 0, 60, 0.1);color:#ff003c;font-weight:700;text-transform:uppercase;letter-spacing:2px;'>ID</th>",
        "<th style='padding:15px;text-align:left;border-bottom:2px solid #ff003c;background:rgba(255, 0, 60, 0.1);color:#ff003c;font-weight:700;text-transform:uppercase;letter-spacing:2px;'>NAME</th>",
        "<th style='padding:15px;text-align:left;border-bottom:2px solid #ff003c;background:rgba(255, 0, 60, 0.1);color:#ff003c;font-weight:700;text-transform:uppercase;letter-spacing:2px;'>STATUS</th>",
        "</tr></thead>",
        "<tbody>",
        "<tr>",
        "<td style='padding:12px 15px;text-align:left;border-bottom:1px solid rgba(255, 0, 60, 0.2);color:#fff;'>SYS-01</td>",
        "<td style='padding:12px 15px;text-align:left;border-bottom:1px solid rgba(255, 0, 60, 0.2);color:#fff;'>CORE_DRIVE</td>",
        "<td style='padding:12px 15px;text-align:left;border-bottom:1px solid rgba(255, 0, 60, 0.2);color:#fff;'>ACTIVE</td>",
        "</tr>",
        "<tr>",
        "<td style='padding:12px 15px;text-align:left;border-bottom:1px solid rgba(255, 0, 60, 0.2);color:#fff;'>SYS-02</td>",
        "<td style='padding:12px 15px;text-align:left;border-bottom:1px solid rgba(255, 0, 60, 0.2);color:#fff;'>NEURAL_LINK</td>",
        "<td style='padding:12px 15px;text-align:left;border-bottom:1px solid rgba(255, 0, 60, 0.2);color:#fff;'>STANDBY</td>",
        "</tr>",
        "</tbody>",
        "</table>",
        "</div>"
    ].join(""),
    labelProp: 'label',
    badges: ['Glitch', 'Cyberpunk'],
};

function escapeStudio(value: string): string {
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

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
    static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
        const columns = (config?.studio?.props?.columns || [
            { key: 'id', label: 'ID', sortable: true },
            { key: 'name', label: 'NAME', sortable: true },
            { key: 'status', label: 'STATUS', sortable: true }
        ]) as any[];
        
        const rows = (config?.studio?.props?.data || [
            { id: 'SYS-01', name: 'CORE_DRIVE', status: 'ACTIVE' },
            { id: 'SYS-02', name: 'NEURAL_LINK', status: 'STANDBY' }
        ]) as any[];

        let theadHtml = "<thead><tr>";
        for (const col of columns) {
            const label = col.label || col.key || '';
            theadHtml += `<th style='padding:15px;text-align:left;border-bottom:2px solid #ff003c;background:rgba(255, 0, 60, 0.1);color:#ff003c;font-weight:700;text-transform:uppercase;letter-spacing:2px;'>${escapeStudio(String(label))}</th>`;
        }
        theadHtml += "</tr></thead>";

        let tbodyHtml = "<tbody>";
        for (let r = 0; r < Math.min(rows.length, 5); r++) {
            const row = rows[r];
            const isLastRow = r === Math.min(rows.length, 5) - 1;
            const borderBottom = isLastRow ? '' : 'border-bottom:1px solid rgba(255, 0, 60, 0.2);';
            tbodyHtml += "<tr>";
            for (const col of columns) {
                const val = row[col.key] !== undefined ? String(row[col.key]) : '';
                tbodyHtml += `<td style='padding:12px 15px;text-align:left;${borderBottom}color:#fff;'>${escapeStudio(val)}</td>`;
            }
            tbodyHtml += "</tr>";
        }
        tbodyHtml += "</tbody>";

        return {
            ...glitchTemplate,
            templateHtml: [
                "<div style='width:100%;overflow-x:auto;padding:2px;'>",
                "<table style='width:100%;border-collapse:collapse;font-family:monospace;background:rgba(0, 0, 0, 0.8);border:2px solid #ff003c;'>",
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
