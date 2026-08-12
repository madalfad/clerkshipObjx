/* ------------------------------------------------------------------ *
 *  INTERNAL MEDICINE — clerkship objectives
 *
 *  Shape (see src/data/_template.js to start a new rotation):
 *
 *    { id, name, short, sections: [
 *        { num, title, blurb, groups: [ { title, items: [...] } ] }
 *    ]}
 *
 *  A leading "★" on an item marks it high-yield.
 *  This file is pure data — no imports, no logic.
 * ------------------------------------------------------------------ */

const internalMedicine = {
  id: "im",
  name: "Internal Medicine",
  short: "IM",
  sections: [
    {
      num: "01",
      title: "Clinical skills",
      blurb: "History taking, physical examination, clinical reasoning, documentation and professionalism.",
      groups: [
        {
          title: "History and physical examination",
          items: [
            "★ Obtain a complete history and physical examination on a newly admitted patient within 40 minutes, including functional and activities-of-daily-living assessment, social determinants of health, and medication reconciliation from at least two sources",
            "Elicit and characterize a chief complaint using a structured framework (onset, location, duration, character, aggravating and alleviating factors, radiation, timing, severity) without the use of leading questions",
            "★ Perform and document a focused cardiovascular examination, including jugular venous pressure estimation at 45°, localization of the point of maximal impulse, characterization of murmurs by timing, radiation and response to maneuvers, and identification of S3 and S4",
            "Perform a pulmonary examination distinguishing fine from coarse crackles, wheeze, rhonchi and pleural rub, and use percussion, tactile fremitus and breath sounds to differentiate consolidation, effusion and pneumothorax",
            "Perform an abdominal examination including liver span, splenic percussion, shifting dullness or fluid wave, and Murphy's sign",
            "Assess volume status using jugular venous pressure, orthostatic vital signs, mucous membranes, skin turgor, peripheral edema and daily weights, and document whether the patient is hypovolemic, euvolemic or hypervolemic",
            "Perform a screening neurologic examination and a diabetic foot examination including monofilament testing, vibration sense, pulses and skin inspection",
            "State the diagnostic accuracy of common physical findings, including the likelihood ratio of elevated jugular venous pressure for heart failure and of unilateral leg swelling for deep vein thrombosis",
          ],
        },
        {
          title: "Clinical reasoning",
          items: [
            "★ Construct a prioritized and complete problem list, stating each problem at the level of diagnostic certainty supported by the available data",
            "★ Generate a differential diagnosis using at least two organizing frameworks, such as anatomic, pathophysiologic or organ-system based",
            "For each differential diagnosis, identify the most likely diagnosis, the diagnosis that must not be missed, and the most treatable diagnosis",
            "Estimate pretest probability and describe how a test result alters it, applying sensitivity, specificity, positive and negative predictive value and likelihood ratios",
            "Identify anchoring, availability, premature closure and confirmation bias in clinical reasoning, and apply a debiasing strategy to a specific patient",
            "State how the result of each ordered test will change management, and identify tests that will not",
          ],
        },
        {
          title: "Documentation and communication",
          items: [
            "★ Write an admission history and physical with an assessment and plan organized by problem, each problem beginning with a one-line synthesis of the relevant findings",
            "★ Write a daily progress note whose assessment documents the change in the patient's condition since the previous day",
            "Present a newly admitted patient in 5 to 7 minutes, including a one-line summary, history of present illness, pertinent positives and negatives, examination, data, and assessment and plan by problem",
            "Present an established patient on rounds in 90 seconds or less, including overnight events, current status and the plan for the day",
            "★ Write a discharge summary documenting the reason for admission, hospital course by problem, discharge medications with changes identified, pending results and follow-up arrangements",
            "Give and receive a structured handoff using I-PASS or an equivalent format, including illness severity and anticipated contingencies",
            "Explain a diagnosis and treatment plan at a sixth-grade reading level and confirm comprehension using teach-back",
          ],
        },
        {
          title: "Professionalism, ethics and systems",
          items: [
            "Assess decision-making capacity using understanding, appreciation, reasoning and expression of a choice, and distinguish capacity from legal competence",
            "Conduct a goals-of-care discussion, distinguish do-not-resuscitate and do-not-intubate orders from comfort-focused care, and distinguish withdrawing from withholding treatment",
            "Identify the surrogate decision-maker hierarchy and apply the substituted judgment and best-interest standards",
            "State hospice eligibility criteria and the palliative regimens for pain, dyspnea, nausea and secretions",
            "Use a professional interpreter appropriately and state why a family member should not serve in that role",
            "Describe the process for reporting a patient safety event and distinguish an error, a near miss and an adverse event",
            "Identify at least three cost-conscious care decisions made during the rotation and the reasoning behind each",
          ],
        },
      ],
    },
    {
      num: "02",
      title: "Cardiovascular",
      blurb: "Chest pain, heart failure, arrhythmia, hypertension, and valvular and vascular disease.",
      groups: [
        {
          title: "Chest pain",
          items: [
            "★ Distinguish acute coronary syndrome, pulmonary embolism, aortic dissection, pericarditis, myocarditis, esophageal spasm, gastroesophageal reflux disease, musculoskeletal pain and pneumothorax by history, examination and initial diagnostic data",
            "Identify ST-elevation myocardial infarction by territory (anterior, inferior, lateral, posterior with leads V7 to V9, right ventricular with lead V4R) and recognize its equivalents, including new left bundle branch block with Sgarbossa criteria, de Winter T waves and the Wellens pattern",
            "Describe troponin release kinetics and distinguish type 1 myocardial infarction, type 2 myocardial infarction from demand ischemia, and non-ischemic elevation in myocarditis, pulmonary embolism, sepsis, chronic kidney disease and tachyarrhythmia",
            "Apply the HEART, TIMI and GRACE scores, and the Wells criteria and PERC rule for pulmonary embolism",
            "Initiate management of acute coronary syndrome with aspirin, a P2Y12 inhibitor, anticoagulation, a beta-blocker, a high-intensity statin and nitrates, and state the contraindications to each, including phosphodiesterase-5 inhibitor use and right ventricular infarction",
            "State door-to-balloon and door-to-needle time targets and the indications for fibrinolysis compared with transfer for percutaneous coronary intervention",
            "Identify the mechanical complications of myocardial infarction by time of onset: papillary muscle rupture, ventricular septal defect, free wall rupture, Dressler syndrome, left ventricular aneurysm and mural thrombus",
          ],
        },
        {
          title: "Heart failure",
          items: [
            "★ Distinguish heart failure with reduced, mildly reduced and preserved ejection fraction and state where management differs",
            "Classify heart failure by NYHA functional class and ACC/AHA stage and state the purpose of each classification",
            "Generate a differential diagnosis for acute decompensation, including nonadherence, ischemia, arrhythmia, infection, anemia, thyroid disease, NSAID use and disease progression",
            "Interpret BNP and NT-proBNP, including conditions that raise them independent of heart failure (atrial fibrillation, renal failure, advanced age) and obesity, which lowers them",
            "★ State the components of guideline-directed medical therapy for heart failure with reduced ejection fraction and the mortality benefit of each: an angiotensin receptor-neprilysin inhibitor, ACE inhibitor or angiotensin receptor blocker; an evidence-based beta-blocker; a mineralocorticoid receptor antagonist; and an SGLT2 inhibitor, with hydralazine and nitrate therapy in self-identified Black patients and diuretics for symptom control",
            "State the indications for implantable cardioverter-defibrillator and cardiac resynchronization therapy",
            "Manage acute decompensated heart failure by determining the congestion and perfusion profile, dosing intravenous loop diuretics, identifying diuretic resistance, and recognizing cardiogenic shock requiring inotropic support",
          ],
        },
        {
          title: "Arrhythmias",
          items: [
            "Interpret an electrocardiogram systematically: rate, rhythm, axis, intervals, hypertrophy, ischemia and infarction, and chamber abnormality",
            "Distinguish atrial fibrillation, atrial flutter, atrioventricular nodal reentrant tachycardia, atrial tachycardia and multifocal atrial tachycardia",
            "★ Manage atrial fibrillation, comparing rate and rhythm control and applying the CHA₂DS₂-VASc and HAS-BLED scores to the anticoagulation decision, including the indications for warfarin rather than a direct oral anticoagulant (mechanical valve, moderate to severe mitral stenosis)",
            "State the timing requirements for cardioversion and the role of transesophageal echocardiography",
            "Distinguish first-degree, Mobitz type I, Mobitz type II and third-degree atrioventricular block and state which require pacing",
            "Distinguish ventricular tachycardia from supraventricular tachycardia with aberrancy and manage stable and unstable wide-complex tachycardia",
            "Identify congenital and drug-induced long QT syndrome, torsades de pointes, Brugada syndrome and Wolff-Parkinson-White syndrome, and state which atrioventricular nodal blocking agents are contraindicated in Wolff-Parkinson-White syndrome with atrial fibrillation",
          ],
        },
        {
          title: "Hypertension",
          items: [
            "Apply current staging thresholds, confirm the diagnosis with out-of-office measurement, and identify white-coat and masked hypertension",
            "★ Evaluate secondary causes of hypertension when indicated, including primary aldosteronism using the aldosterone-to-renin ratio, renovascular disease, pheochromocytoma, Cushing syndrome, obstructive sleep apnea, thyroid disease, coarctation of the aorta and medication-induced causes",
            "Select first-line antihypertensive therapy by comorbidity: an ACE inhibitor or angiotensin receptor blocker in diabetes or chronic kidney disease with albuminuria, guideline-directed therapy in heart failure, a beta-blocker after myocardial infarction, and a thiazide or calcium channel blocker in Black patients without those indications",
            "★ Distinguish hypertensive urgency from hypertensive emergency by the presence of end-organ damage, and state the rate limits and preferred agents for blood pressure reduction in aortic dissection, intracerebral hemorrhage, ischemic stroke, eclampsia and pulmonary edema",
          ],
        },
        {
          title: "Valvular disease, lipids and vascular",
          items: [
            "Identify aortic stenosis, aortic regurgitation, mitral regurgitation and mitral stenosis by murmur characteristics and response to dynamic maneuvers",
            "State the symptomatic triad of aortic stenosis and its prognostic implications, and list the indications for intervention in aortic stenosis and mitral regurgitation",
            "Distinguish hypertrophic cardiomyopathy from aortic stenosis by the response of the murmur to maneuvers",
            "Apply the modified Duke criteria for infective endocarditis and state the indications for antibiotic prophylaxis",
            "★ Assign statin intensity by the four benefit groups, interpret atherosclerotic cardiovascular disease risk estimation, state the indications for ezetimibe and PCSK9 inhibitors, and manage severe hypertriglyceridemia",
            "Diagnose peripheral arterial disease using the ankle-brachial index, including falsely elevated values from non-compressible vessels, and distinguish claudication from spinal stenosis and venous insufficiency",
            "State the screening indications for abdominal aortic aneurysm and describe the presentation and management of aortic dissection",
          ],
        },
      ],
    },
    {
      num: "03",
      title: "Pulmonary, renal and critical care",
      blurb: "Respiratory disease, acid–base and electrolyte disorders, kidney disease and critical illness.",
      groups: [
        {
          title: "Dyspnea and cough",
          items: [
            "Generate a differential diagnosis for acute and chronic dyspnea spanning cardiac, pulmonary, hematologic, metabolic, neuromuscular and psychogenic causes",
            "Evaluate chronic cough lasting more than 8 weeks, including upper airway cough syndrome, asthma and cough-variant asthma, gastroesophageal reflux disease and ACE inhibitor use, and state the indications for imaging",
            "State the limitations of pulse oximetry, calculate and interpret the alveolar-arterial gradient, and classify hypoxemia by mechanism",
          ],
        },
        {
          title: "Obstructive lung disease",
          items: [
            "Interpret spirometry to distinguish obstruction from restriction, assess bronchodilator response, and use the diffusing capacity to differentiate emphysema, interstitial disease and pulmonary vascular disease",
            "Stage chronic obstructive pulmonary disease and select therapy by symptom burden and exacerbation history, including the increased pneumonia risk associated with inhaled corticosteroids",
            "★ Manage a chronic obstructive pulmonary disease exacerbation with bronchodilators, systemic corticosteroids and antibiotics when indicated, and state the indications and contraindications for non-invasive ventilation",
            "State the interventions that reduce mortality in chronic obstructive pulmonary disease: smoking cessation, long-term oxygen therapy in qualifying hypoxemia, and lung volume reduction in selected patients",
            "Classify asthma severity and control, apply stepwise therapy, and identify features suggesting allergic bronchopulmonary aspergillosis, eosinophilic granulomatosis with polyangiitis or vocal cord dysfunction",
            "Manage status asthmaticus and identify impending respiratory failure, including a normalizing pCO₂ and diminished breath sounds",
          ],
        },
        {
          title: "Pulmonary vascular, infectious, interstitial and neoplastic",
          items: [
            "★ Diagnose pulmonary embolism: stratify risk, select among D-dimer, computed tomography pulmonary angiography and ventilation-perfusion scanning, identify massive and submassive embolism requiring thrombolysis, and select anticoagulation and duration according to provoked, unprovoked or malignancy-associated status",
            "Distinguish community-acquired, hospital-acquired and ventilator-associated pneumonia from aspiration pneumonia and pneumonitis, apply CURB-65 or the Pneumonia Severity Index to the site-of-care decision, and select empiric therapy accounting for MRSA and Pseudomonas risk",
            "Identify pathogen-specific clinical features, including Legionella with hyponatremia and gastrointestinal symptoms, Klebsiella in alcohol use disorder, and Pneumocystis jirovecii with elevated lactate dehydrogenase and exertional desaturation",
            "★ Manage latent and active tuberculosis, interpreting tuberculin skin test cut-points by risk group and interferon-gamma release assays, and describe rifampin, isoniazid, pyrazinamide and ethambutol therapy with the major toxicity of each agent",
            "Analyze pleural fluid using Light's criteria and distinguish uncomplicated parapneumonic effusion, complicated effusion and empyema, as well as chylothorax and hemothorax",
            "Evaluate a solitary pulmonary nodule by size, radiographic characteristics and patient risk, and state lung cancer screening eligibility",
            "Distinguish small cell from non-small cell lung cancer and list the associated paraneoplastic syndromes: syndrome of inappropriate antidiuretic hormone secretion, ectopic ACTH, Lambert-Eaton myasthenic syndrome, and PTHrP-mediated hypercalcemia in squamous cell carcinoma",
            "Identify the patterns of interstitial lung disease, including idiopathic pulmonary fibrosis with usual interstitial pneumonia, hypersensitivity pneumonitis, sarcoidosis, connective tissue disease-associated disease and the pneumoconioses, and state the exposure history associated with each",
            "Recognize obstructive sleep apnea and obesity hypoventilation syndrome and interpret sleep study indices",
          ],
        },
        {
          title: "Acid–base and electrolytes",
          items: [
            "★ Perform a systematic acid–base analysis: pH, primary disorder, compensation using Winter's formula and the metabolic rules, anion gap, delta-delta gap and osmolar gap, and identify triple disorders",
            "Generate a differential diagnosis for anion gap acidosis (lactate, ketoacids, uremia, toxic alcohols, salicylates) and non-anion gap acidosis, distinguishing the renal tubular acidoses by urine anion gap, urine pH and serum potassium",
            "★ Evaluate hyponatremia in sequence using serum osmolality, volume status, urine osmolality and urine sodium, distinguishing the syndrome of inappropriate antidiuretic hormone secretion, hypovolemic and hypervolemic causes, psychogenic polydipsia, beer potomania and cerebral salt wasting",
            "State safe rates of correction for hyponatremia and hypernatremia and the consequences of overly rapid correction of each",
            "Manage hyperkalemia in sequence with membrane stabilization, intracellular shift and total body potassium removal, identify the electrocardiographic progression, and recognize pseudohyperkalemia",
            "Evaluate hypokalemia, including transcellular shift and gastrointestinal compared with renal losses, distinguish Bartter, Gitelman and Liddle syndromes, and measure serum magnesium",
            "Classify hypercalcemia as parathyroid hormone-mediated or non-parathyroid hormone-mediated (malignancy, granulomatous disease, vitamin D excess, immobilization, milk-alkali syndrome) and manage severe hypercalcemia",
            "Evaluate hypocalcemia, hypomagnesemia and phosphate disorders, including refeeding syndrome and tumor lysis syndrome",
          ],
        },
        {
          title: "Kidney disease",
          items: [
            "★ Classify acute kidney injury as prerenal, intrinsic or postrenal using the fractional excretion of sodium and urea, urinalysis and urine microscopy, including muddy brown casts, red cell casts, white cell casts and eosinophils",
            "Recognize contrast-associated nephropathy, hepatorenal syndrome, cardiorenal syndrome, rhabdomyolysis and abdominal compartment syndrome",
            "State the emergent indications for dialysis and recognize uremic pericarditis and encephalopathy",
            "Stage chronic kidney disease by estimated glomerular filtration rate and albuminuria and manage anemia, mineral and bone disorder, metabolic acidosis, hyperkalemia and volume overload",
            "★ State the interventions that slow progression of chronic kidney disease: blood pressure control, renin-angiotensin-aldosterone system blockade, SGLT2 inhibition, glycemic control and avoidance of nephrotoxins",
            "Distinguish nephrotic from nephritic syndrome and list the major glomerular diseases in each with their characteristic associations",
            "Evaluate hematuria and proteinuria in the outpatient setting and state the indications for renal biopsy and urologic referral",
            "Manage nephrolithiasis by stone composition and state the indications for urgent urologic intervention",
          ],
        },
        {
          title: "Shock and critical care",
          items: [
            "★ Distinguish hypovolemic, cardiogenic, distributive and obstructive shock using preload, afterload, cardiac output and mixed venous oxygen saturation",
            "Apply the current SIRS and sepsis definitions, and initiate the sepsis bundle, including cultures before antibiotics, broad-spectrum antibiotics within the first hour, fluid resuscitation and lactate measurement, and select vasopressor therapy beginning with norepinephrine",
            "Define acute respiratory distress syndrome using the Berlin criteria and state the ventilator strategy that reduces mortality: low tidal volume ventilation, plateau pressure limitation and prone positioning in severe disease",
            "Interpret basic ventilator settings and differentiate elevated peak from elevated plateau airway pressures",
            "Identify and manage intensive care unit delirium, applying non-pharmacologic prevention as first-line management",
          ],
        },
      ],
    },
    {
      num: "04",
      title: "GI, endocrine, heme/onc, ID, rheum, neuro",
      blurb: "Gastroenterology, endocrinology, hematology and oncology, infectious disease, rheumatology and neurology.",
      groups: [
        {
          title: "Gastroenterology and hepatology",
          items: [
            "Evaluate abdominal pain by location and character and identify the acute abdomen requiring surgical consultation",
            "★ Manage upper gastrointestinal bleeding: stratify risk, resuscitate, administer proton pump inhibitor therapy, determine the timing of endoscopy, and apply variceal-specific measures including octreotide, ceftriaxone prophylaxis and band ligation",
            "Evaluate lower gastrointestinal bleeding and differentiate diverticular bleeding, angiodysplasia, ischemic colitis, hemorrhoids and malignancy",
            "Distinguish acute from chronic diarrhea, classify chronic diarrhea as osmotic, secretory, inflammatory or malabsorptive, and manage Clostridioides difficile infection by severity and recurrence",
            "Diagnose celiac disease, apply the Rome criteria for irritable bowel syndrome, and distinguish Crohn disease from ulcerative colitis by distribution, histology and extraintestinal manifestations",
            "Manage gastroesophageal reflux disease and identify its alarm features, and evaluate dysphagia as oropharyngeal or esophageal and as solid-only or solid-and-liquid, including achalasia, eosinophilic esophagitis and esophageal carcinoma",
            "Diagnose and manage peptic ulcer disease, including Helicobacter pylori testing and eradication therapy and NSAID-associated ulceration",
            "★ Classify liver test abnormalities as hepatocellular or cholestatic and generate a differential diagnosis for each, and evaluate isolated hyperbilirubinemia, including Gilbert syndrome, hemolysis and Dubin-Johnson syndrome",
            "Order and interpret hepatitis B serologic patterns and state the screening indications and treatment outcomes for hepatitis C",
            "★ Manage the complications of cirrhosis: ascites using the serum-ascites albumin gradient, diuretics and paracentesis; spontaneous bacterial peritonitis using the polymorphonuclear cell threshold and albumin infusion; hepatic encephalopathy; esophageal varices; hepatorenal syndrome; and hepatocellular carcinoma surveillance, applying the MELD and Child-Pugh scores",
            "Diagnose alcohol-associated hepatitis, metabolic dysfunction-associated steatotic liver disease and steatohepatitis, autoimmune hepatitis, primary biliary cholangitis, primary sclerosing cholangitis, hemochromatosis, Wilson disease and alpha-1 antitrypsin deficiency using their distinguishing tests",
            "Manage acute pancreatitis, including determination of etiology, severity scoring, fluid resuscitation, timing of enteral feeding and identification of complications",
          ],
        },
        {
          title: "Endocrine",
          items: [
            "★ Diagnose diabetes mellitus and prediabetes, distinguish type 1, type 2, latent autoimmune diabetes in adults and maturity-onset diabetes of the young, and set individualized hemoglobin A1c targets",
            "Sequence pharmacotherapy for type 2 diabetes accounting for cardiovascular and renal outcome benefit, hypoglycemia risk and cost",
            "Describe basal-bolus insulin dosing and correction factors and distinguish the Somogyi effect from the dawn phenomenon",
            "★ Manage diabetic ketoacidosis and hyperosmolar hyperglycemic state, including fluid resuscitation, insulin therapy, potassium repletion criteria, closure of the anion gap and transition to subcutaneous insulin, and recognize euglycemic ketoacidosis associated with SGLT2 inhibitors",
            "Screen for and manage diabetic retinopathy, nephropathy and neuropathy, and perform the diabetic foot examination",
            "Interpret thyroid function tests across their patterns and manage hypothyroidism, hyperthyroidism, subclinical thyroid disease, thyroid storm and myxedema coma, and evaluate a thyroid nodule",
            "Diagnose primary and secondary adrenal insufficiency using cosyntropin stimulation testing, and manage adrenal crisis and perioperative corticosteroid coverage",
            "Recognize Cushing syndrome and describe its diagnostic sequence, and recognize pheochromocytoma and primary aldosteronism",
            "Evaluate hypercalcemia and hypocalcemia using parathyroid hormone, manage primary hyperparathyroidism, and state the indications for parathyroidectomy",
            "Screen for and treat osteoporosis, interpret dual-energy X-ray absorptiometry T-scores and FRAX estimates, and state the indications for bisphosphonate therapy and its major adverse effects",
            "Evaluate pituitary disorders, including prolactinoma, acromegaly, and central compared with nephrogenic diabetes insipidus using the water deprivation test",
          ],
        },
        {
          title: "Hematology and oncology",
          items: [
            "★ Classify anemia by mean corpuscular volume and reticulocyte index and interpret iron studies to distinguish iron deficiency, anemia of chronic disease and thalassemia trait",
            "Evaluate macrocytic anemia, including vitamin B12 and folate deficiency, methylmalonic acid testing, medications, alcohol use, hypothyroidism and myelodysplastic syndrome",
            "Evaluate hemolysis using lactate dehydrogenase, haptoglobin, bilirubin and peripheral smear findings, distinguishing warm and cold autoimmune hemolytic anemia, G6PD deficiency, hereditary spherocytosis and microangiopathic causes",
            "★ Distinguish thrombotic thrombocytopenic purpura, hemolytic uremic syndrome and disseminated intravascular coagulation, and initiate urgent plasma exchange for thrombotic thrombocytopenic purpura",
            "Evaluate thrombocytopenia, including immune thrombocytopenia, drug-induced thrombocytopenia, heparin-induced thrombocytopenia using the 4T score with argatroban or bivalirudin, hypersplenism and marrow failure",
            "Interpret coagulation studies, evaluate a prolonged prothrombin or partial thromboplastin time using a mixing study, and recognize von Willebrand disease, hemophilia and antiphospholipid syndrome",
            "★ Manage anticoagulation, including selection of indication, agent and duration; reversal with vitamin K, prothrombin complex concentrate, idarucizumab or andexanet alfa; and periprocedural interruption and bridging",
            "Evaluate inherited and acquired thrombophilia and state the circumstances in which testing changes management",
            "Manage sickle cell disease, including vaso-occlusive crisis, acute chest syndrome, aplastic crisis, splenic sequestration and hydroxyurea therapy",
            "Recognize the leukemias and lymphomas by presentation, distinguish Hodgkin from non-Hodgkin lymphoma, and identify multiple myeloma by the CRAB criteria and its distinction from monoclonal gammopathy of undetermined significance",
            "★ Recognize the oncologic emergencies: febrile neutropenia, spinal cord compression, superior vena cava syndrome, tumor lysis syndrome, hypercalcemia of malignancy and hyperviscosity syndrome",
            "State transfusion thresholds and recognize transfusion reactions, including febrile nonhemolytic, acute hemolytic, transfusion-related acute lung injury, transfusion-associated circulatory overload, allergic and anaphylactic reactions",
          ],
        },
        {
          title: "Infectious disease",
          items: [
            "Evaluate fever of unknown origin systematically across infectious, malignant, autoimmune, drug-related and miscellaneous causes",
            "Manage urinary tract infection and pyelonephritis, and state the indications for treating asymptomatic bacteriuria in pregnancy and before urologic procedures",
            "Classify skin and soft tissue infections, distinguish cellulitis from abscess, and identify necrotizing fasciitis as a surgical emergency",
            "Diagnose and manage osteomyelitis and diabetic foot infection",
            "★ Evaluate meningitis and encephalitis, including the indications for imaging before lumbar puncture, cerebrospinal fluid profiles for bacterial, viral, fungal and tuberculous causes, empiric therapy by age and risk factor, and the timing of dexamethasone",
            "Manage HIV infection, including screening, acute retroviral syndrome, initiation of antiretroviral therapy, and prophylaxis and treatment of opportunistic infections by CD4 count, and state the indications for pre-exposure and post-exposure prophylaxis",
            "Recognize immune reconstitution inflammatory syndrome",
            "Manage infective endocarditis, including organism-specific implications such as the association of Streptococcus gallolyticus with colonic neoplasia",
            "Evaluate diarrheal illness and travel-associated infection, including malaria, dengue and typhoid fever, and state when each should be considered",
            "Apply antimicrobial stewardship principles, including spectrum selection, de-escalation, duration of therapy and penicillin allergy delabeling",
            "State the adult immunization schedule, including pneumococcal, herpes zoster, influenza, COVID-19, tetanus-diphtheria-pertussis and human papillomavirus vaccination by age and risk group",
          ],
        },
        {
          title: "Rheumatology and musculoskeletal",
          items: [
            "★ Evaluate monoarticular arthritis with septic arthritis retained in the differential diagnosis, and interpret synovial fluid cell count, crystal analysis and Gram stain",
            "Manage gout and calcium pyrophosphate deposition disease, including acute treatment options with their contraindications and the indications and targets for urate-lowering therapy",
            "Distinguish inflammatory from mechanical joint pain by history",
            "Recognize rheumatoid arthritis and describe disease-modifying antirheumatic drug therapy, including tuberculosis and hepatitis screening before initiation",
            "Recognize systemic lupus erythematosus and interpret the autoantibody panel, including the sensitivity of antinuclear antibody and the specificity of anti-double-stranded DNA and anti-Smith antibodies, and recognize lupus nephritis and drug-induced lupus",
            "Recognize the spondyloarthropathies, systemic sclerosis and scleroderma renal crisis, Sjögren syndrome and the inflammatory myopathies",
            "Classify the vasculitides by vessel size, including giant cell arteritis and the indication for corticosteroid therapy before temporal artery biopsy, polymyalgia rheumatica, ANCA-associated vasculitis and IgA vasculitis",
            "Evaluate low back pain, identify red flag features, and state the indications for imaging in acute back pain",
            "Manage osteoarthritis and fibromyalgia",
          ],
        },
        {
          title: "Neurology",
          items: [
            "★ Localize a neurologic lesion from the examination to the cortex, subcortical structures, brainstem, spinal cord, nerve root, plexus, peripheral nerve, neuromuscular junction or muscle",
            "Manage acute ischemic stroke, including thrombolysis and thrombectomy time windows, blood pressure parameters and contraindications, and evaluate transient ischemic attack",
            "Distinguish stroke subtypes and select secondary prevention, including antiplatelet compared with anticoagulant therapy, statin therapy and carotid intervention",
            "Evaluate altered mental status and distinguish delirium, dementia and depression",
            "Classify headache, identify red flag features, and distinguish migraine, tension-type and cluster headache from secondary causes, including subarachnoid hemorrhage, giant cell arteritis, idiopathic intracranial hypertension and cerebral venous sinus thrombosis",
            "Evaluate syncope across vasovagal, orthostatic, cardiac and neurologic causes and identify high-risk features",
            "Evaluate seizure and manage status epilepticus",
            "Recognize the patterns of peripheral neuropathy, Guillain-Barré syndrome, myasthenia gravis and Parkinson disease",
          ],
        },
      ],
    },
    {
      num: "05",
      title: "Ambulatory and preventive medicine",
      blurb: "Screening, risk factor counseling and common outpatient presentations.",
      groups: [
        {
          title: "Screening",
          items: [
            "★ State the recommended age, interval and modality for colorectal, breast, cervical, lung and prostate cancer screening, and for abdominal aortic aneurysm, osteoporosis, hepatitis C, HIV and diabetes screening",
            "Modify screening recommendations for elevated-risk groups and state when to discontinue screening on the basis of life expectancy",
            "Define lead-time bias, length-time bias and overdiagnosis and describe their effect on the interpretation of screening trials",
          ],
        },
        {
          title: "Risk factors and counseling",
          items: [
            "Provide smoking cessation counseling using the 5 A's and compare nicotine replacement therapy, varenicline and bupropion",
            "Screen for unhealthy alcohol use with the AUDIT-C and manage withdrawal using the CIWA protocol, benzodiazepines, and thiamine administered before glucose",
            "Screen for depression using the PHQ-2 and PHQ-9 and for anxiety using the GAD-7, initiate first-line treatment, and state the indications for escalation or referral",
            "Screen for intimate partner violence and elder abuse",
            "Counsel on obesity management, including lifestyle modification, pharmacotherapy and the indications for bariatric surgery",
            "Provide contraceptive and preconception counseling in the context of medical comorbidity and teratogenic medications",
          ],
        },
        {
          title: "Common clinic presentations",
          items: [
            "Perform a preoperative medical evaluation, including assessment of functional capacity, cardiac risk stratification, and perioperative management of anticoagulants, antiplatelet agents, insulin and corticosteroids",
            "Evaluate fatigue, unintentional weight loss, dizziness, edema and insomnia as undifferentiated complaints",
            "Evaluate incidental findings, including thyroid nodule, adrenal incidentaloma, pulmonary nodule, elevated ferritin and mild transaminase elevation",
            "Manage chronic pain and prescribe opioids safely, including risk assessment and naloxone co-prescription",
            "Perform a geriatric assessment addressing falls, polypharmacy and deprescribing using the Beers criteria, cognition, continence, frailty and functional status",
          ],
        },
      ],
    },
    {
      num: "06",
      title: "Data and procedures",
      blurb: "Diagnostic studies to interpret independently and procedures to observe or assist.",
      groups: [
        {
          title: "Interpret independently",
          items: [
            "★ Electrocardiogram: systematic interpretation and the diagnostic patterns listed in the cardiovascular section",
            "★ Chest radiograph: systematic interpretation identifying consolidation, effusion, pneumothorax, pulmonary edema, cardiomegaly, free intraperitoneal air, and line and tube position",
            "Chest and abdominal computed tomography: orientation and identification of major structures",
            "★ Complete blood count with differential and peripheral blood smear findings",
            "★ Basic and comprehensive metabolic panels, including acid–base and electrolyte interpretation",
            "Urinalysis with microscopy",
            "Arterial blood gas",
            "Pleural, ascitic, synovial and cerebrospinal fluid analysis",
            "Pulmonary function tests",
            "Echocardiogram report: ejection fraction, wall motion, valve function, chamber size, diastolic function and pulmonary pressures",
          ],
        },
        {
          title: "Observe or assist, stating for each the indications, contraindications and three most common complications",
          items: [
            "Peripheral intravenous catheter placement, venipuncture and arterial blood gas sampling",
            "Nasogastric tube placement",
            "Lumbar puncture",
            "Paracentesis",
            "Thoracentesis",
            "Arthrocentesis",
            "Central venous and arterial catheter placement",
          ],
        },
      ],
    },
    {
      num: "07",
      title: "Decision-making",
      blurb: "Diagnostic sequencing, adverse effects and quantitative reasoning that recur across the preceding sections.",
      groups: [
        {
          title: "Diagnostic and management principles",
          items: [
            "Identify the next appropriate step in evaluation or management, which may differ from establishing the final diagnosis",
            "Apply the sequence of stabilization, diagnosis and treatment, and identify the conditions in which empiric treatment precedes diagnostic confirmation, including septic shock, bacterial meningitis and giant cell arteritis",
            "Determine whether diagnostic delay risks irreversible harm when choosing between confirmatory testing and empiric therapy",
            "State the indications for head computed tomography before lumbar puncture: focal neurologic deficit, papilledema, altered mental status, immunocompromise, new-onset seizure or age over 60",
            "State the major adverse effects of commonly prescribed drugs: ACE inhibitor cough, angioedema and hyperkalemia; amiodarone thyroid, pulmonary, hepatic and ocular toxicity; metformin-associated lactic acidosis; statin myopathy; proton pump inhibitors with Clostridioides difficile infection and hypomagnesemia; and fluoroquinolone tendinopathy and QT prolongation",
            "Distinguish an expected rise in serum creatinine after initiation of an ACE inhibitor from one requiring further evaluation",
            "State the screening interval and stopping age for each recommended screening test, not only its indication",
            "Apply sensitivity and specificity, positive and negative predictive value with their dependence on prevalence, number needed to treat, and relative compared with absolute risk reduction, and identify common study designs",
            "Elicit the patient's perspective and values before proposing a course of action when resolving an ethical conflict",
            "State the vaccination and antimicrobial prophylaxis requirements of asplenic and immunocompromised patients",
            "Select the least invasive test or intervention that answers the clinical question and identify when observation is appropriate",
          ],
        },
      ],
    },
  ],
};

export default internalMedicine;
