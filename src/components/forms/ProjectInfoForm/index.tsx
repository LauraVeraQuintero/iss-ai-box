import React from "react";
import {useForm} from "react-hook-form";
import {Typography, Container, Divider, Grid} from "@mui/material";

import {FormFieldItem} from "common/FormFieldItem";
import {Button} from "common/Button";
import {useFormValuesContext, useStepsContext} from "contexts";

import {ProjectFormValues} from "./type";
import {getDefaultProjectFormValues} from "./helpers";
import {FIELDS_SECTIONS} from "./config";

export const ProjectInfoForm = () => {
  const {projectFormValues, setProjectFormValues} = useFormValuesContext();
  const {setActiveStep} = useStepsContext();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<ProjectFormValues>({
    defaultValues: getDefaultProjectFormValues(projectFormValues),
  });

  const onSubmit = (values: ProjectFormValues) => {
    setProjectFormValues(values);
    setActiveStep(1);
  };

  return (
    <Container style={{marginTop: "60px", maxWidth: "900px"}}>
      <Typography variant="h5" sx={{mb: 5}} justifyContent="center" color="black">
        Project
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        {FIELDS_SECTIONS.map((fields, index) => (
          <div key={index}>
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
        <Container
          style={{
            maxWidth: "100%",
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "35px",
          }}>
          <Button type="submit" variant="contained" color="primary" sx={{mt: 5}}>
            Next
          </Button>
        </Container>
      </form>
    </Container>
  );
};
