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
