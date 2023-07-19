import React, {createContext, FC, useContext, useState} from "react";

import {defaultErrorAction} from "contexts/helpers";
import {useFormValuesContext} from "contexts/FormValues";

export type StepsState = {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  ready: (step: number) => boolean;
  completed: (step: number) => boolean;
};

export const StepsContext = createContext<StepsState>({
  activeStep: 0,
  setActiveStep: defaultErrorAction,
  ready: defaultErrorAction,
  completed: defaultErrorAction,
});

export const StepsProvider: FC<React.PropsWithChildren> = ({children}) => {
  const {projectFormValues, cameraFormValues, featuresFormValues, addOnFormValues} =
    useFormValuesContext();
  const [activeStep, setActiveStep] = useState<number>(0);

  const ready = (step: number) => {
    switch (step) {
      case 0:
        return true;
      case 1:
        return projectFormValues !== undefined;
      case 2:
        return cameraFormValues !== undefined;
      case 3:
        return featuresFormValues !== undefined;
      case 4:
        return addOnFormValues !== undefined;
    }
    return false;
  };

  const completed = (step: number) => {
    switch (step) {
      case 0:
        return projectFormValues !== undefined;
      case 1:
        return cameraFormValues !== undefined;
      case 2:
        return featuresFormValues !== undefined;
      case 3:
        return addOnFormValues !== undefined;
      case 4:
        // TODO: Define this logic
        return false;
    }
    return false;
  };

  return (
    <StepsContext.Provider
      value={{
        activeStep,
        setActiveStep,
        ready,
        completed,
      }}>
      {children}
    </StepsContext.Provider>
  );
};

export const useStepsContext = () => useContext(StepsContext);
