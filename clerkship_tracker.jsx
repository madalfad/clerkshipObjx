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
      blurb: "What your clinical evaluations actually measure.",
      groups: [
        {
          title: "History and physical examination",
          items: [
            "★ Obtain a complete H&P on a newly admitted patient in ≤40 minutes, including a functional/ADL assessment, social determinants, and an accurate medication reconciliation from at least two sources",
            "Elicit and characterize a chief complaint using a structured framework (onset, location, duration, character, aggravating/alleviating, radiation, timing, severity) without leading the patient",
            "★ Perform and document a focused cardiovascular exam: JVP estimation at 45°, PMI localization, and the timing, radiation and maneuver-response of murmurs, plus S3 and S4",
            "Perform a pulmonary exam distinguishing fine vs. coarse crackles, wheeze, rhonchi and pleural rub, and use percussion, fremitus and breath sounds to separate consolidation, effusion and pneumothorax",
            "Perform an abdominal exam including liver span, splenic percussion, shifting dullness or fluid wave, and Murphy's sign",
            "Assess volume status from JVP, orthostatics, mucous membranes, skin turgor, edema and daily weights — and state explicitly whether the patient is hypo-, eu- or hypervolemic",
            "Perform a screening neurologic exam and a targeted diabetic foot exam (monofilament, vibration, pulses, skin)",
            "Recognize which physical findings carry useful likelihood ratios (JVP elevation for heart failure, unilateral leg swelling for DVT) and which are traditional but low-yield",
          ],
        },
        {
          title: "Clinical reasoning",
          items: [
            "★ Construct a problem list that is prioritized, complete, and stated at the right level of diagnostic certainty — a problem stays 'hypoxemia' until you can defend 'pneumonia'",
            "★ Generate a differential using at least two organizing schemas (anatomic, pathophysiologic, organ-system) rather than an unstructured list",
            "For each differential, name the most likely, the can't-miss, and the most treatable diagnosis separately",
            "Apply pretest probability and explain how a result shifts it; use sensitivity, specificity, PPV, NPV and likelihood ratios correctly in a clinical sentence",
            "Identify anchoring, availability, premature closure and confirmation bias in your own reasoning, and name a debiasing strategy you used on a specific patient",
            "Explain why a test you ordered will change management — and decline to order tests that won't",
          ],
        },
        {
          title: "Documentation and communication",
          items: [
            "★ Write an admission H&P with an assessment and plan organized by problem, each problem opening with a one-line synthesis rather than a data dump",
            "★ Write a daily progress note whose assessment reflects change since yesterday rather than a copy-forward",
            "Present a new admission in 5–7 minutes: one-liner, HPI, pertinent positives and negatives, exam, data, then assessment and plan by problem",
            "Present a known patient on bullet rounds in ≤90 seconds: overnight events, current status, today's plan",
            "★ Write a discharge summary covering reason for admission, hospital course by problem, discharge medications with changes flagged, pending results, and follow-up",
            "Give and receive a structured handoff (I-PASS or equivalent) including illness severity and anticipated contingencies",
            "Explain a diagnosis and plan at a 6th-grade reading level and confirm understanding with teach-back",
          ],
        },
        {
          title: "Professionalism, ethics and systems",
          items: [
            "Assess decision-making capacity (understanding, appreciation, reasoning, expressing a choice) and distinguish capacity from legal competence",
            "Conduct a goals-of-care conversation; distinguish DNR/DNI from comfort-focused care; explain withdrawing vs. withholding treatment",
            "Identify the surrogate decision-maker hierarchy and apply substituted judgment vs. best-interest standards",
            "Describe hospice eligibility criteria and core palliative symptom regimens for pain, dyspnea, nausea and secretions",
            "Use an interpreter correctly, and recognize when a family member should not serve as one",
            "Describe how to report a patient safety event, and distinguish an error, a near miss and an adverse event",
            "Identify at least three cost-conscious care decisions you made during the rotation",
          ],
        },
      ],
    },
    {
      num: "02",
      title: "Cardiovascular",
      blurb: "The largest single block on the shelf.",
      groups: [
        {
          title: "Chest pain",
          items: [
            "★ Distinguish ACS, pulmonary embolism, aortic dissection, pericarditis, myocarditis, esophageal spasm and GERD, musculoskeletal pain and pneumothorax by history, exam and initial data",
            "Read an ECG for STEMI by territory (anterior LAD, inferior RCA/LCx, lateral, posterior via V7–V9, right-sided V4R) and recognize STEMI equivalents: new LBBB with Sgarbossa criteria, de Winter T-waves, Wellens' pattern",
            "Describe troponin release kinetics and separate type 1 MI, type 2 MI from demand ischemia, and non-ischemic elevation in myocarditis, PE, sepsis, CKD and tachyarrhythmia",
            "Apply HEART, TIMI and GRACE scores, and Wells and PERC for pulmonary embolism",
            "Initiate ACS management: aspirin, P2Y12 inhibitor, anticoagulation, beta-blocker and its contraindications, high-intensity statin, and nitrates with the PDE5-inhibitor and RV-infarct contraindications",
            "State door-to-balloon and door-to-needle targets, and the indications for fibrinolysis vs. transfer for PCI",
            "Recognize post-MI mechanical complications by timing: papillary muscle rupture, VSD, free wall rupture, Dressler syndrome, LV aneurysm and thrombus",
          ],
        },
        {
          title: "Heart failure",
          items: [
            "★ Distinguish HFrEF, HFmrEF and HFpEF and explain where management diverges",
            "Classify by NYHA class and ACC/AHA stage, and explain what each classification is used for",
            "Generate a differential for acute decompensation: nonadherence, ischemia, arrhythmia, infection, anemia, thyroid disease, NSAIDs, disease progression",
            "Interpret BNP and NT-proBNP, including what falsely raises it (AF, renal failure, age) and lowers it (obesity)",
            "★ List guideline-directed therapy for HFrEF and the mortality benefit of each pillar — ARNI/ACEi/ARB, evidence-based beta-blocker, mineralocorticoid receptor antagonist, SGLT2 inhibitor — plus hydralazine/nitrate for self-identified Black patients and diuretics for symptoms only",
            "State the indications for ICD and CRT",
            "Manage acute decompensated heart failure: assess the wet/dry and warm/cold profile, dose IV loop diuretics, recognize diuretic resistance, and identify cardiogenic shock requiring inotropes",
          ],
        },
        {
          title: "Arrhythmias",
          items: [
            "Read an ECG systematically: rate, rhythm, axis, intervals, hypertrophy, ischemia and infarct, chamber abnormality",
            "Distinguish atrial fibrillation, atrial flutter, AVNRT, atrial tachycardia and multifocal atrial tachycardia",
            "★ Manage atrial fibrillation: rate vs. rhythm control, and apply CHA₂DS₂-VASc and HAS-BLED to an anticoagulation decision, including where warfarin is required over a DOAC (mechanical valve, moderate-to-severe mitral stenosis)",
            "Explain cardioversion timing rules and the role of transesophageal echo",
            "Distinguish first-degree, Mobitz I, Mobitz II and third-degree AV block, and state which require pacing",
            "Distinguish VT from SVT with aberrancy, and manage stable vs. unstable wide-complex tachycardia",
            "Identify long QT (congenital and drug-induced), torsades, Brugada and WPW — including which AV nodal blockers are contraindicated in WPW with atrial fibrillation",
          ],
        },
        {
          title: "Hypertension",
          items: [
            "Apply current staging thresholds, confirm with appropriate out-of-office measurement, and recognize white-coat and masked hypertension",
            "★ Work up secondary causes when indicated: primary aldosteronism via aldosterone/renin ratio, renovascular disease, pheochromocytoma, Cushing syndrome, OSA, thyroid disease, coarctation, and drug-induced causes",
            "Select first-line agents by comorbidity — ACEi/ARB for diabetes or CKD with albuminuria, GDMT for heart failure, beta-blocker post-MI, thiazide or CCB for Black patients without those indications",
            "★ Distinguish hypertensive urgency from emergency by end-organ damage, and state BP-lowering rate limits and preferred agents for dissection, ICH, ischemic stroke, eclampsia and pulmonary edema",
          ],
        },
        {
          title: "Valvular disease, lipids and vascular",
          items: [
            "Identify aortic stenosis, aortic regurgitation, mitral regurgitation and mitral stenosis by murmur characteristics and dynamic maneuvers",
            "State the symptomatic triad of aortic stenosis and its survival implications, and list intervention indications for AS and MR",
            "Distinguish hypertrophic cardiomyopathy from aortic stenosis by maneuver response",
            "Apply the modified Duke criteria for infective endocarditis, and state prophylaxis indications",
            "★ Assign statin intensity by the four benefit groups, interpret ASCVD risk estimation, state when to add ezetimibe or a PCSK9 inhibitor, and manage severe hypertriglyceridemia",
            "Diagnose peripheral arterial disease with ABI including the falsely elevated non-compressible vessel, and distinguish claudication from spinal stenosis and venous insufficiency",
            "State aortic aneurysm screening indications, and recognize dissection presentation and management",
          ],
        },
      ],
    },
    {
      num: "03",
      title: "Pulmonary, renal and critical care",
      blurb: "Acid–base and electrolytes repay drilling more than any other topic.",
      groups: [
        {
          title: "Dyspnea and cough",
          items: [
            "Generate a differential for acute and chronic dyspnea spanning cardiac, pulmonary, hematologic, metabolic, neuromuscular and psychogenic causes",
            "Work up chronic cough beyond 8 weeks: upper airway cough syndrome, asthma and cough-variant asthma, GERD, ACE inhibitor, and when to image",
            "State the limitations of pulse oximetry, calculate and interpret the A–a gradient, and classify hypoxemia by mechanism",
          ],
        },
        {
          title: "Obstructive lung disease",
          items: [
            "Interpret spirometry for obstruction vs. restriction and bronchodilator response, and use DLCO to separate emphysema, interstitial disease and pulmonary vascular disease",
            "Stage COPD and select therapy by symptom burden and exacerbation history, including when inhaled corticosteroids raise pneumonia risk",
            "★ Manage a COPD exacerbation: bronchodilators, systemic corticosteroids, antibiotic indications, and the indications and contraindications for non-invasive ventilation",
            "List the interventions that reduce mortality in COPD — smoking cessation, long-term oxygen for qualifying hypoxemia, lung volume reduction in selected patients",
            "Classify asthma severity and control, apply stepwise therapy, and recognize when to suspect ABPA, eosinophilic granulomatosis with polyangiitis or vocal cord dysfunction",
            "Manage status asthmaticus and recognize impending respiratory failure — a normalizing pCO₂ and a silent chest",
          ],
        },
        {
          title: "Pulmonary vascular, infectious, interstitial and neoplastic",
          items: [
            "★ Diagnose pulmonary embolism: risk stratify, choose between D-dimer, CTPA and V/Q, identify massive and submassive PE requiring thrombolysis, and select anticoagulation and duration by provoked, unprovoked or malignancy-associated status",
            "Distinguish community-acquired, hospital-acquired and ventilator-associated pneumonia from aspiration pneumonia and pneumonitis; apply CURB-65 or PSI to the site-of-care decision; select empiric therapy including MRSA and Pseudomonas risk",
            "Identify pathogen-specific clues — Legionella with hyponatremia and GI symptoms, Klebsiella in alcohol use disorder, PJP with elevated LDH and exertional desaturation",
            "★ Manage latent and active tuberculosis: interpret TST cut-points by risk group and IGRA, and describe RIPE therapy with the major toxicity of each drug",
            "Analyze pleural fluid with Light's criteria and distinguish uncomplicated parapneumonic effusion, complicated effusion and empyema, plus chylothorax and hemothorax",
            "Approach the solitary pulmonary nodule by size, characteristics and risk, and state lung cancer screening eligibility",
            "Distinguish small cell from non-small cell lung cancer and list the paraneoplastic syndromes: SIADH, ACTH, Lambert-Eaton, and squamous PTHrP hypercalcemia",
            "Recognize interstitial lung disease patterns — IPF/UIP, hypersensitivity pneumonitis, sarcoidosis, connective-tissue-disease-associated, pneumoconioses — and their exposure histories",
            "Recognize obstructive sleep apnea and obesity hypoventilation, and interpret sleep study indices",
          ],
        },
        {
          title: "Acid–base and electrolytes",
          items: [
            "★ Run a systematic acid–base analysis: pH, primary disorder, compensation via Winter's formula and the metabolic rules, anion gap, delta-delta and osmolar gap — and identify triple disorders",
            "Generate a differential for anion gap acidosis (lactate, ketones, uremia, toxic alcohols, salicylates) and non-gap acidosis, distinguishing RTA types by urine anion gap, urine pH and serum potassium",
            "★ Work up hyponatremia in sequence — serum osmolality, then volume status, then urine osmolality, then urine sodium — separating SIADH, hypovolemic and hypervolemic causes, psychogenic polydipsia, beer potomania and cerebral salt wasting",
            "State safe correction rates for hyponatremia and hypernatremia, and the consequences of over-rapid correction of each",
            "Manage hyperkalemia in order — membrane stabilization, intracellular shift, total-body removal — recognize the ECG progression, and identify pseudohyperkalemia",
            "Work up hypokalemia including transcellular shift and GI vs. renal losses, distinguish Bartter, Gitelman and Liddle, and always check magnesium",
            "Approach hypercalcemia as PTH-mediated or not — malignancy, granulomatous disease, vitamin D, immobilization, milk-alkali — and manage severe hypercalcemia",
            "Approach hypocalcemia, hypomagnesemia and phosphate disorders, including refeeding syndrome and tumor lysis syndrome",
          ],
        },
        {
          title: "Kidney disease",
          items: [
            "★ Classify AKI as prerenal, intrinsic or postrenal using FENa and FEUrea, urinalysis, and urine microscopy — muddy brown casts, RBC casts, WBC casts, eosinophils",
            "Recognize contrast-associated nephropathy, hepatorenal syndrome, cardiorenal syndrome, rhabdomyolysis and abdominal compartment syndrome",
            "State the emergent indications for dialysis, and recognize uremic pericarditis and encephalopathy",
            "Stage CKD by eGFR and albuminuria and manage anemia, mineral and bone disorder, metabolic acidosis, hyperkalemia and volume overload",
            "★ State the interventions that slow CKD progression: blood pressure control, RAAS blockade, SGLT2 inhibition, glycemic control, and avoiding nephrotoxins",
            "Distinguish nephrotic from nephritic syndrome and list the major glomerular diseases in each with their classic associations",
            "Approach outpatient hematuria and proteinuria, including when to refer for biopsy or urologic evaluation",
            "Manage nephrolithiasis by stone type, and state the indications for urgent urologic intervention",
          ],
        },
        {
          title: "Shock and critical care",
          items: [
            "★ Distinguish hypovolemic, cardiogenic, distributive and obstructive shock using preload, afterload, cardiac output and mixed venous saturation",
            "Apply sepsis definitions and execute the initial bundle — cultures before antibiotics, broad-spectrum antibiotics in the first hour, fluid resuscitation, lactate — and select vasopressors with norepinephrine first",
            "Define ARDS by Berlin criteria and state the ventilator strategy that reduces mortality: low tidal volume, plateau pressure limit, prone positioning in severe disease",
            "Interpret basic ventilator settings and troubleshoot high peak vs. high plateau pressures",
            "Recognize and manage ICU delirium, with non-pharmacologic prevention as first-line",
          ],
        },
      ],
    },
    {
      num: "04",
      title: "GI, endocrine, heme/onc, ID, rheum, neuro",
      blurb: "The widest section. Pace it across two weeks.",
      groups: [
        {
          title: "Gastroenterology and hepatology",
          items: [
            "Approach abdominal pain by location and quality, and recognize the acute abdomen requiring surgical consultation",
            "★ Manage upper GI bleeding: risk stratify, resuscitate, PPI, time the endoscopy, and add the variceal-specific measures — octreotide, ceftriaxone prophylaxis, banding",
            "Approach lower GI bleeding and differentiate diverticular bleeding, angiodysplasia, ischemic colitis, hemorrhoids and malignancy",
            "Distinguish acute from chronic diarrhea, classify chronic diarrhea as osmotic, secretory, inflammatory or malabsorptive, and manage C. difficile by severity and recurrence",
            "Diagnose celiac disease, apply the Rome criteria for IBS, and distinguish Crohn disease from ulcerative colitis by pattern, histology and extraintestinal manifestations",
            "Manage GERD and its alarm features, and approach dysphagia — oropharyngeal vs. esophageal, solids-only vs. solids-and-liquids — including achalasia, eosinophilic esophagitis and esophageal cancer",
            "Diagnose and manage peptic ulcer disease including H. pylori testing and treatment, and NSAID-associated ulcers",
            "★ Interpret liver tests as hepatocellular or cholestatic and generate a differential for each; work up isolated hyperbilirubinemia (Gilbert, hemolysis, Dubin-Johnson)",
            "Order and interpret hepatitis B serologies in all their combinations, and state hepatitis C screening and cure expectations",
            "★ Manage cirrhosis complications: ascites with SAAG, diuretics and paracentesis; spontaneous bacterial peritonitis with its PMN threshold and albumin; hepatic encephalopathy; varices; hepatorenal syndrome; and HCC surveillance — applying MELD and Child-Pugh",
            "Diagnose alcohol-associated hepatitis, MASLD/MASH, autoimmune hepatitis, PBC, PSC, hemochromatosis, Wilson disease and alpha-1 antitrypsin deficiency by their discriminating tests",
            "Manage acute pancreatitis: etiology, severity scoring, fluid strategy, feeding timing and complications",
          ],
        },
        {
          title: "Endocrine",
          items: [
            "★ Diagnose diabetes and prediabetes, distinguish type 1, type 2, LADA and MODY, and set individualized A1c targets",
            "Sequence type 2 diabetes pharmacotherapy with attention to cardiovascular and renal outcome benefits, hypoglycemia risk and cost",
            "Explain basal-bolus insulin dosing and correction factors, and distinguish the Somogyi effect from the dawn phenomenon",
            "★ Manage DKA and HHS: fluids, insulin, the potassium repletion rules, closing the gap, and the bridge to subcutaneous insulin — including euglycemic DKA on SGLT2 inhibitors",
            "Screen for and manage diabetic retinopathy, nephropathy and neuropathy, and perform the foot exam",
            "Interpret thyroid function tests in all patterns and manage hypothyroidism, hyperthyroidism, subclinical disease, thyroid storm and myxedema coma; approach a thyroid nodule",
            "Diagnose adrenal insufficiency as primary or secondary using cosyntropin stimulation, and manage adrenal crisis and perioperative steroid coverage",
            "Recognize Cushing syndrome and its diagnostic sequence, plus pheochromocytoma and primary aldosteronism",
            "Work up hyper- and hypocalcemia via PTH, manage primary hyperparathyroidism, and state surgical indications",
            "Screen for and treat osteoporosis, interpret DEXA T-scores and FRAX, and state when to start bisphosphonates and their major adverse effects",
            "Approach pituitary disorders: prolactinoma, acromegaly, and central vs. nephrogenic diabetes insipidus with the water deprivation test",
          ],
        },
        {
          title: "Hematology and oncology",
          items: [
            "★ Classify anemia by MCV and reticulocyte index, and interpret iron studies to separate iron deficiency, anemia of chronic disease and thalassemia trait",
            "Approach macrocytic anemia: B12 vs. folate, methylmalonic acid, drugs, alcohol, hypothyroidism, myelodysplastic syndrome",
            "Work up hemolysis with LDH, haptoglobin, bilirubin and smear findings, distinguishing warm and cold autoimmune hemolysis, G6PD deficiency, hereditary spherocytosis and microangiopathic causes",
            "★ Distinguish the thrombotic microangiopathies — TTP, HUS, DIC — and treat TTP as an emergency requiring plasma exchange",
            "Approach thrombocytopenia: ITP, drug-induced, heparin-induced thrombocytopenia with the 4T score and argatroban or bivalirudin, hypersplenism, marrow failure",
            "Interpret coagulation studies, approach a prolonged PT or PTT with a mixing study, and recognize von Willebrand disease, hemophilia and antiphospholipid syndrome",
            "★ Manage anticoagulation: indication, agent, duration, reversal with vitamin K, PCC, idarucizumab or andexanet, and periprocedural bridging logic",
            "Evaluate inherited and acquired thrombophilia, and state when testing actually changes management",
            "Manage sickle cell disease: vaso-occlusive crisis, acute chest syndrome, aplastic crisis, splenic sequestration and hydroxyurea",
            "Recognize the leukemias and lymphomas by presentation, distinguish Hodgkin from non-Hodgkin, and recognize multiple myeloma by CRAB features and MGUS",
            "★ Recognize the oncologic emergencies: febrile neutropenia, spinal cord compression, superior vena cava syndrome, tumor lysis syndrome, hypercalcemia of malignancy and hyperviscosity",
            "State transfusion thresholds and recognize transfusion reactions: febrile nonhemolytic, acute hemolytic, TRALI, TACO, allergic and anaphylactic",
          ],
        },
        {
          title: "Infectious disease",
          items: [
            "Approach fever of unknown origin systematically across infection, malignancy, autoimmune disease, drugs and miscellaneous causes",
            "Manage UTI, pyelonephritis and asymptomatic bacteriuria — including the two situations where asymptomatic bacteriuria is treated",
            "Classify skin and soft tissue infections, distinguish cellulitis from abscess, and recognize necrotizing fasciitis as a surgical emergency",
            "Diagnose and manage osteomyelitis and diabetic foot infection",
            "★ Approach meningitis and encephalitis: when to image before LP, CSF profiles for bacterial, viral, fungal and TB causes, empiric therapy by age and risk, and dexamethasone timing",
            "Manage HIV: screening, acute retroviral syndrome, ART initiation, and opportunistic infection prophylaxis and treatment by CD4 threshold — plus PrEP and PEP indications",
            "Recognize immune reconstitution inflammatory syndrome",
            "Manage endocarditis, including organism-specific implications such as S. bovis/gallolyticus prompting colonoscopy",
            "Approach diarrheal illness and travel-related infection — malaria, dengue, typhoid — and know when to consider them",
            "Apply antibiotic stewardship: spectrum, de-escalation, duration, and allergy delabeling",
            "State the adult immunization schedule including pneumococcal, herpes zoster, influenza, COVID-19, Tdap and HPV recommendations by age and risk",
          ],
        },
        {
          title: "Rheumatology and musculoskeletal",
          items: [
            "★ Approach monoarticular arthritis always considering septic arthritis, and interpret synovial fluid cell count, crystals and Gram stain",
            "Manage gout and pseudogout: acute options and their contraindications, and urate-lowering therapy indications and targets",
            "Distinguish inflammatory from mechanical joint pain by history alone",
            "Recognize rheumatoid arthritis and describe DMARD therapy with pre-treatment TB and hepatitis screening",
            "Recognize SLE and interpret the autoantibody panel — ANA sensitivity vs. anti-dsDNA and anti-Smith specificity — plus lupus nephritis and drug-induced lupus",
            "Recognize the spondyloarthropathies, systemic sclerosis and scleroderma renal crisis, Sjögren syndrome and the inflammatory myopathies",
            "Recognize the vasculitides by vessel size, with emphasis on giant cell arteritis and its treat-before-you-biopsy urgency, polymyalgia rheumatica, ANCA-associated vasculitis and IgA vasculitis",
            "Approach low back pain, identify red flags, and know that imaging is not indicated for uncomplicated acute back pain",
            "Manage osteoarthritis and fibromyalgia",
          ],
        },
        {
          title: "Neurology",
          items: [
            "★ Localize a lesion from the exam — cortex, subcortex, brainstem, cord, root, plexus, nerve, neuromuscular junction, muscle",
            "Manage acute ischemic stroke: thrombolysis and thrombectomy time windows, blood pressure parameters, contraindications, and the TIA workup",
            "Distinguish stroke subtypes and select secondary prevention: antiplatelet vs. anticoagulation, statin, carotid intervention",
            "Approach altered mental status and distinguish delirium, dementia and depression",
            "Classify headache, identify red flags, and distinguish migraine, tension and cluster headache from secondary causes — SAH, temporal arteritis, idiopathic intracranial hypertension, venous sinus thrombosis",
            "Approach syncope across vasovagal, orthostatic, cardiac and neurologic causes, and identify high-risk features",
            "Approach seizure and status epilepticus",
            "Recognize peripheral neuropathy patterns, Guillain-Barré syndrome, myasthenia gravis and Parkinson disease",
          ],
        },
      ],
    },
    {
      num: "05",
      title: "Ambulatory and preventive medicine",
      blurb: "The most commonly skipped high-yield block. Cheap points.",
      groups: [
        {
          title: "Screening",
          items: [
            "★ State the current age, interval and modality for colorectal, breast, cervical, lung and prostate cancer screening, plus AAA, osteoporosis, hepatitis C, HIV and diabetes screening",
            "Adjust screening for elevated-risk groups and explain when to stop screening based on life expectancy",
            "Explain lead-time bias, length-time bias and overdiagnosis, and why they matter for interpreting screening trials",
          ],
        },
        {
          title: "Risk factors and counseling",
          items: [
            "Deliver smoking cessation counseling with the 5 A's and compare nicotine replacement, varenicline and bupropion",
            "Screen for unhealthy alcohol use with AUDIT-C and manage withdrawal with CIWA, benzodiazepines, and thiamine before glucose",
            "Screen for depression with PHQ-2/PHQ-9 and anxiety with GAD-7, initiate first-line treatment, and know when to escalate or refer",
            "Screen for intimate partner violence and elder abuse",
            "Counsel on obesity management across lifestyle, pharmacotherapy and bariatric surgery indications",
            "Provide contraception and preconception counseling relevant to medical comorbidities and teratogenic medications",
          ],
        },
        {
          title: "Common clinic presentations",
          items: [
            "Perform the pre-operative medical evaluation: functional capacity, cardiac risk stratification, and perioperative management of anticoagulants, antiplatelets, insulin and steroids",
            "Approach fatigue, unintentional weight loss, dizziness, edema and insomnia as undifferentiated complaints",
            "Approach the incidental finding: thyroid nodule, adrenal incidentaloma, pulmonary nodule, elevated ferritin, mild transaminitis",
            "Manage chronic pain and prescribe opioids safely, including risk assessment and naloxone co-prescribing",
            "Perform a geriatric assessment covering falls, polypharmacy and deprescribing with Beers criteria, cognition, continence, frailty and function",
          ],
        },
      ],
    },
    {
      num: "06",
      title: "Data and procedures",
      blurb: "Interpret the first list independently. Know indications for the second.",
      groups: [
        {
          title: "Interpret independently",
          items: [
            "★ ECG — full systematic read plus the pattern library from cardiology",
            "★ Chest radiograph — systematic read identifying consolidation, effusion, pneumothorax, edema, cardiomegaly, free air, and line and tube positions",
            "Basic chest and abdominal CT orientation",
            "★ Complete blood count with differential and peripheral smear findings",
            "★ Basic and comprehensive metabolic panel with the acid–base and electrolyte reasoning",
            "Urinalysis with microscopy",
            "Arterial blood gas",
            "Pleural, ascitic, synovial and cerebrospinal fluid analyses",
            "Pulmonary function tests",
            "Basic echocardiogram report: EF, wall motion, valve function, chamber size, diastolic function, pulmonary pressures",
          ],
        },
        {
          title: "Observe or assist — and for each, state the indication, contraindications and three commonest complications",
          items: [
            "Peripheral IV placement, venipuncture and ABG draw",
            "Nasogastric tube placement",
            "Lumbar puncture",
            "Paracentesis",
            "Thoracentesis",
            "Arthrocentesis",
            "Central venous access and arterial line",
          ],
        },
      ],
    },
    {
      num: "07",
      title: "Shelf traps",
      blurb: "Review in the final ten days — these decay if learned early.",
      groups: [
        {
          title: "Test-taking patterns",
          items: [
            "The question asks for the next best step, not the diagnosis — read the last sentence first",
            "'Most appropriate next step' usually means stabilize before diagnose and diagnose before treat — except in septic shock, meningitis and giant cell arteritis, where treatment precedes confirmation",
            "When a diagnostic test and empiric therapy are both offered, ask whether delay causes irreversible harm",
            "Watch for the answer that is correct but not first — CT before LP only with focal deficits, papilledema, altered mentation, immunocompromise, seizure or age over 60",
            "Drug side effects are heavily tested: ACE inhibitor cough, angioedema and hyperkalemia; amiodarone thyroid, lung, liver and eye toxicity; metformin and lactic acidosis; statin myopathy; PPI and C. difficile or hypomagnesemia; fluoroquinolone tendinopathy and QT",
            "Distinguish an acceptable creatinine rise after starting an ACE inhibitor from one that requires investigation",
            "Screening questions usually test the interval or the stop age, not the existence of the test",
            "Biostatistics appears reliably: sensitivity and specificity, PPV and NPV with their prevalence dependence, NNT, relative vs. absolute risk reduction, and study design identification",
            "Ethics questions usually reward exploring the patient's perspective before acting",
            "Vaccine and prophylaxis questions in immunocompromised or asplenic patients recur on every form",
            "Do not default to the most aggressive intervention — overtesting is frequently the wrong answer",
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
            Nothing matches. Clear the search and filters to see the full list.
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
