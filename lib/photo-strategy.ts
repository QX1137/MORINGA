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

// ─────────── Real clinic photography (added 2026-05-21) ───────────
// Authentic photos provided by the client. Hosted locally in /public/photography.
// These take priority over Unsplash placeholders wherever a "real" photo is
// contextually appropriate (portraits, clinic interiors, the ISO certificate).
export const REAL = {
  priyatamaPortrait: "/photography/priyatama-portrait.jpg",
  priyatamaWithLogo: "/photography/priyatama-with-logo.jpg",
  teamAtWork: "/photography/team-at-work.jpg",
  isoCertificate: "/photography/iso-9001-certificate.jpg",
  clinicReception: "/photography/clinic-reception.jpg",
  clinicConsultation: "/photography/clinic-consultation.jpg",
  clinicWaiting: "/photography/clinic-waiting.jpg",
  clinicOffice: "/photography/clinic-office.jpg",
} as const;

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

// ─────────── Blog hero image mapping (per-slug, with topical fallback) ───────────
// Each post's hero is chosen by explicit slug match first, then by topic-keyword
// heuristics against the slug. This replaces the legacy ogImage field which
// pointed to a single shared old-CDN banner that now 404s.
export const BLOG_HEROES: Record<string, string> = {
  "10-sustainable-weight-loss-strategies": PHOTOS.freshGreens.url,
  "1500-calorie-indian-diet-plan-for-weight-loss": PHOTOS.indianThali.url,
  "2025-new-year-resolution-get-healthy-lifestyle": PHOTOS.freshGreens.url,
  "8-winter-healthcare-tips": PHOTOS.spiceBowls.url,
  "best-dietitian-for-pcos-thyroid-diabetes-priyatama-srivastava": REAL.clinicReception,
  "best-pre-wedding-dietitian-gurgaon-priyatama-srivastava": REAL.clinicConsultation,
  "boost-your-gut-health": PHOTOS.spiceBowls.url,
  "bridal-glow-tips-by-dietitian-priyatama": PHOTOS.washedSpinach.url,
  "bridal-skincare-diet-by-go-moringa": PHOTOS.washedSpinach.url,
  "can-diabetics-eat-carrots-and-beetroot-safely": PHOTOS.spicesOnSpoons.url,
  "diet-for-breastfeeding": PHOTOS.moringaLeaves.url,
  "diet-for-cancer": PHOTOS.moringaLeaves.url,
  "diet-for-depression-what-how-much-to-eat-during-anxiety": PHOTOS.moringaLeaves.url,
  "diet-for-thyroid": PHOTOS.indianSpicesWhite.url,
  "drink-milk-everyday": PHOTOS.indianThali.url,
  "effective-weight-loss-strategies-for-a-healthier-way": PHOTOS.freshGreens.url,
  "essential-nutrients-for-bone-and-joint-health": PHOTOS.washedSpinach.url,
  "exploring-nutritional-power-desi-superfoods-pregnant-women": PHOTOS.moringaLeaves.url,
  "food-to-boost-vitamin-naturally": PHOTOS.washedSpinach.url,
  "foods-to-avoid-during-periods": PHOTOS.indianSpicesWhite.url,
  "foods-to-reduce-hair-fall-and-boost-hair-growth": PHOTOS.washedSpinach.url,
  "how-weight-loss-changes-your-life": PHOTOS.freshGreens.url,
  "how-women-overcome-iron-deficiency-foods": PHOTOS.washedSpinach.url,
  "intermittent-fasting-vs-keto-vs-vegan-diets": PHOTOS.indianThali.url,
  "is-carrot-and-beetroot-juice-good-for-diabetes": PHOTOS.spicesOnSpoons.url,
  "morning-protein-chilla-tips-healthy-weight-loss": PHOTOS.indianThali.url,
  "natural-cholesterol-control-with-lemongrass-oil": PHOTOS.greenLeafBranch.url,
  "natural-home-remedies-for-diabetes-high-low-sugar": PHOTOS.spicesOnSpoons.url,
  "new-year-new-beginnings-overcoming-medical-burdens": PHOTOS.freshGreens.url,
  "pcos-pcod-diet-treatment-for-vegetarians": PHOTOS.indianSpicesWhite.url,
  "role-of-nutrition-in-boosting-athletic-performance": PHOTOS.freshGreens.url,
  "spinach-smoothies-for-weight-loss": PHOTOS.washedSpinach.url,
  "super-fruits-for-super-health": PHOTOS.spicesOnSpoons.url,
  "top-10-warning-signs-of-diabetes": PHOTOS.spicesOnSpoons.url,
  "what-to-eat-after-c-section-for-fast-recovery": PHOTOS.moringaLeaves.url,
  "why-healthy-diet-matters-nutrition-tips-dietician-priyatama": REAL.clinicConsultation,
};

// Inline-image rotation for mid-article placements. The article HTML's old
// /assets/services/* and /assets/logo/* paths are sanitized out by ArticleBody
// (those paths were purged in commit 7cc8a63). Instead, BlogPage inserts a
// single contextual photo after the first <h2>, picked from this pool by slug
// hash so the same slug always gets the same pairing.
const INLINE_POOL = [
  PHOTOS.indianThali.url,
  PHOTOS.washedSpinach.url,
  PHOTOS.spiceBowls.url,
  PHOTOS.moringaLeaves.url,
  PHOTOS.greenLeafBranch.url,
] as const;

function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) | 0;
  return Math.abs(h);
}

// ─────────── Default OG / banner image (used everywhere as fallback) ───────────
// A purpose-built 1200×630 branded card (public/og-card.png): real Go Moringa
// logo + "Best Dietitian in Gurgaon" + Dt. Priyatama's name + the verified
// credentials strip, on the khadi-paper brand background. This is what renders
// in WhatsApp/Facebook/LinkedIn link previews. A designed card beats a cropped
// photo here — portrait clinic photos crop badly to 1.91:1 landscape.
export const DEFAULT_OG_IMAGE = "/og-card.png";

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
export function heroForBlog(slug: string): string {
  if (BLOG_HEROES[slug]) return BLOG_HEROES[slug];
  // Topical fallback by keyword matching against the slug
  const s = slug.toLowerCase();
  if (/weight-loss|calorie|chilla|protein|athletic|performance/.test(s)) return PHOTOS.freshGreens.url;
  if (/diabetes|sugar|carrot|beetroot|fruit/.test(s)) return PHOTOS.spicesOnSpoons.url;
  if (/pcos|pcod|thyroid|period|menstrual/.test(s)) return PHOTOS.indianSpicesWhite.url;
  if (/diet-plan|meal|thali|keto|vegan|fasting|milk/.test(s)) return PHOTOS.indianThali.url;
  if (/pregnan|breastfeed|c-section|cancer|depression|anxiety|cholesterol/.test(s)) return PHOTOS.moringaLeaves.url;
  if (/skin|glow|hair|vitamin|iron|bone|joint|nutrient|deficiency/.test(s)) return PHOTOS.washedSpinach.url;
  if (/gut|winter|cold|healthcare|smoothie|juice|drink|spinach/.test(s)) return PHOTOS.spiceBowls.url;
  if (/bridal|wedding|pre-wedding|new-year|resolution|lifestyle/.test(s)) return PHOTOS.freshGreens.url;
  return PHOTOS.indianThali.url;
}
export function inlinePhotoForBlog(slug: string): string {
  return INLINE_POOL[hashSlug(slug) % INLINE_POOL.length];
}
