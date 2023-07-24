export type CameraFormValues = {
  manufacturer?: string;
  cameraQuantity?: number;
  motionDetection?: boolean;
  continuousRecording?: boolean;
  storageDays?: number;
  resolution?: string;
  codec?: string;
  fps?: number;
  sceneActivity?: string;
  recordingStream?: string;
  bitrate?: number;
};

export type CameraFormValuesKeys = keyof CameraFormValues;
