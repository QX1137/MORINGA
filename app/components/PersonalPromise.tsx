import { MoringaMark } from "./MoringaMark";
import { PERSON, whatsappUrl } from "@/lib/site";

/**
 * PersonalPromise — "Why choose Dt. Priyatama" front-page note.
 *
 * Built directly from Dt. Priyatama's own brief (voice note, 2026-06-24).
 * Every promise below is in her words — these are the differentiators she
 * personally named as the reasons a patient should choose her over a
 * cheaper plan:
 *   • follow-up is DAILY, not weekly (daily food photo + daily weight, plan
 *     adjusted daily)
 *   • you reach HER, never an employee — no middlemen
 *   • she never misses a call
 *   • she tells you what to order when you eat out
 *   • she coaches maintenance daily, so results hold after the plan ends
 *   • a free ~30-minute explanation before you commit a rupee
 *
 * Rendered as a personal note (ruled-paper ground + leaf watermark +
 * signature) so it reads as her voice, not marketing copy.
 */

const PROMISES = [
  {
    lead: "You hear from me every day — not once a week",
    body: "Send me a photo of your meals and your weight daily. I read every one and adjust your plan as we go. Real follow-up is daily, not weekly.",
  },
  {
    lead: "You reach me — never an employee",
    body: "I pick up my own phone. My team never sits between you and me. Every plan, every reply, every call is mine.",
  },
  {
    lead: "I don't miss your call",
    body: "It simply can't happen that your call goes unanswered. Whenever you need me, you get me — not a receptionist.",
  },
  {
    lead: "I tell you what to order when you eat out",
    body: "Travelling, a wedding, a restaurant? Message me and I'll tell you exactly what to choose. Your plan works in real life, not only at home.",
  },
  {
    lead: "Built so you keep the results",
    body: "Losing weight with a professional is the easy part. I coach you daily on how to maintain — so you don't go blank and regain it once the plan ends.",
  },
  {
    lead: "A free half-hour before you commit",
    body: "I'll spend about thirty minutes explaining everything and answering every question — so you begin with a clear mind, no confusion, and not a rupee spent.",
  },
];

export function PersonalPromise() {
  return (
    <section
      className="bg-paper-dark bg-paper-rules py-14 md:py-24 relative overflow-hidden"
      aria-label="Why choose Dt. Priyatama Srivastava"
    >
      {/* Faint stamped leaf — the personal-note signature mark */}
      <MoringaMark className="absolute -top-8 -right-10 md:-top-10 md:-right-14 size-48 md:size-64 text-clay/[0.06] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <header className="grid md:grid-cols-12 gap-6 md:gap-8 items-end mb-10 md:mb-14">
          <div className="md:col-span-8">
            <div className="text-eyebrow text-clay mb-4 flex items-center gap-3">
              <span className="block h-px w-10 bg-clay" />
              Why my patients choose me
            </div>
            <h2
              className="font-display font-medium text-ink leading-[1.05] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              You get <em className="italic-clay">me</em> — personally, every day.
            </h2>
          </div>
          <div className="md:col-span-4 md:text-right">
            <p className="text-warm-700 text-base leading-relaxed">
              Plenty of plans cost less. None of them put the dietitian on the other end of your phone, every day. Here is what you actually get.
            </p>
          </div>
        </header>

        {/* Promise grid — 1px gaps reveal the cream ground as hairline rules */}
        <ol className="grid md:grid-cols-2 gap-px bg-warm-100 border border-warm-100">
          {PROMISES.map((p, i) => (
            <li key={p.lead} className="bg-paper-dark p-6 md:p-8 flex gap-5">
              <span className="font-display text-2xl md:text-3xl font-medium text-clay leading-none shrink-0 w-8">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-xl md:text-2xl font-medium text-ink leading-tight">
                  {p.lead}
                </h3>
                <p className="mt-2 text-sm md:text-base text-warm-700 leading-[1.6]">
                  {p.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* Signature + CTA — closes the note in her voice */}
        <div className="mt-9 md:mt-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="flex items-center gap-4">
            <MoringaMark className="size-9 text-clay shrink-0" />
            <div>
              <div className="font-display italic text-2xl md:text-3xl text-ink leading-none">
                Dt. {PERSON.shortName.replace("Dt. ", "")}
              </div>
              <div className="mt-1.5 text-eyebrow text-warm-500">
                {PERSON.role} · {PERSON.yearsExperience} years in practice
              </div>
            </div>
          </div>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-base font-medium text-ink shrink-0"
          >
            <span className="relative pb-1 border-b-2 border-clay transition-all group-hover:border-b-[3px]">
              Start with the free half-hour
            </span>
            <span className="text-clay" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
