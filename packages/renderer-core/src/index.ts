import { type TemplateResult } from "lit";
import { html, unsafeStatic } from "lit/static-html.js";
import { ref } from "lit/directives/ref.js";
import type { FlowFieldDefinition, StudioSchema, ThemeDefinition, UIComponentNode, VariableDefinition } from "@zero/schema";
import { resolveOAuthConfig } from "@zero/auth-config";
import { type LayoutType, LayoutManager } from "./layout-manager";
import { evaluateExpression, evaluateExpressionSafe } from "./evaluator";

export { type LayoutType, LayoutManager, evaluateExpression, evaluateExpressionSafe };

export interface RuntimeRegistry {
  ensureComponentLoaded: (componentName: string, version: string) => Promise<void>;
}

export interface RuntimeContext {
  registry: RuntimeRegistry;
  navigate: (path: string) => void;
  emit: (eventName: string, payload?: unknown) => void;
}

export class SchemaRenderer {
  private activeSchema?: StudioSchema;

  constructor(private readonly context: RuntimeContext) { }

  setActiveSchema(schema: StudioSchema): void {
    this.activeSchema = schema;
  }

  async preloadDependencies(schema: StudioSchema): Promise<void> {
    this.activeSchema = schema;
    const marketplacePluginNames = new Set(
      schema.plugins
        ?.filter(p => !p.isCore)
        ?.map(p => p.name) || []
    );
    
    const localDeps = schema.dependencies.filter(dep => {
      const [componentName] = dep.split("@");
      return !marketplacePluginNames.has(componentName);
    });

    const loads = localDeps.map((dependency: string) => {
      const [componentName, version] = dependency.split("@");
      return this.context.registry.ensureComponentLoaded(componentName, version);
    });

    await Promise.all(loads);
  }

  validateRuntimeAuth(schema: StudioSchema): void {
    this.activeSchema = schema;
    resolveOAuthConfig(schema.auth);
  }

  resolveRoute(schema: StudioSchema, pathName: string): UIComponentNode {
    this.activeSchema = schema;
    const matchedRoute = schema.routes.find((route) => route.path === pathName) ?? schema.routes[0];
    return findNode(schema.root, matchedRoute?.pageNodeId ?? schema.root.id) ?? schema.root;
  }

  createBindingScope(
    schema: StudioSchema,
    pathName: string,
    stateSnapshot?: { global: Record<string, unknown>; pages: Record<string, Record<string, unknown>>; components: Record<string, Record<string, unknown>> }
  ): Record<string, unknown> {
    this.activeSchema = schema;
    const route = schema.routes.find((item) => item.path === pathName) ?? schema.routes[0];
    const pageVariables = (schema.variables?.page ?? []).filter((variable) => variable.pageNodeId === route?.pageNodeId);
    const locale = schema.variables?.locales?.[0];
    const globalState = stateSnapshot?.global;

    const baseScope = {
      page: {
        vars: resolveVariableBucket(pageVariables, {}, globalState),
        flow: mapFlowContracts(schema.flows.find((flow) => flow.id === route?.pageFlowId)?.nodes),
      },
      services: {
        shared: resolveVariableBucket(schema.variables?.service ?? [], {}, globalState),
        ...mapServiceContracts(schema),
      },
      system: {
        route: {
          path: route?.path ?? pathName,
          pageNodeId: route?.pageNodeId ?? schema.root.id,
        },
        user: {
          locale: locale?.code ?? "en-IN",
        },
        get layout() { return LayoutManager.instance.layout; },
      },
      locale: {
        vars: resolveVariableBucket(schema.variables?.locale ?? [], {}, globalState),
        messages: locale?.messages ?? {},
      },
      models: Object.fromEntries((schema.variables?.models ?? []).map((model) => [safeKey(model.name), model.fields])),
      env: {} as Record<string, unknown>,
      repeat: {} as Record<string, unknown>,
      static: resolveVariableBucket(schema.variables?.setting ?? [], {}, globalState),
    };

    const finalScope = {
      ...baseScope,
      page: {
        ...baseScope.page,
        vars: resolveVariableBucket(pageVariables, baseScope, globalState),
      },
      services: {
        ...baseScope.services,
        shared: resolveVariableBucket(schema.variables?.service ?? [], baseScope, globalState),
      },
      locale: {
        ...baseScope.locale,
        vars: resolveVariableBucket(schema.variables?.locale ?? [], baseScope, globalState),
      },
    };

    const pageVarsProxy: any = new Proxy(finalScope.page.vars, {
      get(target, prop) {
        if (prop === "vars") {
          return pageVarsProxy;
        }
        return Reflect.get(target, prop);
      },
      set(target, prop, value) {
        return Reflect.set(target, prop, value);
      }
    });

    finalScope.page.vars = pageVarsProxy;

    return {
      ...finalScope,
      variables: finalScope, // Legacy/Full path support
      $: pageVarsProxy,
      $page: pageVarsProxy,
      $system: finalScope.system,
      $locale: finalScope.locale.vars,
      $env: finalScope.env,
      $repeat: finalScope.repeat,
      $static: finalScope.static,
    };
  }

  createThemeStyle(theme: ThemeDefinition): string {
    const entries = Object.values(theme.tokens)
      .flatMap((group) => Object.entries(group))
      .map(([key, value]) => {
        const kebabKey = toKebabCase(key);
        const prefix = kebabKey.startsWith("--") ? "" : "--";
        return `${prefix}${kebabKey}:${value};`;
      });

    return entries.join("");
  }

  renderNode(node: UIComponentNode, scope: Record<string, unknown> = {}): TemplateResult {
    if (node.repeat?.enabled && node.repeat.source) {
      const repeatedItems = resolveBindingValue(node.repeat.source, scope);
      if (Array.isArray(repeatedItems)) {
        if (repeatedItems.length === 0 && node.repeat.emptyText) {
          return html`<div>${node.repeat.emptyText}</div>`;
        }
        const alias = node.repeat.alias?.trim() || "item";
        return html`${repeatedItems.map((item, index) =>
          this.renderResolvedNode(
            {
              ...node,
              repeat: undefined,
            },
            {
              ...scope,
              repeat: { item, index },
              [alias]: item,
              index,
            },
            `${node.id}-${index}`,
          ))}`;
      }
    }

    return this.renderResolvedNode(node, scope, node.id);
  }

  private renderResolvedNode(node: UIComponentNode, scope: Record<string, unknown>, renderId: string): TemplateResult {
    const resolvedNode = applyBindings(node, scope);
    if (!isVisible(resolvedNode.visibilityCondition, scope)) {
      return html``;
    }

    const children = resolvedNode.children.map((child: UIComponentNode) => this.renderNode(child, scope));
    const inlineStyle = serializeStyles(resolvedNode.styles);
    const responsiveCss = serializeResponsiveCss(resolvedNode, renderId);

    if (resolvedNode.componentName === "page-root") {
      return html`${responsiveCss ? html`<style>${responsiveCss}</style>` : null}<section data-node-id=${renderId} style=${inlineStyle}>${children}</section>`;
    }

    if (resolvedNode.componentName === "zero-page-ref") {
      const pageId = resolvedNode.props.pageId;
      if (typeof pageId === "string" && pageId && this.activeSchema) {
        const matchedPage = findNode(this.activeSchema.root, pageId);
        if (matchedPage) {
          const matchedChildren = matchedPage.children.map((child: UIComponentNode) => this.renderNode(child, scope));
          return html`${responsiveCss ? html`<style>${responsiveCss}</style>` : null}<div class="zero-page-ref-wrapper" data-node-id=${renderId} style=${inlineStyle}>${matchedChildren}</div>`;
        }
      }
      return html``;
    }

    // Construct the versioned tag name to match @RendererComponent registration
    // @RendererComponent registers as: customElements.define(`${elementSelector}-${version}`, ...)
    // e.g., "zero-button" + "1.0.0" → "zero-button-1.0.0"
    const baseName = resolvedNode.componentName.replace(/^@[^/]+\//, "");
    const version = resolvedNode.version || "1.0.0";
    const versionedTag = `${baseName}-${version}`;

    // Use the versioned tag if it's registered, otherwise fall back to base name
    const isVersionedRegistered = !!customElements.get(versionedTag);
    const isBaseRegistered = !!customElements.get(baseName);
    const actualTag = isVersionedRegistered ? versionedTag : baseName;
    const isRegistered = isVersionedRegistered || isBaseRegistered;

    const tag = unsafeStatic(actualTag);
    const props = resolvedNode.props ?? {};
    const customAttributes = resolvedNode.customAttributes ?? {};

    // Forced visibility/layout guards
    let finalStyle = inlineStyle;
    const lowerBase = baseName.toLowerCase();
    
    // 1. Force structural components to block
    const isStructural = lowerBase === "zero-section" || lowerBase === "zero-stack" || lowerBase.includes("zero-panel");
    if (isStructural && !finalStyle.includes("display:")) {
      finalStyle = `display:block;${finalStyle}`;
    }

    // 2. High-fidelity visibility: If not registered, ensure it doesn't collapse to 0x0
    if (!isRegistered) {
      finalStyle = `display:block;min-height:48px;border:1px dashed rgba(0,0,0,0.08);${finalStyle}`;
    }

    return html`${responsiveCss ? html`<style>${responsiveCss}</style>` : null}<${tag}
      ${ref((element) => {
      if (!(element instanceof HTMLElement)) {
        return;
      }
      try {
        applyNodeConfig(element as HTMLElement & Record<string, unknown>, props, customAttributes);
        // Propagate the slot attribute from the schema so children project into named slots
        if (resolvedNode.slot) {
          element.setAttribute("slot", resolvedNode.slot);
        }
      } catch (err) {
        console.warn(`[RendererCore] Failed to apply config to <${actualTag}>:`, err);
      }
    })}
      data-node-id=${renderId}
      style=${finalStyle}
      ${resolvedNode.slot ? html`slot=${resolvedNode.slot}` : null}
    >${children}</${tag}>`;
  }
}

function applyNodeConfig(
  element: HTMLElement & Record<string, unknown>,
  props: Record<string, unknown>,
  customAttributes: Record<string, string>,
): void {
  applyProps(element, props);

  for (const [name, value] of Object.entries(customAttributes)) {
    if (value === null || value === undefined) {
      element.removeAttribute(name);
      continue;
    }
    element.setAttribute(name, value);
  }

  // If the element isn't upgraded yet, re-apply props after it upgrades
  const tagName = element.tagName.toLowerCase();
  if (!customElements.get(tagName)) {
    customElements.whenDefined(tagName).then(() => {
      applyProps(element, props);
    }).catch(() => { /* element may never be defined */ });
  }
}

function applyProps(
  element: HTMLElement & Record<string, unknown>,
  props: Record<string, unknown>,
): void {
  const tagName = element.tagName.toLowerCase();
  
  if (tagName === "section" || tagName === "div") {
    for (const [key, value] of Object.entries(props)) {
      element[key] = value;
    }
    return;
  }

  const registry = (window as any).zero || (window as any).ZeroRegistry;
  const baseTagName = tagName.replace(/-\d+\.\d+\.\d+$/, "");
  const registeredComponent = registry?.components?.[tagName] || registry?.components?.[baseTagName] || registry?.components?.[baseTagName + "-1.0.0"];
  
  if (!registeredComponent || !registeredComponent.inputs) {
    return;
  }

  const allowedKeys = Object.keys(registeredComponent.inputs);

  for (const [key, value] of Object.entries(props)) {
    if (!allowedKeys.includes(key)) {
      continue;
    }

    // Set as JS property (works for upgraded Lit elements)
    element[key] = value;

    // Also set as HTML attribute so unupgraded elements pick it up during upgrade
    if (value === null || value === undefined) continue;
    const attrName = toKebabCase(key);
    if (typeof value === "boolean") {
      if (value) element.setAttribute(attrName, "");
      else element.removeAttribute(attrName);
    } else if (typeof value === "string" || typeof value === "number") {
      element.setAttribute(attrName, String(value));
    }
    // Objects/arrays: only set as JS property, not as attribute
  }
}

function findNode(root: UIComponentNode, nodeId: string): UIComponentNode | null {
  if (root.id === nodeId) {
    return root;
  }

  for (const child of root.children) {
    const found = findNode(child, nodeId);
    if (found) {
      return found;
    }
  }

  return null;
}

function serializeStyles(styles: Record<string, string>): string {
  return Object.entries(styles)
    .map(([key, value]) => `${toKebabCase(key)}:${value}`)
    .join(";");
}

function serializeResponsiveCss(node: UIComponentNode, renderId = node.id): string {
  const selector = `[data-node-id="${renderId}"]`;
  const mobileCss = buildResponsiveRule(selector, node.responsiveStyles?.mobile, node.responsiveProps?.mobile, "mobile");
  const tabletCss = buildResponsiveRule(selector, node.responsiveStyles?.tablet, node.responsiveProps?.tablet, "tablet");
  const desktopCss = buildResponsiveRule(selector, node.responsiveStyles?.desktop, node.responsiveProps?.desktop, "desktop");

  return [
    mobileCss ? `@media (max-width: 767px) { ${mobileCss} }` : "",
    tabletCss ? `@media (min-width: 768px) and (max-width: 1023px) { ${tabletCss} }` : "",
    desktopCss ? `@media (min-width: 1024px) { ${desktopCss} }` : "",
  ].filter(Boolean).join("\n");
}

function buildResponsiveRule(
  selector: string,
  styles?: Record<string, string>,
  props?: Record<string, unknown>,
  _device?: "mobile" | "tablet" | "desktop",
): string {
  const declarations = [
    ...Object.entries(styles ?? {}).map(([key, value]) => `${toKebabCase(key)}:${value}`),
    ...mapResponsivePropsToCssVars(props ?? {}),
  ];

  if (declarations.length === 0) {
    return "";
  }

  return `${selector} { ${declarations.join(";")} }`;
}

function mapResponsivePropsToCssVars(props: Record<string, unknown>): string[] {
  const declarations: string[] = [];
  for (const [key, rawValue] of Object.entries(props)) {
    const value = typeof rawValue === "number" ? `${rawValue}px` : String(rawValue);
    if (key === "columns") declarations.push(`--zero-panel-columns-override:${String(rawValue)}`);
    if (key === "gap") {
      declarations.push(`--zero-panel-gap-override:${value}`);
      declarations.push(`--zero-stack-gap-override:${value}`);
    }
    if (key === "padding") declarations.push(`--zero-panel-padding-override:${value}`);
    if (key === "justify") declarations.push(`--zero-panel-justify-override:${String(rawValue)}`);
    if (key === "align") declarations.push(`--zero-panel-align-override:${String(rawValue)}`);
    if (key === "direction") declarations.push(`--zero-stack-direction-override:${String(rawValue)}`);
    if (key === "justify") declarations.push(`--zero-stack-justify-override:${String(rawValue)}`);
    if (key === "align") declarations.push(`--zero-stack-align-override:${String(rawValue)}`);
    if (key === "wrap") declarations.push(`--zero-stack-wrap-override:${String(rawValue)}`);
    if (key === "padding") declarations.push(`--zero-section-padding-override:${value}`);
    if (key === "maxWidth") declarations.push(`--zero-section-max-width-override:${value}`);
    if (key === "minHeight") declarations.push(`--zero-section-min-height-override:${value}`);
    if (key === "borderRadius") declarations.push(`--zero-section-radius-override:${value}`);
  }
  return declarations;
}

function toKebabCase(value: string): string {
  return value.replace(/[A-Z]/g, (char) => `-${char.toLowerCase()}`);
}

export function isExpression(value: unknown): boolean {
  if (typeof value !== "string") return false;
  const trimmed = value.trim();
  return (
    trimmed.includes("{{") || 
    trimmed.startsWith("$.") ||
    trimmed.startsWith("$page.") || 
    trimmed.startsWith("$system.") || 
    trimmed.startsWith("$env.") || 
    trimmed.startsWith("$locale.") || 
    trimmed.startsWith("$static.") ||
    trimmed.startsWith("$repeat.") ||
    trimmed.startsWith("variables.")
  );
}

function applyBindings(node: UIComponentNode, scope: Record<string, unknown>): UIComponentNode {
  const nextProps = { ...node.props };
  const nextStyles = { ...node.styles };
  const bindings = node.bindings ?? {};

  // 1. Resolve values directly in Props (Universal Resolution)
  for (const [key, value] of Object.entries(nextProps)) {
    if (isExpression(value)) {
      nextProps[key] = resolveBindingValue(value as string, scope);
    }
  }

  // 2. Resolve explicit Bindings (Overrides Props)
  for (const [key, source] of Object.entries(bindings)) {
    const resolved = resolveBindingValue(source, scope);
    if (key.startsWith("prop:")) {
      nextProps[key.slice(5)] = resolved;
      continue;
    }
    if (key.startsWith("style:")) {
      nextStyles[key.slice(6)] = stringifyStyleValue(resolved);
      continue;
    }
    nextProps[key] = resolved;
  }

  return {
    ...node,
    props: nextProps,
    styles: nextStyles,
  };
}

function resolveBindingValue(source: string, scope: Record<string, unknown>): unknown {
  return evaluateExpression(source, scope);
}

function stringifyStyleValue(value: unknown): string {
  if (value == null) {
    return "";
  }
  return typeof value === "string" ? value : String(value);
}

function isVisible(condition: string | undefined, scope: Record<string, unknown>): boolean {
  return evaluateExpressionSafe(condition ?? "", scope);
}

function resolveVariableBucket(
  variables: VariableDefinition[],
  scope: Record<string, unknown>,
  stateOverrides?: Record<string, unknown>
): Record<string, unknown> {
  return Object.fromEntries(
    variables.map((variable) => {
      const key = safeKey(variable.name.replace(/^(page|service|locale|system|local)\./, ""));
      let val = variable.initialValue;
      if (stateOverrides && key in stateOverrides) {
        val = stateOverrides[key];
      } else if (variable.sourceType === "dynamic") {
        val = resolveBindingValue(variable.expression ?? "", scope);
      }
      return [key, val];
    }),
  );
}

function mapFlowContracts(nodes: Array<{ type: string; label: string; config: Record<string, unknown> }> | undefined): Record<string, unknown> {
  const startNodes = (nodes ?? []).filter((node) => node.type === "start");
  return Object.fromEntries(startNodes.map((node) => {
    const entry = safeKey(String(node.config.entryRole ?? node.label ?? "start"));
    return [entry, {
      input: fieldsToObject(readFieldArray(node.config.inputFields)),
      local: fieldsToObject(readFieldArray(node.config.localFields)),
      output: fieldsToObject(readFieldArray(node.config.outputFields)),
    }];
  }));
}

function mapServiceContracts(schema: StudioSchema): Record<string, unknown> {
  return Object.fromEntries((schema.services ?? []).map((service) => [
    safeKey(service.name),
    mapFlowContracts(service.nodes),
  ]));
}

function readFieldArray(value: unknown): FlowFieldDefinition[] {
  return Array.isArray(value) ? value as FlowFieldDefinition[] : [];
}

function fieldsToObject(fields: FlowFieldDefinition[]): Record<string, unknown> {
  return Object.fromEntries(fields.map((field) => [safeKey(field.name), field.defaultValue ?? null]));
}

export function safeKey(value: string): string {
  return value
    .trim()
    .replace(/[^a-zA-Z0-9]+/g, ".")
    .replace(/^\.+|\.+$/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^([0-9])/, "_$1")
    .toLowerCase() || "value";
}

export * from "./zero-renderer";

