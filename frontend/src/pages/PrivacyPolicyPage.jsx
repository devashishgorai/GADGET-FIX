export default function PrivacyPolicyPage() {
  return (
    <main className="overflow-hidden">
      <section className="px-4 pb-[var(--space-section-lg)] pt-[var(--space-page-top)] md:px-6">
        <article className="apple-shell apple-card max-w-4xl px-6 py-8 md:px-10 md:py-10">
          <h1 className="section-title">Privacy Policy</h1>
          <p className="section-subtitle max-w-3xl">
            Gadgetfix+ collects only the information required to diagnose issues, manage orders, and provide support.
          </p>

          <div className="mt-8 space-y-6 text-sm leading-7 text-[var(--apple-text)] md:text-base">
            <section>
              <h2 className="text-xl font-semibold tracking-tight">Information We Collect</h2>
              <p className="mt-2 text-[var(--apple-muted)]">
                We may collect your name, contact details, device details, service history, and payment-related metadata.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-tight">How We Use Your Data</h2>
              <p className="mt-2 text-[var(--apple-muted)]">
                Your data is used for diagnostics, order updates, billing, customer support, and service improvements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-tight">Data Sharing</h2>
              <p className="mt-2 text-[var(--apple-muted)]">
                We do not sell personal data. Data is shared only with authorized service and logistics partners when needed.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-tight">Contact</h2>
              <p className="mt-2 text-[var(--apple-muted)]">
                For privacy requests, contact us at support@gadgetfix.com.
              </p>
            </section>
          </div>
        </article>
      </section>
    </main>
  );
}
