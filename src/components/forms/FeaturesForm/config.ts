import {ProductItem} from "models/ProductItem";
import {GridColDef, GridRenderCellParams} from "@mui/x-data-grid";
import {formatNumberAsCurrency} from "./helpers";

const priceFormat = (params: GridRenderCellParams) => {
  const price: string = params.value;

  return formatNumberAsCurrency(Number(price));
};

export const SERVER = {
  server1: {
    name: "505 Series Server - Small",
    cores: 12,
  },
  server2: {
    name: "535 Series Server - Medium",
    cores: 20,
  },
  server3: {
    name: "575 Series Server - Large",
    cores: 40,
  },
};

export const TABLE_COLUMNS: GridColDef[] = [
  {field: "id", headerName: "ID", width: 80, sortable: false},
  {field: "name", headerName: "Name", width: 400, sortable: true},
  {field: "partId", headerName: "Part #", width: 150, sortable: true},
  {field: "price", headerName: "Price", width: 250, sortable: true, renderCell: priceFormat},
];

export const ITEMS: ProductItem[] = [
  {
    id: 1,
    name: "LPR (Low Speed) - NA",
    points: 2,
    partId: "ABC-123",
    price: 500.0,
  },
  {
    id: 2,
    name: "LPR (High Speed) - NA",
    points: 4,
    partId: "ABC-123",
    price: 500.0,
  },
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
  {
    id: 7,
    name: "Object Counting",
    points: 0.75,
    partId: "IF-TK-OPEN",
    price: 385.0,
  },
  {
    id: 8,
    name: "Loitering",
    points: 0.75,
    partId: "IF-TK-OPEN",
    price: 385.0,
  },
  {
    id: 9,
    name: "Dwell Time",
    points: 0.75,
    partId: "IF-TK-OPEN",
    price: 385.0,
  },
  {
    id: 10,
    name: "Line Crossing",
    points: 0.75,
    partId: "IF-TK-OPEN",
    price: 385.0,
  },
  {
    id: 11,
    name: "Wrong Direction",
    points: 0.75,
    partId: "IF-TK-OPEN",
    price: 385.0,
  },
  {
    id: 12,
    name: "Crowd Detection",
    points: 0.75,
    partId: "IF-TK-OPEN",
    price: 385.0,
  },
  {
    id: 13,
    name: "Object Left Behind",
    points: 0.75,
    partId: "IF-TK-OPEN",
    price: 385.0,
  },
  {
    id: 14,
    name: "Person Running",
    points: 0.75,
    partId: "IF-TK-OPEN",
    price: 385.0,
  },
  {
    id: 15,
    name: "FaceX (Controlled)",
    points: 2,
    partId: "ABC-123",
    price: 500.0,
  },
  {
    id: 16,
    name: "FaceX (Crowd)",
    points: 3,
    partId: "ABC-123",
    price: 500.0,
  },
  {
    id: 17,
    name: "Face Mask",
    points: 2,
    partId: "IF-MSK-1",
    price: 696.5,
  },
  {
    id: 18,
    name: "Helmet Detection",
    points: 2,
    partId: "IF-TK-HEL",
    price: 2450.0,
  },
  {
    id: 19,
    name: "Smoke Detector",
    points: 2,
    partId: "ABC-123",
    price: 500.0,
  },
  {
    id: 20,
    name: "Occupancy Counter Module",
    points: 4,
    partId: "ABC-123",
    price: 500.0,
  },
  {
    id: 21,
    name: "Fare Evasion - Turnstile (per camera)",
    points: 2,
    partId: "ABC-123",
    price: 500.0,
  },
  {
    id: 22,
    name: "Person Down Detector",
    points: 2,
    partId: "ABC-123",
    price: 500.0,
  },
];
