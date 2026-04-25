import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Shop", path: "/shop" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 py-2.5 md:px-7">
      <div
        className={`mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-300 md:px-7 ${
          scrolled
            ? "border-black/10 bg-white/88 shadow-[0_16px_34px_rgba(12,34,70,0.14)] backdrop-blur-xl"
            : "border-white/65 bg-white/64 shadow-[0_8px_24px_rgba(12,34,70,0.08)] backdrop-blur-lg"
        }`}
      >
        <Link to="/" className="text-xl font-semibold tracking-tight text-[var(--apple-text)] md:text-2xl">
          Gadgetfix<span className="text-[var(--apple-blue)]">+</span>
        </Link>

        <div className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              aria-current={location.pathname === link.path ? "page" : undefined}
              className={`relative rounded-full px-3 py-1.5 text-sm font-semibold transition ${
                location.pathname === link.path
                  ? "bg-white text-[var(--apple-text)] shadow-[0_8px_16px_rgba(11,58,120,0.12)]"
                  : "text-[var(--apple-muted)] hover:text-[var(--apple-text)]"
              }`}
            >
              {link.name}

              {location.pathname === link.path && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-0.5 left-3 right-3 h-[2px] rounded-full bg-[var(--apple-blue)]"
                />
              )}
            </Link>
          ))}

          <Link to="/contact">
            <button className="btn-primary px-5 py-2.5 text-xs md:text-sm">
              Talk To Expert
            </button>
          </Link>
        </div>

        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-[var(--apple-text)]"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            id="mobile-navigation"
            className="mx-auto mt-3 w-full max-w-6xl space-y-4 rounded-3xl border border-black/10 bg-white/96 px-6 py-5 shadow-[0_20px_40px_rgba(11,58,120,0.14)] backdrop-blur-xl md:hidden"
          >
            <div className="saas-badge">Premium Support Workflow</div>
            {navLinks.map((link, i) => (
              <Link
                key={i}
                to={link.path}
                aria-current={location.pathname === link.path ? "page" : undefined}
                className="block text-base font-medium text-[var(--apple-muted)] hover:text-[var(--apple-text)]"
              >
                {link.name}
              </Link>
            ))}

            <Link to="/contact">
              <button className="btn-primary w-full">Talk To Expert</button>
            </Link>
            <Link to="/shop">
              <button className="btn-secondary w-full">Visit Shop</button>
            </Link>
            <Link to="/services">
              <button className="btn-secondary w-full">
                Explore Services
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}