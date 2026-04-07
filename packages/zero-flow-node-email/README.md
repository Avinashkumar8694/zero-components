# Email Node

The Email node sends emails using templates. It allows you to send notifications, transactional emails, etc.

## Features

- ✅ Send emails with templates
- ✅ Configurable recipient, subject
- ✅ Support for dynamic content

## Installation

```html
<script src="https://plugins.zero.org.in/marketplace/components/zero-flow-node-email/1.0.0/js" type="module"></script>
```

## Variable Mapping & Persistence

The Email node uses **input mappings** to define who receives the notification and what data is included in the template.

### Input Mappings (Variable → Node)
Use these to pass project context into your emails.
- **`userEmail` (Variable)** → `to`
- **`currentOrder` (Variable)** → `params` (accessible in the template)

### Output Mappings (Node → Variable)
*Rarely used for the Email node*, as it initiates an asynchronous dispatch and doesn't return a specific result to the current flow.

## Available Variables (Template Parameters)

The Email node autonomously maps project data into your message templates using standard curly-brace syntax.

| Variable Source | Description | Template Placeholder |
| :--- | :--- | :--- |
| `state` | Access global project state (e.g., store name). | `{{storeName}}` |
| `input` | Access the flow trigger payload (e.g., order data). | `{{orderId}}` |
| `locals` | Access node-scope variables (e.g., total price). | `{{total}}` |

## Real-World Example: Order Confirmation

This example demonstrates how to dispatch a notification that autonomously pulls data from the current order process.

**1. Template Selection:**
Choose your pre-configured template (e.g., `order-success-v1`).

**2. Autonomous Variable Injection:**
If your template contains `{{customerName}}` and `{{orderId}}`, the node will autonomously look for these keys in your project's `input` or `state` and inject them before sending.

**3. Execution Result:**
The email is dispatched immediately via your project's mailer provider.

```typescript
// Input: Trigger payload with order details
{
  "email": "customer@example.com",
  "name": "Alex Johnson",
  "orderId": "ORD-12345"
}

// Resulting Dispatch:
// To: customer@example.com
// Template: order-success-v1
// Params: { customerName: "Alex Johnson", orderId: "ORD-12345" }
```

**Example Mapping Configuration:**
```json
{
  "inputMappings": [
    { "sourceVariable": "customerEmail", "targetKey": "to" },
    { "sourceVariable": "orderSummary", "targetKey": "params" }
  ]
}
```

## Action Execution

The Email node acts as an **autonomous operator**. When reached, it uses the injected `context.mailer` provider to dispatch the notification immediately.

```typescript
// Input: Mapped variables for recipient and template params
// Output: Passes through initial input

{
  output: {
    // Current payload is passed through
  },
  next: null
}
```

**Execution Flow:**
1. Resolve recipient address and template name from node `config`.
2. Map `input` data to template `params`.
3. Invoke `context.mailer.send(to, template, params)` autonomously.
4. Log the dispatch and continue to the next node.

## Example: Send Notification

```javascript
// Configuration:
{
  "template": "welcome",
  "to": "user@example.com",
  "subject": "Welcome to our platform!"
}
```

## Example: Order Confirmation

```javascript
// Configuration:
{
  "template": "order-confirmation",
  "to": input.customerEmail,
  "subject": `Order #${input.orderId} Confirmed`
}
```

## Example: Password Reset

```javascript
// Configuration:
{
  "template": "password-reset",
  "to": input.email,
  "subject": "Reset your password"
}
```

## Use Cases

1. **Welcome Emails** - On user registration
2. **Order Confirmations** - After purchase
3. **Password Reset** - For password recovery
4. **Notifications** - User notifications
5. **Alerts** - System alerts

## Node Metadata

```json
{
  "type": "email",
  "label": "Email",
  "description": "Send emails using templates",
  "supportsInput": true,
  "supportsOutput": true,
  "availableIn": ["server", "common"]
}
```

## License

MIT License