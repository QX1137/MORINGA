import Image from "next/image";
import Link from "next/link";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { JsonLd } from "./JsonLd";
import type { TreatmentData } from "@/lib/treatments";
import { getTreatment } from "@/lib/treatments";
import { CONTACT, PERSON, REVIEWS, SITE, whatsappUrl } from "@/lib/site";
import {
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
  personSchema,
} from "@/lib/schema";

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

      {/* ===== Hero ===== */}
      <section className="relative bg-brand-gradient text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,white,transparent_60%)]" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm text-white/70 mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span aria-hidden="true"> / </span>
              <Link href="/treatment.php" className="hover:text-white">Treatment</Link>
              <span aria-hidden="true"> / </span>
              <span className="text-white">{treatment.title}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">{treatment.h1}</h1>
            <p className="mt-4 text-lg text-white/90 max-w-xl leading-relaxed">{treatment.introLead}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-white text-brand-700 font-semibold hover:bg-cream-100 transition">
                Free WhatsApp Consultation
              </a>
              <Link href="/book-an-appointment.php" className="px-6 py-3 rounded-full bg-brand-900 text-white font-semibold hover:bg-ink-900 transition">
                Book Appointment
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/80">
              <span>★ {REVIEWS.practo.rating} on Practo ({REVIEWS.practo.count})</span>
              <span>{PERSON.yearsExperience}+ years &middot; {PERSON.clientCount} clients</span>
            </div>
          </div>
          <div className="relative aspect-[16/11] md:aspect-square rounded-2xl overflow-hidden bg-white/10 shadow-2xl">
            <Image src={treatment.heroImage} alt={treatment.h1} fill priority className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
          </div>
        </div>
      </section>

      {/* ===== About condition ===== */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-ink-900 mb-4">About {treatment.title}</h2>
        <p className="text-ink-700 leading-relaxed text-lg">{treatment.aboutCondition}</p>
      </section>

      {/* ===== How diet helps ===== */}
      <section className="bg-cream-50 border-y border-ink-900/5">
        <div className="max-w-4xl mx-auto px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold text-ink-900 mb-4">How diet helps with {treatment.title}</h2>
          <p className="text-ink-700 leading-relaxed text-lg">{treatment.howDietHelps}</p>
        </div>
      </section>

      {/* ===== Foods include / avoid ===== */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-ink-900">Foods to include</h2>
          <ul className="mt-5 space-y-3">
            {treatment.foodsToInclude.map((item) => (
              <li key={item} className="flex gap-3 text-ink-900">
                <span className="text-brand-600 font-bold mt-0.5" aria-hidden="true">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-ink-900">Foods to avoid</h2>
          <ul className="mt-5 space-y-3">
            {treatment.foodsToAvoid.map((item) => (
              <li key={item} className="flex gap-3 text-ink-900">
                <span className="text-accent-coral font-bold mt-0.5" aria-hidden="true">✗</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== Sample day (if present) ===== */}
      {treatment.sampleDay && treatment.sampleDay.length > 0 && (
        <section className="bg-cream-100">
          <div className="max-w-4xl mx-auto px-4 py-16">
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900 mb-8 text-center">Sample day plan</h2>
            <div className="space-y-4">
              {treatment.sampleDay.map((meal) => (
                <article key={meal.meal} className="bg-white rounded-xl border border-ink-900/10 p-5 flex flex-col md:flex-row md:items-start gap-3">
                  <div className="font-semibold text-brand-700 md:w-48 shrink-0">{meal.meal}</div>
                  <div className="text-ink-700 leading-relaxed">{meal.description}</div>
                </article>
              ))}
            </div>
            <p className="mt-6 text-sm text-ink-500 italic text-center">
              This is a sample reference. Your actual plan is customised after individual assessment.
            </p>
          </div>
        </section>
      )}

      {/* ===== Trust line ===== */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-brand-50 border border-brand-200 rounded-2xl p-8 md:p-10 text-center">
          <p className="text-lg md:text-xl text-ink-900 leading-relaxed">
            Designed by <strong>{PERSON.name}</strong> — practising clinical dietitian for {PERSON.yearsExperience} years, with {PERSON.clientCount} clients including hundreds with {treatment.title.toLowerCase()}.
          </p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-ink-900">Frequently asked questions</h2>
        </div>
        <div className="space-y-3">
          {treatment.faqs.map((f) => (
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

      {/* ===== Related conditions ===== */}
      {treatment.related.length > 0 && (
        <section className="bg-cream-50 border-y border-ink-900/5">
          <div className="max-w-7xl mx-auto px-4 py-14">
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900 text-center mb-8">Related conditions</h2>
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {treatment.related.map((slug) => {
                const related = getTreatment(slug);
                if (!related) return null;
                return (
                  <Link key={slug} href={related.phpPath} className="group block bg-white rounded-xl border border-ink-900/10 p-5 hover:border-brand-300 hover:shadow-md transition">
                    <h3 className="font-semibold text-ink-900 group-hover:text-brand-600">{related.title}</h3>
                    <p className="mt-1 text-sm text-ink-700 line-clamp-2">{related.h1}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ===== Final CTA ===== */}
      <section className="bg-ink-900 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to manage {treatment.title.toLowerCase()} through diet?</h2>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
            Free 15-minute WhatsApp consultation — no commitment, no payment upfront.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="px-7 py-3 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold transition">
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
