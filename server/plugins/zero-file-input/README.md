# Zero File Input

A comprehensive file upload component with drag-and-drop support, file previews, progress tracking, and validation built with Lit Element.

## Features

- **Drag & Drop**: Intuitive drag-and-drop file upload interface
- **File Validation**: Type, size, and count validation with custom error messages
- **File Previews**: Image thumbnails and file type indicators
- **Progress Tracking**: Upload progress visualization (simulated)
- **Multiple Files**: Support for single and multiple file selection
- **File Management**: Remove files, clear all, and file list management
- **Responsive Design**: Mobile-friendly touch interface
- **Custom Styling**: Extensive theming and visual customization
- **Accessibility**: Full keyboard navigation and screen reader support

## Installation

```html
<script src="https://plugins.zero.org.in/marketplace/components/zero-file-input/1.0.0/js" type="module"></script>
```

## Basic Usage

### HTML (Hardcoded Values)
```html
<!-- Basic File Input -->
<zero-file-input 
    label="Upload Documents" 
    placeholder="Choose files or drag and drop"
    accept=".pdf,.doc,.docx"
    max-file-size="5">
</zero-file-input>

<!-- Multiple Images with Preview -->
<zero-file-input 
    label="Photo Gallery" 
    multiple="true"
    accept="image/*"
    max-files="10"
    max-file-size="2"
    show-preview="true">
</zero-file-input>

<!-- With Progress Tracking -->
<zero-file-input 
    label="File Upload" 
    drag-drop="true"
    show-progress="true"
    help-text="Maximum 10MB per file">
</zero-file-input>
```

### JavaScript (Dynamic Configuration)
```javascript
// Basic setup
const fileInput = document.querySelector('zero-file-input');
fileInput.label = 'Upload Files';
fileInput.multiple = true;
fileInput.maxFiles = 5;
fileInput.maxFileSize = 10; // MB

// Configure file types
fileInput.accept = '.jpg,.jpeg,.png,.gif,.pdf,.doc,.docx';

// Enable features
fileInput.showPreview = true;
fileInput.showProgress = true;
fileInput.dragDrop = true;

// Event handling
fileInput.addEventListener('change', (event) => {
    console.log('Files selected:', event.detail.files);
    event.detail.files.forEach(file => {
        console.log(`${file.name} - ${file.size} bytes`);
    });
});

fileInput.addEventListener('file-change', (event) => {
    const { files, count } = event.detail;
    console.log(`${count} files selected`);
    
    if (count > 0) {
        uploadFiles(files);
    }
});
```

## Component Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `''` | Label text displayed above the input |
| `placeholder` | `string` | `'Choose files or drag and drop'` | Placeholder text in drop zone |
| `helpText` | `string` | `''` | Help text displayed below the input |
| `errorMessage` | `string` | `''` | Error message text |
| `required` | `boolean` | `false` | Mark field as required |
| `disabled` | `boolean` | `false` | Disable the file input |
| `multiple` | `boolean` | `false` | Allow multiple file selection |
| `showPreview` | `boolean` | `true` | Show file previews and list |
| `showProgress` | `boolean` | `false` | Show upload progress bars |
| `dragDrop` | `boolean` | `true` | Enable drag and drop functionality |
| `accept` | `string` | `''` | Accepted file types (e.g., '.pdf,.jpg,.png' or 'image/*') |
| `maxFileSize` | `number` | `10` | Maximum file size in MB |
| `maxFiles` | `number` | `10` | Maximum number of files allowed |
| `width` | `string` | `'100%'` | Component width |
| `height` | `string` | `'auto'` | Component height |
| `dropZoneHeight` | `string` | `'120px'` | Drop zone minimum height |
| `borderRadius` | `string` | `'4px'` | Border radius for styling |
| `primaryColor` | `string` | `'#1976d2'` | Primary theme color |
| `errorColor` | `string` | `'#f44336'` | Error state color |
| `successColor` | `string` | `'#4caf50'` | Success/progress color |

## Events

### `change`
Fired when files are selected or removed.

```javascript
fileInput.addEventListener('change', (event) => {
    const { files, value } = event.detail;
    console.log('Files changed:', files);
});
```

### `file-change`
Enhanced file change event with additional details.

```javascript
fileInput.addEventListener('file-change', (event) => {
    const { files, fileItems, count } = event.detail;
    console.log(`${count} files selected`);
});
```

**Event Detail:**
- `files`: Array of File objects
- `value`: Same as files (for compatibility)
- `fileItems`: Internal file items with metadata
- `count`: Number of files

## CSS Variables

### Layout & Spacing
- `--spacing-xs` (4px): Small padding and margins
- `--spacing-sm` (8px): Small gaps and spacing
- `--spacing-md` (12px): Medium padding and spacing
- `--spacing-lg` (24px): Large padding for drop zone
- `--icon-size-xl` (32px, 40px): Upload icon and preview sizes

### Typography
- `--font-size-xs` (12px): Small text (file size, help text)
- `--font-size-base` (14px): Regular text and file names
- `--font-size-lg` (16px): Upload text

### Colors
- `--primary-color` (#1976d2): Accent color and hover states
- `--error-color` (#f44336): Error states and remove buttons
- `--success-color` (#4caf50): Progress bars and success states
- `--text-primary` (#333): Main text color
- `--text-secondary` (#666): Secondary text and metadata
- `--background-color` (#ffffff): Component backgrounds
- `--background-secondary` (#e0e0e0): Progress track background
- `--border-color` (#e0e0e0): Borders and separators

### Borders & Effects
- `--border-radius` (4px): Component border radius
- `--border-radius-sm` (4px): Small element radius
- `--border-radius-xs` (2px): Progress bar radius
- `--transition-fast` (0.2s): Quick transitions

## Public Methods

### `clearFiles(): void`
Remove all selected files.

```javascript
fileInput.clearFiles();
```

### `getFiles(): File[]`
Get array of currently selected files.

```javascript
const files = fileInput.getFiles();
console.log('Current files:', files);
```

### `setError(message: string): void` / `clearError(): void`
Control error state.

```javascript
fileInput.setError('Upload failed');
fileInput.clearError();
```

## Advanced Examples

### Image Gallery Upload
```javascript
const galleryUpload = document.createElement('zero-file-input');
galleryUpload.label = 'Photo Gallery';
galleryUpload.multiple = true;
galleryUpload.accept = 'image/*';
galleryUpload.maxFiles = 20;
galleryUpload.maxFileSize = 5;
galleryUpload.showPreview = true;

galleryUpload.addEventListener('file-change', (event) => {
    const { files } = event.detail;
    
    files.forEach(file => {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                createImagePreview(e.target.result, file.name);
            };
            reader.readAsDataURL(file);
        }
    });
});

function createImagePreview(src, name) {
    const preview = document.createElement('img');
    preview.src = src;
    preview.alt = name;
    preview.className = 'gallery-preview';
    document.getElementById('gallery-container').appendChild(preview);
}
```

### Document Upload with Validation
```javascript
const docUpload = document.createElement('zero-file-input');
docUpload.label = 'Document Upload';
docUpload.accept = '.pdf,.doc,.docx,.txt,.rtf';
docUpload.maxFileSize = 25;
docUpload.multiple = true;
docUpload.showProgress = true;

docUpload.addEventListener('file-change', async (event) => {
    const { files } = event.detail;
    
    for (const file of files) {
        if (await validateDocument(file)) {
            uploadDocument(file);
        } else {
            docUpload.setError(`Invalid document: ${file.name}`);
        }
    }
});

async function validateDocument(file) {
    // Custom validation logic
    if (file.name.includes('sensitive')) {
        return false;
    }
    
    if (file.size > 25 * 1024 * 1024) {
        return false;
    }
    
    return true;
}

async function uploadDocument(file) {
    const formData = new FormData();
    formData.append('document', file);
    
    try {
        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData
        });
        
        if (response.ok) {
            console.log(`${file.name} uploaded successfully`);
        }
    } catch (error) {
        docUpload.setError(`Upload failed: ${file.name}`);
    }
}
```

### Bulk File Processing
```javascript
const bulkUpload = document.createElement('zero-file-input');
bulkUpload.label = 'Bulk File Upload';
bulkUpload.multiple = true;
bulkUpload.maxFiles = 100;
bulkUpload.showProgress = true;

let uploadQueue = [];
let isProcessing = false;

bulkUpload.addEventListener('file-change', (event) => {
    const { files } = event.detail;
    uploadQueue.push(...files);
    
    if (!isProcessing) {
        processUploadQueue();
    }
});

async function processUploadQueue() {
    isProcessing = true;
    
    while (uploadQueue.length > 0) {
        const file = uploadQueue.shift();
        
        try {
            await uploadFileWithProgress(file);
            console.log(`Uploaded: ${file.name}`);
        } catch (error) {
            console.error(`Failed to upload: ${file.name}`, error);
        }
    }
    
    isProcessing = false;
}

async function uploadFileWithProgress(file) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        
        xhr.upload.addEventListener('progress', (event) => {
            if (event.lengthComputable) {
                const progress = (event.loaded / event.total) * 100;
                updateFileProgress(file.name, progress);
            }
        });
        
        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                resolve(xhr.response);
            } else {
                reject(new Error(`Upload failed: ${xhr.status}`));
            }
        });
        
        xhr.addEventListener('error', () => {
            reject(new Error('Upload failed'));
        });
        
        const formData = new FormData();
        formData.append('file', file);
        
        xhr.open('POST', '/api/upload');
        xhr.send(formData);
    });
}
```

### File Type Specific Handling
```javascript
const mediaUpload = document.createElement('zero-file-input');
mediaUpload.label = 'Media Upload';
mediaUpload.multiple = true;
mediaUpload.accept = 'image/*,video/*,audio/*';

mediaUpload.addEventListener('file-change', (event) => {
    const { files } = event.detail;
    
    files.forEach(file => {
        if (file.type.startsWith('image/')) {
            handleImageFile(file);
        } else if (file.type.startsWith('video/')) {
            handleVideoFile(file);
        } else if (file.type.startsWith('audio/')) {
            handleAudioFile(file);
        }
    });
});

function handleImageFile(file) {
    // Compress image if needed
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
        const maxSize = 1920;
        let { width, height } = img;
        
        if (width > height) {
            if (width > maxSize) {
                height = (height * maxSize) / width;
                width = maxSize;
            }
        } else {
            if (height > maxSize) {
                width = (width * maxSize) / height;
                height = maxSize;
            }
        }
        
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        
        canvas.toBlob(uploadFile, 'image/jpeg', 0.9);
    };
    
    img.src = URL.createObjectURL(file);
}

function handleVideoFile(file) {
    // Extract video metadata
    const video = document.createElement('video');
    video.preload = 'metadata';
    
    video.onloadedmetadata = () => {
        console.log(`Video: ${file.name}`);
        console.log(`Duration: ${video.duration} seconds`);
        console.log(`Dimensions: ${video.videoWidth}x${video.videoHeight}`);
        
        URL.revokeObjectURL(video.src);
        uploadFile(file);
    };
    
    video.src = URL.createObjectURL(file);
}

function handleAudioFile(file) {
    // Extract audio metadata
    const audio = document.createElement('audio');
    audio.preload = 'metadata';
    
    audio.onloadedmetadata = () => {
        console.log(`Audio: ${file.name}`);
        console.log(`Duration: ${audio.duration} seconds`);
        
        URL.revokeObjectURL(audio.src);
        uploadFile(file);
    };
    
    audio.src = URL.createObjectURL(file);
}
```

## Styling Customization

```css
/* Custom file input theme */
zero-file-input {
    --primary-color: #2e7d32;
    --error-color: #c62828;
    --success-color: #1b5e20;
    --border-radius: 8px;
    --drop-zone-height: 150px;
}

/* Custom drop zone styling */
zero-file-input::part(drop-zone) {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    border: 2px dashed var(--primary-color);
}

/* Custom file preview styling */
zero-file-input::part(file-preview) {
    border-radius: 8px;
    border: 2px solid #e0e0e0;
}

/* Mobile responsive */
@media (max-width: 768px) {
    zero-file-input {
        --drop-zone-height: 100px;
        --spacing-lg: 16px;
    }
}

/* Dark theme */
zero-file-input.dark-theme {
    --background-color: #2d2d2d;
    --text-primary: #ffffff;
    --text-secondary: #cccccc;
    --border-color: #444444;
}
```

## File Type Support

### Images
- **Formats**: JPEG, PNG, GIF, WebP, SVG
- **Features**: Thumbnail previews, automatic compression
- **Validation**: Size, dimensions, format validation

### Documents
- **Formats**: PDF, DOC, DOCX, TXT, RTF
- **Features**: File type icons, metadata extraction
- **Validation**: File size, format validation

### Media
- **Formats**: MP4, MP3, WAV, etc.
- **Features**: Duration extraction, thumbnail generation
- **Validation**: Format and size validation

## Accessibility

- Full keyboard navigation (Tab, Enter, Space, Escape)
- ARIA labels and descriptions for screen readers
- High contrast mode compatibility
- Focus management and visual indicators
- Drag and drop accessibility support

## Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## License

MIT License - see LICENSE file for details.
