// packages/zero-flow-node-switch/action.ts
async function execute(config, input, context) {
  const expression = String(config.expression ?? "");
  let result = true;
  if (expression.trim()) {
    try {
      const keys = ["input", "data", "locals"];
      const values = [input, context?.data ?? {}, context?.locals ?? {}];
      const fn = new Function(...keys, `"use strict"; return (${expression});`);
      result = fn(...values);
    } catch {
      result = false;
    }
  }
  context?.log?.(`[Switch] Evaluated "${expression}" \u2192 ${JSON.stringify(result)}`);
  return {
    output: {
      ...input,
      result,
      matched: Boolean(result),
      expression
    },
    next: null
  };
}
export {
  execute
};
