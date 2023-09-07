import {FormField} from "models/forms";

import {AddOnsFormValuesKeys} from "./type";

export const ADD_ONS_FORM_LABELS: Record<AddOnsFormValuesKeys, string> = {
  sma: "SMA",
};

export const FORM_FIELDS: Array<FormField<AddOnsFormValuesKeys>> = [
  {
    label: ADD_ONS_FORM_LABELS.sma,
    name: "sma",
    required: true,
    type: "select",
    options: [
      {label: "1 Year of SecurOS Guarantee Prime", value: "1 year"},
      {label: "2 Years of SecurOS Guarantee Prime", value: "2 years"},
      {label: "3 Years of SecurOS Guarantee Prime", value: "3 years"},
      {label: "5 Years of SecurOS Guarantee Prime", value: "5 years"},
    ],
  },
];
