
import Services from "../components/Services";
import { motion } from "framer-motion";
import useAdaptiveMotion from "../hooks/useAdaptiveMotion";
import { Link } from "react-router-dom";

export default function ServicesPage() {
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
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="apple-shell"
        >
          <div className="mb-8 text-center">
            <h1 className="section-title">Repair Services Built for Device Uptime</h1>
            <p className="section-subtitle mx-auto max-w-2xl">
              Compare our most-requested repair workflows and book the one that fits your urgency, budget, and device type.
            </p>
            <Link to="/contact">
              <button className="btn-primary mt-7" type="button">Get Priority Booking</button>
            </Link>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-6 lg:grid-cols-3"
          >
            <motion.div variants={staggerItem} className="apple-card px-6 py-7 text-center">
              <p className="text-3xl font-semibold tracking-tight text-[var(--apple-text)]">10,000+</p>
              <p className="mt-2 text-sm text-[var(--apple-muted)]">Repairs completed</p>
            </motion.div>
            <motion.div variants={staggerItem} className="apple-card px-6 py-7 text-center">
              <p className="text-3xl font-semibold tracking-tight text-[var(--apple-text)]">4.8/5</p>
              <p className="mt-2 text-sm text-[var(--apple-muted)]">Average rating</p>
            </motion.div>
            <motion.div variants={staggerItem} className="apple-card px-6 py-7 text-center">
              <p className="text-3xl font-semibold tracking-tight text-[var(--apple-text)]">24/7</p>
              <p className="mt-2 text-sm text-[var(--apple-muted)]">Support availability</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section className="px-4 pb-[var(--space-section-lg)] pt-1 md:px-6">
        <div className="apple-shell">
          <Services showHeader={false} />
        </div>
      </section>

      <section className="px-4 pb-[var(--space-section-lg)] md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: simplifyMotion ? 0.2 : 0.38, ease: "easeOut" }}
          className="apple-shell apple-card px-6 py-12 md:px-10"
        >
          <div className="mb-8 text-center">
            <h2 className="section-title">Service Confidence Included</h2>
            <p className="section-subtitle mx-auto max-w-2xl">
              Clear approvals, verified components, and warranty coverage at every stage of the repair journey.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            <div className="rounded-3xl border border-black/8 bg-white/75 p-6">
              <p className="text-lg font-semibold tracking-tight">Warranty Included</p>
              <p className="mt-2 text-[var(--apple-muted)]">Repairs backed by service warranty for peace of mind.</p>
            </div>
            <div className="rounded-3xl border border-black/8 bg-white/75 p-6">
              <p className="text-lg font-semibold tracking-tight">Certified Technicians</p>
              <p className="mt-2 text-[var(--apple-muted)]">Experienced engineers handling precision-level diagnostics.</p>
            </div>
            <div className="rounded-3xl border border-black/8 bg-white/75 p-6">
              <p className="text-lg font-semibold tracking-tight">Fast Turnaround</p>
              <p className="mt-2 text-[var(--apple-muted)]">Efficient service flow designed for busy professionals.</p>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <Link to="/contact">
              <button className="btn-primary gap-2" type="button">Talk to a Repair Specialist</button>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}