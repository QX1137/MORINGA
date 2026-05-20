import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { JsonLd } from "@/app/components/JsonLd";
import { MoringaMark } from "@/app/components/MoringaMark";
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

      <section className="bg-paper-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
          <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-[#d8c8a8]/80 text-eyebrow text-warm-500">
            <nav aria-label="Breadcrumb">
              <Link href="/" className="hover:text-clay transition">Home</Link>
              <span className="mx-3 opacity-50">/</span>
              <span className="text-clay">Book Appointment</span>
            </nav>
            <span className="hidden md:inline">First conversation · 15 minutes · free</span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 lg:px-8 pt-14 md:pt-20 pb-10 text-center">
          <div className="text-eyebrow text-clay mb-5 flex items-center justify-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            Book
            <span className="block h-px w-10 bg-clay" />
          </div>
          <h1 className="font-display tracking-[-0.02em] font-medium text-ink leading-[0.98] mx-auto max-w-4xl" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
            The first conversation <em className="italic-clay">is free</em>.
          </h1>
          <p className="mt-6 text-lg text-warm-700 max-w-2xl mx-auto leading-relaxed">
            Fifteen minutes to understand your goal. No commitment, no payment upfront. Pick the channel that suits you.
          </p>
        </div>
      </section>

      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-10 md:gap-14">
          {/* Quick channels */}
          <div>
            <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
              <span className="block h-px w-10 bg-clay" />
              Quickest
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-medium text-ink leading-tight">
              WhatsApp <em className="italic-clay">or call</em>.
            </h2>
            <p className="mt-3 text-warm-700">
              Most clients begin here. Quick reply during clinic hours.
            </p>
            <div className="mt-6 space-y-4">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="group flex items-baseline justify-between p-5 border border-[#d8c8a8]/70 hover:border-clay transition">
                <div>
                  <div className="text-eyebrow text-clay mb-2">No. 01</div>
                  <div className="font-display text-xl font-medium text-ink group-hover:text-clay transition">WhatsApp</div>
                  <div className="mt-1 text-sm text-warm-500">{CONTACT.phone}</div>
                </div>
                <span className="text-clay text-lg" aria-hidden="true">→</span>
              </a>
              <a href={`tel:${CONTACT.phoneTel}`} className="group flex items-baseline justify-between p-5 border border-[#d8c8a8]/70 hover:border-clay transition">
                <div>
                  <div className="text-eyebrow text-clay mb-2">No. 02</div>
                  <div className="font-display text-xl font-medium text-ink group-hover:text-clay transition">Call clinic</div>
                  <div className="mt-1 text-sm text-warm-500">{CONTACT.hours.days}, {CONTACT.hours.open}–{CONTACT.hours.close}</div>
                </div>
                <span className="text-clay text-lg" aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <div>
            <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
              <span className="block h-px w-10 bg-clay" />
              Or fill the form
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-medium text-ink leading-tight">
              Tell us <em className="italic-clay">about your goal</em>.
            </h2>
            <form action={`mailto:${CONTACT.email}`} method="POST" encType="text/plain" className="mt-6 space-y-3">
              <div>
                <label htmlFor="name" className="block text-eyebrow text-warm-500 mb-1">Your name</label>
                <input id="name" type="text" name="name" placeholder="" required className="w-full p-3 bg-paper border border-[#d8c8a8]/70 focus:outline-none focus:border-clay text-ink font-display" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-eyebrow text-warm-500 mb-1">Phone (WhatsApp preferred)</label>
                <input id="phone" type="tel" name="phone" placeholder="" required className="w-full p-3 bg-paper border border-[#d8c8a8]/70 focus:outline-none focus:border-clay text-ink font-display" />
              </div>
              <div>
                <label htmlFor="email" className="block text-eyebrow text-warm-500 mb-1">Email (optional)</label>
                <input id="email" type="email" name="email" placeholder="" className="w-full p-3 bg-paper border border-[#d8c8a8]/70 focus:outline-none focus:border-clay text-ink font-display" />
              </div>
              <div>
                <label htmlFor="program" className="block text-eyebrow text-warm-500 mb-1">Programme</label>
                <select id="program" name="program" required className="w-full p-3 bg-paper border border-[#d8c8a8]/70 focus:outline-none focus:border-clay text-ink font-display">
                  <option value="">Select...</option>
                  {PROGRAMS.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                  <option value="Not sure / discuss">Not sure — let&rsquo;s discuss</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-eyebrow text-warm-500 mb-1">A few words about your goal</label>
                <textarea id="message" name="message" rows={3} className="w-full p-3 bg-paper border border-[#d8c8a8]/70 focus:outline-none focus:border-clay text-ink font-display" />
              </div>
              <button type="submit" className="group w-full p-3 bg-ink text-paper hover:bg-ink-deep transition flex items-center justify-center gap-3">
                <span className="font-display font-medium">Send message</span>
                <span className="text-clay" aria-hidden="true">→</span>
              </button>
              <p className="text-eyebrow text-warm-500 text-center">
                For instant booking, WhatsApp is faster.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-paper-dark py-10 md:py-12 border-y border-[#d8c8a8]/60">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <MoringaMark className="size-6 text-clay" />
            <span className="text-eyebrow text-clay">Booking with confidence</span>
            <MoringaMark className="size-6 text-clay" />
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2 justify-center text-eyebrow text-warm-700">
            <span>★ {REVIEWS.practo.rating} Practo ({REVIEWS.practo.count})</span>
            <span>★ {REVIEWS.justdial.rating} Justdial ({REVIEWS.justdial.count})</span>
            <span>20+ years · 10,000+ clients</span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
