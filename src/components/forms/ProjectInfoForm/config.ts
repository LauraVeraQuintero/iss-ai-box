import {FormField, FormValuesKeys} from "./type";

const FORM_FIELDS_1: Array<FormField<FormValuesKeys>> = [
  {label: "Project Name", name: "projectName", required: true, type: "string"},
  {label: "Colleague Name", name: "colleagueName", required: true, type: "string"},
  {label: "CTC Location", name: "location", required: true, type: "string"},
  {label: "Colleague Phone", name: "colleaguePhone", required: true, type: "string"},
  {
    label: "Colleague Email",
    name: "colleagueEmail",
    required: true,
    type: "string",
    fullWidth: true,
  },
];

const FORM_FIELDS_2: Array<FormField<FormValuesKeys>> = [
  {label: "End User Name", name: "endUserName", required: true, type: "string"},
  {label: "End User State", name: "endUserState", required: true, type: "string"},
  {label: "End User Contact Name", name: "endUserContactName", required: true, type: "string"},
  {label: "End User Contact Phone", name: "endUserContactPhone", required: true, type: "string"},
  {label: "End User Email", name: "endUserEmail", required: true, type: "string", fullWidth: true},
];

const FORM_FIELDS_3: Array<FormField<FormValuesKeys>> = [
  {label: "Project Manager Name", name: "projectManagerName", required: true, type: "string"},
  {label: "Estimator Name", name: "estimatorName", required: true, type: "string"},
  {label: "Vertical", name: "vertical", required: true, type: "boolean"},
];

const FORM_FIELDS_4: Array<FormField<FormValuesKeys>> = [
  {label: "Budget (Drop Down)", name: "budget", required: true, type: "number"},
  {label: "Date Needed By", name: "dateNeeded", required: true, type: "date"},
];

export const FIELDS_SECTIONS = [
  {
    sectionLabel: "Section 1",
    fields: FORM_FIELDS_1,
  },
  {
    sectionLabel: "Section 2",
    fields: FORM_FIELDS_2,
  },
  {
    sectionLabel: "Section 3",
    fields: FORM_FIELDS_3,
  },
  {
    sectionLabel: "Section 4",
    fields: FORM_FIELDS_4,
  },
];
