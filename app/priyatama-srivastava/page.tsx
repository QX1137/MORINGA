import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { JsonLd } from "@/app/components/JsonLd";
import { MoringaMark } from "@/app/components/MoringaMark";
import { PersonBadge } from "@/app/components/PersonBadge";
import { LastUpdated } from "@/app/components/aeo";
import { CONTACT, PERSON, REVIEWS, SITE, SOCIAL, whatsappUrl } from "@/lib/site";
import { breadcrumbSchema, localBusinessSchema, personSchema } from "@/lib/schema";
import { PHOTOS } from "@/lib/images";

const LAST_REVIEWED = "May 2026";

export const metadata: Metadata = {
  title: "Dt. Priyatama Srivastava | Best Dietitian in Gurgaon | Go Moringa",
  description: `Dt. Priyatama Srivastava — clinical dietitian in Gurgaon with ${PERSON.yearsExperience}+ years and ${PERSON.clientCount} clients. Specialises in weight loss, PCOS, diabetes, thyroid, pregnancy.`,
  alternates: { canonical: "/priyatama-srivastava.php" },
};

const SPECIALTIES = [
  "Weight loss (sustainable, Indian-meal-based)",
  "Weight gain (healthy, lean-mass-focused)",
  "Figure correction (pre-wedding, post-pregnancy)",
  "PCOS / PCOD (hormonal context, weight, fertility)",
  "Diabetes management and reversal protocols",
  "Thyroid disorders (hypo, hyper, Hashimoto's)",
  "Hypertension and cardiovascular disease",
  "Cholesterol and lipid management",
  "Healthy pregnancy diet (including GDM, anaemia)",
  "Therapeutic diets for kidney, liver, chronic conditions",
  "Post-cancer and post-surgery recovery nutrition",
];

export default function PriyatamaPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "About", url: `${SITE.url}/about.php` },
    { name: PERSON.shortName, url: `${SITE.url}/priyatama-srivastava.php` },
  ]);
  const schemas = [localBusinessSchema(), personSchema(), breadcrumb];

  return (
    <>
      <JsonLd data={schemas} />
      <Header />

      {/* HERO */}
      <section className="bg-paper-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
          <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-[#d8c8a8]/80 text-eyebrow text-warm-500">
            <nav aria-label="Breadcrumb">
              <Link href="/" className="hover:text-clay transition">Home</Link>
              <span className="mx-3 opacity-50">/</span>
              <Link href="/about.php" className="hover:text-clay transition">About</Link>
              <span className="mx-3 opacity-50">/</span>
              <span className="text-clay">{PERSON.shortName}</span>
            </nav>
            <span className="hidden md:inline">Portrait · Clinical Dietitian · Gurugram</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 md:pt-16 pb-10 grid md:grid-cols-12 gap-x-8 gap-y-12 items-start">
          <div className="md:col-span-7">
            <LastUpdated date={LAST_REVIEWED} reviewer={PERSON.name} />
            <div className="text-eyebrow text-clay mb-5 flex items-center gap-3">
              <span className="block h-px w-10 bg-clay" />
              Portrait
            </div>
            <h1 className="font-display tracking-[-0.02em] font-medium text-ink leading-[0.98]" style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}>
              {PERSON.name}
            </h1>
            <p className="mt-4 font-display italic text-xl md:text-2xl text-clay leading-snug">
              Practising clinical dietitian for {PERSON.yearsExperience} years
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-[1.65] text-warm-700">
              Founder of Go Moringa Nutri Diet Clinic in Sector 49, Gurugram. {PERSON.clientCount} clients across India and worldwide. {REVIEWS.practo.rating}★ on Practo with {REVIEWS.practo.count}+ verified reviews.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 text-base font-medium text-ink">
                <span className="relative pb-1 border-b-2 border-clay transition-all group-hover:border-b-[3px]">
                  Begin a consultation
                </span>
                <span className="text-clay" aria-hidden="true">→</span>
              </a>
              <Link href="/book-an-appointment.php" className="text-base font-medium text-ink/70 hover:text-ink transition">
                or book a slot
              </Link>
            </div>
          </div>

          <div className="md:col-span-5 md:pt-4">
            <figure>
              <figcaption className="text-eyebrow text-clay mb-4 flex items-center gap-3">
                <span className="block h-px w-6 bg-clay" />
                Photographed in clinic · 2024
              </figcaption>
              <PersonBadge variant="hero" alt={PERSON.name} />
              <div className="mt-4 flex items-baseline justify-between">
                <div className="font-display">
                  <div className="text-base font-medium text-ink">{PERSON.name}</div>
                  <div className="text-sm italic text-clay">{PERSON.role}</div>
                </div>
                <MoringaMark className="size-7 text-clay opacity-70" />
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* BIO with drop cap */}
      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            Practice
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-ink leading-tight">
            Twenty years of <em className="italic-clay">documented</em> practice.
          </h2>

          <div className="mt-8 space-y-5 text-lg leading-[1.75] text-warm-700">
            <p>
              <span className="font-display text-clay float-left mr-3 leading-[0.85]" style={{ fontSize: "5rem", fontWeight: 500 }}>
                P
              </span>
              riyatama Srivastava has practised in Gurgaon since 2005. Her clients are mostly people who have already tried — the gym, the keto plan, the 21-day cleanse, the influencer&rsquo;s PDF — and arrive with the same question. <em>What actually works, year after year?</em>
            </p>
            <p>
              Her answer, in two decades, has not changed: a documented family-meal-shaped plan, a weekly review, lab work every quarter, and the patience that this is a long road. Ten thousand clients later, that answer has held.
            </p>
            <p>
              Beyond the dietary protocols, Priyatama has built a reputation for personal connection. Many of her clients return for follow-up programs years later, refer their family, and stay in touch through life transitions. Her warm, plain-speaking style has made her, in her own words, &ldquo;more friends than clients.&rdquo;
            </p>
            <p>
              The services she offers go well beyond diet charts. She regularly advises and guides her clients on lifestyle adjustments, exercise integration, sleep, stress management, and the long-term sustainability of healthy eating habits. She coordinates with cardiologists, endocrinologists, gynaecologists and obstetricians across the Delhi NCR region — particularly Apollo, Max, BLK, Fortis and Medanta hospital systems — when client conditions require multi-specialist coordination.
            </p>
          </div>

          <blockquote className="mt-10 border-l-2 border-clay pl-6 italic font-display text-2xl text-ink leading-relaxed">
            &ldquo;The right plan is not what is in fashion. It is what fits your body, your kitchen, your week — and what your lab work will say in three months.&rdquo;
          </blockquote>
          <p className="mt-2 text-eyebrow text-warm-500 pl-6">— Dt. Priyatama</p>
        </div>
      </section>

      {/* Specialties */}
      <section className="bg-paper-dark py-16 md:py-20 border-y border-[#d8c8a8]/60">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            Areas of specialty
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-ink leading-tight mb-8">
            What she <em className="italic-clay">treats</em>.
          </h2>
          <ol className="border-t border-[#d8c8a8]/60">
            {SPECIALTIES.map((s, i) => (
              <li key={s} className="flex gap-5 py-3 border-b border-[#d8c8a8]/40 text-base text-warm-700 leading-snug">
                <span className="text-eyebrow text-warm-500 shrink-0 w-8 font-mono pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Recognition + social */}
      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            Recognition and reach
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-ink leading-tight mb-8">
            <em className="italic-clay">Verified</em> across platforms.
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <a href={REVIEWS.practo.url} target="_blank" rel="noopener noreferrer" className="group block p-5 border border-[#d8c8a8]/60 hover:border-clay transition">
              <div className="text-eyebrow text-clay mb-2">Practo</div>
              <div className="font-display text-2xl font-medium text-ink">{REVIEWS.practo.rating}★ <span className="text-clay italic"> · {REVIEWS.practo.count}</span></div>
              <div className="mt-1 text-sm text-warm-500">verified patient reviews</div>
            </a>
            <a href={REVIEWS.justdial.url} target="_blank" rel="noopener noreferrer" className="group block p-5 border border-[#d8c8a8]/60 hover:border-clay transition">
              <div className="text-eyebrow text-clay mb-2">Justdial</div>
              <div className="font-display text-2xl font-medium text-ink">{REVIEWS.justdial.rating}★ <span className="text-clay italic"> · {REVIEWS.justdial.count}</span></div>
              <div className="mt-1 text-sm text-warm-500">ratings &amp; reviews</div>
            </a>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="group block p-5 border border-[#d8c8a8]/60 hover:border-clay transition">
              <div className="text-eyebrow text-clay mb-2">Instagram</div>
              <div className="font-display text-lg font-medium text-ink">@dt_priyatamasrivastava</div>
            </a>
            <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="group block p-5 border border-[#d8c8a8]/60 hover:border-clay transition">
              <div className="text-eyebrow text-clay mb-2">YouTube</div>
              <div className="font-display text-lg font-medium text-ink">Go Moringa channel</div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-paper py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, #C9A961 0%, transparent 40%)" }} aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <MoringaMark className="size-12 text-clay mx-auto mb-6" />
          <div className="text-eyebrow text-clay mb-4">Begin with Priyatama</div>
          <h2 className="font-display font-medium leading-[1.05] tracking-[-0.02em]" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
            The first conversation <em className="italic" style={{ color: "#C9A961" }}>is free.</em>
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
