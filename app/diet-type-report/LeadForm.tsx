"use client";

/**
 * Lead-magnet form: collects body metrics + goal, runs the Diet Report engine
 * locally (lib/diet-report.ts), shows an inline editorial result, and captures
 * the lead via a WhatsApp deeplink pre-filled with the user's results.
 *
 * Uses React Hook Form for state + Zod for validation. No data leaves the
 * browser unless the user clicks "Send to clinic via WhatsApp" — which is an
 * explicit, consent-driven action (no silent data exfil).
 */

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { CONTACT } from "@/lib/site";
import {
  buildReport,
  GOAL_OPTIONS,
  type DietReport,
  type Goal,
  type Gender,
  type ReportInputs,
} from "@/lib/diet-report";
import { MoringaMark } from "@/app/components/MoringaMark";

const FormSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  phone: z
    .string()
    .min(8, "A valid phone number, please.")
    .regex(/^[+0-9\s()-]+$/, "Digits, +, spaces, hyphens only."),
  email: z.string().email("Looks off — check the email.").optional().or(z.literal("")),
  age: z.coerce.number().int().min(10, "Age between 10 and 100.").max(100, "Age between 10 and 100."),
  gender: z.enum(["female", "male", "other"]),
  heightCm: z.coerce.number().min(120, "Height in cm (120-220).").max(220, "Height in cm (120-220)."),
  weightKg: z.coerce.number().min(25, "Weight in kg (25-250).").max(250, "Weight in kg (25-250)."),
  goal: z.enum([
    "weight-loss",
    "weight-gain",
    "pcos",
    "diabetes",
    "thyroid",
    "pregnancy",
    "maintenance",
    "general-health",
  ]),
});

// Zod 4 `coerce.number()` types as `unknown → number`. RHF needs the input type
// (pre-coercion) for `register`/state, but the output type (post-coercion) for
// the validated submit payload. We split the two so types flow correctly.
type FormInput = z.input<typeof FormSchema>;
type FormValues = z.output<typeof FormSchema>;

type GtagFn = (...args: unknown[]) => void;
declare global {
  interface Window {
    gtag?: GtagFn;
  }
}

function trackLead(label: string) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "lead_magnet_submit", {
      event_category: "lead",
      event_label: label,
    });
  }
}

function whatsAppMessage(inputs: ReportInputs, report: DietReport) {
  const lines = [
    `Hi Dt. Priyatama, I completed the Diet Type Report on your site.`,
    ``,
    `Name: ${inputs.name}`,
    `Age: ${inputs.age} · ${inputs.gender}`,
    `Height: ${inputs.heightCm} cm · Weight: ${inputs.weightKg} kg`,
    `BMI: ${report.bmi} (${report.categoryLabel})`,
    `Goal: ${GOAL_OPTIONS.find((g) => g.value === inputs.goal)?.label ?? inputs.goal}`,
    `Recommended programme: ${report.recommendedProgramme.name}`,
    ``,
    `I'd like to begin a consultation. Please share next steps.`,
  ];
  return encodeURIComponent(lines.join("\n"));
}

export function LeadForm() {
  const [report, setReport] = useState<{ inputs: ReportInputs; result: DietReport } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormInput, unknown, FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: { gender: "female", goal: "weight-loss" },
  });

  function onSubmit(values: FormValues) {
    const inputs: ReportInputs = {
      name: values.name,
      phone: values.phone,
      email: values.email || undefined,
      age: values.age,
      gender: values.gender as Gender,
      heightCm: values.heightCm,
      weightKg: values.weightKg,
      goal: values.goal as Goal,
    };
    const result = buildReport(inputs);
    setReport({ inputs, result });
    trackLead(result.recommendedProgramme.name);
    if (typeof window !== "undefined") {
      // smooth-scroll to the report so it lands above the fold on submit
      requestAnimationFrame(() => {
        document.getElementById("diet-report-result")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }

  // ───────────────────────────────────────────────────── RESULT VIEW
  if (report) {
    const { inputs, result } = report;
    const waLink = `https://wa.me/${CONTACT.whatsapp}?text=${whatsAppMessage(inputs, result)}`;

    return (
      <section id="diet-report-result" className="bg-paper py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
            <span className="block h-px w-10 bg-clay" />
            Report · personalised
          </div>
          <h2
            className="font-display tracking-[-0.02em] font-medium text-ink leading-[0.98]"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
          >
            <span className="block">A starting-point read,</span>
            <em className="italic-clay">{inputs.name}</em>.
          </h2>

          {/* Stat band */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#d8c8a8]/80 border-y border-[#d8c8a8]/80">
            <Stat label="Your BMI" value={result.bmi.toFixed(1)} sub={result.categoryLabel} />
            <Stat label="Basal metabolic rate" value={`${result.bmr}`} sub="kcal/day at rest" />
            <Stat label="Height · Weight" value={`${inputs.heightCm} / ${inputs.weightKg}`} sub="cm · kg" />
            <Stat label="Goal" value={GOAL_OPTIONS.find((g) => g.value === inputs.goal)?.label ?? inputs.goal} sub={`Age ${inputs.age}`} />
          </div>

          {/* Category description */}
          <div className="mt-10 border-l-2 border-clay pl-6 py-2">
            <div className="text-eyebrow text-clay mb-1">What this means</div>
            <p className="font-display italic text-2xl text-ink leading-snug">{result.categoryLabel}</p>
            <p className="mt-3 text-base text-warm-700 leading-[1.7]">{result.categoryDescription}</p>
          </div>

          {/* Recommended programme */}
          <div className="mt-12">
            <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
              <span className="block h-px w-10 bg-clay" />
              Recommended starting point
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-medium text-ink leading-tight">
              {result.recommendedProgramme.name}
            </h3>
            <p className="mt-4 text-base text-warm-700 leading-[1.7] max-w-2xl">
              {result.recommendedProgramme.description}
            </p>
            <Link
              href={result.recommendedProgramme.href}
              className="mt-5 inline-flex items-center gap-3 text-base font-medium text-ink group"
            >
              <span className="relative pb-1 border-b-2 border-clay group-hover:border-b-[3px] transition-all">
                Read the {result.recommendedProgramme.name.toLowerCase()} programme
              </span>
              <span className="text-clay" aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Tips */}
          <div className="mt-14">
            <div className="text-eyebrow text-clay mb-3 flex items-center gap-3">
              <span className="block h-px w-10 bg-clay" />
              Three things you can start today
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-medium text-ink leading-tight mb-6">
              For your context, <em className="italic-clay">specifically</em>.
            </h3>
            <ol className="space-y-6 border-t border-[#d8c8a8]/60">
              {result.tips.map((tip, i) => (
                <li key={i} className="grid grid-cols-12 gap-x-5 py-4 border-b border-[#d8c8a8]/40">
                  <span
                    className="col-span-2 md:col-span-1 font-display text-clay leading-none"
                    style={{ fontSize: "2.25rem", fontWeight: 500 }}
                  >
                    {i + 1}
                  </span>
                  <p className="col-span-10 md:col-span-11 text-base text-warm-700 leading-[1.7] pt-1">
                    {tip}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Caveat */}
          <aside className="mt-10 border-t border-clay/40 pt-5">
            <div className="text-eyebrow text-clay mb-2">Honest note</div>
            <p className="text-sm text-warm-500 italic font-display leading-[1.7] max-w-3xl">
              {result.caveat}
            </p>
          </aside>

          {/* CTA + reset */}
          <div className="mt-14 bg-ink text-paper p-8 md:p-10">
            <div className="text-eyebrow text-clay mb-4">Send to clinic</div>
            <p className="font-display text-2xl md:text-3xl font-medium leading-tight">
              Share these results with <em className="italic" style={{ color: "#C9A961" }}>Dt. Priyatama</em> directly.
            </p>
            <p className="mt-3 text-sm text-paper/80 leading-relaxed max-w-2xl">
              The button below opens WhatsApp with your report pre-filled. Nothing is sent until you press &ldquo;send&rdquo; in WhatsApp itself.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-base font-medium text-paper"
              >
                <span className="relative pb-1 border-b-2 border-clay group-hover:border-b-[3px] transition-all">
                  Send report on WhatsApp
                </span>
                <span className="text-clay" aria-hidden="true">→</span>
              </a>
              <a href={`tel:${CONTACT.phoneTel}`} className="text-base font-medium text-paper/75 hover:text-paper transition">
                or call {CONTACT.phone}
              </a>
            </div>
            <div className="mt-6 pt-5 border-t border-paper/15">
              <button
                onClick={() => {
                  setReport(null);
                  reset();
                  requestAnimationFrame(() => {
                    document.getElementById("diet-report-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
                  });
                }}
                className="text-eyebrow text-clay hover:text-paper transition"
              >
                ← Run the report again
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ───────────────────────────────────────────────────── FORM VIEW
  return (
    <section id="diet-report-form" className="bg-paper py-14 md:py-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-10">
          {/* Group 1 — personal */}
          <fieldset className="space-y-5">
            <legend className="text-eyebrow text-clay mb-3 flex items-center gap-3">
              <span className="block h-px w-10 bg-clay" />
              Step 1 · Who is this for
            </legend>
            <Field label="Your name" error={errors.name?.message}>
              <input
                {...register("name")}
                placeholder="e.g. Anjali Sharma"
                className="form-input"
                autoComplete="name"
              />
            </Field>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Phone (WhatsApp preferred)" error={errors.phone?.message}>
                <input
                  {...register("phone")}
                  placeholder="e.g. +91 98xxx xxxxx"
                  className="form-input"
                  autoComplete="tel"
                  inputMode="tel"
                />
              </Field>
              <Field label="Email (optional)" error={errors.email?.message}>
                <input
                  {...register("email")}
                  placeholder="for the written report"
                  className="form-input"
                  autoComplete="email"
                  type="email"
                />
              </Field>
            </div>
          </fieldset>

          {/* Group 2 — body */}
          <fieldset className="space-y-5">
            <legend className="text-eyebrow text-clay mb-3 flex items-center gap-3">
              <span className="block h-px w-10 bg-clay" />
              Step 2 · Body metrics
            </legend>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Age (years)" error={errors.age?.message}>
                <input
                  {...register("age")}
                  type="number"
                  inputMode="numeric"
                  placeholder="e.g. 34"
                  className="form-input"
                  min={10}
                  max={100}
                />
              </Field>
              <Field label="Gender" error={errors.gender?.message}>
                <select {...register("gender")} className="form-input">
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Prefer not to say</option>
                </select>
              </Field>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Height (cm)" error={errors.heightCm?.message}>
                <input
                  {...register("heightCm")}
                  type="number"
                  inputMode="numeric"
                  placeholder="e.g. 165"
                  className="form-input"
                  step="0.1"
                />
              </Field>
              <Field label="Weight (kg)" error={errors.weightKg?.message}>
                <input
                  {...register("weightKg")}
                  type="number"
                  inputMode="decimal"
                  placeholder="e.g. 72"
                  className="form-input"
                  step="0.1"
                />
              </Field>
            </div>
          </fieldset>

          {/* Group 3 — goal */}
          <fieldset className="space-y-5">
            <legend className="text-eyebrow text-clay mb-3 flex items-center gap-3">
              <span className="block h-px w-10 bg-clay" />
              Step 3 · What you&rsquo;re working on
            </legend>
            <Field label="Primary goal" error={errors.goal?.message}>
              <select {...register("goal")} className="form-input">
                {GOAL_OPTIONS.map((g) => (
                  <option key={g.value} value={g.value}>{g.label}</option>
                ))}
              </select>
            </Field>
          </fieldset>

          {/* Submit */}
          <div className="pt-6 border-t border-[#d8c8a8]/60 flex flex-wrap items-center justify-between gap-4">
            <p className="text-eyebrow text-warm-500 max-w-md">
              Your details stay in this browser until you choose to send them via WhatsApp.
            </p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex items-center gap-3 px-6 py-3 bg-ink text-paper hover:bg-ink-deep transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <MoringaMark className="size-4 text-clay" />
              <span className="font-display font-medium">{isSubmitting ? "Calculating…" : "See my report"}</span>
              <span className="text-clay" aria-hidden="true">→</span>
            </button>
          </div>
        </form>

        <style>{`
          .form-input {
            width: 100%;
            padding: 0.75rem 0.875rem;
            background: var(--color-paper);
            border: 1px solid rgba(216, 200, 168, 0.7);
            color: var(--color-ink);
            font-family: var(--font-display);
            font-size: 1rem;
            transition: border-color 0.15s ease;
          }
          .form-input:focus {
            outline: none;
            border-color: var(--color-clay);
          }
          .form-input::placeholder {
            color: rgba(107, 91, 78, 0.55);
            font-style: italic;
          }
        `}</style>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-eyebrow text-warm-700 mb-1.5">{label}</span>
      {children}
      {error && (
        <span className="block mt-1.5 text-[12px] text-clay font-display italic">{error}</span>
      )}
    </label>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="py-6 sm:py-7 sm:px-6 first:sm:pl-0 last:sm:pr-0">
      <div className="text-eyebrow text-warm-500 mb-2 font-mono">{label}</div>
      <div
        className="font-display font-medium text-ink leading-[0.95]"
        style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
      >
        {value}
      </div>
      {sub && <div className="mt-2 text-sm text-warm-700">{sub}</div>}
    </div>
  );
}
