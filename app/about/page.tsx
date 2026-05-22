import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { JsonLd } from "@/app/components/JsonLd";
import { MoringaMark } from "@/app/components/MoringaMark";
import { CONTACT, PERSON, REVIEWS, SITE, whatsappUrl } from "@/lib/site";
import { breadcrumbSchema, localBusinessSchema, personSchema, faqSchema } from "@/lib/schema";
import { PHOTOS } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Go Moringa | Nutri Diet Clinic In Gurgaon",
  description: "Go Moringa: weight loss, nutrition and lifestyle disease management by Dt. Priyatama Srivastava in Gurgaon. Customised, safe, scientific diet solutions since 2005.",
  alternates: { canonical: "/about.php" },
};

const FAQS = [
  { q: "What is Go Moringa Diet Clinic?", a: "Go Moringa is a Nutri Diet Clinic based in Sector 49, Gurugram, founded and led by Dt. Priyatama Srivastava. We offer customised diet plans for weight loss, weight gain, figure correction, pregnancy nutrition, and therapeutic diets for chronic conditions including diabetes, PCOS, thyroid, hypertension, cholesterol, and more." },
  { q: "How long has Go Moringa been operating?", a: `Dt. Priyatama Srivastava has been practising as a clinical dietitian in Gurgaon for ${PERSON.yearsExperience} years. Over this period, she has guided ${PERSON.clientCount} clients through structured diet programs across India and worldwide via online consultation.` },
  { q: "What makes Go Moringa different from other diet clinics?", a: "Three things: (1) Indian meal-based plans — no foreign foods, no banned food groups; (2) addressing the underlying cause, not just the symptom — most clients have an undiagnosed thyroid, insulin resistance, or vitamin deficiency driving their issue; (3) no commercial products pushed — no MLM supplements, no fat burners, no proprietary tea or shake systems. Just disciplined nutrition." },
];

export default function AboutPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "About", url: `${SITE.url}/about.php` },
  ]);
  const schemas = [localBusinessSchema(), personSchema(), faqSchema(FAQS), breadcrumb];

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
              <span className="text-clay">About</span>
            </nav>
            <span className="hidden md:inline">About · Established 2005 · Gurugram</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-14 md:pt-20 pb-10 grid md:grid-cols-12 gap-x-8 gap-y-12 items-start">
          <div className="md:col-span-7">
            <div className="text-eyebrow text-clay mb-5 flex items-center gap-3">
              <span className="block h-px w-10 bg-clay" />
              About the practice
            </div>
            <h1 className="font-display tracking-[-0.02em] font-medium text-ink leading-[0.98]" style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}>
              A clinical-grade nutrition practice in <em className="italic-clay">Gurgaon</em>.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-[1.65] text-warm-700">
              Built around real Indian kitchens, real medical contexts, and {PERSON.yearsExperience} years of disciplined practice. Established 2005.
            </p>
          </div>

          <div className="md:col-span-5 md:pt-4">
            <figure>
              <figcaption className="text-eyebrow text-clay mb-4 flex items-center gap-3">
                <span className="block h-px w-6 bg-clay" />
                A working Indian thali
              </figcaption>
              <div className="relative aspect-[4/5] overflow-hidden photo-frame">
                <Image src={PHOTOS.indianThali.url} alt={PHOTOS.indianThali.alt} fill className="object-cover" style={{ filter: "saturate(0.92) contrast(1.03)" }} sizes="(min-width: 768px) 40vw, 90vw" />
              </div>
              <figcaption className="mt-3 text-[10px] uppercase tracking-[0.18em] font-mono text-warm-500">
                Photograph · {PHOTOS.indianThali.credit.photographer}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Story with drop cap */}
      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            Know about us
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-ink leading-tight">
            Built around <em className="italic-clay">real</em> Indian kitchens.
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-[1.75] text-warm-700">
            <p>
              <span className="font-display text-clay float-left mr-3 leading-[0.85]" style={{ fontSize: "5rem", fontWeight: 500 }}>
                G
              </span>
              o Moringa is a Nutri Diet Clinic in Sector 49, Gurugram that takes an innovative approach to health and fitness. We help clients safely and scientifically reduce weight, manage chronic conditions, and change how they live with food. We are here to motivate and educate you on how to eat healthy calories aligned to your lifestyle and food preferences — not against them.
            </p>
            <p>
              Dt. Priyatama Srivastava is the founder, dietitian, and clinical face of Go Moringa. Her core philosophy — that lifestyle diseases respond more to disciplined diet than to medication-alone — is the foundation of the clinic. Go Moringa offers a complete range of services: Weight Loss, Weight Gain, Figure Correction, Healthy Pregnancy Diet, and Therapeutic Diets for chronic conditions including Hypertension, Diabetes, Obesity, PCOD/PCOS, Depression, Thyroid, Heart Disease, Kidney conditions, and many more.
            </p>
            <p>
              The clinic works with credentialed health professionals to diagnose and treat the nutritional component of each client&rsquo;s condition. We coordinate with your existing physician — not in opposition to them. For 10,000+ clients across Gurgaon, Delhi NCR, and worldwide, this model has delivered measurable results: weight lost and kept off, HbA1c brought down, BP normalised, PCOS cycles regulated, pregnancies supported safely.
            </p>
          </div>
        </div>
      </section>

      {/* Approach pillars */}
      <section className="bg-paper-dark py-16 md:py-20 border-y border-[#d8c8a8]/60">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            Our approach
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-ink leading-tight mb-10">
            Three <em className="italic-clay">principles</em>, never compromised.
          </h2>
          <div className="grid md:grid-cols-3 gap-y-10 md:gap-x-10">
            {[
              { title: "Indian meal-based", body: "Roti, dal, sabzi, rice, curd — recalibrated for your goal and condition. Not paleo, not keto, not a foreign meal-replacement protocol." },
              { title: "Root-cause focused", body: "Most stubborn weight has a hidden driver — thyroid, insulin resistance, gut imbalance, or micronutrient deficiency. We screen and address these." },
              { title: "Coordinated with your doctor", body: "We work alongside your existing physician's care, never against it. Chronic-condition cases coordinate with their treating specialist." },
            ].map((item, i) => (
              <article key={item.title}>
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="font-display text-clay leading-none" style={{ fontSize: "3rem", fontWeight: 500 }}>
                    {i + 1}
                  </span>
                  <span className="text-eyebrow text-warm-500 font-mono">Principle</span>
                </div>
                <h3 className="font-display text-xl font-medium text-ink leading-tight">{item.title}</h3>
                <p className="mt-3 text-base text-warm-700 leading-[1.7]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* The numbers */}
      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <div className="text-eyebrow text-clay mb-3 flex items-center justify-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            The numbers
            <span className="block h-px w-10 bg-clay" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-ink leading-tight mb-10">
            Two decades, <em className="italic-clay">documented</em>.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#d8c8a8]/80 border-y border-[#d8c8a8]/80">
            {[
              { value: `${PERSON.yearsExperience}+`, label: "Years of clinical\npractice" },
              { value: PERSON.clientCount, label: "Clients\ntransformed" },
              { value: `${REVIEWS.practo.rating}★`, label: `Practo · ${REVIEWS.practo.count}\nreviews` },
              { value: `${REVIEWS.justdial.rating}★`, label: `Justdial · ${REVIEWS.justdial.count}\nreviews` },
            ].map((s) => (
              <div key={s.label} className="py-8 px-4">
                <div className="font-display font-medium text-ink leading-none" style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)" }}>
                  {s.value}
                </div>
                <div className="mt-3 text-[10px] uppercase tracking-[0.18em] font-mono text-warm-500 leading-relaxed" style={{ whiteSpace: "pre-line" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper-dark py-16 md:py-20 border-y border-[#d8c8a8]/60">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            About us · FAQs
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-ink leading-tight">
            Questions, <em className="italic-clay">honestly answered</em>.
          </h2>
          <div className="mt-10 space-y-0">
            {FAQS.map((f, i) => (
              <details key={f.q} className="group border-b border-[#d8c8a8]/80 py-5">
                <summary className="cursor-pointer list-none flex justify-between items-baseline gap-4 font-display text-lg md:text-xl text-ink group-open:text-clay transition">
                  <span>
                    <span className="text-eyebrow text-clay mr-4 align-middle">{String(i + 1).padStart(2, "0")}</span>
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

      {/* CTA */}
      <section className="bg-ink text-paper py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, #C9A961 0%, transparent 40%)" }} aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <MoringaMark className="size-12 text-clay mx-auto mb-6" />
          <div className="text-eyebrow text-clay mb-4">Begin</div>
          <h2 className="font-display font-medium leading-[1.05] tracking-[-0.02em]" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
            Talk to us <em className="italic" style={{ color: "#C9A961" }}>first</em>.
          </h2>
          <p className="mt-6 text-base text-paper/85 leading-relaxed max-w-2xl mx-auto">
            Fifteen minutes on WhatsApp to discuss your goal. No commitment, no payment upfront.
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
