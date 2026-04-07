// packages/zero-flow-node-listen/action.ts
async function execute(config, input, context) {
  const channel = String(config.channel ?? "");
  const timeoutMs = Number(config.timeoutMs ?? 1e4);
  if (!channel.trim()) {
    throw new Error("Listen node has no channel configured");
  }
  let payload = null;
  if (context) {
    context.log?.(`[Listen] Waiting on channel "${channel}"...`);
    payload = await context.waitFor(channel, timeoutMs);
  }
  return {
    output: {
      ...input,
      listenPayload: payload
    },
    next: null
  };
}
export {
  execute
};
