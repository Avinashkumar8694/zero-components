# Switch Node

The Switch node allows you to branch your flow based on conditional expressions. It evaluates a JavaScript expression and routes the flow accordingly.

## Features

- ✅ Branch based on boolean expressions
- ✅ Access to input, data, and locals variables
- ✅ Multiple output paths via edges
- ✅ Available in Flow Designer and Service Designer

## Installation

```html
<script src="https://plugins.zero.org.in/marketplace/components/zero-flow-node-switch/1.0.0/js" type="module"></script>
```

## Basic Usage

### Configuration Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `expression` | string | `""` | JavaScript expression to evaluate |

## Variable Mapping & Persistence

The Switch node evaluates conditions against its internal scope. You use **input mappings** to inject project variables into this scope.

### Input Mappings (Variable → Node)
Map your project## Available Variables (Conditional Expressions)

The Switch node autonomously evaluates your project's variables to determine branching logic.

| Variable | Description | Expression Usage |
| :--- | :--- | :--- |
| `state` | Access global project state (e.g., user role). | `state.role === 'admin'` |
| `input` | Access the flow trigger payload (e.g., order total). | `input.total > 100` |
| `locals` | Access node-scope variables (e.g., check results). | `locals.isValid === true` |

## Real-World Example: Multi-Step Access Control

This example demonstrates how to evaluate project variables to route a user based on their permissions and the current flow state.

**1. Branching Logic Configuration:**
You want to route the flow into three different paths:

- **Branch A (Admin):** `state.user.role === 'admin'` -> Go to Admin Dashboard
- **Branch B (Premium):** `input.subscriptionStatus === 'active'` -> Go to Premium Tools
- **Branch C (Default):** No expression required -> Go to Basic View

**2. Autonomous Evaluation Result:**
The node will evaluate these logic statements against the current flow context.

```typescript
// Current State (Autonomous):
// state.user.role = "member"
// input.subscriptionStatus = "active"

// Evaluation Result:
// Path A: 'member' === 'admin' (False)
// Path B: 'active' === 'active' (True) -> SELECT BRANCH B
```

**3. Execution & Result:**
The flow engine identifies "Branch B" and proceeds immediately to the Premium sub-flow.
- **`cartCount` (Variable)** → `count` (accessible as `count` in the expression)

### Output Mappings (Node → Variable)
*Not used for the Switch node*, as it purely determines the flow's next branch based on the evaluation result.

**Example Mapping Configuration:**
```json
{
  "inputMappings": [
    { "sourceVariable": "currentUserRole", "targetKey": "role" }
  ]
}
```

## Action Execution

The Switch node acts as a **specialized conditional operator**. When reached, it uses its autonomous context (`context.data` and `context.locals`) to evaluate conditional expressions immediately and determine the next path.

```typescript
// Input: Expressions for branching logic
// Output: Original input + identified next node ID

{
  output: {
    }
  },
  next: null
}
```

## Available Variables

| Variable | Description |
|----------|-------------|
| `input` | The input data passed to this node |
| `data` | Global flow data shared across nodes |
| `locals` | Node-specific local variables |

## Example: Simple Condition

```javascript
// Check if user is admin
input.userRole === 'admin'
```

**Input:** `{ "userRole": "admin", "name": "John" }`
**Output:** `{ "userRole": "admin", "name": "John", "result": true, "matched": true }`

## Example: Numeric Comparison

```javascript
// Check order total
input.orderTotal >= 1000
```

**Input:** `{ "orderTotal": 1500, "customerId": "123" }`
**Output:** `{ "orderTotal": 1500, "result": true, "matched": true }`

## Example: String Matching

```javascript
// Check order status
input.status === 'pending'
```

## Example: Multiple Conditions

```javascript
// Check multiple conditions
input.status === 'approved' && input.amount <= input.creditLimit
```

## Example: Using Data Reference

```javascript
// Reference global data
input.score >= data.passingScore
```

## Example: Complex Logic

```javascript
// Complex boolean expression
(input.isActive === true) && (input.subscription === 'pro' || input.subscription === 'enterprise')
```

## Flow Editor Configuration

In the Flow Designer, the Switch node has:
- **One input handle** (from previous node)
- **Two output handles**: "True" and "False" (or "Match" and "No Match")

```
[Start] ----> [Switch: status === 'approved'] 
                           |
              ____________|____________
             |                          |
         [True Path]              [False Path]
        (Approved flow)          (Rejected flow)
```

## Use Cases

1. **Role-based routing** - Route based on user role
2. **Approval workflows** - Approve/reject based on conditions
3. **Validation** - Validate data and route accordingly
4. **Status checking** - Check order/status and branch
5. **Threshold logic** - Route based on numeric thresholds

## Node Metadata

```json
{
  "type": "switch",
  "label": "Switch",
  "description": "Branch based on expressions or state",
  "supportsInput": true,
  "supportsOutput": true,
  "availableIn": ["page-flow", "service"]
}
```

## License

MIT License