import React, {useState} from "react";
import {Stepper, Step} from "@mui/material";

import {StepLabel, Paper} from "./styles";

type StepContent = {
  label: string;
  content: React.ReactNode;
};

type StepperProps = {
  steps: StepContent[];
};

export const StepperBox: React.FC<StepperProps> = ({steps}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getStepContent = () => {
    return steps[activeStep].content;
  };

  return (
    <Paper variant="outlined">
      <Stepper activeStep={activeStep} orientation="horizontal">
        {steps.map((step, index) => (
          <Step key={index} completed={false}>
            <StepLabel
              onClick={() => {
                setActiveStep(index);
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
