import React from "react";
import {Container, Typography} from "@mui/material";
import {GridRowSelectionModel} from "@mui/x-data-grid";

import {TemplateTable} from "common/TemplateTable";
import {Button} from "common/Button";
import {useFormValuesContext, useStepsContext} from "contexts";

import {ITEMS, TABLE_COLUMNS} from "./config";
import {boxRecommendation, formatNumberAsCurrency} from "./helpers";
import {FlexContainer, ValuesWrapper} from "./styles";

export const FeaturesForm: React.FC = () => {
  const {featuresFormValues, setFeaturesFormValues, setFeaturesCalculation} =
    useFormValuesContext();
  const {setActiveStep} = useStepsContext();
  const [rowSelectionModel, setRowSelectionModel] = React.useState<GridRowSelectionModel>(() => {
    if (!featuresFormValues?.selectedItemIds?.length) return [];

    return ITEMS.filter((item) =>
      featuresFormValues.selectedItemIds.find((selectedId) => selectedId === item.id),
    ).map((r) => r.id);
  });

  const handleNext = () => {
    setFeaturesFormValues({selectedItemIds: rowSelectionModel});
    setFeaturesCalculation({totalPrice: calculatedValues.price, points: calculatedValues.points});
    setActiveStep(3);
  };

  const calculatedValues = React.useMemo(() => {
    return ITEMS.reduce(
      (acc, item) => {
        const selected = rowSelectionModel.find((selectedId) => selectedId === item.id);
        const newPrice = selected ? item.price : 0;
        const newPoints = selected ? item.points : 0;
        return {price: (acc.price += newPrice), points: (acc.points += newPoints)};
      },
      {price: 0, points: 0},
    );
  }, [rowSelectionModel]);

  return (
    <Container style={{marginTop: "60px", maxWidth: "900px"}}>
      <Typography variant="h5" sx={{mb: 5}} justifyContent="center" color="black">
        Features
      </Typography>
      <ValuesWrapper>
        <FlexContainer>
          <Typography
            variant="subtitle1"
            sx={{mr: "10px", color: "black", fontWeight: 500}}
            justifyContent="center">
            Total:
          </Typography>
          <Typography variant="h6" sx={{color: "black", fontWeight: 600}} justifyContent="center">
            {formatNumberAsCurrency(calculatedValues.price)}
          </Typography>
        </FlexContainer>
        <FlexContainer>
          <Typography
            variant="subtitle1"
            sx={{mr: "10px", color: "black", fontWeight: 500}}
            justifyContent="center">
            Box Recommendation:
          </Typography>
          <Typography variant="h6" sx={{color: "black", fontWeight: 600}} justifyContent="center">
            {boxRecommendation(calculatedValues.points)}
          </Typography>
        </FlexContainer>
      </ValuesWrapper>
      <TemplateTable
        data={ITEMS}
        columns={TABLE_COLUMNS}
        tableHeight={700}
        onRowSelectionModelChange={setRowSelectionModel}
        rowSelectionModel={rowSelectionModel}
        checkboxSelection
      />
      <Container style={{maxWidth: "100%", display: "flex", justifyContent: "flex-end"}}>
        <Button variant="contained" color="primary" sx={{mt: 5}} onClick={handleNext}>
          Next
        </Button>
      </Container>
    </Container>
  );
};
