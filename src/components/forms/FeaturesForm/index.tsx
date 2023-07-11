import React from "react";
import {TemplateTable} from "common/TemplateTable";
import {ITEMS, TABLE_COLUMNS} from "./config";
import {TableWrapper} from "./styles";
import {Typography} from "@mui/material";
import {GridRowSelectionModel} from "@mui/x-data-grid";

export const FeaturesForm: React.FC = () => {
  const [price, setPrice] = React.useState<number>(0);
  const onSelectionChange = (value: GridRowSelectionModel) => {
    let sum = 0;

    ITEMS.forEach(({id, price}) => {
      if (value.find((v) => v === id)) {
        sum += price;
      }
    });

    setPrice(sum);
  };

  return (
    <TableWrapper>
      <Typography variant="h5" sx={{mb: 5}} justifyContent="center">
        Features Information
      </Typography>
      <Typography variant="body1" sx={{mb: 5}} justifyContent="center">
        Price count $ {price}
      </Typography>
      <TemplateTable
        data={ITEMS}
        columns={TABLE_COLUMNS}
        tableHeight={700}
        onRowSelectionModelChange={onSelectionChange}
        checkboxSelection
      />
    </TableWrapper>
  );
};
