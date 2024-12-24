import React from "react";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center" style={{
      backgroundImage: "url('/lovable-uploads/1d5735df-31c3-4a4c-ab88-ed5635a45947.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6 animate-fadeIn">Flow Phangan</h1>
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