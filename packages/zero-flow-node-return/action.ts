export interface FlowNodeActionResult {
  output?: Record<string, unknown> | unknown;
  next?: string | null;
  done?: boolean;
}

export interface NodeActionContext {
  flowInput: Record<string, unknown>;
  data: Record<string, unknown>;
  locals: Record<string, unknown>;
  log: (...args: unknown[]) => void;
}

/**
 * The Return node terminates the flow and returns a result to the caller.
 */
export async function execute(
  config: Record<string, unknown>, 
  input: Record<string, unknown>,
  context?: NodeActionContext
): Promise<FlowNodeActionResult> {
  // Use config.value if mapped (e.g. from a Variable), 
  // otherwise return the current flow payload (input).
  const result = config.value !== undefined ? config.value : input;

  context?.log?.(`[Return] Flow completed with result: ${JSON.stringify(result)}`);

  return {
    output: result,
    done: true,
    next: null,
  };
}
