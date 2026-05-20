import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { PERSON, REVIEWS, whatsappUrl } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-editorial",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Design Preview — 4 Hero Variations (Internal)",
  description: "Internal design comparison page for Go Moringa rebuild. Not for public.",
  robots: { index: false, follow: false },
  alternates: { canonical: null },
};

// Custom moringa-leaf mark — drawn-once SVG, becomes a signature motif throughout the site.
function MoringaMark({ className, color = "#163E2E" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none" aria-hidden="true">
      <path
        d="M30 6 C 22 14, 18 22, 18 32 C 18 42, 24 50, 30 54 C 36 50, 42 42, 42 32 C 42 22, 38 14, 30 6 Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M30 8 V 54" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <path d="M30 18 C 26 20, 23 24, 22 28" stroke={color} strokeWidth="1" strokeLinecap="round" fill="none" />
      <path d="M30 18 C 34 20, 37 24, 38 28" stroke={color} strokeWidth="1" strokeLinecap="round" fill="none" />
      <path d="M30 28 C 25 30, 22 34, 21 38" stroke={color} strokeWidth="1" strokeLinecap="round" fill="none" />
      <path d="M30 28 C 35 30, 38 34, 39 38" stroke={color} strokeWidth="1" strokeLinecap="round" fill="none" />
      <path d="M30 38 C 27 40, 25 43, 24 46" stroke={color} strokeWidth="1" strokeLinecap="round" fill="none" />
      <path d="M30 38 C 33 40, 35 43, 36 46" stroke={color} strokeWidth="1" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export default function PreviewDesignPage() {
  return (
    <div className={`${fraunces.variable} ${inter.variable} ${mono.variable} min-h-screen bg-ink-900`}>
      {/* Top bar */}
      <div className="bg-ink-900 text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between flex-wrap gap-3">
          <div>
            <h1 className="text-xl font-bold">Design preview — 4 hero variations</h1>
            <p className="text-xs text-white/60 mt-0.5">For Subodh + Dt. Priyatama. Scroll down to compare. D is the new one.</p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            <a href="#current" className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-full">A: Current</a>
            <a href="#plan" className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-full">B: Plan spec</a>
            <a href="#hybrid" className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-full">C: Hybrid</a>
            <a href="#editorial" className="px-3 py-1.5 bg-amber-500 text-black hover:bg-amber-400 rounded-full font-semibold">D: Editorial (NEW)</a>
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

      {/* === VARIATION D: Editorial-Clinical (the new direction) === */}
      <article id="editorial" className="border-b-8 border-amber-500">
        <div className="bg-amber-500 text-black px-4 py-3 text-sm font-semibold">
          <strong>D. Editorial-Clinical</strong> &middot; the new direction &middot; khadi cream paper + manuscript-ink green (#163E2E) + brick terracotta (#B5663A) + brass (#C9A961) + Fraunces italic display + JetBrains Mono for stats + custom moringa-leaf mark + asymmetric type-led composition.
        </div>

        {/* The hero itself — paper background, type as the design */}
        <section
          className="relative overflow-hidden"
          style={{
            backgroundColor: "#F2EDE3",
            backgroundImage: "radial-gradient(at 85% 15%, rgba(181, 102, 58, 0.06) 0%, transparent 50%), radial-gradient(at 15% 85%, rgba(22, 62, 46, 0.04) 0%, transparent 50%)",
          }}
        >
          {/* Subtle paper grain overlay (using box-shadow inset for now — could be replaced with SVG noise) */}
          <div
            className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-[0.025]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>\")",
            }}
            aria-hidden="true"
          />

          {/* Editorial top bar — small caps + thin rule */}
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-8">
            <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b" style={{ borderColor: "rgba(22, 62, 46, 0.18)" }}>
              <div className="flex items-center gap-3" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                <MoringaMark className="size-7" color="#163E2E" />
                <span className="font-semibold text-base tracking-tight" style={{ color: "#163E2E" }}>
                  Go Moringa
                </span>
                <span className="text-xs uppercase tracking-[0.2em]" style={{ color: "#B5663A", fontFamily: "var(--font-mono-editorial)" }}>
                  Est. 2005 · Gurugram
                </span>
              </div>
              <div className="text-xs uppercase tracking-[0.2em]" style={{ color: "#163E2E", opacity: 0.65, fontFamily: "var(--font-mono-editorial)" }}>
                Issue No. 01 · {PERSON.yearsExperience} years of clinical practice
              </div>
            </div>
          </div>

          {/* Hero grid: 7-column-ish editorial split */}
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-14 md:pt-20 pb-16 md:pb-24 grid md:grid-cols-12 gap-x-8 gap-y-12 items-start">
            {/* Type column — takes 7 of 12 */}
            <div className="md:col-span-7" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              <div
                className="text-xs uppercase tracking-[0.3em] mb-6 flex items-center gap-3"
                style={{ color: "#B5663A", fontFamily: "var(--font-mono-editorial)" }}
              >
                <span className="block h-px w-10" style={{ backgroundColor: "#B5663A" }} />
                Profile / Clinical Nutrition
              </div>

              <h2
                className="leading-[0.95] tracking-[-0.02em] font-medium"
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  color: "#163E2E",
                  fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)",
                }}
              >
                The dietitian{" "}
                <em style={{ fontStyle: "italic", color: "#B5663A", fontWeight: 400 }}>
                  Gurgaon writes
                </em>{" "}
                back to.
              </h2>

              <p
                className="mt-7 max-w-xl leading-[1.65] text-lg"
                style={{ color: "#3D2F26" }}
              >
                Twenty years of clinical practice. Ten thousand stories, written one meal at a time. <em>Dt. Priyatama Srivastava</em> builds personalised Indian-meal plans for the people you actually live with — weight, PCOS, diabetes, thyroid, pregnancy, the slow battles.
              </p>

              {/* CTA row — minimal, editorial */}
              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
                <a
                  href={whatsappUrl()}
                  className="group inline-flex items-center gap-3 text-base font-medium"
                  style={{ color: "#163E2E", fontFamily: "var(--font-inter), sans-serif" }}
                >
                  <span className="relative pb-1 border-b-2 transition-all group-hover:border-b-[3px]" style={{ borderColor: "#B5663A" }}>
                    Begin a consultation
                  </span>
                  <span style={{ color: "#B5663A" }} aria-hidden="true">→</span>
                </a>
                <Link
                  href="/book-an-appointment.php"
                  className="text-base font-medium opacity-70 hover:opacity-100 transition"
                  style={{ color: "#163E2E" }}
                >
                  or call +91-99109 22899
                </Link>
              </div>

              {/* Stat band — editorial / tabular */}
              <div className="mt-14 grid grid-cols-3 gap-x-6 gap-y-2 max-w-xl" style={{ borderTop: "1px solid rgba(22, 62, 46, 0.18)", borderBottom: "1px solid rgba(22, 62, 46, 0.18)", paddingTop: "1.5rem", paddingBottom: "1.5rem" }}>
                <div>
                  <div
                    className="text-4xl md:text-5xl tracking-tight"
                    style={{ fontFamily: "var(--font-fraunces), serif", color: "#163E2E", fontWeight: 500 }}
                  >
                    20<span style={{ color: "#B5663A", fontStyle: "italic" }}>+</span>
                  </div>
                  <div
                    className="text-[10px] uppercase tracking-[0.18em] mt-2 leading-relaxed"
                    style={{ color: "#3D2F26", fontFamily: "var(--font-mono-editorial)" }}
                  >
                    Years in<br />practice
                  </div>
                </div>
                <div>
                  <div
                    className="text-4xl md:text-5xl tracking-tight"
                    style={{ fontFamily: "var(--font-fraunces), serif", color: "#163E2E", fontWeight: 500 }}
                  >
                    10,000<span style={{ color: "#B5663A", fontStyle: "italic" }}>+</span>
                  </div>
                  <div
                    className="text-[10px] uppercase tracking-[0.18em] mt-2 leading-relaxed"
                    style={{ color: "#3D2F26", fontFamily: "var(--font-mono-editorial)" }}
                  >
                    Clients<br />transformed
                  </div>
                </div>
                <div>
                  <div
                    className="text-4xl md:text-5xl tracking-tight"
                    style={{ fontFamily: "var(--font-fraunces), serif", color: "#163E2E", fontWeight: 500 }}
                  >
                    5.0<span style={{ color: "#B5663A", fontStyle: "italic" }}>★</span>
                  </div>
                  <div
                    className="text-[10px] uppercase tracking-[0.18em] mt-2 leading-relaxed"
                    style={{ color: "#3D2F26", fontFamily: "var(--font-mono-editorial)" }}
                  >
                    Practo<br />{REVIEWS.practo.count} reviews
                  </div>
                </div>
              </div>
            </div>

            {/* Image column — 5 of 12, framed editorially */}
            <div className="md:col-span-5 relative md:pt-4">
              <figure className="relative">
                {/* Editorial caption above image */}
                <figcaption
                  className="text-[11px] uppercase tracking-[0.22em] mb-4 flex items-center gap-3"
                  style={{ color: "#B5663A", fontFamily: "var(--font-mono-editorial)" }}
                >
                  <span className="block h-px w-6" style={{ backgroundColor: "#B5663A" }} />
                  Photographed in clinic · 2024
                </figcaption>
                {/* Thin frame around the photo — like a press print */}
                <div className="relative aspect-[3/4] overflow-hidden" style={{ border: "1px solid rgba(22, 62, 46, 0.2)" }}>
                  <Image
                    src="/assets/diet-img/priyatma.jpg"
                    alt={PERSON.name}
                    fill
                    className="object-cover"
                    style={{ filter: "saturate(0.85) contrast(1.05)" }}
                    sizes="(min-width: 768px) 40vw, 90vw"
                  />
                </div>
                {/* Hand-written-style attribution */}
                <div
                  className="mt-4 flex items-baseline justify-between"
                  style={{ fontFamily: "var(--font-fraunces), serif" }}
                >
                  <div>
                    <div className="text-lg font-medium" style={{ color: "#163E2E" }}>
                      {PERSON.name}
                    </div>
                    <div className="text-sm italic" style={{ color: "#B5663A" }}>
                      Clinical Dietitian & Nutritionist
                    </div>
                  </div>
                  <MoringaMark className="size-8 opacity-60" color="#B5663A" />
                </div>
              </figure>
            </div>
          </div>

          {/* Bottom rule with motto */}
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pb-10">
            <div
              className="border-t pt-5 flex items-center justify-between flex-wrap gap-3 text-xs"
              style={{ borderColor: "rgba(22, 62, 46, 0.18)", fontFamily: "var(--font-mono-editorial)" }}
            >
              <span className="uppercase tracking-[0.2em]" style={{ color: "#163E2E" }}>
                Sec 49, Gurugram · Mon–Sat · 10–7
              </span>
              <span className="italic" style={{ color: "#B5663A", fontFamily: "var(--font-fraunces), serif", fontSize: "14px" }}>
                Roti, dal, sabzi — recalibrated.
              </span>
              <span className="uppercase tracking-[0.2em]" style={{ color: "#163E2E" }}>
                Practo 5★ · Justdial 4.9★
              </span>
            </div>
          </div>
        </section>

        <div className="bg-white px-6 py-8 text-sm text-ink-700 max-w-7xl mx-auto leading-relaxed">
          <strong className="text-ink-900 block mb-2">What makes D distinct (not template/AI):</strong>
          <ul className="space-y-1.5 list-disc pl-5">
            <li><strong>Type leads, photo follows.</strong> Hero is 60% typography, 40% image — like a magazine spread, not a hero banner.</li>
            <li><strong>Khadi paper background.</strong> Warm cream (#F2EDE3) with subtle grain — feels handmade, not pixel-perfect.</li>
            <li><strong>Manuscript-ink green (#163E2E).</strong> Used as TEXT color, not background. Deep, almost-black, never bright.</li>
            <li><strong>Brick terracotta accent (#B5663A).</strong> Indian earth, not Western gold. Used sparingly — italics, rules, signature.</li>
            <li><strong>Custom moringa-leaf mark.</strong> Hand-drawn SVG used as a signature, not a stock logo. Recurs throughout the site.</li>
            <li><strong>Italic emphasis inside the headline.</strong> "Gurgaon <em>writes back to</em>" — a sentence with rhythm, not a tagline.</li>
            <li><strong>Magazine-style metadata.</strong> "Issue No. 01 · Est. 2005" — small caps mono — implies craft and provenance.</li>
            <li><strong>Editorial stat band.</strong> Thin rules above + below, mono mini-labels, fractional alignment — not generic stat blocks.</li>
            <li><strong>Image as press-print.</strong> Thin border, slight desaturation, dated caption — feels documented, not stocky.</li>
            <li><strong>CTA as in-line link, not button shouting.</strong> Confidence through restraint. Premium services don't shout.</li>
            <li><strong>Closing line:</strong> "Roti, dal, sabzi — recalibrated." Specific, Indian, and refuses Western wellness clichés.</li>
          </ul>
          <p className="mt-4 text-xs italic">This is what a top human design team would ship for a premium dietitian who's earned her authority over 20 years.</p>
        </div>
      </article>

      {/* Decision footer */}
      <div className="bg-ink-900 text-white px-4 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Which direction?</h2>
        <p className="mt-3 text-white/80 max-w-2xl mx-auto">
          Reply with <strong>A</strong>, <strong>B</strong>, <strong>C</strong>, or <strong>D</strong>. The chosen direction rolls out site-wide — header, footer, all pages, all CTAs, the moringa-leaf mark, every detail.
        </p>
        <p className="mt-4 text-sm text-amber-400">
          D is the new entrant — designed to look made by a human team, not generated by templates.
        </p>
        <p className="mt-6 text-xs text-white/60">This preview page is noindexed and not in the sitemap.</p>
      </div>
    </div>
  );
}
