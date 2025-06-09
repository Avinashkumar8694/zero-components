# Code Editor

A feature-rich code editor component inspired by Monaco Editor and VS Code. Provides syntax highlighting, line numbers, minimap, search functionality, auto-completion, and keyboard shortcuts. Perfect for code editing interfaces, documentation sites, and developer tools.

## Features

- **Syntax Highlighting**: Built-in support for JavaScript, TypeScript, Python, Java, C#, HTML, CSS, and JSON
- **Monaco-like Interface**: Professional editor UI with tabs, status bar, and toolbars
- **Line Numbers**: Toggle-able line numbers with synchronized scrolling
- **Minimap**: Collapsible code overview for navigation in large files
- **Search Functionality**: Built-in search with Ctrl+F keyboard shortcut
- **Auto-completion**: Auto-closing brackets and quotes
- **Smart Indentation**: Tab/Shift+Tab for indenting/unindenting with multi-line support
- **Theme Support**: Dark and light themes with customizable colors
- **Keyboard Shortcuts**: Standard editor shortcuts and navigation
- **Real-time Updates**: Live updates with change events and cursor position tracking

## Installation

```html
<script src="https://plugins.zero.org.in/marketplace/components/code-editor/1.0.0/js" type="module"></script>
```

## Basic Usage

### HTML (Simple Setup)

```html
<zero-code-editor-1.0.0
    language="javascript"
    theme="dark"
    show-line-numbers="true"
    show-minimap="true"
    word-wrap="false">
</zero-code-editor-1.0.0>
```

### JavaScript (Advanced Configuration)

```javascript
// Create and configure the code editor
const codeEditor = document.createElement('zero-code-editor');

// Set editor content
codeEditor.code = `function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Calculate the 10th Fibonacci number
const result = fibonacci(10);
console.log('Fibonacci(10):', result);`;

// Configure editor settings
codeEditor.language = 'javascript';
codeEditor.theme = 'dark';
codeEditor.showLineNumbers = true;
codeEditor.showMinimap = true;
codeEditor.wordWrap = false;

// Set available languages
codeEditor.languages = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' }
];

// Add event listener for code changes
codeEditor.addEventListener('code-changed', (event) => {
    const { code, language } = event.detail;
    console.log(`Code changed in ${language}:`, code);
    // Handle code changes (auto-save, validation, etc.)
});

// Append to DOM
document.body.appendChild(codeEditor);
```

## Component Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `code` | `string` | Sample JS code | The code content in the editor |
| `language` | `string` | `'javascript'` | Current programming language for syntax highlighting |
| `languages` | `LanguageOption[]` | Default set | Available programming languages in dropdown |
| `theme` | `string` | `'dark'` | Editor theme ('dark' or 'light') |
| `showLineNumbers` | `boolean` | `true` | Whether to display line numbers |
| `showMinimap` | `boolean` | `true` | Whether to show the minimap |
| `wordWrap` | `boolean` | `false` | Whether to enable word wrapping |
| `cursorLine` | `number` | `1` | Current cursor line number (read-only) |
| `cursorColumn` | `number` | `1` | Current cursor column number (read-only) |
| `searchVisible` | `boolean` | `false` | Whether search box is visible (internal state) |
| `searchTerm` | `string` | `''` | Current search term (internal state) |

### LanguageOption Interface

```typescript
interface LanguageOption {
    value: string;   // Language identifier (e.g., 'javascript')
    label: string;   // Display name (e.g., 'JavaScript')
}
```

## Events

### code-changed

Triggered when the code content is modified by the user.

**Event Detail:**
```typescript
{
  code: string;      // Complete code content
  language: string;  // Current language setting
}
```

**Example:**
```javascript
editor.addEventListener('code-changed', (event) => {
    const { code, language } = event.detail;
    // Auto-save functionality
    localStorage.setItem('editorContent', code);
    localStorage.setItem('editorLanguage', language);
});
```

## CSS Variables

### Layout & Spacing
- `--spacing-xs`: Extra small spacing (6px) - tabs, search padding
- `--spacing-sm`: Small spacing (8px) - header, input padding
- `--spacing-md`: Medium spacing (12px) - content padding, line numbers
- `--border-radius-xs`: Extra small radius (2px) - search input, buttons
- `--border-radius-sm`: Small radius (4px) - general elements
- `--border-radius-lg`: Large radius (8px) - main container

### Typography
- `--font-family-mono`: Monospace font ('Consolas', 'Courier New', monospace)
- `--font-size-xs`: Extra small font (11px-12px) - status bar, controls
- `--font-size-sm`: Small font (13px) - code content, line numbers

### Colors & Theme
- `--border-color`: Main border color (#d1d5db)
- `--editor-background`: Main editor background (#1e1e1e)
- `--editor-header-background`: Header background (#2d2d30)
- `--editor-sidebar-background`: Line numbers background (#252526)
- `--editor-text-primary`: Primary text color (#ffffff/#d4d4d4)
- `--editor-text-secondary`: Secondary text color (#cccccc)
- `--editor-text-muted`: Muted text color (#6e7681)
- `--editor-border-color`: Internal borders (#3e3e42)

### Interactive States
- `--editor-hover-background`: Hover state background (#3e3e42)
- `--editor-button-hover`: Button hover background
- `--editor-select-background`: Dropdown background (#3c3c3c)
- `--editor-select-border`: Dropdown border (#464647)

### Syntax Highlighting
- `--syntax-keyword`: Keyword color (#569cd6)
- `--syntax-string`: String color (#ce9178)
- `--syntax-comment`: Comment color (#6a9955)
- `--syntax-number`: Number color (#b5cea8)
- `--syntax-operator`: Operator color (#d4d4d4)
- `--syntax-function`: Function color (#dcdcaa)
- `--syntax-variable`: Variable color (#9cdcfe)
- `--syntax-type`: Type color (#4ec9b0)

## Public Methods

### testLanguagesSetter()

Debug method to test language configuration and validation.

```javascript
const editor = document.querySelector('zero-code-editor');
editor.testLanguagesSetter(); // Logs test results to console
```

### toggleSearch()

Programmatically toggle the search box visibility.

```javascript
const editor = document.querySelector('zero-code-editor');
editor.toggleSearch();
```

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+F` | Open/close search box |
| `Tab` | Indent selected lines or insert 4 spaces |
| `Shift+Tab` | Unindent selected lines |
| `(`, `[`, `{`, `"`, `'` | Auto-close brackets and quotes |

## Advanced Examples

### Multi-File Editor

```html
<div class="multi-file-editor">
    <div class="file-tabs" id="fileTabs"></div>
    <zero-code-editor-1.0.0 id="codeEditor"></zero-code-editor-1.0.0>
    <div class="file-controls">
        <button id="addFileBtn">Add File</button>
        <button id="saveBtn">Save</button>
        <button id="runBtn">Run Code</button>
    </div>
</div>

<script>
class MultiFileEditor {
    constructor() {
        this.editor = document.getElementById('codeEditor');
        this.fileTabs = document.getElementById('fileTabs');
        this.files = new Map();
        this.activeFile = null;
        this.setupEditor();
        this.createDefaultFile();
    }
    
    setupEditor() {
        // Configure editor
        this.editor.theme = 'dark';
        this.editor.showLineNumbers = true;
        this.editor.showMinimap = true;
        
        // Listen for code changes
        this.editor.addEventListener('code-changed', (event) => {
            this.saveCurrentFile(event.detail.code);
        });
        
        // Setup file controls
        document.getElementById('addFileBtn').addEventListener('click', () => {
            this.addNewFile();
        });
        
        document.getElementById('saveBtn').addEventListener('click', () => {
            this.saveAllFiles();
        });
        
        document.getElementById('runBtn').addEventListener('click', () => {
            this.runCode();
        });
    }
    
    createDefaultFile() {
        const defaultFile = {
            name: 'script.js',
            language: 'javascript',
            content: `// Welcome to the multi-file editor
function greet(name) {
    return \`Hello, \${name}!\`;
}

console.log(greet('Developer'));`
        };
        
        this.addFile(defaultFile);
    }
    
    addFile(file) {
        const fileId = Date.now().toString();
        this.files.set(fileId, file);
        this.createFileTab(fileId, file.name);
        this.switchToFile(fileId);
    }
    
    createFileTab(fileId, fileName) {
        const tab = document.createElement('button');
        tab.className = 'file-tab';
        tab.textContent = fileName;
        tab.addEventListener('click', () => this.switchToFile(fileId));
        
        const closeBtn = document.createElement('span');
        closeBtn.className = 'close-tab';
        closeBtn.textContent = '×';
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.closeFile(fileId);
        });
        
        tab.appendChild(closeBtn);
        this.fileTabs.appendChild(tab);
    }
    
    switchToFile(fileId) {
        if (this.activeFile) {
            this.saveCurrentFile(this.editor.code);
        }
        
        const file = this.files.get(fileId);
        if (file) {
            this.activeFile = fileId;
            this.editor.code = file.content;
            this.editor.language = file.language;
            
            // Update tab appearance
            this.fileTabs.querySelectorAll('.file-tab').forEach((tab, index) => {
                tab.classList.toggle('active', index === Array.from(this.files.keys()).indexOf(fileId));
            });
        }
    }
    
    saveCurrentFile(content) {
        if (this.activeFile) {
            const file = this.files.get(this.activeFile);
            if (file) {
                file.content = content;
            }
        }
    }
    
    addNewFile() {
        const fileName = prompt('Enter file name:');
        if (fileName) {
            const extension = fileName.split('.').pop();
            const languageMap = {
                'js': 'javascript',
                'ts': 'typescript',
                'py': 'python',
                'java': 'java',
                'cs': 'csharp',
                'html': 'html',
                'css': 'css',
                'json': 'json'
            };
            
            const newFile = {
                name: fileName,
                language: languageMap[extension] || 'javascript',
                content: `// New ${fileName} file\n`
            };
            
            this.addFile(newFile);
        }
    }
    
    closeFile(fileId) {
        if (this.files.size <= 1) {
            alert('Cannot close the last file');
            return;
        }
        
        this.files.delete(fileId);
        
        // Remove tab
        const tabIndex = Array.from(this.files.keys()).indexOf(fileId);
        this.fileTabs.children[tabIndex]?.remove();
        
        // Switch to another file if this was active
        if (this.activeFile === fileId) {
            const firstFileId = this.files.keys().next().value;
            this.switchToFile(firstFileId);
        }
    }
    
    saveAllFiles() {
        this.saveCurrentFile(this.editor.code);
        
        const allFiles = {};
        this.files.forEach((file, id) => {
            allFiles[file.name] = file.content;
        });
        
        localStorage.setItem('editorFiles', JSON.stringify(allFiles));
        console.log('All files saved to localStorage');
    }
    
    runCode() {
        if (this.activeFile) {
            const file = this.files.get(this.activeFile);
            if (file && file.language === 'javascript') {
                try {
                    // Create a safe evaluation context
                    const output = eval(file.content);
                    console.log('Code execution result:', output);
                } catch (error) {
                    console.error('Code execution error:', error);
                }
            } else {
                console.log('Code execution only supported for JavaScript files');
            }
        }
    }
}

new MultiFileEditor();
</script>

<style>
.multi-file-editor {
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
}

.file-tabs {
    display: flex;
    background: #f5f5f5;
    border-bottom: 1px solid #ccc;
}

.file-tab {
    padding: 8px 16px;
    border: none;
    background: transparent;
    cursor: pointer;
    border-right: 1px solid #ccc;
    position: relative;
}

.file-tab.active {
    background: white;
}

.close-tab {
    margin-left: 8px;
    color: #999;
    font-weight: bold;
}

.close-tab:hover {
    color: #ff0000;
}

.file-controls {
    padding: 8px;
    background: #f9f9f9;
    border-top: 1px solid #ccc;
    display: flex;
    gap: 8px;
}

.file-controls button {
    padding: 6px 12px;
    border: 1px solid #ccc;
    background: white;
    border-radius: 4px;
    cursor: pointer;
}
</style>
```

### Code Playground with Live Preview

```javascript
class CodePlayground {
    constructor() {
        this.setupPlayground();
    }
    
    setupPlayground() {
        // Create HTML structure
        const container = document.createElement('div');
        container.style.cssText = 'display: flex; height: 100vh;';
        
        const editorPanel = document.createElement('div');
        editorPanel.style.cssText = 'flex: 1; border-right: 1px solid #ccc;';
        
        const previewPanel = document.createElement('div');
        previewPanel.style.cssText = 'flex: 1; padding: 20px;';
        
        // Create editor
        this.editor = document.createElement('zero-code-editor');
        this.editor.language = 'html';
        this.editor.theme = 'light';
        this.editor.code = `<!DOCTYPE html>
<html>
<head>
    <title>Live Preview</title>
    <style>
        body { font-family: Arial, sans-serif; }
        .highlight { background: yellow; }
    </style>
</head>
<body>
    <h1>Hello World!</h1>
    <p class="highlight">This is a live preview.</p>
    <script>
        console.log('Page loaded!');
    </script>
</body>
</html>`;
        
        // Create preview iframe
        this.preview = document.createElement('iframe');
        this.preview.style.cssText = 'width: 100%; height: 100%; border: 1px solid #ccc;';
        
        // Setup live preview
        this.editor.addEventListener('code-changed', (event) => {
            this.updatePreview(event.detail.code);
        });
        
        // Assemble structure
        editorPanel.appendChild(this.editor);
        previewPanel.appendChild(this.preview);
        container.appendChild(editorPanel);
        container.appendChild(previewPanel);
        document.body.appendChild(container);
        
        // Initial preview
        this.updatePreview(this.editor.code);
    }
    
    updatePreview(code) {
        const blob = new Blob([code], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        this.preview.src = url;
        
        // Clean up previous blob URL
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    }
}

new CodePlayground();
```

### Code Formatter Integration

```javascript
class FormattedCodeEditor {
    constructor() {
        this.editor = document.createElement('zero-code-editor');
        this.setupFormatter();
    }
    
    setupFormatter() {
        // Add format button to editor
        const formatBtn = document.createElement('button');
        formatBtn.textContent = 'Format Code';
        formatBtn.addEventListener('click', () => this.formatCode());
        
        this.editor.addEventListener('code-changed', (event) => {
            this.validateCode(event.detail.code, event.detail.language);
        });
        
        document.body.appendChild(this.editor);
        document.body.appendChild(formatBtn);
    }
    
    formatCode() {
        const language = this.editor.language;
        const code = this.editor.code;
        
        try {
            let formattedCode;
            
            switch (language) {
                case 'javascript':
                case 'typescript':
                    formattedCode = this.formatJavaScript(code);
                    break;
                case 'json':
                    formattedCode = this.formatJSON(code);
                    break;
                default:
                    formattedCode = this.basicFormat(code);
                    break;
            }
            
            this.editor.code = formattedCode;
        } catch (error) {
            console.error('Formatting failed:', error);
        }
    }
    
    formatJavaScript(code) {
        // Basic JavaScript formatting
        return code
            .replace(/;\s*}/g, ';\n}')
            .replace(/{\s*\n\s*/g, '{\n    ')
            .replace(/}\s*else\s*{/g, '} else {')
            .split('\n')
            .map(line => line.trim())
            .filter(line => line.length > 0)
            .join('\n');
    }
    
    formatJSON(code) {
        try {
            const parsed = JSON.parse(code);
            return JSON.stringify(parsed, null, 2);
        } catch (error) {
            throw new Error('Invalid JSON');
        }
    }
    
    basicFormat(code) {
        return code
            .split('\n')
            .map(line => line.trim())
            .join('\n');
    }
    
    validateCode(code, language) {
        try {
            if (language === 'json') {
                JSON.parse(code);
                this.showStatus('Valid JSON', 'success');
            } else if (language === 'javascript') {
                // Basic syntax check
                new Function(code);
                this.showStatus('Valid JavaScript', 'success');
            }
        } catch (error) {
            this.showStatus(`Error: ${error.message}`, 'error');
        }
    }
    
    showStatus(message, type) {
        // Show status in console or status bar
        console.log(`${type.toUpperCase()}: ${message}`);
    }
}

new FormattedCodeEditor();
```

## Styling Customization

### Custom Theme Colors

```css
zero-code-editor {
    --editor-background: #0d1117;
    --editor-header-background: #161b22;
    --editor-text-primary: #f0f6fc;
    --editor-text-secondary: #8b949e;
    --syntax-keyword: #ff7b72;
    --syntax-string: #a5d6ff;
    --syntax-comment: #8b949e;
    --syntax-function: #d2a8ff;
}
```

### Compact Editor Size

```css
.compact-editor {
    height: 200px;
    --font-size-sm: 11px;
    --spacing-sm: 4px;
    --spacing-md: 6px;
}
```

### Custom Language Support

```javascript
// Add custom language with syntax highlighting
const editor = document.querySelector('zero-code-editor');
editor.languages = [
    ...editor.languages,
    { value: 'sql', label: 'SQL' },
    { value: 'xml', label: 'XML' },
    { value: 'yaml', label: 'YAML' }
];
```

## Accessibility

The component follows accessibility best practices:

- **Keyboard Navigation**: Full keyboard support with standard shortcuts
- **Screen Reader Support**: Proper ARIA labels and descriptions
- **Focus Management**: Clear focus indicators and logical tab order
- **High Contrast**: Supports system dark/light mode preferences

## Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: Limited support due to desktop-focused design
- **Features**: Uses modern CSS, ES6+ features, and Web APIs

## Related Components

- `rich-text-editor` - WYSIWYG editor for formatted text
- `zero-textarea` - Simple multi-line text input
- `attribute-window` - Dynamic form generator

## License

MIT License - see LICENSE file for details.
