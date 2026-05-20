import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { JsonLd } from "@/app/components/JsonLd";
import { CONTACT, REVIEWS, SITE, whatsappUrl } from "@/lib/site";
import { breadcrumbSchema, localBusinessSchema, personSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Diet Package Pricing | Go Moringa Diet Clinic Gurgaon",
  description: "Diet plan packages at Go Moringa — 1, 3, 6, and 12 month options for clients in India and worldwide. Customised plans by Dt. Priyatama Srivastava.",
  alternates: { canonical: "/package.php" },
};

type Pkg = { duration: string; priceIN: string; priceINTL: string; popular?: boolean };

const PACKAGES: Pkg[] = [
  { duration: "1 Month", priceIN: "5,999", priceINTL: "7,500" },
  { duration: "3 Months", priceIN: "13,999", priceINTL: "17,000", popular: true },
  { duration: "6 Months", priceIN: "25,999", priceINTL: "30,000" },
  { duration: "12 Months", priceIN: "40,000", priceINTL: "50,000" },
];

const INCLUDED = [
  "Detailed clinical assessment + medical history review",
  "Customised Indian-meal-based diet plan",
  "Weekly follow-up calls + plan adjustments",
  "WhatsApp access for daily questions",
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

      <section className="relative bg-brand-gradient text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,white,transparent_60%)]" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto px-4 py-16 md:py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Package Pricing</h1>
          <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            Four programme durations — pick what fits your goal. Longer programmes give better per-month value because sustained results need time.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-ink-900 text-center mb-8">Pricing for India</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES.map((p) => (
            <article key={p.duration} className={`relative bg-white rounded-2xl p-6 border-2 ${p.popular ? "border-brand-500 shadow-lg" : "border-ink-900/10"} flex flex-col`}>
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand-500 text-white text-xs font-semibold rounded-full">
                  POPULAR
                </div>
              )}
              <div className="text-ink-700 font-medium">{p.duration}</div>
              <div className="mt-2 text-4xl font-bold text-ink-900">₹{p.priceIN}</div>
              <div className="mt-1 text-xs text-ink-500">Inclusive of consultation + plan + follow-ups</div>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={`mt-5 w-full text-center px-4 py-2.5 rounded-full font-semibold transition ${p.popular ? "bg-brand-600 hover:bg-brand-700 text-white" : "bg-cream-100 hover:bg-brand-50 text-ink-900"}`}>
                Buy Now
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cream-50 border-y border-ink-900/5">
        <div className="max-w-7xl mx-auto px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold text-ink-900 text-center mb-8">Pricing for outside India</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PACKAGES.map((p) => (
              <article key={p.duration} className={`bg-white rounded-2xl p-6 border ${p.popular ? "border-brand-300" : "border-ink-900/10"} flex flex-col`}>
                <div className="text-ink-700 font-medium">{p.duration}</div>
                <div className="mt-2 text-4xl font-bold text-ink-900">₹{p.priceINTL}</div>
                <div className="mt-1 text-xs text-ink-500">For clients consulting from outside India</div>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="mt-5 w-full text-center px-4 py-2.5 rounded-full font-semibold bg-cream-100 hover:bg-brand-50 text-ink-900 transition">
                  Buy Now
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-ink-900 text-center mb-8">What is included in every package</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {INCLUDED.map((item) => (
            <div key={item} className="flex gap-3 bg-white border border-ink-900/10 rounded-xl p-4">
              <span className="text-brand-600 font-bold" aria-hidden="true">✓</span>
              <span className="text-ink-900">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-50 border-y border-brand-200">
        <div className="max-w-4xl mx-auto px-4 py-10 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-ink-900">Not sure which programme fits?</h2>
          <p className="mt-2 text-ink-700">WhatsApp us to discuss your goal — we will recommend the right package in a 15-minute call. No commitment.</p>
          <div className="mt-5 flex flex-wrap gap-3 justify-center">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="px-7 py-3 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold transition">
              WhatsApp Us
            </a>
            <a href={`tel:${CONTACT.phoneTel}`} className="px-7 py-3 rounded-full bg-white border border-ink-900/10 text-ink-900 hover:bg-cream-50 font-semibold transition">
              Call {CONTACT.phone}
            </a>
          </div>
          <p className="mt-4 text-sm text-ink-500">
            See our reviews on <a href={REVIEWS.practo.url} target="_blank" rel="noopener noreferrer" className="underline">Practo</a> and <a href={REVIEWS.justdial.url} target="_blank" rel="noopener noreferrer" className="underline">Justdial</a>.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-10 text-sm text-ink-500">
        <p className="text-center italic">
          <Link href="/payment.php" className="text-brand-700 underline">View payment methods →</Link>
        </p>
      </section>

      <Footer />
    </>
  );
}
