import Image from "next/image";
import Link from "next/link";
import { LiveAvailability } from "./LiveAvailability";
import { MobileNav } from "./MobileNav";
import { CONTACT, PERSON, phoneUrl } from "@/lib/site";

const NAV = [
  { label: "Services", href: "/services.php" },
  { label: "Conditions", href: "/treatment.php" },
  { label: "About", href: "/priyatama-srivastava.php" },
  { label: "Packages", href: "/package.php" },
  { label: "Journal", href: "/blog.php" },
  { label: "Contact", href: "/contact.php" },
];

export function Header() {
  return (
    <header className="bg-paper border-b border-[#d8c8a8]/60">
      {/* Editorial top band — provenance metadata in mono */}
      <div className="bg-ink text-paper">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-2 flex items-center justify-between gap-3">
          {/* Provenance metadata. On small phones the location + live status
              are hidden so the band stays a single tidy line (Est. 2005 + phone);
              they reappear from sm: upward where there is room. */}
          <div className="flex items-center gap-2.5 sm:gap-3 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-mono text-paper/85 min-w-0">
            <span className="shrink-0">Est. 2005</span>
            <span className="opacity-50 hidden sm:inline">·</span>
            <span className="hidden sm:inline">Sector 49, Gurugram</span>
            <span className="opacity-50 hidden md:inline">·</span>
            <span className="hidden md:inline text-paper">
              {/* Live clinic status — replaces static hours text */}
              <LiveAvailability variant="compact" />
            </span>
          </div>
          <a
            href={phoneUrl()}
            className="text-[11px] uppercase tracking-[0.2em] font-mono text-paper hover:text-clay-soft transition"
          >
            {CONTACT.phone}
          </a>
        </div>
      </div>

      {/* Main nav — wordmark left, links centre/right */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4 md:py-5 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 shrink-0 group" aria-label="Go Moringa Diet Clinic — home">
          {/* Real Go Moringa leaf mark (from the original brand logo) +
              the Fraunces wordmark. Replaces the hand-drawn MoringaMark. */}
          <Image
            src="/go-moringa-leaves.png"
            alt="Go Moringa Diet Clinic logo"
            width={165}
            height={73}
            priority
            className="h-8 w-auto"
          />
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl tracking-tight leading-none font-display font-medium text-ink">
              Go Moringa
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] font-mono text-clay leading-none mt-1">
              Diet Clinic
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/85 hover:text-clay transition relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-clay scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </nav>

        <Link
          href="/book-an-appointment.php"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-ink hover:bg-ink-deep text-paper text-sm font-medium transition rounded-sm"
        >
          Book consultation
          <span aria-hidden="true">→</span>
        </Link>

        {/* Mobile: the MENU button (phone is already in the top band,
            the floating bar, and inside the menu itself). */}
        <MobileNav />
      </div>
    </header>
  );
}
