import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { JsonLd } from "@/app/components/JsonLd";
import { MoringaMark } from "@/app/components/MoringaMark";
import { BLOGS } from "@/lib/blogs";
import { CONTACT, PERSON, REVIEWS, SITE, whatsappUrl } from "@/lib/site";
import { breadcrumbSchema, localBusinessSchema, personSchema } from "@/lib/schema";
import { heroForBlog } from "@/lib/photo-strategy";

export const metadata: Metadata = {
  title: "Blogs | Go Moringa | Nutri Diet Clinic In Gurgaon",
  description: "Expert diet tips, healthy eating guides, and clinical nutrition advice from Dt. Priyatama Srivastava and Go Moringa.",
  alternates: { canonical: "/blog.php" },
};

export default function BlogIndex() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Blogs", url: `${SITE.url}/blog.php` },
  ]);
  const schemas = [localBusinessSchema(), personSchema(), breadcrumb];

  // Sort by word count desc to surface the longest/richest articles first
  const sortedBlogs = [...BLOGS].sort((a, b) => b.wordCount - a.wordCount);
  const [featured, ...rest] = sortedBlogs;

  return (
    <>
      <JsonLd data={schemas} />
      <Header />

      <section className="bg-paper-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
          <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-[#d8c8a8]/80 text-eyebrow text-warm-500">
            <nav aria-label="Breadcrumb">
              <Link href="/" className="hover:text-clay transition">Home</Link>
              <span className="mx-3 opacity-50">/</span>
              <span className="text-clay">Blogs</span>
            </nav>
            <span className="hidden md:inline">{BLOGS.length} articles · clinical nutrition writing</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-14 md:pt-20 pb-10">
          <div className="text-eyebrow text-clay mb-5 flex items-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            Blogs · Issue 01
          </div>
          <h1 className="font-display tracking-[-0.02em] font-medium text-ink leading-[0.98]" style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}>
            The journal of <em className="italic-clay">a working clinic</em>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-warm-700 leading-relaxed">
            Writings from {PERSON.name} on nutrition, diet, chronic conditions, recipes, and the everyday questions clients bring to the clinic.
          </p>
        </div>
      </section>

      {/* Featured article — now leads with a magazine-cover image */}
      {featured && (
        <section className="bg-paper py-14 border-t border-[#d8c8a8]/80">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
              <span className="block h-px w-10 bg-clay" />
              Featured · longest article
            </div>
            <Link href={featured.phpPath} className="group grid md:grid-cols-12 gap-x-8 gap-y-6 items-center border-b border-[#d8c8a8]/60 pb-10">
              <figure className="md:col-span-6 md:order-2">
                <div className="relative aspect-[4/3] overflow-hidden photo-frame">
                  <Image
                    src={heroForBlog(featured.slug)}
                    alt={featured.h1 || featured.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    style={{ filter: "saturate(0.95) contrast(1.02)" }}
                    priority
                  />
                </div>
                <figcaption className="mt-2 text-[10px] uppercase tracking-[0.18em] font-mono text-warm-500">
                  Plate · Featured entry
                </figcaption>
              </figure>
              <div className="md:col-span-6 md:order-1">
                <h2 className="font-display font-medium text-ink group-hover:text-clay transition leading-[1.05]" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                  {featured.h1 || featured.title}
                </h2>
                {featured.metaDescription && (
                  <p className="mt-4 text-lg text-warm-700 leading-[1.6] max-w-2xl">
                    {featured.metaDescription}
                  </p>
                )}
                <div className="mt-5 flex items-center gap-5 text-eyebrow text-warm-500">
                  <span>{Math.ceil(featured.wordCount / 200)} min read</span>
                  <span className="text-clay">Read article →</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            All articles
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-ink leading-tight mb-10">
            From the <em className="italic-clay">clinic</em>.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {rest.map((b, i) => (
              <Link key={b.slug} href={b.phpPath} className="group">
                <div className="relative aspect-[4/3] overflow-hidden photo-frame mb-5">
                  <Image
                    src={heroForBlog(b.slug)}
                    alt={b.h1 || b.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "saturate(0.95) contrast(1.02)" }}
                  />
                </div>
                <div className="text-eyebrow text-clay mb-3 font-mono">No. {String(i + 2).padStart(2, "0")}</div>
                <h3 className="font-display text-xl md:text-2xl font-medium text-ink group-hover:text-clay transition leading-tight line-clamp-3">
                  {b.h1 || b.title}
                </h3>
                {b.metaDescription && (
                  <p className="mt-3 text-sm text-warm-700 line-clamp-3 leading-relaxed">{b.metaDescription}</p>
                )}
                <div className="mt-4 flex items-center justify-between text-eyebrow text-warm-500">
                  <span>{Math.ceil(b.wordCount / 200)} min read</span>
                  <span className="text-clay">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, #C9A961 0%, transparent 40%)" }} aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <MoringaMark className="size-12 text-clay mx-auto mb-6" />
          <div className="text-eyebrow text-clay mb-4">Want personalised guidance?</div>
          <h2 className="font-display font-medium leading-[1.05] tracking-[-0.02em]" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
            Articles are <em className="italic" style={{ color: "#C9A961" }}>general</em>.
          </h2>
          <p className="mt-6 text-base text-paper/85 leading-relaxed max-w-2xl mx-auto">
            For a plan built around your specific body, goal and family kitchen, the first conversation is free.
          </p>
          <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4 justify-center items-center">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 text-base font-medium text-paper">
              <span className="relative pb-1 border-b-2 border-clay transition-all group-hover:border-b-[3px]">
                Begin on WhatsApp
              </span>
              <span className="text-clay" aria-hidden="true">→</span>
            </a>
            <a href={`tel:${CONTACT.phoneTel}`} className="text-base font-medium text-paper/75 hover:text-paper transition">
              or call {CONTACT.phone}
            </a>
          </div>
          <p className="mt-6 text-eyebrow text-paper/60">★ {REVIEWS.practo.rating} Practo ({REVIEWS.practo.count})</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
