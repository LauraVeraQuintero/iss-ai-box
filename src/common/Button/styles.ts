import styled from "styled-components";

export const StyledButton = styled("button")<any>`
  background: ${(p) => p.color || "#ffffff"};
  color: ${(p) => (p.fontColor ? p.fontColor : p.color ? "#b4938c" : "#b4938c")};
  font-size: 1.1rem;
  font-weight: 800;
  width: 100%;
  border: ${({noBorder}) => (noBorder ? "unset" : "1px solid #b4938c")};
  border-radius: 4px;
  padding: 8px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: ${({noBorder}) => (noBorder ? "unset" : "1px solid rgba(180, 147, 140, 0.61)")};
    background-color: rgba(180, 147, 140, 0.54);
  }
`;
