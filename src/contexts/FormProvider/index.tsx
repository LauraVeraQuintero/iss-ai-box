import React, {createContext, useContext, useState} from "react";

import {AddOnFormValues} from "components/forms/AddOnsForm/type";
import {CameraFormValues} from "components/forms/CamerasForm/type";
import {FeaturesFormValues} from "components/forms/FeaturesForm/types";
import {ProjectFormValues} from "components/forms/ProjectInfoForm/type";
import {defaultErrorAction} from "contexts/helpers";

export type FormState = {
  projectFormValues?: ProjectFormValues;
  setProjectFormValues: React.Dispatch<React.SetStateAction<ProjectFormValues | undefined>>;
  cameraFormValues?: CameraFormValues;
  setCameraFormValues: React.Dispatch<React.SetStateAction<CameraFormValues | undefined>>;
  featuresFormValues?: FeaturesFormValues;
  setFeaturesFormValues: React.Dispatch<React.SetStateAction<FeaturesFormValues | undefined>>;
  addOnFormValues?: AddOnFormValues;
  setAddOnFormValues: React.Dispatch<React.SetStateAction<AddOnFormValues | undefined>>;
};

export const FormContext = createContext<FormState>({
  projectFormValues: undefined,
  setProjectFormValues: defaultErrorAction,
  cameraFormValues: undefined,
  setCameraFormValues: defaultErrorAction,
  featuresFormValues: undefined,
  setFeaturesFormValues: defaultErrorAction,
  addOnFormValues: undefined,
  setAddOnFormValues: defaultErrorAction,
});

export const FormProvider: React.FC<React.PropsWithChildren> = ({children}) => {
  const [projectFormValues, setProjectFormValues] = useState<ProjectFormValues>();
  const [cameraFormValues, setCameraFormValues] = useState<CameraFormValues>();
  const [featuresFormValues, setFeaturesFormValues] = useState<FeaturesFormValues>();
  const [addOnFormValues, setAddOnFormValues] = useState<AddOnFormValues>();

  console.log("FormContext", {
    projectFormValues,
    cameraFormValues,
    featuresFormValues,
    addOnFormValues,
  });

  return (
    <FormContext.Provider
      value={{
        projectFormValues,
        setProjectFormValues,
        cameraFormValues,
        setCameraFormValues,
        featuresFormValues,
        setFeaturesFormValues,
        addOnFormValues,
        setAddOnFormValues,
      }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
