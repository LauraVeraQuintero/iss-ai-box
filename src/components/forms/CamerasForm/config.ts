import {FormField} from "models/forms";

import {CameraFormValuesKeys} from "./type";

export const CAMERA_FORM_LABELS: Record<CameraFormValuesKeys, string> = {
  id: "Id",
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
  {
    label: CAMERA_FORM_LABELS.storageDays,
    name: "storageDays",
    required: true,
    type: "number",
  },
  {
    label: CAMERA_FORM_LABELS.motionDetection,
    name: "motionDetection",
    required: false,
    type: "boolean",
    info: "Select if VMS Motion Detection is being used, and if so, will it be used on the Recording stream, or do you want to create and 2nd dedicated stream for Motion Detection. Creating a secondary stream with a lower resolution (e.g. 320x240) for Motion Detection, will save considerable CPU resources on your recording server, while minimally increasing total bandwidth usage",
  },
  {
    label: CAMERA_FORM_LABELS.continuousRecording,
    name: "continuousRecording",
    required: false,
    type: "boolean",
  },
];

const FORM_FIELDS_2: Array<FormField<CameraFormValuesKeys>> = [
  {
    label: CAMERA_FORM_LABELS.resolution,
    name: "resolution",
    required: true,
    type: "select",
    options: [
      {label: "HD (1280 x 720px)", value: "HD (1280 x 720px)"},
      {label: "FHD (1920 x 10080px)", value: "FHD (1920 x 10080px)"},
      {label: "QHD (2560 x 1440px)", value: "QHD (2560 x 1440px)"},
      {label: "4K (3840 x 2160px)", value: "4K (3840 x 2160px)"},
      {label: "8K (7680x4320px))", value: "8K (7680x4320px)"},
    ],
  },
  {
    label: CAMERA_FORM_LABELS.codec,
    name: "codec",
    required: true,
    type: "select",
    options: [
      {label: "H.264", value: "H.264"},
      {label: "H.265", value: "H.265"},
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
      {label: "Lobby (Low movement)", value: "low"},
      {label: "Stairway (Medium movement)", value: "sMed"},
      {label: "Park (Medium movement)", value: "pMed"},
      {label: "Metro (High movement)", value: "high"},
      {label: "Unknown", value: "unknown"},
    ],
  },
  {
    label: CAMERA_FORM_LABELS.recordingStream,
    name: "recordingStream",
    required: true,
    type: "select",
    info: "By default, it will be assumed this stream will be used for Live Viewing as well.",
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
  {
    label: CAMERA_FORM_LABELS.bitrate,
    name: "bitrate",
    required: true,
    type: "number",
    info: "This field is automatically calculated based on the selected values for Scene Activity, Recording Stream and FPS",
  },
];

export const FIELDS_SECTIONS = [FORM_FIELDS_1, FORM_FIELDS_2];
