import moment from "moment";

import {ProjectFormValues} from "./type";

export const getDefaultProjectFormValues = (formValues?: ProjectFormValues) => {
  return {
    projectName: formValues?.projectName ?? "",
    colleagueName: formValues?.colleagueName ?? "",
    location: formValues?.location ?? "",
    colleagueEmail: formValues?.colleagueEmail ?? "",
    colleaguePhone: formValues?.colleaguePhone ?? "",
    endUserName: formValues?.endUserName ?? "",
    endUserState: formValues?.endUserState ?? "",
    endUserContactName: formValues?.endUserContactName ?? "",
    endUserContactPhone: formValues?.endUserContactPhone ?? "",
    endUserEmail: formValues?.endUserEmail ?? "",
    projectManagerName: formValues?.projectManagerName ?? "",
    estimatorName: formValues?.estimatorName ?? "",
    vertical: formValues?.vertical ?? "",
    budget: formValues?.budget,
    dateNeeded: formValues?.dateNeeded ? moment(formValues.dateNeeded) : undefined,
  };
};
