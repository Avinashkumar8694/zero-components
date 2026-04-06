export interface FlowNodeActionResult {
  output?: Record<string, unknown>;
  next?: string | null;
}

export async function execute(config: Record<string, unknown>, input: Record<string, unknown>): Promise<FlowNodeActionResult> {
  return {
    output: {
      ...input,
      email: {
        template: config.template ?? "notification",
        to: config.to ?? "",
        subject: config.subject ?? "",
      },
    },
    next: null,
  };
}
