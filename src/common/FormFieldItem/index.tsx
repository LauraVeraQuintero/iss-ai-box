import React from "react";
// import {UseFormReturn} from "react-hook-form";
import {Checkbox, FormControlLabel, TextField, MenuItem, FormHelperText} from "@mui/material";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import * as moment from "moment/moment";

// import {FormField, FormFieldValues} from "models/forms";
import {SwitchWrapper} from "./styles";

type Props = {
  formProps: any;
  fieldProps: any;
};
export const FormFieldItem = ({
  fieldProps: {type, name, required, label, options, description, defaultValue},
  formProps: {
    register,
    formState: {errors},
    setValue,
  },
}: Props) => {
  if (type === "boolean") {
    return (
      <SwitchWrapper>
        <FormControlLabel {...register(name, {required})} control={<Checkbox />} label={label} />
        <FormHelperText>{description}</FormHelperText>
      </SwitchWrapper>
    );
  } else if (type === "date") {
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
  } else if (type === "select" && options) {
    return (
      <TextField
        label={label}
        variant="filled"
        defaultValue={defaultValue}
        fullWidth
        select
        {...register(name, {required})}
        error={!!errors[name]}>
        {options.map((option: any) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
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
