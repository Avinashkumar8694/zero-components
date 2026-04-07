// packages/zero-flow-node-start/action.ts
async function execute(config, input, context) {
  const entryData = context?.flowInput ?? input ?? {};
  if (context) {
    for (const [key, value] of Object.entries(entryData)) {
      context.setData(key, value);
    }
    context.setLocal("__metadata", {
      nodeType: "start",
      entryRole: String(config.entryRole ?? "default"),
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    });
  }
  return {
    output: entryData,
    next: null
  };
}
export {
  execute
};
