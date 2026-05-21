/**
 * PersonBadge — honest placeholder for Dt. Priyatama's portrait until the
 * client provides real photography. Renders a serif monogram + the moringa
 * leaf mark inside a circular frame. Used everywhere the old site referenced
 * /assets/diet-img/priyatma.jpg (which we no longer ship).
 *
 * Two variants:
 *   "card"  — small badge for headers, footers, byline strips, related cards
 *   "hero"  — large portrait-shaped frame for the main hero / about portrait
 */

import { MoringaMark } from "./MoringaMark";

type Variant = "card" | "hero";

type Props = {
  variant?: Variant;
  className?: string;
  alt?: string;
  /** Optional initials override; default is "PS" for Priyatama Srivastava */
  initials?: string;
};

export function PersonBadge({ variant = "card", className = "", alt, initials = "PS" }: Props) {
  const isHero = variant === "hero";
  const containerCls = isHero
    ? `relative aspect-[3/4] w-full overflow-hidden border border-ink/20 bg-paper-dark ${className}`
    : `relative size-full overflow-hidden border border-ink/15 bg-paper-dark ${className}`;
  return (
    <div className={containerCls} role="img" aria-label={alt ?? "Dt. Priyatama Srivastava — portrait pending"}>
      {/* Faint grain to feel like paper */}
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
        {isHero && (
          <div className="mt-2 text-[10px] uppercase tracking-[0.2em] font-mono text-warm-500 text-center">
            Dt. Priyatama Srivastava<br />
            <span className="text-clay">Portrait pending</span>
          </div>
        )}
      </div>
    </div>
  );
}
