import React from "react";

import InfoIcon from "@mui/icons-material/Info";
import {Checkbox, FormControlLabel, TextField, MenuItem, FormHelperText} from "@mui/material";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import * as moment from "moment/moment";
import {Control, Controller, FieldErrors, FieldValues, Path, PathValue} from "react-hook-form";

import {SwitchWrapper, TooltipWrapper} from "./styles";
import {FormField} from "models/forms";
import {Tooltip} from "common/Tooltip";

type Props<T extends FieldValues> = FormField<Path<T>> & {
  control: Control<T>;
  errors: FieldErrors<T>;
};

export const FormFieldItem = <T extends FieldValues>({
  type,
  name,
  required,
  label,
  options,
  description,
  control,
  info,
  errors,
}: Props<T>) => {
  const getTooltip = () => {
    if (!info) return;

    return (
      <Tooltip arrow placement="right-start" title={info}>
        <InfoIcon fontSize="small" sx={{color: "gray"}} />
      </Tooltip>
    );
  };

  if (type === "boolean") {
    return (
      <Controller
        control={control}
        name={name}
        rules={{required: false}}
        render={({field}) => (
          <TooltipWrapper>
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
            {getTooltip()}
          </TooltipWrapper>
        )}
      />
    );
  } else if (type === "date") {
    return (
      <Controller
        control={control}
        name={name}
        rules={{required: false}}
        render={({field}) => (
          <TooltipWrapper column>
            {getTooltip()}
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
          </TooltipWrapper>
        )}
      />
    );
  } else if (type === "select" && options) {
    return (
      <Controller
        control={control}
        name={name}
        rules={{required: false}}
        render={({field}) => (
          <TooltipWrapper column>
            {getTooltip()}
            <TextField
              {...field}
              variant="filled"
              label={label}
              fullWidth
              select
              error={Boolean(errors[name])}>
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </TooltipWrapper>
        )}
      />
    );
  }

  return (
    <Controller
      control={control}
      name={name}
      rules={{required: false}}
      render={({field}) => (
        <TooltipWrapper column>
          {getTooltip()}
          <TextField
            {...field}
            label={label}
            type={type}
            variant="filled"
            fullWidth
            error={Boolean(errors[name])}
          />
        </TooltipWrapper>
      )}
    />
  );
};
