import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import AccommodationSection from '@/components/AccommodationSection';
import EventsSection from '@/components/EventsSection';
import GallerySection from '@/components/GallerySection';
import FacilitiesSection from '@/components/FacilitiesSection';
import PricingSection from '@/components/PricingSection';
import ReservationForm from '@/components/ReservationForm';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <AccommodationSection />
      <EventsSection />
      <GallerySection />
      <FacilitiesSection />
      <PricingSection />
      <ReservationForm />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
