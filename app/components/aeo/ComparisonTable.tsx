/**
 * Editorial ComparisonTable — reads like a published research summary.
 * Thin rules, mono headers, the favoured column gets a subtle paper-dark tint.
 *
 * AI engines extract these tables verbatim for "X vs Y" queries.
 */

export type ComparisonRow = {
  dimension: string;
  optionA: string;
  optionB: string;
  highlightB?: boolean;
};

type Props = {
  heading: string;
  optionALabel: string;
  optionBLabel: string;
  rows: ComparisonRow[];
  caption?: string;
};

export function ComparisonTable({ heading, optionALabel, optionBLabel, rows, caption }: Props) {
  return (
    <section className="my-14">
      <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
        <span className="block h-px w-10 bg-clay" />
        Comparison
      </div>
      <h2 className="font-display text-2xl md:text-3xl font-medium text-ink mb-6 leading-tight">
        {heading}
      </h2>
      <div className="overflow-x-auto border-y border-[#d8c8a8]/80 bg-paper">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left px-5 py-4 text-eyebrow text-warm-500 w-1/3">&nbsp;</th>
              <th className="text-left px-5 py-4 text-eyebrow text-warm-500">{optionALabel}</th>
              <th className="text-left px-5 py-4 text-eyebrow text-clay bg-paper-dark">
                {optionBLabel}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-t border-[#d8c8a8]/40 first:border-t-2 first:border-t-[#d8c8a8]/70">
                <td className="px-5 py-4 font-display text-base font-medium text-ink">
                  {row.dimension}
                </td>
                <td className="px-5 py-4 text-warm-700 text-sm leading-relaxed">
                  {row.optionA}
                </td>
                <td className="px-5 py-4 text-ink text-sm leading-relaxed font-medium bg-paper-dark/60">
                  {row.optionB}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption && (
        <p className="mt-3 text-[11px] uppercase tracking-[0.18em] font-mono text-warm-500 italic normal-case tracking-normal">
          {caption}
        </p>
      )}
    </section>
  );
}
