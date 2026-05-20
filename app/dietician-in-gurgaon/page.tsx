import type { Metadata } from "next";
import { LocationPage } from "@/app/components/LocationPage";
import { getLocation } from "@/lib/locations";
import { SITE } from "@/lib/site";

const location = getLocation("dietician-in-gurgaon")!;

export const metadata: Metadata = {
  title: location.metaTitle,
  description: location.metaDescription,
  alternates: { canonical: location.phpPath },
  openGraph: {
    title: location.metaTitle,
    description: location.metaDescription,
    url: `${SITE.url}${location.phpPath}`,
    images: [`${SITE.url}${location.heroImage}`],
  },
};

export default function Page() {
  return <LocationPage location={location} />;
}
