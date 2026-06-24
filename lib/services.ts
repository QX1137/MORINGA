/**
 * Data for all five top-level service pages.
 * Each ServiceData drives one page via the ServicePage template component.
 * Content targets 1,500+ words/page to clear Google thin-content thresholds.
 */

export type FAQ = { q: string; a: string };

export type ApproachStep = {
  step: number;
  title: string;
  description: string;
};

export type ServiceData = {
  slug: string;            // matches the path under app/ (without .php)
  phpPath: string;         // canonical .php URL preserved from old site
  title: string;           // short noun phrase, used in nav + cards
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroSubhead: string;
  heroImage: string;
  introLead: string;       // ~80-word opening paragraph
  approach: ApproachStep[];
  pillars: { title: string; body: string }[];
  audienceList: string[];
  includes: string[];
  faqs: FAQ[];
  relatedServices: string[]; // slugs of related services
  serviceType: string;       // Schema.org Service type
};

export const SERVICES: Record<string, ServiceData> = {
  "weight-loss": {
    slug: "weight-loss",
    phpPath: "/weight-loss.php",
    title: "Weight Loss",
    h1: "Weight Loss Dietitian in Gurgaon",
    metaTitle: "Top Nutritionist / Dietitian For Weight loss in Gurgaon - Go Moringa",
    metaDescription: "Go Moringa Clinic: top nutritionist for weight loss in Gurgaon. Personalised Indian diet plans, full body assessment, sustainable fat loss without side effects. 10,000+ clients, 20 years experience.",
    heroSubhead: "Lose weight the practical, Indian-meal way — no crash diets, no rebound, no boring meal-replacement shakes.",
    heroImage: "/assets/services/weight-loss.jpg",
    introLead: "Being overweight is not just a number on the scale — it shows up as joint pain, low energy, poor sleep, and the slow creep of lifestyle diseases. At Go Moringa, Dt. Priyatama Srivastava has helped over 10,000 clients in Gurgaon and across India lose weight in a way they can actually live with. The plans are built around dal, roti, sabzi, and curd — not protein bars and meal-replacement powders.",
    approach: [
      { step: 1, title: "Comprehensive health assessment", description: "Detailed history, family medical background, current medications, sleep, stress, water intake, and a 7-day food recall to understand what you actually eat versus what you think you eat." },
      { step: 2, title: "Body composition + lab review", description: "BMI, waist-hip ratio, body-fat percentage where measurable. We review your latest blood work — thyroid, HbA1c, lipid profile, vitamin D and B12 — because weight loss without fixing the underlying cause is temporary." },
      { step: 3, title: "Customised Indian diet plan", description: "A meal-by-meal plan built around your kitchen, your office hours, and your family meals. No exotic ingredients, no banned food groups — portion-controlled Indian eating that fits your day." },
      { step: 4, title: "Daily follow-up + adjustment", description: "Weight, measurements and energy a daily check-in. Plans are adjusted as your body responds, plateaus are broken with targeted shifts in carbs, protein timing, or activity." },
      { step: 5, title: "Maintenance + lifestyle integration", description: "The hardest part of weight loss is keeping it off. Once you hit your target, we transition you to a maintenance protocol designed to keep the weight off for years, not weeks." },
    ],
    pillars: [
      { title: "Indian food, every day", body: "Our weight-loss plans are built on the meals you already eat — roti, dal, rice, sabzi, curd, paneer, and seasonal fruit. Portions and combinations are calibrated to your body's energy needs, but the food remains familiar and family-friendly. You will not be eating boiled chicken and broccoli in week three." },
      { title: "Sustainable, not punishing", body: "We aim for 2-4 kg of fat loss per month — a pace that protects muscle mass, hormone balance, and skin elasticity. Crash diets that promise 10 kg in a month deliver short-term water loss and long-term metabolic damage. Our clients lose weight slowly, and keep it off." },
      { title: "Addresses the root cause", body: "Most stubborn weight in adults over 30 has an underlying driver: insulin resistance, untreated thyroid issue, PCOS, gut dysbiosis, or chronic sleep deprivation. We screen for these and either address them through diet, or refer you to the right specialist before chasing the weight." },
      { title: "Built for Indian women's bodies", body: "Hormonal weight gain after pregnancy, PCOS-driven belly fat, perimenopausal stubbornness, post-thyroid medication weight — these are the most common patterns we see, and the ones generic weight-loss programmes miss entirely. Our plans are calibrated for these realities." },
      { title: "Built for Indian men's bodies", body: "Visceral fat, late-night dinners, business travel eating, alcohol-related weight, gym-without-results plateaus — the typical Gurgaon corporate male profile. We integrate plans with your schedule and travel patterns rather than fighting them." },
      { title: "No side effects, no medications", body: "We do not prescribe weight-loss pills, fat burners, or appetite suppressants. We do not recommend keto, intermittent fasting protocols, or any approach that excludes entire food groups long-term. Just disciplined, balanced eating that your body sustains naturally." },
    ],
    audienceList: [
      "Adults 25-65 with 5 kg or more to lose",
      "Post-pregnancy women looking to return to pre-baby weight safely",
      "Pre-wedding brides and grooms with 6-12 month timelines",
      "PCOS, hypothyroid, and pre-diabetic clients needing weight loss + condition management",
      "Corporate professionals with sedentary jobs and irregular eating",
      "People who have tried gym, keto, intermittent fasting, and failed to sustain results",
    ],
    includes: [
      "Initial 60-minute consultation (in-person at Sector 49 clinic or video call)",
      "Detailed customised diet plan delivered within 48 hours",
      "Daily follow-up — food photo + weight reviewed daily, plan adjusted",
      "WhatsApp access for daily questions",
      "Healthy recipe library tailored to your plan",
      "Supplement guidance where genuinely needed (we don't push products)",
      "Restaurant + travel eating guidance",
    ],
    faqs: [
      { q: "How much weight can I expect to lose per month?", a: "A healthy, sustainable pace is 2-4 kg per month of actual fat loss. The first 2-3 weeks may show faster movement on the scale due to water loss as carb intake stabilises. After that, we target consistent fat loss while preserving muscle. Crash diets that promise 8-10 kg/month rebound entirely within a year — our clients lose slower and keep it off." },
      { q: "Will I have to give up rice, roti, or sweets?", a: "No. Rice and roti stay in your plan — portions are calibrated to your goal. Sweets are scheduled as planned indulgences (not banned) so you don't binge. The Indian diet is balanced when portion-controlled; we don't ask you to eat foreign foods." },
      { q: "Do you provide online weight loss consultation?", a: "Yes. We consult clients across India and worldwide via video call and WhatsApp. The protocol is identical to in-clinic — detailed assessment, customised plan, daily follow-ups. Diet plans are shared as PDFs and via WhatsApp." },
      { q: "How long should I follow a weight-loss diet plan?", a: "The active fat-loss phase usually runs 3-6 months depending on how much you have to lose. After hitting your goal weight, we transition you to a 2-3 month maintenance plan that locks in the change. Most clients reach a sustainable eating pattern by month 9." },
      { q: "What if I have PCOS or thyroid issues?", a: "Both are extremely common among women coming to us for weight loss. The diet plan is calibrated for the hormonal context — lower glycaemic carbs, anti-inflammatory food choices, specific timing for thyroid medication. Weight loss with PCOS or hypothyroid is slower but absolutely achievable." },
      { q: "Will I have to take supplements?", a: "Only where genuinely needed and only based on lab values. If you are deficient in vitamin D, B12, or iron, we recommend correcting those because they directly affect weight loss and energy. We do not push fat burners, weight-loss teas, or any product line." },
      { q: "What does the consultation fee cover?", a: `The consultation fee covers initial assessment + the customised plan + daily follow-ups for the duration of your package. Multi-month packages offer better per-month rates. Call +91-9910922899 or WhatsApp for current package pricing and to find the right fit for your goal.` },
      { q: "Is the clinic accessible from DLF, Sushant Lok, or Cyber City?", a: "Yes. The clinic is at Unitech Rodio Drive, D-117 & 118, South City II, Sector 49 — 10-15 minutes from DLF Phase 3, Sushant Lok and Cyber City via Golf Course Road or NH-8. Most clients also use online consultations to avoid the drive." },
    ],
    relatedServices: ["figure-correction", "therapeutic-diet"],
    serviceType: "MedicalTherapy",
  },

  "weight-gain": {
    slug: "weight-gain",
    phpPath: "/weight-gain.php",
    title: "Weight Gain",
    h1: "Healthy Weight Gain Dietitian in Gurgaon",
    metaTitle: "Top Nutritionist / Dietitian For Weight Gain in Gurgaon - Go Moringa",
    metaDescription: "Healthy weight gain diet plans by Go Moringa — nutrient-dense Indian meals to build mass without junk food. Dt. Priyatama Srivastava, 20 years of experience.",
    heroSubhead: "Build healthy weight with nutrient-dense Indian meals — no protein powders, no junk food shortcuts.",
    heroImage: "/assets/services/weight-gain.jpg",
    introLead: "Being underweight is just as much a health concern as being overweight — but it's rarely discussed. Low body weight in adults can mean weakened immunity, brittle bones, fertility issues, persistent fatigue, and slow recovery from illness. At Go Moringa, we build healthy weight using calorie-dense, nutrient-rich Indian meals — not mass gainers, not whey protein, not late-night McDonald's runs.",
    approach: [
      { step: 1, title: "Rule out medical causes first", description: "Persistent low weight often hides an undiagnosed thyroid issue, gut absorption problem, diabetes, or chronic infection. Before increasing calories, we review your bloodwork and refer you for further testing if anything looks off." },
      { step: 2, title: "Establish your maintenance calorie need", description: "Most underweight clients dramatically underestimate how little they eat. We do a 7-day food recall to find your actual intake, then calculate the calorie surplus needed for slow, lean weight gain." },
      { step: 3, title: "Build a 5-6 meal Indian plan", description: "Healthy weight gain comes from frequent, nutrient-dense meals — paneer, full-fat curd, ghee, nuts, eggs, lentils, whole grains. We map these onto your schedule so eating becomes manageable, not a chore." },
      { step: 4, title: "Add the right kind of activity", description: "Gaining without activity = fat gain. We coordinate diet with strength training (or guide you to it if new) so the weight you put on is muscle and structural mass, not belly fat." },
      { step: 5, title: "Daily progress + tweaks", description: "Target is 1-2 kg/month of clean weight gain. If progress stalls, we adjust portions, meal timing, or sleep patterns. Most clients reach their target weight within 4-8 months." },
    ],
    pillars: [
      { title: "Calorie surplus, not junk surplus", body: "Eating more pizza, fries and ice cream will add weight — and along with it, fatty liver, insulin resistance, and acne. We use nutrient-dense calorie sources: nuts, seeds, ghee, full-fat dairy, eggs, lentils, whole grains. Same calories, completely different body composition outcome." },
      { title: "Tuned for hard gainers", body: "Some bodies resist weight gain — fast metabolism, naturally small appetite, high physical activity. We use frequent smaller meals, calorie-dense snacks between meals, and liquid calories (milk-based smoothies, lassi) to make the surplus achievable." },
      { title: "Post-illness recovery weight", body: "After dengue, typhoid, surgery, or extended hospitalisation, losing 5-8 kg of muscle is common. We have a specific protocol for recovery — slowly rebuilding nutrient stores, then gradually adding calories to restore lean mass." },
      { title: "Healthy gain for women", body: "Many women come to us underweight from years of dieting, PCOS-related under-eating, or after eating disorders. We rebuild a healthy relationship with food, restore hormonal balance, and add weight at a pace that feels safe psychologically." },
      { title: "No protein powders, no mass gainers", body: "Mass gainer powders are mostly cheap maltodextrin (sugar) — they add fat, not muscle. Whey can be useful for athletic clients but isn't necessary. Whole-food protein from dal, paneer, eggs, milk, and chicken is sufficient for healthy weight gain in 95% of clients." },
    ],
    audienceList: [
      "Underweight adults (BMI under 18.5)",
      "Post-illness or post-surgery recovery",
      "Underweight teens and young adults",
      "Women recovering from eating disorders (with medical oversight)",
      "Athletes wanting to add lean mass",
      "Pre-pregnancy weight gain for women with low BMI",
    ],
    includes: [
      "Initial assessment + medical history review",
      "Customised 5-6 meal Indian diet plan",
      "Snack and smoothie recipe library",
      "Daily follow-ups + adjustments",
      "WhatsApp access for daily questions",
      "Strength training coordination guidance",
    ],
    faqs: [
      { q: "How quickly can I gain weight healthily?", a: "1-2 kg per month is the sustainable target for lean weight gain. Faster than that and you're mostly adding fat, which defeats the purpose. Most clients reach their target weight in 4-8 months." },
      { q: "Do I need protein powder or mass gainer?", a: "Almost never. Indian diets with adequate dal, paneer, milk, eggs and curd provide more than enough protein for healthy weight gain. Mass gainers are largely cheap sugar that adds fat. We use whole food first." },
      { q: "I have a small appetite — how do I eat more?", a: "We work around small appetites with calorie-dense small meals — a handful of nuts, a smoothie, a paneer paratha. Five 400-calorie meals are easier than three 700-calorie ones. Liquid calories (lassi, milk-based smoothies) also help." },
      { q: "Will I have to do gym?", a: "Some form of resistance training accelerates lean weight gain dramatically. It doesn't have to be a gym — bodyweight exercises at home work for beginners. Without any activity, most extra calories become fat instead of muscle." },
      { q: "I'm underweight because of stress and irregular eating. Can you help?", a: "Yes, and this is one of the most common patterns we see in young professionals in Gurgaon. We restructure your eating schedule so meals happen even on stressed days — meal prep, snack stashes at office, smoothie recipes that take 2 minutes." },
    ],
    relatedServices: ["therapeutic-diet", "pregnancy-diet"],
    serviceType: "MedicalTherapy",
  },

  "figure-correction": {
    slug: "figure-correction",
    phpPath: "/figure-correction.php",
    title: "Figure Correction",
    h1: "Figure Correction Diet Plan in Gurgaon",
    metaTitle: "Diet Plan For Figure Correction By Dietitian in Gurgaon - Go Moringa",
    metaDescription: "Figure correction diet plans by Go Moringa — targeted inch loss, toning, body composition improvement. Indian meals, sustainable approach. 20 years experience.",
    heroSubhead: "Targeted plans for inch loss, toning, and body recomposition — not just numbers on the scale.",
    heroImage: "/assets/services/figure-correction.jpg",
    introLead: "Sometimes the scale doesn't tell the full story. You might be in the 'normal' weight range but unhappy with how clothes fit, where your body holds fat, or how you look in photos. Figure correction is about body composition — reducing inches in specific areas, improving muscle tone, and reshaping the body — not just weight loss. At Go Moringa, we build figure-correction plans for pre-wedding brides, post-pregnancy women, and anyone whose body shape doesn't match their target.",
    approach: [
      { step: 1, title: "Body measurements + photos", description: "We track waist, hips, thighs, arms, and chest measurements alongside the scale. Many figure-correction clients lose 3-5 inches off their waist before the scale moves much — because muscle is replacing fat." },
      { step: 2, title: "Identify the storage pattern", description: "Belly fat (apple shape) responds differently than hip/thigh fat (pear shape). Hormonal weight (PCOS, perimenopause) responds differently than calorie-surplus weight. We tailor the diet to your specific fat-storage pattern." },
      { step: 3, title: "Build a low-inflammation Indian diet", description: "Visible inches often come from inflammation as much as fat. Plans emphasise anti-inflammatory foods — turmeric, ginger, leafy greens, omega-3 rich seeds, fermented foods — alongside calorie balance." },
      { step: 4, title: "Coordinate with movement", description: "Figure correction without movement is incomplete. We coordinate with your existing workout (or recommend a basic strength + cardio mix) so inches reduce in the right places." },
      { step: 5, title: "Track every 2 weeks", description: "Measurements + progress photos every 2 weeks. Plan adjustments based on which areas are responding and which need a different approach." },
    ],
    pillars: [
      { title: "Inches, not just kilograms", body: "Two clients at the same weight can look completely different — muscle is denser than fat, so a 60kg toned body looks dramatically different from a 60kg untoned body. Figure correction targets the composition, not just the number on the scale." },
      { title: "Pre-wedding figure plans", body: "Brides and grooms with 4-12 month timelines are our most common figure-correction clients. We build a phased plan: aggressive inch loss in months 1-3, fine-tuning in months 4-6, sustainable maintenance through the wedding. Skin, hair, and energy plans run alongside." },
      { title: "Post-pregnancy figure recovery", body: "Belly pooch, hip widening, arm softness, and loose skin after childbirth respond best to a coordinated diet + core rehabilitation approach. We work alongside post-partum physiotherapists where needed. Breastfeeding mothers get safe protocols with adequate calorie buffers." },
      { title: "Stubborn pocket fat", body: "Belly fat in men, hip-thigh fat in women, and arm fat across genders are the three most common 'stubborn' areas. These often have a hormonal or insulin-resistance component beyond simple calorie balance. We identify and address the underlying driver." },
      { title: "Slow, then maintained", body: "Most figure-correction goals are achieved in 4-6 months of focused work. After that, we transition you to a maintenance plan that keeps inches off without the intensity of the active phase." },
    ],
    audienceList: [
      "Pre-wedding brides and grooms",
      "Post-pregnancy women wanting to restore pre-baby shape",
      "Adults at normal BMI but unhappy with body composition",
      "Stubborn belly fat, hip fat, or arm fat",
      "Models, actors, or professionals needing on-camera readiness",
    ],
    includes: [
      "Detailed measurement + photo assessment",
      "Body composition tracking",
      "Customised Indian diet plan focused on inch loss",
      "Movement coordination guidance",
      "Daily progress reviews",
      "Skin + hair nutrition support",
    ],
    faqs: [
      { q: "What's the difference between weight loss and figure correction?", a: "Weight loss focuses on reducing the number on the scale. Figure correction focuses on body composition — reducing fat in specific areas, building muscle tone, and reshaping the body — even if your weight stays the same or barely changes. Most figure-correction clients lose inches faster than they lose kilograms." },
      { q: "I'm getting married in 6 months — what's achievable?", a: "6 months is a great timeline. Most brides see 4-8 inches off the waist, visible jawline definition, brighter skin from improved nutrition, and noticeable difference in how lehengas/saris fit. We do this without crash diets that would leave you tired or dehydrated on the wedding day." },
      { q: "Can I do figure correction while breastfeeding?", a: "Yes, with adjusted calorie targets. Breastfeeding mothers need approximately 400-500 extra calories daily to maintain milk supply. Figure-correction plans for new mothers are gentler — slower inch loss, more focus on nutrient density and core rehabilitation." },
      { q: "How is this different from cosmetic procedures?", a: "We do not recommend liposuction, cool-sculpting, or fat-dissolving injections as primary interventions. Diet + movement gives sustainable results without the rebound risk that comes after most cosmetic procedures. Many clients who came to us post-procedure to maintain results would have been better served starting with diet." },
    ],
    relatedServices: ["weight-loss", "pregnancy-diet"],
    serviceType: "MedicalTherapy",
  },

  "therapeutic-diet": {
    slug: "therapeutic-diet",
    phpPath: "/therapeutic-diet.php",
    title: "Therapeutic Diet",
    h1: "Therapeutic Diet Clinic in Gurgaon",
    metaTitle: "Go Moringa: Therapeutic Diet Clinic in Gurgaon",
    metaDescription: "Therapeutic diet plans by Go Moringa — clinical nutrition for diabetes, hypertension, thyroid, PCOS, kidney, heart conditions. Dt. Priyatama Srivastava, 20 years experience.",
    heroSubhead: "Clinical nutrition for chronic conditions — diabetes, hypertension, thyroid, kidney, heart, PCOS. Diet that works alongside your medication.",
    heroImage: "/assets/services/therapeutic-diet.jpg",
    introLead: "A therapeutic diet is medical nutrition therapy — specific dietary protocols designed to manage, slow, or in some cases reverse chronic conditions. Diabetes, hypertension, thyroid disorders, PCOS, kidney conditions, heart disease, and inflammatory disorders all respond significantly to targeted dietary intervention. Go Moringa's therapeutic diet protocols are built on 20 years of clinical practice with 10,000+ clients, designed to complement (not replace) your physician's care.",
    approach: [
      { step: 1, title: "Coordinate with your physician", description: "We review your medications, recent lab work, and treatment plan before designing the diet. For conditions like diabetes and thyroid, diet timing relative to medication matters significantly." },
      { step: 2, title: "Identify nutritional drivers", description: "Most chronic conditions have a nutritional component — inflammation, insulin resistance, micronutrient deficiency, gut dysbiosis. We test or screen for the most likely drivers in your case." },
      { step: 3, title: "Build a condition-specific plan", description: "Each condition has specific dietary requirements — low-GI for diabetes, low-sodium for hypertension, anti-inflammatory for thyroid and PCOS, low-protein for advanced kidney disease. The plans are Indian-meal-based and clinically appropriate." },
      { step: 4, title: "Monitor lab values", description: "Therapeutic diets are measured by lab improvements — HbA1c, fasting glucose, lipid profile, TSH, kidney function, inflammatory markers. We track these over 3-6 months and adjust the plan based on what's responding." },
      { step: 5, title: "Long-term management", description: "Chronic conditions are managed for life. Once we hit target lab values, we transition you to a maintenance protocol designed to keep those values stable for years." },
    ],
    pillars: [
      { title: "Diabetes diet", body: "Type 2 diabetes responds dramatically to dietary intervention. Most of our diabetic clients see HbA1c drop by 1-2 percentage points within 4 months. The diet emphasises low-glycaemic carbohydrates, meal timing aligned to medication, adequate protein, and elimination of refined sugar. Many clients reduce or come off medication entirely (under physician supervision)." },
      { title: "Hypertension diet", body: "DASH-protocol-based Indian eating — emphasis on potassium-rich foods (banana, coconut water, leafy greens), reduced sodium, low refined carbs. Most clients see systolic pressure drop 10-15 mmHg within 8 weeks of disciplined adherence." },
      { title: "Thyroid + PCOS diet", body: "Both conditions are inflammation-driven and respond to similar protocols — adequate iodine and selenium (for thyroid), anti-inflammatory foods, low-glycaemic carbs, specific micronutrients (vitamin D, B12, magnesium). Thyroid medication timing relative to meals is critical and often missed." },
      { title: "Heart disease + lipid management", body: "Post-MI and post-bypass clients need carefully designed diets that lower LDL, raise HDL, reduce triglycerides, and don't strain a recovering heart. We've worked with cardiology teams across Gurgaon hospitals for two decades on these protocols." },
      { title: "Kidney diet", body: "CKD diets are highly individualised — protein, potassium, phosphorus, and sodium restrictions vary by stage. We design plans for stages 3-4 CKD that are Indian-meal-friendly while staying within clinical limits. Dialysis patients have specific separate protocols." },
      { title: "Inflammatory + autoimmune", body: "Rheumatoid arthritis, autoimmune thyroiditis, lupus, and inflammatory bowel conditions respond to anti-inflammatory dietary patterns — Mediterranean-influenced Indian eating, elimination of inflammatory triggers, gut-supportive foods." },
    ],
    audienceList: [
      "Diabetics (Type 1, Type 2, gestational, pre-diabetic)",
      "Hypertension and cardiovascular disease",
      "Hypothyroidism, hyperthyroidism, autoimmune thyroid disease",
      "PCOS / PCOD",
      "Chronic kidney disease (stages 3-4)",
      "Liver conditions (fatty liver, hepatitis recovery)",
      "Gout and high uric acid",
      "Osteoporosis and bone health",
      "Post-cancer treatment recovery",
    ],
    includes: [
      "Detailed clinical assessment + lab review",
      "Coordination with your physician's care plan",
      "Customised condition-specific Indian diet",
      "Monthly progress reviews + lab tracking",
      "Medication-meal timing guidance",
      "Long-term management plan",
    ],
    faqs: [
      { q: "Can diet alone reverse my diabetes?", a: "For early-stage Type 2 diabetes, significant remission is possible with disciplined dietary intervention — many of our clients have come off all diabetes medication while maintaining normal blood glucose. For longer-standing diabetes or Type 1, diet dramatically reduces complications and medication needs even if full reversal isn't achievable. Either way, you'll work with your physician, not against." },
      { q: "Will I have to stop eating rice or roti?", a: "No. We don't eliminate food groups. Portions and pairings change — rice paired with adequate protein and fibre has a different glucose impact than rice alone. We work with your existing Indian meal patterns rather than imposing foreign eating styles." },
      { q: "How does this work alongside my doctor?", a: "We do not replace your physician — we complement their care. Most conditions need both medication and dietary intervention. We coordinate with your treating doctor where helpful, and we never advise you to stop or change medication without their input." },
      { q: "How long until I see lab improvements?", a: "HbA1c reflects 3-month average glucose, so dietary changes show up after 3 months. Lipid profile responds in 6-8 weeks. Blood pressure responds in 4-6 weeks. Thyroid takes 3 months. We schedule lab repeats accordingly." },
      { q: "I'm on insulin — can diet still help?", a: "Yes, often substantially. Diet helps reduce insulin needs, improve glucose stability, prevent hypoglycaemia, and reduce long-term complications. Many insulin-dependent clients see their insulin doses halve over 6 months of disciplined eating." },
    ],
    relatedServices: ["weight-loss", "pregnancy-diet"],
    serviceType: "MedicalTherapy",
  },

  "pregnancy-diet": {
    slug: "pregnancy-diet",
    phpPath: "/pregnancy-diet.php",
    title: "Pregnancy Diet",
    h1: "Healthy Pregnancy Diet Plans in Gurgaon",
    metaTitle: "Healthy Pregnancy Diet by Dietitian in Gurgaon - Go Moringa",
    metaDescription: "Pregnancy diet plans by Go Moringa — trimester-specific nutrition for mother and baby. Gestational diabetes, anaemia, weight management during pregnancy.",
    heroSubhead: "Safe, trimester-specific Indian nutrition for mother and baby — including gestational diabetes and high-risk pregnancies.",
    heroImage: "/assets/services/pregnacy-diet.jpg",
    introLead: "Pregnancy is the most nutritionally demanding phase of a woman's life. The right diet supports a healthy baby, prevents complications like gestational diabetes and anaemia, manages weight gain within safe limits, and prepares your body for delivery and recovery. At Go Moringa, we design trimester-specific pregnancy diet plans for women across Gurgaon and Delhi NCR — from early-pregnancy nausea through postpartum recovery.",
    approach: [
      { step: 1, title: "Trimester + risk assessment", description: "First trimester focuses on managing nausea while ensuring folate, iron, and calorie adequacy. Second trimester optimises baby's growth. Third trimester manages weight gain and prepares for delivery. High-risk pregnancies (GDM, hypertension, twins) get specialised protocols." },
      { step: 2, title: "Coordinate with your obstetrician", description: "We review your medical history, current vitals, weight gain trajectory, and any pregnancy complications with reference to your obstetrician's guidance. Diet runs alongside their care plan, not in opposition." },
      { step: 3, title: "Manage common pregnancy issues", description: "Nausea, heartburn, constipation, gestational diabetes, anaemia, swelling — each responds to specific dietary adjustments. We address whatever's bothering you in the current trimester." },
      { step: 4, title: "Indian meal plans, baby-safe", description: "We avoid foods medically restricted in pregnancy (raw fish, unpasteurised dairy, certain herbal teas) and emphasise nutrient-dense Indian staples — sprouts, dals, paneer, leafy greens, eggs, full-fat dairy." },
      { step: 5, title: "Postpartum + lactation support", description: "The 6 weeks postpartum and the entire breastfeeding phase need careful nutrition for milk supply, mother's recovery, and avoiding deficiencies. Our plans cover this full continuum." },
    ],
    pillars: [
      { title: "Trimester-specific protocols", body: "Pregnancy nutrition is not static — first-trimester nausea requires bland, frequent small meals; second-trimester baby growth needs adequate protein and calcium; third trimester needs careful glucose management. We adjust the plan as you progress." },
      { title: "Gestational diabetes (GDM)", body: "GDM affects approximately 1 in 4 Indian pregnancies — and dietary management is the first-line treatment. We design low-glycaemic Indian meal plans that keep blood sugar stable, prevent the need for insulin in most cases, and protect both mother and baby. Postpartum follow-up reduces Type 2 diabetes risk later." },
      { title: "Anaemia + iron deficiency", body: "Iron deficiency anaemia is extremely common in Indian pregnancies. Diet alone can correct mild-to-moderate cases — emphasis on iron-rich foods (sprouts, leafy greens, jaggery, dates) combined with vitamin C for absorption. Severe anaemia coordinated with obstetrician for supplementation." },
      { title: "Weight management in pregnancy", body: "Both underweight gain and overweight gain risk complications. Target is 10-12 kg total gain for normal-BMI women, less for overweight, more for underweight. We build plans that hit this target while ensuring baby's nutritional needs." },
      { title: "Postpartum + lactation", body: "The first 6 weeks postpartum need protein for tissue repair, iron for blood replacement, and calorie adequacy for milk supply. Indian postpartum traditions (panjiri, gond ke laddu, methi water) have nutritional logic — we integrate these where appropriate." },
      { title: "Family + cultural sensitivity", body: "Pregnancy diet in Indian families involves grandmothers, mothers-in-law, traditions, and well-meaning advice. We work with the family meal rather than imposing isolation, and we explain the why behind every recommendation so the whole household supports the plan." },
    ],
    audienceList: [
      "Pregnant women in any trimester",
      "Gestational diabetes (GDM)",
      "Hypothyroid pregnancy",
      "PCOS-related pregnancy",
      "Twin / multiple pregnancies",
      "Underweight or overweight at conception",
      "Anaemia in pregnancy",
      "Postpartum recovery and breastfeeding mothers",
    ],
    includes: [
      "Trimester-by-trimester diet plan",
      "Specific protocols for GDM, anaemia, hypertension as needed",
      "Coordination with your obstetrician",
      "Postpartum + lactation plan",
      "Indian recipe + meal-prep guidance",
      "Family meal integration support",
    ],
    faqs: [
      { q: "When in pregnancy should I start seeing a dietitian?", a: "Ideally in the first trimester, even before any complications arise. Early nutritional optimisation has the biggest impact on baby's development. That said, it's never too late — we frequently start with women in the third trimester managing GDM or weight issues, and still make significant difference." },
      { q: "I have gestational diabetes. Can diet manage it without insulin?", a: "For most GDM cases, yes — disciplined dietary management keeps blood sugar in target range without insulin. About 20-30% of cases still require insulin support, which is safe and effective. We coordinate with your obstetrician on this decision." },
      { q: "What about pregnancy nausea — I can't keep food down?", a: "First-trimester nausea is one of the most common things we help with. Specific strategies — small frequent meals, dry carb-rich snacks on waking, ginger tea, separating fluids from solids, avoiding trigger foods — help most women through the nausea phase without nutrient deficiency." },
      { q: "How much weight should I gain?", a: "Total target depends on your pre-pregnancy BMI — normal BMI women should gain 10-12 kg, underweight women slightly more, overweight women slightly less. We track weekly weight gain and ensure baby's growth is on track alongside." },
      { q: "Can I continue with my current diet (vegetarian/vegan/Jain)?", a: "Yes. We work with all dietary patterns. Vegetarian and Jain pregnancies need careful attention to protein, B12, iron, and omega-3 — we plan for these specifically. Vegan pregnancies require more careful supplementation planning, coordinated with your obstetrician." },
    ],
    relatedServices: ["therapeutic-diet", "weight-gain"],
    serviceType: "MedicalTherapy",
  },
};

export const SERVICE_LIST = Object.values(SERVICES);

export function getService(slug: string): ServiceData | undefined {
  return SERVICES[slug];
}

// ─── Old-site image purge (2026-05-21) ──────────────────────────────────────
// Override every heroImage with the curated Unsplash mapping. The /assets/...
// paths above are kept in source for change-history visibility, but never
// reach the client. See lib/photo-strategy.ts.
import { heroForService } from "./photo-strategy";
for (const slug of Object.keys(SERVICES)) {
  SERVICES[slug].heroImage = heroForService(slug);
}
