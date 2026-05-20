import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { JsonLd } from "@/app/components/JsonLd";
import { SERVICE_LIST } from "@/lib/services";
import { CONTACT, PERSON, REVIEWS, SITE, whatsappUrl } from "@/lib/site";
import { breadcrumbSchema, localBusinessSchema, personSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Services | Go Moringa Diet Clinic Gurgaon",
  description: "All services offered at Go Moringa Diet Clinic, Gurgaon — weight loss, weight gain, figure correction, therapeutic diet, pregnancy diet. 20 years experience, 10,000+ clients.",
  alternates: { canonical: "/services.php" },
};

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

      <section className="relative bg-brand-gradient text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,white,transparent_60%)]" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto px-4 py-16 md:py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Our Services</h1>
          <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            Five core programs designed to fit Indian kitchens and Indian schedules. Customised plans by Dt. Priyatama Srivastava.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-14">
        <p className="text-lg text-ink-700 leading-relaxed text-center max-w-3xl mx-auto mb-10">
          Each service is built around the same core principle — personalised nutrition that fits how Indian families actually eat, calibrated for your specific goal or medical condition. {PERSON.clientCount} clients across {PERSON.yearsExperience} years.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_LIST.map((s) => (
            <Link key={s.slug} href={s.phpPath} className="group block bg-white border border-ink-900/10 rounded-2xl overflow-hidden hover:shadow-lg hover:border-brand-300 transition">
              <div className="relative aspect-[16/10] bg-cream-100">
                <Image src={s.heroImage} alt={s.title} fill className="object-cover group-hover:scale-105 transition duration-500" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-semibold text-ink-900 group-hover:text-brand-600 transition">{s.title}</h2>
                <p className="mt-2 text-sm text-ink-700 leading-relaxed line-clamp-3">{s.heroSubhead}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-brand-600 text-sm font-medium">
                  Learn more <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-cream-50 border-y border-ink-900/5">
        <div className="max-w-5xl mx-auto px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold text-ink-900 text-center">Additional specialised programs</h2>
          <p className="mt-3 text-ink-700 text-center max-w-3xl mx-auto">
            Within and beyond the five core services, Priyatama also offers specialised programs:
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {[
              "Diabetes Reversal Program",
              "PCOD / PCOS Management",
              "Corporate Health Plans",
              "Skin and Hair Program",
              "7 Day Cleanse Diet Program",
              "Online Trial Diet Plan",
              "Adolescent Obesity Weight Loss Program",
              "Post-Pregnancy Weight Loss Program",
            ].map((item) => (
              <li key={item} className="flex gap-3 bg-white border border-ink-900/10 rounded-xl p-4">
                <span className="text-brand-600 font-bold" aria-hidden="true">✓</span>
                <span className="text-ink-900">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-sm text-ink-700">
            For program-specific pricing or to discuss a custom protocol, <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="text-brand-700 underline">WhatsApp us</a>.
          </p>
        </div>
      </section>

      <section className="bg-ink-900 text-white">
        <div className="max-w-4xl mx-auto px-4 py-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Not sure which service fits?</h2>
          <p className="mt-3 text-white/80">WhatsApp us your goal — we will recommend the right program in a 15-minute call.</p>
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
