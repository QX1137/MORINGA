import type { Metadata } from "next";
import { Fira_Sans, Sacramento } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ANALYTICS, SITE } from "@/lib/site";
import { FloatingCTA } from "@/app/components/FloatingCTA";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fira",
  display: "swap",
});

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sacramento",
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
      className={`${firaSans.variable} ${sacramento.variable} h-full antialiased`}
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
      </head>
      <body className="min-h-full flex flex-col font-sans text-ink-900 bg-white">
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}
