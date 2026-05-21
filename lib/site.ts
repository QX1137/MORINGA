/**
 * Single source of truth for site-wide constants.
 * Imported by layout, components, schema generators, and metadata builders.
 */

export const SITE = {
  name: "Go Moringa",
  tagline: "Best Dietitian in Gurgaon",
  url: "https://www.gomoringa.in",
  defaultDescription:
    "Go Moringa Diet Clinic — Dt. Priyatama Srivastava, the best dietitian in Gurgaon. 20 years of experience, 10,000+ clients. Personalised diet plans for weight loss, PCOS, diabetes, thyroid, pregnancy and more.",
} as const;

export const PERSON = {
  name: "Dt. Priyatama Srivastava",
  shortName: "Dt. Priyatama",
  role: "Dietitian & Nutritionist",
  yearsExperience: 20,
  clientCount: "10,000+",
} as const;

export const CONTACT = {
  phone: "+91-9910922899",
  phoneTel: "+919910922899",
  whatsapp: "919910922899",
  whatsappMessage:
    "Hi Dt. Priyatama, I'd like to book a diet consultation. Please share details.",
  email: "info@gomoringa.in",
  address: {
    street: "Unitech Rodio Drive, D-117 & 118, South City II",
    locality: "Sector 49",
    city: "Gurugram",
    region: "Haryana",
    postalCode: "122018",
    country: "IN",
    countryName: "India",
    fullAddress:
      "Unitech Rodio Drive, D-117 & 118, South City II, Sector 49, Gurugram, Haryana 122018, India",
  },
  hours: {
    open: "10:00",
    close: "19:00",
    days: "Monday to Saturday",
  },
} as const;

export const REVIEWS = {
  practo: { rating: 5.0, count: 279, url: "https://www.practo.com/gurgaon/clinic/go-moringa-nutri-diet-food-clinic-gurgaon-sector-29" },
  justdial: { rating: 4.9, count: 699, url: "https://www.justdial.com/Gurgaon/Dr-Priyatama-Srivastava-go-Moringa-Nutri-Diet-Food-Clinic-Sector-49/011PXX11-XX11-170125012113-G8I1_BZDET" },
  lybrate: { rating: 4.8, count: 0, url: "https://www.lybrate.com/gurgaon/clinic/go-moringa-nutri-diet-and-food-clinic-gurgaon-sector-49" },
} as const;

export const SOCIAL = {
  facebook: "https://www.facebook.com/GoMoringa.In",
  instagram: "https://www.instagram.com/dt_priyatamasrivastava/",
  twitter: "https://twitter.com/Go_Moringa",
  twitterHandle: "@Go_Moringa",
  youtube: "https://www.youtube.com/channel/UCmAPi8Kp36xI50E_kI7gVWg",
} as const;

export const CHAT = {
  tawkPropertyId: "633ecf9637898912e96d32fe",
  tawkWidgetId: "1gemllp59",
} as const;

export const ANALYTICS = {
  ga4Id: "G-ZCGZ47YZ53",
  googleSiteVerification: "dpa0YfZa6HX9RUj1HsYd7DUmEKdrnj58Sq6_gvckE9g",
  // Microsoft Clarity project ID. Set via NEXT_PUBLIC_CLARITY_ID env in Vercel,
  // OR replace the fallback once Priyatama provides a real Clarity project.
  // To create: https://clarity.microsoft.com/ → New project → copy the project ID.
  clarityId: process.env.NEXT_PUBLIC_CLARITY_ID ?? "",
} as const;

export const whatsappUrl = () =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;

export const phoneUrl = () => `tel:${CONTACT.phoneTel}`;
