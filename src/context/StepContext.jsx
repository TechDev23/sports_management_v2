// StepContext.js
import { createContext, useContext, useState } from "react";

const StepContext = createContext();

export const useStepContext = () => useContext(StepContext);

export const StepProvider = ( children ) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);

  const setStepState = (step, isLast, isFirst) => {
    setActiveStep(step);
    setIsLastStep(isLast);
    setIsFirstStep(isFirst);
  };

  return (
    <StepContext.Provider
      value={{ activeStep, isLastStep, isFirstStep, setStepState }}
    >
      {children.children}
    </StepContext.Provider>
  );
};
