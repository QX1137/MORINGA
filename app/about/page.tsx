import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { JsonLd } from "@/app/components/JsonLd";
import { CONTACT, PERSON, REVIEWS, SITE, whatsappUrl } from "@/lib/site";
import {
  breadcrumbSchema,
  localBusinessSchema,
  personSchema,
  faqSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Go Moringa | Nutri Diet Clinic In Gurgaon",
  description: "Go Moringa: weight loss, nutrition and lifestyle disease management by Dt. Priyatama Srivastava in Gurgaon. Customised, safe, and scientific diet solutions for healthy living since 2005.",
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

      <section className="relative bg-brand-gradient text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,white,transparent_60%)]" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto px-4 py-16 md:py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">About Go Moringa</h1>
          <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            A clinical-grade nutrition practice in Gurgaon — built around real Indian kitchens, real medical contexts, and {PERSON.yearsExperience} years of disciplined practice.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-ink-900 mb-5">Know about us</h2>
        <p className="text-lg text-ink-700 leading-relaxed">
          Go Moringa is a Nutri Diet Clinic in Sector 49, Gurugram that takes an innovative approach to health and fitness. We help clients safely and scientifically reduce weight, manage chronic conditions, and change how they live with food. We are here to motivate and educate you on how to eat healthy calories aligned to your lifestyle and food preferences — not against them.
        </p>
        <p className="mt-5 text-lg text-ink-700 leading-relaxed">
          Dt. Priyatama Srivastava is the founder, dietitian, and clinical face of Go Moringa. Her core philosophy — that lifestyle diseases respond more to disciplined diet than to medication-alone — is the foundation of the clinic. Go Moringa offers a complete range of services: Weight Loss Diet programs, Weight Gain, Figure Correction, Healthy Pregnancy Diet, and Therapeutic Diets for chronic conditions including Hypertension, Diabetes, Obesity, PCOD/PCOS, Depression, Thyroid, Heart Disease, Kidney conditions, and many more.
        </p>
        <p className="mt-5 text-lg text-ink-700 leading-relaxed">
          The clinic works with credentialed health professionals to diagnose and treat the nutritional component of each client&rsquo;s condition. We coordinate with your existing physician — not in opposition to them. For 10,000+ clients across Gurgaon, Delhi NCR, and worldwide, this model has delivered measurable results: weight lost and kept off, HbA1c brought down, BP normalised, PCOS cycles regulated, pregnancies supported safely.
        </p>
      </section>

      <section className="bg-cream-50 border-y border-ink-900/5">
        <div className="max-w-5xl mx-auto px-4 py-14">
          <h2 className="text-3xl font-bold text-ink-900 mb-8 text-center">Our approach</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Indian meal-based", body: "Roti, dal, sabzi, rice, curd — recalibrated for your goal and condition. Not paleo, not keto, not a foreign meal-replacement protocol." },
              { title: "Root-cause focused", body: "Most stubborn weight has a hidden driver — thyroid, insulin resistance, gut imbalance, or micronutrient deficiency. We screen and address these." },
              { title: "Coordinated with your doctor", body: "We work alongside your existing physician's care, never against it. For chronic conditions, your physician's specific medical guidance always takes precedence." },
            ].map((item) => (
              <article key={item.title} className="bg-white rounded-2xl p-6 border border-ink-900/10 shadow-sm">
                <h3 className="text-xl font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-3 text-ink-700 leading-relaxed">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-14">
        <div className="bg-brand-50 border border-brand-200 rounded-2xl p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-ink-900">The numbers</h2>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-4xl font-bold text-brand-700">{PERSON.yearsExperience}+</div>
              <div className="mt-1 text-sm text-ink-700">Years of clinical practice</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-700">{PERSON.clientCount}</div>
              <div className="mt-1 text-sm text-ink-700">Clients transformed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-700">{REVIEWS.practo.rating}★</div>
              <div className="mt-1 text-sm text-ink-700">Practo ({REVIEWS.practo.count} reviews)</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-700">{REVIEWS.justdial.rating}★</div>
              <div className="mt-1 text-sm text-ink-700">Justdial ({REVIEWS.justdial.count} reviews)</div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-14">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-ink-900">FAQs</h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((f) => (
            <details key={f.q} className="group bg-cream-50 border border-ink-900/10 rounded-xl">
              <summary className="cursor-pointer list-none p-5 flex justify-between items-center font-semibold text-ink-900 group-open:text-brand-700">
                {f.q}
                <span className="text-brand-600 transition group-open:rotate-45" aria-hidden="true">＋</span>
              </summary>
              <div className="px-5 pb-5 text-ink-700 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-ink-900 text-white">
        <div className="max-w-4xl mx-auto px-4 py-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Want to know if we&rsquo;re right for you?</h2>
          <p className="mt-3 text-white/80">Free 15-minute WhatsApp consultation to discuss your goal.</p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="px-7 py-3 rounded-full bg-brand-500 hover:bg-brand-600 font-semibold transition">
              Chat on WhatsApp
            </a>
            <a href={`tel:${CONTACT.phoneTel}`} className="px-7 py-3 rounded-full bg-white text-ink-900 hover:bg-cream-100 font-semibold transition">
              Call {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
