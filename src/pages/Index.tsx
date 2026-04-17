import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CartaMarquee from "@/components/CartaMarquee";
import FoodGallery from "@/components/FoodGallery";
import CartaShowcase from "@/components/CartaShowcase";
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
      <CartaMarquee />
      <FoodGallery />
      <CartaShowcase />
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
