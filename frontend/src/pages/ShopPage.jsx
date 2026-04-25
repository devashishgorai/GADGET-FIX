
import Shop from "../components/Shop";
import { motion } from "framer-motion";
import useAdaptiveMotion from "../hooks/useAdaptiveMotion";
import { Link } from "react-router-dom";

export default function ShopPage() {
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
      <section className="px-3 pb-[var(--space-section-md)] pt-[var(--space-page-top)] sm:px-4 md:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="apple-shell"
        >
          <div className="mb-8 text-center">
            <h1 className="section-title">Accessories That Extend Device Life</h1>
            <p className="section-subtitle mx-auto max-w-2xl">
              Shop reliability-tested chargers, covers, and audio gear selected to improve everyday device performance.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[var(--apple-muted)]">Showing latest products</p>
            <select className="input w-full py-2 text-sm sm:w-auto sm:max-w-[220px]">
              <option>Sort by: Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </motion.div>
      </section>

      <section className="px-3 pb-[var(--space-section-lg)] pt-1 sm:px-4 md:px-6">
        <div className="apple-shell">
          <Shop />
        </div>
      </section>

      <section className="px-3 pb-[var(--space-section-lg)] sm:px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: simplifyMotion ? 0.2 : 0.38, ease: "easeOut" }}
          className="apple-shell apple-card px-5 py-10 sm:px-6 sm:py-12 md:px-10"
        >
          <div className="mb-8 text-center">
            <h2 className="section-title">Not Sure What Fits Your Device?</h2>
            <p className="section-subtitle mx-auto max-w-2xl">
              Get curated recommendations from our support team before you place your order.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <Link to="/contact">
              <button className="btn-primary gap-2" type="button">Get Expert Recommendations</button>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
