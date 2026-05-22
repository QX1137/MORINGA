import Image from "next/image";
import Link from "next/link";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { JsonLd } from "./JsonLd";
import { MoringaMark } from "./MoringaMark";
import { RelatedReading } from "./RelatedReading";
import {
  AuthorBioBlock,
  Citations,
  ComparisonTable,
  DefinitionBlock,
  LastUpdated,
  MedicalDisclaimer,
  StatisticBlock,
  TimelineBlock,
} from "./aeo";
import type { TreatmentData } from "@/lib/treatments";
import { getTreatment } from "@/lib/treatments";
import { getTreatmentAeo } from "@/lib/aeo-content";
import { CONTACT, PERSON, REVIEWS, SITE, whatsappUrl } from "@/lib/site";
import {
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
  personSchema,
} from "@/lib/schema";

const LAST_REVIEWED = "May 2026";

function medicalConditionSchema(t: TreatmentData) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "@id": `${SITE.url}${t.phpPath}#condition`,
    name: t.title,
    description: t.aboutCondition,
    associatedAnatomy: t.title,
    expectedPrognosis: "Manageable through dietary intervention; outcomes vary by individual case and adherence.",
    possibleTreatment: {
      "@type": "MedicalTherapy",
      name: `Dietary management of ${t.title}`,
      description: t.howDietHelps,
    },
    url: `${SITE.url}${t.phpPath}`,
  };
}

export function TreatmentPage({ treatment }: { treatment: TreatmentData }) {
  const aeo = getTreatmentAeo(treatment.slug);
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Treatment", url: `${SITE.url}/treatment.php` },
    { name: treatment.title, url: `${SITE.url}${treatment.phpPath}` },
  ]);
  const schemas = [
    localBusinessSchema(),
    personSchema(),
    medicalConditionSchema(treatment),
    faqSchema(treatment.faqs),
    breadcrumb,
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Header />

      {/* ═══════════════════════════════════════════════ HERO */}
      <section className="bg-paper-grain">
        {/* Provenance band */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
          <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-[#d8c8a8]/80 text-eyebrow text-warm-500">
            <nav aria-label="Breadcrumb">
              <Link href="/" className="hover:text-clay transition">Home</Link>
              <span className="mx-3 opacity-50">/</span>
              <Link href="/treatment.php" className="hover:text-clay transition">Treatment</Link>
              <span className="mx-3 opacity-50">/</span>
              <span className="text-clay">{treatment.title}</span>
            </nav>
            <span className="hidden md:inline">Clinical protocol · Indian-meal-based</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 md:pt-16 pb-10 md:pb-14 grid md:grid-cols-12 gap-x-8 gap-y-12 items-start">
          <div className="md:col-span-7">
            <LastUpdated date={LAST_REVIEWED} reviewer={PERSON.name} />
            <div className="text-eyebrow text-clay mb-5 flex items-center gap-3">
              <span className="block h-px w-10 bg-clay" />
              Condition
            </div>
            <h1
              className="font-display tracking-[-0.02em] font-medium text-ink leading-[0.98]"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
            >
              {treatment.h1.split(" ").map((word, i, arr) => {
                const isLast = i === arr.length - 1;
                return (
                  <span key={i}>
                    {word === "in" || word === "for" || word === "and" ? (
                      <em className="italic-clay">{word}</em>
                    ) : (
                      word
                    )}
                    {!isLast && " "}
                  </span>
                );
              })}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-[1.65] text-warm-700">
              {treatment.introLead}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 text-base font-medium text-ink">
                <span className="relative pb-1 border-b-2 border-clay transition-all group-hover:border-b-[3px]">
                  Discuss this protocol
                </span>
                <span className="text-clay" aria-hidden="true">→</span>
              </a>
              <Link href="/book-an-appointment.php" className="text-base font-medium text-ink/70 hover:text-ink transition">
                or book a consultation
              </Link>
            </div>
          </div>

          <div className="md:col-span-5 md:pt-4">
            <figure>
              <figcaption className="text-eyebrow text-clay mb-4 flex items-center gap-3">
                <span className="block h-px w-6 bg-clay" />
                {treatment.title} · clinical context
              </figcaption>
              <div className="relative aspect-[4/5] overflow-hidden photo-frame">
                <Image
                  src={treatment.heroImage}
                  alt={treatment.h1}
                  fill
                  priority
                  className="object-cover"
                  style={{ filter: "saturate(0.9) contrast(1.03)" }}
                  sizes="(min-width: 768px) 40vw, 90vw"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <div className="font-display">
                  <div className="text-base font-medium text-ink">{PERSON.name}</div>
                  <div className="text-sm italic text-clay">Clinical Dietitian</div>
                </div>
                <MoringaMark className="size-7 text-clay opacity-70" />
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ DEFINITION (AEO) */}
      {aeo?.definitionShort && (
        <section className="bg-paper py-14">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <DefinitionBlock
              term={treatment.title}
              definition={aeo.definitionShort}
              alsoKnownAs={aeo.alsoKnownAs}
            />
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════ STATS (AEO) */}
      {aeo?.stats && aeo.stats.length > 0 && (
        <section className="bg-paper-dark py-14 border-y border-[#d8c8a8]/60">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <StatisticBlock stats={aeo.stats} columns={aeo.stats.length >= 4 ? 4 : 3} />
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════ ABOUT */}
      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            Context
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-ink leading-tight">
            About <em className="italic-clay">{treatment.title.toLowerCase()}</em>.
          </h2>
          <div className="mt-6 text-lg leading-[1.7] text-warm-700">
            <p>
              <span
                className="font-display text-clay float-left mr-3 leading-[0.85]"
                style={{ fontSize: "4.5rem", fontWeight: 500 }}
              >
                {treatment.aboutCondition.charAt(0)}
              </span>
              {treatment.aboutCondition.slice(1)}
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ HOW DIET HELPS */}
      <section className="bg-paper-dark py-16 md:py-20 border-y border-[#d8c8a8]/60">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            Mechanism
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-ink leading-tight">
            How <em className="italic-clay">diet</em> helps.
          </h2>
          <p className="mt-6 text-lg leading-[1.7] text-warm-700">
            {treatment.howDietHelps}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ FOODS INCLUDE / AVOID */}
      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
              <span className="block h-px w-10 bg-clay" />
              Include
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-medium text-ink leading-tight">
              Foods we <em className="italic-clay">build on</em>.
            </h2>
            <ul className="mt-6 space-y-3 border-t border-[#d8c8a8]/60">
              {treatment.foodsToInclude.map((item, i) => (
                <li key={item} className="flex gap-4 py-3 border-b border-[#d8c8a8]/40">
                  <span className="text-eyebrow text-warm-500 shrink-0 w-8 font-mono pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base text-warm-700 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
              <span className="block h-px w-10 bg-clay" />
              Limit
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-medium text-ink leading-tight">
              Foods we <em className="italic-clay">step away from</em>.
            </h2>
            <ul className="mt-6 space-y-3 border-t border-[#d8c8a8]/60">
              {treatment.foodsToAvoid.map((item, i) => (
                <li key={item} className="flex gap-4 py-3 border-b border-[#d8c8a8]/40">
                  <span className="text-eyebrow text-clay shrink-0 w-8 font-mono pt-0.5">
                    ×{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base text-warm-700 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ SAMPLE DAY */}
      {treatment.sampleDay && treatment.sampleDay.length > 0 && (
        <section className="bg-paper-dark py-16 md:py-20 border-y border-[#d8c8a8]/60">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
              <span className="block h-px w-10 bg-clay" />
              A day on the plan
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-ink leading-tight mb-2">
              Sample <em className="italic-clay">Indian-meal</em> day.
            </h2>
            <p className="text-sm italic text-warm-500 font-display">
              A reference structure. Your actual plan is customised after individual assessment.
            </p>
            <ol className="mt-8 border-t border-[#d8c8a8]/80">
              {treatment.sampleDay.map((meal, i) => (
                <li key={meal.meal} className="grid grid-cols-12 gap-x-6 gap-y-2 py-5 border-b border-[#d8c8a8]/40">
                  <div className="col-span-12 md:col-span-4 flex items-baseline gap-3">
                    <span className="text-eyebrow text-warm-500 font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-base font-medium text-ink">{meal.meal}</span>
                  </div>
                  <div className="col-span-12 md:col-span-8 text-warm-700 leading-relaxed">
                    {meal.description}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════ COMPARISON (AEO) */}
      {aeo?.comparison && (
        <section className="bg-paper py-14">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <ComparisonTable
              heading={aeo.comparison.heading}
              optionALabel={aeo.comparison.optionALabel}
              optionBLabel={aeo.comparison.optionBLabel}
              rows={aeo.comparison.rows}
              caption={aeo.comparison.caption}
            />
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════ TIMELINE (AEO) */}
      {aeo?.timeline && aeo.timeline.length > 0 && (
        <section className="bg-paper-dark py-14 border-y border-[#d8c8a8]/60">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <TimelineBlock milestones={aeo.timeline} />
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════ FAQ */}
      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            Before you book
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-ink leading-tight">
            Frequently asked, <em className="italic-clay">honestly answered</em>.
          </h2>

          <div className="mt-10 space-y-0">
            {treatment.faqs.map((f, i) => (
              <details key={f.q} className="group border-b border-[#d8c8a8]/80 py-5">
                <summary className="cursor-pointer list-none flex justify-between items-baseline gap-4 font-display text-lg md:text-xl text-ink group-open:text-clay transition">
                  <span>
                    <span className="text-eyebrow text-clay mr-4 align-middle">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {f.q}
                  </span>
                  <span className="text-clay text-xl shrink-0 transition group-open:rotate-45" aria-hidden="true">＋</span>
                </summary>
                <div className="mt-3 pl-12 text-base text-warm-700 leading-[1.7]">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ CITATIONS / REFERENCES (E-E-A-T) */}
      <section className="bg-paper">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <Citations slug={treatment.slug} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ AUTHOR BIO (AEO) */}
      <section className="bg-paper">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AuthorBioBlock reviewedDate={LAST_REVIEWED} topicNote={aeo?.authorTopicNote} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ MEDICAL DISCLAIMER (AEO) */}
      <section className="bg-paper">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <MedicalDisclaimer />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ RELATED CONDITIONS */}
      {treatment.related.length > 0 && (
        <section className="bg-paper-dark py-16 border-y border-[#d8c8a8]/60">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
              <span className="block h-px w-10 bg-clay" />
              Related protocols
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-medium text-ink leading-tight mb-8">
              Often <em className="italic-clay">paired with</em>.
            </h2>
            <ol className="border-t border-[#d8c8a8]/80">
              {treatment.related.map((slug, i) => {
                const related = getTreatment(slug);
                if (!related) return null;
                return (
                  <li key={slug} className="group">
                    <Link href={related.phpPath} className="flex items-baseline gap-5 py-5 border-b border-[#d8c8a8]/60 transition hover:bg-paper px-2 -mx-2">
                      <span className="text-eyebrow text-warm-500 shrink-0 w-8 font-mono">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1">
                        <h3 className="font-display text-xl font-medium text-ink group-hover:text-clay transition">
                          {related.title}
                        </h3>
                        <p className="mt-1 text-sm text-warm-700 line-clamp-1">
                          {related.h1}
                        </p>
                      </div>
                      <span className="text-clay opacity-0 group-hover:opacity-100 transition" aria-hidden="true">→</span>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════ RELATED READING (cross-cluster) */}
      <RelatedReading slug={treatment.slug} cluster="treatment" />

      {/* ═══════════════════════════════════════════════ CLOSING CTA */}
      <section className="bg-ink text-paper py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, #C9A961 0%, transparent 40%)" }} aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <MoringaMark className="size-12 text-clay mx-auto mb-6" />
          <div className="text-eyebrow text-clay mb-4">Next step</div>
          <h2 className="font-display font-medium leading-[1.05] tracking-[-0.02em]" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
            Manage {treatment.title.toLowerCase()} <em className="italic" style={{ color: "#C9A961" }}>through diet</em>.
          </h2>
          <p className="mt-6 text-base text-paper/85 leading-relaxed max-w-2xl mx-auto">
            Fifteen minutes on WhatsApp to discuss your case. We will tell you honestly whether dietary intervention is appropriate for what you are working on.
          </p>
          <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4 justify-center items-center">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 text-base font-medium text-paper">
              <span className="relative pb-1 border-b-2 border-clay transition-all group-hover:border-b-[3px]">
                Begin on WhatsApp
              </span>
              <span className="text-clay" aria-hidden="true">→</span>
            </a>
            <a href={`tel:${CONTACT.phoneTel}`} className="text-base font-medium text-paper/75 hover:text-paper transition">
              or call {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
