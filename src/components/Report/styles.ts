import styled from "styled-components";

export const Grid = styled.div<{height: number}>`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: ${({height}) => height}px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
`;
