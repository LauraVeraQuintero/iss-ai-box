import {ProjectFormValuesKeys} from "./type";
import {FormField} from "models/forms";

export const PROJECT_FORM_LABELS: Record<ProjectFormValuesKeys, string> = {
  projectName: "Project Name",
  colleagueName: "Colleague Name",
  location: "CTC Location",
  colleaguePhone: "Colleague Phone",
  colleagueEmail: "Colleague Email",
  endUserName: "End User Name",
  endUserState: "End User State",
  endUserContactName: "End User Contact Name",
  endUserContactPhone: "End User Contact Phone",
  endUserEmail: "End User Email",
  projectManagerName: "Project Manager Name",
  estimatorName: "Estimator Name",
  vertical: "Vertical",
  budget: "Budget",
  dateNeeded: "Date Needed By",
};

const FORM_FIELDS_1: Array<FormField<ProjectFormValuesKeys>> = [
  {label: PROJECT_FORM_LABELS.projectName, name: "projectName", required: true, type: "string"},
  {
    label: PROJECT_FORM_LABELS.colleagueEmail,
    name: "colleagueName",
    required: true,
    type: "string",
  },
  {label: PROJECT_FORM_LABELS.location, name: "location", required: true, type: "string"},
  {
    label: PROJECT_FORM_LABELS.colleaguePhone,
    name: "colleaguePhone",
    required: true,
    type: "string",
  },
  {
    label: PROJECT_FORM_LABELS.colleagueEmail,
    name: "colleagueEmail",
    required: true,
    type: "email",
    fullWidth: true,
  },
];

const FORM_FIELDS_2: Array<FormField<ProjectFormValuesKeys>> = [
  {label: PROJECT_FORM_LABELS.endUserName, name: "endUserName", required: true, type: "string"},
  {
    label: PROJECT_FORM_LABELS.endUserState,
    name: "endUserState",
    required: true,
    type: "string",
  },
  {
    label: PROJECT_FORM_LABELS.endUserContactName,
    name: "endUserContactName",
    required: true,
    type: "string",
  },
  {
    label: PROJECT_FORM_LABELS.endUserContactPhone,
    name: "endUserContactPhone",
    required: true,
    type: "string",
  },
  {
    label: PROJECT_FORM_LABELS.endUserEmail,
    name: "endUserEmail",
    required: true,
    type: "email",
    fullWidth: true,
  },
];

const FORM_FIELDS_3: Array<FormField<ProjectFormValuesKeys>> = [
  {
    label: PROJECT_FORM_LABELS.projectManagerName,
    name: "projectManagerName",
    required: true,
    type: "string",
  },
  {
    label: PROJECT_FORM_LABELS.estimatorName,
    name: "estimatorName",
    required: true,
    type: "string",
  },
  {label: PROJECT_FORM_LABELS.vertical, name: "vertical", required: true, type: "string"},
];

const FORM_FIELDS_4: Array<FormField<ProjectFormValuesKeys>> = [
  {label: PROJECT_FORM_LABELS.budget, name: "budget", required: true, type: "number"},
  {label: PROJECT_FORM_LABELS.dateNeeded, name: "dateNeeded", required: true, type: "date"},
];

export const FIELDS_SECTIONS = [FORM_FIELDS_1, FORM_FIELDS_2, FORM_FIELDS_3, FORM_FIELDS_4];
