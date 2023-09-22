export type ServerType = "MICRO" | "Small" | "Medium" | "Big";

export type Server = {
  serverType: ServerType;
  partNumber: string;
  description?: string;
  maxKernels: number;
  msrp: number;
  partnerDiscount: number;
  maxStorage: number;
};
