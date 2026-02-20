import React from "react";
import { ShieldCheck, TrendingUp, Anchor, Wallet, Globe, BarChart3 } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Tax-Efficient Market",
    desc: "No income tax, capital gains tax or property tax in Dubai — maximise your net returns.",
  },
  {
    icon: TrendingUp,
    title: "Strong Rental Demand",
    desc: "Dubai's expat-driven rental market sustains high occupancy rates year-round.",
  },
  {
    icon: Anchor,
    title: "Prime Waterfront Growth",
    desc: "Dubai Maritime City is an emerging district commanding a scarcity premium.",
  },
  {
    icon: Wallet,
    title: "Flexible Payment Plans",
    desc: "Developer-backed 50/50 plan reduces upfront capital and improves ROI profile.",
  },
  {
    icon: Globe,
    title: "World-Class Connectivity",
    desc: "Minutes to Downtown, DIFC, Port Rashid and major highways — central to everything.",
  },
  {
    icon: BarChart3,
    title: "Capital Appreciation",
    desc: "Waterfront scarcity + global demand + infrastructure spend = long-term value growth.",
  },
];

const WhyInvest = () => {
  return (
    <section id="why-invest" className="py-24 lg:py-32 bg-navy-mid border-t border-gold-dim/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="section-label mb-3">The Opportunity</p>
          <div className="gold-divider mb-6" />
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-cream leading-tight">
            Why Invest in Dubai &{" "}
            <span className="italic text-gold-light font-light">
              Dubai Maritime City
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold-dim/10">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div
                key={i}
                className="group bg-navy p-8 lg:p-10 hover:bg-navy-mid transition-colors duration-300 border border-transparent hover:border-gold-dim/20"
              >
                <div className="mb-5">
                  <Icon
                    size={22}
                    className="text-gold group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-display text-xl text-cream mb-3 group-hover:text-gold-light transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="font-body font-light text-sm text-cream-muted leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;
