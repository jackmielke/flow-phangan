import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[url('/lovable-uploads/82637cd3-f245-4371-8556-139168f5e79c.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Flow Phangan
        </h1>
        <p className="text-xl md:text-2xl text-white/90">
          A community of{" "}
          <span 
            onClick={() => scrollToSection('why-koh-phangan')} 
            className="underline cursor-pointer hover:text-white"
          >
            Remote Workers on Koh Phangan
          </span>
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <a href="#our-place-section">
              Book a villa <ArrowRight className="ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;