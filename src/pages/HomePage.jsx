import ContactSection from "../components/ContactSection";
import DoctorSection from "../components/DoctorSection";
import HeroSection from "../components/HeroSection";
import IntroSection from "../components/IntroSection";
import PromoSection from "../components/PromoSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";

function HomePage() {
  return (
    <>
      <HeroSection />
      <PromoSection />
      <IntroSection />
      <ServicesSection />
      <DoctorSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}

export default HomePage;
