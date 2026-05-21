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
