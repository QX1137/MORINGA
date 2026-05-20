import Link from "next/link";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { MoringaMark } from "@/app/components/MoringaMark";
import { CONTACT, whatsappUrl } from "@/lib/site";

export const metadata = {
  title: "Page Not Found | Go Moringa",
  description: "The page you're looking for isn't here. Browse our services, treatments, or get in touch.",
};

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Weight Loss", href: "/weight-loss.php" },
  { label: "PCOS / PCOD", href: "/treatment/pcod-pcos.php" },
  { label: "Diabetes", href: "/treatment/diabetes.php" },
  { label: "Thyroid", href: "/treatment/thyroid.php" },
  { label: "About Dt. Priyatama", href: "/priyatama-srivastava.php" },
  { label: "Book Appointment", href: "/book-an-appointment.php" },
  { label: "All Treatments", href: "/treatment.php" },
];

export default function NotFound() {
  return (
    <>
      <Header />
      <section className="bg-paper-grain py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <MoringaMark className="size-12 text-clay mx-auto mb-6" />
          <div className="text-eyebrow text-clay mb-3">Error · 404</div>
          <div className="font-display font-medium text-clay leading-none" style={{ fontSize: "clamp(5rem, 12vw, 8rem)" }}>
            404
          </div>
          <h1 className="mt-4 font-display text-3xl md:text-4xl font-medium text-ink leading-tight">
            This page is <em className="italic-clay">not here</em>.
          </h1>
          <p className="mt-4 text-warm-700 text-lg leading-relaxed max-w-xl mx-auto">
            It may have moved, or the URL might be slightly off. Try one of these popular pages instead.
          </p>

          <div className="mt-10 flex flex-wrap gap-2 justify-center">
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 border border-[#d8c8a8]/70 hover:border-clay text-ink hover:text-clay transition text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-12 pt-10 border-t border-[#d8c8a8]/60">
            <p className="text-sm text-warm-700 mb-4">Or get in touch directly:</p>
            <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 text-base font-medium text-ink">
                <span className="relative pb-1 border-b-2 border-clay transition-all group-hover:border-b-[3px]">
                  WhatsApp us
                </span>
                <span className="text-clay" aria-hidden="true">→</span>
              </a>
              <a href={`tel:${CONTACT.phoneTel}`} className="text-base font-medium text-ink/70 hover:text-ink transition">
                or call {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
