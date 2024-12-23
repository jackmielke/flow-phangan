import React from "react";
import { Palmtree, Users, Coins, Smile, Waves, Sun, Wifi } from "lucide-react";
import { Button } from "./ui/button";

const MainContent = () => {
  return (
    <div className="min-h-screen bg-background text-foreground animate-fadeIn">
      <header className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-accent/50 px-3 py-1 rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium">Flow Phangan</span>
          </div>
          <div className="mt-6">
            <Button
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() => window.open('https://airtable.com/appt8cQp1EPGsmmZy/pagDgPJfHw9UqHwAw/form', '_blank')}
            >
              Express Interest
            </Button>
          </div>
        </div>
      </header>

      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* The Vision Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">The Vision</h2>
            <p className="text-lg text-muted-foreground">
              We've booked a villa on the{" "}
              <a href="https://www.google.com/maps/place/Ko+Pha+Ngan/@9.7349598,99.9388031,35068m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3054fd96fa0377ef:0xd3fd8d1a5e79affe!8m2!3d9.7318753!4d100.0135929!16zL20vMDNtajBu" 
                 className="text-primary hover:underline"
                 target="_blank"
                 rel="noopener noreferrer">
                Thai island of Koh Phangan
              </a>{" "}
              for 4 weeks (April 18 to May 18), transforming it into an informal coworking space for technical and remote workers.
            </p>
            <p className="text-lg text-muted-foreground">
              We're creating a unique space to build alongside software engineers, startup founders, digital nomads, artists, and other ambitious people working on exciting projects. :)
            </p>
          </section>

          {/* Our Place Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Our Place</h2>
            <p className="text-lg text-muted-foreground">
              The villa is in an excellent location—walking distance from Zen Beach (our favorite beach!). It comes equipped with flexible workspace for coworking. While some guests can stay in the villa, others can easily find accommodation nearby. We're keeping it straightforward with Telegram group coordination, informal meals, and weekday unconference sessions. This is perfect for self-directed individuals; we won't be hand-holding.
            </p>
          </section>

          {/* Why Koh Phangan Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Why Koh Phangan?</h2>
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
                  text: "Healthy lifestyle: Muay Thai gyms (and regular ones), ecstatic dance, amazing food, and a thriving yoga & conscious community",
                },
                {
                  icon: <Waves className="w-6 h-6" />,
                  text: "Monkeys, scooters, and incredible coastline exploring",
                },
                {
                  icon: <Coins className="w-6 h-6" />,
                  text: "Accommodation for all budgets: from $300/mo bungalows to $10k/mo luxury villas",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-card p-6 rounded-lg border border-border transition-all duration-300 hover:shadow-lg animate-fadeIn"
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

          {/* The Hosts Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">The Hosts</h2>
            <p className="text-lg text-muted-foreground">
              We're two remote-working developers looking to gather like-minded builders:
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-bold">**Atin**</h3>
                <p className="text-muted-foreground">
                  An experienced startup founder and dev, currently working at a venture capital firm focused on early stage ML investing.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-bold">**Jack**</h3>
                <p className="text-muted-foreground">
                  A creative developer focused on AI-augmented building, working as a remote engineering consultant.
                </p>
              </div>
            </div>
          </section>

          {/* Interested Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Interested?</h2>
            <p className="text-lg text-muted-foreground">
              If this speaks to you, grab your laptop, join us in Koh Phangan this March, and lets create some magic. :)
            </p>
            <p className="text-lg">
              For more info or to connect, reach out:{" "}
              <a 
                href="mailto:info@flowphangan.com"
                className="text-primary hover:underline"
              >
                info@flowphangan.com
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default MainContent;