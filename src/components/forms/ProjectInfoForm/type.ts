import * as moment from "moment/moment";

export type ProjectFormValues = {
  projectName?: string;
  colleagueName?: string;
  location?: string;
  colleagueEmail?: string;
  colleaguePhone?: string;
  endUserName?: string;
  endUserState?: string;
  endUserContactName?: string;
  endUserContactPhone?: string;
  endUserEmail?: string;
  projectManagerName?: string;
  estimatorName?: string;
  vertical?: string;
  budget?: number;
  dateNeeded?: moment.Moment;
};

export type ProjectFormValuesKeys = keyof ProjectFormValues;
