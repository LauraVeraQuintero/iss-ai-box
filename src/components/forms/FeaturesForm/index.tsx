import React from "react";
import {Container, Button, Typography} from "@mui/material";
import {GridRowSelectionModel} from "@mui/x-data-grid";

import {TemplateTable} from "common/TemplateTable";
import {useFormValuesContext} from "contexts/FormValues";

import {ITEMS, TABLE_COLUMNS} from "./config";
import {formatNumberAsCurrency} from "./helpers";
import {FlexContainer, PriceWrapper} from "./styles";

export const FeaturesForm: React.FC = () => {
  const {featuresFormValues, setFeaturesFormValues} = useFormValuesContext();
  const [rowSelectionModel, setRowSelectionModel] = React.useState<GridRowSelectionModel>(() => {
    if (!featuresFormValues?.selectedItemIds?.length) return [];

    return ITEMS.filter((item) =>
      featuresFormValues.selectedItemIds.find((selectedId) => selectedId === item.id),
    ).map((r) => r.id);
  });

  const handleNext = () => {
    setFeaturesFormValues({selectedItemIds: rowSelectionModel});
    // TODO: Move to new step
  };

  const price = React.useMemo(() => {
    return ITEMS.reduce((accPrice, item) => {
      const newPrice = rowSelectionModel.find((selectedId) => selectedId === item.id)
        ? item.price
        : 0;
      return (accPrice += newPrice);
    }, 0);
  }, [rowSelectionModel]);

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
        onRowSelectionModelChange={setRowSelectionModel}
        rowSelectionModel={rowSelectionModel}
        checkboxSelection
      />
      <Button variant="contained" color="primary" sx={{mt: 5}} onClick={handleNext}>
        Next
      </Button>
    </Container>
  );
};
