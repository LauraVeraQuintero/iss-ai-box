import React from "react";
import {useForm} from "react-hook-form";
import {Typography, Button, Container, Divider, Grid} from "@mui/material";

import {FormFieldItem} from "common/FormFieldItem";
import {useFormValuesContext} from "contexts/FormValues";

import {ProjectFormValues} from "./type";
import {FIELDS_SECTIONS} from "./config";

export const ProjectInfoForm = () => {
  const {projectFormValues, setProjectFormValues} = useFormValuesContext();
  const {register, handleSubmit, setValue, formState} = useForm<ProjectFormValues>({
    defaultValues: {...projectFormValues},
  });

  const onSubmit = (values: ProjectFormValues) => {
    setProjectFormValues(values);
    // TODO: Move to new step
  };

  return (
    <Container style={{marginTop: "60px", maxWidth: "700px"}}>
      <Typography variant="h5" sx={{mb: 5}} justifyContent="center">
        Project Information
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
