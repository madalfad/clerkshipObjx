/* ------------------------------------------------------------------ *
 *  PEDIATRICS — clerkship objectives
 *
 *  Shape (see src/data/_template.js to start a new rotation):
 *
 *    { id, name, short, sections: [
 *        { num, title, blurb, groups: [ { title, items: [...] } ] }
 *    ]}
 *
 *  A leading "★" on an item marks it high-yield.
 *  This file is pure data — no imports, no logic.
 *
 *  Content follows the COMSEP national pediatrics curriculum and the
 *  published clerkship objectives of Johns Hopkins, the University of
 *  Washington, George Washington University, and the University of
 *  Nebraska Medical Center, with health-supervision content aligned to
 *  Bright Futures and the CDC immunization schedule.
 * ------------------------------------------------------------------ */

const pediatrics = {
  id: "pediatrics",
  name: "Pediatrics",
  short: "PEDS",
  sections: [
    {
      num: "01",
      title: "Clinical skills",
      blurb: "Pediatric history taking, age-appropriate examination, growth assessment, communication, documentation and professionalism.",
      groups: [
        {
          title: "History and physical examination",
          items: [
            "★ Obtain a pediatric history that includes birth history, feeding history, immunizations, developmental milestones, past medical history, family history, social history, and review of systems, adapting the source and depth of information to the child's age",
            "Conduct a triadic interview, directing questions to the child, the caregiver, and both together as developmentally appropriate, and identify when caregiver and child accounts conflict",
            "★ Perform an age-appropriate physical examination on a newborn, infant, child, and adolescent, modifying technique, sequence, and approach to the child's developmental stage and level of cooperation",
            "Assess vital signs against age-specific reference ranges and recognize tachycardia, tachypnea, hypotension, and fever thresholds that differ by age",
            "Perform a newborn examination including fontanelles, red reflex, palate, cardiac murmurs and femoral pulses, hip stability by Ortolani and Barlow maneuvers, and genital and anogenital examination",
            "Examine the ears, nose, and throat in a young child, including pneumatic otoscopy, and distinguish acute otitis media from otitis media with effusion and from a normal examination",
            "Assess hydration status in a child using mucous membranes, skin turgor, capillary refill, fontanelle, urine output, and weight change, and grade dehydration as mild, moderate, or severe",
            "Recognize the acutely ill child on examination, including lethargy, poor perfusion, increased work of breathing, and altered responsiveness, and state the immediate stabilization steps",
          ],
        },
        {
          title: "Growth and development assessment",
          items: [
            "★ Plot length or height, weight, head circumference, and body mass index on the correct growth chart (WHO standards under age 2, CDC references at age 2 and older) and interpret percentile, z-score, and crossing of percentile lines",
            "Distinguish constitutional growth patterns, including familial short stature and constitutional delay of growth and puberty, from pathologic short stature requiring evaluation",
            "★ State the expected developmental milestones by age across gross motor, fine motor, language, and social domains, from newborn reflexes through school readiness",
            "Administer and interpret a standardized developmental screening instrument and distinguish developmental surveillance from developmental screening",
            "Identify red flags for developmental delay, including loss of previously acquired skills at any age, no babbling by 12 months, no single words by 16 months, and no two-word phrases by 24 months",
            "Assess pubertal development using Tanner staging and state the age ranges for normal puberty, precocious puberty (before age 8 in girls, before age 9 in boys), and delayed puberty",
          ],
        },
        {
          title: "Communication and documentation",
          items: [
            "★ Present a pediatric patient concisely, including age in days, months, or years as appropriate, growth parameters with percentiles, immunization status, and developmental stage relevant to the presentation",
            "Write an admission note, daily progress note, and outpatient visit note for a pediatric patient, including weight-based dosing calculations for every medication ordered",
            "Explain a diagnosis and treatment plan to a child at a developmentally appropriate level and to the caregiver, and confirm comprehension using teach-back",
            "Conduct an adolescent interview using the HEADSS framework (home, education, activities, drugs, sexuality, suicide and mood) and state the limits of adolescent confidentiality",
            "Give and receive a structured handoff for a pediatric patient, including weight, allergies, code status discussion with the family, and anticipated contingencies",
            "Counsel a caregiver on vaccine hesitancy using evidence-based communication, addressing specific concerns without dismissing them",
          ],
        },
        {
          title: "Professionalism, ethics and systems",
          items: [
            "Distinguish parental permission from child assent and state when assent should be sought and when it may be overridden",
            "State the circumstances in which a minor may consent to care without parental permission, including emergency care and, as state law allows, care for sexually transmitted infections, contraception, and substance use",
            "★ Recognize physical abuse, sexual abuse, and neglect, including sentinel injuries in infants, the TEN-4-FACESp bruising pattern, and abusive head trauma, and state the mandatory reporting obligation and process",
            "Identify the surrogate decision-making framework for children and describe how disagreements between caregivers and the care team are addressed",
            "Describe the role of the medical home, care coordination, and community resources for children with medical complexity",
            "Identify disparities in child health outcomes by race, ethnicity, socioeconomic status, and geography, and state how social determinants of health change the clinical plan",
          ],
        },
      ],
    },
    {
      num: "02",
      title: "Newborn and neonatal care",
      blurb: "The newborn examination, nursery care, neonatal jaundice, feeding, and common problems of prematurity.",
      groups: [
        {
          title: "Newborn examination and nursery care",
          items: [
            "★ Perform a complete newborn examination and distinguish normal findings, including caput succedaneum, cephalohematoma, Mongolian spots, erythema toxicum, and milia, from findings requiring evaluation",
            "Assign Apgar scores at 1 and 5 minutes and state what each component measures and what a low score does and does not predict",
            "State the routine newborn interventions and their indications: vitamin K prophylaxis, erythromycin eye prophylaxis, hepatitis B vaccination within 24 hours, and critical congenital heart disease screening by pulse oximetry",
            "Describe newborn screening, including the conditions screened, the timing of specimen collection, and the follow-up required for an abnormal result",
            "Evaluate a newborn with respiratory distress, distinguishing transient tachypnea of the newborn, respiratory distress syndrome, meconium aspiration, and pneumonia by history, examination, and radiographic pattern",
            "Manage neonatal hypoglycemia, including risk factors, monitoring thresholds, and treatment with feeding, intravenous dextrose, and glucagon when indicated",
          ],
        },
        {
          title: "Neonatal jaundice and feeding",
          items: [
            "★ Evaluate neonatal jaundice by age in hours, distinguishing physiologic jaundice from pathologic jaundice (onset within 24 hours, rate of rise, direct bilirubin fraction, or persistence beyond 2 weeks)",
            "Apply the American Academy of Pediatrics hyperbilirubinemia guideline to decide between observation, phototherapy, and exchange transfusion, incorporating gestational age and neurotoxicity risk factors",
            "Distinguish ABO and Rh hemolytic disease of the newborn, state the role of maternal anti-D immunoglobulin, and interpret the direct antiglobulin test",
            "Distinguish breastfeeding jaundice from breast milk jaundice by timing, feeding history, and weight trajectory",
            "★ Counsel on breastfeeding, including latch, feeding frequency, signs of adequate intake, and expected stool and void patterns, and recognize poor weight gain requiring intervention",
            "Compare breast milk, standard formula, and specialized formulas, and state when each is indicated and when cow's milk should not be introduced",
          ],
        },
        {
          title: "Prematurity and neonatal intensive care",
          items: [
            "Classify infants as preterm, late preterm, term, and post-term, and as small, appropriate, or large for gestational age, and state the risks associated with each classification",
            "Describe the complications of prematurity: respiratory distress syndrome and surfactant deficiency, bronchopulmonary dysplasia, necrotizing enterocolitis, intraventricular hemorrhage, retinopathy of prematurity, and patent ductus arteriosus",
            "State the indications for antenatal corticosteroids and surfactant replacement therapy",
            "Evaluate neonatal sepsis, distinguishing early-onset from late-onset disease, and state the empiric antibiotic regimen and the role of maternal risk factors including group B streptococcal status",
            "Recognize necrotizing enterocolitis by presentation and radiographic findings, including pneumatosis intestinalis and portal venous gas, and state the initial management",
            "Describe discharge criteria for a preterm infant, including feeding competence, thermoregulation, apnea monitoring, immunization timing, and follow-up for retinopathy screening and developmental surveillance",
          ],
        },
      ],
    },
    {
      num: "03",
      title: "Growth, development, nutrition and preventive care",
      blurb: "Normal growth and development, feeding and nutrition, immunizations, screening, and anticipatory guidance from birth through adolescence.",
      groups: [
        {
          title: "Growth and failure to thrive",
          items: [
            "★ Evaluate poor growth, distinguishing inadequate intake, malabsorption, increased metabolic demand, and inadequate utilization, and state the criteria for failure to thrive",
            "Generate a differential diagnosis for poor weight gain in infancy, including feeding technique, gastroesophageal reflux, cow's milk protein allergy, celiac disease, cystic fibrosis, and congenital heart disease",
            "Evaluate a child with short stature, distinguishing familial short stature, constitutional delay, growth hormone deficiency, hypothyroidism, Turner syndrome, and chronic disease",
            "Evaluate obesity in a child using body mass index percentile, and state the comorbidity screening and staged management approach",
            "Distinguish macrocephaly from hydrocephalus and microcephaly from craniosynostosis by examination and imaging indications",
          ],
        },
        {
          title: "Development and behavior",
          items: [
            "★ Evaluate global developmental delay and intellectual disability, distinguishing static from progressive causes, and state the first-line genetic and metabolic evaluation",
            "Screen for autism spectrum disorder using a validated instrument at 18 and 24 months and describe the diagnostic features and early intervention referral",
            "Evaluate language delay, distinguishing hearing loss, autism spectrum disorder, intellectual disability, and environmental deprivation, and state the role of audiologic testing",
            "Evaluate a child with temper tantrums, sleep problems, and toilet-training difficulties, distinguishing age-appropriate behavior from behavior requiring intervention",
            "Describe normal sleep patterns by age and counsel on safe sleep practices for infants",
          ],
        },
        {
          title: "Nutrition",
          items: [
            "★ State feeding recommendations by age: exclusive breastfeeding for approximately 6 months, introduction of complementary foods at about 6 months, and avoidance of cow's milk as a primary drink before 12 months",
            "State vitamin D supplementation recommendations for breastfed infants and iron supplementation timing for preterm and term infants",
            "Evaluate iron deficiency in a child, distinguishing dietary insufficiency from blood loss, and state the treatment and follow-up",
            "Counsel on prevention of dental caries, including fluoride supplementation by water fluoridation status, avoidance of juice before 12 months, and limits on juice thereafter",
            "Recognize vitamin deficiencies and excesses relevant to childhood, including vitamin D deficiency with rickets and vitamin A toxicity",
          ],
        },
        {
          title: "Immunizations, screening and anticipatory guidance",
          items: [
            "★ State the CDC recommended immunization schedule by age, including hepatitis B, DTaP, Hib, pneumococcal conjugate, inactivated poliovirus, rotavirus, MMR, varicella, influenza, HPV, Tdap, and meningococcal vaccines, with their timing and catch-up principles",
            "State the contraindications and precautions for live vaccines, including immunocompromise and recent immunoglobulin administration, and distinguish true contraindications from common misconceptions",
            "State the age-appropriate screening recommendations: newborn screening, hearing and vision screening, lead screening at 12 and 24 months, anemia screening, developmental and autism screening, adolescent depression screening, and dyslipidemia screening",
            "★ Provide anticipatory guidance by age covering injury prevention (car seats, safe sleep, drowning, firearms, poisoning), nutrition, sleep, screen time, and school readiness",
            "Counsel on car seat selection and positioning by age and weight, including rear-facing until at least age 2 and booster seat use until the seat belt fits correctly",
            "State the components of a health supervision visit at each age and how the visit changes from infancy through adolescence",
          ],
        },
      ],
    },
    {
      num: "04",
      title: "Acute illness: fever, respiratory, ENT and infectious disease",
      blurb: "Fever evaluation, upper and lower respiratory illness, ear, nose and throat infection, and common pediatric infections.",
      groups: [
        {
          title: "Fever and sepsis",
          items: [
            "★ Evaluate a febrile neonate younger than 28 days with a full sepsis evaluation, including blood, urine, and cerebrospinal fluid cultures, and state the empiric antibiotic regimen",
            "Apply a validated risk-stratification approach to the febrile infant aged 29 to 90 days and distinguish infants who require lumbar puncture and admission from those who may be managed as outpatients",
            "Evaluate fever without a source in an older child, including the indications for urinalysis, blood culture, and chest radiography",
            "Distinguish simple from complex febrile seizures and state the evaluation, counseling, and recurrence risk for each",
            "★ Recognize sepsis and septic shock in a child, including age-specific vital sign abnormalities, and state the initial resuscitation sequence: recognition, vascular access, fluid boluses, antibiotics, and vasoactive support",
            "Evaluate and manage meningitis in a child, including the indications for imaging before lumbar puncture, cerebrospinal fluid profiles for bacterial and viral causes, empiric therapy by age, and the timing of dexamethasone",
          ],
        },
        {
          title: "Upper respiratory and ENT",
          items: [
            "★ Distinguish viral upper respiratory infection, acute otitis media, bacterial sinusitis, streptococcal pharyngitis, and viral pharyngitis by history, examination, and testing indications",
            "State the indications for testing for group A streptococcal pharyngitis, the treatment of choice, and the suppurative and nonsuppurative complications of untreated infection, including acute rheumatic fever and post-streptococcal glomerulonephritis",
            "Evaluate recurrent otitis media and state the indications for tympanostomy tubes and for referral",
            "Distinguish croup, epiglottitis, bacterial tracheitis, and foreign body aspiration by onset, voice and cough character, drooling, and radiographic findings, and state the management of each",
            "Manage croup with dexamethasone and nebulized epinephrine, and state the observation and discharge criteria",
            "Evaluate peritonsillar and retropharyngeal abscess by presentation and imaging, and state the airway management priorities",
          ],
        },
        {
          title: "Lower respiratory disease",
          items: [
            "★ Diagnose bronchiolitis, state its typical viral causes and age distribution, and manage it with supportive care, stating which therapies (bronchodilators, corticosteroids, antibiotics) are not routinely indicated",
            "Distinguish bronchiolitis, viral pneumonia, bacterial pneumonia, asthma, and foreign body aspiration in a wheezing or coughing young child",
            "★ Evaluate and manage asthma in a child, including severity classification, stepwise controller therapy, spacer technique, trigger avoidance, and a written asthma action plan",
            "Manage status asthmaticus, including oxygen, inhaled short-acting beta-agonists, systemic corticosteroids, magnesium sulfate, and indications for intensive care",
            "Evaluate community-acquired pneumonia in a child, distinguishing viral from bacterial causes by age, and select empiric therapy including first-line amoxicillin for typical bacterial pneumonia",
            "Recognize pneumonia complications including parapneumonic effusion, empyema, and lung abscess, and state the drainage indications",
            "Evaluate a child with chronic cough lasting more than 4 weeks, including asthma, protracted bacterial bronchitis, gastroesophageal reflux, foreign body, and cystic fibrosis",
          ],
        },
        {
          title: "Common infections and rash",
          items: [
            "Distinguish the exanthems of childhood by morphology, distribution, and associated features: measles, rubella, roseola, erythema infectiosum, hand-foot-and-mouth disease, and scarlet fever",
            "★ Evaluate a febrile child with rash, distinguishing viral exanthem, Kawasaki disease, scarlet fever, meningococcemia, and drug reaction, and state the findings that require urgent evaluation",
            "Diagnose and manage cellulitis, impetigo, and abscess in a child, including MRSA risk assessment and incision and drainage indications",
            "Evaluate and manage varicella and herpes zoster in children, including complications and the role of post-exposure prophylaxis in susceptible high-risk contacts",
            "Diagnose and manage infectious mononucleosis, including its complications and return-to-contact-sport guidance after splenomegaly",
            "Evaluate acute diarrhea in a child, distinguishing viral, bacterial, and parasitic causes, and state the indications for stool studies and antibiotics",
            "★ Assess and manage dehydration in a child, including oral rehydration therapy, indications for intravenous fluids, and the Holliday-Segar method for maintenance fluid calculation",
          ],
        },
      ],
    },
    {
      num: "05",
      title: "Gastrointestinal, genitourinary and fluid disorders",
      blurb: "Vomiting, abdominal pain, constipation, urinary tract infection, kidney disease, and fluid and electrolyte management in children.",
      groups: [
        {
          title: "Gastrointestinal presentations",
          items: [
            "★ Evaluate vomiting in an infant, distinguishing gastroesophageal reflux from hypertrophic pyloric stenosis, malrotation with volvulus, and increased intracranial pressure by age, character of emesis, and examination",
            "Diagnose hypertrophic pyloric stenosis by presentation and ultrasound findings, and state the fluid and electrolyte correction required before surgery",
            "Recognize bilious vomiting as a surgical emergency until malrotation with volvulus is excluded",
            "Evaluate abdominal pain in a child, distinguishing appendicitis, intussusception, constipation, mesenteric adenitis, and functional abdominal pain, and state the imaging approach for each",
            "Diagnose intussusception by presentation and ultrasound findings and state the role of air-contrast enema reduction and its contraindications",
            "Evaluate constipation and encopresis in a child, distinguishing functional constipation from Hirschsprung disease, hypothyroidism, and anatomic causes",
            "Distinguish gastroesophageal reflux from gastroesophageal reflux disease and state the indications for acid suppression and for further evaluation",
            "Evaluate chronic diarrhea and malabsorption, including celiac disease, cow's milk protein allergy, lactose intolerance, and cystic fibrosis, and state the diagnostic approach for each",
            "Diagnose and manage inflammatory bowel disease in children, distinguishing Crohn disease from ulcerative colitis, and state the growth and nutritional consequences",
          ],
        },
        {
          title: "Genitourinary and kidney disease",
          items: [
            "★ Evaluate urinary tract infection in a child, including proper urine collection method by age, interpretation of urinalysis and culture, empiric therapy, and imaging indications after a first febrile infection",
            "Distinguish vesicoureteral reflux grades and state the current approach to prophylaxis, surveillance, and surgical referral",
            "Distinguish nephrotic syndrome from nephritic syndrome by edema, proteinuria, hematuria, blood pressure, and complement levels, and state the first-line therapy for minimal change disease",
            "Recognize post-streptococcal glomerulonephritis and IgA vasculitis (Henoch-Schonlein purpura) by presentation and laboratory pattern",
            "Recognize hemolytic uremic syndrome by its triad of microangiopathic hemolytic anemia, thrombocytopenia, and acute kidney injury, and state its association with Shiga toxin-producing Escherichia coli",
            "Evaluate hematuria and proteinuria in a child and state the indications for nephrology referral and renal biopsy",
            "Evaluate enuresis and voiding dysfunction, distinguishing primary nocturnal enuresis from secondary causes including diabetes mellitus, urinary tract infection, and constipation",
          ],
        },
        {
          title: "Fluids, electrolytes and metabolic emergencies",
          items: [
            "★ Calculate maintenance intravenous fluids for a child using the Holliday-Segar 4-2-1 method and adjust for dehydration deficit and ongoing losses",
            "Manage diabetic ketoacidosis in a child, including fluid resuscitation before insulin, potassium repletion, cerebral edema monitoring, and transition to subcutaneous insulin",
            "Evaluate hyponatremia and hypernatremia in a child, including the causes specific to childhood and safe correction rates",
            "Recognize and manage hypoglycemia in a child beyond the neonatal period, including the diagnostic evaluation for hyperinsulinism and inborn errors of metabolism",
            "Evaluate a child with metabolic acidosis, including the differential diagnosis for an elevated anion gap in childhood",
            "State the indications for and interpretation of a sweat chloride test and newborn screening follow-up for cystic fibrosis",
          ],
        },
      ],
    },
    {
      num: "06",
      title: "Chronic and subspecialty conditions",
      blurb: "Congenital heart disease, hematology and oncology, endocrinology, neurology, rheumatology, and genetic disorders of childhood.",
      groups: [
        {
          title: "Cardiac disease",
          items: [
            "★ Distinguish acyanotic from cyanotic congenital heart disease and state the physiology, presentation, and initial management of ventricular septal defect, atrial septal defect, patent ductus arteriosus, coarctation of the aorta, tetralogy of Fallot, and transposition of the great arteries",
            "Evaluate a heart murmur in a child, distinguishing innocent murmurs (Still's, venous hum, pulmonary flow murmur) from pathologic murmurs, and state the referral indications",
            "Recognize ductal-dependent systemic and pulmonary circulation and state the role of prostaglandin E1 in maintaining ductal patency",
            "Evaluate chest pain and syncope in a child, distinguishing benign causes from hypertrophic cardiomyopathy, anomalous coronary artery, long QT syndrome, and myocarditis",
            "Diagnose and manage Kawasaki disease, including the clinical criteria, incomplete Kawasaki disease, timely intravenous immunoglobulin therapy, aspirin dosing, and echocardiographic surveillance for coronary artery aneurysm",
            "Recognize acute rheumatic fever by the Jones criteria and state the secondary prophylaxis regimen",
          ],
        },
        {
          title: "Hematology and oncology",
          items: [
            "★ Evaluate anemia in a child by age and mean corpuscular volume, distinguishing iron deficiency, thalassemia trait, lead poisoning, hemolysis, and anemia of chronic disease",
            "Diagnose and manage iron deficiency anemia, including dietary causes, treatment dosing, and expected reticulocyte response",
            "Recognize sickle cell disease complications: vaso-occlusive crisis, acute chest syndrome, splenic sequestration, stroke, and aplastic crisis, and state the roles of penicillin prophylaxis, hydroxyurea, and transcranial Doppler screening",
            "Evaluate thrombocytopenia in a child, distinguishing immune thrombocytopenia from leukemia, aplastic anemia, and hemolytic uremic syndrome",
            "Recognize the presentation of childhood leukemia, including acute lymphoblastic leukemia, and state the findings that require urgent referral",
            "Evaluate lymphadenopathy in a child, distinguishing reactive, infectious, and malignant causes, and state the indications for biopsy",
            "Recognize oncologic emergencies in children, including tumor lysis syndrome, spinal cord compression, and superior mediastinal syndrome",
          ],
        },
        {
          title: "Endocrine and metabolic",
          items: [
            "★ Diagnose type 1 diabetes mellitus in a child, including its presentation in diabetic ketoacidosis, and distinguish it from type 2 diabetes mellitus in adolescents",
            "Manage type 1 diabetes in a child, including basal-bolus insulin regimens, hypoglycemia management, sick-day rules, and screening for associated autoimmune conditions",
            "Evaluate congenital hypothyroidism detected by newborn screening and state the treatment and monitoring",
            "Evaluate thyroid disorders in children, including Hashimoto thyroiditis and Graves disease, by presentation and laboratory pattern",
            "Evaluate short stature and growth hormone deficiency, including the role of bone age radiography and provocative growth hormone testing",
            "Recognize adrenal insufficiency in a child, including congenital adrenal hyperplasia, and state the stress-dosing principles",
            "Recognize inborn errors of metabolism by presentation in the neonatal period and beyond, including hyperammonemia, hypoglycemia, and developmental regression",
          ],
        },
        {
          title: "Neurology and development",
          items: [
            "★ Evaluate seizures in a child, distinguishing febrile seizures, focal seizures, generalized seizures, and absence seizures, and state the first-line therapy for status epilepticus",
            "Evaluate headache in a child, distinguishing migraine, tension-type headache, and secondary causes including increased intracranial pressure, and state the red flags requiring imaging",
            "Recognize cerebral palsy by type and distribution, and describe its associated comorbidities including intellectual disability, epilepsy, and feeding difficulties",
            "Evaluate hypotonia in an infant, distinguishing central from peripheral causes",
            "Evaluate developmental regression in a child and state the urgent evaluation for neurodegenerative and metabolic causes",
            "Recognize tic disorders and Tourette syndrome and distinguish tics from seizures and stereotypies",
          ],
        },
        {
          title: "Rheumatology, allergy and genetics",
          items: [
            "Evaluate arthritis in a child, distinguishing juvenile idiopathic arthritis subtypes from septic arthritis, reactive arthritis, and malignancy, and state why septic arthritis must be excluded first in monoarthritis",
            "Recognize systemic lupus erythematosus in an adolescent and distinguish it from other causes of fever, rash, and cytopenias",
            "Evaluate and manage atopic dermatitis, including skin care, topical therapy, and trigger avoidance",
            "Evaluate food allergy in a child, distinguishing IgE-mediated allergy from food intolerance, and state the indications for epinephrine autoinjector prescription and an allergy action plan",
            "Recognize anaphylaxis in a child and state the first-line treatment and observation period",
            "Evaluate a child with dysmorphic features, distinguishing chromosomal disorders including Down syndrome, Turner syndrome, and 22q11.2 deletion syndrome, and state the indications for chromosomal microarray",
            "Construct a three-generation pedigree and state when genetic referral is indicated",
          ],
        },
      ],
    },
    {
      num: "07",
      title: "Adolescent, behavioral health, data and procedures",
      blurb: "Adolescent medicine, behavioral and mental health, interpretation of pediatric data, procedures to observe or assist, and clinical decision-making.",
      groups: [
        {
          title: "Adolescent medicine",
          items: [
            "★ Conduct a confidential adolescent interview using HEADSS and counsel on the limits of confidentiality, including harm to self or others and abuse",
            "Evaluate pubertal disorders, distinguishing precocious puberty, delayed puberty, and normal variants, and state the initial evaluation for each",
            "Evaluate menstrual disorders in adolescents, including primary and secondary amenorrhea, dysmenorrhea, and abnormal uterine bleeding",
            "Evaluate and manage sexually transmitted infections in adolescents, including screening recommendations, treatment, and partner services",
            "Counsel an adolescent on contraception, comparing efficacy, adherence demands, and non-contraceptive benefits of available methods",
            "Evaluate acne in an adolescent, including stepwise therapy and the monitoring requirements for isotretinoin",
            "Evaluate an adolescent with chest pain, syncope, or palpitations and distinguish benign causes from cardiac causes requiring referral",
          ],
        },
        {
          title: "Behavioral and mental health",
          items: [
            "★ Evaluate attention-deficit/hyperactivity disorder using diagnostic criteria and collateral information from home and school, and state the roles of behavioral therapy and stimulant medication",
            "Screen an adolescent for depression, anxiety, and suicidality using validated instruments, and state the safety planning and referral steps for a positive screen",
            "Evaluate anxiety disorders in children and adolescents and state the first-line treatment approach",
            "Recognize eating disorders in adolescents, including anorexia nervosa and bulimia nervosa, and state the medical complications and refeeding principles",
            "Evaluate substance use in an adolescent, including screening, brief intervention, and referral, and state the confidentiality considerations",
            "Evaluate school problems in a child, distinguishing learning disability, intellectual disability, attention-deficit/hyperactivity disorder, vision or hearing impairment, and psychosocial stressors",
            "Recognize bullying, including cyberbullying, and its health consequences, and counsel on intervention and support",
          ],
        },
        {
          title: "Interpret independently",
          items: [
            "★ Interpret a complete blood count in a child using age-specific reference ranges, including the differential diagnosis for leukocytosis, leukopenia, and eosinophilia",
            "Interpret serum electrolytes, renal and liver function tests, and blood gas results in a child, accounting for age-specific norms",
            "Interpret a urinalysis and urine culture in a child, distinguishing contamination from true infection",
            "Interpret a chest radiograph in a child, identifying pneumonia, bronchiolitis, foreign body, pneumothorax, and cardiac silhouette abnormalities",
            "Interpret a skeletal survey in the evaluation of suspected physical abuse and state its indications",
            "★ Calculate weight-based medication doses for a child, including maximum doses and the common dosing intervals for acetaminophen and ibuprofen, and verify the calculation independently before ordering",
            "Calculate body surface area-based dosing when indicated and state which drugs require it",
          ],
        },
        {
          title: "Observe or assist, stating for each the indications, contraindications and three most common complications",
          items: [
            "Lumbar puncture in an infant and child, including positioning and cerebrospinal fluid collection",
            "Bladder catheterization for urine collection",
            "Peripheral intravenous catheter placement and venipuncture in a child",
            "Neonatal circumcision counseling and the procedure itself",
            "Suprapubic bladder aspiration",
            "Nasogastric tube placement in a child",
            "Incision and drainage of a skin abscess",
          ],
        },
        {
          title: "Decision-making and child safety",
          items: [
            "Identify the next appropriate step in evaluation or management of a pediatric patient, which may differ from establishing the final diagnosis",
            "Apply the sequence of stabilization, diagnosis, and treatment, and identify the conditions in which empiric treatment precedes diagnostic confirmation, including bacterial meningitis, septic shock, and anaphylaxis",
            "Determine whether diagnostic delay risks irreversible harm when choosing between confirmatory testing and empiric therapy in a child",
            "State the criteria for admission versus outpatient management for common pediatric conditions, including bronchiolitis, pneumonia, dehydration, and febrile infants",
            "Recognize the indications for transfer to a pediatric intensive care unit",
            "State the major adverse effects of commonly prescribed pediatric drugs: amoxicillin rash versus allergy, corticosteroid effects on growth, stimulant effects on appetite and growth, isotretinoin teratogenicity, and valproate hepatotoxicity and teratogenicity",
            "Counsel on prevention of common childhood injuries by age, including drowning, burns, falls, motor vehicle injury, and firearm injury",
            "State the vaccination and antimicrobial prophylaxis requirements of asplenic and immunocompromised children",
          ],
        },
      ],
    },
  ],
};

export default pediatrics;
