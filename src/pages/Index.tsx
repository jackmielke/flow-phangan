import React, { useState } from "react";
import TypingLoader from "../components/TypingLoader";
import MainContent from "../components/MainContent";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return isLoading ? (
    <TypingLoader onComplete={() => setIsLoading(false)} />
  ) : (
    <MainContent />
  );
};

export default Index;