import React from "react";

import ScrollToTop from "common/ScrollToTop";
import {StepperBox} from "components/StepperBox";
import {ProjectInfoForm} from "components/forms/ProjectInfoForm";
import {CamerasForm} from "components/forms/CamerasForm";
import {AddOnsForm} from "components/forms/AddOnsForm";
import {FeaturesForm} from "components/forms/FeaturesForm";
import {FormValuesProvider} from "contexts/FormValues";
import {Report} from "components/Report";

const Home: React.FC = () => {
  return (
    <FormValuesProvider>
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
            content: <Report />,
          },
        ]}
      />
      <ScrollToTop />
    </FormValuesProvider>
  );
};

export default Home;
