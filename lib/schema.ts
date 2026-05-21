/**
 * JSON-LD structured data generators.
 * Each page should render the appropriate schema in its <head> as a
 * <script type="application/ld+json"> tag for AEO/GEO/LEO discovery.
 */

import { CONTACT, PERSON, REVIEWS, SITE, SOCIAL } from "./site";
import { PHOTOS } from "./images";

// Curated image URLs used in schema. The old gomoringa.in /assets/* paths are
// intentionally NOT used. Person.image is omitted entirely until the client
// provides a real clinic photo — Google + AI engines tolerate this; a fake
// stock photo would be deceptive E-E-A-T.
const BUSINESS_IMAGE_URL = PHOTOS.indianThali.url;

const sameAs = [SOCIAL.facebook, SOCIAL.instagram, SOCIAL.twitter, SOCIAL.youtube];

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "@id": `${SITE.url}/#business`,
    name: "Go Moringa Nutri Diet & Food Clinic",
    alternateName: SITE.name,
    description: SITE.defaultDescription,
    url: SITE.url,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    image: `${SITE.url}/photography/clinic-reception.jpg`,
    // ISO 9001:2015 quality-management certification. The certificate scope
    // matches our published services (Weight Loss, Weight Gain, Figure
    // Correction, Therapeutic Diet, Healthy Pregnancy Diet). Adds a verifiable
    // E-E-A-T credential for AI engines + search engines.
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Certification",
      name: "ISO 9001:2015 Quality Management System",
      recognizedBy: { "@type": "Organization", name: "International Quality Certification Services (IQCS) · UKAC accredited" },
      identifier: "22ZKAK10019Q",
    },
    // logo intentionally omitted — wordmark-only brand; no logo image asset.
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address.street,
      addressLocality: CONTACT.address.city,
      addressRegion: CONTACT.address.region,
      postalCode: CONTACT.address.postalCode,
      addressCountry: CONTACT.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: 28.4145, longitude: 77.0407 },
    areaServed: [
      { "@type": "City", name: "Gurugram" },
      { "@type": "City", name: "Delhi" },
      { "@type": "City", name: "Noida" },
      { "@type": "City", name: "Faridabad" },
      { "@type": "Country", name: "India" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: CONTACT.hours.open,
      closes: CONTACT.hours.close,
    },
    sameAs,
    founder: { "@id": `${SITE.url}/#person-priyatama` },
    employee: { "@id": `${SITE.url}/#person-priyatama` },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: REVIEWS.practo.rating,
      reviewCount: REVIEWS.practo.count + REVIEWS.justdial.count,
      bestRating: 5,
      worstRating: 1,
    },
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE.url}/#person-priyatama`,
    name: PERSON.name,
    jobTitle: PERSON.role,
    // Real clinic portrait (2026-05-21 client photoshoot). Replaces the omitted
    // field we used while only Unsplash placeholders existed.
    image: `${SITE.url}/photography/priyatama-portrait.jpg`,
    url: `${SITE.url}/priyatama-srivastava.php`,
    worksFor: { "@id": `${SITE.url}/#business` },
    knowsAbout: [
      "Weight Loss",
      "Weight Gain",
      "PCOS / PCOD",
      "Diabetes",
      "Thyroid Disorders",
      "Pregnancy Nutrition",
      "Therapeutic Diet",
      "Clinical Nutrition",
      "Hormonal Imbalance",
      "Gastrointestinal Health",
    ],
    sameAs,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    publisher: { "@id": `${SITE.url}/#business` },
    inLanguage: "en-IN",
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// JSON-LD rendering is handled by the JsonLd component
// in app/components/JsonLd.tsx — see that file for safety notes.
