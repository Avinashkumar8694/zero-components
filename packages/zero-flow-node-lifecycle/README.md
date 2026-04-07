# Lifecycle Node

The Lifecycle node hooks into lifecycle events like onInit, onDestroy, onChanges. It allows flows to respond to component lifecycle events.

## Features

- ✅ Hook into component lifecycle events
- ✅ Available in Flow Designer and Service Designer
- ✅ Context-aware execution

## Installation

```html
<script src="https://plugins.zero.org.in/marketplace/components/zero-flow-node-lifecycle/1.0.0/js" type="module"></script>
```

## Basic Usage

### Configuration Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `hookType` | string | `"onInit"` | Lifecycle hook type |

## Available Hook Types

| Hook | Description |
|------|-------------|
| `onInit` | Called when component initializes |
| `onChanges` | Called when input properties change |
| `onDestroy` | Called when component is destroyed |
| `beforeRouteEnter` | Before route enters |
| `afterRender` | After component renders |

## Action Execution

The Lifecycle node acts as a **specialized hook operator**. When reached, it uses its autonomous context (`context.setLocal`) to persistently signal the hook activation in the flow's metadata.

```typescript
// Input: Configuration for hookType
// Output: Payload enriched with the identified hook

{
  output: {
    ...input,
    "hookType": "onInit"
  },
  next: null
}
```

**Execution Flow:**
1. Identify the hook `hookType` from node `config`.
2. Persistently record the hook metadata (timestamp, input) via `context.setLocal`.
3. Enrich flow output with the `hookType` and continue.

## Example: On Init

```javascript
// Configuration:
{
  "hookType": "onInit"
}
```

Runs when component first initializes - good for setup logic.

## Example: On Changes

```javascript
// Configuration:
{
  "hookType": "onChanges"
}
```

Runs when input properties change - good for reactive updates.

## Example: On Destroy

```javascript
// Configuration:
{
  "hookType": "onDestroy"
}
```

Runs when component is being removed - good for cleanup.

## Use Cases

1. **Initialization** - Setup data, fetch initial state
2. **Reactivity** - Handle property changes
3. **Cleanup** - Release resources, clear timers
4. **Navigation** - Handle route transitions

## Node Metadata

```json
{
  "type": "lifecycle",
  "label": "Lifecycle",
  "description": "Respond to component lifecycle events",
  "supportsInput": false,
  "supportsOutput": true,
  "availableIn": ["page-flow", "service"]
}
```

## License

MIT License