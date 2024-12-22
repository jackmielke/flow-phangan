import React, { useState, useEffect } from "react";

interface CodeGenerationLoaderProps {
  onComplete: () => void;
}

const CodeGenerationLoader = ({ onComplete }: CodeGenerationLoaderProps) => {
  const [lines, setLines] = useState<string[]>([]);
  const codeLines = [
    "Creating coworking paradise in Koh Phangan...",
    "Adding beachside workspace features...",
    "Integrating island vibes and sunsets...",
    "Finalizing Flow Phangan experience..."
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < codeLines.length) {
        setLines(prev => [...prev, codeLines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 500);
      }
    }, 400);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="relative max-w-2xl w-full">
        <div className="bg-card p-6 rounded-lg shadow-lg border border-border">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="font-mono text-sm space-y-2">
            {lines.map((line, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 animate-fadeIn"
                style={{ animationDelay: `${index * 400}ms` }}
              >
                <span className="text-primary">{">"}</span>
                <span className="text-foreground">{line}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeGenerationLoader;