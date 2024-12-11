import React, { useState, useEffect } from "react";

interface CodeGenerationLoaderProps {
  onComplete: () => void;
}

const CodeGenerationLoader = ({ onComplete }: CodeGenerationLoaderProps) => {
  const [columns, setColumns] = useState<string[]>([]);
  const matrixCharacters = "0123456789";
  
  useEffect(() => {
    // Create initial columns with more density
    const numColumns = Math.floor(window.innerWidth / 15); // More columns for denser effect
    const initialColumns = Array(numColumns).fill('').map(() => 
      Array(Math.floor(Math.random() * 30) + 10) // Longer initial strings
        .fill(0)
        .map(() => matrixCharacters[Math.floor(Math.random() * matrixCharacters.length)])
        .join('')
    );
    setColumns(initialColumns);

    // Update columns periodically with smoother transitions
    const interval = setInterval(() => {
      setColumns(prev => prev.map(column => {
        if (column.length > 50) return column.slice(1); // Keep maximum length
        return Math.random() > 0.3 ? // More frequent updates
          column + matrixCharacters[Math.floor(Math.random() * matrixCharacters.length)] :
          column.slice(1);
      }));
    }, 30); // Faster updates for smoother animation

    // Complete after 2 seconds
    const timeout = setTimeout(onComplete, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 flex justify-around">
        {columns.map((column, i) => (
          <div
            key={i}
            className="text-primary/80 font-mono text-sm whitespace-pre animate-matrixRain"
            style={{
              animationDelay: `${Math.random() * 1.5}s`, // Shorter delay range
              animationDuration: `${1.5 + Math.random()}s`, // More consistent duration
              opacity: 0.8 + Math.random() * 0.2 // Slightly random opacity
            }}
          >
            {column}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodeGenerationLoader;