/**
 * LastUpdated — small mono date stamp at the top of every content page.
 * Google E-E-A-T signal that the page is maintained.
 */

type Props = {
  date: string;
  reviewer?: string;
};

export function LastUpdated({ date, reviewer }: Props) {
  return (
    <div className="text-[11px] uppercase tracking-[0.18em] font-mono text-warm-500 mb-4 flex flex-wrap items-center gap-x-4 gap-y-1">
      <span className="flex items-center gap-2">
        <span className="block w-3 h-px bg-clay" aria-hidden="true" />
        Last reviewed · <time>{date}</time>
      </span>
      {reviewer && (
        <span>by {reviewer}</span>
      )}
    </div>
  );
}
