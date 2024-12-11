import React, { useState } from "react";
import TypingLoader from "../components/TypingLoader";
import CodeGenerationLoader from "../components/CodeGenerationLoader";
import MainContent from "../components/MainContent";

const Index = () => {
  const [stage, setStage] = useState<"typing" | "generating" | "complete">("typing");

  const handleTypingComplete = () => {
    setStage("generating");
  };

  const handleGenerationComplete = () => {
    setStage("complete");
  };

  if (stage === "typing") {
    return <TypingLoader onComplete={handleTypingComplete} />;
  }

  if (stage === "generating") {
    return <CodeGenerationLoader onComplete={handleGenerationComplete} />;
  }

  return <MainContent />;
};

export default Index;