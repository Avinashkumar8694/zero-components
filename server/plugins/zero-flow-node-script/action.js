// packages/zero-flow-node-script/action.ts
async function execute(config, input, context) {
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
      }
    };
    const keys = Object.keys(scope);
    const values = Object.values(scope);
    const wrappedCode = `"use strict"; return (async () => { ${code} })();`;
    const fn = new Function(...keys, wrappedCode);
    const result = await fn(...values);
    if (result && typeof result === "object" && !Array.isArray(result)) {
      return { output: result };
    }
    return { output: { result } };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Script execution failed: ${message}`);
  }
}
export {
  execute
};
