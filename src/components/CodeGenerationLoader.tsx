import React, { useState, useEffect } from "react";

interface CodeGenerationLoaderProps {
  onComplete: () => void;
}

const CodeGenerationLoader = ({ onComplete }: CodeGenerationLoaderProps) => {
  const [columns, setColumns] = useState<string[]>([]);
  const matrixCharacters = "0123456789";
  
  useEffect(() => {
    // Create initial columns
    const numColumns = Math.floor(window.innerWidth / 20); // Adjust spacing between columns
    const initialColumns = Array(numColumns).fill('').map(() => 
      Array(Math.floor(Math.random() * 20))
        .fill(0)
        .map(() => matrixCharacters[Math.floor(Math.random() * matrixCharacters.length)])
        .join('')
    );
    setColumns(initialColumns);

    // Update columns periodically
    const interval = setInterval(() => {
      setColumns(prev => prev.map(column => {
        const shouldAdd = Math.random() > 0.5;
        if (shouldAdd) {
          return column + matrixCharacters[Math.floor(Math.random() * matrixCharacters.length)];
        }
        return column.slice(1);
      }));
    }, 50);

    // Complete after 2 seconds
    const timeout = setTimeout(onComplete, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-black overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 flex justify-around">
        {columns.map((column, i) => (
          <div
            key={i}
            className="text-primary/80 font-mono text-sm whitespace-pre animate-matrixRain"
            style={{
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 2}s`
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