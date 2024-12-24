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
        <h1 className="text-5xl font-bold mb-6 animate-fadeIn">Flow Phangan</h1>
        <div className="flex items-center justify-center gap-2 mb-4 animate-fadeIn">
          <CalendarDays className="w-6 h-6" />
          <p className="text-xl font-semibold bg-black/30 px-4 py-2 rounded-full">
            April 18th - May 18th, 2024
          </p>
        </div>
        <p className="text-xl mb-8 animate-fadeIn opacity-90">Join our community of developers, founders, and creators on the beautiful island of Koh Phangan</p>
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