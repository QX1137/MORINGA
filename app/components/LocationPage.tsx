import Image from "next/image";
import Link from "next/link";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { JsonLd } from "./JsonLd";
import { MoringaMark } from "./MoringaMark";
import { RelatedReading } from "./RelatedReading";
import { AuthorBioBlock, LastUpdated, MedicalDisclaimer } from "./aeo";
import type { LocationData } from "@/lib/locations";
import { CONTACT, PERSON, REVIEWS, SITE, whatsappUrl } from "@/lib/site";
import {
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
  personSchema,
} from "@/lib/schema";
import { PHOTOS } from "@/lib/images";

const LAST_REVIEWED = "May 2026";

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

      {/* ═══════════════════════════════════════════════ HERO */}
      <section className="bg-paper-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
          <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-[#d8c8a8]/80 text-eyebrow text-warm-500">
            <nav aria-label="Breadcrumb">
              <Link href="/" className="hover:text-clay transition">Home</Link>
              <span className="mx-3 opacity-50">/</span>
              <span className="text-clay">{location.title}</span>
            </nav>
            <span className="hidden md:inline">Locality · {location.city}</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 md:pt-16 pb-10 md:pb-14 grid md:grid-cols-12 gap-x-8 gap-y-12 items-start">
          <div className="md:col-span-7">
            <LastUpdated date={LAST_REVIEWED} reviewer={PERSON.name} />
            <div className="text-eyebrow text-clay mb-5 flex items-center gap-3">
              <span className="block h-px w-10 bg-clay" />
              {location.city} · Clinical nutrition
            </div>
            <h1
              className="font-display tracking-[-0.02em] font-medium text-ink leading-[0.98]"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
            >
              {location.h1.split(" ").map((word, i, arr) => {
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
            <p className="mt-7 max-w-2xl text-lg leading-[1.65] text-warm-700">{location.heroSubhead}</p>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 text-base font-medium text-ink">
                <span className="relative pb-1 border-b-2 border-clay transition-all group-hover:border-b-[3px]">
                  Begin a consultation
                </span>
                <span className="text-clay" aria-hidden="true">→</span>
              </a>
              <Link href={`tel:${CONTACT.phoneTel}`} className="text-base font-medium text-ink/70 hover:text-ink transition">
                or call {CONTACT.phone}
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
                {location.city} · the clinic context
              </figcaption>
              <div className="relative aspect-[4/5] overflow-hidden border border-ink/20">
                <Image
                  src={location.heroImage}
                  alt={location.h1}
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
            For clients in {location.city}
          </div>
          <div className="text-lg leading-[1.7] text-warm-700">
            <p>
              <span className="font-display text-clay float-left mr-3 leading-[0.85]" style={{ fontSize: "5rem", fontWeight: 500 }}>
                {location.introLead.charAt(0)}
              </span>
              {location.introLead.slice(1)}
            </p>
            {location.travelDistance && (
              <p className="mt-5 italic text-warm-500 font-display border-l-2 border-clay pl-5 text-base">
                {location.travelDistance}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ WHY PICK US */}
      <section className="bg-paper-dark py-16 md:py-20 border-y border-[#d8c8a8]/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            Why {location.city} clients pick us
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-ink leading-tight mb-10">
            What we <em className="italic-clay">offer</em> here.
          </h2>
          <div className="grid md:grid-cols-2 gap-y-10 md:gap-x-10">
            {location.whyPickUs.map((p, i) => (
              <article key={p.title} className="border-t border-[#d8c8a8]/80 pt-6">
                <div className="text-eyebrow text-warm-500 mb-2 font-mono">
                  No. {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-xl md:text-2xl font-medium text-ink leading-tight">{p.title}</h3>
                <p className="mt-3 text-base text-warm-700 leading-[1.7]">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ LOCAL CONTEXT */}
      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            {location.city}-specific patterns
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-ink leading-tight">
            The cases <em className="italic-clay">we see</em> from {location.city}.
          </h2>
          <div className="mt-10 space-y-10">
            {location.localContext.map((p, i) => (
              <article key={p.title} className="grid grid-cols-12 gap-x-6 gap-y-3 border-t border-[#d8c8a8]/60 pt-6">
                <div className="col-span-12 md:col-span-3">
                  <div className="text-eyebrow text-warm-500 font-mono">No. {String(i + 1).padStart(2, "0")}</div>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <h3 className="font-display text-xl md:text-2xl font-medium text-ink leading-tight">{p.title}</h3>
                  <p className="mt-3 text-base text-warm-700 leading-[1.7]">{p.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ AREAS SERVED */}
      <section className="bg-paper-dark py-16 md:py-20 border-y border-[#d8c8a8]/60">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            Service area
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-ink leading-tight mb-8">
            Areas we serve <em className="italic-clay">in {location.city}</em>.
          </h2>
          <div className="flex flex-wrap gap-2">
            {location.servesAreas.map((area) => (
              <span key={area} className="px-3 py-1.5 bg-paper border border-[#d8c8a8]/70 text-sm text-warm-700">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Botanical anchor between sections */}
      <section className="bg-paper py-12">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <figure className="text-center">
            <div className="relative aspect-[3/2] max-w-md mx-auto overflow-hidden border border-clay/40">
              <Image src={PHOTOS.moringaLeaves.url} alt={PHOTOS.moringaLeaves.alt} fill className="object-cover" sizes="(min-width: 768px) 448px, 100vw" />
            </div>
            <figcaption className="mt-3 text-eyebrow text-warm-500">
              Moringa oleifera · the namesake leaf
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ FAQ */}
      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            For {location.city} clients
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-ink leading-tight">
            Questions, <em className="italic-clay">honestly answered</em>.
          </h2>

          <div className="mt-10 space-y-0">
            {location.faqs.map((f, i) => (
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

      {/* ═══════════════════════════════════════════════ RELATED READING (cross-cluster) */}
      <RelatedReading slug={location.slug} cluster="location" />

      {/* ═══════════════════════════════════════════════ CTA */}
      <section className="bg-ink text-paper py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, #C9A961 0%, transparent 40%)" }} aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <MoringaMark className="size-12 text-clay mx-auto mb-6" />
          <div className="text-eyebrow text-clay mb-4">Begin</div>
          <h2 className="font-display font-medium leading-[1.05] tracking-[-0.02em]" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
            Start your plan from <em className="italic" style={{ color: "#C9A961" }}>{location.city}</em>.
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
