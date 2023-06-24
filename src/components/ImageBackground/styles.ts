import styled from "styled-components";

export const Image = styled.img<{width?: number}>`
  height: 800px;
  width: ${({width}) => (width ? `${width}px` : "100%")};
  overflow-x: hidden;
  position: absolute;
  object-fit: cover;

  @media only screen and (max-width: 1500px) {
    max-height: 700px;
  }

  @media only screen and (max-width: 1030px) {
    max-height: 600px;
  }

  @media only screen and (max-width: 768px) {
    max-height: 500px;
  }
`;

export const Overlay = styled(Image)`
  background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.73));
`;
