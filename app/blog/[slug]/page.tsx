import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPage } from "@/app/components/BlogPage";
import { BLOGS, getBlog, getRelatedBlogs } from "@/lib/blogs";
import { SITE } from "@/lib/site";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return BLOGS.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const b = getBlog(slug);
  if (!b) return {};
  return {
    title: b.title,
    description: b.metaDescription,
    alternates: { canonical: b.phpPath },
    openGraph: {
      title: b.title,
      description: b.metaDescription,
      url: `${SITE.url}${b.phpPath}`,
      images: b.ogImage ? [b.ogImage] : undefined,
    },
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const b = getBlog(slug);
  if (!b) notFound();
  const related = getRelatedBlogs(slug, 3);
  return <BlogPage blog={b} related={related} />;
}
