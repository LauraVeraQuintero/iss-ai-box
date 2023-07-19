import {FormField} from "models/forms";

import {AddOnsFormValuesKeys} from "./type";

export const ADD_ONS_FORM_LABELS: Record<AddOnsFormValuesKeys, string> = {
  sma: "SMA",
  warranty: "Warranty",
};

const FORM_FIELDS_1: Array<FormField<AddOnsFormValuesKeys>> = [
  {
    label: ADD_ONS_FORM_LABELS.sma,
    name: "sma",
    required: true,
    type: "select",
    defaultValue: "1 year",
    options: [
      {label: "Auto populate 1 year (mandatory)", value: "1 year"},
      {label: "3 years", value: "3 years"},
      {label: "5 years", value: "5 years"},
    ],
  },
  {
    label: ADD_ONS_FORM_LABELS.warranty,
    name: "warranty",
    required: true,
    type: "boolean",
    description: "5 years except for NUC's (2 yrs)",
  },
];

export const FIELDS_SECTIONS = [
  {
    sectionLabel: "",
    fields: FORM_FIELDS_1,
  },
];
