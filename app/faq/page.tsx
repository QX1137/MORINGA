import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { JsonLd } from "@/app/components/JsonLd";
import { MoringaMark } from "@/app/components/MoringaMark";
import { FAQ_HUB, ALL_FAQ_HUB_QUESTIONS } from "@/lib/faq-hub";
import { CONTACT, PERSON, REVIEWS, SITE, whatsappUrl } from "@/lib/site";
import { breadcrumbSchema, faqSchema, localBusinessSchema, personSchema } from "@/lib/schema";
import { DEFAULT_OG_IMAGE } from "@/lib/photo-strategy";

const TITLE = "Nutrition & Diet FAQ | Go Moringa — Dietitian in Gurgaon";
const DESCRIPTION =
  "Answers to common questions on weight loss, PCOS, diabetes, thyroid, Indian diet and online consultation — from Dt. Priyatama Srivastava, 20 years' clinical practice.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/faq" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/faq`,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function FaqHubPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Nutrition & Diet FAQ", url: `${SITE.url}/faq` },
  ]);
  // One FAQPage block covering every question on the page — a strong
  // AEO signal and eligible for Google's FAQ rich results.
  const schemas = [
    localBusinessSchema(),
    personSchema(),
    faqSchema(ALL_FAQ_HUB_QUESTIONS),
    breadcrumb,
  ];

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
              <span className="text-clay">Nutrition &amp; Diet FAQ</span>
            </nav>
            <span className="hidden md:inline">{ALL_FAQ_HUB_QUESTIONS.length} questions answered</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-10 md:pt-16 pb-10 md:pb-14">
          <div className="text-eyebrow text-clay mb-5 flex items-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            Asked &amp; answered
          </div>
          <h1
            className="font-display tracking-[-0.02em] font-medium text-ink leading-[0.98]"
            style={{ fontSize: "clamp(2.1rem, 5.5vw, 4.5rem)" }}
          >
            Nutrition &amp; diet, <em className="italic-clay">answered honestly</em>.
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg leading-[1.65] text-warm-700">
            {ALL_FAQ_HUB_QUESTIONS.length} of the questions clients most often bring to the clinic — on weight loss, PCOS, diabetes, thyroid, Indian food and how consultation works. Answered by {PERSON.name}, with {PERSON.yearsExperience} years of clinical practice behind every answer.
          </p>

          {/* Jump-to-category nav */}
          <nav className="mt-8 flex flex-wrap gap-2" aria-label="FAQ categories">
            {FAQ_HUB.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="px-3 py-1.5 bg-paper border border-[#d8c8a8]/70 text-sm text-warm-700 hover:border-clay hover:text-clay transition"
              >
                {cat.category}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ CATEGORIES */}
      {FAQ_HUB.map((cat, ci) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`scroll-mt-24 py-14 md:py-20 ${ci % 2 === 0 ? "bg-paper" : "bg-paper-dark border-y border-[#d8c8a8]/60"}`}
        >
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
              <span className="block h-px w-10 bg-clay" />
              {String(ci + 1).padStart(2, "0")} · {cat.faqs.length} questions
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-ink leading-tight">
              {cat.category}
            </h2>
            <p className="mt-3 text-warm-700 leading-relaxed">{cat.blurb}</p>

            <div className="mt-8 space-y-0">
              {cat.faqs.map((f, i) => (
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
      ))}

      {/* ═══════════════════════════════════════════════ CTA */}
      <section className="bg-ink text-paper py-16 md:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 80% 20%, #C9A961 0%, transparent 40%)" }}
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <MoringaMark className="size-12 text-clay mx-auto mb-6" />
          <div className="text-eyebrow text-clay mb-4">Still have a question?</div>
          <h2 className="font-display font-medium leading-[1.05] tracking-[-0.02em]" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
            Ask {PERSON.name.replace("Dt. ", "Dt. ")} <em className="italic" style={{ color: "#C9A961" }}>directly.</em>
          </h2>
          <p className="mt-6 text-base md:text-lg text-paper/85 leading-relaxed max-w-2xl mx-auto">
            The first conversation is free — fifteen minutes on WhatsApp to discuss whatever this page didn&rsquo;t answer.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-x-8 sm:gap-y-4 justify-center sm:items-center">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-clay hover:bg-clay-deep text-paper text-base font-medium transition rounded-sm"
            >
              Ask on WhatsApp
              <span aria-hidden="true">→</span>
            </a>
            <a href={`tel:${CONTACT.phoneTel}`} className="text-base font-medium text-paper/75 hover:text-paper transition">
              or call {CONTACT.phone}
            </a>
          </div>
          <p className="mt-6 text-eyebrow text-paper/60">★ {REVIEWS.practo.rating} Practo · {PERSON.clientCount} clients</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
