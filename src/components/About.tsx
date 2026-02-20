import React from "react";
import { Building2, Waves, Star, Calendar } from "lucide-react";

const About = () => {
  const bullets = [
    "1–3 Bedroom Apartments",
    "Sizes 798–2,402 sq.ft",
    "Waterfront & Skyline Views",
    "Premium Amenities",
  ];

  const pricingDetails = [
    { label: "Starting Price", value: "AED 2.4M" },
    { label: "Payment Plan", value: "50 / 50" },
    { label: "Handover", value: "Q2 2029" },
    { label: "Location", value: "Dubai Maritime City" },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <p className="section-label mb-3">The Project</p>
          <div className="gold-divider" />
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left big card */}
          <div className="lg:col-span-3 gradient-card border border-gold-dim/20 p-8 sm:p-10 lg:p-12 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <Building2 size={18} className="text-gold" />
              <span className="section-label">About Kanyon</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl text-cream leading-tight mb-6">
              A Landmark<br />
              <span className="italic text-gold-light font-light">Waterfront Address</span>
            </h2>

            <p className="font-body font-light text-cream-muted leading-relaxed text-base mb-6">
              Kanyon by Beyond redefines premium living in Dubai Maritime City — 
              where sculpted architecture meets nature-inspired design. Rising at the 
              water's edge, Kanyon commands panoramic views of the Arabian Gulf and 
              Dubai's iconic skyline, delivering an unrivalled lifestyle address for 
              discerning owners and investors alike.
            </p>

            <p className="font-body font-light text-cream-muted leading-relaxed text-base mb-10">
              From curated interiors to world-class amenities, every detail is crafted 
              to elevate everyday living into something extraordinary.
            </p>

            <div className="gold-divider mb-8" />

            <div className="grid sm:grid-cols-2 gap-3">
              {bullets.map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                  <span className="font-body font-light text-sm text-cream/80 tracking-wide">
                    {b}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right small card */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="gradient-card border border-gold/30 p-8 sm:p-10 shadow-gold flex-1">
              <div className="flex items-center gap-3 mb-6">
                <Star size={16} className="text-gold" />
                <span className="section-label">Pricing & Location</span>
              </div>

              <div className="space-y-5">
                {pricingDetails.map((detail) => (
                  <div key={detail.label} className="border-b border-navy-light/60 pb-5 last:border-0 last:pb-0">
                    <p className="font-body text-[0.65rem] tracking-[0.2em] uppercase text-gold/60 mb-1">
                      {detail.label}
                    </p>
                    <p className="font-display text-xl text-cream font-semibold">
                      {detail.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability callout */}
            <div className="bg-gold/10 border border-gold/30 p-6 text-center">
              <Waves size={20} className="text-gold mx-auto mb-3" />
              <p className="font-body text-sm text-cream/90 leading-relaxed">
                Direct developer availability
              </p>
              <p className="font-body text-xs text-gold font-400 mt-1 tracking-wider uppercase">
                Limited Units Remaining
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
