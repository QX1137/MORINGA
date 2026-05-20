"use client";

import { CONTACT, whatsappUrl, phoneUrl } from "@/lib/site";

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
  }
}

function track(event: string, label: string) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", event, { event_category: "lead", event_label: label });
  }
}

/**
 * Editorial-restrained floating CTAs.
 * - Mobile bottom bar: ink + clay duotone, no "shouting" colors
 * - Desktop floating buttons: small, restrained, signature mark adjacent
 */
export function FloatingCTA() {
  return (
    <>
      {/* Mobile bottom bar */}
      <div className="fixed bottom-0 inset-x-0 z-50 flex md:hidden border-t border-[#d8c8a8]/80 shadow-[0_-4px_20px_-8px_rgba(31,22,18,0.15)] bg-paper">
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp_click", "floating_mobile")}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-medium text-ink"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon className="size-4 text-clay" />
          <span>WhatsApp</span>
        </a>
        <div className="w-px bg-[#d8c8a8]/80" />
        <a
          href={phoneUrl()}
          onClick={() => track("phone_click", "floating_mobile")}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-medium text-paper bg-ink"
          aria-label={`Call ${CONTACT.phone}`}
        >
          <PhoneIcon className="size-4" />
          <span>Call clinic</span>
        </a>
      </div>

      {/* Desktop floating — restrained, small, ink-on-paper */}
      <div className="hidden md:flex fixed bottom-7 right-7 z-50 flex-col gap-2.5">
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp_click", "floating_desktop")}
          className="group size-12 rounded-full bg-paper hover:bg-paper-dark border border-[#d8c8a8] flex items-center justify-center text-ink shadow-lg shadow-warm-900/10 hover:scale-105 transition"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon className="size-5 text-clay group-hover:scale-110 transition" />
        </a>
        <a
          href={phoneUrl()}
          onClick={() => track("phone_click", "floating_desktop")}
          className="group size-12 rounded-full bg-ink hover:bg-ink-deep flex items-center justify-center text-paper shadow-lg shadow-warm-900/15 hover:scale-105 transition"
          aria-label={`Call ${CONTACT.phone}`}
        >
          <PhoneIcon className="size-5 group-hover:scale-110 transition" />
        </a>
      </div>
    </>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.24 1.05l-2.21 2.16z" />
    </svg>
  );
}
