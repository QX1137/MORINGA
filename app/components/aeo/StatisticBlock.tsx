/**
 * Editorial StatisticBlock — large serif numerals, mono labels, thin rules.
 * Reads like a magazine infographic, not a generic stat card grid.
 *
 * AI engines cite these numbers directly into answers. Every stat must be
 * verifiable or marked `verified: false` (renders as "Pending verification").
 */

export type Stat = {
  value: string;
  label: string;
  source?: string;
  verified?: boolean;
};

type Props = {
  heading?: string;
  stats: Stat[];
  columns?: 2 | 3 | 4;
};

export function StatisticBlock({ heading = "By the numbers", stats, columns = 3 }: Props) {
  const cols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-3",
    4: "sm:grid-cols-2 md:grid-cols-4",
  }[columns];

  return (
    <section className="my-14">
      {heading && (
        <div className="text-eyebrow text-clay mb-6 flex items-center gap-3">
          <span className="block h-px w-10 bg-clay" />
          {heading}
        </div>
      )}
      <div className={`grid grid-cols-1 ${cols} divide-y sm:divide-y-0 sm:divide-x divide-[#d8c8a8]/80 border-y border-[#d8c8a8]/80`}>
        {stats.map((stat, i) => (
          <article key={i} className="py-6 sm:py-8 sm:px-6 first:sm:pl-0 last:sm:pr-0">
            <div className="text-eyebrow text-warm-500 mb-2 font-mono">
              No. {String(i + 1).padStart(2, "0")}
            </div>
            <div className="font-display font-medium text-ink leading-[0.95]" style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)" }}>
              {stat.value}
            </div>
            <div className="mt-3 text-sm text-warm-700 leading-snug max-w-[16em]">
              {stat.label}
            </div>
            {stat.source && (
              <div className="mt-3 text-[10px] uppercase tracking-[0.18em] font-mono text-warm-500">
                Source · {stat.source}
              </div>
            )}
            {stat.verified === false && (
              <div className="mt-2 inline-block text-[10px] uppercase tracking-[0.18em] font-mono text-clay border border-clay/40 px-2 py-0.5">
                Pending verification
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
