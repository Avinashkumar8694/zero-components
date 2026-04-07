// packages/zero-flow-node-lifecycle/action.ts
async function execute(config, input, context) {
  const hookType = String(config.hookType ?? "onInit");
  if (context) {
    context.log?.(`[Lifecycle] Hook triggered: "${hookType}"`);
    context.setLocal("__lifecycle", {
      hookType,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      flowInput: context.flowInput
    });
  }
  return {
    output: {
      ...input,
      hookType
    },
    next: null
  };
}
export {
  execute
};
