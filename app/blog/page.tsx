import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { JsonLd } from "@/app/components/JsonLd";
import { BLOGS } from "@/lib/blogs";
import { CONTACT, PERSON, REVIEWS, SITE, whatsappUrl } from "@/lib/site";
import {
  breadcrumbSchema,
  localBusinessSchema,
  personSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Blog | Go Moringa | Nutri Diet Clinic In Gurgaon",
  description: "Explore Go Moringa's blog for expert diet tips, healthy eating guides, and personalised nutrition advice from the top diet clinic in Gurgaon.",
  alternates: { canonical: "/blog.php" },
};

export default function BlogIndex() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Blog", url: `${SITE.url}/blog.php` },
  ]);
  const schemas = [localBusinessSchema(), personSchema(), breadcrumb];

  return (
    <>
      <JsonLd data={schemas} />
      <Header />

      <section className="relative bg-brand-gradient text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,white,transparent_60%)]" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto px-4 py-16 md:py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Blog</h1>
          <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            Expert diet tips, healthy eating guides, and clinical nutrition advice from Dt. Priyatama Srivastava and the Go Moringa team.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOGS.map((b) => (
            <Link key={b.slug} href={b.phpPath} className="group block bg-white border border-ink-900/10 rounded-2xl overflow-hidden hover:shadow-lg hover:border-brand-300 transition">
              <div className="p-5">
                <h2 className="text-lg font-semibold text-ink-900 group-hover:text-brand-600 transition line-clamp-3">{b.h1 || b.title}</h2>
                {b.metaDescription && (
                  <p className="mt-2 text-sm text-ink-700 line-clamp-3">{b.metaDescription}</p>
                )}
                <div className="mt-4 flex items-center justify-between text-xs text-ink-500">
                  <span>{Math.ceil(b.wordCount / 200)} min read</span>
                  <span className="inline-flex items-center gap-1 text-brand-600 font-medium">
                    Read article <span aria-hidden="true">→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-ink-900 text-white">
        <div className="max-w-4xl mx-auto px-4 py-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Want personalised guidance?</h2>
          <p className="mt-3 text-white/80">Articles are general — Dt. Priyatama designs plans for your specific needs.</p>
          <div className="mt-5 flex flex-wrap gap-3 justify-center">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="px-7 py-3 rounded-full bg-brand-500 hover:bg-brand-600 font-semibold transition">
              WhatsApp Us
            </a>
            <a href={`tel:${CONTACT.phoneTel}`} className="px-7 py-3 rounded-full bg-white text-ink-900 hover:bg-cream-100 font-semibold transition">
              Call {CONTACT.phone}
            </a>
          </div>
          <p className="mt-4 text-sm text-white/60">★ {REVIEWS.practo.rating} on Practo ({REVIEWS.practo.count} reviews)</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
