import React from "react";
import {TemplateTable} from "common/TemplateTable";
import {ITEMS, TABLE_COLUMNS} from "./config";
import {Typography, Container} from "@mui/material";
import {GridRowSelectionModel} from "@mui/x-data-grid";
import {formatNumberAsCurrency} from "./helpers";
import {FlexContainer, PriceWrapper} from "./styles";

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
