/**
 * One-time migration: lib/site.ts constants -> site_settings + core page shells.
 *
 *   node --env-file=.env.local --import tsx scripts/migrate-settings.ts
 *
 * Idempotent. Seeds the site-wide settings row and the SEO title/description of
 * the four editable core pages. Page body content is authored later in /admin.
 */

import { createAdminSupabase } from "../lib/supabase/admin";
import {
  SITE,
  PERSON,
  CONTACT,
  REVIEWS,
  SOCIAL,
  ANALYTICS,
} from "../lib/site";

async function main() {
  const supabase = createAdminSupabase();

  // ---- site-wide settings ----
  const settings = {
    site: { name: SITE.name, tagline: SITE.tagline, url: SITE.url, defaultDescription: SITE.defaultDescription },
    person: { ...PERSON },
    contact: { ...CONTACT },
    reviews: { ...REVIEWS },
    social: { ...SOCIAL },
    analytics: { ga4Id: ANALYTICS.ga4Id, googleSiteVerification: ANALYTICS.googleSiteVerification },
  };

  const { error: sErr } = await supabase
    .from("site_settings")
    .upsert({ id: 1, data: settings }, { onConflict: "id" });
  if (sErr) throw new Error(`site_settings: ${sErr.message}`);
  console.log("✓ site_settings seeded");

  // ---- core page SEO shells ----
  const pages = [
    {
      key: "home",
      title: "Best Dietician In Gurgaon, India | Nutritionist, Weight Loss Expert",
      meta_description: SITE.defaultDescription,
    },
    {
      key: "about",
      title: `About ${PERSON.name} | ${SITE.name}`,
      meta_description: `${PERSON.name}, ${PERSON.role} with ${PERSON.yearsExperience} years of experience and ${PERSON.clientCount} clients. Learn about Go Moringa Diet Clinic in Gurgaon.`,
    },
    {
      key: "contact",
      title: `Contact ${SITE.name} | Book a Diet Consultation in Gurgaon`,
      meta_description: `Book a consultation with ${PERSON.name}. Call ${CONTACT.phone} or visit ${CONTACT.address.locality}, ${CONTACT.address.city}.`,
    },
    {
      key: "services",
      title: `Diet & Nutrition Services | ${SITE.name}`,
      meta_description: `Weight loss, PCOS, diabetes, thyroid, pregnancy and therapeutic diet services by ${PERSON.name} at Go Moringa, Gurgaon.`,
    },
  ];

  for (const p of pages) {
    const { error } = await supabase
      .from("pages")
      .upsert({ ...p }, { onConflict: "key" });
    if (error) throw new Error(`pages(${p.key}): ${error.message}`);
  }
  console.log(`✓ ${pages.length} core page shells seeded`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
