# Zero Components Workspace

This workspace contains the library of UI components and flow nodes used by the Zero Studio and Runtime.

## Discovery-First Architecture

The Zero Studio is designed to **automatically discover** entry points and logic within your project. To ensure a seamless experience, follow these standards when creating flows and nodes.

### 1. Naming Flow Entry Points (Start Nodes)

Every flow can have one or more **Start Nodes**. These nodes act as the "Public API" of your flow.

- **Use Descriptive Labels**: In the Flow Designer, set the `Label` of your Start Node to something human-readable (e.g., `Submit Contact Form`, `On Page Load`, `Handle OAuth Callback`).
- **Studio Integration**: The Page Designer's Inspector Panel uses these labels to populate dropdowns. If you don't label your start node, it will show as "start" in the dropdown, making it difficult to distinguish from other entry points.

### 2. Wiring Triggers without IDs

When configuring a UI component (like a Button) to trigger a flow:

1.  Select the **Target Type** as `Flow`.
2.  Use the **Target Id** dropdown to select the desired flow by name.
3.  Use the **Start Node** dropdown to select the specific action you want to trigger.

**Pro Tip**: You no longer need to manually type or copy-paste UUIDs. If a start node isn't appearing in the list, verify its `type` is set to `start` in the Flow Designer.

## Development Workflow

### Building Components
To build the components and make them available to the Studio registry:
```bash
npm run build
```

### Adding New Flow Nodes
1. Create a new package in `packages/`.
2. Use `@RendererComponent` for the UI/Studio representation.
3. Use `@environment common` (or `page` / `server`) to control visibility.
4. Export a `NodeActionExecutor` in `action.ts` for the Flow Engine to run.

## Support
For more details on specific components, see the `README.md` within each package directory.
