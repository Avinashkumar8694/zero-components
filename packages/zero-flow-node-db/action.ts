export interface FlowNodeActionResult {
  output?: Record<string, unknown>;
  next?: string | null;
}

export async function execute(config: Record<string, unknown>, input: Record<string, unknown>): Promise<FlowNodeActionResult> {
  return {
    output: {
      ...input,
      db: {
        operation: config.operation ?? "query",
        source: config.source ?? "primary-db",
        model: config.model ?? "",
      },
    },
    next: null,
  };
}
