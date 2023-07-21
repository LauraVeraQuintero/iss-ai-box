import React from "react";

import {ProjectInfoForm} from "components/forms/ProjectInfoForm";
import {CamerasForm} from "components/forms/CamerasForm";
import {AddOnsForm} from "components/forms/AddOnsForm";
import {FeaturesForm} from "components/forms/FeaturesForm";
import {Report} from "components/Report";

export const STEPS = [
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
];
