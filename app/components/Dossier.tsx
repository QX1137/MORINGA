import { MoringaMark } from "./MoringaMark";
import { PERSON, REVIEWS } from "@/lib/site";

/**
 * Dossier — Dt. Priyatama's professional background as an editorial credentials
 * card-grid. Sits after the About section as the "documented professional
 * record" before the Testimonials section.
 *
 * Two jobs:
 *   1. E-E-A-T — search engines and LLMs want explicit, structured credentials
 *      for medical/health authors. This makes them explicit on-page instead
 *      of buried inside paragraphs.
 *   2. Trust — visitors hesitating on price / "is this real?" see a paper
 *      trail (ISO cert, hospital affiliations, verified ratings) at one
 *      glance, with a clear visual difference between real-and-cited fields
 *      and those still pending client confirmation.
 *
 * ── PLACEHOLDER POLICY ────────────────────────────────────────────────
 * Several fields are PLACEHOLDERS pending confirmation from the client.
 * Search this file for "TODO-CRED" to find every line that needs the
 * real data filled in. Placeholders render italic + warm-500 with a
 * polite asterisk and a footnote — so a casual visitor reads the
 * section as "publishing soon" rather than broken. When real data
 * arrives, swap the strings AND remove `placeholder: true`.
 */

type Field = {
  eyebrow: string;
  primary: string;
  secondary?: string;
  /** TRUE only for fields whose content is not yet client-confirmed. */
  placeholder?: boolean;
};

const FIELDS: Field[] = [
  // TODO-CRED: Replace with her actual degree(s), institution, year(s).
  {
    eyebrow: "Education",
    primary: "Post-graduate · Foods & Nutrition",
    secondary: "Institution + year to be confirmed",
    placeholder: true,
  },
  // TODO-CRED: Confirm IDA membership number / RD registration body.
  {
    eyebrow: "Registrations",
    primary: "Indian Dietetic Association",
    secondary: "Membership number to be confirmed",
    placeholder: true,
  },
  // Real — verified from existing site copy.
  {
    eyebrow: "Clinical experience",
    primary: `${PERSON.yearsExperience} years · in practice since 2005`,
    secondary: `${PERSON.clientCount} clients · 22,000+ written plans`,
  },
  // Real — matches the treatment slugs on the site.
  {
    eyebrow: "Areas of practice",
    primary: "Weight · PCOS · Diabetes · Thyroid",
    secondary: "Pregnancy · Heart · Fatty liver · Therapeutic",
  },
  // Real — affiliations are documented on the About + Priyatama pages.
  {
    eyebrow: "Hospital coordination",
    primary: "Apollo · Max · BLK · Fortis · Medanta",
    secondary: "Multi-specialty referrals across Delhi NCR",
  },
  // Real — verifiable third-party credentials.
  {
    eyebrow: "Verifiable credentials",
    primary: "ISO 9001:2015 certified",
    secondary: `Practo ${REVIEWS.practo.rating}★ · Justdial ${REVIEWS.justdial.rating}★`,
  },
];

const HAS_PLACEHOLDERS = FIELDS.some((f) => f.placeholder);

export function Dossier() {
  return (
    <section
      className="bg-paper bg-paper-rules py-14 md:py-24 relative overflow-hidden"
      aria-label="Dietitian credentials and professional background"
    >
      {/* Faint moringa-leaf watermark in the corner — a "stamped" feel,
          the way a real clinical dossier carries a small letterhead mark. */}
      <MoringaMark
        className="absolute -top-6 -right-8 md:-top-10 md:-right-12 size-40 md:size-56 text-clay/[0.06] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header — same eyebrow + headline + intro pattern as other sections. */}
        <header className="grid md:grid-cols-12 gap-6 md:gap-8 items-end mb-10 md:mb-14">
          <div className="md:col-span-7">
            <div className="text-eyebrow text-clay mb-4 flex items-center gap-3">
              <span className="block h-px w-10 bg-clay" />
              The dossier
            </div>
            <h2
              className="font-display font-medium text-ink leading-[1.05] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              Credentials, <em className="italic-clay">on the record</em>.
            </h2>
          </div>
          <div className="md:col-span-5 md:text-right">
            <p className="text-warm-700 text-base leading-relaxed">
              The paper trail behind the practice — the qualifications, the registrations, the affiliations, the things a visitor can verify for themselves.
            </p>
          </div>
        </header>

        {/* Field grid — gap-px on a warm-100 parent reveals as hairline rules. */}
        <ol className="grid md:grid-cols-3 gap-px bg-warm-100 border border-warm-100">
          {FIELDS.map((f, i) => (
            <li key={f.eyebrow} className="bg-paper p-6 md:p-7 flex flex-col">
              <div className="flex items-baseline justify-between">
                <span className="text-eyebrow text-clay">{f.eyebrow}</span>
                <span className="text-[10px] uppercase tracking-[0.18em] font-mono text-warm-500">
                  {String(i + 1).padStart(2, "0")} / {String(FIELDS.length).padStart(2, "0")}
                </span>
              </div>

              <div
                className={`mt-4 font-display text-xl md:text-2xl leading-tight ${
                  f.placeholder ? "italic text-warm-500" : "font-medium text-ink"
                }`}
              >
                {f.primary}
                {f.placeholder && <span className="text-clay/70 align-super text-xs"> *</span>}
              </div>

              {f.secondary && (
                <div
                  className={`mt-2 text-sm leading-relaxed ${
                    f.placeholder ? "italic text-warm-500" : "text-warm-700"
                  }`}
                >
                  {f.secondary}
                </div>
              )}
            </li>
          ))}
        </ol>

        {/* Footnote — only rendered when any field is pending. */}
        {HAS_PLACEHOLDERS && (
          <p className="mt-6 text-eyebrow text-warm-500 flex items-center gap-2 justify-end">
            <span className="text-clay/70">*</span>
            Pending confirmation from the clinic
          </p>
        )}
      </div>
    </section>
  );
}
