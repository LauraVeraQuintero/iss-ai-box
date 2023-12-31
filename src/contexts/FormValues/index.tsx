import React, {createContext, useContext, useState} from "react";

import {AddOnFormValues} from "components/forms/AddOnsForm/type";
import {CameraFormValues} from "components/forms/CamerasForm/type";
import {FeaturesFormValues} from "components/forms/FeaturesForm/types";
import {ProjectFormValues} from "components/forms/ProjectInfoForm/type";
import {defaultErrorAction} from "contexts/helpers";
import {Server} from "models/Server";

export type FeaturesCalculation = {
  totalPrice: number;
  points: number;
  storage: number;
};

export type FormValuesState = {
  projectFormValues?: ProjectFormValues;
  setProjectFormValues: React.Dispatch<React.SetStateAction<ProjectFormValues | undefined>>;
  cameras: CameraFormValues[];
  setCameras: React.Dispatch<React.SetStateAction<CameraFormValues[]>>;
  camerasCount: number;
  setCamerasCount: React.Dispatch<React.SetStateAction<number>>; // Función para actualizar serverCount
  stepped: boolean;
  setStepped: React.Dispatch<React.SetStateAction<boolean>>;
  featuresFormValues?: FeaturesFormValues;
  setFeaturesFormValues: React.Dispatch<React.SetStateAction<FeaturesFormValues | undefined>>;
  addOnFormValues?: AddOnFormValues;
  setAddOnFormValues: React.Dispatch<React.SetStateAction<AddOnFormValues | undefined>>;
  featuresCalculation?: FeaturesCalculation;
  setFeaturesCalculation: React.Dispatch<React.SetStateAction<FeaturesCalculation | undefined>>;
  server?: Server;
  setServer: React.Dispatch<React.SetStateAction<Server | undefined>>;
  serverCount: number;
  setServerCount: React.Dispatch<React.SetStateAction<number>>; // Función para actualizar serverCount
};

export const FormValuesContext = createContext<FormValuesState>({
  projectFormValues: undefined,
  setProjectFormValues: defaultErrorAction,
  cameras: [],
  setCameras: defaultErrorAction,
  camerasCount: 0,
  setCamerasCount: defaultErrorAction,
  stepped: false,
  setStepped: defaultErrorAction,
  featuresFormValues: undefined,
  setFeaturesFormValues: defaultErrorAction,
  addOnFormValues: undefined,
  setAddOnFormValues: defaultErrorAction,
  featuresCalculation: undefined,
  setFeaturesCalculation: defaultErrorAction,
  server: undefined,
  setServer: defaultErrorAction,
  serverCount: 0,
  setServerCount: defaultErrorAction,
});

export const FormValuesProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [projectFormValues, setProjectFormValues] = useState<ProjectFormValues>();
  const [cameras, setCameras] = useState<CameraFormValues[]>([]);
  const [camerasCount, setCamerasCount] = useState<number>(0); // Inicializar serverCount
  const [stepped, setStepped] = useState<boolean>(false);
  const [featuresFormValues, setFeaturesFormValues] = useState<FeaturesFormValues>();
  const [addOnFormValues, setAddOnFormValues] = useState<AddOnFormValues>();
  const [featuresCalculation, setFeaturesCalculation] = useState<FeaturesCalculation>();
  const [server, setServer] = useState<Server>();
  const [serverCount, setServerCount] = useState<number>(0); // Inicializar serverCount

  return (
    <FormValuesContext.Provider
      value={{
        projectFormValues,
        setProjectFormValues,
        cameras,
        setCameras,
        camerasCount, // Agregar camerasCount al contexto
        setCamerasCount, // Agregar setCamerasCount al contexto
        stepped,
        setStepped,
        featuresFormValues,
        setFeaturesFormValues,
        addOnFormValues,
        setAddOnFormValues,
        featuresCalculation,
        setFeaturesCalculation,
        server,
        setServer,
        serverCount, // Agregar serverCount al contexto
        setServerCount, // Agregar setServerCount al contexto
      }}>
      {children}
    </FormValuesContext.Provider>
  );
};


export const useFormValuesContext = () => useContext(FormValuesContext);
