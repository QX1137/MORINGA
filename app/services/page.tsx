import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { JsonLd } from "@/app/components/JsonLd";
import { MoringaMark } from "@/app/components/MoringaMark";
import { SERVICE_LIST } from "@/lib/services";
import { CONTACT, PERSON, SITE, whatsappUrl } from "@/lib/site";
import { breadcrumbSchema, localBusinessSchema, personSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Services | Go Moringa Diet Clinic Gurgaon",
  description: "All services at Go Moringa Diet Clinic, Gurgaon — weight loss, weight gain, figure correction, therapeutic diet, pregnancy diet. 20 years, 10,000+ clients.",
  alternates: { canonical: "/services.php" },
};

const ADDITIONAL_PROGRAMS = [
  "Diabetes Reversal Program",
  "PCOD / PCOS Management",
  "Corporate Health Plans",
  "Skin and Hair Program",
  "7 Day Cleanse Diet Program",
  "Online Trial Diet Plan",
  "Adolescent Obesity Weight Loss Program",
  "Post-Pregnancy Weight Loss Program",
];

export default function ServicesHubPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Services", url: `${SITE.url}/services.php` },
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
              <span className="text-clay">Services</span>
            </nav>
            <span className="hidden md:inline">Five core programmes · plus specialised protocols</span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 lg:px-8 pt-14 md:pt-20 pb-10 text-center">
          <div className="text-eyebrow text-clay mb-5 flex items-center justify-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            Services
            <span className="block h-px w-10 bg-clay" />
          </div>
          <h1 className="font-display tracking-[-0.02em] font-medium text-ink leading-[0.98] mx-auto max-w-4xl" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
            What we work on, <em className="italic-clay">together</em>.
          </h1>
          <p className="mt-6 text-lg text-warm-700 max-w-2xl mx-auto leading-relaxed">
            Five core programmes designed around Indian kitchens and Indian schedules. {PERSON.clientCount} clients across {PERSON.yearsExperience} years.
          </p>
        </div>
      </section>

      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {SERVICE_LIST.map((s, i) => (
              <Link key={s.slug} href={s.phpPath} className="group">
                <div className="relative aspect-[4/3] overflow-hidden border border-ink/15 mb-5">
                  <Image src={s.heroImage} alt={s.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" style={{ filter: "saturate(0.9)" }} sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
                </div>
                <div className="text-eyebrow text-clay mb-2 font-mono">
                  No. {String(i + 1).padStart(2, "0")}
                </div>
                <h2 className="font-display text-2xl font-medium text-ink group-hover:text-clay transition leading-tight">{s.title}</h2>
                <p className="mt-2 text-sm text-warm-700 leading-relaxed line-clamp-3">{s.heroSubhead}</p>
                <div className="mt-3 text-sm text-ink/70 group-hover:text-clay transition flex items-center gap-2">
                  Read programme <span aria-hidden="true">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-dark py-16 md:py-20 border-y border-[#d8c8a8]/60">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            Specialised programmes
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-ink leading-tight mb-8">
            Beyond the five — <em className="italic-clay">protocols</em> we also run.
          </h2>
          <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-[#d8c8a8]/60">
            {ADDITIONAL_PROGRAMS.map((p, i) => (
              <li key={p} className="flex gap-4 py-3 border-b border-[#d8c8a8]/40 text-base text-warm-700">
                <span className="text-eyebrow text-clay shrink-0 w-8 font-mono pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-warm-700">
            For programme-specific pricing or a custom protocol,{" "}
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="text-clay border-b border-clay/40 hover:border-clay">WhatsApp us</a>.
          </p>
        </div>
      </section>

      <section className="bg-ink text-paper py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, #C9A961 0%, transparent 40%)" }} aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <MoringaMark className="size-12 text-clay mx-auto mb-6" />
          <div className="text-eyebrow text-clay mb-4">Not sure which?</div>
          <h2 className="font-display font-medium leading-[1.05] tracking-[-0.02em]" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
            We will <em className="italic" style={{ color: "#C9A961" }}>recommend</em> the fit.
          </h2>
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
