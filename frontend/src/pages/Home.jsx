import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import { motion } from "framer-motion";
import useAdaptiveMotion from "../hooks/useAdaptiveMotion";
import { ArrowRight, BadgeCheck, Clock3, ShieldCheck, Smartphone, Laptop } from "lucide-react";
import { Link } from "react-router-dom";

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
      title: "Select Your Device",
      desc: "Choose mobile, laptop, tablet, or accessory to start a tailored estimate.",
      icon: <Smartphone size={20} />,
    },
    {
      title: "Describe the Problem",
      desc: "Share symptoms like screen damage, battery drain, heating, or power failure.",
      icon: <Laptop size={20} />,
    },
    {
      title: "Get Instant Quote",
      desc: "Receive next steps, expected timeline, and a transparent repair range.",
      icon: <ArrowRight size={20} />,
    },
  ];

  const trustPoints = [
    { icon: <ShieldCheck size={18} />, title: "Warranty Included", text: "Repairs backed by service warranty for peace of mind." },
    { icon: <BadgeCheck size={18} />, title: "Certified Technicians", text: "Experienced engineers handling precision-level diagnostics." },
    { icon: <Clock3 size={18} />, title: "Fast Turnaround", text: "Efficient service flow designed for busy professionals." },
  ];

  return (
    <main className="overflow-hidden">
      <HeroSection />

      <section className="px-4 pb-[var(--space-section-lg)] pt-[var(--space-section-md)] md:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="apple-shell"
        >
          <div className="mb-8 text-center">
            <h2 className="section-title">Get Your Repair Quote in Minutes</h2>
            <p className="section-subtitle mx-auto max-w-2xl">
              Move from issue identification to a bookable quote with clear pricing and turnaround guidance.
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
            <Link to="/contact">
              <button className="btn-primary gap-2" type="button">
                Get My Quote
                <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="px-4 pb-[var(--space-section-lg)] pt-0 md:px-6">
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
            <h2 className="section-title">Why High-Usage Users Trust Gadgetfix+</h2>
            <p className="section-subtitle mx-auto max-w-2xl">
              Every repair is logged, quality-checked, and backed by warranty-first support standards.
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
            <Link to="/contact">
              <button className="btn-primary gap-2" type="button">
                Book Priority Repair
                <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}