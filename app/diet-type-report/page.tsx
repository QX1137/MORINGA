import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { JsonLd } from "@/app/components/JsonLd";
import { MoringaMark } from "@/app/components/MoringaMark";
import { LeadForm } from "./LeadForm";
import { CONTACT, PERSON, REVIEWS, SITE } from "@/lib/site";
import { DEFAULT_OG_IMAGE } from "@/lib/photo-strategy";
import { breadcrumbSchema, localBusinessSchema, personSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Free Diet Type Report | BMI & Programme Match | Go Moringa",
  description:
    "A free starting-point assessment from Go Moringa — enter your body metrics and goal, receive an Indian-population-specific BMI reading + recommended programme + three tips you can start today.",
  alternates: { canonical: "/diet-type-report" },
  openGraph: {
    title: "Free Diet Type Report — Go Moringa",
    description: "Indian-population BMI reading + a programme match from Dt. Priyatama Srivastava's practice.",
    url: `${SITE.url}/diet-type-report`,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function DietTypeReportPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Diet Type Report", url: `${SITE.url}/diet-type-report` },
  ]);
  const schemas = [localBusinessSchema(), personSchema(), breadcrumb];

  return (
    <>
      <JsonLd data={schemas} />
      <Header />

      {/* HERO */}
      <section className="bg-paper-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
          <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-[#d8c8a8]/80 text-eyebrow text-warm-500">
            <nav aria-label="Breadcrumb">
              <Link href="/" className="hover:text-clay transition">Home</Link>
              <span className="mx-3 opacity-50">/</span>
              <span className="text-clay">Diet Type Report</span>
            </nav>
            <span className="hidden md:inline">Free assessment · No account · 90 seconds</span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 lg:px-8 pt-14 md:pt-20 pb-12 text-center">
          <MoringaMark className="size-10 text-clay mx-auto mb-5" />
          <div className="text-eyebrow text-clay mb-5 flex items-center justify-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            Free · Diet Type Report
            <span className="block h-px w-10 bg-clay" />
          </div>
          <h1
            className="font-display tracking-[-0.02em] font-medium text-ink leading-[0.98] mx-auto max-w-4xl"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
          >
            Read by an Indian dietitian.<br />
            <em className="italic-clay">Not</em> a Western calculator.
          </h1>
          <p className="mt-6 text-lg text-warm-700 max-w-2xl mx-auto leading-relaxed">
            A 90-second starting-point assessment. Asian Indian BMI thresholds (lower than Western), goal-aware programme matching, and three things you can start today — from {PERSON.name}&rsquo;s practice.
          </p>
          <div className="mt-8 inline-flex flex-wrap items-center gap-x-6 gap-y-2 text-eyebrow text-warm-500 border-y border-[#d8c8a8]/80 py-3">
            <span>★ {REVIEWS.practo.rating} Practo ({REVIEWS.practo.count})</span>
            <span>{PERSON.yearsExperience}+ years</span>
            <span>10,000+ clients</span>
          </div>
        </div>
      </section>

      {/* FORM (client component — handles result rendering too) */}
      <LeadForm />

      {/* WHY THIS REPORT IS DIFFERENT */}
      <section className="bg-paper-dark py-16 md:py-20 border-y border-[#d8c8a8]/60">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            Why this report matters
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-ink leading-tight mb-10">
            We use the BMI thresholds <em className="italic-clay">Indian bodies</em> actually need.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <article>
              <div className="text-eyebrow text-warm-500 mb-2 font-mono">No. 01</div>
              <h3 className="font-display text-xl font-medium text-ink leading-tight">Asian Indian BMI thresholds</h3>
              <p className="mt-3 text-base text-warm-700 leading-[1.65]">
                Healthy: 18.5–22.9. Overweight: 23.0+. The Western 24.9 cutoff misses millions of Indians who are already at metabolic risk. We use the ICMR + WHO Asian Indian guidelines.
              </p>
            </article>
            <article>
              <div className="text-eyebrow text-warm-500 mb-2 font-mono">No. 02</div>
              <h3 className="font-display text-xl font-medium text-ink leading-tight">Goal-aware programme match</h3>
              <p className="mt-3 text-base text-warm-700 leading-[1.65]">
                A normal BMI with PCOS is a different protocol than a normal BMI in maintenance. The report routes you to the actual programme Priyatama would suggest after a first consultation.
              </p>
            </article>
            <article>
              <div className="text-eyebrow text-warm-500 mb-2 font-mono">No. 03</div>
              <h3 className="font-display text-xl font-medium text-ink leading-tight">No fake urgency</h3>
              <p className="mt-3 text-base text-warm-700 leading-[1.65]">
                No countdown timers. No &ldquo;3 slots left&rdquo; pressure. No data leaves your browser unless you press send. This is an honest starting point, not a sales funnel.
              </p>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
