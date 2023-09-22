import {GridColDef, GridRenderCellParams} from "@mui/x-data-grid";
import {priceFormat} from "../forms/FeaturesForm/config";
import {FIELDS_SECTIONS} from "../forms/CamerasForm/config";

export const CURRENCY_FIELD_KEYS = ["budget"];

export const booleanFormat = (params: GridRenderCellParams) => {
  const value: string = params.value;

  return value === "true" ? "YES" : "NO";
};

export const FEATURE_TABLE_COLUMNS: GridColDef[] = [
  {field: "name", headerName: "Name", width: 500, sortable: true},
  {field: "quantity", headerName: "Quantity", width: 100, sortable: true},
  {
    field: "price",
    headerName: "Price",
    width: 250,
    sortable: true,
    renderCell: priceFormat,
    align: "right",
    headerAlign: "right",
  },
];

export const CAMERA_TABLE_COLUMNS: () => GridColDef[] = () => {
  return FIELDS_SECTIONS.flat().map((column) => {
    return {
      field: column.name,
      headerName: column.label,
      minWidth: 120,
      sortable: true,
      renderCell: column.type === "boolean" ? booleanFormat : undefined,
    };
  });
};

export const SERVER_TABLE_COLUMNS: GridColDef[] = [
  {field: "partNumber", headerName: "Part Number", width: 400, sortable: true},
  {field: "serverType", headerName: "Type", width: 100, sortable: true},
  {
    field: "partnerDiscount",
    headerName: "Price",
    width: 250,
    sortable: true,
    renderCell: priceFormat,
    align: "right",
    headerAlign: "right",
  },
];
