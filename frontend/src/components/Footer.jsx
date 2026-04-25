import { Mail, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-black/10 bg-[linear-gradient(180deg,#edf3fb_0%,#e8eef8_100%)] px-6 pb-8 pt-12 text-[var(--apple-muted)] md:mt-14">
      <div className="mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-[var(--apple-text)]">
            Gadgetfix<span className="text-[var(--apple-blue)]">+</span>
          </h2>
          <p className="text-sm leading-6">
            A premium support workflow for mobile and laptop owners who need fast turnaround and transparent diagnostics.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-[var(--apple-text)]">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-[var(--apple-text)]" aria-label="Go to Home page">Home</Link></li>
            <li><Link to="/services" className="hover:text-[var(--apple-text)]" aria-label="Go to Services page">Services</Link></li>
            <li><Link to="/shop" className="hover:text-[var(--apple-text)]" aria-label="Go to Shop page">Shop</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--apple-text)]" aria-label="Go to Contact page">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-[var(--apple-text)]">Contact</h3>
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <Phone size={16} className="text-[var(--apple-blue)]" /> +91 98765 43210
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} className="text-[var(--apple-blue)]" /> support@gadgetfix.com
            </p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-[var(--apple-text)]">Follow Us</h3>
          <div className="flex gap-4 text-lg">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Follow us on Facebook" className="rounded-full border border-black/10 p-2 transition hover:border-black/30 hover:text-[var(--apple-text)]">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Follow us on Instagram" className="rounded-full border border-black/10 p-2 transition hover:border-black/30 hover:text-[var(--apple-text)]">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Follow us on Twitter" className="rounded-full border border-black/10 p-2 transition hover:border-black/30 hover:text-[var(--apple-text)]">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-black/10 pt-6 text-center text-sm">
        © 2026 Gadgetfix+. Built for dependable device care.
      </div>
    </footer>
  );
}