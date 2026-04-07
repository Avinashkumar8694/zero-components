# DB Node

The DB node performs database operations like queries and mutations. It interacts with your data sources.

## Features

- ✅ Execute database queries
- ✅ Support for different data sources
- ✅ Model-based operations

## Installation

```html
<script src="https://plugins.zero.org.in/marketplace/components/zero-flow-node-db/1.0.0/js" type="module"></script>
```

## Basic Usage

### Configuration Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `operation` | string | `"query"` | Database operation type |
| `source` | string | `"primary-db"` | Data source name |
| `model` | string | `""` | Model/entity name |

## Variable Mapping & Persistence

The DB node acts as a **bridge** between your data storage and your flow's state. It uses **mappings** to translate project variables into query parameters and query results into project variables.

### Input Mappings (Variable → Node)
Use these to pass project context into your database operations.
- **`currentUserId` (Variable)** → `params.id`
- **`searchQuery` (Variable)** → `params.query`

### Output Mappings (Node → Variable)
## Available Variables (Query Parameters)

The DB node allows you to autonomously map project data into your SQL queries using the `:variable` syntax.

| Variable Source | Description | Usage in SQL |
| :--- | :--- | :--- |
| `state` | Access global project state variables. | `...id = :userId` |
| `input` | Access the flow's entry trigger payload. | `...email = :email` |
| `locals` | Access node-scope variables from previous steps. | `...token = :token` |

## Real-World Example: Fetching User Profile

This example demonstrates a parameterized query that autonomously fetches a user's details using a variable from the flow's input.

**1. SQL Configuration:**
```sql
SELECT id, name, email, role 
FROM users 
WHERE email = :searchEmail 
LIMIT 1;
```

**2. Parameter Mapping (Autonomous):**
By setting `:searchEmail` in your SQL, the node will check for `searchEmail` in your project's variables (`input`, `state`, or `locals`) and inject it safely into the query.

**3. Execution & Result:**
If an email is found, the data is automatically merged into the flow's output for subsequent nodes to use as `{{userData.name}}`.

```typescript
// Output: Initial payload enriched with query results
{
  output: {
    ...input,
    "userData": {
      "id": 42,
      "name": "Jane Doe",
      "email": "jane@example.com",
      "role": "editor"
    }
  },
  next: null
}
```
- **`result.email`** → `userEmail`
- **`result.lastLogin`** → `lastSessionTime`

**Example Mapping Configuration:**
```json
{
  "inputMappings": [
    { "sourceVariable": "activeUserId", "targetKey": "params.id" }
  ],
  "outputMappings": [
    { "sourceKey": "result.username", "targetVariable": "currentUserLabel" }
  ]
}
```

## Action Execution

The DB node acts as an **autonomous operator**. When executed, it uses the injected `context.db` provider to perform the operation immediately and returns the results to the flow.

```typescript
// Input: Mapped variables populating query 'params'
// Output: Execution results merged into the flow payload

{
  output: {
    ...input,
    "result": { "id": 123, "name": "John Doe" }, // Single record or array
    "totalCount": 1
  },
  next: null
}
```

**Execution Flow:**
1. Generate SQL/Query based on node `config`.
2. Map `input` data to query `params`.
3. Invoke `context.db.query(sql, params)` autonomously.
4. Capture results and merge into flow output.

## Operations

### Query

```javascript
{
  "operation": "query",
  "source": "primary-db",
  "model": "users"
}
```

### Insert

```javascript
{
  "operation": "insert",
  "source": "primary-db",
  "model": "orders"
}
```

### Update

```javascript
{
  "operation": "update",
  "source": "primary-db",
  "model": "products"
}
```

### Delete

```javascript
{
  "operation": "delete",
  "source": "primary-db",
  "model": "users"
}
```

## Use Cases

1. **Data Fetching** - Query data from database
2. **CRUD Operations** - Create, read, update, delete records
3. **Data Sources** - Connect to multiple databases

## Node Metadata

```json
{
  "type": "db",
  "label": "Database",
  "description": "Execute database operations",
  "supportsInput": true,
  "supportsOutput": true,
  "availableIn": ["server", "common"]
}
```

## License

MIT License