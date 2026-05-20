import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { JsonLd } from "./components/JsonLd";
import { CONTACT, PERSON, REVIEWS, SITE, whatsappUrl } from "@/lib/site";
import {
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
  personSchema,
  websiteSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Best Dietician In Gurgaon, India | Nutritionist, Weight Loss Expert",
  description:
    "Go Moringa Diet Clinic has the best dietician in Gurgaon, with 20 years of experience, providing personalised diet plans and helping 10,000+ clients achieve their weight loss goals.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Best Dietician In Gurgaon, India | Nutritionist, Weight Loss Expert",
    url: SITE.url,
    images: [`${SITE.url}/assets/banner/best-dietician-in-gurgaon.jpg`],
  },
};

// ===== Homepage data =====
// TODO Phase 2: replace placeholder copy with real brand-voice content.

const SERVICES = [
  { title: "Weight Loss", href: "/weight-loss.php", img: "/assets/services/weight-loss.jpg", desc: "Science-backed, sustainable plans — no crash diets, no rebounds." },
  { title: "Weight Gain", href: "/weight-gain.php", img: "/assets/services/weight-gain.jpg", desc: "Healthy weight gain with nutrient-dense Indian meal plans." },
  { title: "Figure Correction", href: "/figure-correction.php", img: "/assets/services/figure-correction.jpg", desc: "Targeted plans for inch loss, toning and body composition." },
  { title: "Therapeutic Diet", href: "/therapeutic-diet.php", img: "/assets/services/therapeutic-diet.jpg", desc: "Medical-grade nutrition for chronic conditions, certified protocols." },
  { title: "Pregnancy Diet", href: "/pregnancy-diet.php", img: "/assets/services/pregnacy-diet.jpg", desc: "Safe, trimester-specific nutrition for mother and baby." },
];

const TREATMENTS = [
  { title: "Diabetes", href: "/treatment/diabetes.php", img: "/assets/treatment/diabetes.jpg" },
  { title: "PCOD / PCOS", href: "/treatment/pcod-pcos.php", img: "/assets/treatment/pcos.jpg" },
  { title: "Thyroid", href: "/treatment/thyroid.php", img: "/assets/treatment/thyroid.png" },
  { title: "Hypertension", href: "/treatment/high-blood-pressure.php", img: "/assets/treatment/High BP.jpg" },
  { title: "Heart Disease", href: "/treatment/heart-disease.php", img: "/assets/treatment/heart disease.jpg" },
  { title: "Cholesterol", href: "/treatment/lipid-profile-cholesterol.php", img: "/assets/treatment/LP-cholestrol.jpg" },
  { title: "Uric Acid / Gout", href: "/treatment/uric-acid.php", img: "/assets/treatment/Uric Acid.jpg" },
  { title: "Osteoporosis", href: "/treatment/osteoporosis.php", img: "/assets/treatment/osteoprosis.jpg" },
];

const TESTIMONIALS = [
  { name: "Anjali, Sector 49", outcome: "Lost 18 kg in 6 months", quote: "Priyatama's plans were practical — I could eat dal-roti, no boring meal-replacement shakes. Lost the weight and kept it off." },
  { name: "Rohit, Gurgaon", outcome: "Reversed pre-diabetes", quote: "My HbA1c came down from 6.4 to 5.6 in 4 months. No medication. Just disciplined eating with her plan." },
  { name: "Meera, DLF Phase 3", outcome: "PCOS managed without hormones", quote: "Regular cycles for the first time in years. Skin cleared up. Lost 9 kg as a bonus." },
];

const FAQS = [
  { q: "Who is the best dietitian in Gurgaon?", a: `Dt. Priyatama Srivastava of Go Moringa Nutri Diet Clinic, based in Sector 49 Gurugram, is rated 5.0/5 on Practo (${REVIEWS.practo.count} reviews) and 4.9/5 on Justdial (${REVIEWS.justdial.count} reviews). With 20 years of experience and 10,000+ clients across Gurgaon, Delhi NCR and worldwide via online consultation, she specialises in weight loss, PCOS, diabetes, thyroid and pregnancy nutrition.` },
  { q: "Do you provide online diet consultation?", a: "Yes. We consult clients across India and worldwide via WhatsApp and video call. The process is identical to an in-clinic visit — detailed health assessment, customised diet plan, weekly follow-ups." },
  { q: "How long does it take to see results?", a: "Most clients see measurable change within 2-3 weeks. Sustainable weight loss is typically 2-4 kg per month. Therapeutic improvements (HbA1c, lipid profile, hormone levels) usually show up in 3 months of disciplined adherence." },
  { q: "Will I have to give up Indian food?", a: "No. Every diet plan is built around Indian meal patterns — roti, dal, rice, sabzi — adjusted for your goal and condition. We work with your kitchen, not against it." },
  { q: "What's the consultation fee?", a: `Packages start with a one-month plan and scale up to comprehensive multi-month programmes. Call ${CONTACT.phone} or WhatsApp us for current pricing and to find the right fit for your goal.` },
  { q: "Where is the clinic located?", a: `${CONTACT.address.fullAddress}. Open ${CONTACT.hours.days}, ${CONTACT.hours.open} to ${CONTACT.hours.close}.` },
];

export default function HomePage() {
  const schemas = [
    localBusinessSchema(),
    personSchema(),
    websiteSchema(),
    faqSchema(FAQS),
    breadcrumbSchema([{ name: "Home", url: SITE.url }]),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Header />

      {/* ===== Hero ===== */}
      <section className="relative bg-brand-gradient text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,white,transparent_60%)]" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur text-sm font-medium">
              <span className="size-2 rounded-full bg-accent-amber" />
              {PERSON.yearsExperience}+ years &middot; {PERSON.clientCount} clients
            </span>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Best Dietitian in Gurgaon
              <span className="block font-script text-3xl md:text-4xl text-cream-100 mt-2" style={{ fontFamily: "var(--font-script)" }}>
                trusted by 10,000+ families
              </span>
            </h1>
            <p className="mt-5 text-lg text-white/90 max-w-xl leading-relaxed">
              {/* TODO Phase 2: User-crafted hero subheadline goes here. */}
              Personalised Indian diet plans by Dt. Priyatama Srivastava — for weight loss, PCOS, diabetes, thyroid, pregnancy and chronic conditions. Practical, sustainable, science-backed.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-white text-brand-700 font-semibold hover:bg-cream-100 transition"
              >
                Free WhatsApp Consultation
              </a>
              <Link
                href="/book-an-appointment.php"
                className="px-6 py-3 rounded-full bg-brand-900 text-white font-semibold hover:bg-ink-900 transition"
              >
                Book Appointment
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/80">
              <span>★ {REVIEWS.practo.rating} on Practo ({REVIEWS.practo.count} reviews)</span>
              <span>★ {REVIEWS.justdial.rating} on Justdial ({REVIEWS.justdial.count} reviews)</span>
            </div>
          </div>
          <div className="relative aspect-[4/5] md:aspect-square">
            <Image
              src="/assets/diet-img/priyatma.jpg"
              alt="Dt. Priyatama Srivastava — Best Dietitian in Gurgaon"
              fill
              priority
              className="object-cover rounded-2xl shadow-2xl"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* ===== Trust trio ===== */}
      <section className="bg-cream-100 border-y border-ink-900/5">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: `${PERSON.yearsExperience}+`, label: "Years of experience" },
            { value: PERSON.clientCount, label: "Clients transformed" },
            { value: `${REVIEWS.practo.rating}★`, label: `Practo (${REVIEWS.practo.count} reviews)` },
            { value: `${REVIEWS.justdial.rating}★`, label: `Justdial (${REVIEWS.justdial.count} reviews)` },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold text-brand-700">{stat.value}</div>
              <div className="mt-1 text-sm text-ink-700">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Services ===== */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-ink-900">Our Services</h2>
          <p className="mt-3 text-ink-700 max-w-2xl mx-auto">
            Five core programs — each tailored to your body, lifestyle and goal. Indian meal patterns, never fad diets.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group block bg-white border border-ink-900/10 rounded-2xl overflow-hidden hover:shadow-lg hover:border-brand-300 transition"
            >
              <div className="relative aspect-[16/10] bg-cream-100">
                <Image src={s.img} alt={s.title} fill className="object-cover group-hover:scale-105 transition duration-500" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-ink-900 group-hover:text-brand-600 transition">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-700 leading-relaxed">{s.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-brand-600 text-sm font-medium">
                  Learn more <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== Treatment areas ===== */}
      <section className="bg-cream-50 border-y border-ink-900/5">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-ink-900">Conditions We Manage</h2>
            <p className="mt-3 text-ink-700 max-w-2xl mx-auto">
              Therapeutic diet protocols for 15+ chronic conditions. Most clients see measurable change in lab values within 3 months.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TREATMENTS.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="group bg-white rounded-xl border border-ink-900/10 p-4 hover:border-brand-400 hover:shadow-md transition flex items-center gap-3"
              >
                <div className="relative size-14 rounded-lg overflow-hidden bg-cream-100 shrink-0">
                  <Image src={t.img} alt={t.title} fill className="object-cover" sizes="56px" />
                </div>
                <div>
                  <div className="font-semibold text-ink-900 group-hover:text-brand-600 transition">{t.title}</div>
                  <div className="text-xs text-ink-500">View diet plan</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/treatment.php" className="inline-flex items-center gap-1 text-brand-700 font-medium hover:underline">
              See all 15+ conditions <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== About preview ===== */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative aspect-[4/5] max-w-md">
          <Image src="/assets/diet-img/priyatma.jpg" alt="Dt. Priyatama Srivastava" fill className="object-cover rounded-2xl shadow-lg" sizes="(min-width: 768px) 40vw, 100vw" />
        </div>
        <div>
          <span className="text-brand-600 font-semibold uppercase tracking-wider text-sm">Meet your dietitian</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-ink-900">{PERSON.name}</h2>
          <p className="mt-2 text-lg font-script text-brand-700" style={{ fontFamily: "var(--font-script)" }}>
            20 years of helping people eat well &amp; live well
          </p>
          <p className="mt-5 text-ink-700 leading-relaxed">
            A qualified and certified clinical dietitian practising in Gurgaon for two decades. Priyatama has guided more than 10,000 clients through sustainable weight loss, PCOS management, diabetes reversal, thyroid balance and high-risk pregnancies — using practical, Indian-meal-friendly nutrition.
          </p>
          <p className="mt-3 text-ink-700 leading-relaxed">
            Her approach: comprehensive health evaluation, lifestyle assessment, BMI &amp; goal mapping, then a customised plan. No crash diets. No magic shakes. Just disciplined, science-backed nutrition that fits your kitchen.
          </p>
          <Link href="/priyatama-srivastava.php" className="mt-5 inline-flex items-center gap-1 text-brand-600 font-medium hover:underline">
            Read full bio <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section className="bg-brand-50 border-y border-ink-900/5">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-ink-900">Real Results, Real People</h2>
            <p className="mt-3 text-ink-700">A few of the 10,000+ stories from our Gurgaon &amp; NCR clients.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <article key={t.name} className="bg-white rounded-2xl p-6 border border-ink-900/10 shadow-sm">
                <div className="text-brand-500 mb-3" aria-hidden="true">★★★★★</div>
                <p className="text-ink-900 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-4 pt-4 border-t border-ink-900/5">
                  <div className="font-semibold text-ink-900">{t.name}</div>
                  <div className="text-sm text-brand-700">{t.outcome}</div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center text-sm text-ink-700">
            See {REVIEWS.practo.count}+ verified reviews on{" "}
            <a href={REVIEWS.practo.url} target="_blank" rel="noopener noreferrer" className="text-brand-700 underline">Practo</a> and{" "}
            <a href={REVIEWS.justdial.url} target="_blank" rel="noopener noreferrer" className="text-brand-700 underline">Justdial</a>.
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-ink-900">Common Questions</h2>
          <p className="mt-3 text-ink-700">Everything you need to know before your first consultation.</p>
        </div>
        <div className="space-y-3">
          {FAQS.map((f) => (
            <details key={f.q} className="group bg-cream-50 border border-ink-900/10 rounded-xl">
              <summary className="cursor-pointer list-none p-5 flex justify-between items-center font-semibold text-ink-900 group-open:text-brand-700">
                {f.q}
                <span className="text-brand-600 transition group-open:rotate-45" aria-hidden="true">＋</span>
              </summary>
              <div className="px-5 pb-5 text-ink-700 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section className="bg-ink-900 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to start?</h2>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
            Free 15-minute WhatsApp consultation to understand your goal — no commitment, no payment upfront.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold transition"
            >
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="px-7 py-3 rounded-full bg-white text-ink-900 hover:bg-cream-100 font-semibold transition"
            >
              Call {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
