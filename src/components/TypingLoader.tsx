import React, { useState, useEffect } from "react";

interface TypingLoaderProps {
  onComplete: () => void;
}

const TypingLoader = ({ onComplete }: TypingLoaderProps) => {
  const [text, setText] = useState("");
  const fullText = "Create a fun personal site for me";
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsComplete(true);
        setTimeout(onComplete, 1000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
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
          <div className="font-mono text-lg">
            <span className="text-primary">{">"}</span>{" "}
            <span className="text-foreground">{text}</span>
            <span
              className={`inline-block w-2 h-5 ml-1 bg-primary ${
                isComplete ? "animate-blink" : ""
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingLoader;