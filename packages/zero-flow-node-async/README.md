# Async Node

The Async node provides asynchronous flow control with strategies like queue, debounce, retry, and schedule. It's used for handling async operations.

## Features

- ✅ Multiple async strategies (queue, debounce, retry, schedule)
- ✅ Configurable delay in milliseconds
- ✅ Logging support for debugging
- ✅ Available in Flow Designer and Service Designer

## Installation

```html
<script src="https://plugins.zero.org.in/marketplace/components/zero-flow-node-async/1.0.0/js" type="module"></script>
```

## Basic Usage

### Configuration Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `strategy` | string | `"queue"` | Async strategy: queue, debounce, retry, schedule |
| `delayMs` | number | `0` | Delay in milliseconds |

## Variable Mapping & Persistence

The Async node uses **input mappings** to control how a background task is initiated.

### Input Mappings (Variable → Node)
Use these to dynamically control background execution.
- **`isBackgroundEnabled` (Variable)** → `enabled`
- **`shoudForkExecution` (Variable)** → `fork`

### Output Mappings (Node)
## Available Variables (Background Context)

The Async node autonomously encapsulates your project's variables and moves execution into a non-blocking thread.

| Variable Source | Description | Background Context |
| :--- | :--- | :--- |
| `input` | Pass the current flow's entry data to the job. | `input.id` |
| `state` | Use global project state in the background. | `state.config` |

## Real-World Example: Background Data Processing

This example demonstrates how to set up a node to autonomously process a large payload without blocking the user's current interaction.

**1. Async Configuration:**
The node spawns a secondary "Background Worker" process.

**2. Autonomous State Injection:**
Your local variables are autonomously cloned and passed into the worker's scope.

**3. Execution & Result:**
The worker processes the data and autonomously updates your project's `state` proxy when finished.

```typescript
// Main Flow: User clicks "Process Data" -> triggers Async Node

// Autonomous worker payload:
// { "data": [1, 2, 3, 4] }

// Execution Result (Background):
// 1. Process data for 5 seconds (non-blocking)
// 2. update state: state.reportsReady = true;
```

**Example Mapping Configuration:**
```json
{
  "inputMappings": [
    { "sourceVariable": "runInBackground", "targetKey": "fork" }
  ]
}
```

## Action Execution

The Async node acts as a **specialized background operator**. When reached, it marks the current step as asynchronous, allowing the flow engine to continue other branches while this logic executes out-of-band.

```typescript
// Input: Trigger for background execution
// Output: Original input payload

{
  output: {
    ...input,
  },
  next: null
}
```

## Strategy Options

### 1. Queue

Executes immediately but marks the step as queued for processing.

```javascript
{
  "strategy": "queue",
  "delayMs": 0
}
```

### 2. Debounce

Delays execution until no new inputs arrive within the delay period.

```javascript
{
  "strategy": "debounce",
  "delayMs": 500
}
```

Useful for: Search inputs, auto-save, etc.

### 3. Retry

Will retry the operation if it fails (requires downstream error handling).

```javascript
{
  "strategy": "retry",
  "delayMs": 1000
}
```

### 4. Schedule

Schedules execution for a specific time in the future.

```javascript
{
  "strategy": "schedule",
  "delayMs": 5000  // Execute after 5 seconds
}
```

## Example: Debounced Search

```javascript
// Configuration:
{
  "strategy": "debounce",
  "delayMs": 300
}
```

Useful for debouncing search API calls to reduce server load.

## Example: Delayed Notification

```javascript
// Configuration:
{
  "strategy": "schedule",
  "delayMs": 2000  // Show notification after 2 seconds
}
```

## Example: Queue Processing

```javascript
// Configuration:
{
  "strategy": "queue",
  "delayMs": 0
}
```

## Use Cases

1. **Debounced Search** - Wait for user to stop typing before searching
2. **Delayed Notifications** - Show notifications after a delay
3. **Scheduled Tasks** - Execute tasks at specific times
4. **Retry Logic** - Handle failed operations
5. **Rate Limiting** - Control request frequency

## Node Metadata

```json
{
  "type": "async",
  "label": "Async",
  "description": "Queue work, debounce, retry, or schedule",
  "supportsInput": true,
  "supportsOutput": true,
  "availableIn": ["page-flow", "service"]
}
```

## License

MIT License