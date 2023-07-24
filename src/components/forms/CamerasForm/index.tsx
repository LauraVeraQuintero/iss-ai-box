import React from "react";
import {useForm} from "react-hook-form";
import {Typography, Container, Divider, Grid} from "@mui/material";

import {FormFieldItem} from "common/FormFieldItem";
import {useFormValuesContext, useStepsContext} from "contexts";

import {FIELDS_SECTIONS} from "./config";
import {getDefaultCameraFormValues} from "./helpers";
import {CameraFormValues} from "./type";
import {HeaderWrapper} from "./styles";
import {Button} from "common/Button";

export const CamerasForm: React.FC = () => {
  const {cameraFormValues, setCameraFormValues} = useFormValuesContext();
  const {setActiveStep} = useStepsContext();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<CameraFormValues>({
    defaultValues: getDefaultCameraFormValues(cameraFormValues),
  });

  const onSubmit = (values: CameraFormValues) => {
    setCameraFormValues(values);
    setActiveStep(2);
  };

  return (
    <Container style={{marginTop: "30px", maxWidth: "750px"}}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HeaderWrapper>
          <Typography variant="h5" justifyContent="center">
            Camera Information
          </Typography>
        </HeaderWrapper>
        {FIELDS_SECTIONS.map((fields, index) => (
          <div key={index} style={{marginBottom: "15px"}}>
            <Grid container spacing={5} alignItems="flex-end">
              {fields.map((data, index) => (
                <Grid key={index} item xs={12} md={data.fullWidth ? 12 : 6}>
                  <FormFieldItem {...data} control={control} errors={errors} />
                </Grid>
              ))}
            </Grid>
            {FIELDS_SECTIONS.length !== index + 1 && (
              <Divider variant="middle" sx={{margin: "30px 0"}} />
            )}
          </div>
        ))}
        <Button type="submit" variant="contained" color="primary" sx={{mt: 5}}>
          Next
        </Button>
      </form>
    </Container>
  );
};
