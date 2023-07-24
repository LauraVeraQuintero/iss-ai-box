type CameraResolution = {
  [resolution: string]: {
    [fps: string]: string;
  };
};

type VideoQuality = {
  low: CameraResolution;
  high: CameraResolution;
  sMed: CameraResolution;
  pMed: CameraResolution;
};

export type BitrateRules = {
  rules: VideoQuality;
};
