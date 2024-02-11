// Home.tsx
"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import AboutUsSection from "@/components/sections/AboutUsSection";
import HeroSection from "@/components/sections/HeroSection";
import SectionBanner from "@/components/sections/SectionBanner";
import SpecialAttraction from "@/components/sections/SpecialAttraction";

export default function Home() {
  const navigationItems = [
    { id: "hero", label: "Home" },
    { id: "attraction", label: "Events" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <Navbar navigationItems={navigationItems} />

      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="attraction" style={{ marginTop: "200px" }}>
          <SpecialAttraction />
        </section>
        <section id="about" style={{ marginTop: "200px" }}>
          <AboutUsSection />
        </section>
        <SectionBanner style={{ marginTop: "100px" }} />
      </main>
    </>
  );
}
