// packages/zero-flow-node-switch/action.ts
async function execute(config, input, context) {
  const expression = String(config.expression ?? "true");
  let result = false;
  try {
    const scope = {
      input,
      data: context?.data ?? {},
      locals: context?.locals ?? {},
      JSON,
      Math,
      Date
    };
    const keys = Object.keys(scope);
    const values = Object.values(scope);
    const fn = new Function(...keys, `"use strict"; return (${expression});`);
    result = fn(...values);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    context?.log?.(`[Switch] Evaluation failed for "${expression}": ${message}`);
    result = false;
  }
  const matched = Boolean(result);
  context?.log?.(`[Switch] Evaluated "${expression}" \u2192 ${matched}`);
  return {
    output: {
      ...input,
      __metadata: {
        nodeType: "switch",
        expression,
        result: matched
      }
    },
    next: null
    // Flow engine uses the result to choose the branch
  };
}
export {
  execute
};
