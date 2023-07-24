import React, {createContext, useContext, useState} from "react";

import {AddOnFormValues} from "components/forms/AddOnsForm/type";
import {CameraFormValues} from "components/forms/CamerasForm/type";
import {FeaturesFormValues} from "components/forms/FeaturesForm/types";
import {ProjectFormValues} from "components/forms/ProjectInfoForm/type";
import {defaultErrorAction} from "contexts/helpers";

export type FormValuesState = {
  projectFormValues?: ProjectFormValues;
  setProjectFormValues: React.Dispatch<React.SetStateAction<ProjectFormValues | undefined>>;
  cameras: CameraFormValues[];
  setCameras: React.Dispatch<React.SetStateAction<CameraFormValues[]>>;
  featuresFormValues?: FeaturesFormValues;
  setFeaturesFormValues: React.Dispatch<React.SetStateAction<FeaturesFormValues | undefined>>;
  addOnFormValues?: AddOnFormValues;
  setAddOnFormValues: React.Dispatch<React.SetStateAction<AddOnFormValues | undefined>>;
};

export const FormValuesContext = createContext<FormValuesState>({
  projectFormValues: undefined,
  setProjectFormValues: defaultErrorAction,
  cameras: [],
  setCameras: defaultErrorAction,
  featuresFormValues: undefined,
  setFeaturesFormValues: defaultErrorAction,
  addOnFormValues: undefined,
  setAddOnFormValues: defaultErrorAction,
});

export const FormValuesProvider: React.FC<React.PropsWithChildren> = ({children}) => {
  const [projectFormValues, setProjectFormValues] = useState<ProjectFormValues>();
  const [cameras, setCameras] = useState<CameraFormValues[]>([]);
  const [featuresFormValues, setFeaturesFormValues] = useState<FeaturesFormValues>();
  const [addOnFormValues, setAddOnFormValues] = useState<AddOnFormValues>();

  return (
    <FormValuesContext.Provider
      value={{
        projectFormValues,
        setProjectFormValues,
        cameras,
        setCameras,
        featuresFormValues,
        setFeaturesFormValues,
        addOnFormValues,
        setAddOnFormValues,
      }}>
      {children}
    </FormValuesContext.Provider>
  );
};

export const useFormValuesContext = () => useContext(FormValuesContext);
