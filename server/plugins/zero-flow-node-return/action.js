// packages/zero-flow-node-return/action.ts
async function execute(config, input) {
  return {
    output: config.value ?? input,
    done: true,
    next: null
  };
}
export {
  execute
};
