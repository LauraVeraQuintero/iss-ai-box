export type ProjectFormValues = {
  projectName: string;
  colleagueName: string;
  location: string;
  colleagueEmail: string;
  colleaguePhone: string;
  endUserName: string;
  endUserState: string;
  endUserContactName: string;
  endUserContactPhone: string;
  endUserEmail: string;
  projectManagerName: string;
  estimatorName: string;
  vertical: boolean;
  budget: number;
  dateNeeded: Date;
};

export type FormValuesKeys = keyof ProjectFormValues;
