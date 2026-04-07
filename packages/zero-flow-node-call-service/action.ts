export interface FlowNodeActionResult {
  output?: Record<string, unknown>;
  next?: string | null;
}

export interface NodeActionContext {
  /** Trace logger */
  log: (...args: unknown[]) => void;
  /** Autonomous Service: Service Executor */
  serviceExecutor: {
    executeService(serviceId: string, startNodeId: string | undefined, input: Record<string, unknown>): Promise<any>;
  };
}

/**
 * The Call-Service node autonomously executes another sub-flow or service.
 */
export async function execute(
  config: Record<string, unknown>, 
  input: Record<string, unknown>,
  context?: NodeActionContext
): Promise<FlowNodeActionResult> {
  const serviceId = String(config.serviceId ?? config.serviceFlowId ?? "");
  const startNodeId = String(config.startNodeId ?? "");

  if (!serviceId.trim()) {
    throw new Error("Call-service node has no serviceId configured");
  }

  // ACTUALLY INVOKE: Trigger the sub-flow now
  let results: any = {};
  if (context) {
    context.log?.(`[Call-Service] Invoking service "${serviceId}"...`);
    const serviceResult = await context.serviceExecutor.executeService(
      serviceId,
      startNodeId || undefined,
      input,
    );
    if (!serviceResult.ok) {
        throw new Error(`Service "${serviceId}" failed: ${serviceResult.error}`);
    }
    results = serviceResult.output;
  }

  return {
    output: {
      ...input,
      ...results,
    },
    next: null,
  };
}
