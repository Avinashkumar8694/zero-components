# Start Node

The Start node is the entry point for flows in Zero Studio. It marks where a flow begins and can be triggered by routes, events, or manual execution.

## Features

- ✅ Entry point for page flows, auth guards, resolvers, and dialog flows
- ✅ Configurable entry role for categorization
- ✅ Usage notes for documentation
- ✅ Available in Flow Designer and Service Designer

## Installation

```html
<script src="https://plugins.zero.org.in/marketplace/components/zero-flow-node-start/1.0.0/js" type="module"></script>
```

## Basic Usage

### In Flow Designer

The Start node is automatically added as the first node when you create a new flow.

```json
{
  "id": "start-node-1",
  "type": "start",
  "config": {
    "entryRole": "pageEntry",
    "entryUsage": "Entry point for page initialization"
  }
}
```

### Configuration Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `entryRole` | string | `"default"` | Role identifier for this entry point |
| `entryUsage` | string | `""` | Documentation notes about usage |

## Available Variables (Flow Entry)

The Start node autonomously initializes the flow's entry scope using the incoming trigger payload.

| Variable | Description | Usage in Flow |
| :--- | :--- | :--- |
| `input` | The initial data passed by the trigger (e.g., HTTP Body). | `{{input.email}}` |
| `state` | Global project-wide persistent variables. | `{{state.totalVisitors}}` |

## Real-World Example: HTTP Webhook Trigger

This example demonstrates how a flow is initialized when a user submits a signup form via a REST API.

**1. Trigger Configuration:**
An HTTP POST request is sent to your flow endpoint.

**2. Flow Initialization (Autonomous):**
The Start node automatically parses the JSON body and populates the `input` variable.

**3. Execution & Context:**
All subsequent nodes in the graph can now autonomously access this data.

```typescript
// Incoming Trigger Data (JSON):
// { "firstName": "John", "lastName": "Doe", "email": "john@example.com" }

// Starting Flow Context:
{
  "input": {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com"
  },
  "state": {
    "welcomeMessage": "Hello, neighbor!"
  }
}
```

## Variable Mapping & Persistence

The Start node is unique because it captures the **initial payload** of the flow. You can use its results to initialize your project variables.

### Input Mappings (Variable → Node)
*Rarely used for the Start node*, but can be used to pass dynamic context information into the node's `config`.

### Output Mappings (Node → Variable)
Use this to capture the entry data into your project variables. For example:
- **Button click data** → `currentUserSelection`
- **URL Parameter** → `activeRecordId`
- **Webhook payload** → `incomingMessage`

**Example Mapping Configuration:**
```json
{
  "outputMappings": [
    { "sourceKey": "userId", "targetVariable": "currentUserId" },
    { "sourceKey": "token", "targetVariable": "sessionToken" }
  ]
}
```

## Action Execution

The Start node acts as an **autonomous initializer**. When the flow begins, it captures all incoming trigger data and persistently populates the flow's global context.

```typescript
// Input: Trigger payload (e.g. HTTP body, Event data)
// Output: Initialized flow context

{
  output: {
    // Initial payload is passed through
  },
  next: null
}
```

**Execution Flow:**
1. Capture `flowInput` from the trigger source.
2. For each key in the input, invoke `context.setData(key, value)` autonomously.
3. Initialize flow-wide `__metadata` (timestamp, entryRole) via `context.setLocal`.
4. Ensure all subsequent nodes have direct access to these project variables.

## Example: Page Flow Entry

```javascript
// Flow configuration for a page load flow
{
  "name": "On Page Load",
  "kind": "page-flow",
  "trigger": {
    "type": "page-load",
    "sourceNodeId": "start"
  },
  "nodes": [
    {
      "id": "start",
      "type": "start",
      "config": {
        "entryRole": "pageEntry",
        "entryUsage": "Runs when page first loads"
      },
      "position": { "x": 100, "y": 100 }
    },
    {
      "id": "script-1",
      "type": "script",
      "config": {
        "code": "return { message: 'Page initialized' };"
      },
      "position": { "x": 300, "y": 100 }
    }
  ],
  "edges": [
    { "id": "e1", "source": "start", "target": "script-1" }
  ]
}
```

## Example: Auth Guard Entry

```javascript
// Flow configuration for authentication guard
{
  "name": "Auth Guard",
  "kind": "auth-guard",
  "trigger": {
    "type": "route-enter"
  },
  "nodes": [
    {
      "id": "start",
      "type": "start",
      "config": {
        "entryRole": "authGuard",
        "entryUsage": "Validates user authentication on route access"
      }
    }
  ]
}
```

## Use Cases

1. **Page Initialization** - Start flow when a page loads
2. **Form Submission** - Handle form submit events
3. **Button Clicks** - Trigger flows from UI interactions
4. **Auth Guards** - Validate permissions before route access
5. **API Webhooks** - Handle incoming webhook requests

## Integration with Studio

In Zero Studio, the Start node appears in the Flow Designer palette under "Flow Nodes". When added to a flow, it provides:

- Visual representation in the canvas
- Configurable properties in the inspector panel
- Connection handles for linking to next nodes

## Node Metadata

```json
{
  "type": "start",
  "label": "Start",
  "description": "Entry point for route, event, or manual execution",
  "supportsInput": false,
  "supportsOutput": true,
  "availableIn": ["page-flow", "service"]
}
```

## License

MIT License