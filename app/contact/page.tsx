import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { JsonLd } from "@/app/components/JsonLd";
import { MoringaMark } from "@/app/components/MoringaMark";
import { CONTACT, REVIEWS, SITE, SOCIAL, whatsappUrl } from "@/lib/site";
import { breadcrumbSchema, localBusinessSchema, personSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Go Moringa | Nutri Diet Clinic In Gurgaon",
  description: `Contact Go Moringa Diet Clinic in Sector 49 Gurugram. Call ${CONTACT.phone}, WhatsApp, or email ${CONTACT.email}. Open Monday-Saturday 10 AM-7 PM.`,
  alternates: { canonical: "/contact.php" },
};

export default function ContactPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Contact", url: `${SITE.url}/contact.php` },
  ]);
  const schemas = [localBusinessSchema(), personSchema(), breadcrumb];

  return (
    <>
      <JsonLd data={schemas} />
      <Header />

      <section className="bg-paper-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
          <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-[#d8c8a8]/80 text-eyebrow text-warm-500">
            <nav aria-label="Breadcrumb">
              <Link href="/" className="hover:text-clay transition">Home</Link>
              <span className="mx-3 opacity-50">/</span>
              <span className="text-clay">Contact</span>
            </nav>
            <span className="hidden md:inline">{CONTACT.hours.days} · {CONTACT.hours.open}–{CONTACT.hours.close}</span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 lg:px-8 pt-14 md:pt-20 pb-10 text-center">
          <div className="text-eyebrow text-clay mb-5 flex items-center justify-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            Reach out
            <span className="block h-px w-10 bg-clay" />
          </div>
          <h1 className="font-display tracking-[-0.02em] font-medium text-ink leading-[0.98] mx-auto max-w-4xl" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
            Three ways to <em className="italic-clay">begin</em>.
          </h1>
          <p className="mt-6 text-lg text-warm-700 max-w-2xl mx-auto leading-relaxed">
            Pick whichever fits you. The first conversation is free, 15 minutes, no commitment.
          </p>
        </div>
      </section>

      {/* 3 channels */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-6 md:gap-8">
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="group block p-7 border border-[#d8c8a8]/70 hover:border-clay transition">
            <div className="text-eyebrow text-clay mb-3">No. 01</div>
            <h2 className="font-display text-2xl font-medium text-ink group-hover:text-clay transition">WhatsApp · fastest</h2>
            <p className="mt-3 text-sm text-warm-700 leading-relaxed">Most clients start here. A few hours response during clinic hours.</p>
            <p className="mt-4 font-display text-lg text-clay border-b border-clay inline-block pb-0.5">{CONTACT.phone}</p>
          </a>

          <a href={`tel:${CONTACT.phoneTel}`} className="group block p-7 border border-[#d8c8a8]/70 hover:border-clay transition">
            <div className="text-eyebrow text-clay mb-3">No. 02</div>
            <h2 className="font-display text-2xl font-medium text-ink group-hover:text-clay transition">Call</h2>
            <p className="mt-3 text-sm text-warm-700 leading-relaxed">Direct line. {CONTACT.hours.days}, {CONTACT.hours.open}–{CONTACT.hours.close}.</p>
            <p className="mt-4 font-display text-lg text-clay border-b border-clay inline-block pb-0.5">{CONTACT.phone}</p>
          </a>

          <a href={`mailto:${CONTACT.email}`} className="group block p-7 border border-[#d8c8a8]/70 hover:border-clay transition">
            <div className="text-eyebrow text-clay mb-3">No. 03</div>
            <h2 className="font-display text-2xl font-medium text-ink group-hover:text-clay transition">Email</h2>
            <p className="mt-3 text-sm text-warm-700 leading-relaxed">For detailed queries that need a longer reply.</p>
            <p className="mt-4 font-display text-base text-clay border-b border-clay inline-block pb-0.5 break-all">{CONTACT.email}</p>
          </a>
        </div>
      </section>

      {/* Clinic details */}
      <section className="bg-paper-dark py-16 md:py-20 border-y border-[#d8c8a8]/60">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <div>
            <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
              <span className="block h-px w-10 bg-clay" />
              Visit the clinic
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-ink leading-tight mb-6">
              Sector 49, <em className="italic-clay">Gurugram</em>.
            </h2>
            <address className="not-italic text-lg text-warm-700 leading-relaxed font-display">
              <strong className="font-medium text-ink block">Go Moringa Nutri Diet &amp; Food Clinic</strong>
              {CONTACT.address.street}<br />
              {CONTACT.address.locality}<br />
              {CONTACT.address.city}, {CONTACT.address.region} {CONTACT.address.postalCode}<br />
              {CONTACT.address.countryName}
            </address>
            <div className="mt-6 border-t border-[#d8c8a8]/60 pt-4 space-y-1">
              <div className="text-eyebrow text-clay">Clinic hours</div>
              <p className="font-display text-base text-ink mt-1">{CONTACT.hours.days} · {CONTACT.hours.open} AM – {CONTACT.hours.close} PM</p>
              <p className="text-sm italic text-warm-500 font-display">Closed Sundays. Online consultation available any day by appointment.</p>
            </div>
          </div>

          <div>
            <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
              <span className="block h-px w-10 bg-clay" />
              Verified on
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-ink leading-tight mb-6">
              Reviews <em className="italic-clay">from clients</em>.
            </h2>
            <div className="space-y-3">
              <a href={REVIEWS.practo.url} target="_blank" rel="noopener noreferrer" className="block p-4 border border-[#d8c8a8]/70 hover:border-clay transition">
                <div className="font-display text-xl font-medium text-ink">Practo · {REVIEWS.practo.rating}★</div>
                <div className="text-sm text-warm-500 mt-1">{REVIEWS.practo.count} verified patient reviews</div>
              </a>
              <a href={REVIEWS.justdial.url} target="_blank" rel="noopener noreferrer" className="block p-4 border border-[#d8c8a8]/70 hover:border-clay transition">
                <div className="font-display text-xl font-medium text-ink">Justdial · {REVIEWS.justdial.rating}★</div>
                <div className="text-sm text-warm-500 mt-1">{REVIEWS.justdial.count} ratings &amp; reviews</div>
              </a>
            </div>
            <div className="mt-6 border-t border-[#d8c8a8]/60 pt-4">
              <div className="text-eyebrow text-clay mb-2">Follow on social</div>
              <div className="flex flex-wrap gap-x-5 gap-y-1.5 font-display text-base">
                <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="text-ink hover:text-clay transition">Instagram</a>
                <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="text-ink hover:text-clay transition">Facebook</a>
                <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="text-ink hover:text-clay transition">YouTube</a>
                <a href={SOCIAL.twitter} target="_blank" rel="noopener noreferrer" className="text-ink hover:text-clay transition">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
