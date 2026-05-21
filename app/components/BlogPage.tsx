import Link from "next/link";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { JsonLd } from "./JsonLd";
import { MoringaMark } from "./MoringaMark";
import { PersonBadge } from "./PersonBadge";
import { ArticleBody } from "./ArticleBody";
import { AuthorBioBlock, LastUpdated, MedicalDisclaimer } from "./aeo";
import type { BlogMeta } from "@/lib/blogs";
import { CONTACT, PERSON, REVIEWS, SITE, whatsappUrl } from "@/lib/site";
import {
  breadcrumbSchema,
  localBusinessSchema,
  personSchema,
} from "@/lib/schema";
import { DEFAULT_OG_IMAGE } from "@/lib/photo-strategy";

const LAST_REVIEWED = "May 2026";

function articleSchema(b: BlogMeta) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE.url}${b.phpPath}#article`,
    headline: b.h1 || b.title,
    description: b.metaDescription,
    image: b.ogImage || DEFAULT_OG_IMAGE,
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
    { name: "Journal", url: `${SITE.url}/blog.php` },
    { name: blog.h1 || blog.title, url: `${SITE.url}${blog.phpPath}` },
  ]);
  const schemas = [
    localBusinessSchema(),
    personSchema(),
    articleSchema(blog),
    breadcrumb,
  ];

  const readMins = Math.max(2, Math.ceil(blog.wordCount / 200));

  return (
    <>
      <JsonLd data={schemas} />
      <Header />

      {/* ═══════════════════════════════════════════════ ARTICLE HEAD */}
      <section className="bg-paper-grain border-b border-[#d8c8a8]/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
          <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-[#d8c8a8]/80 text-eyebrow text-warm-500">
            <nav aria-label="Breadcrumb">
              <Link href="/" className="hover:text-clay transition">Home</Link>
              <span className="mx-3 opacity-50">/</span>
              <Link href="/blog.php" className="hover:text-clay transition">Journal</Link>
              <span className="mx-3 opacity-50">/</span>
              <span className="text-clay">Article</span>
            </nav>
            <span className="hidden md:inline">Journal · {readMins} min read · {PERSON.name}</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-14 md:py-20">
          <LastUpdated date={LAST_REVIEWED} reviewer={PERSON.name} />
          <div className="text-eyebrow text-clay mb-5 flex items-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            Journal
          </div>

          <h1
            className="font-display tracking-[-0.02em] font-medium text-ink leading-[0.98]"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
          >
            {blog.h1 || blog.title}
          </h1>

          {blog.metaDescription && (
            <p className="mt-6 text-xl leading-[1.55] text-warm-700 font-display italic max-w-3xl">
              {blog.metaDescription}
            </p>
          )}

          <div className="mt-10 flex items-center gap-4 pt-6 border-t border-[#d8c8a8]/60">
            <div className="size-12 rounded-full overflow-hidden border border-ink/20 shrink-0">
              <PersonBadge variant="card" alt={PERSON.name} />
            </div>
            <div>
              <div className="font-display text-base font-medium text-ink">{PERSON.name}</div>
              <div className="text-eyebrow text-warm-500">
                Clinical Dietitian · {readMins} min read · Reviewed {LAST_REVIEWED}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ ARTICLE BODY */}
      <article className="bg-paper py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ArticleBody slug={blog.slug} folder="blog" />
        </div>
      </article>

      {/* ═══════════════════════════════════════════════ AUTHOR BIO */}
      <section className="bg-paper">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AuthorBioBlock reviewedDate={LAST_REVIEWED} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ DISCLAIMER */}
      <section className="bg-paper">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <MedicalDisclaimer />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ CTA */}
      <section className="bg-paper-dark py-16 border-y border-[#d8c8a8]/60">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <MoringaMark className="size-10 text-clay mx-auto mb-4" />
          <h2 className="font-display text-2xl md:text-3xl font-medium text-ink leading-tight">
            Want a <em className="italic-clay">personalised plan</em>?
          </h2>
          <p className="mt-4 text-base text-warm-700 max-w-xl mx-auto">
            Articles are general guidance. Dt. Priyatama designs plans built around your specific body, goal and family kitchen.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 justify-center">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 text-base font-medium text-ink">
              <span className="relative pb-1 border-b-2 border-clay transition-all group-hover:border-b-[3px]">
                Begin a consultation
              </span>
              <span className="text-clay" aria-hidden="true">→</span>
            </a>
            <a href={`tel:${CONTACT.phoneTel}`} className="text-base font-medium text-ink/70 hover:text-ink transition">
              or call {CONTACT.phone}
            </a>
          </div>
          <p className="mt-4 text-eyebrow text-warm-500">★ {REVIEWS.practo.rating} Practo · {PERSON.clientCount} clients</p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ RELATED */}
      {related.length > 0 && (
        <section className="bg-paper py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
              <span className="block h-px w-10 bg-clay" />
              From the journal
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-medium text-ink leading-tight mb-10">
              More to <em className="italic-clay">read</em>.
            </h2>
            <div className="grid md:grid-cols-3 gap-x-8 gap-y-10">
              {related.map((b, i) => (
                <Link key={b.slug} href={b.phpPath} className="group">
                  <div className="text-eyebrow text-clay mb-3 font-mono">
                    No. {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-medium text-ink group-hover:text-clay transition leading-tight line-clamp-3">
                    {b.h1 || b.title}
                  </h3>
                  <p className="mt-3 text-sm text-warm-700 line-clamp-3 leading-relaxed">{b.metaDescription}</p>
                  <div className="mt-4 text-eyebrow text-warm-500">
                    {Math.ceil(b.wordCount / 200)} min read
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
