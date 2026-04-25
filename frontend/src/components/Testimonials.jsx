import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "We moved our entire field-support fleet repairs to Gadgetfix+ and cut average downtime by 42%.",
      name: "Ritika Sharma",
      role: "Operations Manager, FleetGrid",
      avatar:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=180&q=80",
    },
    {
      quote:
        "Clear pricing, no surprises, and genuinely fast service. It feels like a premium SaaS workflow for hardware.",
      name: "Arjun Mehta",
      role: "Founder, PixelNest Studio",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=180&q=80",
    },
    {
      quote:
        "Their turnaround and communication are excellent. We now route all executive device support through Gadgetfix+.",
      name: "Sonia Verma",
      role: "Admin Lead, NorthBridge Legal",
      avatar:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=180&q=80",
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-3 md:gap-6">
      {testimonials.map((item) => (
        <article key={item.name} className="apple-card p-6 md:p-7">
          <div className="mb-4 flex items-center gap-1 text-amber-500">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={`${item.name}-${index}`} size={16} fill="currentColor" />
            ))}
          </div>
          <p className="text-sm leading-6 text-[var(--apple-text)] md:text-base">"{item.quote}"</p>
          <div className="mt-5 border-t border-black/10 pt-4">
            <div className="flex items-center gap-3">
              <img
                src={item.avatar}
                alt={`${item.name} profile`}
                loading="lazy"
                decoding="async"
                className="h-11 w-11 rounded-full object-cover ring-2 ring-white"
              />
              <div>
                <p className="text-sm font-semibold text-[var(--apple-text)]">{item.name}</p>
                <p className="text-xs text-[var(--apple-muted)]">{item.role}</p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
