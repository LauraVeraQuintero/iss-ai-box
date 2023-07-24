import React from "react";

import {StepperBox} from "components/StepperBox";
import {FormValuesProvider, StepsProvider} from "contexts";

import {HOME_PAGE_ID, STEPS} from "./config";

const Home: React.FC = () => {
  return (
    <div id={HOME_PAGE_ID}>
      <FormValuesProvider>
        <StepsProvider>
          <StepperBox steps={STEPS} />
        </StepsProvider>
      </FormValuesProvider>
    </div>
  );
};

export default Home;
