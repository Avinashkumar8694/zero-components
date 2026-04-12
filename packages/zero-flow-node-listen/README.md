# Listen Node

The Listen node waits for a signal or subscription event. It's used for handling asynchronous events within a flow.

## Features

- ✅ Subscribe to channels for events
- ✅ Configurable timeout
- ✅ Available in Flow Designer and Service Designer

## Installation

```html
<script src="https://plugins.zero.org.in/marketplace/components/zero-flow-node-listen/1.0.0/js" type="module"></script>
```

## Basic Usage

### Configuration Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `channel` | string | `""` | Channel name to listen on |
| `timeoutMs` | number | `10000` | Timeout in milliseconds |

## Variable Mapping & Persistence

The Listen node is a **bridge** between asynchronous events and your flow's state. It uses **mappings** to translate event data into project variables.

### Input Mappings (Variable → Node)
You can use input mappings to dynamically set the `channel` or `timeoutMs`.
- **`topicName` (Variable)** → `channel` (Node Property)
- **`customTimeout` (Variable)** → `timeoutMs` (Node Property)

### Output Mappings (Node → Variable)
When an event arrives on the channel, its payload is used to resolve these mappings.
- **`payload.userId`** → `currentUserId`
- **`payload.status`** → `eventStatus`

**Example Mapping Configuration:**
```json
{
  "outputMappings": [
    { "sourceKey": "payload.data", "targetVariable": "lastReceivedData" }
  ]
}
```

## Action Execution

The Listen node acts as a **specialized event listener**. When reached, it uses its autonomous context (`context.waitFor`) to pause the flow and wait for a signal.

```typescript
// Input: Configuration for channel and timeout
// Output: Original input enriched with the received payload

{
  output: {
    ...input,
    "listenPayload": { "id": 1, "status": "completed" }
  },
  next: null
}
```

**Execution Flow:**
1. Identify the event `channel` from node `config`.
2. Determine `timeoutMs` (defaults to 10000ms).
3. Invoke `await context.waitFor(channel, timeoutMs)` autonomously.
4. Capture the signal payload, merge into flow output, and continue.

## Example: Basic Listen

```javascript
// Configuration:
{
  "channel": "service.request"
}
```

**Input:** `{ "requestId": "123" }`
**Listens on:** "service.request" channel

## Example: With Timeout

```javascript
// Configuration:
{
  "channel": "user.response",
  "timeoutMs": 5000  // 5 second timeout
}
```

## Example: Wait for Data

```javascript
// Configuration:
{
  "channel": "data.ready",
  "timeoutMs": 30000  // 30 second timeout
}
```

The flow will wait up to 30 seconds for data to arrive on the "data.ready" channel.

## Use Cases

1. **Async Data** - Wait for data from async operations
2. **Event Handling** - Wait for specific events
3. **Webhooks** - Wait for webhook responses
4. **Pub/Sub** - Subscribe to message channels

## Node Metadata

```json
{
  "type": "listen",
  "label": "Listen",
  "description": "Wait for a signal or subscription event",
  "supportsInput": true,
  "supportsOutput": true,
  "availableIn": ["page-flow", "service"]
}
```

## License

MIT License