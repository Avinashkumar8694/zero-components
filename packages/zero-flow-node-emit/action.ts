export interface FlowNodeActionResult {
  output?: Record<string, unknown>;
  next?: string | null;
  emitted?: { eventName: string; payload?: unknown };
}

export async function execute(config: Record<string, unknown>, input: Record<string, unknown>): Promise<FlowNodeActionResult> {
  return {
    output: input,
    emitted: {
      eventName: String(config.eventName ?? "flow.completed"),
      payload: config.payload ?? input,
    },
    next: null,
  };
}
