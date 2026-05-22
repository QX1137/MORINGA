import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { JsonLd } from "./components/JsonLd";
import { MoringaMark } from "./components/MoringaMark";
import { PersonBadge } from "./components/PersonBadge";
import { TrustStrip } from "./components/TrustStrip";
import { REAL } from "@/lib/photo-strategy";
import { CONTACT, PERSON, REVIEWS, SITE, whatsappUrl } from "@/lib/site";
import { DEFAULT_OG_IMAGE } from "@/lib/photo-strategy";
import {
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
  personSchema,
  websiteSchema,
} from "@/lib/schema";
import { SERVICE_LIST } from "@/lib/services";
import { TREATMENT_LIST } from "@/lib/treatments";
import { PHOTOS } from "@/lib/images";

export const metadata: Metadata = {
  title: "Best Dietician In Gurgaon, India | Nutritionist, Weight Loss Expert",
  description:
    "Go Moringa Diet Clinic has the best dietician in Gurgaon, with 20 years of experience, providing personalised diet plans and helping 10,000+ clients achieve their weight loss goals.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Best Dietician In Gurgaon, India | Nutritionist, Weight Loss Expert",
    url: SITE.url,
    images: [DEFAULT_OG_IMAGE],
  },
};

const FEATURED_TREATMENTS = TREATMENT_LIST.filter((t) =>
  ["diabetes", "pcod-pcos", "thyroid", "high-blood-pressure", "heart-disease", "osteoporosis"].includes(t.slug),
);

const TESTIMONIALS = [
  { name: "Anjali", locality: "Sector 49, Gurugram", outcome: "Lost 18 kg · 6 months", quote: "Priyatama's plans were practical — I could eat dal-roti, no boring meal-replacement shakes. Lost the weight and kept it off." },
  { name: "Rohit", locality: "DLF Phase 3", outcome: "Reversed pre-diabetes", quote: "My HbA1c came down from 6.4 to 5.6 in 4 months. No medication. Just disciplined eating with her plan." },
  { name: "Meera", locality: "Sushant Lok", outcome: "PCOS managed without hormones", quote: "Regular cycles for the first time in years. Skin cleared up. Lost 9 kg as a bonus." },
];

const FAQS = [
  { q: "Who is the best dietitian in Gurgaon?", a: `Dt. Priyatama Srivastava of Go Moringa Nutri Diet Clinic, based in Sector 49 Gurugram, is rated 5.0/5 on Practo (${REVIEWS.practo.count} reviews) and 4.9/5 on Justdial (${REVIEWS.justdial.count} reviews). With 20 years of experience and 10,000+ clients across Gurgaon, Delhi NCR and worldwide via online consultation, she specialises in weight loss, PCOS, diabetes, thyroid and pregnancy nutrition.` },
  { q: "Do you provide online diet consultation?", a: "Yes. We consult clients across India and worldwide via WhatsApp and video call. The process is identical to an in-clinic visit — detailed health assessment, customised diet plan, weekly follow-ups." },
  { q: "How long does it take to see results?", a: "Most clients see measurable change within 2-3 weeks. Sustainable weight loss is typically 2-4 kg per month. Therapeutic improvements (HbA1c, lipid profile, hormone levels) usually show up in 3 months of disciplined adherence." },
  { q: "Will I have to give up Indian food?", a: "No. Every diet plan is built around Indian meal patterns — roti, dal, rice, sabzi — adjusted for your goal and condition. We work with your kitchen, not against it." },
  { q: "What's the consultation fee?", a: `Packages start with a one-month plan and scale up to comprehensive multi-month programmes. Call ${CONTACT.phone} or WhatsApp us for current pricing and to find the right fit for your goal.` },
  { q: "Where is the clinic located?", a: `${CONTACT.address.fullAddress}. Open ${CONTACT.hours.days}, ${CONTACT.hours.open} to ${CONTACT.hours.close}.` },
];

export default function HomePage() {
  const breadcrumb = breadcrumbSchema([{ name: "Home", url: SITE.url }]);
  const schemas = [localBusinessSchema(), personSchema(), websiteSchema(), faqSchema(FAQS), breadcrumb];

  return (
    <>
      <JsonLd data={schemas} />
      <Header />

      {/* ═════════════════════════════════════════════════ HERO */}
      <section className="relative overflow-hidden bg-paper-grain">
        {/* Provenance band — decorative; hidden on the smallest screens where
            the mono eyebrow would wrap awkwardly. */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-6 hidden sm:block">
          <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-[#d8c8a8]/80">
            <div className="text-eyebrow text-clay">
              Profile · Clinical Nutrition · Indian Practice
            </div>
            <div className="text-eyebrow text-ink/65 hidden md:block">
              Vol. {PERSON.yearsExperience} · Issue 01 · Established 2005
            </div>
          </div>
        </div>

        {/* Hero grid — type-led with press-print portrait + small ambient image.
            Mobile-first: tighter pt-6 (was pt-12), smaller H1 floor (2.1rem
            from 2.6rem) so the long phrase doesn't wrap awkwardly on iPhone SE,
            primary WhatsApp CTA renders as a tappable button below md (still
            an editorial text-link from md upward to preserve the print feel). */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-6 md:pt-20 pb-8 md:pb-16 grid md:grid-cols-12 gap-x-8 gap-y-10 md:gap-y-12 items-start">
          <div className="md:col-span-7">
            <div className="text-eyebrow text-clay mb-4 md:mb-6 flex items-center gap-3">
              <span className="block h-px w-8 md:w-10 bg-clay" />
              The dietitian Gurgaon trusts
            </div>

            <h1 className="font-display tracking-[-0.02em] font-medium text-ink leading-[0.95]" style={{ fontSize: "clamp(2.1rem, 6.5vw, 5.5rem)" }}>
              The dietitian{" "}
              <em className="italic-clay">Gurgaon writes</em>{" "}
              back to.
            </h1>

            <p className="mt-5 md:mt-7 max-w-xl text-base md:text-lg leading-[1.6] md:leading-[1.65] text-warm-700">
              Twenty years of clinical practice. Ten thousand stories, written one meal at a time. <em className="not-italic font-medium text-ink">Dt. Priyatama Srivastava</em> builds personalised Indian-meal plans for the people you actually live with — weight, PCOS, diabetes, thyroid, pregnancy, the slow battles.
            </p>

            {/* CTAs — mobile renders WhatsApp as a tappable ink button (the
                FloatingCTA bar at the bottom is identical, but in-flow primary
                affordance reduces "thumb travel" friction above the fold).
                From md: upward, switches to the editorial text-link style. */}
            <div className="mt-7 md:mt-9 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-x-8 sm:gap-y-4">
              {/* Mobile button */}
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="md:hidden inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-ink hover:bg-ink-deep text-paper text-base font-medium transition rounded-sm"
              >
                Begin a consultation
                <span aria-hidden="true">→</span>
              </a>
              {/* Desktop editorial link */}
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex group items-center gap-3 text-base font-medium text-ink"
              >
                <span className="relative pb-1 border-b-2 border-clay transition-all group-hover:border-b-[3px]">Begin a consultation</span>
                <span className="text-clay" aria-hidden="true">→</span>
              </a>
              <Link
                href={`tel:${CONTACT.phoneTel}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 md:px-0 md:py-0 border border-ink/25 md:border-0 text-ink md:text-ink/70 md:hover:text-ink text-base font-medium transition rounded-sm md:rounded-none"
              >
                <span className="md:hidden" aria-hidden="true">📞</span>
                <span>or call {CONTACT.phone}</span>
              </Link>
            </div>

            <p className="mt-5 text-eyebrow text-warm-500">
              Not ready to talk yet?{" "}
              <Link href="/diet-type-report" className="text-clay border-b border-clay/40 hover:border-clay">
                Try the free Diet Type Report →
              </Link>
            </p>

            {/* Stat band — replaced by the full TrustStrip below the hero (better mobile rhythm, adds the ISO credential). */}
          </div>

          <div className="md:col-span-5 md:pt-4 space-y-6">
            {/* Main portrait — real clinic photo, Sector 49 (added 2026-05-21) */}
            <figure>
              <figcaption className="text-eyebrow text-clay mb-4 flex items-center gap-3">
                <span className="block h-px w-6 bg-clay" />
                In clinic · Sector 49 · 2026
              </figcaption>
              <PersonBadge variant="hero" alt={`${PERSON.name} — clinical dietitian`} />
              <div className="mt-4 flex items-baseline justify-between">
                <div className="font-display">
                  <div className="text-lg font-medium text-ink">{PERSON.name}</div>
                  <div className="text-sm italic text-clay">Clinical Dietitian &amp; Nutritionist</div>
                </div>
                <MoringaMark className="size-8 text-clay opacity-70" />
              </div>
            </figure>

            {/* Small ambient inset — botanical close-up */}
            <figure className="hidden md:block ml-auto max-w-[180px]">
              <div className="relative aspect-square overflow-hidden border border-clay/40">
                <Image
                  src={PHOTOS.moringaLeaves.url}
                  alt={PHOTOS.moringaLeaves.alt}
                  fill
                  className="object-cover"
                  style={{ filter: "saturate(0.92) contrast(1.02)" }}
                  sizes="180px"
                />
              </div>
              <figcaption className="mt-2 text-[10px] uppercase tracking-[0.18em] font-mono text-warm-500 text-right">
                Moringa oleifera · {PHOTOS.moringaLeaves.credit.photographer}
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Closing rule */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pb-10">
          <div className="border-t border-[#d8c8a8]/80 pt-5 flex items-center justify-between flex-wrap gap-3 text-eyebrow text-warm-500">
            <span>Sec 49, Gurugram · Mon–Sat · 10–7</span>
            <span className="font-display italic text-clay normal-case tracking-normal text-base">
              Roti, dal, sabzi — recalibrated.
            </span>
            <span>Practo {REVIEWS.practo.rating}★ · Justdial {REVIEWS.justdial.rating}★</span>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════ TRUST STRIP (years · clients · reviews · ISO) */}
      <TrustStrip />

      {/* ═════════════════════════════════════════════════ APPROACH (with drop cap + thali photo) */}
      <section className="bg-paper py-14 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-12 gap-12 items-start">
          {/* Type column with drop cap */}
          <div className="md:col-span-7 md:order-2 relative">
            <div className="text-eyebrow text-clay mb-4 flex items-center gap-3">
              <span className="block h-px w-10 bg-clay" />
              The approach
            </div>
            <h2 className="font-display font-medium text-ink leading-[1.05] tracking-[-0.02em]" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
              We design diets the way <em className="italic-clay">a tailor</em> measures a kurta.
            </h2>

            {/* Drop cap paragraph */}
            <div className="mt-8 text-lg leading-[1.7] text-warm-700 max-w-2xl">
              <p>
                <span
                  className="font-display text-clay float-left mr-3 leading-[0.85]"
                  style={{ fontSize: "5.5rem", fontWeight: 500 }}
                >
                  T
                </span>
                here is no programme that works for everyone. Bodies arrive with their own labs, family meal habits, office schedules, and quiet histories of every diet they have tried before. A plan that ignores any of those will fail in three weeks — sometimes faster.
              </p>
              <p className="mt-5">
                What works, year after year, is structured Indian eating — bajra phulka, dal, paneer, ghee in measured spoons, fruit by the season. Calibrated to your goal and the labs we can move. <em>Not glamorous. Documentable.</em>
              </p>
            </div>

            {/* Marginal annotation */}
            <aside className="mt-8 border-l-2 border-clay pl-5 max-w-md">
              <p className="text-sm text-warm-700 italic font-display leading-relaxed">
                We have written approximately 22,000 plans across two decades. Each one is a single document. None of them are copy-pasted.
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.18em] font-mono text-warm-500">
                Note from the clinic
              </p>
            </aside>
          </div>

          {/* Thali photo */}
          <div className="md:col-span-5 md:order-1">
            <figure>
              <figcaption className="text-eyebrow text-clay mb-4 flex items-center gap-3">
                <span className="block h-px w-6 bg-clay" />
                A working Indian thali
              </figcaption>
              <div className="relative aspect-[4/5] overflow-hidden border border-ink/20">
                <Image
                  src={PHOTOS.indianThali.url}
                  alt={PHOTOS.indianThali.alt}
                  fill
                  className="object-cover"
                  style={{ filter: "saturate(0.92) contrast(1.03)" }}
                  sizes="(min-width: 768px) 40vw, 90vw"
                />
              </div>
              <figcaption className="mt-3 text-[10px] uppercase tracking-[0.18em] font-mono text-warm-500">
                {PHOTOS.indianThali.caption} · Photograph: {PHOTOS.indianThali.credit.photographer}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════ INSIDE THE CLINIC (real interior photography) */}
      <section className="bg-paper-dark py-14 md:py-24 border-y border-[#d8c8a8]/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <header className="grid md:grid-cols-12 gap-8 items-end mb-12">
            <div className="md:col-span-7">
              <div className="text-eyebrow text-clay mb-4">Inside · Sector 49, Gurugram</div>
              <h2 className="font-display font-medium text-ink leading-[1.05] tracking-[-0.02em]" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
                The clinic, <em className="italic-clay">in pictures</em>.
              </h2>
            </div>
            <div className="md:col-span-5 md:text-right">
              <p className="text-warm-700 text-base leading-relaxed">
                Where every plan is written, every weekly review is held, every measurement is taken. Photographed by us — no stock, no staging.
              </p>
            </div>
          </header>

          {/* Asymmetric photo grid — real clinic interiors */}
          <div className="grid grid-cols-12 gap-x-6 gap-y-8">
            <figure className="col-span-12 md:col-span-7 lg:col-span-6">
              <div className="relative aspect-[5/4] overflow-hidden border border-ink/15">
                <Image
                  src={REAL.clinicReception}
                  alt="Reception area of Go Moringa Diet Clinic — Sector 49 Gurugram, with the Go Moringa logo on the wall"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, (min-width: 768px) 60vw, 100vw"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between text-eyebrow text-warm-500">
                <span>Reception · the Go Moringa wall</span>
                <span className="italic font-display normal-case tracking-normal text-clay">No. 01</span>
              </figcaption>
            </figure>

            <figure className="col-span-6 md:col-span-5 lg:col-span-3 md:mt-12">
              <div className="relative aspect-[3/4] overflow-hidden border border-ink/15">
                <Image
                  src={REAL.clinicConsultation}
                  alt="Main consultation room with green velvet chairs and natural light"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between text-eyebrow text-warm-500">
                <span>Consultation room</span>
                <span className="italic font-display normal-case tracking-normal text-clay">No. 02</span>
              </figcaption>
            </figure>

            <figure className="col-span-6 md:col-span-5 lg:col-span-3 lg:mt-24">
              <div className="relative aspect-[3/4] lg:aspect-square overflow-hidden border border-ink/15">
                <Image
                  src={REAL.isoCertificate}
                  alt="ISO 9001:2015 quality-management system certification for Go Moringa Nutri Diet — issued by IQCS, UKAC accredited"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between text-eyebrow text-warm-500">
                <span>ISO 9001:2015 cert</span>
                <span className="italic font-display normal-case tracking-normal text-clay">No. 03</span>
              </figcaption>
            </figure>

            <figure className="col-span-12 md:col-span-7 lg:col-span-5 lg:-mt-6">
              <div className="relative aspect-[5/4] overflow-hidden border border-ink/15">
                <Image
                  src={REAL.clinicWaiting}
                  alt="Waiting area with cream upholstered chairs and a glass partition into the consultation rooms"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, (min-width: 768px) 60vw, 100vw"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between text-eyebrow text-warm-500">
                <span>Waiting area</span>
                <span className="italic font-display normal-case tracking-normal text-clay">No. 04</span>
              </figcaption>
            </figure>

            <figure className="col-span-12 md:col-span-5 lg:col-span-4 md:-mt-6 lg:mt-12">
              <div className="relative aspect-[5/4] overflow-hidden border border-ink/15">
                <Image
                  src={REAL.clinicOffice}
                  alt="Consultation desk with awards and certificates on glass shelving above"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 40vw, 100vw"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between text-eyebrow text-warm-500">
                <span>The desk · where plans are written</span>
                <span className="italic font-display normal-case tracking-normal text-clay">No. 05</span>
              </figcaption>
            </figure>

            <div className="col-span-12 md:col-span-7 lg:col-span-3 md:-mt-6 lg:mt-12 flex flex-col justify-between bg-paper border border-clay/40 p-6">
              <div>
                <MoringaMark className="size-8 text-clay" />
                <p className="mt-4 font-display italic text-xl text-ink leading-snug">
                  A real room, in a real building, in Sector 49.
                </p>
                <p className="mt-3 text-sm text-warm-700 leading-relaxed">
                  Unitech Rodio Drive, D-117 &amp; 118, South City II. Walk in. Or video call from anywhere in India.
                </p>
              </div>
              <p className="mt-6 text-[10px] uppercase tracking-[0.18em] font-mono text-warm-500">
                Photographed · 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════ SERVICES (editorial grid) */}
      <section className="bg-paper py-14 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <header className="grid md:grid-cols-12 gap-8 items-end mb-12">
            <div className="md:col-span-7">
              <div className="text-eyebrow text-clay mb-4">Services · Five programmes</div>
              <h2 className="font-display font-medium text-ink leading-[1.05] tracking-[-0.02em]" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
                What we work on, <em className="italic-clay">together</em>.
              </h2>
            </div>
            <div className="md:col-span-5 md:text-right">
              <p className="text-warm-700 text-base leading-relaxed">
                Each programme is a written plan, a weekly review, and an open WhatsApp line to Priyatama. Pick the one that matches your body&rsquo;s current question.
              </p>
            </div>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {SERVICE_LIST.map((s, i) => (
              <Link key={s.slug} href={s.phpPath} className="group">
                <div className="relative aspect-[4/3] overflow-hidden border border-ink/15 mb-5">
                  <Image
                    src={s.heroImage}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "saturate(0.9)" }}
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="text-eyebrow text-clay mb-2">No. {String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-display text-2xl font-medium text-ink group-hover:text-clay transition leading-tight">{s.title}</h3>
                <p className="mt-2 text-sm text-warm-700 leading-relaxed line-clamp-3">{s.heroSubhead}</p>
                <div className="mt-3 text-sm text-ink/70 group-hover:text-clay transition flex items-center gap-2">
                  Read more <span aria-hidden="true">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════ CONDITIONS (type-led list) */}
      <section className="bg-paper-dark py-14 md:py-24 border-y border-[#d8c8a8]/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="text-eyebrow text-clay mb-4">Conditions we manage</div>
            <h2 className="font-display font-medium text-ink leading-[1.05] tracking-[-0.02em]" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
              Twenty <em className="italic-clay">chronic conditions</em>, one protocol per body.
            </h2>
            <p className="mt-6 text-warm-700 leading-relaxed">
              Each treatment page documents the dietary approach, the foods we include and avoid, a sample Indian-meal day, expected timeline, and FAQs answered by a clinical dietitian.
            </p>

            {/* Botanical anchor */}
            <figure className="mt-8 max-w-[260px]">
              <div className="relative aspect-square overflow-hidden border border-clay/40">
                <Image
                  src={PHOTOS.greenLeafBranch.url}
                  alt={PHOTOS.greenLeafBranch.alt}
                  fill
                  className="object-cover"
                  sizes="260px"
                />
              </div>
              <figcaption className="mt-2 text-[10px] uppercase tracking-[0.18em] font-mono text-warm-500">
                Pinnate leaves · botanical close-up
              </figcaption>
            </figure>

            <Link href="/treatment.php" className="mt-8 inline-flex items-center gap-3 text-base font-medium text-ink">
              <span className="relative pb-1 border-b-2 border-clay">See all 20 conditions</span>
              <span className="text-clay" aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="md:col-span-7">
            <ol className="space-y-0">
              {FEATURED_TREATMENTS.map((t, i) => (
                <li key={t.slug} className="group">
                  <Link href={t.phpPath} className="flex items-baseline gap-5 py-5 border-b border-[#d8c8a8]/60 transition hover:bg-paper px-2 -mx-2">
                    <span className="text-eyebrow text-warm-500 shrink-0 w-8 font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display text-xl md:text-2xl font-medium text-ink group-hover:text-clay transition">{t.title}</h3>
                      <p className="mt-1 text-sm text-warm-700 line-clamp-1">{t.introLead}</p>
                    </div>
                    <span className="text-clay opacity-0 group-hover:opacity-100 transition" aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════ ABOUT (press feature) */}
      <section className="bg-paper py-14 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <figure>
              {/* At-desk working portrait (teamAtWork) — a deliberately different
                  shot from the hero portrait so the same face isn't repeated
                  identically twice on the homepage. */}
              <PersonBadge variant="hero" src={REAL.teamAtWork} alt={`${PERSON.name} at work in the Go Moringa clinic, Sector 49 Gurugram`} />
              <figcaption className="mt-3 text-eyebrow text-warm-500">
                At the clinic desk · Sector 49, Gurugram
              </figcaption>
            </figure>
          </div>

          <div className="md:col-span-7">
            <div className="text-eyebrow text-clay mb-4">Portrait</div>
            <h2 className="font-display font-medium text-ink leading-[1.05] tracking-[-0.02em]" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
              {PERSON.name}
            </h2>
            <p className="mt-3 font-display italic text-clay text-xl">
              Practising clinical dietitian for {PERSON.yearsExperience} years
            </p>

            <div className="mt-7 text-base leading-[1.7] text-warm-700 space-y-4">
              <p>
                <span
                  className="font-display text-clay float-left mr-3 leading-[0.85]"
                  style={{ fontSize: "4.5rem", fontWeight: 500 }}
                >
                  P
                </span>
                riyatama Srivastava has practised in Gurgaon since 2005. Her clients are mostly people who have already tried — the gym, the keto plan, the 21-day cleanse, the influencer&rsquo;s pdf — and arrive with the same question. <em>What actually works, year after year?</em>
              </p>
              <p>
                Her answer, in two decades, has not changed: a documented, family-meal-shaped plan, a weekly review, lab work every quarter, and the patience that this is a long road. Ten thousand clients later, that answer has held.
              </p>
            </div>

            <blockquote className="mt-8 border-l-2 border-clay pl-5 italic font-display text-lg text-ink leading-relaxed">
              &ldquo;The right plan is not what is in fashion. It is what fits your body, your kitchen, your week — and what your lab work will say in three months.&rdquo;
            </blockquote>
            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] font-mono text-warm-500 pl-5">
              — Dt. Priyatama
            </p>

            <Link href="/priyatama-srivastava.php" className="mt-8 inline-flex items-center gap-3 text-base font-medium text-ink">
              <span className="relative pb-1 border-b-2 border-clay">Read her full practice</span>
              <span className="text-clay" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════ TESTIMONIALS */}
      <section className="bg-paper-dark py-14 md:py-24 border-y border-[#d8c8a8]/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <header className="text-center max-w-3xl mx-auto mb-14">
            <div className="text-eyebrow text-clay mb-4">Field notes from clients</div>
            <h2 className="font-display font-medium text-ink leading-[1.05] tracking-[-0.02em]" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
              Lab values, returned <em className="italic-clay">to normal</em>.
            </h2>
            <p className="mt-4 text-warm-700">
              A few of the ten thousand. With written consent. First names + neighbourhoods only.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <article key={t.name} className="bg-paper border border-[#d8c8a8]/80 p-7 md:p-8 relative">
                <div className="text-eyebrow text-clay mb-5">{t.outcome}</div>
                <blockquote className="font-display italic text-xl leading-[1.4] text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <footer className="mt-6 pt-5 border-t border-[#d8c8a8]/80 flex items-baseline justify-between">
                  <div>
                    <div className="font-display text-base font-medium text-ink">{t.name}</div>
                    <div className="text-sm text-warm-500 italic">{t.locality}</div>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.18em] font-mono text-warm-500">No. {String(i + 1).padStart(2, "0")}</span>
                </footer>
              </article>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-warm-700">
            {REVIEWS.practo.count}+ verified reviews on{" "}
            <a href={REVIEWS.practo.url} target="_blank" rel="noopener noreferrer" className="text-clay underline underline-offset-4">Practo</a>
            {" · "}
            {REVIEWS.justdial.count}+ on{" "}
            <a href={REVIEWS.justdial.url} target="_blank" rel="noopener noreferrer" className="text-clay underline underline-offset-4">Justdial</a>
          </p>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════ FAQ */}
      <section className="bg-paper py-14 md:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <header className="mb-12 text-center">
            <div className="text-eyebrow text-clay mb-4">Before you book</div>
            <h2 className="font-display font-medium text-ink leading-[1.05] tracking-[-0.02em]" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
              Questions answered <em className="italic-clay">honestly</em>.
            </h2>
          </header>

          <div className="space-y-0">
            {FAQS.map((f, i) => (
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

      {/* ═════════════════════════════════════════════════ CLOSING CTA */}
      <section className="bg-ink text-paper py-14 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, #C9A961 0%, transparent 40%)" }} aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <MoringaMark className="size-12 text-clay mx-auto mb-6" />
          <div className="text-eyebrow text-clay mb-5">Begin</div>
          <h2 className="font-display font-medium leading-[1.05] tracking-[-0.02em]" style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}>
            The first conversation <em className="italic" style={{ color: "#C9A961" }}>is free.</em>
          </h2>
          <p className="mt-6 text-base md:text-lg text-paper/85 leading-relaxed max-w-2xl mx-auto">
            Fifteen minutes on WhatsApp to understand your goal — no commitment, no payment upfront. We&rsquo;ll tell you honestly whether dietary intervention is appropriate for what you&rsquo;re working on.
          </p>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 justify-center items-center">
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

      {/* Photography credits — honest mix of clinic + Unsplash */}
      <div className="bg-ink-deep text-paper/40 py-4 px-6 text-center text-[10px] uppercase tracking-[0.18em] font-mono leading-relaxed">
        Photography · Interiors &amp; portraits by Go Moringa · Sector 49, Gurugram · 2026
        <span className="opacity-50 mx-2">·</span>
        Botanical &amp; food: {PHOTOS.indianThali.credit.photographer}, {PHOTOS.moringaLeaves.credit.photographer}, {PHOTOS.freshGreens.credit.photographer} &amp; others via Unsplash
      </div>

      <Footer />
    </>
  );
}
