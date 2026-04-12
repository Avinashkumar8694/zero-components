export interface FlowNodeActionResult {
  output?: Record<string, unknown>;
  next?: string | null;
}

export interface NodeActionContext {
  /** Trace logger */
  log: (...args: unknown[]) => void;
  /** Autonomous Service: Email Dispatch */
  mailer: { send: (to: string, template: string, params?: Record<string, unknown>) => Promise<void> };
}

/**
 * The Email node autonomously dispatches a notification.
 */
export async function execute(
  config: Record<string, unknown>, 
  input: Record<string, unknown>,
  context?: NodeActionContext
): Promise<FlowNodeActionResult> {
  const template = String(config.template ?? "notification");
  const to = String(config.to ?? "");
  const subject = String(config.subject ?? "");
  const params = (config.params as Record<string, unknown>) ?? input;

  // ACTUALLY DISPATCH: Trigger the email now
  if (context) {
    context.log?.(`[Email] Sending "${template}" to ${to}`);
    await context.mailer.send(to, template, { ...params, subject });
  }

  return {
    output: input,
    next: null,
  };
}
