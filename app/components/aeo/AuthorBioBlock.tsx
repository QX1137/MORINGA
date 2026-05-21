/**
 * Editorial AuthorBio — appears at the bottom of every YMYL content page.
 * Reads like a magazine bylined-author block. Critical for E-E-A-T.
 */

import Link from "next/link";
import { MoringaMark } from "../MoringaMark";
import { PersonBadge } from "../PersonBadge";
import { PERSON, REVIEWS, SOCIAL } from "@/lib/site";

type Props = {
  reviewedDate?: string;
  topicNote?: string;
};

export function AuthorBioBlock({ reviewedDate, topicNote }: Props) {
  return (
    <section
      className="my-16 border-t border-b border-[#d8c8a8]/80 py-10 md:py-12"
      aria-label="About the author"
    >
      <div className="text-eyebrow text-clay mb-5 flex items-center gap-3">
        <span className="block h-px w-10 bg-clay" />
        Reviewed and approved by
      </div>
      <div className="flex flex-col md:flex-row gap-7 md:gap-10 items-start">
        {/* Portrait — press-print framed (PersonBadge while real clinic photo is pending) */}
        <div className="shrink-0">
          <div className="size-28 md:size-36 overflow-hidden border border-ink/25">
            <PersonBadge variant="card" alt={PERSON.name} />
          </div>
        </div>

        {/* Bio */}
        <div className="flex-1 min-w-0">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-ink leading-tight">
            {PERSON.name}
          </h2>
          <p className="mt-2 font-display italic text-clay text-lg">
            {PERSON.role} · {PERSON.yearsExperience}+ years
          </p>

          <p className="mt-4 text-base text-warm-700 leading-[1.7] max-w-2xl">
            {PERSON.yearsExperience}+ years of clinical practice in Gurgaon. {PERSON.clientCount} clients across India and worldwide.
            {topicNote && ` ${topicNote}`}
          </p>

          {/* Verification line */}
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[12px] uppercase tracking-[0.15em] font-mono text-warm-700">
            <span>★ Practo {REVIEWS.practo.rating} · {REVIEWS.practo.count}</span>
            <span>★ Justdial {REVIEWS.justdial.rating} · {REVIEWS.justdial.count}</span>
          </div>

          {/* Inline links — editorial */}
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/priyatama-srivastava.php" className="text-ink hover:text-clay transition border-b border-clay/40 hover:border-clay pb-px">
              Full practice profile
            </Link>
            <a href={REVIEWS.practo.url} target="_blank" rel="noopener noreferrer" className="text-ink hover:text-clay transition border-b border-clay/40 hover:border-clay pb-px">
              Practo
            </a>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="text-ink hover:text-clay transition border-b border-clay/40 hover:border-clay pb-px">
              Instagram
            </a>
            <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="text-ink hover:text-clay transition border-b border-clay/40 hover:border-clay pb-px">
              YouTube
            </a>
          </div>

          {reviewedDate && (
            <p className="mt-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] font-mono text-warm-500">
              <MoringaMark className="size-4 text-clay" />
              Clinically reviewed · <time>{reviewedDate}</time>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
