export default function WarrantyTermsPage() {
  return (
    <main className="overflow-hidden">
      <section className="px-4 pb-[var(--space-section-lg)] pt-[var(--space-page-top)] md:px-6">
        <article className="apple-shell apple-card max-w-4xl px-6 py-8 md:px-10 md:py-10">
          <h1 className="section-title">Warranty Terms</h1>
          <p className="section-subtitle max-w-3xl">
            Gadgetfix+ warranty covers eligible workmanship and selected replacement parts for specified durations.
          </p>

          <div className="mt-8 space-y-6 text-sm leading-7 text-[var(--apple-text)] md:text-base">
            <section>
              <h2 className="text-xl font-semibold tracking-tight">Coverage</h2>
              <p className="mt-2 text-[var(--apple-muted)]">
                Warranty applies to listed components and labor included in your invoice and service confirmation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-tight">Exclusions</h2>
              <p className="mt-2 text-[var(--apple-muted)]">
                Physical damage after delivery, liquid ingress, unauthorized modifications, and accidental misuse are excluded.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-tight">Claims Process</h2>
              <p className="mt-2 text-[var(--apple-muted)]">
                Share order ID, issue details, and device condition photos to initiate a warranty review.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-tight">Support</h2>
              <p className="mt-2 text-[var(--apple-muted)]">
                For warranty assistance, contact support@gadgetfix.com or call +91 98765 43210.
              </p>
            </section>
          </div>
        </article>
      </section>
    </main>
  );
}
