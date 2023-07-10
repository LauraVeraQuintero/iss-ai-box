import {Button as MuiButton, ButtonProps} from "@mui/material";
import React from "react";

export const Button: React.FC<ButtonProps> = ({children, ...props}) => {
  return (
    <MuiButton {...props} sx={{borderRadius: "10px"}}>
      {children}
    </MuiButton>
  );
};
