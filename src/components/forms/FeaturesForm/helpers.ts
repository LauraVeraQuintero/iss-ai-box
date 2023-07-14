import numeral from "numeral";
export const CURRENCY_FORMAT = "$ 0,0[.]00";

export const formatNumberAsCurrency = (num: number) => {
  return numeral(num).format(CURRENCY_FORMAT);
};
