export interface FlowNodeActionResult {
  output?: Record<string, unknown>;
  next?: string | null;
}

export interface NodeActionContext {
  /** The entry triggers input data */
  flowInput: Record<string, unknown>;
  /** Trace logger */
  log: (...args: unknown[]) => void;
  /** Method to persistently set local node-scope variables */
  setLocal: (key: string, value: unknown) => void;
}

export async function execute(
  config: Record<string, unknown>, 
  input: Record<string, unknown>, 
  context?: NodeActionContext
): Promise<FlowNodeActionResult> {
  const hookType = String(config.hookType ?? "onInit");

  // ACTUALLY TRACK: Signal the hook activation
  if (context) {
    context.log?.(`[Lifecycle] Hook triggered: "${hookType}"`);
    context.setLocal("__lifecycle", {
      hookType,
      timestamp: new Date().toISOString(),
      flowInput: context.flowInput,
    });
  }

  return {
    output: {
      ...input,
      hookType,
    },
    next: null,
  };
}
