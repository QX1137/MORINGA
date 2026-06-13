import Image from "next/image";
import Link from "next/link";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { JsonLd } from "./JsonLd";
import { MoringaMark } from "./MoringaMark";
import { AuthorBioBlock, LastUpdated, MedicalDisclaimer } from "./aeo";
import type { LandingPage as LandingPageData } from "@/lib/landing-pages";
import { CONTACT, PERSON, REVIEWS, SITE, whatsappUrl } from "@/lib/site";
import {
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
  personSchema,
} from "@/lib/schema";

const LAST_REVIEWED = "May 2026";

/**
 * Shared template for the six keyword landing pages (online consultation,
 * weight-loss-plan, condition diet-plans). Editorial-clinical D layout:
 * provenance hero → drop-cap intro → highlights → prose sections →
 * process → sample diet day → FAQ → internal-link cluster → author bio.
 */
export function LandingPage({ page }: { page: LandingPageData }) {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: page.h1, url: `${SITE.url}${page.path}` },
  ]);
  const schemas = [
    localBusinessSchema(),
    personSchema(),
    faqSchema(page.faqs),
    breadcrumb,
  ];

  // Italicise the final word of the H1 in clay — editorial accent.
  const words = page.h1.split(" ");
  const head = words.slice(0, -1).join(" ");
  const tail = words[words.length - 1];

  return (
    <>
      <JsonLd data={schemas} />
      <Header />

      {/* ═══════════════════════════════════════════════ HERO */}
      <section className="bg-paper-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-5">
          <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-[#d8c8a8]/80 text-eyebrow text-warm-500">
            <nav aria-label="Breadcrumb">
              <Link href="/" className="hover:text-clay transition">Home</Link>
              <span className="mx-3 opacity-50">/</span>
              <span className="text-clay">{page.h1}</span>
            </nav>
            <span className="hidden md:inline">{page.eyebrow}</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8 md:pt-16 pb-10 md:pb-14 grid md:grid-cols-12 gap-x-8 gap-y-10 md:gap-y-12 items-start">
          <div className="md:col-span-7">
            <LastUpdated date={LAST_REVIEWED} reviewer={PERSON.name} />
            <div className="text-eyebrow text-clay mb-4 md:mb-5 flex items-center gap-3">
              <span className="block h-px w-8 md:w-10 bg-clay" />
              {page.eyebrow}
            </div>
            <h1
              className="font-display tracking-[-0.02em] font-medium text-ink leading-[0.98]"
              style={{ fontSize: "clamp(2.1rem, 5.5vw, 4.5rem)" }}
            >
              {head}{head && " "}
              <em className="italic-clay">{tail}</em>
            </h1>
            <p className="mt-5 md:mt-7 max-w-2xl text-base md:text-lg leading-[1.6] md:leading-[1.65] text-warm-700">
              {page.heroSubhead}
            </p>

            <div className="mt-7 md:mt-9 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-4 sm:gap-x-8 sm:gap-y-4">
              {/* Mobile: one prominent button. The phone also lives in the top
                  bar and the sticky bottom bar, so "or call" is a light text
                  link here rather than a second heavy box (matches homepage). */}
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="md:hidden inline-flex items-center justify-center gap-2 px-5 py-4 bg-ink active:bg-ink-deep text-paper text-base font-medium transition rounded-sm"
              >
                Begin a consultation
                <span aria-hidden="true">→</span>
              </a>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex group items-center gap-3 text-base font-medium text-ink"
              >
                <span className="relative pb-1 border-b-2 border-clay transition-all group-hover:border-b-[3px]">
                  Begin a consultation
                </span>
                <span className="text-clay" aria-hidden="true">→</span>
              </a>
              <Link
                href={`tel:${CONTACT.phoneTel}`}
                className="inline-flex items-center justify-center gap-2 min-h-[44px] text-ink/80 md:text-ink/70 md:hover:text-ink text-base font-medium transition"
              >
                <span aria-hidden="true" className="text-clay">☏</span>
                <span>or call <span className="border-b border-clay/40">{CONTACT.phone}</span></span>
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-eyebrow text-warm-500">
              <span>★ {REVIEWS.practo.rating} Practo ({REVIEWS.practo.count})</span>
              <span>{PERSON.yearsExperience}+ years · {PERSON.clientCount} clients</span>
            </div>
          </div>

          <div className="md:col-span-5 md:pt-4">
            <figure>
              <figcaption className="text-eyebrow text-clay mb-4 flex items-center gap-3">
                <span className="block h-px w-6 bg-clay" />
                {page.eyebrow}
              </figcaption>
              <div className="relative aspect-[4/5] overflow-hidden photo-frame">
                <Image
                  src={page.heroImage}
                  alt={page.h1}
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

      {/* ═══════════════════════════════════════════════ INTRO LEAD with drop cap */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-eyebrow text-clay mb-4 flex items-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            The short answer
          </div>
          <div className="text-lg leading-[1.7] text-warm-700">
            <p>
              <span
                className="font-display text-clay float-left mr-3 leading-[0.85]"
                style={{ fontSize: "5rem", fontWeight: 500 }}
              >
                {page.introLead.charAt(0)}
              </span>
              {page.introLead.slice(1)}
            </p>
          </div>

          {/* Highlights — key bullet points */}
          <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {page.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-base text-warm-700 leading-snug">
                <span className="mt-2 block h-px w-4 bg-clay shrink-0" aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ INLINE FIGURE (e.g. Weight Loss Thali)
          Optional labelled infographic. Shown at its natural aspect ratio so
          the edge labels are never cropped; no "Photograph:" credit (it's a
          diagram, not a stock photo). */}
      {page.inlineFigure && (
        <section className="bg-paper pb-4 md:pb-8">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <figure>
              <figcaption className="text-eyebrow text-clay mb-4 flex items-center gap-3">
                <span className="block h-px w-10 bg-clay" />
                {page.inlineFigure.eyebrow}
              </figcaption>
              <div
                className="relative overflow-hidden photo-frame bg-paper"
                style={{ aspectRatio: page.inlineFigure.ratio.replace("/", " / ") }}
              >
                <Image
                  src={page.inlineFigure.src}
                  alt={page.inlineFigure.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 48rem, 90vw"
                />
              </div>
              <figcaption className="mt-3 text-[10px] uppercase tracking-[0.18em] font-mono text-warm-500">
                {page.inlineFigure.caption}
              </figcaption>
            </figure>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════ PROSE SECTIONS */}
      <section className="bg-paper-dark py-14 md:py-20 border-y border-[#d8c8a8]/60">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-10">
            {page.sections.map((s, i) => (
              <article key={s.heading} className="grid grid-cols-12 gap-x-6 gap-y-3 border-t border-[#d8c8a8]/80 pt-6 first:border-t-0 first:pt-0">
                <div className="col-span-12 md:col-span-3">
                  <div className="text-eyebrow text-warm-500 font-mono">
                    No. {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <h2 className="font-display text-2xl md:text-3xl font-medium text-ink leading-tight">
                    {s.heading}
                  </h2>
                  <p className="mt-3 text-base md:text-lg text-warm-700 leading-[1.7]">{s.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ PROCESS */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            How it works
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-ink leading-tight mb-10">
            Four steps, <em className="italic-clay">start to plan</em>.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {page.process.map((step, i) => (
              <article key={step.title}>
                <div className="font-display text-clay text-4xl font-medium leading-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 font-display text-xl font-medium text-ink leading-tight">{step.title}</h3>
                <p className="mt-2 text-sm text-warm-700 leading-relaxed">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ SAMPLE DAY (diet-plan pages only) */}
      {page.sampleDay && page.sampleDay.length > 0 && (
        <section className="bg-paper-dark py-14 md:py-20 border-y border-[#d8c8a8]/60">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
              <span className="block h-px w-10 bg-clay" />
              A sample day
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-ink leading-tight">
              What a day on the plan <em className="italic-clay">looks like</em>.
            </h2>

            <div className="mt-8 border-t border-[#d8c8a8]/80">
              {page.sampleDay.map((m) => (
                <div
                  key={m.time}
                  className="grid grid-cols-12 gap-x-4 gap-y-1 py-4 border-b border-[#d8c8a8]/60"
                >
                  <div className="col-span-12 sm:col-span-2 text-eyebrow text-clay font-mono">{m.time}</div>
                  <div className="col-span-12 sm:col-span-3 font-display text-base font-medium text-ink">{m.meal}</div>
                  <div className="col-span-12 sm:col-span-7 text-base text-warm-700 leading-snug">{m.items}</div>
                </div>
              ))}
            </div>

            {page.sampleDayNote && (
              <p className="mt-5 text-sm italic text-warm-500 font-display border-l-2 border-clay pl-5 leading-relaxed">
                {page.sampleDayNote}
              </p>
            )}
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════ FAQ */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            Before you book
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-ink leading-tight">
            Questions, <em className="italic-clay">honestly answered</em>.
          </h2>

          <div className="mt-10 space-y-0">
            {page.faqs.map((f, i) => (
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

      {/* ═══════════════════════════════════════════════ INTERNAL-LINK CLUSTER */}
      <section className="bg-paper-dark py-14 md:py-20 border-y border-[#d8c8a8]/60">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            Related at the clinic
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-medium text-ink leading-tight mb-8">
            Keep <em className="italic-clay">reading</em>.
          </h2>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {page.relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-baseline gap-4 border-t border-[#d8c8a8]/80 pt-5"
              >
                <span className="text-clay shrink-0 transition group-hover:translate-x-0.5" aria-hidden="true">→</span>
                <span>
                  <span className="font-display text-lg md:text-xl font-medium text-ink group-hover:text-clay transition leading-tight">
                    {link.label}
                  </span>
                  <span className="block mt-1 text-sm text-warm-700 leading-snug">{link.note}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ AUTHOR BIO */}
      <section className="bg-paper">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AuthorBioBlock reviewedDate={LAST_REVIEWED} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ DISCLAIMER */}
      <section className="bg-paper">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <MedicalDisclaimer />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ CTA */}
      <section className="bg-ink text-paper py-16 md:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 80% 20%, #C9A961 0%, transparent 40%)" }}
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <MoringaMark className="size-12 text-clay mx-auto mb-6" />
          <div className="text-eyebrow text-clay mb-4">Begin</div>
          <h2 className="font-display font-medium leading-[1.05] tracking-[-0.02em]" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
            The first conversation <em className="italic" style={{ color: "#C9A961" }}>is free.</em>
          </h2>
          <p className="mt-6 text-base text-paper/85 leading-relaxed max-w-2xl mx-auto">
            Fifteen minutes on WhatsApp to discuss your goal. No commitment, no payment upfront — we tell you honestly whether a plan is the right fit.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-x-8 sm:gap-y-4 justify-center sm:items-center">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-clay hover:bg-clay-deep text-paper text-base font-medium transition rounded-sm"
            >
              Begin on WhatsApp
              <span aria-hidden="true">→</span>
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
