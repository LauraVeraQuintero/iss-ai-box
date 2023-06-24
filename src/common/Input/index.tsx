import {Container, StyledInput} from "./styles";
import {Label} from "../TextArea/styles";
import {InputProps} from "../types";
import React from "react";

export const Input: React.FC<InputProps> = ({name, placeholder, onChange}) => (
  <Container>
    <Label htmlFor={name}>{name}</Label>
    <StyledInput placeholder={placeholder} name={name} id={name} onChange={onChange} />
  </Container>
);
