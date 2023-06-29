$folderPath = "D:\Users\OneDrive - Tribhuvan University\Desktop\GitHub1\yadavrahulkumar91.github.io\6 NEB GameChanger\Books\11\Physics"
$files = Get-ChildItem -Path $folderPath -Filter "*.html"

$replacementContent = @"
var contentPageLocation = "../physicsContent.html";
"@

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw
    $newContent = $content -replace "var contentPageLocation = "../contentRobbins.html\";", $replacementContent
    $newContent | Set-Content -Path $file.FullName
}
