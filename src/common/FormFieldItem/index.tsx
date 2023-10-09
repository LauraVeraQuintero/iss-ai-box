import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import { Checkbox, FormControlLabel, TextField, MenuItem, FormHelperText } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import * as moment from "moment/moment";
import { Control, Controller, FieldErrors, FieldValues, Path, PathValue } from "react-hook-form";

import { SwitchWrapper, TooltipWrapper } from "./styles";
import { FormField } from "models/forms";
import { Tooltip } from "common/Tooltip";

type Props<T extends FieldValues> = FormField<Path<T>> & {
  control: Control<T>;
  errors: FieldErrors<T>;
  customError?: string; // Nuevo prop para el mensaje de error específico
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
  customError,
  errors,
}: Props<T>) => {
  const getTooltip = () => {
    if (!info) return;

    return (
      <Tooltip arrow placement="right-start" title={info}>
        <InfoIcon fontSize="small" sx={{ color: "gray" }} />
      </Tooltip>
    );
  };

  const [isErrorVisible, setIsErrorVisible] = React.useState(false);

  const isEmailValid = (email: string) => {
    const emailParts = email.split('@');
    if (emailParts.length !== 2) {
      return false; // No es un correo electrónico válido
    }
    const domain = emailParts[1].toLowerCase();
    return domain !== 'convergint.com';
  };

  React.useEffect(() => {
    setIsErrorVisible(!!errors[name]);
  }, [errors[name]]);

  if (type === "boolean") {
    return (
      <Controller
        control={control}
        name={name}
        rules={{ required }}
        render={({ field }) => (
          <TooltipWrapper>
            <SwitchWrapper>
              <FormControlLabel
                checked={field.value}
                onChange={(event) => {
                  field.onChange(event as React.ChangeEvent<Element>);
                  setIsErrorVisible(false);
                }}
                control={<Checkbox />}
                label={label}
              />
              <FormHelperText sx={{ color: "red" }} error={isErrorVisible}>
                {isErrorVisible ? customError ?? "Field is required" : ""}
              </FormHelperText>
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
        rules={{ required }}
        render={({ field }) => (
          <TooltipWrapper column>
            {getTooltip()}
            <DatePicker
              label={label}
              value={field.value}
              onChange={(value: moment.Moment | null) => {
                field.onChange(value as PathValue<T, Path<T>>);
                setIsErrorVisible(false);
              }}
              slotProps={{
                textField: { fullWidth: true, variant: "filled" },
              }}
            />
            <FormHelperText sx={{ color: "red" }} error={isErrorVisible}>
              {isErrorVisible ? customError ?? "Field is required" : ""}
            </FormHelperText>
          </TooltipWrapper>
        )}
      />
    );
  } else if (type === "select" && options) {
    return (
      <Controller
        control={control}
        name={name}
        rules={{ required }}
        render={({ field }) => (
          <TooltipWrapper column>
            {getTooltip()}
            <TextField
              {...field}
              variant="filled"
              label={label}
              fullWidth
              select
              error={isErrorVisible}
              onChange={(event) => {
                field.onChange(event);
                setIsErrorVisible(false);
              }}
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <FormHelperText sx={{ color: "red" }} error={isErrorVisible}>
              {isErrorVisible ? customError ?? "Field is required" : ""}
            </FormHelperText>
          </TooltipWrapper>
        )}
      />
    );
  } else if (type === "email") {
    return (
      <Controller
        control={control}
        name={name}
        rules={
          name !== "colleagueEmail" ?
          {
            required,
            validate: (value) =>
              isEmailValid(value) || "Email domain must be @convergint.com",
          }
          :
          {
            required,
            validate: (value) =>
              value.endsWith("@convergint.com") ||
              "Email domain must be @convergint.com",
          }
        }
        render={({ field }) => (
          <TooltipWrapper column>
            {getTooltip()}
            <TextField
              {...field}
              label={label}
              type={type}
              variant="filled"
              fullWidth
              error={isErrorVisible ?? Boolean(errors[name])}
              onChange={(event) => {
                field.onChange(event);
                setIsErrorVisible(false);
              }}
            />
            <FormHelperText sx={{ color: "red" }} error={isErrorVisible ?? Boolean(errors[name])}>
              {(isErrorVisible ?? errors[name]) && (customError ?? "Field is required")}
            </FormHelperText>
          </TooltipWrapper>
        )}
      />
    );
  } else {
    return (
      <Controller
        control={control}
        name={name}
        rules={{ required }}
        render={({ field }) => (
          <TooltipWrapper column>
            {getTooltip()}
            <TextField
              {...field}
              label={label}
              type={type}
              variant="filled"
              fullWidth
              error={isErrorVisible}
              onChange={(event) => {
                field.onChange(event);
                setIsErrorVisible(false);
              }}
            />
            <FormHelperText sx={{ color: "red" }} error={isErrorVisible}>
              {isErrorVisible ? customError ?? "Field is required" : ""}
            </FormHelperText>
          </TooltipWrapper>
        )}
      />
    );
  }
};