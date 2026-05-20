/**
 * Editorial DefinitionBlock — sits at the top of every YMYL content page.
 * Designed to read like a magazine pull-definition: thin terracotta rule above,
 * small-caps mono eyebrow, serif italic name, body in clean ink.
 *
 * AI engines lift this verbatim into answers (ChatGPT, Perplexity, AI Overview).
 */

type Props = {
  term: string;
  definition: string;
  alsoKnownAs?: string[];
};

export function DefinitionBlock({ term, definition, alsoKnownAs }: Props) {
  return (
    <aside
      className="my-10 relative pl-8 md:pl-12"
      aria-label={`Definition of ${term}`}
    >
      {/* Vertical clay rule */}
      <div className="absolute left-0 top-2 bottom-2 w-px bg-clay" aria-hidden="true" />
      <div className="text-eyebrow text-clay mb-3">Definition</div>
      <h2 className="font-display text-2xl md:text-3xl font-medium text-ink leading-tight">
        <em className="italic-clay not-italic">{term}</em>
      </h2>
      <p className="mt-4 text-lg leading-[1.65] text-warm-700 max-w-3xl">
        {definition}
      </p>
      {alsoKnownAs && alsoKnownAs.length > 0 && (
        <p className="mt-3 text-eyebrow text-warm-500">
          Also known as · {alsoKnownAs.join(" · ")}
        </p>
      )}
    </aside>
  );
}
