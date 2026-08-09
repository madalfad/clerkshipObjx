import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";

/* ------------------------------------------------------------------ *
 *  CLERKSHIP OBJECTIVE TRACKER
 *
 *  To add another clerkship later, append an object to CLERKSHIPS with
 *  the same shape. Nothing else needs to change — progress, filters,
 *  the coverage map and storage all key off the data.
 *
 *      { id, name, short, sections: [
 *          { num, title, groups: [ { title, items: ["★ text", "text"] } ] }
 *      ]}
 *
 *  A leading "★" in an item marks it high-yield.
 * ------------------------------------------------------------------ */

const INTERNAL_MEDICINE = {
  id: "im",
  name: "Internal Medicine",
  short: "IM",
  sections: [
    {
      num: "01",
      title: "Cross-cutting clinical skills",
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
            "Apply the current sepsis definitions and initiate the sepsis bundle, including cultures before antibiotics, broad-spectrum antibiotics within the first hour, fluid resuscitation and lactate measurement, and select vasopressor therapy beginning with norepinephrine",
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
      title: "Cross-cutting decision points",
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

const CLERKSHIPS = [INTERNAL_MEDICINE];

/* ---------------------------- helpers ---------------------------- */

const STORAGE_KEY = "clerkship-tracker:v1";
const STATUS = { TODO: 0, ACTIVE: 1, DONE: 2 };

function hashId(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) >>> 0;
  return h.toString(36);
}

function buildIndex(clerkship) {
  const sections = clerkship.sections.map((s) => ({
    ...s,
    groups: s.groups.map((g) => ({
      ...g,
      items: g.items.map((raw) => {
        const star = raw.startsWith("★");
        const text = star ? raw.slice(1).trim() : raw;
        return { id: hashId(clerkship.id + "|" + text), text, star };
      }),
    })),
  }));
  const all = sections.flatMap((s) => s.groups.flatMap((g) => g.items));
  return { sections, all };
}

const tally = (items, statuses) => {
  let done = 0,
    active = 0;
  for (const it of items) {
    const v = statuses[it.id];
    if (v === STATUS.DONE) done++;
    else if (v === STATUS.ACTIVE) active++;
  }
  return { done, active, todo: items.length - done - active, total: items.length };
};

/* ------------------------------ app ------------------------------ */

export default function ClerkshipTracker() {
  const [clerkshipId, setClerkshipId] = useState(CLERKSHIPS[0].id);
  const [statuses, setStatuses] = useState({});
  const [collapsed, setCollapsed] = useState({});
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [starOnly, setStarOnly] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [saveState, setSaveState] = useState("idle");
  const [confirmReset, setConfirmReset] = useState(false);
  const sectionRefs = useRef({});
  const saveTimer = useRef(null);

  const clerkship = CLERKSHIPS.find((c) => c.id === clerkshipId);
  const { sections, all } = useMemo(() => buildIndex(clerkship), [clerkshipId]);

  /* load once */
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await window.storage.get(STORAGE_KEY);
        if (!cancelled && res?.value) {
          const parsed = JSON.parse(res.value);
          setStatuses(parsed.statuses?.[clerkshipId] ?? {});
          setCollapsed(parsed.collapsed?.[clerkshipId] ?? {});
        }
      } catch {
        /* no saved progress yet — start clean */
      } finally {
        if (!cancelled) setLoaded(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [clerkshipId]);

  /* save, debounced */
  const persist = useCallback(
    (nextStatuses, nextCollapsed) => {
      clearTimeout(saveTimer.current);
      setSaveState("saving");
      saveTimer.current = setTimeout(async () => {
        try {
          const prev = await window.storage.get(STORAGE_KEY).catch(() => null);
          const base = prev?.value ? JSON.parse(prev.value) : { statuses: {}, collapsed: {} };
          base.statuses = { ...base.statuses, [clerkshipId]: nextStatuses };
          base.collapsed = { ...base.collapsed, [clerkshipId]: nextCollapsed };
          base.updatedAt = new Date().toISOString();
          const ok = await window.storage.set(STORAGE_KEY, JSON.stringify(base));
          setSaveState(ok ? "saved" : "error");
        } catch {
          setSaveState("error");
        }
      }, 500);
    },
    [clerkshipId]
  );

  const cycle = (id) => {
    setStatuses((prev) => {
      const next = { ...prev };
      const cur = next[id] ?? STATUS.TODO;
      if (cur === STATUS.TODO) next[id] = STATUS.ACTIVE;
      else if (cur === STATUS.ACTIVE) next[id] = STATUS.DONE;
      else delete next[id];
      persist(next, collapsed);
      return next;
    });
  };

  const toggleSection = (num) => {
    setCollapsed((prev) => {
      const next = { ...prev, [num]: !prev[num] };
      persist(statuses, next);
      return next;
    });
  };

  const setAllCollapsed = (val) => {
    const next = {};
    if (val) sections.forEach((s) => (next[s.num] = true));
    setCollapsed(next);
    persist(statuses, next);
  };

  const resetProgress = () => {
    setStatuses({});
    persist({}, collapsed);
    setConfirmReset(false);
  };

  const overall = tally(all, statuses);
  const pct = overall.total ? Math.round((overall.done / overall.total) * 100) : 0;

  const matches = (item) => {
    if (starOnly && !item.star) return false;
    const st = statuses[item.id] ?? STATUS.TODO;
    if (filter === "todo" && st !== STATUS.TODO) return false;
    if (filter === "active" && st !== STATUS.ACTIVE) return false;
    if (filter === "done" && st !== STATUS.DONE) return false;
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      if (!item.text.toLowerCase().includes(q)) return false;
    }
    return true;
  };

  const filtering = starOnly || filter !== "all" || query.trim().length > 0;
  const visibleCount = all.filter(matches).length;

  const scrollToSection = (num) => {
    setCollapsed((prev) => {
      if (!prev[num]) return prev;
      const next = { ...prev, [num]: false };
      persist(statuses, next);
      return next;
    });
    requestAnimationFrame(() =>
      sectionRefs.current[num]?.scrollIntoView({ behavior: "smooth", block: "start" })
    );
  };

  return (
    <div className="ct-root">
      <style>{CSS}</style>

      <header className="ct-head">
        <div className="ct-head-top">
          <div>
            <div className="ct-eyebrow">Clerkship objectives</div>
            <h1 className="ct-title">{clerkship.name}</h1>
          </div>
          {CLERKSHIPS.length > 1 && (
            <div className="ct-clerkships" role="tablist">
              {CLERKSHIPS.map((c) => (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={c.id === clerkshipId}
                  className={"ct-chip" + (c.id === clerkshipId ? " is-on" : "")}
                  onClick={() => setClerkshipId(c.id)}
                >
                  {c.short}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* coverage map — one cell per objective, blocked by section */}
        <div className="ct-map" aria-hidden="true">
          {sections.map((s) => {
            const items = s.groups.flatMap((g) => g.items);
            return (
              <button
                key={s.num}
                className="ct-map-block"
                onClick={() => scrollToSection(s.num)}
                title={`${s.num} · ${s.title}`}
                tabIndex={-1}
              >
                <span className="ct-map-num">{s.num}</span>
                <span className="ct-map-grid">
                  {items.map((it) => (
                    <span
                      key={it.id}
                      className={"ct-cell s" + (statuses[it.id] ?? STATUS.TODO)}
                    />
                  ))}
                </span>
              </button>
            );
          })}
        </div>

        <div className="ct-stats">
          <span className="ct-stat">
            <b>{overall.done}</b> complete
          </span>
          <span className="ct-stat">
            <b>{overall.active}</b> in progress
          </span>
          <span className="ct-stat">
            <b>{overall.todo}</b> to go
          </span>
          <span className="ct-stat ct-pct">{pct}%</span>
          <span className={"ct-save " + saveState}>
            {saveState === "saving" ? "Saving" : saveState === "error" ? "Not saved" : loaded ? "Saved" : ""}
          </span>
        </div>
      </header>

      <div className="ct-tools">
        <input
          className="ct-search"
          type="search"
          placeholder="Search objectives"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search objectives"
        />
        <div className="ct-filters" role="group" aria-label="Filter by status">
          {[
            ["all", "All"],
            ["todo", "To do"],
            ["active", "In progress"],
            ["done", "Done"],
          ].map(([v, label]) => (
            <button
              key={v}
              className={"ct-chip" + (filter === v ? " is-on" : "")}
              onClick={() => setFilter(v)}
              aria-pressed={filter === v}
            >
              {label}
            </button>
          ))}
          <button
            className={"ct-chip ct-star-chip" + (starOnly ? " is-on" : "")}
            onClick={() => setStarOnly((v) => !v)}
            aria-pressed={starOnly}
            title="High-yield only"
          >
            ★ High-yield
          </button>
        </div>
        <div className="ct-tools-right">
          <button className="ct-ghost" onClick={() => setAllCollapsed(true)}>
            Collapse all
          </button>
          <button className="ct-ghost" onClick={() => setAllCollapsed(false)}>
            Expand all
          </button>
          {confirmReset ? (
            <>
              <button className="ct-ghost ct-danger" onClick={resetProgress}>
                Confirm reset
              </button>
              <button className="ct-ghost" onClick={() => setConfirmReset(false)}>
                Cancel
              </button>
            </>
          ) : (
            <button className="ct-ghost" onClick={() => setConfirmReset(true)}>
              Reset progress
            </button>
          )}
        </div>
      </div>

      {filtering && (
        <p className="ct-filternote">
          Showing {visibleCount} of {all.length} objectives.
        </p>
      )}

      <main className="ct-sections">
        {sections.map((s) => {
          const items = s.groups.flatMap((g) => g.items);
          const t = tally(items, statuses);
          const shown = items.filter(matches).length;
          if (filtering && shown === 0) return null;
          const isCollapsed = !!collapsed[s.num];
          return (
            <section
              key={s.num}
              className="ct-section"
              ref={(el) => (sectionRefs.current[s.num] = el)}
            >
              <button
                className="ct-section-head"
                onClick={() => toggleSection(s.num)}
                aria-expanded={!isCollapsed}
              >
                <span className="ct-section-num">{s.num}</span>
                <span className="ct-section-meta">
                  <span className="ct-section-title">{s.title}</span>
                  <span className="ct-section-blurb">{s.blurb}</span>
                </span>
                <span className="ct-section-count">
                  {t.done}/{t.total}
                </span>
                <span className="ct-bar" aria-hidden="true">
                  <span className="ct-bar-done" style={{ width: `${(t.done / t.total) * 100}%` }} />
                  <span
                    className="ct-bar-active"
                    style={{ width: `${(t.active / t.total) * 100}%` }}
                  />
                </span>
                <span className={"ct-caret" + (isCollapsed ? " is-closed" : "")}>▾</span>
              </button>

              {!isCollapsed && (
                <div className="ct-groups">
                  {s.groups.map((g) => {
                    const gItems = g.items.filter(matches);
                    if (gItems.length === 0) return null;
                    return (
                      <div key={g.title} className="ct-group">
                        <h3 className="ct-group-title">{g.title}</h3>
                        <ul className="ct-list">
                          {gItems.map((it) => {
                            const st = statuses[it.id] ?? STATUS.TODO;
                            return (
                              <li key={it.id}>
                                <button
                                  className={"ct-item s" + st}
                                  onClick={() => cycle(it.id)}
                                  aria-pressed={st === STATUS.DONE}
                                >
                                  <span className="ct-glyph" aria-hidden="true">
                                    {st === STATUS.DONE ? "●" : st === STATUS.ACTIVE ? "◐" : "○"}
                                  </span>
                                  <span className="ct-item-text">{it.text}</span>
                                  {it.star && <span className="ct-item-star">★</span>}
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
          );
        })}

        {filtering && visibleCount === 0 && (
          <p className="ct-empty">
            No objectives match the current search and filters.
          </p>
        )}
      </main>

      <footer className="ct-foot">
        <span>Tap an objective to move it: to do → in progress → done.</span>
        <span>Progress saves automatically.</span>
      </footer>
    </div>
  );
}

/* ------------------------------ css ------------------------------ */

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Sans+Condensed:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');

.ct-root {
  --paper:#F6F7F5;
  --card:#FFFFFF;
  --ink:#16211D;
  --ink-2:#4A5A54;
  --ink-3:#7E8C86;
  --rule:#DFE4E0;
  --todo:#D2D9D4;
  --active:#B8862B;
  --done:#1C5140;
  --active-soft:#FBF3E2;
  --done-soft:#EDF3F0;
  --danger:#9B3B27;

  --sans:'IBM Plex Sans', ui-sans-serif, system-ui, sans-serif;
  --cond:'IBM Plex Sans Condensed','IBM Plex Sans', ui-sans-serif, system-ui, sans-serif;
  --mono:'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, monospace;

  background: var(--paper);
  color: var(--ink);
  font-family: var(--sans);
  font-size: 15px;
  line-height: 1.5;
  min-height: 100vh;
  padding: 28px 20px 64px;
  -webkit-font-smoothing: antialiased;
}
.ct-root *, .ct-root *::before, .ct-root *::after { box-sizing: border-box; }
.ct-root button { font: inherit; color: inherit; background: none; border: none; cursor: pointer; }
.ct-root :focus-visible { outline: 2px solid var(--done); outline-offset: 2px; border-radius: 2px; }

/* ---- header ---- */
.ct-head { max-width: 980px; margin: 0 auto 22px; }
.ct-head-top { display:flex; align-items:flex-end; justify-content:space-between; gap:16px; flex-wrap:wrap; }
.ct-eyebrow {
  font-family: var(--cond); font-weight:600; font-size:11px;
  letter-spacing:.16em; text-transform:uppercase; color:var(--ink-3);
}
.ct-title {
  font-family: var(--cond); font-weight:700; font-size:34px; line-height:1.05;
  letter-spacing:-.01em; margin:2px 0 0;
}
.ct-clerkships { display:flex; gap:6px; }

/* ---- coverage map (the signature) ---- */
.ct-map {
  display:flex; gap:10px; flex-wrap:wrap; align-items:flex-start;
  margin:18px 0 12px; padding:14px 14px 12px;
  background:var(--card); border:1px solid var(--rule); border-radius:3px;
}
.ct-map-block {
  flex:1 1 96px; min-width:82px; padding:0; text-align:left;
  display:flex; flex-direction:column; gap:5px;
}
.ct-map-num {
  font-family: var(--mono); font-size:10px; color:var(--ink-3); letter-spacing:.06em;
}
.ct-map-grid {
  display:grid; grid-template-columns:repeat(auto-fill, minmax(7px, 1fr));
  gap:2px; align-content:start;
}
.ct-cell { display:block; aspect-ratio:1; border-radius:1px; background:var(--todo); transition:background .18s ease; }
.ct-cell.s1 { background:var(--active); }
.ct-cell.s2 { background:var(--done); }
.ct-map-block:hover .ct-map-num { color:var(--ink); }

/* ---- stats ---- */
.ct-stats {
  display:flex; align-items:baseline; gap:18px; flex-wrap:wrap;
  font-family:var(--mono); font-size:12px; color:var(--ink-2);
}
.ct-stat b { font-weight:500; color:var(--ink); font-size:14px; }
.ct-pct { margin-left:auto; font-size:14px; color:var(--done); font-weight:500; }
.ct-save { font-size:11px; color:var(--ink-3); min-width:52px; text-align:right; }
.ct-save.error { color:var(--danger); }

/* ---- toolbar ---- */
.ct-tools {
  max-width:980px; margin:0 auto 8px;
  display:flex; gap:10px; flex-wrap:wrap; align-items:center;
  padding-bottom:12px; border-bottom:1px solid var(--rule);
}
.ct-search {
  flex:1 1 200px; min-width:160px;
  padding:8px 11px; font:inherit; font-size:14px;
  background:var(--card); border:1px solid var(--rule); border-radius:2px; color:var(--ink);
}
.ct-search::placeholder { color:var(--ink-3); }
.ct-filters { display:flex; gap:5px; flex-wrap:wrap; }
.ct-chip {
  font-family:var(--cond); font-size:12px; font-weight:600;
  letter-spacing:.05em; text-transform:uppercase;
  padding:7px 11px; border:1px solid var(--rule); border-radius:2px;
  background:var(--card); color:var(--ink-2); transition:.15s ease;
}
.ct-chip:hover { border-color:var(--ink-3); color:var(--ink); }
.ct-chip.is-on { background:var(--ink); border-color:var(--ink); color:var(--paper); }
.ct-star-chip.is-on { background:var(--active); border-color:var(--active); color:#fff; }
.ct-tools-right { display:flex; gap:4px; flex-wrap:wrap; margin-left:auto; }
.ct-ghost {
  font-family:var(--cond); font-size:12px; font-weight:600;
  letter-spacing:.05em; text-transform:uppercase;
  padding:7px 9px; color:var(--ink-3); border-radius:2px;
}
.ct-ghost:hover { color:var(--ink); background:var(--card); }
.ct-danger { color:var(--danger); }
.ct-filternote {
  max-width:980px; margin:10px auto 0;
  font-family:var(--mono); font-size:11px; color:var(--ink-3);
}

/* ---- sections ---- */
.ct-sections { max-width:980px; margin:0 auto; }
.ct-section { border-bottom:1px solid var(--rule); }
.ct-section-head {
  width:100%; display:grid; align-items:center; gap:0 14px;
  grid-template-columns:auto 1fr auto 90px auto;
  padding:18px 2px; text-align:left;
}
.ct-section-num {
  font-family:var(--mono); font-size:12px; color:var(--ink-3);
}
.ct-section-meta { display:flex; flex-direction:column; gap:1px; min-width:0; }
.ct-section-title {
  font-family:var(--cond); font-weight:700; font-size:19px; letter-spacing:-.005em;
}
.ct-section-blurb { font-size:12.5px; color:var(--ink-3); }
.ct-section-count { font-family:var(--mono); font-size:12px; color:var(--ink-2); }
.ct-bar {
  display:flex; height:4px; background:var(--todo); border-radius:2px; overflow:hidden;
}
.ct-bar-done { background:var(--done); transition:width .25s ease; }
.ct-bar-active { background:var(--active); transition:width .25s ease; }
.ct-caret { font-size:11px; color:var(--ink-3); transition:transform .18s ease; }
.ct-caret.is-closed { transform:rotate(-90deg); }

.ct-groups { padding:0 0 20px; }
.ct-group { margin-bottom:18px; }
.ct-group-title {
  font-family:var(--cond); font-weight:600; font-size:11.5px;
  letter-spacing:.13em; text-transform:uppercase; color:var(--ink-3);
  margin:0 0 6px; padding-left:34px;
}
.ct-list { list-style:none; margin:0; padding:0; }

/* ---- objective rows ---- */
.ct-item {
  width:100%; display:flex; align-items:flex-start; gap:12px;
  padding:9px 10px 9px 8px; text-align:left; border-radius:2px;
  border-left:2px solid transparent; transition:background .15s ease, border-color .15s ease;
  min-height:44px;
}
.ct-item:hover { background:var(--card); }
.ct-glyph {
  font-size:14px; line-height:1.45; width:16px; flex:none; text-align:center; color:var(--ink-3);
}
.ct-item-text { flex:1; font-size:14.5px; }
.ct-item-star { flex:none; font-size:11px; color:var(--active); line-height:1.7; }

.ct-item.s1 { background:var(--active-soft); border-left-color:var(--active); }
.ct-item.s1 .ct-glyph { color:var(--active); }
.ct-item.s2 { border-left-color:var(--done); background:var(--done-soft); }
.ct-item.s2 .ct-glyph { color:var(--done); }
.ct-item.s2 .ct-item-text { color:var(--ink-3); text-decoration:line-through; text-decoration-thickness:1px; }

.ct-empty, .ct-foot {
  max-width:980px; margin:26px auto 0; color:var(--ink-3);
  font-size:13px;
}
.ct-foot {
  display:flex; gap:18px; flex-wrap:wrap; padding-top:16px;
  border-top:1px solid var(--rule); font-family:var(--mono); font-size:11px;
}

@media (max-width: 640px) {
  .ct-root { padding:18px 13px 48px; }
  .ct-title { font-size:27px; }
  .ct-section-head {
    grid-template-columns:auto 1fr auto;
    grid-template-areas:"num meta count" "bar bar bar";
    gap:6px 12px; padding:15px 2px;
  }
  .ct-section-num { grid-area:num; }
  .ct-section-meta { grid-area:meta; }
  .ct-section-count { grid-area:count; }
  .ct-bar { grid-area:bar; }
  .ct-caret { display:none; }
  .ct-group-title { padding-left:0; }
  .ct-tools-right { margin-left:0; }
  .ct-map-block { flex:1 1 70px; min-width:64px; }
}

@media (prefers-reduced-motion: reduce) {
  .ct-root *, .ct-root *::before, .ct-root *::after {
    transition-duration: .01ms !important; animation-duration: .01ms !important;
  }
}
`;
