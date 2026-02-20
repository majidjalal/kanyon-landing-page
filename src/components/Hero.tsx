import React from "react";
import heroImage from "@/assets/kanyon-hero.jpg";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex flex-col overflow-hidden" style={{ minHeight: "100svh" }}>
      {/* Background — top-aligned on mobile so building shows, centered on desktop */}
      <div
        className="absolute inset-0 bg-cover bg-top sm:bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      {/* Navy base tint */}
      <div className="absolute inset-0 bg-navy/50" />
      {/* Bottom gradient for text legibility */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, hsl(var(--navy)) 0%, hsl(var(--navy) / 0.9) 30%, hsl(var(--navy) / 0.5) 55%, transparent 80%)" }} />
      {/* Subtle gold shimmer */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(var(--gold) / 0.06) 0%, transparent 50%, hsl(var(--navy) / 0.25) 100%)" }} />
      {/* Top fade for header */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/55 via-transparent to-transparent" />

      {/* Spacer pushes content to bottom */}
      <div className="flex-1" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20 lg:pb-28 pt-20 sm:pt-28">
        <div className="max-w-3xl">
          {/* Label */}
          <p className="section-label mb-4 sm:mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Dubai Maritime City — Off Plan
          </p>

          {/* H1 */}
          <h1
            className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-cream leading-none mb-3 sm:mb-4 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            KANYON
            <br />
            <span className="italic text-gold-light font-light">by Beyond</span>
          </h1>

          {/* Subtitle */}
          <p
            className="font-body font-light text-base sm:text-xl text-cream/80 mb-5 sm:mb-8 tracking-wide animate-fade-up"
            style={{ animationDelay: "0.35s" }}
          >
            Waterfront Luxury at Dubai Maritime City
          </p>

          {/* Gold divider */}
          <div className="gold-divider mb-5 sm:mb-8 animate-fade-up" style={{ animationDelay: "0.4s" }} />

          {/* Key Stats */}
          <div
            className="flex flex-wrap gap-4 sm:gap-6 mb-7 sm:mb-10 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            {[
              { label: "Starting From", value: "AED 2.4M" },
              { label: "Payment Plan", value: "50 / 50" },
              { label: "Handover", value: "Q2 2029" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-body text-[0.6rem] tracking-[0.2em] uppercase text-gold/70">
                  {stat.label}
                </span>
                <span className="font-display text-lg sm:text-2xl text-cream font-semibold">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start animate-fade-up"
            style={{ animationDelay: "0.65s" }}
          >
            <button
              onClick={() => scrollTo("lead-form")}
              className="w-full sm:w-auto gradient-gold text-primary-foreground font-body font-500 text-sm tracking-[0.2em] uppercase px-8 py-4 hover:opacity-90 transition-all duration-300 shadow-gold hover:shadow-lg text-center"
            >
              Inquire Now
            </button>
            <button
              onClick={() => scrollTo("lead-form")}
              className="w-full sm:w-auto border border-gold/40 text-cream/70 font-body text-sm tracking-wider uppercase px-8 py-4 hover:border-gold hover:text-cream transition-all duration-300 text-center"
            >
              Get Brochure & Floor Plans
            </button>
          </div>

          <p
            className="mt-4 font-body text-xs text-cream/40 tracking-wider animate-fade-up"
            style={{ animationDelay: "0.75s" }}
          >
            Brochure · Floor Plans · Unit Availability — Sent Directly
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-8 bg-gradient-to-b from-gold to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
