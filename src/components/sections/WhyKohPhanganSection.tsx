import React from "react";
import { Palmtree, Coins, Smile, Waves, Wifi } from "lucide-react";

const WhyKohPhanganSection = () => {
  return (
    <section id="why-koh-phangan" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-6">Why Koh Phangan?</h2>
      <div className="mb-12">
        <img 
          src="/lovable-uploads/f780ddc4-08e9-4e78-84fc-c707858cfbb3.png" 
          alt="Beautiful beach in Koh Phangan with turquoise water and traditional longtail boat"
          className="w-full h-[400px] object-cover rounded-2xl"
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