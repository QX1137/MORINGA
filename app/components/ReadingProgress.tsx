"use client";

/**
 * Reading progress bar — a thin clay-colored bar at the top of the viewport
 * that fills as the reader scrolls through `#article-body`.
 *
 * Why scoped to #article-body rather than the whole document: chrome above
 * (breadcrumb, hero image, byline) and below (author bio, CTA, related)
 * shouldn't count toward "progress through the article." We measure the
 * article element's own offsetTop + offsetHeight and reset to 0% before /
 * 100% after.
 *
 * Performance: requestAnimationFrame-throttled, passive scroll listener, no
 * state thrash. Falls back to 0% on SSR (the element doesn't exist yet).
 */

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const el = document.getElementById("article-body");
    if (!el) return;

    let raf = 0;
    const handler = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const articleHeight = el.offsetHeight;
        const viewportHeight = window.innerHeight;
        // 0% when article top hits viewport top, 100% when article bottom
        // hits viewport bottom. Anything outside that window is clamped.
        const totalScrollable = articleHeight - viewportHeight;
        if (totalScrollable <= 0) {
          setPct(rect.top <= 0 ? 100 : 0);
          return;
        }
        const scrolled = -rect.top;
        const next = Math.max(0, Math.min(100, (scrolled / totalScrollable) * 100));
        setPct(next);
      });
    };

    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, []);

  return (
    <div
      className="fixed top-0 inset-x-0 z-40 h-[2px] bg-transparent pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full bg-clay transition-[width] duration-150 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
