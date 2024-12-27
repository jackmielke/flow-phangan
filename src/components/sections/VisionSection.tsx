import React from "react";
import { Button } from "../ui/button";

const VisionSection = () => {
  const scrollToOurPlace = () => {
    document.getElementById('our-place-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWhyKohPhangan = () => {
    document.getElementById('why-koh-phangan')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20">
      <div className="space-y-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Our Vision</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          We're building a community of developers, founders, and creators on{" "}
          <button 
            onClick={scrollToWhyKohPhangan}
            className="text-primary hover:underline focus:outline-none"
          >
            Koh Phangan
          </button>
          . Our goal is to create an environment where you can be productive while enjoying island life. We have{" "}
          <button
            onClick={scrollToOurPlace}
            className="text-primary hover:underline focus:outline-none"
          >
            a villa
          </button>{" "}
          with fast internet and good vibes, surrounded by nature and close to the beach.
        </p>
      </div>
    </section>
  );
};

export default VisionSection;