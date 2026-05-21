/**
 * Diet Report logic — Asian Indian BMI thresholds + goal-aware diet type matching.
 *
 * BMI thresholds (WHO Asian Indian + ICMR India):
 *   < 18.5  → Underweight
 *   18.5-22.9 → Normal (note: Asian Indian threshold is 22.9, lower than Western 24.9)
 *   23.0-24.9 → Overweight (at-risk)
 *   25.0-29.9 → Obese Class I
 *   ≥ 30.0  → Obese Class II
 *
 * Source: WHO Expert Consultation (2004) and ICMR national nutrition guidelines.
 */

export type Gender = "female" | "male" | "other";

export type Goal =
  | "weight-loss"
  | "weight-gain"
  | "pcos"
  | "diabetes"
  | "thyroid"
  | "pregnancy"
  | "maintenance"
  | "general-health";

export type BMICategory =
  | "underweight"
  | "normal"
  | "overweight"
  | "obese-1"
  | "obese-2";

export type ReportInputs = {
  name: string;
  phone: string;
  email?: string;
  age: number;
  gender: Gender;
  heightCm: number;
  weightKg: number;
  goal: Goal;
};

export type DietReport = {
  bmi: number;                    // rounded to 1 decimal
  category: BMICategory;
  categoryLabel: string;
  categoryDescription: string;
  bmr: number;                    // Mifflin-St Jeor basal metabolic rate
  recommendedProgramme: {
    name: string;
    description: string;
    href: string;                 // link to the relevant programme page
  };
  tips: string[];                 // 3 actionable tips
  caveat: string;                 // honest note about limitations
};

const BMI_CATEGORIES: Record<BMICategory, { label: string; description: string }> = {
  underweight: {
    label: "Underweight",
    description: "Below the healthy weight range for your height. Often signals undereating, an undiagnosed thyroid issue, or absorption problems.",
  },
  normal: {
    label: "Normal range",
    description: "Within the healthy weight range for Asian Indians. The focus shifts to body composition, micronutrient status, and underlying conditions.",
  },
  overweight: {
    label: "Overweight (at-risk)",
    description: "Above the Asian Indian healthy threshold. Indians develop metabolic complications at lower BMIs than Western populations.",
  },
  "obese-1": {
    label: "Obese — Class I",
    description: "Established obesity. Strongly linked to insulin resistance, fatty liver, hypertension and joint pain. Highly responsive to disciplined dietary intervention.",
  },
  "obese-2": {
    label: "Obese — Class II",
    description: "Significantly elevated metabolic and cardiovascular risk. Coordinated medical + dietary care recommended.",
  },
};

const PROGRAMMES: Record<string, { name: string; description: string; href: string }> = {
  weightGain: {
    name: "Healthy Weight Gain",
    description: "Nutrient-dense Indian meals (paneer, ghee, dal, nuts, eggs) to add lean mass without junk-food calories.",
    href: "/weight-gain.php",
  },
  weightLoss: {
    name: "Weight Loss",
    description: "Sustainable Indian-meal-based fat loss — no crash diets, no rebound. Roti, dal, sabzi calibrated to your body.",
    href: "/weight-loss.php",
  },
  pcos: {
    name: "PCOS / PCOD Diet Plan",
    description: "Hormone-context-sensitive Indian eating for cycle regulation, weight management and skin/hair improvement.",
    href: "/treatment/pcod-pcos.php",
  },
  diabetes: {
    name: "Diabetes Diet Plan",
    description: "Low-glycaemic Indian protocol with meal-medication timing. Most clients see HbA1c drop 1-2 points in 4 months.",
    href: "/treatment/diabetes.php",
  },
  thyroid: {
    name: "Thyroid Diet Plan",
    description: "Anti-inflammatory eating with proper levothyroxine timing — the single biggest fix most thyroid patients miss.",
    href: "/treatment/thyroid.php",
  },
  pregnancy: {
    name: "Pregnancy Diet",
    description: "Trimester-specific nutrition for mother and baby — addresses GDM, anaemia, weight gain targets.",
    href: "/pregnancy-diet.php",
  },
  therapeutic: {
    name: "Therapeutic Weight Loss",
    description: "Coordinated medical-nutrition therapy for elevated BMI alongside metabolic markers. Coordination with your physician.",
    href: "/therapeutic-diet.php",
  },
  figure: {
    name: "Figure Correction",
    description: "Targeted body recomposition — inch loss, muscle tone, body-shape goals. Common for pre-wedding and post-pregnancy.",
    href: "/figure-correction.php",
  },
  maintenance: {
    name: "Maintenance & General Health",
    description: "Structured eating to maintain current weight while improving energy, sleep, digestion and lab values.",
    href: "/therapeutic-diet.php",
  },
};

function classifyBMI(bmi: number): BMICategory {
  if (bmi < 18.5) return "underweight";
  if (bmi < 23.0) return "normal";
  if (bmi < 25.0) return "overweight";
  if (bmi < 30.0) return "obese-1";
  return "obese-2";
}

function mifflinStJeor(weightKg: number, heightCm: number, age: number, gender: Gender): number {
  // Mifflin-St Jeor equation — current clinical standard for BMR estimation
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  if (gender === "female") return Math.round(base - 161);
  return Math.round(base + 5); // male + other (no validated formula for non-binary; use higher of two)
}

function recommendProgramme(category: BMICategory, goal: Goal) {
  // Condition-led goals override BMI category for programme selection
  if (goal === "pcos") return PROGRAMMES.pcos;
  if (goal === "diabetes") return PROGRAMMES.diabetes;
  if (goal === "thyroid") return PROGRAMMES.thyroid;
  if (goal === "pregnancy") return PROGRAMMES.pregnancy;

  // BMI-led recommendations
  if (category === "underweight") return PROGRAMMES.weightGain;
  if (category === "obese-2") return PROGRAMMES.therapeutic;
  if (category === "obese-1") return PROGRAMMES.weightLoss;

  if (goal === "weight-loss") {
    return category === "normal" ? PROGRAMMES.figure : PROGRAMMES.weightLoss;
  }
  if (goal === "weight-gain") return PROGRAMMES.weightGain;
  if (goal === "maintenance") return PROGRAMMES.maintenance;
  return PROGRAMMES.maintenance;
}

function generateTips(category: BMICategory, goal: Goal, gender: Gender): string[] {
  // Cross-cutting tip from a real Indian dietetic context
  const indianBaseline = "Build every plate around half vegetables, one quarter protein (dal/paneer/egg/chicken), one quarter whole-grain carb (bajra/jowar/brown rice/atta roti).";

  if (category === "underweight") {
    return [
      indianBaseline,
      "Eat five small meals — three main + two snacks (nuts, paneer cubes, lassi). Small appetites do better with frequency than larger meals.",
      "Get a TSH + B12 + ferritin panel before assuming the issue is just food. Underweight in Indian adults often hides an undiagnosed thyroid or absorption issue.",
    ];
  }

  if (category === "obese-1" || category === "obese-2") {
    return [
      "Eliminate sweetened beverages (cola, packaged juice, sweet lassi) and refined grain pillars (maida, white rice in large portions). Most weight comes from these two categories alone.",
      indianBaseline + " Aim for a 400-500 calorie daily deficit, not a starvation cut.",
      "Walk 7,000-10,000 steps daily and add two short resistance sessions per week. Diet alone produces weight loss, but loses muscle. Combination protects lean mass.",
    ];
  }

  // PCOS / hormonal-led tips when goal indicates
  if (goal === "pcos") {
    return [
      "Low glycaemic-index carbohydrates only: bajra, jowar, ragi over polished rice. Refined sugar zero. This single change resolves most PCOS-related insulin resistance.",
      "Three meals + one snack daily. Skipped meals worsen cortisol and androgens for PCOS bodies — the opposite of what you want.",
      indianBaseline + " Cinnamon, methi seeds and spearmint tea are evidence-supported adjuncts.",
    ];
  }

  if (goal === "diabetes") {
    return [
      "Pair every carbohydrate meal with adequate protein and fibre. Rice alone spikes glucose; rice + dal + sabzi + curd produces a controlled glucose curve.",
      "If on thyroid or diabetes medication, time meals 30-60 minutes after medication for best absorption. Most clients we see get this wrong.",
      indianBaseline + " Karela, methi, jamun and amla support glucose stability — incorporate weekly.",
    ];
  }

  if (goal === "thyroid") {
    return [
      "Take levothyroxine on empty stomach with plain water. Wait 30-60 minutes before tea, coffee, calcium or iron — the most-missed factor in thyroid management.",
      "1-2 Brazil nuts daily for selenium. Avoid raw cruciferous (cabbage, cauliflower, broccoli) in large quantities — cook them instead.",
      indianBaseline + " Adequate iodine via iodised salt; B12 supplementation if vegetarian.",
    ];
  }

  if (goal === "pregnancy") {
    return [
      "Five small meals to manage nausea (especially first trimester). Eat dry carbs (toast, biscuits) on waking before sitting up.",
      "Iron + folate + calcium daily. Sources: leafy greens, sprouts, dates, jaggery, dairy, eggs.",
      "Avoid raw papaya, raw eggs, unpasteurised dairy, large fish (high mercury), excess caffeine. Plain water 3 L daily.",
    ];
  }

  if (goal === "weight-gain") {
    return [
      "Calorie-dense, nutrient-rich snacks between meals: handful of nuts, paneer cubes, peanut butter on multigrain toast.",
      "Liquid calories from milk-based smoothies and lassi help when solid appetite is small.",
      indianBaseline + " Resistance training 2-3× per week so the weight gained is lean mass, not fat.",
    ];
  }

  // Normal / maintenance / general health
  return [
    indianBaseline,
    "Eat dinner by 8 PM. Late-night eating worsens glucose, sleep quality and weight management — even when total calories are controlled.",
    "Daily walk of 30-45 minutes + 2 resistance sessions per week. Diet alone is incomplete without movement, even at normal BMI.",
  ];
}

export function buildReport(inputs: ReportInputs): DietReport {
  const heightM = inputs.heightCm / 100;
  const rawBmi = inputs.weightKg / (heightM * heightM);
  const bmi = Math.round(rawBmi * 10) / 10;
  const category = classifyBMI(bmi);
  const meta = BMI_CATEGORIES[category];
  const bmr = mifflinStJeor(inputs.weightKg, inputs.heightCm, inputs.age, inputs.gender);
  const programme = recommendProgramme(category, inputs.goal);
  const tips = generateTips(category, inputs.goal, inputs.gender);

  const caveat =
    "This is a starting-point assessment, not a diagnosis. A real plan is built after detailed clinical history, food recall, lab review and individual consultation with Dt. Priyatama.";

  return {
    bmi,
    category,
    categoryLabel: meta.label,
    categoryDescription: meta.description,
    bmr,
    recommendedProgramme: programme,
    tips,
    caveat,
  };
}

export const GOAL_OPTIONS: { value: Goal; label: string }[] = [
  { value: "weight-loss", label: "Weight loss" },
  { value: "weight-gain", label: "Weight gain" },
  { value: "pcos", label: "PCOS / PCOD management" },
  { value: "diabetes", label: "Diabetes management" },
  { value: "thyroid", label: "Thyroid management" },
  { value: "pregnancy", label: "Pregnancy nutrition" },
  { value: "maintenance", label: "Maintenance / general health" },
  { value: "general-health", label: "Just curious about my numbers" },
];
