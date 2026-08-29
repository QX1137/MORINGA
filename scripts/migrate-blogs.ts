/**
 * One-time migration: content/blog/*.html + index.json  ->  blog_posts table.
 *
 * Run once after the Supabase project + schema exist:
 *   node --env-file=.env.local --import tsx scripts/migrate-blogs.ts
 *
 * Idempotent: upserts on `slug`, so re-running refreshes rows without dupes.
 * Uses the service_role key (bypasses RLS).
 */

import { readFileSync } from "node:fs";
import path from "node:path";
import { createAdminSupabase } from "../lib/supabase/admin";

type IndexEntry = {
  slug: string;
  phpPath: string;
  title: string;
  h1?: string;
  metaDescription?: string;
  ogImage?: string;
  wordCount?: number;
};

const ROOT = process.cwd();
const BLOG_DIR = path.join(ROOT, "content", "blog");

function loadIndex(): IndexEntry[] {
  const raw = readFileSync(path.join(BLOG_DIR, "index.json"), "utf-8");
  return JSON.parse(raw) as IndexEntry[];
}

function loadBody(slug: string): string {
  try {
    return readFileSync(path.join(BLOG_DIR, `${slug}.html`), "utf-8");
  } catch {
    console.warn(`  ! no HTML file for ${slug} — inserting empty body`);
    return "";
  }
}

async function main() {
  const supabase = createAdminSupabase();
  const index = loadIndex();
  console.log(`Migrating ${index.length} blog posts…`);

  const rows = index.map((b, i) => ({
    slug: b.slug,
    title: b.title,
    h1: b.h1 ?? null,
    meta_description: b.metaDescription?.trim() || null,
    canonical_path: b.phpPath,
    og_image: b.ogImage?.trim() || null,
    body_html: loadBody(b.slug),
    word_count: b.wordCount ?? 0,
    status: "published" as const,
    sort_index: i,
    published_at: new Date().toISOString(),
  }));

  // Upsert in one call, keyed on slug.
  const { error, count } = await supabase
    .from("blog_posts")
    .upsert(rows, { onConflict: "slug", count: "exact" });

  if (error) {
    console.error("Migration failed:", error.message);
    process.exit(1);
  }
  console.log(`✓ Upserted ${count ?? rows.length} posts into blog_posts.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
