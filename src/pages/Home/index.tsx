import React from "react";

import ScrollToTop from "common/ScrollToTop";
import {StepperBox} from "components/StepperBox";
import {FormExample} from "components/forms/ProjectInfoForm";
const Home: React.FC = () => {
  return (
    <div>
      <StepperBox
        steps={[
          {
            label: "Step 1",
            content: <FormExample />,
          },
          {
            label: "Step 2",
            content: <p>Content for Step 2</p>,
          },
          {
            label: "Step 3",
            content: <p>Content for Step 3</p>,
          },
          {
            label: "Step 4",
            content: <p>Content for Step 4</p>,
          },
          {
            label: "Step 5",
            content: <p>Content for Step 5</p>,
          },
        ]}
      />
      <ScrollToTop />
    </div>
  );
};

export default Home;
