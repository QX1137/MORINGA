import { MoringaMark } from "./MoringaMark";

/**
 * Marquee — a slow editorial ticker ribbon.
 *
 * A terracotta band of the clinic's focus areas, scrolling continuously.
 * Pure-CSS animation (see `.marquee-track` in globals.css) so it works in a
 * server component with no JavaScript; it pauses for prefers-reduced-motion.
 *
 * The track holds the item list twice and translates by -50% — when the
 * second copy reaches the first copy's start position the loop is seamless.
 */

const ITEMS = [
  "Weight Loss",
  "PCOS & PCOD",
  "Diabetes",
  "Thyroid Care",
  "Pregnancy Nutrition",
  "Cholesterol & Heart",
  "Fatty Liver",
  "Therapeutic Diets",
  "Online Consultation",
];

export function Marquee() {
  // Duplicated list — the -50% translate then loops seamlessly.
  const items = [...ITEMS, ...ITEMS];
  return (
    <div className="bg-clay overflow-hidden py-3.5 select-none" aria-hidden="true">
      <div className="marquee-track flex w-max items-center">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-5 pr-5">
            <span className="text-eyebrow text-paper whitespace-nowrap">{item}</span>
            <MoringaMark className="size-3.5 shrink-0 text-paper/55" />
          </span>
        ))}
      </div>
    </div>
  );
}
