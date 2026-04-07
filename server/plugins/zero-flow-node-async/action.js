// packages/zero-flow-node-async/action.ts
async function execute(config, input, context) {
  const fork = config.fork !== void 0 ? Boolean(config.fork) : true;
  context?.log?.(`[Async] Instructing background execution (fork: ${fork})`);
  return {
    output: input,
    async: {
      enabled: true,
      fork
    },
    next: null
  };
}
export {
  execute
};
