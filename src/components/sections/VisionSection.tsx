import React from "react";

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
        <h2 className="text-3xl font-bold">The Vision</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          We've booked{" "}
          <button
            onClick={scrollToOurPlace}
            className="text-primary hover:underline focus:outline-none"
          >
            a villa
          </button>{" "}
          and are turning it into a month-long creative hub for technical and remote workers on{" "}
          <button 
            onClick={scrollToWhyKohPhangan}
            className="text-primary hover:underline focus:outline-none"
          >
            Koh Phangan
          </button>{" "}
          (April 18 to May 18).
        </p>
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="/lovable-uploads/Flow Phangan IMG 8157.jpeg" 
            alt="Flow Phangan Villa" 
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Our goal is to create an environment where you can be productive while enjoying island life. We have a villa but will not be supplying lodging or food — simply a nice space with fast internet and good vibes, surrounded by nature and close to the beach.
        </p>
        <div className="rounded-2xl overflow-hidden shadow-xl mt-6">
          <img 
            src="/lovable-uploads/583e538c-89d9-4a37-b2b9-c9785a6053e0.png" 
            alt="Flow Phangan Environment" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default VisionSection;