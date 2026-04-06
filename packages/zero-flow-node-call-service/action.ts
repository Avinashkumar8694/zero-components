export interface FlowNodeActionResult {
  output?: Record<string, unknown>;
  next?: string | null;
  serviceCall?: { serviceId: string; startNodeId: string; input: Record<string, unknown> };
}

export async function execute(config: Record<string, unknown>, input: Record<string, unknown>): Promise<FlowNodeActionResult> {
  const serviceId = String(config.serviceId ?? config.serviceFlowId ?? "");
  if (!serviceId.trim()) {
    throw new Error("Call-service node has no serviceId configured");
  }

  return {
    output: input,
    serviceCall: {
      serviceId,
      startNodeId: String(config.startNodeId ?? ""),
      input,
    },
    next: null,
  };
}
