import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
    <nav className="fixed inset-x-0 top-0 z-50 px-4 py-3 md:px-7">
      <div
        className={`mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-300 md:px-7 ${
          scrolled
            ? "border-black/10 bg-white/78 shadow-[0_12px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl"
            : "border-white/55 bg-white/58 backdrop-blur-lg"
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
              className={`relative text-sm font-medium transition ${
                location.pathname === link.path
                  ? "text-[var(--apple-text)]"
                  : "text-[var(--apple-muted)] hover:text-[var(--apple-text)]"
              }`}
            >
              {link.name}

              {location.pathname === link.path && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-[var(--apple-blue)]"
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
          <button onClick={() => setIsOpen(!isOpen)} className="text-[var(--apple-text)]">
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
            className="mx-auto mt-3 w-full max-w-6xl space-y-4 rounded-3xl border border-black/10 bg-white/92 px-6 py-5 shadow-[0_16px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl md:hidden"
          >
            {navLinks.map((link, i) => (
              <Link
                key={i}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-base font-medium text-[var(--apple-muted)] hover:text-[var(--apple-text)]"
              >
                {link.name}
              </Link>
            ))}

            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <button className="btn-primary w-full">Talk To Expert</button>
            </Link>
            <Link to="/shop" onClick={() => setIsOpen(false)}>
              <button className="btn-secondary w-full">Visit Shop</button>
            </Link>
            <Link to="/#book-repair" onClick={() => setIsOpen(false)}>
              <button className="btn-secondary w-full">
                Book Repair
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}