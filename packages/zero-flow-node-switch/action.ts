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
  const expression = String(config.expression ?? "");
  let result: unknown = true;

  if (expression.trim()) {
    try {
      const keys = ["input", "data", "locals"];
      const values = [input, context?.data ?? {}, context?.locals ?? {}];
      // eslint-disable-next-line @typescript-eslint/no-implied-eval
      const fn = new Function(...keys, `"use strict"; return (${expression});`);
      result = fn(...values);
    } catch {
      result = false;
    }
  }

  context?.log?.(`[Switch] Evaluated "${expression}" → ${JSON.stringify(result)}`);

  return {
    output: { 
      ...input, 
      result, 
      matched: Boolean(result), 
      expression 
    },
    next: null,
  };
}
