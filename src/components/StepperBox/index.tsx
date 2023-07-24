import React from "react";
import {Stepper, Step} from "@mui/material";

import {useStepsContext} from "contexts";

import {StepLabel, Paper} from "./styles";

type StepContent = {
  label: string;
  content: React.ReactNode;
};

type StepperProps = {
  steps: StepContent[];
};

export const StepperBox: React.FC<StepperProps> = ({steps}) => {
  const {activeStep, setActiveStep, ready, completed} = useStepsContext();

  const getStepContent = () => {
    return steps[activeStep].content;
  };

  const handleStep = (index: number) => {
    if (!ready(index)) return;

    setActiveStep(index);
  };

  return (
    <Paper variant="elevation">
      <Stepper activeStep={activeStep} orientation="horizontal">
        {steps.map((step, index) => (
          <Step key={index} completed={completed(index)} disabled={!ready(index)}>
            <StepLabel
              onClick={() => {
                handleStep(index);
              }}>
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>{getStepContent()}</div>
    </Paper>
  );
};
