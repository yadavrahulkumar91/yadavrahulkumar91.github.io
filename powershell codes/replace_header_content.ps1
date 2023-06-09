$folderPath = "D:\Users\OneDrive - Tribhuvan University\Desktop\GitHub1\yadavrahulkumar91.github.io\6 NEB GameChanger\Books\11\Physics"
$files = Get-ChildItem -Path $folderPath -Filter "*.html"

$replacementContent = @"
<header>
    <div class="left-box-container">
      <div class="unit-left-lesson">
        <div class="unit-left"></div>
        <div class="lesson-no-box" id="lesson-no-id"></div>
      </div>
      <div class="unit-name-box" id="unit-name-id"></div>
    </div>

    <div class="header-center">
      <div class="lesson-name" id="lesson-name-id"></div>
      <div class="tab-bar">
        <div class="tab active-tab" onclick="openContainer(event, 'home')">Home</div>
        <div class="tab" onclick="openContainer(event, 'questions')">Questions</div>
        <div class="tab" onclick="openContainer(event, 'videos')">Videos</div>
        <div class="tab" onclick="openContainer(event, 'remnant')">Remnant memory</div>
      </div>
    </div>

   

    <script>
      var contentPageLocation = "../physicsContent.html";
    </script>
  </header>
  <main>
"@

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw
    $newContent = $content -replace "<header>[\s\S]*?</center>", $replacementContent
    $newContent | Set-Content -Path $file.FullName
}
