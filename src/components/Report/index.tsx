import React from "react";

import {useFormValuesContext} from "contexts/FormValues";

export const Report: React.FC = () => {
  const {projectFormValues, cameraFormValues, featuresFormValues, addOnFormValues} =
    useFormValuesContext();

  return (
    <>
      {JSON.stringify(projectFormValues)} {JSON.stringify(cameraFormValues)}{" "}
      {JSON.stringify(featuresFormValues)} {JSON.stringify(addOnFormValues)}
    </>
  );
};
