/**
 * Author bio block — appears at the bottom of every content page.
 * Critical for E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
 * which Google uses for YMYL (Your Money Your Life) health content ranking.
 * See plan Part 5 — Author bio block.
 */

import Image from "next/image";
import Link from "next/link";
import { PERSON, REVIEWS, SOCIAL } from "@/lib/site";

type Props = {
  reviewedDate?: string;       // e.g., "May 2026" — when content was last reviewed
  topicNote?: string;          // optional one-liner about Priyatama's specific expertise on this topic
};

export function AuthorBioBlock({ reviewedDate, topicNote }: Props) {
  return (
    <section
      className="my-12 bg-cream-50 border border-ink-900/10 rounded-2xl p-6 md:p-8"
      aria-label="About the author"
    >
      <div className="flex flex-col md:flex-row gap-5 md:gap-7">
        <div className="relative size-24 md:size-32 rounded-2xl overflow-hidden bg-cream-100 shrink-0 mx-auto md:mx-0">
          <Image
            src="/assets/diet-img/priyatma.jpg"
            alt={PERSON.name}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 128px, 96px"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-baseline gap-2 flex-wrap">
            <h2 className="text-xl font-bold text-ink-900">Reviewed by {PERSON.name}</h2>
            <span className="text-xs uppercase tracking-wider text-brand-700 font-semibold">
              {PERSON.role}
            </span>
          </div>
          <p className="mt-2 text-ink-700 leading-relaxed">
            {PERSON.yearsExperience}+ years of clinical practice in Gurgaon. {PERSON.clientCount} clients across India and worldwide.
            {topicNote && ` ${topicNote}`}
          </p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-ink-700">
            <span>★ {REVIEWS.practo.rating} on Practo ({REVIEWS.practo.count} reviews)</span>
            <span>★ {REVIEWS.justdial.rating} on Justdial ({REVIEWS.justdial.count} reviews)</span>
          </div>
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            <Link href="/priyatama-srivastava.php" className="text-brand-700 hover:underline">
              Full bio →
            </Link>
            <a href={REVIEWS.practo.url} target="_blank" rel="noopener noreferrer" className="text-brand-700 hover:underline">Practo profile</a>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="text-brand-700 hover:underline">Instagram</a>
            <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="text-brand-700 hover:underline">YouTube</a>
          </div>
          {reviewedDate && (
            <p className="mt-4 text-xs text-ink-500">
              Last clinically reviewed: <time>{reviewedDate}</time>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
