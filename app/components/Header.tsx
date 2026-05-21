import Link from "next/link";
import { MoringaMark } from "./MoringaMark";
import { LiveAvailability } from "./LiveAvailability";
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
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-2 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-mono text-paper/85">
            <span>Est. 2005</span>
            <span className="opacity-50">·</span>
            <span>Sector 49, Gurugram</span>
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
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <MoringaMark className="size-9 text-ink group-hover:text-clay transition" />
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

        {/* Mobile call CTA */}
        <a
          href={phoneUrl()}
          className="lg:hidden inline-flex items-center gap-2 text-sm font-medium text-ink"
          aria-label="Call clinic"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.24 1.05l-2.21 2.16z" />
          </svg>
          <span className="hidden sm:inline">Call</span>
        </a>
      </div>
    </header>
  );
}
