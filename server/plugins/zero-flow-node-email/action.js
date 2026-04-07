// packages/zero-flow-node-email/action.ts
async function execute(config, input, context) {
  const template = String(config.template ?? "notification");
  const to = String(config.to ?? "");
  const subject = String(config.subject ?? "");
  const params = config.params ?? input;
  if (context) {
    context.log?.(`[Email] Sending "${template}" to ${to}`);
    await context.mailer.send(to, template, { ...params, subject });
  }
  return {
    output: input,
    next: null
  };
}
export {
  execute
};
