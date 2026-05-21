/**
 * Editorial article body — renders pre-extracted HTML inside the Direction D
 * reading shell.
 *
 * SAFETY: input is article HTML extracted at build time from our own backup
 * of gomoringa.in — not user input. The extractor (plan/extract-blogs.pl)
 * strips <script>, <style>, <nav>, <footer>, <header> already, so the
 * dangerouslySetInnerHTML escape-hatch is acceptable here and is isolated to
 * this single component. No runtime user input flows through this path.
 *
 * SANITIZATION: the legacy HTML still contains <img> tags pointing at
 * /assets/services/* and /assets/logo/* — paths that were purged in commit
 * 7cc8a63 ("Image purge: remove all old-site imagery"). Those images now
 * 404 in production, leaving broken image holes mid-article. We strip them
 * here so the body reads as continuous text; BlogPage renders one curated
 * contextual photo separately.
 *
 * STYLING: applied via the global `.article-prose` class in app/globals.css —
 * keeps the editorial typography (Fraunces headings, drop-cap, pull-quote
 * blockquotes, hairline rules, mono-numbered ordered lists) in one place that
 * every article inherits, mobile-first.
 */

import { readFileSync } from "node:fs";
import path from "node:path";

type ArticleBodyProps = {
  slug: string;
  folder?: "blog";
  /** When provided, a magazine-style photo break is inserted midway through
      the body — after the first `</h2>` if present, else after the second
      paragraph close. */
  inlinePhotoUrl?: string;
  /** Caption for the inline photo. Required when inlinePhotoUrl is set. */
  inlinePhotoCaption?: string;
};

/** Strip every <img> tag whose src points to a path we know is purged. */
function sanitizeArticleHtml(html: string): string {
  // /assets/services/foo.jpg, /assets/logo/bar.png — purged old-CDN paths.
  let out = html.replace(/<img\b[^>]*?\bsrc=["']\/assets\/[^"']+["'][^>]*\/?>/gi, "");
  // Absolute old-domain paths just in case any survived extraction.
  out = out.replace(
    /<img\b[^>]*?\bsrc=["']https?:\/\/(?:www\.)?gomoringa\.in\/[^"']+["'][^>]*\/?>/gi,
    "",
  );
  // Empty paragraphs left behind when an image was the only child of a <p>.
  out = out.replace(/<p>\s*<\/p>/gi, "");
  return out;
}

/** Insert a magazine-spread photo break after the first </h2>, falling back
    to after the second </p> if the article has no h2 in the first half. */
function injectInlinePhoto(html: string, url: string, caption: string): string {
  const figure = `<figure class="article-inline-figure"><img src="${url}" alt="${caption}" loading="lazy" /><figcaption>${caption}</figcaption></figure>`;
  const h2Index = html.indexOf("</h2>");
  if (h2Index >= 0) {
    return html.slice(0, h2Index + 5) + figure + html.slice(h2Index + 5);
  }
  // Fallback: after the second </p>
  let count = 0;
  let cursor = 0;
  while (count < 2) {
    const next = html.indexOf("</p>", cursor);
    if (next < 0) return html + figure;
    cursor = next + 4;
    count++;
  }
  return html.slice(0, cursor) + figure + html.slice(cursor);
}

export function ArticleBody({
  slug,
  folder = "blog",
  inlinePhotoUrl,
  inlinePhotoCaption,
}: ArticleBodyProps) {
  const fp = path.join(process.cwd(), "content", folder, `${slug}.html`);
  let html = "";
  try {
    html = readFileSync(fp, "utf-8");
  } catch {
    html = "<p>Article content not found.</p>";
  }

  let safeHtml = sanitizeArticleHtml(html);
  if (inlinePhotoUrl && inlinePhotoCaption) {
    safeHtml = injectInlinePhoto(safeHtml, inlinePhotoUrl, inlinePhotoCaption);
  }

  return (
    <div
      id="article-body"
      className="article-prose"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: safeHtml }}
    />
  );
}
