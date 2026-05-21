"use client";

/**
 * Honest clinic-status indicator.
 *
 * Computes whether the Sector 49 clinic is currently open (Mon–Sat, 10:00–19:00 IST)
 * using Intl.DateTimeFormat with the Asia/Kolkata timezone — works correctly
 * regardless of the visitor's device timezone. No fake "3 slots left" pressure.
 * No countdown timers. Just real opening hours, honestly displayed.
 */

import { useEffect, useState } from "react";

const TZ = "Asia/Kolkata";
const OPEN_HOUR = 10; // 10:00 IST
const CLOSE_HOUR = 19; // 19:00 IST
const OPEN_DAYS = [1, 2, 3, 4, 5, 6]; // Mon-Sat (Sun = 0)

type Status =
  | { kind: "open"; closesAt: string }
  | { kind: "closed"; opensWhen: "today" | "tomorrow" | "monday"; opensAt: string };

function partsInTZ(d: Date) {
  // Returns { hour, dayOfWeek } as seen in Asia/Kolkata regardless of viewer TZ
  const formatter = new Intl.DateTimeFormat("en-IN", {
    timeZone: TZ,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    weekday: "short",
  });
  const parts = formatter.formatToParts(d);
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? "0");
  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "Mon";
  const dayMap: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  return { hour, dayOfWeek: dayMap[weekday] ?? 1 };
}

function computeStatus(now: Date): Status {
  const { hour, dayOfWeek } = partsInTZ(now);
  const isOpenDay = OPEN_DAYS.includes(dayOfWeek);
  const inOpenWindow = hour >= OPEN_HOUR && hour < CLOSE_HOUR;

  if (isOpenDay && inOpenWindow) {
    return { kind: "open", closesAt: `${CLOSE_HOUR}:00 IST` };
  }

  // Closed — figure out when we open next
  if (isOpenDay && hour < OPEN_HOUR) {
    return { kind: "closed", opensWhen: "today", opensAt: `${OPEN_HOUR}:00 IST today` };
  }
  if (dayOfWeek === 6 || dayOfWeek === 0) {
    // After Saturday close OR Sunday — next opening is Monday
    return { kind: "closed", opensWhen: "monday", opensAt: `${OPEN_HOUR}:00 IST Monday` };
  }
  // Mon-Fri after 19:00 — next opening is tomorrow
  return { kind: "closed", opensWhen: "tomorrow", opensAt: `${OPEN_HOUR}:00 IST tomorrow` };
}

export function LiveAvailability({ variant = "inline" }: { variant?: "inline" | "compact" }) {
  // Render a placeholder on the server (hydration-safe), then upgrade on the
  // client. Avoids SSR/CSR mismatch when the user's clock != India IST.
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    setStatus(computeStatus(new Date()));
    const id = window.setInterval(() => setStatus(computeStatus(new Date())), 60_000);
    return () => window.clearInterval(id);
  }, []);

  if (!status) {
    // Server render — show neutral text that matches first client render before useEffect
    return (
      <span className="inline-flex items-center gap-2 text-eyebrow text-warm-500" aria-hidden="true">
        <span className="size-1.5 rounded-full bg-warm-300" />
        Clinic hours · Mon–Sat · 10–7
      </span>
    );
  }

  const dotClass = status.kind === "open" ? "bg-clay animate-pulse" : "bg-warm-300";
  const text = status.kind === "open"
    ? (variant === "compact" ? "Open now" : `Open now · closes ${status.closesAt}`)
    : (variant === "compact" ? `Closed · opens ${status.opensWhen}` : `Closed · opens ${status.opensAt}`);

  return (
    <span className="inline-flex items-center gap-2 text-eyebrow text-warm-700" aria-live="polite">
      <span className={`size-1.5 rounded-full ${dotClass}`} aria-hidden="true" />
      {text}
    </span>
  );
}
