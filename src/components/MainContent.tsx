import React from "react";
import { Palmtree, Users, Coins, Smile, Waves, Sun, Wifi } from "lucide-react";
import { Button } from "./ui/button";

const MainContent = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
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
            Express Interest
          </Button>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4">
        {/* Vision Section */}
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

        {/* Our Place Section */}
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

        {/* Why Koh Phangan Section */}
        <section className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Koh Phangan?</h2>
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

        {/* Community Section */}
        <section className="py-20 bg-accent/20 -mx-4 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We're two remote-working developers looking to gather like-minded builders:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-white p-6 rounded-xl border border-border">
                      <h3 className="font-bold mb-2">Atin</h3>
                      <p className="text-muted-foreground">
                        An experienced startup founder and dev, currently working at a venture capital firm focused on early stage ML investing.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-border">
                      <h3 className="font-bold mb-2">Jack</h3>
                      <p className="text-muted-foreground">
                        A creative developer focused on AI-augmented building, working as a remote engineering consultant.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/a3edbe2c-0d85-4fac-b39c-f43c9fc10e49.png" 
                  alt="Community Dinner" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            If this speaks to you, grab your laptop and join us in Koh Phangan this April. Let's create something amazing together.
          </p>
          <div className="space-y-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              onClick={() => window.open('https://airtable.com/appt8cQp1EPGsmmZy/pagDgPJfHw9UqHwAw/form', '_blank')}
            >
              Express Interest
            </Button>
            <div className="text-sm text-muted-foreground">
              Questions? Email us at{" "}
              <a 
                href="mailto:info@flowphangan.com"
                className="text-primary hover:underline"
              >
                info@flowphangan.com
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainContent;