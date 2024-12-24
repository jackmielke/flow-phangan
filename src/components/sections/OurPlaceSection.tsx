import React from "react";

const OurPlaceSection = () => {
  return (
    <section className="py-20 bg-accent/20 -mx-4 px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="/lovable-uploads/583e538c-89d9-4a37-b2b9-c9785a6053e0.png" 
            alt="Villa Interior" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Our Place</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Located within walking distance of Zen Beach, our villa offers the perfect blend of work and paradise. With flexible workspace options, nearby accommodation choices, and a casual approach to community building, we're creating an environment that's perfect for self-directed individuals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurPlaceSection;