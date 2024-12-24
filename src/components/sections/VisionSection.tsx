import React from "react";

const VisionSection = () => {
  return (
    <section className="py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">The Vision</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We've secured a stunning villa on{" "}
            <a 
              href="https://www.google.com/maps/place/Ko+Pha+Ngan" 
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Koh Phangan
            </a>{" "}
            for 4 weeks (April 18 to May 18), transforming it into a vibrant coworking space for technical and remote professionals.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our goal is to create an inspiring environment where software engineers, startup founders, digital nomads, and artists can collaborate and build amazing things together.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="/lovable-uploads/c9c2bdab-c64c-4495-930b-7986883ee272.png" 
            alt="Coworking at Flow Phangan" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default VisionSection;