// packages/zero-flow-node-emit/action.ts
async function execute(config, input) {
  return {
    output: input,
    emitted: {
      eventName: String(config.eventName ?? "flow.completed"),
      payload: config.payload ?? input
    },
    next: null
  };
}
export {
  execute
};
