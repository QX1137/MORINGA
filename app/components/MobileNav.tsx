"use client";

/**
 * Mobile navigation — hamburger button + full-screen editorial menu.
 *
 * The desktop <Header> nav is `hidden lg:flex`; below lg there was no
 * navigation at all. This component fills that gap for phones and tablets:
 * a hamburger in the header opens a full-screen paper-coloured overlay with
 * the primary nav, the diet-plan landing pages, and WhatsApp / call actions.
 *
 * Client component: holds the open/closed state, locks body scroll while
 * open, and closes on Escape or on any link tap.
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import { MoringaMark } from "./MoringaMark";
import { CONTACT, phoneUrl, whatsappUrl } from "@/lib/site";

const NAV = [
  { label: "Services", href: "/services.php" },
  { label: "Conditions", href: "/treatment.php" },
  { label: "About", href: "/priyatama-srivastava.php" },
  { label: "Packages", href: "/package.php" },
  { label: "Journal", href: "/blog.php" },
  { label: "Contact", href: "/contact.php" },
];

const PLANS = [
  { label: "Online Consultation", href: "/online-dietitian-consultation" },
  { label: "Weight Loss Diet Plan", href: "/weight-loss-diet-plan" },
  { label: "PCOS Diet Plan", href: "/pcos-diet-plan" },
  { label: "Diabetes Diet Plan", href: "/diabetes-diet-plan" },
  { label: "Thyroid Diet Plan", href: "/thyroid-diet-plan" },
  { label: "Nutrition FAQ", href: "/faq" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the overlay is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="lg:hidden inline-flex items-center justify-center size-11 -mr-2 text-ink"
        aria-label="Open menu"
        aria-expanded={open}
      >
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <line x1="3" y1="7" x2="21" y2="7" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="17" x2="21" y2="17" />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-[70] bg-paper flex flex-col lg:hidden" role="dialog" aria-modal="true" aria-label="Site menu">
          {/* Top row — wordmark + close */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#d8c8a8]/70 shrink-0">
            <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
              <MoringaMark className="size-8 text-ink" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-xl font-medium text-ink">Go Moringa</span>
                <span className="text-[10px] uppercase tracking-[0.18em] font-mono text-clay mt-1">Diet Clinic</span>
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center size-11 -mr-2 text-ink"
              aria-label="Close menu"
            >
              <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </svg>
            </button>
          </div>

          {/* Scrollable nav body */}
          <div className="flex-1 overflow-y-auto px-5 py-6">
            <div className="text-eyebrow text-clay mb-1">Explore</div>
            <nav className="flex flex-col">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl font-medium text-ink py-3.5 border-b border-[#d8c8a8]/50 flex items-center justify-between group"
                >
                  {item.label}
                  <span className="text-clay opacity-50 group-hover:opacity-100 transition" aria-hidden="true">→</span>
                </Link>
              ))}
            </nav>

            <div className="text-eyebrow text-clay mt-8 mb-1">Diet plans</div>
            <nav className="flex flex-col">
              {PLANS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-ink/85 py-2.5 border-b border-[#d8c8a8]/40"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Sticky action bar */}
          <div className="border-t border-[#d8c8a8]/70 p-4 grid grid-cols-2 gap-3 shrink-0">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-ink hover:bg-ink-deep text-paper text-sm font-medium transition rounded-sm"
            >
              WhatsApp
            </a>
            <a
              href={phoneUrl()}
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 border border-ink/30 text-ink text-sm font-medium transition rounded-sm"
            >
              Call {CONTACT.phone}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
