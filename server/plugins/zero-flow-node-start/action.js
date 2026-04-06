// packages/zero-flow-node-start/action.ts
async function execute(config, input, context) {
  return {
    output: {
      ...input,
      __start: {
        entryRole: config.entryRole ?? "default",
        context: { flowInput: context?.flowInput ?? {} }
      }
    },
    next: null
  };
}
export {
  execute
};
