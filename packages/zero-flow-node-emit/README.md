# Emit Node

The Emit node broadcasts events to the UI or runtime. It allows flows to communicate with components and trigger other flows.

## Features

- ✅ Emit custom events with payloads
- ✅ Available in Flow Designer, Service Designer, and Client Page
- ✅ Works with event-driven architecture

## Installation

```html
<script src="https://plugins.zero.org.in/marketplace/components/zero-flow-node-emit/1.0.0/js" type="module"></script>
```

## Basic Usage

### Configuration Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `eventName` | string | `"flow.completed"` | Name of the event to emit |
| `payload` | string | `"result"` | Data to send with event (expression) |

## Available Variables (Event Payload)

The Emit node autonomously constructs your event signal using mapped project data.

| Variable Source | Description | Signal Payload |
| :--- | :--- | :--- |
| `input` | Use flow entry data as the signal body. | `emit("event", input)` |
| `state` | Use global project state in the signal. | `emit("event", { val: state.val })` |

## Real-World Example: Notification Dispatch

This example demonstrates how to emit an internal signal that triggers a secondary "Toast" flow elsewhere in your project.

**1. Event Configuration:**
Event Name: `global.toast`

**2. Autonomous Variable Mapping:**
You want to pass a message from the current flow to the toast sub-system.

**3. Execution & Signal:**
When this node executes, it autonomously takes your local variables and broadcasts them across the Studio's event bus.

```typescript
// Local Context:
// { "msg": "Payment Successful!" }

// Resulting Studio Signal:
{
  "name": "global.toast",
  "payload": {
    "message": "Payment Successful!",
    "type": "success"
  }
}
```

## Variable Mapping & Persistence

The Emit node uses **input mappings** to define what data is sent with the event. 

### Input Mappings (Variable → Node)
Use this to attach your project's variables to the event's payload.
- **`currentOrder` (Variable)** → `payload` (Node Property)
- **`userProfile` (Variable)** → `payload` (Node Property)

### Output Mappings (Node → Variable)
*Not used for the Emit node*, as it initiates an asynchronous signal and doesn't return a result to the current flow.

**Example Mapping Configuration:**
```json
{
  "inputMappings": [
    { "sourceVariable": "orderData", "targetKey": "payload" }
  ]
}
```

## Action Execution

The Emit node acts as a **specialized event operator**. When reached, it uses its autonomous context (`context.emit`) to trigger the signal immediately without return instructions.

```typescript
// Input: Current flow state merged with payload
// Output: Initial payload is passed through

{
  output: {
    // Original input is passed through
  },
  next: null
}
```

## Example: Basic Event Emit

```javascript
// Event name: flow.completed
// Payload: input (default)
```

**Input:** `{ "status": "success", "orderId": "123" }`
**Emits:** `{ "eventName": "flow.completed", "payload": { "status": "success", "orderId": "123" } }`

## Example: Custom Event Name

```javascript
// Configuration:
{
  "eventName": "order.placed",
  "payload": "input"
}
```

**Emits:** `order.placed` event with order data

## Example: Custom Payload

```javascript
// Configuration:
{
  "eventName": "user.notification",
  "payload": "{ title: 'Success', message: 'Order placed!' }"
}
```

## Example: Dynamic Payload

```javascript
// Configuration:
{
  "eventName": "data.saved",
  "payload": "{ id: input.id, timestamp: new Date().toISOString() }"
}
```

## Example: Trigger Component Action

```javascript
// Configuration:
{
  "eventName": "show-notification",
  "payload": "{ type: 'success', message: 'Data saved!' }"
}
```

This can trigger a notification component in the UI to display a message.

## Use Cases

1. **UI Notifications** - Emit events to show notifications
2. **Component Communication** - Trigger component actions
3. **Flow Chaining** - Trigger other flows via events
4. **Analytics** - Emit events for tracking
5. **State Updates** - Notify components of state changes

## Node Metadata

```json
{
  "type": "emit",
  "label": "Emit",
  "description": "Broadcast events back to UI or runtime",
  "supportsInput": true,
  "supportsOutput": true,
  "availableIn": ["page-flow", "service", "client-page"]
}
```

## License

MIT License