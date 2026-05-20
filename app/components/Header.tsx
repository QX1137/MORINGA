import Link from "next/link";
import { CONTACT, phoneUrl } from "@/lib/site";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about.php" },
  { label: "Services", href: "/services.php" },
  { label: "Treatment", href: "/treatment.php" },
  { label: "Recipes", href: "/blog.php" },
  { label: "Package", href: "/package.php" },
  { label: "Blog", href: "/blog.php" },
  { label: "Contact", href: "/contact.php" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-ink-900/10">
      {/* Top bar — phone + tagline */}
      <div className="bg-brand-700 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <span className="hidden sm:inline">20+ years &middot; 10,000+ clients &middot; 5★ on Practo</span>
          <a href={phoneUrl()} className="font-medium hover:underline">
            Call {CONTACT.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-3xl font-bold text-brand-600 leading-none">Go Moringa</span>
          <span className="font-script text-2xl text-brand-500 leading-none -mb-1" style={{ fontFamily: "var(--font-script)" }}>
            wellness
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-ink-700 hover:text-brand-600 font-medium transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/book-an-appointment.php"
          className="hidden lg:inline-flex px-5 py-2 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-full transition"
        >
          Book Appointment
        </Link>
      </div>
    </header>
  );
}
