# Specify the directory containing the HTML documents
$directory = "D:\Users\OneDrive - Tribhuvan University\Desktop\GitHub1\yadavrahulkumar91.github.io\10 MBBS GameChanger\Books\Basic science\Pathology\Robbins_pathology"

# Get all HTML files in the directory
$htmlFiles = Get-ChildItem -Path $directory -Filter "*.html"

# Loop through each HTML file
foreach ($file in $htmlFiles) {
    # Read the content of the HTML file
    $content = Get-Content -Path $file.FullName -Raw

    # Find the position of the </footer> tag
    $footerIndex = $content.IndexOf("</footer>")

    # Check if the </footer> tag was found
    if ($footerIndex -ge 0) {
        # Build the new content with the script after the </footer> tag
        $newContent = $content.Insert($footerIndex + 9, '
<script>
    var contentPageLocation = "../contentRobbins.html";
</script>
')

        # Write the updated content back to the file
        $newContent | Set-Content -Path $file.FullName
        Write-Host "Script added to $($file.Name)"
    }
    else {
        Write-Host "No </footer> tag found in $($file.Name)"
    }
}
