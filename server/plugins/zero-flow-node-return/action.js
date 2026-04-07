// packages/zero-flow-node-return/action.ts
async function execute(config, input, context) {
  const result = config.value !== void 0 ? config.value : input;
  context?.log?.(`[Return] Flow completed with result: ${JSON.stringify(result)}`);
  return {
    output: result,
    done: true,
    next: null
  };
}
export {
  execute
};
