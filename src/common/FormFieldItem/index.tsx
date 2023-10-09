import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import { Checkbox, FormControlLabel, TextField, MenuItem, FormHelperText } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "moment";
import { Control, Controller, FieldErrors, FieldValues, Path, PathValue } from "react-hook-form";

import { SwitchWrapper, TooltipWrapper } from "./styles";
import { FormField } from "models/forms";
import { Tooltip } from "common/Tooltip";

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
    const currentDate = moment();
  
    return (
      <Controller
        control={control}
        name={name}
        rules={{
          required,
        }}
        render={({ field }) => (
          <TooltipWrapper column>
            {getTooltip()}
            <DatePicker
              label={label}
              value={currentDate}
              onChange={(value: moment.Moment | null) => {
                field.onChange(value as PathValue<T, Path<T>>);
                setIsErrorVisible(false);
              }}
              slotProps={{
                textField: { fullWidth: true, variant: "filled" },
              }}
              minDate={currentDate}
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
    } else if (type === "tel") {
      return (
        <Controller
          control={control}
          name={name}
          rules={{
            required,
            validate: (value) => {
              const phoneDigits = value.replace(/\D/g, '');
              return phoneDigits.length === 10 || "Phone number must be 10 digits";
            },
          }}
          render={({ field }) => (
            <TooltipWrapper column>
              {getTooltip()}
              <TextField
                {...field}
                label={label}
                type="tel"
                variant="filled"
                fullWidth
                error={isErrorVisible || Boolean(errors[name])}
                onChange={(event) => {
                  const inputVal: any = event.target.value.replace(/\D/g, '');
                  field.onChange(inputVal); 
                  setIsErrorVisible(false);
                }}
              />
              <FormHelperText sx={{ color: "red" }} error={isErrorVisible || Boolean(errors[name])}>
                {(isErrorVisible || errors[name]) && (customError || "Field is required")}
              </FormHelperText>
            </TooltipWrapper>
          )}
        />
      );
    } else if (type === "budget") {
      const defaultValue: any = 0;
      return (
        <Controller
          control={control}
          name={name}
          defaultValue={defaultValue}
          rules={{
            required,
            validate: (value) => {
              // Eliminar el formato de moneda y verificar si es un número positivo
              const numericValue = parseFloat(value.replace(/[^\d.]/g, ''));
              if (isNaN(numericValue) || numericValue < 0) {
                return "Budget must be a positive number";
              }
              return true;
            },
          }}
          render={({ field }) => (
            <TooltipWrapper column>
              {getTooltip()}
              <TextField
                {...field}
                label={label}
                type="text"
                variant="filled"
                fullWidth
                placeholder={name === "budget" ? '$' : ''}
                error={isErrorVisible || Boolean(errors[name])}
                onChange={(event) => {
                  const inputVal: any = event.target.value.replace(/[^\d.]/g, '');
                  field.onChange(inputVal);
                  setIsErrorVisible(false);
                }}
              />
              <FormHelperText sx={{ color: "red" }} error={isErrorVisible || Boolean(errors[name])}>
                {(isErrorVisible || errors[name]) && (customError || "Budget must be a positive number")}
              </FormHelperText>
            </TooltipWrapper>
          )}
        />
      );
    } else if (type === "quantity") {
      const defaultValue: any = 1;
      return (
        <Controller
          control={control}
          name={name}
          defaultValue={defaultValue}
          rules={{
            required,
            validate: (value) => {
              const stringValue = String(value);
              const numericValue = parseFloat(stringValue.replace(/[^\d.]/g, ''));
              if (isNaN(numericValue) || numericValue < 1 || !Number.isInteger(numericValue)) {
                return "Quantity must be a positive integer greater than or equal to 1";
              }
              return true;
            },
          }}
          render={({ field }) => (
            <TooltipWrapper column>
              {getTooltip()}
              <TextField
                {...field}
                label={label}
                type="text"
                variant="filled"
                fullWidth
                error={isErrorVisible || Boolean(errors[name])}
                onChange={(event) => {
                  const inputVal: any = event.target.value.replace(/[^\d]/g, '');
                  field.onChange(inputVal);
                  setIsErrorVisible(false);
                }}
                inputProps={{
                  inputMode: "none",
                }}
              />
              <FormHelperText sx={{ color: "red" }} error={isErrorVisible || Boolean(errors[name])}>
                {(isErrorVisible || errors[name]) && (customError || "Budget must be a positive integer greater than or equal to 1")}
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