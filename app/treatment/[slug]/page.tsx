import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TreatmentPage } from "@/app/components/TreatmentPage";
import { getTreatment, TREATMENT_LIST } from "@/lib/treatments";
import { SITE } from "@/lib/site";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return TREATMENT_LIST.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const t = getTreatment(slug);
  if (!t) return {};
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: { canonical: t.phpPath },
    openGraph: {
      title: t.metaTitle,
      description: t.metaDescription,
      url: `${SITE.url}${t.phpPath}`,
      images: [`${SITE.url}${t.heroImage}`],
    },
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const t = getTreatment(slug);
  if (!t) notFound();
  return <TreatmentPage treatment={t} />;
}
