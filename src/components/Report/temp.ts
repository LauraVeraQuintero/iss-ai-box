import {ProjectFormValues} from "../forms/ProjectInfoForm/type";
import {CameraFormValues} from "../forms/CamerasForm/type";
import {ProductItem} from "../../models/ProductItem";
import {AddOnFormValues} from "../forms/AddOnsForm/type";
import moment from "moment";

export const PROJECT_INFO: ProjectFormValues = {
  projectName: "Sample Project X",
  colleagueName: "John Doe",
  location: "New York City",
  colleagueEmail: "john.doe@example.com",
  colleaguePhone: "(555) 123-4567",
  endUserName: "ABC Corporation",
  endUserState: "California",
  endUserContactName: "Jane Smith",
  endUserContactPhone: "(555) 987-6543",
  endUserEmail: "jane.smith@example.com",
  projectManagerName: "Sarah Johnson",
  estimatorName: "Michael Brown",
  vertical: "Vertical example",
  budget: 500000, // Sample budget value
  dateNeeded: moment(), // Sample date value
};

export const CAMERA_INFO: CameraFormValues = {
  manufacturer: "SampleCam",
  cameraQuantity: 5,
  motionDetection: true,
  continuousRecording: false,
  storageDays: 30,
  resolution: "1080p",
  codec: "H.264",
  fps: 30,
  sceneActivity: "Office Space",
  recordingStream: "Main Stream",
  bitrate: 2000,
};

export const FEATURES_INFO: ProductItem[] = [
  {
    id: 3,
    name: "LPR (Low Speed) - NA - Make/Model/Color",
    points: 2,
    partId: "ABC-123",
    price: 500.0,
  },
  {
    id: 4,
    name: "LPR (Low Speed) - NA - Make/Model/Color",
    points: 4,
    partId: "ABC-123",
    price: 500.0,
  },
  {
    id: 5,
    name: "Cargo - Container Number Recognition",
    points: 1,
    partId: "ABC-123",
    price: 500.0,
  },
  {
    id: 6,
    name: "Intrusion Detection",
    points: 0.75,
    partId: "IF-TK-OPEN",
    price: 385.0,
  },
];

export const ADD_ONS_INFO: AddOnFormValues = {
  sma: "2 years",
  warranty: true,
};
