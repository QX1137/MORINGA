import type { Metadata } from "next";
import { ServicePage } from "@/app/components/ServicePage";
import { getService } from "@/lib/services";
import { SITE } from "@/lib/site";

const service = getService("therapeutic-diet")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: service.phpPath },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: `${SITE.url}${service.phpPath}`,
    images: [`${SITE.url}${service.heroImage}`],
  },
};

export default function Page() {
  return <ServicePage service={service} />;
}
