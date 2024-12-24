import React from "react";
import HeroSection from "./sections/HeroSection";
import VisionSection from "./sections/VisionSection";
import OurPlaceSection from "./sections/OurPlaceSection";
import WhyKohPhanganSection from "./sections/WhyKohPhanganSection";
import CommunitySection from "./sections/CommunitySection";
import CallToActionSection from "./sections/CallToActionSection";

const MainContent = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <main className="max-w-6xl mx-auto px-4">
        <VisionSection />
        <OurPlaceSection />
        <WhyKohPhanganSection />
        <CommunitySection />
        <CallToActionSection />
      </main>
    </div>
  );
};

export default MainContent;