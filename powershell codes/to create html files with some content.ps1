
$files = @(
"Introduction_Routes_of_Drug_Administration.html",
"Pharmacokinetics_Membrane_Transport_Absorption_and_Distribution_of_Drugs.html",
"Pharmacokinetics_Metabolism_and_Excretion_of_Drugs_Kinetics_of_Elimination.html",
"Pharmacodynamics_Mechanism_of_Drug_Action_Receptor_Pharmacology.html",
"Aspects_of_Pharmacotherapy_Clinical_Pharmacology_and_Drug_Development.html",
"Adverse_Drug_Effects.html",
"Autonomic_Nervous_System_General_Considerations.html",
"Cholinergic_Transmission_and_Cholinergic_Drugs.html",
"Anticholinergic_Drugs_and_Drugs_Acting_on_Autonomic_Ganglia.html",
"Adrenergic_Transmission_and_Adrenergic_Drugs.html",
"Antiadrenergic_Drugs_and_Drugs_for_Glaucoma.html",
"Histamine_and_Antihistaminics.html",
"5-Hydroxytryptamine_its_Antagonists_and_Drug_Therapy_of_Migraine.html",
"Prostaglandins_Leukotrienes_and_Platelet_Activating_Factor.html",
"Nonsteroidal_Antiinflammatory_Drugs_and_Antipyretic-Analgesics.html",
"Antirheumatoid_and_Antigout_Drugs.html",
"Drugs_for_Cough_and_Bronchial_Asthma.html",
"Introduction.html",
"Anterior_Pituitary_Hormones.html",
"Thyroid_Hormones_and_Thyroid_Inhibitors.html",
"Insulin_Oral_Antidiabetic_Drugs_and_Glucagon.html",
"Corticosteroids.html",
"Androgens_and_Related_Drugs_Drugs_for_Erectile_Dysfunction.html",
"Estrogens_Progestins_and_Contraceptives.html",
"Oxytocin_and_Other_Drugs_Acting_on_Uterus.html",
"Skeletal_Muscle_Relaxants.html",
"Local_Anaesthetics.html",
"General_Anaesthetics.html",
"Ethyl_and_Methyl_Alcohols.html",
"Sedative-Hypnotics.html",
"Antiepileptic_Drugs.html",
"Antiparkinsonian_Drugs.html",
"Drugs_Used_in_Mental_Illness_Antipsychotic_and_Antimanic_Drugs.html",
"Drugs_Used_in_Mental_Illness_Antidepressant_and_Antianxiety_Drugs.html",
"Opioid_Analgesics_and_Antagonists.html",
"CNS_Stimulants_and_Cognition_Enhancers.html",
"Cardiac_Electrophysiological_Considerations.html",
"Drugs_Affecting_Renin-Angiotensin_System.html",
"Nitric_Oxide_and_Vasoactive_Peptide_Signal_Molecules.html",
"Cardiac_Glycosides_and_Drugs_for_Heart_Failure.html",
"Antiarrhythmic_Drugs.html",
"Antianginal_and_Other_Anti-ischaemic_Drugs.html",
"Antihypertensive_Drugs.html",
"Relevant_Physiology_of_Urine_Formation.html",
"Diuretics.html",
"Antidiuretics.html",
"Haematinics_and_Erythropoietin.html",
"Drugs_Affecting_Coagulation_Bleeding_and_Thrombosis.html",
"Hypolipidaemic_Drugs.html",
"Drugs_for_Peptic_Ulcer_and_Gastroesophageal_Reflux_Disease.html",
"Antiemetic_Prokinetic_and_Digestant_Drugs.html",
"Drugs_for_Constipation_and_Diarrhoea.html",
"Antimicrobial_Drugs_General_Considerations.html",
"Sulfonamides_Cotrimoxazole_and_Quinolones.html",
"Beta-Lactam_Antibiotics.html",
"Tetracyclines_and_Chloramphenicol.html",
"Aminoglycoside_Antibiotics.html",
"Macrolide_Lincosamide_Glycopeptide_and_Other_Antibacterial_Antibiotics.html",
"Antitubercular_Drugs.html",
"Antileprotic_Drugs.html",
"Antifungal_Drugs.html",
"Antiviral_Drugs_Non-retroviral.html",
"Antiviral_Drugs_Anti-retrovirus.html",
"Antimalarial_Drugs.html",
"Antiamoebic_and_Other_Antiprotozoal_Drugs.html",
"Anthelmintic_Drugs.html",
"Immunosuppressant_Drugs.html",
"Drugs_Acting_on_Skin_and_Mucous_Membranes.html",
"Antiseptics_Disinfectants_and_Ectoparasiticides.html",
"Chelating_Agents.html",
"Vitamins.html",
"Vaccines_Antisera_and_Immuneglobulins.html",
"Drug_Interactions.html"
)


$basePath = "D:\Users\OneDrive - Tribhuvan University\Desktop\GitHub1\yadavrahulkumar91.github.io\10 MBBS GameChanger\Books\Basic science\Pharmacology\lessons"

foreach ($file in $files) {
    $filePath = Join-Path -Path $basePath -ChildPath $file
    $content = @"
<!DOCTYPE html>
<html>

<head>
  <title></title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link type="text/css" rel="stylesheet" href="/style/bookstyle.css">

</head>

<body>

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
  </header>
  <main>

    <div id="home-container" class="container"></div>
    <div id="questions-container" class="container" style="display:none"></div>
    <div id="videos-container" class="container" style="display:none"></div>
    <div id="remnant-container" class="container" style="display:none"></div>
  </main>
  <footer>
    <p>&copy; 2023 GameChanger Academy</p>
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
