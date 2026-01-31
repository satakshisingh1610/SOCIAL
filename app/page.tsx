import { HeroSection } from "@/components/home/hero-section";
import { FeaturedWork } from "@/components/home/featured-work";
import { ServicesSection } from "@/components/home/services-section";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { ClientLogos } from "@/components/home/client-logos";
import { TestimonialsPreview } from "@/components/home/testimonials-preview";
import { FinalCta } from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <div className="pt-16 md:pt-20">
      <HeroSection />
      <FeaturedWork />
      <ServicesSection />
      <WhyChooseUs />
      <ClientLogos />
      <TestimonialsPreview />
      <FinalCta />
    </div>
  );
}
