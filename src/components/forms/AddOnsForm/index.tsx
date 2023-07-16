import React from "react";
import {useForm} from "react-hook-form";
import {Typography, Button, Container, Grid} from "@mui/material";

import {FormFieldItem} from "common/FormFieldItem";

import {AddOnFormValues} from "./type";
import {FORM_FIELDS} from "./config";

export const AddOnsForm = () => {
  const {register, handleSubmit, setValue, formState} = useForm<AddOnFormValues>();

  const onSubmit = (data: AddOnFormValues) => {
    console.log(data);
  };

  return (
    <Container style={{marginTop: "60px", maxWidth: "700px"}}>
      <Typography variant="h5" sx={{mb: 5}} justifyContent="center">
        SMA & Warranty
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={5}>
          {FORM_FIELDS.map((fields, index) => (
            <Grid key={index} item xs={12} md={fields.fullWidth ? 12 : 6}>
              <FormFieldItem fieldProps={fields} formProps={{setValue, register, formState}} />
            </Grid>
          ))}
        </Grid>
        <Button type="submit" variant="contained" color="primary" sx={{mt: 5}}>
          Next
        </Button>
      </form>
    </Container>
  );
};
