// packages/zero-flow-node-call-service/action.ts
async function execute(config, input, context) {
  const serviceId = String(config.serviceId ?? config.serviceFlowId ?? "");
  const startNodeId = String(config.startNodeId ?? "");
  if (!serviceId.trim()) {
    throw new Error("Call-service node has no serviceId configured");
  }
  let results = {};
  if (context) {
    context.log?.(`[Call-Service] Invoking service "${serviceId}"...`);
    const serviceResult = await context.serviceExecutor.executeService(
      serviceId,
      startNodeId || void 0,
      input
    );
    if (!serviceResult.ok) {
      throw new Error(`Service "${serviceId}" failed: ${serviceResult.error}`);
    }
    results = serviceResult.output;
  }
  return {
    output: {
      ...input,
      ...results
    },
    next: null
  };
}
export {
  execute
};
