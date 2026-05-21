"use client";

/**
 * Exit-intent popup — fires when the user moves the cursor toward the top of
 * the viewport (signalling tab/window close). Honest implementation: shows once
 * per session, respects a 7-day dismissal cooldown via localStorage, and is
 * disabled on mobile (where `mouseleave` is unreliable and the pattern is
 * intrusive on small screens).
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import { MoringaMark } from "./MoringaMark";
import { whatsappUrl } from "@/lib/site";

const DISMISS_KEY = "gm-exit-intent-dismissed-at";
const COOLDOWN_MS = 7 * 24 * 60 * 60 * 1000; // 7 days
const ARM_DELAY_MS = 12_000; // 12 s on page before exit intent can fire

type GtagFn = (...args: unknown[]) => void;
declare global {
  interface Window {
    gtag?: GtagFn;
  }
}

function trackExitIntent(event: "shown" | "dismissed" | "clicked", label: string) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", `exit_intent_${event}`, {
      event_category: "lead",
      event_label: label,
    });
  }
}

function isMobile() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 768px), (pointer: coarse)").matches;
}

function isInCooldown() {
  if (typeof window === "undefined") return true;
  try {
    const raw = window.localStorage.getItem(DISMISS_KEY);
    if (!raw) return false;
    const dismissedAt = Number(raw);
    if (!Number.isFinite(dismissedAt)) return false;
    return Date.now() - dismissedAt < COOLDOWN_MS;
  } catch {
    return false;
  }
}

function markDismissed() {
  try {
    window.localStorage.setItem(DISMISS_KEY, String(Date.now()));
  } catch {
    // localStorage blocked — fail silently; popup will simply re-arm next page load
  }
}

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isMobile()) return;
    if (isInCooldown()) return;

    let armed = false;
    const armTimer = window.setTimeout(() => {
      armed = true;
    }, ARM_DELAY_MS);

    function onLeave(e: MouseEvent) {
      if (!armed) return;
      if (e.clientY > 0) return;
      // disarm immediately so we never show twice in one session
      armed = false;
      setOpen(true);
      trackExitIntent("shown", "diet_report_offer");
    }

    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.clearTimeout(armTimer);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  function dismiss(reason: "dismissed" | "clicked", label: string) {
    markDismissed();
    setOpen(false);
    trackExitIntent(reason, label);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ink/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-title"
      onClick={() => dismiss("dismissed", "backdrop")}
    >
      <div
        className="relative w-full max-w-lg bg-paper border border-clay/60 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          type="button"
          onClick={() => dismiss("dismissed", "close_button")}
          className="absolute top-3 right-3 size-9 flex items-center justify-center text-warm-500 hover:text-clay transition"
          aria-label="Close"
        >
          <span className="text-2xl leading-none" aria-hidden="true">×</span>
        </button>

        <div className="p-7 md:p-10">
          <MoringaMark className="size-9 text-clay mb-4" />
          <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            Before you go
          </div>
          <h2
            id="exit-intent-title"
            className="font-display tracking-[-0.02em] font-medium text-ink leading-[1.05]"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
          >
            Take the <em className="italic-clay">free read</em>.<br />
            Ninety seconds.
          </h2>
          <p className="mt-4 text-base text-warm-700 leading-[1.6]">
            Asian Indian BMI thresholds, a programme match from Dt. Priyatama&rsquo;s practice, three things you can start today. No account. No data leaves your browser unless you choose to send it.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3">
            <Link
              href="/diet-type-report"
              onClick={() => dismiss("clicked", "diet_report")}
              className="group inline-flex items-center gap-3 text-base font-medium text-ink"
            >
              <span className="relative pb-1 border-b-2 border-clay group-hover:border-b-[3px] transition-all">
                Read my report
              </span>
              <span className="text-clay" aria-hidden="true">→</span>
            </Link>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => dismiss("clicked", "whatsapp")}
              className="text-sm font-medium text-warm-700 hover:text-ink transition"
            >
              or just message us
            </a>
          </div>

          <p className="mt-5 text-eyebrow text-warm-500 pt-4 border-t border-[#d8c8a8]/60">
            We will not show this again for seven days.
          </p>
        </div>
      </div>
    </div>
  );
}
