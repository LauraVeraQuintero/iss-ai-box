import styled from "styled-components";

export const Grid = styled.div<{heightInPx: number}>`
  display: flex;
  flex-wrap: wrap;
  flex-flow: column wrap;
  gap: 10px;
  max-height: ${({heightInPx}) => `${heightInPx}px`};
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
`;

export const Wrapper = styled.div`
  > * {
    overflow: auto;
    scrollbar-width: none; /* Firefox */
    /* Safari, Chrome and others */
    ::-webkit-scrollbar {
      display: none;
      background: transparent;
    }
  }
`;
