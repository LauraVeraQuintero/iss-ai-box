import React from "react";
import {useForm} from "react-hook-form";
import {
  TextField,
  Typography,
  Button,
  Container,
  Checkbox,
  FormControlLabel,
  Divider,
  Grid,
} from "@mui/material";
import {FormField, FormValues, FormValuesKeys} from "./type";
import {SwitchWrapper} from "./styles";
import {FORM_FIELDS_1, FORM_FIELDS_2, FORM_FIELDS_3, FORM_FIELDS_4} from "./config";

export const FormExample = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const getFieldElement = ({label, type, required, name}: FormField<FormValuesKeys>) => {
    if (type === "boolean") {
      return (
        <SwitchWrapper>
          <FormControlLabel {...register(name, {required})} control={<Checkbox />} label={label} />
        </SwitchWrapper>
      );
    }

    if (type === "date") {
      return (
        <TextField
          label={label}
          type={type}
          variant="filled"
          required
          fullWidth
          focused
          {...register(name, {required})}
          error={!!errors[name]}
        />
      );
    }

    return (
      <TextField
        label={label}
        type={type}
        variant="filled"
        required
        fullWidth
        {...register(name, {required})}
        error={!!errors[name]}
      />
    );
  };

  return (
    <Container maxWidth="sm" style={{marginTop: "60px"}}>
      <Typography variant="h5" sx={{mb: 5}}>
        Project Information
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography>Section 1</Typography>
        <Grid container spacing={5}>
          {FORM_FIELDS_1.map((data, index) => (
            <Grid key={index} item xs={12} md={6}>
              {getFieldElement(data)}
            </Grid>
          ))}
        </Grid>
        <Divider variant="middle" sx={{margin: "20px 0"}} />
        <div>
          <Typography>Section 2</Typography>
          <Grid container spacing={5}>
            {FORM_FIELDS_2.map((data, index) => (
              <Grid key={index} item xs={12} md={6}>
                {getFieldElement(data)}
              </Grid>
            ))}
          </Grid>
        </div>
        <Divider variant="middle" sx={{margin: "20px 0"}} />
        <div>
          <Typography>Section 3</Typography>
          <Grid container spacing={5}>
            {FORM_FIELDS_3.map((data, index) => (
              <Grid key={index} item xs={12} md={6}>
                {getFieldElement(data)}
              </Grid>
            ))}
          </Grid>
        </div>
        <Divider variant="middle" sx={{margin: "20px 0"}} />
        <div>
          <Typography>Section 4</Typography>
          <Grid container spacing={5}>
            {FORM_FIELDS_4.map((data, index) => (
              <Grid key={index} item xs={12} md={6}>
                {getFieldElement(data)}
              </Grid>
            ))}
          </Grid>
        </div>
        <Button type="submit" variant="contained" color="primary" sx={{mt: 5}}>
          Submit
        </Button>
      </form>
    </Container>
  );
};
