export interface FlowNodeActionResult {
  output?: Record<string, unknown>;
  next?: string | null;
  listen?: { channel: string; timeoutMs?: number };
}

export async function execute(config: Record<string, unknown>, input: Record<string, unknown>): Promise<FlowNodeActionResult> {
  const channel = String(config.channel ?? "");
  if (!channel.trim()) {
    throw new Error("Listen node has no channel configured");
  }

  return {
    output: {
      ...input,
      listen: {
        channel,
      },
    },
    listen: {
      channel,
      timeoutMs: Number(config.timeoutMs ?? 10000),
    },
    next: null,
  };
}
