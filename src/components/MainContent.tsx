import React from "react";
import { PalmTree, ThumbsUp, Smile, Monkey, MoneyBag } from "lucide-react";

const MainContent = () => {
  return (
    <div className="min-h-screen bg-background text-foreground animate-fadeIn">
      <header className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Flow Phangan
          </h1>
          <div className="prose max-w-none text-lg space-y-6">
            <p>
              Express Interest:{" "}
              <a
                href="https://airtable.com/appt8cQp1EPGsmmZy/pagDgPJfHw9UqHwAw/form"
                className="text-primary hover:text-primary/80 underline"
              >
                Fill out the quick form to let us know you're interested
              </a>
            </p>

            <p>
              We've booked a villa on the{" "}
              <a
                href="https://www.google.com/maps/place/Ko+Pha+Ngan/@9.7349598,99.9388031,35068m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3054fd96fa0377ef:0xd3fd8d1a5e79affe!8m2!3d9.7318753!4d100.0135929!16zL20vMDNtajBu"
                className="text-primary hover:text-primary/80 underline"
              >
                Thai island of Koh Phangan
              </a>{" "}
              for 4 weeks (April 18 to May 18), transforming it into an informal coworking space for technical and remote workers.
            </p>

            <p>
              We're creating a unique space to build alongside software engineers, startup founders, digital nomads, artists, and other ambitious people working on exciting projects. :)
            </p>

            <p>
              The villa is in an excellent location—walking distance from town and Zen Beach (our favorite beach!). It comes equipped with flexible workspace for coworking. While some guests can stay in the villa, others can easily find accommodation nearby. We're keeping it straightforward with Telegram group coordination, informal meals, and weekday unconference sessions. This is perfect for self-directed individuals; we won't be hand-holding.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <PalmTree className="h-6 w-6" />
                <p className="text-lg">Paradise island vibes: beaches, sunsets, and jungles</p>
              </div>

              <div className="flex items-center space-x-2">
                <ThumbsUp className="h-6 w-6" />
                <p className="text-lg">Low cost, stunning views and beaches, plus easy access to modern amenities</p>
              </div>

              <div className="flex items-center space-x-2">
                <Smile className="h-6 w-6" />
                <p className="text-lg">Healthy lifestyle: Muay Thai gyms (and regular ones), ecstatic dance, amazing food, and a thriving yoga & conscious community</p>
              </div>

              <div className="flex items-center space-x-2">
                <Monkey className="h-6 w-6" />
                <p className="text-lg">Monkeys, scooters, and incredible coastline exploring</p>
              </div>

              <div className="flex items-center space-x-2">
                <MoneyBag className="h-6 w-6" />
                <p className="text-lg">Accommodation for all budgets: from $300/mo bungalows to $10k/mo luxury villas</p>
              </div>
            </div>

            <div className="space-y-4 mt-8">
              <p className="text-lg font-semibold">We're two remote-working developers looking to gather like-minded builders:</p>
              
              <p>Atin: An experienced startup founder and dev, currently working at a venture capital firm focused on early stage ML investing.</p>
              
              <p>Jack: A creative developer focused on AI-augmented building, working as a remote engineering consultant.</p>
            </div>

            <p className="text-lg mt-8">
              If this speaks to you, grab your laptop, join us in Koh Phangan this March, and build something meaningful. :)
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default MainContent;