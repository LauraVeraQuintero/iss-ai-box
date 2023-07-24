import * as React from "react";
import {DataGrid, GridColDef, GridRowSelectionModel, DataGridProps} from "@mui/x-data-grid";
import {Wrapper, OverrideCss} from "./styles";

type Props = {
  columns: GridColDef[];
  data: any;
  tableHeight?: number;
  checkboxSelection?: boolean;
  onRowSelectionModelChange?: (value: GridRowSelectionModel) => void;
  rowSelectionModel?: GridRowSelectionModel;
} & Partial<DataGridProps>;

export const TemplateTable: React.FC<Props> = ({
  columns,
  data,
  tableHeight = 400,
  checkboxSelection,
  onRowSelectionModelChange,
  rowSelectionModel,
  ...otherProps
}) => {
  return (
    <OverrideCss>
      <Wrapper height={tableHeight}>
        <DataGrid
          {...otherProps}
          rows={data}
          columns={columns}
          hideFooter
          disableRowSelectionOnClick
          disableColumnMenu
          rowHeight={40}
          showColumnVerticalBorder={false}
          showCellVerticalBorder={false}
          checkboxSelection={checkboxSelection}
          onRowSelectionModelChange={onRowSelectionModelChange}
          rowSelectionModel={rowSelectionModel}
        />
      </Wrapper>
    </OverrideCss>
  );
};
