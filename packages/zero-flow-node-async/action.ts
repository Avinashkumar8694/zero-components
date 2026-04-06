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
  const strategy = String(config.strategy ?? "queue");
  const delayMs = Number(config.delayMs ?? 0);

  context?.log?.(`[Async] Strategy: ${strategy}, delay: ${delayMs}ms`);

  if (delayMs > 0) {
    await new Promise((resolve) => setTimeout(resolve, delayMs));
  }

  return {
    output: {
      ...input,
      asyncStrategy: strategy,
      delayMs,
    },
    next: null,
  };
}
