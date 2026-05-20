/**
 * Last-updated date stamp — Google E-E-A-T signal that content is current.
 * Render at top of every content page.
 */

type Props = {
  date: string;           // e.g., "May 2026" or ISO date
  reviewer?: string;      // who reviewed
};

export function LastUpdated({ date, reviewer }: Props) {
  return (
    <div className="text-xs text-ink-500 mb-4 flex flex-wrap gap-x-4 gap-y-1">
      <span>
        <span className="font-medium text-ink-700">Last updated:</span> <time>{date}</time>
      </span>
      {reviewer && (
        <span>
          <span className="font-medium text-ink-700">Reviewed by:</span> {reviewer}
        </span>
      )}
    </div>
  );
}
