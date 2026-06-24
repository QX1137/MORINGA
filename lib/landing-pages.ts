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
  theme: "online" | "weight-loss" | "condition" | "audience";
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
  /** Optional labelled infographic shown mid-article (e.g. the Weight Loss
      Thali diagram). Rendered uncropped at its natural aspect ratio, so
      `ratio` must match the asset (e.g. "1290/1219"). */
  inlineFigure?: { src: string; eyebrow: string; alt: string; caption: string; ratio: string };
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
      "The same clinical rigour as the Sector 49 clinic — assessment, a written plan, daily check-in — delivered over WhatsApp and video, anywhere in India or abroad.",
    heroImage: REAL.clinicConsultation,
    introLead:
      "An online dietitian consultation is not a watered-down version of a clinic visit. It is the same process — a detailed health and lifestyle assessment, a diet plan written for your body and your kitchen, and a daily check-in that adjusts the plan as your labs and weight move. The only thing that changes is that the conversation happens on your phone instead of across a desk.",
    sections: [
      {
        heading: "Why online works as well as in-clinic",
        body: "Nutrition counselling is, fundamentally, a conversation and a document. A dietitian needs your history, your blood work, your daily routine and your food preferences — all of which travel perfectly over a video call and a few photographs of your reports. The plan itself is a written document. The daily follow-up is a structured check-in. None of this needs you to be in the room. Twenty years of in-clinic practice taught Dt. Priyatama exactly which questions matter; the online format simply removes the commute.",
      },
      {
        heading: "Who chooses online consultation",
        body: "Professionals in Gurgaon and Delhi NCR who cannot fit a clinic visit into a working week. Clients in Bengaluru, Mumbai, Pune, Hyderabad, Chandigarh and tier-2 and tier-3 towns where a clinical dietitian with two decades of experience is hard to find locally. NRIs in the Gulf, the UK, the US, Australia and Singapore who want an Indian-meal plan built by someone who understands their kitchen. Parents managing a child's nutrition, and elderly clients for whom travel is difficult.",
      },
      {
        heading: "What you receive",
        body: "A written, personalised diet plan built around Indian meal patterns — roti, dal, rice, sabzi, regional dishes — adjusted to your goal, your medical conditions and your daily schedule. A direct WhatsApp line to ask questions between reviews. A daily follow-up where the plan is revised based on your progress. Guidance on reading your own lab reports so you understand what is improving and why.",
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
      "Daily follow-up + open WhatsApp line",
      "Serves all of India and NRI clients worldwide",
      "First 15-minute conversation is free",
    ],
    process: [
      { title: "Book a slot", body: "Message on WhatsApp or call the clinic. Pick a consultation time that suits your schedule and timezone." },
      { title: "Health assessment", body: "A detailed video or phone call covering your history, lifestyle, food habits and goals. Share recent lab reports as photographs." },
      { title: "Receive your plan", body: "A written, personalised diet plan reaches you — built around your kitchen, your conditions and your daily routine." },
      { title: "Daily check-in", body: "Every day, a structured check-in reviews your progress and revises the plan. Questions in between go to a direct WhatsApp line." },
    ],
    faqs: [
      { q: "Is an online diet consultation as effective as visiting the clinic?", a: "Yes. The assessment, the written plan and the daily check-in are identical to an in-clinic engagement. Lab reports are shared as photographs and the consultation happens over video or phone. Thousands of online clients across India and abroad have achieved the same results as in-clinic clients." },
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
    inlineFigure: {
      src: REAL.weightLossThali,
      eyebrow: "What a balanced plate holds",
      alt: "Go Moringa weight-loss thali — a balanced Indian plate: protein-rich dal, fibre-rich salad, sprouts, low-calorie sabzi, multigrain roti and gut-friendly curd, each component labelled",
      caption: "A Go Moringa weight-loss thali — balanced, not restrictive",
      ratio: "1290/1219",
    },
    path: "/weight-loss-diet-plan",
    theme: "weight-loss",
    primaryKeyword: "weight loss diet plan",
    eyebrow: "Built for your body",
    metaTitle: "Weight Loss Diet Plan — Personalised Indian Diet Chart | Go Moringa",
    metaDescription:
      "A weight loss diet plan built around your body, labs and kitchen by Dt. Priyatama Srivastava — 20 years' experience, 10,000+ clients. Sustainable Indian-meal diet charts, not crash diets.",
    h1: "Weight Loss Diet Plan",
    heroSubhead:
      "A weight loss plan that survives past three weeks — structured Indian eating, calibrated to your labs and your goal, reviewed every day.",
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
        heading: "Daily check-in keeps the plan honest",
        body: "Weight loss is not linear. Plateaus happen, schedules change, festivals arrive. The daily follow-up exists to adjust the plan to reality — revising portions, swapping meals, troubleshooting what is not working. An open WhatsApp line covers the questions in between.",
      },
    ],
    highlights: [
      "Personalised to your labs, body and Indian kitchen",
      "Sustainable 2–4 kg per month — no crash dieting",
      "Roti, dal, rice and sabzi stay on the plate",
      "Daily check-in + direct WhatsApp support",
      "20 years of clinical weight-management practice",
    ],
    process: [
      { title: "Assessment", body: "Weight, measurements, lab reports, medical history, routine and food preferences are reviewed in detail." },
      { title: "Your diet chart", body: "A calorie- and macro-calibrated plan, written as real Indian meals you can cook and eat every day." },
      { title: "Follow the plan", body: "Eat normally from your own kitchen, in the portions and timings the plan sets out. No shakes, no banned food groups." },
      { title: "Daily revision", body: "Your food photo and weight come in every day; the plan is reviewed against your progress and adjusted — plateaus, festivals and schedule changes included." },
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
      { q: "Is the weight loss plan available online?", a: "Yes. The plan can be built and followed entirely through online consultation — assessment by video, plan delivered in writing, daily check-ins on call. See the online dietitian consultation page." },
      { q: "Do you use meal-replacement shakes or supplements?", a: "No. The plan is built on normal, cooked Indian food. Supplements are recommended only when a genuine, lab-confirmed deficiency exists." },
      { q: "How is this different from a free diet chart online?", a: "A free chart is generic. Your plan is calibrated to your blood work, medical history, body composition and kitchen, and is revised continually against your real progress — that is what makes weight loss hold." },
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
    inlineFigure: {
      src: REAL.weightLossThali,
      eyebrow: "What a balanced plate holds",
      alt: "Go Moringa weight-loss thali — a balanced Indian plate: protein-rich dal, fibre-rich salad, sprouts, low-calorie sabzi, multigrain roti and gut-friendly curd, each component labelled",
      caption: "A Go Moringa weight-loss thali — balanced, not restrictive",
      ratio: "1290/1219",
    },
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
      { title: "Daily adjustment", body: "The plan is reviewed daily against your food photo and weight, and adapted — including for festivals, travel and family meals." },
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
      { title: "Daily check-in", body: "The plan is revised daily, and across months as cycles and labs respond." },
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
      { q: "Is the PCOS diet plan available online?", a: "Yes. PCOS is one of the most commonly managed conditions through online consultation — assessment by video, plan in writing, daily check-ins on call." },
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
      { title: "Quarterly review", body: "Daily follow-ups refine the plan; HbA1c is reviewed each three-month cycle." },
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
      { q: "Can I follow the diabetes diet plan online?", a: "Yes. Diabetes is routinely managed through online consultation — share your HbA1c and sugar reports as photographs, consult by video, and receive the plan in writing with daily check-ins." },
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
      { title: "Review with labs", body: "Daily follow-ups refine the plan; thyroid labs are reviewed each cycle alongside your doctor's." },
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
      { q: "Can the thyroid diet plan be done online?", a: "Yes. Share your TSH, T3 and T4 reports as photographs, consult by video, and receive the plan in writing with daily check-ins — the same process as an in-clinic engagement." },
    ],
    relatedLinks: [
      { label: "Thyroid treatment", href: "/treatment/thyroid.php", note: "Clinical overview of thyroid management" },
      { label: "Diet for thyroid", href: "/blog/diet-for-thyroid.php", note: "Thyroid nutrition in depth" },
      { label: "PCOS Diet Plan", href: "/pcos-diet-plan", note: "When thyroid and PCOS overlap" },
      { label: "Online Dietitian Consultation", href: "/online-dietitian-consultation", note: "Manage thyroid from anywhere" },
    ],
  },

  // ─────────────────────────────────────────── 7. CHOLESTEROL DIET PLAN
  "cholesterol-diet-plan": {
    slug: "cholesterol-diet-plan",
    path: "/cholesterol-diet-plan",
    theme: "condition",
    primaryKeyword: "cholesterol diet plan",
    eyebrow: "Lipids, brought back into range",
    metaTitle: "Cholesterol Diet Plan — Indian Diet to Lower Cholesterol | Go Moringa",
    metaDescription:
      "A cholesterol diet plan to lower LDL and triglycerides and lift HDL through Indian meals. Heart-healthy Indian diet chart by Dt. Priyatama Srivastava — Gurgaon & online.",
    h1: "Cholesterol Diet Plan",
    heroSubhead:
      "An Indian diet plan that brings LDL and triglycerides down and HDL up — built on everyday food, reviewed against your lipid profile.",
    heroImage: PHOTOS.freshGreens.url,
    introLead:
      "High cholesterol is one of the most diet-responsive conditions there is. What you eat directly shapes your lipid profile — the LDL that clogs arteries, the triglycerides that ride with it, the HDL that protects you. A cholesterol diet plan built around Indian food can move all three numbers, and for many people it reduces or removes the need for medication over time, in coordination with their doctor.",
    sections: [
      {
        heading: "How diet moves your lipid numbers",
        body: "Soluble fibre binds cholesterol in the gut and carries it out. Replacing refined carbohydrates and trans fats with whole grains, pulses and good fats lowers LDL and triglycerides. The wrong fats — vanaspati, repeatedly heated oil, deep-fried snacks — push them up. A cholesterol diet plan is, in large part, a fat-and-fibre correction applied to your normal Indian plate.",
      },
      {
        heading: "The Indian foods that lower cholesterol",
        body: "Oats, barley, whole pulses and legumes for soluble fibre. Flaxseed, walnuts and mustard or rice-bran oil in measured amounts for healthy fats. Garlic, methi and plenty of vegetables. Fish twice a week for non-vegetarians. These are not exotic imports — they are foods that fit straight into an Indian kitchen.",
      },
      {
        heading: "What the plan reduces",
        body: "Deep-fried snacks, vanaspati and repeatedly reused cooking oil, full-fat dairy in excess, refined flour and sugar, and red and processed meats. The single biggest lever for most Indian households is cooking oil — its type, and how much of it goes into everyday cooking.",
      },
      {
        heading: "Triglycerides and the sugar connection",
        body: "Triglycerides respond less to dietary fat and more to refined carbohydrate, sugar and alcohol. If your triglycerides are high, the plan focuses there — cutting sugar, sweets, refined flour and sugary drinks — alongside the LDL-lowering changes.",
      },
      {
        heading: "Reading your lipid profile over time",
        body: "A lipid profile measures LDL, HDL, triglycerides and total cholesterol. Diet-driven improvement typically shows within two to three months of consistent eating. The plan is built and revised with your lipid panel in view, and works alongside your doctor — any change to cholesterol medication is their decision.",
      },
    ],
    highlights: [
      "Lowers LDL and triglycerides, supports HDL",
      "Soluble-fibre and healthy-fat Indian meals",
      "Corrects the cooking-oil and fried-food habit",
      "Works alongside your doctor and any medication",
      "Reviewed against your lipid profile each cycle",
    ],
    process: [
      { title: "Assessment", body: "Your lipid profile, medical history, medication, family history and food habits are reviewed together." },
      { title: "Heart-healthy plan", body: "An Indian diet chart built for soluble fibre, the right fats, and reduced refined carbohydrate." },
      { title: "Everyday eating", body: "Follow the plan from your own kitchen — the changes are to oil, portions and pairings, not to whole cuisines." },
      { title: "Review with labs", body: "Daily follow-ups refine the plan; the lipid profile is reviewed each two-to-three-month cycle." },
    ],
    sampleDay: [
      { time: "7:00 AM", meal: "On waking", items: "Warm water; 1 tsp soaked flaxseed and 2 walnuts" },
      { time: "8:30 AM", meal: "Breakfast", items: "Vegetable oats or 2 moong dal cheela, or vegetable poha — with a bowl of curd" },
      { time: "11:00 AM", meal: "Mid-morning", items: "A seasonal fruit — apple, guava or orange" },
      { time: "1:30 PM", meal: "Lunch", items: "2 phulka, 1 bowl dal, 1 sabzi cooked in measured oil, large salad, curd" },
      { time: "4:30 PM", meal: "Evening", items: "Green tea; roasted chana or a small handful of nuts" },
      { time: "8:00 PM", meal: "Dinner", items: "1 phulka with sabzi, or vegetable-and-dal soup; non-veg: grilled fish twice a week" },
    ],
    sampleDayNote:
      "Illustrative only. A cholesterol diet plan is calibrated to your lipid profile, whether LDL or triglycerides are the priority, and any other conditions — your chart will differ. Coordinate with your treating doctor.",
    faqs: [
      { q: "Can diet alone lower high cholesterol?", a: "For many people, diet produces a meaningful drop in LDL and triglycerides within two to three months — sometimes enough that the doctor reviews medication. Whether diet alone is sufficient depends on your numbers and risk profile; that is a decision for your doctor, working with better lab values the diet provides." },
      { q: "Which foods lower cholesterol in an Indian diet?", a: "Oats and barley, whole pulses and legumes, flaxseed and walnuts, mustard or rice-bran oil in measured amounts, garlic, methi, plenty of vegetables, and fish for non-vegetarians. Soluble fibre and the right fats do the work." },
      { q: "What is the biggest dietary mistake that raises cholesterol?", a: "For most Indian households it is cooking oil — the type used, repeated reheating, and the sheer quantity that goes into everyday cooking — together with deep-fried snacks and vanaspati. Correcting this is often the single largest lever." },
      { q: "How do I lower high triglycerides specifically?", a: "Triglycerides respond mainly to refined carbohydrate, sugar and alcohol rather than dietary fat. If triglycerides are your main concern, the plan focuses on cutting sugar, sweets, refined flour and sugary drinks." },
      { q: "Is the cholesterol diet plan available online?", a: "Yes. Share your lipid profile as a photograph, consult by video, and receive the plan in writing with daily check-ins — the same process as an in-clinic engagement." },
    ],
    relatedLinks: [
      { label: "Cholesterol / Lipid Profile treatment", href: "/treatment/lipid-profile-cholesterol.php", note: "Clinical overview" },
      { label: "Heart Disease treatment", href: "/treatment/heart-disease.php", note: "Cardiac nutrition" },
      { label: "Weight Loss Diet Plan", href: "/weight-loss-diet-plan", note: "Weight loss lowers lipids too" },
      { label: "Diabetes Diet Plan", href: "/diabetes-diet-plan", note: "When cholesterol and diabetes overlap" },
    ],
  },

  // ─────────────────────────────────────────── 8. HIGH BLOOD PRESSURE DIET PLAN
  "high-blood-pressure-diet-plan": {
    slug: "high-blood-pressure-diet-plan",
    path: "/high-blood-pressure-diet-plan",
    theme: "condition",
    primaryKeyword: "high blood pressure diet",
    eyebrow: "Pressure, eaten down",
    metaTitle: "High Blood Pressure Diet Plan — Indian Diet for Hypertension | Go Moringa",
    metaDescription:
      "A high blood pressure diet plan — Indian, low-sodium, potassium-rich — to help manage hypertension. Diet chart by Dt. Priyatama Srivastava, Gurgaon & online.",
    h1: "High Blood Pressure Diet Plan",
    heroSubhead:
      "An Indian diet plan that lowers the sodium load, lifts protective nutrients, and helps bring blood pressure into a healthier range.",
    heroImage: PHOTOS.freshGreens.url,
    introLead:
      "Blood pressure responds to diet faster than most people expect. The sodium in salt, achaar, papad and packaged food pushes it up; the potassium, magnesium and fibre in vegetables, fruit and whole grains help bring it down. A high blood pressure diet plan built around Indian food works on both sides of that balance — and works alongside your doctor and any medication.",
    sections: [
      {
        heading: "Sodium — the number that matters most",
        body: "Most Indians eat far more sodium than is healthy, and very little of it comes from the salt jar alone. Achaar, papad, namkeen, packaged snacks, sauces, processed and restaurant food all carry hidden sodium. A high blood pressure diet plan systematically finds and reduces these sources — the single most powerful dietary change for hypertension.",
      },
      {
        heading: "The protective nutrients to add",
        body: "Potassium counters sodium's effect on blood pressure — it is found in bananas, citrus, coconut water, leafy greens, beans and curd. Magnesium, calcium and fibre help too. The plan is, in effect, an Indian adaptation of the well-evidenced DASH approach: less sodium, more vegetables, fruit, whole grains and low-fat dairy.",
      },
      {
        heading: "Weight, alcohol and blood pressure",
        body: "Excess weight and regular alcohol both raise blood pressure independently. For clients carrying extra weight, even a modest, steady loss can lower readings noticeably — so the plan often combines blood-pressure-specific changes with sustainable weight management.",
      },
      {
        heading: "Indian foods that help, and that hurt",
        body: "Helps: fresh vegetables and fruit, whole grains and millets, dal and beans, curd and low-fat milk, unsalted nuts. Hurts: achaar, papad, namkeen and fried snacks, packaged and processed foods, sauces and seasonings, and excess salt added at the table.",
      },
      {
        heading: "Diet works with your doctor",
        body: "A high blood pressure diet plan does not replace your physician or prescribed medication. It works alongside them — and as readings improve, your doctor may review your medication. Any change is their decision; the diet's job is to give them steadier numbers to work with.",
      },
    ],
    highlights: [
      "Systematically cuts hidden dietary sodium",
      "Builds potassium, magnesium and fibre",
      "An Indian adaptation of the DASH approach",
      "Pairs with weight management where needed",
      "Works alongside your doctor and medication",
    ],
    process: [
      { title: "Assessment", body: "Your readings, medication, weight, medical history and current eating patterns are reviewed in detail." },
      { title: "Low-sodium plan", body: "An Indian diet chart that cuts hidden sodium and builds the nutrients that protect against hypertension." },
      { title: "Everyday eating", body: "Follow the plan from your own kitchen — achaar and namkeen out, vegetables and fruit in, salt brought under control." },
      { title: "Daily check-in", body: "Follow-ups refine the plan as your readings respond, in coordination with your doctor's monitoring." },
    ],
    sampleDay: [
      { time: "7:00 AM", meal: "On waking", items: "Warm water; 5–6 soaked almonds" },
      { time: "8:30 AM", meal: "Breakfast", items: "Vegetable poha or oats with minimal salt, or 2 moong dal cheela — with a bowl of curd" },
      { time: "11:00 AM", meal: "Mid-morning", items: "A potassium-rich fruit — banana, orange — or fresh coconut water" },
      { time: "1:30 PM", meal: "Lunch", items: "2 phulka, 1 bowl dal (lightly salted), 1 sabzi, large fresh salad, curd" },
      { time: "4:30 PM", meal: "Evening", items: "Unsalted roasted chana or makhana; herbal tea" },
      { time: "8:00 PM", meal: "Dinner", items: "1 phulka with sabzi, or vegetable-and-dal soup with minimal salt" },
    ],
    sampleDayNote:
      "Illustrative only. A hypertension diet plan is calibrated to your readings, medication, weight and other conditions — your chart and salt allowance will differ. Coordinate with your treating doctor.",
    faqs: [
      { q: "What is the best diet for high blood pressure?", a: "A low-sodium, potassium-rich diet built on fresh vegetables, fruit, whole grains, pulses and low-fat dairy — an Indian adaptation of the DASH approach. Reducing hidden sodium from achaar, papad, namkeen and packaged food is the most powerful single change." },
      { q: "Which Indian foods raise blood pressure?", a: "Achaar, papad, namkeen and fried snacks, packaged and processed foods, sauces and seasonings, and excess table salt — all high in sodium. Most of the problem sodium is hidden in these, not in the cooking salt alone." },
      { q: "Can a diet plan replace blood pressure medication?", a: "No. The diet plan works alongside your doctor and prescribed medication. As readings improve, your doctor may review your medication — that decision belongs to your treating physician." },
      { q: "How quickly can diet lower blood pressure?", a: "Many people see readings respond within a few weeks of consistent low-sodium, potassium-rich eating, especially when combined with modest weight loss. The plan is reviewed against your readings as they change." },
      { q: "Is the high blood pressure diet plan available online?", a: "Yes. Consult by video, share your readings and history, and receive the plan in writing with daily check-ins — identical in depth to an in-clinic engagement." },
    ],
    relatedLinks: [
      { label: "High Blood Pressure treatment", href: "/treatment/high-blood-pressure.php", note: "Clinical overview of hypertension" },
      { label: "Heart Disease treatment", href: "/treatment/heart-disease.php", note: "Cardiac nutrition" },
      { label: "Cholesterol Diet Plan", href: "/cholesterol-diet-plan", note: "Lipids and blood pressure together" },
      { label: "Weight Loss Diet Plan", href: "/weight-loss-diet-plan", note: "Weight loss lowers blood pressure" },
    ],
  },

  // ─────────────────────────────────────────── 9. FATTY LIVER DIET PLAN
  "fatty-liver-diet-plan": {
    slug: "fatty-liver-diet-plan",
    path: "/fatty-liver-diet-plan",
    theme: "condition",
    primaryKeyword: "fatty liver diet",
    eyebrow: "A reversible condition",
    metaTitle: "Fatty Liver Diet Plan — Indian Diet for NAFLD | Go Moringa",
    metaDescription:
      "A fatty liver diet plan to manage and often reverse NAFLD through Indian meals and steady weight loss. Diet chart by Dt. Priyatama Srivastava — Gurgaon & online.",
    h1: "Fatty Liver Diet Plan",
    heroSubhead:
      "Non-alcoholic fatty liver is one of the most diet-reversible conditions there is — and the plan that reverses it is an Indian one you can keep to.",
    heroImage: PHOTOS.freshGreens.url,
    introLead:
      "Non-alcoholic fatty liver disease — fat accumulating in the liver — has become strikingly common, and it is one of the most encouraging conditions to treat: in its early stages it is often reversible, and diet is the central tool. A fatty liver diet plan works by reducing the liver's fat load through steady weight loss and a sharp cut in the foods that drive fat storage.",
    sections: [
      {
        heading: "Why fatty liver develops",
        body: "Non-alcoholic fatty liver is closely tied to excess weight, insulin resistance and a diet high in sugar, refined carbohydrate and fructose. The liver, overloaded, begins storing fat. Because the same drivers cause it across most people, the dietary correction is well understood — and effective.",
      },
      {
        heading: "Weight loss is the core treatment",
        body: "For most people with fatty liver, a steady loss of body weight is the single most effective intervention — even a 7–10% reduction can significantly reduce liver fat. The plan therefore combines fatty-liver-specific changes with sustainable, calibrated weight loss built on Indian meals.",
      },
      {
        heading: "What the plan cuts hardest",
        body: "Refined sugar and sweets, sugary drinks and packaged fruit juices, refined flour and maida products, deep-fried foods, and ultra-processed snacks. Fructose and refined carbohydrate are particular drivers of liver fat, so these are reduced sharply rather than gradually.",
      },
      {
        heading: "What the plan builds in",
        body: "Adequate protein from dal, pulses, curd, paneer, eggs and fish; high-fibre whole grains and millets; plenty of vegetables; coffee in moderation, which evidence associates with liver benefit; and good fats from nuts, seeds and the right oils. It looks like a normal, corrected Indian plate.",
      },
      {
        heading: "Working with your doctor",
        body: "A fatty liver diet plan works alongside your physician, who monitors your liver enzymes and ultrasound findings. Diet-driven improvement often shows within a few months of consistent eating and weight loss. Any medication or further investigation remains your doctor's domain.",
      },
    ],
    highlights: [
      "Targets the weight and sugar load behind NAFLD",
      "Often reversible in its early stages",
      "Sharp cut in sugar, fructose and refined carbs",
      "Sustainable Indian-meal weight loss built in",
      "Works alongside your doctor's monitoring",
    ],
    process: [
      { title: "Assessment", body: "Your liver reports, weight, medical history, blood sugar and food habits are reviewed together." },
      { title: "Liver-focused plan", body: "An Indian diet chart cutting sugar and refined carbohydrate, with a calibrated weight-loss target." },
      { title: "Steady progress", body: "Follow the plan from your own kitchen; weight and energy begin to shift in the first weeks." },
      { title: "Review with labs", body: "Daily follow-ups refine the plan; liver enzymes and weight are tracked across months." },
    ],
    sampleDay: [
      { time: "7:00 AM", meal: "On waking", items: "Warm water; 5–6 soaked almonds and 2 walnuts" },
      { time: "8:30 AM", meal: "Breakfast", items: "Vegetable oats or 2 moong dal cheela — with a bowl of curd; black coffee, unsweetened" },
      { time: "11:00 AM", meal: "Mid-morning", items: "A low-sugar fruit — guava, pear or apple" },
      { time: "1:30 PM", meal: "Lunch", items: "2 millet phulka, 1 bowl dal, 1 sabzi, large salad, curd" },
      { time: "4:30 PM", meal: "Evening", items: "Green tea; roasted chana or makhana" },
      { time: "8:00 PM", meal: "Dinner", items: "1 phulka with sabzi, or vegetable-and-dal soup with paneer or grilled fish" },
    ],
    sampleDayNote:
      "Illustrative only. A fatty liver diet plan is calibrated to your liver reports, weight target and other conditions such as diabetes — your chart will differ. Coordinate with your treating doctor.",
    faqs: [
      { q: "Can fatty liver be reversed with diet?", a: "In its early stages, non-alcoholic fatty liver is often reversible, and diet is the central tool. Steady weight loss — even a 7–10% reduction in body weight — can significantly reduce liver fat. Reversal should be confirmed by your doctor through follow-up tests." },
      { q: "What foods should I avoid with fatty liver?", a: "Refined sugar and sweets, sugary drinks and packaged juices, refined flour and maida products, deep-fried foods and ultra-processed snacks. Fructose and refined carbohydrate are particular drivers of liver fat." },
      { q: "Is weight loss necessary to treat fatty liver?", a: "For most people, yes — steady weight loss is the single most effective intervention. The plan combines fatty-liver-specific changes with sustainable, calibrated weight loss built on Indian meals." },
      { q: "How long does it take to improve fatty liver through diet?", a: "Diet-driven improvement often shows within a few months of consistent eating and weight loss. Your doctor confirms progress through liver enzymes and imaging." },
      { q: "Is the fatty liver diet plan available online?", a: "Yes. Share your liver reports as photographs, consult by video, and receive the plan in writing with daily check-ins." },
    ],
    relatedLinks: [
      { label: "Weight Loss Diet Plan", href: "/weight-loss-diet-plan", note: "Weight loss is the core of NAFLD reversal" },
      { label: "Diabetes Diet Plan", href: "/diabetes-diet-plan", note: "Fatty liver and insulin resistance overlap" },
      { label: "Therapeutic Diet programme", href: "/therapeutic-diet.php", note: "Diets for chronic conditions" },
      { label: "Online Dietitian Consultation", href: "/online-dietitian-consultation", note: "Manage fatty liver from anywhere" },
    ],
  },

  // ─────────────────────────────────────────── 10. URIC ACID DIET PLAN
  "uric-acid-diet-plan": {
    slug: "uric-acid-diet-plan",
    path: "/uric-acid-diet-plan",
    theme: "condition",
    primaryKeyword: "uric acid diet",
    eyebrow: "Purines, brought under control",
    metaTitle: "Uric Acid Diet Plan — Indian Diet for High Uric Acid & Gout | Go Moringa",
    metaDescription:
      "A uric acid diet plan to manage high uric acid and gout through Indian meals — low-purine, well-hydrated. Diet chart by Dt. Priyatama Srivastava, Gurgaon & online.",
    h1: "Uric Acid Diet Plan",
    heroSubhead:
      "An Indian diet plan that lowers the purine load, supports hydration, and helps keep uric acid — and gout flares — under control.",
    heroImage: PHOTOS.greenLeafBranch.url,
    introLead:
      "High uric acid, and the gout that can follow it, responds well to dietary care. Uric acid is produced when the body breaks down purines — compounds found in certain foods and drinks. A uric acid diet plan works by lowering the purine load, supporting the body's ability to flush uric acid out, and steadying the weight and metabolic factors that quietly drive the numbers up.",
    sections: [
      {
        heading: "How diet affects uric acid",
        body: "Some foods are high in purines and raise uric acid more than others; sugar — especially fructose — and alcohol also push it up. At the same time, good hydration and certain foods help the body clear uric acid. A uric acid diet plan adjusts both sides: less of what raises it, more of what helps clear it.",
      },
      {
        heading: "What the plan limits",
        body: "Organ meats, red meat and certain seafood are high in purines and limited or avoided. Alcohol — beer in particular — is a strong trigger. Sugary drinks and fructose-heavy foods raise uric acid and are cut back. Among vegetarian foods, very high-purine items are moderated, though plant purines affect uric acid far less than animal ones.",
      },
      {
        heading: "What the plan encourages",
        body: "Generous water intake to help the kidneys flush uric acid. Low-fat dairy, which is associated with lower uric acid. Plenty of vegetables and most fruit — cherries in particular are linked with fewer gout flares. Whole grains, and coffee in moderation. For most people an Indian vegetarian plate, correctly built, is naturally uric-acid-friendly.",
      },
      {
        heading: "Weight, crash diets and gout",
        body: "Excess weight raises uric acid, so steady weight loss helps — but crash dieting and rapid fasting can temporarily spike uric acid and trigger a flare. This is exactly why a calibrated plan matters: the weight comes off at a pace that does not provoke gout.",
      },
      {
        heading: "Diet works with your doctor",
        body: "A uric acid diet plan supports, but does not replace, medical care. If you have gout or very high uric acid, your doctor may prescribe medication; the diet works alongside it. During an acute gout flare, follow your doctor's advice first.",
      },
    ],
    highlights: [
      "Lowers the dietary purine load",
      "Strong focus on hydration to flush uric acid",
      "Identifies alcohol and fructose triggers",
      "Weight loss paced to avoid provoking flares",
      "Works alongside your doctor and medication",
    ],
    process: [
      { title: "Assessment", body: "Your uric acid levels, gout history, medication, weight and food and drink habits are reviewed." },
      { title: "Low-purine plan", body: "An Indian diet chart that lowers purine load, builds hydration, and removes the main triggers." },
      { title: "Steady eating", body: "Follow the plan from your own kitchen — triggers out, water and uric-acid-friendly foods in." },
      { title: "Daily check-in", body: "Follow-ups refine the plan and pace any weight loss so it does not provoke a flare." },
    ],
    sampleDay: [
      { time: "7:00 AM", meal: "On waking", items: "2 glasses of water; 5–6 soaked almonds" },
      { time: "8:30 AM", meal: "Breakfast", items: "Vegetable poha or oats, or 2 besan cheela — with a bowl of low-fat curd" },
      { time: "11:00 AM", meal: "Mid-morning", items: "A seasonal fruit — cherries, orange or apple — and a glass of water" },
      { time: "1:30 PM", meal: "Lunch", items: "2 phulka, 1 bowl moderate-purine dal, 1 sabzi, large salad, low-fat curd" },
      { time: "4:30 PM", meal: "Evening", items: "Coconut water or buttermilk; roasted makhana" },
      { time: "8:00 PM", meal: "Dinner", items: "1 phulka with sabzi, or vegetable khichdi — plenty of water through the day" },
    ],
    sampleDayNote:
      "Illustrative only. A uric acid diet plan is calibrated to your levels, gout history and other conditions — your chart will differ. During an acute gout flare, follow your doctor's advice first.",
    faqs: [
      { q: "What foods should I avoid with high uric acid?", a: "Organ meats, red meat and certain seafood (high in purines), alcohol — beer especially — and sugary, fructose-heavy drinks and foods. Among vegetarian foods, very high-purine items are moderated, though plant purines affect uric acid far less than animal ones." },
      { q: "What foods help lower uric acid?", a: "Generous water intake, low-fat dairy, plenty of vegetables and most fruit (cherries are linked with fewer flares), whole grains and moderate coffee. A correctly built Indian vegetarian plate is naturally uric-acid-friendly for most people." },
      { q: "Can a vegetarian diet cause high uric acid?", a: "It is far less likely to than a meat-heavy diet — plant purines raise uric acid much less than animal ones. Sugar, fructose, alcohol and excess weight are common contributors even in vegetarians, and the plan addresses these." },
      { q: "Does losing weight lower uric acid?", a: "Steady weight loss helps lower uric acid — but crash dieting and rapid fasting can temporarily spike it and trigger a gout flare. The plan paces weight loss specifically to avoid this." },
      { q: "Is the uric acid diet plan available online?", a: "Yes. Share your uric acid reports, consult by video, and receive the plan in writing with daily check-ins." },
    ],
    relatedLinks: [
      { label: "Uric Acid / Gout treatment", href: "/treatment/uric-acid.php", note: "Clinical overview" },
      { label: "Therapeutic Diet programme", href: "/therapeutic-diet.php", note: "Diets for chronic conditions" },
      { label: "Weight Loss Diet Plan", href: "/weight-loss-diet-plan", note: "Weight loss, paced safely" },
      { label: "Online Dietitian Consultation", href: "/online-dietitian-consultation", note: "Manage uric acid from anywhere" },
    ],
  },

  // ─────────────────────────────────────────── 11. KIDNEY DIET PLAN
  "kidney-diet-plan": {
    slug: "kidney-diet-plan",
    path: "/kidney-diet-plan",
    theme: "condition",
    primaryKeyword: "kidney diet plan",
    eyebrow: "Renal nutrition, done carefully",
    metaTitle: "Kidney Diet Plan — Indian Renal Diet for CKD | Go Moringa",
    metaDescription:
      "A kidney diet plan — Indian, renal-friendly — to support kidney health in CKD, built carefully alongside your nephrologist. By Dt. Priyatama Srivastava, Gurgaon & online.",
    h1: "Kidney Diet Plan",
    heroSubhead:
      "A renal diet is one of the most individual diets in clinical nutrition — built carefully around your kidney function and your nephrologist's guidance.",
    heroImage: PHOTOS.greenLeafBranch.url,
    introLead:
      "A kidney diet plan is among the most precise and individual diets in clinical nutrition. In chronic kidney disease, the diet must balance protein, sodium, potassium, phosphorus and fluid — and the right balance depends entirely on the stage of kidney function, whether dialysis is involved, and your other conditions. This is diet built strictly in coordination with your nephrologist.",
    sections: [
      {
        heading: "Why a renal diet must be individual",
        body: "There is no single 'kidney diet'. What is correct for early-stage chronic kidney disease differs sharply from what is correct for advanced stages or for someone on dialysis. Protein, potassium and phosphorus targets in particular change with kidney function. A renal diet plan must be built around your specific reports and your nephrologist's instructions — never from a generic chart.",
      },
      {
        heading: "The nutrients a kidney diet manages",
        body: "Protein is controlled to a level matched to your stage of kidney disease — too much strains the kidneys, too little risks malnutrition. Sodium is reduced to manage blood pressure and fluid. Potassium and phosphorus are adjusted based on your blood levels. Fluid intake may be limited in later stages. Each of these is set with your nephrologist.",
      },
      {
        heading: "Building a renal diet from the Indian kitchen",
        body: "An Indian renal diet still uses Indian food — but with specific adjustments: certain dals and vegetables managed for potassium and phosphorus, cooking techniques such as leaching used where needed, and salt and salt substitutes handled carefully. The clinic's role is to translate your nephrologist's targets into meals you can actually cook and eat.",
      },
      {
        heading: "Eating well while protecting the kidneys",
        body: "A common difficulty in kidney disease is eating enough, and well, within tight restrictions — appetite is often poor and many foods are limited. A good renal diet plan works hard on this: making the permitted foods varied, palatable and adequate, so nutrition does not slip while the kidneys are protected.",
      },
      {
        heading: "This diet is always doctor-led",
        body: "A kidney diet plan supports, and never replaces, your nephrologist and treating team. The clinic builds the everyday meal plan around the medical targets they set, and revises it as your reports change. Any decision about medication, dialysis or restrictions belongs to your doctors.",
      },
    ],
    highlights: [
      "Built strictly around your kidney function & stage",
      "Manages protein, sodium, potassium, phosphorus",
      "Indian renal meals — adjusted, not generic",
      "Focus on eating adequately within restrictions",
      "Always coordinated with your nephrologist",
    ],
    process: [
      { title: "Assessment", body: "Your kidney reports, stage, nephrologist's targets, medication and food habits are reviewed in detail." },
      { title: "Renal meal plan", body: "An Indian diet chart translating your medical targets — protein, sodium, potassium, phosphorus — into real meals." },
      { title: "Careful eating", body: "Follow the plan from your own kitchen, with cooking techniques and portions matched to your reports." },
      { title: "Review with labs", body: "The plan is revised as your blood levels and kidney function change, alongside your nephrologist." },
    ],
    sampleDayNote:
      "A renal diet is too individual to publish a sample chart safely — protein, potassium, phosphorus and fluid targets differ entirely by stage of kidney disease and by whether dialysis is involved. Your plan is built only after reviewing your reports and your nephrologist's instructions.",
    faqs: [
      { q: "Is there a standard kidney diet plan?", a: "No — and this matters. A renal diet must be individual: protein, potassium, phosphorus, sodium and fluid targets change entirely with the stage of kidney disease and whether dialysis is involved. A generic 'kidney diet chart' can be unsafe. The plan is built from your specific reports and your nephrologist's targets." },
      { q: "Can I follow a kidney diet without a doctor?", a: "No. A kidney diet plan is always doctor-led. The clinic translates your nephrologist's medical targets into everyday Indian meals — but the targets, and all decisions about medication, dialysis and restrictions, come from your treating team." },
      { q: "Can a kidney diet still use Indian food?", a: "Yes. An Indian renal diet uses Indian food with specific adjustments — certain dals and vegetables managed for potassium and phosphorus, leaching and cooking techniques used where needed, and salt handled carefully. The aim is meals you can genuinely cook and eat." },
      { q: "Why is it hard to eat well with kidney disease?", a: "Appetite is often poor in kidney disease, and many foods are restricted — so eating enough, and adequately, is a real challenge. A good renal diet plan focuses heavily on keeping the permitted foods varied, palatable and nutritionally adequate." },
      { q: "Is the kidney diet plan available online?", a: "Yes. Share your kidney reports and your nephrologist's instructions, consult by video, and receive the plan in writing with reviews — built carefully around your medical targets." },
    ],
    relatedLinks: [
      { label: "Therapeutic Diet programme", href: "/therapeutic-diet.php", note: "Diets for chronic conditions" },
      { label: "High Blood Pressure Diet Plan", href: "/high-blood-pressure-diet-plan", note: "Blood pressure and kidney health" },
      { label: "Diabetes Diet Plan", href: "/diabetes-diet-plan", note: "Diabetes is a leading cause of CKD" },
      { label: "Online Dietitian Consultation", href: "/online-dietitian-consultation", note: "Renal nutrition support, online" },
    ],
  },

  // ─────────────────────────────────────────── 12. DIETITIAN FOR WOMEN
  "dietitian-for-women": {
    slug: "dietitian-for-women",
    path: "/dietitian-for-women",
    theme: "audience",
    primaryKeyword: "dietitian for women",
    eyebrow: "Nutrition across a woman's life",
    metaTitle: "Dietitian for Women — Nutrition for Every Life Stage | Go Moringa",
    metaDescription:
      "A dietitian for women — PCOS, pregnancy, post-partum, thyroid, iron deficiency, menopause. Personalised Indian nutrition by Dt. Priyatama Srivastava, Gurgaon & online.",
    h1: "Dietitian for Women",
    heroSubhead:
      "Women's nutrition changes with every life stage — PCOS, pregnancy, post-partum, thyroid, menopause. One dietitian who has guided 10,000+ clients through all of them.",
    heroImage: PHOTOS.indianSpicesWhite.url,
    introLead:
      "A woman's nutritional needs are not static — they shift through the teenage years, the reproductive decades, pregnancy and post-partum recovery, and the menopausal transition. A dietitian for women is someone who understands those shifts and adjusts the plan to the stage you are actually in. Dt. Priyatama Srivastava has spent 20 years doing exactly that, for more than 10,000 clients.",
    sections: [
      {
        heading: "PCOS, periods and hormonal health",
        body: "PCOS and PCOD, irregular cycles, painful or heavy periods — these are among the most common reasons women consult a dietitian, and among the most diet-responsive. Insulin, inflammation and weight all influence the hormonal picture, and a calibrated eating plan addresses the mechanism, not just the symptoms.",
      },
      {
        heading: "Pregnancy and post-partum nutrition",
        body: "Pregnancy nutrition supports both mother and baby through each trimester; post-partum nutrition supports recovery, breastfeeding and a realistic return to pre-pregnancy health. Both are core to the practice, and both are built around safe, nourishing Indian meals rather than restriction.",
      },
      {
        heading: "Thyroid and metabolism",
        body: "Thyroid disorders are far more common in women than men, and they reshape metabolism, energy and weight. Thyroid-supportive nutrition — and managing the frequent overlap of thyroid issues with PCOS — is a regular part of women's care at the clinic.",
      },
      {
        heading: "Iron, calcium and the deficiencies women carry",
        body: "Iron-deficiency anaemia, low calcium and vitamin D, and other micronutrient gaps are widespread among Indian women, and they quietly drain energy, hair health and bone strength. A women's nutrition plan deliberately builds these nutrients in through everyday food, correcting confirmed deficiencies.",
      },
      {
        heading: "Menopause and the years beyond",
        body: "The menopausal transition brings shifts in weight distribution, bone density and metabolism. Nutrition through and after menopause focuses on protein and calcium for muscle and bone, managing the mid-life weight change, and protecting heart health for the decades ahead.",
      },
    ],
    highlights: [
      "PCOS, periods and hormonal-health nutrition",
      "Pregnancy and post-partum care",
      "Thyroid and metabolism support",
      "Corrects iron, calcium and vitamin deficiencies",
      "Menopause and mid-life nutrition",
    ],
    process: [
      { title: "Assessment", body: "Your life stage, cycle and hormonal history, labs, medical history and food habits are reviewed together." },
      { title: "Stage-specific plan", body: "An Indian-meal plan built for the stage you are in — PCOS, pregnancy, thyroid, menopause or general health." },
      { title: "Everyday eating", body: "Follow the plan from your own kitchen — nourishing, not restrictive, built around real food." },
      { title: "Daily check-in", body: "The plan is reviewed and revised as your body, labs and life stage change." },
    ],
    sampleDay: [
      { time: "7:00 AM", meal: "On waking", items: "Warm water; 5–6 soaked almonds and 2 walnuts" },
      { time: "8:30 AM", meal: "Breakfast", items: "2 moong dal cheela or vegetable poha, or 2 idli with sambar — with a bowl of curd" },
      { time: "11:00 AM", meal: "Mid-morning", items: "A seasonal fruit, or a glass of buttermilk" },
      { time: "1:30 PM", meal: "Lunch", items: "2 phulka, 1 bowl dal, 1 iron-rich sabzi (greens), salad, curd" },
      { time: "4:30 PM", meal: "Evening", items: "Tea; roasted chana or a small handful of nuts and seeds" },
      { time: "8:00 PM", meal: "Dinner", items: "1 phulka with sabzi, or vegetable-and-dal soup with paneer, eggs or fish" },
    ],
    sampleDayNote:
      "Illustrative only. A women's nutrition plan is calibrated to your life stage, hormonal and nutritional labs and any conditions — your chart will differ.",
    faqs: [
      { q: "Why see a dietitian who focuses on women's nutrition?", a: "A woman's nutritional needs change through every life stage — adolescence, the reproductive years, pregnancy, post-partum and menopause. A dietitian familiar with those shifts can match the plan to the stage you are actually in, rather than applying a one-size approach." },
      { q: "Can a dietitian help with PCOS and irregular periods?", a: "Yes. PCOS and irregular cycles are among the most diet-responsive concerns. Insulin, inflammation and weight all influence the hormonal picture, and a calibrated plan addresses the underlying mechanism." },
      { q: "Do you provide pregnancy and post-partum nutrition?", a: "Yes — both are core to the practice. Pregnancy nutrition supports mother and baby through each trimester; post-partum nutrition supports recovery, breastfeeding and a realistic return to health." },
      { q: "Why are iron and calcium deficiencies so common in women?", a: "Menstrual loss, pregnancy, breastfeeding and often inadequate dietary intake combine to make iron, calcium and vitamin D deficiencies widespread among Indian women. A women's nutrition plan deliberately builds these nutrients in and corrects confirmed deficiencies." },
      { q: "Is the consultation available online?", a: "Yes. Women's nutrition is managed online for clients across India and abroad — video assessment, written plan, daily check-ins." },
    ],
    relatedLinks: [
      { label: "PCOS Diet Plan", href: "/pcos-diet-plan", note: "Managing PCOS through diet" },
      { label: "Pregnancy Diet", href: "/pregnancy-diet.php", note: "Trimester-wise pregnancy nutrition" },
      { label: "Weight Loss After Pregnancy", href: "/weight-loss-after-pregnancy", note: "Post-partum weight loss" },
      { label: "Thyroid Diet Plan", href: "/thyroid-diet-plan", note: "Thyroid nutrition for women" },
    ],
  },

  // ─────────────────────────────────────────── 13. WEIGHT LOSS AFTER PREGNANCY
  "weight-loss-after-pregnancy": {
    slug: "weight-loss-after-pregnancy",
    inlineFigure: {
      src: REAL.weightLossThali,
      eyebrow: "What a balanced plate holds",
      alt: "Go Moringa weight-loss thali — a balanced Indian plate: protein-rich dal, fibre-rich salad, sprouts, low-calorie sabzi, multigrain roti and gut-friendly curd, each component labelled",
      caption: "A Go Moringa weight-loss thali — balanced, not restrictive",
      ratio: "1290/1219",
    },
    path: "/weight-loss-after-pregnancy",
    theme: "audience",
    primaryKeyword: "weight loss after pregnancy",
    eyebrow: "Post-partum, done patiently",
    metaTitle: "Weight Loss After Pregnancy — Post-Partum Diet Plan | Go Moringa",
    metaDescription:
      "Weight loss after pregnancy, done safely — a post-partum diet plan that protects breastfeeding and recovery. By Dt. Priyatama Srivastava, Gurgaon & online.",
    h1: "Weight Loss After Pregnancy",
    heroSubhead:
      "Post-partum weight loss that protects your recovery and your milk supply — patient, nourishing, and built for a new mother's reality.",
    heroImage: PHOTOS.moringaLeaves.url,
    introLead:
      "Losing weight after pregnancy is real, achievable and worth doing well — but it is not the place for a crash diet. The post-partum body is recovering, and for many mothers it is also producing milk. A weight loss after pregnancy plan has to respect both: nourishing enough to support healing and breastfeeding, structured enough to bring weight down steadily.",
    sections: [
      {
        heading: "Why post-partum weight loss is different",
        body: "After delivery the body is healing, hormones are resettling, sleep is broken, and — for many mothers — milk is being produced. A diet that ignores all of this fails fast or harms recovery. Post-partum weight loss must be patient and well-nourished by design, not aggressive.",
      },
      {
        heading: "Losing weight while breastfeeding",
        body: "Breastfeeding mothers can lose weight safely — but the plan must supply enough energy and nutrients to protect milk supply and the mother's own stores. The plan builds in adequate calories, protein, calcium, iron and fluids, and brings weight down through gentle, steady changes rather than sharp restriction.",
      },
      {
        heading: "A realistic timeline",
        body: "It took nine months to gain pregnancy weight; losing it well takes time too. A steady, sustainable rate — without compromising recovery or feeding — is the goal. Crash dieting in the post-partum period can reduce milk supply, slow healing and leave a tired mother more tired; the plan deliberately avoids it.",
      },
      {
        heading: "Eating well on a new mother's schedule",
        body: "Newborn care leaves little time and energy for elaborate cooking. The plan is built around simple, quick, nourishing Indian meals, sensible snacks within reach, and the reality of broken sleep and unpredictable days — so it can actually be followed.",
      },
      {
        heading: "Rebuilding strength, not just losing weight",
        body: "Post-partum nutrition is as much about rebuilding — iron stores often depleted by delivery, calcium, protein for tissue repair and strength — as about weight. The plan treats recovery and weight loss as one combined goal.",
      },
    ],
    highlights: [
      "Safe for breastfeeding — protects milk supply",
      "Patient, steady pace — never a crash diet",
      "Simple, quick Indian meals for a new mother",
      "Rebuilds iron, calcium and protein stores",
      "Available online — no clinic travel with a newborn",
    ],
    process: [
      { title: "Assessment", body: "Your delivery, recovery, breastfeeding status, labs, current weight and routine are reviewed with care." },
      { title: "Post-partum plan", body: "A nourishing Indian-meal plan that supports recovery and feeding while bringing weight down steadily." },
      { title: "Gentle progress", body: "Follow the plan from home — simple meals, sensible snacks, no aggressive restriction." },
      { title: "Daily check-in", body: "The plan is revised as recovery progresses and, where relevant, as breastfeeding changes." },
    ],
    sampleDay: [
      { time: "7:00 AM", meal: "On waking", items: "Warm water; 5–6 soaked almonds, 2 walnuts and 2 dates" },
      { time: "8:30 AM", meal: "Breakfast", items: "Vegetable poha or 2 moong dal cheela, or vegetable upma — with a bowl of curd" },
      { time: "11:00 AM", meal: "Mid-morning", items: "A seasonal fruit and a glass of milk" },
      { time: "1:30 PM", meal: "Lunch", items: "2 phulka, 1 bowl dal, 1 sabzi (include greens for iron), salad, curd" },
      { time: "4:30 PM", meal: "Evening", items: "Buttermilk or milk; roasted chana, or a handful of nuts and seeds" },
      { time: "8:00 PM", meal: "Dinner", items: "1 phulka with sabzi, or moong dal khichdi with vegetables and paneer" },
    ],
    sampleDayNote:
      "Illustrative only, and oriented to a breastfeeding mother. Your plan is calibrated to your recovery, feeding status, labs and weight goal — energy needs of a breastfeeding mother are higher, and the chart will differ.",
    faqs: [
      { q: "When can I start a weight loss diet after delivery?", a: "Gentle, well-nourished weight management can usually begin once initial recovery is underway, but the timing depends on your delivery, recovery and breastfeeding — and is best confirmed with your doctor. The plan is always patient and nourishing rather than aggressive." },
      { q: "Can I lose weight while breastfeeding?", a: "Yes, safely — but the plan must supply enough energy and nutrients to protect your milk supply and your own stores. Weight comes down through gentle, steady changes, never sharp restriction." },
      { q: "Why should I avoid crash dieting after pregnancy?", a: "Crash dieting in the post-partum period can reduce milk supply, slow healing and leave an already-tired mother more depleted. Sustainable, nourishing weight loss protects both recovery and feeding." },
      { q: "How long does it take to lose pregnancy weight?", a: "It took nine months to gain; losing it well takes time too. A steady, sustainable rate — without compromising recovery or breastfeeding — is the goal, rather than a fast drop." },
      { q: "Is the post-partum plan available online?", a: "Yes — and most new mothers prefer it. Video assessment, written plan and daily check-ins mean no clinic travel with a newborn." },
    ],
    relatedLinks: [
      { label: "Pregnancy Diet", href: "/pregnancy-diet.php", note: "Trimester-wise pregnancy nutrition" },
      { label: "Dietitian for Women", href: "/dietitian-for-women", note: "Nutrition across every life stage" },
      { label: "Weight Loss Diet Plan", href: "/weight-loss-diet-plan", note: "How a personalised plan is built" },
      { label: "Diet for Breastfeeding", href: "/blog/diet-for-breastfeeding.php", note: "Nutrition while breastfeeding" },
    ],
  },

  // ─────────────────────────────────────────── 14. CHILD NUTRITIONIST
  "child-nutritionist": {
    slug: "child-nutritionist",
    path: "/child-nutritionist",
    theme: "audience",
    primaryKeyword: "child nutritionist",
    eyebrow: "Healthy habits, started early",
    metaTitle: "Child Nutritionist — Diet & Nutrition for Children | Go Moringa",
    metaDescription:
      "A child nutritionist for fussy eating, healthy growth, immunity and childhood weight concerns. Family-friendly Indian nutrition by Dt. Priyatama Srivastava, Gurgaon & online.",
    h1: "Child Nutritionist",
    heroSubhead:
      "Nutrition guidance for children — fussy eating, healthy growth, immunity and weight — built around the family kitchen, not around restriction.",
    heroImage: PHOTOS.washedSpinach.url,
    introLead:
      "Children's nutrition is not adult dieting in a smaller portion. It is about building healthy eating habits that last a lifetime, supporting growth and immunity, and resolving the everyday struggles — the fussy eater, the constant junk-food pull, the child whose weight worries a parent. A child nutritionist's job is to do all of that gently, with the family, never through restriction that a child should not face.",
    sections: [
      {
        heading: "The fussy eater",
        body: "Few parenting struggles are as draining as a child who refuses to eat. The clinic's approach is practical — understanding the real causes, widening the accepted-food list gradually, presenting familiar Indian foods in ways children take to, and reducing mealtime conflict. The goal is a child who eats well, not a child who is forced.",
      },
      {
        heading: "Growth, immunity and energy",
        body: "Children need the right nutrients to grow, build immunity and stay energetic through school and play. Plans focus on adequate protein, iron, calcium, vitamins and whole foods — and on correcting deficiencies that show up as frequent illness, low energy or poor concentration.",
      },
      {
        heading: "Childhood weight — handled with care",
        body: "Childhood overweight is a genuine and growing concern, but it must be handled very differently from adult weight loss. Children are still growing, so the focus is on healthy habits, balanced family meals, reduced ultra-processed food and active routines — never on calorie-cutting or restrictive dieting. Where weight is a medical concern, the approach is coordinated with the child's paediatrician.",
      },
      {
        heading: "Less junk, without a battle",
        body: "Packaged snacks, sugary drinks, biscuits and fast food are everywhere in a child's world. The plan does not declare war on them — it crowds them out, with appealing Indian alternatives, sensible structure and habits the whole family shares, so the change does not single the child out.",
      },
      {
        heading: "It works best as a family",
        body: "A child eats what the household eats. Plans are built for the family table — so a healthy change is something the whole family does together, which is both kinder to the child and far more likely to last.",
      },
    ],
    highlights: [
      "Practical help for the fussy eater",
      "Supports growth, immunity and energy",
      "Childhood weight handled gently — never crash dieting",
      "Crowds out junk food with Indian alternatives",
      "Built for the whole family table",
    ],
    process: [
      { title: "Assessment", body: "Your child's growth, eating patterns, health history and any concerns are discussed with the parent." },
      { title: "Family-friendly plan", body: "A practical plan of Indian meals and habits built for the child within the family kitchen." },
      { title: "Gentle change", body: "Habits shift gradually — the accepted-food list widens, junk is crowded out, mealtimes ease." },
      { title: "Review together", body: "Progress is reviewed with the parent and the plan adjusted as the child grows and responds." },
    ],
    sampleDay: [
      { time: "Morning", meal: "Breakfast", items: "Vegetable poha, idli, paratha with curd, or besan cheela — a protein-inclusive start" },
      { time: "Mid-morning", meal: "School snack", items: "A fruit, or homemade snack — roasted chana, makhana, a small sandwich" },
      { time: "Afternoon", meal: "Lunch", items: "Roti or rice, dal, a vegetable the child accepts, curd — balanced and familiar" },
      { time: "Evening", meal: "After play", items: "Milk; a homemade snack rather than a packaged one" },
      { time: "Night", meal: "Dinner", items: "A simple, balanced family meal — roti, sabzi, dal, or khichdi" },
    ],
    sampleDayNote:
      "Illustrative only. A child's plan is built around their age, growth, food acceptance and any health concerns — and is never restrictive. Where weight or a medical issue is involved, the approach is coordinated with your paediatrician.",
    faqs: [
      { q: "When should I consult a child nutritionist?", a: "Common reasons are a persistently fussy eater, concerns about growth or low energy, frequent illness, an over-reliance on junk food, or a paediatrician flagging a weight concern. A nutritionist helps build healthy, lasting habits for the whole family." },
      { q: "How do you help with a fussy eater?", a: "By understanding the real causes, widening the accepted-food list gradually, presenting familiar Indian foods in child-friendly ways, and reducing mealtime conflict — so the child eats well rather than being forced." },
      { q: "Should an overweight child be put on a diet?", a: "Not in the adult sense. Children are still growing, so the focus is on healthy habits, balanced family meals, less ultra-processed food and active routines — never calorie-cutting or restrictive dieting. Where weight is a medical concern, the plan is coordinated with the child's paediatrician." },
      { q: "Do both parents and child need to change how they eat?", a: "It works best that way. A child eats what the household eats, so plans are built for the family table — a healthy change the whole family makes together is kinder and far more likely to last." },
      { q: "Is the consultation available online?", a: "Yes. Children's nutrition is guided online for families across India — a video discussion with the parent, a written plan, and reviews as the child grows." },
    ],
    relatedLinks: [
      { label: "Dietitian for Women", href: "/dietitian-for-women", note: "Nutrition for mothers too" },
      { label: "Healthy recipes", href: "/blog.php", note: "Family-friendly Indian recipes" },
      { label: "Micronutrient Deficiency", href: "/treatment/micronutrient-deficiency.php", note: "Correcting nutrient gaps" },
      { label: "Online Dietitian Consultation", href: "/online-dietitian-consultation", note: "Family nutrition, online" },
    ],
  },

  // ─────────────────────────────────────────── 15. DIET PLAN FOR SENIOR CITIZENS
  "diet-plan-for-senior-citizens": {
    slug: "diet-plan-for-senior-citizens",
    path: "/diet-plan-for-senior-citizens",
    theme: "audience",
    primaryKeyword: "diet plan for senior citizens",
    eyebrow: "Nutrition for the later years",
    metaTitle: "Diet Plan for Senior Citizens — Nutrition for the Elderly | Go Moringa",
    metaDescription:
      "A diet plan for senior citizens — managing diabetes, blood pressure, joints and strength through gentle Indian nutrition. By Dt. Priyatama Srivastava, Gurgaon & online.",
    h1: "Diet Plan for Senior Citizens",
    heroSubhead:
      "Nutrition for the later years — protecting strength and bone, managing chronic conditions, and keeping food a pleasure, not a restriction.",
    heroImage: PHOTOS.spiceBowls.url,
    introLead:
      "Good nutrition in the later years is quietly one of the most powerful things for quality of life. A diet plan for senior citizens has a particular job: to protect muscle and bone, manage the chronic conditions that often accumulate with age, work around reduced appetite and digestion, and do all of it while keeping food enjoyable. It is gentle, practical nutrition — not restriction.",
    sections: [
      {
        heading: "Protecting muscle and strength",
        body: "Muscle is lost steadily with age, and with it goes strength, balance and independence. Adequate, well-distributed protein — from dal, curd, paneer, eggs, milk and fish — is central to a senior nutrition plan, because protecting muscle protects mobility and reduces fall risk.",
      },
      {
        heading: "Bones and joints",
        body: "Bone density declines with age and joint problems become common. The plan builds in calcium, vitamin D and the nutrients bone needs, and supports joint health and a healthy weight — because every extra kilogram is extra load on ageing knees and hips.",
      },
      {
        heading: "Managing several conditions at once",
        body: "Many seniors live with more than one condition — diabetes, blood pressure, cholesterol, thyroid, kidney or heart issues together. A senior diet plan has to balance all of them in one coherent set of meals, in coordination with the treating doctors, rather than following a single-condition chart.",
      },
      {
        heading: "Appetite, digestion and easy eating",
        body: "Appetite often fades with age, digestion slows, and chewing can become harder. The plan adapts — smaller, more frequent meals, softer preparations where needed, easily digestible Indian foods — so that adequate nutrition is actually achievable, not a struggle.",
      },
      {
        heading: "Keeping food a pleasure",
        body: "Food is one of the daily pleasures of later life. A good senior nutrition plan never strips that away — it works with familiar, comforting Indian dishes, adjusted thoughtfully, so eating well stays something to look forward to.",
      },
    ],
    highlights: [
      "Protein to protect muscle, strength and balance",
      "Calcium and nutrients for bones and joints",
      "Balances several conditions in one plan",
      "Adapts to appetite, digestion and easy chewing",
      "Keeps familiar Indian food enjoyable",
    ],
    process: [
      { title: "Assessment", body: "Health conditions, medication, labs, appetite, digestion and food preferences are reviewed in detail." },
      { title: "Gentle plan", body: "An Indian-meal plan balancing every condition, protecting strength and bone, easy to eat." },
      { title: "Comfortable eating", body: "Follow the plan from home — familiar foods, sensible portions, smaller frequent meals where helpful." },
      { title: "Regular review", body: "The plan is revised as conditions, labs and appetite change, alongside the treating doctors." },
    ],
    sampleDay: [
      { time: "7:00 AM", meal: "On waking", items: "Warm water; 5–6 soaked almonds" },
      { time: "8:30 AM", meal: "Breakfast", items: "Vegetable upma, soft poha, or daliya — with a bowl of curd or a glass of milk" },
      { time: "11:00 AM", meal: "Mid-morning", items: "A soft seasonal fruit, or buttermilk" },
      { time: "1:30 PM", meal: "Lunch", items: "1–2 soft phulka, 1 bowl well-cooked dal, 1 sabzi, curd — easy to chew and digest" },
      { time: "4:30 PM", meal: "Evening", items: "Tea with milk; a light, soft snack" },
      { time: "7:30 PM", meal: "Dinner", items: "Light and early — moong dal khichdi with vegetables, or 1 phulka with sabzi" },
    ],
    sampleDayNote:
      "Illustrative only. A senior nutrition plan is calibrated to the individual's conditions, medication, labs, appetite and digestion — and coordinated with their doctors. The chart will differ.",
    faqs: [
      { q: "Why do senior citizens need a special diet plan?", a: "Nutritional needs change with age — muscle and bone need protecting, appetite and digestion change, and chronic conditions often accumulate. A senior diet plan addresses all of this gently, in coordination with the treating doctors." },
      { q: "How much protein do elderly people need?", a: "Older adults often need more attention to protein, not less — muscle is lost steadily with age, and adequate, well-distributed protein from dal, curd, paneer, eggs, milk and fish helps protect strength, balance and independence. The exact target is set individually." },
      { q: "Can one diet plan manage several conditions together?", a: "Yes — and it must. Many seniors live with diabetes, blood pressure, cholesterol or other conditions at once. A senior diet plan balances all of them in one coherent set of meals, coordinated with the treating doctors." },
      { q: "What if appetite or digestion has become poor?", a: "The plan adapts — smaller, more frequent meals, softer preparations, easily digestible Indian foods — so that adequate nutrition is genuinely achievable rather than a daily struggle." },
      { q: "Is the senior diet plan available online?", a: "Yes. Many families arrange an online consultation for an elderly parent — a video assessment, a written plan, and regular reviews, with no need for clinic travel." },
    ],
    relatedLinks: [
      { label: "Therapeutic Diet programme", href: "/therapeutic-diet.php", note: "Diets for chronic conditions" },
      { label: "Diabetes Diet Plan", href: "/diabetes-diet-plan", note: "A common condition in later years" },
      { label: "Osteoporosis treatment", href: "/treatment/osteoporosis.php", note: "Bone-health nutrition" },
      { label: "Online Dietitian Consultation", href: "/online-dietitian-consultation", note: "Arrange care for a parent, online" },
    ],
  },

  // ─────────────────────────────────────────── 16. CORPORATE WELLNESS PROGRAM
  "corporate-wellness-program": {
    slug: "corporate-wellness-program",
    path: "/corporate-wellness-program",
    theme: "audience",
    primaryKeyword: "corporate wellness program",
    eyebrow: "Workplace nutrition that works",
    metaTitle: "Corporate Wellness Program — Workplace Nutrition | Go Moringa",
    metaDescription:
      "A corporate wellness program built on real clinical nutrition — workshops, screenings and personalised plans for employees. By Dt. Priyatama Srivastava, Gurgaon & online.",
    h1: "Corporate Wellness Program",
    heroSubhead:
      "Nutrition wellness for your workforce — practical workshops, health screenings and personalised plans, delivered on-site in Gurgaon or online nationwide.",
    heroImage: REAL.teamAtWork,
    introLead:
      "The modern Indian workplace quietly manufactures lifestyle disease — sedentary hours, food-app lunches, skipped breakfasts, vending-machine snacks, stress eating. A corporate wellness program built on real clinical nutrition addresses that directly: better-informed employees, healthier daily choices, and a workforce with more energy and fewer sick days. Go Moringa delivers wellness programs grounded in 20 years of clinical practice — not generic motivational sessions.",
    sections: [
      {
        heading: "Why workplace nutrition matters",
        body: "Lifestyle-disease markers — blood sugar, blood pressure, cholesterol, weight — now creep up in employees from their early 30s. The cost shows up as fatigue, lower productivity, absenteeism and rising health-insurance claims. Nutrition is one of the few wellness levers that is both low-cost and genuinely effective.",
      },
      {
        heading: "Nutrition workshops and talks",
        body: "Practical, engaging sessions for employees — on weight management, eating well on a busy work schedule, managing diabetes and hypertension risk, food-app and canteen choices, and stress eating. Real, usable guidance from a clinical dietitian, not slogans.",
      },
      {
        heading: "Health screenings and assessments",
        body: "On-site or coordinated health and nutritional screenings — identifying employees with weight, blood-sugar, blood-pressure or deficiency concerns early, when dietary intervention works best. Aggregate, anonymised insight helps an organisation understand its workforce's health.",
      },
      {
        heading: "Personalised plans for employees",
        body: "Beyond group sessions, individual employees can receive personalised diet plans — the same clinical assessment, written plan and follow-up the clinic provides every client. Programs can be structured as a company benefit, in-clinic or online.",
      },
      {
        heading: "Flexible delivery, NCR and nationwide",
        body: "Programs are delivered on-site for Gurgaon and Delhi NCR offices, and fully online for distributed teams and offices anywhere in India. Scope and format are tailored to the organisation — a one-off workshop series, or an ongoing wellness partnership.",
      },
    ],
    highlights: [
      "Grounded in 20 years of clinical nutrition",
      "Workshops, screenings and 1:1 employee plans",
      "Targets the lifestyle-disease curve early",
      "On-site in Gurgaon NCR, or online nationwide",
      "Scoped and tailored to your organisation",
    ],
    process: [
      { title: "Discuss your goals", body: "A conversation about your workforce, health concerns, and what the program should achieve." },
      { title: "Tailored proposal", body: "A program scoped to your organisation — workshops, screenings, employee plans, or a combination." },
      { title: "Delivery", body: "Sessions and screenings run on-site or online; employees who opt in receive personalised plans." },
      { title: "Review and continue", body: "Outcomes are reviewed, and the program can continue as an ongoing wellness partnership." },
    ],
    faqs: [
      { q: "What does a corporate wellness program include?", a: "It can include nutrition workshops and talks, on-site or coordinated health screenings, and personalised diet plans for individual employees. The exact scope is tailored to the organisation — from a one-off workshop series to an ongoing partnership." },
      { q: "Can the program be delivered for offices outside Gurgaon?", a: "Yes. Programs run on-site for Gurgaon and Delhi NCR offices and fully online for distributed teams or offices anywhere in India — workshops by video, screenings coordinated, employee plans delivered online." },
      { q: "How is this different from a generic wellness session?", a: "It is built on 20 years of clinical nutrition practice. Workshops give real, usable guidance; screenings identify genuine risk early; and employees who opt in get the same clinical-grade personalised plans the clinic provides every client — not slogans." },
      { q: "How do we set up a program for our company?", a: "Contact the clinic to discuss your workforce and goals. A program is then scoped and proposed — tailored in format, scale and delivery to your organisation." },
      { q: "Can individual employees get personalised diet plans?", a: "Yes. Beyond group sessions, employees can receive individual clinical assessments, written plans and follow-ups — structured as a company benefit, in-clinic or online." },
    ],
    relatedLinks: [
      { label: "About Go Moringa", href: "/about.php", note: "The clinic and its approach" },
      { label: "Dt. Priyatama Srivastava", href: "/priyatama-srivastava.php", note: "Full practice profile" },
      { label: "Online Dietitian Consultation", href: "/online-dietitian-consultation", note: "How employee plans are delivered" },
      { label: "Contact", href: "/contact.php", note: "Discuss a program for your company" },
    ],
  },
};

export const LANDING_PAGE_LIST: LandingPage[] = Object.values(LANDING_PAGES);

export function getLandingPage(slug: string): LandingPage | undefined {
  return LANDING_PAGES[slug];
}
