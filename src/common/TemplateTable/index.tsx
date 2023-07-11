import * as React from "react";
import {DataGrid, GridColDef, GridRowSelectionModel, GridRowSpacingParams} from "@mui/x-data-grid";
import {Wrapper, OverrideCss} from "./styles";

type Props = {
  columns: GridColDef[];
  data: any;
  tableHeight?: number;
  checkboxSelection?: boolean;
  onRowSelectionModelChange?: (value: GridRowSelectionModel) => void;
};

export const TemplateTable: React.FC<Props> = ({
  columns,
  data,
  tableHeight = 400,
  checkboxSelection,
  onRowSelectionModelChange,
}) => {
  return (
    <OverrideCss>
      <Wrapper height={tableHeight}>
        <DataGrid
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
        />
      </Wrapper>
    </OverrideCss>
  );
};
