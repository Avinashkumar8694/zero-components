/**
 * Zero Studio Expression Evaluator — executes JS code in a limited scope.
 */
export function evaluateExpression(
  expression: string,
  scope: Record<string, unknown>,
): unknown {
  const cleanExp = expression.trim().replace(/^\{\{|\}\}$/g, "").trim();
  
  if (!cleanExp) {
    return "";
  }

  try {
    // Only pass known, JS-safe aliases as direct variables to the evaluation function.
    // This avoids SyntaxErrors from project variables with spaces in their names.
    const aliases = ["$page", "$system", "$env", "$locale", "$static", "$repeat", "variables", "$"];
    const keys = aliases.filter(key => key in scope);
    const values = keys.map(key => scope[key]);

    // eslint-disable-next-line @typescript-eslint/no-implied-eval
    const fn = new Function(...keys, `"use strict"; return (${cleanExp});`);
    return fn(...values);
  } catch (error) {
    console.warn(`[RendererCore] Expression evaluation failed: "${cleanExp}"`, error);
    return undefined;
  }
}

/**
 * Evaluates an expression and returns a boolean result, typical for visibility conditions.
 */
export function evaluateExpressionSafe(
  expression: string,
  scope: Record<string, unknown>,
): boolean {
  if (!expression || !expression.trim()) return true;
  const result = evaluateExpression(expression, scope);
  return result !== undefined && result !== null && result !== false && result !== "" && result !== 0;
}
