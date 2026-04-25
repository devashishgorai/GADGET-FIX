import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import useAdaptiveMotion from "../hooks/useAdaptiveMotion";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  const { simplifyMotion } = useAdaptiveMotion();

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: simplifyMotion ? 0.03 : 0.08,
        delayChildren: simplifyMotion ? 0 : 0.03,
      },
    },
  };
  const staggerItem = {
    hidden: { opacity: 0, y: simplifyMotion ? 8 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: simplifyMotion ? 0.18 : 0.29, ease: "easeOut" },
    },
  };

  return (
    <main className="overflow-hidden">
      <section className="px-4 pb-[var(--space-section-md)] pt-[var(--space-page-top)] md:px-6">

        <div className="apple-shell max-w-4xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}