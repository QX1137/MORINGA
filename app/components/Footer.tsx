import Image from "next/image";
import Link from "next/link";
import { CONTACT, REVIEWS, SOCIAL, PERSON } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[#d8c8a8]/60 bg-paper-dark">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-14 grid gap-10 md:grid-cols-12">
        {/* Wordmark + address + verified-on */}
        <div className="md:col-span-4">
          <Link href="/" className="inline-flex items-center gap-3" aria-label="Go Moringa Diet Clinic — home">
            <Image
              src="/go-moringa-leaves.png"
              alt="Go Moringa Diet Clinic logo"
              width={165}
              height={73}
              className="h-9 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-2xl tracking-tight leading-none font-display font-medium text-ink">
                Go Moringa
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] font-mono text-clay leading-none mt-1">
                Diet Clinic
              </span>
            </div>
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-warm-700 max-w-md">
            Personalised Indian-meal protocols by <em className="not-italic font-medium text-ink">Dt. Priyatama Srivastava</em> — for {PERSON.yearsExperience} years and {PERSON.clientCount} clients across India and worldwide.
          </p>
          <address className="not-italic mt-6 text-sm leading-relaxed text-warm-700">
            {CONTACT.address.street}<br />
            {CONTACT.address.locality}, {CONTACT.address.city}<br />
            {CONTACT.address.region} {CONTACT.address.postalCode}, {CONTACT.address.countryName}
          </address>
          <div className="mt-4 text-sm space-y-1">
            <a href={`tel:${CONTACT.phoneTel}`} className="block text-ink hover:text-clay transition">{CONTACT.phone}</a>
            <a href={`mailto:${CONTACT.email}`} className="block text-ink hover:text-clay transition">{CONTACT.email}</a>
          </div>
          <h3 className="text-eyebrow text-clay mt-7 mb-3">Verified on</h3>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <a href={REVIEWS.practo.url} target="_blank" rel="noopener noreferrer" className="text-ink/85 hover:text-clay transition">
              Practo <span className="font-mono text-xs">{REVIEWS.practo.rating}★</span>
            </a>
            <a href={REVIEWS.justdial.url} target="_blank" rel="noopener noreferrer" className="text-ink/85 hover:text-clay transition">
              Justdial <span className="font-mono text-xs">{REVIEWS.justdial.rating}★</span>
            </a>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="text-ink/85 hover:text-clay transition">Instagram</a>
            <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="text-ink/85 hover:text-clay transition">YouTube</a>
          </div>
        </div>

        {/* Diet Plans column — keyword landing pages */}
        <div className="md:col-span-2">
          <h3 className="text-eyebrow text-clay mb-4">Diet Plans</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/online-dietitian-consultation" className="text-ink/85 hover:text-clay transition">Online Consultation</Link></li>
            <li><Link href="/weight-loss-diet-plan" className="text-ink/85 hover:text-clay transition">Weight Loss Diet Plan</Link></li>
            <li><Link href="/indian-diet-plan-for-weight-loss" className="text-ink/85 hover:text-clay transition">Indian Diet Plan</Link></li>
            <li><Link href="/pcos-diet-plan" className="text-ink/85 hover:text-clay transition">PCOS Diet Plan</Link></li>
            <li><Link href="/diabetes-diet-plan" className="text-ink/85 hover:text-clay transition">Diabetes Diet Plan</Link></li>
            <li><Link href="/thyroid-diet-plan" className="text-ink/85 hover:text-clay transition">Thyroid Diet Plan</Link></li>
            <li><Link href="/cholesterol-diet-plan" className="text-ink/85 hover:text-clay transition">Cholesterol Diet Plan</Link></li>
            <li><Link href="/high-blood-pressure-diet-plan" className="text-ink/85 hover:text-clay transition">Blood Pressure Diet</Link></li>
            <li><Link href="/fatty-liver-diet-plan" className="text-ink/85 hover:text-clay transition">Fatty Liver Diet</Link></li>
            <li><Link href="/uric-acid-diet-plan" className="text-ink/85 hover:text-clay transition">Uric Acid Diet</Link></li>
            <li><Link href="/kidney-diet-plan" className="text-ink/85 hover:text-clay transition">Kidney Diet Plan</Link></li>
          </ul>
        </div>

        {/* Services + Who we help column */}
        <div className="md:col-span-2">
          <h3 className="text-eyebrow text-clay mb-4">Services</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/weight-loss.php" className="text-ink/85 hover:text-clay transition">Weight Loss</Link></li>
            <li><Link href="/weight-gain.php" className="text-ink/85 hover:text-clay transition">Weight Gain</Link></li>
            <li><Link href="/figure-correction.php" className="text-ink/85 hover:text-clay transition">Figure Correction</Link></li>
            <li><Link href="/therapeutic-diet.php" className="text-ink/85 hover:text-clay transition">Therapeutic</Link></li>
            <li><Link href="/pregnancy-diet.php" className="text-ink/85 hover:text-clay transition">Pregnancy</Link></li>
          </ul>
          <h3 className="text-eyebrow text-clay mt-7 mb-4">Who we help</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/dietitian-for-women" className="text-ink/85 hover:text-clay transition">Dietitian for Women</Link></li>
            <li><Link href="/weight-loss-after-pregnancy" className="text-ink/85 hover:text-clay transition">Post-Pregnancy</Link></li>
            <li><Link href="/child-nutritionist" className="text-ink/85 hover:text-clay transition">Child Nutritionist</Link></li>
            <li><Link href="/diet-plan-for-senior-citizens" className="text-ink/85 hover:text-clay transition">Senior Citizens</Link></li>
            <li><Link href="/corporate-wellness-program" className="text-ink/85 hover:text-clay transition">Corporate Wellness</Link></li>
          </ul>
        </div>

        {/* Conditions column */}
        <div className="md:col-span-2">
          <h3 className="text-eyebrow text-clay mb-4">Conditions</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/treatment/diabetes.php" className="text-ink/85 hover:text-clay transition">Diabetes</Link></li>
            <li><Link href="/treatment/pcod-pcos.php" className="text-ink/85 hover:text-clay transition">PCOS / PCOD</Link></li>
            <li><Link href="/treatment/thyroid.php" className="text-ink/85 hover:text-clay transition">Thyroid</Link></li>
            <li><Link href="/treatment/heart-disease.php" className="text-ink/85 hover:text-clay transition">Heart Disease</Link></li>
            <li><Link href="/treatment.php" className="text-ink/85 hover:text-clay transition italic">All conditions →</Link></li>
            <li><Link href="/faq" className="text-ink/85 hover:text-clay transition italic">Nutrition FAQ →</Link></li>
          </ul>
        </div>

        {/* Locations column */}
        <div className="md:col-span-2">
          <h3 className="text-eyebrow text-clay mb-4">Find us</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/best-dietitian-in-india" className="text-ink/85 hover:text-clay transition">Best Dietitian in India</Link></li>
            <li><Link href="/best-dietitian-in-delhi-ncr" className="text-ink/85 hover:text-clay transition">Best in Delhi NCR</Link></li>
            <li><Link href="/dietician-in-gurgaon.php" className="text-ink/85 hover:text-clay transition">Dietitian in Gurgaon</Link></li>
            <li><Link href="/nutritionist-in-gurgaon" className="text-ink/85 hover:text-clay transition">Nutritionist · Gurgaon</Link></li>
            <li><Link href="/diet-clinic-in-gurgaon" className="text-ink/85 hover:text-clay transition">Diet Clinic · Gurgaon</Link></li>
            <li><Link href="/dietitian-in-dlf-gurgaon" className="text-ink/85 hover:text-clay transition">DLF Phase 1–5</Link></li>
            <li><Link href="/dietitian-in-sohna-road" className="text-ink/85 hover:text-clay transition">Sohna Road</Link></li>
            <li><Link href="/dietitian-in-sushant-lok" className="text-ink/85 hover:text-clay transition">Sushant Lok</Link></li>
            <li><Link href="/dietician-in-delhi.php" className="text-ink/85 hover:text-clay transition">Delhi</Link></li>
            <li><Link href="/dietician-in-noida.php" className="text-ink/85 hover:text-clay transition">Noida</Link></li>
            <li><Link href="/dietitian-in-faridabad.php" className="text-ink/85 hover:text-clay transition">Faridabad</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="border-t border-[#d8c8a8]/60">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] uppercase tracking-[0.2em] font-mono text-warm-500">
          <span>© {new Date().getFullYear()} Go Moringa Nutri Diet Clinic · Gurugram</span>
          <span className="italic font-display normal-case tracking-normal text-clay text-sm">
            Roti, dal, sabzi — recalibrated.
          </span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
