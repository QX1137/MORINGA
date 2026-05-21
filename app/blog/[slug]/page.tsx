import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPage } from "@/app/components/BlogPage";
import { BLOGS, getBlog, getRelatedBlogs } from "@/lib/blogs";
import { SITE } from "@/lib/site";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return BLOGS.map((b) => ({ slug: b.slug }));
}

const DEFAULT_OG_IMAGE = `${SITE.url}/assets/banner/best-dietician-in-gurgaon.jpg`;

// Fallback meta description for ~12 blog posts where the original PHP source had
// no <meta name="description">. Synthesised from the H1 + standard byline so
// search engines + AI engines always have something to ingest.
function fallbackDescription(b: { h1?: string; title: string }): string {
  const subject = (b.h1 || b.title).replace(/\s*\|\s*Go Moringa\s*$/i, "").trim();
  return `${subject} — clinical nutrition guidance from Dt. Priyatama Srivastava at Go Moringa Diet Clinic, Gurgaon. Indian-meal-based protocols, 20+ years of practice.`;
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const b = getBlog(slug);
  if (!b) return {};
  const description = b.metaDescription?.trim() || fallbackDescription(b);
  const ogImage = b.ogImage?.trim() || DEFAULT_OG_IMAGE;
  return {
    title: b.title,
    description,
    alternates: { canonical: b.phpPath },
    openGraph: {
      title: b.title,
      description,
      url: `${SITE.url}${b.phpPath}`,
      images: [ogImage],
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
