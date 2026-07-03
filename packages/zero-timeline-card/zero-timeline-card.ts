// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property, state } from "lit/decorators.js";

const DEFAULT_TIMELINE_JSON = JSON.stringify([
  {
    tabIndex: 0,
    badgeText: "Next Appointment",
    events: [
      { date: "26 Nov '19 09:00 - 10:00", title: "Root Canal Treatment", desc: "Drg. Adam H. | Treatment: Open Access" },
      { date: "12 Dec '19 09:00 - 10:00", title: "Root Canal Treatment", desc: "Drg. Adam H. | Treatment: Root Canal prep" }
    ]
  },
  {
    tabIndex: 1,
    badgeText: "Completed",
    events: [
      { date: "15 Oct '19 14:00 - 15:00", title: "Teeth Cleaning & Polish", desc: "Drg. Adam H. | Routine prophylaxis" }
    ]
  },
  {
    tabIndex: 2,
    badgeText: "Intake",
    events: [
      { date: "24 Feb '17 10:00 - 11:00", title: "Medical History Intake", desc: "Drg. Adam H. | Allergy profile: Penicillin" }
    ]
  }
]);

interface TimelineEvent {
  date: string;
  title: string;
  desc: string;
}

interface TimelineTab {
  tabIndex: number;
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
      border: 1px solid #e2e8f0;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
      font-family: inherit;
      display: flex;
      flex-direction: column;
      gap: 20px;
      box-sizing: border-box;
    }
    .tabs-header {
      display: flex;
      border-bottom: 1px solid #e2e8f0;
      overflow-x: auto;
      scrollbar-width: none;
    }
    .tabs-header::-webkit-scrollbar {
      display: none;
    }
    .tab {
      padding: 12px 16px;
      font-size: 0.875rem;
      font-weight: 600;
      color: #64748b;
      border-bottom: 2px solid transparent;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.2s;
    }
    .tab:hover {
      color: #0f172a;
    }
    .tab.active {
      color: #0ea5e9;
      border-bottom-color: #0ea5e9;
    }
    .content-box {
      display: flex;
      flex-direction: column;
      gap: 16px;
      background: #f8fafc;
      border-radius: 12px;
      padding: 20px;
      border: 1px solid #e2e8f0;
    }
    .content-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 12px;
    }
    .content-title {
      font-weight: 700;
      color: #0f172a;
      font-size: 0.9rem;
    }
    .badge {
      font-size: 0.75rem;
      color: #64748b;
      background: #e2e8f0;
      padding: 4px 8px;
      border-radius: 6px;
      font-weight: 600;
    }
    .item-row {
      display: flex;
      gap: 16px;
      align-items: flex-start;
      padding: 4px 0;
    }
    .item-date {
      font-size: 0.82rem;
      font-weight: 700;
      color: #0f172a;
      white-space: nowrap;
      width: 140px;
    }
    .item-body {
      flex: 1;
    }
    .item-title {
      font-size: 0.875rem;
      font-weight: 700;
      color: #0f172a;
    }
    .item-desc {
      font-size: 0.75rem;
      color: #64748b;
      margin-top: 4px;
    }
    .item-btn {
      border: none;
      background: none;
      color: #0ea5e9;
      font-size: 0.82rem;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 0;
    }
    .item-btn:hover {
      text-decoration: underline;
    }
    .item-divider {
      height: 1px;
      background: #e2e8f0;
      margin: 4px 0;
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

    const currentTab = items.find(i => i.tabIndex === this.activeTab) || items[0] || { events: [], badgeText: "" };
    const tabTitle = this.activeTab === 0 ? this.tab1Label : this.activeTab === 1 ? this.tab2Label : this.tab3Label;

    return html`
      <div class="card">
        <div class="tabs-header">
          <div class="tab ${this.activeTab === 0 ? 'active' : ''}" @click=${() => this.activeTab = 0}>${this.tab1Label}</div>
          <div class="tab ${this.activeTab === 1 ? 'active' : ''}" @click=${() => this.activeTab = 1}>${this.tab2Label}</div>
          <div class="tab ${this.activeTab === 2 ? 'active' : ''}" @click=${() => this.activeTab = 2}>${this.tab3Label}</div>
        </div>
        <div class="content-box">
          <div class="content-header">
            <span class="content-title">${tabTitle}</span>
            <span class="badge">${currentTab.badgeText || "Active"}</span>
          </div>
          ${(currentTab.events || []).map((item, idx) => html`
            <div class="item-row">
              <div class="item-date">${item.date}</div>
              <div class="item-body">
                <div class="item-title">${item.title}</div>
                <div class="item-desc">${item.desc}</div>
              </div>
              <button class="item-btn">📄 Action</button>
            </div>
            ${idx < currentTab.events.length - 1 ? html`<div class="item-divider"></div>` : ""}
          `)}
        </div>
      </div>
    `;
  }
}
