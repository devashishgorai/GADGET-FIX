import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "We moved our entire field-support fleet repairs to Gadgetfix+ and cut average downtime by 42%.",
      name: "Ritika Sharma",
      role: "Operations Manager, FleetGrid",
    },
    {
      quote:
        "Clear pricing, no surprises, and genuinely fast service. It feels like a premium SaaS workflow for hardware.",
      name: "Arjun Mehta",
      role: "Founder, PixelNest Studio",
    },
    {
      quote:
        "Their turnaround and communication are excellent. We now route all executive device support through Gadgetfix+.",
      name: "Sonia Verma",
      role: "Admin Lead, NorthBridge Legal",
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
            <p className="text-sm font-semibold text-[var(--apple-text)]">{item.name}</p>
            <p className="text-xs text-[var(--apple-muted)]">{item.role}</p>
          </div>
        </article>
      ))}
    </div>
  );
}