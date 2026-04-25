import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { totalItems } = useContext(CartContext);
  const { isAuthenticated, user, logout } = useContext(AuthContext);

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
    { name: "Cart", path: "/cart" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-2.5 py-2 sm:px-4 md:px-6 lg:px-7">
      <div
        className={`relative mx-auto flex w-full max-w-6xl items-center justify-between overflow-hidden rounded-2xl border px-3 py-2 transition-all duration-300 sm:rounded-full sm:px-5 sm:py-3 md:px-6 lg:px-7 ${
          scrolled
            ? "border-black/10 bg-white/88 shadow-[0_16px_34px_rgba(12,34,70,0.14),0_0_0_1px_rgba(44,140,255,0.2),0_0_24px_rgba(44,140,255,0.22)] backdrop-blur-xl"
            : "border-white/65 bg-white/64 shadow-[0_8px_24px_rgba(12,34,70,0.08),0_0_0_1px_rgba(44,140,255,0.16),0_0_18px_rgba(44,140,255,0.2)] backdrop-blur-lg"
        }`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-1 left-0 w-8 bg-[radial-gradient(90%_80%_at_0%_50%,rgba(44,140,255,0.45)_0%,rgba(44,140,255,0.2)_40%,rgba(44,140,255,0)_100%)] sm:w-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-1 right-0 w-8 bg-[radial-gradient(90%_80%_at_100%_50%,rgba(44,140,255,0.45)_0%,rgba(44,140,255,0.2)_40%,rgba(44,140,255,0)_100%)] sm:w-10"
        />
        <Link to="/" className="min-w-0 shrink text-base font-semibold tracking-tight text-[var(--apple-text)] sm:text-xl lg:text-2xl">
          Gadgetfix<span className="text-[var(--apple-blue)]">+</span>
        </Link>

        <div className="hidden items-center gap-4 xl:gap-8 lg:flex">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              aria-current={location.pathname === link.path ? "page" : undefined}
              className={`relative rounded-full px-3 py-1.5 text-xs font-semibold transition xl:text-sm ${
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

          <Link to="/cart" className="relative inline-flex">
            <button className="btn-secondary px-4 py-2.5 text-xs md:text-sm">
              <span className="inline-flex items-center gap-1">
                <ShoppingBag size={15} /> Cart
              </span>
            </button>
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--apple-blue)] px-1 text-[10px] font-semibold text-white">
                {totalItems}
              </span>
            )}
          </Link>

          {isAuthenticated ? (
            <button className="btn-primary px-5 py-2.5 text-xs md:text-sm" type="button" onClick={logout}>
              Logout {user?.name ? `(${user.name})` : ""}
            </button>
          ) : (
            <Link to="/login">
              <button className="btn-primary px-5 py-2.5 text-xs md:text-sm" type="button">
                Login
              </button>
            </Link>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 lg:hidden">
          <Link to="/cart" className="relative hidden min-[380px]:inline-flex">
            <button className="btn-secondary px-2.5 py-2 text-xs sm:px-3" aria-label="Open cart">
              <ShoppingBag size={15} />
            </button>
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--apple-blue)] px-1 text-[10px] font-semibold text-white">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full p-1 text-[var(--apple-text)]"
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
            className="mx-auto mt-2 w-full max-w-6xl space-y-4 rounded-3xl border border-black/10 bg-white/96 px-4 py-4 shadow-[0_20px_40px_rgba(11,58,120,0.14)] backdrop-blur-xl sm:px-6 sm:py-5 lg:hidden"
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
            <Link to="/cart" className="relative">
              <button className="btn-secondary w-full">Open Cart ({totalItems})</button>
            </Link>
            <Link to="/shop">
              <button className="btn-secondary w-full">Visit Shop</button>
            </Link>
            <Link to="/services">
              <button className="btn-secondary w-full">
                Explore Services
              </button>
            </Link>
            {isAuthenticated ? (
              <button className="btn-primary w-full" type="button" onClick={logout}>
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="btn-primary w-full" type="button">Login</button>
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
