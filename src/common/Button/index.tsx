import {StyledButton} from "./styles";
import {ButtonProps} from "../types";

export const Button = ({
  color,
  fixedWidth,
  children,
  onClick,
  noBorder,
  fontColor,
}: ButtonProps) => (
  <StyledButton
    color={color}
    fixedWidth={fixedWidth}
    onClick={onClick}
    noBorder={noBorder}
    fontColor={fontColor}
  >
    {children}
  </StyledButton>
);
