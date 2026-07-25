// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html, nothing } from "lit";
import { property, state } from "lit/decorators.js";

const DEFAULT_TIMELINE_JSON = JSON.stringify([
  {
    tabIndex: 0,
    title: "Root Canal Treatment",
    actionText: "Show Previous Treatment",
    badgeText: "Next Appointment",
    events: [
      {
        date: "26 Nov '19",
        time: "09.00 - 10.00",
        fields: [
          { label: "Treatment", value: "Open Access" },
          { label: "Dentist", value: "Drg. Adam H." },
          { label: "Nurse", value: "Jessicamila" }
        ]
      },
      {
        date: "12 Dec '19",
        time: "09.00 - 10.00",
        fields: [
          { label: "Treatment", value: "Root Canal prep" },
          { label: "Dentist", value: "Drg. Adam H." },
          { label: "Nurse", value: "Jessicamila" }
        ]
      }
    ]
  },
  {
    tabIndex: 1,
    title: "Teeth Cleaning & Polish",
    actionText: "Show Previous Treatment",
    badgeText: "Completed",
    events: [
      {
        date: "15 Oct '19",
        time: "14.00 - 15.00",
        fields: [
          { label: "Treatment", value: "Routine prophylaxis" },
          { label: "Dentist", value: "Drg. Adam H." },
          { label: "Nurse", value: "Jessicamila" }
        ]
      }
    ]
  },
  {
    tabIndex: 2,
    title: "Medical History Intake",
    actionText: "Show Previous Treatment",
    badgeText: "Intake",
    events: [
      {
        date: "24 Feb '17",
        time: "10.00 - 11:00",
        fields: [
          { label: "Treatment", value: "Allergy profile: Penicillin" },
          { label: "Dentist", value: "Drg. Adam H." },
          { label: "Nurse", value: "Jessicamila" }
        ]
      }
    ]
  }
]);

interface TimelineField {
  label: string;
  value: string;
}

interface TimelineEvent {
  date: string;
  time: string;
  fields: TimelineField[];
}

interface TimelineTab {
  tabIndex: number;
  title: string;
  actionText: string;
  badgeText: string;
  events: TimelineEvent[];
}

function escapeStudio(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

@RendererComponent({
  name: "zero-timeline-card",
  version: "1.0.0",
  title: "Timeline Card",
  elementSelector: "zero-timeline-card",
  group: "Dashboard",
  iconName: "card-icon.png",
})
@applyGlobalStyles()
export class ZeroTimelineCard extends LitElement {
  
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) {
      return {
        kind: "generic",
        templateHtml: `<zero-timeline-card-1.0.0></zero-timeline-card-1.0.0>`
      };
    }
    const tab1Label = escapeStudio(config?.props?.tab1Label ?? config?.studio?.props?.tab1Label ?? "Upcoming Appointments");
    const tab2Label = escapeStudio(config?.props?.tab2Label ?? config?.studio?.props?.tab2Label ?? "Past Appointments");
    const tab3Label = escapeStudio(config?.props?.tab3Label ?? config?.studio?.props?.tab3Label ?? "Medical Records");
    const activeTab = escapeStudio(config?.props?.activeTab ?? config?.studio?.props?.activeTab ?? "0");
    const timelineJson = escapeStudio(config?.props?.timelineJson ?? config?.studio?.props?.timelineJson ?? "[]");

    return {
      kind: "generic",
      templateHtml: `
        <zero-timeline-card-1.0.0
          tab1-label="${tab1Label}"
          tab2-label="${tab2Label}"
          tab3-label="${tab3Label}"
          active-tab="${activeTab}"
          timeline-json="${timelineJson}"
        ></zero-timeline-card-1.0.0>
      `
    };
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }
    .card {
      padding: 24px;
      border-radius: 16px;
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.05);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
      font-family: inherit;
      display: flex;
      flex-direction: column;
      gap: 20px;
      box-sizing: border-box;
    }
    .tabs-header {
      display: flex;
      border-bottom: 1.5px solid #f1f5f9;
      gap: 24px;
    }
    .tab {
      padding: 12px 0;
      font-size: 0.85rem;
      font-weight: 600;
      color: #94a3b8;
      border-bottom: 2px solid transparent;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.2s;
    }
    .tab:hover {
      color: #4b5563;
    }
    .tab.active {
      color: #0ea5e9;
      border-bottom-color: #0ea5e9;
    }
    .content-box {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .content-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .content-title {
      font-weight: 700;
      color: #1e293b;
      font-size: 0.95rem;
    }
    .action-btn {
      border: 1px solid #e2e8f0;
      background: #ffffff;
      color: #64748b;
      font-size: 0.78rem;
      font-weight: 600;
      padding: 6px 12px;
      border-radius: 6px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: background 0.2s;
    }
    .action-btn:hover {
      background: #f8fafc;
      color: #334155;
    }
    .timeline-container {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding: 8px 0;
    }
    .timeline-line {
      position: absolute;
      left: 135px;
      top: 24px;
      bottom: 24px;
      width: 2px;
      background: #e2e8f0;
      z-index: 1;
    }
    .timeline-item {
      display: flex;
      align-items: center;
      position: relative;
      z-index: 2;
    }
    .time-col {
      width: 120px;
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
    }
    .date {
      font-size: 0.85rem;
      font-weight: 700;
      color: #1e293b;
    }
    .time {
      font-size: 0.72rem;
      color: #94a3b8;
      margin-top: 3px;
      font-weight: 500;
    }
    .node-col {
      width: 32px;
      flex-shrink: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }
    .circle {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #ffffff;
      border: 2.5px solid #0ea5e9;
      box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.15);
      z-index: 3;
    }
    .circle.green {
      border-color: #22c55e;
      box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.15);
    }
    .detail-card {
      flex: 1;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 14px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.01);
    }
    .card-grid {
      display: flex;
      flex: 1;
      gap: 16px;
      align-items: center;
    }
    .field {
      display: flex;
      flex-direction: column;
      gap: 4px;
      min-width: 0;
    }
    .field-lbl {
      font-size: 0.7rem;
      color: #94a3b8;
      font-weight: 500;
    }
    .field-val {
      font-size: 0.82rem;
      font-weight: 600;
      color: #334155;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .note-btn {
      background: none;
      border: none;
      color: #0ea5e9;
      font-size: 0.8rem;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 0;
      transition: opacity 0.2s;
      flex-shrink: 0;
      margin-left: 12px;
    }
    .note-btn:hover {
      opacity: 0.85;
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      .tabs-header {
        overflow-x: auto;
        scrollbar-width: none;
        gap: 16px;
      }
      .tabs-header::-webkit-scrollbar {
        display: none;
      }
      .tab {
        font-size: 0.8rem;
        padding: 8px 4px;
      }
      .timeline-line {
        left: 16px !important;
        top: 16px !important;
        bottom: 16px !important;
      }
      .timeline-item {
        align-items: flex-start !important;
        gap: 12px;
      }
      .time-col {
        width: auto !important;
        min-width: 0;
        margin-left: 36px;
        margin-bottom: -8px;
        flex-direction: row !important;
        gap: 8px;
        align-items: center;
      }
      .time {
        margin-top: 0 !important;
      }
      .node-col {
        position: absolute;
        left: 0;
        top: 18px;
        width: 32px !important;
      }
      .detail-card {
        margin-left: 36px;
        flex-direction: column !important;
        align-items: stretch !important;
        gap: 12px;
        width: calc(100% - 36px) !important;
        box-sizing: border-box;
      }
      .card-grid {
        flex-direction: column !important;
        align-items: flex-start !important;
        gap: 12px !important;
      }
      .field {
        width: 100% !important;
      }
      .field-val {
        white-space: normal !important;
      }
    }
  `;

  @property({ type: String, attribute: "tab1-label" }) tab1Label = "Upcoming Appointments";
  @property({ type: String, attribute: "tab2-label" }) tab2Label = "Past Appointments";
  @property({ type: String, attribute: "tab3-label" }) tab3Label = "Medical Records";
  @property({ type: Number, attribute: "active-tab" }) activeTab = 0;
  @property({ type: String, attribute: "timeline-json" }) timelineJson = DEFAULT_TIMELINE_JSON;

  render() {
    let items: TimelineTab[] = [];
    try {
      items = JSON.parse(this.timelineJson);
    } catch {
      items = [];
    }

    const currentTab = items.find(i => i.tabIndex === this.activeTab) || items[0] || { events: [], title: "", actionText: "", badgeText: "" };

    return html`
      <div class="card">
        <div class="tabs-header">
          <div class="tab ${this.activeTab === 0 ? 'active' : ''}" @click=${() => this.activeTab = 0}>${this.tab1Label}</div>
          <div class="tab ${this.activeTab === 1 ? 'active' : ''}" @click=${() => this.activeTab = 1}>${this.tab2Label}</div>
          <div class="tab ${this.activeTab === 2 ? 'active' : ''}" @click=${() => this.activeTab = 2}>${this.tab3Label}</div>
        </div>
        <div class="content-box">
          <div class="content-header">
            <span class="content-title">${currentTab.title}</span>
            ${currentTab.actionText ? html`
              <button class="action-btn">
                ${currentTab.actionText}
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            ` : nothing}
          </div>
          
          <div class="timeline-container">
            ${currentTab.events && currentTab.events.length > 1 ? html`<div class="timeline-line"></div>` : ""}
            ${(currentTab.events || []).map((item, idx) => html`
              <div class="timeline-item">
                <div class="time-col">
                  <span class="date">${item.date}</span>
                  <span class="time">${item.time}</span>
                </div>
                <div class="node-col">
                  <div class="circle ${idx === 0 ? 'green' : ''}"></div>
                </div>
                <div class="detail-card">
                  <div class="card-grid">
                    ${(item.fields || []).map((field, fIdx) => html`
                      ${fIdx > 0 ? html`<div style="width: 1px; background: #e2e8f0; height: 24px; flex-shrink: 0;"></div>` : ""}
                      <div class="field" style="${fIdx === 0 ? 'flex: 1.2; min-width: 120px;' : 'flex: 1; min-width: 80px;'}">
                        <span class="field-lbl">${field.label}</span>
                        <span class="field-val" style="${fIdx === 0 ? 'color: #1e293b;' : ''}">${field.value}</span>
                      </div>
                    `)}
                  </div>
                  <button class="note-btn">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    Note
                  </button>
                </div>
              </div>
            `)}
          </div>
        </div>
      </div>
    `;
  }
}
