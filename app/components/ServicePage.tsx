import Image from "next/image";
import Link from "next/link";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { JsonLd } from "./JsonLd";
import type { ServiceData } from "@/lib/services";
import { getService } from "@/lib/services";
import { CONTACT, PERSON, REVIEWS, SITE, whatsappUrl } from "@/lib/site";
import {
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
  personSchema,
} from "@/lib/schema";

function serviceSchema(s: ServiceData) {
  return {
    "@context": "https://schema.org",
    "@type": s.serviceType,
    "@id": `${SITE.url}${s.phpPath}#service`,
    name: s.h1,
    description: s.metaDescription,
    serviceType: s.title,
    provider: { "@id": `${SITE.url}/#business` },
    areaServed: [
      { "@type": "City", name: "Gurugram" },
      { "@type": "City", name: "Delhi" },
      { "@type": "City", name: "Noida" },
      { "@type": "City", name: "Faridabad" },
      { "@type": "Country", name: "India" },
    ],
    url: `${SITE.url}${s.phpPath}`,
  };
}

export function ServicePage({ service }: { service: ServiceData }) {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Services", url: `${SITE.url}/services.php` },
    { name: service.title, url: `${SITE.url}${service.phpPath}` },
  ]);

  const schemas = [
    localBusinessSchema(),
    personSchema(),
    serviceSchema(service),
    faqSchema(service.faqs),
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
              <Link href="/services.php" className="hover:text-white">Services</Link>
              <span aria-hidden="true"> / </span>
              <span className="text-white">{service.title}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">{service.h1}</h1>
            <p className="mt-4 text-lg text-white/90 max-w-xl leading-relaxed">{service.heroSubhead}</p>
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
            <Image
              src={service.heroImage}
              alt={service.h1}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* ===== Intro lead ===== */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <p className="text-xl text-ink-900 leading-relaxed">{service.introLead}</p>
      </section>

      {/* ===== Approach steps ===== */}
      <section className="bg-cream-50 border-y border-ink-900/5">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-ink-900">Our 5-Step Approach</h2>
            <p className="mt-3 text-ink-700 max-w-2xl mx-auto">
              The same protocol that has guided 10,000+ clients across Gurgaon and Delhi NCR.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.approach.map((step) => (
              <article key={step.step} className="bg-white rounded-2xl p-6 border border-ink-900/10 shadow-sm">
                <div className="inline-flex items-center justify-center size-12 rounded-full bg-brand-100 text-brand-700 font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink-900">{step.title}</h3>
                <p className="mt-2 text-sm text-ink-700 leading-relaxed">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Content pillars ===== */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-ink-900">What Makes Our {service.title} Plans Different</h2>
        </div>
        <div className="space-y-8">
          {service.pillars.map((p) => (
            <article key={p.title} className="border-l-4 border-brand-500 pl-5 py-1">
              <h3 className="text-xl font-semibold text-ink-900">{p.title}</h3>
              <p className="mt-2 text-ink-700 leading-relaxed">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== Who this is for + what's included ===== */}
      <section className="bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900">Who this is for</h2>
            <ul className="mt-5 space-y-3">
              {service.audienceList.map((item) => (
                <li key={item} className="flex gap-3 text-ink-900">
                  <span className="text-brand-600 font-bold mt-0.5" aria-hidden="true">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900">What&rsquo;s included</h2>
            <ul className="mt-5 space-y-3">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-3 text-ink-900">
                  <span className="text-brand-600 font-bold mt-0.5" aria-hidden="true">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Trust line ===== */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-brand-50 border border-brand-200 rounded-2xl p-8 md:p-10 text-center">
          <p className="text-lg md:text-xl text-ink-900 leading-relaxed">
            Designed by <strong>{PERSON.name}</strong> — practising clinical dietitian in Gurgaon for {PERSON.yearsExperience} years, with {PERSON.clientCount} clients across India and worldwide.
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
          <h2 className="text-3xl md:text-4xl font-bold text-ink-900">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-3">
          {service.faqs.map((f) => (
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

      {/* ===== Related services ===== */}
      {service.relatedServices.length > 0 && (
        <section className="bg-cream-50 border-y border-ink-900/5">
          <div className="max-w-7xl mx-auto px-4 py-14">
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900 text-center mb-8">Related Services</h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {service.relatedServices.map((slug) => {
                const related = getService(slug);
                if (!related) return null;
                return (
                  <Link
                    key={slug}
                    href={related.phpPath}
                    className="group block bg-white rounded-xl border border-ink-900/10 p-5 hover:border-brand-300 hover:shadow-md transition"
                  >
                    <h3 className="font-semibold text-ink-900 group-hover:text-brand-600">{related.title}</h3>
                    <p className="mt-1 text-sm text-ink-700 line-clamp-2">{related.heroSubhead}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold">Ready to start your {service.title.toLowerCase()} journey?</h2>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
            Free 15-minute WhatsApp consultation to understand your goal — no commitment, no payment upfront.
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
