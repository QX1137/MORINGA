#!/usr/bin/env node
/**
 * audit-schema.mjs — JSON-LD + page-shape audit for every URL in our sitemap.
 *
 * Usage:
 *   BASE_URL=https://moringa-qx137s-projects.vercel.app node scripts/audit-schema.mjs
 *   BASE_URL=https://www.gomoringa.in node scripts/audit-schema.mjs    # post-cutover
 *   node scripts/audit-schema.mjs                                      # defaults to local :3000
 *
 * Reports a markdown file at ../inventory/audit-report.md. CI-friendly (exit 1 on failure).
 */

import { readFileSync, writeFileSync } from "node:fs";
import { performance } from "node:perf_hooks";

const BASE = (process.env.BASE_URL || "http://localhost:3000").replace(/\/$/, "");
const URLS_PATH = new URL("../../inventory/urls.txt", import.meta.url);

function loadUrls() {
  try {
    return readFileSync(URLS_PATH, "utf-8")
      .split(/\r?\n/)
      .map((u) => u.trim())
      .filter(Boolean)
      .map((u) => u.replace(/^https?:\/\/(?:www\.)?gomoringa\.in/, ""));
  } catch (e) {
    console.error("Could not read urls.txt:", e.message);
    return [
      "/", "/about.php", "/services.php", "/treatment.php", "/weight-loss.php",
      "/treatment/diabetes.php", "/recipes-book/grilled-fish-salad.php",
      "/blog.php", "/contact.php", "/package.php", "/diet-type-report",
    ];
  }
}

async function fetchPage(path) {
  const url = BASE + path;
  const t0 = performance.now();
  let status = 0, html = "", error = null;
  try {
    const res = await fetch(url, { redirect: "follow" });
    status = res.status;
    html = await res.text();
  } catch (e) {
    error = e.message;
  }
  const elapsedMs = Math.round(performance.now() - t0);
  return { url, path, status, html, error, elapsedMs, bytes: html.length };
}

function extractJsonLd(html) {
  const blocks = [];
  const re = /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html)) !== null) blocks.push(m[1].trim());
  return blocks;
}

function parseBlock(raw) {
  try {
    return { ok: true, data: JSON.parse(raw) };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}

function collectTypes(data, sink = new Set()) {
  if (!data || typeof data !== "object") return sink;
  if (Array.isArray(data)) { data.forEach((d) => collectTypes(d, sink)); return sink; }
  if (data["@type"]) {
    const t = data["@type"];
    if (Array.isArray(t)) t.forEach((x) => sink.add(String(x))); else sink.add(String(t));
  }
  for (const v of Object.values(data)) {
    if (v && typeof v === "object") collectTypes(v, sink);
  }
  return sink;
}

function checkHead(html) {
  return {
    hasCanonical: /<link[^>]+rel=["']canonical["']/.test(html),
    hasOgTitle: /<meta[^>]+property=["']og:title["']/.test(html),
    hasOgImage: /<meta[^>]+property=["']og:image["']/.test(html),
    hasTitle: /<title>[^<]+<\/title>/.test(html),
    hasMetaDescription: /<meta[^>]+name=["']description["'][^>]+content=["'][^"']+["']/.test(html),
    hasGa4: /G-ZCGZ47YZ53/.test(html),
    hasGscToken: /dpa0YfZa6HX9RUj1HsYd7DUmEKdrnj58Sq6_gvckE9g/.test(html),
  };
}

async function run() {
  const paths = loadUrls();
  console.log("Auditing " + paths.length + " URLs at " + BASE);
  const results = [];
  let pass = 0, fail = 0;

  for (const path of paths) {
    const r = await fetchPage(path);
    if (r.error || r.status >= 400) {
      fail++;
      results.push({ ...r, blocks: 0, badJson: 0, schemaTypes: [], head: null });
      console.log("  X " + (r.status || "ERR") + " " + r.elapsedMs + "ms " + r.path + " " + (r.error || ""));
      continue;
    }
    const blocks = extractJsonLd(r.html);
    const parsed = blocks.map(parseBlock);
    const badJson = parsed.filter((p) => !p.ok).length;
    const types = new Set();
    parsed.filter((p) => p.ok).forEach((p) => collectTypes(p.data, types));
    const head = checkHead(r.html);
    const headOk =
      head.hasCanonical && head.hasOgTitle && head.hasOgImage && head.hasTitle &&
      head.hasMetaDescription && head.hasGa4 && head.hasGscToken;

    if (badJson === 0 && headOk) {
      pass++;
      console.log("  OK 200 " + r.elapsedMs + "ms " + Math.round(r.bytes/1024) + "kb " + blocks.length + " JSON-LD " + r.path);
    } else {
      fail++;
      const reasons = [
        badJson > 0 && (badJson + " malformed JSON-LD"),
        !head.hasCanonical && "missing canonical",
        !head.hasOgTitle && "missing og:title",
        !head.hasOgImage && "missing og:image",
        !head.hasMetaDescription && "missing meta description",
        !head.hasGa4 && "missing GA4",
        !head.hasGscToken && "missing GSC verification token",
      ].filter(Boolean).join(", ");
      console.log("  X 200 " + r.elapsedMs + "ms " + r.path + " -> " + reasons);
    }
    results.push({ ...r, html: undefined, blocks: blocks.length, badJson, schemaTypes: [...types], head });
  }

  const totalBlocks = results.reduce((s, r) => s + (r.blocks || 0), 0);
  const totalBytes = results.reduce((s, r) => s + (r.bytes || 0), 0);
  const avgTime = Math.round(results.reduce((s, r) => s + r.elapsedMs, 0) / results.length);
  const allTypes = new Set();
  results.forEach((r) => (r.schemaTypes || []).forEach((t) => allTypes.add(t)));

  const lines = [];
  lines.push("# Schema + Head Audit Report");
  lines.push("");
  lines.push("Generated: " + new Date().toISOString());
  lines.push("Base URL: " + BASE);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push("| Metric | Value |");
  lines.push("| --- | --- |");
  lines.push("| URLs audited | " + paths.length + " |");
  lines.push("| Passing | " + pass + " |");
  lines.push("| Failing | " + fail + " |");
  lines.push("| Total JSON-LD blocks | " + totalBlocks + " |");
  lines.push("| Average response time | " + avgTime + " ms |");
  lines.push("| Total bytes transferred | " + (totalBytes / 1024 / 1024).toFixed(2) + " MB |");
  lines.push("");
  lines.push("## Schema types found across the site");
  lines.push("");
  [...allTypes].sort().forEach((t) => lines.push("- `" + t + "`"));
  lines.push("");

  if (fail > 0) {
    lines.push("## Failures");
    lines.push("");
    results
      .filter((r) => r.error || r.status >= 400 || r.badJson > 0 || (r.head && (!r.head.hasCanonical || !r.head.hasOgTitle || !r.head.hasOgImage)))
      .forEach((r) => {
        lines.push("### " + r.path);
        lines.push("");
        if (r.status >= 400 || r.error) lines.push("- HTTP status: **" + r.status + "** " + (r.error || ""));
        if (r.badJson > 0) lines.push("- " + r.badJson + " malformed JSON-LD block(s)");
        if (r.head && !r.head.hasCanonical) lines.push("- Missing canonical");
        if (r.head && !r.head.hasOgTitle) lines.push("- Missing og:title");
        if (r.head && !r.head.hasOgImage) lines.push("- Missing og:image");
        if (r.head && !r.head.hasMetaDescription) lines.push("- Missing meta description");
        if (r.head && !r.head.hasGa4) lines.push("- Missing GA4 tag");
        if (r.head && !r.head.hasGscToken) lines.push("- Missing Search Console verification");
        lines.push("");
      });
  }

  lines.push("## Lighthouse / PageSpeed Insights -- manual run links");
  lines.push("");
  const targets = [
    "/", "/weight-loss.php", "/treatment/diabetes.php", "/treatment/pcod-pcos.php",
    "/treatment/thyroid.php", "/dietician-in-gurgaon.php",
    "/recipes-book/grilled-fish-salad.php", "/blog.php", "/package.php", "/diet-type-report",
  ];
  targets.forEach((p) => {
    const target = BASE + p;
    lines.push("- [PSI: " + p + "](https://pagespeed.web.dev/analysis?url=" + encodeURIComponent(target) + ")");
  });
  lines.push("");
  lines.push("## Rich Results Test -- manual run links");
  lines.push("");
  targets.forEach((p) => {
    const target = BASE + p;
    lines.push("- [Rich Results: " + p + "](https://search.google.com/test/rich-results?url=" + encodeURIComponent(target) + ")");
  });
  lines.push("");

  writeFileSync(new URL("../../inventory/audit-report.md", import.meta.url), lines.join("\n"));

  console.log("");
  console.log("========== SUMMARY ==========");
  console.log("URLs audited: " + paths.length);
  console.log("Passing:      " + pass);
  console.log("Failing:      " + fail);
  console.log("JSON-LD blocks: " + totalBlocks);
  console.log("Avg latency: " + avgTime + " ms");
  console.log("Schema types: " + [...allTypes].sort().join(", "));
  console.log("Report:      inventory/audit-report.md");
  console.log("=============================");

  if (fail > 0) process.exit(1);
}

run().catch((e) => { console.error(e); process.exit(2); });
