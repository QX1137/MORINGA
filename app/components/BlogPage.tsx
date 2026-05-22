import Image from "next/image";
import Link from "next/link";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { JsonLd } from "./JsonLd";
import { MoringaMark } from "./MoringaMark";
import { PersonBadge } from "./PersonBadge";
import { ReadingProgress } from "./ReadingProgress";
import { RelatedReading } from "./RelatedReading";
import { ArticleBody } from "./ArticleBody";
import { AuthorBioBlock, LastUpdated, MedicalDisclaimer } from "./aeo";
import { BLOGS, type BlogMeta } from "@/lib/blogs";
import { CONTACT, PERSON, REVIEWS, SITE, whatsappUrl } from "@/lib/site";
import {
  breadcrumbSchema,
  localBusinessSchema,
  personSchema,
} from "@/lib/schema";
import { DEFAULT_OG_IMAGE, heroForBlog, inlinePhotoForBlog } from "@/lib/photo-strategy";

const LAST_REVIEWED = "May 2026";

function articleSchema(b: BlogMeta, heroImage: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE.url}${b.phpPath}#article`,
    headline: b.h1 || b.title,
    description: b.metaDescription,
    image: heroImage,
    author: { "@id": `${SITE.url}/#person-priyatama` },
    publisher: { "@id": `${SITE.url}/#business` },
    mainEntityOfPage: `${SITE.url}${b.phpPath}`,
    inLanguage: "en-IN",
  };
}

type Props = { blog: BlogMeta; related: BlogMeta[] };

export function BlogPage({ blog, related }: Props) {
  // Per-slug hero (real photo for author-focused posts, curated Unsplash by
  // topic otherwise). Falls back to the default OG image for anything the
  // mapper somehow couldn't classify.
  const heroImage = heroForBlog(blog.slug) || DEFAULT_OG_IMAGE;
  const inlinePhoto = inlinePhotoForBlog(blog.slug);

  // Issue numbering — derived from the blog index. Order of BLOGS is the
  // canonical chronological-ish ordering; "Vol. 20" mirrors PERSON.yearsExperience.
  const issueIndex = BLOGS.findIndex((b) => b.slug === blog.slug);
  const entryNo = issueIndex >= 0 ? issueIndex + 1 : 0;
  const totalEntries = BLOGS.length;

  // Next / Previous entry — for the colophon nav at end of article.
  const prevEntry = issueIndex > 0 ? BLOGS[issueIndex - 1] : null;
  const nextEntry = issueIndex >= 0 && issueIndex < BLOGS.length - 1 ? BLOGS[issueIndex + 1] : null;

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Journal", url: `${SITE.url}/blog.php` },
    { name: blog.h1 || blog.title, url: `${SITE.url}${blog.phpPath}` },
  ]);
  // Schema.org `image` must be absolute. Hero may be a local /photography/...
  // path or already an absolute https://images.unsplash.com URL.
  const fullHeroUrl = heroImage.startsWith("http") ? heroImage : `${SITE.url}${heroImage}`;
  const schemas = [
    localBusinessSchema(),
    personSchema(),
    articleSchema(blog, fullHeroUrl),
    breadcrumb,
  ];

  const readMins = Math.max(2, Math.ceil(blog.wordCount / 200));

  // Inline-photo caption — short editorial credit line under the mid-article
  // photo break. Kept generic enough to fit any topic without faking specifics.
  const inlineCaption = `From the Sector 49 kitchen — Indian-meal context for "${blog.h1 || blog.title}"`;

  return (
    <>
      <JsonLd data={schemas} />
      <ReadingProgress />
      <Header />

      {/* ═══════════════════════════════════════════════ MAGAZINE COVER HERO
          Provenance bar → featured image (full-bleed) → editorial title block.
          Mobile-first: tighter padding, smaller display H1, image dominates above the fold. */}
      <section className="bg-paper-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-5">
          <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-[#d8c8a8]/80 text-eyebrow text-warm-500">
            <nav aria-label="Breadcrumb" className="flex items-center gap-3">
              <Link href="/" className="hover:text-clay transition">Home</Link>
              <span className="opacity-50">/</span>
              <Link href="/blog.php" className="hover:text-clay transition">Journal</Link>
              <span className="opacity-50">/</span>
              <span className="text-clay truncate max-w-[60vw] sm:max-w-none">Entry No. {String(entryNo).padStart(2, "0")}</span>
            </nav>
            <span className="hidden md:inline">
              Vol. {PERSON.yearsExperience} · Entry {String(entryNo).padStart(2, "0")} of {totalEntries}
            </span>
          </div>
        </div>

        {/* Featured image — full-bleed within the 7xl container.
            Wider aspect on desktop (21/9) for cinematic magazine feel; tighter
            on mobile (16/9) so the title stays above-the-fold. */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6 md:pt-10">
          <figure className="relative">
            <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden photo-frame">
              <Image
                src={heroImage}
                alt={blog.h1 || blog.title}
                fill
                priority
                sizes="(min-width: 1024px) 80vw, 100vw"
                className="object-cover"
                style={{ filter: "saturate(0.95) contrast(1.02)" }}
              />
            </div>
            <figcaption className="mt-2 text-[10px] uppercase tracking-[0.18em] font-mono text-warm-500 flex items-baseline justify-between flex-wrap gap-2">
              <span>Photographed · Sector 49 Clinic / Curated</span>
              <span className="italic font-display normal-case tracking-normal text-clay">Plate · No. {String(entryNo).padStart(2, "0")}</span>
            </figcaption>
          </figure>
        </div>

        {/* Title block — narrower column for legibility */}
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-10 md:py-16">
          <div className="text-eyebrow text-clay mb-5 flex items-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            Journal · Entry {String(entryNo).padStart(2, "0")}
          </div>

          <h1
            className="font-display tracking-[-0.02em] font-medium text-ink leading-[0.98]"
            style={{ fontSize: "clamp(1.9rem, 5vw, 4rem)" }}
          >
            {blog.h1 || blog.title}
          </h1>

          {blog.metaDescription && (
            <p className="mt-5 md:mt-7 text-lg md:text-xl leading-[1.55] text-warm-700 font-display italic max-w-3xl">
              {blog.metaDescription}
            </p>
          )}

          {/* Byline row — author badge, read time, reviewed date */}
          <div className="mt-8 md:mt-10 flex items-center gap-4 pt-6 border-t border-[#d8c8a8]/60">
            <div className="size-12 md:size-14 overflow-hidden border border-ink/20 shrink-0">
              <PersonBadge variant="card" alt={PERSON.name} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-display text-base md:text-lg font-medium text-ink">{PERSON.name}</div>
              <div className="text-eyebrow text-warm-500 mt-0.5">
                Clinical Dietitian · {readMins} min read · Reviewed {LAST_REVIEWED}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ ARTICLE BODY + DESKTOP MARGINALIA
          12-col grid. Article body uses 8 cols on desktop, leaving 4 cols for sticky
          marginalia. On mobile, the aside stacks below the body inline. */}
      <article className="bg-paper py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-12 gap-x-8 lg:gap-x-12">
          {/* Article column — narrow for reading comfort */}
          <div className="col-span-12 md:col-span-8 lg:col-span-7 lg:col-start-2">
            <LastUpdated date={LAST_REVIEWED} reviewer={PERSON.name} />

            <ArticleBody
              slug={blog.slug}
              folder="blog"
              inlinePhotoUrl={inlinePhoto}
              inlinePhotoCaption={inlineCaption}
            />

            {/* End-of-article signature ornament */}
            <div className="article-end-mark" aria-hidden="true">
              <MoringaMark className="size-5 text-clay" />
            </div>
            <p className="text-center mt-4 text-eyebrow text-warm-500">
              — Dt. Priyatama Srivastava · Go Moringa Diet Clinic
            </p>

            {/* Filed-under colophon */}
            <footer className="mt-14 pt-8 border-t border-clay/30">
              <div className="text-eyebrow text-clay mb-3">Filed under</div>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-warm-700 font-mono">
                <span>Journal</span>
                <span className="opacity-40">·</span>
                <span>Vol. {PERSON.yearsExperience}</span>
                <span className="opacity-40">·</span>
                <span>Entry {String(entryNo).padStart(2, "0")} of {totalEntries}</span>
                <span className="opacity-40">·</span>
                <span>Reviewed {LAST_REVIEWED}</span>
                <span className="opacity-40">·</span>
                <span>{readMins} min read</span>
              </div>

              {/* Prev / Next navigation — keeps readers inside the journal */}
              <nav className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 pt-6 border-t border-[#d8c8a8]/60" aria-label="Journal navigation">
                {prevEntry ? (
                  <Link href={prevEntry.phpPath} className="group">
                    <div className="text-eyebrow text-warm-500 mb-2">← Previously · Entry {String(issueIndex).padStart(2, "0")}</div>
                    <div className="font-display text-lg text-ink group-hover:text-clay transition leading-tight line-clamp-2">
                      {prevEntry.h1 || prevEntry.title}
                    </div>
                  </Link>
                ) : <div />}
                {nextEntry ? (
                  <Link href={nextEntry.phpPath} className="group md:text-right">
                    <div className="text-eyebrow text-warm-500 mb-2">Next · Entry {String(entryNo + 1).padStart(2, "0")} →</div>
                    <div className="font-display text-lg text-ink group-hover:text-clay transition leading-tight line-clamp-2">
                      {nextEntry.h1 || nextEntry.title}
                    </div>
                  </Link>
                ) : <div />}
              </nav>
            </footer>
          </div>

          {/* Right-margin sidenote (desktop only). On mobile this content
              stacks below the article naturally because col-span-12. */}
          <aside className="col-span-12 md:col-span-4 lg:col-span-3 md:pl-2 mt-10 md:mt-0">
            <div className="md:sticky md:top-24 space-y-7">
              {/* Editorial framing block — "Note from the clinic" as a marginalia */}
              <div>
                <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
                  <span className="block h-px w-8 bg-clay" />
                  Note from the clinic
                </div>
                <p className="font-display italic text-lg md:text-base lg:text-lg leading-snug text-ink">
                  Articles document what works for many. Plans are designed for{" "}
                  <em className="not-italic font-medium">you</em>.
                </p>
                <p className="mt-3 text-sm text-warm-700 leading-relaxed">
                  Reading is the easy part. Behaviour change — moving lab values, losing inches,
                  regulating cycles — needs a plan that knows your body, your kitchen and your week.
                </p>
              </div>

              {/* Inline CTA in the margin — light, doesn't compete with body */}
              <div className="border-t border-[#d8c8a8]/60 pt-5">
                <p className="text-eyebrow text-warm-500 mb-2">Free first conversation</p>
                <p className="font-display text-base text-ink leading-snug">
                  15 minutes on WhatsApp. No commitment.
                </p>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-ink group"
                >
                  <span className="relative pb-1 border-b-2 border-clay group-hover:border-b-[3px] transition-all">
                    Begin a consultation
                  </span>
                  <span className="text-clay" aria-hidden="true">→</span>
                </a>
              </div>

              {/* Verification cluster — ratings, ISO, in the margin */}
              <div className="border-t border-[#d8c8a8]/60 pt-5 text-sm text-warm-700 space-y-2">
                <div className="text-eyebrow text-warm-500">Verified</div>
                <div className="font-mono text-xs">★ Practo {REVIEWS.practo.rating} · {REVIEWS.practo.count} reviews</div>
                <div className="font-mono text-xs">★ Justdial {REVIEWS.justdial.rating} · {REVIEWS.justdial.count} reviews</div>
                <div className="font-mono text-xs">ISO 9001:2015 certified clinic</div>
              </div>
            </div>
          </aside>
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
      <section className="bg-paper-dark py-14 md:py-16 border-y border-[#d8c8a8]/60">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <MoringaMark className="size-10 text-clay mx-auto mb-4" />
          <h2 className="font-display text-2xl md:text-3xl font-medium text-ink leading-tight">
            Want a <em className="italic-clay">personalised plan</em>?
          </h2>
          <p className="mt-4 text-base text-warm-700 max-w-xl mx-auto">
            Articles are general guidance. Dt. Priyatama designs plans built around your specific
            body, goal and family kitchen.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-x-8 sm:gap-y-3 justify-center items-stretch sm:items-center">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-ink hover:bg-ink-deep text-paper text-base font-medium transition rounded-sm"
            >
              Begin on WhatsApp
              <span aria-hidden="true">→</span>
            </a>
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-ink/30 text-ink hover:bg-paper text-base font-medium transition rounded-sm sm:border-0 sm:px-0 sm:hover:bg-transparent sm:hover:text-clay"
            >
              or call {CONTACT.phone}
            </a>
          </div>
          <p className="mt-4 text-eyebrow text-warm-500">★ {REVIEWS.practo.rating} Practo · {PERSON.clientCount} clients</p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ CROSS-CLUSTER RELATED READING */}
      <RelatedReading slug={blog.slug} cluster="blog" />

      {/* ═══════════════════════════════════════════════ MORE BLOG (same cluster) */}
      {related.length > 0 && (
        <section className="bg-paper py-14 md:py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
              <span className="block h-px w-10 bg-clay" />
              From the journal
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-medium text-ink leading-tight mb-10">
              More to <em className="italic-clay">read</em>.
            </h2>
            <div className="grid md:grid-cols-3 gap-x-8 gap-y-10">
              {related.map((b, i) => {
                const cardHero = heroForBlog(b.slug);
                return (
                  <Link key={b.slug} href={b.phpPath} className="group">
                    <div className="relative aspect-[4/3] overflow-hidden photo-frame mb-4">
                      <Image
                        src={cardHero}
                        alt={b.h1 || b.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      />
                    </div>
                    <div className="text-eyebrow text-clay mb-2 font-mono">
                      No. {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-medium text-ink group-hover:text-clay transition leading-tight line-clamp-3">
                      {b.h1 || b.title}
                    </h3>
                    <p className="mt-3 text-sm text-warm-700 line-clamp-3 leading-relaxed">{b.metaDescription}</p>
                    <div className="mt-3 text-eyebrow text-warm-500">
                      {Math.ceil(b.wordCount / 200)} min read
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
