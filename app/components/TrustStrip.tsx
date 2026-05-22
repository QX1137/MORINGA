import Image from "next/image";
import { MoringaMark } from "./MoringaMark";
import { REAL } from "@/lib/photo-strategy";
import { PERSON, REVIEWS } from "@/lib/site";

/**
 * TrustStrip — the four credential pillars in one band:
 *   1. Years of clinical practice
 *   2. Clients transformed
 *   3. Verified Practo + Justdial ratings
 *   4. ISO 9001:2015 quality-management certification (real artifact)
 *
 * Rendered as a deep ink-green band directly under the hero — the dark
 * anchor that gives the homepage a real light↔dark rhythm. Credentials
 * read sharper in cream-on-green than in the previous beige-on-beige.
 *
 * The ISO certificate is a small real thumbnail (linkable to a larger
 * view) — concrete proof, not a logo.
 */

type Props = {
  variant?: "default" | "compact";
};

export function TrustStrip({ variant = "default" }: Props) {
  const isCompact = variant === "compact";
  return (
    <section
      className={`bg-ink text-paper ${isCompact ? "py-8" : "py-10 md:py-14"}`}
      aria-label="Clinic credentials"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 md:divide-x divide-paper/15">
          {/* 1. Years */}
          <Pillar
            eyebrow="Established 2005"
            headline={`${PERSON.yearsExperience}+ years`}
            sub="of clinical practice in Gurgaon"
          />
          {/* 2. Clients */}
          <Pillar
            eyebrow={`${PERSON.clientCount} clients`}
            headline="Across India"
            sub="and worldwide via online consultation"
          />
          {/* 3. Verified reviews */}
          <Pillar
            eyebrow={`★ ${REVIEWS.practo.rating} · ${REVIEWS.justdial.rating}`}
            headline={`${REVIEWS.practo.count + REVIEWS.justdial.count}+ reviews`}
            sub={`Verified on Practo & Justdial`}
            href={REVIEWS.practo.url}
          />
          {/* 4. ISO certification with a real thumbnail of the framed cert. */}
          <article className="px-5 py-5 md:py-3 flex flex-col md:flex-row md:items-start gap-3 md:gap-4">
            <a
              href={REAL.isoCertificate}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 block relative w-16 h-20 md:w-20 md:h-24 border border-paper/25 overflow-hidden group"
              aria-label="View ISO 9001:2015 certificate"
            >
              <Image
                src={REAL.isoCertificate}
                alt="ISO 9001:2015 certificate of registration for Go Moringa Nutri Diet"
                fill
                sizes="80px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </a>
            <div className="min-w-0">
              <div className="text-eyebrow text-brass">ISO 9001:2015</div>
              <div className="font-display text-lg md:text-xl font-medium text-paper leading-tight mt-1">
                Certified clinic
              </div>
              <div className="text-[10px] text-paper/65 mt-1.5 font-mono leading-snug break-words">
                Cert · 22ZKAK10019Q
              </div>
            </div>
          </article>
        </div>

        {/* Closing line */}
        <div className="mt-6 pt-5 border-t border-paper/15 flex items-center justify-between flex-wrap gap-3 text-eyebrow text-paper/55">
          <span className="flex items-center gap-2">
            <MoringaMark className="size-4 text-brass" />
            Independently verified credentials — none of these badges are self-issued
          </span>
          <span>Tap any tile for proof</span>
        </div>
      </div>
    </section>
  );
}

function Pillar({
  eyebrow,
  headline,
  sub,
  href,
}: {
  eyebrow: string;
  headline: string;
  sub: string;
  href?: string;
}) {
  const inner = (
    <article className="px-5 py-5">
      <div className="text-eyebrow text-brass">{eyebrow}</div>
      <div className="font-display text-2xl md:text-3xl font-medium text-paper leading-tight mt-1">
        {headline}
      </div>
      <div className="text-sm text-paper/70 mt-1.5 leading-snug">{sub}</div>
    </article>
  );
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block group hover:bg-paper/5 transition">
        {inner}
      </a>
    );
  }
  return inner;
}
