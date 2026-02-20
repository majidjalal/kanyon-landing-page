import React, { useState } from "react";
import { Lock, Send } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  whatsapp: z.string().trim().min(6, "Please enter your WhatsApp number").max(20),
  city: z.string().trim().min(2, "Please enter your city").max(80),
  email: z.string().trim().email("Please enter a valid email").max(255),
});

type FormData = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormData, string>>;

const LeadForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    whatsapp: "",
    city: "",
    email: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyPBKiZ7gX2vgUOzEnSJ2sBVat_D7nSY25bmJJGQSbFlv1EzkhT91eSCvNOx5UinUAH0Q/exec";

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const result = schema.safeParse(formData);

  if (!result.success) {
    const newErrors: Errors = {};
    result.error.issues.forEach((issue) => {
      const key = issue.path[0] as keyof FormData;
      newErrors[key] = issue.message;
    });
    setErrors(newErrors);
    return;
  }

try {
  const form = new FormData();

  // IMPORTANT: use the correct field name from your formData
  form.append("fullName", (formData.fullName ?? formData.name ?? "").toString());
  form.append("whatsapp", (formData.whatsapp ?? "").toString());
  form.append("city", (formData.city ?? "").toString());
  form.append("email", (formData.email ?? "").toString());
  form.append("pageUrl", window.location.href);

  await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    body: form,
  });

  setSubmitted(true);
} catch (error) {
  console.error("Submission error:", error);
  alert("Something went wrong. Please try again.");
}

};


  const fields = [
    { name: "name" as const, label: "Full Name", type: "text", placeholder: "Your full name" },
    { name: "whatsapp" as const, label: "WhatsApp Number", type: "tel", placeholder: "+971 50 000 0000" },
    { name: "city" as const, label: "City / Country", type: "text", placeholder: "Dubai, London, Moscow..." },
    { name: "email" as const, label: "Email Address", type: "email", placeholder: "your@email.com" },
  ];

  return (
    <section
      id="lead-form"
      className="py-24 lg:py-32 bg-navy-mid border-t border-gold-dim/10 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left copy */}
          <div>
            <p className="section-label mb-3">Limited Availability</p>
            <div className="gold-divider mb-6" />
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-cream leading-tight mb-6">
              Register Your{" "}
              <span className="italic text-gold-light font-light">Interest</span>
            </h2>
            <p className="font-body font-light text-cream-muted leading-relaxed text-base mb-8">
              Complete the form to receive the official brochure, floor plans, 
              and current unit availability from our team. Direct developer partnership — 
              no third-party markups.
            </p>
            <div className="space-y-4">
              {[
                "Official brochure & floor plans",
                "Current pricing & availability",
                "Payment plan breakdown",
                "Priority access to new releases",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-gold flex-shrink-0" />
                  <span className="font-body font-light text-sm text-cream/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="gradient-card border border-gold-dim/20 p-8 sm:p-10 shadow-card">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-6">
                  <Send size={22} className="text-gold" />
                </div>
                <h3 className="font-display text-3xl text-cream mb-3">
                  Thank You
                </h3>
                <p className="font-body font-light text-cream-muted text-sm leading-relaxed">
                  We've received your enquiry. Our team will be in touch within 24 hours 
                  with your brochure and availability details.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {fields.map((field) => (
                  <div key={field.name}>
                    <label className="block font-body text-[0.65rem] tracking-[0.2em] uppercase text-gold/70 mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className={`w-full bg-background border px-4 py-3 font-body font-light text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors duration-300 focus:border-gold/50 ${
                        errors[field.name] ? "border-red-500/60" : "border-navy-light"
                      }`}
                    />
                    {errors[field.name] && (
                      <p className="mt-1.5 font-body text-xs text-red-400">
                        {errors[field.name]}
                      </p>
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  className="w-full gradient-gold text-primary-foreground font-body text-sm tracking-[0.2em] uppercase py-4 hover:opacity-90 transition-opacity shadow-gold mt-2"
                >
                  Get Brochure & Floor Plan
                </button>

                <div className="flex items-center justify-center gap-2 pt-1">
                  <Lock size={12} className="text-cream-muted" />
                  <p className="font-body text-xs text-cream-muted">
                    Your details are secure & never shared.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
