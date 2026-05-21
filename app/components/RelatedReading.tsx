import Link from "next/link";
import { MoringaMark } from "./MoringaMark";
import { relatedReading, type Cluster, type RelatedLink } from "@/lib/related-reading";

/**
 * RelatedReading — surfaces 6 cross-cluster internal links at the bottom of
 * every content page. Drives internal-link density without manual curation.
 *
 * Pass the current page's slug + cluster; the resolver picks links from
 * OTHER clusters (treatments + recipes + blog + services + locations).
 *
 * The cluster badge on each link tells Google + AI engines this site is a
 * cross-referencing hub, not a flat directory of unrelated pages.
 */

const CLUSTER_LABEL: Record<Exclude<Cluster, "home">, string> = {
  treatment: "Condition",
  service: "Programme",
  recipe: "Recipe",
  blog: "Journal",
  location: "Locality",
};

type Props = {
  slug: string;
  cluster: Cluster;
  heading?: string;
  eyebrow?: string;
};

export function RelatedReading({
  slug,
  cluster,
  heading = "Continue reading",
  eyebrow = "From across the clinic",
}: Props) {
  const links = relatedReading({ slug, cluster, limit: 6 });
  if (links.length === 0) return null;

  return (
    <section className="bg-paper-dark border-y border-[#d8c8a8]/60 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8 mb-10">
          <div className="md:col-span-5">
            <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
              <span className="block h-px w-10 bg-clay" />
              {eyebrow}
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-ink leading-tight">
              {heading}
              <em className="italic-clay">.</em>
            </h2>
          </div>
          <div className="md:col-span-7 md:flex md:items-end">
            <p className="text-warm-700 leading-relaxed">
              Each protocol page connects to the recipes, journal essays and conditions that overlap with it. Follow the threads — every line in this practice routes to two or three others.
            </p>
          </div>
        </div>

        <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 border-t border-[#d8c8a8]/60 pt-10">
          {links.map((link, i) => (
            <li key={link.href} className="group">
              <Link href={link.href} className="block">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-eyebrow text-clay font-mono">
                    No. {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-eyebrow text-warm-500">{CLUSTER_LABEL[link.cluster]}</span>
                </div>
                <h3 className="font-display text-xl md:text-2xl font-medium text-ink group-hover:text-clay transition leading-tight">
                  {link.title}
                </h3>
                {link.hint && (
                  <p className="mt-2 text-sm text-warm-700 leading-snug line-clamp-2">{link.hint}</p>
                )}
                <span className="mt-3 inline-flex items-center gap-2 text-eyebrow text-clay opacity-80 group-hover:opacity-100 transition">
                  Read <span aria-hidden="true">→</span>
                </span>
              </Link>
            </li>
          ))}
        </ol>

        <div className="mt-12 pt-6 border-t border-[#d8c8a8]/60 flex items-center justify-between flex-wrap gap-3 text-eyebrow text-warm-500">
          <span className="flex items-center gap-2">
            <MoringaMark className="size-4 text-clay" />
            Cross-referenced manually by Dt. Priyatama&rsquo;s editorial team
          </span>
          <span>Updated · 2026</span>
        </div>
      </div>
    </section>
  );
}
