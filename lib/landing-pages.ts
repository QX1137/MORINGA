/**
 * Keyword landing pages — net-new SEO pages targeting high-intent search
 * terms the site did not previously have a dedicated page for. These are
 * ADDITIVE: every legacy .php URL stays preserved (see next.config rewrites).
 *
 * Six plan/service-intent pages live here and render through the shared
 * <LandingPage> template. The five hyperlocal pages reuse the existing
 * LocationData / <LocationPage> structure (see lib/locations.ts).
 *
 * Content is written to clear the no-thin-content bar: every page carries a
 * real intro, 4–6 substantive prose sections, a process breakdown, a sample
 * Indian-meal day where the search intent is "diet chart/plan", 5–6 FAQs, and
 * a curated internal-link cluster for E-E-A-T and crawl depth.
 */

import type { FAQ } from "./services";
import { PHOTOS } from "./images";
import { REAL } from "./photo-strategy";

export type SampleMeal = { time: string; meal: string; items: string };
export type LandingSection = { heading: string; body: string };
export type LandingStep = { title: string; body: string };
export type RelatedLink = { label: string; href: string; note: string };

export type LandingPage = {
  slug: string;
  /** Clean canonical URL, e.g. "/weight-loss-diet-plan". */
  path: string;
  theme: "online" | "weight-loss" | "condition";
  primaryKeyword: string;
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubhead: string;
  heroImage: string;
  /** Opening paragraph — rendered with an editorial drop cap. */
  introLead: string;
  sections: LandingSection[];
  highlights: string[];
  process: LandingStep[];
  /** Sample Indian-meal day — present on diet-plan/chart-intent pages. */
  sampleDay?: SampleMeal[];
  sampleDayNote?: string;
  faqs: FAQ[];
  relatedLinks: RelatedLink[];
};

export const LANDING_PAGES: Record<string, LandingPage> = {
  // ─────────────────────────────────────────── 1. ONLINE CONSULTATION
  "online-dietitian-consultation": {
    slug: "online-dietitian-consultation",
    path: "/online-dietitian-consultation",
    theme: "online",
    primaryKeyword: "online dietitian consultation",
    eyebrow: "Consult from anywhere",
    metaTitle: "Online Dietitian Consultation — Diet Plans Across India | Go Moringa",
    metaDescription:
      "Online dietitian consultation with Dt. Priyatama Srivastava — 20 years of clinical practice, 10,000+ clients. Personalised Indian diet plans by WhatsApp & video, anywhere in India or abroad.",
    h1: "Online Dietitian Consultation",
    heroSubhead:
      "The same clinical rigour as the Sector 49 clinic — assessment, a written plan, weekly review — delivered over WhatsApp and video, anywhere in India or abroad.",
    heroImage: REAL.clinicConsultation,
    introLead:
      "An online dietitian consultation is not a watered-down version of a clinic visit. It is the same process — a detailed health and lifestyle assessment, a diet plan written for your body and your kitchen, and a weekly review that adjusts the plan as your labs and weight move. The only thing that changes is that the conversation happens on your phone instead of across a desk.",
    sections: [
      {
        heading: "Why online works as well as in-clinic",
        body: "Nutrition counselling is, fundamentally, a conversation and a document. A dietitian needs your history, your blood work, your daily routine and your food preferences — all of which travel perfectly over a video call and a few photographs of your reports. The plan itself is a written document. The weekly follow-up is a structured check-in. None of this needs you to be in the room. Twenty years of in-clinic practice taught Dt. Priyatama exactly which questions matter; the online format simply removes the commute.",
      },
      {
        heading: "Who chooses online consultation",
        body: "Professionals in Gurgaon and Delhi NCR who cannot fit a clinic visit into a working week. Clients in Bengaluru, Mumbai, Pune, Hyderabad, Chandigarh and tier-2 and tier-3 towns where a clinical dietitian with two decades of experience is hard to find locally. NRIs in the Gulf, the UK, the US, Australia and Singapore who want an Indian-meal plan built by someone who understands their kitchen. Parents managing a child's nutrition, and elderly clients for whom travel is difficult.",
      },
      {
        heading: "What you receive",
        body: "A written, personalised diet plan built around Indian meal patterns — roti, dal, rice, sabzi, regional dishes — adjusted to your goal, your medical conditions and your daily schedule. A direct WhatsApp line to ask questions between reviews. A weekly follow-up where the plan is revised based on your progress. Guidance on reading your own lab reports so you understand what is improving and why.",
      },
      {
        heading: "Conditions managed online",
        body: "Weight loss and weight gain, PCOS and PCOD, type-2 diabetes and pre-diabetes, thyroid disorders, high cholesterol and blood pressure, fatty liver, pregnancy and post-partum nutrition, and therapeutic diets for chronic conditions. If a condition genuinely needs in-person assessment, you will be told so honestly rather than sold a plan.",
      },
      {
        heading: "Languages and payment",
        body: "Consultations are conducted in English and Hindi. Payment is online and the process is explained fully before you commit — there is no obligation after the first conversation, which is free. You will be told plainly whether dietary intervention is appropriate for your goal.",
      },
    ],
    highlights: [
      "20 years of clinical practice — the same dietitian, online",
      "Personalised Indian-meal plans, not generic PDFs",
      "Weekly follow-up + open WhatsApp line",
      "Serves all of India and NRI clients worldwide",
      "First 15-minute conversation is free",
    ],
    process: [
      { title: "Book a slot", body: "Message on WhatsApp or call the clinic. Pick a consultation time that suits your schedule and timezone." },
      { title: "Health assessment", body: "A detailed video or phone call covering your history, lifestyle, food habits and goals. Share recent lab reports as photographs." },
      { title: "Receive your plan", body: "A written, personalised diet plan reaches you — built around your kitchen, your conditions and your daily routine." },
      { title: "Weekly review", body: "Each week, a structured follow-up reviews your progress and revises the plan. Questions in between go to a direct WhatsApp line." },
    ],
    faqs: [
      { q: "Is an online diet consultation as effective as visiting the clinic?", a: "Yes. The assessment, the written plan and the weekly review are identical to an in-clinic engagement. Lab reports are shared as photographs and the consultation happens over video or phone. Thousands of online clients across India and abroad have achieved the same results as in-clinic clients." },
      { q: "How do I share my blood reports?", a: "Simply photograph them and send them on WhatsApp before your assessment call. Dt. Priyatama reviews HbA1c, lipid profile, thyroid panel, vitamin levels and other relevant markers as part of building your plan." },
      { q: "Can NRIs consult from outside India?", a: "Yes. Clients in the Gulf, UK, US, Australia, Singapore and elsewhere consult regularly. Plans are built around ingredients available where you live, while keeping the Indian meal structure you are used to." },
      { q: "What does the first conversation cost?", a: "The first 15-minute conversation is free. It is used to understand your goal and tell you honestly whether a dietary programme is the right fit. Programme pricing is shared transparently after that." },
      { q: "Which conditions can be managed through online consultation?", a: "Weight loss, weight gain, PCOS/PCOD, diabetes, thyroid, cholesterol, blood pressure, fatty liver, pregnancy nutrition and most therapeutic diets. If a condition needs in-person assessment, you will be told." },
      { q: "What language are consultations conducted in?", a: "English and Hindi. The written plan is provided in clear, simple language with practical Indian-meal guidance." },
    ],
    relatedLinks: [
      { label: "Weight Loss Diet Plan", href: "/weight-loss-diet-plan", note: "How a personalised weight-loss plan is built" },
      { label: "PCOS Diet Plan", href: "/pcos-diet-plan", note: "Managing PCOS through diet" },
      { label: "Dt. Priyatama Srivastava", href: "/priyatama-srivastava.php", note: "Full practice profile" },
      { label: "Book an appointment", href: "/book-an-appointment.php", note: "Reserve a consultation slot" },
    ],
  },

  // ─────────────────────────────────────────── 2. WEIGHT LOSS DIET PLAN
  "weight-loss-diet-plan": {
    slug: "weight-loss-diet-plan",
    path: "/weight-loss-diet-plan",
    theme: "weight-loss",
    primaryKeyword: "weight loss diet plan",
    eyebrow: "Built for your body",
    metaTitle: "Weight Loss Diet Plan — Personalised Indian Diet Chart | Go Moringa",
    metaDescription:
      "A weight loss diet plan built around your body, labs and kitchen by Dt. Priyatama Srivastava — 20 years' experience, 10,000+ clients. Sustainable Indian-meal diet charts, not crash diets.",
    h1: "Weight Loss Diet Plan",
    heroSubhead:
      "A weight loss plan that survives past three weeks — structured Indian eating, calibrated to your labs and your goal, reviewed every week.",
    heroImage: PHOTOS.freshGreens.url,
    introLead:
      "A weight loss diet plan only works if you can actually live with it. The plans that fail are the ones that ignore your kitchen, your family meals, your office schedule and the quiet history of every diet you have already tried. The plan that works, year after year, is structured Indian eating — measured, documented, and adjusted to the labs you can move.",
    sections: [
      {
        heading: "Why most weight loss diets fail",
        body: "Crash diets, meal-replacement shakes and influencer PDFs share one flaw: they are not built for the person following them. They drop weight fast by cutting whole food groups, the body adapts, the plan becomes impossible to sustain, and the weight returns — often with interest. A diet plan that works is not glamorous. It is a normal Indian plate, portioned and timed correctly, that you can follow for life.",
      },
      {
        heading: "How a personalised weight loss plan is built",
        body: "Your plan begins with an assessment: current weight and measurements, lab work (thyroid, blood sugar, lipid profile, vitamin levels), medical history, daily routine and food preferences. From this, Dt. Priyatama builds a calorie-and-macro target and translates it into real meals — bajra phulka, dal, paneer, seasonal vegetables, fruit, ghee in measured spoons. The plan is yours alone; nothing is copy-pasted.",
      },
      {
        heading: "What sustainable weight loss looks like",
        body: "Most clients see measurable change within two to three weeks. Sustainable loss is typically two to four kilograms a month — fast enough to stay motivated, slow enough that it stays off. The goal is not a number on a scale next week; it is a body composition and a set of lab values that hold steady for years.",
      },
      {
        heading: "You will not give up Indian food",
        body: "Every plan is built around the food you already eat. Roti, rice, dal, sabzi, curd, regional dishes — all stay. They are portioned, paired and timed for your goal. We work with your kitchen, not against it, because a plan that bans the food your family cooks is a plan you will abandon.",
      },
      {
        heading: "Weekly review keeps the plan honest",
        body: "Weight loss is not linear. Plateaus happen, schedules change, festivals arrive. The weekly follow-up exists to adjust the plan to reality — revising portions, swapping meals, troubleshooting what is not working. An open WhatsApp line covers the questions in between.",
      },
    ],
    highlights: [
      "Personalised to your labs, body and Indian kitchen",
      "Sustainable 2–4 kg per month — no crash dieting",
      "Roti, dal, rice and sabzi stay on the plate",
      "Weekly review + direct WhatsApp support",
      "20 years of clinical weight-management practice",
    ],
    process: [
      { title: "Assessment", body: "Weight, measurements, lab reports, medical history, routine and food preferences are reviewed in detail." },
      { title: "Your diet chart", body: "A calorie- and macro-calibrated plan, written as real Indian meals you can cook and eat every day." },
      { title: "Follow the plan", body: "Eat normally from your own kitchen, in the portions and timings the plan sets out. No shakes, no banned food groups." },
      { title: "Weekly revision", body: "Each week the plan is reviewed against your progress and adjusted — plateaus, festivals and schedule changes included." },
    ],
    sampleDay: [
      { time: "7:00 AM", meal: "On waking", items: "Warm water with soaked methi seeds; 5–6 soaked almonds" },
      { time: "8:30 AM", meal: "Breakfast", items: "2 besan or moong dal cheela with mint chutney, or vegetable poha with a bowl of curd" },
      { time: "11:00 AM", meal: "Mid-morning", items: "One seasonal fruit — guava, apple, papaya or orange" },
      { time: "1:30 PM", meal: "Lunch", items: "2 bajra or wheat phulka, 1 bowl dal, 1 bowl sabzi, salad, small bowl of curd" },
      { time: "4:30 PM", meal: "Evening", items: "Green tea or buttermilk; a handful of roasted chana or makhana" },
      { time: "8:00 PM", meal: "Dinner", items: "1 phulka with sabzi, or a large bowl of vegetable-and-lentil soup with paneer or grilled fish" },
    ],
    sampleDayNote:
      "An illustrative day only. Your actual plan is calibrated to your calorie target, lab values, medical conditions and food preferences — portions and meals will differ.",
    faqs: [
      { q: "How much weight can I lose with a personalised diet plan?", a: "Sustainable weight loss is typically 2–4 kg per month. Most clients see measurable change within 2–3 weeks. The aim is loss that stays off — not a rapid drop that rebounds." },
      { q: "Will I have to stop eating rice and roti?", a: "No. Rice, roti, dal and sabzi remain on your plate. They are portioned and timed for your goal. A plan that bans staple Indian foods is a plan you cannot sustain." },
      { q: "Is the weight loss plan available online?", a: "Yes. The plan can be built and followed entirely through online consultation — assessment by video, plan delivered in writing, weekly reviews on call. See the online dietitian consultation page." },
      { q: "Do you use meal-replacement shakes or supplements?", a: "No. The plan is built on normal, cooked Indian food. Supplements are recommended only when a genuine, lab-confirmed deficiency exists." },
      { q: "How is this different from a free diet chart online?", a: "A free chart is generic. Your plan is calibrated to your blood work, medical history, body composition and kitchen, and is revised every week against your real progress — that is what makes weight loss hold." },
    ],
    relatedLinks: [
      { label: "Indian Diet Plan for Weight Loss", href: "/indian-diet-plan-for-weight-loss", note: "What an Indian weight-loss day looks like" },
      { label: "Weight Loss programme", href: "/weight-loss.php", note: "Our clinical weight-loss service" },
      { label: "Online Dietitian Consultation", href: "/online-dietitian-consultation", note: "Get your plan from anywhere" },
      { label: "PCOS Diet Plan", href: "/pcos-diet-plan", note: "Weight loss with PCOS" },
    ],
  },

  // ─────────────────────────────────────────── 3. INDIAN DIET PLAN FOR WEIGHT LOSS
  "indian-diet-plan-for-weight-loss": {
    slug: "indian-diet-plan-for-weight-loss",
    path: "/indian-diet-plan-for-weight-loss",
    theme: "weight-loss",
    primaryKeyword: "indian diet plan for weight loss",
    eyebrow: "Roti, dal, sabzi — recalibrated",
    metaTitle: "Indian Diet Plan for Weight Loss — Veg & Non-Veg Chart | Go Moringa",
    metaDescription:
      "An Indian diet plan for weight loss that uses the food you already cook — roti, dal, sabzi, regional dishes. Veg and non-veg sample charts by Dt. Priyatama Srivastava, Gurgaon.",
    h1: "Indian Diet Plan for Weight Loss",
    heroSubhead:
      "Weight loss built on the Indian plate you already know — phulka, dal, sabzi, curd, seasonal fruit — portioned and timed instead of banned.",
    heroImage: PHOTOS.indianThali.url,
    introLead:
      "An Indian diet plan for weight loss should look like Indian food. Not boiled vegetables and protein bars, not a Western meal pattern forced onto an Indian kitchen — but the actual roti, dal, rice and sabzi your family cooks, measured and timed for your goal. The Indian thali, eaten correctly, is one of the most balanced weight-loss tools there is.",
    sections: [
      {
        heading: "The Indian thali is already balanced",
        body: "A traditional thali pairs a complex carbohydrate (roti or rice), a protein and fibre source (dal), a cooked vegetable (sabzi), a probiotic (curd) and raw fibre (salad). The problem is rarely the food — it is the portions, the timing, the cooking oil quantity and the gaps filled with chai-biscuit and fried snacks. A good Indian weight-loss plan fixes those, not the thali itself.",
      },
      {
        heading: "Vegetarian Indian weight-loss plans",
        body: "Vegetarian plans build protein deliberately — dal, rajma, chana, paneer, curd, soya, sprouts and milk — because protein is what protects muscle and controls hunger during weight loss. Millets such as bajra, jowar and ragi replace some refined wheat. Seasonal vegetables and fruit carry the micronutrients. This is the most common plan type at the clinic and it works.",
      },
      {
        heading: "Non-vegetarian Indian weight-loss plans",
        body: "For non-vegetarians, eggs, grilled or curried fish and lean chicken add high-quality protein that makes a calorie deficit easier to hold. The plan still rests on the Indian structure — these are paired with phulka, dal, sabzi and curd, not eaten as a Western-style meat-and-salad plate.",
      },
      {
        heading: "Regional kitchens, regional plans",
        body: "A weight-loss plan for a Punjabi household, a Bengali household, a South Indian household and a Gujarati household should not be identical. Idli and sambar, fish and rice, dhokla, rajma-chawal — each regional kitchen has weight-loss-friendly staples. Plans are built around what you actually cook, which is why they last.",
      },
      {
        heading: "What the plan removes",
        body: "Not food groups — habits. Refined sugar and the mid-morning biscuit, deep-fried snacks, oversized restaurant portions, late heavy dinners, and the slow creep of cooking oil. Replace those and the Indian plate does the rest.",
      },
    ],
    highlights: [
      "Uses the roti-dal-sabzi food you already cook",
      "Separate veg and non-veg plan structures",
      "Calibrated to your region's kitchen and staples",
      "Millets and seasonal produce, not exotic imports",
      "Designed by a Gurgaon clinical dietitian of 20 years",
    ],
    process: [
      { title: "Tell us your kitchen", body: "Region, vegetarian or non-vegetarian, the dishes your household actually cooks, and your weekly routine." },
      { title: "Calorie & protein target", body: "A target is set from your body composition, labs and goal — then translated into Indian meals." },
      { title: "Your Indian diet chart", body: "A written plan: every meal a real Indian dish, in the portion and timing your goal requires." },
      { title: "Weekly adjustment", body: "The plan is reviewed each week and adapted — including for festivals, travel and family meals." },
    ],
    sampleDay: [
      { time: "7:00 AM", meal: "On waking", items: "Warm water with lemon; 5–6 soaked almonds and 2 walnuts" },
      { time: "8:30 AM", meal: "Breakfast", items: "Vegetable upma or 2 moong dal cheela, or 2 idli with sambar — with a bowl of curd" },
      { time: "11:00 AM", meal: "Mid-morning", items: "Seasonal fruit, or a glass of buttermilk" },
      { time: "1:30 PM", meal: "Lunch", items: "2 phulka (bajra/jowar/wheat), 1 bowl dal or rajma/chana, 1 sabzi, salad, curd" },
      { time: "4:30 PM", meal: "Evening", items: "Masala chai without sugar; roasted chana or a small bowl of sprouts chaat" },
      { time: "8:00 PM", meal: "Dinner", items: "1 phulka with sabzi, or moong dal khichdi with vegetables — non-veg: grilled fish or 2 egg whites" },
    ],
    sampleDayNote:
      "A representative vegetarian-leaning day. Your plan is built around your region, your kitchen and your calorie target — the actual chart will differ.",
    faqs: [
      { q: "Can I lose weight eating normal Indian food?", a: "Yes — and it is the most sustainable way to. A correctly portioned Indian thali balances carbohydrate, protein, fibre and probiotics. The plan corrects portions, timing and cooking oil rather than removing staple foods." },
      { q: "Is rice allowed in an Indian weight-loss plan?", a: "Yes, in measured portions and paired with protein and vegetables. Rice is not the cause of weight gain; uncontrolled portions and refined-carbohydrate snacking are." },
      { q: "Do you make vegetarian weight-loss plans?", a: "Yes — the majority of plans at the clinic are vegetarian. They build protein deliberately through dal, paneer, curd, soya, sprouts and milk, alongside millets and seasonal produce." },
      { q: "Will the plan suit my regional cuisine?", a: "Plans are built around your specific regional kitchen — Punjabi, Bengali, South Indian, Gujarati and others. Every cuisine has weight-loss-friendly staples; the plan uses yours." },
      { q: "How many calories should an Indian weight-loss diet have?", a: "There is no single number — it depends on your body composition, activity, age and medical conditions. A calorie target is set individually during assessment, never assumed." },
    ],
    relatedLinks: [
      { label: "Weight Loss Diet Plan", href: "/weight-loss-diet-plan", note: "How a personalised plan is built" },
      { label: "1500-Calorie Indian Diet Plan", href: "/blog/1500-calorie-indian-diet-plan-for-weight-loss.php", note: "A worked calorie example" },
      { label: "Weight Loss programme", href: "/weight-loss.php", note: "Our clinical weight-loss service" },
      { label: "Healthy recipes", href: "/blog.php", note: "Indian recipes from the clinic journal" },
    ],
  },

  // ─────────────────────────────────────────── 4. PCOS DIET PLAN
  "pcos-diet-plan": {
    slug: "pcos-diet-plan",
    path: "/pcos-diet-plan",
    theme: "condition",
    primaryKeyword: "pcos diet plan",
    eyebrow: "Hormones, recalibrated by diet",
    metaTitle: "PCOS Diet Plan — Indian Diet Chart for PCOS/PCOD | Go Moringa",
    metaDescription:
      "A PCOS diet plan that manages insulin resistance, weight and cycles through food. Indian PCOS/PCOD diet chart by Dt. Priyatama Srivastava — 20 years' clinical experience, Gurgaon.",
    h1: "PCOS Diet Plan",
    heroSubhead:
      "Diet is the first-line treatment for PCOS. A plan built around insulin control, steady weight loss and Indian meals you can actually keep to.",
    heroImage: PHOTOS.indianSpicesWhite.url,
    introLead:
      "For most women with PCOS or PCOD, diet is not a supporting act — it is the treatment. The condition is driven, in a majority of cases, by insulin resistance, and insulin responds directly to what and how you eat. A well-built PCOS diet plan can regulate cycles, ease weight loss, calm skin and hair symptoms, and in many cases reduce the need for hormonal medication.",
    sections: [
      {
        heading: "Why diet comes first in PCOS",
        body: "PCOS is commonly underpinned by insulin resistance: the body produces more insulin to manage blood sugar, and elevated insulin pushes the ovaries toward excess androgen production — which disrupts ovulation. Lowering the insulin load through diet addresses the mechanism, not just the symptoms. This is why a structured eating plan is the foundation of PCOS management.",
      },
      {
        heading: "How a PCOS diet plan is structured",
        body: "The plan controls the glycaemic load of every meal — pairing carbohydrates with protein and fibre so blood sugar rises slowly. It builds adequate protein to protect muscle and steady appetite, includes anti-inflammatory foods, and times meals to avoid long fasting gaps that spike hunger. Refined sugar, refined flour and ultra-processed snacks are reduced sharply; millets, whole pulses, vegetables and good fats take their place.",
      },
      {
        heading: "Weight loss with PCOS",
        body: "Weight loss with PCOS is genuinely harder — insulin resistance works against you — which is exactly why a generic diet fails and a calibrated one is needed. Even a 5–10% reduction in body weight can restore ovulation and regularise cycles for many women. The PCOS plan makes that loss achievable by working with the hormonal picture rather than ignoring it.",
      },
      {
        heading: "What improves, and when",
        body: "Energy and reduced sugar cravings often shift within the first two to three weeks. Cycle regularity, skin and hair symptoms typically respond over three to six months of consistent eating. Lean PCOS — where weight is normal but cycles and labs are not — is managed too; the plan then focuses on insulin and inflammation rather than weight.",
      },
      {
        heading: "Foods the plan includes and limits",
        body: "Included: millets (bajra, jowar, ragi), whole pulses and legumes, paneer, curd, eggs and fish, leafy and seasonal vegetables, nuts and seeds, and good fats. Limited: refined sugar and sweets, maida and refined-flour products, sugary drinks and packaged juices, deep-fried foods and ultra-processed snacks.",
      },
    ],
    highlights: [
      "Targets the insulin resistance behind most PCOS",
      "Low-glycaemic Indian meals — millets, pulses, good fats",
      "Supports cycle regularity and steady weight loss",
      "Manages lean PCOS as well as weight-linked PCOS",
      "Built by a clinical dietitian, available online too",
    ],
    process: [
      { title: "Assessment", body: "Cycle history, symptoms, weight, and labs — insulin, blood sugar, thyroid and hormone panels — are reviewed together." },
      { title: "Low-GI plan", body: "An Indian diet chart calibrated for glycaemic load, protein adequacy and anti-inflammatory foods." },
      { title: "Steady progress", body: "Follow the plan from your own kitchen; weight, energy and cravings begin to shift in the first weeks." },
      { title: "Weekly review", body: "The plan is revised each week, and across months as cycles and labs respond." },
    ],
    sampleDay: [
      { time: "7:00 AM", meal: "On waking", items: "Warm water with cinnamon; 5–6 soaked almonds and 2 walnuts" },
      { time: "8:30 AM", meal: "Breakfast", items: "2 moong dal or besan cheela with vegetables, or vegetable oats — with a bowl of curd" },
      { time: "11:00 AM", meal: "Mid-morning", items: "A low-GI fruit — guava, pear or apple — or a small bowl of sprouts" },
      { time: "1:30 PM", meal: "Lunch", items: "2 bajra/jowar phulka, 1 bowl dal or chana, 1 sabzi, large salad, curd" },
      { time: "4:30 PM", meal: "Evening", items: "Green tea; roasted makhana or a handful of mixed nuts and seeds" },
      { time: "8:00 PM", meal: "Dinner", items: "1 millet phulka with sabzi, or vegetable-and-dal soup with paneer or grilled fish" },
    ],
    sampleDayNote:
      "Illustrative only. A PCOS plan is calibrated to your insulin and hormone labs, weight goal and whether your PCOS is weight-linked or lean — your chart will differ.",
    faqs: [
      { q: "Can PCOS be managed with diet alone?", a: "For many women, diet is the single most effective intervention — because it addresses the insulin resistance driving the condition. Diet is often combined with the right exercise; some women also need medication. A clinical dietitian will be honest about what your case needs." },
      { q: "What is the best diet for PCOS?", a: "A low-glycaemic, adequate-protein, anti-inflammatory plan built from whole Indian foods — millets, pulses, vegetables, curd, eggs, fish, nuts and good fats — with refined sugar and refined flour sharply reduced. It must be personalised to your labs." },
      { q: "How long does a PCOS diet take to show results?", a: "Energy and sugar cravings often improve in 2–3 weeks. Cycle regularity, skin and hair changes usually take 3–6 months of consistent eating. Lean PCOS responds on a similar timeline." },
      { q: "I have lean PCOS — do I still need a diet plan?", a: "Yes. Lean PCOS still involves insulin and inflammation even when weight is normal. The plan then focuses on glycaemic control, protein and anti-inflammatory foods rather than weight loss." },
      { q: "Is the PCOS diet plan available online?", a: "Yes. PCOS is one of the most commonly managed conditions through online consultation — assessment by video, plan in writing, weekly reviews on call." },
    ],
    relatedLinks: [
      { label: "PCOS / PCOD treatment", href: "/treatment/pcod-pcos.php", note: "Clinical overview of PCOS management" },
      { label: "PCOS diet for vegetarians", href: "/blog/pcos-pcod-diet-treatment-for-vegetarians.php", note: "A vegetarian PCOS approach" },
      { label: "Weight Loss Diet Plan", href: "/weight-loss-diet-plan", note: "Weight loss with insulin resistance" },
      { label: "Thyroid Diet Plan", href: "/thyroid-diet-plan", note: "PCOS and thyroid often overlap" },
    ],
  },

  // ─────────────────────────────────────────── 5. DIABETES DIET PLAN
  "diabetes-diet-plan": {
    slug: "diabetes-diet-plan",
    path: "/diabetes-diet-plan",
    theme: "condition",
    primaryKeyword: "diabetes diet plan",
    eyebrow: "Blood sugar, eaten down",
    metaTitle: "Diabetes Diet Plan — Indian Diabetic Diet Chart | Go Moringa",
    metaDescription:
      "A diabetes diet plan to control blood sugar and HbA1c through Indian meals. Diabetic diet chart by Dt. Priyatama Srivastava — 20 years' clinical experience, Gurgaon & online.",
    h1: "Diabetes Diet Plan",
    heroSubhead:
      "A diabetic diet chart built around Indian meals — designed to steady blood sugar, lower HbA1c, and be followed for life, not for a month.",
    heroImage: PHOTOS.spicesOnSpoons.url,
    introLead:
      "Type-2 diabetes is, in large part, a condition of how the body handles food — which makes diet central to managing it. A well-built diabetes diet plan steadies blood sugar through the day, brings down HbA1c over a few months, and reduces the strain on the body's insulin system. For many people with pre-diabetes or early type-2 diabetes, disciplined eating changes the trajectory of the condition.",
    sections: [
      {
        heading: "How diet controls blood sugar",
        body: "Every meal raises blood sugar; the question is how fast and how high. A diabetes diet plan flattens that curve — pairing carbohydrates with protein, fibre and fat so glucose is released slowly, controlling portion sizes, and spacing meals to avoid both spikes and crashes. Over months, steadier daily sugars show up as a lower HbA1c.",
      },
      {
        heading: "What an Indian diabetic diet looks like",
        body: "It looks like normal Indian food, corrected. Millets and high-fibre grains in place of some refined wheat and white rice. Whole pulses for protein and slow carbohydrate. Plenty of non-starchy vegetables. Curd and good fats. The dangerous part of the Indian diabetic plate is rarely the dal or sabzi — it is the large rice portion, the sweet, the fruit juice and the fried snack.",
      },
      {
        heading: "HbA1c — the number that matters",
        body: "HbA1c reflects your average blood sugar over roughly three months, so it is the honest scorecard for a diabetes diet. Many clients see meaningful HbA1c improvement within a single three-month cycle of disciplined eating. The diet plan is built and revised with this marker in view, alongside fasting and post-meal readings.",
      },
      {
        heading: "Diet works alongside your doctor",
        body: "A diabetes diet plan does not replace your physician or your prescribed medication. It works alongside them — and as blood sugar improves, your doctor may choose to review your medication. Any change to medication is a decision for your treating doctor; the diet's job is to give them better numbers to work with.",
      },
      {
        heading: "Foods the plan includes and limits",
        body: "Included: millets and whole grains, whole pulses and legumes, non-starchy vegetables, curd, paneer, eggs and fish, nuts, seeds and good fats, and low-GI fruit in measured portions. Limited: sugar and sweets, white rice and maida in large portions, fruit juices and sugary drinks, and deep-fried and ultra-processed foods.",
      },
    ],
    highlights: [
      "Steadies daily blood sugar and lowers HbA1c",
      "Built on Indian meals — millets, pulses, vegetables",
      "Works alongside your doctor and medication",
      "Suits pre-diabetes and type-2 diabetes",
      "20 years of therapeutic-diet experience, online too",
    ],
    process: [
      { title: "Assessment", body: "HbA1c, fasting and post-meal sugars, medication, medical history, routine and food habits are reviewed." },
      { title: "Diabetic diet chart", body: "An Indian meal plan calibrated for glycaemic load, portion control and meal spacing." },
      { title: "Daily control", body: "Follow the plan from your kitchen; fasting and post-meal readings begin to steady within weeks." },
      { title: "Quarterly review", body: "Weekly follow-ups refine the plan; HbA1c is reviewed each three-month cycle." },
    ],
    sampleDay: [
      { time: "7:00 AM", meal: "On waking", items: "Warm water with soaked methi seeds; 5–6 soaked almonds" },
      { time: "8:30 AM", meal: "Breakfast", items: "2 moong dal cheela or vegetable besan chilla, or vegetable oats — with curd" },
      { time: "11:00 AM", meal: "Mid-morning", items: "A low-GI fruit — guava, jamun or pear — in a measured portion" },
      { time: "1:30 PM", meal: "Lunch", items: "2 bajra/jowar phulka, 1 bowl dal, 1 sabzi, large salad, curd; rice only in a small measured portion" },
      { time: "4:30 PM", meal: "Evening", items: "Unsweetened tea or buttermilk; roasted chana or makhana" },
      { time: "8:00 PM", meal: "Dinner", items: "1 millet phulka with sabzi, or vegetable-and-dal soup with paneer or grilled fish" },
    ],
    sampleDayNote:
      "Illustrative only. A diabetic diet plan is calibrated to your HbA1c, sugar readings, medication and other conditions — your chart and portions will differ. Always coordinate with your treating doctor.",
    faqs: [
      { q: "Can a diabetes diet plan lower my HbA1c?", a: "Yes. Because HbA1c reflects roughly three months of average blood sugar, consistent disciplined eating commonly produces meaningful improvement within one quarterly cycle. The plan is built and revised with this marker in view." },
      { q: "Can diabetics eat rice and roti?", a: "Yes, in controlled portions and the right pairings. Rice is taken in a small measured quantity with protein and vegetables; high-fibre grains and millets are used alongside. Portion size and pairing matter more than banning a food." },
      { q: "Does a diet plan replace diabetes medication?", a: "No. The diet plan works alongside your doctor and any prescribed medication. As blood sugar improves, your doctor may review your medication — that decision belongs to your treating physician." },
      { q: "Is this plan suitable for pre-diabetes?", a: "Yes, and pre-diabetes is one of the best times to act. Disciplined eating at this stage can change the trajectory of the condition and, for many, delay or avoid progression to type-2 diabetes." },
      { q: "Can I follow the diabetes diet plan online?", a: "Yes. Diabetes is routinely managed through online consultation — share your HbA1c and sugar reports as photographs, consult by video, and receive the plan in writing with weekly reviews." },
    ],
    relatedLinks: [
      { label: "Diabetes treatment", href: "/treatment/diabetes.php", note: "Clinical overview of diabetes management" },
      { label: "Warning signs of diabetes", href: "/blog/top-10-warning-signs-of-diabetes.php", note: "Spotting diabetes early" },
      { label: "Therapeutic Diet programme", href: "/therapeutic-diet.php", note: "Diets for chronic conditions" },
      { label: "Online Dietitian Consultation", href: "/online-dietitian-consultation", note: "Manage diabetes from anywhere" },
    ],
  },

  // ─────────────────────────────────────────── 6. THYROID DIET PLAN
  "thyroid-diet-plan": {
    slug: "thyroid-diet-plan",
    path: "/thyroid-diet-plan",
    theme: "condition",
    primaryKeyword: "thyroid diet plan",
    eyebrow: "Metabolism, supported by food",
    metaTitle: "Thyroid Diet Plan — Indian Diet Chart for Thyroid | Go Moringa",
    metaDescription:
      "A thyroid diet plan for hypothyroidism and hyperthyroidism — Indian diet chart to support metabolism, energy and weight. By Dt. Priyatama Srivastava, Gurgaon & online.",
    h1: "Thyroid Diet Plan",
    heroSubhead:
      "An Indian diet plan that supports thyroid function, steadies metabolism and energy, and makes thyroid-linked weight change manageable.",
    heroImage: PHOTOS.indianSpicesWhite.url,
    introLead:
      "A thyroid disorder reshapes how the whole body uses energy — which is why diet matters so much in managing it. A thyroid diet plan cannot replace your thyroid medication, but it can supply the nutrients the thyroid depends on, ease the weight gain and fatigue that come with hypothyroidism, and steady the metabolism. For most people with thyroid issues, the right diet makes daily life noticeably easier.",
    sections: [
      {
        heading: "Nutrients the thyroid depends on",
        body: "The thyroid needs specific nutrients to produce and convert its hormones — iodine, selenium, zinc, iron and vitamin D among them. A deficiency in any of these can worsen thyroid function and the symptoms that come with it. A thyroid diet plan is built, in part, to supply these nutrients through everyday Indian foods and to correct deficiencies confirmed by your blood work.",
      },
      {
        heading: "Hypothyroidism: weight, energy and the plan",
        body: "Hypothyroidism — an underactive thyroid — slows metabolism, which is why weight gain, fatigue, constipation and sluggishness are common. The diet plan addresses this with adequate protein, fibre and the thyroid-supporting nutrients, careful meal timing, and a calorie target realistic for a slowed metabolism. Weight loss with hypothyroidism is slower, so the plan is patient and sustainable rather than aggressive.",
      },
      {
        heading: "Hyperthyroidism needs a different plan",
        body: "Hyperthyroidism — an overactive thyroid — speeds metabolism and can cause weight loss, anxiety and a fast heart rate. Its diet plan is the opposite in emphasis: enough calories and protein to prevent muscle loss, attention to bone-supporting nutrients, and care with iodine. This is why a thyroid diet plan must always be matched to your specific diagnosis.",
      },
      {
        heading: "Diet works with your medication and labs",
        body: "A thyroid diet plan does not replace thyroxine or other prescribed medication. It works alongside them. Some foods and supplements affect how thyroid medication is absorbed, so timing matters — and the plan accounts for it. Your TSH, T3 and T4 are reviewed when building and revising the plan.",
      },
      {
        heading: "Thyroid and PCOS often travel together",
        body: "Thyroid disorders and PCOS frequently overlap, and so do their symptoms — weight gain, fatigue, cycle changes. When both are present, the diet plan is built to manage them together rather than treating one in isolation.",
      },
    ],
    highlights: [
      "Supplies thyroid-critical nutrients via Indian foods",
      "Separate plans for hypo- and hyperthyroidism",
      "Eases thyroid-linked weight gain and fatigue",
      "Timed around thyroid-medication absorption",
      "Manages overlapping thyroid + PCOS cases",
    ],
    process: [
      { title: "Assessment", body: "TSH, T3, T4 and related labs, your diagnosis, medication, symptoms and food habits are reviewed." },
      { title: "Thyroid diet chart", body: "An Indian meal plan supplying thyroid-supporting nutrients, matched to hypo- or hyperthyroidism." },
      { title: "Steady the metabolism", body: "Follow the plan from your kitchen; energy and digestion typically ease over the first weeks." },
      { title: "Review with labs", body: "Weekly follow-ups refine the plan; thyroid labs are reviewed each cycle alongside your doctor's." },
    ],
    sampleDay: [
      { time: "7:00 AM", meal: "On waking", items: "Warm water; thyroid medication on an empty stomach, then a 45–60 minute gap before food" },
      { time: "8:30 AM", meal: "Breakfast", items: "Vegetable poha or 2 moong dal cheela, or vegetable oats — with a bowl of curd" },
      { time: "11:00 AM", meal: "Mid-morning", items: "A seasonal fruit, or a small handful of nuts and seeds (a good selenium source)" },
      { time: "1:30 PM", meal: "Lunch", items: "2 phulka, 1 bowl dal, 1 sabzi, salad, curd; fish twice a week as an iodine and protein source" },
      { time: "4:30 PM", meal: "Evening", items: "Herbal or light tea; roasted chana or makhana" },
      { time: "8:00 PM", meal: "Dinner", items: "1 phulka with sabzi, or vegetable-and-dal soup with paneer or eggs" },
    ],
    sampleDayNote:
      "Illustrative only, and oriented to hypothyroidism. Your plan depends on your diagnosis, TSH/T3/T4 labs, medication and any overlapping conditions — the chart will differ. Keep thyroid medication timing as your doctor advises.",
    faqs: [
      { q: "Can a thyroid diet plan replace my medication?", a: "No. A thyroid diet plan works alongside thyroxine or other prescribed medication — it does not replace it. The diet supplies the nutrients the thyroid depends on and eases symptoms; medication remains your doctor's domain." },
      { q: "What foods are good for the thyroid?", a: "Foods supplying iodine, selenium, zinc, iron and vitamin D — such as fish, eggs, dairy, nuts and seeds, whole pulses and leafy vegetables. The precise emphasis depends on whether you have hypo- or hyperthyroidism and on your blood work." },
      { q: "Why is it so hard to lose weight with hypothyroidism?", a: "Hypothyroidism slows metabolism, so the body burns fewer calories at rest. Weight loss is genuinely slower — which is why the plan is calibrated, patient and sustainable rather than aggressive, and revised against your labs." },
      { q: "Should I avoid all goitrogenic foods?", a: "Not entirely. Foods like cabbage, cauliflower and soya have a modest effect, largely reduced by cooking, and they carry real nutritional value. The plan manages quantity and preparation rather than banning whole vegetable families — guided by your case." },
      { q: "Can the thyroid diet plan be done online?", a: "Yes. Share your TSH, T3 and T4 reports as photographs, consult by video, and receive the plan in writing with weekly reviews — the same process as an in-clinic engagement." },
    ],
    relatedLinks: [
      { label: "Thyroid treatment", href: "/treatment/thyroid.php", note: "Clinical overview of thyroid management" },
      { label: "Diet for thyroid", href: "/blog/diet-for-thyroid.php", note: "Thyroid nutrition in depth" },
      { label: "PCOS Diet Plan", href: "/pcos-diet-plan", note: "When thyroid and PCOS overlap" },
      { label: "Online Dietitian Consultation", href: "/online-dietitian-consultation", note: "Manage thyroid from anywhere" },
    ],
  },
};

export const LANDING_PAGE_LIST: LandingPage[] = Object.values(LANDING_PAGES);

export function getLandingPage(slug: string): LandingPage | undefined {
  return LANDING_PAGES[slug];
}
