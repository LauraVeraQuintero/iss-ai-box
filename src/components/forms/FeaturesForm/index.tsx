import React from "react";
import {Container, Typography} from "@mui/material";
import {GridRowSelectionModel} from "@mui/x-data-grid";
import InfoIcon from "@mui/icons-material/Info";

import products from "assets/products.json";
import {TemplateTable} from "common/TemplateTable";
import {Button} from "common/Button";
import {Tooltip} from "common/Tooltip";
import {useFormValuesContext, useStepsContext} from "contexts";
import {ProductItem} from "models/ProductItem";

import {INFO_VMS, TABLE_COLUMNS} from "./config";
import {
  boxRecommendation,
  filterSelectedItems,
  formatNumberAsCurrency,
  getCameraStorageValues,
  totalStorage,
} from "./helpers";
import {FlexContainer, ValuesWrapper} from "./styles";

export const FeaturesForm: React.FC = () => {
  const [productItems, setProductItems] = React.useState<ProductItem[]>([]);
  const {featuresFormValues, setFeaturesFormValues, setFeaturesCalculation, setServer, cameras} =
    useFormValuesContext();
  const {setActiveStep} = useStepsContext();
  const [rowSelectionModel, setRowSelectionModel] = React.useState<GridRowSelectionModel>([]);

  const calculatedValues = React.useMemo(() => {
    return productItems.reduce(
      (acc, item) => {
        const selected = rowSelectionModel.find((selectedId) => selectedId === item.id);
        const newPrice = selected ? item.price * (item.quantity ?? 1) : 0;
        const newPoints = selected ? item.points * (item.quantity ?? 1) : 0;
        return {price: (acc.price += newPrice), points: (acc.points += newPoints)};
      },
      {price: 0, points: 0},
    );
  }, [productItems, rowSelectionModel]);

  const cameraCalculatedStorage = React.useMemo(() => {
    if (!cameras.length) return 0;

    const {totalBitrate, totalHours, totalDays} = getCameraStorageValues(cameras);
    return totalStorage(totalBitrate, totalHours, totalDays);
  }, [cameras]);

  const recommendedServer = React.useMemo(() => {
    return boxRecommendation(calculatedValues.points, cameraCalculatedStorage);
  }, [cameraCalculatedStorage, calculatedValues.points]);

  const handleNext = () => {
    setFeaturesFormValues({selectedItems: filterSelectedItems(productItems, rowSelectionModel)});
    setFeaturesCalculation({
      totalPrice: calculatedValues.price,
      points: calculatedValues.points,
      storage: cameraCalculatedStorage,
    });
    setServer(recommendedServer);
    setActiveStep(3);
  };

  const handleBack = () => {
    setActiveStep(1);
  };

  const handleRowUpdate = (newRow: any, oldRow: any) => {
    if (newRow.quantity === oldRow.quantity) return;

    const updatedRows: ProductItem[] = productItems.map((item) => {
      if (item.id === Number(newRow.id)) {
        return {...item, quantity: newRow.quantity};
      }
      return item;
    });

    setProductItems(updatedRows);
  };

  React.useEffect(() => {
    if (products) {
      const updatedProducts: ProductItem[] = (products as ProductItem[])?.map((p) => ({
        ...p,
        quantity: featuresFormValues?.selectedItems.find((q) => q.id === p.id)?.quantity ?? 1,
      }));
      setProductItems(updatedProducts);

      if (featuresFormValues)
        setRowSelectionModel(featuresFormValues?.selectedItems.map((r) => r.id));
    }
  }, []);

  return (
    <Container style={{marginTop: "60px", maxWidth: "1000px"}}>
      <Typography variant="h5" sx={{mb: 5}} justifyContent="center" color="black">
        Features
      </Typography>
      <ValuesWrapper>
        <Tooltip arrow placement="right-start" title={INFO_VMS}>
          <InfoIcon fontSize="small" sx={{color: "gray"}} />
        </Tooltip>
        <FlexContainer>
          <Typography
            variant="subtitle1"
            sx={{mr: "10px", color: "black", fontWeight: 500}}
            justifyContent="center">
            Features Total:
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
            Total with server:
          </Typography>
          <Typography variant="h6" sx={{color: "black", fontWeight: 600}} justifyContent="center">
            {formatNumberAsCurrency(
              calculatedValues.price + (recommendedServer?.partnerDiscount ?? 0),
            )}
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
            {recommendedServer ? (
              <>
                {recommendedServer?.serverType}-{recommendedServer?.partNumber}
              </>
            ) : (
              <>None</>
            )}
          </Typography>
        </FlexContainer>
      </ValuesWrapper>
      <TemplateTable
        data={productItems}
        columns={TABLE_COLUMNS}
        tableHeight={700}
        onRowSelectionModelChange={setRowSelectionModel}
        rowSelectionModel={rowSelectionModel}
        processRowUpdate={handleRowUpdate}
        onProcessRowUpdateError={(e) => {
          console.log(e);
        }}
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
