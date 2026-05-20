/**
 * Editorial medical disclaimer — required on every YMYL health page.
 * Restrained design: thin clay rule, mono eyebrow, body in warm grey italic.
 */

export function MedicalDisclaimer() {
  return (
    <aside
      className="my-10 border-t border-clay/40 pt-6"
      role="note"
      aria-label="Medical disclaimer"
    >
      <div className="text-eyebrow text-clay mb-3">
        Important · medical disclaimer
      </div>
      <p className="text-sm text-warm-500 leading-[1.7] italic max-w-3xl font-display">
        This content is educational. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions regarding a medical condition. Diet plans are individualised after clinical assessment; the general guidance shown here may not be appropriate for every individual.
      </p>
    </aside>
  );
}
