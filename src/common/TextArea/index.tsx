import {StyledTextArea, StyledContainer, Label} from "./styles";
import {InputProps} from "../types";
import React from "react";

export const TextArea: React.FC<InputProps> = ({name, placeholder, onChange}) => (
  <StyledContainer>
    <Label htmlFor={name}>{name}</Label>
    <StyledTextArea placeholder={placeholder} id={name} name={name} onChange={onChange} />
  </StyledContainer>
);
