export interface FlowNodeActionResult {
  output?: Record<string, unknown> | unknown;
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
  const code = String(config.code ?? "return input;");

  try {
    const scope = {
      input,
      data: context?.data ?? {},
      locals: context?.locals ?? {},
      log: context?.log ?? console.log,
      JSON,
      Math,
      Date,
      parseInt,
      parseFloat,
      isNaN,
      isFinite,
      encodeURIComponent,
      decodeURIComponent,
      Array,
      Object,
      String: globalThis.String,
      Number: globalThis.Number,
      Boolean: globalThis.Boolean,
      Map,
      Set,
      Promise,
      console: { 
        log: context?.log ?? console.log, 
        warn: context?.log ?? console.warn, 
        error: context?.log ?? console.error, 
        info: context?.log ?? console.info 
      },
    };

    const keys = Object.keys(scope);
    const values = Object.values(scope);
    const wrappedCode = `"use strict"; return (async () => { ${code} })();`;
    // eslint-disable-next-line @typescript-eslint/no-implied-eval
    const fn = new Function(...keys, wrappedCode);
    const result = await fn(...values);

    if (result && typeof result === "object" && !Array.isArray(result)) {
      return { output: result as Record<string, unknown> };
    }
    return { output: { result } };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Script execution failed: ${message}`);
  }
}
