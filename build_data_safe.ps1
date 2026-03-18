$baseDir = "x:\feric\Documents\Meus Programas que Criei\java documentation"
$out = "const courseData = {`n"

$folders = Get-ChildItem -Path $baseDir -Directory | Where-Object { $_.Name -match '^\d' } | Sort-Object Name

foreach ($folder in $folders) {
    $out += "  `"$($folder.Name)`": [`n"
    $files = Get-ChildItem -Path $folder.FullName -Filter "*.md" | Sort-Object Name
    foreach ($file in $files) {
        $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
        if ($content -eq $null) { $content = "" }
        
        # Escape for JSON string
        $content = $content -replace '\\', '\\'
        $content = $content -replace '"', '\"'
        $content = $content -replace "`n", '\n'
        $content = $content -replace "`r", ''
        $content = $content -replace "`t", '\t'
        
        $out += "    { `"filename`": `"$($file.Name)`", `"content`": `"$($content)`" },`n"
    }
    $out += "  ],`n"
}
$out += "};`n"

[IO.File]::WriteAllText((Join-Path $baseDir "data.js"), $out, [System.Text.Encoding]::UTF8)
Write-Host "Done!"
