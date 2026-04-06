export interface FlowNodeActionResult {
  output?: Record<string, unknown>;
  next?: string | null;
}

export interface NodeActionContext {
  flowInput: Record<string, unknown>;
  data: Record<string, unknown>;
  locals: Record<string, unknown>;
  log: (...args: unknown[]) => void;
}

export async function execute(
  config: Record<string, unknown>, 
  input: Record<string, unknown>, 
  context?: NodeActionContext
): Promise<FlowNodeActionResult> {
  return {
    output: {
      ...input,
      __start: {
        entryRole: config.entryRole ?? "default",
        context: { flowInput: context?.flowInput ?? {} },
      },
    },
    next: null,
  };
}
