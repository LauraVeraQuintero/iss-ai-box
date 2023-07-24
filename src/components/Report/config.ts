import {GridColDef, GridRenderCellParams} from "@mui/x-data-grid";
import {priceFormat} from "../forms/FeaturesForm/config";
import {FIELDS_SECTIONS} from "../forms/CamerasForm/config";

export const CURRENCY_FIELD_KEYS = ["budget"];

export const booleanFormat = (params: GridRenderCellParams) => {
  const value: string = params.value;

  return value === "true" ? "YES" : "NO";
};

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

export const CAMERA_TABLE_COLUMNS: () => GridColDef[] = () => {
  return FIELDS_SECTIONS.flat().map((column) => {
    return {
      field: column.name,
      headerName: column.label,
      sortable: true,
      renderCell: column.type === "boolean" ? booleanFormat : undefined,
    };
  });
};
