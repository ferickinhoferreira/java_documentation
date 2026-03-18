$baseDir = "x:\feric\Documents\Meus Programas que Criei\java documentation"
$dataMap = @{}

$folders = Get-ChildItem -Path $baseDir -Directory | Where-Object { $_.Name -match '^\d' } | Sort-Object Name
foreach ($folder in $folders) {
    if (-not $dataMap.ContainsKey($folder.Name)) {
        $dataMap[$folder.Name] = @()
    }
    
    $files = Get-ChildItem -Path $folder.FullName -Filter "*.md" | Sort-Object Name
    foreach ($file in $files) {
        $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
        
        $item = @{
            filename = $file.Name
            content = $content
        }
        $dataMap[$folder.Name] += $item
    }
}

# Preserve the ordered structure
$orderedMap = [ordered]@{}
foreach ($folder in $folders) {
    $orderedMap[$folder.Name] = $dataMap[$folder.Name]
}


$json = $orderedMap | ConvertTo-Json -Depth 10 -Compress
# Replace unicode escape sequences if any, though ConvertTo-Json handles most utf8 fine if encoding is right.
$jsContent = "const courseData = $json;"
[IO.File]::WriteAllText((Join-Path $baseDir "data.js"), $jsContent, [System.Text.Encoding]::UTF8)

Write-Host "data.js gerado com sucesso!"
