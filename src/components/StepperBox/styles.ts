import styled from "styled-components";
import {StepLabel as MuiStepLabel, Paper as MuiPaper} from "@mui/material";

export const StepLabel = styled(MuiStepLabel)`
  cursor: pointer;
`;

export const Paper = styled(MuiPaper)`
  border-radius: 12px !important;
  margin: 20px;
  padding: 20px;
`;
