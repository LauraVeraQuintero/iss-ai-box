import {FormField} from "models/forms";

import {FormValuesKeys} from "./type";

const FORM_FIELDS_1: Array<FormField<FormValuesKeys>> = [
  {
    label: "SMA",
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
    label: "Warranty",
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
