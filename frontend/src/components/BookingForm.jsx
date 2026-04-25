import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Smartphone, Wrench } from "lucide-react";

export default function BookingForm() {
  const [form, setForm] = useState({
    device: "",
    issue: "",
    date: "",
    contact: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!form.device || !form.issue || !form.date || !form.contact) {
      alert("Please fill all fields");
      return;
    }

    setSuccess(true);

    // Reset form
    setForm({ device: "", issue: "", date: "", contact: "" });

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full rounded-2xl border border-black/10 bg-white/70 p-6 text-left md:p-8"
    >
        <h2 className="mb-6 text-center text-2xl font-semibold tracking-tight">
          Book a Repair
        </h2>

        {success && (
          <div className="mb-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-3 text-emerald-700">
            Booking submitted successfully.
          </div>
        )}

        <div className="mb-4">
          <label className="text-sm font-medium text-[var(--apple-muted)]">Device Type</label>
          <div className="mt-1 flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-3">
            <Smartphone size={18} className="text-[var(--apple-muted)]" />
            <input
              name="device"
              value={form.device}
              onChange={handleChange}
              placeholder="e.g. iPhone 13"
              className="w-full bg-transparent p-3 text-sm outline-none"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="text-sm font-medium text-[var(--apple-muted)]">Issue</label>
          <div className="mt-1 flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-3">
            <Wrench size={18} className="text-[var(--apple-muted)]" />
            <input
              name="issue"
              value={form.issue}
              onChange={handleChange}
              placeholder="Screen broken, battery issue..."
              className="w-full bg-transparent p-3 text-sm outline-none"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="text-sm font-medium text-[var(--apple-muted)]">Preferred Date</label>
          <div className="mt-1 flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-3">
            <Calendar size={18} className="text-[var(--apple-muted)]" />
            <input
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
              className="w-full bg-transparent p-3 text-sm outline-none"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="text-sm font-medium text-[var(--apple-muted)]">Contact Info</label>
          <input
            name="contact"
            value={form.contact}
            onChange={handleChange}
            placeholder="Phone or Email"
            className="input mt-1"
          />
        </div>

        <button
          type="submit"
          className="btn-primary w-full"
        >
          Confirm Booking
        </button>
    </motion.form>
  );
}