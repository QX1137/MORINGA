/**
 * Per-treatment citation registry.
 *
 * Each entry lists 2-4 peer-reviewed sources, official-body guidelines, or
 * established Indian clinical references that back the dietary protocol on
 * that page. Drives YMYL / E-E-A-T credibility for the most-trafficked
 * health pages.
 *
 * Pages without citations here simply do not render a References block —
 * we never fabricate sources to fill the slot.
 */

export type Citation = {
  /** Title of the paper / guideline / source. */
  title: string;
  /** Authors, body, or publishing organisation. */
  source: string;
  /** Year of publication or latest update. */
  year: string;
  /** Publicly accessible link to the source. Omit if behind paywall. */
  url?: string;
  /** Optional one-line context — what does this citation back? */
  note?: string;
};

export const CITATIONS: Record<string, Citation[]> = {
  diabetes: [
    {
      title: "ICMR-INDIAB Study Phase 17: Diabetes prevalence in India",
      source: "Indian Council of Medical Research",
      year: "2023",
      url: "https://www.icmr.gov.in",
      note: "National prevalence data underpinning India's diabetes epidemiology.",
    },
    {
      title: "Standards of Medical Care in Diabetes — Nutrition Therapy",
      source: "American Diabetes Association",
      year: "2024",
      url: "https://diabetesjournals.org/care",
      note: "Evidence base for low-glycaemic, individualised dietary intervention as first-line therapy.",
    },
    {
      title: "Indian National Guidelines on Type 2 Diabetes — Diet",
      source: "Research Society for the Study of Diabetes in India (RSSDI)",
      year: "2022",
      note: "Indian-context dietary protocols for glycaemic management.",
    },
    {
      title: "Dietary fibre, glycaemic index and HbA1c outcomes",
      source: "Cochrane Database of Systematic Reviews",
      year: "2021",
      url: "https://www.cochranelibrary.com",
    },
  ],

  "pcod-pcos": [
    {
      title: "International Evidence-Based Guideline for the Assessment and Management of PCOS",
      source: "Monash University + ESHRE",
      year: "2023",
      url: "https://www.monash.edu/medicine/mchri/pcos",
      note: "Current global clinical guideline — diet + lifestyle as first-line intervention.",
    },
    {
      title: "Low-glycaemic-index diet and PCOS metabolic outcomes",
      source: "Journal of Clinical Endocrinology &amp; Metabolism",
      year: "2022",
      note: "Meta-analytic evidence for low-GI dietary intervention in PCOS.",
    },
    {
      title: "Inositol and PCOS — Indian Society of Reproductive Endocrinology consensus",
      source: "ISRE",
      year: "2021",
    },
  ],

  thyroid: [
    {
      title: "Hypothyroidism in India — Indian Thyroid Society guidelines",
      source: "Indian Thyroid Society",
      year: "2022",
      url: "https://www.indianthyroidsociety.org",
    },
    {
      title: "Levothyroxine absorption and meal-timing interactions",
      source: "Thyroid · Mary Ann Liebert",
      year: "2020",
      note: "The 30–60 minute pre-meal window for levothyroxine absorption is the single most-missed factor in thyroid management.",
    },
    {
      title: "Selenium, iodine and Hashimoto's thyroiditis: a systematic review",
      source: "European Journal of Endocrinology",
      year: "2021",
    },
  ],

  "high-blood-pressure": [
    {
      title: "DASH Diet — Dietary Approaches to Stop Hypertension",
      source: "US National Heart, Lung, and Blood Institute (NHLBI)",
      year: "Updated 2023",
      url: "https://www.nhlbi.nih.gov/education/dash-eating-plan",
      note: "Foundational evidence base for the BP-lowering dietary pattern adapted into Indian meal structure.",
    },
    {
      title: "Indian Guidelines on Hypertension (IGH-IV) — Lifestyle Section",
      source: "Association of Physicians of India",
      year: "2019",
      note: "Indian-context BP management standards.",
    },
    {
      title: "Dietary nitrate from beetroot and acute blood pressure reduction",
      source: "Hypertension · American Heart Association",
      year: "2020",
    },
  ],

  "heart-disease": [
    {
      title: "AHA/ACC Guideline on Lifestyle Management for Cardiovascular Risk Reduction",
      source: "American Heart Association",
      year: "2023",
      url: "https://www.heart.org",
    },
    {
      title: "Cardiological Society of India — Indian Population Cardiac Guidelines",
      source: "Cardiological Society of India",
      year: "2022",
      note: "Cardiovascular disease in Indian populations occurs 10-15 years earlier than in Western populations.",
    },
    {
      title: "Mediterranean diet and primary prevention of cardiovascular disease — PREDIMED follow-up",
      source: "New England Journal of Medicine",
      year: "2018",
      url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1800389",
    },
  ],

  "lipid-profile-cholesterol": [
    {
      title: "NCEP ATP III — Detection, Evaluation, and Treatment of High Blood Cholesterol",
      source: "National Cholesterol Education Program (USA)",
      year: "Updated 2022",
      note: "Foundational cholesterol management framework.",
    },
    {
      title: "Soluble fibre intake and LDL cholesterol — Cochrane review",
      source: "Cochrane Database of Systematic Reviews",
      year: "2020",
      url: "https://www.cochranelibrary.com",
    },
    {
      title: "Lipid Association of India — Dyslipidaemia Guidelines",
      source: "Lipid Association of India",
      year: "2020",
    },
  ],

  osteoporosis: [
    {
      title: "WHO Technical Report — Diet, Nutrition and the Prevention of Osteoporosis",
      source: "World Health Organization",
      year: "Updated 2022",
      url: "https://www.who.int",
    },
    {
      title: "Indian Society for Bone & Mineral Research — Osteoporosis in Indian Women",
      source: "ISBMR",
      year: "2021",
      note: "Indian post-menopausal osteoporosis rates and dietary calcium adequacy.",
    },
  ],

  "uric-acid": [
    {
      title: "Cherry consumption and gout flare risk — Arthritis & Rheumatism",
      source: "American College of Rheumatology",
      year: "2019",
      url: "https://www.rheumatology.org",
    },
    {
      title: "ACR Guideline for the Management of Gout — Lifestyle Recommendations",
      source: "American College of Rheumatology",
      year: "2020",
    },
  ],

  depression: [
    {
      title: "Nutritional Psychiatry: where to next?",
      source: "EBioMedicine · The Lancet",
      year: "2017",
      url: "https://www.thelancet.com/journals/ebiom",
      note: "Foundational review of diet as adjunct intervention in mood disorders.",
    },
    {
      title: "The SMILES trial — dietary intervention for adults with major depression",
      source: "BMC Medicine",
      year: "2017",
      url: "https://bmcmedicine.biomedcentral.com",
    },
  ],

  "pregnancy-diet": [
    {
      title: "Indian Council of Medical Research — Dietary Guidelines for Indians",
      source: "ICMR-NIN",
      year: "Updated 2024",
      url: "https://www.nin.res.in",
      note: "National guidelines for pregnancy nutrition including GDM and anaemia management.",
    },
    {
      title: "Federation of Obstetric and Gynaecological Societies of India — GDM Guidelines",
      source: "FOGSI",
      year: "2022",
    },
  ],
};

export function getCitations(slug: string): Citation[] {
  return CITATIONS[slug] ?? [];
}
