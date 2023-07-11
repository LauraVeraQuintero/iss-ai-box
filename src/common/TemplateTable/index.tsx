import * as React from "react";
import {DataGrid, GridColDef, GridRowSpacingParams} from "@mui/x-data-grid";
import {Wrapper, OverrideCss} from "./styles";

type Props = {
  columns: GridColDef[];
  data: any;
  tableHeight?: number;
  checkboxSelection?: boolean;
};

export const TemplateTable: React.FC<Props> = ({
  columns,
  data,
  tableHeight = 400,
  checkboxSelection,
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
          rowHeight={60}
          showColumnVerticalBorder={false}
          showCellVerticalBorder={false}
          checkboxSelection={checkboxSelection}
        />
      </Wrapper>
    </OverrideCss>
  );
};
