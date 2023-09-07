import React from "react";
import {Container, Typography} from "@mui/material";
import {GridRowSelectionModel} from "@mui/x-data-grid";

import {TemplateTable} from "common/TemplateTable";
import {Button} from "common/Button";
import {useFormValuesContext, useStepsContext} from "contexts";
import {ProductItem} from "models/ProductItem";

import {TABLE_COLUMNS} from "./config";
import {boxRecommendation, formatNumberAsCurrency} from "./helpers";
import {FlexContainer, ValuesWrapper} from "./styles";
import products from "assets/products.json";

export const FeaturesForm: React.FC = () => {
  const [productItems, setProductItems] = React.useState<ProductItem[]>([]);
  const {featuresFormValues, setFeaturesFormValues, setFeaturesCalculation} =
    useFormValuesContext();
  const {setActiveStep} = useStepsContext();
  const [rowSelectionModel, setRowSelectionModel] = React.useState<GridRowSelectionModel>(() => {
    if (!featuresFormValues?.selectedItemIds?.length || !products) return [];

    return productItems
      .filter((item) =>
        featuresFormValues.selectedItemIds.find((selectedId) => selectedId === item.id),
      )
      .map((r) => r.id);
  });

  const handleNext = () => {
    setFeaturesFormValues({selectedItemIds: rowSelectionModel});
    setFeaturesCalculation({totalPrice: calculatedValues.price, points: calculatedValues.points});
    setActiveStep(3);
  };

  const handleBack = () => {
    setActiveStep(1);
  };

  const calculatedValues = React.useMemo(() => {
    return productItems.reduce(
      (acc, item) => {
        const selected = rowSelectionModel.find((selectedId) => selectedId === item.id);
        const newPrice = selected ? item.price * (item.quantity ?? 1) : 0;
        const newPoints = selected ? item.points : 0;
        return {price: (acc.price += newPrice), points: (acc.points += newPoints)};
      },
      {price: 0, points: 0},
    );
  }, [productItems, rowSelectionModel]);

  const handleCellEdit = (params: any) => {
    console.log({params});
    if (!params.id || !params.value || !Number(params.value)) return;

    const updatedRows: ProductItem[] = productItems.map((item) => {
      if (item.id === Number(params.id)) {
        // Replace the 'name' property for the object with id 2
        return {...item, quantity: Number(params.value)};
      }
      return item;
    });

    setProductItems(updatedRows);
  };

  React.useEffect(() => {
    if (products) {
      const p: ProductItem[] = (products as ProductItem[])?.map((p) => ({...p, quantity: 1}));
      setProductItems(p);
    }
  }, []);

  return (
    <Container style={{marginTop: "60px", maxWidth: "1000px"}}>
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
        data={productItems}
        columns={TABLE_COLUMNS}
        tableHeight={700}
        onRowSelectionModelChange={setRowSelectionModel}
        rowSelectionModel={rowSelectionModel}
        onCellModesModelChange={handleCellEdit}
        checkboxSelection
      />
      <Container
        style={{
          maxWidth: "100%",
          display: "flex",
          justifyContent: "flex-end",
          gap: 15,
          marginTop: "35px",
        }}>
        <Button variant="outlined" color="primary" sx={{mt: 5}} onClick={handleBack}>
          Back
        </Button>
        <Button variant="contained" color="primary" sx={{mt: 5}} onClick={handleNext}>
          Next
        </Button>
      </Container>
    </Container>
  );
};
