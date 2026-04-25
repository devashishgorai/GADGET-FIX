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
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: simplifyMotion ? 0.2 : 0.33, ease: "easeOut" }}
          className="mb-10 text-center"
        >
          <h1 className="section-title">Contact Us</h1>
          <p className="section-subtitle mx-auto max-w-2xl">
            We're here to help you with your repair needs. Reach out for support, questions, or to book a repair.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="apple-shell mb-14 grid gap-7 md:grid-cols-3"
        >
          <motion.div variants={staggerItem} className="apple-card p-8 text-center">
            <Mail className="mx-auto mb-3 text-[var(--apple-blue)]" size={28} />
            <h3 className="text-lg font-semibold">Email</h3>
            <p className="mt-2 text-[var(--apple-muted)]">support@gadgetfix.com</p>
          </motion.div>
          <motion.div variants={staggerItem} className="apple-card p-8 text-center">
            <Phone className="mx-auto mb-3 text-[var(--apple-blue)]" size={28} />
            <h3 className="text-lg font-semibold">Phone</h3>
            <p className="mt-2 text-[var(--apple-muted)]">+91 98765 43210</p>
          </motion.div>
          <motion.div variants={staggerItem} className="apple-card p-8 text-center">
            <MapPin className="mx-auto mb-3 text-[var(--apple-blue)]" size={28} />
            <h3 className="text-lg font-semibold">Location</h3>
            <p className="mt-2 text-[var(--apple-muted)]">Kolkata, India</p>
          </motion.div>
        </motion.div>

        <div className="apple-shell max-w-4xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}