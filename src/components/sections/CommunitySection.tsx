import React from "react";

const CommunitySection = () => {
  return (
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
                  <div className="flex items-start gap-4">
                    <img 
                      src="/lovable-uploads/2c61c20c-8141-453b-bb22-f4c07f4ef997.png"
                      alt="Atin at a festival"
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="font-bold mb-2">Atin</h3>
                      <p className="text-muted-foreground">
                        An experienced startup founder and dev, currently working at a venture capital firm focused on early stage ML investing.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-border">
                  <div className="flex items-start gap-4">
                    <img 
                      src="/lovable-uploads/82637cd3-f245-4371-8556-139168f5e79c.png"
                      alt="Jack with a biotech poster"
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="font-bold mb-2">Jack</h3>
                      <p className="text-muted-foreground">
                        A creative developer focused on AI-augmented building, working as a remote engineering consultant.
                      </p>
                    </div>
                  </div>
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
  );
};

export default CommunitySection;