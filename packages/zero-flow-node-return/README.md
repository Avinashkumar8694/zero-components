# Return Node

The Return node ends the flow execution and returns a value. It marks the completion of a flow with a final output.

## Features

- ✅ End flow execution with a value
- ✅ Available in Flow Designer and Service Designer
- ✅ Supports dynamic return values

## Installation

```html
<script src="https://plugins.zero.org.in/marketplace/components/zero-flow-node-return/1.0.0/js" type="module"></script>
```

## Basic Usage

### Configuration Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | string | `"result"` | Expression that produces the return value |

## Variable Mapping & Persistence

The Return node specifies what data leaves the flow. You use **Input Mappings** to decide which of your flow variables should be the final output.

### Input Mappings (Variable → Node)
Map your internal flow variables to the node's `value` property.
- **`userData` (Variable)** → `value` (Node Property)
- **`apiResponse` (Variable)** → `value` (Node Property)

### Output Mappings (Node → Variable)
*Not used for the Return node*, as this is the final step in the flow.

**Example Mapping Configuration:**
```json
{
  "inputMappings": [
    { "sourceVariable": "finalResults", "targetKey": "value" }
  ]
}
```

## Available Variables (Return Payload)

The Return node autonomously sends your calculated results back to the caller (e.g., another flow or a front-end component).

| Variable Source | Description | Return Payload |
| :--- | :--- | :--- |
| `input` | Directly return the initial trigger payload. | `return input` |
| `state` | Return the final results from the project context. | `return state.results` |

## Real-World Example: Sub-flow Termination

This example demonstrates how to set up a node to autonomously return a calculated value when a service-flow completes.

**1. Return Configuration:**
Target Variable: `finalOutput`

**2. Autonomous Result Mapping:**
You want to map the results of previous logic into the final output object.

**3. Execution & Result:**
The flow engine terminates the current thread and returns the payload to the caller immediately.

```typescript
// Context before Return:
// { "calcResult": 10.5, "status": "done" }

// Execution Result (Return):
{
  "total": 10.5,
  "status": "success"
}
```

## Action Execution

The Return node acts as a **specialized terminator**. When reached, it signals the completion of the current flow branch and passes the final state as the execution output.

```typescript
// Input: Final branch payload
// Output: Flow termination signal

{
  output: {
    ...input,
  },
  next: null
}
```

## Example: Return Input

```javascript
// Configuration:
{
  "value": "result"
}
```

**Input:** `{ "result": { "status": "success" } }`
**Output:** `{ "status": "success" }`

## Example: Return Custom Value

```javascript
// Configuration:
{
  "value": "{ success: true, message: 'Operation completed' }"
}
```

**Output:** `{ "success": true, "message": "Operation completed" }`

## Example: Return Transformed Data

```javascript
// Configuration:
{
  "value": "{ id: input.id, status: 'processed', timestamp: new Date().toISOString() }"
}
```

## Example: Return from Script Output

```javascript
// Configuration:
{
  "value": "result"
}
```

When connected after a Script node, returns the script's output.

## Flow Configuration

In Flow Designer:
- **One input handle** (from previous node)
- **No output handles** (this is the end)

```
[Start] --> [Process] --> [Return]
```

## Use Cases

1. **API Responses** - Return data to the caller
2. **Flow Completion** - Mark flow as complete
3. **Transform Output** - Transform data before returning
4. **Error Handling** - Return error information

## Node Metadata

```json
{
  "type": "return",
  "label": "Return",
  "description": "Finish the flow with an output payload",
  "supportsInput": true,
  "supportsOutput": false,
  "availableIn": ["page-flow", "service"]
}
```

## License

MIT License