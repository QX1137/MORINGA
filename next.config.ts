import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  turbopack: { root: __dirname },

  // Image optimization — pull from current gomoringa.in domain while we migrate assets locally.
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.gomoringa.in" },
      { protocol: "https", hostname: "gomoringa.in" },
      // Curated Unsplash photography — see lib/images.ts. Will be swapped
      // for Priyatama's clinic photography when she sends them.
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },

  // URL PRESERVATION CONTRACT (see /plan/url-preservation-contract.md).
  // The existing site uses .php URLs that are indexed by Google. We must keep
  // every public URL ending in .php responding 200. Rewrites map .php paths to
  // clean route files; the browser URL stays unchanged.
  async rewrites() {
    return [
      // /index.php must resolve to homepage (legacy URL preservation per plan Part 2).
      { source: "/index.php", destination: "/" },
      // Top-level pages: /about.php, /weight-loss.php, /package.php, etc.
      { source: "/:slug.php", destination: "/:slug" },
      // Subdirectory groups
      { source: "/treatment/:slug.php", destination: "/treatment/:slug" },
      { source: "/recipes-book/:slug.php", destination: "/recipes-book/:slug" },
      { source: "/blog/:slug.php", destination: "/blog/:slug" },
    ];
  },

  // Canonicalize host: non-www -> www (matches existing 301 on the live site).
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "gomoringa.in" }],
        destination: "https://www.gomoringa.in/:path*",
        permanent: true,
      },
    ];
  },

  // Security headers — modest defaults, can tighten later.
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
