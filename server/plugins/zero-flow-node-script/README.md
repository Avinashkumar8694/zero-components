# Script Node

The Script node allows you to write custom JavaScript/TypeScript code to transform data, perform calculations, or execute business logic within a flow.

## Features

- ✅ Write custom JavaScript code
- ✅ Access to input, data, and locals context
- ✅ Built-in utility functions (JSON, Math, Date, etc.)
- ✅ Async/await support
- ✅ Error handling with descriptive messages

## Installation

```html
<script src="https://plugins.zero.org.in/marketplace/components/zero-flow-node-script/1.0.0/js" type="module"></script>
```

## Basic Usage

### Configuration Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `language` | string | `"typescript"` | Code language (typescript/javascript) |
| `code` | string | `"return input;"` | The JavaScript code to execute |

## Variable Mapping & Persistence

The Script node is the primary way to transform data. It uses **mappings** to bridge the gap between your project variables and your custom code.

### Input Mappings (Variable → Node)
Map your project variables to keys in the `input` object.
- **`currentUserId` (Variable)** → `uid` (accessible as `input.uid`)
- **`orderTotal` (Variable)** → `amount` (accessible as `input.amount`)

### Output Mappings (Node → Variable)
Capture the object returned by your script and assign its keys to project variables.
- **`fullName`** (Script result) → `formattedName` (Variable)
- **`isValid`** (Script result) → `isFormValid` (Variable)

**Example Mapping Configuration:**
```json
{
  "inputMappings": [
    { "sourceVariable": "userEmail", "targetKey": "emailAddress" }
  ],
  "outputMappings": [
    { "sourceKey": "domain", "targetVariable": "lastEmailDomain" }
  ]
}
```

## Action Execution

The Script node acts as an **autonomous operator**. When executed, it uses the injected `state` proxy to read and persistently update flow variables directly.

```typescript
// Example Script:
// log("Current count: " + state.count);
// state.count++; 
// return { success: true };

{
  output: {
    "result": { "success": true }
  },
  next: null
}
```

**Execution Flow:**
1. Inject a `state` Proxy into the sandbox that maps to the execution context.
2. Direct mutation (e.g. `state.key = value`) autonomously persists data across the flow.
3. Access side-effect helpers like `emit()`, `log()`, `JSON`, and `Math`.
4. Capture return value and merge into the flow payload.

## Available Variables

Your script has direct, autonomous access to the following project context:

| Variable | Description | Usage |
| :--- | :--- | :--- |
| `input` | Read-only access to the trigger's payload. | `input.email` |
| `state` | **Proxy for direct mutation.** Reading/writing updates global project state. | `state.count++` |
| `log` | Helper to send debugging information to the Studio trace. | `log("Value: " + state.val)` |
| `emit` | Helper to trigger an event signal immediately. | `emit("task.done", { id: 1 })` |

## Real-World Example: User Signup Processing

This example demonstrates checking an input email, incrementing a global counter, and logging the result.

```javascript
// 1. Access input data from the trigger
const userEmail = input.email;

if (!userEmail) {
  log("Error: No email provided in signup flow");
  return { success: false, error: "Missing Email" };
}

// 2. Use the 'state' proxy to autonomously update global variables
// This persists 'totalSignups' across your entire project
if (state.totalSignups === undefined) {
  state.totalSignups = 0;
}
state.totalSignups++;

// 3. Log helpful debugging info
log(`Processing signup #${state.totalSignups} for ${userEmail}`);

// 4. Return results (merged into flow output)
return { 
  success: true, 
  signupNumber: state.totalSignups,
  timestamp: new Date().toISOString()
};
```

| Variable | Description |
|----------|-------------|
| `input` | The input data passed to this node |
| `data` | Global flow data shared across nodes |
| `locals` | Node-specific local variables |
| `log` | Logging function for debugging |
| `JSON` | JSON utility for parsing/stringifying |
| `Math` | Math library for calculations |
| `Date` | Date utility |

## Example: Simple Transform

```javascript
// Transform input data
const fullName = `${input.firstName} ${input.lastName}`;
return { fullName: fullName.toUpperCase() };
```

**Input:** `{ "firstName": "John", "lastName": "Doe" }`
**Output:** `{ "fullName": "JOHN DOE" }`

## Example: Conditional Logic

```javascript
// Check user role and return appropriate data
if (input.userRole === 'admin') {
  return { 
    canAccess: true,
    data: data.adminData,
    message: 'Welcome, Admin!'
  };
} else if (input.userRole === 'user') {
  return { 
    canAccess: true,
    data: data.userData,
    message: 'Welcome!'
  };
} else {
  return { 
    canAccess: false,
    message: 'Access denied'
  };
}
```

## Example: Data Validation

```javascript
// Validate email format
const email = input.email;
const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

return {
  valid: isValid,
  email: email,
  errors: isValid ? [] : ['Invalid email format']
};
```

## Example: Using Math Operations

```javascript
// Calculate discount
const price = input.price || 0;
const discountPercent = input.discount || 0;

const discountAmount = (price * discountPercent) / 100;
const finalPrice = price - discountAmount;

return {
  originalPrice: price,
  discountPercent: discountPercent,
  discountAmount: discountAmount,
  finalPrice: Math.round(finalPrice * 100) / 100
};
```

## Example: Working with Arrays

```javascript
// Filter and map array data
const items = input.items || [];

const expensiveItems = items
  .filter(item => item.price > 100)
  .map(item => ({
    ...item,
    priceWithTax: item.price * 1.1
  }));

return {
  totalItems: items.length,
  expensiveItems: expensiveItems,
  count: expensiveItems.length
};
```

## Example: Async Operations

```javascript
// Simulate async operation
const userId = input.userId;

const userData = await fetch(`/api/users/${userId}`)
  .then(res => res.json())
  .catch(err => ({ error: err.message }));

return {
  user: userData,
  fetchedAt: new Date().toISOString()
};
```

## Example: Error Handling

```javascript
// Try-catch for safe operations
try {
  const result = JSON.parse(input.jsonString);
  return { success: true, data: result };
} catch (e) {
  return { 
    success: false, 
    error: e.message,
    inputPreview: input.jsonString.substring(0, 50)
  };
}
```

## Use Cases

1. **Data Transformation** - Convert input data to desired format
2. **Calculations** - Perform math operations, aggregations
3. **Validation** - Validate data before proceeding
4. **Conditional Logic** - Branch based on conditions
5. **API Calls** - Make HTTP requests to external services
6. **Data Filtering** - Filter arrays, objects

## Node Metadata

```json
{
  "type": "script",
  "label": "Script",
  "description": "Run transform logic or custom TypeScript",
  "supportsInput": true,
  "supportsOutput": true,
  "availableIn": ["page-flow", "service", "client-page"]
}
```

## License

MIT License