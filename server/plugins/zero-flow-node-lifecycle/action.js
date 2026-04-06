// packages/zero-flow-node-lifecycle/action.ts
async function execute(config, input, context) {
  return {
    output: {
      ...input,
      __lifecycle: {
        hookType: config.hookType ?? "onInit",
        context: { flowInput: context?.flowInput ?? {} }
      }
    },
    next: null
  };
}
export {
  execute
};
