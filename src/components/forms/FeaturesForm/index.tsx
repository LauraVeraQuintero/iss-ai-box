import React from "react";
import {Typography, Container} from "@mui/material";
import {GridRowId, GridRowSelectionModel} from "@mui/x-data-grid";

import {TemplateTable} from "common/TemplateTable";

import {ITEMS, TABLE_COLUMNS} from "./config";
import {formatNumberAsCurrency} from "./helpers";
import {FlexContainer, PriceWrapper} from "./styles";

export const FeaturesForm: React.FC = () => {
  const [selectedItemIds, setSelectedItemIds] = React.useState<GridRowId[]>([]);

  const onSelectionChange = (newSelectedItemIds: GridRowSelectionModel) => {
    setSelectedItemIds(newSelectedItemIds);
  };

  const price = React.useMemo(() => {
    return ITEMS.reduce((accPrice, item) => {
      const newPrice = selectedItemIds.find((selectedId) => selectedId === item.id)
        ? item.price
        : 0;
      return (accPrice += newPrice);
    }, 0);
  }, [selectedItemIds]);

  return (
    <Container style={{marginTop: "60px", maxWidth: "900px"}}>
      <Typography variant="h5" sx={{mb: 5}} justifyContent="center">
        Features Information
      </Typography>
      <PriceWrapper>
        <FlexContainer>
          <Typography
            variant="subtitle1"
            sx={{mr: "10px", color: "black", fontWeight: 500}}
            justifyContent="center">
            Total:
          </Typography>
          <Typography variant="h6" sx={{color: "black", fontWeight: 600}} justifyContent="center">
            {formatNumberAsCurrency(price)}
          </Typography>
        </FlexContainer>
      </PriceWrapper>
      <TemplateTable
        data={ITEMS}
        columns={TABLE_COLUMNS}
        tableHeight={700}
        onRowSelectionModelChange={onSelectionChange}
        checkboxSelection
      />
    </Container>
  );
};
