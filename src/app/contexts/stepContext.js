"use client";

import { useState, createContext, useContext, useRef } from "react";

const StepContext = createContext();

const StepProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(-1);
  const [optionClicked, setOptionClicked] = useState(false);
  const [askFeedback, setAskFeedback] = useState(false);

  return (
    <StepContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        optionClicked,
        setOptionClicked,
        askFeedback,
        setAskFeedback,
      }}
    >
      {children}
    </StepContext.Provider>
  );
};

const useStep = () => useContext(StepContext);

export { StepProvider, useStep };
