/**
 * Blog metadata loaded from the build-time JSON at content/blog/index.json.
 * Body HTML is read separately at render time by the ArticleBody component.
 */

import indexData from "@/content/blog/index.json";

export type BlogMeta = {
  slug: string;
  phpPath: string;
  title: string;
  h1: string;
  metaDescription: string;
  ogImage: string;
  wordCount: number;
};

export const BLOGS: BlogMeta[] = indexData as BlogMeta[];

export function getBlog(slug: string): BlogMeta | undefined {
  return BLOGS.find((b) => b.slug === slug);
}

export function getRelatedBlogs(slug: string, limit = 3): BlogMeta[] {
  // Simple related blogs: skip current, take random N
  const others = BLOGS.filter((b) => b.slug !== slug);
  // Sort by slug for deterministic build output
  return others.slice(0, limit);
}
