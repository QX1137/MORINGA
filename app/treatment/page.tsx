import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { JsonLd } from "@/app/components/JsonLd";
import { MoringaMark } from "@/app/components/MoringaMark";
import { TREATMENT_LIST } from "@/lib/treatments";
import { CONTACT, PERSON, REVIEWS, SITE, whatsappUrl } from "@/lib/site";
import { breadcrumbSchema, localBusinessSchema, personSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Treatment Conditions We Manage | Go Moringa Diet Clinic Gurgaon",
  description: "20+ conditions managed through medical nutrition therapy at Go Moringa Diet Clinic, Gurgaon — diabetes, PCOS, thyroid, hypertension, heart, cholesterol, gout, osteoporosis and more.",
  alternates: { canonical: "/treatment.php" },
};

export default function TreatmentHubPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Treatment", url: `${SITE.url}/treatment.php` },
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
              <span className="text-clay">Treatment</span>
            </nav>
            <span className="hidden md:inline">20 conditions · clinical protocols</span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 lg:px-8 pt-14 md:pt-20 pb-10 text-center">
          <div className="text-eyebrow text-clay mb-5 flex items-center justify-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            Conditions
            <span className="block h-px w-10 bg-clay" />
          </div>
          <h1 className="font-display tracking-[-0.02em] font-medium text-ink leading-[0.98] mx-auto max-w-4xl" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
            Twenty chronic conditions, <em className="italic-clay">one protocol per body</em>.
          </h1>
          <p className="mt-6 text-lg text-warm-700 max-w-3xl mx-auto leading-relaxed">
            Each protocol below documents the dietary approach, foods we include and avoid, a sample Indian-meal day, expected timeline, and FAQs — all answered by a clinical dietitian with {PERSON.yearsExperience} years and {PERSON.clientCount} clients of experience.
          </p>
        </div>
      </section>

      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {TREATMENT_LIST.map((t, i) => (
              <Link key={t.slug} href={t.phpPath} className="group">
                <div className="relative aspect-[4/3] overflow-hidden border border-ink/15 mb-5">
                  <Image src={t.heroImage} alt={t.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" style={{ filter: "saturate(0.9)" }} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                </div>
                <div className="text-eyebrow text-clay mb-2 font-mono">
                  No. {String(i + 1).padStart(2, "0")}
                </div>
                <h2 className="font-display text-xl md:text-2xl font-medium text-ink group-hover:text-clay transition leading-tight">{t.title}</h2>
                <p className="mt-2 text-sm text-warm-700 line-clamp-3 leading-relaxed">{t.introLead}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, #C9A961 0%, transparent 40%)" }} aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <MoringaMark className="size-12 text-clay mx-auto mb-6" />
          <div className="text-eyebrow text-clay mb-4">Not in the list?</div>
          <h2 className="font-display font-medium leading-[1.05] tracking-[-0.02em]" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
            We will tell you <em className="italic" style={{ color: "#C9A961" }}>honestly</em>.
          </h2>
          <p className="mt-6 text-base text-paper/85 leading-relaxed max-w-2xl mx-auto">
            We work with many conditions beyond this list. WhatsApp your case and we will tell you honestly whether dietary intervention is appropriate.
          </p>
          <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4 justify-center items-center">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 text-base font-medium text-paper">
              <span className="relative pb-1 border-b-2 border-clay transition-all group-hover:border-b-[3px]">
                Discuss your case
              </span>
              <span className="text-clay" aria-hidden="true">→</span>
            </a>
            <a href={`tel:${CONTACT.phoneTel}`} className="text-base font-medium text-paper/75 hover:text-paper transition">
              or call {CONTACT.phone}
            </a>
          </div>
          <p className="mt-6 text-eyebrow text-paper/60">
            ★ {REVIEWS.practo.rating} Practo ({REVIEWS.practo.count}) · ★ {REVIEWS.justdial.rating} Justdial ({REVIEWS.justdial.count})
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
