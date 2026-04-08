"use client";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FeaturedListings from "./components/FeaturedListings";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <HeroSection />
      <FeaturedListings></FeaturedListings>
      <AboutSection></AboutSection>
      <ContactSection></ContactSection>
    </div>
  );
}