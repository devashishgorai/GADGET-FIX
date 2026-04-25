export default function TermsOfServicePage() {
  return (
    <main className="overflow-hidden">
      <section className="px-4 pb-[var(--space-section-lg)] pt-[var(--space-page-top)] md:px-6">
        <article className="apple-shell apple-card max-w-4xl px-6 py-8 md:px-10 md:py-10">
          <h1 className="section-title">Terms of Service</h1>
          <p className="section-subtitle max-w-3xl">
            These terms govern use of Gadgetfix+ services including diagnostics, repairs, accessories, and support workflows.
          </p>

          <div className="mt-8 space-y-6 text-sm leading-7 text-[var(--apple-text)] md:text-base">
            <section>
              <h2 className="text-xl font-semibold tracking-tight">Service Scope</h2>
              <p className="mt-2 text-[var(--apple-muted)]">
                Final service timelines depend on parts availability, diagnosis complexity, and customer approvals.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-tight">Payments</h2>
              <p className="mt-2 text-[var(--apple-muted)]">
                Quotes are shared prior to execution. Work begins only after quote approval and applicable advance payment.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-tight">Liability</h2>
              <p className="mt-2 text-[var(--apple-muted)]">
                We follow best-practice processes. Liability is limited to the value of the service order where legally applicable.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-tight">Policy Updates</h2>
              <p className="mt-2 text-[var(--apple-muted)]">
                Terms may be updated periodically to reflect legal, operational, and product changes.
              </p>
            </section>
          </div>
        </article>
      </section>
    </main>
  );
}
