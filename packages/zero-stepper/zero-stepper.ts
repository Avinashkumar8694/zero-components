// @environment page
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from "zero-annotation";
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

interface Step {
  label: string;
  description?: string;
}

export const studioTemplate: ZeroStudioTemplate = {
  kind: "generic",
  templateHtml: [
    "<div style='display:flex;align-items:center;gap:0;font-family:inherit;box-sizing:border-box;'>",
    "<div style='display:flex;flex-direction:column;align-items:center;gap:6px;'>",
    "<div style='width:28px;height:28px;border-radius:50%;background:#6366f1;color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:600;'>1</div>",
    "<span style='font-size:12px;color:#1f2937;font-weight:600;'>Account</span>",
    "</div>",
    "<div style='flex:1;height:2px;min-width:40px;background:#6366f1;margin-top:-18px;'></div>",
    "<div style='display:flex;flex-direction:column;align-items:center;gap:6px;'>",
    "<div style='width:28px;height:28px;border-radius:50%;background:rgba(99,102,241,0.14);color:#6366f1;border:2px solid #6366f1;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:600;'>2</div>",
    "<span style='font-size:12px;color:#1f2937;font-weight:600;'>Profile</span>",
    "</div>",
    "<div style='flex:1;height:2px;min-width:40px;background:#e5e7eb;margin-top:-18px;'></div>",
    "<div style='display:flex;flex-direction:column;align-items:center;gap:6px;'>",
    "<div style='width:28px;height:28px;border-radius:50%;background:#f3f4f6;color:#9ca3af;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:600;'>3</div>",
    "<span style='font-size:12px;color:#9ca3af;font-weight:500;'>Done</span>",
    "</div>",
    "</div>"
  ].join(""),
  labelProp: "activeStep",
  badges: ["Navigation", "Steps"],
};

function escapeStudio(value: string): string {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function safeParseSteps(raw: string | undefined, fallback: Step[]): Step[] {
  if (!raw) return fallback;
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      const cleaned = parsed
        .map((s) =>
          typeof s === "string"
            ? { label: s }
            : s && typeof s.label === "string"
            ? { label: s.label, description: typeof s.description === "string" ? s.description : undefined }
            : null
        )
        .filter(Boolean) as Step[];
      return cleaned.length ? cleaned : fallback;
    }
    return fallback;
  } catch {
    return fallback;
  }
}

@RendererComponent({
  name: "zero-stepper",
  version: "1.0.0",
  title: "Stepper",
  elementSelector: "zero-stepper",
  group: "Navigation",
  iconName: "stepper-icon.png",
})
@applyGlobalStyles()
export class ZeroStepper extends LitElement {
  static getStudioTemplate(config?: ZeroStudioTemplateContext): ZeroStudioTemplate {
    if (!config) return studioTemplate;

    const activeStep = Number(config.props?.activeStep ?? config.studio?.props?.activeStep ?? 1);
    const orientation = (config.props?.orientation ?? config.studio?.props?.orientation) || "horizontal";
    const variant = (config.props?.variant ?? config.studio?.props?.variant) || "numbered";
    const steps = safeParseSteps(config.props?.steps ?? config.studio?.props?.steps, [
      { label: "Account" },
      { label: "Profile" },
      { label: "Done" },
    ]);

    const primary = "var(--uiv-primary-color, #6366f1)";
    const tint = "var(--uiv-bg-tertiary, rgba(99,102,241,0.14))";
    const upcomingBg = "var(--uiv-bg-secondary, #f3f4f6)";
    const border = "var(--uiv-border-color, #e5e7eb)";
    const textColor = "var(--uiv-text-color, #1f2937)";
    const mutedColor = "var(--uiv-text-tertiary, #9ca3af)";
    const horizontal = orientation !== "vertical";

    const marker = (i: number, state: string) => {
      const dot = variant === "dotted";
      const dim = dot ? 12 : 28;
      let bg = upcomingBg;
      let fg = mutedColor;
      let brd = `2px solid ${border}`;
      let content = dot ? "" : String(i + 1);
      if (state === "completed") { bg = primary; fg = "#fff"; brd = "2px solid transparent"; content = dot ? "" : "✓"; }
      else if (state === "active") { bg = dot ? primary : tint; fg = primary; brd = `2px solid ${primary}`; }
      return `<div style='width:${dim}px;height:${dim}px;border-radius:50%;background:${bg};color:${fg};border:${brd};display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:600;box-sizing:border-box;flex:none;'>${content}</div>`;
    };

    const connector = (done: boolean) =>
      horizontal
        ? `<div style='flex:1;height:2px;min-width:32px;background:${done ? primary : border};margin-top:-18px;'></div>`
        : `<div style='width:2px;flex:1;min-height:20px;background:${done ? primary : border};margin-left:13px;'></div>`;

    const cells = steps.map((s, i) => {
      const state = i < activeStep ? "completed" : i === activeStep ? "active" : "upcoming";
      const isActiveOrDone = i <= activeStep;
      const labelHtml = `<span style='font-size:12px;color:${isActiveOrDone ? textColor : mutedColor};font-weight:${i === activeStep ? "600" : "500"};'>${escapeStudio(s.label)}</span>`;
      const descHtml = s.description
        ? `<span style='font-size:11px;color:${mutedColor};'>${escapeStudio(s.description)}</span>`
        : "";
      if (horizontal) {
        return `<div style='display:flex;flex-direction:column;align-items:center;gap:6px;text-align:center;'>${marker(i, state)}${labelHtml}${descHtml}</div>`;
      }
      return `<div style='display:flex;align-items:flex-start;gap:12px;'>${marker(i, state)}<div style='display:flex;flex-direction:column;gap:2px;padding-top:4px;'>${labelHtml}${descHtml}</div></div>`;
    });

    const parts: string[] = [];
    cells.forEach((c, i) => {
      parts.push(c);
      if (i < cells.length - 1) parts.push(connector(i < activeStep));
    });

    return {
      ...studioTemplate,
      templateHtml: [
        `<div style='display:flex;flex-direction:${horizontal ? "row" : "column"};align-items:${horizontal ? "flex-start" : "stretch"};gap:0;font-family:inherit;box-sizing:border-box;'>`,
        parts.join(""),
        "</div>"
      ].join(""),
    };
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
      --st-primary: var(--uiv-primary-color, #6366f1);
      --st-tint: var(--uiv-bg-tertiary, rgba(99, 102, 241, 0.14));
      --st-upcoming: var(--uiv-bg-secondary, #f3f4f6);
      --st-border: var(--uiv-border-color, #e5e7eb);
      --st-text: var(--uiv-text-color, #1f2937);
      --st-muted: var(--uiv-text-tertiary, #9ca3af);
    }

    .stepper {
      display: flex;
      font-family: inherit;
      box-sizing: border-box;
    }
    .stepper.horizontal { flex-direction: row; align-items: flex-start; }
    .stepper.vertical { flex-direction: column; align-items: stretch; }

    .step {
      display: flex;
      gap: 6px;
    }
    .horizontal .step {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .vertical .step {
      flex-direction: row;
      align-items: flex-start;
      gap: 12px;
    }

    .marker {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      border: 2px solid var(--st-border);
      background: var(--st-upcoming);
      color: var(--st-muted);
      font-size: 0.8125rem;
      font-weight: 600;
      box-sizing: border-box;
      flex: none;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .marker:hover { transform: translateY(-1px); }

    .dotted .marker { width: 12px; height: 12px; }

    .step.completed .marker {
      background: var(--st-primary);
      border-color: transparent;
      color: #ffffff;
    }
    .step.active .marker {
      border-color: var(--st-primary);
      color: var(--st-primary);
      background: var(--st-tint);
      box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.12);
    }
    .dotted .step.active .marker {
      background: var(--st-primary);
    }

    .body {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .vertical .body { padding-top: 4px; }

    .label {
      font-size: 0.75rem;
      font-weight: 500;
      color: var(--st-muted);
    }
    .step.completed .label,
    .step.active .label { color: var(--st-text); }
    .step.active .label { font-weight: 600; }

    .desc {
      font-size: 0.6875rem;
      color: var(--st-muted);
    }

    .connector {
      background: var(--st-border);
      transition: background 0.25s ease;
    }
    .connector.done { background: var(--st-primary); }
    .horizontal .connector {
      flex: 1;
      height: 2px;
      min-width: 32px;
      margin-top: 13px;
    }
    .vertical .connector {
      width: 2px;
      flex: 1;
      min-height: 20px;
      margin-left: 13px;
    }
  `;

  @property({ type: String }) steps =
    '[{"label":"Account","description":"Sign up"},{"label":"Profile","description":"Add details"},{"label":"Done","description":"All set"}]';
  @property({ type: Number, attribute: "active-step" }) activeStep = 1;
  @property({ type: String }) orientation = "horizontal";
  @property({ type: String }) variant = "numbered";

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXTAREA,
    displayLabel: "Steps (JSON array of {label, description})",
    fieldMappings: "steps"
  })
  get stepsConfig() { return this.steps; }
  set stepsConfig(val: string) { this.steps = val; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.NUMBER_INPUT,
    displayLabel: "Active Step (index)",
    fieldMappings: "activeStep"
  })
  get activeStepConfig() { return this.activeStep; }
  set activeStepConfig(val: number) { this.activeStep = Math.max(0, Number(val) || 0); }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Orientation",
    fieldMappings: "orientation",
    optionItems: [
      { label: "Horizontal", value: "horizontal" },
      { label: "Vertical", value: "vertical" }
    ]
  })
  get orientationConfig() { return this.orientation; }
  set orientationConfig(val: string) { this.orientation = val || "horizontal"; }

  @RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Variant",
    fieldMappings: "variant",
    optionItems: [
      { label: "Numbered", value: "numbered" },
      { label: "Dotted", value: "dotted" }
    ]
  })
  get variantConfig() { return this.variant; }
  set variantConfig(val: string) { this.variant = val || "numbered"; }

  private parseSteps(): Step[] {
    return safeParseSteps(this.steps, []);
  }

  @RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: "On Step Click",
    eventTrigger: "on-step-click"
  })
  handleStepClick(index: number, step: Step) {
    this.dispatchEvent(
      new CustomEvent("on-step-click", {
        detail: { index, label: step.label },
        bubbles: true,
        composed: true
      })
    );
  }

  render() {
    const steps = this.parseSteps();
    const active = this.activeStep;
    const horizontal = this.orientation !== "vertical";

    return html`
      <div class="stepper ${horizontal ? "horizontal" : "vertical"} ${this.variant}">
        ${steps.map((s, i) => {
          const state = i < active ? "completed" : i === active ? "active" : "upcoming";
          const marker =
            this.variant === "dotted"
              ? ""
              : state === "completed"
              ? "✓"
              : String(i + 1);
          return html`
            <div class="step ${state}">
              <div
                class="marker"
                role="button"
                aria-current=${i === active ? "step" : "false"}
                @click=${() => this.handleStepClick(i, s)}
              >${marker}</div>
              <div class="body">
                <span class="label" @click=${() => this.handleStepClick(i, s)}>${s.label}</span>
                ${s.description ? html`<span class="desc">${s.description}</span>` : ""}
              </div>
            </div>
            ${i < steps.length - 1
              ? html`<div class="connector ${i < active ? "done" : ""}"></div>`
              : ""}
          `;
        })}
      </div>
    `;
  }
}
