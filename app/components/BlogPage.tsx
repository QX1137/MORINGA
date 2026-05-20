import Image from "next/image";
import Link from "next/link";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { JsonLd } from "./JsonLd";
import { ArticleBody } from "./ArticleBody";
import type { BlogMeta } from "@/lib/blogs";
import { CONTACT, PERSON, REVIEWS, SITE, whatsappUrl } from "@/lib/site";
import {
  breadcrumbSchema,
  localBusinessSchema,
  personSchema,
} from "@/lib/schema";

function articleSchema(b: BlogMeta) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE.url}${b.phpPath}#article`,
    headline: b.h1 || b.title,
    description: b.metaDescription,
    image: b.ogImage || `${SITE.url}/assets/banner/best-dietician-in-gurgaon.jpg`,
    author: { "@id": `${SITE.url}/#person-priyatama` },
    publisher: { "@id": `${SITE.url}/#business` },
    mainEntityOfPage: `${SITE.url}${b.phpPath}`,
    inLanguage: "en-IN",
  };
}

type Props = { blog: BlogMeta; related: BlogMeta[] };

export function BlogPage({ blog, related }: Props) {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Blog", url: `${SITE.url}/blog.php` },
    { name: blog.h1 || blog.title, url: `${SITE.url}${blog.phpPath}` },
  ]);

  const schemas = [
    localBusinessSchema(),
    personSchema(),
    articleSchema(blog),
    breadcrumb,
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Header />

      <section className="bg-gradient-to-b from-cream-100 to-white border-b border-ink-900/5">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-500 mb-4">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            <span aria-hidden="true"> / </span>
            <Link href="/blog.php" className="hover:text-brand-600">Blog</Link>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold text-ink-900 leading-tight">{blog.h1 || blog.title}</h1>
          {blog.metaDescription && (
            <p className="mt-4 text-lg text-ink-700 leading-relaxed">{blog.metaDescription}</p>
          )}
          <div className="mt-6 flex items-center gap-3 text-sm text-ink-500">
            <div className="relative size-10 rounded-full overflow-hidden bg-cream-100">
              <Image src="/assets/diet-img/priyatma.jpg" alt={PERSON.name} fill className="object-cover" sizes="40px" />
            </div>
            <div>
              <div className="font-medium text-ink-900">{PERSON.name}</div>
              <div className="text-xs">Clinical Dietitian, Gurgaon &middot; {PERSON.yearsExperience}+ years</div>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <ArticleBody slug={blog.slug} folder="blog" />
      </article>

      <section className="bg-cream-50 border-t border-ink-900/5">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-ink-900">Want a personalised plan?</h2>
          <p className="mt-3 text-ink-700 max-w-2xl mx-auto">
            Articles are general guidance. {PERSON.name} designs custom plans for your specific body, goal, and medical context.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 justify-center">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="px-7 py-3 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold transition">
              WhatsApp Dt. Priyatama
            </a>
            <a href={`tel:${CONTACT.phoneTel}`} className="px-7 py-3 rounded-full bg-white border border-ink-900/10 text-ink-900 hover:bg-cream-100 font-semibold transition">
              Call {CONTACT.phone}
            </a>
          </div>
          <p className="mt-4 text-sm text-ink-500">★ {REVIEWS.practo.rating} on Practo &middot; {PERSON.clientCount} clients</p>
        </div>
      </section>

      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-ink-900 text-center mb-8">More from the blog</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((b) => (
              <Link key={b.slug} href={b.phpPath} className="group block bg-white border border-ink-900/10 rounded-2xl overflow-hidden hover:shadow-lg hover:border-brand-300 transition">
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-ink-900 group-hover:text-brand-600 transition line-clamp-2">{b.h1 || b.title}</h3>
                  <p className="mt-2 text-sm text-ink-700 line-clamp-3">{b.metaDescription}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-brand-600 text-sm font-medium">
                    Read more <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
