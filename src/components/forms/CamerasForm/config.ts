import {FormField} from "models/forms";

import {FormValuesKeys} from "./type";

const FORM_FIELDS_1: Array<FormField<FormValuesKeys>> = [
  {
    label: "Manufacturer / Model #",
    name: "manufacturer",
    required: true,
    type: "string",
    fullWidth: true,
  },
  {label: "Quantity", name: "cameraQuantity", required: true, type: "number"},
  {label: "Days of Storage", name: "storageDays", required: true, type: "number"},
  {label: "Motion Detection ", name: "motionDetection", required: true, type: "boolean"},
  {label: "Continuous Recording", name: "continuousRecording", required: true, type: "boolean"},
];

const FORM_FIELDS_2: Array<FormField<FormValuesKeys>> = [
  {label: "Resolution", name: "resolution", required: true, type: "string"},
  {
    label: "Codec",
    name: "codec",
    required: true,
    type: "select",
    options: [
      {label: "H.264", value: "H.264"},
      {label: "H.265 ", value: "H.265"},
    ],
  },
  {
    label: "FPS",
    name: "fps",
    required: true,
    type: "select",
    options: [
      {label: "1-5", value: "1-5"},
      {label: "10", value: "10"},
      {label: "15", value: "15"},
      {label: "20", value: "20"},
      {label: "25", value: "25"},
      {label: "30", value: "30"},
    ],
  },
  {
    label: "Scene Activity",
    name: "sceneActivity",
    required: true,
    type: "select",
    options: [
      {label: "Low (lobby)", value: "low"},
      {label: "Med (retail store)", value: "med"},
      {label: "High (Subway)", value: "high"},
    ],
  },
  {label: "Recording Stream", name: "recordingStream", required: true, type: "string"},
  {label: "Bitrate (Mbps)", name: "bitrate", required: true, type: "number"},
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
];
