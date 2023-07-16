import {GridRowId} from "@mui/x-data-grid";

export type ProductItem = {
  id: GridRowId;
  name: string;
  points: number;
  partId: string;
  price: number;
};
