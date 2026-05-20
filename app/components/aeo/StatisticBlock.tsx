/**
 * Statistic block — large, scannable numbers AI engines cite directly.
 * Every stat must be sourced or marked [VERIFY] before publishing.
 * See plan Part 5 — "AI engines love these for citation".
 */

export type Stat = {
  value: string;       // e.g., "87%"
  label: string;       // e.g., "of PCOS clients see regulated cycles in 90 days"
  source?: string;     // e.g., "Go Moringa clinic data, 2018-2024"
  verified?: boolean;  // false = renders with subtle [VERIFY] notice for client review
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
    <section className="my-12">
      {heading && (
        <h2 className="text-2xl md:text-3xl font-bold text-ink-900 mb-6 text-center">{heading}</h2>
      )}
      <div className={`grid grid-cols-1 ${cols} gap-4`}>
        {stats.map((stat, i) => (
          <article
            key={i}
            className="bg-white border border-ink-900/10 rounded-2xl p-6 text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-brand-700">{stat.value}</div>
            <div className="mt-2 text-sm text-ink-700 leading-snug">{stat.label}</div>
            {stat.source && (
              <div className="mt-3 text-[10px] uppercase tracking-wider text-ink-500">
                {stat.source}
              </div>
            )}
            {stat.verified === false && (
              <div className="mt-2 inline-block px-2 py-0.5 text-[10px] font-medium text-amber-700 bg-amber-50 border border-amber-200 rounded">
                Pending verification
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
