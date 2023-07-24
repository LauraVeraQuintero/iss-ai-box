import React from "react";
import {useForm} from "react-hook-form";
import {Button, Container, Divider, Grid} from "@mui/material";

import {FormFieldItem} from "common/FormFieldItem";
import {generateRandomId} from "common/utils/generateRandomId";
import {useFormValuesContext} from "contexts";

import {FIELDS_SECTIONS} from "./config";
import {CameraFormValues} from "./type";
import {getDefaultCameraFormValues} from "./helpers";

type Props = {
  afterSubmit?: () => void;
  onCancel?: () => void;
  cameraIndex?: number;
};

export const CamerasForm: React.FC<Props> = ({afterSubmit, cameraIndex, onCancel}) => {
  const {cameras, setCameras} = useFormValuesContext();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<CameraFormValues>({
    defaultValues: getDefaultCameraFormValues(
      cameraIndex !== undefined ? cameras[cameraIndex] : undefined,
    ),
  });

  const onSubmit = (values: CameraFormValues) => {
    if (cameraIndex !== undefined) {
      setCameras((cameras) =>
        cameras.map((camera, index) =>
          index === cameraIndex ? {id: camera.id, ...values} : camera,
        ),
      );
    } else {
      setCameras((cameras) => cameras.concat({id: generateRandomId(), ...values}));
    }
    afterSubmit?.();
  };

  return (
    <Container style={{maxWidth: "800px"}}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <Container style={{maxWidth: "100%", display: "flex", justifyContent: "flex-end", gap: 15}}>
          {onCancel && (
            <Button variant="outlined" color="primary" sx={{mt: 5}} onClick={onCancel}>
              Cancel
            </Button>
          )}
          <Button type="submit" variant="contained" color="primary" sx={{mt: 5}}>
            Save
          </Button>
        </Container>
      </form>
    </Container>
  );
};
