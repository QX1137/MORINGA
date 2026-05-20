import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { JsonLd } from "@/app/components/JsonLd";
import { CONTACT, PERSON, REVIEWS, SITE, whatsappUrl } from "@/lib/site";
import {
  breadcrumbSchema,
  localBusinessSchema,
  personSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Dt. Priyatama Srivastava | Best Dietitian in Gurgaon | Go Moringa",
  description: `Dt. Priyatama Srivastava — clinical dietitian in Gurgaon with ${PERSON.yearsExperience}+ years of experience and ${PERSON.clientCount} clients. Specialises in weight loss, PCOS, diabetes, thyroid, and therapeutic diets.`,
  alternates: { canonical: "/priyatama-srivastava.php" },
};

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

      <section className="relative bg-brand-gradient text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,white,transparent_60%)]" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-white/70 uppercase tracking-wider text-sm font-semibold">Meet the dietitian</span>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">{PERSON.name}</h1>
            <p className="mt-2 text-lg font-script text-cream-100" style={{ fontFamily: "var(--font-script)" }}>
              {PERSON.yearsExperience} years of helping people eat well &amp; live well
            </p>
            <p className="mt-5 text-lg text-white/90 max-w-xl leading-relaxed">
              Clinical dietitian and founder of Go Moringa Diet Clinic. {PERSON.clientCount} clients across India and worldwide. {REVIEWS.practo.rating}★ on Practo with {REVIEWS.practo.count}+ verified reviews.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-white text-brand-700 font-semibold hover:bg-cream-100 transition">
                Free WhatsApp Consultation
              </a>
              <Link href="/book-an-appointment.php" className="px-6 py-3 rounded-full bg-brand-900 text-white font-semibold hover:bg-ink-900 transition">
                Book Appointment
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <Image src="/assets/diet-img/priyatma.jpg" alt={PERSON.name} fill priority className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-14 space-y-5 text-lg text-ink-700 leading-relaxed">
        <h2 className="text-3xl font-bold text-ink-900 mb-3">About {PERSON.name}</h2>

        <p>
          Priyatama Srivastava is a clinical dietitian who has practised in Gurgaon for {PERSON.yearsExperience} years. Her work centres on a simple belief — that most lifestyle diseases respond more to disciplined diet than to medication alone. Over two decades, she has guided more than 10,000 clients through structured nutrition programs, addressing everything from routine weight loss to complex therapeutic diets for diabetes, cardiac conditions, PCOS, thyroid disorders, kidney conditions, and high-risk pregnancies.
        </p>

        <p>
          Her approach begins with a comprehensive clinical evaluation — current health status, family medical history, medications, lifestyle, food preferences, and goals. She does not believe in one-size-fits-all dietary protocols. Each client&rsquo;s plan is built around their actual kitchen, their actual schedule, and their actual medical context. The diet is Indian — roti, dal, sabzi, rice, curd, paneer, seasonal fruit — calibrated for the specific condition and goal. No foreign foods, no banned food groups, no commercial product lines.
        </p>

        <p>
          Beyond the dietary protocols, Priyatama has built a reputation for personal connection with her clients. She maintains long-term relationships — many of her clients return for follow-up programs years later, refer their family, and stay in touch through life transitions. Her cheerful and warm style of working has made her not just a clinical practitioner but, in her own words, &ldquo;more friends than clients.&rdquo;
        </p>

        <p>
          The services she offers go well beyond diet charts. She regularly advises and guides her clients on lifestyle adjustments, exercise integration, sleep, stress management, and the long-term sustainability of healthy eating habits. She coordinates with cardiologists, endocrinologists, gynaecologists, and obstetricians across the Delhi NCR region — particularly Apollo, Max, BLK, Fortis, and Medanta hospital systems — when client conditions require multi-specialist coordination.
        </p>

        <h2 className="text-3xl font-bold text-ink-900 mt-10 mb-3">Areas of specialty</h2>
        <ul className="space-y-2 pl-5 list-disc">
          <li>Weight loss (sustainable, Indian-meal-based protocols)</li>
          <li>Weight gain (healthy, lean-mass-focused)</li>
          <li>Figure correction (pre-wedding, post-pregnancy body recomposition)</li>
          <li>PCOS / PCOD (hormonal context, weight, fertility)</li>
          <li>Diabetes management and reversal protocols</li>
          <li>Thyroid disorders (hypo, hyper, Hashimoto&rsquo;s)</li>
          <li>Hypertension and cardiovascular disease</li>
          <li>Cholesterol and lipid management</li>
          <li>Healthy pregnancy diet (including GDM, anaemia, complications)</li>
          <li>Therapeutic diets for kidney, liver, and other chronic conditions</li>
          <li>Post-cancer and post-surgery recovery nutrition</li>
        </ul>

        <h2 className="text-3xl font-bold text-ink-900 mt-10 mb-3">Recognition and reach</h2>
        <p>
          Verified reviews collected over two decades: {REVIEWS.practo.rating}/5 on Practo ({REVIEWS.practo.count}+ reviews), {REVIEWS.justdial.rating}/5 on Justdial ({REVIEWS.justdial.count}+ reviews), additional profile on Lybrate. Priyatama also runs an active presence on Instagram <a href="https://www.instagram.com/dt_priyatamasrivastava/" className="text-brand-600 underline" target="_blank" rel="noopener noreferrer">@dt_priyatamasrivastava</a> and the official Go Moringa pages on Facebook, Twitter, and YouTube.
        </p>
      </section>

      <section className="bg-ink-900 text-white">
        <div className="max-w-4xl mx-auto px-4 py-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to start with Priyatama?</h2>
          <p className="mt-3 text-white/80">Free 15-minute WhatsApp consultation to understand your goal.</p>
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
