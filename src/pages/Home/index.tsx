import React from "react";

import ScrollToTop from "common/ScrollToTop";
import {StepperBox} from "components/StepperBox";
import {ProjectInfoForm} from "components/forms/ProjectInfoForm";
import {CamerasForm} from "components/forms/CamerasForm";
const Home: React.FC = () => {
  return (
    <div>
      <StepperBox
        steps={[
          {
            label: "Project Information",
            content: <ProjectInfoForm />,
          },
          {
            label: "Camera Information",
            content: <CamerasForm />,
          },
          {
            label: "Features",
            content: <p>Content for Step 3</p>,
          },
          {
            label: "Add ons",
            content: <p>Content for Step 4</p>,
          },
          {
            label: "Report",
            content: <p>Content for Step 5</p>,
          },
        ]}
      />
      <ScrollToTop />
    </div>
  );
};

export default Home;
