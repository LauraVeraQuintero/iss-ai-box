import React from "react";
import {useForm} from "react-hook-form";
import {
  Typography,
  Button,
  Container,
  Divider,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {FormFieldItem} from "common/FormFieldItem";
import {useFormValuesContext} from "contexts";

import {FIELDS_SECTIONS} from "./config";
import {getDefaultCameraFormValues} from "./helpers";
import {CameraFormValues} from "./type";
import {HeaderWrapper} from "./styles";

type Props = {
  index: number;
  onRemove: (index: number) => void;
  onSave: (index: number) => void;
};
export const CameraForm: React.FC<Props> = ({index, onSave, onRemove}) => {
  const [expanded, setExpanded] = React.useState<boolean>(true);
  const {cameraFormValues, setCameraFormValues} = useFormValuesContext();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<CameraFormValues>({
    defaultValues: getDefaultCameraFormValues(
      cameraFormValues ? cameraFormValues[index] : undefined,
    ),
  });

  const onSubmit = (values: CameraFormValues) => {
    setCameraFormValues((value) => [...(value || []), values]);
    onSave(index);
  };

  const handleRemove = () => {
    onRemove(index);
  };

  const handleExpand = () => {
    setExpanded((v) => !v);
  };

  const getButtons = () => {
    return (
      <div style={{display: "flex", gap: "10px", maxHeight: "30px"}}>
        <Button size="small" type="submit" variant="contained" color="primary">
          Save
        </Button>
        <Button size="small" variant="contained" color="secondary" onClick={handleRemove}>
          Remove
        </Button>
      </div>
    );
  };

  return (
    <Container style={{marginTop: "30px", maxWidth: "750px"}}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Accordion expanded={expanded} onChange={handleExpand}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel1a-content-${index}`}
            id={`panel1a-header-${index}`}>
            <HeaderWrapper>
              <Typography variant="h5" justifyContent="center">
                Camera Information #{index + 1}
              </Typography>
              {!expanded && getButtons()}
            </HeaderWrapper>
          </AccordionSummary>
          <AccordionDetails>
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
            {expanded && getButtons()}
          </AccordionDetails>
        </Accordion>
      </form>
    </Container>
  );
};
