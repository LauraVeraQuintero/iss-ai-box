import React from "react";
import { Container, Typography } from "@mui/material";
import { GridRowSelectionModel } from "@mui/x-data-grid";
import InfoIcon from "@mui/icons-material/Info";

import products from "assets/products.json";
import { TemplateTable } from "common/TemplateTable";
import { Button } from "common/Button";
import { Tooltip } from "common/Tooltip";
import { useFormValuesContext, useStepsContext } from "contexts";
import { ProductItem } from "models/ProductItem";

import { INFO_VMS, TABLE_COLUMNS } from "./config";
import {
  boxRecommendation,
  filterSelectedItems,
  formatNumberAsCurrency,
  getCameraStorageValues,
  totalStorage,
} from "./helpers";
import { FlexContainer, ValuesWrapper } from "./styles";

export const FeaturesForm: React.FC = () => {
  const [productItems, setProductItems] = React.useState<ProductItem[]>([]);
  const { featuresFormValues, setFeaturesFormValues, setFeaturesCalculation, setServer, setServerCount, cameras, camerasCount, setCamerasCount } =
    useFormValuesContext();
  const { setActiveStep } = useStepsContext();
  const [rowSelectionModel, setRowSelectionModel] = React.useState<GridRowSelectionModel>([]);

  const [isNextButtonEnabled, setIsNextButtonEnabled] = React.useState(false); // Estado para habilitar/deshabilitar el botón "Next"

  const calculatedValues = React.useMemo(() => {
    return productItems.reduce(
      (acc, item) => {
        const selected = rowSelectionModel.find((selectedId) => selectedId === item.id);
        const newPrice = selected ? item.price * (item.quantity ?? 1) : 0;
        const newPoints = selected ? item.points * (item.quantity ?? 1) : 0;
        return { price: (acc.price += newPrice), points: (acc.points += newPoints) };
      },
      { price: 0, points: 0 },
    );
  }, [productItems, rowSelectionModel]);

  const cameraCalculatedStorage = React.useMemo(() => {
    if (!cameras.length) return 0;

    const { totalBitrate, totalHours, totalDays } = getCameraStorageValues(cameras);
    return totalStorage(totalBitrate, totalHours, totalDays);
  }, [cameras]);

  const recommendedServer = React.useMemo(() => {
    return boxRecommendation(calculatedValues.points, cameraCalculatedStorage);
  }, [cameraCalculatedStorage, calculatedValues.points]);

  const handleNext = () => {
    setFeaturesFormValues({ selectedItems: filterSelectedItems(productItems, rowSelectionModel) });
    setFeaturesCalculation({
      totalPrice: calculatedValues.price,
      points: calculatedValues.points,
      storage: cameraCalculatedStorage,
    });
    setServer(recommendedServer.recommendedServer);
    setServerCount(recommendedServer.serverCount);
    console.log({ recommendedServer });
    setActiveStep(3);
  };

  const handleBack = () => {
    setActiveStep(1);
  };

  const handleRowUpdate = (newRow: any, oldRow: any) => {
    if (newRow.quantity === oldRow.quantity) return;
  
    const updatedRows: ProductItem[] = productItems.map((item) => {
      if (item.id === Number(newRow.id)) {
        const newQuantity = Number(newRow.quantity);
        if (!isNaN(newQuantity) && newQuantity >= 0) {
          // Resta la cantidad anterior (oldRow.quantity) y suma la nueva cantidad (newQuantity) al estado camerasCount
          const quantityChange = newQuantity - oldRow.quantity;
          setCamerasCount((prevCount) => prevCount - quantityChange);
          return { ...item, quantity: newQuantity };
        }
      }
      return item;
    });
  
    setProductItems(updatedRows);
  };  

  const handleRowSelectionModelChange = (newSelection: GridRowSelectionModel) => {
    const selectedIds = new Set(newSelection);
    const isValidSelection4 = (selectedIds.has(1) || selectedIds.has(2)) && selectedIds.has(4);
    const isValidSelection5 = selectedIds.has(3) && selectedIds.has(5);

    if (isValidSelection4 || isValidSelection5) {
      setRowSelectionModel(newSelection);
    } else {
      // Deselecciona el id: 4 o el id: 5 si no cumple con las condiciones
      setRowSelectionModel(newSelection.filter((id) => id !== 4 && id !== 5));
    }
  };

  React.useEffect(() => {
    if (products) {
      // Verifica que 'products' sea un array de objetos
      if (Array.isArray(products)) {
        const updatedProducts: ProductItem[] = products.map((p) => {
          // Verifica que cada objeto 'p' tenga una propiedad 'id'
          if (p.id !== undefined) {
            return {
              ...p,
              quantity: featuresFormValues?.selectedItems.find((q) => q.id === p.id)?.quantity ?? 0, // Inicialmente 0
            };
          } else {
            console.warn("Producto sin propiedad 'id':", p);
            return {
              ...p,
              quantity: featuresFormValues?.selectedItems.find((q) => q.id === p.id)?.quantity ?? 0, // Inicialmente 0
            };
          }
        });

        setProductItems(updatedProducts);
        console.log("items: ", productItems);
        if (featuresFormValues) {
          // Si el usuario marcó la casilla de verificación, establece el valor inicial en 1
          updatedProducts.forEach((p) => {
            if (rowSelectionModel.includes(p.id)) {
              p.quantity = 1;
            }
          });
          setRowSelectionModel(featuresFormValues?.selectedItems.map((r) => r.id));
        }
      } else {
        console.error("'products' no es un array válido:", products);
      }
    }
  }, []);

  React.useEffect(() => {
    // Calcular la suma de "cameraQuantity" en las cámaras
    const camerasNumber = cameras.reduce((total, camera) => {
      const quantity = Number(camera?.cameraQuantity) || 0; // Parsea a número y usa 0 si no es válido
      return total + quantity;
    }, 0);
    // Asignar el resultado a camerasCount usando setCamerasCount
    setCamerasCount(camerasNumber);
  }, []);

  React.useEffect(() => {
    setCamerasCount(camerasCount);
    // Actualizar el estado del botón "Next" según el valor de camerasCount
    setIsNextButtonEnabled(camerasCount === 0);
  }, [camerasCount]);

  return (
    <Container style={{ marginTop: "60px", maxWidth: "1100px" }}>
      <Typography variant="h5" sx={{ mb: 5 }} justifyContent="center" color="black">
        Features
      </Typography>
      <ValuesWrapper>
        <Tooltip arrow placement="right-start" title={INFO_VMS} open={true}>
          <InfoIcon fontSize="small" sx={{ color: "gray" }} />
        </Tooltip>
        <FlexContainer>
          <Typography
            variant="subtitle1"
            sx={{ mr: "10px", color: "black", fontWeight: 500 }}
            justifyContent="center"
          >
            Features Total:
          </Typography>
          <Typography variant="h6" sx={{ color: "black", fontWeight: 600 }} justifyContent="center">
            {formatNumberAsCurrency(calculatedValues.price)}
          </Typography>
        </FlexContainer>
        <FlexContainer>
          <Typography
            variant="subtitle1"
            sx={{ mr: "10px", color: "black", fontWeight: 500 }}
            justifyContent="center"
          >
            Total with server:
          </Typography>
          <Typography variant="h6" sx={{ color: "black", fontWeight: 600 }} justifyContent="center">
            {formatNumberAsCurrency(
              calculatedValues.price + (recommendedServer.recommendedServer?.partnerDiscount ?? 0)
            )}
          </Typography>
        </FlexContainer>
        <FlexContainer>
          <Typography
            variant="subtitle1"
            sx={{ mr: "10px", color: "black", fontWeight: 500 }}
            justifyContent="center"
          >
            Box Recommendation:
          </Typography>
          <Typography variant="h6" sx={{ color: "black", fontWeight: 600 }} justifyContent="center">
            {recommendedServer.recommendedServer ? (
              <>
                <span style={{ fontWeight: "bold", color: "#1976d2", fontStyle: "italic" }}>
                  {recommendedServer.recommendedServer?.serverType}:
                </span>{" "}
                {recommendedServer.recommendedServer?.partNumber}
              </>
            ) : (
              <>None</>
            )}
          </Typography>
        </FlexContainer>
        <FlexContainer>
          <Typography
            variant="subtitle1"
            sx={{ mr: "10px", color: "black", fontWeight: 500 }}
            justifyContent="center"
          >
            Cameras Available: {camerasCount}
          </Typography>
        </FlexContainer>
      </ValuesWrapper>
      <TemplateTable
        data={productItems}
        columns={TABLE_COLUMNS}
        tableHeight={800}
        onRowSelectionModelChange={handleRowSelectionModelChange}
        rowSelectionModel={rowSelectionModel}
        processRowUpdate={handleRowUpdate}
        checkboxSelection
        isCellEditable={() => true}
      />
      <Container
        style={{
          maxWidth: "100%",
          display: "flex",
          justifyContent: "flex-end",
          gap: 15,
          marginTop: "35px",
        }}
      >
        <Button variant="outlined" color="primary" sx={{ mt: 5 }} onClick={handleBack}>
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 5 }}
          onClick={handleNext}
          disabled={!isNextButtonEnabled}
        >
          Next
        </Button>
      </Container>
    </Container>
  );
};
