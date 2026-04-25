import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
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
    <section className="min-h-screen bg-gray-50 px-6 py-12">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <p className="text-gray-600 mt-2">
          Have a question or need a repair? Get in touch with us.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        
        {/* Left: Map + Info */}
        <div className="space-y-6">
          
          {/* Map */}
          <iframe
            title="location"
            className="w-full h-64 rounded-xl shadow"
            src="https://maps.google.com/maps?q=kolkata&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />

          {/* Contact Info */}
          <div className="bg-white p-6 rounded-2xl shadow space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="text-blue-600" />
              <span>+91 9565460</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-blue-600" />
              <span>support@gadgetfix.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-blue-600" />
              <span>Kolkata, India</span>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-6">
            Send a Message
          </h3>

          {success && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
              ✅ Message sent successfully!
            </div>
          )}

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg mb-4 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg mb-4 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border rounded-lg mb-4 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}