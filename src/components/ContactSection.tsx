import React from "react";
import { Phone, Mail, Calendar } from "lucide-react";

const ContactSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const contacts = [
    {
      icon: Phone,
      label: "WhatsApp / Call",
      value: "+971 50 000 0000",
      href: "https://wa.me/971500000000",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@premierestate.ae",
      href: "mailto:info@premierestate.ae",
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-navy-mid border-t border-gold-dim/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start justify-between">
          {/* Left */}
          <div className="max-w-lg">
            <p className="section-label mb-3">Get in Touch</p>
            <div className="gold-divider mb-6" />
            <h2 className="font-display text-4xl sm:text-5xl text-cream leading-tight mb-6">
              Speak to Our{" "}
              <span className="italic text-gold-light font-light">Advisory Team</span>
            </h2>
            <p className="font-body font-light text-cream-muted text-base leading-relaxed mb-10">
              Our specialists are available to walk you through available units, 
              investment returns, payment plans and answer any questions you have.
            </p>

            <div className="space-y-6">
              {contacts.map((contact) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 border border-gold-dim/30 flex items-center justify-center group-hover:border-gold transition-colors duration-300">
                      <Icon size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-body text-[0.6rem] tracking-[0.2em] uppercase text-gold/60">
                        {contact.label}
                      </p>
                      <p className="font-body text-sm text-cream group-hover:text-gold transition-colors duration-300">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right - CTA card */}
          <div className="w-full lg:max-w-sm gradient-card border border-gold/30 p-8 sm:p-10 shadow-gold">
            <Calendar size={22} className="text-gold mb-6" />
            <h3 className="font-display text-3xl text-cream mb-3">
              Book a Consultation
            </h3>
            <p className="font-body font-light text-cream-muted text-sm leading-relaxed mb-8">
              Schedule a free 20-minute call with our Dubai property advisory team. 
              No obligation, full discretion.
            </p>
            <button
              onClick={() => scrollTo("lead-form")}
              className="w-full gradient-gold text-primary-foreground font-body text-sm tracking-[0.2em] uppercase py-4 hover:opacity-90 transition-opacity shadow-gold"
            >
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
