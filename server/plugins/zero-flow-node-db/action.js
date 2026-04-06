// packages/zero-flow-node-db/action.ts
async function execute(config, input) {
  return {
    output: {
      ...input,
      db: {
        operation: config.operation ?? "query",
        source: config.source ?? "primary-db",
        model: config.model ?? ""
      }
    },
    next: null
  };
}
export {
  execute
};
