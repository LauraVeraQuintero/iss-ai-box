import styled, {css} from "styled-components";

export const SwitchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TooltipWrapper = styled.div<{column?: boolean}>`
  display: flex;
  gap: 10px;

  ${({column}) =>
    column &&
    css`
      align-items: flex-start;
      flex-direction: column;
    `}
`;
