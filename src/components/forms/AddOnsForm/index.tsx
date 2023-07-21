import React from "react";
import {useForm} from "react-hook-form";
import {Typography, Button, Container, Grid} from "@mui/material";

import {FormFieldItem} from "common/FormFieldItem";
import {useFormValuesContext, useStepsContext} from "contexts";

import {FORM_FIELDS} from "./config";
import {getDefaultAddOnFormValues} from "./helpers";
import {AddOnFormValues} from "./type";

export const AddOnsForm = () => {
  const {addOnFormValues, setAddOnFormValues} = useFormValuesContext();
  const {setActiveStep} = useStepsContext();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<AddOnFormValues>({
    defaultValues: getDefaultAddOnFormValues(addOnFormValues),
  });

  const onSubmit = (values: AddOnFormValues) => {
    setAddOnFormValues(values);
    setActiveStep(4);
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
              <FormFieldItem {...fields} control={control} errors={errors} />
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
