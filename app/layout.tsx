import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ANALYTICS, SITE } from "@/lib/site";
import { FloatingCTA } from "@/app/components/FloatingCTA";
import { ExitIntentPopup } from "@/app/components/ExitIntentPopup";
import { cn } from "@/lib/utils";

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
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Dietician In Gurgaon, India",
    description: SITE.defaultDescription,
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
      <body className="min-h-full flex flex-col font-sans text-ink bg-paper">
        {children}
        <FloatingCTA />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
