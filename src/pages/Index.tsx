import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import MenuSection from "@/components/MenuSection";
import WhySection from "@/components/WhySection";
import ReservationSection from "@/components/ReservationSection";
import LocationSection from "@/components/LocationSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyReserve from "@/components/StickyReserve";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <MenuSection />
      <WhySection />
      <ReservationSection />
      <LocationSection />
      <FinalCTA />
      <Footer />
      <StickyReserve />
    </main>
  );
};

export default Index;
