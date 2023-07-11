import styled from "styled-components";

export const Wrapper = styled.div<{height: number}>`
  height: ${({height}) => height}px;
  padding: 20px;
`;

export const OverrideCss = styled.div`
  .MuiDataGrid-root {
    border: none !important;
  }

  .MuiDataGrid-columnHeaderTitle {
    overflow: unset;
    text-overflow: unset;
    white-space: normal;
    line-height: initial;
    font-weight: 600;
    color: #424242;
  }

  .MuiDataGrid-columnHeaderTitleContainer {
    white-space: normal;
  }

  .MuiDataGrid-columnHeaders {
    max-height: fit-content !important;
    line-height: unset !important;
    border-bottom: 2px solid #8a8a8a !important;
  }

  .MuiDataGrid-row {
    height: auto !important;
    max-height: 100% !important;
  }

  .MuiDataGrid-cell {
    max-height: 100% !important;
    white-space: break-spaces !important;
    padding: 10px !important;
  }

  .MuiDataGrid-cellContent {
    overflow-wrap: break-word !important;
  }

  .MuiDataGrid-virtualScroller {
    overflow-y: scroll !important;
  }

  .MuiDataGrid-columnSeparator {
    display: none !important;
  }
`;
