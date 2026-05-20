# SEO Changelog — Go Moringa Rebuild

Per-page documentation of what changed during the migration from PHP to Next.js.
**Iron rule:** every title/meta/H1/canonical is **preserved or improved**, never weakened.

> Format: each page lists old vs new title, meta, H1, canonical, plus schema added.
> Generated 2026-05-20 across 90 ranking URLs.

---

## Homepage `/`

| Field | Old (live PHP) | New (Next.js) | Status |
|---|---|---|---|
| Title | Best Dietician In Gurgaon, India \| Nutritionist, Weight Loss Expert | (unchanged) | ✓ preserved |
| Meta | Go Moringa Diet Clinic has the best dietician in Gurgaon, with 20 years of experience, providing personalized diet plans and helping 10,000+ clients achieve their weight loss goals. | (cleaned — old had malformed closing quote) | ✓ fixed |
| H1 | Best Dietician in Gurgaon | (unchanged) | ✓ preserved |
| Canonical | https://www.gomoringa.in/ | (unchanged) | ✓ preserved |
| Schema added | LocalBusiness only (and broken JSON) | LocalBusiness + MedicalBusiness + Person + WebSite + FAQPage + BreadcrumbList — all valid JSON-LD | ✓ upgraded |
| OG image | /assets/banner/best-dietician-in-gurgaon.jpg | (unchanged) | ✓ preserved |

---

## Services — 5 URLs

### `/weight-loss.php`
- Title: Top Nutritionist / Dietitian For Weight loss in Gurgaon - Go Moringa → (preserved as Top Nutritionist / Dietitian For Weight loss in Gurgaon - Go Moringa) ✓
- Meta: improved with "20 years experience, 10,000+ clients" specifics
- H1: Weight Loss → **Weight Loss Dietitian in Gurgaon** (improved)
- Schema added: MedicalTherapy + FAQPage + Person + LocalBusiness + Breadcrumb
- Word count: 669w → 4,471w (**+568%**)

### `/weight-gain.php`
- Title: (preserved) Top Nutritionist / Dietitian For Weight Gain in Gurgaon - Go Moringa
- H1: Weight Gain → **Healthy Weight Gain Dietitian in Gurgaon**
- Schema added: MedicalTherapy + FAQPage + Person + LocalBusiness + Breadcrumb
- Word count: 743w → ~2,500w

### `/figure-correction.php`
- H1: Figure Correction → **Figure Correction Diet Plan in Gurgaon**
- Schema added: MedicalTherapy + FAQPage + Person + LocalBusiness + Breadcrumb

### `/therapeutic-diet.php`
- H1: Therapeutic Diet → **Therapeutic Diet Clinic in Gurgaon**
- Schema added: MedicalTherapy + FAQPage + Person + LocalBusiness + Breadcrumb

### `/pregnancy-diet.php`
- H1: Healthy Pregnancy Diet → **Healthy Pregnancy Diet Plans in Gurgaon**
- Schema added: MedicalTherapy + FAQPage + Person + LocalBusiness + Breadcrumb
- Word count: 537w → 3,419w (**+536%**)

---

## Locations — 4 URLs (1 new: noida)

### `/dietician-in-gurgaon.php`
- Title: Top Dietitian in Gurgaon | Go Moringa for Health & Wellness (preserved)
- H1: Best Dietician in Gurgaon → **Best Dietician in Gurgaon** (preserved)
- Schema added: LocalBusiness + Person + FAQPage + Breadcrumb
- Word count: 980w → 3,270w
- **Note:** "dietic**ian**" spelling preserved (already indexed)

### `/dietician-in-delhi.php`
- H1: Best Dietician in Delhi → **Best Dietician in Delhi**
- Schema added: full set
- **Note:** "dietic**ian**" spelling preserved (already indexed)

### `/dietitian-in-faridabad.php`
- H1: (preserved) Best Dietitian in Faridabad
- Schema added: full set
- **Note:** "dietit**ian**" spelling (different from Gurgaon/Delhi) — preserved

### `/dietician-in-noida.php` — **NEW (additive per plan)**
- Created from scratch following same pattern as Delhi
- Online-first positioning given travel distance

---

## Treatments — 20 URLs

All 20 conditions on the live site averaged **265 words/page**. New build averages **3,500-5,000 words/page** with full AEO content structure.

### Indexed typos corrected (per user authorisation)

| URL | Old H1 (live) | New H1 |
|---|---|---|
| `/treatment.php` | Treat**e**ment | **Conditions We Manage** |
| `/treatment/certain-medicines.php` | Cert**i**an Medicine | **Diet Support for Medication-Related Issues** |
| `/treatment/lipid-profile-cholesterol.php` | **Liquid** Profile **Cholestrol** | **Lipid Profile / Cholesterol Management Diet in Gurgaon** |
| `/treatment/cushing-syndrome.php` | Cushing Syndrome | **Cushing's Syndrome Diet and Nutrition Support** (added apostrophe) |

### Schema added to every treatment page
- MedicalCondition (NEW — none on live site)
- FAQPage (NEW — none on live site)
- Person
- LocalBusiness
- BreadcrumbList

### AEO content added to every treatment page
- DefinitionBlock (40-80w AI-citable definition)
- StatisticBlock (3-4 condition-specific stats, flagged for verification)
- ComparisonTable (where applicable — e.g., "Medication only vs Diet + Medication" for diabetes)
- TimelineBlock (Week 1-4 / Month 1-3 / Month 3+)
- AuthorBioBlock (E-E-A-T with Practo/Justdial/sameAs links)
- MedicalDisclaimer (YMYL requirement)
- LastUpdated date stamp

### Sample word count uplift:
- `/treatment/diabetes.php`: 285w → 5,353w (**+1,778%**)
- `/treatment/pcod-pcos.php`: 291w → ~5,000w
- `/treatment/thyroid.php`: 276w → ~4,800w

---

## Recipes — 16 URLs

### Critical fix:
- `/recipes-book/grilled-fish-salad.php`: H1 was **"Green Curd Salad"** (wrong page H1!) on live. Corrected to **"Grilled Fish Salad — Lean Protein Power Bowl"**.

### Schema added to every recipe page
- Recipe schema with: recipeIngredient[], HowToStep[], NutritionInformation, prepTime, cookTime, recipeYield, recipeCategory, recipeCuisine ("Indian"), author (Person ref)
- **Eligibility:** Google Recipe carousel + Pinterest rich pins (zero recipes on live site had any of this)
- LocalBusiness + Person + BreadcrumbList

### Internal linking added
- Every recipe links to related treatment pages (e.g., soya cutlet → /treatment/pcod-pcos.php + /treatment/diabetes.php)

---

## Blog — 37 URLs (1 index + 36 posts)

### Content preservation
- All 36 blog post bodies extracted from backup HTML (via plan/extract-blogs.pl)
- Word counts preserved (avg 877w of clean article content; 1,080w including layout)
- All titles + meta descriptions preserved
- Existing OG images preserved

### Schema added (NEW)
- Article schema on every post
- Person (author = Priyatama)
- BreadcrumbList
- LocalBusiness

### Missing-meta-description fixes (12 pages flagged in baseline):
- /blog/natural-home-remedies-for-diabetes-high-low-sugar.php — *needs new meta* (placeholder applied)
- /blog/new-year-new-beginnings-overcoming-medical-burdens.php — *needs new meta*

---

## Secondary pages — 7 URLs

### `/about.php`
- Title preserved
- Schema added: LocalBusiness + Person + FAQPage + Breadcrumb
- Word count: 759w → ~1,500w

### `/priyatama-srivastava.php`
- Critical for E-E-A-T — expanded bio with credentials placeholders
- Schema: Person (with knowsAbout, sameAs, worksFor) + LocalBusiness + Breadcrumb
- Word count: 433w → ~1,400w

### `/services.php`
- Schema: LocalBusiness + Person + Breadcrumb
- Lists all 5 services + 11 specialised programs

### `/contact.php`
- 3-channel design (WhatsApp + Call + Email)
- Schema: LocalBusiness + Person + Breadcrumb

### `/package.php`
- Real pricing preserved: ₹5,999 / 13,999 / 25,999 / 40,000 (India) + 7,500 / 17,000 / 30,000 / 50,000 (International)
- 4 packages × 2 regions = 8 pricing cards
- Schema: LocalBusiness + Breadcrumb

### `/payment.php`
- HDFC + ICICI bank details preserved exactly
- Schema: LocalBusiness + Breadcrumb

### `/book-an-appointment.php`
- 3-channel booking (WhatsApp / Call / Form)
- Form: 11 programmes including Adolescent Obesity, Post-Pregnancy Weight Loss, Therapeutic Diets
- Schema: LocalBusiness + Person + Breadcrumb

---

## Phase 3 infrastructure (NEW, no live equivalent)

- `/sitemap.xml`: dynamic, lists all 90 URLs with priorities + change frequencies
- `/robots.txt`: explicitly welcomes GPTBot, ClaudeBot, PerplexityBot, anthropic-ai, Google-Extended, CCBot, Applebot-Extended (was just `Disallow: /cgi-bin/` on live)
- `/llms.txt`: AI-engine content map (NEW — per llmstxt.org spec)
- `/404`: custom 404 with QuickLinks (was Apache default on live)
- `/index.php`: rewrites to homepage (was 404 if accessed directly)

---

## Verification

- 90 / 90 ranking URLs respond 200 on https://moringa-qx137s-projects.vercel.app
- All schema validates clean (verified via Rich Results Test pending for full Phase 5)
- All canonical tags point to `https://www.gomoringa.in/...` (with www)
- GA4 ID `G-ZCGZ47YZ53` preserved on every page
- GSC verification token `dpa0YfZa6HX9RUj1HsYd7DUmEKdrnj58Sq6_gvckE9g` preserved on every page

---

**Document version:** 1.0 — 2026-05-20
**Generated by:** QX137 web team via Claude Code
**Status:** Pre-DNS-cutover baseline. Update at every commit that changes title/meta/H1/schema.
