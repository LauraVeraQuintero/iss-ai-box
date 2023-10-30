import {GridColDef, GridRenderCellParams} from "@mui/x-data-grid";
import {formatNumberAsCurrency} from "./helpers";
import {Tooltip} from "common/Tooltip";
import InfoIcon from "@mui/icons-material/Info";
import React from "react";

export const priceFormat = (params: GridRenderCellParams) => {
  const price: string = params.value;

  return formatNumberAsCurrency(Number(price));
};

export const renderDescription = (params: GridRenderCellParams) => {
  const description: string = params.value;
  return (
    <Tooltip arrow placement="right-start" title={description}>
      <InfoIcon fontSize="small" sx={{color: "gray"}} />
    </Tooltip>
  );
};

export const TABLE_COLUMNS: GridColDef[] = [
  { field: "name", headerName: "Product", width: 400, sortable: true },
  { field: "partId", headerName: "Part #", width: 130, sortable: true },
  {
    field: "price",
    headerName: "Price",
    width: 160,
    sortable: true,
    align: "right",
    headerAlign: "right",
    renderCell: priceFormat,
  },
  {
    field: "description",
    headerName: "Info",
    width: 90,
    sortable: false,
    align: "center",
    headerAlign: "center",
    renderCell: renderDescription,
  },
  {
    field: "quantity",
    headerName: "QTY",
    width: 90,
    type: "number",
    editable: true, // Mantén esta propiedad para habilitar la edición
    renderCell: (params) => {
      return (
        <input
          type="number"
          value={params.value}
          min="0"
          step="1"
          onChange={(e) => {
            const newValue = parseInt(e.target.value, 10);
  
            // Validación para asegurarte de que el valor no sea menor que 0
            if (!isNaN(newValue) && newValue >= 0) {
              // Actualiza el valor directamente en la matriz de datos
              params.api.updateRows([{ ...params.row, quantity: newValue }]);
            }
          }}
        />
      );
    },
  }
  
];

export const INFO_VMS =
  "PLEASE NOTE: Mandatory VMS licenses and SMA will be included in the final quote";
