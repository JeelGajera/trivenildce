import AboutUsSection from "@/components/sections/AboutUsSection";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/HeroSection";
import SectionBanner from "@/components/sections/SectionBanner";
import SpecialAttraction from "@/components/sections/SpecialAttraction";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <SpecialAttraction />

      {/* about us section */}
      <AboutUsSection />
      {/* section banner */}
      <SectionBanner />
       {/* Footer */}
       <Footer/>
    </main>
  );
}
