/**
 * Comparison table — AI engines extract these directly into answer snippets.
 * Format: two-column comparison with clear "vs" framing.
 * See plan Part 5 — "AI engines extract these directly".
 */

export type ComparisonRow = {
  dimension: string;          // e.g., "Sustainability"
  optionA: string;            // e.g., "Low" (the bad option)
  optionB: string;            // e.g., "High" (the good option)
  highlightB?: boolean;       // optional: highlight the right-column answer
};

type Props = {
  heading: string;
  optionALabel: string;       // e.g., "Crash diet"
  optionBLabel: string;       // e.g., "Personalised diet plan"
  rows: ComparisonRow[];
  caption?: string;
};

export function ComparisonTable({ heading, optionALabel, optionBLabel, rows, caption }: Props) {
  return (
    <section className="my-12">
      <h2 className="text-2xl md:text-3xl font-bold text-ink-900 mb-6 text-center">{heading}</h2>
      <div className="overflow-x-auto rounded-2xl border border-ink-900/10 bg-white">
        <table className="w-full">
          <thead>
            <tr className="bg-cream-100">
              <th className="text-left px-5 py-4 text-sm font-semibold text-ink-700 w-1/3">&nbsp;</th>
              <th className="text-left px-5 py-4 text-sm font-semibold text-ink-700">{optionALabel}</th>
              <th className="text-left px-5 py-4 text-sm font-semibold text-brand-700 bg-brand-50">{optionBLabel}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-cream-50/50"}>
                <td className="px-5 py-3 font-medium text-ink-900">{row.dimension}</td>
                <td className="px-5 py-3 text-ink-700">{row.optionA}</td>
                <td className="px-5 py-3 font-semibold text-ink-900 bg-brand-50/30">
                  {row.optionB}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption && <p className="mt-3 text-xs text-ink-500 text-center italic">{caption}</p>}
    </section>
  );
}
