# Zero Rich Text Editor

A powerful and feature-rich WYSIWYG (What You See Is What You Get) text editor component built with Lit Element. This component provides comprehensive text formatting capabilities with an intuitive toolbar and seamless editing experience.

## Features

- **WYSIWYG Editing**: Real-time visual editing with immediate feedback
- **Rich Formatting Toolbar**: Comprehensive formatting options including bold, italic, underline, strikethrough
- **Font Customization**: Multiple font families and sizes with color controls
- **Text Alignment**: Left, center, right, and justify alignment options
- **Image Support**: Inline image insertion with resizable functionality
- **Toggle Modes**: Switch between editor and preview modes
- **Collapsible Toolbar**: Toggleable toolbar with hover tooltips
- **Event Handling**: Real-time content change events
- **Accessibility**: Full keyboard navigation and screen reader support
- **Responsive Design**: Adapts to different screen sizes and containers

## Installation

```html
<script src="https://plugins.zero.org.in/marketplace/components/rich-text-editor/1.0.0/js" type="module"></script>
```

## Basic Usage

### HTML (Hardcoded Values)

```html
<!-- Basic rich text editor -->
<zero-rich-text-editor 
  htmldata="<p>Welcome to the rich text editor!</p>"
  editorMode="true">
</zero-rich-text-editor>

<!-- Editor with initial formatted content -->
<zero-rich-text-editor 
  htmldata="<h2>Sample Document</h2><p>This is a <strong>bold</strong> and <em>italic</em> text example.</p>"
  editorMode="true">
</zero-rich-text-editor>

<!-- Read-only preview mode -->
<zero-rich-text-editor 
  htmldata="<p>This content is in preview mode only.</p>"
  editorMode="false">
</zero-rich-text-editor>
```

### JavaScript (Dynamic Configuration)

```javascript
// Create and configure rich text editor
const editor = document.createElement('zero-rich-text-editor');
editor.htmldata = '<h1>Welcome</h1><p>Start typing your content here...</p>';
editor.editorMode = true;

// Listen for content changes
editor.addEventListener('content-changed', (event) => {
  console.log('Content updated:', event.detail.content);
  // Save content to backend
  saveContent(event.detail.content);
});

document.body.appendChild(editor);

// Programmatically update content
function loadDocument(htmlContent) {
  editor.htmldata = htmlContent;
}

// Toggle between edit and preview modes
function toggleMode() {
  editor.editorMode = !editor.editorMode;
}

// Example: Advanced initialization with custom content
const advancedEditor = document.createElement('zero-rich-text-editor');
advancedEditor.htmldata = `
  <div style="text-align: center;">
    <h1 style="color: #2c3e50;">Document Title</h1>
    <img src="https://via.placeholder.com/300x200" alt="Sample image" style="max-width: 100%;">
    <p style="font-family: Georgia; font-size: 16px;">
      This is a sample document with <strong>bold text</strong>, 
      <em>italic formatting</em>, and <u>underlined content</u>.
    </p>
  </div>
`;
advancedEditor.editorMode = true;
document.body.appendChild(advancedEditor);
```

## Component Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `htmldata` | `string` | `""` | HTML content of the editor |
| `editorMode` | `boolean` | `true` | Whether editor is in edit mode (true) or preview mode (false) |
| `toolbarVisible` | `boolean` | `false` | Controls toolbar visibility |

## Events

| Event Name | Description | Event Detail |
|------------|-------------|--------------|
| `content-changed` | Fired when editor content changes | `{ content: string }` - The updated HTML content |

### Event Usage Examples

```javascript
const editor = document.querySelector('zero-rich-text-editor');

// Listen for content changes
editor.addEventListener('content-changed', (event) => {
  const { content } = event.detail;
  console.log('Content changed:', content);
  
  // Auto-save functionality
  clearTimeout(window.autoSaveTimeout);
  window.autoSaveTimeout = setTimeout(() => {
    saveToLocalStorage(content);
  }, 1000);
});

// Debounced content saving
function saveToLocalStorage(content) {
  localStorage.setItem('editor-content', content);
  console.log('Content auto-saved');
}
```

## CSS Variables

The rich text editor component uses CSS custom properties that can be customized to match your design system.

### Layout & Spacing

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--spacing-xs` | `6px` | Extra small spacing for padding and margins |
| `--spacing-sm` | `8px` | Small spacing for component padding |
| `--icon-size-sm` | `24px` | Small icon size for toolbar buttons and resize handles |

### Typography

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--font-size-xs` | `12px` | Extra small font size for tooltips |
| `--font-size-base` | `14px` | Base font size for toolbar selects |
| `--font-size-md` | `16px` | Medium font size for toolbar buttons |
| `--font-size-lg` | `18px` | Large font size for toolbar toggle |

### Colors

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--text-secondary` | `#5b5f61` | Secondary text color for toolbar |
| `--background-secondary` | `#f5f5f5` | Secondary background for toolbar |
| `--background-hover` | `#e0e0e0` | Hover background color for interactive elements |
| `--border-color` | `#ddd` | Border color for editor and toolbar elements |
| `--tooltip-background` | `#333` | Background color for button tooltips |
| `--tooltip-text` | `#fff` | Text color for button tooltips |

### Borders & Effects

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--border-radius-sm` | `4px` | Small border radius for buttons |
| `--border-radius-lg` | `8px` | Large border radius for editor container |
| `--shadow-md` | `0 2px 5px rgba(0, 0, 0, 0.1)` | Medium shadow for toolbar |
| `--transition-fast` | `background-color 0.3s ease` | Fast transition for hover effects |
| `--transition-normal` | `opacity 0.3s ease, transform 0.3s ease` | Normal transition for toolbar animations |

## Public Methods

The rich text editor provides several methods for programmatic control:

```javascript
const editor = document.querySelector('zero-rich-text-editor');

// Content management methods (internal)
editor.updateEditorContent(); // Updates editor with current htmldata
editor.updateContent(); // Updates content and dispatches events

// Formatting methods (internal - triggered by toolbar)
editor.execCommand('bold'); // Apply bold formatting
editor.execCommand('italic'); // Apply italic formatting
editor.execCommand('underline'); // Apply underline formatting
editor.execCommand('foreColor', '#ff0000'); // Set text color
editor.execCommand('backColor', '#ffff00'); // Set background color
editor.execCommand('fontSize', '5'); // Set font size
editor.execCommand('fontName', 'Arial'); // Set font family

// Mode management
editor.toggleEditorMode(); // Switch between edit and preview modes
editor.toggleToolbar(); // Show/hide formatting toolbar
```

## Advanced Examples

### Document Editor with Auto-Save

```javascript
class DocumentEditor {
  constructor() {
    this.editor = document.createElement('zero-rich-text-editor');
    this.editor.editorMode = true;
    this.setupAutoSave();
    this.loadDocument();
  }

  setupAutoSave() {
    this.editor.addEventListener('content-changed', (event) => {
      this.autoSave(event.detail.content);
    });
  }

  autoSave(content) {
    clearTimeout(this.saveTimeout);
    this.saveTimeout = setTimeout(() => {
      this.saveToServer(content);
      this.showSaveStatus('Saved');
    }, 2000);
  }

  async saveToServer(content) {
    try {
      await fetch('/api/documents/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content })
      });
    } catch (error) {
      this.showSaveStatus('Save failed', 'error');
    }
  }

  async loadDocument() {
    try {
      const response = await fetch('/api/documents/current');
      const data = await response.json();
      this.editor.htmldata = data.content || '<p>Start writing...</p>';
    } catch (error) {
      console.error('Failed to load document:', error);
    }
  }

  showSaveStatus(message, type = 'success') {
    // Implementation for save status indicator
    console.log(`${type}: ${message}`);
  }
}

// Initialize document editor
const docEditor = new DocumentEditor();
document.body.appendChild(docEditor.editor);
```

### Rich Text Editor with Image Upload

```javascript
class ImageUploadEditor {
  constructor() {
    this.editor = document.createElement('zero-rich-text-editor');
    this.editor.editorMode = true;
    this.setupImageHandling();
  }

  setupImageHandling() {
    // Handle paste events for image uploads
    this.editor.addEventListener('paste', (event) => {
      const items = event.clipboardData?.items;
      if (items) {
        for (let item of items) {
          if (item.type.indexOf('image') !== -1) {
            const file = item.getAsFile();
            this.uploadAndInsertImage(file);
          }
        }
      }
    });

    // Handle drop events for image uploads
    this.editor.addEventListener('drop', (event) => {
      event.preventDefault();
      const files = event.dataTransfer?.files;
      if (files) {
        for (let file of files) {
          if (file.type.indexOf('image') !== -1) {
            this.uploadAndInsertImage(file);
          }
        }
      }
    });
  }

  async uploadAndInsertImage(file) {
    try {
      const formData = new FormData();
      formData.append('image', file);

      const response = await fetch('/api/upload/image', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      
      // Insert image into editor
      const img = `<img src="${data.url}" alt="${data.filename}" style="max-width: 100%; height: auto;">`;
      this.insertContent(img);
    } catch (error) {
      console.error('Image upload failed:', error);
    }
  }

  insertContent(html) {
    const currentContent = this.editor.htmldata || '';
    this.editor.htmldata = currentContent + html;
  }
}

// Initialize image upload editor
const imageEditor = new ImageUploadEditor();
document.body.appendChild(imageEditor.editor);
```

### Multi-Format Export Editor

```javascript
class ExportEditor {
  constructor() {
    this.editor = document.createElement('zero-rich-text-editor');
    this.editor.editorMode = true;
    this.createToolbar();
  }

  createToolbar() {
    const toolbar = document.createElement('div');
    toolbar.innerHTML = `
      <button onclick="exportEditor.exportAsHTML()">Export HTML</button>
      <button onclick="exportEditor.exportAsMarkdown()">Export Markdown</button>
      <button onclick="exportEditor.exportAsPDF()">Export PDF</button>
      <button onclick="exportEditor.printDocument()">Print</button>
    `;
    document.body.appendChild(toolbar);
    document.body.appendChild(this.editor);
  }

  exportAsHTML() {
    const content = this.editor.htmldata;
    const blob = new Blob([content], { type: 'text/html' });
    this.downloadFile(blob, 'document.html');
  }

  exportAsMarkdown() {
    const html = this.editor.htmldata;
    const markdown = this.htmlToMarkdown(html);
    const blob = new Blob([markdown], { type: 'text/markdown' });
    this.downloadFile(blob, 'document.md');
  }

  async exportAsPDF() {
    const content = this.editor.htmldata;
    try {
      const response = await fetch('/api/export/pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ html: content })
      });
      const blob = await response.blob();
      this.downloadFile(blob, 'document.pdf');
    } catch (error) {
      console.error('PDF export failed:', error);
    }
  }

  printDocument() {
    const content = this.editor.htmldata;
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Print Document</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            @media print { body { margin: 0; } }
          </style>
        </head>
        <body>${content}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  }

  downloadFile(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }

  htmlToMarkdown(html) {
    // Basic HTML to Markdown conversion
    return html
      .replace(/<h1[^>]*>(.*?)<\/h1>/gi, '# $1\n')
      .replace(/<h2[^>]*>(.*?)<\/h2>/gi, '## $1\n')
      .replace(/<h3[^>]*>(.*?)<\/h3>/gi, '### $1\n')
      .replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**')
      .replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*')
      .replace(/<p[^>]*>(.*?)<\/p>/gi, '$1\n\n')
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<[^>]*>/g, '');
  }
}

// Initialize export editor
const exportEditor = new ExportEditor();
```

## Styling Customization

### Basic Theme Customization

```css
/* Custom theme variables */
zero-rich-text-editor {
  --background-secondary: #f8f9fa;
  --text-secondary: #495057;
  --border-color: #dee2e6;
  --background-hover: #e9ecef;
  --border-radius-lg: 12px;
  --border-radius-sm: 6px;
  --font-size-md: 14px;
  --spacing-sm: 12px;
}

/* Custom toolbar styling */
zero-rich-text-editor::part(toolbar) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

/* Custom editor styling */
zero-rich-text-editor::part(editor) {
  min-height: 300px;
  font-family: 'Georgia', serif;
  line-height: 1.6;
}
```

### Responsive Design

```css
/* Mobile-first responsive design */
zero-rich-text-editor {
  width: 100%;
  min-height: 250px;
}

/* Tablet and desktop */
@media (min-width: 768px) {
  zero-rich-text-editor {
    min-height: 400px;
    --font-size-md: 16px;
    --spacing-sm: 16px;
  }
}

/* Large screens */
@media (min-width: 1200px) {
  zero-rich-text-editor {
    min-height: 500px;
    max-width: 800px;
    margin: 0 auto;
  }
}
```

### Dark Mode Support

```css
/* Dark mode styling */
@media (prefers-color-scheme: dark) {
  zero-rich-text-editor {
    --background-secondary: #2d3748;
    --text-secondary: #e2e8f0;
    --border-color: #4a5568;
    --background-hover: #4a5568;
    --tooltip-background: #1a202c;
    --tooltip-text: #f7fafc;
  }
}

/* Manual dark mode class */
.dark-mode zero-rich-text-editor {
  --background-secondary: #1a1a1a;
  --text-secondary: #ffffff;
  --border-color: #404040;
  --background-hover: #333333;
}
```

## Accessibility

The rich text editor component includes comprehensive accessibility features:

- **Keyboard Navigation**: Full keyboard support for all toolbar functions
- **Screen Reader Support**: Proper ARIA labels and descriptions
- **Focus Management**: Logical tab order and focus indicators
- **Semantic HTML**: Uses proper HTML5 semantic elements
- **High Contrast**: Supports high contrast mode and custom color schemes

### Accessibility Best Practices

```javascript
// Add ARIA labels for better accessibility
const editor = document.querySelector('zero-rich-text-editor');
editor.setAttribute('aria-label', 'Rich text editor');
editor.setAttribute('role', 'textbox');
editor.setAttribute('aria-multiline', 'true');

// Keyboard shortcuts
document.addEventListener('keydown', (event) => {
  if (event.ctrlKey || event.metaKey) {
    switch (event.key) {
      case 'b':
        event.preventDefault();
        editor.execCommand('bold');
        break;
      case 'i':
        event.preventDefault();
        editor.execCommand('italic');
        break;
      case 'u':
        event.preventDefault();
        editor.execCommand('underline');
        break;
    }
  }
});
```

## Browser Support

- **Chrome**: 80+
- **Firefox**: 75+
- **Safari**: 13+
- **Edge**: 80+
- **Mobile**: iOS Safari 13+, Chrome Mobile 80+

## Performance Considerations

- **Debounced Updates**: Content changes are debounced to prevent excessive event firing
- **Efficient DOM Updates**: Uses Lit's efficient rendering system
- **Memory Management**: Proper cleanup of event listeners and references
- **Image Optimization**: Automatic image resizing and optimization features

## License

MIT License - see LICENSE file for details.
