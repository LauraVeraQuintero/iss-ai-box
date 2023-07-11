import styled from "styled-components";
import {StepLabel as MuiStepLabel, Paper as MuiPaper} from "@mui/material";

export const StepLabel = styled(MuiStepLabel)`
  cursor: pointer;
`;

export const Paper = styled(MuiPaper)`
  border-radius: 12px !important;
  margin: 40px 60px;
  padding: 20px;

  @media all and (max-width: 700px) {
    margin: 30px;
  }
`;
