import React from "react";
import { Button } from "../ui/button";

const CallToActionSection = () => {
  return (
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
          I'm Interested :)
        </Button>
      </div>
    </section>
  );
};

export default CallToActionSection;