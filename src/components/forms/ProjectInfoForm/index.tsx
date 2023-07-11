import * as moment from "moment";
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
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {FormField, FormValues, FormValuesKeys} from "./type";
import {SwitchWrapper} from "./styles";
import {FIELDS_SECTIONS} from "./config";

export const FormExample = () => {
  const {
    register,
    handleSubmit,
    setValue,
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
        <DatePicker
          label={label}
          onChange={(value: moment.Moment | null) => {
            setValue(name, value?.toDate() ?? Date());
          }}
          slotProps={{
            textField: {fullWidth: true, variant: "filled", ...register(name, {required})},
          }}
        />
      );
    }

    return (
      <TextField
        label={label}
        type={type}
        variant="filled"
        fullWidth
        {...register(name, {required})}
        error={!!errors[name]}
      />
    );
  };

  return (
    <Container style={{marginTop: "60px", maxWidth: "700px"}}>
      <Typography variant="h5" sx={{mb: 5}} justifyContent="center">
        Project Information
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
                  {getFieldElement(data)}
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
