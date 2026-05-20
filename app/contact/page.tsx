import type { Metadata } from "next";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { JsonLd } from "@/app/components/JsonLd";
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

      <section className="relative bg-brand-gradient text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,white,transparent_60%)]" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto px-4 py-16 md:py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Contact Us</h1>
          <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            Three ways to reach Go Moringa Diet Clinic — pick whichever fits you.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-3 gap-6">
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="group block bg-white border border-ink-900/10 rounded-2xl p-6 hover:border-brand-300 hover:shadow-md transition">
            <div className="size-12 rounded-full bg-brand-100 flex items-center justify-center text-2xl" style={{ backgroundColor: "#25D366" }}>
              <svg viewBox="0 0 24 24" fill="white" className="size-7" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-ink-900 group-hover:text-brand-600">WhatsApp (fastest)</h2>
            <p className="mt-2 text-sm text-ink-700">Click to start a conversation. We respond during clinic hours.</p>
            <p className="mt-3 text-brand-700 font-medium">{CONTACT.phone}</p>
          </a>

          <a href={`tel:${CONTACT.phoneTel}`} className="group block bg-white border border-ink-900/10 rounded-2xl p-6 hover:border-brand-300 hover:shadow-md transition">
            <div className="size-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-700">
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-7" aria-hidden="true">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.24 1.05l-2.21 2.16z" />
              </svg>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-ink-900 group-hover:text-brand-600">Call</h2>
            <p className="mt-2 text-sm text-ink-700">Direct call during clinic hours, Monday to Saturday.</p>
            <p className="mt-3 text-brand-700 font-medium">{CONTACT.phone}</p>
          </a>

          <a href={`mailto:${CONTACT.email}`} className="group block bg-white border border-ink-900/10 rounded-2xl p-6 hover:border-brand-300 hover:shadow-md transition">
            <div className="size-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-700">
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-7" aria-hidden="true">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-ink-900 group-hover:text-brand-600">Email</h2>
            <p className="mt-2 text-sm text-ink-700">For detailed queries that need a full reply.</p>
            <p className="mt-3 text-brand-700 font-medium break-all">{CONTACT.email}</p>
          </a>
        </div>
      </section>

      <section className="bg-cream-50 border-y border-ink-900/5">
        <div className="max-w-5xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900">Visit the clinic</h2>
            <address className="not-italic mt-4 text-ink-700 leading-relaxed text-lg">
              <strong className="block text-ink-900">Go Moringa Nutri Diet &amp; Food Clinic</strong>
              {CONTACT.address.street}<br />
              {CONTACT.address.locality}<br />
              {CONTACT.address.city}, {CONTACT.address.region} {CONTACT.address.postalCode}<br />
              {CONTACT.address.countryName}
            </address>
            <div className="mt-5">
              <h3 className="font-semibold text-ink-900">Clinic hours</h3>
              <p className="text-ink-700 mt-1">{CONTACT.hours.days}, {CONTACT.hours.open} AM - {CONTACT.hours.close} PM</p>
              <p className="text-ink-700 text-sm mt-1 italic">Closed Sundays. Online consultations available anytime by booking.</p>
            </div>
            <div className="mt-5">
              <h3 className="font-semibold text-ink-900">Follow on social</h3>
              <div className="mt-2 flex flex-wrap gap-3 text-sm">
                <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="text-brand-700 hover:underline">Instagram</a>
                <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="text-brand-700 hover:underline">Facebook</a>
                <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="text-brand-700 hover:underline">YouTube</a>
                <a href={SOCIAL.twitter} target="_blank" rel="noopener noreferrer" className="text-brand-700 hover:underline">Twitter</a>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900">Reviews from verified clients</h2>
            <div className="mt-4 space-y-3">
              <a href={REVIEWS.practo.url} target="_blank" rel="noopener noreferrer" className="block bg-white border border-ink-900/10 rounded-xl p-4 hover:border-brand-300 transition">
                <div className="font-semibold text-ink-900">Practo — {REVIEWS.practo.rating}★</div>
                <div className="text-sm text-ink-700">{REVIEWS.practo.count} verified patient reviews</div>
              </a>
              <a href={REVIEWS.justdial.url} target="_blank" rel="noopener noreferrer" className="block bg-white border border-ink-900/10 rounded-xl p-4 hover:border-brand-300 transition">
                <div className="font-semibold text-ink-900">Justdial — {REVIEWS.justdial.rating}★</div>
                <div className="text-sm text-ink-700">{REVIEWS.justdial.count} ratings &amp; reviews</div>
              </a>
              <a href={REVIEWS.lybrate.url} target="_blank" rel="noopener noreferrer" className="block bg-white border border-ink-900/10 rounded-xl p-4 hover:border-brand-300 transition">
                <div className="font-semibold text-ink-900">Lybrate</div>
                <div className="text-sm text-ink-700">Professional healthcare profile</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
