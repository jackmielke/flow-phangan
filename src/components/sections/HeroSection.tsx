import React from "react";
import { Button } from "../ui/button";
import { CalendarDays } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center" style={{
      backgroundImage: "url('/lovable-uploads/11d1a4b7-9054-421b-b8dc-d2c787dc34ab.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-2 animate-fadeIn">
          <CalendarDays className="w-4 h-4 opacity-80" />
          <p className="text-sm font-medium text-white/80">
            April 18th - May 18th, 2025
          </p>
        </div>
        <h1 className="text-5xl font-bold mb-6 animate-fadeIn">Flow Phangan</h1>
        <p className="text-xl mb-8 animate-fadeIn opacity-90">Join our community of engineers and digital nomads for one month on the beautiful island of Koh Phangan</p>
        <Button 
          size="lg"
          className="bg-white text-black hover:bg-white/90 animate-fadeIn"
          onClick={() => window.open('https://airtable.com/appt8cQp1EPGsmmZy/pagDgPJfHw9UqHwAw/form', '_blank')}
        >
          I'm Interested
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;