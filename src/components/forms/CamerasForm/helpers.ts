import {CameraFormValues} from "./type";

export const getDefaultCameraFormValues = (formValues?: CameraFormValues) => {
  return {
    manufacturer: formValues?.manufacturer ?? "",
    cameraQuantity: formValues?.cameraQuantity,
    motionDetection: Boolean(formValues?.motionDetection),
    continuousRecording: Boolean(formValues?.continuousRecording),
    storageDays: formValues?.storageDays,
    resolution: formValues?.resolution ?? "",
    codec: formValues?.codec ?? "",
    fps: formValues?.fps ?? "",
    sceneActivity: formValues?.sceneActivity ?? "",
    recordingStream: formValues?.recordingStream ?? "",
    bitrate: formValues?.bitrate ?? 0,
  };
};

export const hourOptions = Array.from({length: 24}, (_, index) => ({
  label: `${index + 1} hour${index !== 0 ? "s" : ""}`,
  value: index + 1,
}));

export const daysOptions = Array.from({length: 30}, (_, index) => ({
  label: `${index + 1} day${index !== 0 ? "s" : ""}`,
  value: index + 1,
}));