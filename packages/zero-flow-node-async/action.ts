export interface FlowNodeActionResult {
  output?: Record<string, unknown>;
  next?: string | null;
  async?: { enabled: boolean; fork?: boolean };
}

export interface NodeActionContext {
  /** Trace logger */
  log: (...args: unknown[]) => void;
}

/**
 * The Async node instructs the flow-engine to execute the next branch asynchronously.
 * This is used for background tasks or parallel execution.
 */
export async function execute(
  config: Record<string, unknown>, 
  input: Record<string, unknown>,
  context?: NodeActionContext
): Promise<FlowNodeActionResult> {
  // If fork is true, the current branch continues in the background, 
  // and the engine may immediately resume the main flow.
  const fork = config.fork !== undefined ? Boolean(config.fork) : true;

  context?.log?.(`[Async] Instructing background execution (fork: ${fork})`);

  return {
    output: input,
    async: {
      enabled: true,
      fork,
    },
    next: null,
  };
}
