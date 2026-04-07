export interface FlowNodeActionResult {
  output?: Record<string, unknown>;
  next?: string | null;
}

export interface NodeActionContext {
  /** The entry triggers input data */
  flowInput: Record<string, unknown>;
  /** Global flow data state */
  data: Record<string, unknown>;
  /** Local flow variables */
  locals: Record<string, unknown>;
  /** Trace logger */
  log: (...args: unknown[]) => void;
  /** Method to persistently set global project variables */
  setData: (key: string, value: unknown) => void;
  /** Method to persistently set local node-scope variables */
  setLocal: (key: string, value: unknown) => void;
}

/**
 * The Start node marks the entry point of a flow execution.
 * It initializes the flow state with the provided input.
 */
export async function execute(
  config: Record<string, unknown>, 
  input: Record<string, unknown>, 
  context?: NodeActionContext
): Promise<FlowNodeActionResult> {
  // Capture initial input from trigger payload
  const entryData = context?.flowInput ?? input ?? {};

  // ACTUALLY INITIALIZE: Inject all entry data into global flow context
  if (context) {
    for (const [key, value] of Object.entries(entryData)) {
      context.setData(key, value);
    }
    
    // Explicitly set metadata
    context.setLocal("__metadata", {
      nodeType: "start",
      entryRole: String(config.entryRole ?? "default"),
      timestamp: new Date().toISOString(),
    });
  }

  return {
    output: entryData,
    next: null,
  };
}
