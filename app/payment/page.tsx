import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { JsonLd } from "@/app/components/JsonLd";
import { CONTACT, SITE, whatsappUrl } from "@/lib/site";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Payment Methods | Go Moringa Diet Clinic",
  description: "Payment options for Go Moringa diet packages — bank transfer (HDFC, ICICI). Confirm package selection first.",
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

      <section className="bg-paper-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
          <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-[#d8c8a8]/80 text-eyebrow text-warm-500">
            <nav aria-label="Breadcrumb">
              <Link href="/" className="hover:text-clay transition">Home</Link>
              <span className="mx-3 opacity-50">/</span>
              <span className="text-clay">Payment</span>
            </nav>
            <span className="hidden md:inline">Account details · HDFC · ICICI</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-14 md:pt-20 pb-10 text-center">
          <div className="text-eyebrow text-clay mb-5 flex items-center justify-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            Payment
            <span className="block h-px w-10 bg-clay" />
          </div>
          <h1 className="font-display tracking-[-0.02em] font-medium text-ink leading-[0.98]" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
            Account <em className="italic-clay">details</em>.
          </h1>
          <p className="mt-6 text-lg text-warm-700 max-w-2xl mx-auto leading-relaxed">
            Confirm your package on WhatsApp first. Then transfer to either account below — both are active.
          </p>
        </div>
      </section>

      <section className="bg-paper py-12">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <aside className="border-l-2 border-clay pl-6 py-2">
            <div className="text-eyebrow text-clay mb-2">Please note</div>
            <p className="text-base text-warm-700 leading-relaxed">
              Confirm your package selection with us before transferring. WhatsApp <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="text-clay border-b border-clay/40 hover:border-clay">{CONTACT.phone}</a> or call to confirm your programme and amount.
            </p>
          </aside>
        </div>
      </section>

      <section className="bg-paper-dark py-14 md:py-16 border-y border-[#d8c8a8]/60">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            Bank accounts
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-ink leading-tight mb-10">
            Two <em className="italic-clay">active</em> accounts.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <article className="p-7 border border-[#d8c8a8]/70 bg-paper">
              <div className="text-eyebrow text-clay mb-2">No. 01 · Primary</div>
              <h3 className="font-display text-2xl font-medium text-ink leading-tight">HDFC Bank</h3>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="grid grid-cols-12 gap-x-3 border-b border-[#d8c8a8]/40 pb-2">
                  <dt className="col-span-5 text-eyebrow text-warm-500 font-mono pt-1">Account Name</dt>
                  <dd className="col-span-7 text-ink font-display">Go Moringa Nutri Diet &amp; Food Clinic</dd>
                </div>
                <div className="grid grid-cols-12 gap-x-3 border-b border-[#d8c8a8]/40 pb-2">
                  <dt className="col-span-5 text-eyebrow text-warm-500 font-mono pt-1">Account No.</dt>
                  <dd className="col-span-7 text-ink font-mono">50200003984211</dd>
                </div>
                <div className="grid grid-cols-12 gap-x-3 border-b border-[#d8c8a8]/40 pb-2">
                  <dt className="col-span-5 text-eyebrow text-warm-500 font-mono pt-1">IFSC</dt>
                  <dd className="col-span-7 text-ink font-mono">HDFC0000572</dd>
                </div>
                <div className="grid grid-cols-12 gap-x-3 pb-2">
                  <dt className="col-span-5 text-eyebrow text-warm-500 font-mono pt-1">Branch</dt>
                  <dd className="col-span-7 text-ink font-display">Sector 53, Gurgaon</dd>
                </div>
              </dl>
            </article>

            <article className="p-7 border border-[#d8c8a8]/70 bg-paper">
              <div className="text-eyebrow text-clay mb-2">No. 02 · Alternate</div>
              <h3 className="font-display text-2xl font-medium text-ink leading-tight">ICICI Bank</h3>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="grid grid-cols-12 gap-x-3 border-b border-[#d8c8a8]/40 pb-2">
                  <dt className="col-span-5 text-eyebrow text-warm-500 font-mono pt-1">Account Name</dt>
                  <dd className="col-span-7 text-ink font-display">Go Moringa Nutri Diet &amp; Food Clinic</dd>
                </div>
                <div className="grid grid-cols-12 gap-x-3 border-b border-[#d8c8a8]/40 pb-2">
                  <dt className="col-span-5 text-eyebrow text-warm-500 font-mono pt-1">Account No.</dt>
                  <dd className="col-span-7 text-ink font-mono">244705500019</dd>
                </div>
                <div className="grid grid-cols-12 gap-x-3 border-b border-[#d8c8a8]/40 pb-2">
                  <dt className="col-span-5 text-eyebrow text-warm-500 font-mono pt-1">IFSC</dt>
                  <dd className="col-span-7 text-ink font-mono">ICIC0002447</dd>
                </div>
                <div className="grid grid-cols-12 gap-x-3 pb-2">
                  <dt className="col-span-5 text-eyebrow text-warm-500 font-mono pt-1">Branch</dt>
                  <dd className="col-span-7 text-ink font-display">Malibu Towne, Sec 50, Gurgaon</dd>
                </div>
              </dl>
            </article>
          </div>

          <aside className="mt-10 p-6 border border-[#d8c8a8]/70 bg-paper">
            <div className="text-eyebrow text-clay mb-2">After making the payment</div>
            <ol className="space-y-2 text-base text-warm-700">
              <li className="flex gap-3"><span className="text-clay font-mono">01</span> Take a screenshot of the transaction confirmation</li>
              <li className="flex gap-3"><span className="text-clay font-mono">02</span> Send it via WhatsApp to <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="text-clay border-b border-clay/40 hover:border-clay ml-1">{CONTACT.phone}</a></li>
              <li className="flex gap-3"><span className="text-clay font-mono">03</span> We confirm receipt and schedule your initial consultation</li>
            </ol>
          </aside>
        </div>
      </section>

      <Footer />
    </>
  );
}
