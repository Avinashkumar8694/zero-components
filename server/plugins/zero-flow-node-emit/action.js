// packages/zero-flow-node-emit/action.ts
async function execute(config, input, context) {
  const eventName = String(config.eventName ?? "flow.completed");
  const payload = config.payload !== void 0 ? config.payload : input;
  if (context) {
    context.log?.(`[Emit] Triggering event: "${eventName}"`);
    context.emit(eventName, payload);
  }
  return {
    output: input,
    emitted: {
      eventName,
      payload
    },
    next: null
  };
}
export {
  execute
};
