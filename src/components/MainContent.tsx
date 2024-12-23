import React from "react";

const MainContent = () => {
  return (
    <div className="min-h-screen bg-background text-foreground animate-fadeIn">
      <header className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-accent/50 px-3 py-1 rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium">AI-Generated Website</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight">
            Welcome to Your Personal Space
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A minimalist website crafted with artificial intelligence, featuring
            clean design and smooth animations.
          </p>
        </div>
      </header>

      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto grid gap-8">
          <section className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "AI-Powered Design",
                  description:
                    "Every element of this website was carefully crafted using artificial intelligence.",
                },
                {
                  title: "Minimal Aesthetics",
                  description:
                    "Clean, modern design inspired by Apple's design philosophy.",
                },
                {
                  title: "Smooth Animations",
                  description:
                    "Fluid transitions and subtle effects enhance the user experience.",
                },
                {
                  title: "Responsive Layout",
                  description:
                    "Perfectly adapted to any screen size or device.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-card p-6 rounded-lg border border-border transition-all duration-300 hover:shadow-lg"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="absolute top-3 right-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default MainContent;