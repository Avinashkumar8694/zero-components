export interface FlowNodeActionResult {
  output?: Record<string, unknown> | unknown;
  next?: string | null;
}

export interface NodeActionContext {
  /** The entry triggers input data */
  flowInput: Record<string, unknown>;
  /** Global flow data state */
  data: Record<string, unknown>;
  /** Local flow variables */
  locals: Record<string, unknown>;
  /** Trace logger */
  log: (...args: unknown[]) => void;
  /** Direct side-effect: emit an event */
  emit: (channel: string, payload: unknown) => void;
  /** Direct side-effect: wait for an event */
  waitFor: (channel: string, timeoutMs?: number) => Promise<unknown>;
  /** Method to persistently set global project variables */
  setData: (key: string, value: unknown) => void;
  /** Method to persistently set local node-scope variables */
  setLocal: (key: string, value: unknown) => void;
}

/**
 * The Script node allows custom logic execution with direct state access.
 */
export async function execute(
  config: Record<string, unknown>,
  input: Record<string, unknown>,
  context?: NodeActionContext
): Promise<FlowNodeActionResult> {
  const code = String(config.code ?? "return input;");

  try {
    // ACTIVE STATE PROXY: Allows direct mutation like state.key = val
    const state = context ? new Proxy(context.data, {
      set: (target, prop, value) => {
        context.setData(String(prop), value);
        return Reflect.set(target, prop, value);
      },
      get: (target, prop) => {
        return context.data[String(prop)];
      }
    }) : (context?.data ?? {});

    const scope = {
      input,
      data: context?.data ?? {},
      locals: context?.locals ?? {},
      state, // The orchestrator for direct mutation
      log: context?.log ?? console.log,
      emit: context?.emit,
      waitFor: context?.waitFor,
      JSON,
      Math,
      Date,
      parseInt,
      parseFloat,
      isNaN,
      isFinite,
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
