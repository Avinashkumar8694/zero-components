// packages/zero-flow-node-db/action.ts
async function execute(config, input, context) {
  const operation = String(config.operation ?? "query");
  const model = String(config.model ?? "");
  const sql = String(config.sql ?? `SELECT * FROM ${model} WHERE id = ?`);
  const params = Array.isArray(config.params) ? config.params : [input.id];
  let results = [];
  if (context) {
    context.log?.(`[DB] Executing "${operation}" on ${model}`);
    results = await context.db.query(sql, params);
  }
  return {
    output: {
      ...input,
      result: results.length === 1 ? results[0] : results,
      totalCount: results.length
    },
    next: null
  };
}
export {
  execute
};
