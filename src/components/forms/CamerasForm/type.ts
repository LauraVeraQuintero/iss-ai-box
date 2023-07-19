export type CameraFormValues = {
  manufacturer?: string;
  cameraQuantity?: number;
  motionDetection?: boolean;
  continuousRecording?: boolean;
  storageDays?: number;
  resolution?: string;
  codec?: string;
  fps?: string;
  sceneActivity?: string;
  recordingStream?: string;
  bitrate?: number;
};

export type FormValuesKeys = keyof CameraFormValues;
