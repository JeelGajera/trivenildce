import AboutUsSection from "@/components/sections/AboutUsSection";
import HeroSection from "@/components/sections/HeroSection";
import SectionBanner from "@/components/sections/SectionBanner";
import SpecialAttraction from "@/components/sections/SpecialAttraction";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <SpecialAttraction />
      {/* section banner */}
      <SectionBanner />
      {/* about us section */}
      <p className="tracking-wide animate-glitch horizontal_tabline">
      Triveni-2K24, Triveni-2K24, Triveni-2K24, Triveni-2K24, Triveni-2K24, Triveni-2K24, Triveni-2K24, Triveni-2K24, Triveni-2K24, 
      </p>
      <AboutUsSection />

      <div className="marquee mb-[10vh]">
        <p className="text-xl sm:text-6xl font-bold my-10 md:my-0 text_shadow_teal animate-glitch_wave font-inter">
        Triveni 2K24: Where Rivers of Talent Merge! March 21<sup>th</sup>, 22<sup>th</sup>, 23<sup>rd</sup>.
        </p>
      </div>
    </main>
  );
}
