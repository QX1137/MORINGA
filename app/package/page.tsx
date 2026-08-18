import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { JsonLd } from "@/app/components/JsonLd";
import { MoringaMark } from "@/app/components/MoringaMark";
import { CONTACT, REVIEWS, SITE, whatsappUrl } from "@/lib/site";
import { breadcrumbSchema, localBusinessSchema, personSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Diet Package Pricing | Go Moringa Diet Clinic Gurgaon",
  description: "Diet plan packages at Go Moringa — 1, 3, 6, 9, and 12 month options for India and worldwide clients. Customised by Dt. Priyatama Srivastava.",
  alternates: { canonical: "/package.php" },
};

type Pkg = { duration: string; priceIN: string; priceINTL: string; popular?: boolean };
const PACKAGES: Pkg[] = [
  { duration: "1 Month", priceIN: "6,000", priceINTL: "7,500" },
  { duration: "3 Months", priceIN: "14,000", priceINTL: "17,000", popular: true },
  { duration: "6 Months", priceIN: "26,000", priceINTL: "30,000" },
  { duration: "9 Months", priceIN: "36,000", priceINTL: "40,000" },
  { duration: "12 Months", priceIN: "48,000", priceINTL: "50,000" },
];

const INCLUDED = [
  "Detailed clinical assessment + medical history review",
  "Customised Indian-meal-based diet plan",
  "Daily follow-up — send your food photo + weight every day, plan adjusted to match",
  "Direct WhatsApp access to Dt. Priyatama herself — never an assistant",
  "Recipe library tailored to your plan",
  "Supplement guidance (where genuinely needed)",
  "Restaurant + travel eating guidance",
  "Coordination with your physician (when relevant)",
];

export default function PackagePage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Package", url: `${SITE.url}/package.php` },
  ]);
  const schemas = [localBusinessSchema(), personSchema(), breadcrumb];

  return (
    <>
      <JsonLd data={schemas} />
      <Header />

      <section className="bg-paper-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
          <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-[#d8c8a8]/80 text-eyebrow text-warm-500">
            <nav aria-label="Breadcrumb">
              <Link href="/" className="hover:text-clay transition">Home</Link>
              <span className="mx-3 opacity-50">/</span>
              <span className="text-clay">Package</span>
            </nav>
            <span className="hidden md:inline">Programme durations · 1 · 3 · 6 · 9 · 12 months</span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 lg:px-8 pt-14 md:pt-20 pb-10 text-center">
          <div className="text-eyebrow text-clay mb-5 flex items-center justify-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            Pricing
            <span className="block h-px w-10 bg-clay" />
          </div>
          <h1 className="font-display tracking-[-0.02em] font-medium text-ink leading-[0.98] mx-auto max-w-4xl" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
            Five programme <em className="italic-clay">durations</em>.
          </h1>
          <p className="mt-6 text-lg text-warm-700 max-w-2xl mx-auto leading-relaxed">
            Longer programmes give better per-month value — because sustained results need time.
          </p>
        </div>
      </section>

      {/* India pricing */}
      <section className="bg-paper py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            For India
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-ink leading-tight mb-8">
            Pricing <em className="italic-clay">in INR</em>.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {PACKAGES.map((p, i) => (
              <article key={p.duration} className={`relative p-7 border ${p.popular ? "border-clay" : "border-[#d8c8a8]/70"} flex flex-col`}>
                {p.popular && (
                  <div className="absolute -top-3 left-7 px-2.5 py-0.5 bg-clay text-paper text-eyebrow">
                    Popular
                  </div>
                )}
                <div className="text-eyebrow text-warm-500 mb-2 font-mono">No. {String(i + 1).padStart(2, "0")}</div>
                <div className="font-display text-base text-ink/70">{p.duration}</div>
                <div className="font-display font-medium text-ink mt-3 leading-none" style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}>
                  ₹{p.priceIN}
                </div>
                <div className="mt-4 text-xs text-warm-500 leading-relaxed flex-1">
                  Consultation + customised plan + daily follow-ups
                </div>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="mt-6 group inline-flex items-center gap-2 text-base font-medium text-ink">
                  <span className={`relative pb-1 border-b-2 transition-all group-hover:border-b-[3px] ${p.popular ? "border-clay" : "border-[#d8c8a8]"}`}>
                    Begin on WhatsApp
                  </span>
                  <span className="text-clay" aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* International pricing */}
      <section className="bg-paper-dark py-14 md:py-16 border-y border-[#d8c8a8]/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            For outside India
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-ink leading-tight mb-8">
            Pricing <em className="italic-clay">for international clients</em>.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {PACKAGES.map((p, i) => (
              <article key={p.duration} className="p-7 border border-[#d8c8a8]/70 bg-paper flex flex-col">
                <div className="text-eyebrow text-warm-500 mb-2 font-mono">No. {String(i + 1).padStart(2, "0")}</div>
                <div className="font-display text-base text-ink/70">{p.duration}</div>
                <div className="font-display font-medium text-ink mt-3 leading-none" style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}>
                  ₹{p.priceINTL}
                </div>
                <div className="mt-4 text-xs text-warm-500 leading-relaxed flex-1">
                  For clients consulting from outside India
                </div>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="mt-6 group inline-flex items-center gap-2 text-base font-medium text-ink">
                  <span className="relative pb-1 border-b-2 border-[#d8c8a8] transition-all group-hover:border-b-[3px] group-hover:border-clay">
                    Begin on WhatsApp
                  </span>
                  <span className="text-clay" aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            What is included
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-ink leading-tight mb-8">
            In <em className="italic-clay">every</em> package.
          </h2>
          <ul className="border-t border-[#d8c8a8]/60">
            {INCLUDED.map((item, i) => (
              <li key={item} className="flex gap-5 py-3 border-b border-[#d8c8a8]/40 text-base text-warm-700 leading-snug">
                <span className="text-eyebrow text-clay shrink-0 w-8 font-mono pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-paper py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, #C9A961 0%, transparent 40%)" }} aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <MoringaMark className="size-12 text-clay mx-auto mb-6" />
          <div className="text-eyebrow text-clay mb-4">Not sure which to pick?</div>
          <h2 className="font-display font-medium leading-[1.05] tracking-[-0.02em]" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
            We will tell you <em className="italic" style={{ color: "#C9A961" }}>honestly</em>.
          </h2>
          <p className="mt-6 text-base text-paper/85 leading-relaxed max-w-2xl mx-auto">
            Fifteen minutes on WhatsApp to discuss your goal — we will recommend the right programme. No commitment.
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
          <p className="mt-6 text-eyebrow text-paper/60">
            ★ {REVIEWS.practo.rating} Practo · ★ {REVIEWS.justdial.rating} Justdial · 20+ years
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
