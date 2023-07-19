import {FormField} from "models/forms";

import {CameraFormValuesKeys} from "./type";

export const CAMERA_FORM_LABELS: Record<CameraFormValuesKeys, string> = {
  manufacturer: "Manufacturer / Model #",
  cameraQuantity: "Quantity",
  motionDetection: "Motion Detection",
  continuousRecording: "Continuous Recording",
  storageDays: "Days of Storage",
  resolution: "Resolution",
  codec: "Codec",
  fps: "FPS",
  sceneActivity: "Scene Activity",
  recordingStream: "Recording Stream",
  bitrate: "Bitrate (Mbps)",
};

const FORM_FIELDS_1: Array<FormField<CameraFormValuesKeys>> = [
  {
    label: CAMERA_FORM_LABELS.manufacturer,
    name: "manufacturer",
    required: true,
    type: "string",
    fullWidth: true,
  },
  {
    label: CAMERA_FORM_LABELS.cameraQuantity,
    name: "cameraQuantity",
    required: true,
    type: "number",
  },
  {label: CAMERA_FORM_LABELS.storageDays, name: "storageDays", required: true, type: "number"},
  {
    label: CAMERA_FORM_LABELS.motionDetection,
    name: "motionDetection",
    required: true,
    type: "boolean",
  },
  {
    label: CAMERA_FORM_LABELS.continuousRecording,
    name: "continuousRecording",
    required: true,
    type: "boolean",
  },
];

const FORM_FIELDS_2: Array<FormField<CameraFormValuesKeys>> = [
  {label: CAMERA_FORM_LABELS.resolution, name: "resolution", required: true, type: "string"},
  {
    label: CAMERA_FORM_LABELS.codec,
    name: "codec",
    required: true,
    type: "select",
    options: [
      {label: "H.264", value: "H.264"},
      {label: "H.265 ", value: "H.265"},
    ],
  },
  {
    label: CAMERA_FORM_LABELS.fps,
    name: "fps",
    required: true,
    type: "select",
    options: [
      {label: "1", value: 1},
      {label: "2", value: 2},
      {label: "3", value: 3},
      {label: "4", value: 4},
      {label: "5", value: 5},
      {label: "10", value: 10},
      {label: "15", value: 15},
      {label: "20", value: 20},
      {label: "25", value: 25},
      {label: "30", value: 30},
    ],
  },
  {
    label: CAMERA_FORM_LABELS.sceneActivity,
    name: "sceneActivity",
    required: true,
    type: "select",
    options: [
      {label: "Low (lobby)", value: "low"},
      {label: "Med (retail store)", value: "med"},
      {label: "High (Subway)", value: "high"},
      {label: "Unknown", value: "unknown"},
    ],
  },
  {
    label: CAMERA_FORM_LABELS.recordingStream,
    name: "recordingStream",
    required: true,
    type: "select",
    options: [
      {label: "8.3 MP (3840x2160)", value: "8.3 MP (3840x2160)"},
      {label: "5 MP (2560x1920)", value: "5 MP (2560x1920)"},
      {label: "3.1 MP (2048x1536)", value: "3.1 MP (2048x1536)"},
      {label: "1080P (1920x1080)", value: "1080P (1920x1080)"},
      {label: "SXGA (1280x1024)", value: "SXGA (1280x1024)"},
      {label: "720P (1280x720)", value: "720P (1280x720)"},
      {label: "XGA (1024x768)", value: "XGA (1024x768)"},
      {label: "SVGA (800x600)", value: "SVGA (800x600)"},
      {label: "VGA (640x480)", value: "VGA (640x480)"},
      {label: "CIF (320x240)", value: "CIF (320x240)"},
      {label: "Unknown", value: "unknown"},
    ],
  },
  {label: CAMERA_FORM_LABELS.bitrate, name: "bitrate", required: true, type: "number"},
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
