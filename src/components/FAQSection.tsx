import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Can foreigners buy property in Kanyon?",
    a: "Yes. Foreign nationals can buy property in Dubai's designated ownership areas, and Kanyon is promoted for international buyers. Confirm current availability with us.",
  },
  {
    q: "What property types are available in Kanyon?",
    a: "1, 2 & 3-bedroom apartments with waterfront/skyline views (subject to availability).",
  },
  {
    q: "Is Kanyon a good investment?",
    a: "Waterfront location + limited supply + flexible plan + Dubai market demand make it a strong option for end-use or rental strategy. We can share expected yield comps.",
  },
  {
    q: "What is the minimum price in Kanyon?",
    a: "Starting from approx. AED 2.4M (subject to unit availability).",
  },
  {
    q: "Is a payment plan available for foreign buyers?",
    a: "Yes. Developer payment plan is available, including 50/50 (terms may vary by unit).",
  },
  {
    q: "When is handover?",
    a: "Expected Q2 2029.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-navy border-t border-gold-dim/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left */}
          <div className="lg:col-span-2">
            <p className="section-label mb-3">Common Questions</p>
            <div className="gold-divider mb-6" />
            <h2 className="font-display text-4xl sm:text-5xl text-cream leading-tight mb-6">
              Frequently{" "}
              <span className="italic text-gold-light font-light">Asked</span>
            </h2>
            <p className="font-body font-light text-cream-muted text-sm leading-relaxed">
              Have a question not covered here? Contact our advisory team directly for 
              personalised guidance.
            </p>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-3">
            <Accordion type="single" collapsible className="space-y-0">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-t border-gold-dim/20 last:border-b"
                >
                  <AccordionTrigger className="font-body font-light text-left text-base text-cream py-6 hover:text-gold transition-colors duration-300 hover:no-underline [&[data-state=open]]:text-gold">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-body font-light text-sm text-cream-muted leading-relaxed pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
