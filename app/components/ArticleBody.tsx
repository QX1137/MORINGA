/**
 * Renders pre-extracted HTML article content inside the new site chrome.
 *
 * SAFETY: input is article HTML extracted at build time from our own
 * backup of gomoringa.in — not user input. The extractor (plan/extract-blogs.pl)
 * strips <script>, <style>, <nav>, <footer>, <header> already.
 *
 * This uses React's escape-hatch for raw HTML, isolated here.
 */

import { readFileSync } from "node:fs";
import path from "node:path";

type ArticleBodyProps = { slug: string; folder?: "blog" };

export function ArticleBody({ slug, folder = "blog" }: ArticleBodyProps) {
  const fp = path.join(process.cwd(), "content", folder, `${slug}.html`);
  let html = "";
  try {
    html = readFileSync(fp, "utf-8");
  } catch {
    html = "<p>Article content not found.</p>";
  }

  return (
    <div
      className="prose prose-lg max-w-none [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-ink-900 [&_h1]:mt-8 [&_h1]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-ink-900 [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-ink-900 [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-ink-700 [&_p]:leading-relaxed [&_p]:my-3 [&_a]:text-brand-600 [&_a]:underline [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_li]:text-ink-700 [&_img]:rounded-xl [&_img]:my-6 [&_img]:max-w-full [&_strong]:text-ink-900"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
