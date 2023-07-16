import React from "react";
import {useForm} from "react-hook-form";
import {Typography, Button, Container, Divider, Grid} from "@mui/material";

import {FormFieldItem} from "common/FormFieldItem";
import {useFormContext} from "contexts/FormProvider";

import {CameraFormValues} from "./type";
import {FIELDS_SECTIONS} from "./config";

export const CamerasForm = () => {
  const {cameraFormValues, setCameraFormValues} = useFormContext();
  const {register, handleSubmit, setValue, formState} = useForm<CameraFormValues>({
    defaultValues: {...cameraFormValues},
  });

  const onSubmit = (values: CameraFormValues) => {
    setCameraFormValues(values);
    // TODO: Move to new step
  };

  return (
    <Container style={{marginTop: "60px", maxWidth: "700px"}}>
      <Typography variant="h5" sx={{mb: 5}} justifyContent="center">
        Camera Information
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        {FIELDS_SECTIONS.map((fields, index) => (
          <div key={index}>
            <Grid container spacing={5}>
              {fields.map((data, index) => (
                <Grid key={index} item xs={12} md={data.fullWidth ? 12 : 6}>
                  <FormFieldItem fieldProps={data} formProps={{setValue, register, formState}} />
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
