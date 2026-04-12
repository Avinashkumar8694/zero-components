# Call Service Node

The Call Service node invokes a reusable service flow. It allows you to call another service defined in your project.

## Features

- ✅ Call existing services
- ✅ Pass input to service
- ✅ Available in Flow Designer, Service Designer, and Client Page

## Installation

```html
<script src="https://plugins.zero.org.in/marketplace/components/zero-flow-node-call-service/1.0.0/js" type="module"></script>
```

## Basic Usage

### Configuration Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `serviceId` | string | `""` | ID of the service to call |
| `serviceFlowId` | string | `""` | Alternative field for service ID |
| `startNodeId` | string | `""` | Optional starting node within service |

## Available Variables (Service Context)

The Call-Service node autonomously passes your project's variables into a secondary "Service" flow and returns the result.

| Variable Source | Description | Usage |
| :--- | :--- | :--- |
| `input` | Pass the current flow's entry data to the service. | `...data: input` |
| `state` | Pass global project variables to the service. | `...id: state.userId` |

## Real-World Example: Invoking Payment Sub-flow

This example demonstrates how to encapsulate complex "Payment" logic in a separate service and call it from your main "Checkout" flow.

**1. Service Configuration:**
Service ID: `payments.processor`

**2. Autonomous Variable Mapping:**
You want to pass the total order amount from your current `input` into the payment service.

**3. Execution & Result:**
The node will autonomously invoke the sub-flow and wait for it to return a `transactionId`.

```typescript
// Current Context:
// { "total": 25.50 }

// Service Call (Internal):
// CallService("payments.processor", { "amount": 25.50 })

// Service Result:
{
  "success": true,
  "transactionId": "TXN_998877"
}
```

## Variable Mapping & Persistence

The Call-Service node uses **input mappings** to define what data is sent to the sub-flow and **output mappings** to capture what it returns.

### Input Mappings (Variable → Node)
Use these to pass project context into the service call.
- **`currentUserId` (Variable)** → `uid` (accessible in the sub-flow as `flowInput.uid`)
- **`orderId` (Variable)** → `id` (accessible in the sub-flow as `flowInput.id`)

### Output Mappings (Node → Variable)
When the sub-flow completes, its return value is sent back. You can persist this into variables.
- **`result.success`** → `isOperationSuccessful`
- **`result.data`** → `serviceResponseDetails`

**Example Mapping Configuration:**
```json
{
  "inputMappings": [
    { "sourceVariable": "orderSummary", "targetKey": "params" }
  ],
  "outputMappings": [
    { "sourceKey": "result.status", "targetVariable": "lastServiceStatus" }
  ]
}
```

## Action Execution

The Call-Service node acts as a **specialized flow invoker**. When reached, it uses its autonomous context (`context.executor`) to trigger the sub-flow immediately and merge its results.

```typescript
// Input: Configuration for serviceId and startNodeId
// Output: Original input enriched with the service results

{
  output: {
    ...input,
    ...results
  },
  next: null
}
```

## Example: Call Basic Service

```javascript
// Configuration:
{
  "serviceId": "user-service"
}
```

**Input:** `{ "userId": "123" }`
**Executes:** Calls "user-service" with input `{ "userId": "123" }`

## Example: Call with Start Node

```javascript
// Configuration:
{
  "serviceId": "payment-service",
  "startNodeId": "validate-payment"
}
```

## Example: Pass Custom Input

```javascript
// Configuration:
{
  "serviceId": "notification-service"
}
```

Input from previous nodes is passed through to the service.

## Service Definition

Services are defined in your project schema:

```json
{
  "services": [
    {
      "id": "user-service",
      "name": "User Service",
      "type": "flow-designer",
      "nodes": [...],
      "edges": [...]
    }
  ]
}
```

## Use Cases

1. **Reusable Logic** - Call common service from multiple flows
2. **Modular Architecture** - Split complex flows into services
3. **API Integration** - Call service that handles API calls
4. **Business Logic** - Encapsulate business rules in services

## Node Metadata

```json
{
  "type": "call-service",
  "label": "Call Service",
  "description": "Invoke a reusable service flow",
  "supportsInput": true,
  "supportsOutput": true,
  "availableIn": ["page-flow", "service", "client-page"]
}
```

## License

MIT License