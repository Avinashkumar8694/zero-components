// packages/zero-flow-node-listen/action.ts
async function execute(config, input) {
  const channel = String(config.channel ?? "");
  if (!channel.trim()) {
    throw new Error("Listen node has no channel configured");
  }
  return {
    output: {
      ...input,
      listen: {
        channel
      }
    },
    listen: {
      channel,
      timeoutMs: Number(config.timeoutMs ?? 1e4)
    },
    next: null
  };
}
export {
  execute
};
