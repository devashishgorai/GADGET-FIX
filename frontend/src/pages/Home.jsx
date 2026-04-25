import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import { motion } from "framer-motion";
import useAdaptiveMotion from "../hooks/useAdaptiveMotion";
import { ArrowRight, BadgeCheck, Clock3, ShieldCheck, Smartphone, Laptop } from "lucide-react";

export default function Home() {
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

  const diagnosisSteps = [
    {
      title: "Choose Device",
      desc: "Tell us if it’s a mobile, laptop, tablet, or accessory.",
      icon: <Smartphone size={20} />,
    },
    {
      title: "Describe the Issue",
      desc: "Select common symptoms like screen damage, battery drain, or no power.",
      icon: <Laptop size={20} />,
    },
    {
      title: "Start Diagnosis",
      desc: "Get a guided estimate path with clear next steps and support.",
      icon: <ArrowRight size={20} />,
    },
  ];

  const proofStats = [
    { value: "10,000+", label: "Repairs completed" },
    { value: "4.8/5", label: "Average rating" },
    { value: "24/7", label: "Support availability" },
  ];

  const trustPoints = [
    { icon: <ShieldCheck size={18} />, title: "Warranty Included", text: "Repairs backed by service warranty for peace of mind." },
    { icon: <BadgeCheck size={18} />, title: "Certified Technicians", text: "Experienced engineers handling precision-level diagnostics." },
    { icon: <Clock3 size={18} />, title: "Fast Turnaround", text: "Efficient service flow designed for busy professionals." },
  ];

  return (
    <main className="overflow-hidden">
      <HeroSection />

      <section className="px-4 pb-[var(--space-section-md)] pt-[var(--space-section-sm)] md:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="apple-shell grid gap-6 md:grid-cols-3"
        >
          {proofStats.map((item, index) => (
            <motion.div
              key={item.label}
              variants={staggerItem}
              className="apple-card px-6 py-7 text-center"
            >
              <p className="text-3xl font-semibold tracking-tight text-[var(--apple-text)]">{item.value}</p>
              <p className="mt-2 text-sm text-[var(--apple-muted)]">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="px-4 py-[var(--space-section-lg)] md:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="apple-shell"
        >
          <div className="mb-8 text-center">
            <h2 className="section-title">Interactive Diagnosis</h2>
            <p className="section-subtitle mx-auto max-w-2xl">
              Start with a simple guided flow and move from issue identification to a clear repair estimate.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {diagnosisSteps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={staggerItem}
                whileHover={simplifyMotion ? undefined : { y: -6 }}
                className="apple-card p-7"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(11,58,120,0.08)] text-[var(--apple-blue)]">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-2 text-[var(--apple-muted)]">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="btn-primary gap-2">
              Start Diagnosis
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </section>

      <section className="px-4 pb-[var(--space-section-lg)] pt-2 md:px-6">
        <div className="apple-shell">
          <Services />
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
            <h2 className="section-title">Warranty and Trust</h2>
            <p className="section-subtitle mx-auto max-w-2xl">
              Precision repair backed by clear communication, genuine-quality parts, and service warranty.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {trustPoints.map((item) => (
              <div key={item.title} className="rounded-3xl border border-black/8 bg-white/75 p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[rgba(11,58,120,0.08)] text-[var(--apple-blue)]">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-[var(--apple-muted)]">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button className="btn-primary gap-2">
              Start Diagnosis
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}