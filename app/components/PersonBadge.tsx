/**
 * PersonBadge — Dt. Priyatama Srivastava portrait component.
 *
 * Now that the client has provided real clinic photography (added 2026-05-21),
 * the component renders the real `priyatama-portrait.jpg` by default. The
 * legacy monogram (moringa-mark + "PS" on cream paper) is still available via
 * `mode="monogram"` for layouts where a photo is contextually wrong (e.g.,
 * abstract avatar slots, very small thumbnails).
 *
 * Two variants control sizing:
 *   "card"  — small/circular byline avatars
 *   "hero"  — large portrait-shaped frame for hero / About / AuthorBio
 */

import Image from "next/image";
import { MoringaMark } from "./MoringaMark";
import { REAL } from "@/lib/photo-strategy";

type Variant = "card" | "hero";
type Mode = "photo" | "monogram";

type Props = {
  variant?: Variant;
  mode?: Mode;
  className?: string;
  alt?: string;
  /** Optional initials override; default is "PS" for Priyatama Srivastava */
  initials?: string;
  /** Optional override image (must live under /photography/...) */
  src?: string;
  /** When true, renders without the press-print border frame around the image */
  unframed?: boolean;
};

export function PersonBadge({
  variant = "card",
  mode = "photo",
  className = "",
  alt = "Dt. Priyatama Srivastava — Clinical Dietitian, Go Moringa Diet Clinic",
  initials = "PS",
  src = REAL.priyatamaPortrait,
  unframed = false,
}: Props) {
  const isHero = variant === "hero";

  // ───────────────────────────────────── photo mode (default)
  if (mode === "photo") {
    if (isHero) {
      return (
        <figure className={`relative aspect-[3/4] w-full overflow-hidden ${unframed ? "" : "photo-frame"} ${className}`}>
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-cover"
          />
        </figure>
      );
    }
    return (
      <div className={`relative size-full overflow-hidden ${unframed ? "" : "border border-ink/15"} ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>
    );
  }

  // ───────────────────────────────────── monogram fallback
  const containerCls = isHero
    ? `relative aspect-[3/4] w-full overflow-hidden border border-ink/20 bg-paper-dark ${className}`
    : `relative size-full overflow-hidden border border-ink/15 bg-paper-dark ${className}`;
  return (
    <div className={containerCls} role="img" aria-label={alt}>
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 30%, rgba(181,102,58,0.08) 0%, transparent 55%), radial-gradient(circle at 70% 70%, rgba(22,62,46,0.06) 0%, transparent 55%)",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-ink">
        <MoringaMark className={isHero ? "size-16" : "size-8"} color="#163E2E" />
        <div
          className="font-display font-medium tracking-tight text-ink leading-none"
          style={{ fontSize: isHero ? "5rem" : "1.5rem" }}
        >
          {initials}
        </div>
      </div>
    </div>
  );
}
