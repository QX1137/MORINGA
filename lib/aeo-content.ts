/**
 * AEO content blocks per page, keyed by treatment/service/location slug.
 * Provides DefinitionBlock + StatisticBlock + ComparisonTable + TimelineBlock
 * data for the templates to render.
 *
 * Stats marked `verified: false` are flagged in the UI as "Pending verification"
 * for Dt. Priyatama to confirm before public launch.
 */

import type { Stat } from "@/app/components/aeo/StatisticBlock";
import type { ComparisonRow } from "@/app/components/aeo/ComparisonTable";
import type { Milestone } from "@/app/components/aeo/TimelineBlock";

export type AeoBlock = {
  definitionShort?: string;
  alsoKnownAs?: string[];
  stats?: Stat[];
  comparison?: {
    heading: string;
    optionALabel: string;
    optionBLabel: string;
    rows: ComparisonRow[];
    caption?: string;
  };
  timeline?: Milestone[];
  authorTopicNote?: string;
};

export const TREATMENT_AEO: Record<string, AeoBlock> = {
  diabetes: {
    definitionShort: "Type 2 diabetes is a metabolic condition where the body cannot effectively use insulin to control blood glucose. It affects over 100 million Indians and is largely diet-responsive — disciplined nutritional intervention can substantially reduce HbA1c and, in many early-stage cases, eliminate medication needs under physician supervision.",
    alsoKnownAs: ["Type 2 Diabetes", "T2DM", "Diabetes Mellitus", "Madhumeha"],
    stats: [
      { value: "1-2 pts", label: "Typical HbA1c reduction in 4 months of disciplined plan", source: "Go Moringa clinical observation", verified: false },
      { value: "70%+", label: "Of clients reduce or eliminate medication under physician guidance", verified: false },
      { value: "2-3 wk", label: "Time for daily glucose readings to start stabilising", verified: false },
      { value: "100M+", label: "Indians living with diabetes (ICMR-INDIAB study)", source: "ICMR-INDIAB-17 study" },
    ],
    comparison: {
      heading: "Medication alone vs medication + diet",
      optionALabel: "Medication only",
      optionBLabel: "Medication + dietary intervention",
      rows: [
        { dimension: "HbA1c control", optionA: "Maintains current level", optionB: "1-2 point reduction typical" },
        { dimension: "Medication dose over time", optionA: "Often increases", optionB: "Often decreases or eliminated" },
        { dimension: "Energy levels", optionA: "Variable", optionB: "Stabilises within weeks" },
        { dimension: "Long-term complication risk", optionA: "Reduced", optionB: "Significantly reduced" },
        { dimension: "Cost over 5 years", optionA: "₹2-4 lakh in medication", optionB: "₹40k-2L (often less)" },
      ],
      caption: "Both columns assume continued physician supervision. Diet does not replace medical care.",
    },
    timeline: [
      { period: "Week 1-2", title: "Stabilisation", description: "Glucose readings begin to stabilise as meal patterns shift. Energy may dip initially, then improve.", measurableOutcomes: ["Less post-meal glucose spike", "Reduced sugar cravings", "Better satiety between meals"] },
      { period: "Month 1-3", title: "Adaptation", description: "Body adapts to new metabolic patterns. Weight typically drops 4-8 kg. First HbA1c re-test at month 3.", measurableOutcomes: ["3-month HbA1c drops 0.5-1.5 points", "4-8 kg weight reduction", "Improved sleep quality"] },
      { period: "Month 3-12", title: "Reversal trajectory", description: "Sustained adherence drives major lab improvements. Physician reviews medication needs based on stabilised values.", measurableOutcomes: ["HbA1c often in 5.7-6.4 range", "Medication often reduced", "Lipid profile improves"] },
    ],
    authorTopicNote: "Has helped hundreds of clients reverse pre-diabetes and substantially improve Type 2 diabetes outcomes.",
  },

  "pcod-pcos": {
    definitionShort: "Polycystic Ovary Syndrome (PCOS / PCOD) is a hormonal disorder affecting roughly 1 in 5 women of reproductive age in India. Characterised by irregular periods, weight gain (especially abdominal), acne, hair fall and insulin resistance, it is highly responsive to dietary intervention combined with lifestyle change.",
    alsoKnownAs: ["PCOS", "PCOD", "Polycystic Ovary Syndrome", "Polycystic Ovarian Disease"],
    stats: [
      { value: "1 in 5", label: "Indian women of reproductive age affected", source: "Indian endocrinology surveys" },
      { value: "3-6 mo", label: "Typical time for cycle regulation with disciplined diet", verified: false },
      { value: "70-80%", label: "Of clients reach predictable monthly cycles without hormones", verified: false },
      { value: "5-10%", label: "Body weight reduction often regularises ovulation", source: "Published PCOS research" },
    ],
    comparison: {
      heading: "Hormonal medication alone vs diet + lifestyle approach",
      optionALabel: "Hormonal medication only",
      optionBLabel: "Diet + lifestyle (often with medication)",
      rows: [
        { dimension: "Symptom suppression", optionA: "Yes (while on medication)", optionB: "Yes, and addresses root cause" },
        { dimension: "Weight impact", optionA: "Often increases", optionB: "Typically decreases" },
        { dimension: "Fertility outcomes", optionA: "Variable", optionB: "Often improved" },
        { dimension: "Long-term sustainability", optionA: "Low (rebound on stopping)", optionB: "High" },
        { dimension: "Side effects", optionA: "Common (mood, weight, headache)", optionB: "Minimal" },
      ],
    },
    timeline: [
      { period: "Week 1-4", title: "Hormonal reset begins", description: "Insulin sensitivity starts improving. Cravings reduce. Sleep improves.", measurableOutcomes: ["Reduced sugar cravings", "Better sleep", "Mood stability"] },
      { period: "Month 2-3", title: "Cycle regulation phase", description: "Cycles begin to normalise for most clients. Acne and hair fall start improving.", measurableOutcomes: ["First regular cycle in months", "Clearer skin", "Less hair fall"] },
      { period: "Month 4-9", title: "Long-term hormonal balance", description: "Sustained regular cycles. Fertility improvements. Body composition shift visible.", measurableOutcomes: ["Predictable monthly cycles", "Conception more likely if trying", "Visible abdominal fat reduction"] },
    ],
    authorTopicNote: "One of our highest-volume programs — PCOS represents 20%+ of female clients.",
  },

  thyroid: {
    definitionShort: "Thyroid disorders — primarily hypothyroidism (underactive) and Hashimoto's thyroiditis (autoimmune) — affect 1 in 10 Indians, with 3:1 female-to-male ratio. Dietary intervention combined with proper medication timing significantly improves how patients feel and can normalise TSH in many subclinical cases.",
    alsoKnownAs: ["Hypothyroidism", "Hashimoto's", "Hyperthyroidism", "TSH imbalance"],
    stats: [
      { value: "1 in 10", label: "Indians have a thyroid disorder", source: "Indian thyroid prevalence studies" },
      { value: "4-6 wk", label: "Typical time for noticeable energy improvement", verified: false },
      { value: "3 mo", label: "Time for TSH normalisation in subclinical cases", verified: false },
      { value: "30-60 min", label: "Levothyroxine absorption window — most missed factor", source: "Endocrine Society guidelines" },
    ],
    comparison: {
      heading: "Medication-only vs medication + diet + timing optimisation",
      optionALabel: "Medication only, no diet support",
      optionBLabel: "Medication + diet + meal-timing optimisation",
      rows: [
        { dimension: "TSH levels", optionA: "Often borderline-controlled", optionB: "Reaches optimal range" },
        { dimension: "Energy levels", optionA: "Inconsistent", optionB: "Steady improvement" },
        { dimension: "Hair, skin, weight", optionA: "Slow improvement", optionB: "Visible improvement in 3-4 months" },
        { dimension: "Medication absorption", optionA: "Suboptimal if timing wrong", optionB: "Optimal — proper timing" },
        { dimension: "Autoimmune (Hashimoto's) markers", optionA: "Not addressed", optionB: "Anti-inflammatory diet helps" },
      ],
    },
    timeline: [
      { period: "Week 1-2", title: "Foundation", description: "Medication timing corrected (most impactful first step). Anti-inflammatory eating begins.", measurableOutcomes: ["Correct medication timing established", "Initial energy bumps"] },
      { period: "Month 1-3", title: "TSH responds", description: "First repeat thyroid panel shows improvement. Energy, weight, sleep noticeably better.", measurableOutcomes: ["TSH improvement on lab", "1-3 kg weight loss", "Better sleep + mood"] },
      { period: "Month 3-6", title: "Long-term stability", description: "TSH stable in optimal range. Hair, skin, energy fully recovered. Medication dose often optimised by endocrinologist.", measurableOutcomes: ["TSH steady in optimal range", "Visible hair + skin improvement", "Sustainable energy"] },
    ],
    authorTopicNote: "Thyroid management has been a clinical focus for over 15 years.",
  },

  "high-blood-pressure": {
    definitionShort: "Hypertension (systolic ≥130 mmHg) is the leading risk factor for stroke and heart attack in India. It is largely silent until damage occurs and responds significantly to the DASH-style dietary approach — most disciplined clients see 10-15 mmHg systolic reduction within 8 weeks.",
    alsoKnownAs: ["High BP", "High Blood Pressure", "Hypertension", "Stage 1/2 hypertension"],
    stats: [
      { value: "10-15 mmHg", label: "Typical systolic drop in 8 weeks of disciplined diet", source: "DASH research + Go Moringa observation", verified: false },
      { value: "4-10 mmHg", label: "Drop from beetroot alone (nitric oxide effect)", source: "Published clinical trials" },
      { value: "5-20 mmHg", label: "Reduction per 10 kg weight loss in overweight clients", source: "JNC 8 guidelines" },
      { value: "<2,300 mg", label: "Daily sodium target (Indian avg: 8,000-10,000 mg)", source: "WHO + ICMR" },
    ],
    comparison: {
      heading: "Medication-only vs medication + DASH-Indian diet",
      optionALabel: "Medication only",
      optionBLabel: "Medication + DASH-Indian diet",
      rows: [
        { dimension: "Systolic BP at 8 weeks", optionA: "Modest improvement", optionB: "10-15 mmHg reduction" },
        { dimension: "Long-term medication need", optionA: "Often increases", optionB: "Often reduces" },
        { dimension: "Cardiac event risk", optionA: "Reduced", optionB: "Substantially reduced" },
        { dimension: "Side effects", optionA: "Medication-related", optionB: "None from diet" },
      ],
    },
    timeline: [
      { period: "Week 1-2", title: "Sodium reset", description: "Cutting hidden sodium (packaged + restaurant food) shows fastest initial gains.", measurableOutcomes: ["3-5 mmHg systolic drop", "Reduced water retention"] },
      { period: "Week 3-8", title: "Full DASH effect", description: "Potassium-rich foods + weight loss compound the BP reduction.", measurableOutcomes: ["10-15 mmHg systolic drop", "Lipid profile improves"] },
      { period: "Month 3+", title: "Stabilisation + medication review", description: "Physician reviews medication dose against new baseline values.", measurableOutcomes: ["Medication dose often reduced", "Sustained healthy range"] },
    ],
  },

  "heart-disease": {
    definitionShort: "Coronary artery disease results from plaque buildup that narrows blood vessels supplying the heart. India has one of the world's highest rates, with events occurring 10-15 years earlier than in Western populations. Disciplined cardiac diet substantially reduces both recurrence risk and progression rate.",
    stats: [
      { value: "15-30%", label: "Typical LDL cholesterol reduction in 8 weeks", verified: false },
      { value: "10-15 yrs", label: "Earlier onset of cardiac events in Indians vs Western pops", source: "WHO Indian cardiac data" },
      { value: "30-40%", label: "Triglyceride reduction within 4-6 weeks of disciplined diet", verified: false },
    ],
    timeline: [
      { period: "Week 1-4", title: "Foundation", description: "Trans fat elimination + sodium control. Triglycerides respond fastest.", measurableOutcomes: ["Initial triglyceride drop", "Lower blood pressure"] },
      { period: "Week 6-8", title: "Lipid profile reset", description: "First post-intervention lipid panel typically shows 15-25% LDL reduction.", measurableOutcomes: ["LDL drops 15-25%", "HDL improvement begins"] },
      { period: "Month 3+", title: "Long-term protection", description: "Stable lipid profile, reduced cardiac risk. Cardiologist reviews medication needs.", measurableOutcomes: ["Sustained lipid improvement", "Possible medication reduction"] },
    ],
  },

  "lipid-profile-cholesterol": {
    definitionShort: "Abnormal lipid profile — high LDL, low HDL, high triglycerides — is the most diet-responsive cardiovascular risk factor. Most clients see 15-30% LDL reduction within 8 weeks through disciplined dietary intervention, often eliminating the need for high-dose statins.",
    alsoKnownAs: ["High cholesterol", "Dyslipidemia", "High LDL", "Low HDL"],
    stats: [
      { value: "15-30%", label: "Typical LDL reduction in 8 weeks", verified: false },
      { value: "30-40%", label: "Triglyceride reduction in 4-6 weeks", verified: false },
      { value: "5-10%", label: "HDL improvement (slower than LDL changes)", verified: false },
    ],
    timeline: [
      { period: "Week 1-3", title: "Triglycerides respond first", description: "Cutting refined carbs + alcohol drops triglycerides fastest.", measurableOutcomes: ["Triglycerides drop 20-30%"] },
      { period: "Week 6-8", title: "LDL responds", description: "Soluble fibre + reduced saturated fat brings LDL into target range.", measurableOutcomes: ["LDL drops 15-30%", "Initial HDL improvement"] },
      { period: "Month 3+", title: "Full lipid normalisation", description: "Sustained pattern shows stable improvement across all 4 markers.", measurableOutcomes: ["All 4 markers improved", "Sustained over time"] },
    ],
  },

  "uric-acid": {
    definitionShort: "Hyperuricemia (high uric acid) leads to gout — acute joint inflammation, typically the big toe. Caused by purine breakdown overload from red meat, certain fish, alcohol, fructose, or kidney impairment. Dietary management normalises levels in 8-12 weeks for most clients.",
    alsoKnownAs: ["Hyperuricemia", "Gout", "High uric acid"],
    stats: [
      { value: "8-12 wk", label: "Time for uric acid to normalise on disciplined diet", verified: false },
      { value: "1-2 mg/dL", label: "Uric acid drop from 5-10% weight loss alone", source: "Published research" },
      { value: "3-4 L", label: "Daily water target for active gout management", source: "Rheumatology guidelines" },
    ],
    timeline: [
      { period: "Week 1-2", title: "Trigger elimination", description: "Beer + red meat + organ meats removed. Hydration increased.", measurableOutcomes: ["Reduced gout flare frequency", "Better hydration"] },
      { period: "Month 1-3", title: "Uric acid normalises", description: "Lab values move toward normal range. Flares become rare.", measurableOutcomes: ["Uric acid in normal range", "No new gout attacks"] },
      { period: "Month 3+", title: "Long-term maintenance", description: "Modified diet pattern becomes sustainable. Tophi may slowly resolve.", measurableOutcomes: ["Sustained normal uric acid", "Improved joint health"] },
    ],
  },

  osteoporosis: {
    definitionShort: "Osteoporosis is reduced bone density and strength, leading to fragile bones that fracture easily. Affects 1 in 3 post-menopausal Indian women — far higher than commonly recognised. Diet + weight-bearing exercise + adequate vitamin D slow or reverse early-stage bone loss.",
    stats: [
      { value: "1 in 3", label: "Post-menopausal Indian women have osteoporosis or osteopenia", source: "Indian bone density surveys" },
      { value: "1,000-1,200 mg", label: "Daily calcium target (most Indians get 400-600 mg)", source: "ICMR daily nutrient recommendations" },
      { value: "T-score", label: "DEXA scan reading: ≤-2.5 = osteoporosis, -1 to -2.5 = osteopenia", source: "WHO classification" },
    ],
    timeline: [
      { period: "Month 1-3", title: "Foundation", description: "Calcium + vitamin D + protein intake corrected. Weight-bearing exercise begun.", measurableOutcomes: ["Adequate daily calcium achieved", "Vitamin D status improved"] },
      { period: "Month 3-12", title: "Density stabilises", description: "Bone density loss arrests. Energy + strength improve.", measurableOutcomes: ["DEXA shows stabilisation", "Improved strength"] },
      { period: "Year 1-3", title: "Long-term improvement", description: "Sustained pattern with appropriate medication often shows density improvement on follow-up DEXA.", measurableOutcomes: ["Possible bone density gain", "Reduced fracture risk"] },
    ],
  },

  osteoarthritis: {
    definitionShort: "Osteoarthritis is wear-and-tear arthritis — cartilage breakdown causing pain, stiffness, and reduced movement, most commonly in knees, hips, and hands. Anti-inflammatory dietary intervention plus weight management significantly reduces pain and slows progression.",
    stats: [
      { value: "4 kg", label: "Knee load reduction per 1 kg of body-weight reduction during walking", source: "Published biomechanics research" },
      { value: "6-8 wk", label: "Time for noticeable pain reduction on anti-inflammatory diet", verified: false },
    ],
    timeline: [
      { period: "Week 1-4", title: "Inflammation reduction", description: "Sugar + refined carb + trans fat elimination. Pain often reduces noticeably even before weight loss.", measurableOutcomes: ["Reduced morning stiffness", "Less pain at end of day"] },
      { period: "Month 2-6", title: "Weight + mobility", description: "Weight loss progresses. Joint load reduces. Mobility improves.", measurableOutcomes: ["5-10 kg weight loss", "Easier stair climbing", "Less pain"] },
      { period: "Month 6+", title: "Sustained improvement", description: "Cartilage support nutrients (collagen, omega-3) integrated long-term.", measurableOutcomes: ["Sustained pain reduction", "Better quality of life"] },
    ],
  },

  depression: {
    definitionShort: "Depression and anxiety are complex mental health conditions with biological, psychological and social drivers. Dietary intervention works as an adjunct to therapy and medication — supporting gut-brain axis, blood sugar stability, omega-3 status, and B vitamin levels that influence mood regulation.",
    stats: [
      { value: "90%+", label: "Of serotonin is produced in the gut, not the brain", source: "Neurogastroenterology research" },
      { value: "2-3 wk", label: "Typical time for mood stability after sugar reduction", verified: false },
    ],
    timeline: [
      { period: "Week 1-3", title: "Stability", description: "Sugar + caffeine + skipped-meal patterns corrected. Mood swings reduce.", measurableOutcomes: ["More stable mood", "Better sleep", "Less afternoon crash"] },
      { period: "Month 2-3", title: "Nutritional repletion", description: "B12, vitamin D, omega-3 levels restored. Energy and motivation improve.", measurableOutcomes: ["Improved lab values", "Better energy"] },
      { period: "Month 3+", title: "Sustained adjunct support", description: "Diet stably supports therapy and (where prescribed) medication.", measurableOutcomes: ["Sustained mood stability", "Possible medication reduction (per psychiatrist)"] },
    ],
    authorTopicNote: "Dietary adjunct work always coordinates with a psychiatrist or therapist — never replaces them.",
  },

  constipation: {
    definitionShort: "Chronic constipation — fewer than 3 bowel movements per week, hard stools, straining, or incomplete evacuation — affects a significant share of urban Indian adults. Most cases resolve within 2-3 weeks of adjusted fibre, hydration, and gut microbiome support — without laxative dependence.",
    stats: [
      { value: "3-7 days", label: "Typical time for improvement on adjusted plan", verified: false },
      { value: "25-35 g", label: "Daily fibre target (most Indian urban diets provide 10-15 g)", source: "ICMR fibre recommendations" },
      { value: "3 L", label: "Daily water target for most adults", source: "ICMR hydration guidance" },
    ],
    timeline: [
      { period: "Week 1", title: "Initial relief", description: "Increased fibre + water restores baseline regularity.", measurableOutcomes: ["First easy bowel movements"] },
      { period: "Week 2-4", title: "Pattern stabilises", description: "Daily comfortable bowel movements establish.", measurableOutcomes: ["Daily regularity", "Less bloating"] },
      { period: "Month 2+", title: "Microbiome support", description: "Fermented foods + prebiotics build long-term gut health.", measurableOutcomes: ["Sustained regularity without laxatives"] },
    ],
  },

  "metabolic-syndrome": {
    definitionShort: "Metabolic syndrome is the cluster of abdominal obesity, high BP, abnormal glucose, and abnormal lipids — present together. Affects an alarming share of urban Indian adults and is the strongest predictor of future heart disease and Type 2 diabetes. Highly diet-responsive in early stages.",
    stats: [
      { value: "30%+", label: "Of urban Indian adults meet metabolic syndrome criteria", source: "ICMR-INDIAB and CURES studies" },
      { value: "5-10%", label: "Body weight loss often resolves multiple metabolic syndrome components", source: "Published research" },
    ],
    timeline: [
      { period: "Week 1-4", title: "Insulin sensitivity reset", description: "Low-glycaemic eating + weight loss begins. Triglycerides drop fastest.", measurableOutcomes: ["Initial weight loss", "Triglyceride drop"] },
      { period: "Month 2-3", title: "Multiple components improve", description: "BP, glucose, lipids all moving toward normal.", measurableOutcomes: ["BP improvement", "Lower fasting glucose"] },
      { period: "Month 3-12", title: "Syndrome resolves", description: "In disciplined clients, all 5 markers return to normal — full reversal.", measurableOutcomes: ["No longer meets syndrome criteria"] },
    ],
  },

  "abnormal-blood-fats": {
    definitionShort: "Dyslipidemia is the broader term for abnormal blood-fat levels — high LDL, low HDL, high triglycerides, abnormal apo-B, or high Lp(a). Each carries cardiovascular risk through different mechanisms. The conventional lipid diet addresses most patterns simultaneously.",
    stats: [
      { value: "8 wk", label: "Typical time for significant lipid panel improvement", verified: false },
    ],
    timeline: [
      { period: "Week 1-3", title: "Trigger elimination", description: "Trans fats + refined carbs + alcohol reduced.", measurableOutcomes: ["Initial triglyceride drop"] },
      { period: "Week 6-8", title: "Full panel responds", description: "Lipid retest typically shows substantial improvement across markers.", measurableOutcomes: ["LDL drops 15-25%", "HDL beginning to rise"] },
      { period: "Month 3+", title: "Sustained pattern", description: "Lifestyle integration locks in improvements.", measurableOutcomes: ["All markers stably improved"] },
    ],
  },

  gallstones: {
    definitionShort: "Gallstones form when bile becomes too concentrated — usually from rapid weight loss, very high-fat diets, or genetic factors. More common in women, especially after pregnancy. Most are asymptomatic until they obstruct the bile duct, causing intense pain (biliary colic).",
    stats: [
      { value: "2-3 mo", label: "Post-cholecystectomy adaptation period for fat tolerance", verified: false },
    ],
    timeline: [
      { period: "Pre-surgery", title: "Symptom management", description: "Low-fat diet reduces gallbladder stimulation and attacks.", measurableOutcomes: ["Fewer attacks", "Less pain"] },
      { period: "Post-surgery 6-8 wk", title: "Initial recovery", description: "Small, frequent, low-fat meals as digestion adapts.", measurableOutcomes: ["Comfortable digestion"] },
      { period: "Post-surgery 2-3 mo", title: "Long-term adaptation", description: "Gradual reintroduction of moderate fats. Most foods tolerated.", measurableOutcomes: ["Normal diet tolerance"] },
    ],
  },

  "cushing-syndrome": {
    definitionShort: "Cushing's syndrome results from prolonged excess cortisol — from a tumour or long-term steroid medication. Causes central weight gain, muscle wasting, high BP, glucose intolerance, and bone loss. Diet supports medical treatment by managing these downstream effects.",
    timeline: [
      { period: "Initial", title: "Coordination phase", description: "Treatment plan coordinated with endocrinologist. Dietary protocol begins.", measurableOutcomes: ["Plan integrated with medical care"] },
      { period: "Month 1-3", title: "Side effect mitigation", description: "Glucose, BP, muscle wasting addressed through targeted nutrition.", measurableOutcomes: ["Better glucose control", "Muscle preservation"] },
      { period: "Long-term", title: "Sustained support", description: "Diet continues to mitigate steroid effects throughout treatment.", measurableOutcomes: ["Stabilised secondary markers"] },
    ],
  },

  "micronutrient-deficiency": {
    definitionShort: "Micronutrient deficiencies — iron, B12, vitamin D, magnesium, zinc — are alarmingly common in urban Indian adults, including those with seemingly balanced diets. Food-first correction with co-factor optimisation is more sustainable than indefinite supplementation alone.",
    stats: [
      { value: "70%+", label: "Of Indian adults have vitamin D insufficiency", source: "Published Indian D-deficiency studies" },
      { value: "50%+", label: "Of Indian women of reproductive age have iron deficiency anaemia", source: "NFHS-5 (2019-21)" },
    ],
    timeline: [
      { period: "Week 1-2", title: "Testing + planning", description: "Baseline labs reviewed. Specific deficiencies identified.", measurableOutcomes: ["Clear picture of deficiencies"] },
      { period: "Month 1-3", title: "Repletion", description: "Targeted dietary changes + supplementation where genuinely needed.", measurableOutcomes: ["Lab values rise toward normal"] },
      { period: "Month 3-6", title: "Sustainable pattern", description: "Long-term dietary patterns prevent recurrence.", measurableOutcomes: ["Sustained normal lab values"] },
    ],
  },

  "water-retention": {
    definitionShort: "Water retention (edema) is swelling caused by excess fluid trapped in body tissues — most often from high sodium intake, low protein, hormonal patterns, or venous/lymphatic issues. Dietary management addresses the most common causes within weeks.",
    timeline: [
      { period: "Week 1", title: "Sodium reset", description: "Hidden sodium sources eliminated. Visible swelling reduces.", measurableOutcomes: ["Less morning puffiness", "Better-fitting rings/shoes"] },
      { period: "Week 2-4", title: "Pattern stabilises", description: "Potassium balance restored. Protein adequate.", measurableOutcomes: ["Sustained low edema"] },
    ],
  },

  "sleep-apnea-and-respiratory": {
    definitionShort: "Sleep apnea — repeated breathing pauses during sleep — is strongly linked to obesity, particularly neck circumference. Symptoms include loud snoring, daytime fatigue, high BP. Even modest weight loss often substantially reduces severity.",
    stats: [
      { value: "5-10%", label: "Body weight reduction often substantially reduces apnea events", source: "Sleep medicine research" },
    ],
    timeline: [
      { period: "Month 1-3", title: "Initial weight loss", description: "Weight loss + reduced evening alcohol begin to improve sleep.", measurableOutcomes: ["Less loud snoring", "Better daytime energy"] },
      { period: "Month 6+", title: "CPAP review", description: "Sleep physician reviews CPAP pressure based on improvements.", measurableOutcomes: ["Possible CPAP pressure reduction"] },
    ],
  },

  snoring: {
    definitionShort: "Habitual snoring often has dietary contributors — neck weight, evening alcohol, late heavy meals, and acid reflux. Weight loss combined with anti-reflux eating patterns reduces snoring frequency and intensity for most clients.",
    timeline: [
      { period: "Week 1-4", title: "Habit reset", description: "Evening alcohol + late dinner + reflux triggers removed.", measurableOutcomes: ["Reduced snoring intensity"] },
      { period: "Month 2+", title: "Weight loss compounds gains", description: "Neck circumference reduction substantially reduces snoring.", measurableOutcomes: ["Sustained quieter sleep"] },
    ],
  },

  "certain-medicines": {
    definitionShort: "Many medications — corticosteroids, antidepressants, antipsychotics, beta-blockers — cause weight gain, nutrient depletion, or digestive issues. Targeted dietary intervention often substantially mitigates these side effects while you continue the medication.",
    timeline: [
      { period: "Week 1-2", title: "Assessment", description: "Medication list reviewed. Specific side effect targets identified.", measurableOutcomes: ["Clear plan against side effects"] },
      { period: "Month 1-3", title: "Mitigation", description: "Targeted dietary changes counter specific medication effects.", measurableOutcomes: ["Less weight gain", "Better glucose control", "Improved energy"] },
    ],
  },
};

export function getTreatmentAeo(slug: string): AeoBlock | undefined {
  return TREATMENT_AEO[slug];
}
