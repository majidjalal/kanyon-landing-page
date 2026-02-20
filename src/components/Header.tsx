import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { label: "Why Kanyon", id: "why-invest" },
    { label: "Project", id: "about" },
    { label: "Map", id: "map" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md border-b border-gold-dim/30 shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex flex-col items-start"
          >
            <span className="font-display text-xl lg:text-2xl text-cream font-semibold tracking-wide leading-none">
              KANYON
            </span>
            <span className="font-body text-[0.6rem] text-gold tracking-[0.2em] uppercase leading-none mt-0.5">
              by Beyond
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="font-body text-sm tracking-widest uppercase text-cream-muted hover:text-gold transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollTo("lead-form")}
              className="hidden sm:block gradient-gold text-primary-foreground font-body font-500 text-sm tracking-widest uppercase px-5 py-2.5 hover:opacity-90 transition-opacity shadow-gold"
            >
              Inquire Now
            </button>
            <button
              className="lg:hidden text-cream"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-mid border-t border-gold-dim/20">
          <nav className="flex flex-col py-4 px-6 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left font-body text-sm tracking-widest uppercase text-cream-muted hover:text-gold py-3 border-b border-navy-light/50 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("lead-form")}
              className="mt-4 gradient-gold text-primary-foreground font-body text-sm tracking-widest uppercase py-3 text-center"
            >
              Inquire Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
