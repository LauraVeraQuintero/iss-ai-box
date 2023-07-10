import * as React from "react";

export type FormField<T> = {
  label: string;
  name: T;
  required: boolean;
  type: React.InputHTMLAttributes<unknown>["type"];
};

export type FormValues = {
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

export type FormValuesKeys = keyof FormValues;
