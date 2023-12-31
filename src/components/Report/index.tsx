import * as React from "react";
import {Container, Divider, Typography, Chip} from "@mui/material";
import moment from "moment";

import {useFormValuesContext} from "contexts/FormValues";
import {TemplateTable} from "common/TemplateTable";
import {useStepsContext} from "contexts";

import {Grid, Item, Wrapper} from "./styles";
import {
  CURRENCY_FIELD_KEYS,
  FEATURE_TABLE_COLUMNS
} from "./config";
import {ProjectFormValuesKeys} from "../forms/ProjectInfoForm/type";
import {PROJECT_FORM_LABELS} from "../forms/ProjectInfoForm/config";
import {formatNumberAsCurrency} from "../forms/FeaturesForm/helpers";
import {FlexContainer, ValuesWrapper} from "../forms/FeaturesForm/styles";
import {PrintButton} from "common/PrintButton";
import {Button} from "common/Button";
import products from "assets/products.json";

const ROW_HEIGHT_IN_PX = 55;
export const REPORT_SECTION_ID = "report_section_element";
export const REPORT_ACTIONS_ID = "report_actions_element";

export const Report: any = () => {
  const {projectFormValues, cameras, featuresFormValues, server, serverCount} =
  useFormValuesContext();
  const {setActiveStep} = useStepsContext();
  const {addOnFormValues} = useFormValuesContext();
  const [soePrice, setSoePrice] = React.useState<number>(0);
  const [featurePrice, setFeaturePrice] = React.useState<number>(0);
  const formatItemValue = (key: string, value?: any) => {
    if (typeof value === "boolean") {
      return value ? "YES" : "NO";
    } else if (typeof value === "number" && CURRENCY_FIELD_KEYS.includes(key)) {
      return formatNumberAsCurrency(value);
    } else if (moment.isMoment(value)) {
      return moment(value).format("lll");
    }

    return value?.toString();
  };

  const featureTableData = React.useMemo(() => {
    if (!featuresFormValues || !products || !server || serverCount === undefined) return [];
  
    // Crear un nuevo objeto para el servidor con los valores requeridos
    const serverItem = {
      id: "new-server-id", // Asigna un nuevo ID si es necesario
      name: server.partNumber,
      description: server.description,
      price: server.partnerDiscount,
      quantity: serverCount,
      totalAmount: server.partnerDiscount * (serverCount || 1),
    };
  
    // Obtener los elementos seleccionados de las características
    const selectedFeatureItems = featuresFormValues.selectedItems.map((r) => {
      let percentage = 0; // Porcentaje inicial
      let smaDescription = ""; // Descripción predeterminada
    
      if (addOnFormValues?.sma) {
        switch (addOnFormValues.sma) {
          case "1 year":
            percentage = 15;
            break;
          case "2 years":
            percentage = 25;
            break;
          case "3 years":
            percentage = 35;
            break;
          case "5 years":
            percentage = 50;
            break;
        }
        smaDescription = ` + ${addOnFormValues.sma} SMA`;
      }
    
      const adjustedTotalAmount = r.price * (r.quantity ? r.quantity : 1) + (r.price * (r.quantity ? r.quantity : 1) * (percentage / 100));
      setFeaturePrice(adjustedTotalAmount);
      return {
        id: r.id,
        name: r.name,
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        description: `${r.description}${smaDescription}`,
        price: r.price,
        quantity: r.quantity,
        totalAmount: adjustedTotalAmount,
      };
    });

    const camerasNumber = cameras.reduce((total, camera) => {
      const quantity = Number(camera?.cameraQuantity) || 0; // Parsea a número y usa 0 si no es válido
      setSoePrice((total + quantity)*248);
      return total + quantity;
    }, 0);

    const soeCam = {
      id: "soecam",
      name: "SOE-CAM",
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      description: "SecurOS Enterprise -  Camera license (per channel)",
      price: 248,
      quantity: camerasNumber,
      totalAmount: 248 * camerasNumber
    }
    
    // Concatenar el objeto del servidor con los elementos de características seleccionados
    const combinedData = [serverItem, ...selectedFeatureItems, soeCam];
  
    return combinedData;
  }, [featuresFormValues, server, serverCount]);
  
  const calculateTableHeight = (rows: number, height: number = ROW_HEIGHT_IN_PX) => {
    return height + rows * height;
  };

  const getDivider = (label: string) => {
    return (
      <Divider sx={{margin: "35px 0", borderWidth: "2px"}}>
        <Chip label={label} color="info" variant="outlined" sx={{fontSize: "16px"}} />
      </Divider>
    );
  };

  const handleBack = () => {
    setActiveStep(3);
  };

  if (!projectFormValues || !featuresFormValues || !cameras.length || !server) return;

  return (
    <Wrapper>
      <Container style={{marginTop: "60px", maxWidth: "1400px"}} id={REPORT_SECTION_ID}>
        <Typography variant="h5" sx={{mb: 3, mt: 5}} justifyContent="center" color="black">
          Report Summary
        </Typography>
        {getDivider("Project")}
        <Grid heightInPx={600}>
          {(Object.keys(projectFormValues) as ProjectFormValuesKeys[]).map(
            (key: ProjectFormValuesKeys, index) => (
              <Item key={"project-" + index.toString()}>
                <Typography
                  variant="overline"
                  display="block"
                  sx={{color: "gray", fontSize: "12px"}}
                  gutterBottom>
                  {PROJECT_FORM_LABELS[key]}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {formatItemValue(key, projectFormValues[key])}
                </Typography>
              </Item>
            ),
          )}
        </Grid>
        {/* {getDivider("Cameras")}
        <TemplateTable
          columns={CAMERA_TABLE_COLUMNS()}
          data={cameras}
          tableHeight={calculateTableHeight(cameras.length)}
        /> */}
        {getDivider("Features")}
        <TemplateTable
          columns={FEATURE_TABLE_COLUMNS}
          data={featureTableData}
          tableHeight={calculateTableHeight(featureTableData.length, 80)}
        />
        {/* {getDivider("Server")}
        <TemplateTable
          columns={SERVER_TABLE_COLUMNS}
          data={[server]}
          tableHeight={calculateTableHeight(1, 45)}
          getRowId={(row) => row.partNumber}
        /> */}
        <ValuesWrapper>
          <FlexContainer>
            <Typography
              variant="subtitle2"
              sx={{mr: "10px", color: "black", fontWeight: 500}}
              justifyContent="center">
              Total:
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{color: "black", fontWeight: 600}}
              justifyContent="center">
              {formatNumberAsCurrency(
                featurePrice + server.partnerDiscount + soePrice,
              )}
            </Typography>
          </FlexContainer>
        </ValuesWrapper>
        <Container
          style={{
            maxWidth: "100%",
            display: "flex",
            justifyContent: "flex-end",
            gap: 15,
            marginTop: "35px",
          }}
          id={REPORT_ACTIONS_ID}>
          <Button variant="outlined" color="primary" onClick={handleBack}>
            Back
          </Button>
          <PrintButton />
        </Container>
      </Container>
    </Wrapper>
  );
};
