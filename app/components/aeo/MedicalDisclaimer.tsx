/**
 * Medical disclaimer — required on every YMYL health content page.
 * See plan Rule 5 + Iron Rule 5 — YMYL = Your Money Your Life.
 */

export function MedicalDisclaimer() {
  return (
    <aside
      className="my-10 bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-ink-700 leading-relaxed"
      role="note"
      aria-label="Medical disclaimer"
    >
      <div className="font-semibold text-ink-900 mb-2 flex items-center gap-2">
        <span aria-hidden="true">⚕️</span>
        Important medical disclaimer
      </div>
      <p>
        This content is for educational and informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay seeking it because of something you have read on this website. Diet plans are individualised after clinical assessment; the general guidance shown here may not be appropriate for every individual.
      </p>
    </aside>
  );
}
