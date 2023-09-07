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
  {field: "name", headerName: "Name", width: 400, sortable: true},
  {field: "partId", headerName: "Part #", width: 130, sortable: true},
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
    editable: true,
  },
];
