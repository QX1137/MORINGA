/**
 * Data for the three location pages.
 * Important: existing URL spellings vary ("dietician" vs "dietitian") —
 * we preserve them exactly because they are already indexed.
 */

import type { FAQ } from "./services";

export type LocationData = {
  slug: string;
  phpPath: string;
  city: string;
  title: string;             // short, for nav
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroSubhead: string;
  heroImage: string;
  introLead: string;
  whyPickUs: { title: string; body: string }[];
  localContext: { title: string; body: string }[];  // neighbourhood references
  servesAreas: string[];      // localities within the city
  travelDistance?: string;    // for cities outside Gurgaon
  faqs: FAQ[];
};

export const LOCATIONS: Record<string, LocationData> = {
  "dietician-in-gurgaon": {
    slug: "dietician-in-gurgaon",
    phpPath: "/dietician-in-gurgaon.php",
    city: "Gurgaon",
    title: "Dietician in Gurgaon",
    h1: "Best Dietician in Gurgaon",
    metaTitle: "Top Dietitian in Gurgaon | Go Moringa for Health & Wellness",
    metaDescription: "Looking for the best dietician in Gurgaon? Dt. Priyatama Srivastava at Go Moringa — Sector 49 clinic, 20 years experience, 10,000+ clients, 5★ on Practo.",
    heroSubhead: "Sector 49 clinic + online consultation for weight loss, PCOS, diabetes, thyroid, pregnancy and chronic conditions across all of Gurgaon.",
    heroImage: "/assets/services/dietician-in-gurgaon.jpeg",
    introLead: "Finding the right dietitian in Gurgaon makes the difference between a diet that lasts two weeks and a lifestyle change that lasts decades. Dt. Priyatama Srivastava has practised in Gurgaon for 20 years from her Sector 49 clinic — building plans around Gurgaon professionals' realities: long commutes, business lunches, late-night dinners, irregular schedules, and the everyday Indian kitchen.",
    whyPickUs: [
      { title: "20 years of Gurgaon-specific practice", body: "Two decades of working with Gurgaon's corporate-heavy, fast-paced population. The dietary patterns we see — late dinners, business travel, weekend brunches, lifestyle disease creep starting in the 30s — are different from those in other Indian cities, and our plans are calibrated for them." },
      { title: "Sector 49 clinic + city-wide online", body: "Our physical clinic at Unitech Rodio Drive, Sector 49 is accessible from DLF Phase 1-5, Sushant Lok, Sohna Road, Golf Course Road, MG Road and the airport corridor. For clients in Manesar, Sector 89-95, or anyone who prefers convenience, online consultation works just as well." },
      { title: "10,000+ clients across NCR", body: "More than 10,000 clients across Gurgaon and Delhi NCR have completed programs with us — covering weight loss, PCOS, diabetes, thyroid, pregnancy, post-cancer recovery, kidney conditions, and figure correction." },
      { title: "5.0 Practo + 4.9 Justdial", body: "Verified reviews on India's largest healthcare review platforms. 279+ reviews on Practo, 699+ on Justdial — collected over years of consistent results, not bought." },
      { title: "Trained in clinical nutrition", body: "Qualified and certified clinical dietitian. The approach is medical, not commercial — no product lines pushed, no MLM supplements, no flashy promises. Just disciplined nutrition aligned to your health context." },
    ],
    localContext: [
      { title: "Built for Gurgaon's corporate culture", body: "Most Gurgaon clients we see have a common pattern — late office hours, multiple food-app dinners per week, weekend social eating, gym memberships that don't translate to fat loss. Our plans don't fight that lifestyle entirely; we work around the realities while gradually shifting the patterns that matter." },
      { title: "Pre-wedding NCR brides + grooms", body: "Sushant Lok, DLF Phase 3-5, Golf Course Road residents who book us 6-12 months before their wedding are our largest pre-wedding client group. We have a tested protocol for visible figure correction, skin clarity through nutrition, and energy management through the wedding week itself." },
      { title: "PCOS in Gurgaon's young women", body: "PCOS rates in Gurgaon's 20-30 age group are alarming. We see this every week — women diagnosed in their early 20s, told to lose weight without nutritional support, frustrated by yo-yo cycles. Our PCOS protocol combines hormonal-context-sensitive eating with weight management and is one of our most successful program types." },
      { title: "Diabetes and pre-diabetes in 40+ professionals", body: "The Gurgaon corporate male with a desk job, 12+ hour days, irregular dinners, and family history of diabetes is the textbook profile we manage daily. Many clients reverse pre-diabetes entirely; established Type 2 diabetics see HbA1c drops of 1-2 points within 4 months." },
    ],
    servesAreas: [
      "Sector 49 (clinic location)",
      "South City I & II",
      "DLF Phase 1, 2, 3, 4, 5",
      "Sushant Lok 1, 2, 3",
      "Golf Course Road",
      "Golf Course Extension Road",
      "Sohna Road",
      "MG Road",
      "Cyber City",
      "Sector 14, 15, 17, 21, 22, 23, 31, 40, 56, 57, 65, 66, 67, 70, 71, 76, 77, 80-95",
      "Manesar",
      "Palam Vihar",
      "Sushant Lok Phase II",
    ],
    faqs: [
      { q: "Who is the best dietician in Gurgaon?", a: "Dt. Priyatama Srivastava of Go Moringa Nutri Diet Clinic, based in Sector 49 Gurugram, is rated 5.0/5 on Practo (279+ reviews) and 4.9/5 on Justdial (699+ reviews). With 20 years of experience and 10,000+ clients, she specialises in weight loss, PCOS, diabetes, thyroid, pregnancy and therapeutic diets." },
      { q: "Where is the Go Moringa clinic located in Gurgaon?", a: "Unitech Rodio Drive, D-117 & 118, South City II, Sector 49, Gurugram, Haryana 122018. The clinic is 10-15 minutes from DLF Phase 3, Sushant Lok, and Cyber City via Golf Course Road or NH-8." },
      { q: "Do you offer home consultation in Gurgaon?", a: "We don't currently offer home visits, but online consultation via video call works for clients in Manesar, far-side Gurgaon, or anyone preferring convenience. The clinical depth is identical to in-person." },
      { q: "What's the consultation fee for the best dietician in Gurgaon?", a: "Packages start with a one-month plan and scale up to comprehensive multi-month programs. Call +91-9910922899 or WhatsApp for current pricing — we'll recommend the right fit for your goal and budget." },
      { q: "Do you treat clients from other Gurgaon sectors?", a: "Yes — clients across all of Gurgaon (Sector 14 through 95, DLF Phases 1-5, Sushant Lok, Sohna Road, Manesar, Palam Vihar) regularly use the Sector 49 clinic. We've worked with clients in every major neighbourhood." },
      { q: "How do I book an appointment?", a: "WhatsApp +91-9910922899 to start a conversation, call directly, or use the booking page on this site. We respond within a few hours during clinic hours (Monday-Saturday, 10 AM-7 PM)." },
    ],
  },

  "dietician-in-delhi": {
    slug: "dietician-in-delhi",
    phpPath: "/dietician-in-delhi.php",
    city: "Delhi",
    title: "Dietician in Delhi",
    h1: "Best Dietician in Delhi",
    metaTitle: "Best Dietician in Delhi | Online Diet Consultation | Go Moringa",
    metaDescription: "Best dietician for Delhi residents — Dt. Priyatama Srivastava of Go Moringa offers online + in-clinic consultations from Sector 49 Gurugram. 20 years experience, 5★ Practo.",
    heroSubhead: "Online diet consultation for Delhi residents + Sector 49 Gurugram clinic — weight loss, PCOS, diabetes, thyroid, pregnancy and therapeutic diets.",
    heroImage: "/assets/services/dietician-in-delhi.jpeg",
    introLead: "Delhi residents have always made up a significant share of Go Moringa's client base — South Delhi (GK, Hauz Khas, Vasant Vihar, Saket), West Delhi (Punjabi Bagh, Rajouri Garden), East Delhi (Mayur Vihar, Patparganj), and Central Delhi (Karol Bagh, Connaught Place). Dt. Priyatama Srivastava consults Delhi clients via online video call as well as from her Sector 49 Gurugram clinic — a 30-45 minute drive from most South Delhi locations.",
    whyPickUs: [
      { title: "Online consultation, same clinical depth", body: "Delhi clients largely consult online — video call for the initial assessment, WhatsApp + plan PDFs throughout the program. The depth of assessment, customisation of the plan, and follow-up frequency are identical to in-clinic care. Many of our 10,000+ clients have never visited the clinic." },
      { title: "Coordinated with Delhi physicians", body: "We routinely coordinate with cardiologists, endocrinologists, gynaecologists and obstetricians across Apollo, Max, BLK, Fortis and AIIMS hospital systems. If you're already under specialist care, we work alongside them." },
      { title: "Delhi-specific dietary realities", body: "Delhi food culture has its own patterns — heavy wedding seasons, festival eating, ghee-rich Punjabi staples, butter chicken Sundays, paneer-heavy vegetarian diets. Our plans don't ask you to abandon these — they re-engineer how you eat them." },
      { title: "20 years + 10,000 clients", body: "Two decades of clinical practice with cross-NCR clientele. The track record is verifiable on Practo (5.0/279) and Justdial (4.9/699)." },
    ],
    localContext: [
      { title: "South Delhi corporate professionals", body: "Hauz Khas, Greater Kailash, Defence Colony, Vasant Vihar, Saket residents — predominantly the senior corporate / consulting / startup founder demographic with stress-related weight gain, irregular eating, and lifestyle disease creep starting in the late 30s. We've worked with this profile for 20 years." },
      { title: "Punjabi vegetarian diabetes management", body: "West Delhi's Punjabi vegetarian diabetic profile — ghee, paneer, mithai, Sunday brunch culture, daily butter chicken (or paneer butter masala). We have a tested protocol that doesn't ask Punjabi families to eat like nobody else's — it just adjusts portions, timing, and pairings." },
      { title: "PCOS and thyroid in young Delhi women", body: "Delhi's 22-35 demographic has very high PCOS and hypothyroid rates. We see this every week — diagnosed but not effectively managed, frustrated with weight cycles, told 'just lose weight' without a real plan. Our PCOS + thyroid protocols are our most-booked program for Delhi clients." },
    ],
    servesAreas: [
      "South Delhi (GK, Hauz Khas, Saket, Vasant Vihar, Defence Colony)",
      "Central Delhi (Connaught Place, Karol Bagh, Pahar Ganj)",
      "West Delhi (Punjabi Bagh, Rajouri Garden, Dwarka)",
      "East Delhi (Mayur Vihar, Patparganj, IP Extension)",
      "North Delhi (Civil Lines, Model Town, Pitampura)",
      "South West Delhi (Vasant Kunj, Dwarka)",
      "NCR overlap (Noida, Ghaziabad, Faridabad)",
    ],
    travelDistance: "Sector 49 Gurugram is 30-45 minutes from most South Delhi locations via Aurobindo Marg or NH-8.",
    faqs: [
      { q: "Do you have a clinic in Delhi?", a: "Our physical clinic is in Sector 49, Gurugram — a 30-45 minute drive from most South Delhi locations. The majority of our Delhi clients consult via online video call, which works equally well for the clinical assessment and follow-ups." },
      { q: "Can I do the entire program online from Delhi?", a: "Yes. Initial assessment via video call, customised diet plan shared as PDF, weekly follow-ups via WhatsApp + scheduled calls. Many of our most successful clients have completed entire programs without an in-clinic visit." },
      { q: "Will my diet plan account for Delhi food culture?", a: "Absolutely. We don't ask Delhi clients to eat like they're in some other city. Punjabi staples, ghee-rich foods, festival eating, wedding seasons, paneer-heavy vegetarian patterns — all built into the plan with appropriate portion and timing adjustments." },
      { q: "Who is the best dietitian for online consultation in Delhi?", a: "Dt. Priyatama Srivastava of Go Moringa — 20 years of experience, 10,000+ clients, 5.0★ on Practo (279+ reviews). Online consultation has been a core part of our practice for over a decade and is identical in depth to in-clinic care." },
      { q: "How do I pay for online consultation?", a: "We accept UPI, bank transfer, and online payment links. Payment is processed before the initial consultation, and packages are typically paid upfront with no recurring billing." },
    ],
  },

  "dietician-in-noida": {
    slug: "dietician-in-noida",
    phpPath: "/dietician-in-noida.php",
    city: "Noida",
    title: "Dietician in Noida",
    h1: "Best Dietician for Noida Residents",
    metaTitle: "Best Dietician for Noida | Online Diet Consultation | Go Moringa",
    metaDescription: "Best dietician for Noida residents — Dt. Priyatama Srivastava offers online consultation + Sector 49 Gurugram clinic. 20 years experience, 5★ Practo.",
    heroSubhead: "Online diet consultation for Noida residents + Sector 49 Gurugram clinic — weight loss, PCOS, diabetes, thyroid, therapeutic diets.",
    heroImage: "/assets/services/dietician-in-delhi.jpeg",
    introLead: "Noida and Greater Noida have grown into major NCR residential and tech hubs, but quality clinical-nutrition care has lagged behind population growth. Dt. Priyatama Srivastava's Go Moringa Clinic in Sector 49 Gurugram serves Noida clients via online consultation (the majority) or in-clinic visits for those who prefer face-to-face care.",
    whyPickUs: [
      { title: "Online consultation made for distance", body: "Noida to Sector 49 Gurugram is approximately 60-75 minutes by road via DND or Yamuna Expressway. Most Noida clients use online consultation — the clinical depth is identical to in-person, and weekly follow-ups happen via WhatsApp." },
      { title: "Tech professional + corporate workforce", body: "Noida's corporate clients face the same patterns as Gurgaon's — long sedentary hours, late dinners, irregular meal timing, lifestyle disease creep in the 30s. Our plans accommodate these realities." },
      { title: "Coordination with Noida physicians", body: "We coordinate with specialists across Noida and Greater Noida — Fortis, Max, Jaypee, Kailash — when clients are under their care." },
      { title: "20 years + 10,000 clients across NCR", body: "Verifiable on Practo (5.0/279) and Justdial (4.9/699). Tested track record across all four NCR pockets." },
    ],
    localContext: [
      { title: "Tech professional lifestyle", body: "Noida's tech employees in Sectors 18, 62, 125, 128 face the same Gurgaon-style schedule pressure — long hours, food delivery, irregular sleep. Our protocols accommodate these realities rather than fight them." },
      { title: "Greater Noida residential growth", body: "Greater Noida West and Yamuna Expressway-side residents face longer commutes and family meal management challenges. We design plans that integrate with family meal patterns." },
      { title: "PCOS, thyroid, diabetes — same NCR demographics", body: "Same chronic-condition rates as Gurgaon/Delhi. Same dietary protocols apply, calibrated to the individual." },
    ],
    servesAreas: [
      "Sector 1-168 Noida",
      "Greater Noida (West, Central, Yamuna Expressway side)",
      "Noida Extension",
      "Sector 18 (commercial)",
      "Sector 62, 125, 128 (tech corridor)",
      "Mahagun + Eldeco + Jaypee complexes",
      "Greater Noida West",
    ],
    travelDistance: "Sector 49 Gurugram is approximately 60-75 minutes from Noida via DND Expressway.",
    faqs: [
      { q: "Do you have a clinic in Noida?", a: "Our physical clinic is in Sector 49, Gurugram — approximately 60-75 minutes from Noida. Most Noida clients use online consultation to save the commute. Clinical depth is identical." },
      { q: "Can I do the entire program online from Noida?", a: "Yes. Initial video assessment + customised diet plan + WhatsApp follow-ups. Many of our Noida clients have completed entire programs without an in-clinic visit." },
      { q: "Will the diet plan account for Noida tech lifestyle?", a: "Yes. Long hours, food delivery, irregular sleep, business travel — all built into the plan. We work with your reality." },
      { q: "Who is the best dietitian for Noida residents?", a: "Dt. Priyatama Srivastava of Go Moringa — 20 years of experience, 10,000+ clients across NCR, 5.0★ on Practo. Online consultation works equally well as in-person." },
    ],
  },

  "dietitian-in-faridabad": {
    slug: "dietitian-in-faridabad",
    phpPath: "/dietitian-in-faridabad.php",
    city: "Faridabad",
    title: "Dietitian in Faridabad",
    h1: "Best Dietitian in Faridabad",
    metaTitle: "Best Dietitian in Faridabad | Online Diet Consultation | Go Moringa",
    metaDescription: "Best dietitian for Faridabad residents — Dt. Priyatama Srivastava of Go Moringa offers online consultation + Sector 49 Gurugram clinic. 20 years experience, 5★ Practo.",
    heroSubhead: "Online diet consultation for Faridabad residents + Sector 49 Gurugram clinic — weight loss, PCOS, diabetes, thyroid and therapeutic diets.",
    heroImage: "/assets/services/dietitian-in-faridabad.jpeg",
    introLead: "Faridabad has grown rapidly as a residential and industrial hub, but quality dietary care has been hard to find locally. Many Faridabad residents drive 45-60 minutes to Gurgaon or South Delhi for specialised dietary care. Dt. Priyatama Srivastava's Go Moringa Clinic in Sector 49 Gurugram serves Faridabad clients in two ways — online consultation (the majority) or in-clinic visits for those who prefer face-to-face care.",
    whyPickUs: [
      { title: "Online consultation simplifies the distance", body: "Faridabad to Sector 49 Gurugram is approximately 45 minutes via Faridabad-Gurgaon Expressway. Many Faridabad clients save the commute entirely by doing the program online — video call for initial assessment, WhatsApp + plan PDFs throughout. The clinical depth is identical." },
      { title: "Industrial sector + corporate workforce", body: "Faridabad's mix of industrial professionals and Delhi-NCR commuters has its own dietary patterns — shift workers, long commutes, irregular meals, family-cooking-dependent diets. Our plans accommodate these realities." },
      { title: "Coordination with Faridabad physicians", body: "We coordinate with specialists across Faridabad — endocrinologists, cardiologists, gynaecologists — when clients are already under their care. Diet runs alongside the medical care, not in conflict." },
      { title: "20 years of clinical track record", body: "10,000+ clients across NCR over 20 years. Verifiable on Practo (5.0/279) and Justdial (4.9/699)." },
    ],
    localContext: [
      { title: "Commuter weight gain", body: "The 1.5-2 hour daily commute typical for Faridabad-Delhi commuters wrecks dietary discipline — early mornings, missed breakfasts, fast-food lunches, late dinners. We have a specific protocol for this lifestyle that works with the commute realities rather than against them." },
      { title: "Industrial shift workers", body: "Shift workers in Faridabad's industrial zones face circadian-disrupted eating patterns — night shifts, rotating schedules, irregular meal timing. We've built protocols for these specifically — the diet needs to work with whatever shift you're on." },
      { title: "Family + joint-family meal planning", body: "Faridabad has a higher proportion of joint families than newer Gurgaon developments. Diet planning that ignores family meals doesn't last 2 weeks. We integrate plans with family meal patterns so the whole household supports the change." },
    ],
    servesAreas: [
      "Sector 1-95",
      "Old Faridabad",
      "Ballabhgarh",
      "NIT Faridabad",
      "Mathura Road",
      "Faridabad-Gurgaon Expressway corridor",
      "Greater Faridabad",
    ],
    travelDistance: "Sector 49 Gurugram is approximately 45 minutes from Faridabad via the Faridabad-Gurgaon Expressway.",
    faqs: [
      { q: "Do you have a clinic in Faridabad?", a: "Our clinic is in Sector 49, Gurugram — about 45 minutes from Faridabad via the Faridabad-Gurgaon Expressway. Most of our Faridabad clients use online consultation to save the commute." },
      { q: "Can I do the entire program online from Faridabad?", a: "Yes. Initial video assessment + customised diet plan + WhatsApp follow-ups. The vast majority of our Faridabad client base completes the entire program without ever visiting the clinic." },
      { q: "Will the diet plan account for shift work?", a: "Yes. Shift workers — especially in Faridabad's industrial zones — get specifically calibrated plans that account for circadian disruption, meal timing on night shifts, and rotation between schedules. This is a niche we handle regularly." },
      { q: "Who is the best dietitian for Faridabad residents?", a: "Dt. Priyatama Srivastava of Go Moringa — 20 years of experience, 10,000+ clients across NCR, 5.0★ on Practo. Online consultation works equally well for Faridabad clients as the in-person Sector 49 clinic." },
      { q: "How do I book a consultation from Faridabad?", a: "WhatsApp +91-9910922899 or call to start. The first conversation is free — we'll discuss your goal, recommend the right package, and schedule the initial video consultation." },
    ],
  },

  // ─── Hyperlocal / keyword location pages (2026-05-22) ─────────────────────
  "nutritionist-in-gurgaon": {
    slug: "nutritionist-in-gurgaon",
    phpPath: "/nutritionist-in-gurgaon",
    city: "Gurgaon",
    title: "Nutritionist in Gurgaon",
    h1: "Best Nutritionist in Gurgaon",
    metaTitle: "Best Nutritionist in Gurgaon | Clinical Nutrition | Go Moringa",
    metaDescription: "Looking for a nutritionist in Gurgaon? Dt. Priyatama Srivastava — clinical nutritionist with 20 years' experience, 10,000+ clients, ISO-certified Sector 49 clinic, 5★ on Practo.",
    heroSubhead: "Clinical nutrition for weight, PCOS, diabetes, thyroid and pregnancy — at the Sector 49 clinic or online, with the medical depth a real nutritionist brings.",
    heroImage: "/photography/clinic-reception.jpg",
    introLead: "A nutritionist worth consulting in Gurgaon is not the one with the loudest before-and-after reel — it is the one who reads your blood work, asks about your family's kitchen and your office hours, and writes a plan you can actually keep. Dt. Priyatama Srivastava has practised clinical nutrition in Gurgaon for 20 years, and the approach has never changed: medical, documented, and built around the food you already eat.",
    whyPickUs: [
      { title: "A clinical nutritionist, not a fad-diet seller", body: "The work here is medical nutrition therapy — interpreting lab reports, accounting for medication and medical history, and building a plan around the science of how your body uses food. No product lines, no MLM supplements, no crash protocols. The approach is the same one that has held for two decades." },
      { title: "Nutritionist or dietitian — what you actually need", body: "Many Gurgaon searches use 'nutritionist' and 'dietitian' interchangeably. What matters is clinical training and a track record with real medical conditions. Go Moringa offers exactly that — qualified, certified clinical nutrition practice with 10,000+ documented client outcomes." },
      { title: "ISO 9001:2015 certified clinic", body: "The Sector 49 clinic holds an ISO 9001:2015 quality-management certification — a verifiable, independently-audited credential covering the clinic's consultation and plan-delivery process. Few nutrition practices in Gurgaon carry one." },
      { title: "20 years, 10,000+ clients, 5.0 on Practo", body: "Verifiable on India's largest healthcare review platforms — 279+ reviews on Practo at 5.0, 699+ on Justdial at 4.9. Reputation built on results, over years, not on advertising." },
    ],
    localContext: [
      { title: "Gurgaon's lifestyle-disease curve", body: "The Gurgaon professional sees lifestyle-disease markers — blood sugar, lipids, blood pressure, fatty liver — creep up from the mid-30s. A clinical nutritionist's job is to catch and reverse that curve through diet before it hardens into medication-dependent disease. This is the most common reason Gurgaon clients book a first consultation." },
      { title: "Corporate eating, re-engineered", body: "Business lunches, food-app dinners, weekend brunches, conference travel — the Gurgaon corporate calendar is built around eating. A nutritionist's plan does not pretend that calendar away; it re-engineers how you eat within it, meal by meal." },
      { title: "Women's hormonal health", body: "PCOS, thyroid disorders and pregnancy nutrition make up a large share of the practice. Gurgaon's young women are diagnosed with PCOS in striking numbers and too often handed 'lose weight' as the entire plan. Clinical nutrition gives them the actual mechanism — insulin, inflammation, hormones — and a plan that works with it." },
    ],
    servesAreas: [
      "Sector 49 (clinic location)",
      "South City I & II",
      "DLF Phase 1, 2, 3, 4, 5",
      "Sushant Lok 1, 2, 3",
      "Golf Course Road & Extension",
      "Sohna Road",
      "MG Road & Cyber City",
      "Sectors 14–95",
      "Manesar · Palam Vihar",
    ],
    faqs: [
      { q: "What is the difference between a nutritionist and a dietitian?", a: "In everyday use the terms overlap. What matters is clinical training and a track record managing real medical conditions. Dt. Priyatama Srivastava is a qualified, certified clinical practitioner with 20 years of experience across weight, PCOS, diabetes, thyroid and therapeutic diets — that clinical depth is what you should look for in either title." },
      { q: "Who is the best nutritionist in Gurgaon?", a: "Dt. Priyatama Srivastava of Go Moringa Nutri Diet Clinic, Sector 49 — rated 5.0 on Practo (279+ reviews) and 4.9 on Justdial (699+), with 20 years' experience and 10,000+ clients. The clinic is ISO 9001:2015 certified." },
      { q: "Does the nutritionist consult online?", a: "Yes. Consultations run both at the Sector 49 clinic and online by video call for clients across Gurgaon and beyond. The assessment, written plan and weekly reviews are identical either way." },
      { q: "What does a nutrition consultation cover?", a: "A detailed assessment of your health history, lab reports, lifestyle and food habits, followed by a personalised Indian-meal plan, weekly follow-ups and an open WhatsApp line. The first 15-minute conversation is free." },
      { q: "Where is the clinic located?", a: "Unitech Rodio Drive, D-117 & 118, South City II, Sector 49, Gurugram 122018 — open Monday to Saturday, 10 AM to 7 PM." },
    ],
  },

  "diet-clinic-in-gurgaon": {
    slug: "diet-clinic-in-gurgaon",
    phpPath: "/diet-clinic-in-gurgaon",
    city: "Gurgaon",
    title: "Diet Clinic in Gurgaon",
    h1: "Diet Clinic in Gurgaon",
    metaTitle: "Diet Clinic in Gurgaon — Sector 49 | ISO Certified | Go Moringa",
    metaDescription: "Go Moringa Nutri Diet & Food Clinic — an ISO 9001:2015 certified diet clinic in Sector 49, Gurgaon. 20 years of practice, 10,000+ clients. Walk in, or consult online.",
    heroSubhead: "A real diet clinic in Sector 49 Gurgaon — ISO 9001:2015 certified, 20 years in practice. Walk in for a consultation, or do the whole programme online.",
    heroImage: "/photography/clinic-waiting.jpg",
    introLead: "A diet clinic is more than a consultation room — it is a process: the assessment, the written plan, the weekly review, the lab work read in context. Go Moringa Nutri Diet & Food Clinic has run that process from Sector 49, Gurgaon for 20 years, and holds an ISO 9001:2015 quality-management certification for it. You can walk in, or run the entire programme online from anywhere.",
    whyPickUs: [
      { title: "A real, certified clinic — not a home setup", body: "The Go Moringa clinic occupies a dedicated space at Unitech Rodio Drive, South City II, Sector 49 — reception, consultation rooms, the works. It is ISO 9001:2015 certified, an independently-audited quality credential for the clinic's process. The clinic photographs on this site are the actual rooms; no stock, no staging." },
      { title: "Twenty years of documented practice", body: "The clinic has built diet plans for 10,000+ clients since 2005 — weight loss and gain, PCOS, diabetes, thyroid, cardiac and kidney conditions, pregnancy, post-cancer recovery, figure correction. Each plan is a single written document, calibrated to one person." },
      { title: "Walk-in or fully online", body: "Sector 49 is reachable in 10–15 minutes from DLF Phases, Sushant Lok, Sohna Road and Golf Course Road. Prefer not to travel? The clinic has run online programmes for over a decade — video assessment, written plan, weekly reviews — with identical clinical depth." },
      { title: "5.0 Practo · 4.9 Justdial", body: "279+ verified reviews on Practo at a 5.0 rating, 699+ on Justdial at 4.9 — accumulated over years of consistent clinical results across Gurgaon and NCR." },
    ],
    localContext: [
      { title: "What a first visit looks like", body: "A first consultation at the clinic is a long, detailed conversation — health history, current labs, daily routine, family meal patterns, every diet you have tried before. From it, Dt. Priyatama builds your plan. You leave with a clear understanding of what will change and why." },
      { title: "The weekly review is the engine", body: "A diet clinic earns its results in the follow-up, not the first visit. Each week, your plan is reviewed against real progress — weight, energy, lab markers — and revised. The clinic keeps the plan honest as festivals, travel and plateaus arrive." },
      { title: "Conditions the clinic manages", body: "Weight loss and weight gain, PCOS and PCOD, type-2 diabetes and pre-diabetes, thyroid disorders, high cholesterol and blood pressure, fatty liver, pregnancy and post-partum nutrition, and therapeutic diets for chronic and recovery conditions." },
    ],
    servesAreas: [
      "Sector 49 (the clinic)",
      "South City I & II",
      "DLF Phase 1–5",
      "Sushant Lok 1, 2, 3",
      "Sohna Road corridor",
      "Golf Course Road & Extension",
      "MG Road · Cyber City",
      "Sectors 14–95 · Manesar",
    ],
    faqs: [
      { q: "Where is the Go Moringa diet clinic in Gurgaon?", a: "Unitech Rodio Drive, D-117 & 118, South City II, Sector 49, Gurugram, Haryana 122018. Open Monday to Saturday, 10 AM to 7 PM. It is 10–15 minutes from DLF Phase 3, Sushant Lok and Sohna Road." },
      { q: "Is the diet clinic certified?", a: "Yes. Go Moringa Nutri Diet & Food Clinic holds an ISO 9001:2015 quality-management certification — an independently-audited credential covering the clinic's consultation and plan-delivery process." },
      { q: "Can I visit the clinic for a walk-in consultation?", a: "Yes, though booking ahead on WhatsApp (+91-9910922899) is recommended so a slot is reserved. The first 15-minute conversation is free." },
      { q: "Do I have to visit, or can the programme be done online?", a: "Either works. Many clients complete the entire programme online — video assessment, written plan, weekly reviews — without visiting. The clinical depth is the same as an in-clinic engagement." },
      { q: "What conditions does the clinic treat?", a: "Weight loss and gain, PCOS/PCOD, diabetes, thyroid, cholesterol, blood pressure, fatty liver, pregnancy nutrition, figure correction, and therapeutic diets for chronic conditions." },
    ],
  },

  "dietitian-in-dlf-gurgaon": {
    slug: "dietitian-in-dlf-gurgaon",
    phpPath: "/dietitian-in-dlf-gurgaon",
    city: "DLF, Gurgaon",
    title: "Dietitian in DLF Gurgaon",
    h1: "Dietitian in DLF Gurgaon",
    metaTitle: "Dietitian in DLF Gurgaon — Phase 1 to 5 | Go Moringa",
    metaDescription: "Dietitian for DLF Phase 1–5, Gurgaon — Dt. Priyatama Srivastava at the Sector 49 clinic, 10–15 minutes from DLF. 20 years' experience, 10,000+ clients, 5★ Practo.",
    heroSubhead: "For residents of DLF Phase 1 to 5 — the Go Moringa clinic in Sector 49 is a short drive away, or consult online. Weight loss, PCOS, diabetes, thyroid and more.",
    heroImage: "/photography/clinic-reception.jpg",
    introLead: "DLF Phases 1 to 5 sit at the heart of corporate Gurgaon — and at the heart of its lifestyle-disease profile. The long hours along Golf Course Road and MG Road, the business dinners, the gym memberships that never quite translate to fat loss. The Go Moringa clinic in Sector 49 is a 10–15 minute drive from any DLF Phase, and Dt. Priyatama Srivastava has built diet plans for DLF residents for 20 years.",
    whyPickUs: [
      { title: "Minutes from every DLF Phase", body: "The Sector 49 clinic is 10–15 minutes from DLF Phase 1, 2, 3, 4 and 5 via Golf Course Road or Sohna Road. Close enough for the weekly rhythm of in-clinic reviews if you want them — and fully available online if you would rather not drive." },
      { title: "Built for the DLF corporate calendar", body: "DLF Phase residents are, overwhelmingly, senior corporate professionals, consultants and founders. The plan is built around that reality — business travel, client dinners, conference eating — re-engineering how you eat within the calendar rather than against it." },
      { title: "20 years of DLF clients", body: "Two decades of working with this exact demographic. The dietary patterns of a Phase 3 finance professional or a Phase 5 startup founder are familiar territory, and the plans are calibrated for them." },
      { title: "5.0 Practo · ISO-certified clinic", body: "279+ Practo reviews at 5.0, 699+ on Justdial — and an ISO 9001:2015 certified clinic process. Verifiable credentials, not advertising." },
    ],
    localContext: [
      { title: "Golf Course Road professional burnout", body: "The classic DLF case: 12-hour days, two or three food-app dinners a week, weekend social eating, a gym membership and no fat loss to show for it. The plan does not fight that lifestyle — it adjusts the meals, timings and pairings that actually move the needle." },
      { title: "Pre-wedding figure correction", body: "DLF Phase 3, 4 and 5 residents booking six to twelve months before a wedding are a large client group — with a tested protocol for visible figure correction, skin clarity through nutrition, and steady energy through the wedding week itself." },
      { title: "Family and expat households", body: "DLF Phases have a high share of dual-career and expatriate households where meals are managed across cooks, schedules and food cultures. Plans are built to fit the household, not to ask one person to eat alone." },
    ],
    servesAreas: [
      "DLF Phase 1",
      "DLF Phase 2",
      "DLF Phase 3",
      "DLF Phase 4",
      "DLF Phase 5",
      "Golf Course Road",
      "MG Road",
      "Sector 49 (clinic, 10–15 min away)",
    ],
    travelDistance: "The Sector 49 clinic is a 10–15 minute drive from any DLF Phase via Golf Course Road or Sohna Road — or skip the drive entirely with online consultation.",
    faqs: [
      { q: "How far is the clinic from DLF Phase 3?", a: "The Go Moringa clinic in Sector 49 is roughly 10–15 minutes from DLF Phase 3 via Golf Course Road or Sohna Road. Phases 1, 2, 4 and 5 are a similar distance." },
      { q: "Can DLF residents consult online instead of visiting?", a: "Yes. Many DLF clients run the entire programme online — video assessment, written plan, weekly reviews — and never need to drive in. The clinical depth is identical." },
      { q: "Who is the best dietitian for DLF Gurgaon residents?", a: "Dt. Priyatama Srivastava of Go Moringa, Sector 49 — 20 years' experience, 10,000+ clients, 5.0 on Practo. The clinic has worked with the DLF Phase demographic for two decades." },
      { q: "Do you handle pre-wedding diet plans for DLF clients?", a: "Yes — pre-wedding figure correction is one of the most-booked programmes among DLF Phase residents. Booking six to twelve months ahead gives the best results." },
      { q: "How do I book a consultation?", a: "WhatsApp +91-9910922899 or call. The first 15-minute conversation is free — we'll discuss your goal and recommend the right programme." },
    ],
  },

  "dietitian-in-sohna-road": {
    slug: "dietitian-in-sohna-road",
    phpPath: "/dietitian-in-sohna-road",
    city: "Sohna Road",
    title: "Dietitian on Sohna Road",
    h1: "Dietitian on Sohna Road Gurgaon",
    metaTitle: "Dietitian on Sohna Road, Gurgaon | Go Moringa Sector 49",
    metaDescription: "Dietitian on Sohna Road, Gurgaon — Dt. Priyatama Srivastava's Go Moringa clinic in Sector 49 is right on the Sohna Road corridor. 20 years' experience, 5★ Practo.",
    heroSubhead: "The Go Moringa clinic sits right on the Sohna Road corridor in Sector 49 — a few minutes from the condominium belt. In-clinic or online consultation.",
    heroImage: "/photography/clinic-waiting.jpg",
    introLead: "If you live along the Sohna Road corridor, the Go Moringa diet clinic is effectively your neighbourhood clinic — it sits in Sector 49, on the corridor itself, minutes from the condominium belt of Sectors 47 to 50 and 67 to 78. Dt. Priyatama Srivastava has practised clinical nutrition here for 20 years.",
    whyPickUs: [
      { title: "On the Sohna Road corridor itself", body: "The Sector 49 clinic is on the Sohna Road corridor — for residents of Vatika, Tulip, Central Park, Malibu Towne, Uppal Southend and the surrounding sectors, it is one of the closest clinical-nutrition practices there is. A short drive, no expressway, no city crossing." },
      { title: "Built for the condominium belt", body: "The Sohna Road corridor is a dense belt of family condominiums and dual-career households. The plans are built for that — family meal patterns, shared kitchens, children's nutrition and the realities of cooking for a household, not an individual." },
      { title: "Walk in for the weekly rhythm", body: "Because the clinic is so close, Sohna Road clients can keep an easy weekly in-clinic rhythm if they prefer face-to-face reviews. Those who would rather not travel get the identical programme online." },
      { title: "20 years · 10,000+ clients · 5.0 Practo", body: "Two decades of practice, verifiable on Practo (5.0, 279+ reviews) and Justdial (4.9, 699+). An ISO 9001:2015 certified clinic." },
    ],
    localContext: [
      { title: "Condominium family nutrition", body: "The Sohna Road belt is built around large residential condominiums and joint or dual-career families. A diet plan that ignores the family kitchen lasts two weeks. Plans here are integrated with household meal patterns so the whole family supports the change." },
      { title: "Commuter eating along the corridor", body: "Sohna Road residents commuting to Cyber City, Udyog Vihar or Golf Course Road face early mornings, skipped breakfasts and late dinners. The plan is calibrated to the commute, not to an idealised schedule." },
      { title: "PCOS, thyroid and diabetes locally", body: "The corridor's demographic mirrors Gurgaon's wider chronic-condition profile — high PCOS and thyroid rates in younger women, pre-diabetes and diabetes in 40-plus professionals. All are core to the practice." },
    ],
    servesAreas: [
      "Sohna Road (the corridor)",
      "Sectors 47, 48, 49, 50",
      "Sectors 67, 68, 69, 70",
      "Sectors 71–78",
      "Vatika · Tulip · Central Park",
      "Malibu Towne · Uppal Southend",
      "South City II",
    ],
    travelDistance: "The Sector 49 clinic sits on the Sohna Road corridor itself — a few minutes from most condominiums in Sectors 47–50 and 67–78.",
    faqs: [
      { q: "Is there a dietitian's clinic on Sohna Road?", a: "Yes — the Go Moringa diet clinic is in Sector 49, on the Sohna Road corridor itself. It is one of the closest clinical-nutrition practices for residents of the Sohna Road condominium belt." },
      { q: "How close is the clinic to the Sohna Road condominiums?", a: "Very close — Sector 49 is on the corridor, a few minutes' drive from Vatika, Tulip, Central Park, Malibu Towne and the surrounding Sectors 47–50 and 67–78." },
      { q: "Can the whole family be managed together?", a: "Yes. Plans are built around the household kitchen, which makes managing nutrition for couples and families practical. Each person still gets an individually calibrated plan." },
      { q: "Who is the best dietitian for Sohna Road residents?", a: "Dt. Priyatama Srivastava of Go Moringa, Sector 49 — 20 years' experience, 10,000+ clients, 5.0 on Practo, ISO-certified clinic, right on the Sohna Road corridor." },
      { q: "Can I consult online instead?", a: "Yes. The full programme — video assessment, written plan, weekly reviews — is available online for Sohna Road clients who would rather not travel." },
    ],
  },

  "dietitian-in-sushant-lok": {
    slug: "dietitian-in-sushant-lok",
    phpPath: "/dietitian-in-sushant-lok",
    city: "Sushant Lok",
    title: "Dietitian in Sushant Lok",
    h1: "Dietitian in Sushant Lok Gurgaon",
    metaTitle: "Dietitian in Sushant Lok, Gurgaon | Go Moringa Sector 49",
    metaDescription: "Dietitian for Sushant Lok 1, 2 & 3, Gurgaon — Dt. Priyatama Srivastava's Go Moringa clinic in Sector 49 is a short drive away. 20 years' experience, 5★ Practo.",
    heroSubhead: "For Sushant Lok 1, 2 and 3 — the Go Moringa clinic in Sector 49 is a short drive via Golf Course Road. In-clinic or online consultation.",
    heroImage: "/photography/clinic-consultation.jpg",
    introLead: "Sushant Lok is one of Gurgaon's most established residential addresses — Phases 1, 2 and 3 spanning the stretch between MG Road and Golf Course Road. The Go Moringa diet clinic in Sector 49 is a short, easy drive from all three, and Dt. Priyatama Srivastava has built diet plans for Sushant Lok residents across 20 years of practice.",
    whyPickUs: [
      { title: "A short drive from all three phases", body: "The Sector 49 clinic is a quick drive from Sushant Lok 1, 2 and 3 via Golf Course Road or Sohna Road — close enough for an easy weekly in-clinic rhythm, and fully available online for those who would rather not travel." },
      { title: "Two decades with an established address", body: "Sushant Lok has been home to Gurgaon families for decades — which means multi-generational households, established food cultures, and clients of every age. The practice has 20 years of experience across exactly that range." },
      { title: "Pre-wedding and figure correction", body: "Sushant Lok is among the largest sources of pre-wedding clients — brides and grooms booking six to twelve months ahead for figure correction, skin clarity through nutrition, and energy through the wedding week. There is a tested protocol for it." },
      { title: "5.0 Practo · ISO-certified clinic", body: "279+ Practo reviews at 5.0, 699+ on Justdial at 4.9, and an ISO 9001:2015 certified clinic process — verifiable credentials accumulated over years." },
    ],
    localContext: [
      { title: "Multi-generational household nutrition", body: "Sushant Lok's established households often span two or three generations under one roof — which means a diet plan must fit a shared kitchen and a range of ages and conditions. Plans are built to integrate with the family table." },
      { title: "Lifestyle-disease management in 40-plus residents", body: "Long-settled Sushant Lok residents in their 40s, 50s and beyond form a steady share of the practice — managing diabetes, blood pressure, cholesterol, thyroid and joint health through therapeutic diets that work alongside their doctors." },
      { title: "Young professionals and PCOS", body: "Sushant Lok's younger residents — working professionals along the MG Road and Golf Course Road corridors — bring the familiar Gurgaon pattern of PCOS, thyroid issues and stress-linked weight gain. These are core to the practice." },
    ],
    servesAreas: [
      "Sushant Lok Phase 1",
      "Sushant Lok Phase 2",
      "Sushant Lok Phase 3",
      "MG Road",
      "Golf Course Road",
      "South City I",
      "Sector 49 (clinic)",
    ],
    travelDistance: "The Sector 49 clinic is a short drive from Sushant Lok 1, 2 and 3 via Golf Course Road or Sohna Road — or consult online and skip the drive.",
    faqs: [
      { q: "How far is the clinic from Sushant Lok?", a: "The Go Moringa clinic in Sector 49 is a short drive from Sushant Lok 1, 2 and 3 via Golf Course Road or Sohna Road — typically 10–15 minutes depending on the phase." },
      { q: "Who is the best dietitian for Sushant Lok residents?", a: "Dt. Priyatama Srivastava of Go Moringa, Sector 49 — 20 years' experience, 10,000+ clients, 5.0 on Practo, and an ISO 9001:2015 certified clinic, a short drive from all three Sushant Lok phases." },
      { q: "Can an older family member's condition be managed?", a: "Yes. Therapeutic diets for diabetes, blood pressure, cholesterol, thyroid and joint health are a core part of the practice, designed to work alongside the treating doctor." },
      { q: "Do you handle pre-wedding diet plans?", a: "Yes — pre-wedding figure correction is one of the most-booked programmes among Sushant Lok clients. Booking six to twelve months ahead gives the best results." },
      { q: "Can I consult online instead of visiting?", a: "Yes. The complete programme — video assessment, written plan, weekly reviews — is available online for Sushant Lok clients who prefer not to travel." },
    ],
  },
};

export const LOCATION_LIST = Object.values(LOCATIONS);

export function getLocation(slug: string): LocationData | undefined {
  return LOCATIONS[slug];
}

// ─── Old-site image purge (2026-05-21) ──────────────────────────────────────
import { heroForLocation } from "./photo-strategy";
for (const slug of Object.keys(LOCATIONS)) {
  LOCATIONS[slug].heroImage = heroForLocation(slug);
}
