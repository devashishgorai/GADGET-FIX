import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useAdaptiveMotion from "../hooks/useAdaptiveMotion";
import { Link } from "react-router-dom";

function AnimatedMetric({ end, duration, decimals = 0, suffix = "", shouldAnimate = true }) {
  const metricRef = useRef(null);
  const isInView = useInView(metricRef, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    if (!shouldAnimate) {
      setValue(end);
      return;
    }

    let frameId;
    let startTime;

    const tick = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setValue(end * easedProgress);

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [isInView, end, duration, shouldAnimate]);

  const formatted = value.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={metricRef}>
      {formatted}
      {suffix}
    </span>
  );
}

export default function HeroSection() {
  const slides = [
    {
      title: "Reduce Device Downtime Without Repair Guesswork.",
      subtitle:
        "Get a clear diagnosis, transparent estimate, and priority booking in one guided flow.",
      image: "/hero/remobile.jpg",
      cta: "Get My Repair Quote",
      secondary: "Explore Service Plans",
      ctaPath: "/contact",
      secondaryPath: "/services",
    },
    {
      title: "Repair Coverage Built for Teams and Power Users.",
      subtitle:
        "From board-level diagnostics to same-day parts replacement, every step is tracked and communicated.",
      image: "/hero/remobile1.jpg",
      cta: "Book Priority Support",
      secondary: "Talk to a Specialist",
      ctaPath: "/contact",
      secondaryPath: "/contact",
    },
    {
      title: "Performance Restored with Premium-Grade Components.",
      subtitle:
        "Choose reliable accessories and repair parts designed for long-term device health.",
      image: "/hero/relaptop.png",
      cta: "Start My Diagnostic",
      secondary: "Browse Shop",
      ctaPath: "/contact",
      secondaryPath: "/shop",
    },
  ];

  const [index, setIndex] = useState(0);
  const heroRef = useRef(null);
  const { reduceMotion, isMobile, simplifyMotion } = useAdaptiveMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const mediaY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : isMobile ? 8 : 52]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 1 : isMobile ? 1.006 : 1.05]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : isMobile ? -4 : -20]);
  const copyOpacity = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 1 : isMobile ? 0.98 : 0.85]);

  const heroImageTransition = reduceMotion
    ? { duration: 0.2, ease: "linear" }
    : { duration: 1.28, ease: [0.22, 1, 0.36, 1] };

  const heroCopyTransition = reduceMotion
    ? { duration: 0.18, ease: "linear" }
    : { duration: 0.62, ease: [0.22, 1, 0.36, 1] };

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6800);

    return () => clearInterval(timer);
  }, [slides.length, reduceMotion]);

  const goNext = () => setIndex((prev) => (prev + 1) % slides.length);
  const goPrev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const activeSlide = slides[index];

  return (
    <section ref={heroRef} className="hero-gradient relative overflow-hidden px-4 pb-20 pt-[var(--space-page-top)] md:px-8">
      <div className="apple-shell relative">
        <div className="hero-stage relative overflow-hidden rounded-[42px] border border-black/10 bg-black shadow-[0_36px_90px_rgba(0,0,0,0.28)]">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeSlide.image}
              src={activeSlide.image}
              alt="Gadget repair showcase"
              className="hero-image h-[460px] w-full object-cover object-center md:h-[620px]"
              initial={reduceMotion ? false : { opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.02 }}
              transition={heroImageTransition}
              style={{ y: mediaY, scale: mediaScale }}
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/35 to-black/15" />

          <div className="absolute left-6 top-8 z-10 md:left-12 md:top-12">
            <span className="glass inline-flex rounded-full px-4 py-1 text-xs font-semibold tracking-wide text-white md:text-sm">
              SaaS-Grade Repair Ops
            </span>
          </div>

          <motion.div
            style={{ y: copyY, opacity: copyOpacity }}
            className="absolute bottom-8 left-6 z-10 max-w-xl text-white md:bottom-14 md:left-12"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.title}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                transition={heroCopyTransition}
              >
                <h1 className="apple-display whitespace-pre-line text-white">
                  {activeSlide.title}
                </h1>
                <p className="mt-4 max-w-lg text-sm text-white/92 md:text-lg">
                  {activeSlide.subtitle}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white/90">
                    10,000+ completed tickets
                  </span>
                  <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white/90">
                    2 hour average quick-fix
                  </span>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link to={activeSlide.ctaPath}>
                    <button className="btn-primary" aria-label={`${activeSlide.cta} from hero section`}>
                      {activeSlide.cta}
                    </button>
                  </Link>
                  <Link to={activeSlide.secondaryPath}>
                    <button
                      className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20"
                      aria-label={`${activeSlide.secondary} from hero section`}
                    >
                      {activeSlide.secondary}
                    </button>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <div className="absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 gap-3 md:flex">
            <button
              onClick={goPrev}
              className={`glass rounded-full p-3 text-white transition ${simplifyMotion ? "" : "hover:scale-105"}`}
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goNext}
              className={`glass rounded-full p-3 text-white transition ${simplifyMotion ? "" : "hover:scale-105"}`}
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {slides.map((slide, slideIndex) => (
              <button
                key={slide.image}
                onClick={() => setIndex(slideIndex)}
                className={`h-2 rounded-full transition-all ${
                  index === slideIndex ? "w-8 bg-white" : "w-2 bg-white/45"
                }`}
                aria-label={`Go to slide ${slideIndex + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.42, ease: "easeOut" }}
          className="apple-card mt-8 grid gap-5 px-6 py-7 md:grid-cols-3 md:px-10"
        >
          {[
            {
              end: 10000,
              suffix: "+",
              duration: 2.2,
              desc: "Repairs completed with audited quality checks.",
            },
            {
              end: 2,
              suffix: " hrs",
              duration: 1.6,
              desc: "Average quick-fix turnaround on standard issues.",
            },
            {
              end: 4.8,
              suffix: "/5",
              decimals: 1,
              duration: 1.9,
              desc: "Customer satisfaction across service and support.",
            },
          ].map((metric, metricIndex) => (
            <div
              key={metric.desc}
              className={`soft-reveal ${metricIndex === 0 ? "stagger-item-1" : metricIndex === 1 ? "stagger-item-2" : "stagger-item-3"}`}
            >
              <p className="text-3xl font-semibold tracking-tight md:text-4xl">
                <AnimatedMetric
                  end={metric.end}
                  duration={metric.duration}
                  decimals={metric.decimals ?? 0}
                  suffix={metric.suffix}
                  shouldAnimate={!reduceMotion}
                />
              </p>
              <p className="mt-2 text-sm text-[var(--apple-muted)] md:text-base">{metric.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}