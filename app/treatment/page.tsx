import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { JsonLd } from "@/app/components/JsonLd";
import { TREATMENT_LIST } from "@/lib/treatments";
import { CONTACT, PERSON, REVIEWS, SITE, whatsappUrl } from "@/lib/site";
import {
  breadcrumbSchema,
  localBusinessSchema,
  personSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Treatment Conditions We Manage | Go Moringa Diet Clinic Gurgaon",
  description: "20+ conditions managed through medical nutrition therapy at Go Moringa Diet Clinic, Gurgaon — diabetes, PCOS, thyroid, hypertension, heart disease, cholesterol, gout, osteoporosis and more.",
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

      <section className="relative bg-brand-gradient text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,white,transparent_60%)]" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto px-4 py-16 md:py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Conditions We Manage</h1>
          <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            20+ chronic conditions managed through medical nutrition therapy by Dt. Priyatama Srivastava across {PERSON.yearsExperience} years and {PERSON.clientCount} clients.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <p className="text-ink-700 max-w-3xl mx-auto leading-relaxed">
            Every condition listed below has a specific dietary protocol developed through two decades of clinical practice. Each plan is customised to your medical history, current medications, and lab values. Diet runs alongside your physician&rsquo;s care — not in opposition.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TREATMENT_LIST.map((t) => (
            <Link
              key={t.slug}
              href={t.phpPath}
              className="group block bg-white border border-ink-900/10 rounded-2xl overflow-hidden hover:shadow-lg hover:border-brand-300 transition"
            >
              <div className="relative aspect-[16/10] bg-cream-100">
                <Image src={t.heroImage} alt={t.title} fill className="object-cover group-hover:scale-105 transition duration-500" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-semibold text-ink-900 group-hover:text-brand-600 transition">{t.title}</h2>
                <p className="mt-2 text-sm text-ink-700 line-clamp-3">{t.introLead}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-ink-900 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Have a condition not listed?</h2>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
            We work with many conditions beyond this list. WhatsApp us your case and we will tell you honestly whether dietary intervention is appropriate for you.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="px-7 py-3 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold transition">
              WhatsApp Us
            </a>
            <a href={`tel:${CONTACT.phoneTel}`} className="px-7 py-3 rounded-full bg-white text-ink-900 hover:bg-cream-100 font-semibold transition">
              Call {CONTACT.phone}
            </a>
          </div>
          <p className="mt-6 text-sm text-white/60">
            Rated {REVIEWS.practo.rating} on Practo ({REVIEWS.practo.count} reviews) &middot; {REVIEWS.justdial.rating} on Justdial ({REVIEWS.justdial.count} reviews)
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
