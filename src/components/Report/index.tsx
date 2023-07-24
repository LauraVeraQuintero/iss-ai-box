import * as React from "react";
import {Container, Typography} from "@mui/material";
import moment from "moment";

import {useFormValuesContext} from "contexts/FormValues";

import {Grid, Item} from "./styles";
import {ProjectFormValuesKeys} from "../forms/ProjectInfoForm/type";
import {CameraFormValuesKeys} from "../forms/CamerasForm/type";
import {PROJECT_FORM_LABELS} from "../forms/ProjectInfoForm/config";
import {CAMERA_FORM_LABELS} from "../forms/CamerasForm/config";
import {CURRENCY_FIELD_KEYS} from "./config";
import {formatNumberAsCurrency} from "../forms/FeaturesForm/helpers";
import {AddOnsFormValuesKeys} from "../forms/AddOnsForm/type";
import {ADD_ONS_FORM_LABELS} from "../forms/AddOnsForm/config";

export const Report: React.FC = () => {
  const {projectFormValues, cameras, featuresFormValues, addOnFormValues} = useFormValuesContext();

  const formatItemValue = (value: any, key: string) => {
    if (typeof value === "boolean") {
      return value ? "YES" : "NO";
    } else if (typeof value === "number" && CURRENCY_FIELD_KEYS.includes(key)) {
      return formatNumberAsCurrency(value);
    } else if (moment.isMoment(value)) {
      return moment(value).format("lll");
    }

    return value.toString();
  };

  if (!projectFormValues || !featuresFormValues || !addOnFormValues || !cameras.length) return;

  return (
    <Container style={{marginTop: "60px", maxWidth: "900px"}}>
      <Typography variant="h5" sx={{mb: 3, mt: 5}} justifyContent="center">
        Report Summary
      </Typography>
      <Grid>
        <Typography variant="h6" sx={{mb: 3, mt: 5}} justifyContent="center">
          Project Information
        </Typography>
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
                {formatItemValue(projectFormValues[key], key)}
              </Typography>
            </Item>
          ),
        )}
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
                {formatItemValue(addOnFormValues[key], key)}
              </Typography>
            </Item>
          ),
        )}
        <Typography variant="h6" sx={{mb: 3, mt: 5}} justifyContent="center">
          Cameras Information
        </Typography>
        {cameras.map((camera, index) => (
          <span key={index}>
            {(Object.keys(camera) as CameraFormValuesKeys[]).map(
              (key: CameraFormValuesKeys, index) => (
                <Item key={"camera-" + index.toString()}>
                  <Typography
                    variant="overline"
                    display="block"
                    sx={{color: "gray", fontSize: "12px"}}
                    gutterBottom>
                    {CAMERA_FORM_LABELS[key]}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {formatItemValue(camera[key], key)}
                  </Typography>
                </Item>
              ),
            )}
          </span>
        ))}
      </Grid>
    </Container>
  );
};
