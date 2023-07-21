import React from "react";

import {Checkbox, FormControlLabel, TextField, MenuItem, FormHelperText} from "@mui/material";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import * as moment from "moment/moment";
import {Control, Controller, FieldValues, Path, PathValue} from "react-hook-form";

import {SwitchWrapper} from "./styles";
import {FormField} from "models/forms";

type Props<T extends FieldValues> = FormField<Path<T>> & {
  control: Control<T, any>;
};

export const FormFieldItem = <T extends FieldValues>({
  type,
  name,
  required,
  label,
  options,
  description,
  control,
}: Props<T>) => {
  if (type === "boolean") {
    return (
      <Controller
        control={control}
        name={name}
        rules={{required}}
        render={({field}) => (
          <SwitchWrapper>
            <FormControlLabel
              checked={field.value}
              onChange={(event) => {
                field.onChange(event as React.ChangeEvent<Element>);
              }}
              control={<Checkbox />}
              label={label}
            />
            <FormHelperText>{description}</FormHelperText>
          </SwitchWrapper>
        )}
      />
    );
  } else if (type === "date") {
    return (
      <Controller
        control={control}
        name={name}
        rules={{required}}
        render={({field}) => (
          <DatePicker
            label={label}
            value={field.value}
            onChange={(value: moment.Moment | null) => {
              field.onChange(value as PathValue<T, Path<T>>);
            }}
            slotProps={{
              textField: {fullWidth: true, variant: "filled"},
            }}
          />
        )}
      />
    );
  } else if (type === "select" && options) {
    return (
      <Controller
        control={control}
        name={name}
        rules={{required}}
        render={({field}) => (
          <TextField {...field} variant="filled" label={label} fullWidth select>
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
    );
  }

  return (
    <Controller
      control={control}
      name={name}
      rules={{required}}
      render={({field}) => (
        <TextField {...field} label={label} type={type} variant="filled" fullWidth />
      )}
    />
  );
};
