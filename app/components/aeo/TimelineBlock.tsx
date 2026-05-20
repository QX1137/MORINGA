/**
 * "What to expect" timeline — Week 1 / Week 4 / Week 12 expected results.
 * Required on every treatment page per plan Part 6.
 * Sets realistic expectations + gives the client a roadmap to share.
 */

export type Milestone = {
  period: string;           // e.g., "Week 1-2"
  title: string;            // e.g., "Foundation phase"
  description: string;      // 1-2 sentences of expected change
  measurableOutcomes?: string[];  // e.g., ["Energy increase noticeable", "First 1-2 kg shift"]
};

type Props = {
  heading?: string;
  milestones: Milestone[];
};

export function TimelineBlock({ heading = "What to expect", milestones }: Props) {
  return (
    <section className="my-12">
      <h2 className="text-2xl md:text-3xl font-bold text-ink-900 mb-8 text-center">{heading}</h2>
      <div className="relative">
        {/* Connecting line on desktop */}
        <div className="hidden md:block absolute top-12 left-[5%] right-[5%] h-0.5 bg-brand-200" aria-hidden="true" />
        <div className="grid md:grid-cols-3 gap-6 md:gap-4 relative">
          {milestones.map((m, i) => (
            <article key={i} className="bg-white rounded-2xl border border-ink-900/10 p-6 relative shadow-sm">
              <div className="size-10 rounded-full bg-brand-600 text-white font-bold text-lg flex items-center justify-center mb-4 md:mx-auto">
                {i + 1}
              </div>
              <div className="text-xs uppercase tracking-wider text-brand-700 font-semibold mb-1 md:text-center">{m.period}</div>
              <h3 className="text-lg font-bold text-ink-900 md:text-center mb-2">{m.title}</h3>
              <p className="text-sm text-ink-700 leading-relaxed md:text-center">{m.description}</p>
              {m.measurableOutcomes && m.measurableOutcomes.length > 0 && (
                <ul className="mt-3 space-y-1.5 text-sm text-ink-700">
                  {m.measurableOutcomes.map((o, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-brand-600 shrink-0" aria-hidden="true">✓</span>
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
