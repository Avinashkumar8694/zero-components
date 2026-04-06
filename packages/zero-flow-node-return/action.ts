export interface FlowNodeActionResult {
  output?: unknown;
  next?: string | null;
  done?: boolean;
}

export async function execute(config: Record<string, unknown>, input: Record<string, unknown>): Promise<FlowNodeActionResult> {
  return {
    output: config.value ?? input,
    done: true,
    next: null,
  };
}
