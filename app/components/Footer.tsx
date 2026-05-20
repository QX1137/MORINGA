import Link from "next/link";
import { CONTACT, SOCIAL, REVIEWS, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <div className="text-2xl font-bold text-brand-400">Go Moringa</div>
          <p className="mt-3 text-sm text-white/70 leading-relaxed">
            {SITE.defaultDescription}
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="/weight-loss.php" className="hover:text-brand-400">Weight Loss</Link></li>
            <li><Link href="/weight-gain.php" className="hover:text-brand-400">Weight Gain</Link></li>
            <li><Link href="/figure-correction.php" className="hover:text-brand-400">Figure Correction</Link></li>
            <li><Link href="/therapeutic-diet.php" className="hover:text-brand-400">Therapeutic Diet</Link></li>
            <li><Link href="/pregnancy-diet.php" className="hover:text-brand-400">Pregnancy Diet</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Treatment</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="/treatment/diabetes.php" className="hover:text-brand-400">Diabetes</Link></li>
            <li><Link href="/treatment/pcod-pcos.php" className="hover:text-brand-400">PCOD / PCOS</Link></li>
            <li><Link href="/treatment/thyroid.php" className="hover:text-brand-400">Thyroid</Link></li>
            <li><Link href="/treatment/heart-disease.php" className="hover:text-brand-400">Heart Disease</Link></li>
            <li><Link href="/treatment.php" className="hover:text-brand-400">All conditions →</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <address className="not-italic text-sm text-white/80 leading-relaxed">
            {CONTACT.address.street}<br />
            {CONTACT.address.locality}, {CONTACT.address.city}<br />
            {CONTACT.address.region} {CONTACT.address.postalCode}, {CONTACT.address.countryName}
          </address>
          <div className="mt-3 text-sm space-y-1">
            <a href={`tel:${CONTACT.phoneTel}`} className="block hover:text-brand-400">{CONTACT.phone}</a>
            <a href={`mailto:${CONTACT.email}`} className="block hover:text-brand-400">{CONTACT.email}</a>
          </div>
          <div className="mt-4 flex gap-3 text-sm">
            <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-brand-400">Facebook</a>
            <a href={REVIEWS.practo.url} target="_blank" rel="noopener noreferrer" className="hover:text-brand-400">Practo {REVIEWS.practo.rating}★</a>
            <a href={REVIEWS.justdial.url} target="_blank" rel="noopener noreferrer" className="hover:text-brand-400">Justdial {REVIEWS.justdial.rating}★</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 text-xs text-white/60 flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Go Moringa Nutri Diet Clinic. All rights reserved.</span>
          <span>Best Dietitian in Gurgaon &middot; Delhi NCR &middot; India</span>
        </div>
      </div>
    </footer>
  );
}
