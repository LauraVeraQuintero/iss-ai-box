import * as React from "react";
import {Container, Typography} from "@mui/material";
import moment from "moment";

import {useFormValuesContext} from "contexts/FormValues";

import {Grid, Item} from "./styles";
import {ProjectFormValuesKeys} from "../forms/ProjectInfoForm/type";
import {PROJECT_FORM_LABELS} from "../forms/ProjectInfoForm/config";
import {CAMERA_TABLE_COLUMNS, CURRENCY_FIELD_KEYS, FEATURE_TABLE_COLUMNS} from "./config";
import {formatNumberAsCurrency} from "../forms/FeaturesForm/helpers";
import {AddOnsFormValuesKeys} from "../forms/AddOnsForm/type";
import {ADD_ONS_FORM_LABELS} from "../forms/AddOnsForm/config";
import {TemplateTable} from "common/TemplateTable";
import {ITEMS} from "../forms/FeaturesForm/config";

const ROW_HEIGHT = 50;

export const Report: React.FC = () => {
  const {projectFormValues, cameras, featuresFormValues, addOnFormValues} = useFormValuesContext();

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
    if (!featuresFormValues) return [];

    return ITEMS.filter((item) =>
      featuresFormValues.selectedItemIds.find((selectedId) => selectedId === item.id),
    ).map((r) => ({id: r.id, name: r.name, price: r.price}));
  }, [featuresFormValues]);

  const calculateTableHeight = (rows: number) => {
    return ROW_HEIGHT + rows * ROW_HEIGHT;
  };

  if (!projectFormValues || !featuresFormValues || !addOnFormValues || !cameras.length) return;

  return (
    <Container style={{marginTop: "60px", maxWidth: "1000px"}}>
      <Typography variant="h5" sx={{mb: 3, mt: 5}} justifyContent="center" color="black">
        Report Summary
      </Typography>
      <Typography variant="h6" sx={{mb: 3, mt: 5}} justifyContent="center">
        Project
      </Typography>
      <Grid height={400}>
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
      <Typography variant="h6" sx={{mb: 3, mt: 5}} justifyContent="center">
        Add Ons
      </Typography>
      <Grid height={100}>
        {(Object.keys(addOnFormValues) as AddOnsFormValuesKeys[]).map(
          (key: AddOnsFormValuesKeys, index) => (
            <Item key={"addOns-" + index.toString()}>
              <Typography
                variant="overline"
                display="block"
                sx={{color: "gray", fontSize: "12px"}}
                gutterBottom>
                {ADD_ONS_FORM_LABELS[key]}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {formatItemValue(key, addOnFormValues[key])}
              </Typography>
            </Item>
          ),
        )}
      </Grid>
      <Typography variant="h6" sx={{mb: 3, mt: 5}} justifyContent="center">
        Cameras
      </Typography>
      <TemplateTable
        columns={CAMERA_TABLE_COLUMNS()}
        data={cameras}
        tableHeight={calculateTableHeight(cameras.length)}
      />
      <Typography variant="h6" sx={{mb: 3, mt: 5}} justifyContent="center">
        Features
      </Typography>
      <TemplateTable
        columns={FEATURE_TABLE_COLUMNS}
        data={featureTableData}
        tableHeight={featureTableData.length}
      />
    </Container>
  );
};
