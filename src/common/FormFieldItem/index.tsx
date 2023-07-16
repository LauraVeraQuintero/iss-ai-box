import React from "react";

import {Checkbox, FormControlLabel, TextField, MenuItem, FormHelperText} from "@mui/material";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import * as moment from "moment/moment";
import {
  FieldValues,
  FormState,
  Path,
  PathValue,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

import {SwitchWrapper} from "./styles";
import {FormField} from "models/forms";

type Props<T extends FieldValues> = {
  formProps: {
    register: UseFormRegister<T>;
    formState: FormState<T>;
    setValue: UseFormSetValue<T>;
  };
  fieldProps: FormField<Path<T>>;
};

export const FormFieldItem = <T extends FieldValues>({
  fieldProps: {type, name, required, label, options, description, defaultValue},
  formProps: {
    register,
    formState: {errors},
    setValue,
  },
}: Props<T>) => {
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
          setValue(name, (value?.toDate() ?? Date()) as PathValue<T, Path<T>>);
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
        error={Boolean(errors[name])}>
        {options.map((option) => (
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
      error={Boolean(errors[name])}
    />
  );
};
