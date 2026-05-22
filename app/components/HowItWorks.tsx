import { MoringaMark } from "./MoringaMark";
import { whatsappUrl } from "@/lib/site";

/**
 * HowItWorks — the four-step engagement process, rendered as a deep ink-green
 * band that sits between the Approach and Inside-the-Clinic sections.
 *
 * Two jobs:
 *   1. Look — it is a dark anchor in the middle of the page. The homepage's
 *      mid-section run was six light bands in a row; this breaks that flatness
 *      and gives the page a real light↔dark rhythm.
 *   2. Conversion — the page never actually told a visitor what happens after
 *      they get in touch. Four numbered steps remove that uncertainty right
 *      before the conditions / services deep-dive.
 *
 * Accent convention: `brass` is the accent colour on dark sections (matching
 * the dark TrustStrip), `clay` on light ones. The grid uses a 1px-gap trick —
 * cells are `bg-ink`, the gap reveals the faint `bg-paper/15` parent behind it,
 * producing crisp hairline dividers with no border math.
 */

const STEPS = [
  {
    title: "A free first call",
    body: "Fifteen minutes on WhatsApp. You describe the goal and the history; we say honestly whether a dietary plan is the right tool for it.",
    aside: "Free · 15 min",
  },
  {
    title: "The full assessment",
    body: "Lab reports, medical history, your kitchen, your office hours, every diet already tried. Nothing in the plan is left to a guess.",
    aside: "In clinic or online",
  },
  {
    title: "Your written plan",
    body: "One document, built around roti, dal and sabzi and the lab numbers we can move. Yours alone — never a template, never copy-pasted.",
    aside: "Built for one body",
  },
  {
    title: "Weekly reviews",
    body: "An open WhatsApp line to Priyatama, a weekly check-in, lab work each quarter. The plan is corrected as your body answers back.",
    aside: "Weekly check-ins",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-ink text-paper py-14 md:py-24" aria-label="How a consultation works">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header — same eyebrow + headline + intro grid as the light sections,
            recoloured for the dark band. */}
        <header className="grid md:grid-cols-12 gap-6 md:gap-8 items-end mb-10 md:mb-14">
          <div className="md:col-span-7">
            <div className="text-eyebrow text-brass mb-4 flex items-center gap-3">
              <span className="block h-px w-10 bg-brass" />
              The process
            </div>
            <h2
              className="font-display font-medium leading-[1.05] tracking-[-0.02em] text-paper"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              Four steps, <em className="italic text-brass">start to plan</em>.
            </h2>
          </div>
          <div className="md:col-span-5 md:text-right">
            <p className="text-paper/70 text-base leading-relaxed">
              No forms to fill before you understand the fit. The first conversation costs nothing and commits you to nothing.
            </p>
          </div>
        </header>

        {/* Step grid — 1px gaps reveal the faint parent background as dividers. */}
        <ol className="grid md:grid-cols-4 gap-px bg-paper/15 border border-paper/15">
          {STEPS.map((s, i) => (
            <li key={s.title} className="bg-ink p-6 md:p-7 flex flex-col">
              <div className="flex items-start justify-between">
                <span
                  className="font-display font-medium text-brass leading-none"
                  style={{ fontSize: "clamp(3rem, 5vw, 4.25rem)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <MoringaMark className="size-4 text-paper/30 mt-2 shrink-0" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-medium text-paper mt-5 leading-tight">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-paper/70 leading-[1.65] flex-1">
                {s.body}
              </p>
              <div className="mt-5 pt-4 border-t border-paper/15 text-eyebrow text-paper/45">
                {s.aside}
              </div>
            </li>
          ))}
        </ol>

        {/* Closing line — picks up the editorial text-link style from the hero. */}
        <div className="mt-9 md:mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <p className="font-display italic text-lg md:text-xl text-paper/85 leading-snug max-w-sm">
            Step one costs nothing — and tells you the truth.
          </p>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-base font-medium text-paper shrink-0"
          >
            <span className="relative pb-1 border-b-2 border-brass transition-all group-hover:border-b-[3px]">
              Begin step one on WhatsApp
            </span>
            <span className="text-brass" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
