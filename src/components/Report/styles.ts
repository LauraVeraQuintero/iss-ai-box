import styled from "styled-components";

export const Grid = styled.div<{height: number}>`
  display: flex;
  flex-wrap: wrap;
  flex-flow: column wrap;
  gap: 10px;
  max-height: ${({height}) => height}px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
`;
