/**
 * Renders JSON-LD structured data inside a native <script> tag.
 *
 * Uses React's escape-hatch for raw HTML because that is the
 * Next.js-official pattern for JSON-LD (node_modules/next/dist/docs/01-app/02-guides/json-ld.md).
 *
 * Inputs are TypeScript constants from lib/schema.ts, never user input.
 * We escape `<`, U+2028, U+2029 so the JSON string cannot break out
 * of the surrounding tag even if a constant changes.
 */

type StructuredData = Record<string, unknown>;

function escapeForScriptTag(data: StructuredData): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

export function JsonLd({ data }: { data: StructuredData | StructuredData[] }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => {
        const html = escapeForScriptTag(item);
        return (
          <script
            key={i}
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      })}
    </>
  );
}
