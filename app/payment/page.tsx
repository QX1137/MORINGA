import type { Metadata } from "next";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { JsonLd } from "@/app/components/JsonLd";
import { CONTACT, SITE, whatsappUrl } from "@/lib/site";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Payment Methods | Go Moringa Diet Clinic",
  description: "Payment options for Go Moringa diet packages — bank transfer (HDFC, ICICI), UPI, and online payment. Confirm package selection with us first.",
  alternates: { canonical: "/payment.php" },
};

export default function PaymentPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Payment", url: `${SITE.url}/payment.php` },
  ]);
  const schemas = [localBusinessSchema(), breadcrumb];

  return (
    <>
      <JsonLd data={schemas} />
      <Header />

      <section className="relative bg-brand-gradient text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,white,transparent_60%)]" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto px-4 py-16 md:py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Payment Methods</h1>
          <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            Bank transfer details for completing your package payment.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-10">
        <div className="bg-brand-50 border border-brand-200 rounded-xl p-5 text-ink-900">
          <strong>Please confirm your package selection with us before transferring.</strong>
          <p className="mt-2 text-sm text-ink-700">
            WhatsApp <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="text-brand-700 underline">+91-9910922899</a> or call to confirm your programme and amount. Once confirmed, you can use any of the methods below.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-ink-900 text-center mb-8">Bank account details</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <article className="bg-white border border-ink-900/10 rounded-2xl p-6">
            <div className="flex items-baseline gap-2">
              <h3 className="text-xl font-bold text-ink-900">HDFC Bank</h3>
              <span className="text-sm text-ink-500">— primary</span>
            </div>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex"><dt className="font-medium text-ink-700 w-32">Account Name</dt><dd className="text-ink-900">Go Moringa Nutri Diet &amp; Food Clinic</dd></div>
              <div className="flex"><dt className="font-medium text-ink-700 w-32">Account No.</dt><dd className="text-ink-900 font-mono">50200003984211</dd></div>
              <div className="flex"><dt className="font-medium text-ink-700 w-32">IFSC Code</dt><dd className="text-ink-900 font-mono">HDFC0000572</dd></div>
              <div className="flex"><dt className="font-medium text-ink-700 w-32">Branch</dt><dd className="text-ink-900">Sector 53, Gurgaon</dd></div>
            </dl>
          </article>

          <article className="bg-white border border-ink-900/10 rounded-2xl p-6">
            <div className="flex items-baseline gap-2">
              <h3 className="text-xl font-bold text-ink-900">ICICI Bank</h3>
              <span className="text-sm text-ink-500">— alternate</span>
            </div>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex"><dt className="font-medium text-ink-700 w-32">Account Name</dt><dd className="text-ink-900">Go Moringa Nutri Diet &amp; Food Clinic</dd></div>
              <div className="flex"><dt className="font-medium text-ink-700 w-32">Account No.</dt><dd className="text-ink-900 font-mono">244705500019</dd></div>
              <div className="flex"><dt className="font-medium text-ink-700 w-32">IFSC Code</dt><dd className="text-ink-900 font-mono">ICIC0002447</dd></div>
              <div className="flex"><dt className="font-medium text-ink-700 w-32">Branch</dt><dd className="text-ink-900">Malibu Towne, Sector 50, Gurgaon 122011</dd></div>
            </dl>
          </article>
        </div>

        <div className="mt-8 bg-cream-50 border border-ink-900/10 rounded-xl p-6">
          <h3 className="font-semibold text-ink-900">After making the payment</h3>
          <ol className="mt-3 space-y-2 text-sm text-ink-700 list-decimal pl-5">
            <li>Take a screenshot of the transaction confirmation</li>
            <li>Send it via WhatsApp to <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="text-brand-700 underline">{CONTACT.phone}</a></li>
            <li>We confirm receipt and schedule your initial consultation</li>
          </ol>
        </div>
      </section>

      <section className="bg-ink-900 text-white">
        <div className="max-w-4xl mx-auto px-4 py-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Questions about payment?</h2>
          <div className="mt-5 flex flex-wrap gap-3 justify-center">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="px-7 py-3 rounded-full bg-brand-500 hover:bg-brand-600 font-semibold transition">
              Chat on WhatsApp
            </a>
            <a href={`tel:${CONTACT.phoneTel}`} className="px-7 py-3 rounded-full bg-white text-ink-900 hover:bg-cream-100 font-semibold transition">
              Call {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
