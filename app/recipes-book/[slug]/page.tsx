import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RecipePage } from "@/app/components/RecipePage";
import { getRecipe, RECIPE_LIST } from "@/lib/recipes";
import { SITE } from "@/lib/site";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return RECIPE_LIST.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const r = getRecipe(slug);
  if (!r) return {};
  return {
    title: r.metaTitle,
    description: r.metaDescription,
    alternates: { canonical: r.phpPath },
    openGraph: {
      title: r.metaTitle,
      description: r.metaDescription,
      url: `${SITE.url}${r.phpPath}`,
      images: [`${SITE.url}${r.heroImage}`],
    },
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const r = getRecipe(slug);
  if (!r) notFound();
  return <RecipePage recipe={r} />;
}
