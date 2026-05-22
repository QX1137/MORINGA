import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SERVICE_LIST } from "@/lib/services";
import { LOCATION_LIST } from "@/lib/locations";
import { TREATMENT_LIST } from "@/lib/treatments";
import { RECIPE_LIST } from "@/lib/recipes";
import { BLOGS } from "@/lib/blogs";
import { LANDING_PAGE_LIST } from "@/lib/landing-pages";

const today = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${SITE.url}${path}`;

  const staticPages = [
    { url: url("/"), priority: 1.0, changeFrequency: "weekly" as const },
    { url: url("/about.php"), priority: 0.8 },
    { url: url("/priyatama-srivastava.php"), priority: 0.8 },
    { url: url("/services.php"), priority: 0.9 },
    { url: url("/treatment.php"), priority: 0.9 },
    { url: url("/package.php"), priority: 0.7 },
    { url: url("/contact.php"), priority: 0.7 },
    { url: url("/payment.php"), priority: 0.4 },
    { url: url("/book-an-appointment.php"), priority: 0.7 },
    { url: url("/blog.php"), priority: 0.7, changeFrequency: "weekly" as const },
    { url: url("/faq"), priority: 0.8, changeFrequency: "monthly" as const },
  ];

  const services = SERVICE_LIST.map((s) => ({
    url: url(s.phpPath),
    priority: 0.9,
    changeFrequency: "monthly" as const,
  }));

  const locations = LOCATION_LIST.map((l) => ({
    url: url(l.phpPath),
    priority: 0.9,
    changeFrequency: "monthly" as const,
  }));

  const treatments = TREATMENT_LIST.map((t) => ({
    url: url(t.phpPath),
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const recipes = RECIPE_LIST.map((r) => ({
    url: url(r.phpPath),
    priority: 0.6,
    changeFrequency: "yearly" as const,
  }));

  const blogs = BLOGS.map((b) => ({
    url: url(b.phpPath),
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  // Keyword landing pages (online consultation, weight-loss & condition
  // diet-plans) — high commercial intent, so a high crawl priority.
  const landingPages = LANDING_PAGE_LIST.map((p) => ({
    url: url(p.path),
    priority: 0.9,
    changeFrequency: "monthly" as const,
  }));

  return [
    ...staticPages,
    ...services,
    ...locations,
    ...landingPages,
    ...treatments,
    ...recipes,
    ...blogs,
  ].map((entry) => ({ lastModified: today, changeFrequency: "monthly" as const, ...entry }));
}
