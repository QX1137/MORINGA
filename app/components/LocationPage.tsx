import Image from "next/image";
import Link from "next/link";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { JsonLd } from "./JsonLd";
import type { LocationData } from "@/lib/locations";
import { CONTACT, PERSON, REVIEWS, SITE, whatsappUrl } from "@/lib/site";
import {
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
  personSchema,
} from "@/lib/schema";

export function LocationPage({ location }: { location: LocationData }) {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: location.title, url: `${SITE.url}${location.phpPath}` },
  ]);

  const schemas = [
    localBusinessSchema(),
    personSchema(),
    faqSchema(location.faqs),
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
              <span className="text-white">{location.title}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">{location.h1}</h1>
            <p className="mt-4 text-lg text-white/90 max-w-xl leading-relaxed">{location.heroSubhead}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-white text-brand-700 font-semibold hover:bg-cream-100 transition"
              >
                Free WhatsApp Consultation
              </a>
              <Link
                href="/book-an-appointment.php"
                className="px-6 py-3 rounded-full bg-brand-900 text-white font-semibold hover:bg-ink-900 transition"
              >
                Book Appointment
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/80">
              <span>★ {REVIEWS.practo.rating} on Practo ({REVIEWS.practo.count})</span>
              <span>{PERSON.yearsExperience}+ years &middot; {PERSON.clientCount} clients</span>
            </div>
          </div>
          <div className="relative aspect-[16/11] md:aspect-square rounded-2xl overflow-hidden bg-white/10 shadow-2xl">
            <Image src={location.heroImage} alt={location.h1} fill priority className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
          </div>
        </div>
      </section>

      {/* ===== Intro lead ===== */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <p className="text-xl text-ink-900 leading-relaxed">{location.introLead}</p>
        {location.travelDistance && (
          <p className="mt-4 text-base text-ink-700 italic">{location.travelDistance}</p>
        )}
      </section>

      {/* ===== Why pick us ===== */}
      <section className="bg-cream-50 border-y border-ink-900/5">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-ink-900">Why choose Go Moringa for {location.city} clients</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {location.whyPickUs.map((p) => (
              <article key={p.title} className="bg-white rounded-2xl p-6 border border-ink-900/10 shadow-sm">
                <h3 className="text-xl font-semibold text-ink-900">{p.title}</h3>
                <p className="mt-2 text-ink-700 leading-relaxed">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Local context ===== */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-ink-900">{location.city}-specific patterns we manage</h2>
        </div>
        <div className="space-y-8">
          {location.localContext.map((p) => (
            <article key={p.title} className="border-l-4 border-brand-500 pl-5 py-1">
              <h3 className="text-xl font-semibold text-ink-900">{p.title}</h3>
              <p className="mt-2 text-ink-700 leading-relaxed">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== Areas served ===== */}
      <section className="bg-cream-100">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-ink-900 text-center mb-8">
            Areas we serve in {location.city}
          </h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {location.servesAreas.map((area) => (
              <span key={area} className="px-3 py-1.5 bg-white border border-ink-900/10 rounded-full text-sm text-ink-700">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Trust line ===== */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-brand-50 border border-brand-200 rounded-2xl p-8 md:p-10 text-center">
          <p className="text-lg md:text-xl text-ink-900 leading-relaxed">
            Designed by <strong>{PERSON.name}</strong> — practising clinical dietitian for {PERSON.yearsExperience} years, with {PERSON.clientCount} clients across India and worldwide.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 justify-center text-sm text-ink-700">
            <a href={REVIEWS.practo.url} target="_blank" rel="noopener noreferrer" className="hover:text-brand-700">★ {REVIEWS.practo.rating} Practo ({REVIEWS.practo.count} reviews)</a>
            <a href={REVIEWS.justdial.url} target="_blank" rel="noopener noreferrer" className="hover:text-brand-700">★ {REVIEWS.justdial.rating} Justdial ({REVIEWS.justdial.count} reviews)</a>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-ink-900">Common questions from {location.city}</h2>
        </div>
        <div className="space-y-3">
          {location.faqs.map((f) => (
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

      {/* ===== Final CTA ===== */}
      <section className="bg-ink-900 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to start in {location.city}?</h2>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
            Free 15-minute WhatsApp consultation — no commitment, no payment upfront.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold transition"
            >
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="px-7 py-3 rounded-full bg-white text-ink-900 hover:bg-cream-100 font-semibold transition"
            >
              Call {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
