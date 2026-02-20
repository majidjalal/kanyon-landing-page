import React from "react";
import { MapPin } from "lucide-react";
import mapImage from "@/assets/kanyon-map.jpg";

const MapSection = () => {
  return (
    <section id="map" className="py-24 lg:py-32 bg-navy border-t border-gold-dim/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="section-label mb-3">Find Us</p>
          <div className="gold-divider mb-6" />
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-cream leading-tight">
              Location
            </h2>
            <p className="font-body font-light text-cream-muted text-base max-w-sm">
              Minutes to Downtown, DIFC, Port Rashid & key highways.
            </p>
          </div>
        </div>

        {/* Map image */}
        <div className="relative overflow-hidden border border-gold-dim/20 shadow-card">
          <img
            src={mapImage}
            alt="Kanyon Location – Dubai Maritime City"
            className="w-full object-cover h-[320px] sm:h-[420px] lg:h-[520px]"
            loading="lazy"
          />
          {/* Navy base overlay */}
          <div className="absolute inset-0 bg-navy/50" />
          {/* Gold vignette edges */}
          <div className="absolute inset-0" style={{background: "radial-gradient(ellipse at center, transparent 40%, hsl(var(--navy) / 0.7) 100%)"}} />
          {/* Subtle gold tint */}
          <div className="absolute inset-0" style={{background: "linear-gradient(135deg, hsl(var(--gold) / 0.06) 0%, transparent 60%, hsl(var(--navy) / 0.4) 100%)"}} />

          {/* Location pin */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-gold text-primary-foreground rounded-full p-3 shadow-gold animate-pulse">
                <MapPin size={22} />
              </div>
              <div className="bg-navy/90 border border-gold/30 px-4 py-2 text-center">
                <p className="font-body text-xs tracking-widest uppercase text-gold">
                  Kanyon by Beyond
                </p>
                <p className="font-body text-[0.65rem] text-cream-muted mt-0.5">
                  Dubai Maritime City
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Location pills */}
        <div className="mt-8 flex flex-wrap gap-3">
          {[
            "Downtown Dubai",
            "DIFC",
            "Port Rashid",
            "Dubai Airport",
            "Palm Jumeirah",
            "Business Bay",
          ].map((place) => (
            <span
              key={place}
              className="font-body text-xs tracking-wider uppercase border border-gold-dim/30 text-cream-muted px-4 py-2"
            >
              {place}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MapSection;
