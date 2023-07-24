import React from "react";

import {StepperBox} from "components/StepperBox";
import {FormValuesProvider, StepsProvider} from "contexts";

import {STEPS} from "./config";

const Home: React.FC = () => {
  return (
    <FormValuesProvider>
      <StepsProvider>
        <StepperBox steps={STEPS} />
      </StepsProvider>
    </FormValuesProvider>
  );
};

export default Home;
