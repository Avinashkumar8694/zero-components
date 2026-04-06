// packages/zero-flow-node-email/action.ts
async function execute(config, input) {
  return {
    output: {
      ...input,
      email: {
        template: config.template ?? "notification",
        to: config.to ?? "",
        subject: config.subject ?? ""
      }
    },
    next: null
  };
}
export {
  execute
};
