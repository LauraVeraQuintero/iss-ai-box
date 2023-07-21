import React from "react";
import {styled} from "@mui/material/styles";
import {Tooltip as MuiTooltip, tooltipClasses, TooltipProps} from "@mui/material";

export const Tooltip = styled(({className, children, ...props}: TooltipProps) => (
  <MuiTooltip {...props} classes={{popper: className}}>
    {children}
  </MuiTooltip>
))(({theme}) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
}));
