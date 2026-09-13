import { useEffect } from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Clients from "../components/Clients";
import Certifications from "../components/Certifications";
import CTASection from "../components/CTASection";

export default function About() {
  useEffect(() => {
    document.title = "PLOVIT Logistics";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      "content",
      "PLOVIT Logistics - End-to-end global logistics solutions including ocean freight, air freight, customs clearance, Supply Chain Solutions and more.",
    );
  }, []);

  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <Clients />
      <Certifications />
      <CTASection />
    </>
  );
}
