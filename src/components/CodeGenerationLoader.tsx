import React, { useState, useEffect } from "react";

interface CodeGenerationLoaderProps {
  onComplete: () => void;
}

const CodeGenerationLoader = ({ onComplete }: CodeGenerationLoaderProps) => {
  const [lines, setLines] = useState<string[]>([]);
  const matrixCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%^&*()";
  const codeSnippets = [
    "const AI = new ArtificialIntelligence();",
    "import { Creativity } from '@ai/core';",
    "function generateWebsite() {",
    "  return <BeautifulSite />;",
    "}",
    "AI.train({ mode: 'creative' });",
    "export default PersonalSite;",
    "npm install future-tech",
    "<Component magic={true} />",
    "git commit -m 'AI magic'",
    "deploying to the cloud...",
    "AI.enhance(design);",
    "optimization complete"
  ];

  useEffect(() => {
    let currentLine = 0;
    const maxLines = 20; // Show more lines for matrix effect
    
    const interval = setInterval(() => {
      if (currentLine < maxLines) {
        const randomSnippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        const matrixPrefix = Array(Math.floor(Math.random() * 3))
          .fill(0)
          .map(() => matrixCharacters[Math.floor(Math.random() * matrixCharacters.length)])
          .join("");
        
        setLines(prev => [...prev, `${matrixPrefix} ${randomSnippet}`].slice(-12)); // Keep last 12 lines
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 500);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4 overflow-hidden">
      <div className="relative max-w-2xl w-full h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-10" />
        <div className="bg-black/80 p-6 rounded-lg h-full border border-primary/20 relative">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="font-mono text-sm space-y-2 text-primary/80 overflow-hidden h-full">
            {lines.map((line, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 animate-fadeIn"
                style={{
                  animationDelay: `${index * 150}ms`,
                  opacity: 0.3 + (index / lines.length) * 0.7
                }}
              >
                <span className="text-primary">{">"}</span>
                <span className="text-primary/90">{line}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeGenerationLoader;