// packages/zero-flow-node-call-service/action.ts
async function execute(config, input) {
  const serviceId = String(config.serviceId ?? config.serviceFlowId ?? "");
  if (!serviceId.trim()) {
    throw new Error("Call-service node has no serviceId configured");
  }
  return {
    output: input,
    serviceCall: {
      serviceId,
      startNodeId: String(config.startNodeId ?? ""),
      input
    },
    next: null
  };
}
export {
  execute
};
