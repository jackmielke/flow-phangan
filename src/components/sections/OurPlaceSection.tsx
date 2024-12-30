import React from "react";

const OurPlaceSection = () => {
  return (
    <section id="our-place-section" className="py-20 bg-accent/20 -mx-4 px-4">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Our Villa</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're excited about this villa. It is in an amazing location—walking distance from Zen Beach (our favorite beach!) and has plenty of great places to stay nearby for folks who want to be in close touch with this community.
          </p>
        </div>
        
        <div className="flex flex-col gap-6">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/lovable-uploads/villa/IMG_8455.jpg" 
              alt="Flow Villa - Main View" 
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/lovable-uploads/villa/flow villa 5.jpg" 
              alt="Flow Villa - Additional View" 
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPlaceSection;