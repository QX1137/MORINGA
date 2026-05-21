import { getCitations } from "@/lib/citations";

/**
 * References block for YMYL health pages.
 *
 * Lists peer-reviewed sources, official-body guidelines, and recognised Indian
 * clinical references that back the protocol on this page. A core E-E-A-T
 * signal: pages that show their work rank higher and are more likely to be
 * cited by AI engines.
 *
 * Renders nothing if the page has no citations registered.
 */

type Props = {
  slug: string;
  heading?: string;
};

export function Citations({ slug, heading = "References" }: Props) {
  const citations = getCitations(slug);
  if (citations.length === 0) return null;

  return (
    <section className="my-14">
      <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
        <span className="block h-px w-10 bg-clay" />
        Sources
      </div>
      <h2 className="font-display text-2xl md:text-3xl font-medium text-ink leading-tight mb-1">
        {heading}
      </h2>
      <p className="text-sm italic text-warm-500 font-display mb-6 max-w-2xl">
        Selected peer-reviewed papers, clinical guidelines and Indian regulatory sources that inform this protocol.
      </p>
      <ol className="border-t border-[#d8c8a8]/60">
        {citations.map((c, i) => (
          <li
            key={`${c.title}-${i}`}
            className="grid grid-cols-12 gap-x-5 gap-y-1 py-4 border-b border-[#d8c8a8]/40"
          >
            <span className="col-span-2 md:col-span-1 text-eyebrow text-warm-500 font-mono pt-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="col-span-10 md:col-span-11">
              <div className="font-display text-base md:text-lg text-ink leading-snug">
                {c.url ? (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-clay transition underline-offset-4 hover:underline"
                  >
                    {c.title}
                  </a>
                ) : (
                  c.title
                )}
              </div>
              <div className="mt-1 text-eyebrow text-warm-700 font-mono">
                {c.source} · {c.year}
              </div>
              {c.note && (
                <p className="mt-2 text-sm text-warm-700 italic font-display leading-snug max-w-3xl">
                  {c.note}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
