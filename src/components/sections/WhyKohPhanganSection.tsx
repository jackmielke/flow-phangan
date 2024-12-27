import React from "react";
import { Palmtree, Coins, Smile, Waves, Wifi } from "lucide-react";

const WhyKohPhanganSection = () => {
  return (
    <section id="why-koh-phangan" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-6">Why Koh Phangan?</h2>
      <div className="w-full max-w-4xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-xl">
        <img 
          src="/lovable-uploads/65178af3-b8a6-4f74-8e24-72a8e8470c8a.png" 
          alt="Beautiful beach in Koh Phangan with turquoise water and traditional longtail boat"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            icon: <Palmtree className="w-6 h-6" />,
            text: "Paradise island vibes: beaches, sunsets, and jungles",
          },
          {
            icon: <Wifi className="w-6 h-6" />,
            text: "Low cost, high quality of life—with easy access to modern amenities",
          },
          {
            icon: <Smile className="w-6 h-6" />,
            text: "Healthy lifestyle: Muay Thai gyms, ecstatic dance, amazing food, and a thriving yoga community",
          },
          {
            icon: <Waves className="w-6 h-6" />,
            text: "Monkeys, scooters, and incredible coastline exploring",
          },
          {
            icon: <Coins className="w-6 h-6" />,
            text: "Accommodation for all budgets: from $300/mo bungalows to luxury villas",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="group relative bg-white p-6 rounded-xl border border-border transition-all duration-300 hover:shadow-lg animate-fadeIn"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div className="flex items-center space-x-3">
              {feature.icon}
              <p className="text-sm">{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyKohPhanganSection;