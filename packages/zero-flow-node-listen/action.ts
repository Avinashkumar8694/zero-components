export interface FlowNodeActionResult {
  output?: Record<string, unknown>;
  next?: string | null;
}

export interface NodeActionContext {
  /** Trace logger */
  log: (...args: unknown[]) => void;
  /** Direct side-effect: wait for an event */
  waitFor: (channel: string, timeoutMs?: number) => Promise<unknown>;
}

/**
 * The Listen node instructs the flow-engine to wait for an asynchronous event.
 */
export async function execute(
  config: Record<string, unknown>, 
  input: Record<string, unknown>,
  context?: NodeActionContext
): Promise<FlowNodeActionResult> {
  const channel = String(config.channel ?? "");
  const timeoutMs = Number(config.timeoutMs ?? 10000);

  if (!channel.trim()) {
    throw new Error("Listen node has no channel configured");
  }

  // ACTUALLY LISTEN: Pause execution and wait for the signal
  let payload: unknown = null;
  if (context) {
    context.log?.(`[Listen] Waiting on channel "${channel}"...`);
    payload = await context.waitFor(channel, timeoutMs);
  }

  return {
    output: {
      ...input,
      listenPayload: payload,
    },
    next: null,
  };
}
