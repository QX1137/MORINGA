/**
 * Central image-mapping module.
 *
 * Every hero image on the site routes through this module. We deliberately
 * REJECT the old gomoringa.in CDN paths (under /public/assets/*) and use a
 * curated set of free Unsplash photos rotated thematically.
 *
 * When Dt. Priyatama provides real clinic photography, swap the URL fields here
 * in one commit and the entire site picks it up.
 *
 * NOTE on the lone Priyatama portrait: there is intentionally NO photo of her
 * on the site until the client provides one. Every place that referenced
 * /assets/diet-img/priyatma.jpg now renders the <PersonBadge> component
 * (a monogram with the moringa mark + "PS" in serif). This is the honest
 * placeholder — better than a fake stock photo.
 */

import { PHOTOS } from "./images";

// ─────────── Service hero image mapping ───────────
export const SERVICE_HEROES: Record<string, string> = {
  "weight-loss": PHOTOS.freshGreens.url,        // vegetables-led, clean
  "weight-gain": PHOTOS.indianThali.url,        // full meal, abundance
  "figure-correction": PHOTOS.spicesOnSpoons.url, // turmeric glow / wellness
  "therapeutic-diet": PHOTOS.spiceBowls.url,    // medicinal spices, market
  "pregnancy-diet": PHOTOS.moringaLeaves.url,   // botanical, gentle
};

// ─────────── Treatment hero image mapping (thematic rotation) ───────────
export const TREATMENT_HEROES: Record<string, string> = {
  // Metabolic / glucose
  diabetes: PHOTOS.spicesOnSpoons.url,
  "metabolic-syndrome": PHOTOS.spicesOnSpoons.url,
  "abnormal-blood-fats": PHOTOS.spicesOnSpoons.url,

  // Hormonal / women's health
  "pcod-pcos": PHOTOS.indianSpicesWhite.url,
  thyroid: PHOTOS.indianSpicesWhite.url,
  "cushing-syndrome": PHOTOS.indianSpicesWhite.url,

  // Cardiovascular
  "heart-disease": PHOTOS.freshGreens.url,
  "high-blood-pressure": PHOTOS.freshGreens.url,
  "lipid-profile-cholesterol": PHOTOS.freshGreens.url,

  // Joint / bone / structural
  osteoporosis: PHOTOS.washedSpinach.url,
  osteoarthritis: PHOTOS.washedSpinach.url,
  "uric-acid": PHOTOS.greenLeafBranch.url,

  // GI / digestive
  constipation: PHOTOS.washedSpinach.url,
  gallstones: PHOTOS.greenLeafBranch.url,

  // Other / systemic
  "micronutrient-deficiency": PHOTOS.moringaLeaves.url,
  "water-retention": PHOTOS.greenLeafBranch.url,
  depression: PHOTOS.moringaLeaves.url,
  "sleep-apnea-and-respiratory": PHOTOS.greenLeafBranch.url,
  snoring: PHOTOS.greenLeafBranch.url,
  "certain-medicines": PHOTOS.spiceBowls.url,
};

// ─────────── Recipe hero image mapping (by category + name) ───────────
export const RECIPE_HEROES: Record<string, string> = {
  // Snacks
  "soya-granules-cutlet": PHOTOS.indianSpicesWhite.url,
  "kumbh-shaslik": PHOTOS.spiceBowls.url,

  // Salads
  "green-curd-salad": PHOTOS.freshGreens.url,
  "ginger-papaya-salsa": PHOTOS.spicesOnSpoons.url,
  "grilled-fish-salad": PHOTOS.washedSpinach.url,
  "kabuli-channa-salads": PHOTOS.freshGreens.url,

  // Soups
  "celery-soup": PHOTOS.freshGreens.url,
  "vegetable-and-flaxseed-soup": PHOTOS.washedSpinach.url,
  "easy-carrot-ginger-soup": PHOTOS.spicesOnSpoons.url,

  // Desserts
  "orange-mix-fruit": PHOTOS.spicesOnSpoons.url,
  "bread-halva": PHOTOS.indianThali.url,
  "strawberry-yoghurt": PHOTOS.freshGreens.url,

  // Beverages
  "amla-juice-sharbat": PHOTOS.greenLeafBranch.url,
  "bael-squash": PHOTOS.moringaLeaves.url,
  "beetroot-chaas": PHOTOS.spicesOnSpoons.url,
  "green-energizer-juice": PHOTOS.washedSpinach.url,
};

// ─────────── Location hero image mapping ───────────
export const LOCATION_HEROES: Record<string, string> = {
  "dietician-in-gurgaon": PHOTOS.indianThali.url,
  "dietician-in-delhi": PHOTOS.spiceBowls.url,
  "dietician-in-noida": PHOTOS.indianSpicesWhite.url,
  "dietitian-in-faridabad": PHOTOS.freshGreens.url,
};

// ─────────── Default OG / banner image (used everywhere as fallback) ───────────
export const DEFAULT_OG_IMAGE = PHOTOS.indianThali.url;

// ─────────── Resolver helpers (consumed by services / treatments / recipes data) ───────────
export function heroForService(slug: string): string {
  return SERVICE_HEROES[slug] ?? PHOTOS.indianThali.url;
}
export function heroForTreatment(slug: string): string {
  return TREATMENT_HEROES[slug] ?? PHOTOS.spiceBowls.url;
}
export function heroForRecipe(slug: string): string {
  return RECIPE_HEROES[slug] ?? PHOTOS.indianThali.url;
}
export function heroForLocation(slug: string): string {
  return LOCATION_HEROES[slug] ?? PHOTOS.indianThali.url;
}
