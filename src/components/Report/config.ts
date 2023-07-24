import {GridColDef} from "@mui/x-data-grid";
import {priceFormat} from "../forms/FeaturesForm/config";

export const CURRENCY_FIELD_KEYS = ["budget"];

export const FEATURE_TABLE_COLUMNS: GridColDef[] = [
  {field: "name", headerName: "Name", width: 400, sortable: true},
  {
    field: "price",
    headerName: "Price",
    width: 250,
    sortable: true,
    renderCell: priceFormat,
    align: "right",
  },
];
