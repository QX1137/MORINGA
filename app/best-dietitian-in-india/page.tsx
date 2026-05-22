import type { Metadata } from "next";
import { LocationPage } from "@/app/components/LocationPage";
import { getLocation } from "@/lib/locations";
import { SITE } from "@/lib/site";
import { DEFAULT_OG_IMAGE } from "@/lib/photo-strategy";

const location = getLocation("best-dietitian-in-india")!;

export const metadata: Metadata = {
  title: location.metaTitle,
  description: location.metaDescription,
  alternates: { canonical: location.phpPath },
  openGraph: {
    title: location.metaTitle,
    description: location.metaDescription,
    url: `${SITE.url}${location.phpPath}`,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Page() {
  return <LocationPage location={location} />;
}
