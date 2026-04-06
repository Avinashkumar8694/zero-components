// packages/zero-flow-node-async/action.ts
async function execute(config, input, context) {
  const strategy = String(config.strategy ?? "queue");
  const delayMs = Number(config.delayMs ?? 0);
  context?.log?.(`[Async] Strategy: ${strategy}, delay: ${delayMs}ms`);
  if (delayMs > 0) {
    await new Promise((resolve) => setTimeout(resolve, delayMs));
  }
  return {
    output: {
      ...input,
      asyncStrategy: strategy,
      delayMs
    },
    next: null
  };
}
export {
  execute
};
