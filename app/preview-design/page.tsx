import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fraunces } from "next/font/google";
import { PERSON, REVIEWS, whatsappUrl } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Design Preview — 3 Hero Variations (Internal)",
  description: "Internal design comparison page for Go Moringa rebuild. Not for public.",
  robots: { index: false, follow: false },
  alternates: { canonical: null },
};

export default function PreviewDesignPage() {
  return (
    <div className={`${fraunces.variable} min-h-screen bg-ink-900`}>
      {/* Top bar */}
      <div className="bg-ink-900 text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between flex-wrap gap-3">
          <div>
            <h1 className="text-xl font-bold">Design preview — 3 hero variations</h1>
            <p className="text-xs text-white/60 mt-0.5">For Subodh + Dt. Priyatama. Scroll down to compare.</p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            <a href="#current" className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-full">A: Current</a>
            <a href="#plan" className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-full">B: Plan spec</a>
            <a href="#hybrid" className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-full">C: Hybrid</a>
          </div>
        </div>
      </div>

      {/* === VARIATION A: Current === */}
      <article id="current" className="border-b-8 border-white/10">
        <div className="bg-ink-900 text-white px-4 py-3 text-sm">
          <strong>A. Current (extracted from live gomoringa.in)</strong> &middot; #5dad46 brand green + cream + Fira Sans + Sacramento script
        </div>
        <section
          className="relative overflow-hidden text-white"
          style={{ background: "linear-gradient(135deg, #5dad46 0%, #3c722d 100%)" }}
        >
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,white,transparent_60%)]" aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
            <div style={{ fontFamily: "'Fira Sans', sans-serif" }}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur text-sm font-medium">
                <span className="size-2 rounded-full bg-yellow-400" />
                {PERSON.yearsExperience}+ years &middot; {PERSON.clientCount} clients
              </span>
              <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Best Dietitian in Gurgaon
                <span className="block text-3xl md:text-4xl text-white/85 mt-2" style={{ fontFamily: "'Sacramento', cursive" }}>
                  trusted by 10,000+ families
                </span>
              </h2>
              <p className="mt-5 text-lg text-white/90 max-w-xl leading-relaxed">
                Personalised Indian diet plans by Dt. Priyatama Srivastava — for weight loss, PCOS, diabetes, thyroid, pregnancy and chronic conditions. Practical, sustainable, science-backed.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={whatsappUrl()} className="px-6 py-3 rounded-full bg-white text-green-800 font-semibold">
                  Free WhatsApp Consultation
                </a>
                <Link href="/book-an-appointment.php" className="px-6 py-3 rounded-full bg-green-900 text-white font-semibold">
                  Book Appointment
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/80">
                <span>★ {REVIEWS.practo.rating} on Practo ({REVIEWS.practo.count})</span>
                <span>★ {REVIEWS.justdial.rating} on Justdial ({REVIEWS.justdial.count})</span>
              </div>
            </div>
            <div className="relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/assets/diet-img/priyatma.jpg" alt="Dt. Priyatama Srivastava" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
            </div>
          </div>
        </section>
        <div className="bg-white px-4 py-4 text-xs text-ink-700 max-w-7xl mx-auto">
          <strong>Vibe:</strong> Fresh, accessible, wellness-forward. Preserves recognition for visitors who know the existing gomoringa.in brand. Reads "approachable everyday dietitian."
        </div>
      </article>

      {/* === VARIATION B: Plan spec === */}
      <article id="plan" className="border-b-8 border-white/10">
        <div className="bg-ink-900 text-white px-4 py-3 text-sm">
          <strong>B. Plan spec</strong> &middot; #2C5F4A deep moringa green + #C9A961 warm gold + #FAF8F3 off-white + Fraunces serif headlines + Inter body
        </div>
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#FAF8F3" }}
        >
          <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium tracking-wide"
                style={{ backgroundColor: "rgba(44,95,74,0.08)", color: "#2C5F4A", border: "1px solid rgba(44,95,74,0.15)" }}
              >
                <span className="size-2 rounded-full" style={{ backgroundColor: "#C9A961" }} />
                {PERSON.yearsExperience}+ years &middot; {PERSON.clientCount} clients &middot; Clinically reviewed
              </span>
              <h2
                className="mt-6 text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-medium tracking-tight"
                style={{ fontFamily: "var(--font-fraunces), serif", color: "#1F1F1F" }}
              >
                The dietitian Gurgaon trusts<br />
                <em style={{ color: "#2C5F4A", fontStyle: "italic" }}>for measurable</em> results.
              </h2>
              <p className="mt-6 text-lg leading-relaxed max-w-xl" style={{ color: "#404040" }}>
                Twenty years. Ten thousand clients. Personalised Indian-meal protocols for weight, PCOS, diabetes, thyroid and pregnancy — designed by <strong>Dt. Priyatama Srivastava</strong>, clinical dietitian.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={whatsappUrl()}
                  className="px-7 py-3.5 rounded-full text-white font-semibold transition shadow-lg shadow-green-900/20"
                  style={{ backgroundColor: "#2C5F4A" }}
                >
                  Book free consultation
                </a>
                <Link
                  href="/book-an-appointment.php"
                  className="px-7 py-3.5 rounded-full font-semibold border-2 transition"
                  style={{ borderColor: "#C9A961", color: "#1F1F1F", backgroundColor: "transparent" }}
                >
                  Call +91-99109 22899
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm" style={{ color: "#404040" }}>
                <span className="flex items-center gap-2"><span className="text-base" style={{ color: "#C9A961" }}>★</span> {REVIEWS.practo.rating} Practo ({REVIEWS.practo.count} reviews)</span>
                <span className="flex items-center gap-2"><span className="text-base" style={{ color: "#C9A961" }}>★</span> {REVIEWS.justdial.rating} Justdial ({REVIEWS.justdial.count} reviews)</span>
              </div>
            </div>
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl"
                style={{ backgroundColor: "#C9A961", opacity: 0.15 }}
                aria-hidden="true"
              />
              <div className="relative aspect-[4/5] md:aspect-[4/5] rounded-3xl overflow-hidden">
                <Image src="/assets/diet-img/priyatma.jpg" alt="Dt. Priyatama Srivastava" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
              </div>
            </div>
          </div>
        </section>
        <div className="bg-white px-4 py-4 text-xs text-ink-700 max-w-7xl mx-auto">
          <strong>Vibe:</strong> Editorial, clinical, premium. Reads "the finest dietitian in India" — quiet authority. Reference: Rujuta Diwekar's site polish + Goop-minus-the-woo. Serif headlines + gold accent + earthy green deliver E-E-A-T at first glance. Bigger leap from current brand.
        </div>
      </article>

      {/* === VARIATION C: Hybrid === */}
      <article id="hybrid" className="border-b-8 border-white/10">
        <div className="bg-ink-900 text-white px-4 py-3 text-sm">
          <strong>C. Hybrid</strong> &middot; Brand green (#5dad46) kept + gold accent added + serif headline (Fraunces) + Fira Sans body. Recognition + editorial polish.
        </div>
        <section
          className="relative overflow-hidden text-white"
          style={{ background: "linear-gradient(135deg, #3c722d 0%, #234119 100%)" }}
        >
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,white,transparent_60%)]" aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
            <div style={{ fontFamily: "'Fira Sans', sans-serif" }}>
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium tracking-wide bg-white/12 backdrop-blur"
              >
                <span className="size-2 rounded-full" style={{ backgroundColor: "#C9A961" }} />
                {PERSON.yearsExperience}+ years &middot; {PERSON.clientCount} clients &middot; 5★ on Practo
              </span>
              <h2
                className="mt-6 text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-medium tracking-tight"
                style={{ fontFamily: "var(--font-fraunces), serif", color: "white" }}
              >
                Best Dietitian in Gurgaon —<br />
                <em style={{ color: "#C9A961", fontStyle: "italic" }}>trusted</em> by 10,000+ families.
              </h2>
              <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-xl">
                Personalised Indian-meal diet plans by Dt. Priyatama Srivastava — for weight loss, PCOS, diabetes, thyroid, pregnancy and chronic conditions. Practical, sustainable, evidence-based.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={whatsappUrl()}
                  className="px-7 py-3.5 rounded-full bg-white text-brand-800 font-semibold shadow-lg"
                  style={{ color: "#234119" }}
                >
                  Free WhatsApp consultation
                </a>
                <Link
                  href="/book-an-appointment.php"
                  className="px-7 py-3.5 rounded-full font-semibold border-2 transition"
                  style={{ borderColor: "#C9A961", color: "white", backgroundColor: "transparent" }}
                >
                  Call +91-99109 22899
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/80">
                <span className="flex items-center gap-2"><span style={{ color: "#C9A961" }}>★</span> {REVIEWS.practo.rating} Practo ({REVIEWS.practo.count})</span>
                <span className="flex items-center gap-2"><span style={{ color: "#C9A961" }}>★</span> {REVIEWS.justdial.rating} Justdial ({REVIEWS.justdial.count})</span>
              </div>
            </div>
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl"
                style={{ backgroundColor: "#C9A961", opacity: 0.25 }}
                aria-hidden="true"
              />
              <div className="relative aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden">
                <Image src="/assets/diet-img/priyatma.jpg" alt="Dt. Priyatama Srivastava" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
              </div>
            </div>
          </div>
        </section>
        <div className="bg-white px-4 py-4 text-xs text-ink-700 max-w-7xl mx-auto">
          <strong>Vibe:</strong> Brand recognition preserved (visitors who know existing gomoringa.in still recognise the green identity) + editorial uplift from serif headline + warm gold accent. Best of both worlds — safer brand transfer, premium feel.
        </div>
      </article>

      {/* Decision footer */}
      <div className="bg-ink-900 text-white px-4 py-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Which direction?</h2>
        <p className="mt-3 text-white/80 max-w-2xl mx-auto">
          Reply with <strong>A</strong>, <strong>B</strong>, or <strong>C</strong>. I'll roll out the chosen direction site-wide — header, footer, all pages, all CTAs.
        </p>
        <p className="mt-3 text-xs text-white/60">This preview page is noindexed and not in the sitemap.</p>
      </div>
    </div>
  );
}
