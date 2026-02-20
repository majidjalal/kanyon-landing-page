import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyInvest from "@/components/WhyInvest";
import MapSection from "@/components/MapSection";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-navy min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <WhyInvest />
        <MapSection />
        <LeadForm />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
