import Image from "next/image";
import Link from "next/link";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { JsonLd } from "./JsonLd";
import { MoringaMark } from "./MoringaMark";
import { RelatedReading } from "./RelatedReading";
import { AuthorBioBlock, MedicalDisclaimer, LastUpdated } from "./aeo";
import type { ServiceData } from "@/lib/services";
import { getService } from "@/lib/services";
import { CONTACT, PERSON, REVIEWS, SITE, whatsappUrl } from "@/lib/site";
import {
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
  personSchema,
} from "@/lib/schema";

const LAST_REVIEWED = "May 2026";

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

      {/* ═══════════════════════════════════════════════ HERO */}
      <section className="bg-paper-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
          <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-[#d8c8a8]/80 text-eyebrow text-warm-500">
            <nav aria-label="Breadcrumb">
              <Link href="/" className="hover:text-clay transition">Home</Link>
              <span className="mx-3 opacity-50">/</span>
              <Link href="/services.php" className="hover:text-clay transition">Services</Link>
              <span className="mx-3 opacity-50">/</span>
              <span className="text-clay">{service.title}</span>
            </nav>
            <span className="hidden md:inline">Programme · {service.title}</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 md:pt-16 pb-10 md:pb-14 grid md:grid-cols-12 gap-x-8 gap-y-12 items-start">
          <div className="md:col-span-7">
            <LastUpdated date={LAST_REVIEWED} reviewer={PERSON.name} />
            <div className="text-eyebrow text-clay mb-5 flex items-center gap-3">
              <span className="block h-px w-10 bg-clay" />
              Programme
            </div>
            <h1
              className="font-display tracking-[-0.02em] font-medium text-ink leading-[0.98]"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
            >
              {service.h1.split(" ").map((word, i, arr) => {
                const isLast = i === arr.length - 1;
                const lower = word.toLowerCase();
                return (
                  <span key={i}>
                    {(lower === "in" || lower === "for" || lower === "and") ? (
                      <em className="italic-clay">{word}</em>
                    ) : (
                      word
                    )}
                    {!isLast && " "}
                  </span>
                );
              })}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-[1.65] text-warm-700">
              {service.heroSubhead}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 text-base font-medium text-ink">
                <span className="relative pb-1 border-b-2 border-clay transition-all group-hover:border-b-[3px]">
                  Begin this programme
                </span>
                <span className="text-clay" aria-hidden="true">→</span>
              </a>
              <Link href="/book-an-appointment.php" className="text-base font-medium text-ink/70 hover:text-ink transition">
                or book a consultation
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-eyebrow text-warm-500">
              <span>★ {REVIEWS.practo.rating} Practo ({REVIEWS.practo.count})</span>
              <span>{PERSON.yearsExperience}+ years · {PERSON.clientCount} clients</span>
            </div>
          </div>

          <div className="md:col-span-5 md:pt-4">
            <figure>
              <figcaption className="text-eyebrow text-clay mb-4 flex items-center gap-3">
                <span className="block h-px w-6 bg-clay" />
                {service.title} · programme reference
              </figcaption>
              <div className="relative aspect-[4/5] overflow-hidden border border-ink/20">
                <Image
                  src={service.heroImage}
                  alt={service.h1}
                  fill
                  priority
                  className="object-cover"
                  style={{ filter: "saturate(0.9) contrast(1.03)" }}
                  sizes="(min-width: 768px) 40vw, 90vw"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <div className="font-display">
                  <div className="text-base font-medium text-ink">{PERSON.name}</div>
                  <div className="text-sm italic text-clay">Clinical Dietitian</div>
                </div>
                <MoringaMark className="size-7 text-clay opacity-70" />
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ INTRO LEAD with drop cap */}
      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-eyebrow text-clay mb-4 flex items-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            On this programme
          </div>
          <div className="text-lg leading-[1.7] text-warm-700">
            <p>
              <span className="font-display text-clay float-left mr-3 leading-[0.85]" style={{ fontSize: "5rem", fontWeight: 500 }}>
                {service.introLead.charAt(0)}
              </span>
              {service.introLead.slice(1)}
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ APPROACH STEPS */}
      <section className="bg-paper-dark py-16 md:py-20 border-y border-[#d8c8a8]/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            The 5-step approach
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-ink leading-tight mb-10">
            The same protocol used <em className="italic-clay">across 10,000+ cases</em>.
          </h2>
          <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-x-10">
            {service.approach.map((step) => (
              <li key={step.step} className="relative">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="font-display text-clay leading-none" style={{ fontSize: "3rem", fontWeight: 500 }}>
                    {step.step}
                  </span>
                  <span className="text-eyebrow text-warm-500 font-mono">
                    Step {String(step.step).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-xl md:text-2xl font-medium text-ink leading-tight">{step.title}</h3>
                <p className="mt-2 text-base text-warm-700 leading-[1.65]">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ PILLARS (editorial long-form) */}
      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            What makes our {service.title.toLowerCase()} plans different
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-ink leading-tight mb-10">
            Not <em className="italic-clay">a programme</em>. A practice.
          </h2>
          <div className="space-y-12">
            {service.pillars.map((p, i) => (
              <article key={p.title} className="grid grid-cols-12 gap-x-6 gap-y-3 border-t border-[#d8c8a8]/60 pt-8">
                <div className="col-span-12 md:col-span-3">
                  <div className="text-eyebrow text-warm-500 font-mono">
                    No. {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <h3 className="font-display text-2xl md:text-3xl font-medium text-ink leading-tight">{p.title}</h3>
                  <p className="mt-3 text-base text-warm-700 leading-[1.7]">{p.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ AUDIENCE + INCLUDES */}
      <section className="bg-paper-dark py-16 md:py-20 border-y border-[#d8c8a8]/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
              <span className="block h-px w-10 bg-clay" />
              Who this is for
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-medium text-ink leading-tight">
              Designed <em className="italic-clay">for</em>.
            </h2>
            <ul className="mt-6 border-t border-[#d8c8a8]/60">
              {service.audienceList.map((item, i) => (
                <li key={item} className="flex gap-4 py-3 border-b border-[#d8c8a8]/40">
                  <span className="text-eyebrow text-warm-500 shrink-0 w-8 font-mono pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base text-warm-700 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
              <span className="block h-px w-10 bg-clay" />
              What is included
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-medium text-ink leading-tight">
              In <em className="italic-clay">every plan</em>.
            </h2>
            <ul className="mt-6 border-t border-[#d8c8a8]/60">
              {service.includes.map((item, i) => (
                <li key={item} className="flex gap-4 py-3 border-b border-[#d8c8a8]/40">
                  <span className="text-eyebrow text-clay shrink-0 w-8 font-mono pt-0.5">
                    ·{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base text-warm-700 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ FAQ */}
      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            Before you book
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-ink leading-tight">
            Frequently asked, <em className="italic-clay">honestly answered</em>.
          </h2>

          <div className="mt-10 space-y-0">
            {service.faqs.map((f, i) => (
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

      {/* ═══════════════════════════════════════════════ AUTHOR BIO */}
      <section className="bg-paper">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AuthorBioBlock reviewedDate={LAST_REVIEWED} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ DISCLAIMER */}
      <section className="bg-paper">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <MedicalDisclaimer />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ RELATED SERVICES */}
      {service.relatedServices.length > 0 && (
        <section className="bg-paper-dark py-16 border-y border-[#d8c8a8]/60">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
              <span className="block h-px w-10 bg-clay" />
              Related programmes
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-medium text-ink leading-tight mb-8">
              Often <em className="italic-clay">paired with</em>.
            </h2>
            <ol className="border-t border-[#d8c8a8]/80">
              {service.relatedServices.map((slug, i) => {
                const related = getService(slug);
                if (!related) return null;
                return (
                  <li key={slug} className="group">
                    <Link href={related.phpPath} className="flex items-baseline gap-5 py-5 border-b border-[#d8c8a8]/60 transition hover:bg-paper px-2 -mx-2">
                      <span className="text-eyebrow text-warm-500 shrink-0 w-8 font-mono">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1">
                        <h3 className="font-display text-xl font-medium text-ink group-hover:text-clay transition">{related.title}</h3>
                        <p className="mt-1 text-sm text-warm-700 line-clamp-1">{related.heroSubhead}</p>
                      </div>
                      <span className="text-clay opacity-0 group-hover:opacity-100 transition" aria-hidden="true">→</span>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════ RELATED READING (cross-cluster) */}
      <RelatedReading slug={service.slug} cluster="service" />

      {/* ═══════════════════════════════════════════════ CLOSING CTA */}
      <section className="bg-ink text-paper py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, #C9A961 0%, transparent 40%)" }} aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <MoringaMark className="size-12 text-clay mx-auto mb-6" />
          <div className="text-eyebrow text-clay mb-4">Next step</div>
          <h2 className="font-display font-medium leading-[1.05] tracking-[-0.02em]" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
            Start your {service.title.toLowerCase()} <em className="italic" style={{ color: "#C9A961" }}>plan</em>.
          </h2>
          <p className="mt-6 text-base text-paper/85 leading-relaxed max-w-2xl mx-auto">
            Fifteen minutes on WhatsApp — no commitment, no payment upfront.
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
