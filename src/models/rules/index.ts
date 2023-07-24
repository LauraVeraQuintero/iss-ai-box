type CameraResolution = {
  [resolution: string]: {
    [fps: string]: string;
  };
};

export type BitrateRules = {
  low: CameraResolution;
  high: CameraResolution;
  sMed: CameraResolution;
  pMed: CameraResolution;
};
