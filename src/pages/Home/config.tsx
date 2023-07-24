import React from "react";

import {ProjectInfoForm} from "components/forms/ProjectInfoForm";
import {AddOnsForm} from "components/forms/AddOnsForm";
import {FeaturesForm} from "components/forms/FeaturesForm";
import {Report} from "components/Report";
import {Cameras} from "components/sections/Cameras";

export const HOME_PAGE_ID = "home-page";

export const STEPS = [
  {
    label: "Project",
    content: <ProjectInfoForm />,
  },
  {
    label: "Cameras",
    content: <Cameras />,
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
