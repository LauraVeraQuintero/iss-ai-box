import React from "react";
import {useForm} from "react-hook-form";
import {Typography, Button, Container, Divider, Grid} from "@mui/material";

import {FormFieldItem} from "common/FormFieldItem";
import {useFormValuesContext} from "contexts";

import {FIELDS_SECTIONS} from "./config";
import {getDefaultCameraFormValues} from "./helpers";
import {CameraFormValues} from "./type";

type Props = {
  index: number;
  onNext?: () => void;
};
export const CameraForm: React.FC<Props> = ({index}) => {
  const {cameraFormValues, setCameraFormValues} = useFormValuesContext();
  const {
    control,
    handleSubmit,
    formState: {isDirty, dirtyFields, touchedFields},
  } = useForm<CameraFormValues>({
    defaultValues: getDefaultCameraFormValues(
      cameraFormValues ? cameraFormValues[index] : undefined,
    ),
  });

  console.log({isDirty}, {dirtyFields}, {touchedFields});

  const onSubmit = (values: CameraFormValues) => {
    setCameraFormValues((value) => [...(value || []), values]);
  };

  return (
    <Container style={{marginTop: "60px", maxWidth: "700px"}}>
      <Typography variant="h5" sx={{mb: 5}} justifyContent="center">
        Camera Information #{index + 1}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        {FIELDS_SECTIONS.map((fields, index) => (
          <div key={index}>
            <Grid container spacing={5} alignItems="flex-end">
              {fields.map((data, index) => (
                <Grid key={index} item xs={12} md={data.fullWidth ? 12 : 6}>
                  <FormFieldItem {...data} control={control} />
                </Grid>
              ))}
            </Grid>
            {FIELDS_SECTIONS.length !== index + 1 && (
              <Divider variant="middle" sx={{margin: "30px 0"}} />
            )}
          </div>
        ))}
        <Button type="submit" variant="contained" color="primary" sx={{mt: 5}}>
          Save
        </Button>
      </form>
    </Container>
  );
};
