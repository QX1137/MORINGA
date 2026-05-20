import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { JsonLd } from "./components/JsonLd";
import { MoringaMark } from "./components/MoringaMark";
import { CONTACT, PERSON, REVIEWS, SITE, whatsappUrl } from "@/lib/site";
import {
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
  personSchema,
  websiteSchema,
} from "@/lib/schema";
import { SERVICE_LIST } from "@/lib/services";
import { TREATMENT_LIST } from "@/lib/treatments";

export const metadata: Metadata = {
  title: "Best Dietician In Gurgaon, India | Nutritionist, Weight Loss Expert",
  description:
    "Go Moringa Diet Clinic has the best dietician in Gurgaon, with 20 years of experience, providing personalised diet plans and helping 10,000+ clients achieve their weight loss goals.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Best Dietician In Gurgaon, India | Nutritionist, Weight Loss Expert",
    url: SITE.url,
    images: [`${SITE.url}/assets/banner/best-dietician-in-gurgaon.jpg`],
  },
};

const FEATURED_TREATMENTS = TREATMENT_LIST.filter((t) =>
  ["diabetes", "pcod-pcos", "thyroid", "high-blood-pressure", "heart-disease", "osteoporosis"].includes(t.slug)
);

const TESTIMONIALS = [
  {
    name: "Anjali",
    locality: "Sector 49, Gurugram",
    outcome: "Lost 18 kg · 6 months",
    quote: "Priyatama&rsquo;s plans were practical — I could eat dal-roti, no boring meal-replacement shakes. Lost the weight and kept it off.",
  },
  {
    name: "Rohit",
    locality: "DLF Phase 3",
    outcome: "Reversed pre-diabetes",
    quote: "My HbA1c came down from 6.4 to 5.6 in 4 months. No medication. Just disciplined eating with her plan.",
  },
  {
    name: "Meera",
    locality: "Sushant Lok",
    outcome: "PCOS managed without hormones",
    quote: "Regular cycles for the first time in years. Skin cleared up. Lost 9 kg as a bonus.",
  },
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
  const schemas = [
    localBusinessSchema(),
    personSchema(),
    websiteSchema(),
    faqSchema(FAQS),
    breadcrumb,
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Header />

      {/* ═══════════════════════════════════════════════ HERO */}
      <section className="relative overflow-hidden bg-paper-grain">
        {/* Editorial provenance band */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-6">
          <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-[#d8c8a8]/80">
            <div className="text-eyebrow text-clay">
              Profile · Clinical Nutrition · Indian Practice
            </div>
            <div className="text-eyebrow text-ink/65 hidden md:block">
              Vol. {PERSON.yearsExperience} · Issue 01 · Established 2005
            </div>
          </div>
        </div>

        {/* Hero grid */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-12 md:pt-20 pb-16 md:pb-24 grid md:grid-cols-12 gap-x-8 gap-y-12 items-start">
          <div className="md:col-span-7">
            <div className="text-eyebrow text-clay mb-6 flex items-center gap-3">
              <span className="block h-px w-10 bg-clay" />
              The dietitian Gurgaon trusts
            </div>

            <h1
              className="font-display tracking-[-0.02em] font-medium text-ink leading-[0.95]"
              style={{ fontSize: "clamp(2.6rem, 6.5vw, 5.5rem)" }}
            >
              The dietitian{" "}
              <em className="italic-clay">Gurgaon writes</em>{" "}
              back to.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-[1.65] text-warm-700">
              Twenty years of clinical practice. Ten thousand stories, written one meal at a time. <em className="not-italic font-medium text-ink">Dt. Priyatama Srivastava</em> builds personalised Indian-meal plans for the people you actually live with — weight, PCOS, diabetes, thyroid, pregnancy, the slow battles.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-base font-medium text-ink"
              >
                <span className="relative pb-1 border-b-2 border-clay transition-all group-hover:border-b-[3px]">
                  Begin a consultation
                </span>
                <span className="text-clay" aria-hidden="true">→</span>
              </a>
              <Link
                href={`tel:${CONTACT.phoneTel}`}
                className="text-base font-medium text-ink/70 hover:text-ink transition"
              >
                or call {CONTACT.phone}
              </Link>
            </div>

            {/* Stat band */}
            <div className="mt-14 grid grid-cols-3 gap-x-6 gap-y-2 max-w-xl py-6 border-y border-[#d8c8a8]/80">
              <div>
                <div className="font-display font-medium text-ink leading-none" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                  {PERSON.yearsExperience}<em className="italic-clay">+</em>
                </div>
                <div className="text-[10px] uppercase tracking-[0.18em] mt-3 leading-snug font-mono text-warm-700">
                  Years in<br />practice
                </div>
              </div>
              <div>
                <div className="font-display font-medium text-ink leading-none" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                  10,000<em className="italic-clay">+</em>
                </div>
                <div className="text-[10px] uppercase tracking-[0.18em] mt-3 leading-snug font-mono text-warm-700">
                  Clients<br />transformed
                </div>
              </div>
              <div>
                <div className="font-display font-medium text-ink leading-none" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                  {REVIEWS.practo.rating}<em className="italic-clay">★</em>
                </div>
                <div className="text-[10px] uppercase tracking-[0.18em] mt-3 leading-snug font-mono text-warm-700">
                  Practo · {REVIEWS.practo.count}<br />reviews
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 md:pt-4">
            <figure>
              <figcaption className="text-eyebrow text-clay mb-4 flex items-center gap-3">
                <span className="block h-px w-6 bg-clay" />
                Photographed in clinic · 2024
              </figcaption>
              <div className="relative aspect-[3/4] overflow-hidden border border-ink/20">
                <Image
                  src="/assets/diet-img/priyatma.jpg"
                  alt={`${PERSON.name} — clinical dietitian`}
                  fill
                  priority
                  className="object-cover"
                  style={{ filter: "saturate(0.88) contrast(1.04)" }}
                  sizes="(min-width: 768px) 40vw, 90vw"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <div className="font-display">
                  <div className="text-lg font-medium text-ink">{PERSON.name}</div>
                  <div className="text-sm italic text-clay">Clinical Dietitian &amp; Nutritionist</div>
                </div>
                <MoringaMark className="size-8 text-clay opacity-70" />
              </div>
            </figure>
          </div>
        </div>

        {/* Closing motto */}
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

      {/* ═══════════════════════════════════════════════ APPROACH (definition block) */}
      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <div className="text-eyebrow text-clay flex items-center justify-center gap-3 mb-6">
            <span className="block h-px w-10 bg-clay" />
            The approach
            <span className="block h-px w-10 bg-clay" />
          </div>
          <h2 className="font-display font-medium text-ink leading-[1.1] tracking-[-0.02em]" style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)" }}>
            We design diets the way <em className="italic-clay">a tailor</em> measures a kurta —<br className="hidden md:inline" />
            for the body, the day, and the family already at the table.
          </h2>
          <p className="mt-8 text-lg leading-[1.7] text-warm-700 max-w-3xl mx-auto">
            No banned food groups. No keto crash. No protein-powder pyramid scheme. Just structured Indian eating — bajra, dal, paneer, ghee in measured spoons — calibrated to your goal and the labs we can move.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ SERVICES (editorial grid) */}
      <section className="bg-paper-dark py-20 md:py-24 border-y border-[#d8c8a8]/60">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
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
                <h3 className="font-display text-2xl font-medium text-ink group-hover:text-clay transition leading-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-warm-700 leading-relaxed line-clamp-3">
                  {s.heroSubhead}
                </p>
                <div className="mt-3 text-sm text-ink/70 group-hover:text-clay transition flex items-center gap-2">
                  Read more <span aria-hidden="true">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ CONDITIONS (type-led list) */}
      <section className="bg-paper py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="text-eyebrow text-clay mb-4">Conditions we manage</div>
            <h2 className="font-display font-medium text-ink leading-[1.05] tracking-[-0.02em]" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
              Twenty <em className="italic-clay">chronic conditions</em>, one protocol per body.
            </h2>
            <p className="mt-6 text-warm-700 leading-relaxed">
              Each treatment page documents the dietary approach, the foods we include and avoid, a sample Indian-meal day, expected timeline, and FAQs answered by a clinical dietitian.
            </p>
            <Link href="/treatment.php" className="mt-8 inline-flex items-center gap-3 text-base font-medium text-ink">
              <span className="relative pb-1 border-b-2 border-clay">
                See all 20 conditions
              </span>
              <span className="text-clay" aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="md:col-span-7">
            <ol className="space-y-0">
              {FEATURED_TREATMENTS.map((t, i) => (
                <li key={t.slug} className="group">
                  <Link href={t.phpPath} className="flex items-baseline gap-5 py-5 border-b border-[#d8c8a8]/60 transition hover:bg-paper-dark/50 px-2 -mx-2">
                    <span className="text-eyebrow text-warm-500 shrink-0 w-8 font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display text-xl md:text-2xl font-medium text-ink group-hover:text-clay transition">
                        {t.title}
                      </h3>
                      <p className="mt-1 text-sm text-warm-700 line-clamp-1">
                        {t.introLead}
                      </p>
                    </div>
                    <span className="text-clay opacity-0 group-hover:opacity-100 transition" aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ ABOUT PREVIEW (press feature) */}
      <section className="bg-paper-dark py-20 md:py-24 border-y border-[#d8c8a8]/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden border border-ink/20">
                <Image
                  src="/assets/diet-img/priyatma.jpg"
                  alt={PERSON.name}
                  fill
                  className="object-cover"
                  style={{ filter: "saturate(0.85) contrast(1.04)" }}
                  sizes="(min-width: 768px) 40vw, 90vw"
                />
              </div>
              <figcaption className="mt-3 text-eyebrow text-warm-500">
                Portrait · Clinical session · Sector 49
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

            <p className="mt-7 text-base leading-[1.7] text-warm-700">
              Priyatama Srivastava has practised in Gurgaon since 2005, working with corporate professionals, post-natal mothers, pre-wedding brides, and clients on long therapeutic protocols. She has guided more than 10,000 clients through diet-led management of weight, hormones, glucose, lipids, thyroid and pregnancy nutrition — coordinating with cardiologists, endocrinologists and obstetricians across the NCR&rsquo;s major hospital systems.
            </p>

            <blockquote className="mt-8 border-l-2 border-clay pl-5 italic font-display text-lg text-ink leading-relaxed">
              &ldquo;The right plan is not what is in fashion. It is what fits your body, your kitchen, your week — and what your lab work will say in three months.&rdquo;
            </blockquote>

            <Link href="/priyatama-srivastava.php" className="mt-8 inline-flex items-center gap-3 text-base font-medium text-ink">
              <span className="relative pb-1 border-b-2 border-clay">Read her full practice</span>
              <span className="text-clay" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ TESTIMONIALS (pull-quotes) */}
      <section className="bg-paper py-20 md:py-24">
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
            {TESTIMONIALS.map((t) => (
              <article key={t.name} className="bg-paper-dark border border-[#d8c8a8]/80 p-7 md:p-8">
                <div className="text-eyebrow text-clay mb-5">{t.outcome}</div>
                <blockquote
                  className="font-display italic text-xl leading-[1.4] text-ink"
                  dangerouslySetInnerHTML={{ __html: `&ldquo;${t.quote}&rdquo;` }}
                />
                <footer className="mt-6 pt-5 border-t border-[#d8c8a8]/80">
                  <div className="font-display text-base font-medium text-ink">{t.name}</div>
                  <div className="text-sm text-warm-500 italic">{t.locality}</div>
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

      {/* ═══════════════════════════════════════════════ FAQ */}
      <section className="bg-paper-dark py-20 md:py-24 border-y border-[#d8c8a8]/60">
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
                <div className="mt-3 pl-12 text-base text-warm-700 leading-[1.7]">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ CLOSING CTA */}
      <section className="bg-ink text-paper py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <MoringaMark className="size-12 text-clay mx-auto mb-6" />
          <div className="text-eyebrow text-clay mb-5">Begin</div>
          <h2 className="font-display font-medium leading-[1.05] tracking-[-0.02em]" style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}>
            The first conversation <em className="italic" style={{ color: "#C9A961" }}>is free.</em>
          </h2>
          <p className="mt-6 text-base md:text-lg text-paper/85 leading-relaxed max-w-2xl mx-auto">
            Fifteen minutes on WhatsApp to understand your goal — no commitment, no payment upfront. We&rsquo;ll tell you honestly whether dietary intervention is appropriate for what you&rsquo;re working on.
          </p>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 justify-center items-center">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-base font-medium text-paper"
            >
              <span className="relative pb-1 border-b-2 border-clay transition-all group-hover:border-b-[3px]">
                Begin on WhatsApp
              </span>
              <span className="text-clay" aria-hidden="true">→</span>
            </a>
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="text-base font-medium text-paper/75 hover:text-paper transition"
            >
              or call {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
