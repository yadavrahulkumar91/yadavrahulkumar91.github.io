$files = @(
    "Appendix1_Nerves_Arteries_Clinical_Terms.html",
    "Introduction_and_Osteology_of_Abdomen_and_Pelvis.html",
    "Anterior_Abdominal_Wall.html",
    "Male_External_Genital_Organs.html",
    "Abdominal_Cavity_Peritoneum.html",
    "Abdominal_Part_of_Oesophagus_Stomach.html",
    "Small_Large_Intestines.html",
    "Large_Blood_Vessels_of_the_Gut.html",
    "Extrahepatic_Biliary_Apparatus.html",
    "Spleen_Pancreas_Liver.html",
    "Kidney_Ureter.html",
    "Suprarenal_Gland_Chromaffin_System.html",
    "Diaphragm.html",
    "Posterior_Abdominal_Wall.html",
    "Perineum.html",
    "Preliminary_Consideration_of_Boundaries_Contents_of_Pelvis.html",
    "Urinary_Bladder_Urethra.html",
    "Female_Reproductive_Organs.html",
    "Male_Internal_Genital_Organs.html",
    "Rectum_Anal_Canal.html",
    "Walls_of_Pelvis.html",
    "Surface_Marking_of_Abdomen_Pelvis.html",
    "Radiological_Imaging_Procedures.html",
    "Appendix2_Nerves_Arteries_Clinical_Terms.html",
    "Introduction_and_Osteology_of_head_and_neck.html",
    "Scalp_Temple_Face.html",
    "Side_of_the_Neck.html",
    "Anterior_Triangle_of_the_Neck.html",
    "Parotid_Region.html",
    "Temporal_Infratemporal_Regions.html",
    "Submandibular_Region.html",
    "Structures_in_the_Neck.html",
    "Prevertebral_Paravertebral_Regions.html",
    "Back_of_the_Neck.html",
    "Contents_of_Vertebral_Canal.html",
    "Cranial_Cavity.html",
    "Contents_of_the_Orbit.html",
    "Mouth_Pharynx.html",
    "Nose_Paranasal_Sinuses_Pterygopalatine_Fossa.html",
    "Larynx.html",
    "Tongue.html",
    "Ear.html",
    "Eyeball.html",
    "Surface_Marking_Radiological_Anatomy.html",
    "Appendix_Parasympathetic_Ganglia_Arteries.html",
    "Introduction.html",
    "Meninges_of_the_Brain_and_Cerebrospinal_Fluid.html",
    "Spinal_Cord.html",
    "Cranial_Nerves.html",
    "Brainstem.html",
    "Cerebellum.html",
    "Fourth_Ventricle.html",
    "Cerebrum_Diencephalon_Basal_Nuclei_White_Matter.html",
    "Third_Ventricle_Lateral_Ventricle_Limbic_System.html",
    "Some_Neural_Pathways_Reticular_Formation.html",
    "Blood_Supply_of_Spinal_Cord_Brain.html",
    "Investigations_of_a_Neurological_Case_Surface_Radiological_Anatomy_Evolution_of_Head.html",
    "Autonomic_Nervous_System.html",
    "Appendix_Ventricles_Cranial_Nerves_Arteries_Clinical_Terms.html"
)


$basePath = "D:\Users\OneDrive - Tribhuvan University\Desktop\GitHub1\yadavrahulkumar91.github.io\10 MBBS GameChanger\Books\Basic science\Anatomy\BDC_Anatomy\lessons"

foreach ($file in $files) {
    $filePath = Join-Path -Path $basePath -ChildPath $file
    $content = @"
<!DOCTYPE html>
<html>
<head>
  <title></title>
  <link rel="stylesheet" type="text/css" href="/style/bookstyle.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="/script/otherSources.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/all.min.css">
</head>
<body>
  <header>
    <div class="left-box-container">
      <div>
        <div class="unit-left-lesson">
          <div class="unit-left"></div>
          <div class="lesson-no-box">
            <h1 id="lesson-no-id"></h1>
          </div>
        </div>
        <div class="unit-name">General Anatomy</div>
      </div>
    </div>
    <div class="header-center">
      <div class="lesson-title">
        <h1 id="lesson-name-id"></h1>
      </div>
      <div class="tab-bar">
        <div class="tab active-tab" onclick="openContainer(event, 'home')">Home</div>
        <div class="tab" onclick="openContainer(event, 'questions')">Questions</div>
        <div class="tab" onclick="openContainer(event, 'videos')">Videos</div>
        <div class="tab" onclick="openContainer(event, 'remnant')">Remnant memory</div>
      </div>
    </div>
  </header>
  <div class="menu-toggle-btn" id="menu-toggle-btn-id">
    <i class="fas fa-bars"></i>
  </div>
  <main>
    <div class="sidebar" id="sidebar-id"></div>
    <div id="home-container" class="container"></div>
    <div id="questions-container" class="container" style="display:none"></div>
    <div id="videos-container" class="container" style="display:none"></div>
    <div id="remnant-container" class="container" style="display:none"></div>
  </main>
  <footer>
    <p>&copy; 2023 GameChanger</p>
  </footer>
  <script>
    var contentPageLocation = "../content.html";
  </script>
  <script src="/script/bookscript.js"></script>
</body>
</html>
"@
    $content | Out-File -FilePath $filePath -Encoding UTF8
    Write-Host "Created file: $filePath"
}
