import type { Metadata } from "next";
import { LandingPage } from "@/app/components/LandingPage";
import { getLandingPage } from "@/lib/landing-pages";
import { SITE } from "@/lib/site";
import { DEFAULT_OG_IMAGE } from "@/lib/photo-strategy";

const page = getLandingPage("weight-loss-diet-plan")!;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: page.path },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    url: `${SITE.url}${page.path}`,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Page() {
  return <LandingPage page={page} />;
}
