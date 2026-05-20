import type { Metadata } from "next";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { JsonLd } from "@/app/components/JsonLd";
import { CONTACT, REVIEWS, SITE, whatsappUrl } from "@/lib/site";
import { breadcrumbSchema, localBusinessSchema, personSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Book An Appointment | Go Moringa Diet Clinic Gurgaon",
  description: "Book a dietitian appointment with Dt. Priyatama Srivastava at Go Moringa. WhatsApp, call, or fill the form. Free 15-minute initial consultation.",
  alternates: { canonical: "/book-an-appointment.php" },
};

const PROGRAMS = [
  "Healthy Weight Loss Program",
  "Diabetes Reversal Program",
  "PCOD / PCOS Management",
  "Corporate Health Plans",
  "Skin and Hair Program",
  "7 Day Cleanse Diet Program",
  "Online Trial Diet Plan",
  "Weight Gain Program",
  "Adolescent Obesity Weight Loss Program",
  "Post-Pregnancy Weight Loss Program",
  "Therapeutic Diets Program",
];

export default function BookPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Book Appointment", url: `${SITE.url}/book-an-appointment.php` },
  ]);
  const schemas = [localBusinessSchema(), personSchema(), breadcrumb];

  return (
    <>
      <JsonLd data={schemas} />
      <Header />

      <section className="relative bg-brand-gradient text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,white,transparent_60%)]" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto px-4 py-16 md:py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Book An Appointment</h1>
          <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            Free 15-minute initial consultation. Pick the channel that suits you — WhatsApp, call, or form.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900">Quickest: WhatsApp or call</h2>
            <p className="mt-3 text-ink-700">
              Most clients book through WhatsApp because it&rsquo;s quick and lets us understand your goal before scheduling.
            </p>
            <div className="mt-6 space-y-3">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl text-white" style={{ backgroundColor: "#25D366" }}>
                <svg viewBox="0 0 24 24" fill="white" className="size-6" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
                <div>
                  <div className="font-semibold">WhatsApp now</div>
                  <div className="text-sm text-white/85">{CONTACT.phone} &middot; usual reply within 2 hours</div>
                </div>
              </a>
              <a href={`tel:${CONTACT.phoneTel}`} className="flex items-center gap-3 p-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white transition">
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-6" aria-hidden="true">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.24 1.05l-2.21 2.16z" />
                </svg>
                <div>
                  <div className="font-semibold">Call clinic</div>
                  <div className="text-sm text-white/85">{CONTACT.phone} &middot; {CONTACT.hours.days}, {CONTACT.hours.open} AM-{CONTACT.hours.close} PM</div>
                </div>
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900">Or fill the form</h2>
            <p className="mt-3 text-ink-700">
              Send a message and we will respond by phone or WhatsApp to schedule.
            </p>
            <form action={`mailto:${CONTACT.email}`} method="POST" encType="text/plain" className="mt-6 space-y-3">
              <input type="text" name="name" placeholder="Your name" required className="w-full p-3 rounded-xl border border-ink-900/15 focus:outline-none focus:border-brand-500" />
              <input type="tel" name="phone" placeholder="Phone (WhatsApp preferred)" required className="w-full p-3 rounded-xl border border-ink-900/15 focus:outline-none focus:border-brand-500" />
              <input type="email" name="email" placeholder="Email (optional)" className="w-full p-3 rounded-xl border border-ink-900/15 focus:outline-none focus:border-brand-500" />
              <select name="program" required className="w-full p-3 rounded-xl border border-ink-900/15 focus:outline-none focus:border-brand-500 bg-white">
                <option value="">Which program interests you?</option>
                {PROGRAMS.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
                <option value="Not sure / discuss">Not sure / let&rsquo;s discuss</option>
              </select>
              <textarea name="message" rows={3} placeholder="Tell us a bit about your goal..." className="w-full p-3 rounded-xl border border-ink-900/15 focus:outline-none focus:border-brand-500" />
              <button type="submit" className="w-full px-6 py-3 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold transition">
                Send message
              </button>
              <p className="text-xs text-ink-500 text-center">
                Submitting opens your email client. For instant booking, WhatsApp is faster.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-cream-50 border-y border-ink-900/5">
        <div className="max-w-4xl mx-auto px-4 py-10 text-center">
          <h2 className="text-xl font-semibold text-ink-900">Booking with confidence</h2>
          <div className="mt-3 flex flex-wrap gap-4 justify-center text-sm text-ink-700">
            <span>★ {REVIEWS.practo.rating} Practo ({REVIEWS.practo.count} reviews)</span>
            <span>★ {REVIEWS.justdial.rating} Justdial ({REVIEWS.justdial.count} reviews)</span>
            <span>20+ years &middot; 10,000+ clients</span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
