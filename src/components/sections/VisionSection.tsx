import React from "react";

const VisionSection = () => {
  const scrollToOurPlace = () => {
    const ourPlaceSection = document.getElementById('our-place-section');
    if (ourPlaceSection) {
      ourPlaceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
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
            <a 
              href="https://www.google.com/maps/place/Ko+Pha+Ngan/@9.7349598,99.9388031,35068m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3054fd96fa0377ef:0xd3fd8d1a5e79affe!8m2!3d9.7318753!4d100.0135929!16zL20vMDNtajBu?hl=en&entry=ttu&g_ep=EgoyMDI0MTIwOC4wIKXMDSoASAFQAw%3D%3D" 
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Koh Phangan
            </a>{" "}
            (April 18 to May 18).
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This will be an informal coworking space to build and live a healthy lifestyle alongside others working on exciting projects. :)
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="/lovable-uploads/583e538c-89d9-4a37-b2b9-c9785a6053e0.png" 
            alt="Villa Interior" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default VisionSection;