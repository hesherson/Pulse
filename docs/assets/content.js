// Educational source collection. Accessed 2026-09-15. See Sources & scope.

export const drugs = [
  {
    "id": "epinephrine",
    "name": "Epinephrine",
    "aliases": [
      "Adrenaline",
      "Adrenalin",
      "Epi"
    ],
    "category": "Resuscitation",
    "mechanism": "Stimulates alpha and beta receptors, increasing vascular tone, cardiac activity and bronchodilation.",
    "indications": [
      "Cardiac arrest",
      "Anaphylaxis",
      "Selected shock or bradycardia infusions"
    ],
    "adultDose": [
      {
        "use": "Cardiac arrest",
        "dose": "1 mg every 3–5 minutes",
        "route": "IV/IO"
      },
      {
        "use": "Anaphylaxis",
        "dose": "0.3–0.5 mg using 1 mg/mL solution; repeat per protocol",
        "route": "IM, anterolateral thigh"
      },
      {
        "use": "Bradycardia infusion after atropine fails",
        "dose": "2–10 mcg/min, titrated; use protocol concentration and pump",
        "route": "IV infusion"
      }
    ],
    "pediatricDose": "Arrest: 0.01 mg/kg IV/IO using 0.1 mg/mL, maximum 1 mg, every 3–5 minutes. Anaphylaxis: 0.01 mg/kg IM using 1 mg/mL; maximum and repeats follow the pediatric protocol (label maximum 0.3 mg below 30 kg).",
    "contraindications": [
      "No absolute contraindication in life-threatening anaphylaxis or indicated cardiac arrest treatment"
    ],
    "adverseEffects": [
      "Tachyarrhythmia",
      "Hypertension",
      "Tremor",
      "Myocardial ischemia"
    ],
    "pearls": [
      "Verify milligrams, concentration and route separately. Arrest and anaphylaxis dosing are different.",
      "The 1 mg/mL vial requires appropriate preparation for IV use."
    ],
    "monitoring": [
      "ECG",
      "Blood pressure",
      "Perfusion",
      "Airway and ventilation"
    ],
    "sourceIds": [
      "epinephrine-label",
      "aha-arrest",
      "aha-brady",
      "aha-pals-arrest"
    ]
  },
  {
    "id": "atropine",
    "name": "Atropine",
    "aliases": [
      "Atropine sulfate"
    ],
    "category": "Cardiology",
    "mechanism": "Blocks muscarinic acetylcholine receptors, reducing vagal slowing of the heart and drying secretions.",
    "indications": [
      "Symptomatic bradycardia with poor perfusion",
      "Organophosphate poisoning under a separate protocol"
    ],
    "adultDose": [
      {
        "use": "Adult symptomatic bradycardia",
        "dose": "1 mg; repeat every 3–5 minutes to 3 mg total",
        "route": "IV"
      },
      {
        "use": "Organophosphate poisoning",
        "dose": "Titrate using the poisoning protocol; the bradycardia maximum does not apply",
        "route": "Protocol route"
      }
    ],
    "pediatricDose": "Vagal bradycardia or primary AV block: 0.02 mg/kg IV/IO; minimum 0.1 mg, maximum single dose 0.5 mg. May repeat once. Address oxygenation and ventilation first.",
    "contraindications": [
      "No absolute contraindication when indicated for a life-threatening emergency"
    ],
    "adverseEffects": [
      "Tachycardia",
      "Dry mouth",
      "Blurred vision",
      "Urinary retention"
    ],
    "pearls": [
      "An ineffective dose must not delay pacing or another indicated intervention.",
      "Use the AHA bradycardia indication, not older bradyasystolic-arrest labeling."
    ],
    "monitoring": [
      "ECG",
      "Blood pressure",
      "Perfusion",
      "Secretions in poisoning"
    ],
    "sourceIds": [
      "atropine-label",
      "aha-brady",
      "aha-pals-brady"
    ]
  },
  {
    "id": "adenosine",
    "name": "Adenosine",
    "aliases": [
      "Adenocard"
    ],
    "category": "Cardiology",
    "mechanism": "Briefly slows AV nodal conduction and can interrupt an AV node dependent reentry circuit.",
    "indications": [
      "Regular narrow-complex supraventricular tachycardia",
      "Selected stable regular monomorphic wide-complex tachycardia under protocol"
    ],
    "adultDose": [
      {
        "use": "Regular SVT",
        "dose": "6 mg rapid push followed immediately by saline flush; then 12 mg if required",
        "route": "IV"
      }
    ],
    "pediatricDose": "0.1 mg/kg rapid IV/IO push and flush, maximum 6 mg; second dose 0.2 mg/kg, maximum 12 mg.",
    "contraindications": [
      "Second- or third-degree AV block or sick sinus syndrome without a functioning pacemaker",
      "Active bronchospasm",
      "Irregular or polymorphic wide-complex tachycardia"
    ],
    "adverseEffects": [
      "Brief AV block or pause",
      "Flushing",
      "Chest discomfort",
      "Dyspnea"
    ],
    "pearls": [
      "Use a proximal, rapidly flushed line and record the rhythm during administration.",
      "Caffeine/theophylline may reduce effect; dipyridamole increases effect."
    ],
    "monitoring": [
      "Continuous ECG",
      "Blood pressure",
      "Defibrillator readiness"
    ],
    "sourceIds": [
      "adenosine-label",
      "aha-tachy",
      "aha-pals-tachy"
    ]
  },
  {
    "id": "amiodarone",
    "name": "Amiodarone",
    "aliases": [
      "Cordarone",
      "Nexterone"
    ],
    "category": "Cardiology",
    "mechanism": "Acts on several ion channels and adrenergic pathways to suppress ventricular arrhythmias.",
    "indications": [
      "VF/pulseless VT refractory to defibrillation",
      "Stable wide-complex tachycardia under the tachycardia pathway"
    ],
    "adultDose": [
      {
        "use": "Shock-refractory VF/pulseless VT",
        "dose": "300 mg bolus; second dose 150 mg",
        "route": "IV/IO"
      },
      {
        "use": "Stable wide-complex tachycardia",
        "dose": "150 mg over 10 minutes; subsequent infusion per protocol",
        "route": "IV infusion"
      }
    ],
    "pediatricDose": "VF/pulseless VT: 5 mg/kg IV/IO, first-dose maximum 300 mg. May repeat up to 3 total doses; subsequent-dose maximum 150 mg.",
    "contraindications": [
      "Known product hypersensitivity",
      "With a pulse: marked bradycardia or high-grade AV block without pacing",
      "With a pulse: cardiogenic shock"
    ],
    "adverseEffects": [
      "Hypotension",
      "Bradycardia",
      "QT prolongation"
    ],
    "pearls": [
      "An arrest bolus and a perfusing-patient infusion are different regimens.",
      "Check product dilution and compatibility instructions."
    ],
    "monitoring": [
      "ECG and QT",
      "Blood pressure",
      "Infusion site"
    ],
    "sourceIds": [
      "amiodarone-label",
      "aha-arrest",
      "aha-tachy",
      "aha-pals-arrest"
    ]
  },
  {
    "id": "lidocaine",
    "name": "Lidocaine",
    "aliases": [
      "Xylocaine"
    ],
    "category": "Cardiology",
    "mechanism": "Blocks sodium channels and decreases ventricular electrical excitability.",
    "indications": [
      "Alternative antiarrhythmic for refractory VF/pulseless VT",
      "Other ventricular arrhythmias under protocol"
    ],
    "adultDose": [
      {
        "use": "VF/pulseless VT",
        "dose": "First dose 1–1.5 mg/kg; second dose 0.5–0.75 mg/kg",
        "route": "IV/IO"
      },
      {
        "use": "Maintenance infusion",
        "dose": "Use the indication-specific local protocol",
        "route": "IV infusion"
      }
    ],
    "pediatricDose": "Cardiac arrest: 1 mg/kg IV/IO. Further doses and infusions require the pediatric protocol.",
    "contraindications": [
      "Amide local-anesthetic hypersensitivity",
      "Severe conduction block without a pacemaker"
    ],
    "adverseEffects": [
      "Confusion",
      "Seizures",
      "Bradycardia",
      "Hypotension"
    ],
    "pearls": [
      "Use the formulation intended for systemic antiarrhythmic administration.",
      "Neurologic changes may be early toxicity; accumulation is more likely with impaired clearance."
    ],
    "monitoring": [
      "ECG",
      "Blood pressure",
      "Mental status"
    ],
    "sourceIds": [
      "lidocaine-label",
      "aha-arrest",
      "aha-pals-arrest"
    ]
  },
  {
    "id": "dopamine",
    "name": "Dopamine",
    "aliases": [
      "Dopamine hydrochloride"
    ],
    "category": "Vasoactive",
    "mechanism": "A catecholamine with dose-dependent dopaminergic, beta and alpha receptor effects.",
    "indications": [
      "Persistent symptomatic bradycardia after atropine",
      "Selected hypotensive states"
    ],
    "adultDose": [
      {
        "use": "Bradycardia infusion",
        "dose": "5–20 mcg/kg/min, titrated to response; concentration per protocol",
        "route": "IV infusion"
      }
    ],
    "pediatricDose": "Use the pediatric shock protocol and a verified weight-based infusion calculation.",
    "contraindications": [
      "Pheochromocytoma",
      "Uncorrected tachyarrhythmia or ventricular fibrillation"
    ],
    "adverseEffects": [
      "Tachyarrhythmia",
      "Ischemia",
      "Extravasation injury"
    ],
    "pearls": [
      "Correct hypovolemia when appropriate.",
      "Use an infusion pump; inspect the access site frequently."
    ],
    "monitoring": [
      "ECG",
      "Blood pressure",
      "Peripheral perfusion",
      "IV site"
    ],
    "sourceIds": [
      "dopamine-label",
      "aha-brady"
    ]
  },
  {
    "id": "norepinephrine",
    "name": "Norepinephrine",
    "aliases": [
      "Noradrenaline",
      "Levophed"
    ],
    "category": "Vasoactive",
    "mechanism": "Predominantly increases alpha-mediated vascular tone, with additional beta-1 cardiac effects.",
    "indications": [
      "Severe acute hypotension or vasodilatory shock"
    ],
    "adultDose": [
      {
        "use": "Shock infusion",
        "dose": "Titrate to the protocol blood-pressure target using its approved concentration and starting rate",
        "route": "IV infusion"
      }
    ],
    "pediatricDose": "Pediatric use, starting rate and limits require a pediatric shock protocol.",
    "contraindications": [
      "Address hypovolemia before or alongside treatment when present",
      "Use caution with peripheral or mesenteric vascular thrombosis"
    ],
    "adverseEffects": [
      "Ischemia",
      "Arrhythmia",
      "Extravasation necrosis"
    ],
    "pearls": [
      "A normal pressure does not prove adequate tissue perfusion.",
      "Abrupt cessation can cause marked hypotension."
    ],
    "monitoring": [
      "Frequent blood pressure",
      "ECG",
      "Perfusion",
      "Infusion-site integrity"
    ],
    "sourceIds": [
      "norepinephrine-label"
    ]
  },
  {
    "id": "aspirin",
    "name": "Aspirin",
    "aliases": [
      "ASA",
      "Acetylsalicylic acid"
    ],
    "category": "Cardiology",
    "mechanism": "Inhibits platelet activity, reducing formation of a platelet-rich coronary clot.",
    "indications": [
      "Suspected acute coronary syndrome when appropriate"
    ],
    "adultDose": [
      {
        "use": "Suspected ACS, Maryland 2026 example",
        "dose": "324–325 mg chewed; account for prior doses",
        "route": "Oral"
      }
    ],
    "pediatricDose": "Not a routine pediatric EMS ACS treatment. Use only a specific specialist-directed indication.",
    "contraindications": [
      "Aspirin hypersensitivity",
      "Active significant bleeding",
      "Unsafe swallowing"
    ],
    "adverseEffects": [
      "Gastrointestinal irritation or bleeding",
      "Hypersensitivity or wheezing"
    ],
    "pearls": [
      "Use a chewable, non-enteric formulation when the protocol calls for rapid antiplatelet action.",
      "Do not use aspirin as a substitute for prompt ACS evaluation."
    ],
    "monitoring": [
      "Allergy history",
      "Bleeding history",
      "Prior aspirin dose",
      "Swallowing safety"
    ],
    "sourceIds": [
      "aspirin-label",
      "md-2026"
    ]
  },
  {
    "id": "nitroglycerin",
    "name": "Nitroglycerin",
    "aliases": [
      "NTG",
      "Nitrostat"
    ],
    "category": "Cardiology",
    "mechanism": "Releases nitric oxide, relaxing vascular smooth muscle and reducing cardiac filling pressure.",
    "indications": [
      "Ischemic chest discomfort",
      "Selected cardiogenic pulmonary edema under protocol"
    ],
    "adultDose": [
      {
        "use": "Angina, 0.4 mg tablet example",
        "dose": "0.4 mg; may repeat every 5 minutes up to 3 tablets in 15 minutes if protocol criteria remain met",
        "route": "Sublingual"
      },
      {
        "use": "Pulmonary edema or infusion",
        "dose": "Use the local indication-specific regimen",
        "route": "Protocol route"
      }
    ],
    "pediatricDose": "Not a routine pediatric EMS medication; consult the pediatric protocol.",
    "contraindications": [
      "Hypotension or shock",
      "Recent PDE-5 inhibitor use within the prohibited interval",
      "Riociguat use",
      "Severe anemia or possible increased intracranial pressure"
    ],
    "adverseEffects": [
      "Headache",
      "Hypotension",
      "Syncope"
    ],
    "pearls": [
      "Check pressure and medication history before every dose.",
      "Use protocol-specific caution when cardiac output depends on preload."
    ],
    "monitoring": [
      "Blood pressure",
      "Pain",
      "ECG",
      "Perfusion"
    ],
    "sourceIds": [
      "nitroglycerin-label"
    ]
  },
  {
    "id": "albuterol",
    "name": "Albuterol",
    "aliases": [
      "Salbutamol",
      "Ventolin",
      "Proventil"
    ],
    "category": "Respiratory",
    "mechanism": "Stimulates beta-2 receptors to relax bronchial smooth muscle.",
    "indications": [
      "Bronchospasm with asthma or COPD",
      "Selected hyperkalemia protocols"
    ],
    "adultDose": [
      {
        "use": "Bronchospasm, Maryland 2026 example",
        "dose": "2.5 mg; repeats per local protocol",
        "route": "Nebulized"
      }
    ],
    "pediatricDose": "Use the local age/weight-based nebulizer regimen; the adult unit dose is not universal for infants.",
    "contraindications": [
      "Known hypersensitivity"
    ],
    "adverseEffects": [
      "Tachycardia",
      "Tremor",
      "Hypokalemia",
      "Paradoxical bronchospasm"
    ],
    "pearls": [
      "It treats lower-airway bronchospasm. Upper-airway obstruction needs a different assessment.",
      "The cited label describes inhaled albuterol; the nebulizer dose is from the EMS protocol."
    ],
    "monitoring": [
      "Work of breathing",
      "Breath sounds",
      "Heart rate",
      "SpO2"
    ],
    "sourceIds": [
      "albuterol-label",
      "md-2026"
    ]
  },
  {
    "id": "ipratropium",
    "name": "Ipratropium",
    "aliases": [
      "Atrovent"
    ],
    "category": "Respiratory",
    "mechanism": "Blocks muscarinic receptors in the airways, reducing vagally mediated bronchoconstriction.",
    "indications": [
      "Bronchospasm, often combined with albuterol"
    ],
    "adultDose": [
      {
        "use": "Nebulized bronchodilator",
        "dose": "0.5 mg; frequency and acute-care combination follow protocol",
        "route": "Nebulized"
      }
    ],
    "pediatricDose": "Use the local pediatric protocol; age thresholds and repeat limits vary.",
    "contraindications": [
      "Hypersensitivity to ipratropium, atropine derivatives or product components"
    ],
    "adverseEffects": [
      "Dry mouth",
      "Blurred vision with eye exposure",
      "Paradoxical bronchospasm"
    ],
    "pearls": [
      "Keep nebulized mist out of the eyes.",
      "Use caution with narrow-angle glaucoma or urinary retention."
    ],
    "monitoring": [
      "Breath sounds",
      "Work of breathing",
      "SpO2"
    ],
    "sourceIds": [
      "ipratropium-label"
    ]
  },
  {
    "id": "magnesium",
    "name": "Magnesium sulfate",
    "aliases": [
      "MgSO4"
    ],
    "category": "Metabolic",
    "mechanism": "Supports cellular electrical stability and reduces neuromuscular excitability.",
    "indications": [
      "Recurrent torsades de pointes with prolonged QT",
      "Eclampsia",
      "Severe bronchospasm under protocol"
    ],
    "adultDose": [
      {
        "use": "Eclampsia, Maryland 2026 example",
        "dose": "4 g over 10 minutes",
        "route": "IV/IO infusion"
      },
      {
        "use": "Severe bronchospasm, Maryland 2026 example",
        "dose": "1–2 g over 10–20 minutes",
        "route": "IV/IO infusion"
      },
      {
        "use": "Torsades",
        "dose": "Use the rhythm- and perfusion-specific protocol; do not delay indicated defibrillation",
        "route": "IV/IO"
      }
    ],
    "pediatricDose": "Use the indication-specific pediatric protocol; asthma and torsades doses differ.",
    "contraindications": [
      "Heart block",
      "Hypermagnesemia",
      "Renal impairment requires particular caution"
    ],
    "adverseEffects": [
      "Hypotension",
      "Flushing",
      "Loss of reflexes",
      "Respiratory depression"
    ],
    "pearls": [
      "Not a routine arrest drug or a treatment for every polymorphic VT."
    ],
    "monitoring": [
      "ECG",
      "Blood pressure",
      "Respirations",
      "Deep tendon reflexes during obstetric treatment"
    ],
    "sourceIds": [
      "magnesium-label",
      "md-2026",
      "aha-als"
    ]
  },
  {
    "id": "methylprednisolone",
    "name": "Methylprednisolone",
    "aliases": [
      "Solu-Medrol"
    ],
    "category": "Respiratory",
    "mechanism": "A systemic glucocorticoid that suppresses inflammatory signaling.",
    "indications": [
      "Selected asthma or COPD exacerbations",
      "Other inflammatory conditions under protocol"
    ],
    "adultDose": [
      {
        "use": "Acute EMS use",
        "dose": "Dose and route depend on the local protocol and formulation",
        "route": "IV/IM"
      }
    ],
    "pediatricDose": "Use an indication-specific pediatric protocol with its maximum dose.",
    "contraindications": [
      "Systemic fungal infection",
      "Known product hypersensitivity"
    ],
    "adverseEffects": [
      "Hyperglycemia",
      "Gastrointestinal symptoms",
      "Mood changes"
    ],
    "pearls": [
      "Anti-inflammatory improvement is delayed; this is not an immediate bronchodilator.",
      "Solu-Medrol sodium succinate and depot methylprednisolone acetate are different formulations."
    ],
    "monitoring": [
      "Respiratory status",
      "Glucose when indicated",
      "Clinical response"
    ],
    "sourceIds": [
      "methylprednisolone-label"
    ]
  },
  {
    "id": "dexamethasone",
    "name": "Dexamethasone",
    "aliases": [
      "Decadron"
    ],
    "category": "Respiratory",
    "mechanism": "A long-acting glucocorticoid that reduces inflammation and tissue edema.",
    "indications": [
      "Croup",
      "Selected asthma or COPD exacerbations",
      "Adrenal insufficiency under protocol"
    ],
    "adultDose": [
      {
        "use": "EMS use, Maryland 2026 example",
        "dose": "15 mg once; route follows indication and protocol",
        "route": "IV/IM/PO"
      }
    ],
    "pediatricDose": "Use the indication-specific pediatric dose and maximum; croup and other conditions may use different local regimens.",
    "contraindications": [
      "Known hypersensitivity",
      "Systemic fungal infection"
    ],
    "adverseEffects": [
      "Hyperglycemia",
      "Nausea",
      "Mood changes"
    ],
    "pearls": [
      "Clinical benefit develops over time.",
      "Verify whether the available injectable formulation is approved by your protocol for oral administration."
    ],
    "monitoring": [
      "Airway and breathing",
      "Glucose when indicated",
      "Clinical response"
    ],
    "sourceIds": [
      "dexamethasone-label",
      "md-2026"
    ]
  },
  {
    "id": "diphenhydramine",
    "name": "Diphenhydramine",
    "aliases": [
      "Benadryl"
    ],
    "category": "Allergy",
    "mechanism": "Blocks H1 histamine receptors and also has sedating anticholinergic effects.",
    "indications": [
      "Selected allergic symptoms as an adjunct",
      "Acute dystonic reactions under protocol"
    ],
    "adultDose": [
      {
        "use": "Parenteral antihistamine, label range",
        "dose": "10–50 mg; IV rate generally no faster than 25 mg/min; local protocol determines dose",
        "route": "Slow IV or IM"
      }
    ],
    "pediatricDose": "Use a pediatric protocol. Injectable diphenhydramine is contraindicated in premature infants and neonates.",
    "contraindications": [
      "Known hypersensitivity",
      "Premature infants or neonates"
    ],
    "adverseEffects": [
      "Sedation",
      "Dry mouth",
      "Hypotension",
      "Paradoxical excitation"
    ],
    "pearls": [
      "Antihistamines do not replace epinephrine in anaphylaxis.",
      "Sedation can complicate reassessment of mental status."
    ],
    "monitoring": [
      "Mental status",
      "Blood pressure",
      "Respiratory status"
    ],
    "sourceIds": [
      "diphenhydramine-label",
      "aha-special"
    ]
  },
  {
    "id": "fentanyl",
    "name": "Fentanyl",
    "aliases": [
      "Sublimaze"
    ],
    "category": "Analgesia & sedation",
    "mechanism": "A potent opioid receptor agonist providing analgesia and sedation.",
    "indications": [
      "Moderate to severe pain under EMS protocol"
    ],
    "adultDose": [
      {
        "use": "Analgesia, Maryland 2026 initial-dose example",
        "dose": "1 mcg/kg, maximum 200 mcg; titrate and reassess per protocol",
        "route": "IV/IO/IM/IN per protocol"
      }
    ],
    "pediatricDose": "Use the pediatric analgesia protocol and its route-specific maximum; verify the dose in micrograms.",
    "contraindications": [
      "Known hypersensitivity",
      "Respiratory or circulatory compromise requires protocol assessment and support"
    ],
    "adverseEffects": [
      "Hypoventilation or apnea",
      "Bradycardia",
      "Nausea",
      "Chest wall rigidity"
    ],
    "pearls": [
      "Administer IV doses slowly and reassess before repeating.",
      "Opioids plus benzodiazepines increase respiratory-depression risk."
    ],
    "monitoring": [
      "Pain score",
      "Respiratory rate",
      "Waveform capnography",
      "SpO2",
      "Blood pressure"
    ],
    "sourceIds": [
      "fentanyl-label",
      "md-2026"
    ]
  },
  {
    "id": "morphine",
    "name": "Morphine",
    "aliases": [
      "Morphine sulfate"
    ],
    "category": "Analgesia & sedation",
    "mechanism": "An opioid agonist that changes pain perception and response.",
    "indications": [
      "Severe pain when an opioid is indicated"
    ],
    "adultDose": [
      {
        "use": "EMS analgesia",
        "dose": "Use small, slow, titrated doses from the local protocol; account for age and physiology",
        "route": "IV/IO/IM per protocol"
      }
    ],
    "pediatricDose": "Use the local pediatric analgesia protocol and maximum dose.",
    "contraindications": [
      "Significant respiratory depression without appropriate support",
      "Severe asthma in an unmonitored setting",
      "Known hypersensitivity",
      "Known or suspected gastrointestinal obstruction"
    ],
    "adverseEffects": [
      "Hypotension",
      "Respiratory depression",
      "Nausea",
      "Pruritus"
    ],
    "pearls": [
      "Effects can continue to increase after an IV dose; avoid rapid dose stacking.",
      "Reduce or individualize dosing when clearance or perfusion is impaired."
    ],
    "monitoring": [
      "Pain score",
      "Respirations and ETCO2",
      "SpO2",
      "Blood pressure"
    ],
    "sourceIds": [
      "morphine-label"
    ]
  },
  {
    "id": "ketamine",
    "name": "Ketamine",
    "aliases": [
      "Ketalar"
    ],
    "category": "Analgesia & sedation",
    "mechanism": "An NMDA receptor antagonist producing analgesia or dissociative anesthesia depending on dose.",
    "indications": [
      "Protocol-defined analgesia",
      "Dissociative sedation or anesthetic induction by authorized clinicians"
    ],
    "adultDose": [
      {
        "use": "Analgesia, Maryland 2026 example",
        "dose": "0.2 mg/kg over 1–2 minutes, maximum 20 mg",
        "route": "IV/IO"
      },
      {
        "use": "Dissociation or RSI",
        "dose": "Use the separate local sedation or RSI regimen",
        "route": "IV/IM per protocol"
      }
    ],
    "pediatricDose": "Use the pediatric indication-specific protocol. Analgesic dosing must not be substituted for an induction regimen.",
    "contraindications": [
      "Known hypersensitivity",
      "Conditions in which a substantial blood-pressure increase would create a serious hazard"
    ],
    "adverseEffects": [
      "Hypertension or tachycardia",
      "Emergence reactions",
      "Vomiting",
      "Respiratory depression or laryngospasm"
    ],
    "pearls": [
      "Spontaneous breathing and airway reflexes are not guaranteed.",
      "Prepare suction and ventilation equipment; rapid IV administration increases respiratory risk."
    ],
    "monitoring": [
      "Sedation level",
      "ETCO2 and respiratory pattern",
      "SpO2",
      "Blood pressure"
    ],
    "sourceIds": [
      "ketamine-label",
      "md-2026"
    ]
  },
  {
    "id": "midazolam",
    "name": "Midazolam",
    "aliases": [
      "Versed"
    ],
    "category": "Analgesia & sedation",
    "mechanism": "A benzodiazepine that enhances inhibitory GABA activity, producing sedation, amnesia and anticonvulsant effects.",
    "indications": [
      "Seizures under protocol",
      "Procedural or post-intubation sedation"
    ],
    "adultDose": [
      {
        "use": "Active seizures, Maryland 2026 initial-dose example",
        "dose": "0.1 mg/kg over 1–2 minutes, maximum 5 mg; geriatric reduction and repeats per protocol",
        "route": "IV/IO"
      },
      {
        "use": "Sedation",
        "dose": "Use the separate, titrated sedation protocol",
        "route": "IV/IM/IN per protocol"
      }
    ],
    "pediatricDose": "Use a pediatric seizure or sedation regimen; route, maximum dose and repeats are not interchangeable.",
    "contraindications": [
      "Known hypersensitivity",
      "Acute narrow-angle glaucoma"
    ],
    "adverseEffects": [
      "Hypoventilation or apnea",
      "Hypotension",
      "Paradoxical agitation"
    ],
    "pearls": [
      "Provides no reliable analgesia.",
      "Titrate sedation slowly; respiratory depression is amplified by opioids."
    ],
    "monitoring": [
      "Seizure activity or sedation depth",
      "ETCO2",
      "SpO2",
      "Blood pressure"
    ],
    "sourceIds": [
      "midazolam-label",
      "md-2026"
    ]
  },
  {
    "id": "etomidate",
    "name": "Etomidate",
    "aliases": [
      "Amidate"
    ],
    "category": "Airway",
    "mechanism": "A short-acting hypnotic anesthetic that facilitates loss of consciousness.",
    "indications": [
      "Anesthetic induction for authorized advanced airway care"
    ],
    "adultDose": [
      {
        "use": "Induction, labeled adult reference",
        "dose": "Common label dose 0.3 mg/kg over 30–60 seconds; the local RSI protocol governs EMS use",
        "route": "IV"
      }
    ],
    "pediatricDose": "Use an authorized pediatric RSI protocol; labeling does not establish dosing below age 10.",
    "contraindications": [
      "Known hypersensitivity"
    ],
    "adverseEffects": [
      "Myoclonus",
      "Apnea",
      "Injection pain",
      "Transient adrenal suppression"
    ],
    "pearls": [
      "It provides hypnosis without analgesia.",
      "Prepare continuing sedation and analgesia because the induction effect is brief."
    ],
    "monitoring": [
      "Ventilation and ETCO2",
      "SpO2",
      "Blood pressure",
      "Sedation"
    ],
    "sourceIds": [
      "etomidate-label"
    ]
  },
  {
    "id": "rocuronium",
    "name": "Rocuronium",
    "aliases": [
      "Zemuron"
    ],
    "category": "Airway",
    "mechanism": "A nondepolarizing neuromuscular blocker that prevents skeletal muscle activation at the motor end plate.",
    "indications": [
      "Paralysis for authorized intubation or ventilation procedures"
    ],
    "adultDose": [
      {
        "use": "RSI or continued paralysis",
        "dose": "Use the authorized weight-based airway protocol; dosing and duration depend on the goal",
        "route": "IV"
      }
    ],
    "pediatricDose": "Pediatric use requires an authorized airway protocol and age-specific dosing.",
    "contraindications": [
      "Hypersensitivity to rocuronium or another neuromuscular blocker"
    ],
    "adverseEffects": [
      "Complete respiratory paralysis",
      "Prolonged weakness",
      "Anaphylaxis"
    ],
    "pearls": [
      "Paralysis provides no sedation, amnesia or pain relief.",
      "Ensure continuing sedation and analgesia plus the ability to oxygenate and ventilate."
    ],
    "monitoring": [
      "Continuous ETCO2",
      "SpO2",
      "Ventilation",
      "Hemodynamics",
      "Sedation plan"
    ],
    "sourceIds": [
      "rocuronium-label"
    ]
  },
  {
    "id": "succinylcholine",
    "name": "Succinylcholine",
    "aliases": [
      "Anectine",
      "Suxamethonium"
    ],
    "category": "Airway",
    "mechanism": "Depolarizes the motor end plate, causing brief fasciculations followed by paralysis.",
    "indications": [
      "Paralysis for emergency airway management under an authorized protocol"
    ],
    "adultDose": [
      {
        "use": "RSI",
        "dose": "Use the authorized weight-based RSI regimen after screening contraindications",
        "route": "IV; IM only when protocol permits"
      }
    ],
    "pediatricDose": "Reserve pediatric use for emergency airway indications under protocol because occult myopathy can cause hyperkalemic arrest.",
    "contraindications": [
      "Known or suspected hyperkalemia",
      "Skeletal muscle myopathy",
      "After the acute phase of major burns, denervation or extensive trauma",
      "Malignant-hyperthermia susceptibility"
    ],
    "adverseEffects": [
      "Hyperkalemia",
      "Bradycardia",
      "Malignant hyperthermia",
      "Prolonged apnea"
    ],
    "pearls": [
      "It supplies no sedation or analgesia.",
      "A short expected duration is not a rescue ventilation plan."
    ],
    "monitoring": [
      "ECG",
      "ETCO2",
      "SpO2",
      "Ventilation",
      "Temperature when indicated"
    ],
    "sourceIds": [
      "succinylcholine-label"
    ]
  },
  {
    "id": "naloxone",
    "name": "Naloxone",
    "aliases": [
      "Narcan"
    ],
    "category": "Toxicology",
    "mechanism": "Competes at opioid receptors to reverse opioid effects, especially respiratory depression.",
    "indications": [
      "Suspected opioid-induced hypoventilation"
    ],
    "adultDose": [
      {
        "use": "Suspected opioid overdose, injection label range",
        "dose": "0.4–2 mg; may repeat every 2–3 minutes; titration and route follow local protocol",
        "route": "IV; IM if IV unavailable"
      },
      {
        "use": "Intranasal product",
        "dose": "Use the exact device strength and its repeat instructions",
        "route": "Intranasal"
      }
    ],
    "pediatricDose": "Injection label: 0.01 mg/kg IV initially; if inadequate, 0.1 mg/kg. EMS protocols and nasal devices may differ.",
    "contraindications": [
      "Known hypersensitivity"
    ],
    "adverseEffects": [
      "Acute opioid withdrawal",
      "Vomiting",
      "Agitation",
      "Recurrent respiratory depression as effect wanes"
    ],
    "pearls": [
      "Support ventilation immediately.",
      "The practical target is adequate breathing, with continued observation for recurrence."
    ],
    "monitoring": [
      "Respirations and ETCO2",
      "SpO2",
      "Mental status",
      "Recurrent hypoventilation"
    ],
    "sourceIds": [
      "naloxone-label"
    ]
  },
  {
    "id": "dextrose",
    "name": "Dextrose",
    "aliases": [
      "D10",
      "D50",
      "Glucose IV"
    ],
    "category": "Metabolic",
    "mechanism": "Supplies glucose directly to the circulation.",
    "indications": [
      "Symptomatic hypoglycemia with an appropriate IV indication"
    ],
    "adultDose": [
      {
        "use": "Insulin-induced hypoglycemia, D50 label reference",
        "dose": "10–25 g IV; reassess glucose and symptoms; choose the protocol-approved concentration",
        "route": "IV"
      },
      {
        "use": "D10 titration",
        "dose": "Use the local bolus/titration regimen; D10 contains 0.1 g/mL",
        "route": "IV/IO per protocol"
      }
    ],
    "pediatricDose": "Use the pediatric hypoglycemia protocol for dose, concentration and age-specific maximum; do not give an adult D50 bolus.",
    "contraindications": [
      "Do not treat a normal or high glucose as hypoglycemia",
      "Unsafe or infiltrated IV access"
    ],
    "adverseEffects": [
      "Hyperglycemia",
      "Extravasation tissue injury",
      "Electrolyte shifts"
    ],
    "pearls": [
      "Concentration changes volume, not the prescribed number of grams.",
      "Recheck glucose and mental status after treatment."
    ],
    "monitoring": [
      "Point-of-care glucose",
      "Mental status",
      "IV site"
    ],
    "sourceIds": [
      "dextrose-label"
    ]
  },
  {
    "id": "glucagon",
    "name": "Glucagon",
    "aliases": [
      "Glucagon emergency kit"
    ],
    "category": "Metabolic",
    "mechanism": "Stimulates liver glycogen breakdown to raise circulating glucose.",
    "indications": [
      "Severe hypoglycemia when an appropriate glucagon route is needed"
    ],
    "adultDose": [
      {
        "use": "Severe hypoglycemia, cited kit",
        "dose": "1 mg after reconstitution; repeat instructions are product/protocol specific",
        "route": "IM/SC; IV by healthcare professionals"
      }
    ],
    "pediatricDose": "Cited kit: at least 20 kg, 1 mg; below 20 kg, 0.5 mg. Other kits and nasal products have different instructions.",
    "contraindications": [
      "Pheochromocytoma",
      "Insulinoma",
      "Known hypersensitivity"
    ],
    "adverseEffects": [
      "Nausea",
      "Vomiting",
      "Transient heart-rate or blood-pressure increase"
    ],
    "pearls": [
      "It requires liver glycogen and may work poorly after prolonged fasting or depleted stores.",
      "Give oral carbohydrate after recovery only when swallowing is safe."
    ],
    "monitoring": [
      "Glucose",
      "Mental status",
      "Airway protection"
    ],
    "sourceIds": [
      "glucagon-label"
    ]
  },
  {
    "id": "calcium-chloride",
    "name": "Calcium chloride",
    "aliases": [
      "CaCl2",
      "10% calcium chloride"
    ],
    "category": "Metabolic",
    "mechanism": "Replaces ionized calcium needed for muscle contraction and electrical function.",
    "indications": [
      "Acute symptomatic hypocalcemia",
      "Selected electrolyte or toxicologic emergencies under a specific protocol"
    ],
    "adultDose": [
      {
        "use": "Acute hypocalcemia, label reference",
        "dose": "200–1,000 mg; slow infusion, no faster than 100 mg/min for the cited 10% product",
        "route": "IV infusion via a central or deep vein"
      },
      {
        "use": "Special resuscitation indication",
        "dose": "Use the cause-specific protocol and medical direction",
        "route": "Protocol route"
      }
    ],
    "pediatricDose": "Use the exact indication-specific pediatric protocol; calcium salt and elemental-calcium doses are not interchangeable.",
    "contraindications": [
      "Hypercalcemia",
      "Neonates receiving ceftriaxone",
      "Do not use routinely for undifferentiated cardiac arrest"
    ],
    "adverseEffects": [
      "Tissue necrosis from extravasation",
      "Bradycardia",
      "Hypotension or arrhythmia if too rapid"
    ],
    "pearls": [
      "10% calcium chloride contains about 27 mg elemental calcium per mL.",
      "Do not mix with bicarbonate; check line compatibility."
    ],
    "monitoring": [
      "ECG",
      "Blood pressure",
      "IV site",
      "Ionized calcium when available"
    ],
    "sourceIds": [
      "calcium-chloride-label",
      "aha-als",
      "aha-special"
    ]
  },
  {
    "id": "calcium-gluconate",
    "name": "Calcium gluconate",
    "aliases": [
      "10% calcium gluconate"
    ],
    "category": "Metabolic",
    "mechanism": "Replaces calcium using a different salt and elemental-calcium concentration than calcium chloride.",
    "indications": [
      "Acute symptomatic hypocalcemia",
      "Selected electrolyte or toxicologic emergencies under protocol"
    ],
    "adultDose": [
      {
        "use": "Acute hypocalcemia, label reference",
        "dose": "1–2 g; dilute and infuse slowly, maximum 200 mg/min",
        "route": "IV"
      }
    ],
    "pediatricDose": "Use the indication-specific pediatric protocol; the cited label limits administration to 100 mg/min in pediatric patients.",
    "contraindications": [
      "Hypercalcemia",
      "Neonates receiving ceftriaxone"
    ],
    "adverseEffects": [
      "Extravasation injury",
      "Hypotension",
      "Bradycardia or arrhythmia"
    ],
    "pearls": [
      "10% calcium gluconate contains 9.3 mg elemental calcium per mL.",
      "It is not interchangeable gram-for-gram with calcium chloride.",
      "Calcium is not routine treatment for undifferentiated cardiac arrest."
    ],
    "monitoring": [
      "ECG",
      "Blood pressure",
      "IV site",
      "Ionized calcium when available"
    ],
    "sourceIds": [
      "calcium-gluconate-label",
      "aha-als",
      "aha-special"
    ]
  },
  {
    "id": "sodium-bicarbonate",
    "name": "Sodium bicarbonate",
    "aliases": [
      "NaHCO3",
      "Bicarbonate"
    ],
    "category": "Metabolic",
    "mechanism": "Buffers hydrogen ions and delivers sodium; its buffering reaction generates carbon dioxide.",
    "indications": [
      "Selected sodium-channel blocker poisoning",
      "Selected severe metabolic or electrolyte emergencies under protocol"
    ],
    "adultDose": [
      {
        "use": "Cause-specific emergency use",
        "dose": "Dose in mEq using the specific toxicology or metabolic protocol",
        "route": "IV/IO per protocol"
      }
    ],
    "pediatricDose": "Use a pediatric indication-specific regimen and concentration; adult concentrated products are not automatic substitutes.",
    "contraindications": [
      "Existing alkalosis",
      "Hypochloremic alkalosis from vomiting or certain diuretics"
    ],
    "adverseEffects": [
      "Hypernatremia",
      "Alkalosis",
      "Fluid overload",
      "Extravasation injury"
    ],
    "pearls": [
      "Not a routine medication for undifferentiated cardiac arrest.",
      "Ensure adequate ventilation and check compatibility before sharing a line with calcium."
    ],
    "monitoring": [
      "ECG",
      "Ventilation and ETCO2",
      "Blood gas/electrolytes when available",
      "IV site"
    ],
    "sourceIds": [
      "bicarbonate-label",
      "aha-als",
      "aha-special"
    ]
  },
  {
    "id": "tranexamic-acid",
    "name": "Tranexamic acid",
    "aliases": [
      "TXA",
      "Cyklokapron"
    ],
    "category": "Trauma",
    "mechanism": "An antifibrinolytic that limits plasmin activity and helps preserve formed fibrin clots.",
    "indications": [
      "Protocol-selected traumatic hemorrhage",
      "Protocol-selected postpartum hemorrhage"
    ],
    "adultDose": [
      {
        "use": "Prehospital hemorrhage",
        "dose": "Eligibility, time window, dose and infusion rate depend on the local trauma/obstetric protocol",
        "route": "IV; IO only if protocol permits"
      }
    ],
    "pediatricDose": "Pediatric hemorrhage dosing and age thresholds require a specific protocol.",
    "contraindications": [
      "Known hypersensitivity",
      "Active intravascular clotting",
      "Subarachnoid hemorrhage per product labeling"
    ],
    "adverseEffects": [
      "Hypotension with rapid administration",
      "Seizures",
      "Thromboembolic events"
    ],
    "pearls": [
      "It does not replace hemorrhage control or blood resuscitation.",
      "Never administer intrathecally or epidurally. EMS hemorrhage use is distinct from the labeled dental indication."
    ],
    "monitoring": [
      "Bleeding and perfusion",
      "Blood pressure",
      "Time from injury/delivery",
      "Route verification"
    ],
    "sourceIds": [
      "txa-label",
      "md-2026"
    ]
  },
  {
    "id": "ondansetron",
    "name": "Ondansetron",
    "aliases": [
      "Zofran"
    ],
    "category": "Supportive care",
    "mechanism": "Blocks serotonin 5-HT3 receptors involved in nausea and vomiting.",
    "indications": [
      "Nausea or vomiting under EMS protocol"
    ],
    "adultDose": [
      {
        "use": "Antiemetic, Maryland 2026 initial-dose example",
        "dose": "8 mg over 2–5 minutes; local protocols may use a different dose",
        "route": "Slow IV"
      }
    ],
    "pediatricDose": "Use the local pediatric antiemetic dose and age limits; adult dosing must not be extrapolated to infants.",
    "contraindications": [
      "Known hypersensitivity",
      "Concomitant apomorphine",
      "Avoid with congenital long-QT syndrome"
    ],
    "adverseEffects": [
      "Headache",
      "Constipation",
      "QT prolongation",
      "Serotonin syndrome with interacting drugs"
    ],
    "pearls": [
      "Consider electrolyte abnormalities and other QT-prolonging medications.",
      "Treat the cause of vomiting as well as the symptom."
    ],
    "monitoring": [
      "Nausea/vomiting",
      "ECG when QT risk exists",
      "Hydration",
      "Blood pressure"
    ],
    "sourceIds": [
      "ondansetron-label",
      "md-2026"
    ]
  }
];

export const glossary = [
  {
    "id": "ventilation",
    "term": "Ventilation",
    "definition": "Movement of air into and out of the lungs.",
    "category": "Airway",
    "sourceIds": [
      "l-rfail"
    ]
  },
  {
    "id": "oxygenation",
    "term": "Oxygenation",
    "definition": "Transfer of oxygen into blood and its availability for transport to tissues.",
    "category": "Airway",
    "sourceIds": [
      "l-rfail"
    ]
  },
  {
    "id": "hypoxemia",
    "term": "Hypoxemia",
    "definition": "An abnormally low oxygen level in arterial blood.",
    "category": "Airway",
    "sourceIds": [
      "l-rfail"
    ]
  },
  {
    "id": "hypercapnia",
    "term": "Hypercapnia",
    "definition": "An abnormally high carbon dioxide level in blood.",
    "category": "Airway",
    "sourceIds": [
      "l-rfail"
    ]
  },
  {
    "id": "dyspnea",
    "term": "Dyspnea",
    "definition": "The patient's uncomfortable sensation of difficult breathing or air hunger.",
    "category": "Airway",
    "sourceIds": [
      "l-rsymp"
    ]
  },
  {
    "id": "cyanosis",
    "term": "Cyanosis",
    "definition": "A bluish or grayish appearance that may accompany low oxygen; visibility varies with skin tone.",
    "category": "Airway",
    "sourceIds": [
      "l-rsymp"
    ]
  },
  {
    "id": "respiratory-failure",
    "term": "Respiratory failure",
    "definition": "Inadequate oxygenation, carbon dioxide elimination, or both.",
    "category": "Airway",
    "sourceIds": [
      "l-rfail"
    ]
  },
  {
    "id": "wheeze",
    "term": "Wheeze",
    "definition": "A musical breath sound often associated with narrowed lower airways.",
    "category": "Airway",
    "sourceIds": [
      "l-asthma"
    ]
  },
  {
    "id": "emphysema",
    "term": "Emphysema",
    "definition": "Damage to alveolar walls that reduces elastic recoil and makes exhalation less effective.",
    "category": "Airway",
    "sourceIds": [
      "l-copd"
    ]
  },
  {
    "id": "chronic-bronchitis",
    "term": "Chronic bronchitis",
    "definition": "Persistent airway inflammation and mucus production that can obstruct airflow.",
    "category": "Airway",
    "sourceIds": [
      "l-copd"
    ]
  },
  {
    "id": "waveform-capnography",
    "term": "Waveform capnography",
    "definition": "A continuous graphic display of exhaled carbon dioxide across each breath.",
    "category": "Airway",
    "sourceIds": [
      "aha-als"
    ]
  },
  {
    "id": "apnea",
    "term": "Apnea",
    "definition": "Absence of breathing.",
    "category": "Airway",
    "sourceIds": [
      "l-bls"
    ]
  },
  {
    "id": "arrhythmia",
    "term": "Arrhythmia",
    "definition": "An abnormality in heart rate, rhythm, or both.",
    "category": "Cardiology",
    "sourceIds": [
      "l-arrhythmia"
    ]
  },
  {
    "id": "tachycardia",
    "term": "Tachycardia",
    "definition": "A heart rate faster than expected for age and clinical context.",
    "category": "Cardiology",
    "sourceIds": [
      "l-arrhythmia"
    ]
  },
  {
    "id": "bradycardia",
    "term": "Bradycardia",
    "definition": "A heart rate slower than expected for age and clinical context.",
    "category": "Cardiology",
    "sourceIds": [
      "l-arrhythmia"
    ]
  },
  {
    "id": "atrium",
    "term": "Atrium",
    "definition": "One of the two upper heart chambers that receive returning blood.",
    "category": "Cardiology",
    "sourceIds": [
      "l-anatomy"
    ]
  },
  {
    "id": "ventricle",
    "term": "Ventricle",
    "definition": "One of the two lower heart chambers that pump blood out of the heart.",
    "category": "Cardiology",
    "sourceIds": [
      "l-anatomy"
    ]
  },
  {
    "id": "coronary-artery",
    "term": "Coronary artery",
    "definition": "An artery that supplies the heart muscle with oxygenated blood.",
    "category": "Cardiology",
    "sourceIds": [
      "l-flow"
    ]
  },
  {
    "id": "pulmonary-circulation",
    "term": "Pulmonary circulation",
    "definition": "Blood flow from the right heart through the lungs and back to the left heart.",
    "category": "Cardiology",
    "sourceIds": [
      "l-flow"
    ]
  },
  {
    "id": "sinoatrial-node",
    "term": "Sinoatrial node",
    "definition": "The heart's usual initiating pacemaker, located in the right atrium.",
    "category": "Cardiology",
    "sourceIds": [
      "l-beats"
    ]
  },
  {
    "id": "systole",
    "term": "Systole",
    "definition": "The contraction phase when the ventricles eject blood.",
    "category": "Cardiology",
    "sourceIds": [
      "l-beats"
    ]
  },
  {
    "id": "diastole",
    "term": "Diastole",
    "definition": "The relaxation phase when the ventricles fill.",
    "category": "Cardiology",
    "sourceIds": [
      "l-beats"
    ]
  },
  {
    "id": "cardiogenic-shock",
    "term": "Cardiogenic shock",
    "definition": "Circulatory failure caused by the heart being unable to pump enough blood.",
    "category": "Shock",
    "sourceIds": [
      "l-cshock"
    ]
  },
  {
    "id": "sepsis",
    "term": "Sepsis",
    "definition": "Life-threatening organ dysfunction resulting from a dysregulated response to infection.",
    "category": "Shock",
    "sourceIds": [
      "l-sepsis"
    ]
  },
  {
    "id": "hypotension",
    "term": "Hypotension",
    "definition": "Blood pressure below the expected range for the patient and context.",
    "category": "Shock",
    "sourceIds": [
      "l-sepsis-care"
    ]
  },
  {
    "id": "diaphoresis",
    "term": "Diaphoresis",
    "definition": "Sweating, often profuse and disproportionate to the environment or activity.",
    "category": "Assessment",
    "sourceIds": [
      "l-sepsis"
    ]
  },
  {
    "id": "myocardial-infarction",
    "term": "Myocardial infarction",
    "definition": "Death of heart muscle caused by prolonged interruption of its blood supply.",
    "category": "Cardiology",
    "sourceIds": [
      "l-mi"
    ]
  },
  {
    "id": "rosc",
    "term": "ROSC",
    "definition": "Return of spontaneous circulation after cardiac arrest.",
    "category": "Cardiology",
    "sourceIds": [
      "l-post"
    ]
  },
  {
    "id": "stroke",
    "term": "Stroke",
    "definition": "Acute brain injury from blocked blood flow or bleeding in the brain.",
    "category": "Neurology",
    "sourceIds": [
      "l-stroke"
    ]
  },
  {
    "id": "aphasia",
    "term": "Aphasia",
    "definition": "Impaired ability to produce or understand language.",
    "category": "Neurology",
    "sourceIds": [
      "l-stroke"
    ]
  },
  {
    "id": "dysarthria",
    "term": "Dysarthria",
    "definition": "Impaired articulation that makes speech sound slurred.",
    "category": "Neurology",
    "sourceIds": [
      "l-stroke"
    ]
  },
  {
    "id": "ataxia",
    "term": "Ataxia",
    "definition": "Loss of coordination affecting movements, balance, or walking.",
    "category": "Neurology",
    "sourceIds": [
      "l-co"
    ]
  },
  {
    "id": "seizure",
    "term": "Seizure",
    "definition": "A temporary disturbance of brain electrical activity that can alter awareness, movement, or sensation.",
    "category": "Neurology",
    "sourceIds": [
      "l-seizure-types"
    ]
  },
  {
    "id": "focal-seizure",
    "term": "Focal seizure",
    "definition": "A seizure that begins in a network on one side of the brain.",
    "category": "Neurology",
    "sourceIds": [
      "l-seizure-types"
    ]
  },
  {
    "id": "generalized-seizure",
    "term": "Generalized seizure",
    "definition": "A seizure involving networks on both sides of the brain from its onset.",
    "category": "Neurology",
    "sourceIds": [
      "l-seizure-types"
    ]
  },
  {
    "id": "concussion",
    "term": "Concussion",
    "definition": "A form of traumatic brain injury that affects brain function after a blow or jolt.",
    "category": "Trauma",
    "sourceIds": [
      "l-tbi"
    ]
  },
  {
    "id": "anisocoria",
    "term": "Anisocoria",
    "definition": "Unequal pupil sizes; new asymmetry after head injury is concerning.",
    "category": "Neurology",
    "sourceIds": [
      "l-tbi"
    ]
  },
  {
    "id": "hemorrhage",
    "term": "Hemorrhage",
    "definition": "Bleeding from damaged blood vessels, internally or externally.",
    "category": "Trauma",
    "sourceIds": [
      "l-bleed"
    ]
  },
  {
    "id": "tourniquet",
    "term": "Tourniquet",
    "definition": "A device that compresses a limb to stop life-threatening extremity bleeding.",
    "category": "Trauma",
    "sourceIds": [
      "l-bleed"
    ]
  },
  {
    "id": "wound-packing",
    "term": "Wound packing",
    "definition": "Placing gauze into an appropriate bleeding wound to apply pressure at its source.",
    "category": "Trauma",
    "sourceIds": [
      "l-bleed"
    ]
  },
  {
    "id": "penetrating-injury",
    "term": "Penetrating injury",
    "definition": "An injury in which an object passes through the body's surface into deeper tissue.",
    "category": "Trauma",
    "sourceIds": [
      "l-triage"
    ]
  },
  {
    "id": "blunt-injury",
    "term": "Blunt injury",
    "definition": "An injury caused by impact or force without an object penetrating the skin.",
    "category": "Trauma",
    "sourceIds": [
      "l-triage"
    ]
  },
  {
    "id": "hypoglycemia",
    "term": "Hypoglycemia",
    "definition": "An abnormally low blood glucose concentration.",
    "category": "Endocrine",
    "sourceIds": [
      "l-hypo"
    ]
  },
  {
    "id": "hyperglycemia",
    "term": "Hyperglycemia",
    "definition": "An abnormally high blood glucose concentration.",
    "category": "Endocrine",
    "sourceIds": [
      "l-dka"
    ]
  },
  {
    "id": "diabetic-ketoacidosis",
    "term": "Diabetic ketoacidosis",
    "definition": "A metabolic emergency involving insulin deficiency, ketone production, and acidosis.",
    "category": "Endocrine",
    "sourceIds": [
      "l-dka"
    ]
  },
  {
    "id": "ketones",
    "term": "Ketones",
    "definition": "Acidic molecules produced when the body breaks down fat for energy.",
    "category": "Endocrine",
    "sourceIds": [
      "l-dka"
    ]
  },
  {
    "id": "polyuria",
    "term": "Polyuria",
    "definition": "Excessive urine production.",
    "category": "Endocrine",
    "sourceIds": [
      "l-dka"
    ]
  },
  {
    "id": "polydipsia",
    "term": "Polydipsia",
    "definition": "Excessive thirst.",
    "category": "Endocrine",
    "sourceIds": [
      "l-dka"
    ]
  },
  {
    "id": "preeclampsia",
    "term": "Preeclampsia",
    "definition": "A pregnancy-associated hypertensive disorder with proteinuria or other organ involvement; it may appear postpartum.",
    "category": "Obstetrics",
    "sourceIds": [
      "l-preclamp"
    ]
  },
  {
    "id": "eclampsia",
    "term": "Eclampsia",
    "definition": "Seizures associated with a hypertensive pregnancy disorder, after alternative causes are considered.",
    "category": "Obstetrics",
    "sourceIds": [
      "l-preclamp"
    ]
  },
  {
    "id": "postpartum",
    "term": "Postpartum",
    "definition": "The period after childbirth.",
    "category": "Obstetrics",
    "sourceIds": [
      "l-ob"
    ]
  },
  {
    "id": "hellp-syndrome",
    "term": "HELLP syndrome",
    "definition": "A serious obstetric syndrome involving hemolysis, elevated liver enzymes, and low platelets.",
    "category": "Obstetrics",
    "sourceIds": [
      "l-preclamp"
    ]
  },
  {
    "id": "neonate",
    "term": "Neonate",
    "definition": "An infant in the first 28 days after birth.",
    "category": "Pediatrics",
    "sourceIds": [
      "l-neonatal"
    ]
  },
  {
    "id": "retractions",
    "term": "Retractions",
    "definition": "Inward movement of soft chest tissue during inspiration, indicating increased breathing effort.",
    "category": "Pediatrics",
    "sourceIds": [
      "l-rsymp"
    ]
  },
  {
    "id": "nasal-flaring",
    "term": "Nasal flaring",
    "definition": "Widening of the nostrils during breathing, a possible sign of respiratory distress.",
    "category": "Pediatrics",
    "sourceIds": [
      "l-rsymp"
    ]
  },
  {
    "id": "respiratory-arrest",
    "term": "Respiratory arrest",
    "definition": "Cessation of effective breathing; a pulse may initially remain present.",
    "category": "Pediatrics",
    "sourceIds": [
      "l-pbls"
    ]
  },
  {
    "id": "opioid-antagonist",
    "term": "Opioid antagonist",
    "definition": "A drug that blocks opioid receptor effects, including opioid-induced respiratory depression.",
    "category": "Toxicology",
    "sourceIds": [
      "l-naloxone"
    ]
  },
  {
    "id": "miosis",
    "term": "Miosis",
    "definition": "Constriction of the pupils.",
    "category": "Toxicology",
    "sourceIds": [
      "l-naloxone"
    ]
  },
  {
    "id": "carboxyhemoglobin",
    "term": "Carboxyhemoglobin",
    "definition": "Hemoglobin bound to carbon monoxide, impairing oxygen transport and release.",
    "category": "Toxicology",
    "sourceIds": [
      "l-co"
    ]
  },
  {
    "id": "rhabdomyolysis",
    "term": "Rhabdomyolysis",
    "definition": "Skeletal muscle breakdown releasing cellular contents that can injure kidneys and disturb electrolytes.",
    "category": "Toxicology",
    "sourceIds": [
      "l-heat"
    ]
  },
  {
    "id": "heat-stroke",
    "term": "Heat stroke",
    "definition": "A severe heat illness marked by dangerous hyperthermia and central nervous system dysfunction.",
    "category": "Environmental",
    "sourceIds": [
      "l-heat"
    ]
  },
  {
    "id": "drowning",
    "term": "Drowning",
    "definition": "Respiratory impairment caused by submersion or immersion in liquid.",
    "category": "Environmental",
    "sourceIds": [
      "l-drowning"
    ]
  },
  {
    "id": "scope-of-practice",
    "term": "Scope of practice",
    "definition": "The boundaries of care a clinician is legally permitted to provide.",
    "category": "Operations",
    "sourceIds": [
      "l-scope"
    ]
  },
  {
    "id": "credentialing",
    "term": "Credentialing",
    "definition": "Authorization by an EMS medical director or organization to perform specific clinical care.",
    "category": "Operations",
    "sourceIds": [
      "l-scope"
    ]
  },
  {
    "id": "standard-precautions",
    "term": "Standard precautions",
    "definition": "Infection prevention practices used for every patient, selected according to anticipated exposure.",
    "category": "Operations",
    "sourceIds": [
      "l-infection"
    ]
  },
  {
    "id": "closed-loop-communication",
    "term": "Closed-loop communication",
    "definition": "A message is sent, repeated back, and confirmed so the team shares the same instruction.",
    "category": "Operations",
    "sourceIds": [
      "l-team"
    ]
  },
  {
    "id": "handoff",
    "term": "Handoff",
    "definition": "An organized transfer of clinical information and responsibility to the next caregiver.",
    "category": "Operations",
    "sourceIds": [
      "l-team"
    ]
  },
  {
    "id": "primary-assessment",
    "term": "Primary assessment",
    "definition": "A rapid evaluation that identifies immediate threats and guides urgent treatment.",
    "category": "Assessment",
    "sourceIds": [
      "l-education"
    ]
  },
  {
    "id": "pertinent-negative",
    "term": "Pertinent negative",
    "definition": "An absent finding that helps evaluate a suspected diagnosis.",
    "category": "Assessment",
    "sourceIds": [
      "l-assessment"
    ]
  },
  {
    "id": "reassessment",
    "term": "Reassessment",
    "definition": "Repeating key observations to detect deterioration and evaluate the response to treatment.",
    "category": "Assessment",
    "sourceIds": [
      "l-education"
    ]
  }
];

export const questions = [
  {
    "id": "q01",
    "category": "Airway",
    "question": "A patient is somnolent with shallow breathing despite a normal oxygen saturation on supplemental oxygen. What remains a concern?",
    "options": [
      "Hypercapnic respiratory failure",
      "Adequate ventilation is proven",
      "Only anxiety",
      "A normal saturation excludes illness"
    ],
    "answer": 0,
    "explanation": "Supplemental oxygen can improve saturation while ventilation remains inadequate and carbon dioxide accumulates.",
    "sourceIds": [
      "l-rfail"
    ]
  },
  {
    "id": "q02",
    "category": "Airway",
    "question": "Which finding most strongly suggests worsening respiratory failure?",
    "options": [
      "Increasing tidal volume with less effort",
      "Normal mentation after therapy",
      "Declining responsiveness with labored breathing",
      "Comfortable speech in complete sentences"
    ],
    "answer": 2,
    "explanation": "Progressive drowsiness or confusion can reflect inadequate oxygen delivery or rising carbon dioxide.",
    "sourceIds": [
      "l-rsymp"
    ]
  },
  {
    "id": "q03",
    "category": "Airway",
    "question": "What distinguishes oxygenation from ventilation?",
    "options": [
      "They are interchangeable",
      "Oxygenation concerns oxygen transfer; ventilation concerns air movement",
      "Ventilation only describes pulse oximetry",
      "Oxygenation measures exhaled carbon dioxide"
    ],
    "answer": 1,
    "explanation": "These processes are related but different. Assess both oxygen transfer and effective movement of air.",
    "sourceIds": [
      "l-rfail"
    ]
  },
  {
    "id": "q04",
    "category": "Airway",
    "question": "Which combination is compatible with an asthma exacerbation?",
    "options": [
      "Isolated pedal edema without respiratory symptoms",
      "New unilateral weakness and facial droop",
      "Focal abdominal pain without respiratory symptoms",
      "Wheeze, cough, chest tightness and dyspnea"
    ],
    "answer": 3,
    "explanation": "Asthma commonly produces episodic cough, wheeze and chest tightness; other conditions can cause similar symptoms.",
    "sourceIds": [
      "l-asthma"
    ]
  },
  {
    "id": "q05",
    "category": "Airway",
    "question": "Why may exhalation be difficult in emphysema?",
    "options": [
      "Alveolar wall damage reduces elastic recoil",
      "Airway resistance falls during exhalation",
      "Surfactant replaces the need for exhalation",
      "The pulmonary veins fail to close"
    ],
    "answer": 0,
    "explanation": "Damaged air sacs do not recoil effectively, making it harder to move air out.",
    "sourceIds": [
      "l-copd"
    ]
  },
  {
    "id": "q06",
    "category": "Cardiology",
    "question": "An adult is unresponsive, has only gasps, and no definite pulse is identified within 10 seconds. What takes priority?",
    "options": [
      "A complete history",
      "Immediate CPR and defibrillator use",
      "A long rhythm strip",
      "Transport before compressions"
    ],
    "answer": 1,
    "explanation": "Agonal gasps are abnormal breathing. Begin resuscitation promptly when cardiac arrest is suspected.",
    "sourceIds": [
      "l-bls"
    ]
  },
  {
    "id": "q07",
    "category": "Cardiology",
    "question": "Which cardiac arrest rhythm is shockable?",
    "options": [
      "Asystole",
      "Organized electrical activity without a pulse",
      "Ventricular fibrillation",
      "Sinus rhythm with a pulse"
    ],
    "answer": 2,
    "explanation": "VF and pulseless VT require defibrillation with high-quality CPR.",
    "sourceIds": [
      "aha-als"
    ]
  },
  {
    "id": "q08",
    "category": "Cardiology",
    "question": "Which statement about heart attack symptoms is accurate?",
    "options": [
      "Chest discomfort must be severe",
      "A normal appearance excludes infarction",
      "Symptoms occur only during exercise",
      "Symptoms may include dyspnea, nausea or unusual fatigue"
    ],
    "answer": 3,
    "explanation": "Myocardial infarction may have mild or less obvious symptoms. Chest pain is common but not universal.",
    "sourceIds": [
      "l-mi"
    ]
  },
  {
    "id": "q09",
    "category": "Cardiology",
    "question": "Which vessel normally carries oxygen-poor blood away from the heart?",
    "options": [
      "Pulmonary artery",
      "Pulmonary vein",
      "Aorta",
      "Coronary artery"
    ],
    "answer": 0,
    "explanation": "The right ventricle pumps blood through the pulmonary artery to the lungs.",
    "sourceIds": [
      "l-flow"
    ]
  },
  {
    "id": "q10",
    "category": "Cardiology",
    "question": "Which finding must be assessed after a rhythm becomes organized during resuscitation?",
    "options": [
      "Whether all P waves look identical",
      "Whether circulation has returned",
      "Whether the monitor alarm is quiet",
      "Whether the strip fits on one page"
    ],
    "answer": 1,
    "explanation": "An organized rhythm alone does not prove ROSC. Confirm perfusion and continue appropriate resuscitation or post-arrest care.",
    "sourceIds": [
      "l-post"
    ]
  },
  {
    "id": "q11",
    "category": "Shock",
    "question": "Which presentation should raise suspicion for sepsis?",
    "options": [
      "Stable chronic pain without recent change",
      "A localized healed wound without systemic symptoms",
      "Suspected infection with new confusion and rapid breathing",
      "A mild cough with normal mentation and breathing"
    ],
    "answer": 2,
    "explanation": "Infection accompanied by acute systemic deterioration requires urgent evaluation; fever need not be present.",
    "sourceIds": [
      "l-sepsis"
    ]
  },
  {
    "id": "q12",
    "category": "Shock",
    "question": "What is the core problem in cardiogenic shock?",
    "options": [
      "Loss of all electrical activity",
      "An isolated low oxygen reading",
      "Excess insulin",
      "Insufficient pumping by the heart"
    ],
    "answer": 3,
    "explanation": "Pump failure reduces blood flow to organs, even when circulating volume is present.",
    "sourceIds": [
      "l-cshock"
    ]
  },
  {
    "id": "q13",
    "category": "Shock",
    "question": "A patient with suspected infection becomes hypotensive. What is the best interpretation?",
    "options": [
      "Possible sepsis requiring urgent assessment and treatment",
      "Proof that no infection exists",
      "A finding that can wait for a fever",
      "A definitive diagnosis of hemorrhage"
    ],
    "answer": 0,
    "explanation": "Hypotension with possible infection is concerning. Evaluate promptly and follow the local sepsis pathway.",
    "sourceIds": [
      "l-sepsis-care"
    ]
  },
  {
    "id": "q14",
    "category": "Shock",
    "question": "Which statement about sepsis is correct?",
    "options": [
      "It occurs only in hospitals",
      "It can develop from an infection in anyone",
      "It always requires a high fever",
      "It affects only the lungs"
    ],
    "answer": 1,
    "explanation": "Sepsis can occur across age groups and from different infection sources; its clinical presentation varies.",
    "sourceIds": [
      "l-sepsis"
    ]
  },
  {
    "id": "q15",
    "category": "Neurology",
    "question": "Sudden imbalance, vision change and slurred speech should prompt which concern?",
    "options": [
      "A benign cause can be assumed if weakness is absent",
      "A stroke screen is unnecessary without facial droop",
      "Possible stroke",
      "A normal blood pressure excludes an acute brain event"
    ],
    "answer": 2,
    "explanation": "Stroke may affect balance and vision as well as facial movement, strength and speech.",
    "sourceIds": [
      "l-stroke"
    ]
  },
  {
    "id": "q16",
    "category": "Neurology",
    "question": "Stroke-like deficits resolve before arrival. What is the best next interpretation?",
    "options": [
      "The event was harmless",
      "The patient cannot have vascular disease",
      "No assessment is needed",
      "Possible TIA still requires urgent evaluation"
    ],
    "answer": 3,
    "explanation": "Transient neurological symptoms can indicate a serious vascular event even when the examination improves.",
    "sourceIds": [
      "l-stroke"
    ]
  },
  {
    "id": "q17",
    "category": "Neurology",
    "question": "During a generalized convulsive seizure, which action is appropriate?",
    "options": [
      "Protect the patient from nearby hazards and time the event",
      "Force the jaw open",
      "Restrain every limb firmly",
      "Give oral water immediately"
    ],
    "answer": 0,
    "explanation": "Reduce injury risk and track duration. Do not put objects in the mouth or forcefully restrain movements.",
    "sourceIds": [
      "l-seizure"
    ]
  },
  {
    "id": "q18",
    "category": "Neurology",
    "question": "Which statement about seizures is accurate?",
    "options": [
      "Every seizure causes full-body shaking",
      "Some cause staring or altered awareness without convulsions",
      "Every seizure proves epilepsy",
      "Awareness is always preserved"
    ],
    "answer": 1,
    "explanation": "Seizure manifestations depend on involved brain networks and may be subtle.",
    "sourceIds": [
      "l-seizure-types"
    ]
  },
  {
    "id": "q19",
    "category": "Neurology",
    "question": "After a head injury, which development is a danger sign?",
    "options": [
      "Mild discomfort that is steadily improving",
      "Alertness remaining at baseline",
      "Repeated vomiting and worsening drowsiness",
      "An isolated superficial abrasion with normal mentation"
    ],
    "answer": 2,
    "explanation": "Repeated vomiting, worsening mental status or unequal pupils after trauma warrant emergency evaluation.",
    "sourceIds": [
      "l-tbi"
    ]
  },
  {
    "id": "q20",
    "category": "Trauma",
    "question": "A limb wound is causing life-threatening bleeding. Which tools directly address hemorrhage?",
    "options": [
      "Ice alone",
      "An ECG alone",
      "Oral fluids alone",
      "Pressure, appropriate packing and a tourniquet when indicated"
    ],
    "answer": 3,
    "explanation": "Hemorrhage control requires mechanical control at the bleeding site using the appropriate technique.",
    "sourceIds": [
      "l-bleed"
    ]
  },
  {
    "id": "q21",
    "category": "Trauma",
    "question": "What is the purpose of field trauma triage?",
    "options": [
      "Select the appropriate trauma destination based on injury risk",
      "Diagnose every injury in the field",
      "Replace the primary assessment",
      "Send every patient to the same hospital"
    ],
    "answer": 0,
    "explanation": "Triage combines clinical findings and injury characteristics to guide destination within the regional trauma system.",
    "sourceIds": [
      "l-triage"
    ]
  },
  {
    "id": "q22",
    "category": "Trauma",
    "question": "An injured older adult takes an anticoagulant. Why does this matter?",
    "options": [
      "It guarantees no bleeding",
      "It can increase concern for significant bleeding after injury",
      "It eliminates the need for history",
      "It makes all injuries minor"
    ],
    "answer": 1,
    "explanation": "Medication history can change injury risk assessment and transport decisions.",
    "sourceIds": [
      "l-triage"
    ]
  },
  {
    "id": "q23",
    "category": "Trauma",
    "question": "A patient seemed well immediately after a head injury. Which statement is accurate?",
    "options": [
      "Later symptoms cannot occur",
      "Concussion always causes immediate coma",
      "Symptoms can emerge later",
      "Only a skull fracture affects brain function"
    ],
    "answer": 2,
    "explanation": "Some concussion symptoms appear after a delay. Reassessment and clear handoff matter.",
    "sourceIds": [
      "l-tbi"
    ]
  },
  {
    "id": "q24",
    "category": "Endocrine",
    "question": "An unconscious patient has confirmed hypoglycemia. Which route is unsafe?",
    "options": [
      "A protocol-directed parenteral route",
      "IV treatment when authorized",
      "IM glucagon when indicated",
      "Oral glucose placed in an unprotected airway"
    ],
    "answer": 3,
    "explanation": "Oral carbohydrate requires the ability to swallow safely. Use the local severe-hypoglycemia pathway.",
    "sourceIds": [
      "l-hypo"
    ]
  },
  {
    "id": "q25",
    "category": "Endocrine",
    "question": "Which pattern is compatible with diabetic ketoacidosis?",
    "options": [
      "Thirst, frequent urination, vomiting and deep breathing",
      "Wheeze and isolated urticaria after an allergen",
      "Sudden focal weakness without metabolic findings",
      "Unresponsiveness with an isolated normal glucose reading"
    ],
    "answer": 0,
    "explanation": "Insulin deficiency promotes ketone production. Fluid loss and metabolic acidosis contribute to the presentation.",
    "sourceIds": [
      "l-dka"
    ]
  },
  {
    "id": "q26",
    "category": "Endocrine",
    "question": "After treating low glucose, what is important?",
    "options": [
      "Assume recurrence is impossible",
      "Recheck glucose and clinical response",
      "Stop all observation immediately",
      "Judge success only by pupil size"
    ],
    "answer": 1,
    "explanation": "Improvement should be confirmed. Low glucose can recur, and persistent symptoms require further assessment.",
    "sourceIds": [
      "l-hypo"
    ]
  },
  {
    "id": "q27",
    "category": "Endocrine",
    "question": "Which statement about DKA is correct?",
    "options": [
      "It occurs only in diagnosed type 1 diabetes",
      "It never causes dehydration",
      "It can also occur in type 2 diabetes",
      "It is simply a normal response to exercise"
    ],
    "answer": 2,
    "explanation": "DKA is most common in type 1 diabetes, but people with type 2 diabetes can also develop it.",
    "sourceIds": [
      "l-dka"
    ]
  },
  {
    "id": "q28",
    "category": "Obstetrics",
    "question": "A postpartum patient reports severe headache and vision changes. What is the best response?",
    "options": [
      "Dismiss symptoms because delivery is complete",
      "Wait for a routine visit if there is no bleeding",
      "Assume sleep loss is the only possible cause",
      "Assess urgently for pregnancy-related complications"
    ],
    "answer": 3,
    "explanation": "Serious complications may begin after delivery. Ask about recent pregnancy and assess promptly.",
    "sourceIds": [
      "l-ob"
    ]
  },
  {
    "id": "q29",
    "category": "Obstetrics",
    "question": "What differentiates eclampsia from preeclampsia?",
    "options": [
      "Associated seizures",
      "New hypertension without organ findings",
      "Proteinuria without neurological symptoms",
      "Dependent edema without other findings"
    ],
    "answer": 0,
    "explanation": "Eclampsia involves seizures associated with the hypertensive pregnancy disorder; other seizure causes must also be considered.",
    "sourceIds": [
      "l-preclamp"
    ]
  },
  {
    "id": "q30",
    "category": "Obstetrics",
    "question": "Which history detail remains relevant when a patient delivered several months ago?",
    "options": [
      "Only pregnancy complications that required surgery",
      "Pregnancy and delivery within the past year",
      "Only whether delivery was vaginal or cesarean",
      "Pregnancy history is no longer relevant"
    ],
    "answer": 1,
    "explanation": "Some pregnancy-related complications occur after delivery. Communicate the timing to the receiving team.",
    "sourceIds": [
      "l-ob"
    ]
  },
  {
    "id": "q31",
    "category": "Pediatrics",
    "question": "A child with respiratory distress becomes bradycardic and poorly perfused. What needs immediate attention?",
    "options": [
      "A prolonged medication history before breathing support",
      "Atropine for every slow pediatric pulse",
      "Oxygenation and ventilation with resuscitation as indicated",
      "Observation until the rhythm changes"
    ],
    "answer": 2,
    "explanation": "Pediatric deterioration often follows respiratory failure. Correct inadequate breathing while following the pediatric resuscitation pathway.",
    "sourceIds": [
      "l-pals"
    ]
  },
  {
    "id": "q32",
    "category": "Pediatrics",
    "question": "Why must breaths accompany CPR for most pediatric arrests?",
    "options": [
      "Chest compressions cannot generate pediatric blood flow",
      "All pediatric arrests are primary VF",
      "Airway procedures should delay all compressions",
      "Respiratory causes are common"
    ],
    "answer": 3,
    "explanation": "Ventilation is especially important because pediatric arrest commonly follows respiratory compromise.",
    "sourceIds": [
      "l-pbls"
    ]
  },
  {
    "id": "q33",
    "category": "Pediatrics",
    "question": "A newborn is apneic after initial warming, drying and positioning. What is the central resuscitation priority?",
    "options": [
      "Effective ventilation",
      "Routine oral feeding",
      "Chest compressions before assessing heart rate",
      "Waiting for a color change"
    ],
    "answer": 0,
    "explanation": "Effective lung ventilation is the key initial intervention for an apneic newborn; subsequent steps depend on heart rate and response.",
    "sourceIds": [
      "l-neonatal"
    ]
  },
  {
    "id": "q34",
    "category": "Pediatrics",
    "question": "After a fluid intervention in pediatric shock, what should guide the next step?",
    "options": [
      "Repeat the same volume indefinitely",
      "Reassess perfusion and signs of fluid overload",
      "Ignore breathing changes",
      "Use adult assumptions without adjustment"
    ],
    "answer": 1,
    "explanation": "Pediatric fluid therapy requires frequent reassessment, including breathing and signs that additional volume may be harmful.",
    "sourceIds": [
      "l-pals"
    ]
  },
  {
    "id": "q35",
    "category": "Toxicology",
    "question": "A suspected opioid overdose patient has a pulse but is not breathing effectively. What is the priority?",
    "options": [
      "Wait for laboratory confirmation",
      "Seek a full drug history first",
      "Support ventilation and give naloxone as indicated",
      "Delay care until pupils are pinpoint"
    ],
    "answer": 2,
    "explanation": "Treat respiratory failure immediately. Naloxone complements airway and breathing support.",
    "sourceIds": [
      "aha-special"
    ]
  },
  {
    "id": "q36",
    "category": "Toxicology",
    "question": "Which observation should raise suspicion for carbon monoxide exposure?",
    "options": [
      "One patient with longstanding seasonal symptoms",
      "A room that feels comfortable despite a running heater",
      "One patient with an isolated localized injury",
      "Several people in one space develop headache and nausea"
    ],
    "answer": 3,
    "explanation": "A shared exposure and similar symptoms among multiple people are important scene clues.",
    "sourceIds": [
      "l-co"
    ]
  },
  {
    "id": "q37",
    "category": "Toxicology",
    "question": "Can a normal conventional pulse oximeter reading exclude carbon monoxide poisoning?",
    "options": [
      "No, standard pulse oximetry may be misleading",
      "Yes, in every case",
      "Only if the patient has a headache",
      "Yes, if the pulse is regular"
    ],
    "answer": 0,
    "explanation": "Conventional pulse oximeters do not reliably distinguish carboxyhemoglobin. Interpret the exposure history and symptoms.",
    "sourceIds": [
      "l-co"
    ]
  },
  {
    "id": "q38",
    "category": "Environmental",
    "question": "Which finding most strongly separates heat stroke from uncomplicated heat exhaustion?",
    "options": [
      "Thirst alone",
      "New central nervous system dysfunction",
      "Sweating alone",
      "Muscle cramps alone"
    ],
    "answer": 1,
    "explanation": "Altered mental status, seizures or coma with heat illness indicate a dangerous emergency requiring rapid cooling.",
    "sourceIds": [
      "l-heat"
    ]
  },
  {
    "id": "q39",
    "category": "Toxicology",
    "question": "Naloxone reverses which primary drug effect?",
    "options": [
      "All causes of coma",
      "Every sedative overdose",
      "Opioid receptor effects",
      "Carbon monoxide binding"
    ],
    "answer": 2,
    "explanation": "Naloxone is an opioid antagonist. Other causes of altered consciousness or respiratory failure still need assessment.",
    "sourceIds": [
      "l-naloxone"
    ]
  },
  {
    "id": "q40",
    "category": "Operations",
    "question": "Which practice best closes the communication loop?",
    "options": [
      "A task assigned to whoever happens to hear it",
      "A medication order acknowledged only by silence",
      "Two simultaneous orders with no confirmation",
      "A named recipient repeats the order and the sender confirms"
    ],
    "answer": 3,
    "explanation": "Read-back and confirmation help detect misunderstandings before an action occurs.",
    "sourceIds": [
      "l-team"
    ]
  },
  {
    "id": "q41",
    "category": "Operations",
    "question": "When should standard precautions apply?",
    "options": [
      "During every patient encounter",
      "Only with a known positive test",
      "Only when blood is visible",
      "Only in hospital"
    ],
    "answer": 0,
    "explanation": "Use standard precautions for all patients, with PPE selected for the anticipated exposure.",
    "sourceIds": [
      "l-infection"
    ]
  },
  {
    "id": "q42",
    "category": "Assessment",
    "question": "Which statement best describes reassessment?",
    "options": [
      "Repeating every question without purpose",
      "Checking for change and response to treatment",
      "Waiting until the next shift",
      "Recording only the first vital signs"
    ],
    "answer": 1,
    "explanation": "Trend clinical findings and confirm whether treatment improved, worsened or failed to change the patient's condition.",
    "sourceIds": [
      "l-education"
    ]
  },
  {
    "id": "q43",
    "category": "Operations",
    "question": "National certification alone means which of the following?",
    "options": [
      "Every procedure is authorized everywhere",
      "Local credentialing is unnecessary",
      "Additional state licensure and local authorization may be required",
      "Medical direction is optional"
    ],
    "answer": 2,
    "explanation": "Certification, licensure and credentialing have different roles. Follow the requirements governing your practice.",
    "sourceIds": [
      "l-scope"
    ]
  },
  {
    "id": "q44",
    "category": "Assessment",
    "question": "In OPQRST, what does the quality of a symptom describe?",
    "options": [
      "How accurate the vital signs appear",
      "Only how long the symptom has lasted",
      "Whether treatment has already been given",
      "What the symptom feels like to the patient"
    ],
    "answer": 3,
    "explanation": "Descriptions such as pressure, burning or stabbing characterize quality. Use the patient's own words.",
    "sourceIds": [
      "l-assessment"
    ]
  },
  {
    "id": "q45",
    "category": "Operations",
    "question": "What belongs in a useful clinical handoff?",
    "options": [
      "The main concern, key findings, treatment and response",
      "Only the patient's demographics and destination",
      "Only the most recent set of vital signs",
      "Every scene conversation in chronological order"
    ],
    "answer": 0,
    "explanation": "A structured handoff highlights relevant information and transfers responsibility clearly.",
    "sourceIds": [
      "l-team"
    ]
  }
];

export const guides = [
  {
    "id": "airway",
    "title": "Airway and ventilation",
    "category": "Airway",
    "summary": "Evaluate breathing effort, oxygenation and ventilation as separate questions.",
    "sections": [
      {
        "title": "Recognize",
        "points": [
          "Look for inadequate air movement, exhaustion, declining responsiveness and abnormal breathing sounds.",
          "A reassuring saturation on oxygen does not exclude carbon dioxide retention."
        ]
      },
      {
        "title": "Support",
        "points": [
          "Open the airway and provide effective ventilation when breathing is inadequate. Check chest rise and the mask seal.",
          "In adult cardiac arrest, confirm and monitor an endotracheal tube using continuous waveform capnography plus clinical assessment."
        ]
      },
      {
        "title": "Reassess",
        "points": [
          "Follow mental status, respiratory effort, oxygen saturation and available capnography trends.",
          "Repeated airway attempts must not displace effective oxygenation or high-quality CPR."
        ]
      }
    ],
    "sourceIds": [
      "l-rfail",
      "l-rsymp",
      "l-bls",
      "aha-als"
    ]
  },
  {
    "id": "shock",
    "title": "Shock and sepsis",
    "category": "Shock",
    "summary": "Recognize poor organ perfusion and identify the likely cause.",
    "sections": [
      {
        "title": "Recognize",
        "points": [
          "Combine mental status, skin findings, pulses and blood pressure trends.",
          "Suspected infection with confusion, rapid breathing or circulatory deterioration should trigger a sepsis assessment."
        ]
      },
      {
        "title": "Differentiate",
        "points": [
          "Consider bleeding or fluid loss, pump failure, vasodilation and obstruction as possible mechanisms.",
          "Cardiogenic shock reflects inadequate heart pumping; treatment depends on the cause."
        ]
      },
      {
        "title": "Act",
        "points": [
          "Support oxygenation and ventilation, treat immediately reversible threats and initiate the local shock pathway.",
          "Reassess frequently and communicate suspected sepsis early to the receiving team."
        ]
      }
    ],
    "sourceIds": [
      "l-education",
      "l-sepsis",
      "l-sepsis-care",
      "l-cshock"
    ]
  },
  {
    "id": "trauma",
    "title": "Trauma priorities",
    "category": "Trauma",
    "summary": "Find immediate threats, control bleeding and select the appropriate destination.",
    "sections": [
      {
        "title": "Control hemorrhage",
        "points": [
          "Use direct pressure, appropriate wound packing and a tourniquet for indicated extremity bleeding.",
          "Confirm that bleeding is controlled after the intervention."
        ]
      },
      {
        "title": "Look beyond the obvious",
        "points": [
          "Assess breathing, circulation and neurological status alongside the visible injury.",
          "Worsening headache, repeated vomiting, unequal pupils or declining responsiveness after head injury are danger signs."
        ]
      },
      {
        "title": "Transport",
        "points": [
          "Use regional field-triage criteria, including physiology, injury patterns and special considerations.",
          "Give the receiving team the mechanism, key findings, treatments, response and trends."
        ]
      }
    ],
    "sourceIds": [
      "l-bleed",
      "l-tbi",
      "l-triage",
      "l-team"
    ]
  },
  {
    "id": "neuro",
    "title": "Neurological emergencies",
    "category": "Neurology",
    "summary": "Recognize acute change and look for reversible causes while organizing timely care.",
    "sections": [
      {
        "title": "Stroke assessment",
        "points": [
          "Sudden imbalance, vision change, weakness or speech difficulty can indicate stroke.",
          "Document onset or the last time the patient was known to be at baseline; improving symptoms still require urgent evaluation."
        ]
      },
      {
        "title": "Seizure assessment",
        "points": [
          "Time the event and protect the patient from injury.",
          "Seizures may present as altered awareness without visible convulsions."
        ]
      },
      {
        "title": "Reassess",
        "points": [
          "Check breathing and glucose when indicated. Follow mental status and focal findings over time.",
          "Do not force objects into the mouth or restrain convulsive movements."
        ]
      }
    ],
    "sourceIds": [
      "l-stroke",
      "l-seizure",
      "l-seizure-types",
      "l-hypo",
      "l-assessment"
    ]
  },
  {
    "id": "endocrine",
    "title": "Glucose emergencies",
    "category": "Endocrine",
    "summary": "Check the measured glucose and the patient's ability to protect the airway.",
    "sections": [
      {
        "title": "Low glucose",
        "points": [
          "Treat confirmed hypoglycemia using the appropriate local pathway.",
          "Oral carbohydrate requires an alert patient who can swallow safely. Recheck glucose and clinical response."
        ]
      },
      {
        "title": "Hyperglycemic crisis",
        "points": [
          "Thirst, polyuria, dehydration, vomiting and deep breathing can accompany DKA.",
          "DKA involves inadequate insulin and acid-producing ketones; it can occur in type 1 or type 2 diabetes."
        ]
      },
      {
        "title": "History",
        "points": [
          "Ask about insulin or other diabetes medicines, recent illness, intake and treatment already given.",
          "Support breathing and perfusion and communicate the glucose trend."
        ]
      }
    ],
    "sourceIds": [
      "l-hypo",
      "l-dka",
      "l-assessment"
    ]
  },
  {
    "id": "ob",
    "title": "Pregnancy and postpartum care",
    "category": "Obstetrics",
    "summary": "Ask about pregnancy and recent delivery during assessment of acute illness.",
    "sections": [
      {
        "title": "Warning signs",
        "points": [
          "Severe headache, visual change, chest pain, dyspnea, heavy bleeding or severe abdominal pain require urgent assessment.",
          "Pregnancy-related complications can occur after delivery."
        ]
      },
      {
        "title": "Hypertensive emergencies",
        "points": [
          "Preeclampsia can involve organ injury. Seizures associated with the disorder indicate eclampsia.",
          "Postpartum onset is possible even after a pregnancy without recognized hypertension."
        ]
      },
      {
        "title": "Prepare",
        "points": [
          "Support maternal airway, breathing and circulation; obtain early obstetric resources for an unstable patient.",
          "If birth occurs, maintain newborn warmth and assess breathing and heart rate."
        ]
      }
    ],
    "sourceIds": [
      "l-ob",
      "l-preclamp",
      "l-neonatal",
      "l-education"
    ]
  },
  {
    "id": "pediatrics",
    "title": "Pediatric assessment and resuscitation",
    "category": "Pediatrics",
    "summary": "Identify respiratory compromise early and use age-appropriate assessment.",
    "sections": [
      {
        "title": "First impression",
        "points": [
          "Observe responsiveness, breathing effort and skin perfusion while approaching the child.",
          "Retractions, nasal flaring and declining interaction can signal deterioration."
        ]
      },
      {
        "title": "Treat and reassess",
        "points": [
          "Correct inadequate oxygenation and ventilation promptly. Respiratory failure can progress to bradycardia and arrest.",
          "Reassess perfusion and signs of overload after each fluid intervention."
        ]
      },
      {
        "title": "Resuscitation",
        "points": [
          "Include effective breaths during pediatric CPR.",
          "Newborn resuscitation has a distinct sequence centered on effective ventilation and heart rate response."
        ]
      }
    ],
    "sourceIds": [
      "l-education",
      "l-rsymp",
      "l-pals",
      "l-pbls",
      "l-neonatal"
    ]
  },
  {
    "id": "toxicology",
    "title": "Poisoning and exposure",
    "category": "Toxicology",
    "summary": "Consider the scene, exposure route and breathing before the substance name.",
    "sections": [
      {
        "title": "Opioids",
        "points": [
          "Support inadequate breathing immediately and administer naloxone when indicated.",
          "Continue observation; response to naloxone does not exclude other illness or co-exposures."
        ]
      },
      {
        "title": "Carbon monoxide",
        "points": [
          "Multiple people with headache or nausea in one space suggest a shared exposure.",
          "A normal standard pulse oximeter reading does not exclude CO poisoning."
        ]
      },
      {
        "title": "Heat and other exposures",
        "points": [
          "Heat illness with altered mental status requires rapid cooling and emergency care.",
          "Obtain substance, timing and route information when safe; use medical control and toxicology resources for substance-specific treatment."
        ]
      }
    ],
    "sourceIds": [
      "aha-special",
      "l-naloxone",
      "l-co",
      "l-heat",
      "l-education"
    ]
  },
  {
    "id": "assessment",
    "title": "A reliable patient assessment",
    "category": "Assessment",
    "summary": "Use a consistent structure while treating immediate threats as they appear.",
    "sections": [
      {
        "title": "Primary assessment",
        "points": [
          "Form a general impression and assess responsiveness, airway, breathing and circulation.",
          "Decide what requires immediate intervention or rapid transport."
        ]
      },
      {
        "title": "History and examination",
        "points": [
          "SAMPLE organizes symptoms, allergies, medicines, history, intake and preceding events.",
          "OPQRST explores onset, provoking or relieving factors, quality, location or radiation, severity and time."
        ]
      },
      {
        "title": "Reassessment",
        "points": [
          "Compare current findings with the initial examination and the patient's baseline.",
          "After treatment, document what changed and communicate important trends."
        ]
      }
    ],
    "sourceIds": [
      "l-education",
      "l-assessment"
    ]
  },
  {
    "id": "operations",
    "title": "Teamwork and safe operations",
    "category": "Operations",
    "summary": "Reliable care depends on communication, exposure prevention and clear responsibilities.",
    "sections": [
      {
        "title": "Communication",
        "points": [
          "Assign tasks to named team members and use read-back with confirmation.",
          "Handoffs should identify the main problem, relevant findings, interventions and response."
        ]
      },
      {
        "title": "Infection prevention",
        "points": [
          "Use standard precautions for every patient. Select PPE for the anticipated exposure.",
          "Perform hand hygiene and clean shared equipment appropriately."
        ]
      },
      {
        "title": "Practice boundaries",
        "points": [
          "National educational expectations do not independently authorize clinical practice.",
          "Follow applicable state licensure, medical direction, local credentialing and agency protocols."
        ]
      }
    ],
    "sourceIds": [
      "l-team",
      "l-infection",
      "l-scope"
    ]
  }
];

export const rhythms = [
  {
    "id": "sinus",
    "name": "Normal sinus rhythm",
    "bpm": 75,
    "shape": "sinus",
    "rate": "60–100/min",
    "regularity": "Regular",
    "pWaves": "One before each QRS",
    "pr": "0.12–0.20 s",
    "qrs": "Under 0.12 s",
    "explanation": "The sinus node initiates each normally conducted beat.",
    "clues": [
      "Consistent P-wave shape",
      "Consistent PR interval"
    ],
    "priorities": [
      "Assess the patient and presenting complaint"
    ],
    "pitfall": "A normal rhythm does not establish normal perfusion or exclude ischemia.",
    "sourceIds": [
      "ecg-normal",
      "aha-slow"
    ]
  },
  {
    "id": "sinus-brady",
    "name": "Sinus bradycardia",
    "bpm": 44,
    "shape": "sinus",
    "rate": "Below 60/min",
    "regularity": "Regular",
    "pWaves": "One before each QRS",
    "pr": "Usually 0.12–0.20 s",
    "qrs": "Usually under 0.12 s",
    "explanation": "Sinus activation is slower than the usual adult resting rate.",
    "clues": [
      "Sinus P waves",
      "Longer R–R spacing"
    ],
    "priorities": [
      "Check perfusion and symptoms",
      "Treat compromise under the bradycardia pathway"
    ],
    "pitfall": "A fit, asymptomatic patient may not need rate correction; ACLS compromise often occurs below 50/min.",
    "sourceIds": [
      "ecg-normal",
      "aha-slow",
      "aha-2025-brady"
    ]
  },
  {
    "id": "sinus-tachy",
    "name": "Sinus tachycardia",
    "bpm": 120,
    "shape": "sinus",
    "rate": "Above 100/min",
    "regularity": "Usually regular",
    "pWaves": "One before each QRS; may merge with T",
    "pr": "Usually consistent",
    "qrs": "Usually under 0.12 s",
    "explanation": "A faster sinus rhythm often reflects another problem.",
    "clues": [
      "Sinus P waves",
      "Rate varies with the cause"
    ],
    "priorities": [
      "Search for hypoxia, pain, fever or volume loss",
      "Treat the underlying problem"
    ],
    "pitfall": "Do not cardiovert compensatory sinus tachycardia.",
    "sourceIds": [
      "ecg-normal",
      "aha-fast"
    ]
  },
  {
    "id": "sinus-arrhythmia",
    "name": "Respiratory sinus arrhythmia",
    "bpm": 72,
    "shape": "sinus",
    "rate": "Varies around the baseline rate",
    "regularity": "Cyclic variation",
    "pWaves": "Consistent sinus P waves",
    "pr": "Consistent",
    "qrs": "Usually under 0.12 s",
    "explanation": "Sinus rate changes with breathing, commonly in healthy younger people.",
    "clues": [
      "Speeds with inspiration",
      "Slows with expiration"
    ],
    "priorities": [
      "Correlate with breathing and symptoms"
    ],
    "pitfall": "Irregular timing with recognizable P waves differs from atrial fibrillation.",
    "sourceIds": [
      "aha-other-rhythms",
      "ecg-normal"
    ]
  },
  {
    "id": "af",
    "name": "Atrial fibrillation",
    "bpm": 112,
    "shape": "af",
    "rate": "Variable ventricular rate",
    "regularity": "Irregularly irregular",
    "pWaves": "No discrete repeating P waves",
    "pr": "Not measurable",
    "qrs": "Usually narrow; may be wide",
    "explanation": "Disorganized atrial activity produces an irregular ventricular response.",
    "clues": [
      "Unequal R–R intervals",
      "No repeating P-wave pattern"
    ],
    "priorities": [
      "Assess stability and obtain 12-lead ECG",
      "Cardiovert if the rhythm causes instability"
    ],
    "pitfall": "An irregular wide tachycardia can represent preexcited AF; avoid reflex AV-nodal blocking treatment.",
    "sourceIds": [
      "ecg-supraventricular",
      "aha-2025-tachy",
      "aha-als"
    ]
  },
  {
    "id": "flutter",
    "name": "Atrial flutter",
    "bpm": 150,
    "shape": "flutter",
    "rate": "Often 150/min ventricular with 2:1 conduction",
    "regularity": "Regular with fixed conduction; otherwise variable",
    "pWaves": "Flutter waves replace sinus P waves",
    "pr": "Not a conventional PR",
    "qrs": "Usually under 0.12 s",
    "explanation": "Rapid organized atrial activity may conduct every second beat.",
    "clues": [
      "Repeated flutter waves",
      "Consider 2:1 flutter near 150/min"
    ],
    "priorities": [
      "Evaluate perfusion and capture a 12-lead",
      "Cardiovert when causing instability"
    ],
    "pitfall": "Adenosine may expose flutter activity without terminating flutter.",
    "sourceIds": [
      "ecg-supraventricular",
      "aha-other-rhythms",
      "aha-2025-tachy"
    ]
  },
  {
    "id": "svt",
    "name": "Regular narrow complex SVT",
    "bpm": 180,
    "shape": "svt",
    "rate": "Often 150–250/min",
    "regularity": "Very regular",
    "pWaves": "Often hidden or retrograde",
    "pr": "Often not measurable",
    "qrs": "Under 0.12 s in this example",
    "explanation": "Reentry can create a sudden sustained narrow tachycardia.",
    "clues": [
      "Abrupt onset",
      "Very regular narrow complexes"
    ],
    "priorities": [
      "Stable: vagal maneuver, then protocol-directed adenosine",
      "Unstable from tachycardia: synchronized cardioversion"
    ],
    "pitfall": "SVT is a category; do not label every fast narrow rhythm as AVNRT.",
    "sourceIds": [
      "ecg-supraventricular",
      "aha-2025-tachy"
    ]
  },
  {
    "id": "vt",
    "name": "Monomorphic ventricular tachycardia",
    "bpm": 170,
    "shape": "vt",
    "rate": "Usually above 100/min",
    "regularity": "Usually regular",
    "pWaves": "Often dissociated or obscured",
    "pr": "No consistent atrial relationship",
    "qrs": "At least 0.12 s",
    "explanation": "Ventricular activation produces repetitive broad complexes with a similar shape.",
    "clues": [
      "Uniform wide complexes",
      "Capture or fusion beats may occur"
    ],
    "priorities": [
      "Check for a pulse",
      "Pulseless: defibrillation and CPR; unstable with pulse: synchronized cardioversion"
    ],
    "pitfall": "An awake patient can still have VT.",
    "sourceIds": [
      "ecg-ventricular",
      "aha-fast",
      "aha-2025-tachy",
      "aha-2025-arrest"
    ]
  },
  {
    "id": "torsades",
    "name": "Polymorphic VT / torsades pattern",
    "bpm": 220,
    "shape": "torsades",
    "rate": "Very rapid; often above 200/min",
    "regularity": "Variable",
    "pWaves": "Not reliably identifiable",
    "pr": "Not measurable",
    "qrs": "Wide, changing shape",
    "explanation": "The twisting example suggests torsades only when the preceding QT is prolonged.",
    "clues": [
      "Changing axis and amplitude",
      "Inspect a preceding strip for long QT"
    ],
    "priorities": [
      "Sustained polymorphic VT: immediate unsynchronized shock",
      "For long-QT torsades, consider protocol-directed magnesium and correct causes"
    ],
    "pitfall": "Polymorphic VT with normal QT is not torsades; synchronization is unreliable.",
    "sourceIds": [
      "ecg-ventricular",
      "aha-als"
    ]
  },
  {
    "id": "vf",
    "name": "Ventricular fibrillation",
    "bpm": 0,
    "shape": "vf",
    "rate": "No organized ventricular rate",
    "regularity": "Chaotic",
    "pWaves": "Absent",
    "pr": "Not measurable",
    "qrs": "No discrete QRS",
    "explanation": "Disorganized ventricular activity cannot sustain effective cardiac output.",
    "clues": [
      "Chaotic baseline",
      "No organized complexes"
    ],
    "priorities": [
      "Confirm arrest clinically",
      "Start CPR and defibrillate promptly"
    ],
    "pitfall": "Movement or disconnected electrodes can imitate a lethal rhythm; assess the patient.",
    "sourceIds": [
      "aha-vf",
      "aha-2025-arrest"
    ]
  },
  {
    "id": "asystole",
    "name": "Asystole",
    "bpm": 0,
    "shape": "asystole",
    "rate": "No ventricular activity",
    "regularity": "No organized rhythm",
    "pWaves": "Usually absent; isolated P waves can persist",
    "pr": "Not measurable",
    "qrs": "Absent",
    "explanation": "No detectable ventricular depolarization appears on the monitor.",
    "clues": [
      "Check leads and gain",
      "Confirm in another lead"
    ],
    "priorities": [
      "CPR, epinephrine and reversible causes",
      "No shock unless the rhythm becomes shockable"
    ],
    "pitfall": "A disconnected lead is not a diagnosis of asystole.",
    "sourceIds": [
      "aha-2025-arrest",
      "aha-als"
    ]
  },
  {
    "id": "first-degree",
    "name": "First degree AV block",
    "bpm": 70,
    "shape": "firstdegree",
    "rate": "Depends on underlying rhythm",
    "regularity": "Usually regular",
    "pWaves": "Every P conducts",
    "pr": "Over 0.20 s, consistent",
    "qrs": "Narrow or wide",
    "explanation": "Atrial impulses reach the ventricles after a prolonged delay.",
    "clues": [
      "Long PR",
      "No dropped QRS"
    ],
    "priorities": [
      "Assess symptoms and possible medication effects"
    ],
    "pitfall": "A long PR alone does not indicate immediate pacing.",
    "sourceIds": [
      "ecg-blocks",
      "aha-2025-brady"
    ]
  },
  {
    "id": "mobitz-1",
    "name": "Second degree AV block: Mobitz I",
    "bpm": 60,
    "shape": "mobitz1",
    "rate": "Ventricular rate below atrial rate",
    "regularity": "Grouped beating",
    "pWaves": "One P eventually fails to conduct",
    "pr": "Lengthens before dropped QRS",
    "qrs": "Usually narrow",
    "explanation": "Progressive conduction delay ends in a blocked beat.",
    "clues": [
      "Progressively longer PR",
      "Dropped QRS"
    ],
    "priorities": [
      "Assess perfusion; treat symptomatic bradycardia"
    ],
    "pitfall": "A 2:1 strip alone cannot reliably distinguish Mobitz I from II.",
    "sourceIds": [
      "ecg-blocks",
      "aha-2025-brady"
    ]
  },
  {
    "id": "mobitz-2",
    "name": "Second degree AV block: Mobitz II",
    "bpm": 50,
    "shape": "mobitz2",
    "rate": "Ventricular rate below atrial rate",
    "regularity": "Intermittent dropped beats",
    "pWaves": "Some P waves do not conduct",
    "pr": "Constant in conducted beats",
    "qrs": "Often wide",
    "explanation": "Atrial conduction fails without preceding PR prolongation.",
    "clues": [
      "Fixed conducted PR",
      "Abrupt dropped QRS"
    ],
    "priorities": [
      "Monitor closely and prepare pacing for compromise"
    ],
    "pitfall": "May progress to complete block; avoid delays when perfusion worsens.",
    "sourceIds": [
      "ecg-blocks",
      "aha-2025-brady"
    ]
  },
  {
    "id": "complete-block",
    "name": "Third degree AV block",
    "bpm": 34,
    "shape": "completeblock",
    "rate": "Ventricular escape commonly 20–60/min",
    "regularity": "Atrial and ventricular rhythms individually regular",
    "pWaves": "Independent of QRS",
    "pr": "Variable; no conduction relationship",
    "qrs": "Narrow junctional or wide ventricular escape",
    "explanation": "Atrial impulses do not conduct to the ventricles.",
    "clues": [
      "Independent P and QRS rhythms",
      "Atrial rate exceeds ventricular rate"
    ],
    "priorities": [
      "Assess perfusion and arrange urgent pacing for compromise"
    ],
    "pitfall": "AV dissociation has other causes; interpret atrial and ventricular rates together.",
    "sourceIds": [
      "ecg-blocks",
      "aha-2025-brady"
    ]
  },
  {
    "id": "pea",
    "name": "Pulseless electrical activity",
    "bpm": 65,
    "shape": "pea",
    "rate": "Any organized electrical rate",
    "regularity": "Depends on underlying rhythm",
    "pWaves": "May be present",
    "pr": "Depends on underlying rhythm",
    "qrs": "May be narrow or wide",
    "explanation": "PEA means organized electrical activity without a clinically detectable pulse. This strip alone cannot diagnose PEA.",
    "clues": [
      "Unresponsive patient",
      "No definite pulse within a brief assessment"
    ],
    "priorities": [
      "CPR, early epinephrine and reversible causes",
      "Do not defibrillate an organized nonshockable rhythm"
    ],
    "pitfall": "The same displayed rhythm could occur in a patient with a pulse.",
    "sourceIds": [
      "aha-2025-arrest",
      "l-bls"
    ]
  }
];

export const cases = [
  {
    "id": "witnessed-arrest",
    "title": "Collapse at the gym",
    "category": "Resuscitation",
    "difficulty": "Advanced",
    "dispatch": "A bystander reports an adult collapsed. The scene is safe.",
    "patient": {
      "age": 56,
      "sex": "Male",
      "complaint": "Unresponsive after collapse",
      "history": "Hypertension",
      "medications": "Lisinopril",
      "allergies": "Unknown"
    },
    "initial": {
      "hr": 0,
      "sbp": 0,
      "dbp": 0,
      "rr": 0,
      "spo2": null,
      "etco2": null,
      "temp": 36.8,
      "glucose": 112,
      "gcs": 3,
      "rhythm": "vf"
    },
    "steps": [
      {
        "prompt": "You find gasping and no definite carotid pulse within 10 seconds. First priority?",
        "options": [
          {
            "label": "Start CPR; partner brings the defibrillator",
            "correct": true,
            "explanation": "Gasping is not normal breathing. Begin resuscitation immediately.",
            "effect": {}
          },
          {
            "label": "Finish the medication history",
            "correct": false,
            "explanation": "This delays treatment of cardiac arrest.",
            "effect": {}
          },
          {
            "label": "Treat gasps as adequate breathing",
            "correct": false,
            "explanation": "Agonal gasps do not provide effective ventilation.",
            "effect": {}
          }
        ]
      },
      {
        "prompt": "Pads show VF during a brief analysis. What next?",
        "options": [
          {
            "label": "Deliver an unsynchronized shock, then resume CPR",
            "correct": true,
            "explanation": "VF requires prompt defibrillation and minimal compression interruption.",
            "effect": {}
          },
          {
            "label": "Select synchronized cardioversion",
            "correct": false,
            "explanation": "VF provides no reliable QRS synchronization target.",
            "effect": {}
          },
          {
            "label": "Wait for IV access before shocking",
            "correct": false,
            "explanation": "Vascular access must not delay defibrillation.",
            "effect": {}
          }
        ]
      },
      {
        "prompt": "VF persists after the second shock. CPR is underway and IV access is ready.",
        "options": [
          {
            "label": "Give epinephrine 1 mg IV; continue the algorithm",
            "correct": true,
            "explanation": "Repeat every 3–5 minutes while preserving CPR quality.",
            "effect": {}
          },
          {
            "label": "Pause CPR until the drug circulates",
            "correct": false,
            "explanation": "Compressions are needed to circulate administered medication.",
            "effect": {}
          },
          {
            "label": "Give the adult anaphylaxis IM regimen",
            "correct": false,
            "explanation": "Cardiac arrest uses a different dose and route.",
            "effect": {}
          }
        ]
      },
      {
        "prompt": "At the next planned check, an organized rhythm appears. A definite pulse is present.",
        "options": [
          {
            "label": "Begin post-arrest airway, oxygenation and perfusion care",
            "correct": true,
            "explanation": "Confirm circulation clinically and transition to post-arrest care.",
            "effect": {}
          },
          {
            "label": "Shock the organized rhythm",
            "correct": false,
            "explanation": "A perfusing organized rhythm is not a defibrillation indication.",
            "effect": {}
          },
          {
            "label": "Remove monitoring because circulation returned",
            "correct": false,
            "explanation": "Re-arrest and respiratory failure remain possible.",
            "effect": {}
          }
        ],
        "onEnter": {
          "hr": 94,
          "sbp": 98,
          "dbp": 62,
          "rr": 6,
          "spo2": 92,
          "etco2": 39,
          "rhythm": "sinus",
          "gcs": 3
        }
      }
    ],
    "debrief": [
      "Identify arrest clinically; use the monitor to guide shock decisions.",
      "ROSC requires ongoing reassessment."
    ],
    "sourceIds": [
      "l-bls",
      "aha-2025-arrest",
      "aha-vf"
    ],
    "mode": "scripted",
    "note": "Fictional training case. Vitals are scripted teaching states, not predicted treatment responses. Follow local protocols in practice."
  },
  {
    "id": "symptomatic-brady",
    "title": "Too slow to perfuse",
    "category": "Cardiology",
    "difficulty": "Intermediate",
    "dispatch": "An older adult is faint and clammy at home.",
    "patient": {
      "age": 72,
      "sex": "Female",
      "complaint": "Dizziness and near-syncope",
      "history": "Coronary artery disease",
      "medications": "Metoprolol",
      "allergies": "No known allergies"
    },
    "initial": {
      "hr": 34,
      "sbp": 76,
      "dbp": 42,
      "rr": 20,
      "spo2": 90,
      "etco2": 31,
      "temp": 36.6,
      "glucose": 108,
      "gcs": 14,
      "rhythm": "sinus-brady"
    },
    "steps": [
      {
        "prompt": "A pulse is present. The patient is confused, hypotensive and breathing shallowly.",
        "options": [
          {
            "label": "Support airway and breathing; apply monitor and pads",
            "correct": true,
            "explanation": "Address oxygenation while assessing the rhythm and perfusion.",
            "effect": {
              "spo2": 96
            }
          },
          {
            "label": "Begin compressions for any rate below 40",
            "correct": false,
            "explanation": "A slow rate alone does not establish cardiac arrest.",
            "effect": {}
          },
          {
            "label": "Ask the patient to walk to the stretcher",
            "correct": false,
            "explanation": "Near-syncope and shock make exertion inappropriate.",
            "effect": {}
          }
        ]
      },
      {
        "prompt": "Sinus bradycardia persists with poor perfusion. IV access is ready.",
        "options": [
          {
            "label": "Give atropine 1 mg IV under protocol",
            "correct": true,
            "explanation": "Initial adult dose is 1 mg; prepare escalation concurrently.",
            "effect": {}
          },
          {
            "label": "Give adenosine",
            "correct": false,
            "explanation": "Adenosine slows AV conduction and does not treat this problem.",
            "effect": {}
          },
          {
            "label": "Observe without preparing treatment",
            "correct": false,
            "explanation": "The bradycardia is accompanied by cardiopulmonary compromise.",
            "effect": {}
          }
        ]
      },
      {
        "prompt": "Atropine has not improved perfusion. What should the team prepare?",
        "options": [
          {
            "label": "Transcutaneous pacing and/or a protocol-directed vasoactive infusion",
            "correct": true,
            "explanation": "Escalate persistent compromise after atropine.",
            "effect": {}
          },
          {
            "label": "Synchronized cardioversion",
            "correct": false,
            "explanation": "Cardioversion is not treatment for sinus bradycardia.",
            "effect": {}
          },
          {
            "label": "Delay escalation until the full history is complete",
            "correct": false,
            "explanation": "Persistent shock requires timely support.",
            "effect": {}
          }
        ]
      },
      {
        "prompt": "Pacing spikes and wide complexes appear. How do you confirm effective pacing?",
        "options": [
          {
            "label": "Verify a corresponding pulse and improved perfusion",
            "correct": true,
            "explanation": "Electrical capture alone does not prove mechanical capture.",
            "effect": {
              "hr": 70,
              "sbp": 106,
              "dbp": 64,
              "gcs": 15,
              "rhythm": "paced"
            }
          },
          {
            "label": "Use the displayed rate alone",
            "correct": false,
            "explanation": "A monitor can display electrical activity without effective circulation.",
            "effect": {}
          },
          {
            "label": "Assume muscle twitching means cardiac capture",
            "correct": false,
            "explanation": "Skeletal muscle contraction does not establish a perfusing beat.",
            "effect": {}
          }
        ],
        "onEnter": {
          "hr": 70,
          "rhythm": "paced"
        }
      }
    ],
    "debrief": [
      "Treat perfusion, not an isolated rate.",
      "Verify both electrical and mechanical capture."
    ],
    "sourceIds": [
      "aha-2025-brady",
      "aha-als",
      "aha-slow"
    ],
    "mode": "scripted",
    "note": "Fictional training case. Vitals are scripted teaching states, not predicted treatment responses. Follow local protocols in practice."
  },
  {
    "id": "asthma-fatigue",
    "title": "The wheeze gets quieter",
    "category": "Respiratory",
    "difficulty": "Advanced",
    "dispatch": "A student with asthma is struggling to breathe.",
    "patient": {
      "age": 22,
      "sex": "Female",
      "complaint": "Severe dyspnea",
      "history": "Asthma; previous hospital admission",
      "medications": "Albuterol inhaler",
      "allergies": "No known allergies"
    },
    "initial": {
      "hr": 132,
      "sbp": 138,
      "dbp": 82,
      "rr": 34,
      "spo2": 87,
      "etco2": 28,
      "temp": 37,
      "glucose": 104,
      "gcs": 15,
      "rhythm": "sinus-tachy"
    },
    "steps": [
      {
        "prompt": "She speaks one word at a time with diffuse wheeze and accessory muscle use.",
        "options": [
          {
            "label": "Assess ventilation; provide oxygen and protocol bronchodilator",
            "correct": true,
            "explanation": "Severe distress needs treatment and ongoing respiratory assessment.",
            "effect": {
              "spo2": 92
            }
          },
          {
            "label": "Treat this as anxiety alone",
            "correct": false,
            "explanation": "Hypoxemia and marked work of breathing indicate physiological compromise.",
            "effect": {}
          },
          {
            "label": "Wait until transport before treating",
            "correct": false,
            "explanation": "Airway and breathing interventions should not be delayed.",
            "effect": {}
          }
        ]
      },
      {
        "prompt": "Despite initial treatment, she becomes drowsy. Breath sounds diminish; ETCO₂ rises to 52.",
        "options": [
          {
            "label": "Recognize fatigue and prepare assisted ventilation",
            "correct": true,
            "explanation": "Quieter breath sounds can reflect worsening airflow, not improvement.",
            "effect": {}
          },
          {
            "label": "Stop treatment because the wheeze is quieter",
            "correct": false,
            "explanation": "Drowsiness with poor air movement is a deterioration.",
            "effect": {}
          },
          {
            "label": "Give a sedative for apparent anxiety",
            "correct": false,
            "explanation": "Further respiratory depression can worsen inadequate ventilation.",
            "effect": {}
          }
        ],
        "onEnter": {
          "gcs": 12,
          "rr": 10,
          "etco2": 52,
          "spo2": 88
        }
      },
      {
        "prompt": "Breathing is now ineffective. A pulse remains present.",
        "options": [
          {
            "label": "Assist ventilation, allowing time for exhalation",
            "correct": true,
            "explanation": "Rapid excessive ventilation worsens air trapping.",
            "effect": {
              "spo2": 94,
              "etco2": 46
            }
          },
          {
            "label": "Ventilate as quickly as possible",
            "correct": false,
            "explanation": "Inadequate exhalation can increase intrathoracic pressure.",
            "effect": {}
          },
          {
            "label": "Wait for cardiac arrest before assisting",
            "correct": false,
            "explanation": "Treat respiratory failure before circulation is lost.",
            "effect": {}
          }
        ]
      },
      {
        "prompt": "Air movement improves during assisted ventilation. What is the next priority?",
        "options": [
          {
            "label": "Continue reassessment and urgent transport with early notification",
            "correct": true,
            "explanation": "Severe asthma needs continued support and definitive care.",
            "effect": {}
          },
          {
            "label": "Leave the patient after one better saturation",
            "correct": false,
            "explanation": "A single improved reading does not establish recovery.",
            "effect": {}
          },
          {
            "label": "Remove capnography because oxygenation improved",
            "correct": false,
            "explanation": "Oxygenation and ventilation provide different information.",
            "effect": {}
          }
        ]
      }
    ],
    "debrief": [
      "Compare air movement, mental status and ventilation together.",
      "Avoid rapid ventilation that traps air."
    ],
    "sourceIds": [
      "nhlbi-asthma",
      "aha-special"
    ],
    "mode": "scripted",
    "note": "Fictional training case. Vitals are scripted teaching states, not predicted treatment responses. Follow local protocols in practice."
  },
  {
    "id": "anaphylaxis",
    "title": "More than a rash",
    "category": "Allergy",
    "difficulty": "Intermediate",
    "dispatch": "A restaurant patron became unwell after eating.",
    "patient": {
      "age": 31,
      "sex": "Male",
      "complaint": "Throat tightness, wheeze and lightheadedness",
      "history": "Peanut allergy",
      "medications": "Epinephrine autoinjector, not available",
      "allergies": "Peanuts"
    },
    "initial": {
      "hr": 124,
      "sbp": 78,
      "dbp": 44,
      "rr": 28,
      "spo2": 90,
      "etco2": 30,
      "temp": 36.9,
      "glucose": 118,
      "gcs": 14,
      "rhythm": "sinus-tachy"
    },
    "steps": [
      {
        "prompt": "Hives, hoarseness, wheeze and hypotension follow a likely allergen exposure.",
        "options": [
          {
            "label": "Recognize anaphylaxis; give IM epinephrine promptly",
            "correct": true,
            "explanation": "Airway, breathing and circulation involvement requires immediate treatment.",
            "effect": {}
          },
          {
            "label": "Wait for the rash to spread",
            "correct": false,
            "explanation": "Severity is determined by physiological compromise, not rash size.",
            "effect": {}
          },
          {
            "label": "Give an antihistamine before epinephrine",
            "correct": false,
            "explanation": "Antihistamines do not correct shock or airway compromise.",
            "effect": {}
          }
        ]
      },
      {
        "prompt": "Your partner prepares epinephrine under local protocol. What should happen alongside it?",
        "options": [
          {
            "label": "Support airway and oxygenation; keep the patient from standing",
            "correct": true,
            "explanation": "Provide supportive care while the first-line medication is given.",
            "effect": {}
          },
          {
            "label": "Walk the patient outside for fresh air",
            "correct": false,
            "explanation": "Standing or walking can worsen circulatory collapse.",
            "effect": {}
          },
          {
            "label": "Offer water for throat tightness",
            "correct": false,
            "explanation": "Airway involvement makes oral intake inappropriate.",
            "effect": {}
          }
        ]
      },
      {
        "prompt": "Respiratory and circulatory compromise persist after initial treatment.",
        "options": [
          {
            "label": "Reassess; repeat IM epinephrine and give IV fluid per protocol",
            "correct": true,
            "explanation": "Persistent anaphylaxis may require repeated treatment and escalation.",
            "effect": {
              "sbp": 96,
              "dbp": 58,
              "spo2": 95,
              "gcs": 15
            }
          },
          {
            "label": "Give an undiluted IV epinephrine bolus for the rash",
            "correct": false,
            "explanation": "IV epinephrine errors can cause severe harm; follow specialist protocols.",
            "effect": {}
          },
          {
            "label": "Stop reassessing once an IV is established",
            "correct": false,
            "explanation": "Access does not establish reversal of shock.",
            "effect": {}
          }
        ]
      },
      {
        "prompt": "The patient is improving. Which disposition is appropriate?",
        "options": [
          {
            "label": "Transport with continued monitoring and a treatment handoff",
            "correct": true,
            "explanation": "Symptoms can recur; improvement does not remove observation needs.",
            "effect": {}
          },
          {
            "label": "Leave once the hives fade",
            "correct": false,
            "explanation": "Skin improvement does not exclude recurrent serious symptoms.",
            "effect": {}
          },
          {
            "label": "Allow the patient to drive to an urgent care",
            "correct": false,
            "explanation": "Recent airway compromise and shock require monitored care.",
            "effect": {}
          }
        ]
      }
    ],
    "debrief": [
      "IM epinephrine is first-line treatment for anaphylaxis with a pulse.",
      "Cardiac arrest follows the arrest pathway instead."
    ],
    "sourceIds": [
      "rcuk-anaphylaxis"
    ],
    "mode": "scripted",
    "note": "Fictional training case. Vitals are scripted teaching states, not predicted treatment responses. Follow local protocols in practice."
  },
  {
    "id": "stroke-clock",
    "title": "When were they last well?",
    "category": "Neurology",
    "difficulty": "Intermediate",
    "dispatch": "A family member reports sudden difficulty speaking.",
    "patient": {
      "age": 68,
      "sex": "Female",
      "complaint": "Right-sided weakness and speech difficulty",
      "history": "Hypertension; atrial fibrillation",
      "medications": "Apixaban, amlodipine",
      "allergies": "No known allergies"
    },
    "initial": {
      "hr": 96,
      "sbp": 182,
      "dbp": 98,
      "rr": 18,
      "spo2": 97,
      "etco2": 36,
      "temp": 36.7,
      "glucose": 112,
      "gcs": 14,
      "rhythm": "af"
    },
    "steps": [
      {
        "prompt": "The airway is patent and breathing is adequate. What should you establish next?",
        "options": [
          {
            "label": "Perform a stroke screen and verify blood glucose",
            "correct": true,
            "explanation": "Focal deficits suggest stroke; hypoglycemia is a treatable mimic.",
            "effect": {}
          },
          {
            "label": "Treat the speech problem as intoxication",
            "correct": false,
            "explanation": "Sudden focal deficits require urgent neurological evaluation.",
            "effect": {}
          },
          {
            "label": "Wait to see whether weakness resolves",
            "correct": false,
            "explanation": "Delay can reduce access to time-sensitive treatment.",
            "effect": {}
          }
        ]
      },
      {
        "prompt": "Glucose is 112 mg/dL. The family found her impaired at 09:10; last normal was 08:20.",
        "options": [
          {
            "label": "Document 08:20 as last known well",
            "correct": true,
            "explanation": "Last known well differs from the discovery time.",
            "effect": {}
          },
          {
            "label": "Use 09:10 as last known well",
            "correct": false,
            "explanation": "That is when symptoms were found, not when normal function was confirmed.",
            "effect": {}
          },
          {
            "label": "Use the time the ambulance arrived",
            "correct": false,
            "explanation": "Arrival time cannot substitute for symptom chronology.",
            "effect": {}
          }
        ]
      },
      {
        "prompt": "Weakness and aphasia persist. What should guide destination and notification?",
        "options": [
          {
            "label": "Use the regional stroke destination pathway and prealert",
            "correct": true,
            "explanation": "Transport promptly to an appropriate stroke-capable facility.",
            "effect": {}
          },
          {
            "label": "Delay for a complete medication inventory",
            "correct": false,
            "explanation": "Gather key information without delaying transport.",
            "effect": {}
          },
          {
            "label": "Give aspirin to every suspected stroke patient",
            "correct": false,
            "explanation": "Hemorrhage has not been excluded.",
            "effect": {}
          }
        ]
      },
      {
        "prompt": "During transport, her speech improves. How should you update the plan?",
        "options": [
          {
            "label": "Continue evaluation and report the changing examination",
            "correct": true,
            "explanation": "Resolving symptoms still require urgent assessment.",
            "effect": {}
          },
          {
            "label": "Cancel the stroke alert without consulting the receiving team",
            "correct": false,
            "explanation": "Improvement does not exclude an important cerebrovascular event.",
            "effect": {}
          },
          {
            "label": "Give food and drink as a recovery test",
            "correct": false,
            "explanation": "Swallowing safety has not been established.",
            "effect": {}
          }
        ]
      }
    ],
    "debrief": [
      "Record last known well separately from discovery time.",
      "A resolving deficit still needs urgent evaluation."
    ],
    "sourceIds": [
      "l-stroke",
      "aha-first-aid",
      "asa-aspirin",
      "asa-ems",
      "asa-stroke-alert"
    ],
    "mode": "scripted",
    "note": "Fictional training case. Vitals are scripted teaching states, not predicted treatment responses. Follow local protocols in practice."
  },
  {
    "id": "hypoglycemia",
    "title": "The missed breakfast",
    "category": "Endocrine",
    "difficulty": "Foundation",
    "dispatch": "A coworker finds an adult confused and sweating.",
    "patient": {
      "age": 43,
      "sex": "Male",
      "complaint": "Confusion and diaphoresis",
      "history": "Type 1 diabetes; skipped breakfast",
      "medications": "Insulin",
      "allergies": "No known allergies"
    },
    "initial": {
      "hr": 110,
      "sbp": 128,
      "dbp": 76,
      "rr": 18,
      "spo2": 98,
      "etco2": 37,
      "temp": 36.4,
      "glucose": 38,
      "gcs": 11,
      "rhythm": "sinus-tachy"
    },
    "steps": [
      {
        "prompt": "The patient has a pulse and adequate breathing but cannot follow swallowing instructions.",
        "options": [
          {
            "label": "Protect the airway and confirm the glucose result",
            "correct": true,
            "explanation": "Assess immediate threats while checking a reversible cause.",
            "effect": {}
          },
          {
            "label": "Pour a sweet drink into the mouth",
            "correct": false,
            "explanation": "Unsafe swallowing creates aspiration risk.",
            "effect": {}
          },
          {
            "label": "Assume insulin makes a low glucose result impossible",
            "correct": false,
            "explanation": "Insulin can cause hypoglycemia.",
            "effect": {}
          }
        ]
      },
      {
        "prompt": "Repeat glucose confirms 38 mg/dL. Which treatment route fits the examination?",
        "options": [
          {
            "label": "Use protocol-directed parenteral glucose therapy",
            "correct": true,
            "explanation": "Severe impairment makes oral glucose unsafe; follow EMS protocol.",
            "effect": {}
          },
          {
            "label": "Give additional insulin",
            "correct": false,
            "explanation": "Insulin would lower glucose further.",
            "effect": {}
          },
          {
            "label": "Give an oral meal before any treatment",
            "correct": false,
            "explanation": "The patient cannot safely swallow.",
            "effect": {}
          }
        ]
      },
      {
        "prompt": "After treatment, glucose is 98 mg/dL and the patient is alert.",
        "options": [
          {
            "label": "Repeat examination; ask about insulin, food and recurrence risks",
            "correct": true,
            "explanation": "A response to glucose does not explain every possible cause.",
            "effect": {}
          },
          {
            "label": "Remove monitoring immediately",
            "correct": false,
            "explanation": "Glucose can fall again.",
            "effect": {}
          },
          {
            "label": "Diagnose intoxication because confusion occurred",
            "correct": false,
            "explanation": "The confirmed low glucose explains an important treatable abnormality.",
            "effect": {}
          }
        ],
        "onEnter": {
          "glucose": 98,
          "gcs": 15,
          "hr": 88
        }
      },
      {
        "prompt": "The patient asks to stay at work. What should happen before disposition?",
        "options": [
          {
            "label": "Recheck glucose and follow the local transport/refusal pathway",
            "correct": true,
            "explanation": "Assess recurrence risk, decision-making capacity and protocol requirements.",
            "effect": {}
          },
          {
            "label": "Automatically clear everyone after one normal reading",
            "correct": false,
            "explanation": "One value does not guarantee sustained recovery.",
            "effect": {}
          },
          {
            "label": "Recommend skipping all future insulin",
            "correct": false,
            "explanation": "Long-term insulin changes require the treating clinician.",
            "effect": {}
          }
        ]
      }
    ],
    "debrief": [
      "Choose glucose treatment based on swallowing safety.",
      "Reassess after improvement and follow local disposition criteria."
    ],
    "sourceIds": [
      "niddk-hypoglycemia",
      "aha-first-aid"
    ],
    "mode": "scripted",
    "note": "Fictional training case. Vitals are scripted teaching states, not predicted treatment responses. Follow local protocols in practice."
  },
  {
    "id": "hemorrhage",
    "title": "Bleeding at the workshop",
    "category": "Trauma",
    "difficulty": "Intermediate",
    "dispatch": "A power tool caused a deep thigh injury. The equipment is now secured.",
    "patient": {
      "age": 35,
      "sex": "Male",
      "complaint": "Heavy bleeding and weakness",
      "history": "No significant history",
      "medications": "None",
      "allergies": "No known allergies"
    },
    "initial": {
      "hr": 138,
      "sbp": 82,
      "dbp": 48,
      "rr": 28,
      "spo2": 96,
      "etco2": 29,
      "temp": 36.1,
      "glucose": 121,
      "gcs": 14,
      "rhythm": "sinus-tachy"
    },
    "steps": [
      {
        "prompt": "There is life-threatening extremity bleeding. What is the immediate priority?",
        "options": [
          {
            "label": "Control hemorrhage; apply pressure and an indicated tourniquet",
            "correct": true,
            "explanation": "Rapid bleeding control addresses an immediate cause of death.",
            "effect": {}
          },
          {
            "label": "Finish a head-to-toe examination first",
            "correct": false,
            "explanation": "The visible life threat needs immediate control.",
            "effect": {}
          },
          {
            "label": "Splint the limb before controlling blood loss",
            "correct": false,
            "explanation": "Splinting does not take priority over major hemorrhage.",
            "effect": {}
          }
        ]
      },
      {
        "prompt": "The tourniquet is in place but bleeding continues.",
        "options": [
          {
            "label": "Correct placement/tightness; add a second if required by training",
            "correct": true,
            "explanation": "Judge effectiveness by control of bleeding.",
            "effect": {}
          },
          {
            "label": "Loosen it to improve comfort",
            "correct": false,
            "explanation": "Loosening can restart life-threatening blood loss.",
            "effect": {}
          },
          {
            "label": "Cover the limb and assume it worked",
            "correct": false,
            "explanation": "Continued bleeding requires action.",
            "effect": {}
          }
        ]
      },
      {
        "prompt": "Bleeding is controlled, but the patient remains cool and hypotensive.",
        "options": [
          {
            "label": "Reassess ABCs, prevent heat loss and expedite trauma transport",
            "correct": true,
            "explanation": "Hemorrhage control does not immediately reverse shock.",
            "effect": {}
          },
          {
            "label": "Give oral fluids while hypotensive",
            "correct": false,
            "explanation": "Oral intake is inappropriate in this injured, compromised patient.",
            "effect": {}
          },
          {
            "label": "Wait on scene for a normal blood pressure",
            "correct": false,
            "explanation": "Definitive hemorrhage care may be needed urgently.",
            "effect": {}
          }
        ]
      },
      {
        "prompt": "You are preparing the receiving-team handoff. Which information matters most?",
        "options": [
          {
            "label": "Report injury, bleeding control, tourniquet time and vital trends",
            "correct": true,
            "explanation": "These details support continuity of trauma care.",
            "effect": {}
          },
          {
            "label": "Remove the tourniquet for the receiving crew to reassess",
            "correct": false,
            "explanation": "Do not restart bleeding during transfer.",
            "effect": {}
          },
          {
            "label": "Report only the latest heart rate",
            "correct": false,
            "explanation": "A single value omits the injury and interventions.",
            "effect": {}
          }
        ]
      }
    ],
    "debrief": [
      "Confirm that bleeding control actually works.",
      "Continue shock care and appropriate trauma transport."
    ],
    "sourceIds": [
      "l-bleed",
      "acs-triage",
      "aha-first-aid"
    ],
    "mode": "scripted",
    "note": "Fictional training case. Vitals are scripted teaching states, not predicted treatment responses. Follow local protocols in practice."
  },
  {
    "id": "opioid-ventilation",
    "title": "A pulse, but barely breathing",
    "category": "Toxicology",
    "difficulty": "Foundation",
    "dispatch": "A friend reports an adult is difficult to wake. Scene hazards have been assessed.",
    "patient": {
      "age": 29,
      "sex": "Female",
      "complaint": "Unresponsive with slow breathing",
      "history": "History unavailable",
      "medications": "Possible opioid exposure",
      "allergies": "Unknown"
    },
    "initial": {
      "hr": 58,
      "sbp": 102,
      "dbp": 66,
      "rr": 4,
      "spo2": 76,
      "etco2": 68,
      "temp": 36.2,
      "glucose": 103,
      "gcs": 6,
      "rhythm": "sinus-brady"
    },
    "steps": [
      {
        "prompt": "A definite pulse is present. Respirations are slow and shallow.",
        "options": [
          {
            "label": "Open the airway and assist ventilation with oxygen",
            "correct": true,
            "explanation": "Inadequate breathing requires immediate support.",
            "effect": {}
          },
          {
            "label": "Wait for naloxone before providing breaths",
            "correct": false,
            "explanation": "Reversal medication must not delay ventilation.",
            "effect": {}
          },
          {
            "label": "Begin compressions solely because she is unresponsive",
            "correct": false,
            "explanation": "The confirmed pulse directs initial treatment toward breathing.",
            "effect": {}
          }
        ]
      },
      {
        "prompt": "The scene and examination suggest opioid toxicity. Ventilation is being supported.",
        "options": [
          {
            "label": "Give naloxone by an authorized route under protocol",
            "correct": true,
            "explanation": "Treat suspected opioid respiratory depression alongside supportive care.",
            "effect": {}
          },
          {
            "label": "Stop ventilation while waiting for the medication",
            "correct": false,
            "explanation": "The patient still needs effective breaths.",
            "effect": {}
          },
          {
            "label": "Assume a normal glucose excludes an overdose",
            "correct": false,
            "explanation": "A glucose check does not exclude poisoning.",
            "effect": {}
          }
        ]
      },
      {
        "prompt": "Breathing improves to 14/min with adequate depth. The patient remains drowsy.",
        "options": [
          {
            "label": "Reassess ventilation, airway protection and oxygenation",
            "correct": true,
            "explanation": "Adequate breathing matters more than abrupt full wakefulness.",
            "effect": {}
          },
          {
            "label": "Keep dosing solely to make the patient fully alert",
            "correct": false,
            "explanation": "Follow protocol and respiratory goals; avoid unnecessary escalation.",
            "effect": {}
          },
          {
            "label": "Remove all monitoring once eyes open",
            "correct": false,
            "explanation": "Respiratory depression can recur.",
            "effect": {}
          }
        ],
        "onEnter": {
          "rr": 14,
          "spo2": 96,
          "etco2": 42,
          "gcs": 12,
          "hr": 78
        }
      },
      {
        "prompt": "Several minutes later, breathing slows again.",
        "options": [
          {
            "label": "Resume needed ventilation and repeat naloxone per protocol",
            "correct": true,
            "explanation": "Naloxone may wear off before the opioid does.",
            "effect": {
              "rr": 14,
              "spo2": 96,
              "etco2": 42,
              "gcs": 12
            }
          },
          {
            "label": "Assume the first dose rules out opioid toxicity",
            "correct": false,
            "explanation": "Recurrent depression is compatible with opioid poisoning.",
            "effect": {}
          },
          {
            "label": "Leave because the patient briefly improved",
            "correct": false,
            "explanation": "Recurrent inadequate breathing requires monitored emergency care.",
            "effect": {}
          }
        ],
        "onEnter": {
          "rr": 6,
          "spo2": 88,
          "etco2": 58,
          "gcs": 8
        }
      }
    ],
    "debrief": [
      "Ventilation comes first in respiratory failure with a pulse.",
      "Monitor for recurrence after naloxone."
    ],
    "sourceIds": [
      "l-bls",
      "aha-special",
      "l-naloxone"
    ],
    "mode": "scripted",
    "note": "Fictional training case. Vitals are scripted teaching states, not predicted treatment responses. Follow local protocols in practice."
  }
];

export const sources = [
  {
    "id": "aha-arrest",
    "title": "AHA 2025 adult cardiac arrest algorithm",
    "url": "https://cpr.heart.org/-/media/CPR-Files/CPR-Guidelines-Files/2025-Accessible/Algorithm-ACLS-CA-LngDscrp-250725-Ed.pdf",
    "organization": "American Heart Association",
    "accessed": "2026-09-15"
  },
  {
    "id": "aha-tachy",
    "title": "AHA 2025 adult tachyarrhythmia algorithm",
    "url": "https://cpr.heart.org/-/media/CPR-Files/CPR-Guidelines-Files/2025-Accessible/Algorithm-ACLS-Tachyarrhythmia-LngDscrp-250726-Ed.pdf",
    "organization": "American Heart Association",
    "accessed": "2026-09-15"
  },
  {
    "id": "aha-brady",
    "title": "AHA 2025 adult bradycardia algorithm",
    "url": "https://cpr.heart.org/-/media/CPR-Files/CPR-Guidelines-Files/2025-Accessible/Algorithm-ACLS-Bradycardia-LngDscrp-250725-Ed.pdf",
    "organization": "American Heart Association",
    "accessed": "2026-09-15"
  },
  {
    "id": "aha-pals-arrest",
    "title": "AHA 2025 pediatric cardiac arrest algorithm",
    "url": "https://cpr.heart.org/-/media/CPR-Files/CPR-Guidelines-Files/2025-Accessible/Algorithm-PALS-CA-LngDscrp-250729-Ed.pdf",
    "organization": "American Heart Association",
    "accessed": "2026-09-15"
  },
  {
    "id": "aha-pals-brady",
    "title": "AHA 2025 pediatric bradycardia algorithm",
    "url": "https://cpr.heart.org/-/media/CPR-Files/CPR-Guidelines-Files/2025-Accessible/Algorithm-PALS-Bradycardia-LngDscrp-250729-Ed.pdf",
    "organization": "American Heart Association",
    "accessed": "2026-09-15"
  },
  {
    "id": "aha-pals-tachy",
    "title": "AHA 2025 pediatric tachyarrhythmia algorithm",
    "url": "https://cpr.heart.org/-/media/CPR-Files/CPR-Guidelines-Files/2025-Accessible/Algorithm-PALS-Tachyarrhythmia-LngDscrp-250729-Ed.pdf",
    "organization": "American Heart Association",
    "accessed": "2026-09-15"
  },
  {
    "id": "aha-als",
    "title": "AHA 2025 adult advanced life support",
    "url": "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-advanced-life-support",
    "organization": "American Heart Association",
    "accessed": "2026-09-15"
  },
  {
    "id": "aha-special",
    "title": "AHA 2025 special circumstances of resuscitation",
    "url": "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-and-pediatric-special-circumstances-of-resuscitation",
    "organization": "American Heart Association",
    "accessed": "2026-09-15"
  },
  {
    "id": "md-2026",
    "title": "Maryland EMS protocols 2026, revised July 20",
    "url": "https://www.miemss.org/home/Portals/0/Docs/Guidelines_Protocols/MD-Medical-Protocols-2026-Hyperlinked-20260720.pdf",
    "organization": "Maryland Institute for Emergency Medical Services Systems",
    "accessed": "2026-09-15"
  },
  {
    "id": "aspirin-label",
    "title": "Aspirin drug information",
    "url": "https://medlineplus.gov/druginfo/meds/a682878.html",
    "organization": "NIH MedlinePlus",
    "accessed": "2026-09-15"
  },
  {
    "id": "ketamine-label",
    "title": "Ketamine injection prescribing information, revised March 2026",
    "url": "https://www.pfizermedical.com/ketamine",
    "organization": "Pfizer",
    "accessed": "2026-09-15"
  },
  {
    "id": "dopamine-label",
    "title": "Dopamine injection prescribing information",
    "url": "https://www.pfizermedical.com/dopamine",
    "organization": "Pfizer",
    "accessed": "2026-09-15"
  },
  {
    "id": "calcium-chloride-label",
    "title": "Calcium chloride injection prescribing information",
    "url": "https://www.pfizermedical.com/calcium-chloride",
    "organization": "Pfizer",
    "accessed": "2026-09-15"
  },
  {
    "id": "epinephrine-label",
    "title": "Adrenalin epinephrine prescribing information",
    "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3b7a4364-668d-4eb2-a20c-04adc35aabe4",
    "organization": "NIH DailyMed / manufacturer prescribing information",
    "accessed": "2026-09-15"
  },
  {
    "id": "atropine-label",
    "title": "Atropine sulfate prescribing information",
    "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=310c8a74-ea24-4357-8099-81e394b1634e",
    "organization": "NIH DailyMed / manufacturer prescribing information",
    "accessed": "2026-09-15"
  },
  {
    "id": "adenosine-label",
    "title": "Adenosine prescribing information",
    "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=546642f2-662f-46cf-9d82-5bb3bdcc7677",
    "organization": "NIH DailyMed / manufacturer prescribing information",
    "accessed": "2026-09-15"
  },
  {
    "id": "amiodarone-label",
    "title": "Nexterone amiodarone prescribing information",
    "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e9108958-b8d7-4fba-87c3-9a32990de551",
    "organization": "NIH DailyMed / manufacturer prescribing information",
    "accessed": "2026-09-15"
  },
  {
    "id": "lidocaine-label",
    "title": "Lidocaine antiarrhythmic injection prescribing information",
    "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f1b26274-a55e-4321-b96c-ce0df830f205",
    "organization": "NIH DailyMed / manufacturer prescribing information",
    "accessed": "2026-09-15"
  },
  {
    "id": "norepinephrine-label",
    "title": "Levophed norepinephrine prescribing information",
    "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c4de72a8-2a75-4984-ce90-e4870226dc12",
    "organization": "NIH DailyMed / manufacturer prescribing information",
    "accessed": "2026-09-15"
  },
  {
    "id": "nitroglycerin-label",
    "title": "Nitrostat nitroglycerin prescribing information",
    "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cc481829-0b5a-4e8a-ab5b-cb44d6d2433b",
    "organization": "NIH DailyMed / manufacturer prescribing information",
    "accessed": "2026-09-15"
  },
  {
    "id": "albuterol-label",
    "title": "Albuterol inhalant prescribing information",
    "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=17858afa-dcdf-4612-b475-3b6baadfb639",
    "organization": "NIH DailyMed / manufacturer prescribing information",
    "accessed": "2026-09-15"
  },
  {
    "id": "ipratropium-label",
    "title": "Ipratropium nebulizer solution prescribing information",
    "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=22479633-624a-4251-ad3c-1dcba5d503fb",
    "organization": "NIH DailyMed / manufacturer prescribing information",
    "accessed": "2026-09-15"
  },
  {
    "id": "magnesium-label",
    "title": "Magnesium sulfate injection prescribing information",
    "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e9c10579-29f3-4889-8881-0626f63968d4",
    "organization": "NIH DailyMed / manufacturer prescribing information",
    "accessed": "2026-09-15"
  },
  {
    "id": "methylprednisolone-label",
    "title": "Solu-Medrol methylprednisolone prescribing information",
    "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd99be87-c8d9-48d6-a8e5-e081052e3f19",
    "organization": "NIH DailyMed / manufacturer prescribing information",
    "accessed": "2026-09-15"
  },
  {
    "id": "dexamethasone-label",
    "title": "Dexamethasone sodium phosphate prescribing information",
    "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4680d517-ed5a-4137-819c-122ee962a464",
    "organization": "NIH DailyMed / manufacturer prescribing information",
    "accessed": "2026-09-15"
  },
  {
    "id": "diphenhydramine-label",
    "title": "Diphenhydramine injection prescribing information",
    "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b39836d7-2d3a-4a0f-88dc-ca230c82d2a1",
    "organization": "NIH DailyMed / manufacturer prescribing information",
    "accessed": "2026-09-15"
  },
  {
    "id": "fentanyl-label",
    "title": "Fentanyl citrate injection prescribing information",
    "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c5d40297-b769-48cc-9f84-f98b7a333507",
    "organization": "NIH DailyMed / manufacturer prescribing information",
    "accessed": "2026-09-15"
  },
  {
    "id": "morphine-label",
    "title": "Morphine sulfate injection prescribing information",
    "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9362eca1-2bc9-4f72-8895-0b9179bfeb2b",
    "organization": "NIH DailyMed / manufacturer prescribing information",
    "accessed": "2026-09-15"
  },
  {
    "id": "midazolam-label",
    "title": "Midazolam injection prescribing information",
    "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1abda8b8-48a8-4995-af86-39220d1aa240",
    "organization": "NIH DailyMed / manufacturer prescribing information",
    "accessed": "2026-09-15"
  },
  {
    "id": "etomidate-label",
    "title": "Etomidate injection prescribing information",
    "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=75467058-da52-48fa-8d4e-e1025ec7d461",
    "organization": "NIH DailyMed / manufacturer prescribing information",
    "accessed": "2026-09-15"
  },
  {
    "id": "rocuronium-label",
    "title": "Rocuronium injection prescribing information",
    "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=818f7cc6-2c3f-1788-e053-2991aa0a4c6a",
    "organization": "NIH DailyMed / manufacturer prescribing information",
    "accessed": "2026-09-15"
  },
  {
    "id": "succinylcholine-label",
    "title": "Succinylcholine injection prescribing information",
    "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ce12d907-eae4-4fba-b85e-170fac1819c6",
    "organization": "NIH DailyMed / manufacturer prescribing information",
    "accessed": "2026-09-15"
  },
  {
    "id": "naloxone-label",
    "title": "Naloxone injection prescribing information",
    "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8535cc84-ad4a-4d67-8480-fb5a2e3406f8",
    "organization": "NIH DailyMed / manufacturer prescribing information",
    "accessed": "2026-09-15"
  },
  {
    "id": "dextrose-label",
    "title": "Dextrose 50% injection prescribing information",
    "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8cf6943f-16e8-4521-863c-09bb0b55e2a9",
    "organization": "NIH DailyMed / manufacturer prescribing information",
    "accessed": "2026-09-15"
  },
  {
    "id": "glucagon-label",
    "title": "Glucagon emergency kit prescribing information",
    "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=15b49500-0aae-4e25-9a1d-709983233cc6",
    "organization": "NIH DailyMed / manufacturer prescribing information",
    "accessed": "2026-09-15"
  },
  {
    "id": "calcium-gluconate-label",
    "title": "Calcium gluconate injection prescribing information",
    "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8b77c3d2-992d-4261-8421-9cfd07328fbf",
    "organization": "NIH DailyMed / manufacturer prescribing information",
    "accessed": "2026-09-15"
  },
  {
    "id": "bicarbonate-label",
    "title": "Sodium bicarbonate injection prescribing information",
    "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e9698a4f-1a95-4f28-a945-e8009d1d6dd4",
    "organization": "NIH DailyMed / manufacturer prescribing information",
    "accessed": "2026-09-15"
  },
  {
    "id": "txa-label",
    "title": "Tranexamic acid injection prescribing information",
    "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6f033f1e-8c78-4c87-b870-6493944315ff",
    "organization": "NIH DailyMed / manufacturer prescribing information",
    "accessed": "2026-09-15"
  },
  {
    "id": "ondansetron-label",
    "title": "Ondansetron injection prescribing information",
    "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1a44601b-c31c-4779-a688-28cc4cc75e8b",
    "organization": "NIH DailyMed / manufacturer prescribing information",
    "accessed": "2026-09-15"
  },
  {
    "id": "l-bls",
    "title": "2025 Adult Basic Life Support",
    "url": "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-basic-life-support",
    "organization": "American Heart Association",
    "accessed": "2026-09-15"
  },
  {
    "id": "l-pals",
    "title": "2025 Pediatric Advanced Life Support",
    "url": "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/pediatric-advanced-life-support",
    "organization": "American Heart Association",
    "accessed": "2026-09-15"
  },
  {
    "id": "l-pbls",
    "title": "2025 Pediatric Basic Life Support",
    "url": "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/pediatric-basic-life-support",
    "organization": "American Heart Association",
    "accessed": "2026-09-15"
  },
  {
    "id": "l-neonatal",
    "title": "2025 Neonatal Resuscitation",
    "url": "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/neonatal-resuscitation",
    "organization": "American Heart Association",
    "accessed": "2026-09-15"
  },
  {
    "id": "l-post",
    "title": "2025 Post-Cardiac Arrest Care",
    "url": "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/post-cardiac-arrest-care",
    "organization": "American Heart Association",
    "accessed": "2026-09-15"
  },
  {
    "id": "l-sepsis",
    "title": "About Sepsis",
    "url": "https://www.cdc.gov/sepsis/about/index.html",
    "organization": "Centers for Disease Control and Prevention",
    "accessed": "2026-09-15"
  },
  {
    "id": "l-sepsis-care",
    "title": "Caring for Patients with Sepsis",
    "url": "https://www.cdc.gov/sepsis/hcp/clinical-care/index.html",
    "organization": "Centers for Disease Control and Prevention",
    "accessed": "2026-09-15"
  },
  {
    "id": "l-stroke",
    "title": "Signs and Symptoms of Stroke",
    "url": "https://www.cdc.gov/stroke/signs-symptoms/index.html",
    "organization": "Centers for Disease Control and Prevention",
    "accessed": "2026-09-15"
  },
  {
    "id": "l-dka",
    "title": "Diabetic Ketoacidosis",
    "url": "https://www.cdc.gov/diabetes/about/diabetic-ketoacidosis.html",
    "organization": "Centers for Disease Control and Prevention",
    "accessed": "2026-09-15"
  },
  {
    "id": "l-hypo",
    "title": "Treatment of Low Blood Sugar",
    "url": "https://www.cdc.gov/diabetes/treatment/treatment-low-blood-sugar-hypoglycemia.html",
    "organization": "Centers for Disease Control and Prevention",
    "accessed": "2026-09-15"
  },
  {
    "id": "l-ob",
    "title": "Urgent Maternal Warning Signs and Symptoms",
    "url": "https://www.cdc.gov/hearher/maternal-warning-signs/index.html",
    "organization": "Centers for Disease Control and Prevention",
    "accessed": "2026-09-15"
  },
  {
    "id": "l-naloxone",
    "title": "5 Things to Know About Naloxone",
    "url": "https://www.cdc.gov/overdose-prevention/reversing-overdose/about-naloxone.html",
    "organization": "Centers for Disease Control and Prevention",
    "accessed": "2026-09-15"
  },
  {
    "id": "l-co",
    "title": "Clinical Guidance for Carbon Monoxide Poisoning",
    "url": "https://www.cdc.gov/carbon-monoxide/hcp/clinical-guidance/index.html",
    "organization": "Centers for Disease Control and Prevention",
    "accessed": "2026-09-15"
  },
  {
    "id": "l-heat",
    "title": "Heat-related Illnesses",
    "url": "https://www.cdc.gov/niosh/heat-stress/about/illnesses.html",
    "organization": "Centers for Disease Control and Prevention",
    "accessed": "2026-09-15"
  },
  {
    "id": "l-infection",
    "title": "Standard Precautions for All Patient Care",
    "url": "https://www.cdc.gov/infection-control/hcp/basics/standard-precautions.html",
    "organization": "Centers for Disease Control and Prevention",
    "accessed": "2026-09-15"
  },
  {
    "id": "l-seizure",
    "title": "First Aid for Seizures",
    "url": "https://www.cdc.gov/epilepsy/first-aid-for-seizures/index.html",
    "organization": "Centers for Disease Control and Prevention",
    "accessed": "2026-09-15"
  },
  {
    "id": "l-seizure-types",
    "title": "Types of Seizures",
    "url": "https://www.cdc.gov/epilepsy/about/types-of-seizures.html",
    "organization": "Centers for Disease Control and Prevention",
    "accessed": "2026-09-15"
  },
  {
    "id": "l-tbi",
    "title": "Symptoms of Mild TBI and Concussion",
    "url": "https://www.cdc.gov/traumatic-brain-injury/signs-symptoms/index.html",
    "organization": "Centers for Disease Control and Prevention",
    "accessed": "2026-09-15"
  },
  {
    "id": "l-drowning",
    "title": "Drowning Prevention",
    "url": "https://www.cdc.gov/drowning/about/index.html",
    "organization": "Centers for Disease Control and Prevention",
    "accessed": "2026-09-15"
  },
  {
    "id": "l-rfail",
    "title": "What Is Respiratory Failure?",
    "url": "https://www.nhlbi.nih.gov/health/respiratory-failure",
    "organization": "National Heart, Lung, and Blood Institute",
    "accessed": "2026-09-15"
  },
  {
    "id": "l-rsymp",
    "title": "Respiratory Failure Symptoms",
    "url": "https://www.nhlbi.nih.gov/health/respiratory-failure/symptoms",
    "organization": "National Heart, Lung, and Blood Institute",
    "accessed": "2026-09-15"
  },
  {
    "id": "l-asthma",
    "title": "Asthma Symptoms",
    "url": "https://www.nhlbi.nih.gov/health/asthma/symptoms",
    "organization": "National Heart, Lung, and Blood Institute",
    "accessed": "2026-09-15"
  },
  {
    "id": "l-copd",
    "title": "What Is COPD?",
    "url": "https://www.nhlbi.nih.gov/health/copd",
    "organization": "National Heart, Lung, and Blood Institute",
    "accessed": "2026-09-15"
  },
  {
    "id": "l-cshock",
    "title": "What Is Cardiogenic Shock?",
    "url": "https://www.nhlbi.nih.gov/health/cardiogenic-shock",
    "organization": "National Heart, Lung, and Blood Institute",
    "accessed": "2026-09-15"
  },
  {
    "id": "l-mi",
    "title": "Heart Attack Symptoms",
    "url": "https://www.nhlbi.nih.gov/health/heart-attack/symptoms",
    "organization": "National Heart, Lung, and Blood Institute",
    "accessed": "2026-09-15"
  },
  {
    "id": "l-arrhythmia",
    "title": "What Is an Arrhythmia?",
    "url": "https://www.nhlbi.nih.gov/health/arrhythmias",
    "organization": "National Heart, Lung, and Blood Institute",
    "accessed": "2026-09-15"
  },
  {
    "id": "l-anatomy",
    "title": "What the Heart Looks Like",
    "url": "https://www.nhlbi.nih.gov/health/heart/anatomy",
    "organization": "National Heart, Lung, and Blood Institute",
    "accessed": "2026-09-15"
  },
  {
    "id": "l-flow",
    "title": "How Blood Flows through the Heart",
    "url": "https://www.nhlbi.nih.gov/health/heart/blood-flow",
    "organization": "National Heart, Lung, and Blood Institute",
    "accessed": "2026-09-15"
  },
  {
    "id": "l-beats",
    "title": "How the Heart Beats",
    "url": "https://www.nhlbi.nih.gov/health/heart/heart-beats",
    "organization": "National Heart, Lung, and Blood Institute",
    "accessed": "2026-09-15"
  },
  {
    "id": "l-preclamp",
    "title": "About Preeclampsia and Eclampsia",
    "url": "https://www.nichd.nih.gov/health/topics/preeclampsia/conditioninfo",
    "organization": "Eunice Kennedy Shriver National Institute of Child Health and Human Development",
    "accessed": "2026-09-15"
  },
  {
    "id": "l-education",
    "title": "2021 National EMS Education Standards, amended February 2025",
    "url": "https://www.ems.gov/assets/EMS_Education_Standards_2021_Updated2_24_25forEO.pdf",
    "organization": "National Highway Traffic Safety Administration",
    "accessed": "2026-09-15"
  },
  {
    "id": "l-scope",
    "title": "2019 National EMS Scope of Practice Model",
    "url": "https://www.ems.gov/assets/National_EMS_Scope_of_Practice_Model_2019.pdf",
    "organization": "National Highway Traffic Safety Administration",
    "accessed": "2026-09-15"
  },
  {
    "id": "l-assessment",
    "title": "2009 EMT Instructional Guidelines: foundational assessment concepts",
    "url": "https://www.ems.gov/assets/EMT_Instructional_Guidelines.pdf",
    "organization": "National Highway Traffic Safety Administration",
    "accessed": "2026-09-15"
  },
  {
    "id": "l-bleed",
    "title": "ACS Stop the Bleed: Get Trained",
    "url": "https://www.stopthebleed.org/get-trained/",
    "organization": "American College of Surgeons",
    "accessed": "2026-09-15"
  },
  {
    "id": "l-triage",
    "title": "2021 National Guideline for Field Triage of Injured Patients",
    "url": "https://www.facs.org/media/rw4c5kb2/trauma-algorithm-vfinal-revise.pdf",
    "organization": "American College of Surgeons",
    "accessed": "2026-09-15"
  },
  {
    "id": "l-team",
    "title": "TeamSTEPPS Communication: Key Concepts and Tools",
    "url": "https://www.ahrq.gov/teamstepps-program/curriculum/communication/tools/index.html",
    "organization": "Agency for Healthcare Research and Quality",
    "accessed": "2026-09-15"
  },
  {
    "id": "ecg-normal",
    "title": "Characteristics of the Normal ECG",
    "url": "https://ecg.utah.edu/lesson/3",
    "organization": "University of Utah ECG Learning Center",
    "accessed": "2026-09-15"
  },
  {
    "id": "ecg-supraventricular",
    "title": "Supraventricular Arrhythmias",
    "url": "https://ecg.utah.edu/lesson/5-2",
    "organization": "University of Utah ECG Learning Center",
    "accessed": "2026-09-15"
  },
  {
    "id": "ecg-ventricular",
    "title": "Ventricular Arrhythmias",
    "url": "https://ecg.utah.edu/lesson/5-3",
    "organization": "University of Utah ECG Learning Center",
    "accessed": "2026-09-15"
  },
  {
    "id": "ecg-blocks",
    "title": "ECG Conduction Abnormalities",
    "url": "https://ecg.utah.edu/lesson/6",
    "organization": "University of Utah ECG Learning Center",
    "accessed": "2026-09-15"
  },
  {
    "id": "aha-slow",
    "title": "Bradycardia: Slow Heart Rate",
    "url": "https://www.heart.org/en/health-topics/arrhythmia/about-arrhythmia/bradycardia--slow-heart-rate",
    "organization": "American Heart Association",
    "accessed": "2026-09-15"
  },
  {
    "id": "aha-fast",
    "title": "Tachycardia: Fast Heart Rate",
    "url": "https://www.heart.org/en/health-topics/arrhythmia/about-arrhythmia/tachycardia--fast-heart-rate",
    "organization": "American Heart Association",
    "accessed": "2026-09-15"
  },
  {
    "id": "aha-other-rhythms",
    "title": "Other Heart Rhythm Disorders",
    "url": "https://www.heart.org/en/health-topics/arrhythmia/about-arrhythmia/other-heart-rhythm-disorders",
    "organization": "American Heart Association",
    "accessed": "2026-09-15"
  },
  {
    "id": "aha-vf",
    "title": "Ventricular Fibrillation",
    "url": "https://www.heart.org/en/health-topics/arrhythmia/about-arrhythmia/ventricular-fibrillation",
    "organization": "American Heart Association",
    "accessed": "2026-09-15"
  },
  {
    "id": "aha-2025-arrest",
    "title": "2025 Adult Cardiac Arrest Algorithm",
    "url": "https://cpr.heart.org/-/media/CPR-Files/CPR-Guidelines-Files/2025-Algorithms/Algorithm-ACLS-CA-250527.pdf?sc_lang=en",
    "organization": "American Heart Association",
    "accessed": "2026-09-15"
  },
  {
    "id": "aha-2025-brady",
    "title": "2025 Adult Bradycardia With a Pulse Algorithm",
    "url": "https://cpr.heart.org/-/media/CPR-Files/CPR-Guidelines-Files/2025-Algorithms/Algorithm-ACLS-Bradycardia-250514.pdf?sc_lang=en",
    "organization": "American Heart Association",
    "accessed": "2026-09-15"
  },
  {
    "id": "aha-2025-tachy",
    "title": "2025 Adult Tachyarrhythmia With a Pulse Algorithm",
    "url": "https://cpr.heart.org/-/media/CPR-Files/CPR-Guidelines-Files/2025-Algorithms/Algorithm-ACLS-Tachycardia-250514.pdf?sc_lang=en",
    "organization": "American Heart Association",
    "accessed": "2026-09-15"
  },
  {
    "id": "nhlbi-asthma",
    "title": "Asthma Attack",
    "url": "https://www.nhlbi.nih.gov/health/asthma/attacks",
    "organization": "National Heart, Lung, and Blood Institute",
    "accessed": "2026-09-15"
  },
  {
    "id": "rcuk-anaphylaxis",
    "title": "Emergency Treatment of Anaphylaxis, 2021",
    "url": "https://www.resus.org.uk/sites/default/files/2021-05/Emergency%20Treatment%20of%20Anaphylaxis%20May%202021_0.pdf",
    "organization": "Resuscitation Council UK",
    "accessed": "2026-09-15"
  },
  {
    "id": "niddk-hypoglycemia",
    "title": "Low Blood Glucose (Hypoglycemia)",
    "url": "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/low-blood-glucose-hypoglycemia",
    "organization": "National Institute of Diabetes and Digestive and Kidney Diseases",
    "accessed": "2026-09-15"
  },
  {
    "id": "acs-triage",
    "title": "National Guidelines for the Field Triage of Injured Patients",
    "url": "https://www.facs.org/quality-programs/trauma/systems/field-triage-guidelines/",
    "organization": "American College of Surgeons",
    "accessed": "2026-09-15"
  },
  {
    "id": "aha-first-aid",
    "title": "2024 AHA and American Red Cross Guidelines for First Aid",
    "url": "https://cpr.heart.org/en/resuscitation-science/2024-first-aid-guidelines",
    "organization": "American Heart Association and American Red Cross",
    "accessed": "2026-09-15"
  },
  {
    "id": "asa-aspirin",
    "title": "Aspirin and Stroke",
    "url": "https://www.stroke.org/en/life-after-stroke/preventing-another-stroke/aspirin-and-stroke",
    "organization": "American Stroke Association",
    "accessed": "2026-09-15"
  },
  {
    "id": "asa-ems",
    "title": "Prehospital/EMS Care",
    "url": "https://www.stroke.org/en/professionals/stroke-resource-library/pre-hospitalems",
    "organization": "American Stroke Association",
    "accessed": "2026-09-15"
  },
  {
    "id": "asa-stroke-alert",
    "title": "EMS Stroke Alert Form",
    "url": "https://www.stroke.org/en/-/media/Stroke-Files/EMS-Resources/EMS-Stroke-Alert-Form.pdf?sc_lang=en",
    "organization": "American Stroke Association",
    "accessed": "2026-09-15"
  }
];
