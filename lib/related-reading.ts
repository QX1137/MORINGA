/**
 * Cross-cluster related-reading resolver.
 *
 * Every page on the site can call `relatedReading({ slug, cluster })` to get
 * 5-7 internal links spanning *other* content clusters (treatments + recipes +
 * blog + services + locations). Drives internal-link density, AEO citation
 * potential, and lets Google + AI engines recognise the site as a hub.
 *
 * Approach: algorithmic with manual override slots. The algorithm pulls from
 * existing `related` / `relatedConditions` fields on every data file. Manual
 * overrides in OVERRIDES[slug] take precedence when present.
 */

import { TREATMENT_LIST, getTreatment } from "./treatments";
import { RECIPE_LIST, getRecipe } from "./recipes";
import { SERVICE_LIST, getService } from "./services";
import { LOCATION_LIST } from "./locations";
import { BLOGS } from "./blogs";

export type Cluster = "treatment" | "service" | "recipe" | "blog" | "location" | "home";

export type RelatedLink = {
  cluster: Exclude<Cluster, "home">;
  title: string;
  href: string;
  hint?: string; // 1-line excerpt
};

// ───────────────────────────────────────────────── helpers
function toRecipeLink(r: { slug: string; phpPath: string; name: string; description: string }): RelatedLink {
  return {
    cluster: "recipe",
    title: r.name,
    href: r.phpPath,
    hint: r.description.length > 110 ? r.description.slice(0, 107) + "…" : r.description,
  };
}
function toTreatmentLink(t: { slug: string; phpPath: string; title: string; introLead: string }): RelatedLink {
  return {
    cluster: "treatment",
    title: t.title,
    href: t.phpPath,
    hint: t.introLead.length > 110 ? t.introLead.slice(0, 107) + "…" : t.introLead,
  };
}
function toServiceLink(s: { slug: string; phpPath: string; title: string; heroSubhead: string }): RelatedLink {
  return {
    cluster: "service",
    title: s.title,
    href: s.phpPath,
    hint: s.heroSubhead.length > 110 ? s.heroSubhead.slice(0, 107) + "…" : s.heroSubhead,
  };
}
function toBlogLink(b: { slug: string; phpPath: string; title: string; h1: string; metaDescription: string }): RelatedLink {
  const t = (b.h1 || b.title).replace(/\s*\|\s*Go Moringa\s*$/i, "");
  return {
    cluster: "blog",
    title: t,
    href: b.phpPath,
    hint: b.metaDescription
      ? (b.metaDescription.length > 110 ? b.metaDescription.slice(0, 107) + "…" : b.metaDescription)
      : `Notes from the clinic on ${t.toLowerCase()}.`,
  };
}
function toLocationLink(l: { slug: string; phpPath: string; title: string; city: string }): RelatedLink {
  return {
    cluster: "location",
    title: l.title,
    href: l.phpPath,
    hint: `Online consultation + Sector 49 clinic for ${l.city} residents.`,
  };
}

// ───────────────────────────────────────────────── keyword-based blog matcher
// For a topic phrase (treatment slug, service slug, recipe name), find blog
// posts whose slug or title contains related keywords. Deduplicates against a
// "seen" set so we never recommend the same blog twice on a page.
function matchBlogs(keywords: string[], seen: Set<string>, limit = 2): RelatedLink[] {
  const results: RelatedLink[] = [];
  const lc = keywords.map((k) => k.toLowerCase());
  for (const b of BLOGS) {
    if (results.length >= limit) break;
    if (seen.has(b.slug)) continue;
    const haystack = (b.slug + " " + (b.title || "") + " " + (b.h1 || "")).toLowerCase();
    if (lc.some((kw) => haystack.includes(kw))) {
      results.push(toBlogLink(b));
      seen.add(b.slug);
    }
  }
  return results;
}

// ───────────────────────────────────────────────── topic keyword sets
// Mapping condition / service / recipe → blog keywords that signal relevance.
const TOPIC_KEYWORDS: Record<string, string[]> = {
  diabetes: ["diabet", "sugar", "carrot-beet", "carrots-and-beetroot", "hbA1c"],
  "pcod-pcos": ["pcos", "pcod", "thyroid"],
  thyroid: ["thyroid", "pcos"],
  "high-blood-pressure": ["pressure", "lemongrass", "cholesterol"],
  "heart-disease": ["cholesterol", "weight-loss-changes", "lemongrass"],
  "lipid-profile-cholesterol": ["cholesterol", "lemongrass", "heart"],
  "uric-acid": ["weight-loss", "kidney"],
  osteoporosis: ["bone", "joint", "calcium", "milk", "iron-deficiency"],
  osteoarthritis: ["bone", "joint", "weight-loss"],
  depression: ["depression", "anxiety", "gut-health", "mental"],
  constipation: ["gut-health", "fibre", "fiber"],
  "metabolic-syndrome": ["weight-loss", "diabet", "cholesterol"],
  "abnormal-blood-fats": ["cholesterol", "lemongrass", "heart"],
  gallstones: ["weight-loss", "cancer"],
  "cushing-syndrome": ["weight-loss"],
  "micronutrient-deficiency": ["vitamin", "iron-deficiency", "milk"],
  "water-retention": ["weight-loss"],
  "sleep-apnea-and-respiratory": ["weight-loss"],
  snoring: ["weight-loss"],
  "certain-medicines": ["weight-loss"],
  "weight-loss": ["weight-loss", "spinach", "1500-calorie", "morning-protein"],
  "weight-gain": ["weight-loss", "morning-protein", "vitamin"],
  "figure-correction": ["bridal", "pre-wedding", "weight-loss"],
  "therapeutic-diet": ["diabet", "thyroid", "cholesterol", "cancer", "breastfeeding"],
  "pregnancy-diet": ["pregnant", "pregnancy", "c-section", "breastfeeding", "desi-superfood"],
};

// ───────────────────────────────────────────────── main resolver
export function relatedReading(args: { slug: string; cluster: Cluster; limit?: number }): RelatedLink[] {
  const { slug, cluster, limit = 6 } = args;
  const results: RelatedLink[] = [];
  const seen = new Set<string>();
  seen.add(slug);

  // ─── TREATMENT context ───
  if (cluster === "treatment") {
    const t = getTreatment(slug);
    if (!t) return defaultRelated(limit);

    // 2 recipes that explicitly list this condition in their relatedConditions
    const recipes = RECIPE_LIST.filter((r) => r.relatedConditions.includes(slug)).slice(0, 2);
    results.push(...recipes.map(toRecipeLink));

    // 2 blogs by keyword match
    results.push(...matchBlogs(TOPIC_KEYWORDS[slug] || [slug], seen, 2));

    // 1 related treatment (from explicit related[])
    const sibling = t.related.map(getTreatment).find((rt) => rt && !results.some((x) => x.href === rt.phpPath));
    if (sibling) results.push(toTreatmentLink(sibling));

    // 1 anchor service — therapeutic-diet for clinical conditions, weight-loss otherwise
    const svc = getService("therapeutic-diet");
    if (svc) results.push(toServiceLink(svc));

    return results.slice(0, limit);
  }

  // ─── SERVICE context ───
  if (cluster === "service") {
    const s = getService(slug);
    if (!s) return defaultRelated(limit);

    // 2 treatments commonly paired with this service
    const treatmentPairs: Record<string, string[]> = {
      "weight-loss": ["diabetes", "pcod-pcos"],
      "weight-gain": ["micronutrient-deficiency", "thyroid"],
      "figure-correction": ["pcod-pcos", "thyroid"],
      "therapeutic-diet": ["diabetes", "high-blood-pressure"],
      "pregnancy-diet": ["thyroid", "micronutrient-deficiency"],
    };
    for (const tslug of treatmentPairs[slug] || []) {
      const t = getTreatment(tslug);
      if (t) results.push(toTreatmentLink(t));
    }

    // 2 blogs
    results.push(...matchBlogs(TOPIC_KEYWORDS[slug] || [slug], seen, 2));

    // 1 recipe
    const recipe = RECIPE_LIST[Math.floor(Math.random() * RECIPE_LIST.length)] ?? RECIPE_LIST[0];
    if (recipe) results.push(toRecipeLink(recipe));

    // 1 related service
    const sibling = s.relatedServices.map(getService).find((rs) => rs);
    if (sibling) results.push(toServiceLink(sibling));

    return results.slice(0, limit);
  }

  // ─── RECIPE context ───
  if (cluster === "recipe") {
    const r = getRecipe(slug);
    if (!r) return defaultRelated(limit);

    // 2-3 related-condition treatments
    for (const tslug of r.relatedConditions) {
      const t = getTreatment(tslug);
      if (t) results.push(toTreatmentLink(t));
      if (results.length >= 3) break;
    }

    // 2 other recipes from same category
    const sameCategory = RECIPE_LIST.filter((other) => other.slug !== slug && other.category === r.category).slice(0, 2);
    results.push(...sameCategory.map(toRecipeLink));

    // 1 service — pregnancy/therapeutic/weight-loss based on related conditions
    const serviceSlug = r.relatedConditions.some((c) => c.includes("pcos") || c.includes("diabetes"))
      ? "therapeutic-diet"
      : r.category === "soup"
        ? "weight-loss"
        : "therapeutic-diet";
    const svc = getService(serviceSlug);
    if (svc) results.push(toServiceLink(svc));

    return results.slice(0, limit);
  }

  // ─── BLOG context ───
  if (cluster === "blog") {
    const blog = BLOGS.find((b) => b.slug === slug);
    const haystack = blog ? (blog.slug + " " + blog.title).toLowerCase() : "";

    // 2 treatments by keyword in the blog title/slug
    const treatmentKeywordHits = TREATMENT_LIST.filter((t) => {
      if (results.some((r) => r.href === t.phpPath)) return false;
      return haystack.includes(t.slug) || haystack.includes(t.title.toLowerCase().split(" ")[0]);
    }).slice(0, 2);
    results.push(...treatmentKeywordHits.map(toTreatmentLink));

    // 2 other blogs by keyword
    if (blog) {
      seen.add(blog.slug);
      const tokens = haystack.split(/[\s_-]+/).filter((t) => t.length > 4).slice(0, 3);
      results.push(...matchBlogs(tokens, seen, 2));
    }

    // 1 recipe
    const recipeCount = RECIPE_LIST.length;
    const recipe = RECIPE_LIST[Math.abs(slug.charCodeAt(0)) % recipeCount];
    if (recipe) results.push(toRecipeLink(recipe));

    // 1 service
    results.push(toServiceLink(SERVICE_LIST[0]));

    return results.slice(0, limit);
  }

  // ─── LOCATION context ───
  if (cluster === "location") {
    // Cross-link to all 3 sibling location pages + 2 treatments + 1 service
    const siblings = LOCATION_LIST.filter((l) => l.slug !== slug).slice(0, 3);
    results.push(...siblings.map(toLocationLink));
    results.push(toTreatmentLink(getTreatment("diabetes")!));
    results.push(toTreatmentLink(getTreatment("pcod-pcos")!));
    results.push(toServiceLink(getService("weight-loss")!));
    return results.slice(0, limit);
  }

  return defaultRelated(limit);
}

// ───────────────────────────────────────────────── default fallback
function defaultRelated(limit: number): RelatedLink[] {
  const out: RelatedLink[] = [
    toTreatmentLink(getTreatment("diabetes")!),
    toTreatmentLink(getTreatment("pcod-pcos")!),
    toTreatmentLink(getTreatment("thyroid")!),
    toServiceLink(getService("weight-loss")!),
    toServiceLink(getService("therapeutic-diet")!),
    toBlogLink(BLOGS[0]),
  ];
  return out.slice(0, limit);
}
