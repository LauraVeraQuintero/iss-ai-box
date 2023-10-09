import * as React from "react";
import {ProjectFormValues} from "components/forms/ProjectInfoForm/type";
import {CameraFormValues} from "components/forms/CamerasForm/type";

export type FormField<T> = {
  label: string;
  name: T;
  defaultValue?: string;
  description?: string;
  required: boolean;
  type: React.InputHTMLAttributes<unknown>["type"];
  fullWidth?: boolean;
  options?: Option[];
  info?: string;
  customError?: string;
};

export type FormFieldValues = ProjectFormValues | CameraFormValues;

export type Option = {
  value: string | number;
  label: string;
};
