import Link from "next/link";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
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
      <section className="max-w-3xl mx-auto px-4 py-20 text-center">
        <div className="text-7xl font-bold text-brand-600">404</div>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-ink-900">Page not found</h1>
        <p className="mt-3 text-ink-700">
          The page you&rsquo;re looking for isn&rsquo;t here. It may have moved, or the URL might be slightly off. Try one of these popular pages instead.
        </p>

        <div className="mt-8 flex flex-wrap gap-2 justify-center">
          {QUICK_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-full bg-cream-100 hover:bg-brand-100 border border-ink-900/10 text-ink-900 hover:text-brand-700 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mt-10 pt-10 border-t border-ink-900/10">
          <p className="text-sm text-ink-700">Or get in touch directly:</p>
          <div className="mt-3 flex flex-wrap gap-3 justify-center">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium transition"
            >
              WhatsApp us
            </a>
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="px-5 py-2 rounded-full bg-white border border-ink-900/10 text-ink-900 hover:bg-cream-50 text-sm font-medium transition"
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
