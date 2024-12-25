import React from "react";

const OurPlaceSection = () => {
  return (
    <section id="our-place-section" className="py-20 bg-accent/20 -mx-4 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">Our Place</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Located within walking distance of Zen Beach, our villa offers the perfect blend of work and paradise. With flexible workspace options, nearby accommodation choices, and a casual approach to community building, we're creating an environment that's perfect for self-directed individuals.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/lovable-uploads/715d268c-08da-40fd-b2ef-a6544f7f5706.png" 
              alt="Villa Pool Area" 
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/lovable-uploads/ae96e1d3-a8ed-42a5-8c51-430418882775.png" 
              alt="Villa Interior Dining" 
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPlaceSection;