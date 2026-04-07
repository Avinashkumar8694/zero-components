export interface FlowNodeActionResult {
  output?: Record<string, unknown>;
  next?: string | null;
}

export interface NodeActionContext {
  /** Global flow data state */
  data: Record<string, unknown>;
  /** Local flow variables */
  locals: Record<string, unknown>;
  /** Trace logger */
  log: (...args: unknown[]) => void;
}

/**
 * The Switch node evaluates a conditional expression and determines the next branch.
 */
export async function execute(
  config: Record<string, unknown>, 
  input: Record<string, unknown>,
  context?: NodeActionContext
): Promise<FlowNodeActionResult> {
  const expression = String(config.expression ?? "true");
  let result: unknown = false;

  try {
    // Provide a standardized evaluation scope
    const scope = {
      input,
      data: context?.data ?? {},
      locals: context?.locals ?? {},
      JSON,
      Math,
      Date,
    };

    const keys = Object.keys(scope);
    const values = Object.values(scope);
    
    // eslint-disable-next-line @typescript-eslint/no-implied-eval
    const fn = new Function(...keys, `"use strict"; return (${expression});`);
    result = fn(...values);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    context?.log?.(`[Switch] Evaluation failed for "${expression}": ${message}`);
    result = false;
  }

  const matched = Boolean(result);
  context?.log?.(`[Switch] Evaluated "${expression}" → ${matched}`);

  return {
    output: { 
      ...input, 
      __metadata: {
        nodeType: "switch",
        expression,
        result: matched,
      }
    },
    next: null, // Flow engine uses the result to choose the branch
  };
}
