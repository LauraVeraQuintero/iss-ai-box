import * as React from "react";
import {Container, Divider, Typography, Chip} from "@mui/material";
import moment from "moment";

import {useFormValuesContext} from "contexts/FormValues";
import {TemplateTable} from "common/TemplateTable";
import {useStepsContext} from "contexts";

import {Grid, Item, Wrapper} from "./styles";
import {CAMERA_TABLE_COLUMNS, CURRENCY_FIELD_KEYS, FEATURE_TABLE_COLUMNS} from "./config";
import {ProjectFormValuesKeys} from "../forms/ProjectInfoForm/type";
import {PROJECT_FORM_LABELS} from "../forms/ProjectInfoForm/config";
import {boxRecommendation, formatNumberAsCurrency} from "../forms/FeaturesForm/helpers";
import {FlexContainer, ValuesWrapper} from "../forms/FeaturesForm/styles";
import {PrintButton} from "common/PrintButton";
import {Button} from "common/Button";
import products from "assets/products.json";
import {ProductItem} from "models/ProductItem";

const ROW_HEIGHT_IN_PX = 55;
export const REPORT_SECTION_ID = "report_section_element";
export const REPORT_ACTIONS_ID = "report_actions_element";

export const Report: React.FC = () => {
  const {projectFormValues, cameras, featuresFormValues, featuresCalculation, addOnFormValues} =
    useFormValuesContext();
  const {setActiveStep} = useStepsContext();

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
    if (!featuresFormValues || !products) return [];

    return (products as ProductItem[])
      .filter((item) =>
        featuresFormValues.selectedItemIds.find((selectedId) => selectedId === item.id),
      )
      .map((r) => ({id: r.id, name: r.name, price: r.price}));
  }, [featuresFormValues]);

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

  if (!projectFormValues || !featuresFormValues || !addOnFormValues || !cameras.length) return;

  return (
    <Wrapper>
      <Container style={{marginTop: "60px", maxWidth: "1400px"}} id={REPORT_SECTION_ID}>
        <Typography variant="h5" sx={{mb: 3, mt: 5}} justifyContent="center" color="black">
          Report Summary
        </Typography>
        {getDivider("Project")}
        <Grid heightInPx={400}>
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
        {getDivider("Cameras")}
        <TemplateTable
          columns={CAMERA_TABLE_COLUMNS()}
          data={cameras}
          tableHeight={calculateTableHeight(cameras.length)}
        />
        {getDivider("Features")}
        <TemplateTable
          columns={FEATURE_TABLE_COLUMNS}
          data={featureTableData}
          tableHeight={calculateTableHeight(featureTableData.length, 45)}
        />
        {featureTableData.length > 0 && (
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
                {formatNumberAsCurrency(featuresCalculation?.totalPrice ?? 0)}
              </Typography>
            </FlexContainer>
            <FlexContainer>
              <Typography
                variant="subtitle2"
                sx={{mr: "10px", color: "black", fontWeight: 500}}
                justifyContent="center">
                Box Recommendation:
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{color: "black", fontWeight: 600}}
                justifyContent="center">
                {boxRecommendation(featuresCalculation?.points ?? 0)}
              </Typography>
            </FlexContainer>
          </ValuesWrapper>
        )}
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
