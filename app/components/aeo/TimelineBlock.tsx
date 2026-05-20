/**
 * Editorial Timeline — horizontal milestone rhythm with terracotta numerals.
 * Reads like a documented protocol (week 1 / month 1-3 / month 3+), not
 * generic cards.
 */

export type Milestone = {
  period: string;
  title: string;
  description: string;
  measurableOutcomes?: string[];
};

type Props = {
  heading?: string;
  milestones: Milestone[];
};

export function TimelineBlock({ heading = "What to expect", milestones }: Props) {
  return (
    <section className="my-14">
      <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
        <span className="block h-px w-10 bg-clay" />
        Timeline
      </div>
      <h2 className="font-display text-2xl md:text-3xl font-medium text-ink mb-10 leading-tight">
        {heading}
      </h2>
      <div className="grid md:grid-cols-3 gap-y-10 md:gap-x-10 relative">
        {/* Connecting clay line on desktop */}
        <div
          className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px bg-clay/40"
          aria-hidden="true"
        />
        {milestones.map((m, i) => (
          <article key={i} className="relative">
            {/* Numeral marker */}
            <div className="flex items-baseline gap-4 mb-4">
              <span className="font-display text-clay leading-none" style={{ fontSize: "3rem", fontWeight: 500 }}>
                {i + 1}
              </span>
              <span className="text-eyebrow text-warm-500 font-mono">
                {m.period}
              </span>
            </div>
            <h3 className="font-display text-xl md:text-2xl font-medium text-ink leading-tight">
              {m.title}
            </h3>
            <p className="mt-3 text-base text-warm-700 leading-[1.65]">
              {m.description}
            </p>
            {m.measurableOutcomes && m.measurableOutcomes.length > 0 && (
              <ul className="mt-4 space-y-2 text-sm text-warm-700">
                {m.measurableOutcomes.map((o, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="text-clay shrink-0 font-mono">·</span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
