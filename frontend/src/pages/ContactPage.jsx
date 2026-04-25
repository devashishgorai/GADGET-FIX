import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <main className="overflow-hidden">
      <section className="px-3 pb-[var(--space-section-md)] pt-[var(--space-page-top)] sm:px-4 md:px-6">

        <div className="apple-shell max-w-4xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
