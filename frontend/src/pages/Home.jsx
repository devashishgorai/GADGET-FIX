import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
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

  const plans = [
    {
      name: "Starter",
      price: "₹499",
      detail: "Per issue diagnosis",
      points: ["Guided issue check", "Repair estimate", "Support follow-up"],
      cta: "Start Starter Plan",
    },
    {
      name: "Pro Care",
      price: "₹1,499",
      detail: "Per priority ticket",
      points: ["Priority queue", "Fast-track repair slot", "Dedicated advisor"],
      cta: "Choose Pro Care",
      featured: true,
    },
    {
      name: "Business",
      price: "Custom",
      detail: "For teams and offices",
      points: ["Bulk device support", "SLA-ready workflows", "Consolidated billing"],
      cta: "Book Business Demo",
    },
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
        <div className="apple-shell">
          <div className="mb-8 text-center">
            <h2 className="section-title">Simple Plans for Every Support Need</h2>
            <p className="section-subtitle mx-auto max-w-2xl">
              Start small, upgrade when needed, and scale to business-grade repair operations.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 md:gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`apple-card flex h-full flex-col p-5 md:p-6 ${plan.featured ? "border-[rgba(13,63,134,0.35)] shadow-[0_24px_54px_rgba(13,63,134,0.2)]" : ""}`}
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--apple-blue)]">{plan.name}</p>
                <p className="mt-2 text-3xl font-semibold tracking-tight">{plan.price}</p>
                <p className="mt-1 text-sm text-[var(--apple-muted)]">{plan.detail}</p>

                <ul className="mt-4 space-y-2 text-sm text-[var(--apple-text)]">
                  {plan.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[var(--apple-blue)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Link to="/contact">
                    <button type="button" className={`w-full ${plan.featured ? "btn-primary" : "btn-secondary"}`}>
                      {plan.cta}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
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

      <section className="px-4 pb-[var(--space-section-lg)] md:px-6">
        <div className="apple-shell">
          <div className="mb-8 text-center">
            <h2 className="section-title">Trusted by Professionals and Teams</h2>
            <p className="section-subtitle mx-auto max-w-2xl">
              Real customers choose Gadgetfix+ for transparent diagnostics, premium support, and predictable turnaround.
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

      <section className="px-4 pb-[var(--space-section-lg)] md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: simplifyMotion ? 0.2 : 0.35, ease: "easeOut" }}
          className="apple-shell overflow-hidden rounded-[2rem] border border-white/75 bg-[linear-gradient(125deg,#0d3f86_0%,#1d5fc4_56%,#5ea8ff_100%)] px-6 py-10 text-white shadow-[0_26px_52px_rgba(11,58,120,0.28)] md:px-10 md:py-12"
        >
          <div className="grid gap-8 md:grid-cols-[1.35fr_1fr] md:items-end">
            <div>
              <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white/95">
                Ready-to-Scale Device Support
              </span>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Launch a reliable repair workflow for your devices today.
              </h2>
              <p className="mt-3 max-w-xl text-sm text-white/90 md:text-base">
                Get onboarding guidance, priority diagnostics, and dependable turnaround with one partner.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link to="/contact">
                <button type="button" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--apple-blue)] transition hover:bg-[#f2f7ff]">
                  Book a Product Demo
                </button>
              </Link>
              <Link to="/services">
                <button type="button" className="rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                  View Service Modules
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}