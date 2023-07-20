import * as React from "react";
import {Container, Typography} from "@mui/material";
import moment from "moment";

import {Grid, Item} from "./styles";
import {ProjectFormValues, ProjectFormValuesKeys} from "../forms/ProjectInfoForm/type";
import {CameraFormValues, CameraFormValuesKeys} from "../forms/CamerasForm/type";
import {ProductItem} from "../../models/ProductItem";
import {AddOnFormValues} from "../forms/AddOnsForm/type";
import {PROJECT_FORM_LABELS} from "../forms/ProjectInfoForm/config";
import {CAMERA_FORM_LABELS} from "../forms/CamerasForm/config";
import {CURRENCY_FIELD_KEYS} from "./config";
import {formatNumberAsCurrency} from "../forms/FeaturesForm/helpers";

type Props = {
  projectInfo: ProjectFormValues;
  camerasInfo: CameraFormValues[];
  features?: ProductItem[];
  addOns?: AddOnFormValues;
};
export const Report: React.FC<Props> = ({projectInfo, camerasInfo, addOns, features}) => {
  const formatItemValue = (value: any, key: string) => {
    if (typeof value === "boolean") {
      return value ? "YES" : "NO";
    } else if (typeof value === "number" && CURRENCY_FIELD_KEYS.includes(key)) {
      return formatNumberAsCurrency(value);
    } else if (value instanceof Date) {
      return moment(value).format("lll");
    }

    return value.toString();
  };

  return (
    <Container style={{marginTop: "60px", maxWidth: "900px"}}>
      <Typography variant="h5" sx={{mb: 3, mt: 5}} justifyContent="center">
        Report Summary
      </Typography>
      <Grid>
        <Typography variant="h6" sx={{mb: 3, mt: 5}} justifyContent="center">
          Project Information
        </Typography>
        {(Object.keys(projectInfo) as ProjectFormValuesKeys[]).map(
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
                {formatItemValue(projectInfo[key], key)}
              </Typography>
            </Item>
          ),
        )}
        <Typography variant="h6" sx={{mb: 3, mt: 5}} justifyContent="center">
          Cameras Information
        </Typography>
        {camerasInfo.map((cameraInfo: CameraFormValues, index) => (
          <span key={index}>
            {(Object.keys(cameraInfo) as CameraFormValuesKeys[]).map(
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
                    {formatItemValue(cameraInfo[key], key)}
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
