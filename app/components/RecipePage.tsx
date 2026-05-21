import Image from "next/image";
import Link from "next/link";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { JsonLd } from "./JsonLd";
import { MoringaMark } from "./MoringaMark";
import { RelatedReading } from "./RelatedReading";
import { AuthorBioBlock, LastUpdated } from "./aeo";
import type { RecipeData } from "@/lib/recipes";
import { getTreatment } from "@/lib/treatments";
import { CONTACT, PERSON, REVIEWS, SITE, whatsappUrl } from "@/lib/site";
import {
  breadcrumbSchema,
  localBusinessSchema,
  personSchema,
} from "@/lib/schema";

const LAST_REVIEWED = "May 2026";

function recipeSchema(r: RecipeData) {
  return {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "@id": `${SITE.url}${r.phpPath}#recipe`,
    name: r.name,
    description: r.description,
    image: `${SITE.url}${r.heroImage}`,
    author: { "@id": `${SITE.url}/#person-priyatama` },
    datePublished: "2025-01-01",
    prepTime: r.prepTime,
    cookTime: r.cookTime,
    totalTime: r.totalTime,
    recipeYield: `${r.servings} servings`,
    recipeCategory: r.category,
    recipeCuisine: "Indian",
    recipeIngredient: r.ingredients,
    recipeInstructions: r.instructions.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text: step,
    })),
    nutrition: {
      "@type": "NutritionInformation",
      calories: r.nutritionPerServing.calories,
      proteinContent: r.nutritionPerServing.protein,
      carbohydrateContent: r.nutritionPerServing.carbs,
      fatContent: r.nutritionPerServing.fat,
      fiberContent: r.nutritionPerServing.fiber,
      servingSize: "1 serving",
    },
    keywords: [r.name, "Indian recipe", "healthy", r.category, "dietitian recipe"].join(", "),
  };
}

function formatDuration(iso: string): string {
  const match = iso.match(/PT(\d+)M/);
  if (!match) return iso;
  return `${match[1]} min`;
}

export function RecipePage({ recipe }: { recipe: RecipeData }) {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Recipes", url: `${SITE.url}/blog.php` },
    { name: recipe.name, url: `${SITE.url}${recipe.phpPath}` },
  ]);
  const schemas = [
    localBusinessSchema(),
    personSchema(),
    recipeSchema(recipe),
    breadcrumb,
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Header />

      {/* ═══════════════════════════════════════════════ HERO */}
      <section className="bg-paper-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
          <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-[#d8c8a8]/80 text-eyebrow text-warm-500">
            <nav aria-label="Breadcrumb">
              <Link href="/" className="hover:text-clay transition">Home</Link>
              <span className="mx-3 opacity-50">/</span>
              <span className="hover:text-clay transition capitalize">{recipe.category}</span>
              <span className="mx-3 opacity-50">/</span>
              <span className="text-clay">{recipe.name}</span>
            </nav>
            <span className="hidden md:inline capitalize">Recipe · {recipe.category} · Indian</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 md:pt-14 pb-10 grid md:grid-cols-12 gap-x-8 gap-y-12 items-start">
          <div className="md:col-span-7">
            <LastUpdated date={LAST_REVIEWED} reviewer={PERSON.name} />
            <div className="text-eyebrow text-clay mb-5 flex items-center gap-3">
              <span className="block h-px w-10 bg-clay" />
              From the kitchen
            </div>
            <h1
              className="font-display tracking-[-0.02em] font-medium text-ink leading-[0.98]"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
            >
              {recipe.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-[1.65] text-warm-700">
              {recipe.description}
            </p>

            {/* Recipe meta in editorial inline rule */}
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 py-4 border-y border-[#d8c8a8]/80 text-eyebrow text-warm-700">
              <span>Prep · <span className="text-ink font-display normal-case tracking-normal text-base ml-1">{formatDuration(recipe.prepTime)}</span></span>
              <span>Cook · <span className="text-ink font-display normal-case tracking-normal text-base ml-1">{formatDuration(recipe.cookTime)}</span></span>
              <span>Total · <span className="text-ink font-display normal-case tracking-normal text-base ml-1">{formatDuration(recipe.totalTime)}</span></span>
              <span>Yield · <span className="text-ink font-display normal-case tracking-normal text-base ml-1">{recipe.servings} servings</span></span>
            </div>
          </div>

          <div className="md:col-span-5 md:pt-4">
            <figure>
              <figcaption className="text-eyebrow text-clay mb-4 flex items-center gap-3">
                <span className="block h-px w-6 bg-clay" />
                Plated · clinic test kitchen
              </figcaption>
              <div className="relative aspect-[4/5] overflow-hidden border border-ink/20">
                <Image
                  src={recipe.heroImage}
                  alt={recipe.h1}
                  fill
                  priority
                  className="object-cover"
                  style={{ filter: "saturate(0.92) contrast(1.03)" }}
                  sizes="(min-width: 768px) 40vw, 90vw"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <div className="font-display">
                  <div className="text-base font-medium text-ink">{recipe.name}</div>
                  <div className="text-sm italic text-clay capitalize">{recipe.category}</div>
                </div>
                <MoringaMark className="size-7 text-clay opacity-70" />
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ BENEFITS */}
      <section className="bg-paper py-14 md:py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            Why this works for you
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-ink leading-tight">
            What this recipe <em className="italic-clay">does</em>.
          </h2>
          <ul className="mt-8 grid sm:grid-cols-2 gap-y-3 gap-x-8">
            {recipe.benefits.map((b, i) => (
              <li key={b} className="flex gap-3 py-2 border-b border-[#d8c8a8]/40">
                <span className="text-eyebrow text-clay shrink-0 w-8 font-mono pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base text-warm-700 leading-snug">{b}</span>
              </li>
            ))}
          </ul>

          {recipe.whoFor.length > 0 && (
            <div className="mt-10 pt-8 border-t border-[#d8c8a8]/60">
              <h3 className="text-eyebrow text-clay mb-3">Recommended for</h3>
              <ul className="space-y-2">
                {recipe.whoFor.map((w) => (
                  <li key={w} className="flex gap-3 text-base text-warm-700">
                    <span className="text-clay font-mono shrink-0">·</span>
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ INGREDIENTS + INSTRUCTIONS */}
      <section className="bg-paper-dark py-16 md:py-20 border-y border-[#d8c8a8]/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-12 gap-12 lg:gap-16">
          <div className="md:col-span-5">
            <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
              <span className="block h-px w-10 bg-clay" />
              Ingredients · for {recipe.servings}
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-medium text-ink leading-tight">
              The <em className="italic-clay">mise en place</em>.
            </h2>
            <ul className="mt-6 space-y-2 border-t border-[#d8c8a8]/60">
              {recipe.ingredients.map((ing) => (
                <li key={ing} className="flex gap-3 py-3 border-b border-[#d8c8a8]/40 text-base text-warm-700 leading-snug">
                  <span className="text-clay font-mono shrink-0 pt-0.5" aria-hidden="true">▢</span>
                  <span>{ing}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-7">
            <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
              <span className="block h-px w-10 bg-clay" />
              Method
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-medium text-ink leading-tight">
              <em className="italic-clay">Step</em>, by step.
            </h2>
            <ol className="mt-6 space-y-7">
              {recipe.instructions.map((step, i) => (
                <li key={i} className="grid grid-cols-12 gap-x-5">
                  <div className="col-span-2 md:col-span-1">
                    <span className="font-display text-clay leading-none" style={{ fontSize: "2.5rem", fontWeight: 500 }}>
                      {i + 1}
                    </span>
                  </div>
                  <p className="col-span-10 md:col-span-11 text-base text-warm-700 leading-[1.7] pt-2">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ TIPS */}
      {recipe.tips.length > 0 && (
        <section className="bg-paper py-14">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <aside className="border-l-2 border-clay pl-6">
              <div className="text-eyebrow text-clay mb-3">
                Notes from the clinic
              </div>
              <ul className="space-y-3">
                {recipe.tips.map((tip) => (
                  <li key={tip} className="text-base text-warm-700 leading-[1.7] font-display italic">
                    — {tip}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════ NUTRITION */}
      <section className="bg-ink text-paper py-14 md:py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            Nutrition · per serving
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-medium text-paper leading-tight mb-8">
            What is in <em className="italic" style={{ color: "#C9A961" }}>one bowl</em>.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-6 gap-x-4 border-y border-paper/15 py-8">
            {[
              { label: "Calories", value: recipe.nutritionPerServing.calories },
              { label: "Protein", value: recipe.nutritionPerServing.protein },
              { label: "Carbs", value: recipe.nutritionPerServing.carbs },
              { label: "Fat", value: recipe.nutritionPerServing.fat },
              { label: "Fibre", value: recipe.nutritionPerServing.fiber },
            ].map((m, i) => (
              <div key={m.label} className="md:border-r md:last:border-r-0 border-paper/15 md:pr-4">
                <div className="text-eyebrow text-paper/60 mb-2 font-mono">
                  No. {String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-display font-medium text-paper leading-none" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
                  {m.value}
                </div>
                <div className="mt-2 text-eyebrow text-paper/70 font-mono">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ RELATED CONDITIONS */}
      {recipe.relatedConditions.length > 0 && (
        <section className="bg-paper-dark py-14 border-y border-[#d8c8a8]/60">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="text-eyebrow text-clay mb-3">
              Suitable for these conditions
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-medium text-ink leading-tight mb-6">
              Often <em className="italic-clay">prescribed for</em>.
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {recipe.relatedConditions.map((slug) => {
                const t = getTreatment(slug);
                if (!t) return null;
                return (
                  <Link
                    key={slug}
                    href={t.phpPath}
                    className="px-4 py-2 bg-paper border border-[#d8c8a8]/70 text-ink hover:text-clay hover:border-clay transition"
                  >
                    {t.title} <span className="text-clay" aria-hidden="true">→</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════ AUTHOR BIO */}
      <section className="bg-paper">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AuthorBioBlock reviewedDate={LAST_REVIEWED} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ RELATED READING (cross-cluster) */}
      <RelatedReading slug={recipe.slug} cluster="recipe" />

      {/* ═══════════════════════════════════════════════ CTA */}
      <section className="bg-paper-dark py-14 border-t border-[#d8c8a8]/60">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <MoringaMark className="size-10 text-clay mx-auto mb-4" />
          <h2 className="font-display text-2xl md:text-3xl font-medium text-ink leading-tight">
            Want a <em className="italic-clay">personalised plan</em>?
          </h2>
          <p className="mt-4 text-base text-warm-700 max-w-xl mx-auto">
            Recipes are starting points. Dt. Priyatama designs full meal plans built around your body, goal and family kitchen.
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
          <p className="mt-4 text-eyebrow text-warm-500">★ {REVIEWS.practo.rating} Practo · {PERSON.yearsExperience}+ years · {PERSON.clientCount} clients</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
