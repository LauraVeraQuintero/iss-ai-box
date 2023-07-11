import React from "react";
import {useForm} from "react-hook-form";
import {Typography, Button, Container, Divider, Grid} from "@mui/material";

import {FormFieldItem} from "common/FormFieldItem";

import {CameraFormValues} from "./type";
import {FIELDS_SECTIONS} from "./config";

export const CamerasForm = () => {
  const {register, handleSubmit, setValue, formState} = useForm<CameraFormValues>();

  const onSubmit = (data: CameraFormValues) => {
    console.log(data);
  };

  return (
    <Container style={{marginTop: "60px", maxWidth: "700px"}}>
      <Typography variant="h5" sx={{mb: 5}} justifyContent="center">
        Camera Information
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        {FIELDS_SECTIONS.map(({sectionLabel, fields}) => (
          <div key={sectionLabel}>
            <Typography variant="body1" marginBottom="10px">
              {sectionLabel}
            </Typography>
            <Grid container spacing={5}>
              {fields.map((data, index) => (
                <Grid key={index} item xs={12} md={data.fullWidth ? 12 : 6}>
                  <FormFieldItem fieldProps={data} formProps={{setValue, register, formState}} />
                </Grid>
              ))}
            </Grid>
            <Divider variant="middle" sx={{margin: "20px 0"}} />
          </div>
        ))}
        <Button type="submit" variant="contained" color="primary" sx={{mt: 5}}>
          Next
        </Button>
      </form>
    </Container>
  );
};
