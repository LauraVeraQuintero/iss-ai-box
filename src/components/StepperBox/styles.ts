import styled from "styled-components";
import {StepLabel as MuiStepLabel, Paper as MuiPaper} from "@mui/material";

export const StepLabel = styled(MuiStepLabel)((_) => ({
  "& .MuiStepLabel-label": {
    fontSize: "1rem",
  },
  cursor: "pointer",
}));

export const Paper = styled(MuiPaper)`
  border-radius: 8px;
  margin: 40px;
  padding: 30px;
`;
