/**
 * Custom moringa-leaf signature mark — used throughout the site as a small
 * recurring motif. Drawn by hand (SVG paths), not stock. This is the kind
 * of small-thing-people-remember that the plan calls for.
 */

type Props = {
  className?: string;
  color?: string;
  ariaLabel?: string;
};

export function MoringaMark({ className, color = "currentColor", ariaLabel }: Props) {
  return (
    <svg
      viewBox="0 0 60 60"
      className={className}
      fill="none"
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
    >
      <path
        d="M30 6 C 22 14, 18 22, 18 32 C 18 42, 24 50, 30 54 C 36 50, 42 42, 42 32 C 42 22, 38 14, 30 6 Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M30 8 V 54" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <path d="M30 18 C 26 20, 23 24, 22 28" stroke={color} strokeWidth="1" strokeLinecap="round" fill="none" />
      <path d="M30 18 C 34 20, 37 24, 38 28" stroke={color} strokeWidth="1" strokeLinecap="round" fill="none" />
      <path d="M30 28 C 25 30, 22 34, 21 38" stroke={color} strokeWidth="1" strokeLinecap="round" fill="none" />
      <path d="M30 28 C 35 30, 38 34, 39 38" stroke={color} strokeWidth="1" strokeLinecap="round" fill="none" />
      <path d="M30 38 C 27 40, 25 43, 24 46" stroke={color} strokeWidth="1" strokeLinecap="round" fill="none" />
      <path d="M30 38 C 33 40, 35 43, 36 46" stroke={color} strokeWidth="1" strokeLinecap="round" fill="none" />
    </svg>
  );
}
