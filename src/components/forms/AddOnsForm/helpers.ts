import {AddOnFormValues} from "./type";

export const getDefaultAddOnFormValues = (formValues?: AddOnFormValues) => {
  return {
    sma: formValues?.sma ?? "1 year",
    warranty: Boolean(formValues?.warranty),
  };
};
