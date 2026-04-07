export interface FlowNodeActionResult {
  output?: Record<string, unknown>;
  next?: string | null;
  emitted?: { eventName: string; payload?: unknown };
}

export interface NodeActionContext {
  /** Trace logger */
  log: (...args: unknown[]) => void;
  /** Direct side-effect: emit an event */
  emit: (channel: string, payload: unknown) => void;
}

/**
 * The Emit node instructs the flow-engine to trigger an asynchronous event.
 */
export async function execute(
  config: Record<string, unknown>, 
  input: Record<string, unknown>,
  context?: NodeActionContext
): Promise<FlowNodeActionResult> {
  const eventName = String(config.eventName ?? "flow.completed");
  const payload = config.payload !== undefined ? config.payload : input;

  // ACTUALLY EMIT: Trigger the signal now
  if (context) {
    context.log?.(`[Emit] Triggering event: "${eventName}"`);
    context.emit(eventName, payload);
  }

  return {
    output: input,
    emitted: {
      eventName,
      payload,
    },
    next: null,
  };
}
