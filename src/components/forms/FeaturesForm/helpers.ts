import numeral from "numeral";
import {SERVER} from "./config";
export const CURRENCY_FORMAT = "$ 0,0[.]00";

export const formatNumberAsCurrency = (num: number) => {
  return numeral(num).format(CURRENCY_FORMAT);
};

export const boxRecommendation = (points: number) => {
  if (points === 0) return "None";
  else if (points <= 12) return SERVER.server1.name;
  else if (points <= 20) return SERVER.server2.name;
  else return SERVER.server3.name;
};
