import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import useAdaptiveMotion from "../hooks/useAdaptiveMotion";

export default function Contact() {
  const { simplifyMotion } = useAdaptiveMotion();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    setSuccess(true);
    setForm({ name: "", email: "", message: "" });

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section className="px-4 pb-[var(--space-section-lg)] md:px-0">
      <div className="mb-10 text-center">
        <span className="saas-badge">Customer Success Desk</span>
        <h2 className="section-title mt-4">Talk to an Expert, Get a Clear Repair Plan</h2>
        <p className="section-subtitle mx-auto mt-3 max-w-2xl">
          Send your issue details now and receive a guided diagnosis path with pricing and turnaround expectations.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="apple-card space-y-5 p-6 md:p-7">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">Visit Our Support Hub</h3>
            <p className="mt-2 text-sm text-[var(--apple-muted)]">
              Walk-ins and priority diagnostics are available during business hours.
            </p>
          </div>

          <iframe
            title="location"
            className="h-64 w-full rounded-2xl border border-black/10"
            src="https://maps.google.com/maps?q=kolkata&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />

          <div className="space-y-4 rounded-2xl border border-black/10 bg-white/80 p-5">
            <div className="flex items-center gap-3 text-sm">
              <Phone className="text-[var(--apple-blue)]" size={18} />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Mail className="text-[var(--apple-blue)]" size={18} />
              <span>support@gadgetfix.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <MapPin className="text-[var(--apple-blue)]" size={18} />
              <span>Kolkata, India</span>
            </div>
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: simplifyMotion ? 16 : 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: simplifyMotion ? 0.2 : 0.38, ease: "easeOut" }}
          className="apple-card p-6 md:p-8"
        >
          <h3 className="mb-6 text-2xl font-semibold tracking-tight">
            Send a Message
          </h3>

          {success && (
            <div role="status" aria-live="polite" className="mb-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-700">
              Message sent successfully. Our team will contact you shortly.
            </div>
          )}

          <label htmlFor="contact-name" className="mb-1 block text-sm font-medium text-[var(--apple-text)]">
            Full Name
          </label>
          <input
            id="contact-name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="input mb-4"
            autoComplete="name"
            required
          />

          <label htmlFor="contact-email" className="mb-1 block text-sm font-medium text-[var(--apple-text)]">
            Work Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="input mb-4"
            autoComplete="email"
            required
          />

          <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-[var(--apple-text)]">
            Issue Summary
          </label>
          <textarea
            id="contact-message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What issue are you facing?"
            rows="4"
            className="input mb-4"
            required
          />

          <button
            type="submit"
            className="btn-primary w-full"
          >
            Request Expert Callback
          </button>
        </motion.form>
      </div>
    </section>
  );
}