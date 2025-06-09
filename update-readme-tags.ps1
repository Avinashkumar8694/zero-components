# PowerShell script to update all README files with correct versioned tag format

$basePath = "c:\Users\AvinashGupta\Documents\Personal\Apps\zero-components\packages"

# Define all component mappings
$components = @{
    "zero-checkbox" = "zero-checkbox-1.0.0"
    "zero-attribute-window" = "zero-attribute-window-1.0.0"
    "attribute-window" = "zero-attribute-window-1.0.0"
    "zero-popup-dropdown" = "zero-popup-dropdown-1.0.0"
    "popup-dropdown" = "zero-popup-dropdown-1.0.0"
    "zero-dropdown" = "zero-dropdown-1.0.0"
    "zero-textarea" = "zero-textarea-1.0.0"
    "zero-text-input" = "zero-text-input-1.0.0"
    "zero-range-slider" = "zero-range-slider-1.0.0"
    "zero-password-input" = "zero-password-input-1.0.0"
    "zero-number-input" = "zero-number-input-1.0.0"
    "zero-file-input" = "zero-file-input-1.0.0"
    "zero-color-picker" = "zero-color-picker-1.0.0"
    "zero-date-picker" = "zero-date-picker-1.0.0"
    "popup-dropdown-directive" = "zero-popup-dropdown-directive-1.0.0"
    "popup-dialog" = "zero-popup-dialog-1.0.0"
    "rich-text-editor" = "zero-rich-text-editor-1.0.0"
    "code-editor" = "zero-code-editor-1.0.0"
    "open-popup-directive" = "zero-open-popup-directive-1.0.0"
    "nrenderer" = "zero-nrenderer-1.0.0"
}

# Get all README.md files
$readmeFiles = Get-ChildItem -Path $basePath -Recurse -Name "README.md" | ForEach-Object { 
    Join-Path $basePath $_ 
}

Write-Host "Found $($readmeFiles.Count) README files to update..."

foreach ($file in $readmeFiles) {
    Write-Host "Processing: $file"
    $content = Get-Content $file -Raw
    $originalContent = $content
      foreach ($componentPair in $components.GetEnumerator()) {
        $oldTag = $componentPair.Key
        $newTag = $componentPair.Value
        
        # Update opening tags with attributes
        $content = $content -replace "<$oldTag(\s[^>]*)?>", "<$newTag`$1>"
        # Update self-closing tags
        $content = $content -replace "<$oldTag(\s[^>]*)?/>", "<$newTag`$1/>"
        # Update closing tags
        $content = $content -replace "</$oldTag>", "</$newTag>"
        # Update querySelector references
        $content = $content -replace "querySelector\('$oldTag'\)", "querySelector('$newTag')"
        $content = $content -replace "querySelectorAll\('$oldTag'\)", "querySelectorAll('$newTag')"
        $content = $content -replace "createElement\('$oldTag'\)", "createElement('$newTag')"
    }
    
    if ($content -ne $originalContent) {
        Set-Content $file $content -NoNewline
        Write-Host "  Updated: $file"
    } else {
        Write-Host "  No changes: $file"
    }
}

Write-Host "Update complete!"
