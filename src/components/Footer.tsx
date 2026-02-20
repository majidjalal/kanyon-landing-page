import React from "react";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy border-t border-gold-dim/20">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="font-display text-2xl text-cream font-semibold tracking-wide">
                KANYON
              </span>
              <span className="font-body text-[0.65rem] text-gold tracking-[0.2em] uppercase ml-3">
                by Beyond
              </span>
            </div>
            <p className="font-body font-light text-cream-muted text-sm leading-relaxed max-w-xs">
              A Premier Estate Real Estate LLC exclusive. Dubai Maritime City's premier 
              waterfront off-plan address.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="section-label mb-5">Quick Links</p>
            <div className="space-y-3">
              {[
                { label: "Why Kanyon", id: "why-invest" },
                { label: "The Project", id: "about" },
                { label: "Location Map", id: "map" },
                { label: "Register Interest", id: "lead-form" },
                { label: "FAQ", id: "faq" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="block font-body font-light text-sm text-cream-muted hover:text-gold transition-colors duration-300 tracking-wide"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label mb-5">Contact</p>
            <div className="space-y-3">
              <a
                href="https://wa.me/971500000000"
                className="block font-body font-light text-sm text-cream-muted hover:text-gold transition-colors duration-300"
              >
                +971 50 000 0000
              </a>
              <a
                href="mailto:info@premierestate.ae"
                className="block font-body font-light text-sm text-cream-muted hover:text-gold transition-colors duration-300"
              >
                info@premierestate.ae
              </a>
              <p className="font-body font-light text-sm text-cream-muted">
                Dubai, United Arab Emirates
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold-dim/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="font-body text-xs text-cream-muted mb-4">
            © 2026 Premier Estate Real Estate LLC. All rights reserved.
          </p>
          <p className="font-body font-light text-[0.68rem] text-cream/30 leading-relaxed max-w-4xl">
            <strong className="text-cream/40 font-400">Disclaimer:</strong> We're an authorized partner of Dubai developers listed here. 
            All project details, prices and availability are general information only and may change without 
            notice. Images are illustrative and may not reflect actual properties. For current info, contact 
            us or check the developer's official sources.{" "}
            <a href="#" className="underline hover:text-gold transition-colors">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
