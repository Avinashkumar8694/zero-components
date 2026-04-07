export interface FlowNodeActionResult {
  output?: Record<string, unknown>;
  next?: string | null;
}

export interface NodeActionContext {
  /** Trace logger */
  log: (...args: unknown[]) => void;
  /** Method to persistently set global project variables */
  setData: (key: string, value: unknown) => void;
  /** Autonomous Service: Database Access */
  db: { query: (sql: string, params?: unknown[]) => Promise<unknown[]> };
}

/**
 * The DB node autonomously executes a database operation.
 */
export async function execute(
  config: Record<string, unknown>, 
  input: Record<string, unknown>,
  context?: NodeActionContext
): Promise<FlowNodeActionResult> {
  const operation = String(config.operation ?? "query");
  const model = String(config.model ?? "");
  const sql = String(config.sql ?? `SELECT * FROM ${model} WHERE id = ?`);
  const params = Array.isArray(config.params) ? config.params : [input.id];

  // ACTUALLY EXECUTE: Trigger the query now
  let results: unknown[] = [];
  if (context) {
    context.log?.(`[DB] Executing "${operation}" on ${model}`);
    results = await context.db.query(sql, params);
  }

  return {
    output: {
      ...input,
      result: results.length === 1 ? results[0] : results,
      totalCount: results.length,
    },
    next: null,
  };
}
