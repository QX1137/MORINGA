import Image from "next/image";
import Link from "next/link";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { JsonLd } from "./JsonLd";
import type { RecipeData } from "@/lib/recipes";
import { getTreatment } from "@/lib/treatments";
import { CONTACT, PERSON, REVIEWS, SITE, whatsappUrl } from "@/lib/site";
import {
  breadcrumbSchema,
  localBusinessSchema,
  personSchema,
} from "@/lib/schema";

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

// Format ISO 8601 PT15M -> "15 min"
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

      <section className="relative bg-brand-gradient text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,white,transparent_60%)]" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm text-white/70 mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span aria-hidden="true"> / </span>
              <span className="capitalize">{recipe.category}</span>
              <span aria-hidden="true"> / </span>
              <span className="text-white">{recipe.name}</span>
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">{recipe.h1}</h1>
            <p className="mt-4 text-lg text-white/90 leading-relaxed">{recipe.description}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur">⏱️ Prep {formatDuration(recipe.prepTime)}</span>
              <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur">🍳 Cook {formatDuration(recipe.cookTime)}</span>
              <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur">🍽️ {recipe.servings} servings</span>
              <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur capitalize">📂 {recipe.category}</span>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-white/10 shadow-2xl">
            <Image src={recipe.heroImage} alt={recipe.h1} fill priority className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-ink-900 mb-4">Why this recipe is good for you</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {recipe.benefits.map((b) => (
            <div key={b} className="flex gap-3 bg-cream-50 border border-ink-900/10 rounded-xl p-4">
              <span className="text-brand-600 font-bold" aria-hidden="true">✓</span>
              <span className="text-ink-900">{b}</span>
            </div>
          ))}
        </div>

        {recipe.whoFor.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-ink-900 mb-3">Especially recommended for</h3>
            <ul className="space-y-2">
              {recipe.whoFor.map((w) => (
                <li key={w} className="flex gap-3 text-ink-700">
                  <span className="text-brand-600 mt-1" aria-hidden="true">•</span>
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <section className="bg-cream-50 border-y border-ink-900/5">
        <div className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900">Ingredients</h2>
            <p className="text-sm text-ink-500 mt-1">For {recipe.servings} servings</p>
            <ul className="mt-5 space-y-2">
              {recipe.ingredients.map((ing) => (
                <li key={ing} className="flex gap-3 text-ink-900 border-b border-ink-900/5 pb-2">
                  <span className="text-brand-600" aria-hidden="true">▢</span>
                  <span>{ing}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900">Instructions</h2>
            <ol className="mt-5 space-y-4">
              {recipe.instructions.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="size-7 shrink-0 rounded-full bg-brand-100 text-brand-700 font-bold flex items-center justify-center text-sm">
                    {i + 1}
                  </span>
                  <span className="text-ink-700 leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {recipe.tips.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-brand-50 border-l-4 border-brand-500 rounded-r-xl p-6">
            <h2 className="text-xl font-semibold text-ink-900">Dietitian tips</h2>
            <ul className="mt-3 space-y-2">
              {recipe.tips.map((tip) => (
                <li key={tip} className="flex gap-3 text-ink-700">
                  <span className="text-brand-600 mt-1" aria-hidden="true">💡</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="bg-ink-900 text-white">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Nutrition per serving</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            {[
              { label: "Calories", value: recipe.nutritionPerServing.calories },
              { label: "Protein", value: recipe.nutritionPerServing.protein },
              { label: "Carbs", value: recipe.nutritionPerServing.carbs },
              { label: "Fat", value: recipe.nutritionPerServing.fat },
              { label: "Fibre", value: recipe.nutritionPerServing.fiber },
            ].map((m) => (
              <div key={m.label} className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="text-xl font-bold text-brand-300">{m.value}</div>
                <div className="text-xs text-white/80 mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {recipe.relatedConditions.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-ink-900 mb-6 text-center">Recommended for these conditions</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {recipe.relatedConditions.map((slug) => {
              const t = getTreatment(slug);
              if (!t) return null;
              return (
                <Link
                  key={slug}
                  href={t.phpPath}
                  className="px-4 py-2 rounded-full bg-cream-100 hover:bg-brand-100 border border-ink-900/10 text-ink-900 hover:text-brand-700 transition"
                >
                  {t.title} →
                </Link>
              );
            })}
          </div>
        </section>
      )}

      <section className="bg-cream-50 border-t border-ink-900/5">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-ink-900">Want a personalised diet plan?</h2>
          <p className="mt-3 text-ink-700 max-w-2xl mx-auto">
            Recipes are starting points — Dt. Priyatama designs full meal plans built around your goal, body, and family kitchen.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 justify-center">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="px-7 py-3 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold transition">
              WhatsApp Dt. Priyatama
            </a>
            <a href={`tel:${CONTACT.phoneTel}`} className="px-7 py-3 rounded-full bg-white border border-ink-900/10 text-ink-900 hover:bg-cream-100 font-semibold transition">
              Call {CONTACT.phone}
            </a>
          </div>
          <p className="mt-4 text-sm text-ink-500">★ {REVIEWS.practo.rating} on Practo &middot; {PERSON.yearsExperience}+ years &middot; {PERSON.clientCount} clients</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
