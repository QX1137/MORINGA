import Image from "next/image";
import Link from "next/link";
import { CONTACT, REVIEWS, SOCIAL, PERSON } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[#d8c8a8]/60 bg-paper-dark">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-14 grid gap-10 md:grid-cols-12">
        {/* Wordmark + address */}
        <div className="md:col-span-5">
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
        </div>

        {/* Services column */}
        <div className="md:col-span-2">
          <h3 className="text-eyebrow text-clay mb-4">Services</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/weight-loss.php" className="text-ink/85 hover:text-clay transition">Weight Loss</Link></li>
            <li><Link href="/weight-gain.php" className="text-ink/85 hover:text-clay transition">Weight Gain</Link></li>
            <li><Link href="/figure-correction.php" className="text-ink/85 hover:text-clay transition">Figure Correction</Link></li>
            <li><Link href="/therapeutic-diet.php" className="text-ink/85 hover:text-clay transition">Therapeutic</Link></li>
            <li><Link href="/pregnancy-diet.php" className="text-ink/85 hover:text-clay transition">Pregnancy</Link></li>
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
          </ul>
        </div>

        {/* Locations + social */}
        <div className="md:col-span-3">
          <h3 className="text-eyebrow text-clay mb-4">We see clients from</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/dietician-in-gurgaon.php" className="text-ink/85 hover:text-clay transition">Gurgaon</Link></li>
            <li><Link href="/dietician-in-delhi.php" className="text-ink/85 hover:text-clay transition">Delhi</Link></li>
            <li><Link href="/dietician-in-noida.php" className="text-ink/85 hover:text-clay transition">Noida</Link></li>
            <li><Link href="/dietitian-in-faridabad.php" className="text-ink/85 hover:text-clay transition">Faridabad</Link></li>
            <li className="text-ink/60 italic text-xs pt-1">+ pan-India online</li>
          </ul>
          <h3 className="text-eyebrow text-clay mt-7 mb-4">Verified on</h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href={REVIEWS.practo.url} target="_blank" rel="noopener noreferrer" className="text-ink/85 hover:text-clay transition">
                Practo · <span className="font-mono text-xs">{REVIEWS.practo.rating}★ ({REVIEWS.practo.count})</span>
              </a>
            </li>
            <li>
              <a href={REVIEWS.justdial.url} target="_blank" rel="noopener noreferrer" className="text-ink/85 hover:text-clay transition">
                Justdial · <span className="font-mono text-xs">{REVIEWS.justdial.rating}★ ({REVIEWS.justdial.count})</span>
              </a>
            </li>
            <li>
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="text-ink/85 hover:text-clay transition">
                Instagram
              </a>
            </li>
            <li>
              <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="text-ink/85 hover:text-clay transition">
                YouTube
              </a>
            </li>
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
