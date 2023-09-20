export type CameraFormValues = {
  id?: string;
  manufacturer?: string;
  cameraQuantity?: number;
  motionDetection?: boolean;
  continuousRecording?: boolean;
  storageDays?: number;
  storageHours?: number;
  resolution?: string;
  codec?: string;
  fps?: string;
  sceneActivity?: string;
  recordingStream?: string;
  bitrate?: number;
};

export type CameraFormValuesKeys = keyof CameraFormValues;
