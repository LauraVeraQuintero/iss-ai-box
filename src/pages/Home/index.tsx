import React from "react";

import ScrollToTop from "common/ScrollToTop";
import {StepperBox} from "components/StepperBox";
import {ProjectInfoForm} from "components/forms/ProjectInfoForm";
import {CamerasForm} from "components/forms/CamerasForm";
import {AddOnsForm} from "components/forms/AddOnsForm";
import {FeaturesForm} from "../../components/forms/FeaturesForm";

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
            content: <FeaturesForm />,
          },
          {
            label: "Add ons",
            content: <AddOnsForm />,
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
