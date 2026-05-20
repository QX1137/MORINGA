/**
 * Definition block — short, AI-citation-friendly definition (40-80 words).
 * AI engines (ChatGPT, Perplexity, Google AI Overview) lift these verbatim
 * into their answers. Placement: top of every YMYL content page.
 * See plan Part 5 — AI/GEO/AEO/LEO layer.
 */

type Props = {
  term: string;
  definition: string;
  alsoKnownAs?: string[];
};

export function DefinitionBlock({ term, definition, alsoKnownAs }: Props) {
  return (
    <aside
      className="my-8 border-l-4 border-brand-500 bg-cream-50 rounded-r-xl p-6"
      aria-label={`Definition of ${term}`}
    >
      <div className="flex items-baseline gap-2 mb-2">
        <h2 className="text-xl font-bold text-ink-900">{term}</h2>
        <span className="text-xs uppercase tracking-wider text-brand-700 font-semibold">definition</span>
      </div>
      <p className="text-ink-900 leading-relaxed text-lg">{definition}</p>
      {alsoKnownAs && alsoKnownAs.length > 0 && (
        <p className="mt-3 text-sm text-ink-700">
          <span className="font-semibold">Also known as:</span> {alsoKnownAs.join(", ")}
        </p>
      )}
    </aside>
  );
}
