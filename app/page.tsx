import AboutUsSection from "@/components/sections/AboutUsSection";
import SectionBanner from "@/components/sections/SectionBanner";
import SpecialAttraction from "@/components/sections/SpecialAttraction";

export default function Home() {
  return (
    <main>
      <SpecialAttraction />

      {/* about us section */}
      <AboutUsSection />
      {/* section banner */}
      <SectionBanner />
    </main>
  );
}
