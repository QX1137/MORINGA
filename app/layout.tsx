import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ANALYTICS, SITE } from "@/lib/site";
import { FloatingCTA } from "@/app/components/FloatingCTA";
import { ExitIntentPopup } from "@/app/components/ExitIntentPopup";
import { cn } from "@/lib/utils";
import { DEFAULT_OG_IMAGE } from "@/lib/photo-strategy";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

// Default metadata — every page can override per-route via its own export.
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Best Dietician In Gurgaon, India | Nutritionist, Weight Loss Expert",
    template: "%s | Go Moringa",
  },
  description: SITE.defaultDescription,
  applicationName: SITE.name,
  authors: [{ name: "Dt. Priyatama Srivastava" }],
  creator: "Go Moringa Nutri Diet Clinic",
  publisher: "Go Moringa Nutri Diet Clinic",
  robots: { index: true, follow: true },
  verification: { google: ANALYTICS.googleSiteVerification },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
    url: SITE.url,
    title: "Best Dietician In Gurgaon, India",
    description: SITE.defaultDescription,
    // Default OG image — every page that doesn't override its own falls back here.
    // Without this, secondary pages (about, contact, package, etc.) render no og:image.
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Go Moringa Diet Clinic — Best Dietitian in Gurgaon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Dietician In Gurgaon, India",
    description: SITE.defaultDescription,
    images: [DEFAULT_OG_IMAGE],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        fraunces.variable,
        inter.variable,
        jetbrains.variable,
      )}
    >
      <head>
        {/* GA4 — same property as live site, no measurement gap */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS.ga4Id}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ANALYTICS.ga4Id}');`}
        </Script>

        {/* Microsoft Clarity — heatmaps + session recordings. Only loads when an
            ID is configured (NEXT_PUBLIC_CLARITY_ID env). No-op until set. */}
        {ANALYTICS.clarityId ? (
          <Script id="clarity-init" strategy="afterInteractive">
            {`(function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${ANALYTICS.clarityId}");`}
          </Script>
        ) : null}
      </head>
      {/* pb-16 on mobile reserves space for the FloatingCTA bottom bar (~54px)
          so the final footer credits never get hidden behind it. md:pb-0 lifts
          the padding on desktop where the FloatingCTA is a small circular cluster. */}
      <body className="min-h-full flex flex-col font-sans text-ink bg-paper pb-14 md:pb-0">
        {children}
        <FloatingCTA />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
