import { motion } from "framer-motion";
import { Smartphone, Laptop, Headphones } from "lucide-react";
import useAdaptiveMotion from "../hooks/useAdaptiveMotion";

export default function Services({ showHeader = true }) {
  const { simplifyMotion } = useAdaptiveMotion();

  const staggerContainer = {
    hidden: { opacity: 0, y: simplifyMotion ? 10 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: simplifyMotion ? 0.03 : 0.08,
        delayChildren: simplifyMotion ? 0 : 0.03,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: simplifyMotion ? 10 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: simplifyMotion ? 0.2 : 0.31, ease: "easeOut" },
    },
  };

  const services = [
    {
      name: "Mobile Repair",
      desc: "Screen replacement, battery fixes, and software recovery with clear turnaround targets.",
      icon: <Smartphone size={32} />,
      color: "from-sky-400 to-blue-600",
      span: "md:col-span-1",
    },
    {
      name: "Laptop Repair",
      desc: "Hardware diagnostics, upgrades, and thermal optimization for productivity-heavy use.",
      icon: <Laptop size={32} />,
      color: "from-[#0b3a78] to-[#165dca]",
      span: "md:col-span-2",
    },
    {
      name: "Accessories",
      desc: "Performance-focused chargers, protection gear, and compatible parts for long device life.",
      icon: <Headphones size={32} />,
      color: "from-[#5ba7ff] to-[#7f8cff]",
      span: "md:col-span-1",
    },
  ];

  return (
    <div>
      {showHeader && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: simplifyMotion ? 0.2 : 0.34 }}
          className="mb-10 text-center md:mb-12"
        >
          <h2 className="section-title">Service Modules Built for Reliability</h2>
          <p className="section-subtitle">
            Pick the workflow that fits your device issue, urgency, and support expectations.
          </p>
        </motion.div>
      )}

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-5 md:grid-cols-3 md:gap-6"
      >
        {services.map((s, i) => (
          <motion.div
            key={i}
            variants={staggerItem}
            whileHover={simplifyMotion ? undefined : { y: -8 }}
            className={`apple-card group relative overflow-hidden p-6 md:p-8 ${s.span}`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 transition group-hover:opacity-10`}
            />

            <div
              className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r text-white ${s.color}`}
            >
              {s.icon}
            </div>

            <h3 className="mb-2 text-xl font-semibold tracking-tight">{s.name}</h3>
            <p className="mb-4 max-w-md text-[var(--apple-muted)]">{s.desc}</p>

            <button
              type="button"
              className="text-sm font-medium text-[var(--apple-blue)] hover:text-[var(--apple-blue-hover)]"
              aria-label={`View details for ${s.name}`}
            >
              View Repair Details
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}